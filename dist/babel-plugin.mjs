// unplugin-civet:/Users/greghuc/workspace/Civet/source/babel-plugin.civet.jsx
import { compile } from "./main.mjs";
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
        src = compile(code, config);
      } else {
        src = code;
      }
      const ast = parse(src, opts);
      return ast;
    }
  };
}
export {
  babel_plugin_civet_default as default
};
