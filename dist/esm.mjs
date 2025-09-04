// unplugin-civet:/Users/greghuc/workspace/Civet/source/esm.civet.jsx
import { readFile } from "fs/promises";
import { dirname } from "path";
import { pathToFileURL, fileURLToPath } from "url";
import { compile, SourceMap } from "./main.mjs";
import { findConfig, loadConfig } from "./config.mjs";
var baseURL = pathToFileURL(process.cwd() + "/").href;
var extensionsRegex = /\.civet$/;
var globalOptions = {};
function initialize(options = {}) {
  return globalOptions = options;
}
function resolve(specifier, context, next) {
  const { parentURL = baseURL } = context;
  if (extensionsRegex.test(specifier)) {
    return {
      shortCircuit: true,
      format: "civet",
      url: new URL(specifier, parentURL).href
    };
  }
  return next(specifier, context);
}
async function load(url, context, next) {
  if (context.format === "civet") {
    const path = fileURLToPath(url);
    const source = await readFile(path, "utf8");
    let loadedConfig;
    let { config } = globalOptions;
    if (config === void 0) {
      config = await findConfig(dirname(path));
    }
    if (config) {
      loadedConfig = await loadConfig(config);
    }
    const options = {
      filename: path,
      sourceMap: true,
      js: true
    };
    if (globalOptions.parseOptions) {
      options.parseOptions = globalOptions.parseOptions;
    }
    if (loadedConfig?.parseOptions) {
      options.parseOptions = { ...options.parseOptions, ...loadedConfig.parseOptions };
    }
    let tsSource, sourceMap;
    try {
      ({ code: tsSource, sourceMap } = await compile(source, options));
    } catch (e) {
      console.error(`Civet failed to compile ${url}:`, e);
      throw e;
    }
    const transpiledUrl = url + ".tsx";
    const result = await next(transpiledUrl, {
      // ts-node won't transpile unless this is module
      // can't use commonjs since we don't rewrite imports
      format: "module",
      // NOTE: Setting the source in the context makes it available when ts-node uses defaultLoad
      source: tsSource
    });
    result.responseURL = (result.responseURL ?? transpiledUrl).replace(/.tsx$/, "");
    result.source = SourceMap.remap(result.source, sourceMap, url, result.responseURL);
    return result;
  }
  return next(url, context);
}
export {
  initialize,
  load,
  resolve
};
