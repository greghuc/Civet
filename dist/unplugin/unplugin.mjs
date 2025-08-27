// unplugin-civet:/Users/greghuc/workspace/Civet/source/unplugin/unplugin.civet.jsx
import { createUnplugin } from "unplugin";
import civet, { lib, SourceMap } from "@danielx/civet";
import { findInDir, loadConfig } from "@danielx/civet/config";
import {
  remapRange,
  flattenDiagnosticMessageText
} from "@danielx/civet/ts-diagnostic";
import * as fs from "fs";
import path from "path";
import * as tsvfs from "@typescript/vfs";
import os from "os";

// source/unplugin/constants.mjs
var DEFAULT_EXTENSIONS = [".mjs", ".js", ".mts", ".ts", ".jsx", ".tsx", ".json"];

// unplugin-civet:/Users/greghuc/workspace/Civet/source/unplugin/unplugin.civet.jsx
var DiagnosticCategory = {};
DiagnosticCategory[DiagnosticCategory["Warning"] = 0] = "Warning";
DiagnosticCategory[DiagnosticCategory["Error"] = 1] = "Error";
DiagnosticCategory[DiagnosticCategory["Suggestion"] = 2] = "Suggestion";
DiagnosticCategory[DiagnosticCategory["Message"] = 3] = "Message";
var postfixRE = /[?#].*$/s;
var isWindows = os.platform() === "win32";
var windowsSlashRE = /\\/g;
var civetSuffix = ".civet";
function extractCivetFilename(id, outputExtension) {
  let postfix = "";
  let filename = id.replace(postfixRE, (match) => {
    postfix = match;
    return "";
  });
  if (filename.endsWith(outputExtension)) {
    filename = filename.slice(0, -outputExtension.length);
  }
  return { filename, postfix };
}
function tryStatSync(file) {
  try {
    return fs.statSync(file, { throwIfNoEntry: false });
  } catch (e) {
    return;
  }
}
function slash(p) {
  return p.replace(windowsSlashRE, "/");
}
function normalizePath(id) {
  return path.posix.normalize(isWindows ? slash(id) : id);
}
function tryFsResolve(file) {
  const fileStat = tryStatSync(file);
  if (fileStat?.isFile()) {
    return normalizePath(file);
  }
  ;
  return;
}
function resolveAbsolutePath(rootDir, id, implicitExtension) {
  const file = path.join(rootDir, id);
  return tryFsResolve(file) || implicitExtension && implicitCivet(file) || tryFsResolve(id) || implicitExtension && implicitCivet(id);
}
function implicitCivet(file) {
  if (tryFsResolve(file)) {
    return;
  }
  const civet2 = file + ".civet";
  if (tryFsResolve(civet2)) {
    return civet2;
  }
  ;
  return;
}
var rawPlugin = (options = {}, meta) => {
  if (options.dts) options.emitDeclaration = options.dts;
  let compileOptions = {};
  let ts = options.ts;
  if (options.js) ts = "civet";
  if (!(ts != null)) {
    console.log('WARNING: You are using the default mode for `options.ts` which is `"civet"`. This mode does not support all TS features. If this is intentional, you should explicitly set `options.ts` to `"civet"`, or choose a different mode.');
    ts = "civet";
  }
  if (!["civet", "esbuild", "tsc", "preserve"].includes(ts)) {
    console.log(`WARNING: Invalid option ts: ${JSON.stringify(ts)}; switching to "civet"`);
    ts = "civet";
  }
  const transformTS = options.emitDeclaration || options.typecheck;
  const outExt = options.outputExtension ?? (ts === "preserve" ? ".tsx" : ".jsx");
  const implicitExtension = options.implicitExtension ?? true;
  let aliasResolver;
  let fsMap = /* @__PURE__ */ new Map();
  const sourceMaps = /* @__PURE__ */ new Map();
  let compilerOptions, compilerOptionsWithSourceMap;
  let rootDir = process.cwd();
  let esbuildOptions;
  let configErrors;
  let configFileNames;
  let ref;
  if (transformTS || ts === "tsc") {
    ref = import("typescript").then(($1) => $1.default);
  } else {
    ref = void 0;
  }
  ;
  const tsPromise = ref;
  const getFormatHost = (sys) => {
    return {
      getCurrentDirectory: () => sys.getCurrentDirectory(),
      getNewLine: () => sys.newLine,
      getCanonicalFileName: sys.useCaseSensitiveFileNames ? (f) => f : (f) => f.toLowerCase()
    };
  };
  const cache = !(options.cache === false) ? /* @__PURE__ */ new Map() : void 0;
  const plugin = {
    name: "unplugin-civet",
    enforce: "pre",
    async buildStart() {
      let civetConfigPath = options.config;
      if (civetConfigPath === void 0) {
        civetConfigPath = await findInDir(process.cwd());
      }
      if (civetConfigPath) {
        compileOptions = await loadConfig(civetConfigPath);
      }
      compileOptions.parseOptions = {
        ...compileOptions.parseOptions,
        ...options.parseOptions
      };
      if (options.threads != null) {
        compileOptions.threads = options.threads;
      }
      if (transformTS || ts === "tsc") {
        let mogrify = function(key) {
          if (key in config && Array.isArray(config[key])) {
            return config[key] = config[key].map((item) => {
              if (!(typeof item === "string")) {
                return item;
              }
              return item.replace(/\.civet\b(?!\.)/g, ".civet.tsx");
            });
          }
          ;
          return;
        };
        const ts2 = await tsPromise;
        const tsConfigPath = ts2.findConfigFile(process.cwd(), ts2.sys.fileExists);
        if (!tsConfigPath) {
          throw new Error("Could not find 'tsconfig.json'");
        }
        const { config, error } = ts2.readConfigFile(
          tsConfigPath,
          ts2.sys.readFile
        );
        if (error) {
          console.error(ts2.formatDiagnostic(error, getFormatHost(ts2.sys)));
          throw error;
        }
        mogrify("files");
        const system = { ...ts2.sys };
        const { readDirectory: systemReadDirectory } = system;
        system.readDirectory = (path2, extensions, excludes, includes, depth) => {
          extensions = [...extensions ?? [], ".civet"];
          return systemReadDirectory(path2, extensions, excludes, includes, depth).map(($2) => $2.endsWith(".civet") ? $2 + ".tsx" : $2);
        };
        const configContents = ts2.parseJsonConfigFileContent(
          config,
          system,
          process.cwd()
        );
        configErrors = configContents.errors;
        configFileNames = configContents.fileNames;
        compilerOptions = {
          ...configContents.options,
          target: ts2.ScriptTarget.ESNext,
          composite: false
        };
        compilerOptions.jsx ??= ts2.JsxEmit.Preserve;
        compilerOptionsWithSourceMap = {
          ...compilerOptions,
          sourceMap: true
        };
        fsMap = /* @__PURE__ */ new Map();
      }
    },
    async buildEnd(useConfigFileNames = false) {
      if (transformTS) {
        const ts2 = await tsPromise;
        const system = tsvfs.createFSBackedSystem(fsMap, process.cwd(), ts2);
        const {
          fileExists: systemFileExists,
          readFile: systemReadFile,
          readDirectory: systemReadDirectory
        } = system;
        system.fileExists = (filename) => {
          if (!filename.endsWith(".civet.tsx")) return systemFileExists(filename);
          if (fsMap.has(filename)) return true;
          return systemFileExists(filename.slice(0, -4));
        };
        system.readDirectory = (path2) => {
          return systemReadDirectory(path2).map(($3) => $3.endsWith(".civet") ? $3 + ".tsx" : $3);
        };
        const tsCompileOptions = {
          ...compileOptions,
          rewriteCivetImports: false,
          rewriteTsImports: true
        };
        system.readFile = (filename, encoding = "utf-8") => {
          if (path.basename(filename) === "package.json") {
            let recurse = function(node) {
              if (node != null && typeof node === "object") {
                for (const key in node) {
                  const value = node[key];
                  if (typeof value === "string") {
                    if (value.endsWith(".civet")) {
                      node[key] = value + ".tsx";
                      modified = true;
                    }
                  } else if (value) {
                    recurse(value);
                  }
                }
              }
            };
            const json = systemReadFile(filename, encoding);
            if (!json) {
              return json;
            }
            const parsed = JSON.parse(json);
            let modified = false;
            recurse(parsed.imports);
            return modified ? JSON.stringify(parsed) : json;
          }
          if (!filename.endsWith(".civet.tsx")) return systemReadFile(filename, encoding);
          if (fsMap.has(filename)) return fsMap.get(filename);
          const civetFilename = filename.slice(0, -4);
          const rawCivetSource = fs.readFileSync(civetFilename, {
            encoding
          });
          const { code: compiledTS, sourceMap } = civet.compile(rawCivetSource, {
            ...tsCompileOptions,
            filename,
            js: false,
            sourceMap: true,
            sync: true
            // TS readFile API seems to need to be synchronous
          });
          fsMap.set(filename, compiledTS);
          sourceMaps.set(filename, sourceMap);
          return compiledTS;
        };
        const host = tsvfs.createVirtualCompilerHost(
          system,
          compilerOptions,
          ts2
        );
        const program = ts2.createProgram({
          rootNames: useConfigFileNames ? configFileNames : [...fsMap.keys()],
          options: compilerOptions,
          host: host.compilerHost
        });
        const diagnostics = ts2.getPreEmitDiagnostics(program).map((diagnostic) => {
          const file = diagnostic.file;
          if (!file) return diagnostic;
          const sourceMap = sourceMaps.get(file.fileName);
          if (!sourceMap) return diagnostic;
          const sourcemapLines = sourceMap.lines ?? sourceMap.data.lines;
          const range = remapRange(
            {
              start: diagnostic.start || 0,
              end: (diagnostic.start || 0) + (diagnostic.length || 1)
            },
            sourcemapLines
          );
          return {
            ...diagnostic,
            messageText: flattenDiagnosticMessageText(diagnostic.messageText),
            length: diagnostic.length,
            start: range.start
          };
        });
        if (configErrors?.length) {
          diagnostics.unshift(...configErrors);
        }
        if (diagnostics.length > 0) {
          console.error(
            ts2.formatDiagnosticsWithColorAndContext(
              diagnostics,
              getFormatHost(ts2.sys)
            )
          );
          if (options.typecheck) {
            let failures = [];
            if (typeof options.typecheck === "string") {
              if (options.typecheck.includes("error")) failures.push(DiagnosticCategory.Error);
              if (options.typecheck.includes("warning")) failures.push(DiagnosticCategory.Warning);
              if (options.typecheck.includes("suggestion")) failures.push(DiagnosticCategory.Suggestion);
              if (options.typecheck.includes("message")) failures.push(DiagnosticCategory.Message);
              if (options.typecheck.includes("all")) {
                failures = { includes: () => true };
              }
            } else {
              failures.push(DiagnosticCategory.Error);
            }
            const count = diagnostics.filter((d) => failures.includes(d.category)).length;
            if (count) {
              const reason = count === diagnostics.length ? count : `${count} out of ${diagnostics.length}`;
              throw new Error(`Aborting build because of ${reason} TypeScript diagnostic${diagnostics.length > 1 ? "s" : ""} above`);
            }
          }
        }
        if (options.emitDeclaration) {
          if (meta.framework === "esbuild" && !esbuildOptions.outdir) {
            throw new Error("Civet unplugin's `emitDeclaration` requires esbuild's `outdir` option to be set;");
          }
          for (const file of fsMap.keys()) {
            const slashed = slash(file);
            if (!(file === slashed)) {
              fsMap.delete(slashed);
            }
          }
          for (const file of fsMap.keys()) {
            const sourceFile = program.getSourceFile(file);
            program.emit(
              sourceFile,
              (filePath, content) => {
                if (options.declarationExtension != null) {
                  if (filePath.endsWith(".d.ts")) {
                    filePath = filePath.slice(0, -5);
                  } else {
                    console.log(`WARNING: No .d.ts extension in ${filePath}`);
                  }
                  if (filePath.endsWith(civetSuffix)) {
                    filePath = filePath.slice(0, -civetSuffix.length);
                  } else {
                    console.log(`WARNING: No .civet extension in ${filePath}`);
                  }
                  filePath += options.declarationExtension;
                }
                let pathFromDistDir = path.relative(
                  compilerOptions.outDir ?? process.cwd(),
                  filePath
                );
                return this.emitFile({
                  source: content,
                  fileName: pathFromDistDir,
                  type: "asset"
                });
              },
              void 0,
              true,
              // emitDtsOnly
              void 0,
              // @ts-ignore @internal interface
              true
            );
          }
        }
      }
    },
    // forceDtsEmit
    resolveId(id, importer, options2) {
      if (aliasResolver != null) {
        id = aliasResolver(id);
      }
      if (/\0/.test(id)) return null;
      const { filename, postfix } = extractCivetFilename(id, outExt);
      let ref1;
      if (path.isAbsolute(filename)) {
        ref1 = resolveAbsolutePath(rootDir, filename, implicitExtension);
      } else {
        ref1 = path.resolve(path.dirname(importer ?? ""), filename);
      }
      ;
      let resolved = ref1;
      if (!resolved) return null;
      if (!resolved.endsWith(civetSuffix)) {
        if (!implicitExtension) return null;
        const implicitId = implicitCivet(resolved);
        if (!implicitId) return null;
        resolved = implicitId;
      }
      if (options2.scan && meta.framework === "vite") {
        resolved = `\0${resolved}`;
      }
      return resolved + outExt + postfix;
    },
    loadInclude(id) {
      return extractCivetFilename(id, outExt).filename.endsWith(civetSuffix);
    },
    async load(id) {
      let { filename } = extractCivetFilename(id, outExt);
      if (!filename.endsWith(civetSuffix)) {
        return null;
      }
      filename = path.resolve(rootDir, filename);
      this.addWatchFile(filename);
      let mtime, cached, resolve;
      if (cache != null) {
        try {
          mtime = (await fs.promises.stat(filename)).mtimeMs;
        } catch (e) {
        }
        if (mtime != null) {
          cached = cache.get(filename);
          if (cached && cached.mtime === mtime) {
            if (cached.promise) {
              await cached.promise;
            }
            let ref2;
            if ((ref2 = cached.result) != null) {
              const result = ref2;
              return result;
            }
          }
          const promise = new Promise((r) => {
            resolve = r;
          });
          cache.set(filename, cached = { mtime, promise });
        }
      }
      try {
        let checkErrors = function() {
          if (civetOptions.errors.length) {
            throw new civet.ParseErrors(civetOptions.errors);
          }
          ;
          return;
        };
        let compiled;
        let sourceMap;
        const civetOptions = {
          ...compileOptions,
          filename: id,
          errors: []
        };
        const rawCivetSource = await fs.promises.readFile(filename, "utf-8");
        const ast = await civet.compile(rawCivetSource, {
          ...civetOptions,
          ast: true
        });
        const civetSourceMap = new SourceMap(rawCivetSource);
        if (ts === "civet") {
          compiled = await civet.generate(ast, {
            ...civetOptions,
            js: true,
            sourceMap: civetSourceMap
          });
          sourceMap = civetSourceMap;
          checkErrors();
        } else {
          const compiledTS = await civet.generate(ast, {
            ...civetOptions,
            js: false,
            sourceMap: civetSourceMap
          });
          checkErrors();
          switch (ts) {
            case "esbuild": {
              const esbuildTransform = (await import("esbuild")).transform;
              const result = await esbuildTransform(compiledTS, {
                jsx: "preserve",
                loader: "tsx",
                sourcefile: id,
                sourcemap: "external"
              });
              compiled = result.code;
              sourceMap = result.map;
              break;
            }
            case "tsc": {
              const tsTranspile = (await tsPromise).transpileModule;
              const result = tsTranspile(compiledTS, {
                compilerOptions: compilerOptionsWithSourceMap
              });
              compiled = result.outputText;
              sourceMap = result.sourceMapText;
              break;
            }
            case "preserve": {
              compiled = compiledTS;
              sourceMap = civetSourceMap;
              break;
            }
          }
        }
        if (transformTS) {
          for (let ref3 = lib.gatherRecursive(ast, ($) => $.type === "ModuleSpecifier"), i = 0, len = ref3.length; i < len; i++) {
            const _spec = ref3[i];
            const spec = _spec;
            if (spec.module?.input) {
              spec.module.token = spec.module.input.replace(/\.([mc])?ts(['"])$/, ".$1js$2");
            }
          }
          const compiledTS = await civet.generate(ast, {
            ...civetOptions,
            js: false,
            sourceMap: civetSourceMap
          });
          checkErrors();
          const tsx = filename + ".tsx";
          fsMap.set(tsx, compiledTS);
          sourceMaps.set(tsx, civetSourceMap);
          const slashed = slash(tsx);
          if (!(tsx === slashed)) {
            fsMap.set(slashed, compiledTS);
            sourceMaps.set(slashed, civetSourceMap);
          }
        }
        const jsonSourceMap = sourceMap && (typeof sourceMap === "string" ? JSON.parse(sourceMap) : sourceMap.json(
          path.relative(rootDir, extractCivetFilename(id, outExt).filename),
          path.relative(rootDir, id)
        ));
        let transformed = {
          code: compiled,
          map: jsonSourceMap
        };
        if (options.transformOutput) {
          transformed = await options.transformOutput(transformed.code, id);
        }
        if (cached != null) {
          cached.result = transformed;
          delete cached.promise;
        }
        return transformed;
      } finally {
        resolve?.();
      }
    },
    esbuild: {
      config(options2) {
        esbuildOptions = options2;
      }
    },
    vite: {
      config(config) {
        rootDir = path.resolve(process.cwd(), config.root ?? "");
        if (implicitExtension) {
          config.resolve ??= {};
          config.resolve.extensions ??= DEFAULT_EXTENSIONS;
          config.resolve.extensions.push(".civet");
        }
      },
      async transformIndexHtml(html) {
        return html.replace(/<!--[^]*?-->|<[^<>]*>/g, (tag) => {
          return tag.replace(/<\s*script\b[^<>]*>/gi, (script) => {
            return script.replace(
              /([:_\p{ID_Start}][:\p{ID_Continue}]*)(\s*=\s*("[^"]*"|'[^']*'|[^\s"'=<>`]*))?/gu,
              (attr, name, value) => {
                return name.toLowerCase() === "src" && value ? attr.replace(
                  /(\.civet)(['"]?)$/,
                  (_, extension, endQuote) => {
                    return `${extension}${outExt}?transform${endQuote}`;
                  }
                ) : attr;
              }
            );
          });
        });
      },
      handleHotUpdate({ file, server, modules }) {
        if (!file.endsWith(".civet")) {
          return;
        }
        const resolvedId = slash(path.resolve(file) + outExt);
        const module = server.moduleGraph.getModuleById(resolvedId);
        if (module) {
          server.moduleGraph.onFileChange(resolvedId);
          return [...modules, module];
        }
        return modules;
      }
    },
    rspack(compiler) {
      if (implicitExtension) {
        compiler.options ??= {};
        compiler.options.resolve ??= {};
        compiler.options.resolve.extensions ??= ["", ".js", ".json", ".wasm"];
        return compiler.options.resolve.extensions.unshift(".civet");
      }
      ;
      return;
    },
    webpack(compiler) {
      if (implicitExtension) {
        compiler.options ??= {};
        compiler.options.resolve ??= {};
        compiler.options.resolve.extensions ??= ["", ".js", ".json", ".wasm"];
        compiler.options.resolve.extensions.unshift(".civet");
      }
      return aliasResolver = (id) => {
        let ref4;
        for (const key in ref4 = compiler.options.resolve.alias) {
          const value = ref4[key];
          if (key.endsWith("$")) {
            if (id === key.slice(0, -1)) {
              return typeof value === "string" ? value : "\0";
            }
          } else {
            if (id === key || id.startsWith(key + "/")) {
              if (!(typeof value === "string")) {
                return "\0";
              }
              return value + id.slice(key.length);
            }
          }
        }
        return id;
      };
    }
  };
  return plugin;
};
var unplugin = createUnplugin(rawPlugin);
var unplugin_civet_default = unplugin;
export {
  unplugin_civet_default as default,
  rawPlugin,
  slash
};
