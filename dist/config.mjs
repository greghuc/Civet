// unplugin-civet:/Users/greghuc/workspace/Civet/source/config.civet.jsx
import path from "path";
import fs from "fs/promises";
import { compile } from "./main.mjs";
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
  const entries = new Set(await fs.readdir(dirPath));
  const pathFor = (name) => path.join(dirPath, name);
  if (entries.has(configDir) && await (async () => {
    try {
      return (await fs.stat(pathFor(configDir))).isDirectory();
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
            return (await fs.stat(pathFor(entry))).isFile();
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
  let parent = path.dirname(curr);
  while (curr !== parent) {
    const configPath = await findInDir(curr);
    if (configPath) {
      return configPath;
    }
    curr = parent;
    parent = path.dirname(curr);
  }
  return;
}
async function loadConfig(pathname) {
  const config = await fs.readFile(pathname, "utf8");
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
    } else if (path.basename(pathname).startsWith("package")) {
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
        js = await compile(config, {
          js: true
        });
      } catch (e) {
        throw new Error(`Error compiling Civet config file ${pathname}: ${e}`);
      }
    } else {
      js = config;
    }
    try {
      const exports = await import(`data:text/javascript,${encodeURIComponent(js)}`);
      data = exports?.default;
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
export {
  config_civet_default as default,
  findConfig,
  findInDir,
  loadConfig
};
