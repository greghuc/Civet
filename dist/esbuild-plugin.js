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

// unplugin-civet:/Users/greghuc/workspace/Civet/source/esbuild-plugin.civet.jsx
var esbuild_plugin_civet_exports = {};
__export(esbuild_plugin_civet_exports, {
  default: () => esbuild_plugin_civet_default
});
module.exports = __toCommonJS(esbuild_plugin_civet_exports);
var import_promises = require("fs/promises");
var import_path = __toESM(require("path"));
var import_main = require("./main.js");
var civet = function(options = {}) {
  const {
    filter = /\.civet$/,
    inlineMap = true,
    js = true,
    next
  } = options;
  let nextTransform;
  let tmpPath;
  if (next) {
    next.setup({
      onEnd() {
        ;
      },
      onStart() {
        ;
      },
      resolve() {
        ;
      },
      onResolve() {
        ;
      },
      initialOptions() {
        ;
      },
      esbuild() {
        ;
      },
      onLoad(_, handler) {
        return nextTransform = handler;
      }
    });
  }
  return {
    name: "civet",
    setup(build) {
      build.onStart(async function() {
        if (next) {
          const { tmpdir } = require("os");
          tmpPath = await (0, import_promises.mkdtemp)(import_path.default.join(tmpdir(), "civet-"));
        }
        return;
      });
      build.onEnd(async function() {
        if (tmpPath) {
          await (0, import_promises.rmdir)(tmpPath, { recursive: true });
        }
        return;
      });
      return build.onLoad({ filter }, async function(args) {
        try {
          const source = await (0, import_promises.readFile)(args.path, "utf8");
          const filename = import_path.default.relative(process.cwd(), args.path);
          const compiled = await (0, import_main.compile)(source, {
            filename,
            inlineMap,
            js
          });
          if (next && tmpPath) {
            const outputFileName = filename + js ? ".jsx" : ".tsx";
            const outputFilePath = import_path.default.join(tmpPath, outputFileName);
            await (0, import_promises.writeFile)(outputFilePath, compiled);
            return await nextTransform({
              ...args,
              path: outputFilePath
            });
          }
          return {
            contents: compiled
          };
        } catch (e) {
          return {
            errors: [{
              text: e.message,
              location: {
                file: args.path,
                namespace: args.namespace,
                line: e.line,
                column: e.column
              },
              detail: e
            }]
          };
        }
      });
    }
  };
};
var defaultPlugin = civet();
civet.setup = defaultPlugin.setup;
var esbuild_plugin_civet_default = civet;
module.exports = module.exports.default;
