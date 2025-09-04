var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// unplugin-civet:/Users/greghuc/workspace/Civet/source/config.civet.jsx
var config_civet_exports = {};
__export(config_civet_exports, {
  default: () => config_civet_default,
  findConfig: () => findConfig,
  findInDir: () => findInDir,
  loadConfig: () => loadConfig
});
module.exports = __toCommonJS(config_civet_exports);
var import_path = __toESM(require("path"));
var import_promises = __toESM(require("fs/promises"));
var import_main = require("./main.js");
var configNames = [
  "\u{1F408}",
  "civetconfig",
  "civet.config",
  "package"
];
var configExtensions = [
  ".civet",
  ".js",
  ".yaml",
  ".yml",
  ".json"
];
var configDir = ".config";
async function findInDir(dirPath) {
  const entries = new Set(await import_promises.default.readdir(dirPath));
  const pathFor = (name) => import_path.default.join(dirPath, name);
  if (entries.has(configDir) && await (async () => {
    try {
      return (await import_promises.default.stat(pathFor(configDir))).isDirectory();
    } catch (e) {
      return;
    }
  })()) {
    const found = await findInDir(pathFor(configDir));
    if (found) {
      return found;
    }
  }
  for (let i = 0, len = configNames.length; i < len; i++) {
    const configName = configNames[i];
    for (let i1 = 0, len1 = configExtensions.length; i1 < len1; i1++) {
      const extension = configExtensions[i1];
      for (let ref = ["." + configName + extension, configName + extension], i2 = 0, len2 = ref.length; i2 < len2; i2++) {
        const entry = ref[i2];
        if (entries.has(entry) && await (async () => {
          try {
            return (await import_promises.default.stat(pathFor(entry))).isFile();
          } catch (e) {
            return;
          }
        })()) {
          return pathFor(entry);
        }
      }
    }
  }
  return;
}
async function findConfig(startDir) {
  let curr = startDir;
  let parent = import_path.default.dirname(curr);
  while (curr !== parent) {
    const configPath = await findInDir(curr);
    if (configPath) {
      return configPath;
    }
    curr = parent;
    parent = import_path.default.dirname(curr);
  }
  return;
}
async function loadConfig(pathname) {
  const config = await import_promises.default.readFile(pathname, "utf8");
  let data = {};
  if (pathname.endsWith(".json")) {
    let json;
    try {
      json = JSON.parse(config);
    } catch (e) {
      throw new Error(`Error parsing JSON config file ${pathname}: ${e}`);
    }
    if ("civetConfig" in json) {
      data = json.civetConfig;
    } else if (import_path.default.basename(pathname).startsWith("package")) {
      return {};
    } else {
      data = json;
    }
  } else if (/\.ya?ml$/.test(pathname)) {
    try {
      const { default: YAML } = await import("yaml");
      const yaml = YAML.parse(config);
      data = yaml.civetConfig ?? yaml;
    } catch (e) {
      throw new Error(`Error parsing YAML config file ${pathname}: ${e}`);
    }
  } else {
    let js;
    if (pathname.endsWith(".civet")) {
      try {
        js = await (0, import_main.compile)(config, {
          js: true
        });
      } catch (e) {
        throw new Error(`Error compiling Civet config file ${pathname}: ${e}`);
      }
    } else {
      js = config;
    }
    try {
      const exports2 = await import(`data:text/javascript,${encodeURIComponent(js)}`);
      data = exports2?.default;
    } catch (e) {
      throw new Error(`Error running Civet config file ${pathname}: ${e}`);
    }
  }
  if (!(data != null && typeof data === "object" && !Array.isArray(data))) {
    throw new Error(`Civet config file must export an object, not ${Array.isArray(data) ? "array" : data != null ? typeof data : "null"}`);
  }
  delete data?.parseOptions?.comptime;
  return data;
}
var config_civet_default = {
  findConfig,
  findInDir,
  loadConfig
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  findConfig,
  findInDir,
  loadConfig
});
