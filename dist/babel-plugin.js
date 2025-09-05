var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// unplugin-civet:/Users/greghuc/workspace/Civet/source/babel-plugin.civet.jsx
var babel_plugin_civet_exports = {};
__export(babel_plugin_civet_exports, {
  default: () => babel_plugin_civet_default
});
module.exports = __toCommonJS(babel_plugin_civet_exports);
var import_main = require("./main.js");
function babel_plugin_civet_default(api, civetOptions) {
  return {
    parserOverride(code, opts, parse) {
      let src;
      if (opts.sourceFileName.endsWith(".civet")) {
        const config = {
          ...civetOptions,
          filename: opts.sourceFileName,
          sourceMap: false,
          sync: true
          // parserOverride API is synchronous
        };
        config.inlineMap ??= true;
        config.js = true;
        src = (0, import_main.compile)(code, config);
      } else {
        src = code;
      }
      const ast = parse(src, opts);
      return ast;
    }
  };
}
