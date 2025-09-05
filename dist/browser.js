var Civet = (() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
  var __require = /* @__PURE__ */ ((x) => typeof require < "u" ? require : typeof Proxy < "u" ? new Proxy(x, {
    get: (a, b) => (typeof require < "u" ? require : a)[b]
  }) : x)(function(x) {
    if (typeof require < "u") return require.apply(this, arguments);
    throw Error('Dynamic require of "' + x + '" is not supported');
  });
  var __esm = (fn, res) => function() {
    return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
  };
  var __commonJS = (cb, mod) => function() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: !0 });
  }, __copyProps = (to, from, except, desc) => {
    if (from && typeof from == "object" || typeof from == "function")
      for (let key of __getOwnPropNames(from))
        !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
    mod
  )), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

  // node_modules/@danielx/hera/dist/machine.js
  var require_machine = __commonJS({
    "node_modules/@danielx/hera/dist/machine.js"(exports, module) {
      "use strict";
      var __defProp2 = Object.defineProperty, __getOwnPropDesc2 = Object.getOwnPropertyDescriptor, __getOwnPropNames2 = Object.getOwnPropertyNames, __hasOwnProp2 = Object.prototype.hasOwnProperty, __export2 = (target, all) => {
        for (var name in all)
          __defProp2(target, name, { get: all[name], enumerable: !0 });
      }, __copyProps2 = (to, from, except, desc) => {
        if (from && typeof from == "object" || typeof from == "function")
          for (let key of __getOwnPropNames2(from))
            !__hasOwnProp2.call(to, key) && key !== except && __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
        return to;
      }, __toCommonJS2 = (mod) => __copyProps2(__defProp2({}, "__esModule", { value: !0 }), mod), machine_exports = {};
      __export2(machine_exports, {
        $C: () => $C2,
        $E: () => $E2,
        $EVENT: () => $EVENT2,
        $EVENT_C: () => $EVENT_C2,
        $EXPECT: () => $EXPECT2,
        $L: () => $L249,
        $N: () => $N2,
        $P: () => $P2,
        $Q: () => $Q2,
        $R: () => $R104,
        $R$0: () => $R$02,
        $S: () => $S2,
        $T: () => $T2,
        $TEXT: () => $TEXT2,
        $TR: () => $TR2,
        $TS: () => $TS2,
        $TV: () => $TV2,
        $Y: () => $Y2,
        ParseError: () => ParseError2,
        Validator: () => Validator2
      });
      module.exports = __toCommonJS2(machine_exports);
      function $EXPECT2(parser2, expectation) {
        return function(ctx, state2) {
          let result = parser2(ctx, state2);
          return result || ctx.fail(state2.pos, expectation), result;
        };
      }
      function $L249(str) {
        return function(_ctx, state2) {
          let { input, pos } = state2, { length } = str, end = pos + length;
          if (input.substring(pos, end) === str)
            return {
              loc: {
                pos,
                length
              },
              pos: end,
              value: str
            };
        };
      }
      function $R104(regExp) {
        return function(_ctx, state2) {
          let { input, pos } = state2;
          regExp.lastIndex = state2.pos;
          let l, m, v;
          if (m = input.match(regExp))
            return v = m[0], l = v.length, {
              loc: {
                pos,
                length: l
              },
              pos: pos + l,
              value: m
            };
        };
      }
      function $C2(...terms) {
        return (ctx, state2) => {
          let i = 0, l = terms.length;
          for (; i < l; ) {
            let r = terms[i++](ctx, state2);
            if (r)
              return r;
          }
        };
      }
      function $S2(...terms) {
        return (ctx, state2) => {
          let { input, pos } = state2, i = 0, value, results = [], s = pos, l = terms.length;
          for (; i < l; ) {
            let r = terms[i++](ctx, { input, pos });
            if (r)
              ({ pos, value } = r), results.push(value);
            else
              return;
          }
          return {
            loc: {
              pos: s,
              length: pos - s
            },
            pos,
            value: results
          };
        };
      }
      function $E2(fn) {
        return (ctx, state2) => {
          let r = fn(ctx, state2);
          if (r)
            return r;
          let { pos } = state2;
          return {
            loc: {
              pos,
              length: 0
            },
            pos,
            value: void 0
          };
        };
      }
      function $Q2(fn) {
        return (ctx, state2) => {
          let { input, pos } = state2, value, s = pos, results = [];
          for (; ; ) {
            let prevPos = pos, r = fn(ctx, { input, pos });
            if (!r || ({ pos, value } = r, pos === prevPos))
              break;
            results.push(value);
          }
          return {
            loc: {
              pos: s,
              length: pos - s
            },
            pos,
            value: results
          };
        };
      }
      function $P2(fn) {
        return (ctx, state2) => {
          let { input, pos: s } = state2, value, first = fn(ctx, state2);
          if (!first)
            return;
          let { pos } = first, results = [first.value];
          for (; ; ) {
            let prevPos = pos, r = fn(ctx, { input, pos });
            if (!r || ({ pos, value } = r, pos === prevPos))
              break;
            results.push(value);
          }
          return {
            loc: {
              pos: s,
              length: pos - s
            },
            value: results,
            pos
          };
        };
      }
      function $TEXT2(fn) {
        return (ctx, state2) => {
          let newState = fn(ctx, state2);
          if (newState)
            return newState.value = state2.input.substring(state2.pos, newState.pos), newState;
        };
      }
      function $N2(fn) {
        return (ctx, state2) => {
          if (!fn(ctx, state2))
            return {
              loc: {
                pos: state2.pos,
                length: 0
              },
              value: void 0,
              pos: state2.pos
            };
        };
      }
      function $Y2(fn) {
        return (ctx, state2) => {
          if (fn(ctx, state2))
            return {
              loc: {
                pos: state2.pos,
                length: 0
              },
              value: void 0,
              pos: state2.pos
            };
        };
      }
      function $T2(parser2, fn) {
        return function(ctx, state2) {
          let result = parser2(ctx, state2);
          if (!result)
            return;
          if (ctx.tokenize)
            return result;
          let { value } = result, mappedValue = fn(value);
          return result.value = mappedValue, result;
        };
      }
      function $TR2(parser2, fn) {
        return function(ctx, state2) {
          let result = parser2(ctx, state2);
          if (!result)
            return;
          if (ctx.tokenize)
            return result;
          let { loc, value } = result, mappedValue = fn(SKIP, loc, ...value);
          if (mappedValue !== SKIP)
            return result.value = mappedValue, result;
        };
      }
      function $TS2(parser2, fn) {
        return function(ctx, state2) {
          let result = parser2(ctx, state2);
          if (!result)
            return;
          if (ctx.tokenize)
            return result;
          let { loc, value } = result, mappedValue = fn(SKIP, loc, value, ...value);
          if (mappedValue !== SKIP)
            return result.value = mappedValue, result;
        };
      }
      function $TV2(parser2, fn) {
        return function(ctx, state2) {
          let result = parser2(ctx, state2);
          if (!result)
            return;
          if (ctx.tokenize)
            return result;
          let { loc, value } = result, mappedValue = fn(SKIP, loc, value, value);
          if (mappedValue !== SKIP)
            return result.value = mappedValue, result;
        };
      }
      function $R$02(parser2) {
        return function(ctx, state2) {
          let result = parser2(ctx, state2);
          if (!result)
            return;
          let value = result.value[0];
          return result.value = value, result;
        };
      }
      function $EVENT2(ctx, state2, name, fn) {
        let eventData, enter, exit;
        if (enter = ctx.enter) {
          let result2 = enter(name, state2);
          if (result2) {
            if ("cache" in result2)
              return result2.cache;
            eventData = result2.data;
          }
        }
        let result = fn(ctx, state2);
        return result && ctx.tokenize && (result = $TOKEN(name, state2, result)), (exit = ctx.exit) && exit(name, state2, result, eventData), result;
      }
      function $EVENT_C2(ctx, state2, name, fns) {
        let eventData, enter, exit;
        if (enter = ctx.enter) {
          let result2 = enter(name, state2);
          if (result2) {
            if ("cache" in result2)
              return result2.cache;
            eventData = result2.data;
          }
        }
        let result, i = 0, l = fns.length;
        for (; !result && i < l && !(result = fns[i](ctx, state2)); )
          i++;
        return result && ctx.tokenize && (result = $TOKEN(name, state2, result)), (exit = ctx.exit) && exit(name, state2, result, eventData), result;
      }
      function $TOKEN(name, state2, newState) {
        if (newState)
          return newState.value = {
            type: name,
            children: [newState.value].flat(),
            token: state2.input.substring(state2.pos, newState.pos),
            loc: newState.loc
          }, newState;
      }
      var SKIP = {};
      function Validator2() {
        let failHintRegex = /\S+|\s+|$/y, failExpected = Array(16), failIndex = 0, maxFailPos = 0;
        function fail(pos, expected) {
          pos < maxFailPos || (pos > maxFailPos && (maxFailPos = pos, failExpected.length = failIndex = 0), failExpected[failIndex++] = expected);
        }
        function location(input, pos) {
          let [line, column] = input.split(/\n|\r\n|\r/).reduce(([row, col], line2) => {
            let l = line2.length + 1;
            return pos >= l ? (pos -= l, [row + 1, 1]) : pos >= 0 ? (col += pos, pos = -1, [row, col]) : [row, col];
          }, [1, 1]);
          return [line, column];
        }
        function validate(input, result, { filename: filename2 }) {
          if (result && result.pos === input.length)
            return result.value;
          let expectations = Array.from(new Set(failExpected.slice(0, failIndex))), l = location(input, maxFailPos), [line, column] = l;
          if (result && result.pos > maxFailPos)
            throw l = location(input, result.pos), new Error(`${filename2}:${line}:${column} Unconsumed input at #{l}

${input.slice(result.pos)}
`);
          if (expectations.length) {
            failHintRegex.lastIndex = maxFailPos;
            let [hint] = input.match(failHintRegex);
            throw hint.length ? hint = JSON.stringify(hint) : hint = "EOF", new ParseError2("Failed to parse", `Expected:
	${expectations.join(`
	`)}
Found: ${hint}
`, filename2, line, column, maxFailPos);
          }
          throw result ? new Error(`
Unconsumed input at ${l}

${input.slice(result.pos)}
`) : new Error("No result");
        }
        function reset() {
          failIndex = 0, maxFailPos = 0, failExpected.length = 0;
        }
        return {
          fail,
          validate,
          reset
        };
      }
      var ParseError2 = class extends Error {
        constructor(header, body, filename2, line, column, offset) {
          let message = `${filename2}:${line}:${column} ${header}`;
          body && (message += `
${body}`), super(message), this.header = header, this.body = body, this.filename = filename2, this.line = line, this.column = column, this.offset = offset, this.name = "ParseError", this.message = message;
        }
      };
    }
  });

  // source/browser-shim.civet
  function dirname(path) {
    return path.replace(/[^]*\//, "");
  }
  function resolve(path) {
    return path;
  }
  function createRequire(path) {
    return (id) => {
      throw new ReferenceError(
        "Civet comptime does not support 'require' on this platform"
      );
    };
  }
  var browser_shim_default, init_browser_shim = __esm({
    "source/browser-shim.civet"() {
      "use strict";
      browser_shim_default = {
        dirname,
        resolve,
        createRequire
      };
    }
  });

  // unplugin-civet:/Users/greghuc/workspace/Civet/source/browser.civet.jsx
  var browser_civet_exports = {};
  __export(browser_civet_exports, {
    ParseError: () => import_lib2.ParseError,
    ParseErrors: () => ParseErrors,
    SourceMap: () => SourceMap2,
    autoRunScripts: () => autoRunScripts,
    compile: () => compile,
    generate: () => generate_civet_default,
    isCompileError: () => isCompileError,
    lib: () => lib_civet_exports,
    parse: () => parse,
    parseProgram: () => parseProgram,
    prune: () => prune,
    runScript: () => runScript,
    runScripts: () => runScripts,
    sourcemap: () => sourcemap_civet_exports
  });

  // source/parser.hera
  var import_lib2 = __toESM(require_machine());

  // unplugin-civet:/Users/greghuc/workspace/Civet/source/parser/lib.civet.jsx
  var lib_civet_exports = {};
  __export(lib_civet_exports, {
    addPostfixStatement: () => addPostfixStatement,
    adjustBindingElements: () => adjustBindingElements,
    adjustIndexAccess: () => adjustIndexAccess,
    append: () => append,
    attachPostfixStatementAsExpression: () => attachPostfixStatementAsExpression,
    blockWithPrefix: () => blockWithPrefix,
    braceBlock: () => braceBlock,
    bracedBlock: () => bracedBlock,
    convertArrowFunctionToMethod: () => convertArrowFunctionToMethod,
    convertFunctionToMethod: () => convertFunctionToMethod,
    convertNamedImportsToObject: () => convertNamedImportsToObject,
    convertObjectToJSXAttributes: () => convertObjectToJSXAttributes,
    convertWithClause: () => convertWithClause,
    dedentBlockString: () => dedentBlockString,
    dedentBlockSubstitutions: () => dedentBlockSubstitutions,
    deepCopy: () => deepCopy,
    duplicateBlock: () => duplicateBlock,
    dynamizeImportDeclaration: () => dynamizeImportDeclaration,
    dynamizeImportDeclarationExpression: () => dynamizeImportDeclarationExpression,
    expressionizeTypeIf: () => expressionizeTypeIf,
    forRange: () => forRange,
    gatherBindingCode: () => gatherBindingCode,
    gatherBindingPatternTypeSuffix: () => gatherBindingPatternTypeSuffix,
    gatherRecursive: () => gatherRecursive,
    gatherRecursiveAll: () => gatherRecursiveAll,
    gatherRecursiveWithinFunction: () => gatherRecursiveWithinFunction,
    getHelperRef: () => getHelperRef,
    getIndentLevel: () => getIndentLevel,
    getPrecedence: () => getPrecedence,
    getTrimmingSpace: () => getTrimmingSpace,
    hasAwait: () => hasAwait,
    hasExportDeclaration: () => hasExportDeclaration,
    hasImportDeclaration: () => hasImportDeclaration,
    hasTrailingComment: () => hasTrailingComment,
    hasYield: () => hasYield,
    insertTrimmingSpace: () => insertTrimmingSpace,
    isComma: () => isComma,
    isEmptyBareBlock: () => isEmptyBareBlock,
    isFunction: () => isFunction,
    isWhitespaceOrEmpty: () => isWhitespaceOrEmpty,
    lastAccessInCallExpression: () => lastAccessInCallExpression,
    literalValue: () => literalValue,
    makeAmpersandFunction: () => makeAmpersandFunction,
    makeEmptyBlock: () => makeEmptyBlock,
    makeExpressionStatement: () => makeExpressionStatement,
    makeGetterMethod: () => makeGetterMethod,
    makeLeftHandSideExpression: () => makeLeftHandSideExpression,
    makeRef: () => makeRef,
    maybeRef: () => maybeRef,
    maybeRefAssignment: () => maybeRefAssignment,
    modifyString: () => modifyString,
    negateCondition: () => negateCondition,
    precedenceCustomDefault: () => precedenceCustomDefault,
    precedenceStep: () => precedenceStep,
    prepend: () => prepend,
    processAssignmentDeclaration: () => processAssignmentDeclaration,
    processBinaryOpExpression: () => processBinaryOpExpression,
    processCallMemberExpression: () => processCallMemberExpression,
    processCoffeeDo: () => processCoffeeDo,
    processCoffeeInterpolation: () => processCoffeeInterpolation,
    processForInOf: () => processForInOf,
    processProgram: () => processProgram,
    processProgramAsync: () => processProgramAsync,
    processRangeExpression: () => processRangeExpression,
    processTryBlock: () => processTryBlock,
    processUnaryExpression: () => processUnaryExpression,
    processUnaryNestedExpression: () => processUnaryNestedExpression,
    quoteString: () => quoteString,
    reorderBindingRestProperty: () => reorderBindingRestProperty,
    replaceNode: () => replaceNode,
    replaceNodes: () => replaceNodes,
    skipImplicitArguments: () => skipImplicitArguments,
    stripTrailingImplicitComma: () => stripTrailingImplicitComma,
    trimFirstSpace: () => trimFirstSpace,
    typeOfJSX: () => typeOfJSX,
    wrapIIFE: () => wrapIIFE,
    wrapTypeInPromise: () => wrapTypeInPromise
  });

  // unplugin-civet:/Users/greghuc/workspace/Civet/source/parser/util.civet.jsx
  function len(arr, length) {
    return arr.length === length;
  }
  var assert = {
    equal(a, b, msg) {
      if (a !== b)
        throw new Error(`Assertion failed [${msg}]: ${a} !== ${b}`);
    },
    notEqual(a, b, msg) {
      if (a === b)
        throw new Error(`Assertion failed [${msg}]: ${a} === ${b}`);
    },
    notNull(a, msg) {
      if (a == null)
        throw new Error(`Assertion failed [${msg}]: got null`);
    }
  };
  function addParentPointers(node, parent) {
    if (node != null && typeof node == "object") {
      if (Array.isArray(node)) {
        for (let child of node)
          addParentPointers(child, parent);
        return;
      }
      if (node = node, parent != null && (node.parent = parent), node.children)
        for (let ref = node.children, i1 = 0, len1 = ref.length; i1 < len1; i1++) {
          let child = ref[i1];
          addParentPointers(child, node);
        }
    }
  }
  function clone(node) {
    return removeParentPointers(node), deepCopy(node);
  }
  function removeParentPointers(node) {
    if (node != null && typeof node == "object") {
      if (Array.isArray(node)) {
        for (let child of node)
          removeParentPointers(child);
        return;
      }
      if (node.parent = null, node.children)
        for (let child of node.children)
          removeParentPointers(child);
    }
  }
  function maybeWrap(node, parent) {
    return isASTNodeObject(node) || updateParentPointers(node = {
      type: "Wrapper",
      children: [node],
      parent
    }), node;
  }
  function maybeUnwrap(node) {
    return node?.type === "Wrapper" ? node.children[0] : node;
  }
  function isASTNodeObject(node) {
    return typeof node == "object" && node != null && !Array.isArray(node);
  }
  function isParent(node) {
    return node != null && node.children != null;
  }
  function isToken(node) {
    return node != null && node.token != null;
  }
  function isEmptyBareBlock(node) {
    if (node?.type !== "BlockStatement") return !1;
    let { bare, expressions } = node;
    return bare && (Array.isArray(expressions) && len(expressions, 0) || Array.isArray(expressions) && len(expressions, 1) && Array.isArray(expressions[0]) && expressions[0].length >= 2 && typeof expressions[0][1] == "object" && expressions[0][1] != null && "type" in expressions[0][1] && expressions[0][1].type === "EmptyStatement");
  }
  function isFunction(node) {
    if (node && typeof node == "object" && "type" in node) {
      let { type } = node;
      return type === "FunctionExpression" || type === "ArrowFunction" || type === "MethodDefinition";
    }
    return !1;
  }
  var statementTypes = /* @__PURE__ */ new Set([
    "BlockStatement",
    "BreakStatement",
    "ComptimeStatement",
    "ContinueStatement",
    "DebuggerStatement",
    "Declaration",
    "DoStatement",
    "ForStatement",
    "IfStatement",
    "IterationStatement",
    "LabelledStatement",
    "ReturnStatement",
    "SwitchStatement",
    "ThrowStatement",
    "TryStatement"
  ]);
  function isStatement(node) {
    return isASTNodeObject(node) && node.type != null && // forbid leaf
    statementTypes.has(node.type);
  }
  function isWhitespaceOrEmpty(node) {
    return node ? node.type === "Ref" ? !1 : node.token ? /^\s*$/.test(node.token) : (node.children && (node = node.children), node.length ? typeof node == "string" ? /^\s*$/.test(node) : Array.isArray(node) ? node.every(isWhitespaceOrEmpty) : !1 : !0) : !0;
  }
  function firstNonSpace(node) {
    if (node != null) {
      if (Array.isArray(node)) {
        for (let i2 = 0, len22 = node.length; i2 < len22; i2++) {
          let child = node[i2], ref1;
          if (ref1 = firstNonSpace(child))
            return ref1;
        }
        return;
      } else if (isParent(node)) {
        let ref2;
        return (ref2 = firstNonSpace(node.children)) ? ref2 : node;
      } else if (isToken(node)) {
        let m;
        if (m = node.token, typeof m == "string" && /^[ \t]*$/.test(m))
          return;
      } else if (typeof node == "string" && typeof node == "string" && /^[ \t]*$/.test(node))
        return;
      return node;
    }
  }
  function isExit(node) {
    if (node == null)
      return !1;
    let ref3, ref4;
    switch (node.type) {
      // Exit from normal flow
      case "ReturnStatement":
      case "ThrowStatement":
      case "BreakStatement":
      case "ContinueStatement":
        return !0;
      // if checks then and else clause
      case "IfStatement":
        return (
          // `insertReturn` for IfStatement adds a return to children
          // when there's no else block
          (ref3 = node.children)[ref3.length - 1]?.type === "ReturnStatement" || (ref4 = node.children)[ref4.length - 1]?.[1]?.type === "ReturnStatement" || isExit(node.then) && isExit(node.else?.block)
        );
      case "PatternMatchingStatement":
        return isExit(node.children[0][1]);
      case "SwitchStatement":
        return (
          // Every clause should exit, or continue to next clause
          (() => {
            let results = !0;
            for (let clause of node.caseBlock.clauses) {
              let m1;
              if (m1 = clause.type, m1 === "CaseClause" || m1 === "WhenClause" || m1 === "DefaultClause") {
                if (!(!(clause.type === "WhenClause" && clause.break) && !gatherRecursiveWithinFunction(clause.block, ($) => $.type === "BreakStatement").length)) {
                  results = !1;
                  break;
                }
              } else if (!isExit(clause.block)) {
                results = !1;
                break;
              }
            }
            return results;
          })() && // Ensure exhaustive by requiring an else/default clause
          (() => {
            let results1 = !1, i3 = 0;
            for (let clause of node.caseBlock.clauses) {
              let i = i3++;
              if (clause.type === "DefaultClause" && // Require default clause to exit or continue to next clause
              // (checked above) and eventually reach an exiting clause
              (() => {
                let results2 = !1;
                for (let later of node.caseBlock.clauses.slice(i)) {
                  let m2;
                  if (m2 = later.type, (m2 === "CaseClause" || m2 === "WhenClause" || m2 === "DefaultClause") && isExit(later.block)) {
                    results2 = !0;
                    break;
                  }
                }
                return results2;
              })()) {
                results1 = !0;
                break;
              }
            }
            return results1;
          })()
        );
      case "TryStatement":
        return node.blocks.every(isExit);
      case "BlockStatement":
        return node.expressions.some((s) => isExit(s[1]));
      // Infinite loops
      case "IterationStatement":
        return isLoopStatement(node) && gatherRecursiveWithinFunction(node.block, ($1) => $1.type === "BreakStatement").length === 0;
      // TODO: Distinguish between break of this loop vs. break of inner loops
      default:
        return !1;
    }
  }
  function isLoopStatement(node) {
    return node.type === "IterationStatement" && node.condition?.type === "ParenthesizedExpression" && node.condition.expression?.type === "Literal" && node.condition.expression?.raw === "true";
  }
  function isComma(node) {
    if (node?.token === ",")
      return node;
    if (Array.isArray(node) && node[node.length - 1]?.token === ",")
      return node[node.length - 1];
  }
  function stripTrailingImplicitComma(children) {
    let last = children[children.length - 1];
    return isComma(last) && last.implicit ? children.slice(0, -1) : children;
  }
  function hasTrailingComment(node) {
    if (node == null)
      return !1;
    if (node.type === "Comment")
      return !0;
    if (Array.isArray(node))
      return hasTrailingComment(node[node.length - 1]);
    if ("children" in node) {
      let ref5;
      return hasTrailingComment((ref5 = node.children)[ref5.length - 1]);
    }
    return !1;
  }
  function insertTrimmingSpace(target, c) {
    if (target == null)
      return target;
    if (Array.isArray(target)) {
      if (target.length === 0)
        return c;
      let results3 = [];
      for (let i4 = 0, len3 = target.length; i4 < len3; i4++) {
        let i = i4, e = target[i4];
        i === 0 ? results3.push(insertTrimmingSpace(e, c)) : results3.push(e);
      }
      return results3;
    } else if (isParent(target)) {
      let oldChildren = target.children;
      target = {
        ...target,
        children: insertTrimmingSpace(target.children, c)
      };
      for (let key in target) {
        let i = oldChildren.indexOf(target[key]);
        i >= 0 && (target[key] = target.children[i]);
      }
      return target;
    } else return isToken(target) ? {
      ...target,
      token: target.token.replace(/^ ?/, c)
    } : typeof target == "string" ? target.replace(/^ ?/, c) : target;
  }
  function trimFirstSpace(target) {
    return insertTrimmingSpace(target, "");
  }
  function inplaceInsertTrimmingSpace(target, c) {
    if (target == null)
      return target;
    Array.isArray(target) ? inplaceInsertTrimmingSpace(target[0], c) : isParent(target) ? inplaceInsertTrimmingSpace(target.children, c) : isToken(target) && (target.token = target.token.replace(/^ ?/, c));
  }
  function getTrimmingSpace(target) {
    if (target != null) {
      if (Array.isArray(target))
        return getTrimmingSpace(target[0]);
      if (isParent(target))
        return getTrimmingSpace(target.children[0]);
      if (isToken(target))
        return target.token.match(/^ ?/)[0];
    }
  }
  function prepend(prefix, node) {
    return !prefix || Array.isArray(prefix) && len(prefix, 0) ? node : Array.isArray(node) ? [prefix, ...node] : isParent(node) ? {
      ...node,
      children: [prefix, ...node.children]
    } : [prefix, node];
  }
  function append(node, suffix) {
    return !suffix || Array.isArray(suffix) && len(suffix, 0) ? node : Array.isArray(node) ? [...node, suffix] : isParent(node) ? {
      ...node,
      children: [...node.children, suffix]
    } : [node, suffix];
  }
  function inplacePrepend(prefix, node) {
    if (prefix && !(Array.isArray(prefix) && !prefix.length))
      if (Array.isArray(node))
        node.unshift(prefix);
      else if (isParent(node))
        node.children.unshift(prefix);
      else
        throw new Error("Can't prepend to a leaf node");
  }
  function literalValue(literal) {
    let { raw } = literal;
    switch (raw) {
      case "null":
        return null;
      case "true":
        return !0;
      case "false":
        return !1;
    }
    let ref6;
    switch (literal.subtype) {
      case "StringLiteral":
        return assert.equal(
          raw.startsWith('"') && raw.endsWith('"') || raw.startsWith("'") && raw.endsWith("'"),
          !0,
          "String literal should begin and end in single or double quotes"
        ), raw.slice(1, -1);
      case "NumericLiteral": {
        if (raw = raw.replace(/_/g, ""), raw.endsWith("n"))
          return BigInt(raw.slice(0, -1));
        if (raw.match(/[\.eE]/))
          return parseFloat(raw);
        if ((ref6 = raw.match(/^[+-]?0(.)/)) && Array.isArray(ref6) && len(ref6, 2)) {
          let [, base] = ref6;
          switch (base.toLowerCase()) {
            case "x":
              return parseInt(raw.replace(/0[xX]/, ""), 16);
            case "b":
              return parseInt(raw.replace(/0[bB]/, ""), 2);
            case "o":
              return parseInt(raw.replace(/0[oO]/, ""), 8);
          }
        }
        return parseInt(raw, 10);
      }
      default:
        throw new Error("Unrecognized literal " + JSON.stringify(literal));
    }
  }
  function literalType(literal) {
    let t;
    switch (literal.type) {
      case "RegularExpressionLiteral": {
        t = "RegExp";
        break;
      }
      case "TemplateLiteral": {
        t = "string";
        break;
      }
      case "Literal": {
        switch (literal.subtype) {
          case "NullLiteral": {
            t = "null";
            break;
          }
          case "BooleanLiteral": {
            t = "boolean";
            break;
          }
          case "NumericLiteral": {
            literal.raw.endsWith("n") ? t = "bigint" : t = "number";
            break;
          }
          case "StringLiteral": {
            t = "string";
            break;
          }
          default:
            throw new Error(`unknown literal subtype ${literal.subtype}`);
        }
        break;
      }
      default:
        throw new Error(`unknown literal type ${literal.type}`);
    }
    return {
      type: "TypeLiteral",
      t,
      children: [t]
    };
  }
  function makeNumericLiteral(n) {
    let s = n.toString();
    return {
      type: "Literal",
      subtype: "NumericLiteral",
      raw: s,
      children: [
        {
          type: "NumericLiteral",
          token: s
        }
        // missing $loc
      ]
    };
  }
  function startsWith(target, value) {
    if (target) {
      if (Array.isArray(target)) {
        let i = 0, l = target.length;
        for (; i < l; ) {
          let t = target[i];
          if (t && (t.length || t.token || t.children))
            break;
          i++;
        }
        if (i < l)
          return startsWith(target[i], value);
      }
      if (typeof target == "string") return value.test(target);
      if (target.children) return startsWith(target.children, value);
      if (target.token) return value.test(target.token);
    }
  }
  function startsWithPredicate(node, predicate, skip = isWhitespaceOrEmpty) {
    if (!(node == null || typeof node == "string")) {
      if (Array.isArray(node)) {
        for (let i5 = 0, len4 = node.length; i5 < len4; i5++) {
          let child = node[i5];
          if (!skip(child))
            return startsWithPredicate(child, predicate);
        }
        return;
      }
      if (predicate(node))
        return node;
      if (node.children != null)
        return startsWithPredicate(node.children, predicate);
    }
  }
  function hasAwait(exp) {
    return gatherRecursiveWithinFunction(exp, ($2) => $2.type === "Await").length > 0;
  }
  function hasYield(exp) {
    return gatherRecursiveWithinFunction(exp, ($3) => $3.type === "Yield").length > 0;
  }
  function hasImportDeclaration(exp) {
    return gatherRecursiveWithinFunction(exp, ($4) => $4.type === "ImportDeclaration").length > 0;
  }
  function hasExportDeclaration(exp) {
    return gatherRecursiveWithinFunction(exp, ($5) => $5.type === "ExportDeclaration").length > 0;
  }
  function deepCopy(root) {
    let copied = /* @__PURE__ */ new Map();
    return recurse(root);
    function recurse(node) {
      if (!(node != null && typeof node == "object"))
        return node;
      if (!copied.has(node))
        if (Array.isArray(node)) {
          let array = new Array(node.length);
          copied.set(node, array);
          for (let i6 = 0, len5 = node.length; i6 < len5; i6++) {
            let i = i6, item = node[i6];
            array[i] = recurse(item);
          }
        } else if (node?.type === "Ref")
          copied.set(node, node);
        else {
          let obj = {};
          copied.set(node, obj);
          for (let key in node) {
            let value = node[key];
            key === "parent" ? obj.parent = copied.get(value) ?? value : obj[key] = recurse(value);
          }
        }
      return copied.get(node);
    }
  }
  function replaceNode(node, newNode, parent) {
    if (parent ??= node?.parent, parent == null)
      throw new Error("replaceNode failed: node has no parent");
    function recurse(children) {
      for (let i7 = 0, len6 = children.length; i7 < len6; i7++) {
        let i = i7, child = children[i7];
        if (child === node)
          return children[i] = newNode, !0;
        if (Array.isArray(child) && recurse(child))
          return !0;
      }
      return !1;
    }
    if (!recurse(parent.children))
      throw new Error("replaceNode failed: didn't find child node in parent");
    for (let key in parent)
      parent[key] === node && (parent[key] = newNode);
    isASTNodeObject(newNode) && (newNode.parent = parent);
  }
  function replaceNodes(root, predicate, replacer) {
    if (root == null)
      return root;
    let array = Array.isArray(root) ? root : root.children;
    if (!array)
      return predicate(root) ? replacer(root, root) : root;
    for (let i8 = 0, len7 = array.length; i8 < len7; i8++) {
      let i = i8, node = array[i8];
      if (node == null)
        return;
      predicate(node) ? array[i] = replacer(node, root) : replaceNodes(node, predicate, replacer);
    }
    return root;
  }
  function removeHoistDecs(node) {
    if (node != null && typeof node == "object") {
      if ("hoistDec" in node && (node.hoistDec = void 0), Array.isArray(node)) {
        for (let child of node)
          removeHoistDecs(child);
        return;
      }
      if (node.children)
        for (let child of node.children)
          removeHoistDecs(child);
    }
  }
  var skipParens = /* @__PURE__ */ new Set([
    "AmpersandRef",
    "ArrayExpression",
    "CallExpression",
    "Identifier",
    "JSXElement",
    "JSXFragment",
    "Literal",
    "ParenthesizedExpression",
    "Ref",
    "Placeholder",
    "StatementExpression"
    // wrapIIFE
  ]);
  function makeLeftHandSideExpression(expression) {
    for (; expression && Array.isArray(expression) && len(expression, 1); ) {
      let [item] = expression;
      expression = item;
    }
    return isASTNodeObject(expression) && (expression.token || expression.parenthesized || skipParens.has(expression.type) || expression.type === "NewExpression" && expression.expression.children.some(($6) => $6?.type === "Call") || expression.type === "MemberExpression" && !startsWithPredicate(expression, ($7) => $7.type === "ObjectExpression")) ? expression : parenthesizeExpression(expression);
  }
  function parenthesizeExpression(expression) {
    return makeNode({
      type: "ParenthesizedExpression",
      children: ["(", expression, ")"],
      expression,
      implicit: !0
    });
  }
  function checkValidLHS(node) {
    let ref7;
    switch (node?.type) {
      case "UnaryExpression":
        return node.children.unshift({
          type: "Error",
          message: "Unary expression is not a valid left-hand side"
        }), !0;
      case "CallExpression": {
        let lastType = (ref7 = node.children)[ref7.length - 1]?.type;
        switch (lastType) {
          case "PropertyAccess":
          case "SliceExpression":
          case "Index":
            break;
          default:
            return node.children.splice(-1, 0, {
              type: "Error",
              message: `Call expression ending with ${lastType} is not a valid left-hand side`
            }), !0;
        }
        break;
      }
      case "Placeholder":
        return node.children.unshift({
          type: "Error",
          message: `Lone placeholder (${node.subtype}) is not a valid left-hand side`
        }), !0;
    }
    return !1;
  }
  function updateParentPointers(node, parent, depth = 1) {
    if (node != null && typeof node == "object") {
      if (Array.isArray(node)) {
        for (let i9 = 0, len8 = node.length; i9 < len8; i9++) {
          let child = node[i9];
          updateParentPointers(child, parent, depth);
        }
        return;
      }
      if (node = node, parent != null && (node.parent = parent), depth && isParent(node))
        for (let ref8 = node.children, i10 = 0, len9 = ref8.length; i10 < len9; i10++) {
          let child = ref8[i10];
          updateParentPointers(child, node, depth - 1);
        }
    }
  }
  function makeNode(node) {
    return updateParentPointers(node), node;
  }
  function skipIfOnlyWS(target) {
    if (!target) return target;
    if (Array.isArray(target))
      return target.length === 1 ? skipIfOnlyWS(target[0]) : target.every((e) => skipIfOnlyWS(e) === void 0) ? void 0 : target;
    if (!(target.token != null && target.token.trim() === ""))
      return target;
  }
  function spliceChild(node, child, del, ...replacements) {
    let children = Array.isArray(node) ? node : node.children;
    if (!Array.isArray(children))
      throw new Error("spliceChild: non-array node has no children field");
    let index = children.indexOf(child);
    if (index < 0)
      throw new Error("spliceChild: child not found");
    return children.splice(index, del, ...replacements);
  }
  function convertOptionalType(suffix) {
    if (suffix.t?.type === "TypeAsserts") {
      spliceChild(suffix, suffix.optional, 1, suffix.optional = {
        type: "Error",
        message: "Can't use optional ?: syntax with asserts type"
      });
      return;
    }
    spliceChild(suffix, suffix.optional, 1, suffix.optional = void 0);
    let wrap = suffix.type === "ReturnTypeAnnotation";
    spliceChild(suffix, suffix.t, 1, suffix.t = [
      getTrimmingSpace(suffix.t),
      wrap ? "(" : void 0,
      // TODO: avoid parens if unnecessary
      "undefined | ",
      parenthesizeType(trimFirstSpace(suffix.t)),
      wrap ? ")" : void 0
    ]);
  }
  var typeNeedsNoParens = /* @__PURE__ */ new Set([
    "TypeIdentifier",
    "ImportType",
    "TypeLiteral",
    "TypeTuple",
    "TypeParenthesized"
  ]);
  function parenthesizeType(type) {
    return typeNeedsNoParens.has(type.type) ? type : makeNode({
      type: "TypeParenthesized",
      ts: !0,
      children: ["(", type, ")"]
    });
  }
  function wrapIIFE(expressions, asyncFlag, generatorStar) {
    let awaitPrefix, generator = generatorStar ? [generatorStar] : [], async = [];
    asyncFlag ? async.push("async ") : hasAwait(expressions) && (async.push("async "), awaitPrefix = {
      type: "Await",
      children: ["await "]
    });
    let yieldWrap = !1;
    generator.length || hasYield(expressions) && (generator.push("*"), yieldWrap = !0);
    let block = makeNode({
      type: "BlockStatement",
      expressions,
      children: ["{", expressions, "}"],
      bare: !1,
      root: !1
    }), parameterList = [], parameters = {
      type: "Parameters",
      children: ["(", parameterList, ")"],
      parameters: parameterList,
      names: []
    }, signature = {
      type: "FunctionSignature",
      modifier: {
        async: !!async.length,
        generator: !!generator.length
      },
      parameters,
      returnType: void 0,
      implicitReturn: !0,
      // force implicit return in IIFE
      children: generator.length ? [async, "function", generator, parameters] : [async, parameters]
    }, fn;
    generator.length ? fn = makeNode({
      type: "FunctionExpression",
      signature,
      parameters,
      returnType: void 0,
      async,
      block,
      generator,
      children: [...signature.children, block]
    }) : fn = makeNode({
      type: "ArrowFunction",
      signature,
      parameters,
      returnType: void 0,
      async,
      block,
      children: [...signature.children, "=>", block]
    });
    let children = [makeLeftHandSideExpression(fn), "()"];
    if (fn.type === "FunctionExpression" && (gatherRecursiveWithinFunction(block, (a1) => typeof a1 == "object" && a1 != null && "token" in a1 && a1.token === "this").length && children.splice(1, 0, ".bind(this)"), gatherRecursiveWithinFunction(block, (a2) => typeof a2 == "object" && a2 != null && "token" in a2 && a2.token === "arguments").length)) {
      let binding = {
        type: "Identifier",
        name: "arguments",
        names: ["arguments"],
        children: ["arguments"]
      };
      parameterList.push({
        type: "Parameter",
        children: [binding],
        names: ["arguments"],
        binding
      }), children[children.length - 1] = "(arguments)";
    }
    let exp = makeNode({
      type: "CallExpression",
      children
    });
    return yieldWrap ? exp = makeLeftHandSideExpression(makeNode({
      type: "YieldExpression",
      star: "*",
      expression: exp,
      children: [
        {
          type: "Yield",
          children: ["yield"]
        },
        "*",
        " ",
        exp
      ]
    })) : awaitPrefix && (exp = makeLeftHandSideExpression([awaitPrefix, exp])), exp;
  }
  function wrapWithReturn(expression, parent = expression?.parent, semi = !1) {
    let children = expression ? ["return ", expression] : ["return"];
    return semi && children.unshift(";"), makeNode({
      type: "ReturnStatement",
      children,
      expression,
      parent
    });
  }
  function flatJoin(array, separator) {
    let result = [];
    for (let i11 = 0, len10 = array.length; i11 < len10; i11++) {
      let i = i11, items = array[i11];
      i && result.push(separator), result.push(...items);
    }
    return result;
  }

  // unplugin-civet:/Users/greghuc/workspace/Civet/source/parser/traversal.civet.jsx
  function gatherRecursiveWithinFunction(node, predicate) {
    return gatherRecursive(node, predicate, isFunction);
  }
  function findChildIndex(parent, child) {
    if (parent == null)
      return -1;
    let children = Array.isArray(parent) ? parent : parent.children;
    if (children == null)
      return -1;
    for (let i1 = 0, len3 = children.length; i1 < len3; i1++) {
      let i = i1, c = children[i1];
      if (c === child || Array.isArray(c) && arrayRecurse(c))
        return i;
    }
    function arrayRecurse(array) {
      for (let i2 = 0, len1 = array.length; i2 < len1; i2++) {
        let c = array[i2];
        if (c === child || Array.isArray(c) && arrayRecurse(c))
          return !0;
      }
      return !1;
    }
    return -1;
  }
  function findAncestor(node, predicate, stopPredicate) {
    let { parent } = node;
    for (; parent && !stopPredicate?.(parent, node); ) {
      if (predicate(parent, node))
        return { ancestor: parent, child: node };
      node = parent, { parent } = node;
    }
    return { ancestor: void 0, child: node };
  }
  function gatherNodes(node, predicate) {
    if (node == null || typeof node == "string")
      return [];
    if (Array.isArray(node))
      return node.flatMap((n) => gatherNodes(n, predicate));
    if (predicate(node))
      return [node];
    switch (node.type) {
      case "BlockStatement":
        return [];
      case "ForStatement": {
        let isDec = node.declaration?.type === "Declaration";
        return node.children.flatMap((n) => isDec && n === node.declaration ? [] : gatherNodes(n, predicate));
      }
      default:
        return gatherNodes(
          node.children,
          predicate
        );
    }
  }
  function gatherRecursive(node, predicate, skipPredicate) {
    return node == null || typeof node == "string" ? [] : Array.isArray(node) ? node.flatMap(($) => gatherRecursive($, predicate, skipPredicate)) : skipPredicate?.(node) ? [] : predicate(node) ? [node] : gatherRecursive(
      node.children,
      predicate,
      skipPredicate
    );
  }
  function gatherRecursiveAll(node, predicate) {
    if (node == null || typeof node == "string")
      return [];
    if (Array.isArray(node))
      return node.flatMap((n) => gatherRecursiveAll(n, predicate));
    let nodes = gatherRecursiveAll(
      node.children,
      predicate
    );
    return predicate(node) && nodes.push(node), nodes;
  }

  // unplugin-civet:/Users/greghuc/workspace/Civet/source/parser/ref.civet.jsx
  var range = (start, end) => {
    let length = end - start;
    if (length <= 0) return [];
    let arr = Array(length);
    for (let i = 0; i < length; ++i)
      arr[i] = i + start;
    return arr;
  };
  function makeRef(base = "ref", id = base) {
    return {
      type: "Ref",
      base,
      id
    };
  }
  function needsRef(expression, base = "ref") {
    if (expression != null && typeof expression == "object") {
      if (Array.isArray(expression)) {
        let nonempty = range(0, expression.length).filter((i) => !isWhitespaceOrEmpty(expression[i]));
        if (nonempty.length === 1) {
          let ref1;
          return (ref1 = needsRef(expression[nonempty[0]], base)) ? ref1 : void 0;
        } else
          return makeRef(base);
      }
      switch (expression.type) {
        case "Ref":
        case "Identifier":
        case "Literal":
        case "Placeholder":
          return;
      }
      return makeRef(base);
    }
  }
  function maybeRef(exp, base = "ref") {
    return needsRef(exp, base) || exp;
  }
  function makeRefAssignment(ref, exp) {
    let refAssignment = makeNode({
      type: "AssignmentExpression",
      children: [ref, " = ", exp],
      hoistDec: {
        type: "Declaration",
        children: ["let ", ref],
        names: []
      }
    });
    return {
      refAssignment,
      refAssignmentComma: [refAssignment, ","]
    };
  }
  function maybeRefAssignment(exp, base = "ref") {
    let ref = maybeRef(exp, base);
    return ref === exp ? { ref, refAssignmentComma: [] } : { ref, ...makeRefAssignment(ref, exp) };
  }
  function populateRefs(statements) {
    let refNodes = gatherRecursive(statements, ($) => $.type === "Ref");
    if (!refNodes.length)
      return;
    let ids = gatherRecursive(statements, ($1) => $1.type === "Identifier"), names = new Set(ids.flatMap(({ names: names2 }) => names2 || []));
    for (let i1 = 0, len3 = refNodes.length; i1 < len3; i1++) {
      let ref = refNodes[i1];
      if (ref.type !== "Ref")
        continue;
      let { base } = ref;
      ref.type = "Identifier";
      let n = 0, name = base;
      for (; names.has(name); )
        n++, name = `${base}${n}`;
      names.add(name), ref.children = ref.names = [name];
    }
  }

  // unplugin-civet:/Users/greghuc/workspace/Civet/source/parser/binding.civet.jsx
  function adjustAtBindings(statements, asThis = !1) {
    for (let ref1 = gatherRecursiveAll(statements, ($1) => $1.type === "AtBindingProperty"), i1 = 0, len3 = ref1.length; i1 < len3; i1++) {
      let binding = ref1[i1], { ref } = binding;
      if (asThis) {
        let atBinding = binding.binding;
        atBinding.children.pop(), atBinding.type = void 0, binding.children.unshift(ref.id, ": this.", ref.base), binding.type = "Property", binding.ref = void 0;
        return;
      }
      ref.names[0] !== ref.base && binding.children.unshift(ref.base, ": ");
    }
  }
  function adjustBindingElements(elements) {
    let names = elements.flatMap(($2) => $2.names || []), { length } = elements, blockPrefix, restIndex = -1, restCount = 0;
    for (let i2 = 0, len1 = elements.length; i2 < len1; i2++) {
      let i = i2, { type } = elements[i2];
      type === "BindingRestElement" && (restIndex < 0 && (restIndex = i), restCount++);
    }
    if (restCount === 0)
      return {
        children: elements,
        names,
        blockPrefix,
        length
      };
    if (restCount === 1) {
      let rest = elements[restIndex], after = elements.slice(restIndex + 1), restIdentifier = rest.binding.ref || rest.binding;
      names.push(...rest.names || []);
      let l = after.length;
      if (l) {
        arrayElementHasTrailingComma(after[l - 1]) && l++;
        let elements2 = trimFirstSpace(after);
        blockPrefix = {
          type: "PostRestBindingElements",
          elements: elements2,
          children: ["[", elements2, "] = ", restIdentifier, ".splice(-", l.toString(), ")"],
          names: after.flatMap((p) => p.names)
        };
      }
      return {
        names,
        children: [...elements.slice(0, restIndex), {
          ...rest,
          children: rest.children.slice(0, -1)
          // remove trailing comma
        }],
        blockPrefix,
        length
      };
    }
    let err = {
      type: "Error",
      children: ["Multiple rest elements in array pattern"]
    };
    return {
      names,
      children: [...elements, err],
      blockPrefix,
      length
    };
  }
  function gatherSubbindings(node, subbindings = []) {
    for (let ref2 = gatherRecursiveAll(node, ($) => $.subbinding != null), i3 = 0, len22 = ref2.length; i3 < len22; i3++) {
      let p = ref2[i3], { subbinding } = p;
      subbindings.push(", ", subbinding), gatherSubbindings(subbinding, subbindings);
    }
    return subbindings;
  }
  function simplifyBindingProperties(node) {
    let results = [];
    for (let ref3 = gatherRecursiveAll(node, ($3) => $3.type === "BindingProperty"), i4 = 0, len3 = ref3.length; i4 < len3; i4++) {
      let p = ref3[i4], { name, value } = p;
      if (value?.type === "NamedBindingPattern" && value.binding === name) {
        let [ws] = p.children;
        results.push(p.children = [ws, name, p.delim]);
      } else
        results.push(void 0);
    }
    return results;
  }
  function gatherBindingCode(statements, opts) {
    let thisAssignments = [], splices = [];
    function insertRestSplices(s, p, thisAssignments2) {
      let m;
      for (let ref4 = gatherRecursiveAll(
        s,
        (n) => n.blockPrefix || opts?.injectParamProps && n.accessModifier || n.type === "AtBinding" || opts?.assignPins && (m = n.type, m === "PinPattern" || m === "PinProperty")
      ), i5 = 0, len4 = ref4.length; i5 < len4; i5++) {
        let n = ref4[i5];
        if (n.type === "AtBinding") {
          let { ref } = n, { id } = ref;
          thisAssignments2.push([`this.${id} = `, ref]);
          continue;
        }
        if (opts?.assignPins && (n.type === "PinProperty" && (n.children = n.children.flatMap(($4) => $4 === n.name ? [n.name, ": ", n.value] : $4), updateParentPointers(n), n = n.value), n.type === "PinPattern")) {
          n.ref = makeRef(
            n.expression.type === "Identifier" ? n.expression.name : "pin"
          ), n.children = [n.ref], updateParentPointers(n), thisAssignments2.push({
            type: "AssignmentExpression",
            children: [n.expression, " = ", n.ref],
            names: [],
            lhs: n.expression,
            assigned: n.expression,
            expression: n.ref
          });
          continue;
        }
        if (opts?.injectParamProps && n.type === "Parameter" && n.accessModifier) {
          for (let ref5 = n.names, i6 = 0, len5 = ref5.length; i6 < len5; i6++) {
            let id = ref5[i6];
            thisAssignments2.push({
              type: "AssignmentExpression",
              children: [`this.${id} = `, id],
              js: !0
            });
          }
          continue;
        }
        let { blockPrefix } = n;
        p.push(blockPrefix), insertRestSplices(blockPrefix, p, thisAssignments2);
      }
    }
    return insertRestSplices(statements, splices, thisAssignments), [splices, thisAssignments];
  }
  function arrayElementHasTrailingComma(elementNode) {
    let ref6, lastChild = (ref6 = elementNode.children)[ref6.length - 1];
    return lastChild && lastChild[lastChild.length - 1]?.token === ",";
  }
  function gatherBindingPatternTypeSuffix(pattern) {
    if (pattern.typeSuffix != null)
      return pattern;
    let count = 0;
    switch (pattern.type) {
      case "ArrayBindingPattern": {
        {
          let results1 = [];
          for (let ref7 = pattern.elements, i7 = 0, len6 = ref7.length; i7 < len6; i7++) {
            let elem = ref7[i7], { typeSuffix } = elem;
            typeSuffix ??= elem.binding?.typeSuffix, typeSuffix && count++;
            let typeElement = [typeSuffix?.t, elem.delim];
            typeSuffix?.optional && (typeElement[0] = parenthesizeType(typeElement[0]), typeElement.unshift("undefined |")), elem.type === "BindingRestElement" ? (typeElement[0] ??= "unknown[]", typeElement.unshift(elem.dots)) : typeElement[0] ??= "unknown", results1.push(typeElement);
          }
          let types = results1;
          if (count) {
            let t = [": [", types, "]"];
            pattern.typeSuffix = {
              type: "TypeSuffix",
              ts: !0,
              t,
              children: [t]
            };
          }
        }
        break;
      }
      case "ObjectBindingPattern": {
        {
          let restType, results2 = [];
          for (let ref8 = pattern.properties, i8 = 0, len7 = ref8.length; i8 < len7; i8++) {
            let prop = ref8[i8], { typeSuffix } = prop;
            switch (typeSuffix ??= prop.value?.typeSuffix, typeSuffix && count++, typeSuffix ??= {
              type: "TypeSuffix",
              ts: !0,
              children: [": unknown"]
            }, prop.initializer && !typeSuffix.optional && typeSuffix.children.unshift(typeSuffix.optional = "?"), prop.type) {
              case "BindingProperty": {
                let ws = prop.children.slice(0, prop.children.indexOf(prop.name));
                results2.push([...ws, prop.name, typeSuffix, prop.delim]);
                break;
              }
              case "AtBindingProperty": {
                let ws = prop.children.slice(0, prop.children.indexOf(prop.binding));
                results2.push([...ws, prop.ref.id.replace(/^#/, ""), typeSuffix, prop.delim]);
                break;
              }
              case "BindingRestProperty": {
                restType = prop.typeSuffix?.t;
                continue;
              }
            }
          }
          let types = results2;
          if (count) {
            let t = ["{", types, "}"];
            restType != null && t.push(" & ", parenthesizeType(trimFirstSpace(restType))), pattern.typeSuffix = {
              type: "TypeSuffix",
              ts: !0,
              t,
              children: [": ", t]
            };
          }
        }
        break;
      }
    }
    return pattern;
  }

  // unplugin-civet:/Users/greghuc/workspace/Civet/source/parser/comptime.civet.jsx
  init_browser_shim();
  init_browser_shim();
  init_browser_shim();

  // unplugin-civet:/Users/greghuc/workspace/Civet/source/parser/helper.civet.jsx
  var preludeVar = "var ";
  function ts(children) {
    return {
      ts: !0,
      children: Array.isArray(children) ? children : [children]
    };
  }
  var asAny = ts(" as any"), declareHelper = {
    indexOf(indexOfRef) {
      state.prelude.push(["", [
        // [indent, statement]
        preludeVar,
        indexOfRef,
        ts([": <T>(this: T[], searchElement: T) => number"]),
        " = [].indexOf",
        asAny
      ], `;
`]);
    },
    hasProp(hasPropRef) {
      state.prelude.push(["", [
        // [indent, statement]
        preludeVar,
        hasPropRef,
        ts(": <T>(object: T, prop: PropertyKey) => boolean"),
        " = ({}.constructor",
        asAny,
        ").hasOwn"
      ], `;
`]);
    },
    is(isRef) {
      state.prelude.push(["", [
        // [indent, statement]
        preludeVar,
        isRef,
        ts(": { <B, A extends B> (a: A, b: B): b is A, <A, B> (a: A, b: B): a is A & B }"),
        " = Object.is",
        asAny
      ], `;
`]);
    },
    /**
     * Array length check with type guard.
     * From tlgreg https://discord.com/channels/933472021310996512/1012166187196629113/1157386582546976873
     */
    len(lenRef) {
      state.prelude.push(["", [
        ts(["function ", lenRef, "<T extends readonly unknown[], N extends number>(arr: T, length: N): arr is T & { length: N } { return arr.length === length }"]),
        {
          js: !0,
          children: ["function ", lenRef, "(arr, length) { return arr.length === length }"]
        },
        `
`
      ]]);
    },
    RSliceable(RSliceableRef) {
      state.prelude.push([
        "",
        ts(["type ", RSliceableRef, `<R> = string | {length: number; slice(start: number, end: number): {reverse(): R}}
`])
      ]);
    },
    rslice(rsliceRef) {
      let RSliceableRef = getHelperRef("RSliceable");
      state.prelude.push(["", [
        preludeVar,
        rsliceRef,
        ts([": <R, T extends string | ", RSliceableRef, "<R>>(a: T, start?: number, end?: number) => T extends string ? string : T extends ", RSliceableRef, "<infer R> ? R : never"]),
        ` = ((a, start = -1, end = -1) => {
`,
        `  const l = a.length
`,
        `  if (start < 0) start += l
`,
        `  if (++end < 0) end += l
`,
        `  if (typeof a === 'string') {
`,
        `    let r = ""
`,
        `    if (start > l-1) start = l-1
`,
        `    if (end < 0) end = 0
`,
        `    for (let i = start; i >= end; --i) r += a[i]
`,
        "    return r",
        asAny,
        `
`,
        `  } else {
`,
        `    return a.slice(end, start + 1).reverse()
`,
        `  }
`,
        "})"
      ], `;
`]);
    },
    range(rangeRef) {
      state.prelude.push(["", [
        preludeVar,
        rangeRef,
        ts([": (start: number, end: number) => number[]"]),
        " ",
        `= (start, end) => {
  const length = end - start;
  if (length <= 0) return [];
  const arr = Array(length);
  for (let i = 0; i < length; ++i) {
    arr[i] = i + start;
  }
  return arr;
}`
      ], `;
`]);
    },
    revRange(revRangeRef) {
      state.prelude.push(["", [
        preludeVar,
        revRangeRef,
        ts([": (start: number, end: number) => number[]"]),
        " ",
        `= (start, end) => {
  const length = start - end;
  if (length <= 0) return [];
  const arr = Array(length);
  for (let i = 0; i < length; ++i) {
    arr[i] = start - i;
  }
  return arr;
}`
      ], `;
`]);
    },
    stringRange(stringRangeRef) {
      state.prelude.push(["", [
        preludeVar,
        stringRangeRef,
        ts([": (start: number, length: number) => string[]"]),
        " ",
        `= (start, length) => {
  if (length <= 0) return [];
  const arr = Array(length);
  for (let i = 0; i < length; ++i) {
    arr[i] = String.fromCharCode(start + i);
  }
  return arr;
}`
      ], `;
`]);
    },
    revStringRange(revStringRangeRef) {
      state.prelude.push(["", [
        preludeVar,
        revStringRangeRef,
        ts([": (start: number, length: number) => string[]"]),
        " ",
        `= (start, length) => {
  if (length <= 0) return [];
  const arr = Array(length);
  for (let i = 0; i < length; ++i) {
    arr[i] = String.fromCharCode(start - i);
  }
  return arr;
}`
      ], `;
`]);
    },
    div(divRef) {
      state.prelude.push(["", [
        // [indent, statement]
        preludeVar,
        divRef,
        ts(": (a: number, b: number) => number"),
        " = (a, b) => Math.floor(a / b)"
      ], `;
`]);
    },
    modulo(moduloRef) {
      state.prelude.push(["", [
        // [indent, statement]
        preludeVar,
        moduloRef,
        " = ",
        ts("("),
        "(a",
        ts(": number"),
        ", b",
        ts(": number"),
        ") => (a % b + b) % b",
        ts(") as ((a: number, b: number) => number) & ((a: bigint, b: bigint) => bigint)")
      ], `;
`]);
    },
    Falsy(FalsyRef) {
      state.prelude.push([
        "",
        // [indent, statement]
        ts(["type ", FalsyRef, " = false | 0 | '' | 0n | null | undefined"]),
        `;
`
      ]);
    },
    xor(xorRef) {
      let Falsy = getHelperRef("Falsy");
      state.prelude.push(["", [
        // [indent, statement]
        preludeVar,
        xorRef,
        ts([
          ": <A, B>(a: A, b: B) => A extends ",
          Falsy,
          " ? B : B extends ",
          Falsy,
          " ? A : (false | (A & ",
          Falsy,
          " extends never ? never : B) | (B & ",
          Falsy,
          " extends never ? never : A))"
        ]),
        " = (a, b) => (a ? !b && a : b)",
        asAny
      ], `;
`]);
    },
    xnor(xnorRef) {
      let Falsy = getHelperRef("Falsy");
      state.prelude.push(["", [
        // [indent, statement]
        preludeVar,
        xnorRef,
        ts([
          ": <A, B>(a: A, b: B) => A & ",
          Falsy,
          " extends never ? B : (true | (B extends ",
          Falsy,
          " ? never : A) | (A extends ",
          Falsy,
          " ? never : B))"
        ]),
        " = (a, b) => (a ? b : !b || a)",
        asAny
      ], `;
`]);
    },
    concatAssign(ref) {
      state.prelude.push(["", [
        // [indent, statement]
        preludeVar,
        ref,
        ts([
          ": <B, A extends {push: (this: A, b: B) => void} | (B extends unknown[] ? {push: (this: A, ...b: B) => void} : never)>(lhs: A, rhs: B) => A"
        ]),
        " = (lhs, rhs) => (((rhs",
        asAny,
        ")?.[Symbol.isConcatSpreadable] ?? Array.isArray(rhs)) ? (lhs",
        asAny,
        ").push.apply(lhs, rhs",
        asAny,
        ") : (lhs",
        asAny,
        ").push(rhs), lhs)"
      ], `;
`]);
    },
    AutoPromise(ref) {
      state.prelude.push([
        "",
        ts(["type ", ref, "<T> = Promise<Awaited<T>>"]),
        `;
`
      ]);
    },
    JSX(jsxRef) {
      state.prelude.push([
        "",
        // [indent, statement]
        ts(["import type { JSX as ", jsxRef, " } from 'solid-js'"]),
        `;
`
      ]);
    },
    IntrinsicElements(intrinsicElementsRef) {
      let JSX = getHelperRef("JSX");
      state.prelude.push([
        "",
        // [indent, statement, delim]
        ts([
          "type ",
          intrinsicElementsRef,
          "<K extends keyof ",
          JSX,
          `.IntrinsicElements> =
`,
          "  ",
          JSX,
          ".IntrinsicElements[K] extends ",
          JSX,
          ".DOMAttributes<infer T> ? T : unknown"
        ]),
        `;
`
      ]);
    }
  };
  function getHelperRef(base) {
    if (base in state.helperRefs)
      return state.helperRefs[base];
    let ref = makeRef(base);
    if (!(base in declareHelper))
      throw new Error(`Unknown helper function: ${base}`);
    return declareHelper[base](ref), state.helperRefs[base] = ref;
  }
  function peekHelperRef(base) {
    return state.helperRefs[base];
  }
  function extractPreludeFor(node) {
    if (!state.prelude.length)
      return state.prelude;
    let allHelpers = new Set(Object.values(state.helperRefs)), isHelper = allHelpers.has.bind(allHelpers), usedHelpers = new Set(gatherRecursive(node, isHelper));
    for (; ; ) {
      let prelude = state.prelude.filter((s) => gatherRecursive(s, usedHelpers.has.bind(usedHelpers)).length), changed = !1;
      for (let ref1 = gatherRecursive(prelude, isHelper), i = 0, len3 = ref1.length; i < len3; i++) {
        let helper = ref1[i];
        usedHelpers.has(helper) || (usedHelpers.add(helper), changed = !0);
      }
      if (!changed)
        return prelude;
    }
  }

  // unplugin-civet:/Users/greghuc/workspace/Civet/source/generate.civet.jsx
  function stringify(node) {
    try {
      return JSON.stringify(removeParentPointers(node));
    } catch {
      return `${node}`;
    }
  }
  function gen(root, options) {
    let ref, updateSourceMap = (ref = options?.sourceMap)?.updateSourceMap.bind(ref);
    return recurse(root);
    function recurse(node) {
      if (node == null)
        return "";
      if (typeof node == "string")
        return updateSourceMap?.(node), node;
      if (Array.isArray(node))
        return node.map(recurse).join("");
      if (typeof node == "object") {
        if (options.js && node.ts || !options.js && node.js)
          return "";
        if (node.type === "Error") {
          let filename2 = options?.filename ?? "unknown", line = "?", column = "?", offset, ref1;
          if (ref1 = options.sourceMap) {
            let sourceMap = ref1;
            node.$loc != null && sourceMap.updateSourceMap("", node.$loc.pos), line = sourceMap.srcLine + 1, column = sourceMap.srcColumn + 1, offset = sourceMap.srcOffset;
          }
          return options.errors ??= [], options.errors.push(new import_lib2.ParseError(
            node.message,
            void 0,
            // body
            filename2,
            line,
            column,
            offset
          )), "";
        }
        if ("$loc" in node) {
          let { token, $loc } = node;
          return $loc != null && updateSourceMap?.(token, $loc.pos), token;
        }
        if (!node.children) {
          if (node.token != null)
            return node.token;
          switch (node.type) {
            case "Ref":
              throw new Error(`Unpopulated ref ${stringify(node)}`);
          }
          debugger;
          throw new Error(`Unknown node ${stringify(node)}`);
        }
        return recurse(node.children);
      }
      debugger;
      throw new Error(`Unknown node ${stringify(node)}`);
    }
  }
  var generate_civet_default = gen;
  function prune(node) {
    if (node != null && !(typeof node == "string" && node.length === 0)) {
      if (node.parent != null && delete node.parent, Array.isArray(node)) {
        let a = node.map(prune).filter(($) => $);
        return a.length > 1 ? a : a.length === 1 ? a[0] : void 0;
      }
      return node.children != null && (node.children = prune(node.children) || []), node;
    }
  }

  // unplugin-civet:/Users/greghuc/workspace/Civet/source/parser/comptime.civet.jsx
  function expressionizeComptime(statement) {
    let { expressions } = statement.block, expression = wrapIIFE(expressions, hasAwait(expressions));
    return makeNode({
      type: "ComptimeExpression",
      expression,
      children: [expression]
    });
  }
  function processComptime(statements) {
    if (!getInitialConfig()?.comptime)
      return;
    let promises = runComptime(statements);
    if (!getSync())
      return (async () => {
        await Promise.all(promises);
      })();
  }
  function runComptime(statements) {
    let sync2 = getSync();
    return gatherRecursive(
      statements,
      (node) => node.type === "ComptimeStatement" || node.type === "ComptimeExpression"
    ).map((exp) => {
      let content = exp.type === "ComptimeStatement" ? exp.block : exp.expression;
      content = [
        ...extractPreludeFor(content),
        content
      ];
      let options = { js: !0 }, js = generate_civet_default(prune(content), options);
      if (js = `"use strict";${js}`, options.errors != null)
        return;
      let output, context, contextGlobal;
      try {
        context = browser_shim_default.createContext?.() ?? globalThis;
        let filename2 = context.__filename = getFilename() ?? "";
        if (context.__dirname = dirname(filename2), context.require = createRequire(filename2), browser_shim_default.runInContext != null) {
          contextGlobal = browser_shim_default.runInContext("globalThis", context);
          let builtins = new Set(Object.getOwnPropertyNames(contextGlobal));
          for (let name of Object.getOwnPropertyNames(globalThis))
            builtins.has(name) || Object.defineProperty(contextGlobal, name, {
              __proto__: null,
              ...Object.getOwnPropertyDescriptor(globalThis, name)
            });
          output = browser_shim_default.runInContext(js, context, {
            filename: filename2,
            importModuleDynamically: browser_shim_default.constants?.USE_MAIN_CONTEXT_DEFAULT_LOADER
          });
        } else
          output = eval?.(js);
      } catch (e) {
        exp.children = [
          {
            type: "Error",
            message: `comptime block failed to execute: ${e}
${js}`
          }
        ];
        return;
      }
      let promise;
      if (exp.type === "ComptimeExpression") {
        let finish = () => {
          let string;
          try {
            string = serialize(output, contextGlobal);
          } catch (e) {
            exp.children = [
              {
                type: "Error",
                message: `comptime result ${output} not serializable: ${e}`
              }
            ];
            return;
          }
          return exp.children = [string];
        };
        sync2 ? finish() : promise = (async () => (output = await output, finish()))();
      } else {
        promise = output, exp.children = [];
        let m;
        m = exp.parent, typeof m == "object" && m != null && "type" in m && m.type === "BlockStatement" && "bare" in m && m.bare === !0 && !exp.parent.root && exp.children.push(";");
      }
      return promise;
    });
  }
  function serialize(value, context) {
    let stack = /* @__PURE__ */ new Set();
    function recurse(val) {
      if (typeof val == "string")
        return JSON.stringify(val);
      if (typeof val == "number")
        return Object.is(-0, val) ? "-0" : val.toString();
      if (typeof val == "boolean" || val == null)
        return String(val);
      if (typeof val == "bigint")
        return `${val}n`;
      if (typeof val == "function") {
        let string = Function.prototype.toString.call(val);
        if (/\{\s+\[native code]\s+\}$/.test(string))
          throw new TypeError("cannot serialize native function");
        if (/^class[\s{]/u.test(string))
          return Object.isExtensible(val) || (string = `Object.preventExtensions(${string})`), string;
        if (stack.has(val))
          throw new Error("circular reference detected");
        if (stack.add(val), /^(?:async\s*)?(?:\*\s*|[gs]et\s+)?\[/.test(string))
          throw new Error("cannot serialize method with computed name");
        let protoHasProps = !(val.prototype === void 0 || Object.prototype === Object.getPrototypeOf(val.prototype) && Object.getOwnPropertyNames(val.prototype).length <= 1 && // constructor
        Object.getOwnPropertySymbols(val.prototype).length === 0 && [val, void 0].includes(val.prototype.constructor)), isGenerator = /^(?:async\s*)?(?:function\s*)?\*/u.test(string);
        if (protoHasProps && !isGenerator)
          throw new TypeError("cannot serialize function with modified prototype");
        /^(?:async\s+)?(?:(function|class)(?!\p{ID_Continue})|\(|(?:\p{ID_Start}|[_$])(?:\p{ID_Continue}|[\u200C\u200D$])*\s*=>)/u.test(string) || (string = string.replace(/^(async\s+)?(?:[gs]et\s+(?=\p{ID_Start}))?/u, (_2, maybeAsync = "") => maybeAsync + "function "));
        let defaultProps = ["length", "name", "arguments", "caller", "prototype"];
        if (!(Object.getOwnPropertyNames(val).every(($) => defaultProps.includes($)) && Object.getOwnPropertySymbols(val).length === 0)) {
          let props = Object.getOwnPropertyDescriptors(val);
          for (let prop of defaultProps)
            delete props[prop];
          string = `Object.defineProperties(${string},${recurse(props)})`;
        }
        return Object.isExtensible(val) || (string = `Object.preventExtensions(${string})`), stack.delete(val), string;
      } else if (typeof val == "symbol") {
        let ref;
        if ((ref = Symbol.keyFor(val)) != null)
          return `Symbol.for(${JSON.stringify(ref)})`;
        for (let name of Object.getOwnPropertyNames(Symbol)) {
          let sym = Symbol[name];
          if (val === sym)
            return `Symbol.${name}`;
        }
        throw new TypeError("cannot serialize unique symbol");
      } else if (typeof val == "object") {
        if (stack.has(val))
          throw new Error("circular reference detected");
        stack.add(val);
        let ref1;
        switch (Object.getPrototypeOf(val)) {
          case RegExp.prototype:
          case context?.RegExp.prototype: {
            let re = val;
            ref1 = `/${re.source}/${re.flags}`;
            break;
          }
          case Date.prototype:
          case context?.Date.prototype: {
            ref1 = `new Date(${val.getTime()})`;
            break;
          }
          case Set.prototype:
          case context?.Set.prototype: {
            ref1 = "new Set([" + (() => {
              let results = [];
              for (let item of val)
                results.push(recurse(item));
              return results;
            })().join(",") + "])";
            break;
          }
          case Map.prototype:
          case context?.Map.prototype: {
            ref1 = "new Map([" + (() => {
              let results1 = [];
              for (let [key, value2] of val)
                results1.push(`[${recurse(key)},${recurse(value2)}]`);
              return results1;
            })().join(",") + "])";
            break;
          }
          case Object.prototype:
          case context?.Object.prototype: {
            let objStr = "{", descStr = "";
            for (let ref2 = Object.getOwnPropertyNames(val).concat(Object.getOwnPropertySymbols(val)), i = 0, len3 = ref2.length; i < len3; i++) {
              let prop = ref2[i], desc = Object.getOwnPropertyDescriptor(val, prop);
              desc.enumerable && desc.configurable && desc.writable ? (typeof prop == "symbol" ? objStr += `[${recurse(prop)}]` : objStr += JSON.stringify(prop), objStr += `:${recurse(desc.value)},`) : (typeof prop == "symbol" ? descStr += `[${recurse(prop)}]` : descStr += JSON.stringify(prop), descStr += `:${recurse(desc)},`);
            }
            objStr.length > 1 && (objStr = objStr.slice(0, -1)), objStr += "}", descStr !== "" && (objStr = `Object.defineProperties(${objStr},{${descStr.slice(0, -1)}})`), Object.isExtensible(val) || (objStr = `Object.preventExtensions(${objStr})`), ref1 = objStr;
            break;
          }
          case URL.prototype:
          case context?.URL.prototype: {
            ref1 = `new URL(${JSON.stringify(val.href)})`;
            break;
          }
          case null: {
            ref1 = `Object.create(null,${recurse(Object.getOwnPropertyDescriptors(val))})`;
            break;
          }
          case Int8Array.prototype:
          case Uint8Array.prototype:
          case Int16Array.prototype:
          case Uint16Array.prototype:
          case Int32Array.prototype:
          case Uint32Array.prototype:
          case Float32Array.prototype:
          case Float64Array.prototype:
          case Uint8ClampedArray.prototype:
          case context?.Int8Array.prototype:
          case context?.Uint8Array.prototype:
          case context?.Int16Array.prototype:
          case context?.Uint16Array.prototype:
          case context?.Int32Array.prototype:
          case context?.Uint32Array.prototype:
          case context?.Float32Array.prototype:
          case context?.Float64Array.prototype:
          case context?.Uint8ClampedArray.prototype: {
            ref1 = `new ${val.constructor.name}([${val.join(",")}])`;
            break;
          }
          case BigInt64Array.prototype:
          case BigUint64Array.prototype:
          case context?.BigInt64Array.prototype:
          case context?.BigUint64Array.prototype: {
            ref1 = `new ${val.constructor.name}([${Array.from(val, ($1) => `${$1}n`).join(",")}])`;
            break;
          }
          // Spelled differently for browsers, where `Buffer` doesn't exist
          case globalThis.Buffer?.prototype:
          case context?.Buffer?.prototype: {
            ref1 = `Buffer.from([${val.join(",")}])`;
            break;
          }
          default:
            if (Array.isArray(val))
              ref1 = `[${val.map(recurse).join(",")}]`;
            else
              throw new TypeError(`cannot serialize object with prototype ${val.constructor?.name ?? Object.getPrototypeOf(val)}`);
        }
        let str = ref1;
        return stack.delete(val), str;
      } else
        throw new TypeError(`cannot serialize ${typeof val} value`);
    }
    return recurse(value);
  }

  // unplugin-civet:/Users/greghuc/workspace/Civet/source/parser/function.civet.jsx
  var concatAssign = (lhs, rhs) => (rhs?.[Symbol.isConcatSpreadable] ?? Array.isArray(rhs) ? lhs.push.apply(lhs, rhs) : lhs.push(rhs), lhs);
  function getTypeArguments(args) {
    for (; typeof args == "object" && args != null && "args" in args; )
      args = args.args;
    if (!Array.isArray(args))
      throw new Error("getTypeArguments could not find relevant array");
    return args.filter((a1) => typeof a1 == "object" && a1 != null && "type" in a1 && a1.type === "TypeArgument");
  }
  function isVoidType(t) {
    return typeof t == "object" && t != null && "type" in t && t.type === "TypeLiteral" && "t" in t && typeof t.t == "object" && t.t != null && "type" in t.t && t.t.type === "VoidType";
  }
  function isPromiseType(t) {
    return typeof t == "object" && t != null && "type" in t && t.type === "TypeIdentifier" && "raw" in t && t.raw === "Promise";
  }
  function isPromiseVoidType(t) {
    if (!isPromiseType(t))
      return !1;
    let args = getTypeArguments(t.args?.args);
    return args.length === 1 && isVoidType(args[0].t);
  }
  function wrapTypeInPromise(t) {
    return isPromiseType(t) ? t : wrapTypeInApplication(t, getHelperRef("AutoPromise"), "Promise");
  }
  function wrapTypeInApplication(t, id, raw) {
    let ws = getTrimmingSpace(t);
    t = trimFirstSpace(t);
    let innerArgs = [{
      type: "TypeArgument",
      ts: !0,
      t,
      children: [t]
    }], args = {
      type: "TypeArguments",
      ts: !0,
      args: innerArgs,
      children: ["<", innerArgs, ">"]
    };
    if (raw == null) {
      if (typeof id != "string")
        throw new Error("wrapTypeInApplication requires string id or raw argument");
      raw = id;
    }
    return {
      type: "TypeIdentifier",
      raw,
      args,
      children: [ws, id, args]
    };
  }
  function implicitFunctionBlock(f) {
    if (f.abstract || f.block || f.signature?.optional) return;
    let { name, parent } = f, ancestor = parent, child = f;
    ancestor?.type === "ExportDeclaration" && (child = ancestor, ancestor = ancestor.parent);
    let expressions = ancestor?.expressions ?? ancestor?.elements, currentIndex = expressions?.findIndex(([, def]) => def === child), following = currentIndex >= 0 && expressions[currentIndex + 1]?.[1];
    if (following?.type === "ExportDeclaration" && (following = following.declaration), f.type === following?.type && name != null && name === following.name)
      f.ts = !0;
    else {
      let block = makeEmptyBlock();
      block.parent = f, f.block = block, f.children.push(block), f.ts = !1;
    }
  }
  function processReturn(f, implicitReturns) {
    let { returnType } = f.signature;
    if (returnType && returnType.optional && convertOptionalType(returnType), !processReturnValue(f) && (implicitReturns || f.signature.implicitReturn)) {
      let { signature, block } = f, { modifier, name, returnType: returnType2 } = signature, { async, generator, set } = modifier, isConstructor = f.type === "MethodDefinition" && name === "constructor", isVoid = generator || isVoidType(returnType2?.t) || async && isPromiseVoidType(returnType2?.t);
      block?.type === "BlockStatement" && (isVoid || set || isConstructor ? block.bare && block.implicitlyReturned && braceBlock(block) : block.implicitlyReturned || insertReturn(block));
    }
  }
  function processReturnValue(func) {
    let { block } = func, values = gatherRecursiveWithinFunction(block, ($) => $.type === "ReturnValue");
    if (!values.length)
      return !1;
    let ref = makeRef("ret"), declaration;
    for (let i1 = 0, len3 = values.length; i1 < len3; i1++) {
      let value = values[i1];
      value.children = [ref];
      let { ancestor, child } = findAncestor(
        value,
        ($1) => $1.type === "Declaration",
        isFunction
      );
      ancestor && (declaration ??= child);
    }
    let returnType = func.returnType ?? func.signature?.returnType;
    if (returnType) {
      let { t } = returnType, m;
      if (m = t.type, m === "TypePredicate") {
        let token = { token: "boolean" }, literal = {
          type: "TypeLiteral",
          t: token,
          children: [token]
        };
        returnType = {
          type: "ReturnTypeAnnotation",
          ts: !0,
          t: literal,
          children: [": ", literal]
        };
      } else m === "TypeAsserts" && (returnType = void 0);
    }
    returnType && (returnType = deepCopy(returnType), addParentPointers(returnType), func.signature.modifier.async && replaceNode(
      returnType.t,
      makeNode(wrapTypeInApplication(returnType.t, "Awaited")),
      returnType
    )), declaration ? declaration.typeSuffix == null && (declaration.children[1] = declaration.typeSuffix = returnType) : block.expressions.unshift([
      getIndent(block.expressions[0]),
      makeNode({
        type: "Declaration",
        children: ["let ", ref, returnType],
        names: []
      }),
      ";"
    ]), gatherRecursiveWithinFunction(
      block,
      (r) => r.type === "ReturnStatement" && !r.expression
    ).forEach((r) => (r.expression = ref, r.children.splice(-1, 1, " ", ref)));
    let ref1;
    if ((ref1 = block.children)[ref1.length - 2]?.type !== "ReturnStatement") {
      let ref2, indent = getIndent((ref2 = block.expressions)[ref2.length - 1]);
      block.expressions.push([
        indent,
        wrapWithReturn(ref, block, !indent)
      ]);
    }
    return !0;
  }
  function patternAsValue(pattern) {
    switch (pattern.type) {
      case "ArrayBindingPattern": {
        let children = [...pattern.children], index = children.indexOf(pattern.elements);
        if (index < 0) throw new Error("failed to find elements in ArrayBindingPattern");
        let elements = children[index] = pattern.elements.map(patternAsValue);
        return { ...pattern, elements, children };
      }
      case "ObjectBindingPattern": {
        let children = [...pattern.children], index = children.indexOf(pattern.properties);
        if (index < 0) throw new Error("failed to find properties in ArrayBindingPattern");
        let properties = children[index] = pattern.properties.map(patternAsValue);
        return { ...pattern, properties, children };
      }
      case "BindingProperty": {
        let children;
        if (pattern.value?.type === "Identifier")
          children = [pattern.value, pattern.delim], isWhitespaceOrEmpty(pattern.children[0]) && children.unshift(pattern.children[0]);
        else {
          if (children = [...pattern.children], pattern.initializer != null) {
            let index = children.indexOf(pattern.initializer);
            assert.notEqual(index, -1, "failed to find initializer in BindingElement"), children.splice(index, 1);
          }
          pattern.value != null && (children = children.map(($2) => $2 === pattern.value ? patternAsValue(pattern.value) : $2));
        }
        return { ...pattern, children };
      }
      case "AtBindingProperty": {
        let children = [...pattern.children];
        if (pattern.initializer != null) {
          let index = children.indexOf(pattern.initializer);
          assert.notEqual(index, -1, "failed to find initializer in AtBindingProperty"), children.splice(index, 1);
        }
        return { ...pattern, children };
      }
      case "BindingElement": {
        let children = [...pattern.children];
        if (pattern.initializer != null) {
          let index2 = children.indexOf(pattern.initializer);
          assert.notEqual(index2, -1, "failed to find initializer in BindingElement"), children.splice(index2, 1);
        }
        let index = children.indexOf(pattern.binding);
        return assert.notEqual(index, -1, "failed to find binding in BindingElement"), children[index] = patternAsValue(pattern.binding), { ...pattern, children };
      }
      default:
        return pattern;
    }
  }
  function patternBindings(pattern) {
    let bindings = [];
    return recurse(pattern), bindings;
    function recurse(pattern2) {
      switch (pattern2.type) {
        case "ArrayBindingPattern": {
          for (let ref3 = pattern2.elements, i2 = 0, len1 = ref3.length; i2 < len1; i2++) {
            let element = ref3[i2];
            recurse(element);
          }
          break;
        }
        case "ObjectBindingPattern": {
          for (let ref4 = pattern2.properties, i3 = 0, len22 = ref4.length; i3 < len22; i3++) {
            let property = ref4[i3];
            recurse(property);
          }
          break;
        }
        case "BindingElement": {
          recurse(pattern2.binding);
          break;
        }
        case "BindingProperty": {
          recurse(pattern2.value ?? pattern2.name);
          break;
        }
        case "Binding": {
          recurse(pattern2.pattern);
          break;
        }
        case "Identifier":
        case "AtBinding": {
          bindings.push(pattern2);
          break;
        }
      }
    }
  }
  function assignResults(node, collect) {
    if (!node) return;
    switch (node.type) {
      case "BlockStatement":
        if (node.expressions.length) {
          let ref5;
          assignResults((ref5 = node.expressions)[ref5.length - 1], collect);
        } else
          node.expressions.push(["", collect("void 0"), ";"]);
        return;
      case "CaseBlock":
        node.clauses.forEach((clause) => assignResults(clause, collect));
        return;
      case "WhenClause":
      case "DefaultClause":
      case "PatternClause": {
        assignResults(node.block, collect);
        return;
      }
    }
    if (!Array.isArray(node))
      return;
    let [, exp, semi] = node;
    if (semi?.type === "SemicolonDelimiter" || !exp || isExit(exp))
      return;
    exp = exp;
    let outer = exp;
    exp.type === "LabelledStatement" && (exp = exp.statement);
    let ref6, m1;
    switch (exp.type) {
      case "BreakStatement":
      case "ContinueStatement":
      case "DebuggerStatement":
      case "EmptyStatement":
      case "ReturnStatement":
      case "ThrowStatement":
        return;
      case "Declaration": {
        let ref7;
        exp.bindings?.length ? ref7 = patternAsValue((ref6 = exp.bindings)[ref6.length - 1].pattern) : ref7 = "void 0";
        let value = ref7;
        exp.children.push([
          "",
          [";", collect(value)]
        ]);
        return;
      }
      case "FunctionExpression": {
        if (exp.id) {
          exp.children.push([
            "",
            [";", collect(exp.id)]
          ]);
          return;
        }
        break;
      }
      case "ForStatement":
      case "IterationStatement":
      case "DoStatement":
      case "ComptimeStatement": {
        wrapIterationReturningResults(exp, collect);
        return;
      }
      case "BlockStatement": {
        if (exp.expressions.some(isExit))
          return;
        assignResults(exp.expressions[exp.expressions.length - 1], collect);
        return;
      }
      case "IfStatement": {
        assignResults(exp.then, collect), exp.else ? assignResults(exp.else.block, collect) : (braceBlock(exp.then), exp.children.push([" else {", collect("void 0"), "}"]));
        return;
      }
      case "PatternMatchingStatement": {
        assignResults(exp.children[0], collect);
        return;
      }
      case "SwitchStatement": {
        for (let ref8 = exp.caseBlock.clauses, i4 = 0, len3 = ref8.length; i4 < len3; i4++) {
          let clause = ref8[i4];
          assignResults(clause, collect);
        }
        return;
      }
      case "TryStatement": {
        for (let ref9 = exp.blocks, i5 = 0, len4 = ref9.length; i5 < len4; i5++) {
          let block = ref9[i5];
          assignResults(block, collect);
        }
        return;
      }
      case "PipelineExpression": {
        if (m1 = exp.children[1]?.type, m1 === "ReturnStatement" || m1 === "ThrowStatement")
          return;
        let semi2 = exp.children.lastIndexOf(";");
        if (0 <= semi2 && semi2 < exp.children.length - 1) {
          exp.children.splice(semi2 + 1, 1 / 0, collect(exp.children.slice(semi2 + 1)));
          return;
        }
        break;
      }
    }
    node[node.length - 1]?.type !== "SemicolonDelimiter" && (node[1] = collect(node[1]));
  }
  function insertReturn(node) {
    if (!node) return;
    switch (node.type) {
      case "BlockStatement": {
        if (node.expressions.length) {
          if (node.expressions.some(([, exp2]) => isExit(exp2)))
            return;
          let last = node.expressions[node.expressions.length - 1];
          insertReturn(last);
        } else {
          let m2;
          m2 = node.parent?.type, (m2 === "CatchClause" || m2 === "WhenClause") && node.expressions.push(["", wrapWithReturn(void 0, node)]);
        }
        return;
      }
      // NOTE: "CaseClause"s don't get a return statement inserted
      case "WhenClause": {
        if (node.break) {
          let breakIndex = node.children.indexOf(node.break);
          assert.notEqual(breakIndex, -1, "Could not find break in when clause"), node.children.splice(breakIndex, 1), node.break = void 0;
        }
        if (insertReturn(node.block), !isExit(node.block)) {
          let comment = hasTrailingComment(node.block.expressions), ref10;
          node.block.expressions.push([
            comment ? (ref10 = node.block.expressions)[ref10.length - 1][0] || `
` : "",
            wrapWithReturn(void 0, node, !comment)
          ]);
        }
        return;
      }
      case "DefaultClause": {
        insertReturn(node.block);
        return;
      }
    }
    if (!Array.isArray(node)) return;
    let [, exp, semi] = node;
    if (semi?.type === "SemicolonDelimiter" || !exp || isExit(exp))
      return;
    let outer = exp;
    exp.type === "LabelledStatement" && (exp = exp.statement);
    let ref11, m3;
    switch (exp.type) {
      case "BreakStatement":
      case "ContinueStatement":
      case "DebuggerStatement":
      case "EmptyStatement":
      case "ReturnStatement":
      case "ThrowStatement":
        return;
      case "Declaration": {
        let ref12;
        exp.bindings?.length ? ref12 = [" ", patternAsValue((ref11 = exp.bindings)[ref11.length - 1].pattern)] : ref12 = [];
        let value = ref12, parent = outer.parent, index = findChildIndex(parent?.expressions, outer);
        assert.notEqual(index, -1, "Could not find declaration in parent"), parent.expressions.splice(index + 1, 0, [
          "",
          {
            type: "ReturnStatement",
            expression: value,
            children: [
              parent.expressions[index][2] !== ";" ? ";" : void 0,
              "return",
              value
            ],
            parent: exp
          }
        ]), braceBlock(parent);
        return;
      }
      case "FunctionExpression": {
        if (exp.id) {
          let parent = outer.parent, index = findChildIndex(parent?.expressions, outer);
          assert.notEqual(index, -1, "Could not find function declaration in parent"), parent.expressions.splice(index + 1, 0, [
            "",
            wrapWithReturn(exp.id, exp, !0)
          ]), braceBlock(parent);
          return;
        }
        break;
      }
      case "ForStatement":
      case "IterationStatement":
      case "DoStatement":
      case "ComptimeStatement": {
        wrapIterationReturningResults(exp);
        return;
      }
      case "BlockStatement": {
        insertReturn(exp.expressions[exp.expressions.length - 1]);
        return;
      }
      case "IfStatement": {
        insertReturn(exp.then), exp.else ? insertReturn(exp.else.block) : exp.children.push([
          "",
          // NOTE: add a prefixed semicolon because the if block may not be braced
          wrapWithReturn(void 0, exp, !0)
        ]);
        return;
      }
      case "PatternMatchingStatement": {
        insertReturn(exp.children[0]);
        return;
      }
      case "SwitchStatement": {
        for (let ref13 = exp.caseBlock.clauses, i6 = 0, len5 = ref13.length; i6 < len5; i6++) {
          let clause = ref13[i6];
          insertReturn(clause);
        }
        return;
      }
      case "TryStatement": {
        for (let ref14 = exp.blocks, i7 = 0, len6 = ref14.length; i7 < len6; i7++) {
          let block = ref14[i7];
          insertReturn(block);
        }
        return;
      }
      case "PipelineExpression": {
        if (m3 = exp.children[1]?.type, m3 === "ReturnStatement" || m3 === "ThrowStatement")
          return;
        let semi2 = exp.children.lastIndexOf(";");
        if (0 <= semi2 && semi2 < exp.children.length - 1) {
          exp.children.splice(semi2 + 1, 1 / 0, wrapWithReturn(exp.children.slice(semi2 + 1)));
          return;
        }
        break;
      }
    }
    node[node.length - 1]?.type !== "SemicolonDelimiter" && (node[1] = wrapWithReturn(node[1]));
  }
  function processBreakContinueWith(statement) {
    let changed = !1;
    for (let control of gatherRecursiveWithinFunction(
      statement.block,
      ($3) => $3.type === "BreakStatement" || $3.type === "ContinueStatement"
    ))
      if (control.with) {
        if (control.label) {
          let m4;
          if (m4 = statement.parent, !(typeof m4 == "object" && m4 != null && "type" in m4 && m4.type === "LabelledStatement" && "label" in m4 && typeof m4.label == "object" && m4.label != null && "name" in m4.label && m4.label.name === control.label.name))
            continue;
        } else {
          let { ancestor } = findAncestor(
            control,
            (s) => s === statement || s.type === "IterationStatement" || s.type === "ForStatement" || s.type === "SwitchStatement" && control.type === "BreakStatement"
          );
          if (ancestor !== statement)
            continue;
        }
        control.children.unshift(
          control.type === "BreakStatement" ? (changed = !0, [statement.resultsRef, " =", control.with, ";"]) : (
            // control.type is "ContinueStatement"
            [statement.resultsRef, ".push(", trimFirstSpace(control.with), ");"]
          )
        ), updateParentPointers(control.with, control);
        let i = control.children.findIndex(($4) => $4?.type === "Error");
        i >= 0 && control.children.splice(i, 1);
        let block = control.parent;
        if (block?.type !== "BlockStatement")
          throw new Error(`Expected parent of ${control.type.toLowerCase().replace("statement", "")} to be BlockStatement`);
        braceBlock(block);
      }
    return changed;
  }
  function wrapIterationReturningResults(statement, collect) {
    if (statement.type === "DoStatement" || statement.type === "ComptimeStatement") {
      let results;
      if (statement.type === "ComptimeStatement") {
        insertReturn(statement.block);
        let expression = expressionizeComptime(statement);
        replaceNode(statement, expression);
        let parent = expression.parent;
        results = parent?.expressions?.[findChildIndex(parent?.expressions, expression)], assert.equal(
          results?.[1],
          expression,
          "comptime statement found outside statement tuple"
        );
      } else
        results = statement.block;
      collect ? assignResults(results, collect) : insertReturn(results);
      return;
    }
    if (statement.resultsRef != null)
      return;
    if (statement.resultsParent) {
      let { ancestor: ancestor2 } = findAncestor(
        statement,
        ($5) => $5.type === "ForStatement" || $5.type === "IterationStatement",
        isFunction
      );
      if (!ancestor2) {
        statement.children.unshift({
          type: "Error",
          message: "Could not find ancestor of spread iteration"
        });
        return;
      }
      let resultsRef2 = statement.resultsRef = ancestor2.resultsRef;
      iterationDefaultBody(statement);
      let { block } = statement;
      block.empty || assignResults(block, (node) => [resultsRef2, ".push(", node, ")"]);
      return;
    }
    let resultsRef = statement.resultsRef ??= makeRef("results"), declaration = iterationDeclaration(statement), { ancestor, child } = findAncestor(statement, ($6) => $6.type === "BlockStatement");
    assert.notNull(ancestor, `Could not find block containing ${statement.type}`);
    let index = findChildIndex(ancestor.expressions, child);
    assert.notEqual(index, -1, `Could not find ${statement.type} in containing block`);
    let iterationTuple = ancestor.expressions[index];
    ancestor.expressions.splice(index, 0, [iterationTuple[0], declaration, ";"]), iterationTuple[0] = "", braceBlock(ancestor), collect ? statement.children.push(collect(resultsRef)) : statement.children.push(";return ", resultsRef, ";");
  }
  function iterationDeclaration(statement) {
    let { resultsRef, block } = statement, reduction = statement.type === "ForStatement" && statement.reduction, decl = reduction ? "let" : "const";
    (statement.type === "IterationStatement" || statement.type === "ForStatement") && processBreakContinueWith(statement) && (decl = "let");
    let breakWithOnly = decl === "let" && isLoopStatement(statement) && gatherRecursive(
      block,
      (s) => s.type === "BreakStatement" && !s.with,
      (s) => isFunction(s) || s.type === "IterationStatement"
    ).length === 0, declaration = {
      type: "Declaration",
      children: [decl, " ", resultsRef],
      decl,
      names: [],
      bindings: []
    };
    if (reduction ? declaration.children.push("=" + (() => {
      switch (reduction.subtype) {
        case "some":
          return "false";
        case "every":
          return "true";
        case "first":
          return "undefined";
        case "min":
          return "Infinity";
        case "max":
          return "-Infinity";
        case "product":
          return "1";
        case "join":
          return '""';
        case "concat":
          return "[]";
        default:
          return "0";
      }
    })()) : statement.object ? declaration.children.push("={}") : decl === "const" ? declaration.children.push("=[]") : breakWithOnly || declaration.children.push(";", resultsRef, "=[]"), !breakWithOnly) {
      if (iterationDefaultBody(statement))
        return declaration;
      block.empty || assignResults(block, (node) => {
        if (statement.object)
          return ["Object.assign(", resultsRef, ",", node, ")"];
        if (!reduction)
          return [resultsRef, ".push(", node, ")"];
        switch (reduction.subtype) {
          case "some":
            return ["if (", node, ") {", resultsRef, " = true; break}"];
          case "every":
            return [
              "if (!",
              makeLeftHandSideExpression(node),
              ") {",
              resultsRef,
              " = false; break}"
            ];
          case "count":
            return ["if (", node, ") ++", resultsRef];
          case "first":
            return [resultsRef, " = ", node, "; break"];
          case "sum":
          case "join":
            return [resultsRef, " += ", node];
          case "concat":
            return [getHelperRef("concatAssign"), "(", resultsRef, ", ", node, ")"];
          case "product":
            return [resultsRef, " *= ", node];
          case "min":
            return [resultsRef, " = Math.min(", resultsRef, ", ", node, ")"];
          case "max":
            return [resultsRef, " = Math.max(", resultsRef, ", ", node, ")"];
        }
      });
    }
    return declaration;
  }
  function iterationDefaultBody(statement) {
    let { block, resultsRef } = statement;
    if (!block.empty)
      return !1;
    let reduction = statement.type === "ForStatement" && statement.reduction;
    function fillBlock(expression) {
      let ref15, m5;
      return m5 = (ref15 = block.expressions)[ref15.length - 1], Array.isArray(m5) && m5.length >= 2 && typeof m5[1] == "object" && m5[1] != null && "type" in m5[1] && m5[1].type === "EmptyStatement" && "implicit" in m5[1] && m5[1].implicit === !0 && block.expressions.pop(), block.expressions.push(expression), block.empty = !1, braceBlock(block);
    }
    if (reduction)
      switch (reduction.subtype) {
        case "some":
          return fillBlock(["", [resultsRef, " = true; break"]]), block.empty = !1, braceBlock(block), !0;
        case "every":
          return fillBlock(["", [resultsRef, " = false; break"]]), block.empty = !1, braceBlock(block), !0;
        case "count":
          return fillBlock(["", ["++", resultsRef]]), block.empty = !1, braceBlock(block), !0;
      }
    if (statement.type === "ForStatement") {
      let declaration = statement.eachDeclaration ?? statement.declaration;
      if (declaration?.type === "ForDeclaration") {
        if (reduction) {
          let bindings = patternBindings(declaration.binding.pattern);
          if (bindings.length) {
            fillBlock(["", bindings[0]]);
            for (let binding of bindings.slice(1))
              binding.children.unshift({
                type: "Error",
                subtype: "Warning",
                message: "Ignored binding in reduction loop with implicit body"
              });
          } else
            fillBlock([
              "",
              {
                type: "Error",
                message: "Empty binding pattern in reduction loop with implicit body"
              }
            ]);
        } else
          fillBlock(["", patternAsValue(declaration.binding.pattern)]);
        block.empty = !1;
      }
    }
    return !1;
  }
  function processParams(f) {
    let { type, parameters, block } = f, isConstructor = f.name === "constructor";
    type === "ArrowFunction" && parameters && parameters.tp && parameters.tp.parameters.length === 1 && parameters.tp.parameters.push(",");
    let tt, before = [], rest, after = [];
    function append2(p) {
      (rest ? after : before).push(p);
    }
    for (let ref16 = parameters.parameters, i8 = 0, len7 = ref16.length; i8 < len7; i8++) {
      let param = ref16[i8];
      switch (param.type) {
        case "ThisType": {
          if (tt)
            append2({
              type: "Error",
              message: "Only one typed this parameter is allowed"
            }), append2(param);
          else if (tt = trimFirstSpace(param), before.length || rest) {
            let ref17, delim = (ref17 = tt.children)[ref17.length - 1];
            Array.isArray(delim) && (delim = delim[delim.length - 1]), typeof delim == "object" && delim != null && "token" in delim && delim.token === "," || (tt = {
              ...tt,
              children: [...tt.children, ", "]
            });
          }
          break;
        }
        case "FunctionRestParameter": {
          rest ? (append2({
            type: "Error",
            message: "Only one rest parameter is allowed"
          }), append2(param)) : rest = param;
          break;
        }
        default:
          append2(param);
      }
    }
    if (parameters.names = before.flatMap(($7) => $7.names), parameters.parameters.splice(0, 1 / 0), tt && parameters.parameters.push(tt), parameters.parameters.push(...before), rest) {
      let restIdentifier = rest.binding.ref || rest.binding;
      if (parameters.names.push(...rest.names || []), rest.children.pop(), after.length) {
        let m6;
        m6 = rest.binding.type, (m6 === "ArrayBindingPattern" || m6 === "ObjectBindingPattern" || m6 === "NamedBindingPattern") && parameters.parameters.push({
          type: "Error",
          message: "Non-end rest parameter cannot be binding pattern"
        }), after = trimFirstSpace(after);
        let names = after.flatMap(($8) => $8.names), elements = after.map((p) => p.type === "Error" ? p : {
          ...p,
          // omit individual argument types from output
          children: p.children.filter((a2) => a2 !== p.typeSuffix),
          type: "BindingElement"
        }), pattern = gatherBindingPatternTypeSuffix(makeNode({
          type: "ArrayBindingPattern",
          elements,
          length: after.length,
          children: ["[", elements, "]"],
          names
        })), { typeSuffix } = pattern, blockPrefix = parameters.blockPrefix = makeNode({
          type: "PostRestBindingElements",
          children: [
            pattern,
            " = ",
            restIdentifier,
            ".splice(-",
            after.length.toString(),
            ")"
          ],
          elements,
          names
        });
        if (rest.typeSuffix) {
          let optionalType = function(typeSuffix3, fallback) {
            let t2 = typeSuffix3?.t ?? fallback;
            return typeSuffix3?.optional ? [
              t2,
              {
                type: "Error",
                message: "Optional parameter not allowed in/after rest parameter"
              }
            ] : t2;
          }, ref = makeRef("rest"), restRef = [
            { children: [ref], ts: !0 },
            { children: [restIdentifier], js: !0 }
          ];
          blockPrefix.children[blockPrefix.children.indexOf(restIdentifier)] = restRef, blockPrefix.children.push({
            ts: !0,
            children: [
              ", ",
              restIdentifier,
              " = ",
              ref,
              " as ",
              trimFirstSpace(rest.typeSuffix.t)
            ]
          });
          let bindingIndex = rest.rest.children.indexOf(rest.rest.binding);
          assert.notEqual(bindingIndex, -1, "Could not find binding in rest parameter"), rest.rest.children[bindingIndex] = rest.rest.binding = { ...rest.rest.binding, js: !0 }, rest.rest.children.splice(bindingIndex + 1, 0, {
            children: [ref],
            ts: !0
          });
          let oldSuffix = rest.typeSuffix, colon = oldSuffix.colon ?? ": ", afterTypes = after.flatMap((p) => [",", optionalType(p.typeSuffix, " unknown")]), t = [
            "[",
            "...",
            optionalType(oldSuffix, "unknown[]"),
            ...afterTypes,
            "]"
          ], typeSuffix2 = makeNode({
            type: "TypeSuffix",
            ts: !0,
            colon,
            t,
            children: [
              ...oldSuffix.children.filter(($9) => (
                // spaces and colon
                $9 !== oldSuffix.optional && $9 !== oldSuffix.t
              )),
              oldSuffix.colon ? void 0 : colon,
              t
            ]
          }), suffixIndex = rest.children.indexOf(rest.typeSuffix);
          assert.notEqual(suffixIndex, -1, "Could not find typeSuffix in rest parameter"), rest.children[suffixIndex] = rest.typeSuffix = typeSuffix2, blockPrefix.children.splice(-1, 0, {
            ts: !0,
            children: [" as [", afterTypes.slice(1), "]"]
          });
        }
      }
      parameters.parameters.push(rest);
    }
    if (!block)
      return;
    let { expressions } = block;
    if (!expressions)
      return;
    let indent;
    expressions.length ? indent = expressions[0][0] : indent = "";
    let [splices, thisAssignments] = gatherBindingCode(parameters, {
      injectParamProps: isConstructor,
      assignPins: !0
    }), subbindings = gatherSubbindings(parameters.parameters);
    if (simplifyBindingProperties(parameters.parameters), simplifyBindingProperties(subbindings), isConstructor) {
      let { ancestor } = findAncestor(f, ($10) => $10.type === "ClassExpression");
      if (ancestor != null) {
        let fields = new Set(gatherRecursiveWithinFunction(ancestor, ($11) => $11.type === "FieldDefinition").map(($12) => $12.id).filter((a3) => typeof a3 == "object" && a3 != null && "type" in a3 && a3.type === "Identifier").map(($13) => $13.name)), classExpressions = ancestor.body.expressions, index2 = findChildIndex(classExpressions, f);
        assert.notEqual(index2, -1, "Could not find constructor in class");
        let m7;
        for (; m7 = classExpressions[index2 - 1]?.[1], typeof m7 == "object" && m7 != null && "type" in m7 && m7.type === "MethodDefinition" && "name" in m7 && m7.name === "constructor"; )
          index2--;
        let fStatement = classExpressions[index2];
        for (let ref18 = gatherRecursive(parameters, ($14) => $14.type === "Parameter"), i9 = 0, len8 = ref18.length; i9 < len8; i9++) {
          let parameter = ref18[i9], { accessModifier } = parameter;
          if (accessModifier || parameter.typeSuffix)
            for (let ref19 = gatherRecursive(parameter, ($15) => $15.type === "AtBinding"), i10 = 0, len9 = ref19.length; i10 < len9; i10++) {
              let binding = ref19[i10], typeSuffix = binding.parent?.typeSuffix;
              if (!(accessModifier || typeSuffix))
                continue;
              parameter.accessModifier && (replaceNode(parameter.accessModifier, void 0), parameter.accessModifier = void 0);
              let id = binding.ref.id;
              fields.has(id) || (classExpressions.splice(index2++, 0, [fStatement[0], {
                type: "FieldDefinition",
                id,
                typeSuffix,
                children: [accessModifier, id, typeSuffix]
              }, ";"]), fStatement[0] = "");
            }
        }
      }
    }
    let delimiter = {
      type: "SemicolonDelimiter",
      children: [";"]
    }, prefix = [];
    subbindings.length && prefix.push(makeNode({
      type: "Declaration",
      children: ["const ", subbindings.slice(1)],
      names: subbindings.flatMap(($16) => $16.names ?? []),
      bindings: [],
      decl: "const"
    }));
    for (let ref20 = splices, i11 = 0, len10 = ref20.length; i11 < len10; i11++) {
      let binding = ref20[i11];
      assert.equal(binding.type, "PostRestBindingElements", "splice should be of type Binding"), prefix.push(makeNode({
        type: "Declaration",
        children: ["let ", binding],
        names: binding.names,
        bindings: [],
        // avoid implicit return of any bindings
        decl: "let"
      }));
    }
    if (concatAssign(prefix, thisAssignments), prefix = prefix.map((s) => s?.js ? ["", makeNode({
      // TODO: figure out how to get JS only statement tuples
      ...s,
      children: [indent, ...s.children, delimiter]
    })] : [indent, s, delimiter]), !prefix.length)
      return;
    let index = -1;
    isConstructor && (index = findSuperCall(block)), expressions.splice(index + 1, 0, ...prefix), updateParentPointers(block), braceBlock(block);
  }
  function findSuperCall(block) {
    let { expressions } = block, superCalls = gatherNodes(
      expressions,
      (a4) => typeof a4 == "object" && a4 != null && "type" in a4 && a4.type === "CallExpression" && "children" in a4 && Array.isArray(a4.children) && a4.children.length >= 1 && typeof a4.children[0] == "object" && a4.children[0] != null && "token" in a4.children[0] && a4.children[0].token === "super"
    );
    if (superCalls.length) {
      let { child } = findAncestor(superCalls[0], (a5) => a5 === block), index = findChildIndex(expressions, child);
      if (index < 0)
        throw new Error("Could not find super call within top-level expressions");
      return index;
    } else
      return -1;
  }
  function processSignature(f) {
    let { block, signature } = f;
    if (!f.async?.length && hasAwait(block))
      if (f.async != null)
        f.async.push("async "), signature.modifier.async = !0;
      else
        for (let ref21 = gatherRecursiveWithinFunction(block, ($17) => $17.type === "Await"), i12 = 0, len11 = ref21.length; i12 < len11; i12++) {
          let a = ref21[i12], i = findChildIndex(a.parent, a);
          a.parent.children.splice(i + 1, 0, {
            type: "Error",
            message: `await invalid in ${signature.modifier.get ? "getter" : signature.modifier.set ? "setter" : signature.name}`
          });
        }
    if (!f.generator?.length && hasYield(block))
      if (f.generator != null)
        f.generator.push("*"), signature.modifier.generator = !0;
      else
        for (let ref22 = gatherRecursiveWithinFunction(block, ($18) => $18.type === "YieldExpression"), i13 = 0, len12 = ref22.length; i13 < len12; i13++) {
          let y = ref22[i13], i = y.children.findIndex(($19) => $19.type === "Yield");
          y.children.splice(i + 1, 0, {
            type: "Error",
            message: `yield invalid in ${f.type === "ArrowFunction" ? "=> arrow function" : signature.modifier.get ? "getter" : signature.modifier.set ? "setter" : signature.name}`
          });
        }
    signature.modifier.async && !signature.modifier.generator && signature.returnType && !isPromiseType(signature.returnType.t) && replaceNode(signature.returnType.t, wrapTypeInPromise(signature.returnType.t));
  }
  function processFunctions(statements, config2) {
    for (let ref23 = gatherRecursiveAll(statements, ($20) => $20.type === "FunctionExpression" || $20.type === "ArrowFunction" || $20.type === "MethodDefinition"), i14 = 0, len13 = ref23.length; i14 < len13; i14++) {
      let f = ref23[i14];
      (f.type === "FunctionExpression" || f.type === "MethodDefinition") && implicitFunctionBlock(f), processSignature(f), processParams(f), processReturn(f, config2.implicitReturns);
    }
  }
  function expressionizeIteration(exp) {
    let { async, generator, block, children, statement } = exp, i = children.indexOf(statement);
    if (i < 0)
      throw new Error("Could not find iteration statement in iteration expression");
    if (statement.type === "DoStatement" || statement.type === "ComptimeStatement") {
      children.splice(i, 1, wrapIIFE([["", statement, void 0]], async, generator)), updateParentPointers(exp);
      return;
    }
    let statements;
    if (generator)
      iterationDefaultBody(statement), assignResults(block, (node) => ({
        type: "YieldExpression",
        expression: node,
        children: [
          {
            type: "Yield",
            token: "yield "
          },
          node
        ]
      })), statements = [
        ["", statement]
      ];
    else {
      let resultsRef = statement.resultsRef ??= makeRef("results");
      statements = [
        ["", iterationDeclaration(statement), ";"],
        ["", statement, statement.block.bare ? ";" : void 0],
        ["", resultsRef]
      ];
    }
    let done;
    if (!async) {
      let ref24;
      if ((ref24 = blockContainingStatement(exp)) && typeof ref24 == "object" && "block" in ref24 && "index" in ref24) {
        let { block: parentBlock, index } = ref24;
        statements[0][0] = parentBlock.expressions[index][0], parentBlock.expressions.splice(index, index + 1 - index, ...statements), updateParentPointers(parentBlock), braceBlock(parentBlock), done = !0;
      }
    }
    done || (generator || (statements[statements.length - 1][1] = wrapWithReturn(statements[statements.length - 1][1])), children.splice(i, 1, wrapIIFE(statements, async, generator)), updateParentPointers(exp));
  }
  function processIterationExpressions(statements) {
    for (let ref25 = gatherRecursiveAll(statements, ($21) => $21.type === "IterationExpression"), i15 = 0, len14 = ref25.length; i15 < len14; i15++) {
      let s = ref25[i15];
      expressionizeIteration(s);
    }
  }
  function skipImplicitArguments(args) {
    if (args.length === 1) {
      let arg0 = args[0];
      return arg0.type === "Argument" && (arg0 = arg0.expression), arg0.type === "StatementExpression" && (arg0 = arg0.statement), arg0.type === "IterationExpression" && arg0.subtype !== "DoStatement" && !arg0.async && isEmptyBareBlock(arg0.block);
    }
    return !1;
  }
  function processCoffeeDo(ws, expression) {
    ws = trimFirstSpace(ws);
    let args = [];
    if (typeof expression == "object" && expression != null && "type" in expression && expression.type === "ArrowFunction" || typeof expression == "object" && expression != null && "type" in expression && expression.type === "FunctionExpression") {
      let { parameters } = expression, parameterList = parameters.parameters, results1 = [];
      for (let i16 = 0, len15 = parameterList.length; i16 < len15; i16++) {
        let parameter = parameterList[i16];
        if (typeof parameter == "object" && parameter != null && "type" in parameter && parameter.type === "Parameter") {
          let ref26;
          if (ref26 = parameter.initializer) {
            let initializer = ref26;
            args.push(initializer.expression, parameter.delim), parameter = {
              ...parameter,
              initializer: void 0,
              children: parameter.children.filter((a6) => a6 !== initializer)
            };
          } else
            args.push(parameter.children.filter(
              (a7) => a7 !== parameter.typeSuffix
            ));
        }
        results1.push(parameter);
      }
      let newParameterList = results1, newParameters = {
        ...parameters,
        parameters: newParameterList,
        children: parameters.children.map(($22) => $22 === parameterList ? newParameterList : $22)
      };
      expression = {
        ...expression,
        parameters: newParameters,
        children: expression.children.map(($23) => $23 === parameters ? newParameters : $23)
      };
    }
    return {
      type: "CallExpression",
      children: [
        ws,
        makeLeftHandSideExpression(expression),
        {
          type: "Call",
          args,
          children: ["(", args, ")"]
        }
      ]
    };
  }
  function makeAmpersandFunction(rhs) {
    let { ref, typeSuffix, body } = rhs;
    ref == null && (ref = makeRef("$"), inplacePrepend(ref, body)), startsWithPredicate(body, ($24) => $24.type === "ObjectExpression") && (body = makeLeftHandSideExpression(body));
    let parameterList = [
      typeSuffix ? [ref, typeSuffix] : ref
    ], parameters = makeNode({
      type: "Parameters",
      children: typeSuffix ? ["(", parameterList, ")"] : [parameterList],
      parameters: parameterList,
      names: []
    }), expressions = [[" ", body]], block = makeNode({
      type: "BlockStatement",
      bare: !0,
      expressions,
      children: [expressions],
      implicitlyReturned: !0
    }), async = [], children = [async, parameters, " =>", block], fn = makeNode({
      type: "ArrowFunction",
      async,
      signature: {
        modifier: {
          async: !!async.length
        }
      },
      children,
      ref,
      block,
      parameters,
      ampersandBlock: !0,
      body
    });
    return isStatement(body) && (braceBlock(block), fn.ampersandBlock = !1), gatherRecursiveWithinFunction(
      block,
      (a8) => a8 === ref
    ).length > 1 && (fn.ampersandBlock = !1), fn;
  }

  // unplugin-civet:/Users/greghuc/workspace/Civet/source/parser/block.civet.jsx
  function blockWithPrefix(prefixStatements, block) {
    if (prefixStatements && prefixStatements.length) {
      let expressions = [...prefixStatements, ...block.expressions];
      updateParentPointers(prefixStatements, block), block = {
        ...block,
        expressions,
        children: block.children === block.expressions ? expressions : block.children.map((c) => c === block.expressions ? expressions : c)
      }, braceBlock(block), updateParentPointers(block);
    }
    return block;
  }
  function braceBlock(block) {
    if (block.bare && !block.root) {
      block.children === block.expressions && (block.children = [block.expressions]), block.children.unshift(" {"), block.children.push("}");
      let { implicitlyReturned } = block;
      block.bare = block.implicitlyReturned = !1, implicitlyReturned && processReturn(block.parent, !0);
    }
  }
  function duplicateBlock(block) {
    let expressions = [...block.expressions], children;
    return block.children === block.expressions ? children = expressions : (children = [...block.children], children.splice(children.indexOf(block.expressions), 1, expressions)), {
      ...block,
      expressions,
      children
    };
  }
  function bracedBlock(block) {
    return block = duplicateBlock(block), braceBlock(block), block;
  }
  function makeEmptyBlock() {
    let expressions = [];
    return {
      type: "BlockStatement",
      expressions,
      children: ["{", expressions, "}"],
      bare: !1,
      empty: !0
    };
  }
  function makeBlockFragment() {
    let expressions = [];
    return {
      type: "BlockStatement",
      children: expressions,
      parent: void 0,
      expressions,
      bare: !1,
      root: !1
    };
  }
  function replaceBlockExpression(node, child, replacement) {
    let found = !1, { expressions } = node;
    for (let i1 = 0, len3 = expressions.length; i1 < len3; i1++) {
      let statement = expressions[i1], [, s] = statement;
      if (s === child) {
        statement[1] = replacement, replacement.parent = node, found = !0;
        break;
      }
    }
    if (!found)
      throw new Error("Could not find child to replace");
  }
  function getIndent(statement) {
    let indent = statement?.[0];
    return Array.isArray(indent) ? (indent = indent.flat(1 / 0), indent.filter((n) => n && n.type !== "Comment").map((n) => typeof n == "string" ? n : n.token != null ? n.token : "")) : indent;
  }
  function hoistRefDecs(statements) {
    gatherRecursiveAll(statements, (s) => s.hoistDec).forEach((node) => {
      let { hoistDec } = node;
      node.hoistDec = null;
      let { ancestor, child } = findAncestor(node, (ancestor2) => ancestor2.type === "BlockStatement" && (!ancestor2.bare || ancestor2.root));
      if (ancestor)
        insertHoistDec(ancestor, child, hoistDec);
      else
        throw new Error("Couldn't find block to hoist declaration into.");
    });
  }
  function insertHoistDec(block, node, dec) {
    let { expressions } = block, index = findChildIndex(expressions, node);
    if (index < 0)
      throw new Error("Couldn't find expression in block for hoistable declaration.");
    let statement = [expressions[index][0], dec, ";"];
    expressions[index][0] = "", expressions.splice(index, 0, statement), updateParentPointers(dec, block);
  }
  function processBlocks(statements) {
    insertSemicolon(statements);
    for (let ref = gatherRecursive(statements, ($) => $.type === "BlockStatement"), i2 = 0, len1 = ref.length; i2 < len1; i2++) {
      let { expressions } = ref[i2];
      processBlocks(expressions);
    }
  }
  function insertSemicolon(statements) {
    let l = statements.length;
    for (let i3 = 0, len22 = statements.length; i3 < len22; i3++) {
      let i = i3, s = statements[i3];
      if (i < l - 1 && needsPrecedingSemicolon(statements[i + 1][1])) {
        let delim = s[2];
        delim ? typeof delim == "string" && !delim.match(/;/) && (s[2] = `;${delim}`) : s[2] = ";";
      }
    }
  }
  function needsPrecedingSemicolon(exp) {
    if (!exp)
      return !1;
    if (Array.isArray(exp)) {
      for (let i4 = 0, len3 = exp.length; i4 < len3; i4++) {
        let child = exp[i4];
        if (child != null)
          return needsPrecedingSemicolon(child);
      }
      return !1;
    }
    if (isToken(exp) && (exp = exp.token), typeof exp == "string")
      return /^\s*[\(\[\`\+\-\/]/.test(exp);
    switch (exp.type) {
      case "ParenthesizedExpression":
      case "ArrayExpression":
      case "ArrowFunction":
      case "TemplateLiteral":
      case "RegularExpressionLiteral":
      case "RangeExpression":
      case "ComputedPropertyName":
        return !0;
      case "AssignmentExpression":
        return startsWith(exp, /^(\[|\()/);
      case "Literal":
        return exp.raw?.startsWith("-") || exp.raw?.startsWith("+");
      case "PipelineExpression":
      case "UnwrappedExpression":
        return needsPrecedingSemicolon(exp.children[1]);
      default:
        return exp.children ? needsPrecedingSemicolon(exp.children) : void 0;
    }
  }
  function blockContainingStatement(exp) {
    let child = exp, parent = exp.parent, m;
    for (; parent != null && (m = parent.type, m === "StatementExpression" || m === "PipelineExpression" || m === "UnwrappedExpression"); )
      child = parent, parent = parent.parent;
    if (parent?.type !== "BlockStatement")
      return;
    let index = findChildIndex(parent.expressions, child);
    if (assert.notEqual(index, -1, "Could not find statement in parent block"), parent.expressions[index][1] === child)
      return {
        block: parent,
        index,
        child
      };
  }

  // unplugin-civet:/Users/greghuc/workspace/Civet/source/parser/op.civet.jsx
  var precedenceOrder = [
    ["||", "??"],
    ["^^"],
    ["&&"],
    ["|"],
    ["^"],
    ["&"],
    // NOTE: Extra in-between level for &&ing together relational chains
    ["chain"],
    // NOTE: Equality and inequality merged because of relational chaining
    [
      "==",
      "!=",
      "===",
      "!==",
      "<",
      "<=",
      ">",
      ">=",
      "in",
      "instanceof"
    ],
    // NOTE: Extra in-between level for default custom operators
    ["custom"],
    ["<<", ">>", ">>>"],
    ["+", "-"],
    ["*", "/", "%"],
    ["**"]
  ], precedenceMap = /* @__PURE__ */ new Map();
  for (let i1 = 0, len3 = precedenceOrder.length; i1 < len3; i1++) {
    let prec = i1, ops = precedenceOrder[i1];
    for (let i2 = 0, len1 = ops.length; i2 < len1; i2++) {
      let op = ops[i2];
      precedenceMap.set(op, prec);
    }
  }
  var precedenceStep = 1 / 64, precedenceAnd = precedenceMap.get("&&"), precedenceRelational = precedenceMap.get("=="), precedenceCustomDefault = precedenceMap.get("custom");
  function getPrecedence(op) {
    return typeof op == "string" ? precedenceMap.get(op) ?? (() => {
      throw new Error(`Unknown operator: ${op}`);
    })() : op.type === "PatternTest" ? precedenceRelational : typeof op.prec == "number" ? op.prec : precedenceMap.get(op.prec ?? op.token) ?? (op.relational ? precedenceRelational : precedenceCustomDefault);
  }
  function processBinaryOpExpression($0) {
    return processExpandedBinaryOpExpression(expandChainedComparisons($0));
  }
  function processExpandedBinaryOpExpression(expandedOps) {
    let i = 2;
    for (; i < expandedOps.length; ) {
      let op = expandedOps[i];
      if (op.special) {
        let advanceLeft = function(allowEqual) {
          for (; start >= 4; ) {
            let prevPrec = getPrecedence(expandedOps[start - 2]);
            if (!(prevPrec > prec || allowEqual && prevPrec === prec))
              return prevPrec === prec;
            start -= 4;
          }
          return !1;
        }, advanceRight = function(allowEqual) {
          for (; end + 4 < expandedOps.length; ) {
            let nextPrec = getPrecedence(expandedOps[end + 2]);
            if (!(nextPrec > prec || allowEqual && nextPrec === prec))
              return nextPrec === prec;
            end += 4;
          }
          return !1;
        }, start = i - 2, end = i + 2, prec = getPrecedence(op), error;
        switch (op.assoc) {
          case "left":
          case void 0: {
            advanceLeft(!0), advanceRight(!1);
            break;
          }
          case "right": {
            advanceLeft(!1), advanceRight(!0);
            break;
          }
          case "non": {
            (advanceLeft(!1) || advanceRight(!1)) && (error = {
              type: "Error",
              message: `non-associative operator ${op.token} used at same precedence level without parenthesization`
            });
            break;
          }
          case "arguments": {
            advanceLeft(!1) && (error = {
              type: "Error",
              message: `arguments operator ${op.token} used at same precedence level as ${expandedOps[start - 2].token} to the left`
            }), advanceRight(!0);
            break;
          }
          default:
            throw new Error(`Unsupported associativity: ${op.assoc}`);
        }
        let a = start === i - 2 ? expandedOps[start] : expandedOps.slice(start, i - 1), wsOp = expandedOps[i - 1], wsB = expandedOps[i + 1], b = end === i + 2 ? expandedOps[i + 2] : expandedOps.slice(i + 2, end + 1);
        if (op.assoc === "arguments") {
          let i2 = 2;
          for (; i2 < b.length; )
            prec === getPrecedence(b[i2]) && (b[i2].token !== op.token && (error ??= {
              type: "Error",
              message: `arguments operator ${op.token} used at same precedence level as ${b[i2].token} to the right`
            }), b[i2] = ","), i2 += 4;
        } else
          b = processExpandedBinaryOpExpression(b);
        op.token === "instanceof" && (wsOp.length === 0 && (wsOp = " "), wsB.length === 0 && (wsB = " "), typeof b == "object" && b != null && "type" in b && b.type === "Literal" && "children" in b && Array.isArray(b.children) && b.children.length >= 1 && typeof b.children[0] == "object" && b.children[0] != null && "type" in b.children[0] && b.children[0].type === "StringLiteral" && (a = ["typeof ", makeLeftHandSideExpression(a)], op.negated ? op = { ...op, token: "!==", negated: !1 } : op = { ...op, token: "===" })), op.asConst && (a = makeAsConst(a), b = makeAsConst(b));
        let children, type;
        if (op.type === "PatternTest")
          children = [processPatternTest(a, b)];
        else if (op.type === "ChainOp")
          children = [a, wsOp, "&&", wsB, b], (start - 2 >= 0 && getPrecedence(expandedOps[start - 2]) >= precedenceAnd && expandedOps[start - 2].token !== "&&" || end + 2 < expandedOps.length && getPrecedence(expandedOps[end + 2]) >= precedenceAnd && expandedOps[end + 2].token !== "&&") && (children = ["(", ...children, ")"]);
        else if (op.call)
          wsOp = trimFirstSpace(wsOp), op.reversed ? (wsB = trimFirstSpace(wsB), children = [wsOp, op.call, "(", wsB, b, ", ", a, ")", op.suffix]) : children = [wsOp, op.call, "(", a, ",", wsB, b, ")", op.suffix], type = "CallExpression";
        else if (op.method)
          wsOp = trimFirstSpace(wsOp), wsB = trimFirstSpace(wsB), op.reversed ? (b.type !== "CallExpression" && (b = makeLeftHandSideExpression(b)), b = dotNumericLiteral(b), children = [wsB, b, wsOp, ".", op.method, "(", a, ")"]) : (a.type !== "CallExpression" && (a = makeLeftHandSideExpression(a)), a = dotNumericLiteral(a), children = [a, wsOp, ".", op.method, "(", wsB, b, ")"]), type = "CallExpression";
        else if (op.token)
          children = [a, wsOp, op, wsB, b], op.negated && (children = ["(", ...children, ")"]);
        else
          throw new Error("Unknown operator: " + JSON.stringify(op));
        op.negated && children.unshift("!"), error != null && children.push(error), expandedOps.splice(start, end - start + 1, {
          type,
          children
        }), i = start + 2;
      } else
        i += 4;
    }
    return expandedOps;
  }
  function dotNumericLiteral(literal) {
    return literal?.type === "Literal" && /^[+-]?(?:0|[1-9](?:_[0-9]|[0-9])*)$/.test(literal.raw) && (literal.children.push("."), literal.raw += "."), literal;
  }
  var asConst = {
    ts: !0,
    children: [" as const"]
  };
  function makeAsConst(node) {
    return Array.isArray(node) && node.length === 1 && (node = node[0]), node.type === "Literal" && node.raw !== "null" || node.type === "ArrayExpression" || node.type === "ObjectExpression" ? { ...node, children: [...node.children, asConst] } : node;
  }
  function isExistence(exp) {
    if (exp?.type === "ParenthesizedExpression" && exp.implicit && (exp = exp.expression), exp?.type === "Existence")
      return exp;
  }
  function isRelationalOp(op) {
    return op.relational || getPrecedence(op) === precedenceRelational;
  }
  var chainOp = {
    type: "ChainOp",
    special: !0,
    prec: precedenceMap.get("chain"),
    assoc: "right"
  };
  function expandChainedComparisons([first, binops]) {
    if (!binops.length)
      return [first];
    let results = [], start = 0, chains = [];
    var i = 0;
    for (let i3 = 0, len22 = binops.length; i3 < len22; i3++) {
      var i = i3, [, op] = binops[i3];
      isRelationalOp(op) ? chains.push(i) : getPrecedence(op) < precedenceRelational && (processChains(), first = results.pop());
    }
    return processChains(), results;
    function processChains() {
      if (chains.length > 0) {
        first = expandExistence(first);
        for (let i4 = 0, len3 = chains.length; i4 < len3; i4++) {
          let k = i4, index = chains[i4];
          k > 0 && results.push(" ", chainOp, " ");
          let binop = binops[index], exp = binop[3] = expandExistence(binop[3]);
          if (results.push(first), k + 1 < chains.length) {
            let endIndex = chains[k + 1], ref1;
            index + 1 < endIndex ? ref1 = processExpandedBinaryOpExpression([exp].concat(binops.slice(index + 1, endIndex).flat())) : ref1 = exp;
            let rhs = ref1, { ref, refAssignment } = maybeRefAssignment(rhs);
            binops[index][3] = makeLeftHandSideExpression(refAssignment ?? rhs), results.push(...binops.slice(start, index + 1).flat()), first = ref, start = endIndex;
          } else
            results.push(...binops.slice(start, i + 1).flat());
        }
      } else
        results.push(first), results.push(...binops.slice(start, i + 1).flat());
      start = i + 1, chains.length = 0;
    }
    function expandExistence(exp) {
      let ref2;
      if (ref2 = isExistence(exp)) {
        let existence = ref2, { ref, refAssignment } = maybeRefAssignment(existence.expression);
        return refAssignment != null && replaceNode(
          existence.expression,
          makeLeftHandSideExpression(refAssignment),
          existence
        ), results.push(existence, " ", chainOp, " "), ref;
      } else
        return exp;
    }
  }

  // unplugin-civet:/Users/greghuc/workspace/Civet/source/parser/pattern-matching.civet.jsx
  function processPatternTest(lhs, patterns) {
    let { ref, refAssignmentComma } = maybeRefAssignment(lhs, "m"), conditionExpression = flatJoin(patterns.map(($1) => getPatternConditions($1, ref)).map(($2) => flatJoin($2, " && ")), " || ");
    return makeLeftHandSideExpression(makeNode({
      type: "PatternTest",
      children: [
        ...refAssignmentComma,
        conditionExpression
      ]
    }));
  }
  function processPatternMatching(statements) {
    gatherRecursiveAll(statements, ($3) => $3.type === "SwitchStatement").forEach((s) => {
      let { caseBlock } = s, { clauses } = caseBlock;
      for (let i1 = 0, len3 = clauses.length; i1 < len3; i1++) {
        let c = clauses[i1];
        c.type === "WhenClause" && c.break && isExit(c.block) && (c.children.splice(c.children.indexOf(c.break), 1), c.break = void 0);
      }
      let errors = !1, isPattern = !1;
      if (clauses.some(($4) => $4.type === "PatternClause")) {
        isPattern = !0;
        for (let i2 = 0, len1 = clauses.length; i2 < len1; i2++) {
          let c = clauses[i2];
          c.type === "PatternClause" || c.type === "DefaultClause" || (errors = !0, c.children.push({
            type: "Error",
            message: "Can't mix pattern matching and non-pattern matching clauses"
          }));
        }
      }
      if (errors || !isPattern)
        return;
      let { condition } = s;
      condition.type === "ParenthesizedExpression" && (condition = condition.expression);
      let { ref, refAssignmentComma } = maybeRefAssignment(condition, "m"), root = [], prev = root, e, l = clauses.length;
      for (let i3 = 0, len22 = clauses.length; i3 < len22; i3++) {
        let i = i3, c = clauses[i3];
        if (c.type === "DefaultClause") {
          e != null ? replaceNode(e.block, c.block, e) : prev.push(c.block);
          break;
        }
        let { patterns, block } = c, pattern = patterns[0], conditionExpression = flatJoin(patterns.map(($5) => getPatternConditions($5, ref)).map(($6) => flatJoin($6, " && ")), " || "), condition2 = makeNode({
          type: "ParenthesizedExpression",
          children: ["(", ...refAssignmentComma, conditionExpression, ")"],
          expression: conditionExpression
        });
        if (braceBlock(block), block = blockWithPrefix(getPatternBlockPrefix(pattern, ref), block), i < l - 1) {
          let expressions = [], block2 = makeNode({
            type: "BlockStatement",
            expressions,
            children: [expressions],
            bare: !0
          });
          e = makeNode({
            type: "ElseClause",
            block: block2,
            children: [`
`, "else ", block2]
          });
        } else
          e = void 0;
        prev.push(["", makeNode({
          type: "IfStatement",
          children: ["if", condition2, block, e],
          then: block,
          else: e
        })]), refAssignmentComma = [], e != null && (prev = e.block.expressions);
      }
      return s.type = "PatternMatchingStatement", s.children = root, updateParentPointers(s);
    }), gatherRecursiveAll(
      statements,
      (s) => s.type === "ContinueStatement" && s.special === "switch"
    ).forEach((cont) => {
      let m;
      if (m = cont.parent, !(typeof m == "object" && m != null && "type" in m && m.type === "BlockStatement" && "parent" in m && typeof m.parent == "object" && m.parent != null && "type" in m.parent && m.parent.type === "WhenClause" && "expressions" in m && Array.isArray(m.expressions) && m.expressions.length >= 1 && Array.isArray(m.expressions[m.expressions.length - 1]) && m.expressions[m.expressions.length - 1].length >= 2 && m.expressions[m.expressions.length - 1][1] === cont))
        return cont.children.push({
          type: "Error",
          message: "'continue switch' can only be used at end of 'when' clause"
        });
    });
  }
  function getPatternConditions(pattern, ref, conditions = []) {
    if (pattern.rest) return conditions;
    switch (pattern.type) {
      case "ArrayBindingPattern": {
        let { elements, length } = pattern, hasRest = elements.some((e) => e.rest), l = (length - +hasRest).toString(), lengthCheck = hasRest ? [ref, ".length >= ", l] : [getHelperRef("len"), "(", ref, ", ", l, ")"];
        conditions.push(
          ["Array.isArray(", ref, ")"],
          lengthCheck
        ), elements.forEach(({ children: [, e] }, i) => {
          let subRef = [ref, "[", i.toString(), "]"];
          return getPatternConditions(e, subRef, conditions);
        });
        let { blockPrefix } = pattern;
        if (blockPrefix) {
          let postElements = blockPrefix.children[1], { length: postLength } = postElements;
          postElements.forEach(({ children: [, e] }, i) => {
            let subRef = [ref, "[", ref, ".length - ", (postLength + i).toString(), "]"];
            return getPatternConditions(e, subRef, conditions);
          });
        }
        break;
      }
      case "ObjectBindingPattern": {
        conditions.push(
          ["typeof ", ref, " === 'object'"],
          [ref, " != null"]
        );
        for (let ref1 = pattern.properties, i4 = 0, len3 = ref1.length; i4 < len3; i4++) {
          let p = ref1[i4];
          switch (p.type) {
            case "PinProperty":
            case "BindingProperty": {
              let { name, value } = p, subRef;
              switch (name.type) {
                case "ComputedPropertyName": {
                  conditions.push([name.expression, " in ", ref]), subRef = [ref, name];
                  break;
                }
                case "Literal":
                case "StringLiteral":
                case "NumericLiteral": {
                  conditions.push([name, " in ", ref]), subRef = [ref, "[", name, "]"];
                  break;
                }
                case "Identifier": {
                  conditions.push(["'", name.name, "' in ", ref]), subRef = [ref, ".", name.name];
                  break;
                }
                case "AtBinding": {
                  conditions.push(["'", name.ref.id, "' in ", ref]), subRef = [ref, ".", name.ref.id];
                  break;
                }
              }
              value && getPatternConditions(value, subRef, conditions);
              break;
            }
          }
        }
        break;
      }
      case "ConditionFragment": {
        let { rhs } = pattern;
        if (rhs.length) {
          let [first, ...rest] = rhs, [ws, ...op] = first;
          ws = [" "].concat(ws), first = [ws, ...op], rhs = [first, ...rest];
        }
        conditions.push(processBinaryOpExpression([ref, rhs]));
        break;
      }
      case "RegularExpressionLiteral": {
        conditions.push(
          ["typeof ", ref, " === 'string'"],
          [pattern, ".test(", ref, ")"]
        );
        break;
      }
      case "PinPattern": {
        conditions.push([
          ref,
          " === ",
          pattern.expression
        ]);
        break;
      }
      case "NamedBindingPattern": {
        getPatternConditions(pattern.pattern, ref, conditions);
        break;
      }
      case "Literal": {
        conditions.push([
          ref,
          " === ",
          pattern
        ]);
        break;
      }
    }
    return conditions;
  }
  function getPatternBlockPrefix(pattern, ref, decl = "const ", typeSuffix) {
    switch (pattern.type) {
      case "ArrayBindingPattern": {
        if (!pattern.length)
          return;
        break;
      }
      case "ObjectBindingPattern": {
        if (!pattern.properties.length)
          return;
        break;
      }
      case "Literal":
      case "RegularExpressionLiteral":
      case "PinPattern":
        return;
      case "ConditionFragment": {
        if (!pattern.binding)
          return;
        break;
      }
    }
    let [splices, thisAssignments] = gatherBindingCode(pattern), patternBindings2 = nonMatcherBindings(pattern), subbindings = gatherSubbindings(patternBindings2);
    simplifyBindingProperties(patternBindings2), simplifyBindingProperties(subbindings), splices = splices.flatMap((s) => [", ", nonMatcherBindings(s)]), thisAssignments = thisAssignments.map(($7) => ["", $7, ";"]);
    let duplicateDeclarations = aggregateDuplicateBindings([patternBindings2, splices, subbindings]), blockPrefix = [];
    if (ref || subbindings.length || splices.length) {
      let children = [decl];
      ref && children.push(patternBindings2, typeSuffix, " = ", ref), children.push(...subbindings), children.push(...splices), ref || children.splice(1, 1), blockPrefix.push(["", {
        type: "Declaration",
        children,
        decl,
        names: [],
        bindings: []
        // avoid implicit return of any bindings
      }, ";"]);
    }
    if (blockPrefix.push(...thisAssignments), blockPrefix.push(...duplicateDeclarations.map(($8) => ["", $8, ";"])), !!blockPrefix.length)
      return blockPrefix;
  }
  function elideMatchersFromArrayBindings(elements) {
    let results = [];
    for (let i5 = 0, len4 = elements.length; i5 < len4; i5++) {
      let element = elements[i5];
      switch (element.type) {
        case "BindingRestElement":
        case "ElisionElement": {
          results.push(element);
          break;
        }
        case "BindingElement": {
          switch (element.binding.type) {
            case "Literal":
            case "RegularExpressionLiteral":
            case "StringLiteral":
            case "PinPattern": {
              results.push(element.delim);
              break;
            }
            default: {
              let binding = nonMatcherBindings(element.binding);
              results.push(makeNode({
                ...element,
                binding,
                children: element.children.map((c) => c === element.binding ? binding : c)
              }));
            }
          }
          break;
        }
      }
    }
    return results;
  }
  function elideMatchersFromPropertyBindings(properties) {
    let results1 = [];
    for (let i6 = 0, len5 = properties.length; i6 < len5; i6++) {
      let p = properties[i6];
      switch (p.type) {
        case "BindingProperty":
        case "PinProperty": {
          let { children, name, value } = p, [ws] = children;
          if (name.type === "NumericLiteral" && !value?.name || name.type === "ComputedPropertyName" && value?.subtype === "NumericLiteral")
            continue;
          {
            let contents, m1;
            switch (value?.type) {
              case "ArrayBindingPattern":
              case "ObjectBindingPattern": {
                let bindings = nonMatcherBindings(value);
                contents = {
                  ...p,
                  value: bindings,
                  children: [ws, name, bindings && ": ", bindings, p.delim]
                };
                break;
              }
              case "Identifier":
              case void 0: {
                contents = p;
                break;
              }
              case "NamedBindingPattern": {
                let bindings = nonMatcherBindings(value.pattern);
                contents = {
                  ...p,
                  subbinding: (m1 = bindings?.type, m1 === "ArrayBindingPattern" || m1 === "ObjectBindingPattern" || m1 === "Identifier" ? [
                    bindings,
                    " = ",
                    name
                  ] : void 0)
                }, p.name === value.binding && (contents.children = [ws, name, p.delim]);
                break;
              }
              default:
                contents = void 0;
            }
            if (contents)
              results1.push(contents);
            else
              continue;
          }
          break;
        }
        default:
          results1.push(p);
      }
    }
    return results1;
  }
  function nonMatcherBindings(pattern) {
    let m2;
    switch (pattern.type) {
      case "ArrayBindingPattern":
      case "PostRestBindingElements": {
        let elements = elideMatchersFromArrayBindings(pattern.elements);
        return makeNode({
          ...pattern,
          elements,
          children: pattern.children.map(($9) => $9 === pattern.elements ? elements : $9)
        });
      }
      case "ObjectBindingPattern": {
        let properties = elideMatchersFromPropertyBindings(pattern.properties);
        return makeNode({
          ...pattern,
          properties,
          children: pattern.children.map(($10) => $10 === pattern.properties ? properties : $10)
        });
      }
      case "NamedBindingPattern": {
        let bindings = nonMatcherBindings(pattern.pattern);
        return makeNode({
          ...pattern,
          subbinding: (m2 = bindings?.type, m2 === "ArrayBindingPattern" || m2 === "ObjectBindingPattern" || m2 === "Identifier" ? [bindings, " = ", pattern.binding] : void 0)
        });
      }
      case "ConditionFragment":
        return pattern.binding;
      default:
        return pattern;
    }
  }
  function aggregateDuplicateBindings(bindings) {
    let props = gatherRecursiveAll(
      bindings,
      ($) => $.type === "BindingProperty" || // Don't deduplicate ...rest properties; user should do so manually
      // because ...rest can be named arbitrarily
      //$.type is "BindingRestProperty"
      $.type === "Identifier" && $.parent?.type === "BindingElement" || $.type === "BindingRestElement"
    ), declarations = [], propsGroupedByName = /* @__PURE__ */ new Map();
    for (let i7 = 0, len6 = props.length; i7 < len6; i7++) {
      let p = props[i7], { name, value } = p, m3;
      if (m3 = value?.type, m3 === "ArrayBindingPattern" || m3 === "ObjectBindingPattern")
        continue;
      let key = value?.name || name?.name || name;
      key?.type === "NumericLiteral" || key?.type === "ComputedPropertyName" || (propsGroupedByName.has(key) ? propsGroupedByName.get(key).push(p) : propsGroupedByName.set(key, [p]));
    }
    return propsGroupedByName.forEach((shared, key) => {
      if (!key)
        return;
      if (ReservedWord({ fail() {
      } }, {
        pos: 0,
        input: key
      })) {
        for (let i8 = 0, len7 = shared.length; i8 < len7; i8++) {
          let p = shared[i8];
          aliasBinding(p, makeRef(`_${key}`, key));
        }
        return;
      }
      if (shared.length === 1)
        return;
      let refs = shared.map((p) => {
        let ref = makeRef(key);
        return aliasBinding(p, ref), ref;
      });
      return declarations.push({
        type: "Declaration",
        children: [
          "const ",
          key,
          " = [",
          ...refs.map((r, i) => i === 0 ? r : [", ", r]),
          "]"
        ],
        names: [],
        bindings: []
      });
    }), declarations;
  }
  function aliasBinding(p, ref) {
    if (p.type === "Identifier")
      p.children[0] = ref;
    else if (p.type === "BindingRestElement")
      aliasBinding(p.binding, ref);
    else if (p.value?.type === "Identifier")
      aliasBinding(p.value, ref);
    else {
      p.value = ref;
      let index = p.children.indexOf(p.name);
      p.children.splice(index + 1, 0, ": ", ref);
    }
  }

  // unplugin-civet:/Users/greghuc/workspace/Civet/source/parser/declaration.civet.jsx
  function len2(arr, length) {
    return arr.length === length;
  }
  function processAssignmentDeclaration(decl, pattern, typeSuffix, ws, assign, e) {
    decl = {
      ...decl,
      $loc: {
        pos: assign.$loc.pos - 1,
        length: assign.$loc.length + 1
      }
    };
    let [splices, assignments] = gatherBindingCode(pattern);
    splices = splices.map((s) => [", ", s]);
    let thisAssignments = assignments.map((a) => ["", a, ";"]);
    "typeSuffix" in pattern && (typeSuffix ??= pattern.typeSuffix);
    let initializer = makeNode({
      type: "Initializer",
      expression: e,
      children: [ws, assign, e]
    }), binding = makeNode({
      type: "Binding",
      pattern,
      initializer,
      splices,
      typeSuffix,
      thisAssignments,
      children: [pattern, typeSuffix, initializer]
    }), children = [decl, binding];
    return makeNode({
      type: "Declaration",
      names: pattern.names,
      decl,
      bindings: [binding],
      splices,
      thisAssignments,
      children
    });
  }
  function processDeclarations(statements) {
    for (let ref1 = gatherRecursiveAll(statements, ($) => $.type === "Declaration"), i1 = 0, len1 = ref1.length; i1 < len1; i1++) {
      let declaration = ref1[i1], { bindings } = declaration;
      if (bindings != null) {
        for (let i2 = bindings.length + -1; i2 >= 0; --i2) {
          let binding = bindings[i2], subbindings = gatherSubbindings(binding);
          subbindings.length && (simplifyBindingProperties(binding), simplifyBindingProperties(subbindings), spliceChild(declaration, binding, 1, binding, subbindings));
        }
        for (let i3 = 0, len22 = bindings.length; i3 < len22; i3++) {
          let binding = bindings[i3], { typeSuffix, initializer } = binding;
          if (typeSuffix && typeSuffix.optional) {
            if (initializer && !typeSuffix.t) {
              let expression = trimFirstSpace(initializer.expression), m;
              if (m = expression.type, m === "Identifier" || m === "MemberExpression")
                typeSuffix.children.push(": ", typeSuffix.t = {
                  type: "TypeTypeof",
                  children: ["typeof ", expression],
                  expression
                });
              else if (expression.type === "Literal" || expression.type === "RegularExpressionLiteral" || expression.type === "TemplateLiteral")
                typeSuffix.children.push(": ", typeSuffix.t = literalType(expression));
              else {
                spliceChild(binding, typeSuffix, 1, {
                  type: "Error",
                  message: `Optional type can only be inferred from literals or member expressions, not ${expression.type}`
                });
                continue;
              }
            }
            typeSuffix.t ? convertOptionalType(typeSuffix) : (spliceChild(binding, typeSuffix, 1), binding.children.push(initializer = binding.initializer = {
              type: "Initializer",
              expression: "undefined",
              children: [" = ", "undefined"]
            }));
          }
          initializer && blockContainingStatement(declaration) && prependStatementExpressionBlock(initializer, declaration);
        }
      }
    }
    for (let ref2 = gatherRecursiveAll(statements, ($1) => $1.type === "ForStatement"), i4 = 0, len3 = ref2.length; i4 < len3; i4++) {
      let statement = ref2[i4], { declaration } = statement;
      if (declaration?.type !== "ForDeclaration")
        continue;
      let { binding } = declaration, blockPrefix = getPatternBlockPrefix(
        binding.pattern,
        void 0,
        append(declaration.decl, " "),
        binding.typeSuffix
      );
      simplifyBindingProperties(binding), blockPrefix != null && (statement.block.expressions.unshift(...blockPrefix), braceBlock(statement.block));
    }
  }
  function prependStatementExpressionBlock(initializer, statement) {
    let { expression: exp } = initializer, ws;
    if (Array.isArray(exp) && (ws = exp[0], exp = exp[1]), !(typeof exp == "object" && exp != null && "type" in exp && exp.type === "StatementExpression" || typeof exp == "object" && exp != null && "type" in exp && exp.type === "SpreadElement" && "expression" in exp && typeof exp.expression == "object" && exp.expression != null && "type" in exp.expression && exp.expression.type === "StatementExpression"))
      return;
    let pre = [], statementExp = exp.statement, blockStatement = ["", statementExp], ref;
    if (statementExp.type === "IterationExpression") {
      if (statementExp.async || statementExp.generator)
        return;
      let statement2 = statementExp.statement;
      if (blockStatement[1] = statement2, statement2.type === "ComptimeStatement")
        return;
      if (statement2.type === "DoStatement") {
        ref = initializer.expression = initializer.children[2] = makeRef(), assignResults(blockStatement, (resultNode) => makeNode({
          type: "AssignmentExpression",
          children: [ref, " = ", resultNode],
          parent: statement2
        }));
        let refDec = {
          type: "Declaration",
          children: ["let ", ref, ";"]
        };
        pre.unshift(refDec);
      } else
        wrapIterationReturningResults(statement2, () => {
        }), ref = initializer.expression = initializer.children[2] = statement2.resultsRef;
    } else {
      ref = initializer.expression = initializer.children[2] = makeRef(), assignResults(blockStatement, (resultNode) => makeNode({
        type: "AssignmentExpression",
        children: [ref, " = ", resultNode],
        parent: statement
      }));
      let refDec = {
        type: "Declaration",
        children: ["let ", ref, ";"]
      };
      pre.unshift(refDec), ws && pre.push(ws);
    }
    return statement.children.unshift(pre, blockStatement, ";"), updateParentPointers(blockStatement, statement), ref;
  }
  function processDeclarationCondition(condition, rootCondition, parent) {
    if (condition.type !== "DeclarationCondition")
      return;
    let { decl, bindings } = condition.declaration, binding = bindings[0], { pattern, typeSuffix, initializer } = binding, nullCheck = typeSuffix?.optional && !typeSuffix.t && !typeSuffix.nonnull;
    if (initializer == null) {
      condition.children = [
        {
          type: "Error",
          message: "Missing initializer in declaration condition"
        }
      ];
      return;
    }
    let ref = prependStatementExpressionBlock(initializer, parent);
    if (ref)
      Object.assign(condition, {
        type: "AssignmentExpression",
        children: [ref],
        pattern,
        ref,
        statementDeclaration: !0
      });
    else {
      let { expression } = initializer;
      ref = maybeRef(expression);
      let simple = ref === expression, children;
      if (simple)
        ref = trimFirstSpace(ref), children = [ref];
      else {
        children = [ref, initializer];
        let grandparent = condition.parent?.parent;
        pattern.type === "Identifier" && (grandparent?.type === "IfStatement" || grandparent?.type === "IterationStatement") && !nullCheck && (children.unshift("("), children.push(")"));
      }
      nullCheck && (children.unshift("("), children.push(") != null"), typeSuffix = void 0), Object.assign(condition, {
        type: "AssignmentExpression",
        children,
        hoistDec: simple ? void 0 : {
          type: "Declaration",
          children: ["let ", ref, typeSuffix],
          names: []
        },
        pattern,
        ref
      });
    }
    updateParentPointers(condition, parent), rootCondition.blockPrefix = getPatternBlockPrefix(pattern, ref, decl, typeSuffix);
  }
  function processDeclarationConditions(node) {
    gatherRecursiveAll(
      node,
      (n) => n.type === "IfStatement" || n.type === "IterationStatement" || n.type === "SwitchStatement"
    ).forEach((s) => processDeclarationConditionStatement(s));
  }
  function processDeclarationConditionStatement(s) {
    let { condition } = s;
    if (!condition?.expression)
      return;
    let { expression } = condition;
    if (expression && typeof expression == "object" && "type" in expression && expression.type === "UnaryExpression" && "children" in expression && Array.isArray(expression.children) && len2(expression.children, 2) && Array.isArray(expression.children[0]) && len2(expression.children[0], 1) && expression.children[0][0] === "!" && typeof expression.children[1] == "object" && expression.children[1] != null && "type" in expression.children[1] && expression.children[1].type === "ParenthesizedExpression" && "expression" in expression.children[1]) {
      let { children: [[], { expression: expression2 }] } = expression;
      expression = expression2;
    }
    processDeclarationCondition(expression, condition.expression, s);
    let { ref, pattern } = expression;
    if (pattern) {
      let conditions = getPatternConditions(pattern, ref).filter((c) => {
        if (Array.isArray(c) && len2(c, 2) && c[0] === ref && c[1] === " != null") {
          let [,] = c;
          return !1;
        } else
          return !0;
      });
      if (conditions.length) {
        let children = condition.children;
        if (s.negated) {
          let m1;
          if (m1 = condition.expression, !(typeof m1 == "object" && m1 != null && "type" in m1 && m1.type === "UnaryExpression" && "children" in m1 && Array.isArray(m1.children) && len2(m1.children, 2) && Array.isArray(m1.children[0]) && len2(m1.children[0], 1) && m1.children[0][0] === "!" && typeof m1.children[1] == "object" && m1.children[1] != null && "type" in m1.children[1] && m1.children[1].type === "ParenthesizedExpression"))
            throw new Error("Unsupported negated condition");
          ({ children } = condition.expression.children[1]);
        }
        children.unshift("(");
        for (let i5 = 0, len4 = conditions.length; i5 < len4; i5++) {
          let c = conditions[i5];
          children.push(" && ", c);
        }
        children.push(")");
      }
    }
    let { blockPrefix } = condition.expression;
    if (s.negated && blockPrefix && (s.type === "IfStatement" && isExit(s.then) || s.type === "IterationStatement")) {
      let { ancestor, child } = findAncestor(
        s,
        (a) => a.type === "BlockStatement"
      );
      if (ancestor == null)
        throw new Error("Couldn't find block for postfix declaration");
      let index = findChildIndex(ancestor.expressions, child);
      if (index < 0)
        throw new Error("Couldn't find where in block to put postfix declaration");
      ancestor.expressions.splice(index + 1, 0, ...blockPrefix), updateParentPointers(ancestor), braceBlock(ancestor);
      let ref3;
      switch (s.type) {
        case "IfStatement": {
          if (ref3 = s.else?.block) {
            let elseBlock = ref3;
            elseBlock.bare && !elseBlock.semicolon && elseBlock.children.push(elseBlock.semicolon = ";"), ancestor.expressions.splice(index + 1 + blockPrefix.length, 0, ["", elseBlock]), s.children = s.children.filter((a1) => a1 !== s.else), s.else = void 0;
          }
          let block = s.then;
          block.bare && !block.semicolon && block.children.push(block.semicolon = ";");
          break;
        }
      }
      return;
    }
    switch (s.type) {
      case "IfStatement": {
        let { else: e } = s;
        if (s.negated) {
          if (e != null) {
            let block = blockWithPrefix(blockPrefix, e.block);
            e.children = e.children.map(($2) => $2 === e.block ? block : $2), e.block = block, updateParentPointers(e);
          }
        } else {
          let block = blockWithPrefix(blockPrefix, s.then);
          s.children = s.children.map(($3) => $3 === s.then ? block : $3), s.then = block, updateParentPointers(s);
        }
        break;
      }
      case "IterationStatement": {
        if (!blockPrefix)
          return;
        let { children, block } = s, newBlock = blockWithPrefix(blockPrefix, block);
        s.children = children.map(($4) => $4 === block ? newBlock : $4), updateParentPointers(s);
        break;
      }
      case "SwitchStatement": {
        let { ref: ref2, statementDeclaration } = condition.expression;
        if (!blockPrefix)
          return;
        let newCondition = {
          type: "ParenthesizedExpression",
          children: ["(", ref2, ")"],
          expression: ref2,
          parent: s
        };
        if (s.children = s.children.map(function(c) {
          return c === s.condition ? newCondition : c;
        }), s.condition = newCondition, updateParentPointers(s), statementDeclaration) {
          let block = makeEmptyBlock();
          replaceBlockExpression(s.parent, s, block), block.expressions.push(["", s]), s.children.splice(s.children.findIndex(($5) => $5.token === "switch"), 0, blockPrefix), s.parent = block;
        } else {
          let block = blockWithPrefix([["", [{
            type: "Declaration",
            children: ["let ", ...condition.expression.children]
          }], ";"], ...blockPrefix], makeEmptyBlock());
          updateParentPointers(block, s.parent), replaceBlockExpression(s.parent, s, block), block.expressions.push(["", s]), s.parent = block;
        }
        break;
      }
    }
  }
  function dynamizeFromClause(from) {
    from = from.slice(1), from = trimFirstSpace(from);
    let ref4;
    if (ref4 = from[from.length - 1]?.assertion) {
      let assert2 = ref4, ref5;
      ref5 = from[from.length - 1], ref5.children = ref5.children.filter((a2) => a2 !== assert2), from.push(", {", assert2.keyword, ":", assert2.object, "}");
    }
    return ["(", ...from, ")"];
  }
  function dynamizeImportDeclaration(decl) {
    let { imports } = decl, { star, binding, specifiers } = imports, justDefault = binding && !specifiers && !star, ref6;
    binding ? specifiers ? ref6 = makeRef() : ref6 = binding : ref6 = convertNamedImportsToObject(imports, !0);
    let pattern = ref6, c = "const", expression = [
      justDefault ? "(" : void 0,
      { type: "Await", children: ["await"] },
      " ",
      decl.children[0],
      // import
      dynamizeFromClause(decl.from),
      justDefault ? ").default" : void 0
    ], initializer = {
      type: "Initializer",
      expression,
      children: [" ", "= ", expression]
    }, bindings = [{
      type: "Binding",
      names: pattern.names,
      pattern,
      initializer,
      children: [pattern, initializer]
    }];
    if (binding && specifiers) {
      let pattern2 = binding, initializer2 = {
        type: "Initializer",
        expression,
        children: [" ", "= ", [
          pattern,
          ".default"
        ]]
      };
      bindings.push({
        type: "Binding",
        names: binding.names,
        pattern: pattern2,
        initializer: initializer2,
        children: [pattern2, initializer2]
      });
      let pattern3 = convertNamedImportsToObject(imports.children.at(-1), !0), initializer3 = {
        type: "Initializer",
        expression: pattern,
        children: [" ", "= ", pattern]
      };
      bindings.push({
        type: "Binding",
        names: specifiers.names,
        pattern: pattern3,
        initializer: initializer3,
        children: [pattern3, initializer3]
      });
    }
    return {
      type: "Declaration",
      names: imports.names,
      bindings,
      decl: c,
      children: [
        c,
        " ",
        bindings.flatMap((binding2, i) => i > 0 ? [", ", binding2] : [binding2])
      ]
    };
  }
  function dynamizeImportDeclarationExpression($0) {
    let [imp, ws1, named, ws2, from] = $0, object = convertNamedImportsToObject(named), dot = ".";
    return processCallMemberExpression({
      type: "CallExpression",
      children: [
        { type: "Await", children: "await" },
        " ",
        imp,
        trimFirstSpace(ws2),
        dynamizeFromClause(from),
        {
          type: "PropertyGlob",
          dot,
          object,
          children: [ws1, dot, object],
          reversed: !0
        }
      ]
    });
  }
  function convertWithClause(withClause, extendsClause) {
    let extendsToken, extendsTarget, ws;
    extendsClause ? [extendsToken, ws, extendsTarget] = extendsClause : (extendsToken = {
      type: "Extends",
      children: [" extends"]
    }, ws = "", extendsTarget = "Object");
    let wrapped = withClause.targets.reduce(
      (extendsTarget2, [wsNext, withTarget]) => {
        let args = [extendsTarget2], exp = {
          type: "CallExpression",
          children: [
            makeLeftHandSideExpression(withTarget),
            {
              type: "Call",
              args,
              children: ["(", trimFirstSpace(ws), args, ")"]
            }
          ]
        };
        return ws = wsNext, exp;
      },
      extendsTarget
    );
    return [extendsToken, insertTrimmingSpace(ws, " "), wrapped];
  }

  // unplugin-civet:/Users/greghuc/workspace/Civet/source/parser/unary.civet.jsx
  function processUnaryExpression(pre, exp, post) {
    if (!(pre.length || post))
      return exp;
    if (post?.token === "?") {
      if (post = {
        $loc: post.$loc,
        token: " != null"
      }, pre.length) {
        let lastPre = pre[pre.length - 1];
        (lastPre.token === "!" || lastPre.length === 2 && lastPre[0].token === "!") && (post.token = " == null", pre = pre.slice(0, -1));
      }
      return exp = makeLeftHandSideExpression({
        type: "Existence",
        expression: exp,
        children: [exp, post],
        parent: void 0
      }), pre.length ? {
        type: "UnaryExpression",
        children: [pre, exp],
        pre,
        expression: exp
      } : exp;
    }
    if (exp?.type === "Literal" && pre.length) {
      let [...ref] = pre, [last] = ref.splice(-1), m;
      if (m = last?.token, (m === "+" || m === "-") && (last = last, exp = {
        ...exp,
        children: [last, ...exp.children],
        raw: `${last.token}${exp.raw}`
      }, pre = pre.slice(0, -1), !(pre.length || post)))
        return exp;
    }
    let ref1;
    for (; ref1 = pre.length; ) {
      let last = pre[ref1 - 1];
      if (last.type === "Await")
        if (last.op)
          exp.type !== "ParenthesizedExpression" && (exp = ["(", exp, ")"]), exp = {
            type: "CallExpression",
            children: [...last.children, "Promise", last.op, exp]
          }, pre = pre.slice(0, -1);
        else {
          let m1;
          m1 = firstNonSpace(exp), (typeof m1 == "string" && /^[ \t]*\n/.test(m1) || typeof m1 == "object" && m1 != null && "token" in m1 && typeof m1.token == "string" && /^[ \t]*\n/.test(m1.token)) && (exp = parenthesizeExpression(exp)), exp = {
            type: "AwaitExpression",
            children: [...last.children, exp]
          }, pre = pre.slice(0, -1);
        }
      else
        break;
    }
    return {
      type: "UnaryExpression",
      children: [pre, exp, post],
      pre,
      expression: exp,
      post
    };
  }
  function processUnaryNestedExpression(pre, args, post) {
    let isArray = args.type === "ArrayExpression";
    if (isArray || (args = stripTrailingImplicitComma(args)), isArray || args.length > 2) {
      let last = pre[pre.length - 1];
      if (!(typeof last == "object" && last != null && "type" in last && last.type === "Await"))
        return;
      last.op ? isArray || (args = {
        type: "ArrayExpression",
        children: ["[", args, "]"]
      }) : (pre.pop(), isArray ? (args = trimFirstSpace(args), args = {
        ...args,
        children: args.children.map(
          (arg) => {
            if (typeof arg == "object" && arg != null && "type" in arg && arg.type === "ArrayElement" && "expression" in arg && "children" in arg) {
              let { expression: exp, children } = arg, expression = processUnaryExpression([last], trimFirstSpace(exp));
              return expression = prepend(getTrimmingSpace(exp), expression), {
                ...arg,
                expression,
                children: children.map(($1) => $1 === exp ? expression : $1)
              };
            } else
              return arg;
          }
        )
      }) : (args = args, args = {
        type: "ArrayExpression",
        children: [
          "[",
          ...(() => {
            let results = [];
            for (let i = 0, len3 = args.length; i < len3; i++) {
              let arg = args[i];
              if (typeof arg == "object" && arg != null && "type" in arg && arg.type === "Argument") {
                let expression = processUnaryExpression([last], arg.expression);
                results.push({
                  ...arg,
                  expression,
                  children: arg.children.map(($) => $ === arg.expression ? expression : $)
                });
              } else
                results.push(arg);
            }
            return results;
          })(),
          "]"
        ]
      }));
    }
    return processUnaryExpression(pre, args, post);
  }

  // unplugin-civet:/Users/greghuc/workspace/Civet/source/parser/pipe.civet.jsx
  function constructInvocation(fn, arg) {
    let expr = fn.expr;
    for (; expr.type === "ParenthesizedExpression"; )
      expr = expr.expression;
    if (expr.ampersandBlock) {
      let { ref, body } = expr;
      return ref.type = "PipedExpression", ref.children = [makeLeftHandSideExpression(arg)], updateParentPointers(ref), makeNode({
        type: "UnwrappedExpression",
        expression: body,
        children: [skipIfOnlyWS(fn.leadingComment), body, skipIfOnlyWS(fn.trailingComment)]
      });
    }
    expr = fn.expr;
    let lhs = expr;
    lhs.type !== "NewExpression" && (lhs = makeLeftHandSideExpression(lhs));
    let comment = skipIfOnlyWS(fn.trailingComment);
    switch (comment && lhs.children.push(comment), comment = skipIfOnlyWS(fn.leadingComment), comment && lhs.children.splice(1, 0, comment), arg.type) {
      case "CommaExpression": {
        arg = makeLeftHandSideExpression(arg);
        break;
      }
    }
    let args = [arg], call = {
      type: "Call",
      args,
      children: ["(", args, ")"]
    };
    if (lhs.type === "NewExpression") {
      let { expression } = lhs;
      return expression = {
        type: "CallExpression",
        children: [expression, call]
      }, {
        ...lhs,
        expression,
        children: lhs.children.map(($) => $ === lhs.expression ? expression : $)
      };
    } else
      return {
        type: "CallExpression",
        children: [lhs, call]
      };
  }
  function constructPipeStep(fn, arg, returning) {
    returning || (returning = null);
    let children = [[fn.leadingComment, fn.expr, fn.trailingComment].map(skipIfOnlyWS), " ", arg];
    switch (fn.expr.token) {
      case "await":
        children = processUnaryExpression([fn.expr], arg, void 0);
      case "yield":
        return [
          children,
          returning
        ];
      case "throw": {
        let statement = { type: "ThrowStatement", children };
        return [
          {
            type: "StatementExpression",
            statement,
            children: [statement]
          },
          null
        ];
      }
      case "return":
        return [{
          type: "ReturnStatement",
          children
        }, null];
    }
    return [
      constructInvocation(fn, arg),
      returning
    ];
  }
  function processPipelineExpressions(statements) {
    for (let ref1 = gatherRecursiveAll(statements, ($1) => $1.type === "PipelineExpression"), i1 = 0, len3 = ref1.length; i1 < len3; i1++) {
      let s = ref1[i1], [ws, , body] = s.children, [, arg] = s.children, children = [ws], comma = blockContainingStatement(s) ? ";" : ",", usingRef = null;
      for (let i2 = 0, len1 = body.length; i2 < len1; i2++) {
        let i = i2, step = body[i2], [leadingComment, pipe, trailingComment, expr] = step, returns = pipe.token === "||>", ref, result, returning = returns ? arg : null;
        if (pipe.token === "|>=") {
          let initRef;
          if (i === 0) {
            switch (checkValidLHS(arg), arg.type) {
              case "MemberExpression":
                if (arg.children.length <= 2)
                  break;
              case "CallExpression": {
                let access = arg.children.pop();
                usingRef = makeRef(), initRef = {
                  type: "AssignmentExpression",
                  children: [usingRef, " = ", arg, comma]
                }, arg = {
                  type: "MemberExpression",
                  children: [usingRef, access]
                };
                break;
              }
            }
            let lhs = [[
              [initRef],
              arg,
              [],
              { token: "=", children: [" = "] }
            ]];
            Object.assign(s, {
              type: "AssignmentExpression",
              children: [lhs, children],
              names: null,
              lhs,
              assigned: arg,
              expression: children
            }), arg = clone(arg), removeHoistDecs(arg), arg.children[0].type === "Ref" && (arg.children[0] = usingRef);
          } else
            children.unshift({
              type: "Error",
              $loc: pipe.token.$loc,
              message: "Can't use |>= in the middle of a pipeline"
            });
        } else
          i === 0 && (s.children = children);
        if (returns && (ref = needsRef(arg)) && (usingRef = usingRef || ref, arg = {
          type: "ParenthesizedExpression",
          children: ["(", {
            type: "AssignmentExpression",
            children: [usingRef, " = ", arg]
          }, ")"]
        }, returning = usingRef), [result, returning] = constructPipeStep(
          {
            leadingComment: skipIfOnlyWS(leadingComment),
            trailingComment: skipIfOnlyWS(trailingComment),
            expr
          },
          arg,
          returning
        ), result.type === "ReturnStatement") {
          i < body.length - 1 && result.children.push({
            type: "Error",
            message: "Can't continue a pipeline after returning"
          }), arg = result, children[children.length - 1] === "," && (children.pop(), children.push(";"));
          break;
        }
        returning ? (arg = returning, children.push(result, comma)) : arg = result;
      }
      if (usingRef && (s.hoistDec = {
        type: "Declaration",
        children: ["let ", usingRef],
        names: []
      }), children.push(arg), !children.some(($2) => $2?.type === "ReturnStatement") && children.some(($3) => $3 === ",")) {
        let { parent } = s, parenthesizedExpression = makeLeftHandSideExpression({ ...s });
        Object.assign(s, parenthesizedExpression, {
          parent,
          hoistDec: void 0
        });
      }
      addParentPointers(s, s.parent);
    }
  }

  // unplugin-civet:/Users/greghuc/workspace/Civet/source/parser/for.civet.jsx
  function processRangeExpression(start, ws1, range2, end) {
    ws1 = [ws1, range2.children[0]];
    let ws2 = range2.children[1], comma = { $loc: range2.$loc, token: "," }, ref;
    switch (range2.increasing) {
      case !0: {
        ref = ($) => $;
        break;
      }
      case !1: {
        ref = ($1) => -$1;
        break;
      }
      default:
        ref = Math.abs;
    }
    let abs = ref, lengthAdjust = 1 - +!range2.left.inclusive - +!range2.right.inclusive, children;
    if (typeof start == "object" && start != null && "type" in start && start.type === "Literal" && typeof end == "object" && end != null && "type" in end && end.type === "Literal") {
      let startValue = literalValue(start), endValue = literalValue(end);
      if (typeof startValue == "string" && typeof endValue == "string") {
        if (!(startValue.length === 1 && endValue.length === 1))
          throw new Error("String range start and end must be a single character");
        let startCode = startValue.charCodeAt(0), endCode = endValue.charCodeAt(0), step = startCode <= endCode ? 1 : -1, length = abs(endCode - startCode) + lengthAdjust;
        range2.left.inclusive || (startCode += step), length <= 26 ? children = [
          "[",
          Array.from({ length }, (_2, i) => JSON.stringify(String.fromCharCode(startCode + i * step))).join(", "),
          "]"
        ] : children = [
          getHelperRef(startCode <= endCode ? "stringRange" : "revStringRange"),
          "(",
          startCode.toString(),
          ", ",
          length.toString(),
          ")"
        ], range2.error != null && children.unshift(range2.error);
      } else if (typeof startValue == "number" && typeof endValue == "number") {
        let step = startValue <= endValue ? 1 : -1, length = abs(endValue - startValue) + lengthAdjust;
        range2.left.inclusive || (startValue += step), length <= 20 && (children = [
          "[",
          Array.from({ length }, (_2, i) => startValue + i * step).join(", "),
          "]"
        ], range2.error != null && children.unshift(range2.error));
      }
    }
    if (children == null)
      if (range2.increasing != null) {
        let sign = range2.increasing ? "+" : "-";
        end = makeLeftHandSideExpression(end), children = [
          getHelperRef(range2.increasing ? "range" : "revRange"),
          "(",
          range2.left.inclusive ? start : [makeLeftHandSideExpression(start), ` ${sign} 1`],
          ",",
          range2.right.inclusive ? [makeLeftHandSideExpression(end), ` ${sign} 1`] : end,
          ...ws1,
          ")"
        ];
      } else
        children = [
          "((s, e) => s > e ? ",
          getHelperRef("revRange"),
          "(s, e",
          range2.right.inclusive ? " - 1" : void 0,
          ") : ",
          getHelperRef("range"),
          "(s, e",
          range2.right.inclusive ? " + 1" : void 0,
          "))",
          "(",
          start,
          ...ws1,
          comma,
          ws2,
          end,
          ")"
        ];
    return {
      type: "RangeExpression",
      children,
      start,
      end,
      error: range2.error,
      left: range2.left,
      right: range2.right,
      increasing: range2.increasing
    };
  }
  function forRange(open, forDeclaration, range2, stepExp, close) {
    let { start, end, left, right, increasing } = range2, counterRef = makeRef("i"), infinite = typeof end == "object" && end != null && "type" in end && end.type === "Identifier" && "name" in end && end.name === "Infinity", stepRef, asc;
    stepExp ? (stepExp = trimFirstSpace(stepExp), stepRef = maybeRef(stepExp, "step")) : infinite ? stepExp = stepRef = makeNumericLiteral(1) : increasing != null && (increasing ? (stepExp = stepRef = makeNumericLiteral(1), asc = !0) : (stepExp = stepRef = makeNumericLiteral(-1), asc = !1));
    let ref1;
    if (stepExp?.type === "Literal")
      try {
        ref1 = literalValue(stepExp);
      } catch {
        ref1 = void 0;
      }
    else
      ref1 = void 0;
    let stepValue = ref1;
    typeof stepValue == "number" && (asc = stepValue > 0);
    let ref2;
    stepRef ? ref2 = start : ref2 = maybeRef(start, "start");
    let startRef = ref2, endRef = maybeRef(end, "end"), startRefDec = startRef !== start ? [startRef, " = ", start, ", "] : [], endRefDec = endRef !== end ? [endRef, " = ", end, ", "] : [], ascDec = [], ascRef;
    if (stepExp && stepRef !== stepExp && (ascDec = [", ", stepRef, " = ", stepExp]), start?.type === "Literal" && end?.type === "Literal") {
      asc = literalValue(start) <= literalValue(end);
      let ref3;
      if ((ref3 = start.subtype) === "StringLiteral" && ref3 === end.subtype) {
        let startChar = literalValue(start).charCodeAt(0).toString();
        startRef = {
          type: "Literal",
          subtype: "NumericLiteral",
          raw: startChar,
          children: [startChar]
        }, endRef = literalValue(end).charCodeAt(0).toString();
      }
    } else stepExp || (ascRef = makeRef("asc"), ascDec = [", ", ascRef, " = ", startRef, " <= ", endRef]);
    left.inclusive || (startRef = [
      makeLeftHandSideExpression(startRef),
      " + ",
      stepRef
    ]);
    let varAssign = [], varLetAssign = varAssign, varLet = varAssign, blockPrefix, names = forDeclaration?.names ?? [];
    if (forDeclaration != null)
      if (forDeclaration.type === "AssignmentExpression")
        varAssign = varLetAssign = [forDeclaration, " = "], names = [];
      else if (forDeclaration.decl === "let") {
        let varName = forDeclaration.children.splice(1);
        varAssign = [...trimFirstSpace(varName), " = "], varLet = [",", ...varName, " = ", counterRef];
      } else {
        let value = start?.subtype === "StringLiteral" ? ["String.fromCharCode(", counterRef, ")"] : counterRef;
        blockPrefix = [
          ["", [forDeclaration, " = ", value], ";"]
        ];
      }
    let declaration = {
      type: "Declaration",
      children: ["let ", ...startRefDec, ...endRefDec, counterRef, " = ", ...varLetAssign, startRef, ...varLet, ...ascDec],
      names
    }, counterPart = right.inclusive ? [counterRef, " <= ", endRef, " : ", counterRef, " >= ", endRef] : [counterRef, " < ", endRef, " : ", counterRef, " > ", endRef], condition = infinite || stepValue === 0 ? [] : asc != null ? asc ? counterPart.slice(0, 3) : counterPart.slice(4) : stepRef ? [stepRef, " !== 0 && (", stepRef, " > 0 ? ", ...counterPart, ")"] : [ascRef, " ? ", ...counterPart], increment = stepValue === 1 ? [...varAssign, "++", counterRef] : stepValue === -1 ? [...varAssign, "--", counterRef] : stepRef ? [...varAssign, counterRef, " += ", stepRef] : ascRef ? [...varAssign, ascRef, " ? ++", counterRef, " : --", counterRef] : [...varAssign, asc ? "++" : "--", counterRef];
    return {
      // This declaration doesn't always appear in the output,
      // but it's still helpful for determining the primary loop variable
      declaration: forDeclaration,
      children: [range2.error, open, declaration, "; ", ...condition, "; ", ...increment, close],
      blockPrefix
    };
  }
  function processForInOf($0) {
    let [awaits, eachOwn, open, declaration, declaration2, ws, inOf, exp, step, close] = $0;
    for (let ref4 = [declaration, declaration2?.[declaration2.length - 1]], i1 = 0, len3 = ref4.length; i1 < len3; i1++) {
      let decl = ref4[i1];
      decl != null && decl.type !== "ForDeclaration" && checkValidLHS(decl);
    }
    if (startsWith(exp, /^\s/) || (exp = prepend(" ", exp)), exp.type === "RangeExpression" && inOf.token === "of" && !declaration2)
      return forRange(
        open,
        declaration,
        exp,
        step && prepend(trimFirstSpace(step[0]), trimFirstSpace(step[2])),
        // omit "by" token
        close
      );
    if (step)
      throw new Error("for..of/in cannot use 'by' except with range literals");
    let eachOwnError, hoistDec, blockPrefix = [];
    if (eachOwn && eachOwn[0].token === "each")
      if (inOf.token === "of") {
        let counterRef = makeRef("i"), lenRef = makeRef("len"), expRef2 = maybeRef(exp), increment = "++", assignmentNames = [...declaration.names];
        if (declaration2) {
          let [, , ws22, decl22] = declaration2;
          blockPrefix.push(["", [
            trimFirstSpace(ws22),
            decl22,
            " = ",
            counterRef
          ], ";"]), assignmentNames.push(...decl22.names);
        }
        let expRefDec = expRef2 !== exp ? [trimFirstSpace(expRef2), " = ", trimFirstSpace(exp), ", "] : [];
        blockPrefix.push(["", {
          type: "Declaration",
          children: [declaration, " = ", trimFirstSpace(expRef2), "[", counterRef, "]"],
          names: assignmentNames,
          implicitLift: !0
        }, ";"]);
        let eachDeclaration = declaration;
        return declaration = {
          type: "Declaration",
          children: ["let ", ...expRefDec, counterRef, " = 0, ", lenRef, " = ", trimFirstSpace(expRef2), ".length"],
          decl: "let",
          names: []
        }, { declaration, eachDeclaration, children: [open, declaration, "; ", [counterRef, " < ", lenRef, "; "], counterRef, increment, close], blockPrefix };
      } else
        eachOwnError = {
          type: "Error",
          message: "'each' is only meaningful in for..of loops"
        };
    let own = eachOwn && eachOwn[0].token === "own", expRef;
    own && inOf.token !== "in" && (own = !1, eachOwnError = {
      type: "Error",
      message: "'own' is only meaningful in for..in loops"
    });
    let { binding } = declaration, pattern = binding?.pattern;
    if (pattern?.type === "NamedBindingPattern" && (pattern = pattern.binding), binding?.typeSuffix || inOf.token === "in" && declaration2 && pattern.type !== "Identifier") {
      let itemRef = makeRef(inOf.token === "in" ? "key" : "item");
      blockPrefix.push(["", {
        type: "Declaration",
        children: [declaration, " = ", itemRef],
        names: declaration.names
      }, ";"]), declaration = {
        type: "ForDeclaration",
        binding: {
          type: "Binding",
          pattern: itemRef,
          children: [itemRef],
          names: []
        },
        children: ["const ", itemRef],
        names: []
      }, pattern.type !== "Identifier" && (pattern = itemRef);
    }
    if (!(declaration2 || own))
      return {
        declaration,
        blockPrefix,
        children: [awaits, eachOwnError, open, declaration, ws, inOf, expRef ?? exp, close]
        // omit declaration2, replace eachOwn with eachOwnError, replace exp with expRef
      };
    let ws2, decl2;
    switch (declaration2 && ([, , ws2, decl2] = declaration2), inOf.token) {
      case "of": {
        let counterRef = makeRef("i");
        hoistDec = {
          type: "Declaration",
          children: ["let ", counterRef, " = 0"],
          decl: "let",
          names: []
        }, blockPrefix.push(["", {
          type: "Declaration",
          children: [trimFirstSpace(ws2), decl2, " = ", counterRef, "++"],
          names: decl2.names,
          decl: decl2.decl
        }, ";"]);
        break;
      }
      case "in": {
        let expRef2 = maybeRef(exp);
        if (expRef2 !== exp && (hoistDec = {
          type: "Declaration",
          children: ["let ", expRef2],
          names: [],
          decl: "let"
        }, exp = {
          type: "AssignmentExpression",
          children: [" ", expRef2, " =", exp]
        }), own) {
          let hasPropRef = getHelperRef("hasProp");
          blockPrefix.push(["", ["if (!", hasPropRef, "(", trimFirstSpace(expRef2), ", ", trimFirstSpace(pattern), ")) continue"], ";"]);
        }
        if (decl2) {
          let trimmedPattern = trimFirstSpace(pattern), expression = makeNode({
            type: "MemberExpression",
            children: [
              trimFirstSpace(expRef2),
              makeNode({
                type: "Index",
                expression: trimmedPattern,
                children: ["[", trimmedPattern, "]"]
              })
            ]
          });
          blockPrefix.push([
            "",
            (() => {
              if (decl2.type === "ForDeclaration") {
                let { binding: binding2, children } = decl2;
                return binding2.children.push(binding2.initializer = makeNode({
                  type: "Initializer",
                  expression,
                  children: [" = ", expression]
                })), makeNode({
                  type: "Declaration",
                  children: [
                    trimFirstSpace(ws2),
                    ...children
                  ],
                  bindings: [decl2.binding],
                  decl: decl2.decl,
                  names: decl2.names
                });
              } else
                return makeNode({
                  type: "AssignmentExpression",
                  children: [
                    trimFirstSpace(ws2),
                    decl2,
                    " = ",
                    trimFirstSpace(expRef2),
                    "[",
                    trimFirstSpace(pattern),
                    "]"
                  ],
                  names: decl2.names,
                  lhs: decl2,
                  assigned: decl2
                });
            })(),
            ";"
          ]);
        }
        break;
      }
      default:
        throw new Error(`for item, index must use 'of' or 'in' instead of '${inOf.token}'`);
    }
    return {
      declaration,
      children: [awaits, eachOwnError, open, declaration, ws, inOf, exp, close],
      // omit declaration2, replace each with eachOwnError
      blockPrefix,
      hoistDec
    };
  }

  // unplugin-civet:/Users/greghuc/workspace/Civet/source/parser/auto-dec.civet.jsx
  var concatAssign2 = (lhs, rhs) => (rhs?.[Symbol.isConcatSpreadable] ?? Array.isArray(rhs) ? lhs.push.apply(lhs, rhs) : lhs.push(rhs), lhs);
  function findDecs(statements) {
    let declarationNames = gatherNodes(statements, ($) => $.type === "Declaration").flatMap((d) => d.names), globals = getConfig().globals || [];
    return new Set(globals.concat(declarationNames));
  }
  function createConstLetDecs(statements, scopes, letOrConst) {
    function findVarDecs(statements2, decs) {
      let declarationNames = gatherRecursive(statements2, (node) => node.type === "Declaration" && node.children && node.children.length > 0 && node.children[0].token && node.children[0].token.startsWith("var") || node.type === "FunctionExpression").filter((node) => node.type === "Declaration").flatMap((node) => node.names);
      return new Set(declarationNames);
    }
    let declaredIdentifiers = findVarDecs(statements);
    function hasDec(name) {
      return declaredIdentifiers.has(name) || scopes.some(($1) => $1.has(name));
    }
    function gatherBlockOrOther(statement) {
      return gatherNodes(statement, (s) => s.type === "BlockStatement" || s.type === "AssignmentExpression" || s.type === "Declaration").flatMap((node) => node.type == "BlockStatement" ? node.bare ? gatherBlockOrOther(node.expressions) : node : node.children && node.children.length ? [...gatherBlockOrOther(node.children), node] : []);
    }
    let currentScope = /* @__PURE__ */ new Set();
    scopes.push(currentScope);
    let fnNodes = gatherNodes(statements, isFunction), forNodes = gatherNodes(statements, (s) => s.type === "ForStatement"), targetStatements = [];
    for (let statement of statements) {
      let nodes = gatherBlockOrOther(statement), undeclaredIdentifiers = [];
      for (let node of nodes) {
        if (node.type == "BlockStatement") {
          let block = node, fnNode = fnNodes.find((fnNode2) => fnNode2.block === block), forNode = forNodes.find((forNode2) => forNode2.block === block);
          fnNode != null ? (scopes.push(new Set(fnNode.parameters.names)), createConstLetDecs(block.expressions, scopes, letOrConst), scopes.pop()) : forNode != null ? (scopes.push(new Set(forNode.declaration.names)), createConstLetDecs(block.expressions, scopes, letOrConst), scopes.pop()) : createConstLetDecs(block.expressions, scopes, letOrConst);
          continue;
        }
        if (node.names == null) continue;
        let names = node.names.filter((name) => !hasDec(name));
        node.type == "AssignmentExpression" && undeclaredIdentifiers.push(...names), names.forEach((name) => currentScope.add(name));
      }
      if (undeclaredIdentifiers.length > 0) {
        let indent = statement[0], firstIdentifier = gatherNodes(statement[1], (node) => node.type == "Identifier")[0];
        if (undeclaredIdentifiers.length == 1 && statement[1].type == "AssignmentExpression" && statement[1].names.length == 1 && statement[1].names[0] == undeclaredIdentifiers[0] && firstIdentifier && firstIdentifier.names == undeclaredIdentifiers[0] && gatherNodes(statement[1], (node) => node.type === "ObjectBindingPattern").length == 0)
          statement[1].children.unshift([`${letOrConst} `]);
        else {
          let tail = `
`;
          gatherNodes(indent, (node) => node.token && node.token.endsWith(`
`)).length > 0 && (tail = void 0), targetStatements.push([indent, {
            type: "Declaration",
            children: ["let ", ...undeclaredIdentifiers.join(", ")],
            names: undeclaredIdentifiers
          }, tail]);
        }
      }
      targetStatements.push(statement);
    }
    scopes.pop(), statements.splice(0, statements.length, ...targetStatements);
  }
  function createVarDecs(block, scopes, pushVar) {
    function hasDec(name) {
      return scopes.some(($2) => $2.has(name));
    }
    function findAssignments(statements2, decs2) {
      let assignmentStatements2 = gatherNodes(statements2, ($3) => $3.type === "AssignmentExpression");
      return assignmentStatements2.length && concatAssign2(
        assignmentStatements2,
        findAssignments(assignmentStatements2.map((s) => s.children), decs2)
      ), assignmentStatements2.filter(($4) => $4.parent?.type !== "CoffeeClassPublic");
    }
    pushVar ??= (name) => (varIds.push(name), decs.add(name));
    let { expressions: statements } = block, decs = findDecs(statements);
    scopes.push(decs);
    let varIds = [];
    findAssignments(statements, scopes).flatMap(($5) => $5?.names || []).filter((x, i, a) => {
      if (!hasDec(x)) return a.indexOf(x) === i;
    }).forEach(pushVar);
    let fnNodes = gatherNodes(statements, isFunction), forNodes = gatherNodes(statements, (s) => s.type === "ForStatement"), blockNodes = new Set(gatherNodes(statements, (s) => s.type === "BlockStatement"));
    if (fnNodes.forEach(({ block: block2 }) => blockNodes.delete(block2)), forNodes.forEach(({ block: block2 }) => blockNodes.delete(block2)), blockNodes.forEach((block2) => createVarDecs(block2, scopes, pushVar)), forNodes.forEach(({ block: block2, declaration }) => (scopes.push(new Set(declaration?.names)), createVarDecs(block2, scopes, pushVar), scopes.pop())), fnNodes.forEach(({ block: block2, parameters }) => (scopes.push(new Set(parameters.names)), createVarDecs(block2, scopes), scopes.pop())), varIds.length) {
      let indent = getIndent(statements[0]), delimiter = ";";
      statements[0][1]?.parent?.root && (delimiter = `;
`), braceBlock(block), statements.unshift([indent, {
        type: "Declaration",
        children: ["var ", varIds.join(", ")]
      }, delimiter]);
    }
    scopes.pop();
  }

  // unplugin-civet:/Users/greghuc/workspace/Civet/source/parser/string.civet.jsx
  function getIndentLevel(str, tab) {
    if (tab != null && tab != 1) {
      let tabs = str.match(/\t/g), numTabs = tabs ? tabs.length : 0;
      return numTabs * tab + /*spaces*/
      (str.length - numTabs);
    } else
      return str.length;
  }
  function reduceIndentLevel(str, dedent, tab) {
    if (tab != null && tab != 1) {
      for (let i1 = 0, len3 = str.length; i1 < len3; i1++) {
        let i = i1, char = str[i1];
        if (!dedent)
          return str.slice(i);
        if (char == "	") {
          if (dedent -= tab, dedent < 0)
            return "".padStart(-dedent, " ") + str.slice(i + 1);
        } else
          dedent--;
      }
      return "";
    } else
      return str.slice(dedent);
  }
  var indentRe = /\n([ \t]*)(?![ \t]|\r?\n|$)/g;
  function getIndentOfBlockString(str, tab) {
    let minLevel = 1 / 0, ref;
    for (; ref = indentRe.exec(str); ) {
      let level = getIndentLevel(ref[1], tab);
      level < minLevel && (minLevel = level);
    }
    return minLevel === 1 / 0 && (minLevel = 0), minLevel;
  }
  function dedentBlockString({ $loc, token: str }, tab, dedent, trimStart = !0, trimEnd = !0) {
    return dedent == null && /^[ \t]*\r?\n/.test(str) && (dedent = getIndentOfBlockString(str, tab)), dedent && (str = str.replace(/(\n)([ \t]*)/g, (_2, newline, indent) => newline + reduceIndentLevel(indent, dedent, tab))), trimStart && (str = str.replace(/^[ \t]*\r?\n/, "")), trimEnd && (str = str.replace(/(\r?\n|\n)[ \t]*$/, "")), str = str.replace(/(\\.|`|\$\{)/g, (s) => s[0] === "\\" ? s : `\\${s}`), { $loc, token: str };
  }
  function dedentBlockSubstitutions($0, tab) {
    let [s, strWithSubstitutions, e] = $0;
    if (!strWithSubstitutions.length)
      return $0;
    let stringPart = (() => {
      let results1 = [];
      for (let i2 = 0, len1 = strWithSubstitutions.length; i2 < len1; i2++) {
        let part = strWithSubstitutions[i2];
        results1.push(part.token ?? "s");
      }
      return results1;
    })().join(""), ref1;
    /^[ \t]*\r?\n/.test(stringPart) ? ref1 = getIndentOfBlockString(stringPart, tab) : ref1 = void 0;
    let dedent = ref1, results = [s];
    for (let i3 = 0, len22 = strWithSubstitutions.length; i3 < len22; i3++) {
      let i = i3, part = strWithSubstitutions[i3];
      part.token != null && (part = dedentBlockString(
        part,
        tab,
        dedent,
        i === 0,
        i === strWithSubstitutions.length - 1
      )), results.push(part);
    }
    return results.push(e), {
      type: "TemplateLiteral",
      children: results
    };
  }
  function processCoffeeInterpolation(s, parts, e, $loc) {
    if (parts.length === 0)
      return {
        type: "StringLiteral",
        token: '""',
        $loc
      };
    if (parts.length === 1) {
      let ref2;
      if ((ref2 = parts[0]) && typeof ref2 == "object" && "token" in ref2) {
        let { token } = ref2;
        return {
          type: "StringLiteral",
          token: `"${modifyString(token)}"`,
          $loc
        };
      }
    }
    let results2 = [];
    for (let i4 = 0, len3 = parts.length; i4 < len3; i4++) {
      let part = parts[i4];
      if ("token" in part) {
        let token = modifyString(part.token.replace(/(`|\$\{)/g, "\\$1"));
        results2.push({
          ...part,
          token
        });
      } else
        results2.push(part);
    }
    return parts = results2, s.token = e.token = "`", {
      type: "TemplateLiteral",
      children: [s, parts, e]
    };
  }
  function modifyString(str) {
    return str.replace(/((?:\\.|[^\r\n])*)(\r\n|\n|\r)?/gsu, function(_2, chars, nl) {
      return nl ? chars + "\\n" : chars;
    });
  }
  function quoteString(str) {
    return JSON.stringify(str);
  }

  // unplugin-civet:/Users/greghuc/workspace/Civet/source/parser/lib.civet.jsx
  var xor = (a, b) => a ? !b && a : b;
  function addPostfixStatement(statement, ws, post) {
    let expressions = [
      ...post.blockPrefix || [],
      ["", statement]
    ], block = makeNode({
      type: "BlockStatement",
      children: [" { ", expressions, " }"],
      expressions,
      bare: !1
    }), children = [...post.children, block];
    return isWhitespaceOrEmpty(ws) || children.push(ws), post = makeNode({ ...post, children, block }), post.type === "IfStatement" && (post.then = block), post;
  }
  function adjustIndexAccess(dot) {
    return dot.optional ? {
      ...dot,
      children: [...dot.children, "["]
    } : (dot = replaceNodes(
      deepCopy(dot),
      (node) => node.token === ".",
      (node) => ({ ...node, token: "[" })
    ), dot);
  }
  function negateCondition(condition) {
    let { expression } = condition, children = condition.children.slice(), i = children.indexOf(expression);
    if (i < 0)
      throw new Error("Could not find expression in condition");
    let pre = ["!"];
    return expression = makeLeftHandSideExpression(expression), children[i] = expression = {
      type: "UnaryExpression",
      children: [
        pre,
        expression
      ],
      pre,
      expression
    }, { ...condition, expression, children };
  }
  function isExpression(node) {
    if (Array.isArray(node))
      return node.every(isExpression);
    if (typeof node == "string")
      return !0;
    switch (node?.type) {
      case "BlockStatement":
      case "DebuggerStatement":
      case "Declaration":
      case "ForStatement":
      case "IfStatement":
      case "IterationStatement":
      case "ReturnStatement":
      case "SwitchStatement":
      case "ThrowStatement":
      case "TryStatement":
        return !1;
    }
    return !0;
  }
  function expressionizeBlock(blockOrExpression) {
    if (blockOrExpression && typeof blockOrExpression == "object" && "expressions" in blockOrExpression) {
      let { expressions } = blockOrExpression, l = expressions.length, results = [], i1 = 0;
      for (let [ws, s, _delim] of expressions) {
        let i = i1++;
        if (!isExpression(s)) return;
        let wrapped = makeLeftHandSideExpression(s);
        i === l - 1 ? results.push([ws, wrapped]) : results.push([ws, wrapped, ","]);
      }
      return results.length > 1 ? makeLeftHandSideExpression(results) : results.length ? results : ["void 0"];
    } else
      return blockOrExpression;
  }
  function expressionizeIfStatement(statement) {
    let { condition, then: b, else: e } = statement, [...condRest] = condition.children, [closeParen] = condRest.splice(-1), expressionizedBlock = expressionizeBlock(b);
    if (!expressionizedBlock)
      return wrapIIFE([["", statement]]);
    let children = [
      ...condRest,
      "?",
      expressionizedBlock
    ];
    if (e) {
      let e2 = expressionizeBlock(e.block);
      if (!e2)
        return wrapIIFE([["", statement]]);
      children.push(e.children[0], ":", e2, ...e.children.slice(3));
    } else
      children.push(":void 0");
    return children.push(closeParen), makeNode({
      type: "IfExpression",
      children
    });
  }
  function expressionizeTypeIf([ifOp, condition, t, e]) {
    let children = [
      "(",
      trimFirstSpace(condition),
      "?"
    ];
    return xor(ifOp.negated, condition.negated) ? (e ? children.push(...e.slice(2), e[0], ":") : children.push("never:"), children.push(t)) : (children.push(t), e ? children.push(e[0], ":", ...e.slice(2)) : children.push(":never")), children.push(")"), children;
  }
  function handleThisPrivateShorthands(value) {
    if (value.privateShorthand)
      return value = value.children[1].children[1], [value, !1];
    if (value.type === "MemberExpression" || value.type === "CallExpression") {
      let suppressPrefix = value.thisShorthand;
      return value = {
        ...value,
        children: value.children.map((c, i) => {
          if (i === 0) {
            let s;
            [c, s] = handleThisPrivateShorthands(c), suppressPrefix ||= s;
          }
          return c;
        })
      }, [value, suppressPrefix];
    }
    return [value, value.thisShorthand];
  }
  function processTryBlock($0) {
    let [t, , b, cs, e, f] = $0, c, m;
    if (cs.some(($3) => (m = $3.binding?.parameter, typeof m == "object" && m != null && "type" in m && m.type === "CatchPattern"))) {
      let ref = makeRef("e"), binding = {
        type: "CatchBinding",
        children: ["(", ref, ")"],
        parameter: ref
      }, condition = {
        type: "ParenthesizedExpression",
        children: ["(", ref, ")"],
        expression: ref
      }, defaultClause = !1, clauses = cs.map((clause) => {
        let ref1;
        if ((ref1 = clause.binding?.parameter) && typeof ref1 == "object" && "type" in ref1 && ref1.type === "CatchPattern" && "patterns" in ref1) {
          let { patterns } = ref1;
          return {
            type: "PatternClause",
            patterns,
            block: clause.block,
            children: [patterns, clause.block]
          };
        } else {
          defaultClause = !0;
          let parameter = clause.binding?.parameter;
          if (parameter != null) {
            assert.equal(
              parameter.type,
              "CatchParameter",
              `Invalid catch parameter ${parameter.type}`
            );
            let { binding: pattern, typeSuffix } = parameter, initializer = {
              type: "Initializer",
              expression: ref,
              children: ["", " = ", ref]
            }, bindings = [{
              type: "Binding",
              names: pattern.names,
              pattern,
              typeSuffix,
              initializer,
              children: [pattern, typeSuffix, initializer],
              splices: [],
              thisAssignments: []
            }];
            clause.block.expressions.unshift(["", {
              type: "Declaration",
              children: ["let", " ", bindings],
              bindings,
              names: bindings[0].names,
              decl: "let"
            }, ";"]);
          }
          return {
            type: "DefaultClause",
            block: clause.block,
            children: ["default: ", clause.block]
          };
        }
      });
      if (!defaultClause) {
        let expressions = [[
          "",
          {
            type: "ThrowStatement",
            children: ["throw", " ", ref]
          }
        ]], block2 = {
          type: "BlockStatement",
          expressions,
          children: [" {", expressions, "}"],
          bare: !1
        };
        clauses.push({
          type: "DefaultClause",
          block: block2,
          children: ["default: ", block2]
        });
      }
      let caseBlock = {
        type: "CaseBlock",
        clauses,
        children: [" {", clauses, "}"]
      }, patternSwitch = {
        type: "SwitchStatement",
        condition,
        caseBlock,
        children: ["switch", condition, caseBlock]
      }, block = {
        type: "BlockStatement",
        bare: !1,
        expressions: [["", patternSwitch]],
        children: [" {", patternSwitch, "}"]
      };
      c = makeNode({
        type: "CatchClause",
        children: [
          cs[0].children[0],
          // whitespace
          cs[0].children[1],
          // catch token
          binding,
          block
        ],
        binding,
        block
      });
    } else
      c = cs[0], cs.length > 1 && (c = append(c, {
        type: "Error",
        message: "Only one catch clause allowed unless using pattern matching"
      }));
    if (!c && (e || !f)) {
      let emptyCatchBlock = makeEmptyBlock();
      c = {
        type: "CatchClause",
        children: [" ", "catch(e) ", emptyCatchBlock],
        block: emptyCatchBlock
      };
    }
    let hoistDec;
    if (e) {
      c = c;
      let ok = makeRef("ok");
      hoistDec = {
        type: "Declaration",
        children: ["let ", ok, " = true"],
        names: []
      }, replaceNode(
        c.block,
        blockWithPrefix([["", "ok = false"]], c.block),
        c
      );
      let condition = {
        type: "ParenthesizedExpression",
        children: ["(", ok, ")"],
        expression: ok
      }, i = makeNode({
        type: "IfStatement",
        children: ["if", condition, e.block],
        condition,
        then: e.block,
        else: void 0
      });
      if (!f) {
        let emptyFinallyBlock = makeEmptyBlock();
        f = {
          type: "FinallyClause",
          children: [" ", "finally ", emptyFinallyBlock],
          block: emptyFinallyBlock
        };
      }
      replaceNode(
        f.block,
        blockWithPrefix([["", i]], f.block),
        f
      );
    }
    let blocks = [b];
    return c && blocks.push(c.block), {
      type: "TryStatement",
      blocks,
      children: [t, b, c, f],
      hoistDec
    };
  }
  function processCallMemberExpression(node) {
    let { children } = node;
    if (Array.isArray(children) && children.length >= 2 && typeof children[0] == "object" && children[0] != null && "parenthesizedOp" in children[0] && typeof children[0].parenthesizedOp == "object" && children[0].parenthesizedOp != null && "token" in children[0].parenthesizedOp && typeof children[1] == "object" && children[1] != null && "type" in children[1] && children[1].type === "Call") {
      let op = children[0].parenthesizedOp, call = children[1], args = [...call.args];
      call = {
        ...call,
        args,
        children: call.children.map((x) => x === call.args ? args : x)
      }, isComma(args[args.length - 1]) && (args[args.length - 1] = deepCopy(args[args.length - 1]), isComma(args[args.length - 1]).token = "");
      let commaCount = 0;
      for (let i2 = 0, len1 = args.length; i2 < len1; i2++) {
        let i = i2, arg = args[i2];
        isComma(arg) && (arg = args[i] = deepCopy(arg), isComma(arg).token = `)${op.token}(`, commaCount++);
      }
      if (args.length) {
        if (commaCount)
          children.splice(0, 2, {
            type: "ParenthesizedExpression",
            children: ["(", call.children, ")"],
            expression: call.children
          });
        else {
          let middle = call.children.slice(1, -1), ref2;
          children.splice(0, 2, {
            type: "ParenthesizedExpression",
            expression: middle,
            children: [call.children[0], middle, (ref2 = call.children)[ref2.length - 1]]
          });
        }
        if (children.length === 1)
          return children[0];
      }
    }
    for (let i3 = 0, len22 = children.length; i3 < len22; i3++) {
      let i = i3, glob = children[i3];
      if (glob?.type === "PropertyGlob") {
        let prefix = children.slice(0, i), parts = [], ref;
        if (prefix.length > 1 && glob.object.properties.length > 1) {
          ref = makeRef();
          let { refAssignment } = makeRefAssignment(ref, prefix);
          prefix = [makeLeftHandSideExpression(refAssignment)];
        }
        prefix = prefix.concat(glob.dot);
        for (let part of glob.object.properties) {
          if (part.type === "Error") {
            parts.push(part);
            continue;
          }
          if (part.type === "MethodDefinition") {
            parts.push({
              type: "Error",
              message: "Glob pattern cannot have method definition"
            });
            continue;
          }
          if (part.value && !["CallExpression", "MemberExpression", "Identifier"].includes(part.value.type)) {
            parts.push({
              type: "Error",
              message: `Glob pattern must have call or member expression value, found ${JSON.stringify(part.value)}`
            });
            continue;
          }
          let suppressPrefix = !1, name = part.name, value = part.value ?? name, wValue = getTrimmingSpace(part.value);
          [value, suppressPrefix] = handleThisPrivateShorthands(value), glob.reversed && ([name, value] = [value, name]), suppressPrefix || (value = prefix.concat(trimFirstSpace(value)), ref != null && (prefix = [ref].concat(glob.dot))), wValue && value.unshift(wValue), part.type === "SpreadProperty" ? parts.push({
            type: part.type,
            value,
            dots: part.dots,
            delim: part.delim,
            names: part.names,
            children: part.children.slice(0, 2).concat(value, part.delim),
            usesRef: !!ref
          }) : parts.push({
            type: part.type === "Identifier" ? "Property" : part.type,
            name,
            value,
            delim: part.delim,
            names: part.names,
            children: [
              isWhitespaceOrEmpty(part.children[0]) && part.children[0],
              name,
              isWhitespaceOrEmpty(part.children[2]) && part.children[2],
              part.children[3]?.token === ":" ? part.children[3] : ":",
              value,
              part.delim
              // comma delimiter
            ],
            usesRef: !!ref
          });
        }
        let ref3, object = {
          type: "ObjectExpression",
          children: [
            glob.object.children[0],
            // {
            ...parts,
            (ref3 = glob.object.children)[ref3.length - 1]
            // whitespace and }
          ],
          properties: parts
        };
        return i === children.length - 1 ? object : processCallMemberExpression({
          // in case there are more
          ...node,
          children: [object, ...children.slice(i + 1)]
        });
      } else if (glob?.type === "PropertyBind") {
        assert.notEqual(i, 0, "@ bind must be preceded by an expression");
        let prefix = i === 1 ? children[0] : children.slice(0, i), { ref, refAssignment } = maybeRefAssignment(prefix);
        return processCallMemberExpression({
          // in case there are more
          ...node,
          children: [
            makeLeftHandSideExpression(refAssignment ?? prefix),
            {
              ...glob,
              type: "PropertyAccess",
              children: [
                ...glob.children,
                ".bind(",
                ref,
                ...glob.args.length > 0 ? [", "] : [],
                ...glob.args,
                ")"
              ]
            },
            ...children.slice(i + 1)
          ]
        });
      } else if (typeof glob == "object" && glob != null && "type" in glob && glob.type === "Index" && "mod" in glob && glob.mod === !0) {
        assert.notEqual(i, 0, "Index access must be preceded by an expression");
        let prefix = i === 1 ? children[0] : children.slice(0, i), { ref, refAssignment } = maybeRefAssignment(prefix), args = [
          glob.children.slice(1, -1),
          // between "[" and "]" tokens
          ",",
          [" ", ref, ".length"]
        ], call = makeNode({
          type: "CallExpression",
          implicit: !0,
          children: [
            getHelperRef("modulo"),
            makeNode({
              type: "Call",
              args,
              children: [
                "(",
                args,
                ")"
              ]
            })
          ]
        }), ref4;
        return processCallMemberExpression({
          // in case there are more
          ...node,
          children: [
            makeLeftHandSideExpression(refAssignment ?? prefix),
            makeNode({
              ...glob,
              mod: !1,
              expression: call,
              children: [
                glob.children[0],
                // "[" token
                call,
                (ref4 = glob.children)[ref4.length - 1]
                // "]" token
              ]
            }),
            ...children.slice(i + 1)
          ]
        });
      } else if (typeof glob == "object" && glob != null && "type" in glob && glob.type === "SliceExpression" && "reversed" in glob && glob.reversed === !0) {
        let args = [
          { ...node, children: node.children.slice(0, i) },
          { ...glob.children[0], token: ", " },
          ...glob.children.slice(1, -1)
        ], ref5, rsliceCall = makeNode({
          type: "CallExpression",
          implicit: !0,
          children: [
            getHelperRef("rslice"),
            makeNode({
              type: "Call",
              args,
              children: [
                "(",
                args,
                (ref5 = glob.children)[ref5.length - 1]
              ]
            })
          ]
        });
        return i + 1 >= children.length ? rsliceCall : processCallMemberExpression(makeNode({
          // in case there are more
          ...node,
          children: [
            rsliceCall,
            ...children.slice(i + 1)
          ]
        }));
      }
    }
    return node;
  }
  function makeExpressionStatement(expression) {
    return Array.isArray(expression) && expression[1]?.[0]?.[0]?.[1]?.token === "," ? [
      makeExpressionStatement(expression[0]),
      expression[1].map(([comma, exp]) => [comma, makeExpressionStatement(exp)])
    ] : expression?.type === "ObjectExpression" || expression?.type === "FunctionExpression" && !expression.id || expression?.type === "UnaryExpression" && !expression.pre?.length && expression.expression !== makeExpressionStatement(expression.expression) ? makeLeftHandSideExpression(expression) : expression;
  }
  function lastAccessInCallExpression(exp) {
    if (exp.type === "Identifier")
      return exp;
    let children, i;
    do {
      if (exp.children == null)
        return;
      for ({ children } = exp, i = children.length - 1; i >= 0 && (children[i].type === "Call" || children[i].type === "NonNullAssertion" || children[i].type === "Optional"); ) i--;
      if (i < 0) return;
    } while (children[i].type === "MemberExpression" && (exp = children[i]));
    return children[i];
  }
  function convertMethodToFunction(method) {
    let { signature, block } = method, { async, modifier, optional } = signature;
    if (optional || modifier?.get || modifier?.set)
      return;
    let func = ["function "];
    return async != null && (func.unshift(async), async.length && !async[async.length - 1]?.length && async.push(" ")), {
      ...signature,
      id: signature.name,
      signature,
      type: "FunctionExpression",
      children: [
        [...func, ...signature.children.slice(1)],
        block
      ],
      block
    };
  }
  function convertFunctionToMethod(id, exp) {
    let fnTokenIndex = exp.children.findIndex(function(c) {
      return c?.token?.startsWith("function");
    }), children = exp.children.slice();
    return exp.generator ? children.splice(fnTokenIndex, 2, children[fnTokenIndex + 1], id) : children.splice(fnTokenIndex, 1, id), {
      ...exp,
      type: "MethodDefinition",
      name: id.name,
      signature: { ...exp.signature, id, name: id.name },
      children
    };
  }
  function convertArrowFunctionToMethod(id, exp) {
    let block = { ...exp.block }, children = exp.children.filter(function(c) {
      return !(Array.isArray(c) && c[c.length - 1]?.token?.includes("=>"));
    }).map(function(c) {
      return c === exp.block ? block : c;
    });
    return children.unshift(id), exp = {
      ...exp,
      type: "MethodDefinition",
      name: id.name,
      signature: { ...exp.signature, id, name: id.name },
      block,
      children,
      autoBind: !0
    }, block.parent = exp, braceBlock(block), exp;
  }
  function convertNamedImportsToObject(node, pattern) {
    let properties = node.specifiers.map((specifier) => {
      if (specifier.ts)
        return { type: "Error", message: "cannot use `type` in dynamic import" };
      {
        let { source, binding } = specifier, ref6, delim = (ref6 = specifier.children)[ref6.length - 1];
        return {
          type: pattern ? "BindingProperty" : "Property",
          name: source,
          value: source !== binding ? binding : void 0,
          delim,
          children: source === binding ? [source, delim] : [source, ":", binding, delim]
        };
      }
    }), ref7;
    return {
      type: pattern ? "ObjectBindingPattern" : "ObjectExpression",
      names: node.names,
      properties,
      children: [
        node.children[0],
        // {
        properties,
        (ref7 = node.children)[ref7.length - 1]
        // }
      ]
    };
  }
  function convertObjectToJSXAttributes(obj) {
    let parts = [], rest = [], i4 = 0;
    for (let part of obj.properties) {
      let i = i4++;
      if (part.usesRef) {
        rest.push(part);
        continue;
      }
      switch (i > 0 && parts.push(" "), part.type) {
        case "Identifier": {
          parts.push([part.name, "={", part.name, "}"]);
          break;
        }
        case "Property": {
          part.name.type === "ComputedPropertyName" ? rest.push(part) : parts.push([part.name, "={", trimFirstSpace(part.value), "}"]);
          break;
        }
        case "SpreadProperty": {
          parts.push(["{", part.dots, part.value, "}"]);
          break;
        }
        case "MethodDefinition": {
          convertMethodToFunction(part) ? parts.push([part.name, "={", convertMethodToFunction(part), "}"]) : rest.push(part);
          break;
        }
        default:
          throw new Error(`invalid object literal type in JSX attribute: ${part.type}`);
      }
    }
    return rest.length && (parts.length && parts[parts.length - 1] !== " " && parts.push(" "), parts.push(["{...{", ...rest, "}}"])), parts;
  }
  function makeGetterMethod(name, ws, value, returnType, block, kind = { token: "get" }, autoReturn = !0) {
    let { token } = kind;
    ws = trimFirstSpace(ws);
    let setVal, parameterList = [], isGet = token === "get";
    isGet || parameterList.push(setVal = makeRef("value"));
    let parameters = {
      type: "Parameters",
      children: ["(", parameterList, ")"],
      parameters: parameterList,
      implicit: isGet
    }, expressions;
    if (block ? (block = duplicateBlock(block), expressions = block.expressions) : (expressions = [], block = {
      type: "BlockStatement",
      expressions,
      children: ["{ ", expressions, " }"],
      bare: !1
    }), autoReturn) {
      let finalStatement = isGet ? [[expressions[0]?.[0] || "", ws], wrapWithReturn(value)] : [[expressions[0]?.[0] || "", ws], [value, " = ", setVal]];
      expressions.push(finalStatement);
    }
    return {
      type: "MethodDefinition",
      children: [kind, " ", name, parameters, returnType, block],
      name,
      signature: {
        type: "MethodSignature",
        modifier: {
          get: token === "get",
          set: token === "set",
          async: !1
        },
        name,
        returnType
      },
      block,
      parameters
    };
  }
  function processBindingPatternLHS(lhs, tail) {
    adjustAtBindings(lhs, !0);
    let [splices, thisAssignments] = gatherBindingCode(lhs), subbindings = gatherSubbindings(lhs);
    simplifyBindingProperties(lhs), simplifyBindingProperties(subbindings), tail.push(
      ...splices.map((s) => [", ", s]),
      ...thisAssignments.map((a) => [", ", a]),
      ...subbindings
    );
  }
  function processAssignments(statements) {
    for (let ref8 = gatherRecursiveAll(statements, ($4) => $4.type === "AssignmentExpression" || $4.type === "UpdateExpression"), i5 = 0, len3 = ref8.length; i5 < len3; i5++) {
      let extractAssignment = function(lhs) {
        let expr = lhs;
        for (; expr.type === "ParenthesizedExpression"; )
          expr = expr.expression;
        let m1;
        if (m1 = expr.type, m1 === "AssignmentExpression" || m1 === "UpdateExpression")
          return expr.type === "UpdateExpression" && expr.children[0] === expr.assigned ? (pre.push("("), post.push([", ", lhs, ")"])) : (pre.push(["(", lhs, ", "]), post.push(")")), expr.assigned;
      }, exp = ref8[i5];
      checkValidLHS(exp.assigned);
      let pre = [], post = [], ref9;
      switch (exp.type) {
        case "AssignmentExpression": {
          if (!exp.lhs)
            continue;
          for (let ref10 = exp.lhs, i6 = 0, len4 = ref10.length; i6 < len4; i6++) {
            let lhsPart = ref10[i6], ref11;
            if (ref11 = extractAssignment(lhsPart[1])) {
              let newLhs = ref11;
              lhsPart[1] = newLhs;
            }
          }
          break;
        }
        case "UpdateExpression": {
          if (ref9 = extractAssignment(exp.assigned)) {
            let newLhs = ref9, i = exp.children.indexOf(exp.assigned);
            exp.assigned = exp.children[i] = newLhs;
          }
          break;
        }
      }
      if (pre.length && exp.children.unshift(...pre), post.length && exp.children.push(...post), exp.type === "UpdateExpression") {
        let { assigned } = exp, ref = makeRef(), newMemberExp = unchainOptionalMemberExpression(assigned, ref, (children) => exp.children.map(($5) => $5 === assigned ? children : $5));
        newMemberExp !== assigned && (newMemberExp.usesRef && (newMemberExp.hoistDec = {
          type: "Declaration",
          children: ["let ", ref],
          names: []
        }), replaceNode(exp, newMemberExp));
      }
    }
    for (let ref12 = gatherRecursiveAll(statements, ($6) => $6.type === "AssignmentExpression"), i7 = 0, len5 = ref12.length; i7 < len5; i7++) {
      let exp = ref12[i7];
      if (exp.names !== null)
        continue;
      let { lhs: $1, expression: $2 } = exp, tail = [], len3 = $1.length, block, ref13;
      if (blockContainingStatement(exp) && !(ref13 = $1[$1.length - 1])?.[ref13.length - 1]?.special) {
        block = makeBlockFragment();
        let ref14;
        if (ref14 = prependStatementExpressionBlock(
          { type: "Initializer", expression: $2, children: [void 0, void 0, $2] },
          block
        )) {
          let ref = ref14;
          exp.children = exp.children.map(($7) => $7 === $2 ? ref : $7), $2 = ref;
        } else
          block = void 0;
      }
      if ($1.some(($8) => $8[$8.length - 1].special)) {
        if ($1.length !== 1) throw new Error("Only one assignment with id= is allowed");
        let [, lhs, , op] = $1[0], { call, omitLhs } = op, index = exp.children.indexOf($2);
        if (index < 0) throw new Error("Assertion error: exp not in AssignmentExpression");
        if (exp.children.splice(
          index,
          1,
          exp.expression = $2 = [call, "(", lhs, ", ", $2, ")"]
        ), omitLhs) {
          replaceNode(exp, $2);
          continue;
        }
      }
      let wrapped = !1, i = 0;
      for (; i < len3; ) {
        let lastAssignment = $1[i++], [, lhs, , op] = lastAssignment;
        if (op.token !== "=")
          continue;
        let m2;
        m2 = lhs.type, (m2 === "ObjectExpression" || m2 === "ObjectBindingPattern") && (wrapped || (wrapped = !0, lhs.children.splice(0, 0, "("), tail.push(")")));
      }
      let refsToDeclare = /* @__PURE__ */ new Set();
      for (i = len3 - 1; i >= 0; ) {
        let lastAssignment = $1[i];
        if (lastAssignment[3].token === "=") {
          let lhs = lastAssignment[1], m3;
          if (lhs.type === "MemberExpression") {
            let members = lhs.children, lastMember = members[members.length - 1];
            if (lastMember.type === "SliceExpression") {
              let { start, end, children: c } = lastMember;
              if (c[0].token = ".splice(", c[1] = start, c[2] = ", ", end ? c[3] = [end, " - ", start] : c[3] = ["1/0"], c[4] = [", ...", $2], c[5] = ")", lastAssignment.pop(), isWhitespaceOrEmpty(lastAssignment[2]) && lastAssignment.pop(), $1.length > 1)
                throw new Error("Not implemented yet! TODO: Handle multiple splice assignments");
              exp.children = [$1], exp.names = [];
              break;
            }
          } else if (typeof lhs == "object" && lhs != null && "type" in lhs && lhs.type === "CallExpression" && "children" in lhs && Array.isArray(lhs.children) && lhs.children.length >= 1 && lhs.children[0] === peekHelperRef("rslice")) {
            lhs.children.push({
              type: "Error",
              message: "Slice range cannot be decreasing in assignment"
            });
            break;
          } else m3 = lhs.type, (m3 === "ObjectBindingPattern" || m3 === "ArrayBindingPattern" || m3 === "NamedBindingPattern") && (processBindingPatternLHS(lhs, tail), gatherRecursiveAll(lhs, ($9) => $9.type === "Ref").forEach(refsToDeclare.add.bind(refsToDeclare)));
        }
        i--;
      }
      i = len3 - 1;
      let optionalChainRef = makeRef();
      for (; i >= 0; ) {
        let assignment = $1[i], [ws1, lhs, ws2, op] = assignment;
        if (lhs.type === "MemberExpression" || lhs.type === "CallExpression") {
          let newMemberExp = unchainOptionalMemberExpression(lhs, optionalChainRef, (children) => {
            let assigns = $1.splice(i + 1, len3 - 1 - i);
            return $1.pop(), [ws1, ...children, ws2, op, ...assigns, $2];
          });
          newMemberExp !== lhs && (newMemberExp.usesRef && (exp.hoistDec = {
            type: "Declaration",
            children: ["let ", optionalChainRef],
            names: []
          }), replaceNode($2, newMemberExp), $2 = newMemberExp);
        }
        i--;
      }
      if (refsToDeclare.size && (exp.hoistDec ? exp.hoistDec.children.push([...refsToDeclare].map(($10) => [",", $10])) : exp.hoistDec = {
        type: "Declaration",
        children: ["let ", [...refsToDeclare].map((r, i2) => i2 ? [",", r] : r)],
        names: []
      }), exp.names = $1.flatMap(([, l]) => l.names || []), tail.length) {
        let index = exp.children.indexOf($2);
        if (index < 0) throw new Error("Assertion error: exp not in AssignmentExpression");
        exp.children.splice(index + 1, 0, ...tail);
      }
      block && (replaceNode(exp, block), block.expressions.push(["", exp]), exp.parent = block);
    }
  }
  function unchainOptionalMemberExpression(exp, ref, innerExp) {
    let j = 0, { children } = exp, usesRef = !1, conditions = [];
    for (; j < children.length; ) {
      let child = children[j], type = child?.type, hasOptional = !1;
      switch (type) {
        case "PropertyAccess": {
          child.dot?.optional && (hasOptional = !0, child.dot.children.shift(), child.dot.optional = !1);
          break;
        }
        case "Call":
        case "Index": {
          child.optional && (hasOptional = !0, child.children.shift(), child.optional = void 0);
          break;
        }
      }
      if (hasOptional) {
        let base;
        j > 1 || needsRef(children[0]) ? (usesRef = !0, base = makeLeftHandSideExpression({
          type: "AssignmentExpression",
          children: [ref, " = ", children.splice(0, j)]
        }), base.parent = child, children.unshift(ref), j = 0) : base = children[0], conditions.push([base, " != null"]);
      }
      j++;
    }
    let ref15;
    if (ref15 = conditions.length) {
      let l = ref15, cs = flatJoin(conditions, " && ");
      return {
        ...exp,
        children: [...cs, " ? ", innerExp(children), " : void 0"],
        usesRef
      };
    } else
      return exp;
  }
  function attachPostfixStatementAsExpression(exp, post) {
    let postfixStatement = post[1];
    switch (postfixStatement.type) {
      case "ForStatement":
      case "IterationStatement":
      case "DoStatement": {
        let statement = addPostfixStatement(exp, ...post);
        return {
          type: "IterationExpression",
          children: [statement],
          block: statement.block,
          statement,
          generator: statement.generator
        };
      }
      case "IfStatement":
        return expressionizeIfStatement({ ...postfixStatement, then: exp });
      default:
        throw new Error("Unknown postfix statement");
    }
  }
  function processTypes(node) {
    let results1 = [];
    for (let ref16 = gatherRecursiveAll(node, ($11) => $11.type === "TypeUnary"), i8 = 0, len6 = ref16.length; i8 < len6; i8++) {
      let unary = ref16[i8], suffixIndex = unary.suffix.length - 1, results2 = [];
      for (; suffixIndex >= 0; ) {
        let suffix = unary.suffix[suffixIndex];
        if (typeof suffix == "object" && suffix != null && "token" in suffix && suffix.token === "?") {
          let {} = suffix, count = 0, m4;
          for (; m4 = unary.suffix[suffixIndex], typeof m4 == "object" && m4 != null && "token" in m4 && m4.token === "?"; )
            unary.suffix.splice(suffixIndex--, 1), count++;
          let m5;
          for (; m5 = unary.suffix[suffixIndex], typeof m5 == "object" && m5 != null && "type" in m5 && m5.type === "NonNullAssertion"; )
            unary.suffix.splice(suffixIndex--, 1);
          let { parent, prefix } = unary;
          unary.prefix = [], unary.children = unary.children.filter((a1) => a1 !== prefix);
          let outer = unary.suffix.splice(suffixIndex + 1, 1 / 0), space = getTrimmingSpace(unary), replace;
          if (unary.parent?.type === "TypeElement" && !unary.parent.name) {
            if (count === 1) {
              unary.suffix.splice(suffixIndex + 1, 0, suffix);
              continue;
            }
            inplaceInsertTrimmingSpace(unary, "");
            let t = parenthesizeType(unary.suffix.length ? unary : unary.t);
            replace = [
              space,
              "(",
              t,
              " | null)",
              suffix
            ];
          } else {
            inplaceInsertTrimmingSpace(unary, "");
            let t = parenthesizeType(unary.suffix.length ? unary : unary.t);
            replace = makeNode({
              type: "TypeParenthesized",
              ts: !0,
              children: [
                space,
                "(",
                t,
                count === 1 ? " | undefined" : " | undefined | null",
                ")"
              ]
            });
          }
          (prefix.length || outer.length) && (replace = makeNode({
            type: "TypeUnary",
            ts: !0,
            t: replace,
            prefix,
            suffix: outer,
            children: [prefix, replace, outer]
          })), results2.push(replaceNode(unary, replace, parent));
        } else if (typeof suffix == "object" && suffix != null && "type" in suffix && suffix.type === "NonNullAssertion") {
          let {} = suffix, m6;
          for (; m6 = unary.suffix[suffixIndex], typeof m6 == "object" && m6 != null && "type" in m6 && m6.type === "NonNullAssertion"; )
            unary.suffix.splice(suffixIndex--, 1);
          let m7;
          for (; m7 = unary.suffix[suffixIndex], typeof m7 == "object" && m7 != null && "token" in m7 && m7.token === "?"; )
            unary.suffix.splice(suffixIndex--, 1);
          let { parent, prefix } = unary;
          unary.prefix = [], unary.children = unary.children.filter((a2) => a2 !== prefix);
          let outer = unary.suffix.splice(suffixIndex + 1, 1 / 0), space = getTrimmingSpace(unary);
          inplaceInsertTrimmingSpace(unary, "");
          let ref17;
          unary.suffix.length ? ref17 = unary : ref17 = unary.t;
          let t = ref17, argArray = [makeNode({
            type: "TypeArgument",
            ts: !0,
            t,
            children: [t]
          })], args = makeNode({
            type: "TypeArguments",
            ts: !0,
            args: argArray,
            children: ["<", argArray, ">"]
          }), replace = makeNode({
            type: "TypeIdentifier",
            raw: "NonNullable",
            args,
            children: [
              space,
              "NonNullable",
              args
            ]
          });
          (prefix.length || outer.length) && (replace = makeNode({
            type: "TypeUnary",
            ts: !0,
            t: replace,
            prefix,
            suffix: outer,
            children: [prefix, replace, outer]
          })), results2.push(replaceNode(unary, replace, parent));
        } else
          results2.push(suffixIndex--);
      }
      results1.push(results2);
    }
    return results1;
  }
  function processStatementExpressions(statements) {
    for (let ref18 = gatherRecursiveAll(statements, ($12) => $12.type === "StatementExpression"), i9 = 0, len7 = ref18.length; i9 < len7; i9++) {
      let exp = ref18[i9], { maybe, statement } = exp;
      if ((maybe || statement.type === "ThrowStatement") && blockContainingStatement(exp)) {
        replaceNode(exp, statement);
        continue;
      }
      let ref19;
      switch (statement.type) {
        case "IfStatement": {
          (ref19 = expressionizeIfStatement(statement)) ? replaceNode(statement, ref19, exp) : replaceNode(statement, wrapIIFE([["", statement]]), exp);
          break;
        }
        case "IterationExpression": {
          statement.subtype === "ComptimeStatement" && replaceNode(
            statement,
            expressionizeComptime(statement.statement),
            exp
          );
          break;
        }
        // else do nothing, handled separately currently
        default:
          replaceNode(statement, wrapIIFE([["", statement]]), exp);
      }
    }
  }
  function processNegativeIndexAccess(statements) {
    gatherRecursiveAll(statements, (n) => n.type === "NegativeIndex").forEach((exp) => {
      let { children } = exp.parent, start = 0;
      for (; start < children.length && isWhitespaceOrEmpty(children[start]); )
        start++;
      let index = children.indexOf(exp), ref, subexp;
      if (index === start + 1) {
        let child = children[start];
        ref = maybeRef(child), ref !== child && (subexp = children.splice(start, 1));
      } else if (index > start + 1)
        ref = makeRef(), subexp = children.splice(start, index - start);
      else
        throw new Error("Invalid parse tree for negative index access");
      if (subexp) {
        let { refAssignment } = makeRefAssignment(ref, subexp);
        children.splice(start, 0, makeLeftHandSideExpression(refAssignment)), refAssignment.parent = exp;
      }
      exp.len.children = [
        ref,
        ".length"
      ];
    });
  }
  function processFinallyClauses(statements) {
    for (let ref20 = gatherRecursiveAll(statements, ($) => $.type === "FinallyClause" && $.parent?.type !== "TryStatement"), i10 = 0, len8 = ref20.length; i10 < len8; i10++) {
      let f = ref20[i10], ref21;
      if (!((ref21 = blockContainingStatement(f)) && typeof ref21 == "object" && "block" in ref21 && "index" in ref21))
        throw new Error("finally clause must be inside try statement or block");
      let { block, index } = ref21, indent = block.expressions[index][0], expressions = block.expressions.slice(index + 1), t = makeNode({
        type: "BlockStatement",
        expressions,
        children: ["{", expressions, "}"],
        bare: !1
      });
      f = prepend(" ", f);
      let tuple = [
        indent,
        makeNode({
          type: "TryStatement",
          blocks: [t],
          // omit f to avoid implicit return
          children: ["try ", t, f],
          parent: block
        })
      ];
      block.expressions.splice(index, 1 / 0, tuple);
    }
  }
  function processBreaksContinues(statements) {
    for (let control of gatherRecursive(
      statements,
      ($) => !!(($.type === "BreakStatement" || $.type === "ContinueStatement") && $.label?.special)
    )) {
      let label = control.label, special = label.special, { ancestor } = findAncestor(
        control,
        ($) => special === "for" ? $.type === "ForStatement" : $.type === "IterationStatement" && $.subtype.startsWith(special),
        // in particular, special = "do" matches "do-while" and "do-until"
        isFunction
      );
      if (ancestor == null) {
        control.children.push({
          type: "Error",
          message: `No matching '${special}' iteration found above '${control.type.toLowerCase().replace("statement", "")} ${special}'`
        });
        continue;
      }
      let { parent } = ancestor;
      if (parent?.type !== "LabelledStatement") {
        let ref = makeRef(`_${special.replace("-", "_")}`), label2 = makeNode({
          type: "Label",
          name: ref,
          children: [ref, ":"]
        });
        replaceNode(
          ancestor,
          makeNode({
            type: "LabelledStatement",
            label: label2,
            statement: ancestor,
            children: [label2, " ", ancestor]
          }),
          parent
        ), parent = ancestor.parent;
      }
      label.children.push(label.name = parent.label.name), delete label.special;
    }
  }
  function processCoffeeClasses(statements) {
    for (let ref22 = gatherRecursiveAll(statements, ($13) => $13.type === "ClassExpression"), i11 = 0, len9 = ref22.length; i11 < len9; i11++) {
      let ce = ref22[i11], { expressions } = ce.body, indent = expressions[0]?.[0] ?? `
`, autoBinds = expressions.filter(($14) => $14[1]?.autoBind);
      if (autoBinds.length) {
        let construct;
        for (let [, c] of expressions)
          if (typeof c == "object" && c != null && "type" in c && c.type === "MethodDefinition" && "name" in c && c.name === "constructor" && c.block) {
            construct = c;
            break;
          }
        if (!construct) {
          let parametersList = [], parameters = {
            type: "Parameters",
            children: [parametersList],
            parameters: parametersList,
            names: []
          }, signature = {
            type: "MethodSignature",
            children: ["constructor(", parameters, ")"],
            parameters,
            modifier: {},
            returnType: void 0
          }, block = makeEmptyBlock();
          construct = {
            ...signature,
            type: "MethodDefinition",
            name: "constructor",
            block,
            signature,
            children: [...signature.children, block]
          }, expressions.unshift([indent, construct]);
        }
        let index = findSuperCall(construct.block);
        construct.block.expressions.splice(
          index + 1,
          0,
          ...(() => {
            let results3 = [];
            for (let i12 = 0, len10 = autoBinds.length; i12 < len10; i12++) {
              let [, a] = autoBinds[i12];
              results3.push([indent, ["this.", a.name, " = this.", a.name, ".bind(this)"], ";"]);
            }
            return results3;
          })()
        );
      }
      let public_static_function_assignments = expressions.filter(($15) => $15[1]?.type === "CoffeeClassPublic" && $15[1].assignment?.expression?.type === "FunctionExpression").map(($16) => $16[1].assignment);
      for (let public_static_function_assignment of public_static_function_assignments) {
        let id = public_static_function_assignment.lhs[0][1];
        replaceNode(public_static_function_assignment, convertFunctionToMethod(id, public_static_function_assignment.expression));
      }
      let public_static_arrow_function_assignments = expressions.filter(($17) => $17[1]?.type === "CoffeeClassPublic" && $17[1].assignment?.expression?.type === "ArrowFunction").map(($18) => $18[1].assignment);
      for (let public_static_arrow_function_assignment of public_static_arrow_function_assignments) {
        let id = public_static_arrow_function_assignment.lhs[0][1];
        replaceNode(public_static_arrow_function_assignment, convertArrowFunctionToMethod(id, public_static_arrow_function_assignment.expression));
      }
      let privates = expressions.filter(($19) => $19[1]?.type === "CoffeeClassPrivate");
      if (!privates.length)
        continue;
      let { parent } = ce;
      for (let i13 = expressions.length + -1; i13 >= 0; --i13) {
        let i = i13;
        expressions[i][1]?.type === "CoffeeClassPrivate" && expressions.splice(i, 1);
      }
      let wrapped = wrapIIFE([
        ...privates,
        [indent, wrapWithReturn(ce)]
      ]);
      if (ce && typeof ce == "object" && "binding" in ce) {
        let { binding } = ce;
        binding = trimFirstSpace(binding), wrapped = makeNode({
          type: "AssignmentExpression",
          children: [binding, " = ", wrapped],
          lhs: binding,
          // TODO: incorrect shape
          assigned: binding,
          expression: wrapped,
          names: [ce.name]
        });
      }
      replaceNode(ce, wrapped, parent);
    }
  }
  function processProgram(root) {
    let state2 = getState(), config2 = getConfig();
    assert.equal(state2.forbidBracedApplication.length, 1, "forbidBracedApplication"), assert.equal(state2.forbidClassImplicitCall.length, 1, "forbidClassImplicitCall"), assert.equal(state2.forbidIndentedApplication.length, 1, "forbidIndentedApplication"), assert.equal(state2.forbidNestedBinaryOp.length, 1, "forbidNestedBinaryOp"), assert.equal(state2.forbidNewlineBinaryOp.length, 1, "forbidNewlineBinaryOp"), assert.equal(state2.forbidTrailingMemberProperty.length, 1, "forbidTrailingMemberProperty"), assert.equal(state2.JSXTagStack.length, 1, "JSXTagStack"), addParentPointers(root);
    let { expressions: statements } = root;
    processPlaceholders(statements), processNegativeIndexAccess(statements), processTypes(statements), processDeclarationConditions(statements), processPipelineExpressions(statements), processDeclarations(statements), processAssignments(statements), processStatementExpressions(statements), processPatternMatching(statements), processIterationExpressions(statements), processFinallyClauses(statements), processBreaksContinues(statements), root.topLevelAwait = hasAwait(statements), root.topLevelYield = hasYield(statements);
    let rootIIFE;
    (config2.iife || config2.repl) && (rootIIFE = wrapIIFE(
      root.expressions,
      root.topLevelAwait,
      root.topLevelYield ? "*" : void 0
    ), statements = [["", rootIIFE]], root.children = root.children.map(($20) => $20 === root.expressions ? statements : $20), root.expressions = statements), hoistRefDecs(statements), processFunctions(statements, config2), config2.coffeeClasses && processCoffeeClasses(statements), statements.unshift(...extractPreludeFor(statements)), config2.autoLet ? createConstLetDecs(statements, [], "let") : config2.autoConst ? createConstLetDecs(statements, [], "const") : config2.autoVar && createVarDecs(root, []), config2.repl && processRepl(root, rootIIFE), processBlocks(statements), populateRefs(statements), adjustAtBindings(statements), getSync() && processComptime(statements);
  }
  async function processProgramAsync(root) {
    let { expressions: statements } = root;
    await processComptime(statements);
  }
  function processRepl(root, rootIIFE) {
    let topBlock = gatherRecursive(rootIIFE, ($21) => $21.type === "BlockStatement")[0], i = 0;
    for (let ref23 = gatherRecursiveWithinFunction(topBlock, ($22) => $22.type === "Declaration"), i14 = 0, len11 = ref23.length; i14 < len11; i14++) {
      let decl = ref23[i14];
      decl.names?.length && (decl.parent === topBlock || decl.decl === "var") && (decl.children.shift(), decl.bindings[0]?.pattern?.type === "ObjectBindingPattern" && (decl.children.unshift("("), decl.children.push(")")), root.expressions.splice(i++, 0, ["", `var ${decl.names.join(",")}`, ";"]));
    }
    for (let ref24 = gatherRecursive(topBlock, ($23) => $23.type === "FunctionExpression"), i15 = 0, len12 = ref24.length; i15 < len12; i15++) {
      let func = ref24[i15];
      func.name && func.parent?.type === "BlockStatement" && (func.parent === topBlock ? (replaceNode(func, void 0), root.expressions.splice(i++, 0, ["", func]), func.parent = root) : (func.children.unshift(func.name, "="), root.expressions.splice(i++, 0, ["", `var ${func.name}`, ";"])));
    }
    for (let ref25 = gatherRecursiveWithinFunction(topBlock, ($24) => $24.type === "ClassExpression"), i16 = 0, len13 = ref25.length; i16 < len13; i16++) {
      let classExp = ref25[i16], m8;
      (classExp.name && classExp.parent === topBlock || (m8 = classExp.parent, typeof m8 == "object" && m8 != null && "type" in m8 && m8.type === "ReturnStatement" && "parent" in m8 && m8.parent === topBlock)) && (classExp.children.unshift(classExp.name, "="), root.expressions.splice(i++, 0, ["", `var ${classExp.name}`, ";"]));
    }
  }
  function processPlaceholders(statements) {
    let placeholderMap = /* @__PURE__ */ new Map(), liftedIfs = /* @__PURE__ */ new Set();
    for (let ref26 = gatherRecursiveAll(statements, ($25) => $25.type === "Placeholder"), i17 = 0, len14 = ref26.length; i17 < len14; i17++) {
      let exp = ref26[i17], ancestor;
      if (exp.subtype === ".") {
        ({ ancestor } = findAncestor(
          exp,
          ($) => $.type === "Call" && !$.parent?.implicit
        )), ancestor = ancestor?.parent;
        let m9;
        for (; ancestor?.parent != null && (m9 = ancestor.parent.type, m9 === "UnaryExpression" || m9 === "NewExpression" || m9 === "AwaitExpression" || m9 === "ThrowStatement" || m9 === "StatementExpression"); )
          ancestor = ancestor.parent;
        if (!ancestor) {
          replaceNode(exp, {
            type: "Error",
            message: "Partial placeholder . outside of call expression"
          });
          return;
        }
      } else {
        let child, implicitLift;
        switch ({ ancestor, child } = findAncestor(exp, (ancestor2, child2) => {
          let prevImplicitLift = implicitLift;
          if ({ implicitLift } = ancestor2, prevImplicitLift)
            return;
          let { type } = ancestor2;
          type === "IfStatement" && liftedIfs.add(ancestor2);
          let m10, m11;
          return type === "Call" && !ancestor2.parent?.implicit || // Block, except for if/else blocks when condition already lifted
          type === "BlockStatement" && (m10 = ancestor2.parent, !(typeof m10 == "object" && m10 != null && "type" in m10 && m10.type === "IfStatement" && liftedIfs.has(ancestor2.parent))) && (m11 = ancestor2.parent, !(typeof m11 == "object" && m11 != null && "type" in m11 && m11.type === "ElseClause" && "parent" in m11 && typeof m11.parent == "object" && m11.parent != null && "type" in m11.parent && m11.parent.type === "IfStatement" && liftedIfs.has(ancestor2.parent.parent))) || type === "PipelineExpression" || // Declaration
          type === "Initializer" || // Right-hand side of assignment
          type === "AssignmentExpression" && findChildIndex(ancestor2, child2) === ancestor2.children.indexOf(ancestor2.expression) || type === "ReturnStatement" || type === "YieldExpression";
        }), ancestor?.type) {
          case "Call": {
            let i = findChildIndex(ancestor.args, child);
            i >= 0 ? (ancestor.args[i] = maybeWrap(ancestor.args[i], ancestor), ancestor = ancestor.args[i]) : ancestor = void 0;
            break;
          }
          case "BlockStatement": {
            let i = findChildIndex(ancestor.expressions, child);
            i >= 0 ? (ancestor.expressions[i][1] = maybeWrap(ancestor.expressions[i][1], ancestor), ancestor = ancestor.expressions[i][1]) : ancestor = void 0;
            break;
          }
          case "PipelineExpression": {
            let i = findChildIndex(ancestor, child);
            if (i === 1)
              ancestor = ancestor;
            else if (i === 2) {
              let j = findChildIndex(ancestor.children[i], child);
              ancestor.children[i][j][3] = maybeWrap(ancestor.children[i][j][3], ancestor), ancestor = ancestor.children[i][j][3];
            } else
              ancestor = void 0;
            break;
          }
          case "AssignmentExpression":
          case "Initializer":
          case "ReturnStatement":
          case "YieldExpression": {
            let i = findChildIndex(ancestor, child);
            i >= 0 && ancestor.expression === ancestor.children[i] ? (ancestor.expression = ancestor.children[i] = maybeWrap(ancestor.expression, ancestor), ancestor = ancestor.expression) : ancestor = void 0;
            break;
          }
        }
        ancestor || replaceNode(exp, {
          type: "Error",
          message: "Ampersand placeholder & outside of block"
        });
      }
      ancestor != null && (placeholderMap.has(ancestor) ? placeholderMap.get(ancestor).push(exp) : placeholderMap.set(ancestor, [exp]));
    }
    for (let [ancestor, placeholders] of placeholderMap) {
      let ref = makeRef("$"), typeSuffix;
      for (let i18 = 0, len15 = placeholders.length; i18 < len15; i18++) {
        let placeholder = placeholders[i18];
        typeSuffix ??= placeholder.typeSuffix;
        let ref27;
        (ref27 = placeholder.children)[ref27.length - 1] = ref;
      }
      let { parent } = ancestor, body = maybeUnwrap(ancestor), fnExp = makeAmpersandFunction({ ref, typeSuffix, body }), outer;
      switch (parent?.type) {
        case "Argument": {
          outer = ancestor === parent.expression;
          break;
        }
        case "Call": {
          outer = ancestor === parent.args[findChildIndex(parent.args, ancestor)];
          break;
        }
        case "BlockStatement": {
          outer = ancestor === parent.expressions[findChildIndex(parent.expressions, ancestor)][1];
          break;
        }
        case "PipelineExpression": {
          let i = findChildIndex(parent, ancestor), ref28;
          i === 1 ? ref28 = ancestor === parent.children[i] : i === 2 ? ref28 = ancestor === parent.children[i][findChildIndex(parent.children[i], ancestor)][3] : ref28 = void 0, outer = ref28;
          break;
        }
        case "AssignmentExpression":
        case "Initializer":
        case "ReturnStatement":
        case "YieldExpression": {
          outer = ancestor === parent.expression;
          break;
        }
      }
      outer || (fnExp = makeLeftHandSideExpression(fnExp)), replaceNode(ancestor, fnExp, parent), typeof parent == "object" && parent != null && "type" in parent && parent.type === "BlockStatement" && "parent" in parent && typeof parent.parent == "object" && parent.parent != null && "type" in parent.parent && parent.parent.type === "ArrowFunction" && "ampersandBlock" in parent.parent && parent.parent.ampersandBlock === !0 && "body" in parent.parent && parent.parent.body === body && (parent.parent.body = fnExp);
      let ref29;
      if (ref29 = getTrimmingSpace(body)) {
        let ws = ref29;
        inplaceInsertTrimmingSpace(body, ""), inplacePrepend(ws, fnExp);
      }
    }
  }
  function reorderBindingRestProperty(props) {
    let names = props.flatMap((p) => p.names), restIndex = -1, restCount = 0;
    if (props.forEach(({ type }, i) => {
      if (type === "BindingRestProperty")
        return restIndex < 0 && (restIndex = i), restCount++;
    }), restCount === 0)
      return {
        children: props,
        names
      };
    let after = props.slice(restIndex + 1), rest = props[restIndex];
    if (props = props.slice(0, restIndex), after.length) {
      let { delim: restDelim } = rest, lastAfterProp = after[after.length - 1], { delim: lastDelim, children: lastAfterChildren } = lastAfterProp;
      rest = {
        ...rest,
        delim: lastDelim,
        children: [...rest.children.slice(0, -1), lastDelim]
      }, after = [
        ...after.slice(0, -1),
        {
          ...lastAfterProp,
          delim: restDelim,
          children: [...lastAfterChildren.slice(0, -1), restDelim]
        }
      ];
    }
    let ref30;
    Array.isArray(rest.delim) && (ref30 = rest.delim)[ref30.length - 1]?.token === "," && (rest.delim = rest.delim.slice(0, -1), rest.children = [...rest.children.slice(0, -1), rest.delim]);
    let children = [...props, ...after, rest];
    return restCount > 1 && children.push({
      type: "Error",
      message: "Multiple rest properties in object pattern"
    }), { children, names };
  }
  function typeOfJSX(node, config2) {
    switch (node.type) {
      case "JSXElement":
        return typeOfJSXElement(node, config2);
      case "JSXFragment":
        return typeOfJSXFragment(node, config2);
    }
  }
  function typeOfJSXElement(node, config2) {
    if (config2.solid) {
      if (config2.server && !config2.client)
        return ["string"];
      let { tag } = node, clientType = tag[0] === tag[0].toLowerCase() ? [getHelperRef("IntrinsicElements"), '<"', tag, '">'] : ["ReturnType<typeof ", tag, ">"];
      return config2.server ? ["string", " | ", clientType] : clientType;
    }
  }
  function typeOfJSXFragment(node, config2) {
    if (config2.solid) {
      let type = [], lastType;
      for (let child of node.jsxChildren) {
        switch (child.type) {
          case "JSXText":
            lastType !== "JSXText" && type.push("string");
            break;
          case "JSXElement":
            type.push(typeOfJSXElement(child, config2));
            break;
          case "JSXFragment":
            type.push(...typeOfJSXFragment(child, config2));
            break;
          case "JSXChildExpression":
            child.expression && type.push(["typeof ", child.expression]);
            break;
          default:
            throw new Error(`unknown child in JSXFragment: ${JSON.stringify(child)}`);
        }
        lastType = child.type;
      }
      return type.length === 1 ? type[0] : (type = type.flatMap((t) => [t, ", "]), type.pop(), ["[", type, "]"]);
    }
  }

  // source/parser.hera
  var grammar = {
    Program,
    TopLevelStatements,
    NestedTopLevelStatements,
    TopLevelSingleLineStatements,
    TopLevelStatement,
    Expression,
    SingleLineExpression,
    NonPipelineExpression,
    NestedExpressionizedStatement,
    ExpressionizedStatementWithTrailingCallExpressions,
    ExpressionizedStatement,
    StatementExpression,
    CommaExpression,
    CommaExpressionSpread,
    AssignmentExpressionSpread,
    Arguments,
    ImplicitArguments,
    ExplicitArguments,
    ApplicationStart,
    ForbiddenImplicitCalls,
    ReservedBinary,
    ArgumentsWithTrailingCallExpressions,
    TrailingCallExpressions,
    IndentedTrailingCallExpressions,
    NestedTrailingCallExpression,
    AllowedTrailingCallExpressions,
    CommaDelimiter,
    OptionalCommaDelimiter,
    ArgumentList,
    NestedArguments,
    NestedArgumentList,
    NestedArgument,
    SingleLineArgumentExpressions,
    WArgumentPart,
    ArgumentPart,
    BinaryOpExpression,
    BinaryOpNotDedented,
    BinaryOpRHS,
    IsLike,
    WRHS,
    SingleLineBinaryOpRHS,
    RHS,
    UnaryExpression,
    UnaryWithoutParenthesizedAssignment,
    UnaryBody,
    MaybeNestedCoffeeDoBody,
    CoffeeDoBody,
    UnaryWithoutParenthesizedAssignmentBody,
    ParenthesizedAssignment,
    UnaryPostfix,
    TypePostfix,
    Tuple,
    NWTypePostfix,
    UpdateExpression,
    UpdateExpressionSymbol,
    AssignmentExpression,
    NonPipelineAssignmentExpression,
    SingleLineAssignmentExpression,
    NonPipelineSingleLineAssignmentExpression,
    AssignmentExpressionTail,
    NonPipelineAssignmentExpressionTail,
    ActualAssignment,
    NonPipelineActualAssignment,
    YieldExpression,
    ArrowFunction,
    FatArrow,
    FatArrowToken,
    TrailingOperator,
    TrailingDeclaration,
    TrailingPipe,
    TrailingPostfix,
    FatArrowBody,
    ConditionalExpression,
    TernaryRest,
    NestedTernaryRest,
    ShortCircuitExpression,
    PipelineExpression,
    PipelineExpressionBody,
    PipelineExpressionBodySameLine,
    PipelineHeadItem,
    PipelineTailItem,
    PrimaryExpression,
    OptimizedParenthesizedExpression,
    ParenthesizedExpression,
    Placeholder,
    PlaceholderTypeSuffix,
    ClassDeclaration,
    ClassExpression,
    ClassBinding,
    ClassHeritage,
    ExtendsClause,
    WithClause,
    ExtendsToken,
    ExtendsShorthand,
    NotExtendsToken,
    OmittedNegation,
    ExtendsTarget,
    ImplementsClause,
    ImplementsToken,
    ImplementsShorthand,
    ImplementsTarget,
    ClassBody,
    ClassBracedContent,
    NestedClassElements,
    NestedClassElement,
    ClassElement,
    ClassElementDefinition,
    ClassSignature,
    ClassSignatureBody,
    NestedClassSignatureElements,
    NestedClassSignatureElement,
    ClassSignatureElement,
    AccessModifier,
    FieldDefinition,
    ThisLiteral,
    BasicThisLiteral,
    HashThis,
    LengthShorthand,
    AtThis,
    LeftHandSideExpression,
    CallExpression,
    CallExpressionRest,
    ExplicitCallExpressionRest,
    OptionalShorthand,
    OptionalDot,
    NonNullAssertion,
    MemberExpression,
    ActualMemberExpression,
    MemberBase,
    MemberExpressionRest,
    MemberExpressionRestBody,
    MemberBracketContent,
    SliceParameters,
    AccessStart,
    ExplicitAccessStart,
    ImplicitAccessStart,
    PropertyAccessModifier,
    PropertyAccess,
    ExplicitPropertyGlob,
    PropertyGlob,
    PropertyBind,
    PropertyBindExplicitArguments,
    SuperProperty,
    MetaProperty,
    ReturnValue,
    AfterReturnShorthand,
    Parameters,
    ShortArrowParameters,
    ArrowParameters,
    NonEmptyParameters,
    ParameterList,
    NestedParameterList,
    NestedParameter,
    Parameter,
    FunctionRestParameter,
    ParameterElement,
    ParameterElementDelimiter,
    BindingIdentifier,
    NWBindingIdentifier,
    AtIdentifierRef,
    PinPattern,
    NamedBindingPattern,
    BindingPattern,
    ObjectBindingPattern,
    ObjectBindingPatternContent,
    BindingPropertyList,
    ArrayBindingPattern,
    ArrayBindingPatternContent,
    BindingElementList,
    NestedBindingElementList,
    Elision,
    NestedBindingProperties,
    NestedBindingPropertyList,
    BindingProperty,
    BindingRestProperty,
    BindingTypeSuffix,
    NestedBindingElements,
    BindingElement,
    BindingRestElement,
    EmptyBindingPattern,
    FunctionDeclaration,
    FunctionSignature,
    FunctionExpression,
    OperatorDeclaration,
    OperatorSignature,
    OperatorBehavior,
    OperatorPrecedence,
    OperatorAssociativity,
    ThinArrowFunction,
    Arrow,
    ExplicitBlock,
    EmptyBracedContent,
    ImplicitNestedBlock,
    Block,
    BareNestedBlock,
    BareBlock,
    ThenClause,
    ThenBlock,
    BracedThenClause,
    BracedOrEmptyBlock,
    NoCommaBracedOrEmptyBlock,
    NoPostfixBracedOrEmptyBlock,
    EmptyBlock,
    BlockOrEmptyStatement,
    BlockOrEmpty,
    EmptyStatementBareBlock,
    EmptyBareBlock,
    NoBlock,
    BracedBlock,
    NoPostfixBracedBlock,
    NoCommaBracedBlock,
    NonSingleBracedBlock,
    DeclarationOrStatement,
    SingleLineStatements,
    PostfixedSingleLineStatements,
    PostfixedSingleLineNoCommaStatements,
    NestedBlockStatements,
    NestedBlockStatement,
    BlockStatementPart,
    Literal,
    LiteralContent,
    NullLiteral,
    BooleanLiteral,
    _BooleanLiteral,
    CoffeeScriptBooleanLiteral,
    SymbolLiteral,
    SymbolElement,
    Identifier,
    IdentifierName,
    IdentifierReference,
    UpcomingAssignment,
    ArrayLiteral,
    _ArrayLiteral,
    RangeDots,
    OptionalRangeEnd,
    RangeEnd,
    RangeExpression,
    ArrayLiteralContent,
    NestedElementList,
    NestedElement,
    ArrayElementDelimiter,
    ElementListWithIndentedApplicationForbidden,
    ElementList,
    SingleLineElementList,
    ElementListRest,
    ArrayElementExpression,
    NestedBulletedArray,
    BulletedArray,
    NestedArrayBullet,
    ArrayBullet,
    ArrayBulletDelimiter,
    BulletIndent,
    Bullet,
    BulletedArrayWithTrailing,
    ObjectLiteral,
    BracedObjectLiteral,
    SingleLineObjectProperties,
    BracedObjectLiteralContent,
    NestedImplicitObjectLiteral,
    NestedImplicitPropertyDefinitions,
    NestedImplicitPropertyDefinition,
    NestedPropertyDefinitions,
    NestedPropertyDefinition,
    ImplicitObjectLiteral,
    ImplicitObjectPropertyDelimiter,
    InlineObjectLiteral,
    InlineObjectPropertyDelimiter,
    ObjectPropertyDelimiter,
    PropertyDefinition,
    NamedProperty,
    SnugNamedProperty,
    PropertyName,
    ComputedPropertyName,
    Decorator,
    Decorators,
    MethodDefinition,
    MethodModifier,
    MethodSignature,
    ClassElementName,
    PrivateIdentifier,
    WAssignmentOp,
    AssignmentOp,
    OperatorAssignmentOp,
    AssignmentOpSymbol,
    CoffeeWordAssignmentOp,
    NotDedentedBinaryOp,
    IdentifierBinaryOp,
    BinaryOp,
    _BinaryOp,
    BinaryOpSymbol,
    ActualIn,
    CoffeeOfOp,
    NotOp,
    Xor,
    Xnor,
    UnaryOp,
    AwaitOp,
    ModuleItem,
    StatementListItem,
    PostfixedStatement,
    NoCommaStatementListItem,
    PostfixedNoCommaStatement,
    PostfixedExpression,
    PostfixedCommaExpression,
    PostfixStatement,
    _PostfixStatement,
    Statement,
    IterationActualStatement,
    ShouldExpressionize,
    NoCommaStatement,
    EmptyStatement,
    InsertEmptyStatement,
    BlockStatement,
    LabelledStatement,
    Label,
    LabelIdentifier,
    LabelledItem,
    IfStatement,
    ElseClause,
    IfClause,
    IterationStatement,
    _IterationStatement,
    IterationExpression,
    LoopStatement,
    LoopClause,
    DoWhileStatement,
    DoStatement,
    ComptimeStatement,
    WhileStatement,
    WhileClause,
    ForStatement,
    ForClause,
    ForStatementControlWithWhen,
    ForStatementControlWithReduction,
    ForReduction,
    ForStatementControl,
    WhenCondition,
    CoffeeForStatementParameters,
    CoffeeForIndex,
    CoffeeForDeclaration,
    ForStatementParameters,
    ForRangeParameters,
    ForInOfDeclaration,
    ForDeclaration,
    ForBinding,
    SwitchStatement,
    EmptyCondition,
    CaseBlock,
    NestedCaseClauses,
    NestedCaseClause,
    CaseClause,
    PatternExpressionList,
    PatternExpression,
    CaseExpressionList,
    CaseExpression,
    ImpliedColon,
    IgnoreColon,
    TryStatement,
    CatchClause,
    CatchBinding,
    WFinallyClause,
    FinallyClause,
    CatchParameter,
    Condition,
    BoundedCondition,
    DeclarationCondition,
    ExpressionWithIndentedApplicationForbidden,
    SingleLineExpressionWithIndentedApplicationForbidden,
    ExpressionWithObjectApplicationForbidden,
    LeftHandSideExpressionWithObjectApplicationForbidden,
    ForbidClassImplicitCall,
    AllowClassImplicitCall,
    RestoreClassImplicitCall,
    ClassImplicitCallForbidden,
    ForbidBracedApplication,
    AllowBracedApplication,
    RestoreBracedApplication,
    BracedApplicationAllowed,
    ForbidIndentedApplication,
    AllowIndentedApplication,
    RestoreIndentedApplication,
    IndentedApplicationAllowed,
    ForbidTrailingMemberProperty,
    AllowTrailingMemberProperty,
    RestoreTrailingMemberProperty,
    TrailingMemberPropertyAllowed,
    AllowNestedBinaryOp,
    ForbidNestedBinaryOp,
    RestoreNestedBinaryOp,
    NestedBinaryOpAllowed,
    AllowNewlineBinaryOp,
    ForbidNewlineBinaryOp,
    RestoreNewlineBinaryOp,
    NewlineBinaryOpAllowed,
    AllowPipeline,
    ForbidPipeline,
    RestorePipeline,
    PipelineAllowed,
    AllowAll,
    RestoreAll,
    CommaExpressionStatement,
    ExpressionStatement,
    KeywordStatement,
    DebuggerStatement,
    ThrowStatement,
    Break,
    Continue,
    Debugger,
    MaybeNestedNonPipelineExpression,
    MaybeNestedPostfixedExpression,
    NestedPostfixedExpressionNoTrailing,
    MaybeNestedExpression,
    MaybeParenNestedExpression,
    ImportDeclaration,
    ImpliedImport,
    ImportClause,
    NameSpaceImport,
    NamedImports,
    OperatorNamedImports,
    FromClause,
    ImportAssertion,
    TypeAndImportSpecifier,
    ImportSpecifier,
    OperatorImportSpecifier,
    ImportAsToken,
    ModuleExportName,
    ModuleSpecifier,
    UnprocessedModuleSpecifier,
    UnquotedSpecifier,
    ImportedBinding,
    ExportDeclaration,
    ExportVarDec,
    ExportFromClause,
    TypeAndNamedExports,
    NamedExports,
    ExportSpecifier,
    ImplicitExportSpecifier,
    Declaration,
    HoistableDeclaration,
    LexicalDeclaration,
    ConstAssignment,
    LetAssignment,
    TypeAssignment,
    LexicalBinding,
    Initializer,
    VariableStatement,
    VariableDeclarationList,
    NumericLiteral,
    NumericLiteralKind,
    DecimalBigIntegerLiteral,
    DecimalLiteral,
    ExponentPart,
    BinaryIntegerLiteral,
    OctalIntegerLiteral,
    HexIntegerLiteral,
    IntegerLiteral,
    IntegerLiteralKind,
    DecimalIntegerLiteral,
    StringLiteral,
    DoubleStringCharacters,
    SingleStringCharacters,
    TripleDoubleStringContents,
    CoffeeTripleDoubleStringCharacters,
    TripleDoubleStringCharacters,
    TripleSingleStringCharacters,
    CoffeeStringSubstitution,
    CoffeeInterpolatedDoubleQuotedString,
    CoffeeDoubleQuotedStringCharacters,
    RegularExpressionLiteral,
    RegularExpressionClass,
    RegularExpressionClassCharacters,
    HeregexLiteral,
    HeregexBody,
    HeregexPart,
    HeregexComment,
    RegularExpressionBody,
    RegExpPart,
    RegExpCharacter,
    RegularExpressionFlags,
    TemplateLiteral,
    _TemplateLiteral,
    TemplateSubstitution,
    TemplateCharacters,
    TemplateBlockCharacters,
    ReservedWord,
    Comment,
    _Comment,
    SingleLineComment,
    JSSingleLineComment,
    MultiLineComment,
    JSMultiLineComment,
    CoffeeSingleLineComment,
    CoffeeMultiLineComment,
    CoffeeHereCommentStart,
    InlineComment,
    RestOfLine,
    TrailingComment,
    _,
    NonNewlineWhitespace,
    Trimmed_,
    __,
    Whitespace,
    ExpressionDelimiter,
    SimpleStatementDelimiter,
    StatementDelimiter,
    ClosingDelimiter,
    SemicolonDelimiter,
    NonIdContinue,
    Loc,
    Abstract,
    Ampersand,
    As,
    At,
    AtAt,
    Async,
    Await,
    Backtick,
    By,
    Caret,
    Case,
    Catch,
    Class,
    CloseAngleBracket,
    CloseBrace,
    CloseBracket,
    CloseParen,
    CoffeeSubstitutionStart,
    Colon,
    Comma,
    Comptime,
    ConstructorShorthand,
    Declare,
    Default,
    Delete,
    Do,
    Dot,
    DotDot,
    DotDotDot,
    InsertDotDotDot,
    DoubleColon,
    DoubleColonAsColon,
    DoubleQuote,
    Each,
    Else,
    Equals,
    ExclamationPoint,
    Export,
    Extends,
    Finally,
    For,
    From,
    Function: Function2,
    GetOrSet,
    Hash,
    If,
    Import,
    In,
    Infer,
    LetOrConst,
    Const,
    Is,
    LetOrConstOrVar,
    Like,
    Loop,
    New,
    Not,
    Of,
    OpenAngleBracket,
    OpenBrace,
    OpenBracket,
    OpenParen,
    Operator,
    Override,
    Own,
    Public,
    Private,
    Protected,
    Pipe,
    QuestionMark,
    Readonly,
    Return,
    Satisfies,
    Semicolon,
    SingleQuote,
    Star,
    Static,
    SubstitutionStart,
    Super,
    Switch,
    Target,
    Then,
    This,
    Throw,
    TripleDoubleQuote,
    TripleSingleQuote,
    TripleSlash,
    TripleTick,
    Try,
    Typeof,
    Undefined,
    Unless,
    Until,
    Using,
    Var,
    Void,
    When,
    While,
    With,
    Yield,
    JSXImplicitFragment,
    JSXTag,
    _JSXTag,
    JSXElement,
    JSXSelfClosingElement,
    PushJSXOpeningElement,
    PopJSXStack,
    JSXOpeningElement,
    JSXOptionalClosingElement,
    JSXClosingElement,
    JSXFragment,
    PushJSXOpeningFragment,
    JSXOptionalClosingFragment,
    JSXClosingFragment,
    JSXElementName,
    JSXIdentifierName,
    JSXAttributes,
    JSXAttribute,
    JSXAttributeSpace,
    JSXShorthandString,
    JSXAttributeName,
    JSXAttributeInitializer,
    JSXAttributeValue,
    InlineJSXAttributeValue,
    InlineJSXBinaryOpRHS,
    InlineJSXUnaryExpression,
    InlineJSXUnaryOp,
    InlineJSXUnaryPostfix,
    InlineJSXUpdateExpression,
    InlineJSXCallExpression,
    InlineJSXCallExpressionRest,
    InlineJSXMemberExpression,
    InlineJSXMemberExpressionRest,
    InlineJSXPrimaryExpression,
    JSXMixedChildren,
    JSXSameLineChildren,
    JSXChildren,
    JSXNestedChildren,
    JSXEOS,
    JSXNested,
    JSXChild,
    JSXChildForcedCode,
    JSXChildForcedNoCode,
    JSXChildGeneral,
    JSXComment,
    JSXCommentContent,
    JSXText,
    JSXChildExpression,
    IndentedJSXChildExpression,
    NestedJSXChildExpression,
    JSXAngleChild,
    JSXCodeChild,
    JSXCodeChildExpression,
    UsingDeclaration,
    UsingBinding,
    UsingJSModeError,
    TypeDeclaration,
    TypeDeclarationRest,
    TypeAliasDeclaration,
    InterfaceDeclaration,
    NamespaceDeclaration,
    OptionalEquals,
    TypeLexicalDeclaration,
    TypeLetOrConstDeclaration,
    TypeDeclarationBinding,
    InterfaceExtendsClause,
    InterfaceExtendsTarget,
    TypeKeyword,
    Enum,
    Interface,
    Global,
    Module,
    Namespace,
    InterfaceOrEmptyBlock,
    InterfaceBlock,
    NestedInterfaceBlock,
    NestedInterfaceProperties,
    NestedInterfaceProperty,
    InterfaceProperty,
    BasicInterfaceProperty,
    InterfacePropertyDelimiter,
    ModuleOrEmptyBlock,
    NestedModuleItems,
    NestedModuleItem,
    DeclareBlock,
    NestedDeclareElements,
    NestedDeclareElement,
    DeclareElement,
    EnumDeclaration,
    EnumBlock,
    NestedEnumProperties,
    NestedEnumPropertyLine,
    EnumProperty,
    TypeProperty,
    TypeIndexSignature,
    TypeIndex,
    TypeSuffix,
    MaybeNestedType,
    MaybeNestedTypePrimary,
    MaybeNestedTypeUnary,
    ReturnTypeSuffix,
    ReturnType,
    TypePredicate,
    Type,
    TypeBinary,
    NestedTypeBinaryChain,
    NestedTypeBinary,
    TypeUnary,
    TypeUnarySuffix,
    TypeUnaryOp,
    TypeIndexedAccess,
    UnknownAlias,
    TypePrimary,
    TypeIdentifier,
    ImportType,
    TypeTuple,
    TypeTupleContent,
    TypeElementListWithIndentedApplicationForbidden,
    TypeElementList,
    TypeElement,
    NestedTypeElementList,
    NestedTypeElement,
    NestedTypeBulletedTuple,
    TypeBulletedTuple,
    NestedTypeBullet,
    TypeBullet,
    TypeWithPostfix,
    TypeConditional,
    TypeCondition,
    TypeIfThenElse,
    TypeIfClause,
    TypeElse,
    TypeBlock,
    TypeTemplateSubstitution,
    TypeTemplateLiteral,
    CoffeeStringTypeSubstitution,
    CoffeeInterpolatedDoubleQuotedTypeLiteral,
    TypeLiteral,
    InlineInterfaceLiteral,
    InlineBasicInterfaceProperty,
    InlineInterfacePropertyDelimiter,
    TypeBinaryOp,
    TypeFunction,
    TypeFunctionArrow,
    TypeArguments,
    ImplicitTypeArguments,
    TypeApplicationStart,
    ForbiddenImplicitTypeCalls,
    TypeArgumentList,
    NestedTypeArgumentList,
    NestedTypeArgument,
    SingleLineTypeArgumentList,
    WTypeArgument,
    TypeArgumentDelimited,
    TypeArgument,
    TypeArgumentDelimiter,
    TypeParameters,
    TypeParameter,
    TypeConstraint,
    TypeInitializer,
    TypeParameterDelimiter,
    ThisType,
    Shebang,
    CivetPrologue,
    CivetPrologueContent,
    CivetOption,
    UnknownPrologue,
    TripleSlashDirective,
    DirectivePrologue,
    PrologueString,
    EOS,
    EOL,
    DebugHere,
    InsertColon,
    InsertSemicolon,
    InsertOpenParen,
    InsertCloseParen,
    InsertOpenBrace,
    InsertInlineOpenBrace,
    InsertCloseBrace,
    InsertOpenBracket,
    InsertCloseBracket,
    InsertOpenAngleBracket,
    InsertCloseAngleBracket,
    InsertComma,
    InsertSpaceEquals,
    InsertConst,
    InsertLet,
    InsertReadonly,
    InsertNewline,
    InsertIndent,
    InsertSpace,
    InsertDot,
    InsertBreak,
    InsertVar,
    InsertType,
    CoffeeBinaryExistentialEnabled,
    CoffeeBooleansEnabled,
    CoffeeClassesEnabled,
    CoffeeCommentEnabled,
    CoffeeDivEnabled,
    CoffeeDoEnabled,
    CoffeeForLoopsEnabled,
    CoffeeInterpolationEnabled,
    CoffeeIsntEnabled,
    CoffeeJSXEnabled,
    CoffeeLineContinuationEnabled,
    CoffeeNotEnabled,
    CoffeeOfEnabled,
    CoffeePrototypeEnabled,
    JSXCodeNestedEnabled,
    JSXCodeSameLineEnabled,
    ObjectIsEnabled,
    IsBare,
    Reset,
    Init,
    Prologue,
    ProloguePrefix,
    Indent,
    TrackIndented,
    PushIndent,
    PopIndent,
    Nested,
    IndentedFurther,
    IndentedAtLeast,
    NotDedented,
    SameLineOrIndentedFurther,
    Dedented,
    PushExtraIndent1
  }, $L0 = (0, import_lib2.$L)(""), $L1 = (0, import_lib2.$L)("{"), $L2 = (0, import_lib2.$L)("/ "), $L3 = (0, import_lib2.$L)("="), $L4 = (0, import_lib2.$L)("("), $L5 = (0, import_lib2.$L)("... "), $L6 = (0, import_lib2.$L)("?"), $L7 = (0, import_lib2.$L)("."), $L8 = (0, import_lib2.$L)("tuple"), $L9 = (0, import_lib2.$L)("++"), $L10 = (0, import_lib2.$L)("--"), $L11 = (0, import_lib2.$L)("\u29FA"), $L12 = (0, import_lib2.$L)("\u2014"), $L13 = (0, import_lib2.$L)("=>"), $L14 = (0, import_lib2.$L)("\u21D2"), $L15 = (0, import_lib2.$L)("import"), $L16 = (0, import_lib2.$L)(":"), $L17 = (0, import_lib2.$L)(" "), $L18 = (0, import_lib2.$L)("<"), $L19 = (0, import_lib2.$L)("implements"), $L20 = (0, import_lib2.$L)("<:"), $L21 = (0, import_lib2.$L)("^"), $L22 = (0, import_lib2.$L)("<?"), $L23 = (0, import_lib2.$L)("-"), $L24 = (0, import_lib2.$L)("import.meta"), $L25 = (0, import_lib2.$L)("return.value"), $L26 = (0, import_lib2.$L)(","), $L27 = (0, import_lib2.$L)("tighter"), $L28 = (0, import_lib2.$L)("looser"), $L29 = (0, import_lib2.$L)("same"), $L30 = (0, import_lib2.$L)("left"), $L31 = (0, import_lib2.$L)("right"), $L32 = (0, import_lib2.$L)("non"), $L33 = (0, import_lib2.$L)("relational"), $L34 = (0, import_lib2.$L)("arguments"), $L35 = (0, import_lib2.$L)("->"), $L36 = (0, import_lib2.$L)("\u2192"), $L37 = (0, import_lib2.$L)("}"), $L38 = (0, import_lib2.$L)("null"), $L39 = (0, import_lib2.$L)("true"), $L40 = (0, import_lib2.$L)("false"), $L41 = (0, import_lib2.$L)("yes"), $L42 = (0, import_lib2.$L)("on"), $L43 = (0, import_lib2.$L)("no"), $L44 = (0, import_lib2.$L)("off"), $L45 = (0, import_lib2.$L)(">"), $L46 = (0, import_lib2.$L)("]"), $L47 = (0, import_lib2.$L)("\u2022"), $L48 = (0, import_lib2.$L)("//"), $L49 = (0, import_lib2.$L)("**="), $L50 = (0, import_lib2.$L)("*="), $L51 = (0, import_lib2.$L)("%/"), $L52 = (0, import_lib2.$L)("\xF7"), $L53 = (0, import_lib2.$L)("%%"), $L54 = (0, import_lib2.$L)("/="), $L55 = (0, import_lib2.$L)("%="), $L56 = (0, import_lib2.$L)("+="), $L57 = (0, import_lib2.$L)("-="), $L58 = (0, import_lib2.$L)("<<="), $L59 = (0, import_lib2.$L)("\u226A="), $L60 = (0, import_lib2.$L)(">>>="), $L61 = (0, import_lib2.$L)("\u22D9="), $L62 = (0, import_lib2.$L)(">>="), $L63 = (0, import_lib2.$L)("\u226B="), $L64 = (0, import_lib2.$L)("&&="), $L65 = (0, import_lib2.$L)("&="), $L66 = (0, import_lib2.$L)("^="), $L67 = (0, import_lib2.$L)("||="), $L68 = (0, import_lib2.$L)("\u2016="), $L69 = (0, import_lib2.$L)("|="), $L70 = (0, import_lib2.$L)("??="), $L71 = (0, import_lib2.$L)("\u2047="), $L72 = (0, import_lib2.$L)("?="), $L73 = (0, import_lib2.$L)("and="), $L74 = (0, import_lib2.$L)("or="), $L75 = (0, import_lib2.$L)("*"), $L76 = (0, import_lib2.$L)("**"), $L77 = (0, import_lib2.$L)("/"), $L78 = (0, import_lib2.$L)("%"), $L79 = (0, import_lib2.$L)("+"), $L80 = (0, import_lib2.$L)("<="), $L81 = (0, import_lib2.$L)("\u2264"), $L82 = (0, import_lib2.$L)(">="), $L83 = (0, import_lib2.$L)("\u2265"), $L84 = (0, import_lib2.$L)("!<?"), $L85 = (0, import_lib2.$L)("<<"), $L86 = (0, import_lib2.$L)("\u226A"), $L87 = (0, import_lib2.$L)(">>>"), $L88 = (0, import_lib2.$L)("\u22D9"), $L89 = (0, import_lib2.$L)(">>"), $L90 = (0, import_lib2.$L)("\u226B"), $L91 = (0, import_lib2.$L)("!=="), $L92 = (0, import_lib2.$L)("\u2262"), $L93 = (0, import_lib2.$L)("!="), $L94 = (0, import_lib2.$L)("\u2260"), $L95 = (0, import_lib2.$L)("isnt"), $L96 = (0, import_lib2.$L)("==="), $L97 = (0, import_lib2.$L)("\u2263"), $L98 = (0, import_lib2.$L)("\u2A76"), $L99 = (0, import_lib2.$L)("=="), $L100 = (0, import_lib2.$L)("\u2261"), $L101 = (0, import_lib2.$L)("\u2A75"), $L102 = (0, import_lib2.$L)("and"), $L103 = (0, import_lib2.$L)("&&"), $L104 = (0, import_lib2.$L)("or"), $L105 = (0, import_lib2.$L)("||"), $L106 = (0, import_lib2.$L)("\u2016"), $L107 = (0, import_lib2.$L)("^^"), $L108 = (0, import_lib2.$L)("xor"), $L109 = (0, import_lib2.$L)("xnor"), $L110 = (0, import_lib2.$L)("??"), $L111 = (0, import_lib2.$L)("\u2047"), $L112 = (0, import_lib2.$L)("instanceof"), $L113 = (0, import_lib2.$L)("\u2208"), $L114 = (0, import_lib2.$L)("\u220B"), $L115 = (0, import_lib2.$L)("\u220C"), $L116 = (0, import_lib2.$L)("\u2209"), $L117 = (0, import_lib2.$L)("&"), $L118 = (0, import_lib2.$L)("|"), $L119 = (0, import_lib2.$L)(";"), $L120 = (0, import_lib2.$L)("some"), $L121 = (0, import_lib2.$L)("every"), $L122 = (0, import_lib2.$L)("count"), $L123 = (0, import_lib2.$L)("first"), $L124 = (0, import_lib2.$L)("sum"), $L125 = (0, import_lib2.$L)("product"), $L126 = (0, import_lib2.$L)("min"), $L127 = (0, import_lib2.$L)("max"), $L128 = (0, import_lib2.$L)("join"), $L129 = (0, import_lib2.$L)("concat"), $L130 = (0, import_lib2.$L)("break"), $L131 = (0, import_lib2.$L)("continue"), $L132 = (0, import_lib2.$L)("debugger"), $L133 = (0, import_lib2.$L)("require"), $L134 = (0, import_lib2.$L)("with"), $L135 = (0, import_lib2.$L)("assert"), $L136 = (0, import_lib2.$L)(":="), $L137 = (0, import_lib2.$L)("\u2254"), $L138 = (0, import_lib2.$L)(".="), $L139 = (0, import_lib2.$L)("::="), $L140 = (0, import_lib2.$L)("/*"), $L141 = (0, import_lib2.$L)("*/"), $L142 = (0, import_lib2.$L)("\\"), $L143 = (0, import_lib2.$L)(")"), $L144 = (0, import_lib2.$L)("abstract"), $L145 = (0, import_lib2.$L)("as"), $L146 = (0, import_lib2.$L)("@"), $L147 = (0, import_lib2.$L)("@@"), $L148 = (0, import_lib2.$L)("async"), $L149 = (0, import_lib2.$L)("await"), $L150 = (0, import_lib2.$L)("`"), $L151 = (0, import_lib2.$L)("by"), $L152 = (0, import_lib2.$L)("case"), $L153 = (0, import_lib2.$L)("catch"), $L154 = (0, import_lib2.$L)("class"), $L155 = (0, import_lib2.$L)("#{"), $L156 = (0, import_lib2.$L)("comptime"), $L157 = (0, import_lib2.$L)("declare"), $L158 = (0, import_lib2.$L)("default"), $L159 = (0, import_lib2.$L)("delete"), $L160 = (0, import_lib2.$L)("do"), $L161 = (0, import_lib2.$L)(".."), $L162 = (0, import_lib2.$L)("\u2025"), $L163 = (0, import_lib2.$L)("..."), $L164 = (0, import_lib2.$L)("\u2026"), $L165 = (0, import_lib2.$L)("::"), $L166 = (0, import_lib2.$L)('"'), $L167 = (0, import_lib2.$L)("each"), $L168 = (0, import_lib2.$L)("else"), $L169 = (0, import_lib2.$L)("!"), $L170 = (0, import_lib2.$L)("export"), $L171 = (0, import_lib2.$L)("extends"), $L172 = (0, import_lib2.$L)("finally"), $L173 = (0, import_lib2.$L)("for"), $L174 = (0, import_lib2.$L)("from"), $L175 = (0, import_lib2.$L)("function"), $L176 = (0, import_lib2.$L)("get"), $L177 = (0, import_lib2.$L)("set"), $L178 = (0, import_lib2.$L)("#"), $L179 = (0, import_lib2.$L)("if"), $L180 = (0, import_lib2.$L)("in"), $L181 = (0, import_lib2.$L)("infer"), $L182 = (0, import_lib2.$L)("let"), $L183 = (0, import_lib2.$L)("const"), $L184 = (0, import_lib2.$L)("is"), $L185 = (0, import_lib2.$L)("var"), $L186 = (0, import_lib2.$L)("like"), $L187 = (0, import_lib2.$L)("loop"), $L188 = (0, import_lib2.$L)("new"), $L189 = (0, import_lib2.$L)("not"), $L190 = (0, import_lib2.$L)("of"), $L191 = (0, import_lib2.$L)("["), $L192 = (0, import_lib2.$L)("operator"), $L193 = (0, import_lib2.$L)("override"), $L194 = (0, import_lib2.$L)("own"), $L195 = (0, import_lib2.$L)("public"), $L196 = (0, import_lib2.$L)("private"), $L197 = (0, import_lib2.$L)("protected"), $L198 = (0, import_lib2.$L)("||>"), $L199 = (0, import_lib2.$L)("|\u25B7"), $L200 = (0, import_lib2.$L)("|>="), $L201 = (0, import_lib2.$L)("\u25B7="), $L202 = (0, import_lib2.$L)("|>"), $L203 = (0, import_lib2.$L)("\u25B7"), $L204 = (0, import_lib2.$L)("readonly"), $L205 = (0, import_lib2.$L)("return"), $L206 = (0, import_lib2.$L)("satisfies"), $L207 = (0, import_lib2.$L)("'"), $L208 = (0, import_lib2.$L)("static"), $L209 = (0, import_lib2.$L)("${"), $L210 = (0, import_lib2.$L)("super"), $L211 = (0, import_lib2.$L)("switch"), $L212 = (0, import_lib2.$L)("target"), $L213 = (0, import_lib2.$L)("then"), $L214 = (0, import_lib2.$L)("this"), $L215 = (0, import_lib2.$L)("throw"), $L216 = (0, import_lib2.$L)('"""'), $L217 = (0, import_lib2.$L)("'''"), $L218 = (0, import_lib2.$L)("///"), $L219 = (0, import_lib2.$L)("```"), $L220 = (0, import_lib2.$L)("try"), $L221 = (0, import_lib2.$L)("typeof"), $L222 = (0, import_lib2.$L)("undefined"), $L223 = (0, import_lib2.$L)("unless"), $L224 = (0, import_lib2.$L)("until"), $L225 = (0, import_lib2.$L)("using"), $L226 = (0, import_lib2.$L)("void"), $L227 = (0, import_lib2.$L)("when"), $L228 = (0, import_lib2.$L)("while"), $L229 = (0, import_lib2.$L)("yield"), $L230 = (0, import_lib2.$L)("/>"), $L231 = (0, import_lib2.$L)("</"), $L232 = (0, import_lib2.$L)("<>"), $L233 = (0, import_lib2.$L)("</>"), $L234 = (0, import_lib2.$L)("<!--"), $L235 = (0, import_lib2.$L)("-->"), $L236 = (0, import_lib2.$L)("type"), $L237 = (0, import_lib2.$L)("enum"), $L238 = (0, import_lib2.$L)("interface"), $L239 = (0, import_lib2.$L)("global"), $L240 = (0, import_lib2.$L)("module"), $L241 = (0, import_lib2.$L)("namespace"), $L242 = (0, import_lib2.$L)("asserts"), $L243 = (0, import_lib2.$L)("keyof"), $L244 = (0, import_lib2.$L)("???"), $L245 = (0, import_lib2.$L)("unique"), $L246 = (0, import_lib2.$L)("symbol"), $L247 = (0, import_lib2.$L)("[]"), $L248 = (0, import_lib2.$L)("civet"), $R0 = (0, import_lib2.$R)(new RegExp("(?=async|debugger|if|unless|comptime|do|for|loop|until|while|switch|throw|try)", "suy")), $R1 = (0, import_lib2.$R)(new RegExp("&(?=\\s)", "suy")), $R2 = (0, import_lib2.$R)(new RegExp("(as|of|by|satisfies|then|when|implements|xor|xnor)(?!\\p{ID_Continue}|[\\u200C\\u200D$])", "suy")), $R3 = (0, import_lib2.$R)(new RegExp("[0-9]", "suy")), $R4 = (0, import_lib2.$R)(new RegExp("(?!\\p{ID_Start}|[_$0-9(\\[{])", "suy")), $R5 = (0, import_lib2.$R)(new RegExp("[ \\t]", "suy")), $R6 = (0, import_lib2.$R)(new RegExp("\\p{ID_Continue}|[\\u200C\\u200D$.#{=]", "suy")), $R7 = (0, import_lib2.$R)(new RegExp("[&=]", "suy")), $R8 = (0, import_lib2.$R)(new RegExp("(?=['\"`])", "suy")), $R9 = (0, import_lib2.$R)(new RegExp("(?=[\\/?])", "suy")), $R10 = (0, import_lib2.$R)(new RegExp("(?=[\\/\\[{?.!@#'\u2019:])", "suy")), $R11 = (0, import_lib2.$R)(new RegExp("%%?", "suy")), $R12 = (0, import_lib2.$R)(new RegExp("[.\\s]", "suy")), $R13 = (0, import_lib2.$R)(new RegExp("[)\\]}]", "suy")), $R14 = (0, import_lib2.$R)(new RegExp("[+-]", "suy")), $R15 = (0, import_lib2.$R)(new RegExp("\\+\\+|--|\u29FA|\u2014|[\\+\\-&]\\S", "suy")), $R16 = (0, import_lib2.$R)(new RegExp(`(?=[0-9.'"tfyno])`, "suy")), $R17 = (0, import_lib2.$R)(new RegExp("(?=true|false|yes|no|on|off)", "suy")), $R18 = (0, import_lib2.$R)(new RegExp("(?=\\p{ID_Start}|[_$])", "suy")), $R19 = (0, import_lib2.$R)(new RegExp("(?:\\p{ID_Start}|[_$])(?:\\p{ID_Continue}|[\\u200C\\u200D$])*", "suy")), $R20 = (0, import_lib2.$R)(new RegExp("(?=\\[|\\s*[.\u2022\\/])", "suy")), $R21 = (0, import_lib2.$R)(new RegExp("([<>])(=?)|([\u2264\u2265])", "suy")), $R22 = (0, import_lib2.$R)(new RegExp("[ \\t]*", "suy")), $R23 = (0, import_lib2.$R)(new RegExp("[ \\t]+", "suy")), $R24 = (0, import_lib2.$R)(new RegExp("[!+-]?", "suy")), $R25 = (0, import_lib2.$R)(new RegExp("(?:\\p{ID_Continue}|[\\u200C\\u200D$-])*", "suy")), $R26 = (0, import_lib2.$R)(new RegExp("[=>]", "suy")), $R27 = (0, import_lib2.$R)(new RegExp("(?=\\p{ID_Start}|[_$^\u226A\u226B\u22D9\u2264\u2265\u2208\u220B\u2209\u220C\u2263\u2261\u2262\u2260=\u2A76\u2A75\u2016\u2047&|*\\/!?%\xF7<>\u29FA+-])", "suy")), $R28 = (0, import_lib2.$R)(new RegExp("!\\^\\^?", "suy")), $R29 = (0, import_lib2.$R)(new RegExp("(?!\\+\\+|--)[!~+-](?!\\s)", "suy")), $R30 = (0, import_lib2.$R)(new RegExp("[:.]", "suy")), $R31 = (0, import_lib2.$R)(new RegExp("(?=for|if|loop|unless|until|while)", "suy")), $R32 = (0, import_lib2.$R)(new RegExp("(?:loop|while|until|for|do)(?!\\p{ID_Continue})", "suy")), $R33 = (0, import_lib2.$R)(new RegExp("(?=loop|comptime|do|for|until|while)", "suy")), $R34 = (0, import_lib2.$R)(new RegExp('[^;"\\s=>]+', "suy")), $R35 = (0, import_lib2.$R)(new RegExp("(?=[0-9.])", "suy")), $R36 = (0, import_lib2.$R)(new RegExp("(?:0|[1-9](?:_[0-9]|[0-9])*)n", "suy")), $R37 = (0, import_lib2.$R)(new RegExp("(?:0|[1-9](?:_[0-9]|[0-9])*)(?=\\.(?:\\p{ID_Start}|[_$]))", "suy")), $R38 = (0, import_lib2.$R)(new RegExp("(?:0|[1-9](?:_[0-9]|[0-9])*)(?:\\.(?:[0-9](?:_[0-9]|[0-9])*))?", "suy")), $R39 = (0, import_lib2.$R)(new RegExp("(?:\\.[0-9](?:_[0-9]|[0-9])*)", "suy")), $R40 = (0, import_lib2.$R)(new RegExp("(?:[eE][+-]?[0-9]+(?:_[0-9]|[0-9])*)", "suy")), $R41 = (0, import_lib2.$R)(new RegExp("0[bB][01](?:[01]|_[01])*n?", "suy")), $R42 = (0, import_lib2.$R)(new RegExp("0[oO][0-7](?:[0-7]|_[0-7])*n?", "suy")), $R43 = (0, import_lib2.$R)(new RegExp("0[xX][0-9a-fA-F](?:[0-9a-fA-F]|_[0-9a-fA-F])*n?", "suy")), $R44 = (0, import_lib2.$R)(new RegExp("(?=[0-9])", "suy")), $R45 = (0, import_lib2.$R)(new RegExp("(?:0|[1-9](?:_[0-9]|[0-9])*)", "suy")), $R46 = (0, import_lib2.$R)(new RegExp('(?:\\\\.|[^"])*', "suy")), $R47 = (0, import_lib2.$R)(new RegExp("(?:\\\\.|[^'])*", "suy")), $R48 = (0, import_lib2.$R)(new RegExp('(?:"(?!"")|#(?!\\{)|\\\\.|[^#"])+', "suy")), $R49 = (0, import_lib2.$R)(new RegExp('(?:"(?!"")|\\\\.|[^"])+', "suy")), $R50 = (0, import_lib2.$R)(new RegExp("(?:'(?!'')|\\\\.|[^'])*", "suy")), $R51 = (0, import_lib2.$R)(new RegExp('(?:\\\\.|#(?!\\{)|[^"#])+', "suy")), $R52 = (0, import_lib2.$R)(new RegExp("(?:\\\\.|[^\\]])*", "suy")), $R53 = (0, import_lib2.$R)(new RegExp("(?:\\\\.)", "suy")), $R54 = (0, import_lib2.$R)(new RegExp("[\\s]+", "suy")), $R55 = (0, import_lib2.$R)(new RegExp("\\/(?!\\/\\/)", "suy")), $R56 = (0, import_lib2.$R)(new RegExp("[^[\\/\\s#$\\\\]+|[#$]", "suy")), $R57 = (0, import_lib2.$R)(new RegExp("[*\\/\\r\\n]", "suy")), $R58 = (0, import_lib2.$R)(new RegExp("(?:\\\\.|[^[\\/\\r\\n])+", "suy")), $R59 = (0, import_lib2.$R)(new RegExp("(?:\\p{ID_Continue}|[\\u200C\\u200D$])*", "suy")), $R60 = (0, import_lib2.$R)(new RegExp("(?=[`'\"])", "suy")), $R61 = (0, import_lib2.$R)(new RegExp("(?:\\$(?!\\{)|\\\\.|[^$`])+", "suy")), $R62 = (0, import_lib2.$R)(new RegExp("(?:\\$(?!\\{)|`(?!``)|\\\\.|[^$`])+", "suy")), $R63 = (0, import_lib2.$R)(new RegExp("(?:on|off|yes|no)(?!\\p{ID_Continue})", "suy")), $R64 = (0, import_lib2.$R)(new RegExp("(?:isnt)(?!\\p{ID_Continue})", "suy")), $R65 = (0, import_lib2.$R)(new RegExp("(?:by)(?!\\p{ID_Continue})", "suy")), $R66 = (0, import_lib2.$R)(new RegExp("(?:of)(?!\\p{ID_Continue})", "suy")), $R67 = (0, import_lib2.$R)(new RegExp("(?:and|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|false|finally|for|function|if|import|in|instanceof|interface|is|let|loop|new|not|null|or|private|protected|public|return|static|super|switch|this|throw|true|try|typeof|unless|until|var|void|while|with|yield)(?!\\p{ID_Continue})", "suy")), $R68 = (0, import_lib2.$R)(new RegExp("(?=\\/|#)", "suy")), $R69 = (0, import_lib2.$R)(new RegExp("\\/\\/(?!\\/)[^\\r\\n]*", "suy")), $R70 = (0, import_lib2.$R)(new RegExp(".", "suy")), $R71 = (0, import_lib2.$R)(new RegExp("#(?!##(?!#))([^\\r\\n]*)", "suy")), $R72 = (0, import_lib2.$R)(new RegExp("[^]*?###", "suy")), $R73 = (0, import_lib2.$R)(new RegExp("###(?!#)", "suy")), $R74 = (0, import_lib2.$R)(new RegExp("\\/\\*(?:(?!\\*\\/)[^\\r\\n])*\\*\\/", "suy")), $R75 = (0, import_lib2.$R)(new RegExp("(?=[ \\t\\/\\\\])", "suy")), $R76 = (0, import_lib2.$R)(new RegExp("(?=\\s|\\/|#)", "suy")), $R77 = (0, import_lib2.$R)(new RegExp("(?!\\p{ID_Continue})", "suy")), $R78 = (0, import_lib2.$R)(new RegExp("[=:]", "suy")), $R79 = (0, import_lib2.$R)(new RegExp("['\u2019]s", "suy")), $R80 = (0, import_lib2.$R)(new RegExp("\\s", "suy")), $R81 = (0, import_lib2.$R)(new RegExp("(?=[<])", "suy")), $R82 = (0, import_lib2.$R)(new RegExp("(?:\\p{ID_Start}|[_$])(?:\\p{ID_Continue}|[\\u200C\\u200D$-])*", "suy")), $R83 = (0, import_lib2.$R)(new RegExp("[!+-]", "suy")), $R84 = (0, import_lib2.$R)(new RegExp("[\\s>]|\\/>", "suy")), $R85 = (0, import_lib2.$R)(new RegExp("(?:[\\w\\-:]+|\\([^()]*\\)|\\[[^\\[\\]]*\\])+", "suy")), $R86 = (0, import_lib2.$R)(new RegExp(`"[^"]*"|'[^']*'`, "suy")), $R87 = (0, import_lib2.$R)(new RegExp("[<>]", "suy")), $R88 = (0, import_lib2.$R)(new RegExp("[!~+-](?!\\s|[!~+-]*&)", "suy")), $R89 = (0, import_lib2.$R)(new RegExp("(?:-[^-]|[^-]*)*", "suy")), $R90 = (0, import_lib2.$R)(new RegExp("[^{}<>\\r\\n]+", "suy")), $R91 = (0, import_lib2.$R)(new RegExp("[+-]?", "suy")), $R92 = (0, import_lib2.$R)(new RegExp("(?=if|unless)", "suy")), $R93 = (0, import_lib2.$R)(new RegExp("[|&<!=\\-\u21D2\u2192]", "suy")), $R94 = (0, import_lib2.$R)(new RegExp("(extends|not|is)(?!\\p{ID_Continue}|[\\u200C\\u200D$])", "suy")), $R95 = (0, import_lib2.$R)(new RegExp("const|in|out", "suy")), $R96 = (0, import_lib2.$R)(new RegExp("#![^\\r\\n]*", "suy")), $R97 = (0, import_lib2.$R)(new RegExp("[\\t ]*", "suy")), $R98 = (0, import_lib2.$R)(new RegExp("[\\s]*", "suy")), $R99 = (0, import_lib2.$R)(new RegExp("\\s+([+-]?)([a-zA-Z0-9-]+)(\\s*=\\s*([\\p{ID_Continue}.,+-]*))?", "suy")), $R100 = (0, import_lib2.$R)(new RegExp("\\/\\/\\/[^\\r\\n]*", "suy")), $R101 = (0, import_lib2.$R)(new RegExp("(?=[ \\t\\r\\n\\/#]|$)", "suy")), $R102 = (0, import_lib2.$R)(new RegExp("\\r\\n|\\n|\\r|$", "suy")), $R103 = (0, import_lib2.$R)(new RegExp("[^]*", "suy")), Program$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(Reset, Init, (0, import_lib2.$E)(EOS), TopLevelStatements, __), function($skip, $loc, $0, $1, $2, $3, $4, $5) {
    var reset = $1, init = $2, ws1 = $3, statements = $4, ws2 = $5;
    let program = {
      type: "BlockStatement",
      expressions: statements,
      children: [reset, init, ws1, statements, ws2],
      bare: !0,
      root: !0
    };
    return processProgram(program), program;
  });
  function Program(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "Program", Program$0);
  }
  var TopLevelStatements$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(TrackIndented, TopLevelSingleLineStatements, (0, import_lib2.$Q)(NestedTopLevelStatements), PopIndent), function($skip, $loc, $0, $1, $2, $3, $4) {
    var indent = $1, first = $2, rest = $3;
    return [
      [indent, ...first[0]],
      ...first.slice(1).map((s) => ["", ...s]),
      ...rest.flat()
    ];
  }), TopLevelStatements$1 = (0, import_lib2.$TS)((0, import_lib2.$S)(TopLevelSingleLineStatements, (0, import_lib2.$Q)(NestedTopLevelStatements)), function($skip, $loc, $0, $1, $2) {
    var first = $1, rest = $2;
    return [
      ...first.map((s) => ["", ...s]),
      ...rest.flat()
    ];
  }), TopLevelStatements$2 = (0, import_lib2.$T)((0, import_lib2.$EXPECT)($L0, 'TopLevelStatements ""'), function(value) {
    return [];
  }), TopLevelStatements$$ = [TopLevelStatements$0, TopLevelStatements$1, TopLevelStatements$2];
  function TopLevelStatements(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "TopLevelStatements", TopLevelStatements$$);
  }
  var NestedTopLevelStatements$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(Nested, TopLevelSingleLineStatements), function($skip, $loc, $0, $1, $2) {
    var nested = $1, statements = $2;
    return [
      [nested, ...statements[0]],
      ...statements.slice(1).map((s) => ["", ...s])
    ];
  });
  function NestedTopLevelStatements(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "NestedTopLevelStatements", NestedTopLevelStatements$0);
  }
  var TopLevelSingleLineStatements$0 = (0, import_lib2.$P)(TopLevelStatement);
  function TopLevelSingleLineStatements(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "TopLevelSingleLineStatements", TopLevelSingleLineStatements$0);
  }
  var TopLevelStatement$0 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$N)(EOS), (0, import_lib2.$E)(_), ModuleItem, StatementDelimiter), function($skip, $loc, $0, $1, $2, $3, $4) {
    var ws = $2, statement = $3, delimiter = $4;
    return statement = prepend(ws, statement), [statement, delimiter];
  });
  function TopLevelStatement(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "TopLevelStatement", TopLevelStatement$0);
  }
  var Expression$0 = AssignmentExpression;
  function Expression(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "Expression", Expression$0);
  }
  var SingleLineExpression$0 = SingleLineAssignmentExpression;
  function SingleLineExpression(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "SingleLineExpression", SingleLineExpression$0);
  }
  var NonPipelineExpression$0 = NonPipelineAssignmentExpression;
  function NonPipelineExpression(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "NonPipelineExpression", NonPipelineExpression$0);
  }
  var NestedExpressionizedStatement$0 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$Y)(EOS), PushIndent, (0, import_lib2.$E)((0, import_lib2.$S)(Nested, ExpressionizedStatementWithTrailingCallExpressions)), PopIndent, (0, import_lib2.$E)(AllowedTrailingCallExpressions)), function($skip, $loc, $0, $1, $2, $3, $4, $5) {
    var expression = $3, trailing = $5;
    return expression ? trailing ? {
      type: "CallExpression",
      children: [expression, ...trailing]
    } : expression : $skip;
  });
  function NestedExpressionizedStatement(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "NestedExpressionizedStatement", NestedExpressionizedStatement$0);
  }
  var ExpressionizedStatementWithTrailingCallExpressions$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(ExpressionizedStatement, (0, import_lib2.$E)(AllowedTrailingCallExpressions)), function($skip, $loc, $0, $1, $2) {
    return $2 ? {
      type: "CallExpression",
      children: [
        makeLeftHandSideExpression($1),
        ...$2
      ]
    } : $1;
  });
  function ExpressionizedStatementWithTrailingCallExpressions(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "ExpressionizedStatementWithTrailingCallExpressions", ExpressionizedStatementWithTrailingCallExpressions$0);
  }
  var ExpressionizedStatement$0 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$EXPECT)($R0, "ExpressionizedStatement /(?=async|debugger|if|unless|comptime|do|for|loop|until|while|switch|throw|try)/"), StatementExpression), function($skip, $loc, $0, $1, $2) {
    var statement = $2;
    return {
      type: "StatementExpression",
      statement,
      children: [statement]
    };
  });
  function ExpressionizedStatement(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "ExpressionizedStatement", ExpressionizedStatement$0);
  }
  var StatementExpression$0 = DebuggerStatement, StatementExpression$1 = (0, import_lib2.$TS)((0, import_lib2.$S)(IfStatement), function($skip, $loc, $0, $1) {
    return !$1.else && $1.then.implicit ? $skip : $1;
  }), StatementExpression$2 = IterationExpression, StatementExpression$3 = SwitchStatement, StatementExpression$4 = ThrowStatement, StatementExpression$5 = TryStatement, StatementExpression$$ = [StatementExpression$0, StatementExpression$1, StatementExpression$2, StatementExpression$3, StatementExpression$4, StatementExpression$5];
  function StatementExpression(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "StatementExpression", StatementExpression$$);
  }
  var CommaExpression$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(AssignmentExpression, (0, import_lib2.$Q)((0, import_lib2.$S)(CommaDelimiter, AssignmentExpression))), function($skip, $loc, $0, $1, $2) {
    return $2.length == 0 ? $1 : $0;
  });
  function CommaExpression(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "CommaExpression", CommaExpression$0);
  }
  var CommaExpressionSpread$0 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$E)(_), DotDotDot, (0, import_lib2.$E)(_), IterationActualStatement), function($skip, $loc, $0, $1, $2, $3, $4) {
    var ws = $1, ws2 = $3, iteration = $4;
    return iteration.subtype === "do" || iteration.subtype === "comptime" ? $skip : (ws2 && (ws ? ws = [ws, ws2] : ws = ws2), iteration = { ...iteration, resultsParent: !0 }, prepend(ws, iteration));
  }), CommaExpressionSpread$1 = (0, import_lib2.$TS)((0, import_lib2.$S)(AssignmentExpressionSpread, (0, import_lib2.$Q)((0, import_lib2.$S)(CommaDelimiter, AssignmentExpressionSpread))), function($skip, $loc, $0, $1, $2) {
    return $2.length == 0 ? $1 : $0;
  }), CommaExpressionSpread$$ = [CommaExpressionSpread$0, CommaExpressionSpread$1];
  function CommaExpressionSpread(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "CommaExpressionSpread", CommaExpressionSpread$$);
  }
  var AssignmentExpressionSpread$0 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$E)(_), DotDotDot, AssignmentExpression), function($skip, $loc, $0, $1, $2, $3) {
    var expression = $3;
    return {
      type: "SpreadElement",
      children: $0,
      expression,
      names: expression.names
    };
  }), AssignmentExpressionSpread$1 = (0, import_lib2.$TS)((0, import_lib2.$S)(AssignmentExpression, (0, import_lib2.$E)((0, import_lib2.$S)((0, import_lib2.$E)(_), DotDotDot))), function($skip, $loc, $0, $1, $2) {
    var expression = $1;
    return $2 ? {
      type: "SpreadElement",
      children: [...$2, $1],
      expression,
      names: expression.names
    } : $1;
  }), AssignmentExpressionSpread$2 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$E)(_), DotDotDot, AssignmentExpression), function($skip, $loc, $0, $1, $2, $3) {
    var expression = $3;
    return {
      type: "SpreadElement",
      children: $0,
      expression,
      names: expression.names
    };
  }), AssignmentExpressionSpread$3 = (0, import_lib2.$TS)((0, import_lib2.$S)(AssignmentExpression, (0, import_lib2.$E)((0, import_lib2.$S)((0, import_lib2.$E)(_), DotDotDot))), function($skip, $loc, $0, $1, $2) {
    var expression = $1;
    return $2 ? {
      type: "SpreadElement",
      children: [...$2, $1],
      expression,
      names: expression.names
    } : $1;
  }), AssignmentExpressionSpread$$ = [AssignmentExpressionSpread$0, AssignmentExpressionSpread$1, AssignmentExpressionSpread$2, AssignmentExpressionSpread$3];
  function AssignmentExpressionSpread(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "AssignmentExpressionSpread", AssignmentExpressionSpread$$);
  }
  var Arguments$0 = ExplicitArguments, Arguments$1 = (0, import_lib2.$TS)((0, import_lib2.$S)(ForbidTrailingMemberProperty, (0, import_lib2.$E)(ImplicitArguments), RestoreTrailingMemberProperty), function($skip, $loc, $0, $1, $2, $3) {
    var args = $2;
    return args || $skip;
  }), Arguments$$ = [Arguments$0, Arguments$1];
  function Arguments(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "Arguments", Arguments$$);
  }
  var ImplicitArguments$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(ApplicationStart, InsertOpenParen, (0, import_lib2.$E)(Trimmed_), ForbidNestedBinaryOp, ForbidPipeline, (0, import_lib2.$E)(ArgumentList), RestorePipeline, RestoreNestedBinaryOp, InsertCloseParen), function($skip, $loc, $0, $1, $2, $3, $4, $5, $6, $7, $8, $9) {
    var open = $2, ws = $3, args = $6, close = $9;
    return !args || skipImplicitArguments(args) ? $skip : {
      type: "Call",
      args,
      children: [open, ws, args, close]
    };
  });
  function ImplicitArguments(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "ImplicitArguments", ImplicitArguments$0);
  }
  var ExplicitArguments$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(OpenParen, AllowAll, (0, import_lib2.$E)((0, import_lib2.$S)(ArgumentList, (0, import_lib2.$E)((0, import_lib2.$S)(__, Comma)))), __, RestoreAll, CloseParen), function($skip, $loc, $0, $1, $2, $3, $4, $5, $6) {
    var open = $1, args = $3, ws = $4, close = $6;
    return args ? args[1] ? args = [...args[0], args[1]] : args = args[0] : args = [], {
      type: "Call",
      args,
      children: [open, args, ws, close]
    };
  });
  function ExplicitArguments(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "ExplicitArguments", ExplicitArguments$0);
  }
  var ApplicationStart$0 = (0, import_lib2.$S)(IndentedApplicationAllowed, (0, import_lib2.$Y)((0, import_lib2.$S)(IndentedFurther, (0, import_lib2.$N)(IdentifierBinaryOp), (0, import_lib2.$N)(ReservedBinary))), (0, import_lib2.$N)(IndentedTrailingCallExpressions)), ApplicationStart$1 = (0, import_lib2.$S)((0, import_lib2.$N)(EOS), (0, import_lib2.$Y)((0, import_lib2.$S)(_, (0, import_lib2.$C)(BracedApplicationAllowed, (0, import_lib2.$N)((0, import_lib2.$EXPECT)($L1, 'ApplicationStart "{"'))), (0, import_lib2.$N)(ForbiddenImplicitCalls)))), ApplicationStart$$ = [ApplicationStart$0, ApplicationStart$1];
  function ApplicationStart(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "ApplicationStart", ApplicationStart$$);
  }
  var ForbiddenImplicitCalls$0 = ReservedBinary, ForbiddenImplicitCalls$1 = (0, import_lib2.$EXPECT)($L2, 'ForbiddenImplicitCalls "/ "'), ForbiddenImplicitCalls$2 = (0, import_lib2.$S)((0, import_lib2.$Y)((0, import_lib2.$S)((0, import_lib2.$R$0)((0, import_lib2.$EXPECT)($R1, "ForbiddenImplicitCalls /&(?=\\s)/")), (0, import_lib2.$N)((0, import_lib2.$S)(NotDedented, ReservedBinary)), (0, import_lib2.$N)((0, import_lib2.$S)((0, import_lib2.$Y)((0, import_lib2.$S)(NotDedented, Ampersand, (0, import_lib2.$C)(IndentedFurther, (0, import_lib2.$N)(EOS)))), BinaryOpRHS)), (0, import_lib2.$C)(IndentedFurther, (0, import_lib2.$N)(EOS)))), BinaryOpRHS), ForbiddenImplicitCalls$3 = (0, import_lib2.$S)(ClassImplicitCallForbidden, (0, import_lib2.$C)(Class, AtAt)), ForbiddenImplicitCalls$4 = (0, import_lib2.$S)(Identifier, (0, import_lib2.$EXPECT)($L3, 'ForbiddenImplicitCalls "="'), Whitespace), ForbiddenImplicitCalls$5 = (0, import_lib2.$TS)((0, import_lib2.$S)(Identifier, (0, import_lib2.$N)((0, import_lib2.$EXPECT)($L4, 'ForbiddenImplicitCalls "("'))), function($skip, $loc, $0, $1, $2) {
    var id = $1;
    return state.operators.has(id.name) ? $0 : $skip;
  }), ForbiddenImplicitCalls$6 = (0, import_lib2.$TS)((0, import_lib2.$S)(OmittedNegation, (0, import_lib2.$E)(_), Identifier), function($skip, $loc, $0, $1, $2, $3) {
    var id = $3;
    return state.operators.has(id.name) ? $0 : $skip;
  }), ForbiddenImplicitCalls$7 = (0, import_lib2.$S)(PostfixStatement, NoBlock), ForbiddenImplicitCalls$8 = (0, import_lib2.$EXPECT)($L5, 'ForbiddenImplicitCalls "... "'), ForbiddenImplicitCalls$$ = [ForbiddenImplicitCalls$0, ForbiddenImplicitCalls$1, ForbiddenImplicitCalls$2, ForbiddenImplicitCalls$3, ForbiddenImplicitCalls$4, ForbiddenImplicitCalls$5, ForbiddenImplicitCalls$6, ForbiddenImplicitCalls$7, ForbiddenImplicitCalls$8];
  function ForbiddenImplicitCalls(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "ForbiddenImplicitCalls", ForbiddenImplicitCalls$$);
  }
  var ReservedBinary$0 = (0, import_lib2.$R$0)((0, import_lib2.$EXPECT)($R2, "ReservedBinary /(as|of|by|satisfies|then|when|implements|xor|xnor)(?!\\p{ID_Continue}|[\\u200C\\u200D$])/"));
  function ReservedBinary(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "ReservedBinary", ReservedBinary$0);
  }
  var ArgumentsWithTrailingCallExpressions$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(Arguments, (0, import_lib2.$E)(AllowedTrailingCallExpressions)), function($skip, $loc, $0, $1, $2) {
    var args = $1, trailing = $2;
    return [args, ...trailing ?? []];
  });
  function ArgumentsWithTrailingCallExpressions(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "ArgumentsWithTrailingCallExpressions", ArgumentsWithTrailingCallExpressions$0);
  }
  var TrailingCallExpressions$0 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$Q)(ExplicitCallExpressionRest), (0, import_lib2.$E)(IndentedTrailingCallExpressions)), function($skip, $loc, $0, $1, $2) {
    return $1 = $1.flat(), !$1.length && !$2 ? $skip : $2 ? [...$1, ...$2] : $1;
  });
  function TrailingCallExpressions(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "TrailingCallExpressions", TrailingCallExpressions$0);
  }
  var IndentedTrailingCallExpressions$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(PushIndent, (0, import_lib2.$Q)(NestedTrailingCallExpression), PopIndent), function($skip, $loc, $0, $1, $2, $3) {
    return $2.length ? $2.flat() : $skip;
  }), IndentedTrailingCallExpressions$1 = (0, import_lib2.$TV)((0, import_lib2.$P)(NestedTrailingCallExpression), function($skip, $loc, $0, $1) {
    return $1.flat();
  }), IndentedTrailingCallExpressions$$ = [IndentedTrailingCallExpressions$0, IndentedTrailingCallExpressions$1];
  function IndentedTrailingCallExpressions(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "IndentedTrailingCallExpressions", IndentedTrailingCallExpressions$$);
  }
  var NestedTrailingCallExpression$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(Nested, (0, import_lib2.$Y)((0, import_lib2.$S)((0, import_lib2.$E)((0, import_lib2.$EXPECT)($L6, 'NestedTrailingCallExpression "?"')), (0, import_lib2.$EXPECT)($L7, 'NestedTrailingCallExpression "."'), (0, import_lib2.$N)((0, import_lib2.$EXPECT)($R3, "NestedTrailingCallExpression /[0-9]/")))), (0, import_lib2.$P)(CallExpressionRest)), function($skip, $loc, $0, $1, $2, $3) {
    var ws = $1, rests = $3;
    let [first, ...rest] = rests.flat();
    return [prepend(ws, first), ...rest];
  });
  function NestedTrailingCallExpression(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "NestedTrailingCallExpression", NestedTrailingCallExpression$0);
  }
  var AllowedTrailingCallExpressions$0 = (0, import_lib2.$T)((0, import_lib2.$S)(TrailingMemberPropertyAllowed, TrailingCallExpressions), function(value) {
    return value[1];
  });
  function AllowedTrailingCallExpressions(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "AllowedTrailingCallExpressions", AllowedTrailingCallExpressions$0);
  }
  var CommaDelimiter$0 = (0, import_lib2.$S)(NotDedented, Comma);
  function CommaDelimiter(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "CommaDelimiter", CommaDelimiter$0);
  }
  var OptionalCommaDelimiter$0 = CommaDelimiter, OptionalCommaDelimiter$1 = (0, import_lib2.$T)((0, import_lib2.$S)((0, import_lib2.$Y)(EOS), InsertComma), function(value) {
    return value[1];
  }), OptionalCommaDelimiter$$ = [OptionalCommaDelimiter$0, OptionalCommaDelimiter$1];
  function OptionalCommaDelimiter(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "OptionalCommaDelimiter", OptionalCommaDelimiter$$);
  }
  var ArgumentList$0 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$N)(EOS), ArgumentPart, (0, import_lib2.$Q)((0, import_lib2.$S)(CommaDelimiter, (0, import_lib2.$N)(EOS), (0, import_lib2.$E)(_), ArgumentPart)), (0, import_lib2.$S)(CommaDelimiter, NestedArguments), (0, import_lib2.$Q)((0, import_lib2.$S)(OptionalCommaDelimiter, NestedArguments))), function($skip, $loc, $0, $1, $2, $3, $4, $5) {
    return [
      $2,
      ...$3.flatMap(([comma, eos, ws, arg]) => [comma, prepend(ws, arg)]),
      ...Array.isArray($4[1]) ? [$4[0], ...$4[1]] : $4,
      ...$5.flatMap(
        ([comma, args]) => Array.isArray(args) ? [comma, ...args] : [comma, args]
      )
    ];
  }), ArgumentList$1 = (0, import_lib2.$TS)((0, import_lib2.$S)(NestedArguments, (0, import_lib2.$Q)((0, import_lib2.$S)(OptionalCommaDelimiter, NestedArguments))), function($skip, $loc, $0, $1, $2) {
    return Array.isArray($1) || ($1 = [$1]), [
      ...trimFirstSpace($1),
      ...$2.flatMap(
        ([comma, args]) => Array.isArray(args) ? [comma, ...args] : [comma, args]
      )
    ];
  }), ArgumentList$2 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$E)(_), ArgumentPart, (0, import_lib2.$Q)((0, import_lib2.$S)(CommaDelimiter, (0, import_lib2.$E)(_), ArgumentPart))), function($skip, $loc, $0, $1, $2, $3) {
    return [
      prepend($1, $2),
      ...$3.flatMap(([comma, ws, arg]) => [comma, prepend(ws, arg)])
    ];
  }), ArgumentList$$ = [ArgumentList$0, ArgumentList$1, ArgumentList$2];
  function ArgumentList(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "ArgumentList", ArgumentList$$);
  }
  var NestedArguments$0 = NestedBulletedArray, NestedArguments$1 = NestedImplicitObjectLiteral, NestedArguments$2 = NestedArgumentList, NestedArguments$$ = [NestedArguments$0, NestedArguments$1, NestedArguments$2];
  function NestedArguments(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "NestedArguments", NestedArguments$$);
  }
  var NestedArgumentList$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(PushIndent, AllowPipeline, AllowTrailingMemberProperty, (0, import_lib2.$Q)(NestedArgument), RestoreTrailingMemberProperty, RestorePipeline, PopIndent), function($skip, $loc, $0, $1, $2, $3, $4, $5, $6, $7) {
    var args = $4;
    return args.length ? stripTrailingImplicitComma(args.flat()) : $skip;
  });
  function NestedArgumentList(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "NestedArgumentList", NestedArgumentList$0);
  }
  var NestedArgument$0 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$N)(NestedImplicitPropertyDefinition), Nested, (0, import_lib2.$N)(Bullet), SingleLineArgumentExpressions, ParameterElementDelimiter), function($skip, $loc, $0, $1, $2, $3, $4, $5) {
    var indent = $2, args = $4, comma = $5;
    let [arg0, ...rest] = args;
    return arg0 = prepend(indent, arg0), [arg0, ...rest, comma];
  });
  function NestedArgument(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "NestedArgument", NestedArgument$0);
  }
  var SingleLineArgumentExpressions$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(WArgumentPart, (0, import_lib2.$Q)((0, import_lib2.$S)((0, import_lib2.$S)((0, import_lib2.$E)(_), Comma), WArgumentPart))), function($skip, $loc, $0, $1, $2) {
    return [$1, ...$2.flat()];
  });
  function SingleLineArgumentExpressions(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "SingleLineArgumentExpressions", SingleLineArgumentExpressions$0);
  }
  var WArgumentPart$0 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$E)(_), ArgumentPart), function($skip, $loc, $0, $1, $2) {
    return prepend($1, $2);
  });
  function WArgumentPart(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "WArgumentPart", WArgumentPart$0);
  }
  var ArgumentPart$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(DotDotDot, Expression), function($skip, $loc, $0, $1, $2) {
    var spread = $1, expression = $2;
    return {
      type: "Argument",
      children: $0,
      expression,
      spread
    };
  }), ArgumentPart$1 = (0, import_lib2.$TS)((0, import_lib2.$S)(Expression, (0, import_lib2.$E)(DotDotDot)), function($skip, $loc, $0, $1, $2) {
    var expression = $1, spread = $2;
    return {
      type: "Argument",
      children: spread ? [spread, expression] : [expression],
      expression,
      spread
    };
  }), ArgumentPart$$ = [ArgumentPart$0, ArgumentPart$1];
  function ArgumentPart(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "ArgumentPart", ArgumentPart$$);
  }
  var BinaryOpExpression$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(UnaryExpression, (0, import_lib2.$Q)(BinaryOpRHS)), function($skip, $loc, $0, $1, $2) {
    return $2.length ? processBinaryOpExpression($0) : $1;
  });
  function BinaryOpExpression(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "BinaryOpExpression", BinaryOpExpression$0);
  }
  var BinaryOpNotDedented$0 = (0, import_lib2.$T)((0, import_lib2.$S)((0, import_lib2.$N)(NewlineBinaryOpAllowed), (0, import_lib2.$E)(_)), function(value) {
    return value[1];
  }), BinaryOpNotDedented$1 = (0, import_lib2.$T)((0, import_lib2.$S)(NewlineBinaryOpAllowed, (0, import_lib2.$C)(NestedBinaryOpAllowed, (0, import_lib2.$N)(Nested)), NotDedented), function(value) {
    return value[1];
  }), BinaryOpNotDedented$$ = [BinaryOpNotDedented$0, BinaryOpNotDedented$1];
  function BinaryOpNotDedented(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "BinaryOpNotDedented", BinaryOpNotDedented$$);
  }
  var BinaryOpRHS$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(BinaryOpNotDedented, IsLike, (0, import_lib2.$E)(_), PatternExpressionList), function($skip, $loc, $0, $1, $2, $3, $4) {
    var ws1 = $1, op = $2, ws2 = $3, patterns = $4;
    return [ws1, op, ws2, patterns];
  }), BinaryOpRHS$1 = (0, import_lib2.$TS)((0, import_lib2.$S)(BinaryOp, RHS), function($skip, $loc, $0, $1, $2) {
    var op = $1, rhs = $2;
    return [[], op, [], rhs];
  }), BinaryOpRHS$2 = (0, import_lib2.$TS)((0, import_lib2.$S)(NewlineBinaryOpAllowed, NotDedentedBinaryOp, WRHS), function($skip, $loc, $0, $1, $2, $3) {
    var op = $2, rhs = $3;
    return [...op, ...rhs];
  }), BinaryOpRHS$3 = (0, import_lib2.$T)((0, import_lib2.$S)((0, import_lib2.$N)(NewlineBinaryOpAllowed), SingleLineBinaryOpRHS), function(value) {
    return value[1];
  }), BinaryOpRHS$$ = [BinaryOpRHS$0, BinaryOpRHS$1, BinaryOpRHS$2, BinaryOpRHS$3];
  function BinaryOpRHS(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "BinaryOpRHS", BinaryOpRHS$$);
  }
  var IsLike$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(Is, (0, import_lib2.$E)(_), (0, import_lib2.$E)((0, import_lib2.$S)(OmittedNegation, (0, import_lib2.$E)(_))), Like), function($skip, $loc, $0, $1, $2, $3, $4) {
    var not = $3;
    return {
      type: "PatternTest",
      children: $0,
      special: !0,
      negated: !!not
    };
  });
  function IsLike(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "IsLike", IsLike$0);
  }
  var WRHS$0 = (0, import_lib2.$T)((0, import_lib2.$S)(NestedBulletedArray), function(value) {
    return [void 0, value[0]];
  }), WRHS$1 = (0, import_lib2.$T)((0, import_lib2.$S)(NestedImplicitObjectLiteral), function(value) {
    return [void 0, value[0]];
  }), WRHS$2 = (0, import_lib2.$TS)((0, import_lib2.$S)(PushIndent, (0, import_lib2.$E)((0, import_lib2.$S)((0, import_lib2.$S)(Nested, (0, import_lib2.$E)(_)), RHS)), PopIndent), function($skip, $loc, $0, $1, $2, $3) {
    var wrhs = $2;
    return wrhs || $skip;
  }), WRHS$3 = (0, import_lib2.$S)((0, import_lib2.$C)((0, import_lib2.$S)(EOS, __), _), RHS), WRHS$$ = [WRHS$0, WRHS$1, WRHS$2, WRHS$3];
  function WRHS(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "WRHS", WRHS$$);
  }
  var SingleLineBinaryOpRHS$0 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$E)(_), BinaryOp, (0, import_lib2.$C)((0, import_lib2.$S)(EOS, __), _), RHS), function($skip, $loc, $0, $1, $2, $3, $4) {
    var ws1 = $1, op = $2, ws2 = $3, rhs = $4;
    return [ws1 || [], op, ws2, rhs];
  });
  function SingleLineBinaryOpRHS(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "SingleLineBinaryOpRHS", SingleLineBinaryOpRHS$0);
  }
  var RHS$0 = ExpressionizedStatementWithTrailingCallExpressions, RHS$1 = UnaryExpression, RHS$$ = [RHS$0, RHS$1];
  function RHS(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "RHS", RHS$$);
  }
  var UnaryExpression$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(IndentedApplicationAllowed, (0, import_lib2.$P)(UnaryOp), (0, import_lib2.$C)(ArrayLiteral, NestedArgumentList), (0, import_lib2.$N)(CallExpressionRest), (0, import_lib2.$E)(UnaryPostfix)), function($skip, $loc, $0, $1, $2, $3, $4, $5) {
    var pre = $2, args = $3, post = $5;
    return processUnaryNestedExpression(pre, args, post) ?? $skip;
  }), UnaryExpression$1 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$Q)(UnaryOp), UnaryBody, (0, import_lib2.$E)(UnaryPostfix)), function($skip, $loc, $0, $1, $2, $3) {
    var pre = $1, exp = $2, post = $3;
    return processUnaryExpression(pre, exp, post);
  }), UnaryExpression$$ = [UnaryExpression$0, UnaryExpression$1];
  function UnaryExpression(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "UnaryExpression", UnaryExpression$$);
  }
  var UnaryWithoutParenthesizedAssignment$0 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$Q)(UnaryOp), UnaryWithoutParenthesizedAssignmentBody, (0, import_lib2.$E)(UnaryPostfix)), function($skip, $loc, $0, $1, $2, $3) {
    var pre = $1, exp = $2, post = $3;
    return processUnaryExpression(pre, exp, post);
  });
  function UnaryWithoutParenthesizedAssignment(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "UnaryWithoutParenthesizedAssignment", UnaryWithoutParenthesizedAssignment$0);
  }
  var UnaryBody$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(CoffeeDoEnabled, Do, MaybeNestedCoffeeDoBody), function($skip, $loc, $0, $1, $2, $3) {
    var body = $3;
    return processCoffeeDo(...body);
  }), UnaryBody$1 = ParenthesizedAssignment, UnaryBody$2 = ExpressionizedStatementWithTrailingCallExpressions, UnaryBody$3 = UpdateExpression, UnaryBody$4 = NestedExpressionizedStatement, UnaryBody$$ = [UnaryBody$0, UnaryBody$1, UnaryBody$2, UnaryBody$3, UnaryBody$4];
  function UnaryBody(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "UnaryBody", UnaryBody$$);
  }
  var MaybeNestedCoffeeDoBody$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(PushIndent, (0, import_lib2.$E)((0, import_lib2.$S)(Nested, CoffeeDoBody)), PopIndent), function($skip, $loc, $0, $1, $2, $3) {
    return $2 || $skip;
  }), MaybeNestedCoffeeDoBody$1 = (0, import_lib2.$S)((0, import_lib2.$E)(_), CoffeeDoBody), MaybeNestedCoffeeDoBody$$ = [MaybeNestedCoffeeDoBody$0, MaybeNestedCoffeeDoBody$1];
  function MaybeNestedCoffeeDoBody(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "MaybeNestedCoffeeDoBody", MaybeNestedCoffeeDoBody$$);
  }
  var CoffeeDoBody$0 = ArrowFunction, CoffeeDoBody$1 = (0, import_lib2.$S)(LeftHandSideExpression, (0, import_lib2.$N)((0, import_lib2.$S)(__, AssignmentOpSymbol))), CoffeeDoBody$2 = Expression, CoffeeDoBody$$ = [CoffeeDoBody$0, CoffeeDoBody$1, CoffeeDoBody$2];
  function CoffeeDoBody(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "CoffeeDoBody", CoffeeDoBody$$);
  }
  var UnaryWithoutParenthesizedAssignmentBody$0 = UpdateExpression, UnaryWithoutParenthesizedAssignmentBody$1 = ExpressionizedStatementWithTrailingCallExpressions, UnaryWithoutParenthesizedAssignmentBody$2 = NestedExpressionizedStatement, UnaryWithoutParenthesizedAssignmentBody$$ = [UnaryWithoutParenthesizedAssignmentBody$0, UnaryWithoutParenthesizedAssignmentBody$1, UnaryWithoutParenthesizedAssignmentBody$2];
  function UnaryWithoutParenthesizedAssignmentBody(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "UnaryWithoutParenthesizedAssignmentBody", UnaryWithoutParenthesizedAssignmentBody$$);
  }
  var ParenthesizedAssignment$0 = (0, import_lib2.$S)(InsertOpenParen, (0, import_lib2.$C)(ActualAssignment, ArrowFunction), InsertCloseParen);
  function ParenthesizedAssignment(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "ParenthesizedAssignment", ParenthesizedAssignment$0);
  }
  var UnaryPostfix$0 = QuestionMark, UnaryPostfix$1 = (0, import_lib2.$P)(TypePostfix), UnaryPostfix$$ = [UnaryPostfix$0, UnaryPostfix$1];
  function UnaryPostfix(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "UnaryPostfix", UnaryPostfix$$);
  }
  var TypePostfix$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(_, NWTypePostfix), function($skip, $loc, $0, $1, $2) {
    var ws = $1, postfix = $2;
    return prepend(ws, postfix);
  }), TypePostfix$1 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$Y)(EOS), BinaryOpNotDedented, (0, import_lib2.$E)(_), NWTypePostfix), function($skip, $loc, $0, $1, $2, $3, $4) {
    var indent = $2, ws = $3, postfix = $4;
    return prepend(ws || " ", postfix);
  }), TypePostfix$$ = [TypePostfix$0, TypePostfix$1];
  function TypePostfix(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "TypePostfix", TypePostfix$$);
  }
  var Tuple$0 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$EXPECT)($L8, 'Tuple "tuple"'), NonIdContinue), function($skip, $loc, $0, $1, $2) {
    return {
      $loc,
      token: "readonly unknown[] | []"
    };
  });
  function Tuple(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "Tuple", Tuple$0);
  }
  var NWTypePostfix$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(As, _, Tuple), function($skip, $loc, $0, $1, $2, $3) {
    return {
      ts: !0,
      children: [{ $loc: $1.$loc, token: "satisfies" }, $2, $3]
    };
  }), NWTypePostfix$1 = (0, import_lib2.$TS)((0, import_lib2.$S)(As, (0, import_lib2.$E)(ExclamationPoint), (0, import_lib2.$C)(Type, (0, import_lib2.$S)(__, Const))), function($skip, $loc, $0, $1, $2, $3) {
    var as = $1, ex = $2, type = $3;
    let children;
    return ex ? children = [{ $loc: ex.$loc, token: "as unknown " }, as, type] : children = [as, type], { ts: !0, children };
  }), NWTypePostfix$2 = (0, import_lib2.$TS)((0, import_lib2.$S)(Satisfies, Type), function($skip, $loc, $0, $1, $2) {
    return { ts: !0, children: $0 };
  }), NWTypePostfix$$ = [NWTypePostfix$0, NWTypePostfix$1, NWTypePostfix$2];
  function NWTypePostfix(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "NWTypePostfix", NWTypePostfix$$);
  }
  var UpdateExpression$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(UpdateExpressionSymbol, (0, import_lib2.$N)(Whitespace), UnaryWithoutParenthesizedAssignment), function($skip, $loc, $0, $1, $2, $3) {
    var symbol = $1, assigned = $3;
    return {
      type: "UpdateExpression",
      assigned,
      children: [symbol, assigned]
    };
  }), UpdateExpression$1 = (0, import_lib2.$TS)((0, import_lib2.$S)(LeftHandSideExpression, (0, import_lib2.$E)((0, import_lib2.$S)(UpdateExpressionSymbol, (0, import_lib2.$EXPECT)($R4, "UpdateExpression /(?!\\p{ID_Start}|[_$0-9(\\[{])/")))), function($skip, $loc, $0, $1, $2) {
    return $2 ? {
      type: "UpdateExpression",
      assigned: $1,
      children: [$1, $2[0]]
    } : $1;
  }), UpdateExpression$$ = [UpdateExpression$0, UpdateExpression$1];
  function UpdateExpression(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "UpdateExpression", UpdateExpression$$);
  }
  var UpdateExpressionSymbol$0 = (0, import_lib2.$TV)((0, import_lib2.$C)((0, import_lib2.$EXPECT)($L9, 'UpdateExpressionSymbol "++"'), (0, import_lib2.$EXPECT)($L10, 'UpdateExpressionSymbol "--"')), function($skip, $loc, $0, $1) {
    return { $loc, token: $1 };
  }), UpdateExpressionSymbol$1 = (0, import_lib2.$TV)((0, import_lib2.$EXPECT)($L11, 'UpdateExpressionSymbol "\u29FA"'), function($skip, $loc, $0, $1) {
    return { $loc, token: "++" };
  }), UpdateExpressionSymbol$2 = (0, import_lib2.$TV)((0, import_lib2.$EXPECT)($L12, 'UpdateExpressionSymbol "\u2014"'), function($skip, $loc, $0, $1) {
    return { $loc, token: "--" };
  }), UpdateExpressionSymbol$$ = [UpdateExpressionSymbol$0, UpdateExpressionSymbol$1, UpdateExpressionSymbol$2];
  function UpdateExpressionSymbol(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "UpdateExpressionSymbol", UpdateExpressionSymbol$$);
  }
  var AssignmentExpression$0 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$E)(_), ActualAssignment), function($skip, $loc, $0, $1, $2) {
    var ws = $1, assign = $2;
    return prepend(ws, assign);
  }), AssignmentExpression$1 = PipelineExpression, AssignmentExpression$2 = SingleLineAssignmentExpression, AssignmentExpression$3 = (0, import_lib2.$S)((0, import_lib2.$S)(EOS, (0, import_lib2.$E)(_)), AssignmentExpressionTail), AssignmentExpression$$ = [AssignmentExpression$0, AssignmentExpression$1, AssignmentExpression$2, AssignmentExpression$3];
  function AssignmentExpression(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "AssignmentExpression", AssignmentExpression$$);
  }
  var NonPipelineAssignmentExpression$0 = NonPipelineSingleLineAssignmentExpression, NonPipelineAssignmentExpression$1 = (0, import_lib2.$S)((0, import_lib2.$S)(EOS, (0, import_lib2.$E)(_)), NonPipelineAssignmentExpressionTail), NonPipelineAssignmentExpression$$ = [NonPipelineAssignmentExpression$0, NonPipelineAssignmentExpression$1];
  function NonPipelineAssignmentExpression(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "NonPipelineAssignmentExpression", NonPipelineAssignmentExpression$$);
  }
  var SingleLineAssignmentExpression$0 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$E)(_), AssignmentExpressionTail), function($skip, $loc, $0, $1, $2) {
    var ws = $1, tail = $2;
    return prepend(ws, tail);
  });
  function SingleLineAssignmentExpression(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "SingleLineAssignmentExpression", SingleLineAssignmentExpression$0);
  }
  var NonPipelineSingleLineAssignmentExpression$0 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$E)(_), NonPipelineAssignmentExpressionTail), function($skip, $loc, $0, $1, $2) {
    var ws = $1, tail = $2;
    return prepend(ws, tail);
  });
  function NonPipelineSingleLineAssignmentExpression(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "NonPipelineSingleLineAssignmentExpression", NonPipelineSingleLineAssignmentExpression$0);
  }
  var AssignmentExpressionTail$0 = YieldExpression, AssignmentExpressionTail$1 = ArrowFunction, AssignmentExpressionTail$2 = ActualAssignment, AssignmentExpressionTail$3 = ConditionalExpression, AssignmentExpressionTail$$ = [AssignmentExpressionTail$0, AssignmentExpressionTail$1, AssignmentExpressionTail$2, AssignmentExpressionTail$3];
  function AssignmentExpressionTail(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "AssignmentExpressionTail", AssignmentExpressionTail$$);
  }
  var NonPipelineAssignmentExpressionTail$0 = YieldExpression, NonPipelineAssignmentExpressionTail$1 = ArrowFunction, NonPipelineAssignmentExpressionTail$2 = NonPipelineActualAssignment, NonPipelineAssignmentExpressionTail$3 = ConditionalExpression, NonPipelineAssignmentExpressionTail$$ = [NonPipelineAssignmentExpressionTail$0, NonPipelineAssignmentExpressionTail$1, NonPipelineAssignmentExpressionTail$2, NonPipelineAssignmentExpressionTail$3];
  function NonPipelineAssignmentExpressionTail(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "NonPipelineAssignmentExpressionTail", NonPipelineAssignmentExpressionTail$$);
  }
  var ActualAssignment$0 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$P)((0, import_lib2.$S)(NotDedented, UpdateExpression, WAssignmentOp)), MaybeNestedExpression), function($skip, $loc, $0, $1, $2) {
    return $1 = $1.map((x) => [x[0], x[1], ...x[2]]), $0 = [$1, $2], {
      type: "AssignmentExpression",
      children: $0,
      // NOTE: This null marks the assignment for later processing to distinguish it
      // from fake assignments that only add a name to a scope
      names: null,
      lhs: $1,
      assigned: $1[0][1],
      expression: $2
    };
  });
  function ActualAssignment(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "ActualAssignment", ActualAssignment$0);
  }
  var NonPipelineActualAssignment$0 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$P)((0, import_lib2.$S)(NotDedented, UpdateExpression, WAssignmentOp)), MaybeNestedNonPipelineExpression), function($skip, $loc, $0, $1, $2) {
    return $1 = $1.map((x) => [x[0], x[1], ...x[2]]), $0 = [$1, $2], {
      type: "AssignmentExpression",
      children: $0,
      // NOTE: This null marks the assignment for later processing to distinguish it
      // from fake assignments that only add a name to a scope
      names: null,
      lhs: $1,
      assigned: $1[0][1],
      expression: $2
    };
  });
  function NonPipelineActualAssignment(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "NonPipelineActualAssignment", NonPipelineActualAssignment$0);
  }
  var YieldExpression$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(Yield, (0, import_lib2.$E)((0, import_lib2.$S)((0, import_lib2.$E)((0, import_lib2.$S)((0, import_lib2.$E)(_), Star)), MaybeParenNestedExpression))), function($skip, $loc, $0, $1, $2) {
    if ($2) {
      let [star, expression] = $2;
      return {
        type: "YieldExpression",
        star,
        expression,
        children: [$1, star, expression]
      };
    }
    return {
      type: "YieldExpression",
      children: [$1]
    };
  });
  function YieldExpression(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "YieldExpression", YieldExpression$0);
  }
  var ArrowFunction$0 = ThinArrowFunction, ArrowFunction$1 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$E)((0, import_lib2.$S)(Async, _)), ArrowParameters, (0, import_lib2.$E)(ReturnTypeSuffix), FatArrow, FatArrowBody), function($skip, $loc, $0, $1, $2, $3, $4, $5) {
    var async = $1, parameters = $2, returnType = $3, arrow = $4, expOrBlock = $5;
    return async || (async = []), {
      type: "ArrowFunction",
      signature: {
        modifier: {
          async: !!async.length
        },
        parameters,
        returnType
      },
      parameters,
      returnType,
      async,
      block: expOrBlock,
      children: [async, parameters, returnType, arrow, expOrBlock]
    };
  }), ArrowFunction$$ = [ArrowFunction$0, ArrowFunction$1];
  function ArrowFunction(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "ArrowFunction", ArrowFunction$$);
  }
  var FatArrow$0 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$E)(_), FatArrowToken), function($skip, $loc, $0, $1, $2) {
    var ws = $1, arrow = $2;
    return ws || (ws = " "), [ws, arrow];
  });
  function FatArrow(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "FatArrow", FatArrow$0);
  }
  var FatArrowToken$0 = (0, import_lib2.$TV)((0, import_lib2.$C)((0, import_lib2.$EXPECT)($L13, 'FatArrowToken "=>"'), (0, import_lib2.$EXPECT)($L14, 'FatArrowToken "\u21D2"')), function($skip, $loc, $0, $1) {
    return { $loc, token: "=>" };
  });
  function FatArrowToken(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "FatArrowToken", FatArrowToken$0);
  }
  var TrailingOperator$0 = (0, import_lib2.$S)((0, import_lib2.$E)(_), (0, import_lib2.$C)(BinaryOp, AssignmentOp, Dot, QuestionMark)), TrailingOperator$1 = (0, import_lib2.$S)(_, OperatorAssignmentOp), TrailingOperator$2 = TrailingDeclaration, TrailingOperator$$ = [TrailingOperator$0, TrailingOperator$1, TrailingOperator$2];
  function TrailingOperator(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "TrailingOperator", TrailingOperator$$);
  }
  var TrailingDeclaration$0 = (0, import_lib2.$S)((0, import_lib2.$E)(_), (0, import_lib2.$C)(ConstAssignment, LetAssignment));
  function TrailingDeclaration(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "TrailingDeclaration", TrailingDeclaration$0);
  }
  var TrailingPipe$0 = (0, import_lib2.$S)((0, import_lib2.$E)(_), Pipe);
  function TrailingPipe(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "TrailingPipe", TrailingPipe$0);
  }
  var TrailingPostfix$0 = (0, import_lib2.$S)((0, import_lib2.$E)(_), PostfixStatement);
  function TrailingPostfix(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "TrailingPostfix", TrailingPostfix$0);
  }
  var FatArrowBody$0 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$N)(EOS), (0, import_lib2.$N)((0, import_lib2.$S)((0, import_lib2.$E)(_), ExpressionizedStatement)), NonPipelineExpression, (0, import_lib2.$N)(TrailingDeclaration), (0, import_lib2.$N)(TrailingPipe), (0, import_lib2.$N)(TrailingPostfix), (0, import_lib2.$N)(SemicolonDelimiter)), function($skip, $loc, $0, $1, $2, $3, $4, $5, $6, $7) {
    var exp = $3;
    exp = makeExpressionStatement(exp);
    let expressions = [["", exp]];
    return {
      type: "BlockStatement",
      bare: !0,
      expressions,
      children: [expressions],
      implicitlyReturned: !0
    };
  }), FatArrowBody$1 = NoCommaBracedOrEmptyBlock, FatArrowBody$$ = [FatArrowBody$0, FatArrowBody$1];
  function FatArrowBody(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "FatArrowBody", FatArrowBody$$);
  }
  var ConditionalExpression$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(ShortCircuitExpression, (0, import_lib2.$E)(TernaryRest)), function($skip, $loc, $0, $1, $2) {
    return $2 ? [$1, ...$2] : $1;
  });
  function ConditionalExpression(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "ConditionalExpression", ConditionalExpression$0);
  }
  var TernaryRest$0 = NestedTernaryRest, TernaryRest$1 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$N)(CoffeeBinaryExistentialEnabled), (0, import_lib2.$Y)((0, import_lib2.$EXPECT)($R5, "TernaryRest /[ \\t]/")), _, QuestionMark, MaybeNestedExpression, __, Colon, MaybeNestedExpression), function($skip, $loc, $0, $1, $2, $3, $4, $5, $6, $7, $8) {
    return $0.slice(2);
  }), TernaryRest$$ = [TernaryRest$0, TernaryRest$1];
  function TernaryRest(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "TernaryRest", TernaryRest$$);
  }
  var NestedTernaryRest$0 = (0, import_lib2.$S)(Nested, QuestionMark, MaybeNestedExpression, Nested, Colon, MaybeNestedExpression), NestedTernaryRest$1 = (0, import_lib2.$TS)((0, import_lib2.$S)(PushIndent, (0, import_lib2.$E)((0, import_lib2.$S)(Nested, QuestionMark, MaybeNestedExpression, Nested, Colon, MaybeNestedExpression)), PopIndent), function($skip, $loc, $0, $1, $2, $3) {
    return $2 || $skip;
  }), NestedTernaryRest$$ = [NestedTernaryRest$0, NestedTernaryRest$1];
  function NestedTernaryRest(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "NestedTernaryRest", NestedTernaryRest$$);
  }
  var ShortCircuitExpression$0 = BinaryOpExpression;
  function ShortCircuitExpression(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "ShortCircuitExpression", ShortCircuitExpression$0);
  }
  var PipelineExpression$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(PipelineAllowed, (0, import_lib2.$E)(_), PipelineHeadItem, PipelineExpressionBody), function($skip, $loc, $0, $1, $2, $3, $4) {
    var ws = $2, head = $3, body = $4;
    if (head.type === "ArrowFunction" && head.ampersandBlock) {
      let expressions = [{
        type: "PipelineExpression",
        children: [ws, head.block.expressions[0], body]
      }], block = { ...head.block, expressions, children: [expressions] };
      return {
        ...head,
        block,
        body: expressions,
        children: [...head.children.slice(0, -1), block]
      };
    }
    return {
      type: "PipelineExpression",
      children: [ws, head, body]
    };
  });
  function PipelineExpression(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "PipelineExpression", PipelineExpression$0);
  }
  var PipelineExpressionBody$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(PipelineExpressionBodySameLine, PushIndent, (0, import_lib2.$Q)((0, import_lib2.$S)((0, import_lib2.$S)(Nested, Pipe, __, PipelineTailItem), PipelineExpressionBodySameLine)), PopIndent), function($skip, $loc, $0, $1, $2, $3, $4) {
    var first = $1, rest = $3;
    return rest.length ? [
      ...first,
      ...rest.map(([nested, line]) => [nested, ...line]).flat()
    ] : $skip;
  }), PipelineExpressionBody$1 = (0, import_lib2.$P)((0, import_lib2.$S)(NotDedented, Pipe, __, PipelineTailItem)), PipelineExpressionBody$$ = [PipelineExpressionBody$0, PipelineExpressionBody$1];
  function PipelineExpressionBody(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "PipelineExpressionBody", PipelineExpressionBody$$);
  }
  var PipelineExpressionBodySameLine$0 = (0, import_lib2.$Q)((0, import_lib2.$S)((0, import_lib2.$E)(_), Pipe, __, PipelineTailItem));
  function PipelineExpressionBodySameLine(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "PipelineExpressionBodySameLine", PipelineExpressionBodySameLine$0);
  }
  var PipelineHeadItem$0 = NonPipelineExpression, PipelineHeadItem$1 = OptimizedParenthesizedExpression, PipelineHeadItem$$ = [PipelineHeadItem$0, PipelineHeadItem$1];
  function PipelineHeadItem(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "PipelineHeadItem", PipelineHeadItem$$);
  }
  var PipelineTailItem$0 = (0, import_lib2.$T)((0, import_lib2.$S)((0, import_lib2.$C)(AwaitOp, Return, Throw), (0, import_lib2.$N)(AccessStart), (0, import_lib2.$N)(MaybeParenNestedExpression)), function(value) {
    return value[0];
  }), PipelineTailItem$1 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$TEXT)((0, import_lib2.$S)(Yield, (0, import_lib2.$E)((0, import_lib2.$S)((0, import_lib2.$E)(_), Star)))), (0, import_lib2.$N)(AccessStart), (0, import_lib2.$N)(MaybeParenNestedExpression)), function($skip, $loc, $0, $1, $2, $3) {
    return { $loc, token: $1, type: "Yield" };
  }), PipelineTailItem$2 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$EXPECT)($L15, 'PipelineTailItem "import"'), (0, import_lib2.$N)(AccessStart)), function($skip, $loc, $0, $1, $2) {
    return {
      type: "Identifier",
      children: [$1]
    };
  }), PipelineTailItem$3 = (0, import_lib2.$TS)((0, import_lib2.$S)(NWTypePostfix, (0, import_lib2.$Q)(TypePostfix)), function($skip, $loc, $0, $1, $2) {
    return makeAmpersandFunction({
      body: [" ", $1, ...$2]
    });
  }), PipelineTailItem$4 = (0, import_lib2.$T)((0, import_lib2.$S)(PipelineHeadItem), function(value) {
    return value[0];
  }), PipelineTailItem$$ = [PipelineTailItem$0, PipelineTailItem$1, PipelineTailItem$2, PipelineTailItem$3, PipelineTailItem$4];
  function PipelineTailItem(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "PipelineTailItem", PipelineTailItem$$);
  }
  var PrimaryExpression$0 = ObjectLiteral, PrimaryExpression$1 = ArrayLiteral, PrimaryExpression$2 = ThisLiteral, PrimaryExpression$3 = TemplateLiteral, PrimaryExpression$4 = Literal, PrimaryExpression$5 = FunctionExpression, PrimaryExpression$6 = IdentifierReference, PrimaryExpression$7 = ClassExpression, PrimaryExpression$8 = RegularExpressionLiteral, PrimaryExpression$9 = OptimizedParenthesizedExpression, PrimaryExpression$10 = Placeholder, PrimaryExpression$11 = SymbolLiteral, PrimaryExpression$12 = JSXImplicitFragment, PrimaryExpression$$ = [PrimaryExpression$0, PrimaryExpression$1, PrimaryExpression$2, PrimaryExpression$3, PrimaryExpression$4, PrimaryExpression$5, PrimaryExpression$6, PrimaryExpression$7, PrimaryExpression$8, PrimaryExpression$9, PrimaryExpression$10, PrimaryExpression$11, PrimaryExpression$12];
  function PrimaryExpression(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "PrimaryExpression", PrimaryExpression$$);
  }
  var OptimizedParenthesizedExpression$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(ParenthesizedExpression), function($skip, $loc, $0, $1) {
    let { expression } = $1;
    switch (expression.type) {
      case "StatementExpression":
        if (expression.statement.type !== "IterationExpression") break;
      case "IterationExpression":
        return expression;
    }
    return $1;
  });
  function OptimizedParenthesizedExpression(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "OptimizedParenthesizedExpression", OptimizedParenthesizedExpression$0);
  }
  var ParenthesizedExpression$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(OpenParen, AllowAll, (0, import_lib2.$E)((0, import_lib2.$S)(PostfixedCommaExpression, __, CloseParen)), RestoreAll), function($skip, $loc, $0, $1, $2, $3, $4) {
    var open = $1;
    if (!$3) return $skip;
    let [expression, ws, close] = $3;
    return expression.type === "ParenthesizedExpression" && expression.implicit ? {
      ...expression,
      children: [open, expression.expression, ws, close],
      implicit: !1
    } : {
      type: "ParenthesizedExpression",
      children: [open, expression, ws, close],
      expression
    };
  });
  function ParenthesizedExpression(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "ParenthesizedExpression", ParenthesizedExpression$0);
  }
  var Placeholder$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(Dot, (0, import_lib2.$N)((0, import_lib2.$EXPECT)($R6, "Placeholder /\\p{ID_Continue}|[\\u200C\\u200D$.#{=]/")), (0, import_lib2.$E)(PlaceholderTypeSuffix)), function($skip, $loc, $0, $1, $2, $3) {
    var dot = $1, typeSuffix = $3;
    return {
      type: "Placeholder",
      subtype: ".",
      typeSuffix,
      children: [dot]
    };
  }), Placeholder$1 = (0, import_lib2.$TS)((0, import_lib2.$S)(Ampersand, (0, import_lib2.$N)((0, import_lib2.$EXPECT)($R7, "Placeholder /[&=]/")), (0, import_lib2.$E)(PlaceholderTypeSuffix)), function($skip, $loc, $0, $1, $2, $3) {
    var amp = $1, typeSuffix = $3;
    return {
      type: "Placeholder",
      subtype: "&",
      typeSuffix,
      children: [amp]
    };
  }), Placeholder$2 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$Y)(ExplicitAccessStart), (0, import_lib2.$Y)((0, import_lib2.$C)(PropertyAccess, PropertyGlob)), (0, import_lib2.$N)(NumericLiteral)), function($skip, $loc, $0, $1, $2, $3) {
    return {
      type: "Placeholder",
      subtype: "&",
      children: [{ token: "&" }]
    };
  }), Placeholder$$ = [Placeholder$0, Placeholder$1, Placeholder$2];
  function Placeholder(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "Placeholder", Placeholder$$);
  }
  var PlaceholderTypeSuffix$0 = (0, import_lib2.$T)((0, import_lib2.$S)((0, import_lib2.$E)(QuestionMark), Colon, MaybeNestedTypePrimary), function(value) {
    var optional = value[0], t = value[2];
    return { type: "TypeSuffix", ts: !0, optional, t, children: value };
  });
  function PlaceholderTypeSuffix(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "PlaceholderTypeSuffix", PlaceholderTypeSuffix$0);
  }
  var ClassDeclaration$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(ClassExpression), function($skip, $loc, $0, $1) {
    return $1.id ? $1 : makeLeftHandSideExpression($1);
  });
  function ClassDeclaration(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "ClassDeclaration", ClassDeclaration$0);
  }
  var ClassExpression$0 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$E)(Decorators), (0, import_lib2.$E)((0, import_lib2.$S)(Abstract, __)), Class, (0, import_lib2.$N)((0, import_lib2.$EXPECT)($L16, 'ClassExpression ":"')), (0, import_lib2.$E)(ClassBinding), (0, import_lib2.$E)(ClassHeritage), ClassBody), function($skip, $loc, $0, $1, $2, $3, $4, $5, $6, $7) {
    var decorators = $1, abstract = $2, binding = $5, heritage = $6, body = $7;
    return {
      type: "ClassExpression",
      decorators,
      abstract,
      binding,
      id: binding?.[0],
      name: binding?.[0].name,
      heritage,
      body,
      children: $0
    };
  });
  function ClassExpression(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "ClassExpression", ClassExpression$0);
  }
  var ClassBinding$0 = (0, import_lib2.$T)((0, import_lib2.$S)((0, import_lib2.$N)(EOS), BindingIdentifier, (0, import_lib2.$E)(TypeParameters)), function(value) {
    return [value[1], value[2]];
  });
  function ClassBinding(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "ClassBinding", ClassBinding$0);
  }
  var ClassHeritage$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(ExtendsClause, (0, import_lib2.$E)(WithClause), (0, import_lib2.$E)(ImplementsClause)), function($skip, $loc, $0, $1, $2, $3) {
    var extendsClause = $1, withClause = $2, implementsClause = $3;
    return withClause && (extendsClause = convertWithClause(withClause, extendsClause)), [extendsClause, implementsClause];
  }), ClassHeritage$1 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$E)(WithClause), (0, import_lib2.$E)(ImplementsClause)), function($skip, $loc, $0, $1, $2) {
    var withClause = $1, implementsClause = $2;
    return withClause ? [convertWithClause(withClause), implementsClause] : implementsClause || $skip;
  }), ClassHeritage$$ = [ClassHeritage$0, ClassHeritage$1];
  function ClassHeritage(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "ClassHeritage", ClassHeritage$$);
  }
  var ExtendsClause$0 = (0, import_lib2.$S)(ExtendsToken, __, ExtendsTarget);
  function ExtendsClause(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "ExtendsClause", ExtendsClause$0);
  }
  var WithClause$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(NotDedented, With, PushIndent, (0, import_lib2.$Q)((0, import_lib2.$S)(Nested, Expression, (0, import_lib2.$E)(_), (0, import_lib2.$E)(Comma))), PopIndent), function($skip, $loc, $0, $1, $2, $3, $4, $5) {
    var targets = $4;
    return targets.length ? (targets = targets.map(($) => $.slice(0, -1)), {
      type: "WithClause",
      children: $0,
      targets
    }) : $skip;
  }), WithClause$1 = (0, import_lib2.$TS)((0, import_lib2.$S)(NotDedented, With, NotDedented, ExtendsTarget, (0, import_lib2.$Q)((0, import_lib2.$S)((0, import_lib2.$E)(_), Comma, NotDedented, ExtendsTarget))), function($skip, $loc, $0, $1, $2, $3, $4, $5) {
    var ws = $3, t = $4, rest = $5;
    return {
      type: "WithClause",
      children: $0,
      targets: [[ws, t], ...rest.map(([ws1, _comma, ws2, target]) => [prepend(ws1, ws2), target])]
    };
  }), WithClause$$ = [WithClause$0, WithClause$1];
  function WithClause(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "WithClause", WithClause$$);
  }
  var ExtendsToken$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(NotDedented, InsertSpace, ExtendsShorthand, (0, import_lib2.$E)((0, import_lib2.$EXPECT)($L17, 'ExtendsToken " "'))), function($skip, $loc, $0, $1, $2, $3, $4) {
    var ws = $1, s = $2, t = $3;
    return {
      type: "Extends",
      children: [
        ws.length ? ws : s,
        t
      ]
    };
  }), ExtendsToken$1 = (0, import_lib2.$TS)((0, import_lib2.$S)(NotDedented, Extends), function($skip, $loc, $0, $1, $2) {
    return {
      type: "Extends",
      children: $0
    };
  }), ExtendsToken$$ = [ExtendsToken$0, ExtendsToken$1];
  function ExtendsToken(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "ExtendsToken", ExtendsToken$$);
  }
  var ExtendsShorthand$0 = (0, import_lib2.$TV)((0, import_lib2.$EXPECT)($L18, 'ExtendsShorthand "<"'), function($skip, $loc, $0, $1) {
    return { $loc, token: "extends " };
  });
  function ExtendsShorthand(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "ExtendsShorthand", ExtendsShorthand$0);
  }
  var NotExtendsToken$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(Loc, (0, import_lib2.$E)(_), OmittedNegation, ExtendsShorthand, (0, import_lib2.$E)((0, import_lib2.$EXPECT)($L17, 'NotExtendsToken " "'))), function($skip, $loc, $0, $1, $2, $3, $4, $5) {
    var l = $1, ws1 = $2, ws2 = $3, t = $4;
    return {
      type: "Extends",
      negated: !0,
      children: [ws1 && ws2 ? [ws1, ws2] : ws1 || ws2 || { $loc: l.$loc, token: " " }, t]
    };
  }), NotExtendsToken$1 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$E)(_), OmittedNegation, Extends), function($skip, $loc, $0, $1, $2, $3) {
    return {
      type: "Extends",
      negated: !0,
      children: $0
    };
  }), NotExtendsToken$$ = [NotExtendsToken$0, NotExtendsToken$1];
  function NotExtendsToken(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "NotExtendsToken", NotExtendsToken$$);
  }
  var OmittedNegation$0 = (0, import_lib2.$T)((0, import_lib2.$S)(ExclamationPoint), function(value) {
    return "";
  }), OmittedNegation$1 = (0, import_lib2.$T)((0, import_lib2.$S)(Not, (0, import_lib2.$E)((0, import_lib2.$EXPECT)($L17, 'OmittedNegation " "')), (0, import_lib2.$E)(_)), function(value) {
    return value[2];
  }), OmittedNegation$$ = [OmittedNegation$0, OmittedNegation$1];
  function OmittedNegation(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "OmittedNegation", OmittedNegation$$);
  }
  var ExtendsTarget$0 = (0, import_lib2.$TV)(LeftHandSideExpressionWithObjectApplicationForbidden, function($skip, $loc, $0, $1) {
    var exp = $0;
    return makeLeftHandSideExpression(exp);
  });
  function ExtendsTarget(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "ExtendsTarget", ExtendsTarget$0);
  }
  var ImplementsClause$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(ImplementsToken, PushIndent, (0, import_lib2.$Q)((0, import_lib2.$S)(Nested, TypeIdentifier, ArrayBulletDelimiter)), PopIndent), function($skip, $loc, $0, $1, $2, $3, $4) {
    var i = $1, targets = $3;
    if (!targets.length) return $skip;
    let last = targets.at(-1).slice(0, -1);
    return targets = targets.slice(0, -1).concat(last), {
      ts: !0,
      children: [i, targets]
    };
  }), ImplementsClause$1 = (0, import_lib2.$TS)((0, import_lib2.$S)(ImplementsToken, ImplementsTarget, (0, import_lib2.$Q)((0, import_lib2.$S)((0, import_lib2.$E)(_), Comma, ImplementsTarget))), function($skip, $loc, $0, $1, $2, $3) {
    return {
      ts: !0,
      children: $0
    };
  }), ImplementsClause$$ = [ImplementsClause$0, ImplementsClause$1];
  function ImplementsClause(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "ImplementsClause", ImplementsClause$$);
  }
  var ImplementsToken$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(Loc, NotDedented, ImplementsShorthand, (0, import_lib2.$E)((0, import_lib2.$EXPECT)($L17, 'ImplementsToken " "'))), function($skip, $loc, $0, $1, $2, $3, $4) {
    var l = $1, ws = $2, token = $3;
    let children = [...ws, token];
    return ws.length || children.unshift({ $loc: l.$loc, token: " " }), { children };
  }), ImplementsToken$1 = (0, import_lib2.$TS)((0, import_lib2.$S)(NotDedented, (0, import_lib2.$EXPECT)($L19, 'ImplementsToken "implements"'), NonIdContinue), function($skip, $loc, $0, $1, $2, $3) {
    return $2 = { $loc, token: $2 }, [$1, $2];
  }), ImplementsToken$$ = [ImplementsToken$0, ImplementsToken$1];
  function ImplementsToken(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "ImplementsToken", ImplementsToken$$);
  }
  var ImplementsShorthand$0 = (0, import_lib2.$TV)((0, import_lib2.$EXPECT)($L20, 'ImplementsShorthand "<:"'), function($skip, $loc, $0, $1) {
    return { $loc, token: "implements " };
  });
  function ImplementsShorthand(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "ImplementsShorthand", ImplementsShorthand$0);
  }
  var ImplementsTarget$0 = (0, import_lib2.$S)(__, IdentifierName, (0, import_lib2.$Q)((0, import_lib2.$S)(Dot, IdentifierName)), (0, import_lib2.$E)(TypeArguments));
  function ImplementsTarget(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "ImplementsTarget", ImplementsTarget$0);
  }
  var ClassBody$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(__, OpenBrace, AllowAll, (0, import_lib2.$E)(ClassBracedContent), RestoreAll, __, CloseBrace), function($skip, $loc, $0, $1, $2, $3, $4, $5, $6, $7) {
    var ws1 = $1, open = $2, expressions = $4, ws2 = $6, close = $7;
    return expressions || (expressions = []), {
      type: "BlockStatement",
      subtype: "ClassBody",
      children: [ws1, open, expressions, ws2, close],
      expressions
    };
  }), ClassBody$1 = (0, import_lib2.$TS)((0, import_lib2.$S)(InsertOpenBrace, (0, import_lib2.$E)(NestedClassElements), InsertNewline, InsertIndent, InsertCloseBrace), function($skip, $loc, $0, $1, $2, $3, $4, $5) {
    var expressions = $2;
    return expressions || (expressions = $0[1] = []), {
      type: "BlockStatement",
      subtype: "ClassBody",
      children: $0,
      expressions
    };
  }), ClassBody$$ = [ClassBody$0, ClassBody$1];
  function ClassBody(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "ClassBody", ClassBody$$);
  }
  var ClassBracedContent$0 = NestedClassElements, ClassBracedContent$1 = (0, import_lib2.$TS)((0, import_lib2.$S)(ForbidNewlineBinaryOp, (0, import_lib2.$Q)((0, import_lib2.$S)((0, import_lib2.$S)((0, import_lib2.$E)(_), (0, import_lib2.$N)(EOS)), ClassElement, StatementDelimiter)), RestoreNewlineBinaryOp), function($skip, $loc, $0, $1, $2, $3) {
    var stmts = $2;
    return stmts || $skip;
  }), ClassBracedContent$$ = [ClassBracedContent$0, ClassBracedContent$1];
  function ClassBracedContent(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "ClassBracedContent", ClassBracedContent$$);
  }
  var NestedClassElements$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(PushIndent, (0, import_lib2.$Q)(NestedClassElement), PopIndent), function($skip, $loc, $0, $1, $2, $3) {
    var elements = $2;
    return elements.length ? elements : $skip;
  });
  function NestedClassElements(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "NestedClassElements", NestedClassElements$0);
  }
  var NestedClassElement$0 = (0, import_lib2.$S)(Nested, ClassElement, StatementDelimiter);
  function NestedClassElement(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "NestedClassElement", NestedClassElement$0);
  }
  var ClassElement$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(CoffeeClassesEnabled, (0, import_lib2.$E)(Decorators), (0, import_lib2.$E)((0, import_lib2.$S)(Declare, (0, import_lib2.$E)(_))), (0, import_lib2.$E)(AccessModifier), (0, import_lib2.$E)((0, import_lib2.$S)(Static, (0, import_lib2.$E)(_))), (0, import_lib2.$E)((0, import_lib2.$S)(Override, (0, import_lib2.$E)(_))), ActualAssignment), function($skip, $loc, $0, $1, $2, $3, $4, $5, $6, $7) {
    var decorators = $2, declare = $3, access = $4, static_ = $5, override = $6, assignment = $7;
    return {
      type: static_ ? "CoffeeClassPublic" : "CoffeeClassPrivate",
      children: [decorators, declare, access, static_, override, assignment],
      assignment
    };
  }), ClassElement$1 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$E)(Decorators), (0, import_lib2.$E)((0, import_lib2.$S)(Declare, (0, import_lib2.$E)(_))), (0, import_lib2.$E)(AccessModifier), (0, import_lib2.$E)((0, import_lib2.$S)(Static, (0, import_lib2.$E)(_))), (0, import_lib2.$E)((0, import_lib2.$S)(Override, (0, import_lib2.$E)(_))), ClassElementDefinition), function($skip, $loc, $0, $1, $2, $3, $4, $5, $6) {
    var decorators = $1, declare = $2, access = $3, static_ = $4, override = $5, definition = $6;
    let ts2 = definition.ts || !!declare;
    return definition.type === "MultiMethodDefinition" ? {
      ...definition,
      ts: ts2,
      children: definition.children.map((c) => ({
        ...c,
        children: [decorators, declare, access, static_, override, ...c.children]
      }))
    } : {
      ...definition,
      ts: ts2,
      children: [decorators, declare, access, static_, override, ...definition.children]
    };
  }), ClassElement$2 = (0, import_lib2.$TS)((0, import_lib2.$S)(Static, BracedBlock), function($skip, $loc, $0, $1, $2) {
    return {
      type: "ClassStaticBlock",
      children: $0
    };
  }), ClassElement$3 = EmptyStatement, ClassElement$$ = [ClassElement$0, ClassElement$1, ClassElement$2, ClassElement$3];
  function ClassElement(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "ClassElement", ClassElement$$);
  }
  var ClassElementDefinition$0 = MethodDefinition, ClassElementDefinition$1 = FieldDefinition, ClassElementDefinition$$ = [ClassElementDefinition$0, ClassElementDefinition$1];
  function ClassElementDefinition(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "ClassElementDefinition", ClassElementDefinition$$);
  }
  var ClassSignature$0 = (0, import_lib2.$S)((0, import_lib2.$E)(Decorators), (0, import_lib2.$E)((0, import_lib2.$S)(Abstract, __)), Class, (0, import_lib2.$E)(ClassBinding), (0, import_lib2.$E)(ClassHeritage), ClassSignatureBody);
  function ClassSignature(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "ClassSignature", ClassSignature$0);
  }
  var ClassSignatureBody$0 = (0, import_lib2.$S)(__, OpenBrace, (0, import_lib2.$E)(NestedClassSignatureElements), __, CloseBrace), ClassSignatureBody$1 = (0, import_lib2.$S)(InsertOpenBrace, (0, import_lib2.$E)(NestedClassSignatureElements), InsertNewline, InsertIndent, InsertCloseBrace), ClassSignatureBody$$ = [ClassSignatureBody$0, ClassSignatureBody$1];
  function ClassSignatureBody(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "ClassSignatureBody", ClassSignatureBody$$);
  }
  var NestedClassSignatureElements$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(PushIndent, (0, import_lib2.$Q)(NestedClassSignatureElement), PopIndent), function($skip, $loc, $0, $1, $2, $3) {
    var elements = $2;
    return elements.length ? elements : $skip;
  });
  function NestedClassSignatureElements(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "NestedClassSignatureElements", NestedClassSignatureElements$0);
  }
  var NestedClassSignatureElement$0 = (0, import_lib2.$S)(Nested, ClassSignatureElement, StatementDelimiter);
  function NestedClassSignatureElement(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "NestedClassSignatureElement", NestedClassSignatureElement$0);
  }
  var ClassSignatureElement$0 = (0, import_lib2.$S)((0, import_lib2.$E)(Decorators), (0, import_lib2.$E)(AccessModifier), (0, import_lib2.$E)((0, import_lib2.$S)(Static, (0, import_lib2.$E)(_))), (0, import_lib2.$E)((0, import_lib2.$S)(Override, (0, import_lib2.$E)(_))), (0, import_lib2.$C)(MethodSignature, FieldDefinition)), ClassSignatureElement$1 = (0, import_lib2.$S)(Static, ClassSignatureBody), ClassSignatureElement$$ = [ClassSignatureElement$0, ClassSignatureElement$1];
  function ClassSignatureElement(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "ClassSignatureElement", ClassSignatureElement$$);
  }
  var AccessModifier$0 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$E)((0, import_lib2.$S)((0, import_lib2.$C)(Public, Private, Protected), NotDedented)), (0, import_lib2.$E)((0, import_lib2.$S)(Readonly, NotDedented))), function($skip, $loc, $0, $1, $2) {
    return $1 || $2 ? {
      ts: !0,
      children: $0
    } : $skip;
  });
  function AccessModifier(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "AccessModifier", AccessModifier$0);
  }
  var FieldDefinition$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(CoffeeClassesEnabled, ClassElementName, (0, import_lib2.$E)(_), Colon, __, AssignmentExpression), function($skip, $loc, $0, $1, $2, $3, $4, $5, $6) {
    var id = $2, exp = $6;
    switch (exp.type) {
      case "FunctionExpression":
        return convertFunctionToMethod(id, exp);
      case "ArrowFunction":
        return convertArrowFunctionToMethod(id, exp);
      default:
        return {
          type: "FieldDefinition",
          id,
          children: [id, " = ", exp]
        };
    }
  }), FieldDefinition$1 = (0, import_lib2.$TS)((0, import_lib2.$S)(InsertReadonly, ClassElementName, (0, import_lib2.$E)(TypeSuffix), __, ConstAssignment, MaybeNestedExpression), function($skip, $loc, $0, $1, $2, $3, $4, $5, $6) {
    var readonly = $1, id = $2, typeSuffix = $3, ca = $5;
    return readonly.children[0].$loc = {
      pos: ca.$loc.pos - 1,
      length: ca.$loc.length + 1
    }, {
      type: "FieldDefinition",
      id,
      typeSuffix,
      children: $0,
      readonly
    };
  }), FieldDefinition$2 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$E)((0, import_lib2.$S)(Abstract, (0, import_lib2.$E)(_))), (0, import_lib2.$E)((0, import_lib2.$S)(Readonly, (0, import_lib2.$E)(_))), ClassElementName, (0, import_lib2.$E)(TypeSuffix), (0, import_lib2.$E)(Initializer)), function($skip, $loc, $0, $1, $2, $3, $4, $5) {
    var abstract = $1, readonly = $2, id = $3, typeSuffix = $4, initializer = $5;
    return {
      type: "FieldDefinition",
      children: $0,
      ts: abstract ? !0 : void 0,
      id,
      typeSuffix,
      abstract,
      readonly,
      initializer
    };
  }), FieldDefinition$$ = [FieldDefinition$0, FieldDefinition$1, FieldDefinition$2];
  function FieldDefinition(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "FieldDefinition", FieldDefinition$$);
  }
  var ThisLiteral$0 = HashThis, ThisLiteral$1 = (0, import_lib2.$TS)((0, import_lib2.$S)(AtThis, (0, import_lib2.$TEXT)((0, import_lib2.$S)((0, import_lib2.$E)(Hash), IdentifierName))), function($skip, $loc, $0, $1, $2) {
    var at = $1, id = $2;
    return {
      type: "MemberExpression",
      children: [at, {
        type: "PropertyAccess",
        name: id,
        children: [".", {
          $loc: {
            pos: $loc.pos + 1,
            length: $loc.length - 1
          },
          token: id
        }]
      }],
      thisShorthand: !0
    };
  }), ThisLiteral$2 = BasicThisLiteral, ThisLiteral$$ = [ThisLiteral$0, ThisLiteral$1, ThisLiteral$2];
  function ThisLiteral(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "ThisLiteral", ThisLiteral$$);
  }
  var BasicThisLiteral$0 = (0, import_lib2.$T)((0, import_lib2.$S)(This), function(value) {
    return { type: "Identifier", name: "this", children: [value[0]] };
  }), BasicThisLiteral$1 = AtThis, BasicThisLiteral$$ = [BasicThisLiteral$0, BasicThisLiteral$1];
  function BasicThisLiteral(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "BasicThisLiteral", BasicThisLiteral$$);
  }
  var HashThis$0 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$E)(AtThis), LengthShorthand, (0, import_lib2.$E)((0, import_lib2.$S)((0, import_lib2.$Y)((0, import_lib2.$S)(_, (0, import_lib2.$E)((0, import_lib2.$S)(Not, __)), ActualIn)), (0, import_lib2.$EXPECT)($L0, 'HashThis ""')))), function($skip, $loc, $0, $1, $2, $3) {
    var at = $1, id = $2, beforeIn = $3;
    return beforeIn != null && at == null ? ['"', id.name, '"'] : {
      type: "MemberExpression",
      children: [at ?? "this", {
        type: "PropertyAccess",
        name: id.name,
        children: [".", id]
      }],
      thisShorthand: !0
    };
  }), HashThis$1 = (0, import_lib2.$TS)((0, import_lib2.$S)(PrivateIdentifier, (0, import_lib2.$Y)((0, import_lib2.$S)(_, (0, import_lib2.$E)((0, import_lib2.$S)(Not, __)), ActualIn))), function($skip, $loc, $0, $1, $2) {
    var id = $1;
    return id;
  }), HashThis$2 = (0, import_lib2.$TV)(PrivateIdentifier, function($skip, $loc, $0, $1) {
    var id = $0;
    return {
      type: "MemberExpression",
      children: ["this", {
        type: "PropertyAccess",
        name: id.name,
        children: [".", id]
      }],
      privateShorthand: !0,
      privateId: id
    };
  }), HashThis$$ = [HashThis$0, HashThis$1, HashThis$2];
  function HashThis(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "HashThis", HashThis$$);
  }
  var LengthShorthand$0 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$N)(CoffeeCommentEnabled), Hash, NonIdContinue), function($skip, $loc, $0, $1, $2, $3) {
    let id = "length";
    return {
      type: "Identifier",
      name: id,
      names: [id],
      children: [{
        $loc,
        token: id
      }]
    };
  });
  function LengthShorthand(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "LengthShorthand", LengthShorthand$0);
  }
  var AtThis$0 = (0, import_lib2.$TV)(At, function($skip, $loc, $0, $1) {
    var at = $0;
    return {
      type: "Identifier",
      name: "this",
      children: [{ ...at, token: "this" }]
    };
  });
  function AtThis(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "AtThis", AtThis$0);
  }
  var LeftHandSideExpression$0 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$P)((0, import_lib2.$S)(New, (0, import_lib2.$N)((0, import_lib2.$C)((0, import_lib2.$EXPECT)($L7, 'LeftHandSideExpression "."'), (0, import_lib2.$EXPECT)($L16, 'LeftHandSideExpression ":"'))), __)), CallExpression), function($skip, $loc, $0, $1, $2) {
    var expression = $2;
    return {
      type: "NewExpression",
      children: $0,
      expression
    };
  }), LeftHandSideExpression$1 = NamedBindingPattern, LeftHandSideExpression$2 = CallExpression, LeftHandSideExpression$$ = [LeftHandSideExpression$0, LeftHandSideExpression$1, LeftHandSideExpression$2];
  function LeftHandSideExpression(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "LeftHandSideExpression", LeftHandSideExpression$$);
  }
  var CallExpression$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(Super, ArgumentsWithTrailingCallExpressions, (0, import_lib2.$Q)(CallExpressionRest)), function($skip, $loc, $0, $1, $2, $3) {
    var rest = $3;
    return processCallMemberExpression({
      type: "CallExpression",
      children: [$1, ...$2, ...rest.flat()]
    });
  }), CallExpression$1 = (0, import_lib2.$TS)((0, import_lib2.$S)(Import, _, NamedImports, __, FromClause), function($skip, $loc, $0, $1, $2, $3, $4, $5) {
    return dynamizeImportDeclarationExpression($0);
  }), CallExpression$2 = (0, import_lib2.$TS)((0, import_lib2.$S)(FromClause, __, Import, _, NamedImports), function($skip, $loc, $0, $1, $2, $3, $4, $5) {
    var from = $1, fws = $2, i = $3, iws = $4, imports = $5;
    return dynamizeImportDeclarationExpression([i, iws, imports, fws, from]);
  }), CallExpression$3 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$EXPECT)($L15, 'CallExpression "import"'), ArgumentsWithTrailingCallExpressions, (0, import_lib2.$Q)(CallExpressionRest)), function($skip, $loc, $0, $1, $2, $3) {
    var rest = $3;
    return processCallMemberExpression({
      type: "CallExpression",
      children: [$1, ...$2, ...rest.flat()]
    });
  }), CallExpression$4 = (0, import_lib2.$TS)((0, import_lib2.$S)(MemberExpression, (0, import_lib2.$Q)(CallExpressionRest), (0, import_lib2.$E)(AllowedTrailingCallExpressions)), function($skip, $loc, $0, $1, $2, $3) {
    var member = $1, rest = $2, trailing = $3;
    return rest.length || trailing ? (rest = rest.flat(), processCallMemberExpression({
      type: "CallExpression",
      children: [member, ...rest, ...trailing ?? []]
    })) : member;
  }), CallExpression$$ = [CallExpression$0, CallExpression$1, CallExpression$2, CallExpression$3, CallExpression$4];
  function CallExpression(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "CallExpression", CallExpression$$);
  }
  var CallExpressionRest$0 = MemberExpressionRest, CallExpressionRest$1 = (0, import_lib2.$T)((0, import_lib2.$S)(TypeArguments, (0, import_lib2.$N)((0, import_lib2.$C)(IdentifierName, NumericLiteral))), function(value) {
    return value[0];
  }), CallExpressionRest$2 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$EXPECT)($R8, "CallExpressionRest /(?=['\"`])/"), (0, import_lib2.$C)(TemplateLiteral, StringLiteral)), function($skip, $loc, $0, $1, $2) {
    var literal = $2;
    return literal.type === "StringLiteral" && (literal = "`" + literal.token.slice(1, -1).replace(/(`|\$\{)/g, "\\$1") + "`"), literal;
  }), CallExpressionRest$3 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$E)(OptionalShorthand), ArgumentsWithTrailingCallExpressions), function($skip, $loc, $0, $1, $2) {
    var optional = $1, argsWithTrailing = $2;
    if (!optional) return argsWithTrailing;
    let call = argsWithTrailing[0];
    return [{
      ...call,
      children: [optional, ...call.children],
      optional
    }, ...argsWithTrailing.slice(1)];
  }), CallExpressionRest$$ = [CallExpressionRest$0, CallExpressionRest$1, CallExpressionRest$2, CallExpressionRest$3];
  function CallExpressionRest(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "CallExpressionRest", CallExpressionRest$$);
  }
  var ExplicitCallExpressionRest$0 = MemberExpressionRest, ExplicitCallExpressionRest$1 = (0, import_lib2.$T)((0, import_lib2.$S)(TypeArguments, (0, import_lib2.$N)((0, import_lib2.$C)(IdentifierName, NumericLiteral))), function(value) {
    return value[0];
  }), ExplicitCallExpressionRest$2 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$EXPECT)($R8, "ExplicitCallExpressionRest /(?=['\"`])/"), (0, import_lib2.$C)(TemplateLiteral, StringLiteral)), function($skip, $loc, $0, $1, $2) {
    var literal = $2;
    return literal.type === "StringLiteral" && (literal = "`" + literal.token.slice(1, -1).replace(/(`|\$\{)/g, "\\$1") + "`"), literal;
  }), ExplicitCallExpressionRest$3 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$E)(OptionalShorthand), ExplicitArguments), function($skip, $loc, $0, $1, $2) {
    var optional = $1, call = $2;
    return optional ? {
      ...call,
      children: [optional, ...call.children],
      optional
    } : call;
  }), ExplicitCallExpressionRest$$ = [ExplicitCallExpressionRest$0, ExplicitCallExpressionRest$1, ExplicitCallExpressionRest$2, ExplicitCallExpressionRest$3];
  function ExplicitCallExpressionRest(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "ExplicitCallExpressionRest", ExplicitCallExpressionRest$$);
  }
  var OptionalShorthand$0 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$EXPECT)($R9, "OptionalShorthand /(?=[\\/?])/"), (0, import_lib2.$Q)(InlineComment), QuestionMark, OptionalDot), function($skip, $loc, $0, $1, $2, $3, $4) {
    var comments = $2, q = $3, d = $4;
    return {
      type: "Optional",
      children: [...comments, q, d]
    };
  });
  function OptionalShorthand(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "OptionalShorthand", OptionalShorthand$0);
  }
  var OptionalDot$0 = (0, import_lib2.$S)((0, import_lib2.$Q)(InlineComment), Dot), OptionalDot$1 = InsertDot, OptionalDot$$ = [OptionalDot$0, OptionalDot$1];
  function OptionalDot(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "OptionalDot", OptionalDot$$);
  }
  var NonNullAssertion$0 = (0, import_lib2.$T)((0, import_lib2.$S)(ExclamationPoint, (0, import_lib2.$N)((0, import_lib2.$C)((0, import_lib2.$EXPECT)($L21, 'NonNullAssertion "^"'), (0, import_lib2.$EXPECT)($L22, 'NonNullAssertion "<?"'), (0, import_lib2.$EXPECT)($L3, 'NonNullAssertion "="')))), function(value) {
    return { type: "NonNullAssertion", ts: !0, children: [value[0]] };
  });
  function NonNullAssertion(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "NonNullAssertion", NonNullAssertion$0);
  }
  var MemberExpression$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(MemberBase, (0, import_lib2.$Q)(MemberExpressionRest)), function($skip, $loc, $0, $1, $2) {
    var rest = $2;
    return rest.length || Array.isArray($1) ? processCallMemberExpression({
      type: "MemberExpression",
      children: [$1, ...rest].flat()
    }) : $1;
  });
  function MemberExpression(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "MemberExpression", MemberExpression$0);
  }
  var ActualMemberExpression$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(MemberBase, (0, import_lib2.$P)(MemberExpressionRest)), function($skip, $loc, $0, $1, $2) {
    var rest = $2;
    return processCallMemberExpression({
      type: "MemberExpression",
      children: [$1, ...rest].flat()
    });
  });
  function ActualMemberExpression(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "ActualMemberExpression", ActualMemberExpression$0);
  }
  var MemberBase$0 = PrimaryExpression, MemberBase$1 = SuperProperty, MemberBase$2 = MetaProperty, MemberBase$$ = [MemberBase$0, MemberBase$1, MemberBase$2];
  function MemberBase(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "MemberBase", MemberBase$$);
  }
  var MemberExpressionRest$0 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$EXPECT)($R10, "MemberExpressionRest /(?=[\\/\\[{?.!@#'\u2019:])/"), (0, import_lib2.$Q)(InlineComment), MemberExpressionRestBody), function($skip, $loc, $0, $1, $2, $3) {
    var comments = $2, body = $3;
    return Array.isArray(body) ? [...comments, ...body] : {
      ...body,
      children: [...comments, ...body.children]
    };
  });
  function MemberExpressionRest(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "MemberExpressionRest", MemberExpressionRest$0);
  }
  var MemberExpressionRestBody$0 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$E)(OptionalShorthand), (0, import_lib2.$Q)(InlineComment), MemberBracketContent), function($skip, $loc, $0, $1, $2, $3) {
    var dot = $1, comments = $2, content = $3;
    return !dot && !comments.length ? content : dot ? dot.type === "Optional" && content.type === "SliceExpression" ? [...dot.children.slice(0, -1), ...comments, content] : {
      ...content,
      children: [dot, ...comments, ...content.children],
      optional: dot
    } : [...comments, content];
  }), MemberExpressionRestBody$1 = PropertyAccess, MemberExpressionRestBody$2 = PropertyGlob, MemberExpressionRestBody$3 = PropertyBind, MemberExpressionRestBody$4 = NonNullAssertion, MemberExpressionRestBody$$ = [MemberExpressionRestBody$0, MemberExpressionRestBody$1, MemberExpressionRestBody$2, MemberExpressionRestBody$3, MemberExpressionRestBody$4];
  function MemberExpressionRestBody(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "MemberExpressionRestBody", MemberExpressionRestBody$$);
  }
  var MemberBracketContent$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(OpenBracket, (0, import_lib2.$C)(SliceParameters, PostfixedExpression), __, CloseBracket), function($skip, $loc, $0, $1, $2, $3, $4) {
    var open = $1, expression = $2, ws = $3, close = $4;
    if (expression.type === "SliceParameters") {
      let { start, end, reversed, children } = expression;
      return {
        type: "SliceExpression",
        start,
        end,
        reversed,
        children: [
          { ...open, token: ".slice(" },
          ...children,
          [...ws, { ...close, token: ")" }]
        ]
      };
    }
    return {
      type: "Index",
      children: $0,
      expression
    };
  }), MemberBracketContent$1 = (0, import_lib2.$TS)((0, import_lib2.$S)(OpenBracket, PostfixedExpression, __, (0, import_lib2.$EXPECT)($R11, "MemberBracketContent /%%?/"), __, CloseBracket), function($skip, $loc, $0, $1, $2, $3, $4, $5, $6) {
    var open = $1, expression = $2, ws1 = $3, ws2 = $5, close = $6;
    return {
      type: "Index",
      children: [open, expression, ws1, ws2, close],
      expression,
      mod: !0
    };
  }), MemberBracketContent$$ = [MemberBracketContent$0, MemberBracketContent$1];
  function MemberBracketContent(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "MemberBracketContent", MemberBracketContent$$);
  }
  var SliceParameters$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(Loc, (0, import_lib2.$E)(Expression), __, RangeDots, Loc, (0, import_lib2.$E)(Expression)), function($skip, $loc, $0, $1, $2, $3, $4, $5, $6) {
    var ls = $1, start = $2, ws = $3, dots = $4, le = $5, end = $6;
    let reversed = dots.increasing === !1, sign = reversed ? "-" : "+", children;
    if (start ??= {
      $loc: ls.$loc,
      token: reversed ? "-1" : "0"
    }, end || (reversed ? end = {
      $loc: le.$loc,
      token: "0"
    } : !dots.right.inclusive && !dots.triple && (end = {
      $loc: le.$loc,
      token: "-1"
    })), dots.left.inclusive || (start = [makeLeftHandSideExpression(start), ` ${sign} 1`]), end) {
      let inc = [];
      dots.right.inclusive && (end = [makeLeftHandSideExpression(end), ` ${sign} 1`], reversed || inc.push(" || 1/0")), children = [start, [...ws, dots.children[0], { token: ", ", $loc: dots.$loc }], [dots.children[1], end, ...inc]];
    } else
      children = [start, ws];
    return {
      type: "SliceParameters",
      start,
      end,
      reversed,
      children
    };
  }), SliceParameters$1 = (0, import_lib2.$TS)((0, import_lib2.$S)(Loc, RangeEnd, Expression), function($skip, $loc, $0, $1, $2, $3) {
    var l = $1, rend = $2, e = $3;
    let start, end, children;
    return rend.increasing ? (end = e, rend.inclusive && (end = [makeLeftHandSideExpression(end), " + 1"]), start = {
      $loc: l.$loc,
      token: "0"
    }, children = [start, ", ", end]) : (start = e, rend.inclusive || (start = [makeLeftHandSideExpression(start), " + 1"]), children = [start]), {
      type: "SliceParameters",
      start,
      end,
      children
    };
  }), SliceParameters$$ = [SliceParameters$0, SliceParameters$1];
  function SliceParameters(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "SliceParameters", SliceParameters$$);
  }
  var AccessStart$0 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$E)(PropertyAccessModifier), Dot, (0, import_lib2.$N)((0, import_lib2.$EXPECT)($R12, "AccessStart /[.\\s]/"))), function($skip, $loc, $0, $1, $2, $3) {
    var modifier = $1, dot = $2;
    return {
      type: "AccessStart",
      children: modifier ? [modifier, dot] : [dot],
      optional: modifier?.token === "?"
    };
  }), AccessStart$1 = (0, import_lib2.$TS)((0, import_lib2.$S)(PropertyAccessModifier, InsertDot, (0, import_lib2.$N)((0, import_lib2.$EXPECT)($R12, "AccessStart /[.\\s]/"))), function($skip, $loc, $0, $1, $2, $3) {
    var modifier = $1, dot = $2;
    return {
      type: "AccessStart",
      children: [modifier, dot],
      optional: modifier.token === "?"
    };
  }), AccessStart$$ = [AccessStart$0, AccessStart$1];
  function AccessStart(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "AccessStart", AccessStart$$);
  }
  var ExplicitAccessStart$0 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$E)(PropertyAccessModifier), Dot, (0, import_lib2.$N)(Dot)), function($skip, $loc, $0, $1, $2, $3) {
    var modifier = $1, dot = $2;
    return {
      type: "AccessStart",
      children: modifier ? [modifier, dot] : [dot],
      optional: modifier?.token === "?"
    };
  });
  function ExplicitAccessStart(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "ExplicitAccessStart", ExplicitAccessStart$0);
  }
  var ImplicitAccessStart$0 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$E)(PropertyAccessModifier), InsertDot, (0, import_lib2.$N)(Dot)), function($skip, $loc, $0, $1, $2, $3) {
    var modifier = $1, dot = $2;
    return {
      type: "AccessStart",
      children: modifier ? [modifier, dot] : [dot],
      optional: modifier?.token === "?"
    };
  });
  function ImplicitAccessStart(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "ImplicitAccessStart", ImplicitAccessStart$0);
  }
  var PropertyAccessModifier$0 = QuestionMark, PropertyAccessModifier$1 = NonNullAssertion, PropertyAccessModifier$$ = [PropertyAccessModifier$0, PropertyAccessModifier$1];
  function PropertyAccessModifier(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "PropertyAccessModifier", PropertyAccessModifier$$);
  }
  var PropertyAccess$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(AccessStart, (0, import_lib2.$C)(TemplateLiteral, StringLiteral, IntegerLiteral, SymbolLiteral)), function($skip, $loc, $0, $1, $2) {
    var dot = $1, literal = $2;
    return {
      type: "Index",
      children: [
        adjustIndexAccess(dot),
        literal,
        "]"
      ]
    };
  }), PropertyAccess$1 = (0, import_lib2.$TS)((0, import_lib2.$S)(AccessStart, (0, import_lib2.$EXPECT)($L23, 'PropertyAccess "-"'), IntegerLiteral), function($skip, $loc, $0, $1, $2, $3) {
    var dot = $1, neg = $2, num = $3;
    let len3 = {
      children: []
    };
    return {
      type: "NegativeIndex",
      children: [
        adjustIndexAccess(dot),
        len3,
        neg,
        num,
        "]"
      ],
      len: len3
    };
  }), PropertyAccess$2 = (0, import_lib2.$TS)((0, import_lib2.$S)(AccessStart, (0, import_lib2.$Q)(InlineComment), (0, import_lib2.$C)(IdentifierName, PrivateIdentifier, LengthShorthand)), function($skip, $loc, $0, $1, $2, $3) {
    var dot = $1, comments = $2, id = $3;
    return {
      type: "PropertyAccess",
      name: id.name,
      dot,
      children: [dot, ...comments, ...id.children]
    };
  }), PropertyAccess$3 = (0, import_lib2.$TS)((0, import_lib2.$S)(ImplicitAccessStart, (0, import_lib2.$C)(PrivateIdentifier, LengthShorthand)), function($skip, $loc, $0, $1, $2) {
    var dot = $1, id = $2;
    return {
      type: "PropertyAccess",
      name: id.name,
      dot,
      children: [dot, ...id.children]
    };
  }), PropertyAccess$4 = (0, import_lib2.$TS)((0, import_lib2.$S)(CoffeePrototypeEnabled, (0, import_lib2.$E)(PropertyAccessModifier), DoubleColon, (0, import_lib2.$E)(IdentifierName)), function($skip, $loc, $0, $1, $2, $3, $4) {
    var modifier = $2, p = $3, id = $4;
    let dot = { token: ".", $loc: p.$loc }, start = {
      type: "AccessStart",
      children: modifier ? [modifier, dot] : [dot],
      optional: modifier?.token === "?"
    };
    return id ? {
      type: "PropertyAccess",
      name: id.name,
      dot: start,
      children: [start, "prototype.", id]
    } : {
      type: "PropertyAccess",
      name: "prototype",
      dot: start,
      children: [start, "prototype"]
    };
  }), PropertyAccess$$ = [PropertyAccess$0, PropertyAccess$1, PropertyAccess$2, PropertyAccess$3, PropertyAccess$4];
  function PropertyAccess(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "PropertyAccess", PropertyAccess$$);
  }
  var ExplicitPropertyGlob$0 = (0, import_lib2.$T)((0, import_lib2.$S)((0, import_lib2.$Y)(ExplicitAccessStart), PropertyGlob), function(value) {
    return value[1];
  });
  function ExplicitPropertyGlob(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "ExplicitPropertyGlob", ExplicitPropertyGlob$0);
  }
  var PropertyGlob$0 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$S)((0, import_lib2.$E)(PropertyAccessModifier), OptionalDot), (0, import_lib2.$Q)(InlineComment), BracedObjectLiteral), function($skip, $loc, $0, $1, $2, $3) {
    var dot = $1, object = $3;
    return {
      type: "PropertyGlob",
      dot,
      object,
      children: $0
    };
  });
  function PropertyGlob(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "PropertyGlob", PropertyGlob$0);
  }
  var PropertyBind$0 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$E)(PropertyAccessModifier), At, OptionalDot, (0, import_lib2.$C)(IdentifierName, PrivateIdentifier), (0, import_lib2.$E)(Arguments)), function($skip, $loc, $0, $1, $2, $3, $4, $5) {
    var modifier = $1, dot = $3, id = $4, args = $5;
    return {
      type: "PropertyBind",
      name: id.name,
      children: [modifier, dot, id],
      // omit `@` from children
      args: args?.children.slice(1, -1) ?? []
      // remove the parens from the arg list, or give an empty list
    };
  });
  function PropertyBind(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "PropertyBind", PropertyBind$0);
  }
  var PropertyBindExplicitArguments$0 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$E)(PropertyAccessModifier), At, OptionalDot, (0, import_lib2.$C)(IdentifierName, PrivateIdentifier), (0, import_lib2.$E)(ExplicitArguments)), function($skip, $loc, $0, $1, $2, $3, $4, $5) {
    var modifier = $1, dot = $3, id = $4, args = $5;
    return {
      type: "PropertyBind",
      name: id.name,
      children: [modifier, dot, id],
      // omit `@` from children
      args: args?.children.slice(1, -1) ?? []
      // remove the parens from the arg list, or give an empty list
    };
  });
  function PropertyBindExplicitArguments(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "PropertyBindExplicitArguments", PropertyBindExplicitArguments$0);
  }
  var SuperProperty$0 = (0, import_lib2.$S)(Super, MemberBracketContent), SuperProperty$1 = (0, import_lib2.$S)(Super, (0, import_lib2.$N)(PropertyAccessModifier), PropertyAccess), SuperProperty$$ = [SuperProperty$0, SuperProperty$1];
  function SuperProperty(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "SuperProperty", SuperProperty$$);
  }
  var MetaProperty$0 = (0, import_lib2.$S)(New, Dot, Target), MetaProperty$1 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$EXPECT)($L24, 'MetaProperty "import.meta"'), NonIdContinue), function($skip, $loc, $0, $1, $2) {
    return { $loc, token: $1 };
  }), MetaProperty$2 = ReturnValue, MetaProperty$$ = [MetaProperty$0, MetaProperty$1, MetaProperty$2];
  function MetaProperty(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "MetaProperty", MetaProperty$$);
  }
  var ReturnValue$0 = (0, import_lib2.$TV)((0, import_lib2.$C)((0, import_lib2.$S)((0, import_lib2.$EXPECT)($L25, 'ReturnValue "return.value"'), NonIdContinue), (0, import_lib2.$S)(Return, (0, import_lib2.$Y)(AfterReturnShorthand))), function($skip, $loc, $0, $1) {
    return { type: "ReturnValue", children: [$1[0]] };
  });
  function ReturnValue(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "ReturnValue", ReturnValue$0);
  }
  var AfterReturnShorthand$0 = WAssignmentOp, AfterReturnShorthand$1 = UpdateExpressionSymbol, AfterReturnShorthand$2 = TypeSuffix, AfterReturnShorthand$3 = (0, import_lib2.$S)(__, LetAssignment), AfterReturnShorthand$4 = (0, import_lib2.$S)(__, ConstAssignment), AfterReturnShorthand$$ = [AfterReturnShorthand$0, AfterReturnShorthand$1, AfterReturnShorthand$2, AfterReturnShorthand$3, AfterReturnShorthand$4];
  function AfterReturnShorthand(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "AfterReturnShorthand", AfterReturnShorthand$$);
  }
  var Parameters$0 = NonEmptyParameters, Parameters$1 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$E)(TypeParameters), Loc), function($skip, $loc, $0, $1, $2) {
    var tp = $1, p = $2;
    let parameters = [];
    return {
      type: "Parameters",
      children: [tp, { $loc: p.$loc, token: "(" }, parameters, ")"],
      tp,
      parameters,
      names: [],
      implicit: !0
    };
  }), Parameters$$ = [Parameters$0, Parameters$1];
  function Parameters(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "Parameters", Parameters$$);
  }
  var ShortArrowParameters$0 = (0, import_lib2.$TV)((0, import_lib2.$C)(ObjectBindingPattern, ArrayBindingPattern), function($skip, $loc, $0, $1) {
    var binding = $0;
    let { typeSuffix } = binding;
    return {
      type: "Parameter",
      children: [binding, typeSuffix],
      names: binding.names,
      typeSuffix
    };
  });
  function ShortArrowParameters(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "ShortArrowParameters", ShortArrowParameters$0);
  }
  var ArrowParameters$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(ShortArrowParameters), function($skip, $loc, $0, $1) {
    let parameters = [$1];
    return {
      type: "Parameters",
      children: ["(", parameters, ")"],
      parameters
    };
  }), ArrowParameters$1 = Parameters, ArrowParameters$$ = [ArrowParameters$0, ArrowParameters$1];
  function ArrowParameters(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "ArrowParameters", ArrowParameters$$);
  }
  var NonEmptyParameters$0 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$E)(TypeParameters), OpenParen, ParameterList, (0, import_lib2.$S)(__, CloseParen)), function($skip, $loc, $0, $1, $2, $3, $4) {
    var tp = $1, open = $2, parameters = $3, close = $4;
    return {
      type: "Parameters",
      children: [tp, open, parameters, close],
      tp,
      parameters
    };
  });
  function NonEmptyParameters(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "NonEmptyParameters", NonEmptyParameters$0);
  }
  var ParameterList$0 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$Q)(Parameter), NestedParameterList), function($skip, $loc, $0, $1, $2) {
    return [...$1, ...$2];
  }), ParameterList$1 = (0, import_lib2.$TV)((0, import_lib2.$Q)((0, import_lib2.$S)(__, Parameter)), function($skip, $loc, $0, $1) {
    return $1.map(([eos, p]) => ({
      ...p,
      children: [eos, ...p.children]
    }));
  }), ParameterList$$ = [ParameterList$0, ParameterList$1];
  function ParameterList(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "ParameterList", ParameterList$$);
  }
  var NestedParameterList$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(PushIndent, (0, import_lib2.$Q)(NestedParameter), PopIndent), function($skip, $loc, $0, $1, $2, $3) {
    var params = $2;
    return params.length ? params : $skip;
  });
  function NestedParameterList(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "NestedParameterList", NestedParameterList$0);
  }
  var NestedParameter$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(Nested, (0, import_lib2.$P)(Parameter)), function($skip, $loc, $0, $1, $2) {
    var ws = $1, params = $2;
    return params = [...params], params[0] = prepend(ws, params[0]), params;
  });
  function NestedParameter(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "NestedParameter", NestedParameter$0);
  }
  var Parameter$0 = ThisType, Parameter$1 = ParameterElement, Parameter$2 = FunctionRestParameter, Parameter$$ = [Parameter$0, Parameter$1, Parameter$2];
  function Parameter(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "Parameter", Parameter$$);
  }
  var FunctionRestParameter$0 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$N)(EOS), BindingRestElement, (0, import_lib2.$E)(TypeSuffix), ParameterElementDelimiter), function($skip, $loc, $0, $1, $2, $3, $4) {
    var rest = $2, typeSuffix = $3;
    return {
      type: "FunctionRestParameter",
      children: $0.slice(1),
      rest,
      names: rest.names,
      binding: rest.binding,
      typeSuffix
    };
  });
  function FunctionRestParameter(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "FunctionRestParameter", FunctionRestParameter$0);
  }
  var ParameterElement$0 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$E)(_), (0, import_lib2.$E)(AccessModifier), (0, import_lib2.$E)(_), (0, import_lib2.$C)(BindingPattern, NWBindingIdentifier), (0, import_lib2.$E)(TypeSuffix), (0, import_lib2.$E)(Initializer), ParameterElementDelimiter), function($skip, $loc, $0, $1, $2, $3, $4, $5, $6, $7) {
    var accessModifier = $2, binding = $4, typeSuffix = $5, initializer = $6, delim = $7;
    return typeSuffix ??= binding.typeSuffix, {
      type: "Parameter",
      children: [$1, accessModifier, $3, binding, typeSuffix, initializer, delim],
      names: binding.names,
      typeSuffix,
      accessModifier,
      initializer,
      delim,
      binding
    };
  });
  function ParameterElement(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "ParameterElement", ParameterElement$0);
  }
  var ParameterElementDelimiter$0 = (0, import_lib2.$S)((0, import_lib2.$E)(_), Comma), ParameterElementDelimiter$1 = (0, import_lib2.$Y)((0, import_lib2.$S)(__, (0, import_lib2.$R$0)((0, import_lib2.$EXPECT)($R13, "ParameterElementDelimiter /[)\\]}]/")))), ParameterElementDelimiter$2 = (0, import_lib2.$T)((0, import_lib2.$S)((0, import_lib2.$Y)(EOS), InsertComma), function(value) {
    return value[1];
  }), ParameterElementDelimiter$$ = [ParameterElementDelimiter$0, ParameterElementDelimiter$1, ParameterElementDelimiter$2];
  function ParameterElementDelimiter(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "ParameterElementDelimiter", ParameterElementDelimiter$$);
  }
  var BindingIdentifier$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(__, NWBindingIdentifier), function($skip, $loc, $0, $1, $2) {
    var ws = $1, identifier = $2;
    return prepend(ws, identifier);
  });
  function BindingIdentifier(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "BindingIdentifier", BindingIdentifier$0);
  }
  var NWBindingIdentifier$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(At, AtIdentifierRef), function($skip, $loc, $0, $1, $2) {
    var ref = $2;
    return {
      type: "AtBinding",
      children: [ref],
      ref,
      names: []
    };
  }), NWBindingIdentifier$1 = (0, import_lib2.$TS)((0, import_lib2.$S)(Hash, AtIdentifierRef), function($skip, $loc, $0, $1, $2) {
    var ref = $2;
    return ref = { ...ref, id: `#${ref.id}` }, {
      type: "AtBinding",
      children: [ref],
      ref,
      names: []
    };
  }), NWBindingIdentifier$2 = Identifier, NWBindingIdentifier$3 = (0, import_lib2.$TS)((0, import_lib2.$S)(ReturnValue), function($skip, $loc, $0, $1) {
    return { children: [$1], names: [] };
  }), NWBindingIdentifier$$ = [NWBindingIdentifier$0, NWBindingIdentifier$1, NWBindingIdentifier$2, NWBindingIdentifier$3];
  function NWBindingIdentifier(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "NWBindingIdentifier", NWBindingIdentifier$$);
  }
  var AtIdentifierRef$0 = (0, import_lib2.$TV)(ReservedWord, function($skip, $loc, $0, $1) {
    var r = $0;
    return makeRef(`_${r}`, r);
  }), AtIdentifierRef$1 = (0, import_lib2.$TV)(IdentifierName, function($skip, $loc, $0, $1) {
    var id = $0;
    return makeRef(id.name);
  }), AtIdentifierRef$$ = [AtIdentifierRef$0, AtIdentifierRef$1];
  function AtIdentifierRef(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "AtIdentifierRef", AtIdentifierRef$$);
  }
  var PinPattern$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(Caret, IdentifierName, (0, import_lib2.$Y)(Colon)), function($skip, $loc, $0, $1, $2, $3) {
    var expression = $2;
    return {
      type: "PinPattern",
      children: [expression],
      expression
    };
  }), PinPattern$1 = (0, import_lib2.$TS)((0, import_lib2.$S)(Caret, SingleLineExpressionWithIndentedApplicationForbidden), function($skip, $loc, $0, $1, $2) {
    var expression = $2;
    return {
      type: "PinPattern",
      children: [expression],
      expression
    };
  }), PinPattern$2 = (0, import_lib2.$TV)(ActualMemberExpression, function($skip, $loc, $0, $1) {
    var expression = $0;
    return {
      type: "PinPattern",
      children: [expression],
      expression
    };
  }), PinPattern$3 = (0, import_lib2.$TV)((0, import_lib2.$S)((0, import_lib2.$EXPECT)($R14, "PinPattern /[+-]/"), NumericLiteral), function($skip, $loc, $0, $1) {
    var expression = $0;
    return {
      type: "PinPattern",
      children: [expression],
      expression
    };
  }), PinPattern$4 = (0, import_lib2.$TV)(Undefined, function($skip, $loc, $0, $1) {
    var expression = $0;
    return {
      type: "PinPattern",
      children: [expression],
      expression
    };
  }), PinPattern$$ = [PinPattern$0, PinPattern$1, PinPattern$2, PinPattern$3, PinPattern$4];
  function PinPattern(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "PinPattern", PinPattern$$);
  }
  var NamedBindingPattern$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(BindingIdentifier, Caret, (0, import_lib2.$E)(_), BindingPattern), function($skip, $loc, $0, $1, $2, $3, $4) {
    var binding = $1, ws = $3, pattern = $4;
    return pattern = prepend(ws, pattern), {
      type: "NamedBindingPattern",
      // NOTE: children just has binding, not pattern, for easy destructuring
      children: [binding],
      binding,
      pattern,
      subbinding: [pattern, " = ", binding],
      typeSuffix: pattern.typeSuffix
    };
  });
  function NamedBindingPattern(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "NamedBindingPattern", NamedBindingPattern$0);
  }
  var BindingPattern$0 = ObjectBindingPattern, BindingPattern$1 = ArrayBindingPattern, BindingPattern$2 = PinPattern, BindingPattern$3 = Literal, BindingPattern$4 = RegularExpressionLiteral, BindingPattern$5 = NamedBindingPattern, BindingPattern$$ = [BindingPattern$0, BindingPattern$1, BindingPattern$2, BindingPattern$3, BindingPattern$4, BindingPattern$5];
  function BindingPattern(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "BindingPattern", BindingPattern$$);
  }
  var ObjectBindingPattern$0 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$E)(_), OpenBrace, ObjectBindingPatternContent, __, CloseBrace), function($skip, $loc, $0, $1, $2, $3, $4, $5) {
    var ws1 = $1, open = $2, c = $3, ws2 = $4, close = $5;
    let properties = c.children;
    return gatherBindingPatternTypeSuffix({
      type: "ObjectBindingPattern",
      children: [ws1, open, properties, ws2, close],
      names: c.names,
      properties
    });
  });
  function ObjectBindingPattern(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "ObjectBindingPattern", ObjectBindingPattern$0);
  }
  var ObjectBindingPatternContent$0 = NestedBindingProperties, ObjectBindingPatternContent$1 = (0, import_lib2.$TV)((0, import_lib2.$E)(BindingPropertyList), function($skip, $loc, $0, $1) {
    var props = $0;
    return props ? reorderBindingRestProperty(props) : { children: [], names: [] };
  }), ObjectBindingPatternContent$$ = [ObjectBindingPatternContent$0, ObjectBindingPatternContent$1];
  function ObjectBindingPatternContent(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "ObjectBindingPatternContent", ObjectBindingPatternContent$$);
  }
  var BindingPropertyList$0 = (0, import_lib2.$TV)((0, import_lib2.$P)((0, import_lib2.$S)(BindingProperty, ObjectPropertyDelimiter)), function($skip, $loc, $0, $1) {
    var props = $0;
    return props.map(([prop, delim]) => ({
      ...prop,
      delim,
      children: [...prop.children, delim]
    }));
  });
  function BindingPropertyList(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "BindingPropertyList", BindingPropertyList$0);
  }
  var ArrayBindingPattern$0 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$E)(_), OpenBracket, ArrayBindingPatternContent, __, CloseBracket), function($skip, $loc, $0, $1, $2, $3, $4, $5) {
    var ws1 = $1, open = $2, c = $3, ws2 = $4, close = $5;
    return gatherBindingPatternTypeSuffix({
      ...c,
      // names, blockPrefix, length
      type: "ArrayBindingPattern",
      elements: c.children,
      children: [ws1, open, c.children, ws2, close]
    });
  });
  function ArrayBindingPattern(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "ArrayBindingPattern", ArrayBindingPattern$0);
  }
  var ArrayBindingPatternContent$0 = NestedBindingElements, ArrayBindingPatternContent$1 = (0, import_lib2.$TV)((0, import_lib2.$E)(BindingElementList), function($skip, $loc, $0, $1) {
    var elements = $0;
    return elements ? adjustBindingElements(elements) : { children: [], names: [], length: 0 };
  }), ArrayBindingPatternContent$$ = [ArrayBindingPatternContent$0, ArrayBindingPatternContent$1];
  function ArrayBindingPatternContent(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "ArrayBindingPatternContent", ArrayBindingPatternContent$$);
  }
  var BindingElementList$0 = (0, import_lib2.$TV)((0, import_lib2.$P)((0, import_lib2.$S)(BindingElement, ArrayElementDelimiter)), function($skip, $loc, $0, $1) {
    var elements = $0;
    return elements.map(([element, delim]) => ({
      ...element,
      delim,
      // BindingElement.children is a tuple of the form [ws, element]
      children: [...element.children, delim]
    }));
  });
  function BindingElementList(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "BindingElementList", BindingElementList$0);
  }
  var NestedBindingElementList$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(Nested, BindingElementList), function($skip, $loc, $0, $1, $2) {
    var indent = $1, elements = $2;
    return elements.map((element, i) => i > 0 ? element : {
      ...element,
      children: [indent, ...element.children.slice(1)]
      // replace ws wth indent
    });
  });
  function NestedBindingElementList(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "NestedBindingElementList", NestedBindingElementList$0);
  }
  var Elision$0 = (0, import_lib2.$S)(__, Comma);
  function Elision(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "Elision", Elision$0);
  }
  var NestedBindingProperties$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(PushIndent, (0, import_lib2.$Q)(NestedBindingPropertyList), PopIndent), function($skip, $loc, $0, $1, $2, $3) {
    var props = $2;
    return props.length ? reorderBindingRestProperty(props.flat()) : $skip;
  });
  function NestedBindingProperties(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "NestedBindingProperties", NestedBindingProperties$0);
  }
  var NestedBindingPropertyList$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(Nested, BindingPropertyList), function($skip, $loc, $0, $1, $2) {
    var ws = $1, props = $2;
    return props.map((prop, i) => i > 0 ? prop : prepend(ws, prop));
  });
  function NestedBindingPropertyList(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "NestedBindingPropertyList", NestedBindingPropertyList$0);
  }
  var BindingProperty$0 = BindingRestProperty, BindingProperty$1 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$E)(_), PropertyName, (0, import_lib2.$E)(Caret), (0, import_lib2.$E)(_), Colon, (0, import_lib2.$E)(_), (0, import_lib2.$C)(BindingPattern, BindingIdentifier), (0, import_lib2.$E)(BindingTypeSuffix), (0, import_lib2.$E)(Initializer)), function($skip, $loc, $0, $1, $2, $3, $4, $5, $6, $7, $8, $9) {
    var ws1 = $1, name = $2, bind = $3, ws2 = $4, colon = $5, ws3 = $6, value = $7, typeSuffix = $8, initializer = $9;
    if (bind) {
      let binding = name, pattern = value;
      value = {
        type: "NamedBindingPattern",
        // NOTE: children just has binding, not pattern, for easy destructuring
        children: [binding],
        binding,
        pattern,
        subbinding: [pattern, " = ", binding],
        typeSuffix: pattern.typeSuffix,
        names: value.names
      };
    }
    return {
      type: "BindingProperty",
      children: [ws1, name, ws2, colon, ws3, value, initializer],
      // omit typeSuffix
      name,
      value,
      typeSuffix,
      initializer,
      names: value.names
    };
  }), BindingProperty$2 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$E)(_), Caret, BindingIdentifier, (0, import_lib2.$E)(BindingTypeSuffix), (0, import_lib2.$E)(Initializer)), function($skip, $loc, $0, $1, $2, $3, $4, $5) {
    var ws = $1, pin = $2, binding = $3, typeSuffix = $4, initializer = $5;
    let children = [ws, binding];
    return binding.type === "AtBinding" && children.push({
      type: "Error",
      message: "Pinned properties do not yet work with @binding"
    }), typeSuffix && children.push({
      type: "Error",
      message: "Pinned properties cannot have type annotations"
    }), initializer && children.push({
      type: "Error",
      message: "Pinned properties cannot have initializers"
    }), {
      type: "PinProperty",
      children,
      name: binding,
      value: {
        type: "PinPattern",
        children: [binding],
        expression: binding
      }
    };
  }), BindingProperty$3 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$E)(_), BindingIdentifier, (0, import_lib2.$E)(Caret), (0, import_lib2.$E)(BindingTypeSuffix), (0, import_lib2.$E)(Initializer)), function($skip, $loc, $0, $1, $2, $3, $4, $5) {
    var ws = $1, binding = $2, bind = $3, typeSuffix = $4, initializer = $5;
    let children = [ws, binding, initializer];
    return binding.type === "AtBinding" ? {
      type: "AtBindingProperty",
      children,
      binding,
      typeSuffix,
      ref: binding.ref,
      initializer,
      names: []
    } : {
      type: "BindingProperty",
      children,
      name: binding,
      value: void 0,
      typeSuffix,
      initializer,
      names: binding.names,
      identifier: binding
    };
  }), BindingProperty$$ = [BindingProperty$0, BindingProperty$1, BindingProperty$2, BindingProperty$3];
  function BindingProperty(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "BindingProperty", BindingProperty$$);
  }
  var BindingRestProperty$0 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$E)(_), DotDotDot, BindingIdentifier, (0, import_lib2.$E)(BindingTypeSuffix)), function($skip, $loc, $0, $1, $2, $3, $4) {
    var ws = $1, dots = $2, id = $3, typeSuffix = $4;
    return {
      ...id,
      type: "BindingRestProperty",
      typeSuffix,
      children: [...ws || [], dots, ...id.children]
    };
  }), BindingRestProperty$1 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$E)(_), BindingIdentifier, DotDotDot), function($skip, $loc, $0, $1, $2, $3) {
    var ws = $1, id = $2, dots = $3;
    return {
      ...id,
      type: "BindingRestProperty",
      typeSuffix: void 0,
      children: [...ws || [], dots, ...id.children]
    };
  }), BindingRestProperty$$ = [BindingRestProperty$0, BindingRestProperty$1];
  function BindingRestProperty(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "BindingRestProperty", BindingRestProperty$$);
  }
  var BindingTypeSuffix$0 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$E)(_), (0, import_lib2.$E)(QuestionMark), (0, import_lib2.$E)(_), DoubleColonAsColon, MaybeNestedType), function($skip, $loc, $0, $1, $2, $3, $4, $5) {
    var optional = $2, colon = $4, t = $5;
    return {
      type: "TypeSuffix",
      ts: !0,
      optional,
      t,
      children: $0
    };
  });
  function BindingTypeSuffix(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "BindingTypeSuffix", BindingTypeSuffix$0);
  }
  var NestedBindingElements$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(PushIndent, (0, import_lib2.$Q)(NestedBindingElementList), PopIndent), function($skip, $loc, $0, $1, $2, $3) {
    var elements = $2;
    return elements.length ? adjustBindingElements(elements.flat()) : $skip;
  });
  function NestedBindingElements(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "NestedBindingElements", NestedBindingElements$0);
  }
  var BindingElement$0 = BindingRestElement, BindingElement$1 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$E)(_), (0, import_lib2.$C)(BindingPattern, BindingIdentifier), (0, import_lib2.$E)(BindingTypeSuffix), (0, import_lib2.$E)(Initializer)), function($skip, $loc, $0, $1, $2, $3, $4) {
    var ws = $1, binding = $2, typeSuffix = $3, initializer = $4;
    return {
      type: "BindingElement",
      names: binding.names,
      typeSuffix,
      binding,
      children: [ws, binding, initializer],
      initializer
    };
  }), BindingElement$2 = (0, import_lib2.$TV)((0, import_lib2.$Y)((0, import_lib2.$S)((0, import_lib2.$E)(_), (0, import_lib2.$EXPECT)($L26, 'BindingElement ","'))), function($skip, $loc, $0, $1) {
    return {
      type: "ElisionElement",
      children: [""],
      names: []
    };
  }), BindingElement$$ = [BindingElement$0, BindingElement$1, BindingElement$2];
  function BindingElement(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "BindingElement", BindingElement$$);
  }
  var BindingRestElement$0 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$E)(_), DotDotDot, (0, import_lib2.$C)(BindingPattern, BindingIdentifier, EmptyBindingPattern), (0, import_lib2.$E)(BindingTypeSuffix)), function($skip, $loc, $0, $1, $2, $3, $4) {
    var ws = $1, dots = $2, binding = $3, typeSuffix = $4;
    return {
      type: "BindingRestElement",
      children: [ws, dots, binding],
      dots,
      binding,
      typeSuffix,
      name: binding.name,
      names: binding.names,
      rest: !0
    };
  }), BindingRestElement$1 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$E)(_), (0, import_lib2.$C)(BindingPattern, BindingIdentifier), DotDotDot), function($skip, $loc, $0, $1, $2, $3) {
    var ws = $1, binding = $2, dots = $3;
    return {
      type: "BindingRestElement",
      children: [...ws || [], dots, binding],
      dots,
      binding,
      name: binding.name,
      names: binding.names,
      rest: !0
    };
  }), BindingRestElement$$ = [BindingRestElement$0, BindingRestElement$1];
  function BindingRestElement(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "BindingRestElement", BindingRestElement$$);
  }
  var EmptyBindingPattern$0 = (0, import_lib2.$TV)((0, import_lib2.$EXPECT)($L0, 'EmptyBindingPattern ""'), function($skip, $loc, $0, $1) {
    let ref = makeRef();
    return {
      type: "EmptyBinding",
      children: [ref],
      names: [],
      ref
    };
  });
  function EmptyBindingPattern(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "EmptyBindingPattern", EmptyBindingPattern$0);
  }
  var FunctionDeclaration$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(FunctionExpression), function($skip, $loc, $0, $1) {
    return $1.type !== "FunctionExpression" ? $skip : $1.id ? $1 : makeLeftHandSideExpression($1);
  });
  function FunctionDeclaration(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "FunctionDeclaration", FunctionDeclaration$0);
  }
  var FunctionSignature$0 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$E)((0, import_lib2.$S)(Async, _)), Function2, (0, import_lib2.$E)((0, import_lib2.$S)((0, import_lib2.$E)(_), Star)), (0, import_lib2.$E)((0, import_lib2.$S)((0, import_lib2.$E)(_), NWBindingIdentifier)), (0, import_lib2.$E)(_), Parameters, (0, import_lib2.$E)(ReturnTypeSuffix)), function($skip, $loc, $0, $1, $2, $3, $4, $5, $6, $7) {
    var async = $1, func = $2, generator = $3, wid = $4, w = $5, parameters = $6, returnType = $7;
    async || (async = []), generator || (generator = []);
    let id = wid?.[1];
    return {
      type: "FunctionSignature",
      id,
      name: id?.name,
      parameters,
      returnType,
      async,
      generator,
      modifier: {
        async: !!async.length,
        generator: !!generator.length
      },
      block: null,
      children: parameters.implicit ? [async, func, generator, wid, parameters, w, returnType] : [async, func, generator, wid, w, parameters, returnType]
      // move whitespace w to after implicit () in parameters
    };
  });
  function FunctionSignature(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "FunctionSignature", FunctionSignature$0);
  }
  var FunctionExpression$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(FunctionSignature, (0, import_lib2.$E)(BracedBlock)), function($skip, $loc, $0, $1, $2) {
    var signature = $1, block = $2;
    return block ? {
      ...signature,
      type: "FunctionExpression",
      signature,
      children: [...signature.children, block],
      block
    } : {
      ...signature,
      type: "FunctionExpression",
      signature,
      ts: !0
    };
  }), FunctionExpression$1 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$N)(ArrowFunction), OpenParen, __, BinaryOp, __, CloseParen), function($skip, $loc, $0, $1, $2, $3, $4, $5, $6) {
    var open = $2, ws1 = $3, op = $4, ws2 = $5, close = $6;
    if (op.special && op.call && !op.negated) return op.call;
    ws1 || (ws1 = op.spaced ? [" "] : []), ws2 || (ws2 = op.spaced ? [" "] : []);
    let refA = makeRef("a"), refB = makeRef("b"), body = processBinaryOpExpression([refA, [
      [ws1, op, ws2, refB]
      // BinaryOpRHS
    ]]), parameterList = [[refA, ","], refB], parameters = {
      type: "Parameters",
      children: ["(", parameterList, ")"],
      parameters: parameterList
    };
    return {
      type: "ArrowFunction",
      signature: {
        modifier: {}
      },
      children: [open, parameters, " => ", body, close],
      body,
      parenthesized: !0,
      parenthesizedOp: op,
      block: {
        expressions: [body]
      },
      parameters
    };
  }), FunctionExpression$2 = (0, import_lib2.$TS)((0, import_lib2.$S)(OpenParen, NonPipelineAssignmentExpression, __, BinaryOp, __, CloseParen), function($skip, $loc, $0, $1, $2, $3, $4, $5, $6) {
    var open = $1, lhs = $2, ws1 = $3, op = $4, ws2 = $5, close = $6;
    ws1 || (ws1 = op.spaced ? [" "] : []), ws2 || (ws2 = op.spaced ? [" "] : []);
    let refB = makeRef("b"), fn = makeAmpersandFunction({
      ref: refB,
      body: processBinaryOpExpression([lhs, [
        [ws1, op, ws2, refB]
        // BinaryOpRHS
      ]])
    });
    return {
      type: "ParenthesizedExpression",
      children: [open, fn, close],
      expression: fn
    };
  }), FunctionExpression$3 = (0, import_lib2.$TS)((0, import_lib2.$S)(OpenParen, (0, import_lib2.$P)((0, import_lib2.$S)(NotDedented, UpdateExpression, WAssignmentOp)), __, CloseParen), function($skip, $loc, $0, $1, $2, $3, $4) {
    var open = $1, lhs = $2, ws2 = $3, close = $4;
    lhs = lhs.map((x) => [x[0], x[1], ...x[2]]);
    let refB = makeRef("b"), fn = makeAmpersandFunction({
      ref: refB,
      body: {
        type: "AssignmentExpression",
        children: [lhs, ws2, refB],
        names: null,
        lhs,
        assigned: lhs[0][1],
        expression: refB
      }
    });
    return {
      type: "ParenthesizedExpression",
      children: [open, fn, close],
      expression: fn
    };
  }), FunctionExpression$4 = (0, import_lib2.$TS)((0, import_lib2.$S)(OpenParen, __, IsLike, __, PatternExpressionList, CloseParen), function($skip, $loc, $0, $1, $2, $3, $4, $5, $6) {
    var open = $1, ws1 = $2, op = $3, ws2 = $4, rhs = $5, close = $6;
    let refA = makeRef("a"), fn = makeAmpersandFunction({
      ref: refA,
      body: processBinaryOpExpression([refA, [
        [ws1, op, ws2, rhs]
        // BinaryOpRHS
      ]])
    });
    return {
      type: "ParenthesizedExpression",
      children: [open, fn, close],
      expression: fn
    };
  }), FunctionExpression$5 = (0, import_lib2.$TS)((0, import_lib2.$S)(OpenParen, __, (0, import_lib2.$N)((0, import_lib2.$EXPECT)($R15, "FunctionExpression /\\+\\+|--|\u29FA|\u2014|[\\+\\-&]\\S/")), (0, import_lib2.$N)((0, import_lib2.$S)(Placeholder, (0, import_lib2.$C)(TypePostfix, BinaryOpRHS))), BinaryOp, __, NonPipelineAssignmentExpression, CloseParen), function($skip, $loc, $0, $1, $2, $3, $4, $5, $6, $7, $8) {
    var open = $1, ws1 = $2, op = $5, ws2 = $6, rhs = $7, close = $8;
    ws1 || (ws1 = op.spaced ? [" "] : []), ws2 || (ws2 = op.spaced ? [" "] : []);
    let refA = makeRef("a"), fn = makeAmpersandFunction({
      ref: refA,
      body: processBinaryOpExpression([refA, [
        [ws1, op, ws2, rhs]
        // BinaryOpRHS
      ]])
    });
    return {
      type: "ParenthesizedExpression",
      children: [open, fn, close],
      expression: fn
    };
  }), FunctionExpression$$ = [FunctionExpression$0, FunctionExpression$1, FunctionExpression$2, FunctionExpression$3, FunctionExpression$4, FunctionExpression$5];
  function FunctionExpression(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "FunctionExpression", FunctionExpression$$);
  }
  var OperatorDeclaration$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(Operator, (0, import_lib2.$E)(OperatorBehavior), _, LexicalDeclaration), function($skip, $loc, $0, $1, $2, $3, $4) {
    var op = $1, behavior = $2, w = $3, decl = $4;
    return decl.names.forEach((name) => state.operators.set(name, behavior)), behavior?.error && (decl = prepend(behavior.error, decl)), decl = prepend(trimFirstSpace(w), decl), decl;
  }), OperatorDeclaration$1 = (0, import_lib2.$TS)((0, import_lib2.$S)(OperatorSignature, BracedBlock), function($skip, $loc, $0, $1, $2) {
    var signature = $1, block = $2;
    return state.operators.set(signature.id.name, signature.behavior), {
      ...signature,
      type: "FunctionExpression",
      signature,
      children: [...signature.children, block],
      block,
      operator: !0
    };
  }), OperatorDeclaration$2 = (0, import_lib2.$TS)((0, import_lib2.$S)(Operator, _, Identifier, (0, import_lib2.$E)(OperatorBehavior), (0, import_lib2.$Q)((0, import_lib2.$S)(CommaDelimiter, (0, import_lib2.$E)(_), Identifier, (0, import_lib2.$E)(OperatorBehavior)))), function($skip, $loc, $0, $1, $2, $3, $4, $5) {
    var op = $1, w1 = $2, id = $3, behavior = $4, ids = $5;
    let children = [];
    return state.operators.set(id.name, behavior), behavior?.error && children.push(behavior.error), ids.forEach(([, , id2, behavior2]) => {
      state.operators.set(id2.name, behavior2), behavior2?.error && children.push(behavior2.error);
    }), {
      id,
      children
    };
  }), OperatorDeclaration$$ = [OperatorDeclaration$0, OperatorDeclaration$1, OperatorDeclaration$2];
  function OperatorDeclaration(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "OperatorDeclaration", OperatorDeclaration$$);
  }
  var OperatorSignature$0 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$E)((0, import_lib2.$S)(Async, _)), Operator, (0, import_lib2.$E)((0, import_lib2.$S)(_, Function2)), (0, import_lib2.$E)((0, import_lib2.$S)((0, import_lib2.$E)(_), Star)), _, Identifier, (0, import_lib2.$E)(OperatorBehavior), (0, import_lib2.$E)(_), NonEmptyParameters, (0, import_lib2.$E)(ReturnTypeSuffix)), function($skip, $loc, $0, $1, $2, $3, $4, $5, $6, $7, $8, $9, $10) {
    var async = $1, op = $2, func = $3, generator = $4, w1 = $5, id = $6, behavior = $7, w2 = $8, parameters = $9, returnType = $10;
    return async || (async = []), generator || (generator = []), func ? func = [trimFirstSpace(func[0]), func[1]] : func = { $loc: op.$loc, token: "function" }, {
      type: "FunctionSignature",
      id,
      name: id.name,
      parameters,
      returnType,
      async,
      generator,
      modifier: {
        async: !!async.length,
        generator: !!generator.length
      },
      block: null,
      children: [async, func, generator, w1, id, behavior?.error, w2, parameters, returnType],
      behavior
    };
  });
  function OperatorSignature(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "OperatorSignature", OperatorSignature$0);
  }
  var OperatorBehavior$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(OperatorPrecedence, (0, import_lib2.$E)(OperatorAssociativity)), function($skip, $loc, $0, $1, $2) {
    return { ...$1, ...$2 };
  }), OperatorBehavior$1 = (0, import_lib2.$TS)((0, import_lib2.$S)(OperatorAssociativity, (0, import_lib2.$E)(OperatorPrecedence)), function($skip, $loc, $0, $1, $2) {
    return { ...$1, ...$2 };
  }), OperatorBehavior$$ = [OperatorBehavior$0, OperatorBehavior$1];
  function OperatorBehavior(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "OperatorBehavior", OperatorBehavior$$);
  }
  var OperatorPrecedence$0 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$E)(_), (0, import_lib2.$C)((0, import_lib2.$EXPECT)($L27, 'OperatorPrecedence "tighter"'), (0, import_lib2.$EXPECT)($L28, 'OperatorPrecedence "looser"'), (0, import_lib2.$EXPECT)($L29, 'OperatorPrecedence "same"')), NonIdContinue, (0, import_lib2.$E)(_), (0, import_lib2.$C)(Identifier, (0, import_lib2.$S)(OpenParen, BinaryOp, CloseParen))), function($skip, $loc, $0, $1, $2, $3, $4, $5) {
    var mod = $2, op = $5;
    let prec, error;
    switch (op.type === "Identifier" ? state.operators.has(op.name) ? prec = state.operators.get(op.name).prec : (prec = precedenceCustomDefault, error = {
      type: "Error",
      message: `Precedence refers to unknown operator ${op.name}`
    }) : prec = getPrecedence(op[1]), mod) {
      case "tighter":
        prec += precedenceStep;
        break;
      case "looser":
        prec -= precedenceStep;
        break;
    }
    return { prec, error };
  });
  function OperatorPrecedence(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "OperatorPrecedence", OperatorPrecedence$0);
  }
  var OperatorAssociativity$0 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$E)(_), (0, import_lib2.$C)((0, import_lib2.$EXPECT)($L30, 'OperatorAssociativity "left"'), (0, import_lib2.$EXPECT)($L31, 'OperatorAssociativity "right"'), (0, import_lib2.$EXPECT)($L32, 'OperatorAssociativity "non"'), (0, import_lib2.$EXPECT)($L33, 'OperatorAssociativity "relational"'), (0, import_lib2.$EXPECT)($L34, 'OperatorAssociativity "arguments"')), NonIdContinue), function($skip, $loc, $0, $1, $2, $3) {
    var assoc = $2;
    return assoc === "relational" ? { relational: !0, assoc: "non" } : { assoc };
  });
  function OperatorAssociativity(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "OperatorAssociativity", OperatorAssociativity$0);
  }
  var ThinArrowFunction$0 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$E)((0, import_lib2.$S)(Async, _)), ArrowParameters, (0, import_lib2.$E)(ReturnTypeSuffix), (0, import_lib2.$E)(_), Arrow, NoCommaBracedOrEmptyBlock), function($skip, $loc, $0, $1, $2, $3, $4, $5, $6) {
    var async = $1, parameters = $2, returnType = $3, arrow = $5, block = $6;
    async || (async = []);
    let generator = [];
    return {
      type: "FunctionExpression",
      id: void 0,
      parameters,
      returnType,
      async,
      generator,
      block,
      signature: {
        name: void 0,
        async,
        generator,
        modifier: {
          async: !!async.length,
          generator: !!generator.length
        },
        returnType
      },
      children: [
        async,
        { $loc: arrow.$loc, token: "function" },
        generator,
        parameters,
        returnType,
        block
      ]
    };
  });
  function ThinArrowFunction(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "ThinArrowFunction", ThinArrowFunction$0);
  }
  var Arrow$0 = (0, import_lib2.$TV)((0, import_lib2.$C)((0, import_lib2.$EXPECT)($L35, 'Arrow "->"'), (0, import_lib2.$EXPECT)($L36, 'Arrow "\u2192"')), function($skip, $loc, $0, $1) {
    return { $loc, token: "->" };
  });
  function Arrow(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "Arrow", Arrow$0);
  }
  var ExplicitBlock$0 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$E)(_), OpenBrace, AllowAll, (0, import_lib2.$E)((0, import_lib2.$C)(NestedBlockStatements, SingleLineStatements, EmptyBracedContent)), RestoreAll, __, CloseBrace), function($skip, $loc, $0, $1, $2, $3, $4, $5, $6, $7) {
    var ws1 = $1, open = $2, block = $4, ws2 = $6, close = $7;
    return block ? {
      ...block,
      children: [ws1, open, ...block.children, ws2, close],
      bare: !1
    } : $skip;
  }), ExplicitBlock$1 = (0, import_lib2.$TS)((0, import_lib2.$S)(IndentedAtLeast, OpenBrace, AllowAll, (0, import_lib2.$E)((0, import_lib2.$C)(NestedBlockStatements, EmptyBracedContent)), RestoreAll, __, CloseBrace), function($skip, $loc, $0, $1, $2, $3, $4, $5, $6, $7) {
    var ws1 = $1, open = $2, block = $4, ws2 = $6, close = $7;
    return block ? {
      ...block,
      children: [ws1, open, ...block.children, ws2, close],
      bare: !1
    } : $skip;
  }), ExplicitBlock$$ = [ExplicitBlock$0, ExplicitBlock$1];
  function ExplicitBlock(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "ExplicitBlock", ExplicitBlock$$);
  }
  var EmptyBracedContent$0 = (0, import_lib2.$TV)((0, import_lib2.$Y)((0, import_lib2.$S)(__, (0, import_lib2.$EXPECT)($L37, 'EmptyBracedContent "}"'))), function($skip, $loc, $0, $1) {
    let expressions = [];
    return {
      type: "BlockStatement",
      expressions,
      children: [expressions],
      empty: !0
    };
  });
  function EmptyBracedContent(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "EmptyBracedContent", EmptyBracedContent$0);
  }
  var ImplicitNestedBlock$0 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$Y)(EOS), InsertOpenBrace, AllowAll, (0, import_lib2.$E)((0, import_lib2.$S)(NestedBlockStatements, InsertNewline, InsertIndent, InsertCloseBrace)), RestoreAll), function($skip, $loc, $0, $1, $2, $3, $4, $5) {
    var open = $2;
    if (!$4) return $skip;
    let [block, ...tail] = $4;
    return {
      ...block,
      children: [open, ...block.children, ...tail],
      bare: !1
    };
  });
  function ImplicitNestedBlock(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "ImplicitNestedBlock", ImplicitNestedBlock$0);
  }
  var Block$0 = ImplicitNestedBlock, Block$1 = ExplicitBlock, Block$2 = ThenClause, Block$3 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$E)(_), (0, import_lib2.$N)(EOS), DeclarationOrStatement), function($skip, $loc, $0, $1, $2, $3) {
    var ws = $1, s = $3;
    let expressions = [[ws, s]];
    return {
      type: "BlockStatement",
      expressions,
      children: [expressions],
      bare: !0
    };
  }), Block$$ = [Block$0, Block$1, Block$2, Block$3];
  function Block(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "Block", Block$$);
  }
  var BareNestedBlock$0 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$Y)(EOS), AllowAll, (0, import_lib2.$E)(NestedBlockStatements), RestoreAll), function($skip, $loc, $0, $1, $2, $3, $4) {
    return $3 || $skip;
  });
  function BareNestedBlock(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "BareNestedBlock", BareNestedBlock$0);
  }
  var BareBlock$0 = BareNestedBlock, BareBlock$1 = ExplicitBlock, BareBlock$2 = ThenClause, BareBlock$3 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$E)(_), (0, import_lib2.$N)(EOS), Statement), function($skip, $loc, $0, $1, $2, $3) {
    var ws = $1, s = $3;
    let expressions = [[ws, s]];
    return {
      type: "BlockStatement",
      expressions,
      children: [expressions],
      bare: !0
    };
  }), BareBlock$4 = EmptyBareBlock, BareBlock$$ = [BareBlock$0, BareBlock$1, BareBlock$2, BareBlock$3, BareBlock$4];
  function BareBlock(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "BareBlock", BareBlock$$);
  }
  var ThenClause$0 = (0, import_lib2.$T)((0, import_lib2.$S)(Then, ThenBlock), function(value) {
    return value[1];
  });
  function ThenClause(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "ThenClause", ThenClause$0);
  }
  var ThenBlock$0 = (0, import_lib2.$T)((0, import_lib2.$S)(NoBlock, EmptyBlock), function(value) {
    return value[1];
  }), ThenBlock$1 = ImplicitNestedBlock, ThenBlock$2 = SingleLineStatements, ThenBlock$$ = [ThenBlock$0, ThenBlock$1, ThenBlock$2];
  function ThenBlock(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "ThenBlock", ThenBlock$$);
  }
  var BracedThenClause$0 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$Y)(Then), InsertOpenBrace, ThenClause, InsertCloseBrace), function($skip, $loc, $0, $1, $2, $3, $4) {
    var open = $2, exp = $3, close = $4;
    let expressions = [exp];
    return {
      type: "BlockStatement",
      expressions,
      children: [open, expressions, " ", close],
      bare: !1
    };
  });
  function BracedThenClause(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "BracedThenClause", BracedThenClause$0);
  }
  var BracedOrEmptyBlock$0 = BracedBlock, BracedOrEmptyBlock$1 = EmptyBlock, BracedOrEmptyBlock$$ = [BracedOrEmptyBlock$0, BracedOrEmptyBlock$1];
  function BracedOrEmptyBlock(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "BracedOrEmptyBlock", BracedOrEmptyBlock$$);
  }
  var NoCommaBracedOrEmptyBlock$0 = NoCommaBracedBlock, NoCommaBracedOrEmptyBlock$1 = EmptyBlock, NoCommaBracedOrEmptyBlock$$ = [NoCommaBracedOrEmptyBlock$0, NoCommaBracedOrEmptyBlock$1];
  function NoCommaBracedOrEmptyBlock(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "NoCommaBracedOrEmptyBlock", NoCommaBracedOrEmptyBlock$$);
  }
  var NoPostfixBracedOrEmptyBlock$0 = NoPostfixBracedBlock, NoPostfixBracedOrEmptyBlock$1 = EmptyBlock, NoPostfixBracedOrEmptyBlock$$ = [NoPostfixBracedOrEmptyBlock$0, NoPostfixBracedOrEmptyBlock$1];
  function NoPostfixBracedOrEmptyBlock(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "NoPostfixBracedOrEmptyBlock", NoPostfixBracedOrEmptyBlock$$);
  }
  var EmptyBlock$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(InsertOpenBrace, InsertCloseBrace), function($skip, $loc, $0, $1, $2) {
    let expressions = [];
    return {
      type: "BlockStatement",
      expressions,
      children: [$1, expressions, $2],
      bare: !1,
      empty: !0,
      implicit: !0
    };
  });
  function EmptyBlock(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "EmptyBlock", EmptyBlock$0);
  }
  var BlockOrEmptyStatement$0 = Block, BlockOrEmptyStatement$1 = (0, import_lib2.$T)((0, import_lib2.$S)(NoBlock, EmptyStatementBareBlock), function(value) {
    return value[1];
  }), BlockOrEmptyStatement$$ = [BlockOrEmptyStatement$0, BlockOrEmptyStatement$1];
  function BlockOrEmptyStatement(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "BlockOrEmptyStatement", BlockOrEmptyStatement$$);
  }
  var BlockOrEmpty$0 = Block, BlockOrEmpty$1 = (0, import_lib2.$T)((0, import_lib2.$S)(NoBlock, EmptyBlock), function(value) {
    return value[1];
  }), BlockOrEmpty$$ = [BlockOrEmpty$0, BlockOrEmpty$1];
  function BlockOrEmpty(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "BlockOrEmpty", BlockOrEmpty$$);
  }
  var EmptyStatementBareBlock$0 = (0, import_lib2.$TV)(InsertEmptyStatement, function($skip, $loc, $0, $1) {
    var s = $0;
    let expressions = [["", s]];
    return {
      type: "BlockStatement",
      expressions,
      children: [expressions],
      bare: !0,
      empty: !0,
      implicit: !0,
      semicolon: s.children[0]
    };
  });
  function EmptyStatementBareBlock(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "EmptyStatementBareBlock", EmptyStatementBareBlock$0);
  }
  var EmptyBareBlock$0 = (0, import_lib2.$TV)((0, import_lib2.$EXPECT)($L0, 'EmptyBareBlock ""'), function($skip, $loc, $0, $1) {
    let expressions = [];
    return {
      type: "BlockStatement",
      expressions,
      children: [expressions],
      bare: !0,
      empty: !0,
      implicit: !0
    };
  });
  function EmptyBareBlock(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "EmptyBareBlock", EmptyBareBlock$0);
  }
  var NoBlock$0 = (0, import_lib2.$S)((0, import_lib2.$Y)(EOS), (0, import_lib2.$N)(IndentedFurther), (0, import_lib2.$N)((0, import_lib2.$S)(Nested, Then))), NoBlock$1 = ClosingDelimiter, NoBlock$$ = [NoBlock$0, NoBlock$1];
  function NoBlock(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "NoBlock", NoBlock$$);
  }
  var BracedBlock$0 = NonSingleBracedBlock, BracedBlock$1 = (0, import_lib2.$TS)((0, import_lib2.$S)(InsertOpenBrace, (0, import_lib2.$N)(EOS), PostfixedSingleLineStatements, InsertSpace, InsertCloseBrace), function($skip, $loc, $0, $1, $2, $3, $4, $5) {
    var o = $1, s = $3, ws = $4, c = $5;
    return s.children.length ? {
      type: "BlockStatement",
      expressions: s.expressions,
      // Remove !EOS assertion
      children: [o, s.children, ws, c]
    } : $skip;
  }), BracedBlock$$ = [BracedBlock$0, BracedBlock$1];
  function BracedBlock(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "BracedBlock", BracedBlock$$);
  }
  var NoPostfixBracedBlock$0 = NonSingleBracedBlock, NoPostfixBracedBlock$1 = (0, import_lib2.$TS)((0, import_lib2.$S)(InsertOpenBrace, (0, import_lib2.$N)(EOS), SingleLineStatements, InsertSpace, InsertCloseBrace), function($skip, $loc, $0, $1, $2, $3, $4, $5) {
    var o = $1, s = $3, ws = $4, c = $5;
    return s.expressions.length ? {
      type: "BlockStatement",
      expressions: s.expressions,
      // Remove !EOS assertion
      children: [o, s.children, ws, c]
    } : $skip;
  }), NoPostfixBracedBlock$$ = [NoPostfixBracedBlock$0, NoPostfixBracedBlock$1];
  function NoPostfixBracedBlock(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "NoPostfixBracedBlock", NoPostfixBracedBlock$$);
  }
  var NoCommaBracedBlock$0 = NonSingleBracedBlock, NoCommaBracedBlock$1 = (0, import_lib2.$TS)((0, import_lib2.$S)(InsertOpenBrace, (0, import_lib2.$N)(EOS), PostfixedSingleLineNoCommaStatements, InsertSpace, InsertCloseBrace), function($skip, $loc, $0, $1, $2, $3, $4, $5) {
    var o = $1, s = $3, ws = $4, c = $5;
    return s.children.length ? {
      type: "BlockStatement",
      expressions: s.expressions,
      // Remove !EOS assertion
      children: [o, s.children, ws, c]
    } : $skip;
  }), NoCommaBracedBlock$$ = [NoCommaBracedBlock$0, NoCommaBracedBlock$1];
  function NoCommaBracedBlock(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "NoCommaBracedBlock", NoCommaBracedBlock$$);
  }
  var NonSingleBracedBlock$0 = (0, import_lib2.$T)((0, import_lib2.$S)((0, import_lib2.$N)(EOS), ExplicitBlock, (0, import_lib2.$N)(TrailingOperator)), function(value) {
    return value[1];
  }), NonSingleBracedBlock$1 = ImplicitNestedBlock, NonSingleBracedBlock$2 = (0, import_lib2.$TS)((0, import_lib2.$S)(InsertOpenBrace, (0, import_lib2.$C)(NestedBulletedArray, NestedImplicitObjectLiteral), InsertCloseBrace), function($skip, $loc, $0, $1, $2, $3) {
    var o = $1, s = $2, c = $3;
    let expressions = [s];
    return {
      type: "BlockStatement",
      expressions,
      children: [o, expressions, c]
    };
  }), NonSingleBracedBlock$$ = [NonSingleBracedBlock$0, NonSingleBracedBlock$1, NonSingleBracedBlock$2];
  function NonSingleBracedBlock(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "NonSingleBracedBlock", NonSingleBracedBlock$$);
  }
  var DeclarationOrStatement$0 = Declaration, DeclarationOrStatement$1 = Statement, DeclarationOrStatement$$ = [DeclarationOrStatement$0, DeclarationOrStatement$1];
  function DeclarationOrStatement(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "DeclarationOrStatement", DeclarationOrStatement$$);
  }
  var SingleLineStatements$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(ForbidNewlineBinaryOp, (0, import_lib2.$Q)((0, import_lib2.$S)((0, import_lib2.$S)((0, import_lib2.$E)(_), (0, import_lib2.$N)(EOS)), DeclarationOrStatement, SemicolonDelimiter)), (0, import_lib2.$E)((0, import_lib2.$S)((0, import_lib2.$S)((0, import_lib2.$E)(_), (0, import_lib2.$N)(EOS)), DeclarationOrStatement, (0, import_lib2.$E)(SemicolonDelimiter))), RestoreNewlineBinaryOp), function($skip, $loc, $0, $1, $2, $3, $4) {
    var stmts = $2, last = $3;
    let expressions = [...stmts];
    last && expressions.push(last);
    let children = [expressions];
    return hasTrailingComment(expressions) && children.push([`
`]), {
      type: "BlockStatement",
      expressions,
      children,
      bare: !0
    };
  });
  function SingleLineStatements(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "SingleLineStatements", SingleLineStatements$0);
  }
  var PostfixedSingleLineStatements$0 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$Q)((0, import_lib2.$S)((0, import_lib2.$S)((0, import_lib2.$E)(_), (0, import_lib2.$N)(EOS)), StatementListItem, SemicolonDelimiter)), (0, import_lib2.$E)((0, import_lib2.$S)((0, import_lib2.$S)((0, import_lib2.$E)(_), (0, import_lib2.$N)(EOS)), StatementListItem, (0, import_lib2.$E)(SemicolonDelimiter)))), function($skip, $loc, $0, $1, $2) {
    var stmts = $1, last = $2;
    let children = [...stmts];
    return last && children.push(last), {
      type: "BlockStatement",
      expressions: children,
      children,
      bare: !0
    };
  });
  function PostfixedSingleLineStatements(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "PostfixedSingleLineStatements", PostfixedSingleLineStatements$0);
  }
  var PostfixedSingleLineNoCommaStatements$0 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$Q)((0, import_lib2.$S)((0, import_lib2.$S)((0, import_lib2.$E)(_), (0, import_lib2.$N)(EOS)), NoCommaStatementListItem, SemicolonDelimiter)), (0, import_lib2.$E)((0, import_lib2.$S)((0, import_lib2.$S)((0, import_lib2.$E)(_), (0, import_lib2.$N)(EOS)), NoCommaStatementListItem, (0, import_lib2.$E)(SemicolonDelimiter)))), function($skip, $loc, $0, $1, $2) {
    var stmts = $1, last = $2;
    let children = [...stmts];
    return last && children.push(last), {
      type: "BlockStatement",
      expressions: children,
      children,
      bare: !0
    };
  });
  function PostfixedSingleLineNoCommaStatements(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "PostfixedSingleLineNoCommaStatements", PostfixedSingleLineNoCommaStatements$0);
  }
  var NestedBlockStatements$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(PushIndent, (0, import_lib2.$Q)(NestedBlockStatement), PopIndent), function($skip, $loc, $0, $1, $2, $3) {
    var statements = $2;
    return statements.length ? (statements = statements.flat(), {
      type: "BlockStatement",
      expressions: statements,
      children: [statements],
      bare: !0
    }) : $skip;
  });
  function NestedBlockStatements(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "NestedBlockStatements", NestedBlockStatements$0);
  }
  var NestedBlockStatement$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(Nested, (0, import_lib2.$P)(BlockStatementPart)), function($skip, $loc, $0, $1, $2) {
    var nested = $1, statements = $2;
    return [
      [nested, ...statements[0]],
      ...statements.slice(1).map((s) => ["", ...s])
    ];
  });
  function NestedBlockStatement(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "NestedBlockStatement", NestedBlockStatement$0);
  }
  var BlockStatementPart$0 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$N)(EOS), (0, import_lib2.$E)(_), StatementListItem, StatementDelimiter), function($skip, $loc, $0, $1, $2, $3, $4) {
    var ws = $2, statement = $3, delimiter = $4;
    return ws && (statement = prepend(ws, statement)), [statement, delimiter];
  });
  function BlockStatementPart(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "BlockStatementPart", BlockStatementPart$0);
  }
  var Literal$0 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$EXPECT)($R16, `Literal /(?=[0-9.'"tfyno])/`), LiteralContent), function($skip, $loc, $0, $1, $2) {
    var literal = $2;
    return {
      type: "Literal",
      subtype: literal.type,
      children: [literal],
      raw: literal.token
    };
  });
  function Literal(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "Literal", Literal$0);
  }
  var LiteralContent$0 = NullLiteral, LiteralContent$1 = BooleanLiteral, LiteralContent$2 = NumericLiteral, LiteralContent$3 = StringLiteral, LiteralContent$$ = [LiteralContent$0, LiteralContent$1, LiteralContent$2, LiteralContent$3];
  function LiteralContent(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "LiteralContent", LiteralContent$$);
  }
  var NullLiteral$0 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$EXPECT)($L38, 'NullLiteral "null"'), NonIdContinue), function($skip, $loc, $0, $1, $2) {
    return { type: "NullLiteral", $loc, token: $1 };
  });
  function NullLiteral(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "NullLiteral", NullLiteral$0);
  }
  var BooleanLiteral$0 = (0, import_lib2.$T)((0, import_lib2.$S)((0, import_lib2.$EXPECT)($R17, "BooleanLiteral /(?=true|false|yes|no|on|off)/"), _BooleanLiteral), function(value) {
    return value[1];
  });
  function BooleanLiteral(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "BooleanLiteral", BooleanLiteral$0);
  }
  var _BooleanLiteral$0 = (0, import_lib2.$T)((0, import_lib2.$S)(CoffeeBooleansEnabled, CoffeeScriptBooleanLiteral), function(value) {
    return value[1];
  }), _BooleanLiteral$1 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$C)((0, import_lib2.$EXPECT)($L39, '_BooleanLiteral "true"'), (0, import_lib2.$EXPECT)($L40, '_BooleanLiteral "false"')), NonIdContinue), function($skip, $loc, $0, $1, $2) {
    return { type: "BooleanLiteral", $loc, token: $1 };
  }), _BooleanLiteral$$ = [_BooleanLiteral$0, _BooleanLiteral$1];
  function _BooleanLiteral(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "_BooleanLiteral", _BooleanLiteral$$);
  }
  var CoffeeScriptBooleanLiteral$0 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$C)((0, import_lib2.$EXPECT)($L41, 'CoffeeScriptBooleanLiteral "yes"'), (0, import_lib2.$EXPECT)($L42, 'CoffeeScriptBooleanLiteral "on"')), NonIdContinue), function($skip, $loc, $0, $1, $2) {
    return { type: "BooleanLiteral", $loc, token: "true" };
  }), CoffeeScriptBooleanLiteral$1 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$C)((0, import_lib2.$EXPECT)($L43, 'CoffeeScriptBooleanLiteral "no"'), (0, import_lib2.$EXPECT)($L44, 'CoffeeScriptBooleanLiteral "off"')), NonIdContinue), function($skip, $loc, $0, $1, $2) {
    return { type: "BooleanLiteral", $loc, token: "false" };
  }), CoffeeScriptBooleanLiteral$$ = [CoffeeScriptBooleanLiteral$0, CoffeeScriptBooleanLiteral$1];
  function CoffeeScriptBooleanLiteral(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "CoffeeScriptBooleanLiteral", CoffeeScriptBooleanLiteral$$);
  }
  var SymbolLiteral$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(Colon, (0, import_lib2.$C)(IdentifierName, StringLiteral)), function($skip, $loc, $0, $1, $2) {
    var colon = $1, id = $2;
    let name, token;
    return id.type === "Identifier" ? { name, children: [token] } = id : (name = literalValue({
      type: "Literal",
      subtype: "StringLiteral",
      raw: id.token,
      children: [id]
    }), token = id), config.symbols.includes(name) ? {
      type: "SymbolLiteral",
      children: id.type === "Identifier" ? [
        { ...colon, token: "Symbol." },
        token
      ] : [
        { ...colon, token: "Symbol[" },
        token,
        "]"
      ],
      name
    } : {
      type: "SymbolLiteral",
      children: [
        { ...colon, token: "Symbol.for(" },
        id.type === "Identifier" ? ['"', token, '"'] : token,
        ")"
      ],
      name
    };
  });
  function SymbolLiteral(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "SymbolLiteral", SymbolLiteral$0);
  }
  var SymbolElement$0 = (0, import_lib2.$T)((0, import_lib2.$S)(SymbolLiteral), function(value) {
    return ["[", value[0], "]"];
  });
  function SymbolElement(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "SymbolElement", SymbolElement$0);
  }
  var Identifier$0 = (0, import_lib2.$T)((0, import_lib2.$S)((0, import_lib2.$EXPECT)($R18, "Identifier /(?=\\p{ID_Start}|[_$])/"), (0, import_lib2.$N)(ReservedWord), IdentifierName), function(value) {
    var id = value[2];
    return id;
  });
  function Identifier(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "Identifier", Identifier$0);
  }
  var IdentifierName$0 = (0, import_lib2.$TR)((0, import_lib2.$EXPECT)($R19, "IdentifierName /(?:\\p{ID_Start}|[_$])(?:\\p{ID_Continue}|[\\u200C\\u200D$])*/"), function($skip, $loc, $0, $1, $2, $3, $4, $5, $6, $7, $8, $9) {
    return {
      type: "Identifier",
      name: $0,
      names: [$0],
      children: [{
        $loc,
        token: $0
      }]
    };
  });
  function IdentifierName(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "IdentifierName", IdentifierName$0);
  }
  var IdentifierReference$0 = Identifier;
  function IdentifierReference(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "IdentifierReference", IdentifierReference$0);
  }
  var UpcomingAssignment$0 = (0, import_lib2.$Y)((0, import_lib2.$S)(__, (0, import_lib2.$EXPECT)($L3, 'UpcomingAssignment "="'), (0, import_lib2.$N)((0, import_lib2.$C)((0, import_lib2.$EXPECT)($L3, 'UpcomingAssignment "="'), (0, import_lib2.$EXPECT)($L45, 'UpcomingAssignment ">"')))));
  function UpcomingAssignment(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "UpcomingAssignment", UpcomingAssignment$0);
  }
  var ArrayLiteral$0 = (0, import_lib2.$T)((0, import_lib2.$S)((0, import_lib2.$EXPECT)($R20, "ArrayLiteral /(?=\\[|\\s*[.\u2022\\/])/"), _ArrayLiteral), function(value) {
    return value[1];
  });
  function ArrayLiteral(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "ArrayLiteral", ArrayLiteral$0);
  }
  var _ArrayLiteral$0 = (0, import_lib2.$T)((0, import_lib2.$S)(ArrayBindingPattern, UpcomingAssignment), function(value) {
    return value[0];
  }), _ArrayLiteral$1 = (0, import_lib2.$TS)((0, import_lib2.$S)(OpenBracket, CloseBracket, ApplicationStart, AllowAll, (0, import_lib2.$E)((0, import_lib2.$C)(NestedElementList, SingleLineElementList)), RestoreAll), function($skip, $loc, $0, $1, $2, $3, $4, $5, $6) {
    var open = $1, close = $2, content = $5;
    if (!content) return $skip;
    let last = content[content.length - 1], lastArray = Array.isArray(last) ? last : last.children;
    return isComma(lastArray[lastArray.length - 1]) && (lastArray = lastArray.slice(0, -1), Array.isArray(last) ? last = lastArray : last = { ...last, children: lastArray }, content = [...content.slice(0, -1), last]), {
      type: "ArrayExpression",
      children: [open, ...content, close],
      names: content.flatMap((c) => c?.names || [])
    };
  }), _ArrayLiteral$2 = (0, import_lib2.$TS)((0, import_lib2.$S)(OpenBracket, AllowAll, (0, import_lib2.$E)((0, import_lib2.$S)(ArrayLiteralContent, __, CloseBracket)), RestoreAll), function($skip, $loc, $0, $1, $2, $3, $4) {
    var open = $1;
    if (!$3) return $skip;
    let [content, ws, close] = $3;
    if (content.type === "RangeExpression")
      return prepend(ws, content);
    let children;
    Array.isArray(content) ? children = [open, ...content, ...ws, close] : children = [open, content, ...ws, close];
    let names = children.flatMap((c) => c?.names || []);
    return {
      type: "ArrayExpression",
      children,
      names
    };
  }), _ArrayLiteral$3 = NestedBulletedArray, _ArrayLiteral$$ = [_ArrayLiteral$0, _ArrayLiteral$1, _ArrayLiteral$2, _ArrayLiteral$3];
  function _ArrayLiteral(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "_ArrayLiteral", _ArrayLiteral$$);
  }
  var RangeDots$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(DotDotDot), function($skip, $loc, $0, $1) {
    return {
      ...$1,
      type: "RangeDots",
      left: { inclusive: !0, raw: "" },
      right: { inclusive: !1, raw: "." },
      // Ranges are increasing by default, but adaptive in coffeeCompat mode
      increasing: config.coffeeRange ? void 0 : !0,
      triple: !0,
      children: []
    };
  }), RangeDots$1 = (0, import_lib2.$TS)((0, import_lib2.$S)(OptionalRangeEnd, (0, import_lib2.$E)(_), DotDot, (0, import_lib2.$E)(_), OptionalRangeEnd), function($skip, $loc, $0, $1, $2, $3, $4, $5) {
    var left = $1, ws1 = $2, dots = $3, ws2 = $4, right = $5;
    let increasing = left.increasing ?? right.increasing ?? (config.coffeeRange ? void 0 : !0);
    if (left.increasing != null && right.increasing != null && left.increasing !== right.increasing) {
      let error = {
        type: "Error",
        message: `${left.raw}..${right.raw} uses inconsistent < vs. >`,
        $loc: dots.$loc
      };
      return {
        ...dots,
        left,
        right,
        increasing,
        error,
        type: "RangeDots",
        children: [error]
      };
    }
    return {
      ...dots,
      left,
      right,
      increasing,
      type: "RangeDots",
      children: [ws1, ws2]
    };
  }), RangeDots$$ = [RangeDots$0, RangeDots$1];
  function RangeDots(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "RangeDots", RangeDots$$);
  }
  var OptionalRangeEnd$0 = RangeEnd, OptionalRangeEnd$1 = (0, import_lib2.$T)((0, import_lib2.$EXPECT)($L0, 'OptionalRangeEnd ""'), function(value) {
    return { increasing: void 0, inclusive: !0, raw: "" };
  }), OptionalRangeEnd$$ = [OptionalRangeEnd$0, OptionalRangeEnd$1];
  function OptionalRangeEnd(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "OptionalRangeEnd", OptionalRangeEnd$$);
  }
  var RangeEnd$0 = (0, import_lib2.$TR)((0, import_lib2.$EXPECT)($R21, "RangeEnd /([<>])(=?)|([\u2264\u2265])/"), function($skip, $loc, $0, $1, $2, $3, $4, $5, $6, $7, $8, $9) {
    let dir = $1, equal = $2, unicode = $3;
    return unicode && (equal = "=", unicode === "\u2264" ? dir = "<" : unicode === "\u2265" && (dir = ">")), {
      increasing: dir === "<",
      inclusive: equal === "=",
      raw: $0
    };
  });
  function RangeEnd(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "RangeEnd", RangeEnd$0);
  }
  var RangeExpression$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(Expression, __, RangeDots, Expression), function($skip, $loc, $0, $1, $2, $3, $4) {
    var start = $1, ws = $2, range2 = $3, end = $4;
    return processRangeExpression(start, ws, range2, end);
  }), RangeExpression$1 = (0, import_lib2.$TS)((0, import_lib2.$S)(Expression, __, DotDot, (0, import_lib2.$Y)((0, import_lib2.$S)(__, CloseBracket))), function($skip, $loc, $0, $1, $2, $3, $4) {
    var s = $1, ws = $2;
    return {
      type: "RangeExpression",
      children: ["[]", {
        type: "Error",
        message: "Infinite range [x..] is only valid in for loops"
      }],
      start: s,
      end: {
        type: "Identifier",
        name: "Infinity",
        children: ["Infinity"]
      },
      left: { inclusive: !0, raw: "" },
      right: { inclusive: !0, raw: "" },
      increasing: !0
    };
  }), RangeExpression$$ = [RangeExpression$0, RangeExpression$1];
  function RangeExpression(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "RangeExpression", RangeExpression$$);
  }
  var ArrayLiteralContent$0 = RangeExpression, ArrayLiteralContent$1 = (0, import_lib2.$S)(NestedElementList, (0, import_lib2.$Y)((0, import_lib2.$S)(__, CloseBracket))), ArrayLiteralContent$2 = (0, import_lib2.$TS)((0, import_lib2.$S)(ElementListWithIndentedApplicationForbidden, ArrayElementDelimiter, (0, import_lib2.$E)(NestedElementList), (0, import_lib2.$Y)((0, import_lib2.$S)(__, CloseBracket))), function($skip, $loc, $0, $1, $2, $3, $4) {
    var list = $1, delimiter = $2, nested = $3;
    return nested ? [...list, delimiter, ...nested] : list;
  }), ArrayLiteralContent$3 = (0, import_lib2.$TV)((0, import_lib2.$Q)((0, import_lib2.$S)(__, ElementListWithIndentedApplicationForbidden, ArrayElementDelimiter)), function($skip, $loc, $0, $1) {
    return $1.flat();
  }), ArrayLiteralContent$$ = [ArrayLiteralContent$0, ArrayLiteralContent$1, ArrayLiteralContent$2, ArrayLiteralContent$3];
  function ArrayLiteralContent(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "ArrayLiteralContent", ArrayLiteralContent$$);
  }
  var NestedElementList$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(PushIndent, (0, import_lib2.$Q)(NestedElement), PopIndent), function($skip, $loc, $0, $1, $2, $3) {
    var elements = $2;
    return elements.length ? elements.flat() : $skip;
  });
  function NestedElementList(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "NestedElementList", NestedElementList$0);
  }
  var NestedElement$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(Nested, ElementList, ArrayElementDelimiter), function($skip, $loc, $0, $1, $2, $3) {
    var indent = $1, list = $2, delimiter = $3;
    let { length } = list;
    return length ? list.map((e, i) => (i === 0 && (e = prepend(indent, e)), i === length - 1 && (e = append(e, delimiter)), e)) : $skip;
  });
  function NestedElement(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "NestedElement", NestedElement$0);
  }
  var ArrayElementDelimiter$0 = (0, import_lib2.$S)(__, Comma), ArrayElementDelimiter$1 = (0, import_lib2.$Y)((0, import_lib2.$S)(__, (0, import_lib2.$EXPECT)($L46, 'ArrayElementDelimiter "]"'))), ArrayElementDelimiter$2 = (0, import_lib2.$T)((0, import_lib2.$S)((0, import_lib2.$Y)(EOS), InsertComma), function(value) {
    return value[1];
  }), ArrayElementDelimiter$$ = [ArrayElementDelimiter$0, ArrayElementDelimiter$1, ArrayElementDelimiter$2];
  function ArrayElementDelimiter(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "ArrayElementDelimiter", ArrayElementDelimiter$$);
  }
  var ElementListWithIndentedApplicationForbidden$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(ForbidIndentedApplication, (0, import_lib2.$E)(ElementList), RestoreIndentedApplication), function($skip, $loc, $0, $1, $2, $3) {
    return $2 || $skip;
  });
  function ElementListWithIndentedApplicationForbidden(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "ElementListWithIndentedApplicationForbidden", ElementListWithIndentedApplicationForbidden$0);
  }
  var ElementList$0 = (0, import_lib2.$T)((0, import_lib2.$S)(BulletedArray), function(value) {
    return [value[0]];
  }), ElementList$1 = SingleLineElementList, ElementList$$ = [ElementList$0, ElementList$1];
  function ElementList(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "ElementList", ElementList$$);
  }
  var SingleLineElementList$0 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$N)(EOS), ArrayElementExpression, (0, import_lib2.$Q)(ElementListRest)), function($skip, $loc, $0, $1, $2, $3) {
    var first = $2, rest = $3;
    return rest.length ? [
      append(first, rest[0][0])
    ].concat(
      rest.map(([_2, e], i) => append(e, rest[i + 1]?.[0]))
    ) : [first];
  });
  function SingleLineElementList(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "SingleLineElementList", SingleLineElementList$0);
  }
  var ElementListRest$0 = (0, import_lib2.$S)((0, import_lib2.$S)((0, import_lib2.$E)(_), Comma, (0, import_lib2.$N)(EOS)), ArrayElementExpression);
  function ElementListRest(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "ElementListRest", ElementListRest$0);
  }
  var ArrayElementExpression$0 = JSXTag, ArrayElementExpression$1 = (0, import_lib2.$T)((0, import_lib2.$S)(ImplicitObjectLiteral, (0, import_lib2.$Y)(ArrayElementDelimiter)), function(value) {
    return value[0];
  }), ArrayElementExpression$2 = (0, import_lib2.$TS)((0, import_lib2.$S)(Expression, (0, import_lib2.$E)(_), DotDotDot, (0, import_lib2.$Y)(ArrayElementDelimiter)), function($skip, $loc, $0, $1, $2, $3, $4) {
    var exp = $1, ws = $2, dots = $3;
    return exp || (exp = { ...makeRef(), names: [] }), {
      type: "SpreadElement",
      children: [ws, dots, exp],
      expression: exp,
      names: exp.names
    };
  }), ArrayElementExpression$3 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$E)((0, import_lib2.$S)((0, import_lib2.$E)((0, import_lib2.$S)(__, DotDotDot, __)), PostfixedExpression)), (0, import_lib2.$Y)(ArrayElementDelimiter)), function($skip, $loc, $0, $1, $2) {
    var expMaybeSpread = $1;
    if (expMaybeSpread) {
      let [spread, exp] = expMaybeSpread;
      return spread ? {
        type: "SpreadElement",
        children: [...spread, exp],
        expression: exp,
        names: exp.names
      } : {
        type: "ArrayElement",
        children: [exp],
        expression: exp,
        names: exp.names
      };
    }
    return {
      type: "ElisionElement",
      children: []
    };
  }), ArrayElementExpression$$ = [ArrayElementExpression$0, ArrayElementExpression$1, ArrayElementExpression$2, ArrayElementExpression$3];
  function ArrayElementExpression(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "ArrayElementExpression", ArrayElementExpression$$);
  }
  var NestedBulletedArray$0 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$S)(InsertSpace, InsertOpenBracket), PushIndent, AllowPipeline, (0, import_lib2.$Q)(NestedArrayBullet), RestorePipeline, InsertCloseBracket, PopIndent), function($skip, $loc, $0, $1, $2, $3, $4, $5, $6, $7) {
    var open = $1, content = $4, close = $6;
    if (!content.length) return $skip;
    content = content.flat();
    let last = content[content.length - 1];
    return last.children?.at(-1)?.implicit && (last.children = last.children.slice(0, -1)), {
      type: "ArrayExpression",
      children: [...open, ...content, close]
    };
  });
  function NestedBulletedArray(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "NestedBulletedArray", NestedBulletedArray$0);
  }
  var BulletedArray$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(InsertOpenBracket, (0, import_lib2.$E)((0, import_lib2.$S)(ArrayBullet, (0, import_lib2.$Q)(NestedArrayBullet))), InsertCloseBracket), function($skip, $loc, $0, $1, $2, $3) {
    var open = $1, content = $2, close = $3;
    if (!content) return $skip;
    content = [
      ...trimFirstSpace(content[0]),
      // replace first space with bracket
      ...content[1].flat()
    ];
    let last = content[content.length - 1];
    return last.children?.at(-1)?.implicit && (content[content.length - 1] = last = { ...last, children: last.children.slice(0, -1) }), {
      type: "ArrayExpression",
      children: [open, ...content, close]
    };
  });
  function BulletedArray(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "BulletedArray", BulletedArray$0);
  }
  var NestedArrayBullet$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(Nested, ArrayBullet), function($skip, $loc, $0, $1, $2) {
    var indent = $1, list = $2;
    return list.map((e, i) => i === 0 ? prepend(indent, e) : e);
  });
  function NestedArrayBullet(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "NestedArrayBullet", NestedArrayBullet$0);
  }
  var ArrayBullet$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(BulletIndent, (0, import_lib2.$E)((0, import_lib2.$S)(ElementList, ArrayBulletDelimiter)), PopIndent), function($skip, $loc, $0, $1, $2, $3) {
    var bullet = $1, content = $2;
    if (!content) return $skip;
    let [list, delimiter] = content;
    if (!list.length) return $skip;
    if (list = list.slice(), list[0] = prepend(bullet, list[0]), delimiter) {
      let last = list.length - 1;
      list[last] = append(list[last], delimiter);
    }
    return list;
  });
  function ArrayBullet(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "ArrayBullet", ArrayBullet$0);
  }
  var ArrayBulletDelimiter$0 = (0, import_lib2.$S)((0, import_lib2.$E)(_), Comma), ArrayBulletDelimiter$1 = (0, import_lib2.$T)((0, import_lib2.$S)((0, import_lib2.$Y)(EOS), InsertComma), function(value) {
    return value[1];
  }), ArrayBulletDelimiter$$ = [ArrayBulletDelimiter$0, ArrayBulletDelimiter$1];
  function ArrayBulletDelimiter(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "ArrayBulletDelimiter", ArrayBulletDelimiter$$);
  }
  var BulletIndent$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(Bullet), function($skip, $loc, $0, $1) {
    let [bullet, ws] = $1, indent = {
      token: " " + ws,
      $loc,
      level: getIndentLevel(" ".repeat(state.currentIndent.level) + bullet + ws, config.tab)
    };
    return config.verbose && console.log("pushing bullet indent", indent), state.indentLevels.push(indent), indent;
  });
  function BulletIndent(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "BulletIndent", BulletIndent$0);
  }
  var Bullet$0 = (0, import_lib2.$S)((0, import_lib2.$EXPECT)($L47, 'Bullet "\u2022"'), (0, import_lib2.$R$0)((0, import_lib2.$EXPECT)($R22, "Bullet /[ \\t]*/"))), Bullet$1 = (0, import_lib2.$S)((0, import_lib2.$EXPECT)($L7, 'Bullet "."'), (0, import_lib2.$R$0)((0, import_lib2.$EXPECT)($R23, "Bullet /[ \\t]+/"))), Bullet$$ = [Bullet$0, Bullet$1];
  function Bullet(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "Bullet", Bullet$$);
  }
  var BulletedArrayWithTrailing$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(BulletedArray, (0, import_lib2.$E)(AllowedTrailingCallExpressions), (0, import_lib2.$Q)((0, import_lib2.$S)(NotDedented, Pipe, __, PipelineTailItem))), function($skip, $loc, $0, $1, $2, $3) {
    var array = $1, trailing = $2, pipeline = $3;
    return trailing && (array = [array, trailing]), pipeline.length && (array = {
      type: "PipelineExpression",
      children: [void 0, array, pipeline]
    }), array;
  });
  function BulletedArrayWithTrailing(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "BulletedArrayWithTrailing", BulletedArrayWithTrailing$0);
  }
  var ObjectLiteral$0 = (0, import_lib2.$T)((0, import_lib2.$S)(ObjectBindingPattern, UpcomingAssignment), function(value) {
    return value[0];
  }), ObjectLiteral$1 = BracedObjectLiteral, ObjectLiteral$2 = NestedImplicitObjectLiteral, ObjectLiteral$3 = InlineObjectLiteral, ObjectLiteral$$ = [ObjectLiteral$0, ObjectLiteral$1, ObjectLiteral$2, ObjectLiteral$3];
  function ObjectLiteral(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "ObjectLiteral", ObjectLiteral$$);
  }
  var BracedObjectLiteral$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(OpenBrace, CloseBrace, ApplicationStart, AllowAll, (0, import_lib2.$E)((0, import_lib2.$C)(NestedPropertyDefinitions, SingleLineObjectProperties)), RestoreAll), function($skip, $loc, $0, $1, $2, $3, $4, $5, $6) {
    var open = $1, close = $2, properties = $5;
    if (!properties?.length) return $skip;
    let last = properties[properties.length - 1];
    return last.delim?.implicit && (last = {
      ...last,
      delim: void 0,
      children: last.children.filter((c) => c !== last.delim)
    }, properties = [...properties.slice(0, properties.length - 1), last]), {
      type: "ObjectExpression",
      children: [open, properties, close],
      names: properties.flatMap((c) => c.names || []),
      properties
    };
  }), BracedObjectLiteral$1 = (0, import_lib2.$TS)((0, import_lib2.$S)(OpenBrace, AllowAll, (0, import_lib2.$E)((0, import_lib2.$S)(BracedObjectLiteralContent, __, CloseBrace)), RestoreAll), function($skip, $loc, $0, $1, $2, $3, $4) {
    var open = $1;
    if (!$3) return $skip;
    let [properties, ...close] = $3;
    return {
      type: "ObjectExpression",
      children: [open, properties, close],
      names: properties.flatMap((c) => c.names || []),
      properties
    };
  }), BracedObjectLiteral$$ = [BracedObjectLiteral$0, BracedObjectLiteral$1];
  function BracedObjectLiteral(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "BracedObjectLiteral", BracedObjectLiteral$$);
  }
  var SingleLineObjectProperties$0 = (0, import_lib2.$TV)((0, import_lib2.$Q)((0, import_lib2.$S)(PropertyDefinition, ObjectPropertyDelimiter)), function($skip, $loc, $0, $1) {
    var line = $0;
    return line.flatMap(([prop, delim]) => {
      prop = Array.isArray(prop) ? prop : [prop];
      let last = prop[prop.length - 1];
      return last ? (last = {
        ...last,
        delim,
        children: [...last.children, delim]
      }, [...prop.slice(0, prop.length - 1), last]) : [];
    });
  });
  function SingleLineObjectProperties(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "SingleLineObjectProperties", SingleLineObjectProperties$0);
  }
  var BracedObjectLiteralContent$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(SingleLineObjectProperties, (0, import_lib2.$E)(NestedPropertyDefinitions)), function($skip, $loc, $0, $1, $2) {
    var line = $1, nested = $2;
    return line.concat(nested || []);
  }), BracedObjectLiteralContent$1 = (0, import_lib2.$TV)((0, import_lib2.$P)((0, import_lib2.$S)(__, PropertyDefinition, ObjectPropertyDelimiter)), function($skip, $loc, $0, $1) {
    return $0.flatMap(([ws, prop, delim]) => {
      prop = Array.isArray(prop) ? prop : [prop];
      let last = prop[prop.length - 1];
      return last = {
        ...last,
        delim,
        // __ will consume all whitespace that _? in PropertyDefinition could,
        // so replace _? (via slice) with __
        children: [ws, ...last.children.slice(1), delim]
      }, [...prop.slice(0, prop.length - 1), last];
    });
  }), BracedObjectLiteralContent$$ = [BracedObjectLiteralContent$0, BracedObjectLiteralContent$1];
  function BracedObjectLiteralContent(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "BracedObjectLiteralContent", BracedObjectLiteralContent$$);
  }
  var NestedImplicitObjectLiteral$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(InsertOpenBrace, PushIndent, AllowPipeline, (0, import_lib2.$E)(NestedImplicitPropertyDefinitions), RestorePipeline, PopIndent, InsertNewline, InsertIndent, InsertCloseBrace), function($skip, $loc, $0, $1, $2, $3, $4, $5, $6, $7, $8, $9) {
    var properties = $4;
    return properties ? {
      type: "ObjectExpression",
      properties,
      children: $0
    } : $skip;
  });
  function NestedImplicitObjectLiteral(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "NestedImplicitObjectLiteral", NestedImplicitObjectLiteral$0);
  }
  var NestedImplicitPropertyDefinitions$0 = (0, import_lib2.$TV)((0, import_lib2.$P)(NestedImplicitPropertyDefinition), function($skip, $loc, $0, $1) {
    var defs = $0;
    return defs.flat();
  });
  function NestedImplicitPropertyDefinitions(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "NestedImplicitPropertyDefinitions", NestedImplicitPropertyDefinitions$0);
  }
  var NestedImplicitPropertyDefinition$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(Nested, (0, import_lib2.$P)((0, import_lib2.$S)((0, import_lib2.$E)(_), NamedProperty, ObjectPropertyDelimiter))), function($skip, $loc, $0, $1, $2) {
    var indent = $1, props = $2;
    return props.map(([ws, prop, delimiter], i) => ({
      ...prop,
      children: [
        ...i === 0 ? [indent, ws] : [ws],
        ...prop.children,
        delimiter
      ]
    }));
  });
  function NestedImplicitPropertyDefinition(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "NestedImplicitPropertyDefinition", NestedImplicitPropertyDefinition$0);
  }
  var NestedPropertyDefinitions$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(PushIndent, (0, import_lib2.$Q)(NestedPropertyDefinition), PopIndent), function($skip, $loc, $0, $1, $2, $3) {
    var defs = $2;
    return defs.length ? defs.flat() : $skip;
  });
  function NestedPropertyDefinitions(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "NestedPropertyDefinitions", NestedPropertyDefinitions$0);
  }
  var NestedPropertyDefinition$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(Nested, (0, import_lib2.$P)((0, import_lib2.$S)(PropertyDefinition, ObjectPropertyDelimiter))), function($skip, $loc, $0, $1, $2) {
    var ws = $1, inlineProps = $2;
    return inlineProps.flatMap(([prop, delim], i) => {
      if (Array.isArray(prop) || (prop = [prop]), i === 0) {
        let [first, ...rest] = prop;
        prop = [prepend(ws, first), ...rest];
      }
      let last = prop[prop.length - 1];
      return prop = [
        ...prop.slice(0, prop.length - 1),
        {
          ...last,
          delim,
          children: [...last.children, delim]
        }
      ], prop;
    });
  });
  function NestedPropertyDefinition(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "NestedPropertyDefinition", NestedPropertyDefinition$0);
  }
  var ImplicitObjectLiteral$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(InsertInlineOpenBrace, SnugNamedProperty, (0, import_lib2.$Q)((0, import_lib2.$S)(ImplicitObjectPropertyDelimiter, NamedProperty)), (0, import_lib2.$E)((0, import_lib2.$S)((0, import_lib2.$E)(_), Comma)), InsertCloseBrace), function($skip, $loc, $0, $1, $2, $3, $4, $5) {
    var open = $1, first = $2, rest = $3, trailing = $4, close = $5;
    return {
      type: "ObjectExpression",
      children: [open, first, ...rest, trailing, close]
    };
  });
  function ImplicitObjectLiteral(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "ImplicitObjectLiteral", ImplicitObjectLiteral$0);
  }
  var ImplicitObjectPropertyDelimiter$0 = (0, import_lib2.$S)((0, import_lib2.$E)(_), Comma, (0, import_lib2.$C)(NotDedented, (0, import_lib2.$E)(_))), ImplicitObjectPropertyDelimiter$1 = (0, import_lib2.$T)((0, import_lib2.$S)((0, import_lib2.$Y)((0, import_lib2.$S)(Nested, NamedProperty)), InsertComma, Nested), function(value) {
    return [value[1], value[2]];
  }), ImplicitObjectPropertyDelimiter$$ = [ImplicitObjectPropertyDelimiter$0, ImplicitObjectPropertyDelimiter$1];
  function ImplicitObjectPropertyDelimiter(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "ImplicitObjectPropertyDelimiter", ImplicitObjectPropertyDelimiter$$);
  }
  var InlineObjectLiteral$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(InsertInlineOpenBrace, SnugNamedProperty, (0, import_lib2.$Q)((0, import_lib2.$S)(InlineObjectPropertyDelimiter, NamedProperty)), (0, import_lib2.$E)((0, import_lib2.$S)((0, import_lib2.$E)(_), Comma, (0, import_lib2.$Y)(Dedented))), InsertCloseBrace), function($skip, $loc, $0, $1, $2, $3, $4, $5) {
    var open = $1, first = $2, rest = $3, trailing = $4, close = $5;
    return {
      type: "ObjectExpression",
      children: [open, first, ...rest, trailing, close]
    };
  });
  function InlineObjectLiteral(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "InlineObjectLiteral", InlineObjectLiteral$0);
  }
  var InlineObjectPropertyDelimiter$0 = (0, import_lib2.$S)((0, import_lib2.$E)(_), Comma, (0, import_lib2.$C)(NotDedented, (0, import_lib2.$E)(_)));
  function InlineObjectPropertyDelimiter(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "InlineObjectPropertyDelimiter", InlineObjectPropertyDelimiter$0);
  }
  var ObjectPropertyDelimiter$0 = (0, import_lib2.$S)((0, import_lib2.$E)(_), Comma), ObjectPropertyDelimiter$1 = (0, import_lib2.$Y)((0, import_lib2.$S)(__, (0, import_lib2.$R$0)((0, import_lib2.$EXPECT)($R13, "ObjectPropertyDelimiter /[)\\]}]/")))), ObjectPropertyDelimiter$2 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$Y)(EOS), InsertComma), function($skip, $loc, $0, $1, $2) {
    return { ...$2, implicit: !0 };
  }), ObjectPropertyDelimiter$$ = [ObjectPropertyDelimiter$0, ObjectPropertyDelimiter$1, ObjectPropertyDelimiter$2];
  function ObjectPropertyDelimiter(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "ObjectPropertyDelimiter", ObjectPropertyDelimiter$$);
  }
  var PropertyDefinition$0 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$E)(_), InsertDotDotDot, IterationExpression), function($skip, $loc, $0, $1, $2, $3) {
    var ws = $1, dots = $2, exp = $3;
    let { statement } = exp;
    if (exp.block.implicit && (statement.type === "DoStatement" || statement.subtype === "loop"))
      return $skip;
    statement = { ...statement, object: !0 }, exp = {
      ...exp,
      statement,
      children: exp.children.map(($) => $ === exp.statement ? statement : $)
    };
    let children = [ws, dots, exp];
    return statement.reduction && children.unshift({
      type: "Error",
      message: "Reduction loops are forbidden in object literals"
    }), {
      type: "SpreadProperty",
      children,
      names: exp.names,
      dots,
      value: exp
    };
  }), PropertyDefinition$1 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$E)(_), NamedProperty), function($skip, $loc, $0, $1, $2) {
    var ws = $1, prop = $2;
    return prepend(ws, prop);
  }), PropertyDefinition$2 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$E)(_), (0, import_lib2.$TEXT)((0, import_lib2.$EXPECT)($R24, "PropertyDefinition /[!+-]?/")), PropertyName, (0, import_lib2.$Y)(ObjectPropertyDelimiter)), function($skip, $loc, $0, $1, $2, $3, $4) {
    var ws = $1, toggle = $2, id = $3;
    if (toggle) {
      let value = toggle === "+" ? "true" : "false";
      return {
        type: "Property",
        children: [ws, id, ": ", value],
        name: id,
        names: id.names,
        value
      };
    }
    return {
      type: "Property",
      children: [ws, id],
      name: id,
      names: id.names,
      value: id
    };
  }), PropertyDefinition$3 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$E)(_), MethodDefinition), function($skip, $loc, $0, $1, $2) {
    var ws = $1, def = $2;
    return def.type === "MultiMethodDefinition" ? {
      children: def.children.flatMap((c, i) => i ? [",", c] : [c])
    } : !def.block || def.block.empty ? $skip : prepend(ws, def);
  }), PropertyDefinition$4 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$E)(_), DotDotDot, Expression), function($skip, $loc, $0, $1, $2, $3) {
    var ws = $1, dots = $2, exp = $3;
    return {
      type: "SpreadProperty",
      children: [ws, dots, exp],
      names: exp.names,
      dots,
      value: exp
    };
  }), PropertyDefinition$5 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$E)(_), (0, import_lib2.$N)((0, import_lib2.$C)(EOS, (0, import_lib2.$EXPECT)($L7, 'PropertyDefinition "."'))), (0, import_lib2.$Q)(UnaryOp), CallExpression, (0, import_lib2.$E)(UnaryPostfix)), function($skip, $loc, $0, $1, $2, $3, $4, $5) {
    var ws = $1, pre = $3, value = $4, post = $5;
    if (!pre.length && !post)
      switch (value.type) {
        // `{identifier}` remains `{identifier}`, the one shorthand JS supports
        case "Identifier":
          return prepend(ws, value);
        // PropertyGlob like x.{a,b} turns into ObjectExpression {a: x.a, b: x.b}
        // (via `processCallMemberExpression`)
        case "ObjectExpression":
          let first = value.properties[0];
          return first && (first = {
            ...first,
            children: [ws, ...first.children],
            hoistDec: value.hoistDec
          }), [first, ...value.properties.slice(1)];
      }
    let last = lastAccessInCallExpression(value);
    if (!last) return $skip;
    let name, ref, refAssignment, { expression, type } = last;
    if (type === "Index")
      ({ ref, refAssignment } = maybeRefAssignment(expression)), refAssignment ? (name = {
        type: "ComputedPropertyName",
        children: [last.children[0], "(", refAssignment, ",", ref, ")", ...last.children.slice(-2)]
      }, value = {
        ...value,
        children: value.children.map((c) => c === last ? {
          type: "Index",
          children: ["[", ref, "]"]
        } : c)
      }) : name = {
        type: "ComputedPropertyName",
        children: last.children
      };
    else if ({ name } = last, !name) return $skip;
    return name[0] === "#" && (name = name.slice(1)), {
      type: "Property",
      children: [ws, name, ": ", processUnaryExpression(pre, value, post)],
      name,
      names: [],
      value
    };
  }), PropertyDefinition$$ = [PropertyDefinition$0, PropertyDefinition$1, PropertyDefinition$2, PropertyDefinition$3, PropertyDefinition$4, PropertyDefinition$5];
  function PropertyDefinition(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "PropertyDefinition", PropertyDefinition$$);
  }
  var NamedProperty$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(PropertyName, (0, import_lib2.$E)(_), Colon, PostfixedExpression), function($skip, $loc, $0, $1, $2, $3, $4) {
    var name = $1, exp = $4;
    return {
      type: "Property",
      children: $0,
      name,
      names: exp.names || [],
      value: exp
    };
  });
  function NamedProperty(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "NamedProperty", NamedProperty$0);
  }
  var SnugNamedProperty$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(PropertyName, Colon, MaybeNestedExpression, (0, import_lib2.$E)((0, import_lib2.$S)((0, import_lib2.$S)((0, import_lib2.$E)(_), PostfixStatement), (0, import_lib2.$Y)((0, import_lib2.$S)(Nested, NamedProperty))))), function($skip, $loc, $0, $1, $2, $3, $4) {
    var name = $1, colon = $2, expression = $3, post = $4;
    return post && (expression = attachPostfixStatementAsExpression(expression, post[0])), {
      type: "Property",
      children: [name, colon, expression],
      name,
      names: expression.names || []
    };
  });
  function SnugNamedProperty(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "SnugNamedProperty", SnugNamedProperty$0);
  }
  var PropertyName$0 = NumericLiteral, PropertyName$1 = ComputedPropertyName, PropertyName$2 = StringLiteral, PropertyName$3 = (0, import_lib2.$TV)((0, import_lib2.$TEXT)((0, import_lib2.$S)((0, import_lib2.$E)(IdentifierName), (0, import_lib2.$EXPECT)($L23, 'PropertyName "-"'), (0, import_lib2.$EXPECT)($R25, "PropertyName /(?:\\p{ID_Continue}|[\\u200C\\u200D$-])*/"))), function($skip, $loc, $0, $1) {
    return {
      token: `"${$1}"`,
      $loc
    };
  }), PropertyName$4 = IdentifierName, PropertyName$5 = LengthShorthand, PropertyName$6 = SymbolElement, PropertyName$$ = [PropertyName$0, PropertyName$1, PropertyName$2, PropertyName$3, PropertyName$4, PropertyName$5, PropertyName$6];
  function PropertyName(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "PropertyName", PropertyName$$);
  }
  var ComputedPropertyName$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(OpenBracket, PostfixedExpression, __, CloseBracket), function($skip, $loc, $0, $1, $2, $3, $4) {
    var expression = $2;
    return {
      type: "ComputedPropertyName",
      children: $0,
      expression
    };
  }), ComputedPropertyName$1 = (0, import_lib2.$TS)((0, import_lib2.$S)(InsertOpenBracket, TemplateLiteral, InsertCloseBracket), function($skip, $loc, $0, $1, $2, $3) {
    var expression = $2;
    return $2.type === "StringLiteral" ? $2 : {
      type: "ComputedPropertyName",
      children: $0,
      expression,
      implicit: !0
    };
  }), ComputedPropertyName$2 = (0, import_lib2.$TS)((0, import_lib2.$S)(InsertOpenBracket, (0, import_lib2.$EXPECT)($R14, "ComputedPropertyName /[+-]/"), NumericLiteral, InsertCloseBracket), function($skip, $loc, $0, $1, $2, $3, $4) {
    let expression = [$2, $3];
    return {
      type: "ComputedPropertyName",
      expression,
      children: [$1, expression, $4],
      implicit: !0
    };
  }), ComputedPropertyName$$ = [ComputedPropertyName$0, ComputedPropertyName$1, ComputedPropertyName$2];
  function ComputedPropertyName(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "ComputedPropertyName", ComputedPropertyName$$);
  }
  var Decorator$0 = (0, import_lib2.$S)(AtAt, CallExpression);
  function Decorator(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "Decorator", Decorator$0);
  }
  var Decorators$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(ForbidClassImplicitCall, (0, import_lib2.$Q)((0, import_lib2.$S)(__, Decorator)), __, RestoreClassImplicitCall), function($skip, $loc, $0, $1, $2, $3, $4) {
    var decorators = $2;
    return decorators.length ? $0 : $skip;
  });
  function Decorators(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "Decorators", Decorators$0);
  }
  var MethodDefinition$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(Abstract, __, MethodSignature), function($skip, $loc, $0, $1, $2, $3) {
    var signature = $3;
    return {
      type: "MethodDefinition",
      children: $0,
      name: signature.name,
      abstract: !0,
      signature,
      parameters: signature.parameters,
      async: signature.async,
      generator: signature.generator,
      ts: !0
    };
  }), MethodDefinition$1 = (0, import_lib2.$TS)((0, import_lib2.$S)(MethodSignature, (0, import_lib2.$N)((0, import_lib2.$C)(PropertyAccess, ExplicitPropertyGlob, UnaryPostfix, NonNullAssertion)), (0, import_lib2.$E)(BracedBlock)), function($skip, $loc, $0, $1, $2, $3) {
    var signature = $1, block = $3;
    return {
      type: "MethodDefinition",
      children: $0,
      name: signature.name,
      signature,
      block,
      parameters: signature.parameters,
      async: signature.async,
      generator: signature.generator
    };
  }), MethodDefinition$2 = (0, import_lib2.$TS)((0, import_lib2.$S)(GetOrSet, (0, import_lib2.$E)(_), ForbidIndentedApplication, (0, import_lib2.$E)((0, import_lib2.$S)(MemberBase, (0, import_lib2.$Q)(CallExpressionRest), (0, import_lib2.$E)(ReturnTypeSuffix))), RestoreIndentedApplication, (0, import_lib2.$E)(BracedBlock)), function($skip, $loc, $0, $1, $2, $3, $4, $5, $6) {
    var kind = $1, ws = $2, content = $4, block = $6;
    if (!content) return $skip;
    let [base, rest, returnType] = content, value = [base, rest];
    if (!rest.length) {
      let name2;
      if (base.type === "MemberExpression") {
        let lastAccess2 = lastAccessInCallExpression(base);
        lastAccess2 && ({ name: name2 } = lastAccess2);
      }
      if (name2 || ({ name: name2 } = base), !name2) return $skip;
      name2[0] === "#" && (name2 = name2.slice(1));
      let autoReturn = !block || base.type !== "Identifier";
      return makeGetterMethod(name2, ws, base, returnType, block, kind, autoReturn);
    }
    let last = rest[rest.length - 1];
    for (; Array.isArray(last); )
      last = last[last.length - 1];
    switch (last.type) {
      case "Call":
        return $skip;
      case "PropertyAccess":
        let { name: name2 } = last;
        return makeGetterMethod(name2, ws, value, returnType, block, kind);
      case "PropertyGlob":
        return {
          type: "MultiMethodDefinition",
          children: last.object.properties.map((p) => {
            let { name: name3, type } = p, v;
            switch (type) {
              case "Identifier":
                v = trimFirstSpace(p);
                break;
              case "Property":
                let { value: value2 } = p;
                value2.privateShorthand ? v = value2.privateId : v = trimFirstSpace(value2);
                break;
            }
            let exp = processCallMemberExpression({
              type: "CallExpression",
              children: [base, ...rest.slice(0, -1), {
                type: "PropertyAccess",
                children: [last.dot, {
                  ...v,
                  children: [v.children.slice(0, 2)]
                  // Remove potential delimiter
                }]
              }]
            });
            return makeGetterMethod(name3, ws, exp, returnType, block, kind);
          })
        };
    }
    let lastAccess = lastAccessInCallExpression({ children: rest }), { name } = lastAccess;
    return makeGetterMethod(name, ws, value, returnType, block, kind);
  }), MethodDefinition$$ = [MethodDefinition$0, MethodDefinition$1, MethodDefinition$2];
  function MethodDefinition(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "MethodDefinition", MethodDefinition$$);
  }
  var MethodModifier$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(GetOrSet, (0, import_lib2.$E)(_), (0, import_lib2.$Y)(ClassElementName)), function($skip, $loc, $0, $1, $2, $3) {
    var kind = $1, ws = $2;
    return {
      // no async or generator, because getters and setters can't be
      modifier: {
        async: !1,
        generator: !1,
        get: kind.token === "get",
        set: kind.token === "set"
      },
      children: [kind, ws]
    };
  }), MethodModifier$1 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$E)((0, import_lib2.$S)(Async, __)), (0, import_lib2.$E)((0, import_lib2.$S)(Star, __))), function($skip, $loc, $0, $1, $2) {
    var async = $1, generator = $2;
    return async || (async = []), generator || (generator = []), {
      async,
      generator,
      modifier: {
        async: !!async.length,
        get: !1,
        set: !1,
        generator: !!generator.length
      },
      children: [async, generator]
    };
  }), MethodModifier$$ = [MethodModifier$0, MethodModifier$1];
  function MethodModifier(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "MethodModifier", MethodModifier$$);
  }
  var MethodSignature$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(ConstructorShorthand, NonEmptyParameters), function($skip, $loc, $0, $1, $2) {
    var parameters = $2;
    return {
      type: "MethodSignature",
      children: $0,
      name: $1.token,
      modifier: {},
      returnType: void 0,
      parameters
    };
  }), MethodSignature$1 = (0, import_lib2.$TS)((0, import_lib2.$S)(MethodModifier, ClassElementName, (0, import_lib2.$E)(_), (0, import_lib2.$E)(QuestionMark), (0, import_lib2.$E)(_), NonEmptyParameters, (0, import_lib2.$E)(ReturnTypeSuffix)), function($skip, $loc, $0, $1, $2, $3, $4, $5, $6, $7) {
    var modifier = $1, name = $2, ws1 = $3, optional = $4, ws2 = $5, parameters = $6, returnType = $7;
    return name.name ? name = name.name : name.token && (name = name.token.match(/^(?:"|')/) ? name.token.slice(1, -1) : name.token), optional && (optional = { ...optional, ts: !0 }), {
      type: "MethodSignature",
      children: [...modifier.children, name, ws1, optional, ws2, parameters, returnType],
      async: modifier.async,
      generator: modifier.generator,
      name,
      optional,
      modifier: modifier.modifier,
      // get/set/async/generator
      returnType,
      parameters
    };
  }), MethodSignature$$ = [MethodSignature$0, MethodSignature$1];
  function MethodSignature(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "MethodSignature", MethodSignature$$);
  }
  var ClassElementName$0 = PropertyName, ClassElementName$1 = LengthShorthand, ClassElementName$2 = PrivateIdentifier, ClassElementName$3 = SymbolElement, ClassElementName$$ = [ClassElementName$0, ClassElementName$1, ClassElementName$2, ClassElementName$3];
  function ClassElementName(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "ClassElementName", ClassElementName$$);
  }
  var PrivateIdentifier$0 = (0, import_lib2.$TV)((0, import_lib2.$TEXT)((0, import_lib2.$S)(Hash, IdentifierName)), function($skip, $loc, $0, $1) {
    var id = $0;
    return {
      type: "Identifier",
      name: id,
      names: [id],
      children: [{
        $loc,
        token: id
      }]
    };
  });
  function PrivateIdentifier(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "PrivateIdentifier", PrivateIdentifier$0);
  }
  var WAssignmentOp$0 = (0, import_lib2.$S)(__, AssignmentOp), WAssignmentOp$1 = (0, import_lib2.$S)((0, import_lib2.$E)(_), OperatorAssignmentOp), WAssignmentOp$$ = [WAssignmentOp$0, WAssignmentOp$1];
  function WAssignmentOp(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "WAssignmentOp", WAssignmentOp$$);
  }
  var AssignmentOp$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(AssignmentOpSymbol, (0, import_lib2.$E)(_)), function($skip, $loc, $0, $1, $2) {
    return $2?.length ? typeof $1 != "string" ? { ...$1, children: [...$1.children, $2] } : {
      token: $1,
      children: [$1, ...$2]
    } : typeof $1 != "string" ? $1 : { $loc, token: $1 };
  });
  function AssignmentOp(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "AssignmentOp", AssignmentOp$0);
  }
  var OperatorAssignmentOp$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(Xor, Equals, (0, import_lib2.$E)(_)), function($skip, $loc, $0, $1, $2, $3) {
    return {
      special: !0,
      call: getHelperRef("xor"),
      children: [$2, ...$3 || []]
    };
  }), OperatorAssignmentOp$1 = (0, import_lib2.$TS)((0, import_lib2.$S)(Xnor, Equals, (0, import_lib2.$E)(_)), function($skip, $loc, $0, $1, $2, $3) {
    return {
      special: !0,
      call: getHelperRef("xnor"),
      children: [$2, ...$3 || []]
    };
  }), OperatorAssignmentOp$2 = (0, import_lib2.$TS)((0, import_lib2.$S)(CoffeeDivEnabled, (0, import_lib2.$EXPECT)($L48, 'OperatorAssignmentOp "//"'), Equals, (0, import_lib2.$E)(_)), function($skip, $loc, $0, $1, $2, $3, $4) {
    return {
      special: !0,
      call: getHelperRef("div"),
      children: [$3, ...$4 || []]
    };
  }), OperatorAssignmentOp$3 = (0, import_lib2.$TS)((0, import_lib2.$S)(Identifier, Equals, (0, import_lib2.$E)(_)), function($skip, $loc, $0, $1, $2, $3) {
    return {
      special: !0,
      call: $1,
      children: [$2, ...$3 || []]
    };
  }), OperatorAssignmentOp$$ = [OperatorAssignmentOp$0, OperatorAssignmentOp$1, OperatorAssignmentOp$2, OperatorAssignmentOp$3];
  function OperatorAssignmentOp(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "OperatorAssignmentOp", OperatorAssignmentOp$$);
  }
  var AssignmentOpSymbol$0 = (0, import_lib2.$EXPECT)($L49, 'AssignmentOpSymbol "**="'), AssignmentOpSymbol$1 = (0, import_lib2.$EXPECT)($L50, 'AssignmentOpSymbol "*="'), AssignmentOpSymbol$2 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$C)((0, import_lib2.$EXPECT)($L51, 'AssignmentOpSymbol "%/"'), (0, import_lib2.$EXPECT)($L52, 'AssignmentOpSymbol "\xF7"')), Equals), function($skip, $loc, $0, $1, $2) {
    return {
      special: !0,
      call: getHelperRef("div"),
      children: [$2]
    };
  }), AssignmentOpSymbol$3 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$EXPECT)($L53, 'AssignmentOpSymbol "%%"'), Equals), function($skip, $loc, $0, $1, $2) {
    return {
      special: !0,
      call: getHelperRef("modulo"),
      children: [$2]
    };
  }), AssignmentOpSymbol$4 = (0, import_lib2.$EXPECT)($L54, 'AssignmentOpSymbol "/="'), AssignmentOpSymbol$5 = (0, import_lib2.$EXPECT)($L55, 'AssignmentOpSymbol "%="'), AssignmentOpSymbol$6 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$C)((0, import_lib2.$EXPECT)($L9, 'AssignmentOpSymbol "++"'), (0, import_lib2.$EXPECT)($L11, 'AssignmentOpSymbol "\u29FA"')), Equals), function($skip, $loc, $0, $1, $2) {
    return {
      special: !0,
      call: getHelperRef("concatAssign"),
      omitLhs: !0,
      children: [$2]
    };
  }), AssignmentOpSymbol$7 = (0, import_lib2.$EXPECT)($L56, 'AssignmentOpSymbol "+="'), AssignmentOpSymbol$8 = (0, import_lib2.$EXPECT)($L57, 'AssignmentOpSymbol "-="'), AssignmentOpSymbol$9 = (0, import_lib2.$EXPECT)($L58, 'AssignmentOpSymbol "<<="'), AssignmentOpSymbol$10 = (0, import_lib2.$T)((0, import_lib2.$EXPECT)($L59, 'AssignmentOpSymbol "\u226A="'), function(value) {
    return "<<=";
  }), AssignmentOpSymbol$11 = (0, import_lib2.$EXPECT)($L60, 'AssignmentOpSymbol ">>>="'), AssignmentOpSymbol$12 = (0, import_lib2.$T)((0, import_lib2.$EXPECT)($L61, 'AssignmentOpSymbol "\u22D9="'), function(value) {
    return ">>>=";
  }), AssignmentOpSymbol$13 = (0, import_lib2.$EXPECT)($L62, 'AssignmentOpSymbol ">>="'), AssignmentOpSymbol$14 = (0, import_lib2.$T)((0, import_lib2.$EXPECT)($L63, 'AssignmentOpSymbol "\u226B="'), function(value) {
    return ">>=";
  }), AssignmentOpSymbol$15 = (0, import_lib2.$EXPECT)($L64, 'AssignmentOpSymbol "&&="'), AssignmentOpSymbol$16 = (0, import_lib2.$EXPECT)($L65, 'AssignmentOpSymbol "&="'), AssignmentOpSymbol$17 = (0, import_lib2.$EXPECT)($L66, 'AssignmentOpSymbol "^="'), AssignmentOpSymbol$18 = (0, import_lib2.$EXPECT)($L67, 'AssignmentOpSymbol "||="'), AssignmentOpSymbol$19 = (0, import_lib2.$T)((0, import_lib2.$EXPECT)($L68, 'AssignmentOpSymbol "\u2016="'), function(value) {
    return "||=";
  }), AssignmentOpSymbol$20 = (0, import_lib2.$EXPECT)($L69, 'AssignmentOpSymbol "|="'), AssignmentOpSymbol$21 = (0, import_lib2.$EXPECT)($L70, 'AssignmentOpSymbol "??="'), AssignmentOpSymbol$22 = (0, import_lib2.$T)((0, import_lib2.$EXPECT)($L71, 'AssignmentOpSymbol "\u2047="'), function(value) {
    return "??=";
  }), AssignmentOpSymbol$23 = (0, import_lib2.$T)((0, import_lib2.$EXPECT)($L72, 'AssignmentOpSymbol "?="'), function(value) {
    return "??=";
  }), AssignmentOpSymbol$24 = (0, import_lib2.$T)((0, import_lib2.$S)((0, import_lib2.$EXPECT)($L3, 'AssignmentOpSymbol "="'), (0, import_lib2.$N)((0, import_lib2.$EXPECT)($R26, "AssignmentOpSymbol /[=>]/"))), function(value) {
    return value[0];
  }), AssignmentOpSymbol$25 = (0, import_lib2.$T)((0, import_lib2.$S)(CoffeeWordAssignmentOp), function(value) {
    return value[0];
  }), AssignmentOpSymbol$$ = [AssignmentOpSymbol$0, AssignmentOpSymbol$1, AssignmentOpSymbol$2, AssignmentOpSymbol$3, AssignmentOpSymbol$4, AssignmentOpSymbol$5, AssignmentOpSymbol$6, AssignmentOpSymbol$7, AssignmentOpSymbol$8, AssignmentOpSymbol$9, AssignmentOpSymbol$10, AssignmentOpSymbol$11, AssignmentOpSymbol$12, AssignmentOpSymbol$13, AssignmentOpSymbol$14, AssignmentOpSymbol$15, AssignmentOpSymbol$16, AssignmentOpSymbol$17, AssignmentOpSymbol$18, AssignmentOpSymbol$19, AssignmentOpSymbol$20, AssignmentOpSymbol$21, AssignmentOpSymbol$22, AssignmentOpSymbol$23, AssignmentOpSymbol$24, AssignmentOpSymbol$25];
  function AssignmentOpSymbol(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "AssignmentOpSymbol", AssignmentOpSymbol$$);
  }
  var CoffeeWordAssignmentOp$0 = (0, import_lib2.$T)((0, import_lib2.$EXPECT)($L73, 'CoffeeWordAssignmentOp "and="'), function(value) {
    return "&&=";
  }), CoffeeWordAssignmentOp$1 = (0, import_lib2.$T)((0, import_lib2.$EXPECT)($L74, 'CoffeeWordAssignmentOp "or="'), function(value) {
    return "||=";
  }), CoffeeWordAssignmentOp$$ = [CoffeeWordAssignmentOp$0, CoffeeWordAssignmentOp$1];
  function CoffeeWordAssignmentOp(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "CoffeeWordAssignmentOp", CoffeeWordAssignmentOp$$);
  }
  var NotDedentedBinaryOp$0 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$E)(IndentedFurther), (0, import_lib2.$E)(_), BinaryOp), function($skip, $loc, $0, $1, $2, $3) {
    var ws1 = $1, ws2 = $2, op = $3;
    let ws = [];
    return ws1 && ws.push(...ws1), ws2 && ws.push(...ws2), [ws, op];
  }), NotDedentedBinaryOp$1 = (0, import_lib2.$TS)((0, import_lib2.$S)(NestedBinaryOpAllowed, Nested, (0, import_lib2.$E)(_), (0, import_lib2.$N)(Identifier), (0, import_lib2.$C)((0, import_lib2.$N)((0, import_lib2.$EXPECT)($L75, 'NotDedentedBinaryOp "*"')), (0, import_lib2.$N)(ImportDeclaration)), BinaryOp), function($skip, $loc, $0, $1, $2, $3, $4, $5, $6) {
    var ws1 = $2, ws2 = $3, op = $6;
    let ws = [...ws1];
    return ws2 && ws.push(...ws2), [ws, op];
  }), NotDedentedBinaryOp$$ = [NotDedentedBinaryOp$0, NotDedentedBinaryOp$1];
  function NotDedentedBinaryOp(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "NotDedentedBinaryOp", NotDedentedBinaryOp$$);
  }
  var IdentifierBinaryOp$0 = (0, import_lib2.$TV)(Identifier, function($skip, $loc, $0, $1) {
    var id = $0;
    return state.operators.has(id.name) ? id : $skip;
  });
  function IdentifierBinaryOp(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "IdentifierBinaryOp", IdentifierBinaryOp$0);
  }
  var BinaryOp$0 = (0, import_lib2.$T)((0, import_lib2.$S)((0, import_lib2.$EXPECT)($R27, "BinaryOp /(?=\\p{ID_Start}|[_$^\u226A\u226B\u22D9\u2264\u2265\u2208\u220B\u2209\u220C\u2263\u2261\u2262\u2260=\u2A76\u2A75\u2016\u2047&|*\\/!?%\xF7<>\u29FA+-])/"), _BinaryOp), function(value) {
    var op = value[1];
    return op;
  });
  function BinaryOp(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "BinaryOp", BinaryOp$0);
  }
  var _BinaryOp$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(BinaryOpSymbol), function($skip, $loc, $0, $1) {
    return typeof $1 == "string" ? { $loc, token: $1 } : $1;
  }), _BinaryOp$1 = (0, import_lib2.$TV)(Identifier, function($skip, $loc, $0, $1) {
    var id = $0;
    return state.operators.has(id.name) ? {
      token: id.name,
      call: id,
      special: !0,
      ...state.operators.get(id.name)
    } : $skip;
  }), _BinaryOp$2 = (0, import_lib2.$TS)((0, import_lib2.$S)(OmittedNegation, __, Identifier), function($skip, $loc, $0, $1, $2, $3) {
    var id = $3;
    return state.operators.has(id.name) ? {
      token: id.name,
      call: id,
      special: !0,
      negated: !0,
      ...state.operators.get(id.name)
    } : $skip;
  }), _BinaryOp$$ = [_BinaryOp$0, _BinaryOp$1, _BinaryOp$2];
  function _BinaryOp(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "_BinaryOp", _BinaryOp$$);
  }
  var BinaryOpSymbol$0 = (0, import_lib2.$EXPECT)($L76, 'BinaryOpSymbol "**"'), BinaryOpSymbol$1 = (0, import_lib2.$EXPECT)($L75, 'BinaryOpSymbol "*"'), BinaryOpSymbol$2 = (0, import_lib2.$TV)((0, import_lib2.$C)((0, import_lib2.$EXPECT)($L51, 'BinaryOpSymbol "%/"'), (0, import_lib2.$EXPECT)($L52, 'BinaryOpSymbol "\xF7"'), (0, import_lib2.$S)(CoffeeDivEnabled, (0, import_lib2.$EXPECT)($L48, 'BinaryOpSymbol "//"'))), function($skip, $loc, $0, $1) {
    return {
      call: getHelperRef("div"),
      special: !0,
      prec: "/"
    };
  }), BinaryOpSymbol$3 = (0, import_lib2.$TV)((0, import_lib2.$EXPECT)($L53, 'BinaryOpSymbol "%%"'), function($skip, $loc, $0, $1) {
    return {
      call: getHelperRef("modulo"),
      special: !0,
      prec: "%"
    };
  }), BinaryOpSymbol$4 = (0, import_lib2.$EXPECT)($L77, 'BinaryOpSymbol "/"'), BinaryOpSymbol$5 = (0, import_lib2.$EXPECT)($L78, 'BinaryOpSymbol "%"'), BinaryOpSymbol$6 = (0, import_lib2.$TV)((0, import_lib2.$C)((0, import_lib2.$EXPECT)($L9, 'BinaryOpSymbol "++"'), (0, import_lib2.$EXPECT)($L11, 'BinaryOpSymbol "\u29FA"')), function($skip, $loc, $0, $1) {
    return {
      method: "concat",
      special: !0
    };
  }), BinaryOpSymbol$7 = (0, import_lib2.$EXPECT)($L79, 'BinaryOpSymbol "+"'), BinaryOpSymbol$8 = (0, import_lib2.$EXPECT)($L23, 'BinaryOpSymbol "-"'), BinaryOpSymbol$9 = (0, import_lib2.$EXPECT)($L80, 'BinaryOpSymbol "<="'), BinaryOpSymbol$10 = (0, import_lib2.$T)((0, import_lib2.$EXPECT)($L81, 'BinaryOpSymbol "\u2264"'), function(value) {
    return "<=";
  }), BinaryOpSymbol$11 = (0, import_lib2.$EXPECT)($L82, 'BinaryOpSymbol ">="'), BinaryOpSymbol$12 = (0, import_lib2.$T)((0, import_lib2.$EXPECT)($L83, 'BinaryOpSymbol "\u2265"'), function(value) {
    return ">=";
  }), BinaryOpSymbol$13 = (0, import_lib2.$TV)((0, import_lib2.$EXPECT)($L22, 'BinaryOpSymbol "<?"'), function($skip, $loc, $0, $1) {
    return {
      $loc,
      token: "instanceof",
      spaced: !0,
      relational: !0,
      special: !0
    };
  }), BinaryOpSymbol$14 = (0, import_lib2.$TV)((0, import_lib2.$EXPECT)($L84, 'BinaryOpSymbol "!<?"'), function($skip, $loc, $0, $1) {
    return {
      $loc,
      token: "instanceof",
      spaced: !0,
      relational: !0,
      special: !0,
      negated: !0
    };
  }), BinaryOpSymbol$15 = (0, import_lib2.$EXPECT)($L85, 'BinaryOpSymbol "<<"'), BinaryOpSymbol$16 = (0, import_lib2.$T)((0, import_lib2.$EXPECT)($L86, 'BinaryOpSymbol "\u226A"'), function(value) {
    return "<<";
  }), BinaryOpSymbol$17 = (0, import_lib2.$EXPECT)($L18, 'BinaryOpSymbol "<"'), BinaryOpSymbol$18 = (0, import_lib2.$EXPECT)($L87, 'BinaryOpSymbol ">>>"'), BinaryOpSymbol$19 = (0, import_lib2.$T)((0, import_lib2.$EXPECT)($L88, 'BinaryOpSymbol "\u22D9"'), function(value) {
    return ">>>";
  }), BinaryOpSymbol$20 = (0, import_lib2.$EXPECT)($L89, 'BinaryOpSymbol ">>"'), BinaryOpSymbol$21 = (0, import_lib2.$T)((0, import_lib2.$EXPECT)($L90, 'BinaryOpSymbol "\u226B"'), function(value) {
    return ">>";
  }), BinaryOpSymbol$22 = (0, import_lib2.$EXPECT)($L45, 'BinaryOpSymbol ">"'), BinaryOpSymbol$23 = (0, import_lib2.$EXPECT)($L91, 'BinaryOpSymbol "!=="'), BinaryOpSymbol$24 = (0, import_lib2.$T)((0, import_lib2.$EXPECT)($L92, 'BinaryOpSymbol "\u2262"'), function(value) {
    return "!==";
  }), BinaryOpSymbol$25 = (0, import_lib2.$TV)((0, import_lib2.$C)((0, import_lib2.$EXPECT)($L93, 'BinaryOpSymbol "!="'), (0, import_lib2.$EXPECT)($L94, 'BinaryOpSymbol "\u2260"')), function($skip, $loc, $0, $1) {
    return config.coffeeEq ? "!==" : "!=";
  }), BinaryOpSymbol$26 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$EXPECT)($L95, 'BinaryOpSymbol "isnt"'), NonIdContinue), function($skip, $loc, $0, $1, $2) {
    return config.coffeeIsnt ? "!==" : $skip;
  }), BinaryOpSymbol$27 = (0, import_lib2.$EXPECT)($L96, 'BinaryOpSymbol "==="'), BinaryOpSymbol$28 = (0, import_lib2.$T)((0, import_lib2.$C)((0, import_lib2.$EXPECT)($L97, 'BinaryOpSymbol "\u2263"'), (0, import_lib2.$EXPECT)($L98, 'BinaryOpSymbol "\u2A76"')), function(value) {
    return "===";
  }), BinaryOpSymbol$29 = (0, import_lib2.$TV)((0, import_lib2.$C)((0, import_lib2.$EXPECT)($L99, 'BinaryOpSymbol "=="'), (0, import_lib2.$EXPECT)($L100, 'BinaryOpSymbol "\u2261"'), (0, import_lib2.$EXPECT)($L101, 'BinaryOpSymbol "\u2A75"')), function($skip, $loc, $0, $1) {
    return config.coffeeEq ? "===" : "==";
  }), BinaryOpSymbol$30 = (0, import_lib2.$T)((0, import_lib2.$S)((0, import_lib2.$EXPECT)($L102, 'BinaryOpSymbol "and"'), NonIdContinue), function(value) {
    return "&&";
  }), BinaryOpSymbol$31 = (0, import_lib2.$EXPECT)($L103, 'BinaryOpSymbol "&&"'), BinaryOpSymbol$32 = (0, import_lib2.$T)((0, import_lib2.$S)((0, import_lib2.$EXPECT)($L104, 'BinaryOpSymbol "or"'), NonIdContinue), function(value) {
    return "||";
  }), BinaryOpSymbol$33 = (0, import_lib2.$EXPECT)($L105, 'BinaryOpSymbol "||"'), BinaryOpSymbol$34 = (0, import_lib2.$T)((0, import_lib2.$EXPECT)($L106, 'BinaryOpSymbol "\u2016"'), function(value) {
    return "||";
  }), BinaryOpSymbol$35 = (0, import_lib2.$TV)((0, import_lib2.$C)((0, import_lib2.$EXPECT)($L107, 'BinaryOpSymbol "^^"'), (0, import_lib2.$S)((0, import_lib2.$EXPECT)($L108, 'BinaryOpSymbol "xor"'), NonIdContinue)), function($skip, $loc, $0, $1) {
    return {
      call: getHelperRef("xor"),
      special: !0,
      prec: "^^"
    };
  }), BinaryOpSymbol$36 = (0, import_lib2.$TV)((0, import_lib2.$C)((0, import_lib2.$EXPECT)($R28, "BinaryOpSymbol /!\\^\\^?/"), (0, import_lib2.$S)((0, import_lib2.$EXPECT)($L109, 'BinaryOpSymbol "xnor"'), NonIdContinue)), function($skip, $loc, $0, $1) {
    return {
      call: getHelperRef("xnor"),
      special: !0,
      prec: "^^"
    };
  }), BinaryOpSymbol$37 = (0, import_lib2.$EXPECT)($L110, 'BinaryOpSymbol "??"'), BinaryOpSymbol$38 = (0, import_lib2.$T)((0, import_lib2.$EXPECT)($L111, 'BinaryOpSymbol "\u2047"'), function(value) {
    return "??";
  }), BinaryOpSymbol$39 = (0, import_lib2.$T)((0, import_lib2.$S)((0, import_lib2.$EXPECT)($L6, 'BinaryOpSymbol "?"'), CoffeeBinaryExistentialEnabled), function(value) {
    return "??";
  }), BinaryOpSymbol$40 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$EXPECT)($L112, 'BinaryOpSymbol "instanceof"'), NonIdContinue), function($skip, $loc, $0, $1, $2) {
    return {
      $loc,
      token: $1,
      spaced: !0,
      relational: !0,
      special: !0
      // for typeof shorthand
    };
  }), BinaryOpSymbol$41 = (0, import_lib2.$T)((0, import_lib2.$S)(CoffeeOfEnabled, CoffeeOfOp), function(value) {
    var op = value[1];
    return op;
  }), BinaryOpSymbol$42 = (0, import_lib2.$TS)((0, import_lib2.$S)(OmittedNegation, __, NotOp), function($skip, $loc, $0, $1, $2, $3) {
    var op = $3;
    return { ...op, $loc };
  }), BinaryOpSymbol$43 = (0, import_lib2.$TV)((0, import_lib2.$C)((0, import_lib2.$S)(Is, __, In), (0, import_lib2.$EXPECT)($L113, 'BinaryOpSymbol "\u2208"')), function($skip, $loc, $0, $1) {
    return {
      method: "includes",
      relational: !0,
      reversed: !0,
      special: !0
    };
  }), BinaryOpSymbol$44 = (0, import_lib2.$TV)((0, import_lib2.$EXPECT)($L114, 'BinaryOpSymbol "\u220B"'), function($skip, $loc, $0, $1) {
    return {
      method: "includes",
      relational: !0,
      special: !0
    };
  }), BinaryOpSymbol$45 = (0, import_lib2.$TV)((0, import_lib2.$EXPECT)($L115, 'BinaryOpSymbol "\u220C"'), function($skip, $loc, $0, $1) {
    return {
      method: "includes",
      relational: !0,
      special: !0,
      negated: !0
    };
  }), BinaryOpSymbol$46 = (0, import_lib2.$TV)((0, import_lib2.$C)((0, import_lib2.$S)(Is, __, OmittedNegation, __, In), (0, import_lib2.$EXPECT)($L116, 'BinaryOpSymbol "\u2209"')), function($skip, $loc, $0, $1) {
    return {
      method: "includes",
      relational: !0,
      reversed: !0,
      special: !0,
      negated: !0
    };
  }), BinaryOpSymbol$47 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$N)(CoffeeNotEnabled), Is, __, Not), function($skip, $loc, $0, $1, $2, $3, $4) {
    return config.objectIs ? {
      call: getHelperRef("is"),
      relational: !0,
      special: !0,
      asConst: !0,
      negated: !0
    } : "!==";
  }), BinaryOpSymbol$48 = (0, import_lib2.$TS)((0, import_lib2.$S)(Is), function($skip, $loc, $0, $1) {
    return config.objectIs ? {
      call: getHelperRef("is"),
      relational: !0,
      special: !0,
      asConst: !0
    } : "===";
  }), BinaryOpSymbol$49 = In, BinaryOpSymbol$50 = (0, import_lib2.$EXPECT)($L117, 'BinaryOpSymbol "&"'), BinaryOpSymbol$51 = (0, import_lib2.$EXPECT)($L21, 'BinaryOpSymbol "^"'), BinaryOpSymbol$52 = (0, import_lib2.$EXPECT)($L118, 'BinaryOpSymbol "|"'), BinaryOpSymbol$$ = [BinaryOpSymbol$0, BinaryOpSymbol$1, BinaryOpSymbol$2, BinaryOpSymbol$3, BinaryOpSymbol$4, BinaryOpSymbol$5, BinaryOpSymbol$6, BinaryOpSymbol$7, BinaryOpSymbol$8, BinaryOpSymbol$9, BinaryOpSymbol$10, BinaryOpSymbol$11, BinaryOpSymbol$12, BinaryOpSymbol$13, BinaryOpSymbol$14, BinaryOpSymbol$15, BinaryOpSymbol$16, BinaryOpSymbol$17, BinaryOpSymbol$18, BinaryOpSymbol$19, BinaryOpSymbol$20, BinaryOpSymbol$21, BinaryOpSymbol$22, BinaryOpSymbol$23, BinaryOpSymbol$24, BinaryOpSymbol$25, BinaryOpSymbol$26, BinaryOpSymbol$27, BinaryOpSymbol$28, BinaryOpSymbol$29, BinaryOpSymbol$30, BinaryOpSymbol$31, BinaryOpSymbol$32, BinaryOpSymbol$33, BinaryOpSymbol$34, BinaryOpSymbol$35, BinaryOpSymbol$36, BinaryOpSymbol$37, BinaryOpSymbol$38, BinaryOpSymbol$39, BinaryOpSymbol$40, BinaryOpSymbol$41, BinaryOpSymbol$42, BinaryOpSymbol$43, BinaryOpSymbol$44, BinaryOpSymbol$45, BinaryOpSymbol$46, BinaryOpSymbol$47, BinaryOpSymbol$48, BinaryOpSymbol$49, BinaryOpSymbol$50, BinaryOpSymbol$51, BinaryOpSymbol$52];
  function BinaryOpSymbol(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "BinaryOpSymbol", BinaryOpSymbol$$);
  }
  var ActualIn$0 = (0, import_lib2.$T)((0, import_lib2.$S)(CoffeeOfEnabled, Of), function(value) {
    return value[1];
  }), ActualIn$1 = (0, import_lib2.$T)((0, import_lib2.$S)((0, import_lib2.$N)(CoffeeOfEnabled), In), function(value) {
    return value[1];
  }), ActualIn$$ = [ActualIn$0, ActualIn$1];
  function ActualIn(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "ActualIn", ActualIn$$);
  }
  var CoffeeOfOp$0 = (0, import_lib2.$T)((0, import_lib2.$S)(Of), function(value) {
    return "in";
  }), CoffeeOfOp$1 = (0, import_lib2.$TS)((0, import_lib2.$S)(In), function($skip, $loc, $0, $1) {
    return {
      call: [getHelperRef("indexOf"), ".call"],
      relational: !0,
      reversed: !0,
      suffix: " >= 0",
      special: !0
    };
  }), CoffeeOfOp$2 = (0, import_lib2.$TS)((0, import_lib2.$S)(OmittedNegation, __, Of, NonIdContinue), function($skip, $loc, $0, $1, $2, $3, $4) {
    return {
      $loc,
      token: "in",
      spaced: !0,
      special: !0,
      negated: !0
    };
  }), CoffeeOfOp$3 = (0, import_lib2.$TS)((0, import_lib2.$S)(OmittedNegation, __, In), function($skip, $loc, $0, $1, $2, $3) {
    return {
      call: [getHelperRef("indexOf"), ".call"],
      relational: !0,
      reversed: !0,
      suffix: " < 0",
      special: !0
    };
  }), CoffeeOfOp$$ = [CoffeeOfOp$0, CoffeeOfOp$1, CoffeeOfOp$2, CoffeeOfOp$3];
  function CoffeeOfOp(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "CoffeeOfOp", CoffeeOfOp$$);
  }
  var NotOp$0 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$EXPECT)($L112, 'NotOp "instanceof"'), NonIdContinue), function($skip, $loc, $0, $1, $2) {
    return {
      $loc,
      token: "instanceof",
      spaced: !0,
      relational: !0,
      special: !0,
      negated: !0
    };
  }), NotOp$1 = (0, import_lib2.$TS)((0, import_lib2.$S)(In), function($skip, $loc, $0, $1) {
    return {
      $loc,
      token: "in",
      spaced: !0,
      special: !0,
      negated: !0
    };
  }), NotOp$$ = [NotOp$0, NotOp$1];
  function NotOp(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "NotOp", NotOp$$);
  }
  var Xor$0 = (0, import_lib2.$EXPECT)($L107, 'Xor "^^"'), Xor$1 = (0, import_lib2.$S)((0, import_lib2.$EXPECT)($L108, 'Xor "xor"'), NonIdContinue), Xor$$ = [Xor$0, Xor$1];
  function Xor(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "Xor", Xor$$);
  }
  var Xnor$0 = (0, import_lib2.$R$0)((0, import_lib2.$EXPECT)($R28, "Xnor /!\\^\\^?/")), Xnor$1 = (0, import_lib2.$EXPECT)($L109, 'Xnor "xnor"'), Xnor$$ = [Xnor$0, Xnor$1];
  function Xnor(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "Xnor", Xnor$$);
  }
  var UnaryOp$0 = (0, import_lib2.$TR)((0, import_lib2.$EXPECT)($R29, "UnaryOp /(?!\\+\\+|--)[!~+-](?!\\s)/"), function($skip, $loc, $0, $1, $2, $3, $4, $5, $6, $7, $8, $9) {
    return { $loc, token: $0 };
  }), UnaryOp$1 = AwaitOp, UnaryOp$2 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$C)(Delete, Void, Typeof), (0, import_lib2.$N)((0, import_lib2.$EXPECT)($R30, "UnaryOp /[:.]/")), (0, import_lib2.$E)(_)), function($skip, $loc, $0, $1, $2, $3) {
    var op = $1, ws = $3;
    return ws ? [op, ws] : [op, [" "]];
  }), UnaryOp$3 = (0, import_lib2.$T)((0, import_lib2.$S)(Not, (0, import_lib2.$N)((0, import_lib2.$EXPECT)($R30, "UnaryOp /[:.]/")), (0, import_lib2.$E)((0, import_lib2.$EXPECT)($L17, 'UnaryOp " "')), (0, import_lib2.$E)(_)), function(value) {
    return [value[0], value[3]];
  }), UnaryOp$$ = [UnaryOp$0, UnaryOp$1, UnaryOp$2, UnaryOp$3];
  function UnaryOp(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "UnaryOp", UnaryOp$$);
  }
  var AwaitOp$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(Await, (0, import_lib2.$E)((0, import_lib2.$S)(Dot, IdentifierName)), (0, import_lib2.$E)(_)), function($skip, $loc, $0, $1, $2, $3) {
    var a = $1, op = $2, ws = $3;
    return {
      ...a,
      op,
      children: [a, ...ws || [" "]]
    };
  });
  function AwaitOp(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "AwaitOp", AwaitOp$0);
  }
  var ModuleItem$0 = (0, import_lib2.$T)((0, import_lib2.$S)(IsBare, (0, import_lib2.$C)(ImportDeclaration, ExportDeclaration)), function(value) {
    return value[1];
  }), ModuleItem$1 = StatementListItem, ModuleItem$$ = [ModuleItem$0, ModuleItem$1];
  function ModuleItem(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "ModuleItem", ModuleItem$$);
  }
  var StatementListItem$0 = Declaration, StatementListItem$1 = BulletedArrayWithTrailing, StatementListItem$2 = (0, import_lib2.$TS)((0, import_lib2.$S)(ImplicitObjectLiteral), function($skip, $loc, $0, $1) {
    return makeLeftHandSideExpression($1);
  }), StatementListItem$3 = PostfixedStatement, StatementListItem$$ = [StatementListItem$0, StatementListItem$1, StatementListItem$2, StatementListItem$3];
  function StatementListItem(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "StatementListItem", StatementListItem$$);
  }
  var PostfixedStatement$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(Statement, (0, import_lib2.$E)((0, import_lib2.$S)((0, import_lib2.$E)(_), PostfixStatement))), function($skip, $loc, $0, $1, $2) {
    var statement = $1, post = $2;
    return post ? addPostfixStatement(statement, ...post) : statement;
  });
  function PostfixedStatement(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "PostfixedStatement", PostfixedStatement$0);
  }
  var NoCommaStatementListItem$0 = Declaration, NoCommaStatementListItem$1 = PostfixedNoCommaStatement, NoCommaStatementListItem$$ = [NoCommaStatementListItem$0, NoCommaStatementListItem$1];
  function NoCommaStatementListItem(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "NoCommaStatementListItem", NoCommaStatementListItem$$);
  }
  var PostfixedNoCommaStatement$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(NoCommaStatement, (0, import_lib2.$E)((0, import_lib2.$S)((0, import_lib2.$E)(_), PostfixStatement))), function($skip, $loc, $0, $1, $2) {
    var statement = $1, post = $2;
    return post ? addPostfixStatement(statement, ...post) : statement;
  });
  function PostfixedNoCommaStatement(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "PostfixedNoCommaStatement", PostfixedNoCommaStatement$0);
  }
  var PostfixedExpression$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(Expression, (0, import_lib2.$E)((0, import_lib2.$S)((0, import_lib2.$E)(_), PostfixStatement))), function($skip, $loc, $0, $1, $2) {
    var expression = $1, post = $2;
    return post ? attachPostfixStatementAsExpression(expression, post) : expression;
  });
  function PostfixedExpression(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "PostfixedExpression", PostfixedExpression$0);
  }
  var PostfixedCommaExpression$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(PostfixedExpression, (0, import_lib2.$C)((0, import_lib2.$S)((0, import_lib2.$E)(_), PostfixStatement), (0, import_lib2.$Q)((0, import_lib2.$S)(CommaDelimiter, AssignmentExpression)))), function($skip, $loc, $0, $1, $2) {
    var expression = $1, post = $2;
    return post.length ? post.length === 2 && !Array.isArray(post[1]) ? attachPostfixStatementAsExpression(expression, post) : $0 : $1;
  });
  function PostfixedCommaExpression(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "PostfixedCommaExpression", PostfixedCommaExpression$0);
  }
  var PostfixStatement$0 = (0, import_lib2.$T)((0, import_lib2.$S)((0, import_lib2.$EXPECT)($R31, "PostfixStatement /(?=for|if|loop|unless|until|while)/"), _PostfixStatement), function(value) {
    return value[1];
  });
  function PostfixStatement(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "PostfixStatement", PostfixStatement$0);
  }
  var _PostfixStatement$0 = ForClause, _PostfixStatement$1 = IfClause, _PostfixStatement$2 = LoopClause, _PostfixStatement$3 = WhileClause, _PostfixStatement$$ = [_PostfixStatement$0, _PostfixStatement$1, _PostfixStatement$2, _PostfixStatement$3];
  function _PostfixStatement(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "_PostfixStatement", _PostfixStatement$$);
  }
  var Statement$0 = KeywordStatement, Statement$1 = VariableStatement, Statement$2 = (0, import_lib2.$T)((0, import_lib2.$S)(IfStatement, (0, import_lib2.$N)(ShouldExpressionize)), function(value) {
    return value[0];
  }), Statement$3 = IterationActualStatement, Statement$4 = (0, import_lib2.$T)((0, import_lib2.$S)(SwitchStatement, (0, import_lib2.$N)(ShouldExpressionize)), function(value) {
    return value[0];
  }), Statement$5 = (0, import_lib2.$T)((0, import_lib2.$S)(TryStatement, (0, import_lib2.$N)(ShouldExpressionize)), function(value) {
    return value[0];
  }), Statement$6 = FinallyClause, Statement$7 = EmptyStatement, Statement$8 = LabelledStatement, Statement$9 = CommaExpressionStatement, Statement$10 = BlockStatement, Statement$$ = [Statement$0, Statement$1, Statement$2, Statement$3, Statement$4, Statement$5, Statement$6, Statement$7, Statement$8, Statement$9, Statement$10];
  function Statement(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "Statement", Statement$$);
  }
  var IterationActualStatement$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(IterationStatement, (0, import_lib2.$N)(ShouldExpressionize)), function($skip, $loc, $0, $1, $2) {
    return $1.generator || $1.reduction ? $skip : $1;
  });
  function IterationActualStatement(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "IterationActualStatement", IterationActualStatement$0);
  }
  var ShouldExpressionize$0 = AllowedTrailingCallExpressions, ShouldExpressionize$1 = (0, import_lib2.$S)(NotDedented, Pipe), ShouldExpressionize$2 = BinaryOpRHS, ShouldExpressionize$3 = UnaryPostfix, ShouldExpressionize$$ = [ShouldExpressionize$0, ShouldExpressionize$1, ShouldExpressionize$2, ShouldExpressionize$3];
  function ShouldExpressionize(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "ShouldExpressionize", ShouldExpressionize$$);
  }
  var NoCommaStatement$0 = KeywordStatement, NoCommaStatement$1 = VariableStatement, NoCommaStatement$2 = IfStatement, NoCommaStatement$3 = IterationStatement, NoCommaStatement$4 = SwitchStatement, NoCommaStatement$5 = TryStatement, NoCommaStatement$6 = EmptyStatement, NoCommaStatement$7 = LabelledStatement, NoCommaStatement$8 = ExpressionStatement, NoCommaStatement$9 = BlockStatement, NoCommaStatement$$ = [NoCommaStatement$0, NoCommaStatement$1, NoCommaStatement$2, NoCommaStatement$3, NoCommaStatement$4, NoCommaStatement$5, NoCommaStatement$6, NoCommaStatement$7, NoCommaStatement$8, NoCommaStatement$9];
  function NoCommaStatement(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "NoCommaStatement", NoCommaStatement$$);
  }
  var EmptyStatement$0 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$E)(_), (0, import_lib2.$Y)((0, import_lib2.$EXPECT)($L119, 'EmptyStatement ";"'))), function($skip, $loc, $0, $1, $2) {
    return { type: "EmptyStatement", children: $1 || [] };
  });
  function EmptyStatement(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "EmptyStatement", EmptyStatement$0);
  }
  var InsertEmptyStatement$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(InsertSemicolon), function($skip, $loc, $0, $1) {
    return { type: "EmptyStatement", children: [$1], implicit: !0 };
  });
  function InsertEmptyStatement(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "InsertEmptyStatement", InsertEmptyStatement$0);
  }
  var BlockStatement$0 = (0, import_lib2.$T)((0, import_lib2.$S)(ExplicitBlock, (0, import_lib2.$N)((0, import_lib2.$S)(__, (0, import_lib2.$EXPECT)($L3, 'BlockStatement "="')))), function(value) {
    return value[0];
  });
  function BlockStatement(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "BlockStatement", BlockStatement$0);
  }
  var LabelledStatement$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(Label, LabelledItem), function($skip, $loc, $0, $1, $2) {
    var label = $1, statement = $2;
    return {
      type: "LabelledStatement",
      label,
      statement,
      children: $0
    };
  });
  function LabelledStatement(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "LabelledStatement", LabelledStatement$0);
  }
  var Label$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(Colon, IdentifierName, Whitespace), function($skip, $loc, $0, $1, $2, $3) {
    var colon = $1, id = $2, w = $3;
    return id.name === "void" ? $skip : {
      type: "Label",
      name: id.name,
      children: [id, colon, w]
    };
  });
  function Label(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "Label", Label$0);
  }
  var LabelIdentifier$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(Colon, IdentifierName), function($skip, $loc, $0, $1, $2) {
    var id = $2;
    return {
      type: "Label",
      name: id.name,
      children: [id]
    };
  }), LabelIdentifier$1 = (0, import_lib2.$TR)((0, import_lib2.$EXPECT)($R32, "LabelIdentifier /(?:loop|while|until|for|do)(?!\\p{ID_Continue})/"), function($skip, $loc, $0, $1, $2, $3, $4, $5, $6, $7, $8, $9) {
    return {
      type: "Label",
      special: $0,
      name: "",
      // to be filled in
      children: []
    };
  }), LabelIdentifier$2 = (0, import_lib2.$TV)(Identifier, function($skip, $loc, $0, $1) {
    var id = $0;
    return {
      type: "Label",
      name: id.name,
      children: [id]
    };
  }), LabelIdentifier$$ = [LabelIdentifier$0, LabelIdentifier$1, LabelIdentifier$2];
  function LabelIdentifier(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "LabelIdentifier", LabelIdentifier$$);
  }
  var LabelledItem$0 = Statement, LabelledItem$1 = FunctionDeclaration, LabelledItem$$ = [LabelledItem$0, LabelledItem$1];
  function LabelledItem(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "LabelledItem", LabelledItem$$);
  }
  var IfStatement$0 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$C)(If, Unless), (0, import_lib2.$E)(_), BoundedCondition, ThenClause, (0, import_lib2.$E)(ElseClause)), function($skip, $loc, $0, $1, $2, $3, $4, $5) {
    var kind = $1, ws = $2, condition = $3, block = $4, e = $5;
    return kind.negated && (kind = { ...kind, token: "if" }, condition = negateCondition(condition)), block.bare && e && (block = bracedBlock(block)), {
      type: "IfStatement",
      children: [kind, ws, condition, block, e],
      condition,
      negated: kind.negated,
      then: block,
      else: e
    };
  }), IfStatement$1 = (0, import_lib2.$TS)((0, import_lib2.$S)(IfClause, BlockOrEmpty, (0, import_lib2.$E)(ElseClause)), function($skip, $loc, $0, $1, $2, $3) {
    var clause = $1, block = $2, e = $3;
    return block.bare && e && (block = bracedBlock(block)), {
      type: "IfStatement",
      children: [...clause.children, block, e],
      condition: clause.condition,
      negated: clause.negated,
      then: block,
      else: e
    };
  }), IfStatement$$ = [IfStatement$0, IfStatement$1];
  function IfStatement(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "IfStatement", IfStatement$$);
  }
  var ElseClause$0 = (0, import_lib2.$T)((0, import_lib2.$S)((0, import_lib2.$C)(Nested, (0, import_lib2.$E)(_)), Else, BlockOrEmpty), function(value) {
    var block = value[2];
    return { type: "ElseClause", children: value, block };
  });
  function ElseClause(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "ElseClause", ElseClause$0);
  }
  var IfClause$0 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$C)(If, Unless), (0, import_lib2.$E)(_), Condition), function($skip, $loc, $0, $1, $2, $3) {
    var kind = $1, ws = $2, condition = $3;
    return kind.negated && (kind = { ...kind, token: "if" }, condition = negateCondition(condition)), {
      type: "IfStatement",
      children: [kind, ws, condition],
      condition,
      negated: kind.negated
    };
  });
  function IfClause(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "IfClause", IfClause$0);
  }
  var IterationStatement$0 = (0, import_lib2.$T)((0, import_lib2.$S)((0, import_lib2.$EXPECT)($R33, "IterationStatement /(?=loop|comptime|do|for|until|while)/"), _IterationStatement), function(value) {
    return value[1];
  });
  function IterationStatement(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "IterationStatement", IterationStatement$0);
  }
  var _IterationStatement$0 = LoopStatement, _IterationStatement$1 = (0, import_lib2.$T)((0, import_lib2.$S)((0, import_lib2.$N)(CoffeeDoEnabled), DoWhileStatement), function(value) {
    return value[1];
  }), _IterationStatement$2 = (0, import_lib2.$T)((0, import_lib2.$S)((0, import_lib2.$N)(CoffeeDoEnabled), DoStatement), function(value) {
    return value[1];
  }), _IterationStatement$3 = ComptimeStatement, _IterationStatement$4 = WhileStatement, _IterationStatement$5 = ForStatement, _IterationStatement$$ = [_IterationStatement$0, _IterationStatement$1, _IterationStatement$2, _IterationStatement$3, _IterationStatement$4, _IterationStatement$5];
  function _IterationStatement(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "_IterationStatement", _IterationStatement$$);
  }
  var IterationExpression$0 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$E)((0, import_lib2.$S)(Async, __)), IterationStatement), function($skip, $loc, $0, $1, $2) {
    var async = $1, statement = $2;
    return {
      type: "IterationExpression",
      subtype: statement.type,
      children: [statement],
      block: statement.block,
      statement,
      async,
      generator: statement.generator
    };
  });
  function IterationExpression(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "IterationExpression", IterationExpression$0);
  }
  var LoopStatement$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(LoopClause, BlockOrEmptyStatement), function($skip, $loc, $0, $1, $2) {
    var clause = $1, block = $2;
    return {
      ...clause,
      //type: "IterationStatement", [from LoopClause]
      children: [...clause.children, block],
      block
    };
  });
  function LoopStatement(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "LoopStatement", LoopStatement$0);
  }
  var LoopClause$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(Loop, (0, import_lib2.$E)((0, import_lib2.$S)((0, import_lib2.$E)(_), Star))), function($skip, $loc, $0, $1, $2) {
    var kind = $1, generator = $2;
    let expression = {
      type: "Literal",
      children: ["true"],
      raw: "true"
    }, condition = {
      type: "ParenthesizedExpression",
      children: ["(", expression, ")"],
      expression
    };
    return {
      type: "IterationStatement",
      subtype: "loop",
      children: [kind, condition],
      condition,
      generator
    };
  });
  function LoopClause(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "LoopClause", LoopClause$0);
  }
  var DoWhileStatement$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(Do, (0, import_lib2.$E)((0, import_lib2.$S)((0, import_lib2.$E)(_), Star)), NoPostfixBracedOrEmptyBlock, __, WhileClause), function($skip, $loc, $0, $1, $2, $3, $4, $5) {
    var d = $1, generator = $2, block = $3, ws = $4, clause = $5;
    return {
      ...clause,
      //type: "IterationStatement", [from WhileClause]
      subtype: `do-${clause.subtype}`,
      children: [d, block, ws, clause],
      block,
      generator
    };
  });
  function DoWhileStatement(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "DoWhileStatement", DoWhileStatement$0);
  }
  var DoStatement$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(Do, (0, import_lib2.$E)((0, import_lib2.$S)((0, import_lib2.$E)(_), Star)), NoPostfixBracedOrEmptyBlock), function($skip, $loc, $0, $1, $2, $3) {
    var d = $1, generator = $2, block = $3;
    return block = trimFirstSpace(block), {
      type: "DoStatement",
      children: [block],
      block,
      generator
    };
  });
  function DoStatement(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "DoStatement", DoStatement$0);
  }
  var ComptimeStatement$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(Comptime, NoPostfixBracedOrEmptyBlock, (0, import_lib2.$E)(ElseClause)), function($skip, $loc, $0, $1, $2, $3) {
    var t = $2, e = $3;
    let block = !initialConfig.comptime && e?.block || t;
    return block = trimFirstSpace(block), {
      type: "ComptimeStatement",
      children: [block],
      block,
      // In case we want access to the original blocks:
      then: t,
      else: e
    };
  });
  function ComptimeStatement(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "ComptimeStatement", ComptimeStatement$0);
  }
  var WhileStatement$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(WhileClause, BlockOrEmptyStatement), function($skip, $loc, $0, $1, $2) {
    var clause = $1, block = $2;
    return {
      ...clause,
      children: [...clause.children, block],
      block
    };
  });
  function WhileStatement(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "WhileStatement", WhileStatement$0);
  }
  var WhileClause$0 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$C)(While, Until), (0, import_lib2.$E)((0, import_lib2.$S)((0, import_lib2.$E)(_), Star)), (0, import_lib2.$E)(_), Condition), function($skip, $loc, $0, $1, $2, $3, $4) {
    var kind = $1, generator = $2, ws = $3, condition = $4;
    let subtype = kind.token;
    return kind.negated && (kind = { ...kind, token: "while" }, condition = negateCondition(condition)), {
      type: "IterationStatement",
      subtype,
      children: [kind, ws, condition],
      condition,
      generator,
      negated: kind.negated
    };
  });
  function WhileClause(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "WhileClause", WhileClause$0);
  }
  var ForStatement$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(ForClause, BlockOrEmptyStatement), function($skip, $loc, $0, $1, $2) {
    var clause = $1, block = $2;
    return block = blockWithPrefix(clause.blockPrefix, block), {
      ...clause,
      children: [...clause.children, block],
      block
    };
  });
  function ForStatement(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "ForStatement", ForStatement$0);
  }
  var ForClause$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(For, (0, import_lib2.$E)((0, import_lib2.$S)((0, import_lib2.$E)(_), Star)), __, ForStatementControlWithWhen), function($skip, $loc, $0, $1, $2, $3, $4) {
    var generator = $2, c = $4;
    let { children, reduction } = c;
    return generator && reduction && (children = [{
      type: "Error",
      message: `Cannot use reduction (${reduction.subtype}) with generators`
    }, ...children]), {
      ...c,
      type: "ForStatement",
      children: [$1, ...$3, ...children],
      block: null,
      generator
    };
  });
  function ForClause(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "ForClause", ForClause$0);
  }
  var ForStatementControlWithWhen$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(ForStatementControlWithReduction, (0, import_lib2.$E)(WhenCondition)), function($skip, $loc, $0, $1, $2) {
    var control = $1, condition = $2;
    if (!condition) return control;
    let expressions = [["", {
      type: "ContinueStatement",
      children: ["continue"]
    }]], block = {
      type: "BlockStatement",
      expressions,
      children: [expressions],
      bare: !0
    };
    return {
      ...control,
      blockPrefix: [
        ...control.blockPrefix ?? [],
        ["", {
          type: "IfStatement",
          then: block,
          children: ["if (!", makeLeftHandSideExpression(trimFirstSpace(condition)), ") ", block]
        }, ";"]
      ]
    };
  });
  function ForStatementControlWithWhen(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "ForStatementControlWithWhen", ForStatementControlWithWhen$0);
  }
  var ForStatementControlWithReduction$0 = ForStatementControl, ForStatementControlWithReduction$1 = (0, import_lib2.$TS)((0, import_lib2.$S)(ForReduction, ForStatementControl), function($skip, $loc, $0, $1, $2) {
    var reduction = $1, control = $2;
    return { ...control, reduction };
  }), ForStatementControlWithReduction$$ = [ForStatementControlWithReduction$0, ForStatementControlWithReduction$1];
  function ForStatementControlWithReduction(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "ForStatementControlWithReduction", ForStatementControlWithReduction$$);
  }
  var ForReduction$0 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$C)((0, import_lib2.$EXPECT)($L120, 'ForReduction "some"'), (0, import_lib2.$EXPECT)($L121, 'ForReduction "every"'), (0, import_lib2.$EXPECT)($L122, 'ForReduction "count"'), (0, import_lib2.$EXPECT)($L123, 'ForReduction "first"'), (0, import_lib2.$EXPECT)($L124, 'ForReduction "sum"'), (0, import_lib2.$EXPECT)($L125, 'ForReduction "product"'), (0, import_lib2.$EXPECT)($L126, 'ForReduction "min"'), (0, import_lib2.$EXPECT)($L127, 'ForReduction "max"'), (0, import_lib2.$EXPECT)($L128, 'ForReduction "join"'), (0, import_lib2.$EXPECT)($L129, 'ForReduction "concat"')), NonIdContinue, __), function($skip, $loc, $0, $1, $2, $3) {
    var subtype = $1, ws = $3;
    return {
      type: "ForReduction",
      subtype,
      children: [ws]
    };
  });
  function ForReduction(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "ForReduction", ForReduction$0);
  }
  var ForStatementControl$0 = (0, import_lib2.$T)((0, import_lib2.$S)((0, import_lib2.$N)(CoffeeForLoopsEnabled), ForStatementParameters), function(value) {
    return value[1];
  }), ForStatementControl$1 = (0, import_lib2.$T)((0, import_lib2.$S)(CoffeeForLoopsEnabled, CoffeeForStatementParameters), function(value) {
    return value[1];
  }), ForStatementControl$$ = [ForStatementControl$0, ForStatementControl$1];
  function ForStatementControl(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "ForStatementControl", ForStatementControl$$);
  }
  var WhenCondition$0 = (0, import_lib2.$T)((0, import_lib2.$S)(__, When, ExpressionWithObjectApplicationForbidden), function(value) {
    var exp = value[2];
    return exp;
  });
  function WhenCondition(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "WhenCondition", WhenCondition$0);
  }
  var CoffeeForStatementParameters$0 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$E)((0, import_lib2.$S)(Await, __)), InsertOpenParen, CoffeeForDeclaration, (0, import_lib2.$E)(CoffeeForIndex), __, (0, import_lib2.$C)(In, Of, From), ExpressionWithObjectApplicationForbidden, (0, import_lib2.$E)((0, import_lib2.$S)((0, import_lib2.$E)(_), By, ExpressionWithObjectApplicationForbidden)), InsertCloseParen), function($skip, $loc, $0, $1, $2, $3, $4, $5, $6, $7, $8, $9) {
    var open = $2, declaration = $3, index = $4, kind = $6, exp = $7, step = $8, close = $9;
    let blockPrefix = [];
    if (exp = trimFirstSpace(exp), declaration = trimFirstSpace(declaration), kind.token === "from") {
      if (step)
        throw new Error("Can't use 'by' with 'from' in CoffeeScript for loops");
      kind = { ...kind, token: "of" };
    } else if (kind.token === "of") {
      if (step)
        throw new Error("Can't use 'by' with 'of' in CoffeeScript for loops");
      if (declaration.own) {
        let hasPropRef = getHelperRef("hasProp");
        blockPrefix.push(["", ["if (!", hasPropRef, "(", exp, ", ", declaration, ")) continue"], ";"]);
      }
      index && blockPrefix.push(["", {
        type: "AssignmentExpression",
        children: [index, " = ", exp, "[", declaration, "]"],
        names: index.names
      }, ";"]), kind.token = "in";
    } else if (kind.token === "in") {
      let counterRef = makeRef("i"), lenRef = makeRef("len");
      if (exp.type === "RangeExpression")
        return forRange(open, declaration, exp, step && prepend(trimFirstSpace(step[0]), trimFirstSpace(step[2])), close);
      let expRef = maybeRef(exp), varRef = declaration, increment = "++", indexAssignment, assignmentNames = [...varRef.names];
      index && (index = trimFirstSpace(index), indexAssignment = [index, "="], assignmentNames.push(...index.names));
      let expRefDec = expRef !== exp ? [expRef, " = ", trimFirstSpace(exp), ", "] : [];
      blockPrefix.push(["", {
        type: "AssignmentExpression",
        children: [varRef, " = ", expRef, "[", indexAssignment, counterRef, "]"],
        names: assignmentNames
      }, ";"]), declaration = {
        type: "Declaration",
        children: ["let ", ...expRefDec, counterRef, " = 0, ", lenRef, " = ", expRef, ".length"],
        names: []
      };
      let condition = [counterRef, " < ", lenRef, "; "];
      if (step) {
        let [stepWs, , stepExp] = step;
        if (stepWs = trimFirstSpace(stepWs), stepExp.type === "Literal")
          increment = [" +=", ...stepWs, stepExp], stepExp.raw[0] === "-" && (declaration = {
            type: "Declaration",
            children: ["let ", ...expRefDec, counterRef, " = ", expRef, ".length - 1"],
            names: []
          }, condition = [counterRef, " >= 0; "]);
        else
          throw new Error("TODO: Support non-literal step in CoffeeScript for loops");
        return {
          declaration,
          children: [$1, open, declaration, "; ", ...condition, counterRef, increment, close],
          blockPrefix
        };
      }
      return {
        declaration,
        children: [$1, open, declaration, "; ", ...condition, counterRef, increment, close],
        blockPrefix
      };
    }
    return {
      declaration,
      children: [$1, open, declaration, $5, kind, " ", exp, close],
      blockPrefix
    };
  }), CoffeeForStatementParameters$1 = ForRangeParameters, CoffeeForStatementParameters$$ = [CoffeeForStatementParameters$0, CoffeeForStatementParameters$1];
  function CoffeeForStatementParameters(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "CoffeeForStatementParameters", CoffeeForStatementParameters$$);
  }
  var CoffeeForIndex$0 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$E)(_), Comma, (0, import_lib2.$E)(_), BindingIdentifier), function($skip, $loc, $0, $1, $2, $3, $4) {
    var ws1 = $1, ws2 = $3, id = $4;
    return ws2 = trimFirstSpace(ws1), {
      ...id,
      children: [...ws1 || [], ...ws2 || [], ...id.children]
    };
  });
  function CoffeeForIndex(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "CoffeeForIndex", CoffeeForIndex$0);
  }
  var CoffeeForDeclaration$0 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$E)((0, import_lib2.$S)(__, Own)), ForBinding), function($skip, $loc, $0, $1, $2) {
    var own = $1, binding = $2;
    return {
      type: "AssignmentExpression",
      own: !!own,
      children: [$2],
      names: $2.names
    };
  });
  function CoffeeForDeclaration(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "CoffeeForDeclaration", CoffeeForDeclaration$0);
  }
  var ForStatementParameters$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(OpenParen, __, (0, import_lib2.$C)(LexicalDeclaration, VariableStatement, (0, import_lib2.$E)(CommaExpression)), __, Semicolon, (0, import_lib2.$E)(CommaExpression), Semicolon, (0, import_lib2.$E)(CommaExpression), __, CloseParen), function($skip, $loc, $0, $1, $2, $3, $4, $5, $6, $7, $8, $9, $10) {
    var declaration = $3;
    return {
      declaration,
      children: $0
    };
  }), ForStatementParameters$1 = (0, import_lib2.$TS)((0, import_lib2.$S)(InsertOpenParen, __, (0, import_lib2.$C)(LexicalDeclaration, VariableStatement, (0, import_lib2.$E)(CommaExpression)), __, Semicolon, (0, import_lib2.$E)(CommaExpression), Semicolon, (0, import_lib2.$E)((0, import_lib2.$S)((0, import_lib2.$N)(EOS), ExpressionWithIndentedApplicationForbidden)), InsertCloseParen), function($skip, $loc, $0, $1, $2, $3, $4, $5, $6, $7, $8, $9) {
    var declaration = $3;
    return {
      declaration,
      children: $0
    };
  }), ForStatementParameters$2 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$E)((0, import_lib2.$S)(Await, __)), (0, import_lib2.$Y)(OpenParen), (0, import_lib2.$S)(OpenParen, __), ForInOfDeclaration, (0, import_lib2.$E)((0, import_lib2.$S)(__, Comma, __, ForInOfDeclaration)), __, (0, import_lib2.$C)(In, Of), ExpressionWithObjectApplicationForbidden, (0, import_lib2.$E)((0, import_lib2.$S)(__, By, ExpressionWithObjectApplicationForbidden)), (0, import_lib2.$S)(__, CloseParen)), function($skip, $loc, $0, $1, $2, $3, $4, $5, $6, $7, $8, $9, $10) {
    return processForInOf($0);
  }), ForStatementParameters$3 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$E)((0, import_lib2.$S)(Await, __)), (0, import_lib2.$E)((0, import_lib2.$S)((0, import_lib2.$C)(Each, Own), __)), (0, import_lib2.$S)(OpenParen, __), ForInOfDeclaration, (0, import_lib2.$E)((0, import_lib2.$S)(__, Comma, __, ForInOfDeclaration)), __, (0, import_lib2.$C)(In, Of), ExpressionWithObjectApplicationForbidden, (0, import_lib2.$E)((0, import_lib2.$S)(__, By, ExpressionWithObjectApplicationForbidden)), (0, import_lib2.$S)(__, CloseParen)), function($skip, $loc, $0, $1, $2, $3, $4, $5, $6, $7, $8, $9, $10) {
    return processForInOf($0);
  }), ForStatementParameters$4 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$E)((0, import_lib2.$S)(Await, __)), (0, import_lib2.$Y)(ForInOfDeclaration), InsertOpenParen, ForInOfDeclaration, (0, import_lib2.$E)((0, import_lib2.$S)(__, Comma, __, ForInOfDeclaration)), __, (0, import_lib2.$C)(In, Of), ExpressionWithObjectApplicationForbidden, (0, import_lib2.$E)((0, import_lib2.$S)(__, By, ExpressionWithObjectApplicationForbidden)), InsertCloseParen), function($skip, $loc, $0, $1, $2, $3, $4, $5, $6, $7, $8, $9, $10) {
    return processForInOf($0);
  }), ForStatementParameters$5 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$E)((0, import_lib2.$S)(Await, __)), (0, import_lib2.$E)((0, import_lib2.$S)((0, import_lib2.$C)(Each, Own), __)), InsertOpenParen, ForInOfDeclaration, (0, import_lib2.$E)((0, import_lib2.$S)(__, Comma, __, ForInOfDeclaration)), __, (0, import_lib2.$C)(In, Of), ExpressionWithObjectApplicationForbidden, (0, import_lib2.$E)((0, import_lib2.$S)(__, By, ExpressionWithObjectApplicationForbidden)), InsertCloseParen), function($skip, $loc, $0, $1, $2, $3, $4, $5, $6, $7, $8, $9, $10) {
    return processForInOf($0);
  }), ForStatementParameters$6 = ForRangeParameters, ForStatementParameters$$ = [ForStatementParameters$0, ForStatementParameters$1, ForStatementParameters$2, ForStatementParameters$3, ForStatementParameters$4, ForStatementParameters$5, ForStatementParameters$6];
  function ForStatementParameters(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "ForStatementParameters", ForStatementParameters$$);
  }
  var ForRangeParameters$0 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$E)((0, import_lib2.$S)(Await, __)), OpenParen, OpenBracket, RangeExpression, CloseBracket, (0, import_lib2.$E)((0, import_lib2.$S)(__, By, ExpressionWithObjectApplicationForbidden)), CloseParen), function($skip, $loc, $0, $1, $2, $3, $4, $5, $6, $7) {
    var open = $2, exp = $4, step = $6, close = $7;
    return forRange(open, null, exp, step, close);
  }), ForRangeParameters$1 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$E)((0, import_lib2.$S)(Await, __)), InsertOpenParen, OpenBracket, RangeExpression, CloseBracket, (0, import_lib2.$E)((0, import_lib2.$S)(__, By, ExpressionWithObjectApplicationForbidden)), InsertCloseParen), function($skip, $loc, $0, $1, $2, $3, $4, $5, $6, $7) {
    var open = $2, exp = $4, step = $6, close = $7;
    return forRange(open, null, exp, step, close);
  }), ForRangeParameters$$ = [ForRangeParameters$0, ForRangeParameters$1];
  function ForRangeParameters(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "ForRangeParameters", ForRangeParameters$$);
  }
  var ForInOfDeclaration$0 = ForDeclaration, ForInOfDeclaration$1 = LeftHandSideExpression, ForInOfDeclaration$$ = [ForInOfDeclaration$0, ForInOfDeclaration$1];
  function ForInOfDeclaration(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "ForInOfDeclaration", ForInOfDeclaration$$);
  }
  var ForDeclaration$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(LetOrConstOrVar, ForBinding), function($skip, $loc, $0, $1, $2) {
    var c = $1, binding = $2;
    return {
      type: "ForDeclaration",
      children: [c, binding],
      decl: c.token,
      binding,
      names: binding.names
    };
  }), ForDeclaration$1 = (0, import_lib2.$TS)((0, import_lib2.$S)(InsertConst, (0, import_lib2.$N)(ActualMemberExpression), ForBinding), function($skip, $loc, $0, $1, $2, $3) {
    var c = $1, binding = $3;
    return gatherRecursive(binding, ($) => $.type === "PinPattern").length ? $skip : {
      type: "ForDeclaration",
      children: [c, binding],
      decl: c.token.trimEnd(),
      binding,
      names: binding.names
    };
  }), ForDeclaration$$ = [ForDeclaration$0, ForDeclaration$1];
  function ForDeclaration(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "ForDeclaration", ForDeclaration$$);
  }
  var ForBinding$0 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$C)(BindingPattern, BindingIdentifier), (0, import_lib2.$E)(TypeSuffix)), function($skip, $loc, $0, $1, $2) {
    var pattern = $1, typeSuffix = $2;
    return typeSuffix ??= pattern.typeSuffix, {
      type: "Binding",
      children: [pattern, typeSuffix],
      names: pattern.names,
      pattern,
      typeSuffix,
      splices: [],
      thisAssignments: []
    };
  });
  function ForBinding(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "ForBinding", ForBinding$0);
  }
  var SwitchStatement$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(Switch, ForbidNewlineBinaryOp, (0, import_lib2.$E)((0, import_lib2.$C)(EmptyCondition, Condition)), RestoreNewlineBinaryOp, CaseBlock), function($skip, $loc, $0, $1, $2, $3, $4, $5) {
    var s = $1, condition = $3, caseBlock = $5;
    return condition ? (condition.type === "EmptyCondition" && caseBlock.clauses.forEach(({ cases }) => {
      cases && cases.forEach((c) => {
        let exp = c[1];
        switch (exp.type) {
          case "Identifier":
          case "Literal":
            c.splice(1, 0, "!");
            break;
          default:
            c.splice(1, 1, "!(", exp, ")");
        }
      });
    }), {
      type: "SwitchStatement",
      children: [s, condition, caseBlock],
      // omit NewlineBinaryOp control
      condition,
      caseBlock
    }) : $skip;
  });
  function SwitchStatement(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "SwitchStatement", SwitchStatement$0);
  }
  var EmptyCondition$0 = (0, import_lib2.$TV)((0, import_lib2.$Y)(EOS), function($skip, $loc, $0, $1) {
    return {
      type: "EmptyCondition",
      children: [{
        $loc,
        token: " (false)"
      }]
    };
  });
  function EmptyCondition(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "EmptyCondition", EmptyCondition$0);
  }
  var CaseBlock$0 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$E)((0, import_lib2.$C)(Nested, _)), OpenBrace, NestedCaseClauses, __, CloseBrace), function($skip, $loc, $0, $1, $2, $3, $4, $5) {
    var clauses = $3;
    return {
      type: "CaseBlock",
      clauses,
      children: $0
    };
  }), CaseBlock$1 = (0, import_lib2.$TS)((0, import_lib2.$S)(InsertOpenBrace, NestedCaseClauses, InsertNewline, InsertIndent, InsertCloseBrace), function($skip, $loc, $0, $1, $2, $3, $4, $5) {
    var clauses = $2;
    return {
      type: "CaseBlock",
      clauses,
      children: $0
    };
  }), CaseBlock$$ = [CaseBlock$0, CaseBlock$1];
  function CaseBlock(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "CaseBlock", CaseBlock$$);
  }
  var NestedCaseClauses$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(PushIndent, (0, import_lib2.$Q)(NestedCaseClause), PopIndent), function($skip, $loc, $0, $1, $2, $3) {
    var clauses = $2;
    return clauses.length ? clauses : $skip;
  });
  function NestedCaseClauses(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "NestedCaseClauses", NestedCaseClauses$0);
  }
  var NestedCaseClause$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(Nested, CaseClause), function($skip, $loc, $0, $1, $2) {
    var indent = $1, clause = $2;
    return {
      ...clause,
      // Bring the indent into the clause
      children: [indent, ...clause.children]
    };
  });
  function NestedCaseClause(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "NestedCaseClause", NestedCaseClause$0);
  }
  var CaseClause$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(PatternExpressionList, (0, import_lib2.$C)(ThenClause, BareBlock)), function($skip, $loc, $0, $1, $2) {
    var patterns = $1, block = $2;
    return {
      type: "PatternClause",
      children: $0,
      patterns,
      block
    };
  }), CaseClause$1 = (0, import_lib2.$T)((0, import_lib2.$S)(Case, CaseExpressionList, IgnoreColon, (0, import_lib2.$C)(ThenClause, BareBlock)), function(value) {
    var cases = value[1], block = value[3];
    return { type: "CaseClause", children: value, cases, block };
  }), CaseClause$2 = (0, import_lib2.$TS)((0, import_lib2.$S)(When, CaseExpressionList, IgnoreColon, InsertOpenBrace, (0, import_lib2.$C)(ThenClause, BareBlock), InsertBreak, InsertNewline, InsertIndent, InsertCloseBrace), function($skip, $loc, $0, $1, $2, $3, $4, $5, $6, $7, $8, $9) {
    var cases = $2, block = $5, b = $6;
    return {
      type: "WhenClause",
      children: $0,
      cases,
      block,
      break: b
    };
  }), CaseClause$3 = (0, import_lib2.$TS)((0, import_lib2.$S)(Default, ImpliedColon, (0, import_lib2.$C)(ThenClause, BareBlock)), function($skip, $loc, $0, $1, $2, $3) {
    var block = $3;
    return {
      type: "DefaultClause",
      block,
      children: $0
    };
  }), CaseClause$4 = (0, import_lib2.$TS)((0, import_lib2.$S)(Else, ImpliedColon, (0, import_lib2.$C)(ThenClause, BracedBlock, EmptyBlock)), function($skip, $loc, $0, $1, $2, $3) {
    var e = $1, colon = $2, block = $3;
    return e = { ...e, token: "default" }, {
      type: "DefaultClause",
      block,
      children: [e, colon, block]
    };
  }), CaseClause$$ = [CaseClause$0, CaseClause$1, CaseClause$2, CaseClause$3, CaseClause$4];
  function CaseClause(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "CaseClause", CaseClause$$);
  }
  var PatternExpressionList$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(PatternExpression, (0, import_lib2.$Q)((0, import_lib2.$S)((0, import_lib2.$E)(_), Comma, (0, import_lib2.$E)((0, import_lib2.$C)(Nested, _)), PatternExpression))), function($skip, $loc, $0, $1, $2) {
    var first = $1, rest = $2;
    return [first, ...rest.map(([, , , p]) => p)];
  });
  function PatternExpressionList(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "PatternExpressionList", PatternExpressionList$0);
  }
  var PatternExpression$0 = BindingPattern, PatternExpression$1 = (0, import_lib2.$TS)((0, import_lib2.$S)(ForbidIndentedApplication, (0, import_lib2.$E)((0, import_lib2.$S)((0, import_lib2.$E)((0, import_lib2.$S)(BindingIdentifier, (0, import_lib2.$E)(Caret))), (0, import_lib2.$P)(SingleLineBinaryOpRHS))), RestoreIndentedApplication), function($skip, $loc, $0, $1, $2, $3) {
    var body = $2;
    if (!body) return $skip;
    let [named, rhs] = body, binding;
    return named && ([binding] = named), {
      type: "ConditionFragment",
      children: [binding, rhs],
      binding,
      rhs
    };
  }), PatternExpression$$ = [PatternExpression$0, PatternExpression$1];
  function PatternExpression(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "PatternExpression", PatternExpression$$);
  }
  var CaseExpressionList$0 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$S)((0, import_lib2.$E)(_), CaseExpression, InsertColon), (0, import_lib2.$Q)((0, import_lib2.$S)(__, Comma, CaseExpression, InsertColon))), function($skip, $loc, $0, $1, $2) {
    var first = $1, rest = $2;
    let result = rest.map(([ws, _comma, exp, col]) => (exp = trimFirstSpace(exp), ws.length ? [insertTrimmingSpace("case ", ws), exp, col] : ["case ", exp, col]));
    return result.unshift(first), result;
  });
  function CaseExpressionList(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "CaseExpressionList", CaseExpressionList$0);
  }
  var CaseExpression$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(PropertyName, (0, import_lib2.$Y)((0, import_lib2.$S)((0, import_lib2.$E)(_), Colon))), function($skip, $loc, $0, $1, $2) {
    var value = $1;
    return value.type === "ComputedPropertyName" ? value.implicit ? value.expression : { ...value, type: "ArrayExpression" } : value;
  }), CaseExpression$1 = ExpressionWithObjectApplicationForbidden, CaseExpression$$ = [CaseExpression$0, CaseExpression$1];
  function CaseExpression(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "CaseExpression", CaseExpression$$);
  }
  var ImpliedColon$0 = (0, import_lib2.$S)((0, import_lib2.$E)(_), Colon), ImpliedColon$1 = InsertColon, ImpliedColon$$ = [ImpliedColon$0, ImpliedColon$1];
  function ImpliedColon(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "ImpliedColon", ImpliedColon$$);
  }
  var IgnoreColon$0 = (0, import_lib2.$TV)((0, import_lib2.$E)((0, import_lib2.$S)((0, import_lib2.$E)(_), Colon)), function($skip, $loc, $0, $1) {
    if ($1) return $1[0];
  });
  function IgnoreColon(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "IgnoreColon", IgnoreColon$0);
  }
  var TryStatement$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(Try, (0, import_lib2.$N)((0, import_lib2.$EXPECT)($L16, 'TryStatement ":"')), NoPostfixBracedOrEmptyBlock, (0, import_lib2.$Q)(CatchClause), (0, import_lib2.$E)(ElseClause), (0, import_lib2.$E)(WFinallyClause)), function($skip, $loc, $0, $1, $2, $3, $4, $5, $6) {
    return processTryBlock($0);
  });
  function TryStatement(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "TryStatement", TryStatement$0);
  }
  var CatchClause$0 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$C)(Nested, _), Catch, (0, import_lib2.$E)(CatchBinding), (0, import_lib2.$C)(BracedThenClause, BracedOrEmptyBlock)), function($skip, $loc, $0, $1, $2, $3, $4) {
    var binding = $3, block = $4;
    return {
      type: "CatchClause",
      children: $0,
      block,
      binding
    };
  });
  function CatchClause(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "CatchClause", CatchClause$0);
  }
  var CatchBinding$0 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$E)(_), OpenParen, __, AllowAll, (0, import_lib2.$E)(CatchParameter), RestoreAll, __, CloseParen), function($skip, $loc, $0, $1, $2, $3, $4, $5, $6, $7, $8) {
    var ws1 = $1, open = $2, ws2 = $3, parameter = $5, ws3 = $7, close = $8;
    return parameter ? {
      type: "CatchBinding",
      parameter,
      children: [ws1, open, ws2, parameter, ws3, close]
    } : $skip;
  }), CatchBinding$1 = (0, import_lib2.$TS)((0, import_lib2.$S)(_, InsertOpenParen, (0, import_lib2.$N)(EOS), ForbidIndentedApplication, (0, import_lib2.$E)(CatchParameter), RestoreIndentedApplication, InsertCloseParen), function($skip, $loc, $0, $1, $2, $3, $4, $5, $6, $7) {
    var ws = $1, open = $2, parameter = $5, close = $7;
    return parameter ? {
      type: "CatchBinding",
      parameter,
      children: [ws, open, parameter, close]
    } : $skip;
  }), CatchBinding$$ = [CatchBinding$0, CatchBinding$1];
  function CatchBinding(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "CatchBinding", CatchBinding$$);
  }
  var WFinallyClause$0 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$C)(Nested, _), FinallyClause), function($skip, $loc, $0, $1, $2) {
    return prepend($1, $2);
  });
  function WFinallyClause(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "WFinallyClause", WFinallyClause$0);
  }
  var FinallyClause$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(Finally, (0, import_lib2.$C)(BracedThenClause, BracedOrEmptyBlock)), function($skip, $loc, $0, $1, $2) {
    var block = $2;
    return {
      type: "FinallyClause",
      children: $0,
      block
    };
  });
  function FinallyClause(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "FinallyClause", FinallyClause$0);
  }
  var CatchParameter$0 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$C)(ObjectBindingPattern, ArrayBindingPattern), TypeSuffix), function($skip, $loc, $0, $1, $2) {
    var binding = $1, typeSuffix = $2;
    return {
      type: "CatchParameter",
      binding,
      typeSuffix,
      children: [binding, typeSuffix]
    };
  }), CatchParameter$1 = (0, import_lib2.$TS)((0, import_lib2.$S)(PatternExpressionList), function($skip, $loc, $0, $1) {
    return {
      type: "CatchPattern",
      children: $0,
      patterns: $1
    };
  }), CatchParameter$2 = (0, import_lib2.$TS)((0, import_lib2.$S)(BindingIdentifier, (0, import_lib2.$E)(TypeSuffix)), function($skip, $loc, $0, $1, $2) {
    var binding = $1, typeSuffix = $2;
    return {
      type: "CatchParameter",
      binding,
      typeSuffix,
      children: $0
    };
  }), CatchParameter$$ = [CatchParameter$0, CatchParameter$1, CatchParameter$2];
  function CatchParameter(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "CatchParameter", CatchParameter$$);
  }
  var Condition$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(OpenParen, (0, import_lib2.$E)(_), DeclarationCondition, CloseParen), function($skip, $loc, $0, $1, $2, $3, $4) {
    var open = $1, ws = $2, expression = $3, close = $4;
    return {
      type: "ParenthesizedExpression",
      children: [open, ws, expression, close],
      expression
    };
  }), Condition$1 = (0, import_lib2.$T)((0, import_lib2.$S)(ParenthesizedExpression, (0, import_lib2.$N)(TrailingOperator)), function(value) {
    return value[0];
  }), Condition$2 = (0, import_lib2.$TS)((0, import_lib2.$S)(InsertOpenParen, DeclarationCondition, InsertCloseParen), function($skip, $loc, $0, $1, $2, $3) {
    var open = $1, expression = $2, close = $3;
    return {
      type: "ParenthesizedExpression",
      children: [open, expression, close],
      expression
    };
  }), Condition$3 = (0, import_lib2.$TS)((0, import_lib2.$S)(PushIndent, InsertOpenParen, (0, import_lib2.$E)((0, import_lib2.$S)(Nested, PostfixedExpression)), InsertCloseParen, PopIndent), function($skip, $loc, $0, $1, $2, $3, $4, $5) {
    var open = $2, expression = $3, close = $4;
    return expression ? {
      type: "ParenthesizedExpression",
      children: [open, expression, close],
      expression
    } : $skip;
  }), Condition$4 = (0, import_lib2.$TS)((0, import_lib2.$S)(InsertOpenParen, ExpressionWithObjectApplicationForbidden, InsertCloseParen), function($skip, $loc, $0, $1, $2, $3) {
    var open = $1, expression = $2, close = $3;
    return expression.type === "ParenthesizedExpression" ? expression : (expression = trimFirstSpace(expression), {
      type: "ParenthesizedExpression",
      children: [open, expression, close],
      expression
    });
  }), Condition$$ = [Condition$0, Condition$1, Condition$2, Condition$3, Condition$4];
  function Condition(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "Condition", Condition$$);
  }
  var BoundedCondition$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(InsertOpenParen, PostfixedExpression, InsertCloseParen), function($skip, $loc, $0, $1, $2, $3) {
    var open = $1, expression = $2, close = $3;
    return expression.type === "ParenthesizedExpression" ? expression : (expression = trimFirstSpace(expression), {
      type: "ParenthesizedExpression",
      children: [open, expression, close],
      expression
    });
  });
  function BoundedCondition(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "BoundedCondition", BoundedCondition$0);
  }
  var DeclarationCondition$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(ForbidBracedApplication, ForbidIndentedApplication, ForbidNewlineBinaryOp, (0, import_lib2.$E)(LexicalDeclaration), RestoreNewlineBinaryOp, RestoreBracedApplication, RestoreIndentedApplication), function($skip, $loc, $0, $1, $2, $3, $4, $5, $6, $7) {
    var declaration = $4;
    return declaration ? {
      type: "DeclarationCondition",
      declaration,
      children: [declaration]
    } : $skip;
  });
  function DeclarationCondition(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "DeclarationCondition", DeclarationCondition$0);
  }
  var ExpressionWithIndentedApplicationForbidden$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(ForbidIndentedApplication, ForbidNewlineBinaryOp, (0, import_lib2.$E)(Expression), RestoreNewlineBinaryOp, RestoreIndentedApplication), function($skip, $loc, $0, $1, $2, $3, $4, $5) {
    var exp = $3;
    return exp || $skip;
  });
  function ExpressionWithIndentedApplicationForbidden(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "ExpressionWithIndentedApplicationForbidden", ExpressionWithIndentedApplicationForbidden$0);
  }
  var SingleLineExpressionWithIndentedApplicationForbidden$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(ForbidIndentedApplication, ForbidNewlineBinaryOp, (0, import_lib2.$E)(SingleLineAssignmentExpression), RestoreNewlineBinaryOp, RestoreIndentedApplication), function($skip, $loc, $0, $1, $2, $3, $4, $5) {
    var exp = $3;
    return exp || $skip;
  });
  function SingleLineExpressionWithIndentedApplicationForbidden(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "SingleLineExpressionWithIndentedApplicationForbidden", SingleLineExpressionWithIndentedApplicationForbidden$0);
  }
  var ExpressionWithObjectApplicationForbidden$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(ForbidBracedApplication, ForbidIndentedApplication, (0, import_lib2.$E)(Expression), RestoreBracedApplication, RestoreIndentedApplication), function($skip, $loc, $0, $1, $2, $3, $4, $5) {
    var exp = $3;
    return exp || $skip;
  });
  function ExpressionWithObjectApplicationForbidden(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "ExpressionWithObjectApplicationForbidden", ExpressionWithObjectApplicationForbidden$0);
  }
  var LeftHandSideExpressionWithObjectApplicationForbidden$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(ForbidBracedApplication, ForbidIndentedApplication, ForbidNewlineBinaryOp, (0, import_lib2.$E)(LeftHandSideExpression), RestoreNewlineBinaryOp, RestoreBracedApplication, RestoreIndentedApplication), function($skip, $loc, $0, $1, $2, $3, $4, $5, $6, $7) {
    var exp = $4;
    return exp || $skip;
  });
  function LeftHandSideExpressionWithObjectApplicationForbidden(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "LeftHandSideExpressionWithObjectApplicationForbidden", LeftHandSideExpressionWithObjectApplicationForbidden$0);
  }
  var ForbidClassImplicitCall$0 = (0, import_lib2.$TV)((0, import_lib2.$EXPECT)($L0, 'ForbidClassImplicitCall ""'), function($skip, $loc, $0, $1) {
    state.forbidClassImplicitCall.push(!0);
  });
  function ForbidClassImplicitCall(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "ForbidClassImplicitCall", ForbidClassImplicitCall$0);
  }
  var AllowClassImplicitCall$0 = (0, import_lib2.$TV)((0, import_lib2.$EXPECT)($L0, 'AllowClassImplicitCall ""'), function($skip, $loc, $0, $1) {
    state.forbidClassImplicitCall.push(!1);
  });
  function AllowClassImplicitCall(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "AllowClassImplicitCall", AllowClassImplicitCall$0);
  }
  var RestoreClassImplicitCall$0 = (0, import_lib2.$TV)((0, import_lib2.$EXPECT)($L0, 'RestoreClassImplicitCall ""'), function($skip, $loc, $0, $1) {
    state.forbidClassImplicitCall.pop();
  });
  function RestoreClassImplicitCall(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "RestoreClassImplicitCall", RestoreClassImplicitCall$0);
  }
  var ClassImplicitCallForbidden$0 = (0, import_lib2.$TV)((0, import_lib2.$EXPECT)($L0, 'ClassImplicitCallForbidden ""'), function($skip, $loc, $0, $1) {
    if (!state.classImplicitCallForbidden) return $skip;
  });
  function ClassImplicitCallForbidden(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "ClassImplicitCallForbidden", ClassImplicitCallForbidden$0);
  }
  var ForbidBracedApplication$0 = (0, import_lib2.$TV)((0, import_lib2.$EXPECT)($L0, 'ForbidBracedApplication ""'), function($skip, $loc, $0, $1) {
    state.forbidBracedApplication.push(!0);
  });
  function ForbidBracedApplication(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "ForbidBracedApplication", ForbidBracedApplication$0);
  }
  var AllowBracedApplication$0 = (0, import_lib2.$TV)((0, import_lib2.$EXPECT)($L0, 'AllowBracedApplication ""'), function($skip, $loc, $0, $1) {
    state.forbidBracedApplication.push(!1);
  });
  function AllowBracedApplication(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "AllowBracedApplication", AllowBracedApplication$0);
  }
  var RestoreBracedApplication$0 = (0, import_lib2.$TV)((0, import_lib2.$EXPECT)($L0, 'RestoreBracedApplication ""'), function($skip, $loc, $0, $1) {
    state.forbidBracedApplication.pop();
  });
  function RestoreBracedApplication(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "RestoreBracedApplication", RestoreBracedApplication$0);
  }
  var BracedApplicationAllowed$0 = (0, import_lib2.$TV)((0, import_lib2.$EXPECT)($L0, 'BracedApplicationAllowed ""'), function($skip, $loc, $0, $1) {
    if (config.verbose && console.log("forbidBracedApplication:", state.forbidBracedApplication), state.bracedApplicationForbidden) return $skip;
  });
  function BracedApplicationAllowed(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "BracedApplicationAllowed", BracedApplicationAllowed$0);
  }
  var ForbidIndentedApplication$0 = (0, import_lib2.$TV)((0, import_lib2.$EXPECT)($L0, 'ForbidIndentedApplication ""'), function($skip, $loc, $0, $1) {
    state.forbidIndentedApplication.push(!0);
  });
  function ForbidIndentedApplication(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "ForbidIndentedApplication", ForbidIndentedApplication$0);
  }
  var AllowIndentedApplication$0 = (0, import_lib2.$TV)((0, import_lib2.$EXPECT)($L0, 'AllowIndentedApplication ""'), function($skip, $loc, $0, $1) {
    state.forbidIndentedApplication.push(!1);
  });
  function AllowIndentedApplication(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "AllowIndentedApplication", AllowIndentedApplication$0);
  }
  var RestoreIndentedApplication$0 = (0, import_lib2.$TV)((0, import_lib2.$EXPECT)($L0, 'RestoreIndentedApplication ""'), function($skip, $loc, $0, $1) {
    state.forbidIndentedApplication.pop();
  });
  function RestoreIndentedApplication(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "RestoreIndentedApplication", RestoreIndentedApplication$0);
  }
  var IndentedApplicationAllowed$0 = (0, import_lib2.$TV)((0, import_lib2.$EXPECT)($L0, 'IndentedApplicationAllowed ""'), function($skip, $loc, $0, $1) {
    if (config.verbose && console.log("forbidIndentedApplication:", state.forbidIndentedApplication), state.indentedApplicationForbidden) return $skip;
  });
  function IndentedApplicationAllowed(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "IndentedApplicationAllowed", IndentedApplicationAllowed$0);
  }
  var ForbidTrailingMemberProperty$0 = (0, import_lib2.$TV)((0, import_lib2.$EXPECT)($L0, 'ForbidTrailingMemberProperty ""'), function($skip, $loc, $0, $1) {
    state.forbidTrailingMemberProperty.push(!0);
  });
  function ForbidTrailingMemberProperty(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "ForbidTrailingMemberProperty", ForbidTrailingMemberProperty$0);
  }
  var AllowTrailingMemberProperty$0 = (0, import_lib2.$TV)((0, import_lib2.$EXPECT)($L0, 'AllowTrailingMemberProperty ""'), function($skip, $loc, $0, $1) {
    state.forbidTrailingMemberProperty.push(!1);
  });
  function AllowTrailingMemberProperty(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "AllowTrailingMemberProperty", AllowTrailingMemberProperty$0);
  }
  var RestoreTrailingMemberProperty$0 = (0, import_lib2.$TV)((0, import_lib2.$EXPECT)($L0, 'RestoreTrailingMemberProperty ""'), function($skip, $loc, $0, $1) {
    state.forbidTrailingMemberProperty.pop();
  });
  function RestoreTrailingMemberProperty(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "RestoreTrailingMemberProperty", RestoreTrailingMemberProperty$0);
  }
  var TrailingMemberPropertyAllowed$0 = (0, import_lib2.$TV)((0, import_lib2.$EXPECT)($L0, 'TrailingMemberPropertyAllowed ""'), function($skip, $loc, $0, $1) {
    if (config.verbose && console.log("forbidTrailingMemberProperty:", state.forbidTrailingMemberProperty), state.trailingMemberPropertyForbidden) return $skip;
  });
  function TrailingMemberPropertyAllowed(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "TrailingMemberPropertyAllowed", TrailingMemberPropertyAllowed$0);
  }
  var AllowNestedBinaryOp$0 = (0, import_lib2.$TV)((0, import_lib2.$EXPECT)($L0, 'AllowNestedBinaryOp ""'), function($skip, $loc, $0, $1) {
    state.forbidNestedBinaryOp.push(!1);
  });
  function AllowNestedBinaryOp(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "AllowNestedBinaryOp", AllowNestedBinaryOp$0);
  }
  var ForbidNestedBinaryOp$0 = (0, import_lib2.$TV)((0, import_lib2.$EXPECT)($L0, 'ForbidNestedBinaryOp ""'), function($skip, $loc, $0, $1) {
    state.forbidNestedBinaryOp.push(!0);
  });
  function ForbidNestedBinaryOp(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "ForbidNestedBinaryOp", ForbidNestedBinaryOp$0);
  }
  var RestoreNestedBinaryOp$0 = (0, import_lib2.$TV)((0, import_lib2.$EXPECT)($L0, 'RestoreNestedBinaryOp ""'), function($skip, $loc, $0, $1) {
    state.forbidNestedBinaryOp.pop();
  });
  function RestoreNestedBinaryOp(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "RestoreNestedBinaryOp", RestoreNestedBinaryOp$0);
  }
  var NestedBinaryOpAllowed$0 = (0, import_lib2.$TV)((0, import_lib2.$EXPECT)($L0, 'NestedBinaryOpAllowed ""'), function($skip, $loc, $0, $1) {
    if (config.verbose && console.log("forbidNestedBinaryOp:", state.forbidNestedBinaryOp), state.nestedBinaryOpForbidden) return $skip;
  });
  function NestedBinaryOpAllowed(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "NestedBinaryOpAllowed", NestedBinaryOpAllowed$0);
  }
  var AllowNewlineBinaryOp$0 = (0, import_lib2.$TV)((0, import_lib2.$EXPECT)($L0, 'AllowNewlineBinaryOp ""'), function($skip, $loc, $0, $1) {
    state.forbidNewlineBinaryOp.push(!1);
  });
  function AllowNewlineBinaryOp(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "AllowNewlineBinaryOp", AllowNewlineBinaryOp$0);
  }
  var ForbidNewlineBinaryOp$0 = (0, import_lib2.$TV)((0, import_lib2.$EXPECT)($L0, 'ForbidNewlineBinaryOp ""'), function($skip, $loc, $0, $1) {
    state.forbidNewlineBinaryOp.push(!0);
  });
  function ForbidNewlineBinaryOp(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "ForbidNewlineBinaryOp", ForbidNewlineBinaryOp$0);
  }
  var RestoreNewlineBinaryOp$0 = (0, import_lib2.$TV)((0, import_lib2.$EXPECT)($L0, 'RestoreNewlineBinaryOp ""'), function($skip, $loc, $0, $1) {
    state.forbidNewlineBinaryOp.pop();
  });
  function RestoreNewlineBinaryOp(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "RestoreNewlineBinaryOp", RestoreNewlineBinaryOp$0);
  }
  var NewlineBinaryOpAllowed$0 = (0, import_lib2.$TV)((0, import_lib2.$EXPECT)($L0, 'NewlineBinaryOpAllowed ""'), function($skip, $loc, $0, $1) {
    if (config.verbose && console.log("forbidNewlineBinaryOp:", state.forbidNewlineBinaryOp), state.newlineBinaryOpForbidden) return $skip;
  });
  function NewlineBinaryOpAllowed(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "NewlineBinaryOpAllowed", NewlineBinaryOpAllowed$0);
  }
  var AllowPipeline$0 = (0, import_lib2.$TV)((0, import_lib2.$EXPECT)($L0, 'AllowPipeline ""'), function($skip, $loc, $0, $1) {
    state.forbidPipeline.push(!1);
  });
  function AllowPipeline(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "AllowPipeline", AllowPipeline$0);
  }
  var ForbidPipeline$0 = (0, import_lib2.$TV)((0, import_lib2.$EXPECT)($L0, 'ForbidPipeline ""'), function($skip, $loc, $0, $1) {
    state.forbidPipeline.push(!0);
  });
  function ForbidPipeline(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "ForbidPipeline", ForbidPipeline$0);
  }
  var RestorePipeline$0 = (0, import_lib2.$TV)((0, import_lib2.$EXPECT)($L0, 'RestorePipeline ""'), function($skip, $loc, $0, $1) {
    state.forbidPipeline.pop();
  });
  function RestorePipeline(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "RestorePipeline", RestorePipeline$0);
  }
  var PipelineAllowed$0 = (0, import_lib2.$TV)((0, import_lib2.$EXPECT)($L0, 'PipelineAllowed ""'), function($skip, $loc, $0, $1) {
    if (config.verbose && console.log("forbidPipeline:", state.forbidPipeline), state.pipelineForbidden) return $skip;
  });
  function PipelineAllowed(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "PipelineAllowed", PipelineAllowed$0);
  }
  var AllowAll$0 = (0, import_lib2.$S)(AllowTrailingMemberProperty, AllowBracedApplication, AllowIndentedApplication, AllowClassImplicitCall, AllowNestedBinaryOp, AllowNewlineBinaryOp, AllowPipeline);
  function AllowAll(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "AllowAll", AllowAll$0);
  }
  var RestoreAll$0 = (0, import_lib2.$S)(RestoreTrailingMemberProperty, RestoreBracedApplication, RestoreIndentedApplication, RestoreClassImplicitCall, RestoreNestedBinaryOp, RestoreNewlineBinaryOp, RestorePipeline);
  function RestoreAll(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "RestoreAll", RestoreAll$0);
  }
  var CommaExpressionStatement$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(CommaExpressionSpread), function($skip, $loc, $0, $1) {
    return makeExpressionStatement($1);
  });
  function CommaExpressionStatement(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "CommaExpressionStatement", CommaExpressionStatement$0);
  }
  var ExpressionStatement$0 = IterationExpression, ExpressionStatement$1 = (0, import_lib2.$TS)((0, import_lib2.$S)(AssignmentExpression), function($skip, $loc, $0, $1) {
    return makeExpressionStatement($1);
  }), ExpressionStatement$$ = [ExpressionStatement$0, ExpressionStatement$1];
  function ExpressionStatement(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "ExpressionStatement", ExpressionStatement$$);
  }
  var KeywordStatement$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(Break, (0, import_lib2.$E)((0, import_lib2.$S)(_, LabelIdentifier)), (0, import_lib2.$E)((0, import_lib2.$S)(_, With, MaybeNestedExpression))), function($skip, $loc, $0, $1, $2, $3) {
    let children = [$1];
    return $2 && children.push($2), $3 && children.push({
      type: "Error",
      subtype: "Warning",
      message: "'break with' outside of loop that returns a value"
    }), {
      type: "BreakStatement",
      label: $2?.[1],
      with: $3?.[2],
      children
    };
  }), KeywordStatement$1 = (0, import_lib2.$TS)((0, import_lib2.$S)(Continue, _, Switch), function($skip, $loc, $0, $1, $2, $3) {
    return {
      type: "ContinueStatement",
      special: $3.token,
      children: []
    };
  }), KeywordStatement$2 = (0, import_lib2.$TS)((0, import_lib2.$S)(Continue, (0, import_lib2.$E)((0, import_lib2.$S)(_, LabelIdentifier)), (0, import_lib2.$E)((0, import_lib2.$S)(_, With, MaybeNestedExpression))), function($skip, $loc, $0, $1, $2, $3) {
    let children = [$1];
    return $2 && children.push($2), $3 && children.push({
      type: "Error",
      subtype: "Warning",
      message: "'continue with' outside of loop that returns a value"
    }), {
      type: "ContinueStatement",
      label: $2?.[1],
      with: $3?.[2],
      children
    };
  }), KeywordStatement$3 = DebuggerStatement, KeywordStatement$4 = (0, import_lib2.$T)((0, import_lib2.$S)(Return, (0, import_lib2.$N)((0, import_lib2.$C)((0, import_lib2.$EXPECT)($L16, 'KeywordStatement ":"'), (0, import_lib2.$EXPECT)($L7, 'KeywordStatement "."'), AfterReturnShorthand)), (0, import_lib2.$E)(MaybeParenNestedExpression)), function(value) {
    var ret = value[0], expression = value[2];
    return { type: "ReturnStatement", expression, children: [ret, expression] };
  }), KeywordStatement$5 = ThrowStatement, KeywordStatement$$ = [KeywordStatement$0, KeywordStatement$1, KeywordStatement$2, KeywordStatement$3, KeywordStatement$4, KeywordStatement$5];
  function KeywordStatement(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "KeywordStatement", KeywordStatement$$);
  }
  var DebuggerStatement$0 = (0, import_lib2.$T)((0, import_lib2.$S)(Debugger), function(value) {
    return { type: "DebuggerStatement", children: value };
  });
  function DebuggerStatement(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "DebuggerStatement", DebuggerStatement$0);
  }
  var ThrowStatement$0 = (0, import_lib2.$T)((0, import_lib2.$S)(Throw, MaybeParenNestedExpression), function(value) {
    return { type: "ThrowStatement", children: value };
  });
  function ThrowStatement(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "ThrowStatement", ThrowStatement$0);
  }
  var Break$0 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$EXPECT)($L130, 'Break "break"'), NonIdContinue), function($skip, $loc, $0, $1, $2) {
    return { $loc, token: $1 };
  });
  function Break(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "Break", Break$0);
  }
  var Continue$0 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$EXPECT)($L131, 'Continue "continue"'), NonIdContinue), function($skip, $loc, $0, $1, $2) {
    return { $loc, token: $1 };
  });
  function Continue(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "Continue", Continue$0);
  }
  var Debugger$0 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$EXPECT)($L132, 'Debugger "debugger"'), NonIdContinue), function($skip, $loc, $0, $1, $2) {
    return { $loc, token: $1 };
  });
  function Debugger(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "Debugger", Debugger$0);
  }
  var MaybeNestedNonPipelineExpression$0 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$N)(NestedBulletedArray), (0, import_lib2.$N)(NestedImplicitObjectLiteral), PushIndent, (0, import_lib2.$E)((0, import_lib2.$S)(Nested, NonPipelineExpression)), PopIndent, (0, import_lib2.$E)(AllowedTrailingCallExpressions)), function($skip, $loc, $0, $1, $2, $3, $4, $5, $6) {
    var expression = $4, trailing = $6;
    return expression ? trailing ? [expression, trailing] : expression : $skip;
  }), MaybeNestedNonPipelineExpression$1 = NonPipelineExpression, MaybeNestedNonPipelineExpression$$ = [MaybeNestedNonPipelineExpression$0, MaybeNestedNonPipelineExpression$1];
  function MaybeNestedNonPipelineExpression(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "MaybeNestedNonPipelineExpression", MaybeNestedNonPipelineExpression$$);
  }
  var MaybeNestedPostfixedExpression$0 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$N)(NestedBulletedArray), (0, import_lib2.$N)(NestedImplicitObjectLiteral), PushIndent, (0, import_lib2.$E)((0, import_lib2.$S)(Nested, PostfixedExpression)), PopIndent, (0, import_lib2.$E)(AllowedTrailingCallExpressions)), function($skip, $loc, $0, $1, $2, $3, $4, $5, $6) {
    var expression = $4, trailing = $6;
    return expression ? trailing ? [expression, trailing] : expression : $skip;
  }), MaybeNestedPostfixedExpression$1 = PostfixedExpression, MaybeNestedPostfixedExpression$$ = [MaybeNestedPostfixedExpression$0, MaybeNestedPostfixedExpression$1];
  function MaybeNestedPostfixedExpression(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "MaybeNestedPostfixedExpression", MaybeNestedPostfixedExpression$$);
  }
  var NestedPostfixedExpressionNoTrailing$0 = NestedBulletedArray, NestedPostfixedExpressionNoTrailing$1 = NestedImplicitObjectLiteral, NestedPostfixedExpressionNoTrailing$2 = (0, import_lib2.$TS)((0, import_lib2.$S)(PushIndent, (0, import_lib2.$E)((0, import_lib2.$S)(Nested, PostfixedExpression)), PopIndent), function($skip, $loc, $0, $1, $2, $3) {
    var expression = $2;
    return expression || $skip;
  }), NestedPostfixedExpressionNoTrailing$$ = [NestedPostfixedExpressionNoTrailing$0, NestedPostfixedExpressionNoTrailing$1, NestedPostfixedExpressionNoTrailing$2];
  function NestedPostfixedExpressionNoTrailing(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "NestedPostfixedExpressionNoTrailing", NestedPostfixedExpressionNoTrailing$$);
  }
  var MaybeNestedExpression$0 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$N)(NestedBulletedArray), (0, import_lib2.$N)(NestedImplicitObjectLiteral), PushIndent, (0, import_lib2.$E)((0, import_lib2.$S)(Nested, Expression)), PopIndent, (0, import_lib2.$E)(AllowedTrailingCallExpressions)), function($skip, $loc, $0, $1, $2, $3, $4, $5, $6) {
    var expression = $4, trailing = $6;
    return expression ? trailing ? [expression, trailing] : expression : $skip;
  }), MaybeNestedExpression$1 = Expression, MaybeNestedExpression$$ = [MaybeNestedExpression$0, MaybeNestedExpression$1];
  function MaybeNestedExpression(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "MaybeNestedExpression", MaybeNestedExpression$$);
  }
  var MaybeParenNestedExpression$0 = (0, import_lib2.$T)((0, import_lib2.$Y)((0, import_lib2.$S)((0, import_lib2.$E)(_), PostfixStatement, NoBlock)), function(value) {
    return "";
  }), MaybeParenNestedExpression$1 = (0, import_lib2.$T)((0, import_lib2.$S)((0, import_lib2.$N)(EOS), Expression), function(value) {
    return value[1];
  }), MaybeParenNestedExpression$2 = (0, import_lib2.$T)((0, import_lib2.$S)((0, import_lib2.$Y)(EOS), (0, import_lib2.$C)(ArrayLiteral, ObjectLiteral)), function(value) {
    return value[1];
  }), MaybeParenNestedExpression$3 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$Y)(EOS), InsertSpace, InsertOpenParen, PushIndent, (0, import_lib2.$S)(Nested, Expression), PopIndent, (0, import_lib2.$E)(AllowedTrailingCallExpressions), InsertNewline, InsertIndent, InsertCloseParen), function($skip, $loc, $0, $1, $2, $3, $4, $5, $6, $7, $8, $9, $10) {
    var exp = $5;
    return exp ? $0.slice(1) : $skip;
  }), MaybeParenNestedExpression$$ = [MaybeParenNestedExpression$0, MaybeParenNestedExpression$1, MaybeParenNestedExpression$2, MaybeParenNestedExpression$3];
  function MaybeParenNestedExpression(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "MaybeParenNestedExpression", MaybeParenNestedExpression$$);
  }
  var ImportDeclaration$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(Import, _, Identifier, (0, import_lib2.$E)(_), Equals, __, (0, import_lib2.$EXPECT)($L133, 'ImportDeclaration "require"'), NonIdContinue, Arguments), function($skip, $loc, $0, $1, $2, $3, $4, $5, $6, $7, $8, $9) {
    return {
      type: "ImportDeclaration",
      children: [[
        { ...$1, ts: !0 },
        { ...$1, token: "const", js: !0 }
      ], $0.slice(1)]
    };
  }), ImportDeclaration$1 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$C)((0, import_lib2.$S)(Import, __), ImpliedImport), Operator, (0, import_lib2.$E)(OperatorBehavior), __, OperatorNamedImports, __, FromClause), function($skip, $loc, $0, $1, $2, $3, $4, $5, $6, $7) {
    var i = $1, behavior = $3, ws1 = $4, imports = $5, ws2 = $6, from = $7;
    let errors = [];
    return behavior?.error && errors.push(behavior.error), imports.specifiers.forEach((spec) => {
      state.operators.set(spec.binding.name, spec.behavior ?? behavior), spec.behavior?.error && errors.push(spec.behavior.error);
    }), {
      type: "ImportDeclaration",
      children: [i, ...errors, trimFirstSpace(ws1), imports, ws2, from],
      // omit $2 = Operator and $3 = OperatorBehavior
      imports,
      from
    };
  }), ImportDeclaration$2 = (0, import_lib2.$TS)((0, import_lib2.$S)(Import, __, (0, import_lib2.$E)((0, import_lib2.$S)(TypeKeyword, __)), ImportClause, __, FromClause), function($skip, $loc, $0, $1, $2, $3, $4, $5, $6) {
    var t = $3, imports = $4, from = $6;
    return {
      type: "ImportDeclaration",
      children: $0,
      imports,
      from,
      ts: !!t
    };
  }), ImportDeclaration$3 = (0, import_lib2.$T)((0, import_lib2.$S)(Import, __, ModuleSpecifier), function(value) {
    var module = value[2];
    return { type: "ImportDeclaration", children: value, module };
  }), ImportDeclaration$4 = (0, import_lib2.$TS)((0, import_lib2.$S)(ImpliedImport, (0, import_lib2.$E)((0, import_lib2.$S)(TypeKeyword, __)), ImportClause, __, FromClause), function($skip, $loc, $0, $1, $2, $3, $4, $5) {
    var i = $1, t = $2, imports = $3, w = $4, from = $5;
    return i.$loc = {
      pos: from[0].$loc.pos - 1,
      length: from[0].$loc.length + 1
    }, { type: "ImportDeclaration", ts: !!t, children: [i, t, imports, w, from], imports, from };
  }), ImportDeclaration$5 = (0, import_lib2.$TS)((0, import_lib2.$S)(FromClause, __, Import, __, Operator, (0, import_lib2.$E)(OperatorBehavior), __, OperatorNamedImports), function($skip, $loc, $0, $1, $2, $3, $4, $5, $6, $7, $8) {
    var from = $1, fws = $2, i = $3, iws = $4, behavior = $6, ows = $7, imports = $8;
    let errors = [];
    return behavior?.error && errors.push(behavior.error), imports.specifiers.forEach((spec) => {
      state.operators.set(spec.binding.name, spec.behavior ?? behavior), spec.behavior?.error && errors.push(spec.behavior.error);
    }), {
      type: "ImportDeclaration",
      children: [i, iws, ...errors, trimFirstSpace(ows), imports, fws, from],
      // omit Operator and OperatorBehavior
      imports,
      from
    };
  }), ImportDeclaration$6 = (0, import_lib2.$TS)((0, import_lib2.$S)(FromClause, __, Import, __, (0, import_lib2.$E)((0, import_lib2.$S)(TypeKeyword, __)), ImportClause), function($skip, $loc, $0, $1, $2, $3, $4, $5, $6) {
    var from = $1, fws = $2, i = $3, iws = $4, t = $5, imports = $6;
    return {
      type: "ImportDeclaration",
      children: [i, iws, t, imports, fws, from],
      imports,
      from,
      ts: !!t
    };
  }), ImportDeclaration$$ = [ImportDeclaration$0, ImportDeclaration$1, ImportDeclaration$2, ImportDeclaration$3, ImportDeclaration$4, ImportDeclaration$5, ImportDeclaration$6];
  function ImportDeclaration(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "ImportDeclaration", ImportDeclaration$$);
  }
  var ImpliedImport$0 = (0, import_lib2.$TV)((0, import_lib2.$EXPECT)($L0, 'ImpliedImport ""'), function($skip, $loc, $0, $1) {
    return { $loc, token: "import " };
  });
  function ImpliedImport(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "ImpliedImport", ImpliedImport$0);
  }
  var ImportClause$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(ImportedBinding, (0, import_lib2.$E)((0, import_lib2.$S)(__, Comma, __, (0, import_lib2.$C)(NameSpaceImport, NamedImports)))), function($skip, $loc, $0, $1, $2) {
    var binding = $1, rest = $2;
    return rest ? {
      type: "Declaration",
      children: [binding, ...rest],
      names: [...binding.names, ...rest[3].names],
      binding,
      specifiers: rest[3].specifiers
    } : {
      type: "Declaration",
      children: [binding],
      names: binding.names,
      binding
    };
  }), ImportClause$1 = NameSpaceImport, ImportClause$2 = NamedImports, ImportClause$$ = [ImportClause$0, ImportClause$1, ImportClause$2];
  function ImportClause(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "ImportClause", ImportClause$$);
  }
  var NameSpaceImport$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(Star, ImportAsToken, __, ImportedBinding), function($skip, $loc, $0, $1, $2, $3, $4) {
    var star = $1, binding = $4;
    return {
      type: "Declaration",
      children: $0,
      names: binding.names,
      binding,
      star
    };
  });
  function NameSpaceImport(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "NameSpaceImport", NameSpaceImport$0);
  }
  var NamedImports$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(OpenBrace, (0, import_lib2.$Q)(TypeAndImportSpecifier), (0, import_lib2.$E)((0, import_lib2.$S)(__, Comma)), __, CloseBrace), function($skip, $loc, $0, $1, $2, $3, $4, $5) {
    var specifiers = $2;
    let names = specifiers.flatMap(({ binding }) => binding.names);
    return {
      type: "Declaration",
      children: $0,
      names,
      specifiers
    };
  });
  function NamedImports(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "NamedImports", NamedImports$0);
  }
  var OperatorNamedImports$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(OpenBrace, (0, import_lib2.$Q)(OperatorImportSpecifier), __, CloseBrace), function($skip, $loc, $0, $1, $2, $3, $4) {
    var specifiers = $2;
    let names = specifiers.flatMap(({ binding }) => binding.names);
    return {
      type: "Declaration",
      children: $0,
      names,
      specifiers
    };
  });
  function OperatorNamedImports(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "OperatorNamedImports", OperatorNamedImports$0);
  }
  var FromClause$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(From, __, ModuleSpecifier), function($skip, $loc, $0, $1, $2, $3) {
    var module = $3;
    return Array.isArray(module) ? [$1, $2, ...module] : $0;
  });
  function FromClause(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "FromClause", FromClause$0);
  }
  var ImportAssertion$0 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$E)(_), (0, import_lib2.$C)((0, import_lib2.$EXPECT)($L134, 'ImportAssertion "with"'), (0, import_lib2.$EXPECT)($L135, 'ImportAssertion "assert"')), NonIdContinue, (0, import_lib2.$E)(_), ObjectLiteral), function($skip, $loc, $0, $1, $2, $3, $4, $5) {
    var keyword = $2, object = $5;
    return {
      type: "ImportAssertion",
      keyword,
      object,
      children: $0
    };
  });
  function ImportAssertion(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "ImportAssertion", ImportAssertion$0);
  }
  var TypeAndImportSpecifier$0 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$E)((0, import_lib2.$S)(__, TypeKeyword)), ImportSpecifier), function($skip, $loc, $0, $1, $2) {
    return $1 ? { ts: !0, children: $0, binding: $2.binding } : $2;
  }), TypeAndImportSpecifier$1 = (0, import_lib2.$TS)((0, import_lib2.$S)(__, Operator, OperatorImportSpecifier), function($skip, $loc, $0, $1, $2, $3) {
    var ws = $1, spec = $3;
    if (spec.binding.type !== "Identifier")
      throw new Error("Expected identifier after `operator`");
    return state.operators.set(spec.binding.name, spec.behavior), {
      ...spec,
      children: [
        ws,
        trimFirstSpace(spec[0]),
        spec.children.slice(1)
      ]
    };
  }), TypeAndImportSpecifier$$ = [TypeAndImportSpecifier$0, TypeAndImportSpecifier$1];
  function TypeAndImportSpecifier(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "TypeAndImportSpecifier", TypeAndImportSpecifier$$);
  }
  var ImportSpecifier$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(__, ModuleExportName, ImportAsToken, __, ImportedBinding, ObjectPropertyDelimiter), function($skip, $loc, $0, $1, $2, $3, $4, $5, $6) {
    var source = $2, binding = $5;
    return {
      source,
      binding,
      children: $0
    };
  }), ImportSpecifier$1 = (0, import_lib2.$TS)((0, import_lib2.$S)(__, ImportedBinding, ObjectPropertyDelimiter), function($skip, $loc, $0, $1, $2, $3) {
    var binding = $2;
    return {
      source: binding,
      binding,
      children: $0
    };
  }), ImportSpecifier$$ = [ImportSpecifier$0, ImportSpecifier$1];
  function ImportSpecifier(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "ImportSpecifier", ImportSpecifier$$);
  }
  var OperatorImportSpecifier$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(__, ModuleExportName, (0, import_lib2.$E)(OperatorBehavior), ImportAsToken, __, ImportedBinding, ObjectPropertyDelimiter), function($skip, $loc, $0, $1, $2, $3, $4, $5, $6, $7) {
    var behavior = $3, binding = $6;
    return {
      binding,
      behavior,
      children: [$1, $2, $3?.error, $4, $5, $6, $7]
    };
  }), OperatorImportSpecifier$1 = (0, import_lib2.$TS)((0, import_lib2.$S)(__, ImportedBinding, (0, import_lib2.$E)(OperatorBehavior), ObjectPropertyDelimiter), function($skip, $loc, $0, $1, $2, $3, $4) {
    var binding = $2, behavior = $3;
    return {
      binding,
      behavior,
      children: [$1, $2, $3?.error, $4]
    };
  }), OperatorImportSpecifier$$ = [OperatorImportSpecifier$0, OperatorImportSpecifier$1];
  function OperatorImportSpecifier(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "OperatorImportSpecifier", OperatorImportSpecifier$$);
  }
  var ImportAsToken$0 = (0, import_lib2.$S)(__, As), ImportAsToken$1 = (0, import_lib2.$TS)((0, import_lib2.$S)(Loc, __, Colon, (0, import_lib2.$E)((0, import_lib2.$EXPECT)($L17, 'ImportAsToken " "'))), function($skip, $loc, $0, $1, $2, $3, $4) {
    var l = $1, ws = $2, c = $3;
    let children = [
      ...ws,
      { ...c, token: "as " }
    ];
    return ws.length || children.unshift({ $loc: l.$loc, token: " " }), {
      children
    };
  }), ImportAsToken$$ = [ImportAsToken$0, ImportAsToken$1];
  function ImportAsToken(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "ImportAsToken", ImportAsToken$$);
  }
  var ModuleExportName$0 = StringLiteral, ModuleExportName$1 = IdentifierName, ModuleExportName$$ = [ModuleExportName$0, ModuleExportName$1];
  function ModuleExportName(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "ModuleExportName", ModuleExportName$$);
  }
  var ModuleSpecifier$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(UnprocessedModuleSpecifier, (0, import_lib2.$E)(ImportAssertion)), function($skip, $loc, $0, $1, $2) {
    var module = $1, assertion = $2;
    let { token } = module;
    return config.rewriteTsImports && (token = token.replace(/\.([mc])?ts(['"])$/, ".$1js$2")), config.rewriteCivetImports && (token = token.replace(
      /\.civet(['"])$/,
      `${config.rewriteCivetImports.replace(/\$/g, "$$")}$1`
    )), token !== module.token && (module = { ...module, token, input: module.token }), {
      type: "ModuleSpecifier",
      module,
      assertion,
      children: [module, assertion]
    };
  });
  function ModuleSpecifier(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "ModuleSpecifier", ModuleSpecifier$0);
  }
  var UnprocessedModuleSpecifier$0 = StringLiteral, UnprocessedModuleSpecifier$1 = UnquotedSpecifier, UnprocessedModuleSpecifier$$ = [UnprocessedModuleSpecifier$0, UnprocessedModuleSpecifier$1];
  function UnprocessedModuleSpecifier(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "UnprocessedModuleSpecifier", UnprocessedModuleSpecifier$$);
  }
  var UnquotedSpecifier$0 = (0, import_lib2.$TV)((0, import_lib2.$EXPECT)($R34, 'UnquotedSpecifier /[^;"\\s=>]+/'), function($skip, $loc, $0, $1) {
    var spec = $0;
    return { $loc, token: `"${spec}"` };
  });
  function UnquotedSpecifier(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "UnquotedSpecifier", UnquotedSpecifier$0);
  }
  var ImportedBinding$0 = BindingIdentifier;
  function ImportedBinding(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "ImportedBinding", ImportedBinding$0);
  }
  var ExportDeclaration$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(Export, (0, import_lib2.$E)(_), Equals, MaybeNestedExpression), function($skip, $loc, $0, $1, $2, $3, $4) {
    return {
      type: "ExportDeclaration",
      children: [[
        { ...$1, ts: !0 },
        { ...$1, token: "module.exports", js: !0 }
      ], $0.slice(1)]
    };
  }), ExportDeclaration$1 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$E)(Decorators), Export, __, Default, __, (0, import_lib2.$N)(FunctionDeclaration), (0, import_lib2.$C)(LexicalDeclaration, VariableStatement, TypeAliasDeclaration, NamespaceDeclaration, EnumDeclaration, OperatorDeclaration)), function($skip, $loc, $0, $1, $2, $3, $4, $5, $6, $7) {
    var declaration = $7;
    let id, error;
    if (declaration.id)
      id = declaration.id;
    else if (declaration.names)
      declaration.names.length !== 1 && (error = {
        type: "Error",
        message: `export default with ${declaration.names.length} variable declaration (should be 1)`
      }), id = declaration.names[0];
    else
      throw new Error("Could not find name of declaration in export default");
    return [
      declaration,
      { children: [";"], ts: declaration.ts },
      error ?? {
        type: "ExportDeclaration",
        declaration: id,
        ts: declaration.ts,
        children: [...$0.slice(0, -2), id]
      }
    ];
  }), ExportDeclaration$2 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$E)(Decorators), Export, __, Default, __, (0, import_lib2.$C)(HoistableDeclaration, ClassDeclaration, InterfaceDeclaration, MaybeNestedExpression)), function($skip, $loc, $0, $1, $2, $3, $4, $5, $6) {
    var declaration = $6;
    return { type: "ExportDeclaration", declaration, ts: declaration.ts, children: $0 };
  }), ExportDeclaration$3 = (0, import_lib2.$TS)((0, import_lib2.$S)(Export, __, ExportFromClause, __, FromClause), function($skip, $loc, $0, $1, $2, $3, $4, $5) {
    var exports = $3;
    return { type: "ExportDeclaration", ts: exports.ts, children: $0 };
  }), ExportDeclaration$4 = (0, import_lib2.$TS)((0, import_lib2.$S)(FromClause, __, Export, __, ExportFromClause), function($skip, $loc, $0, $1, $2, $3, $4, $5) {
    var from = $1, fws = $2, e = $3, ews = $4, exports = $5;
    return {
      type: "ExportDeclaration",
      ts: exports.ts,
      children: [e, ews, exports, " ", from, trimFirstSpace(fws)]
    };
  }), ExportDeclaration$5 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$E)(Decorators), Export, __, (0, import_lib2.$C)(Declaration, VariableStatement, TypeAndNamedExports, ExportVarDec)), function($skip, $loc, $0, $1, $2, $3, $4) {
    var declaration = $4;
    return { type: "ExportDeclaration", declaration, ts: declaration.ts, children: $0 };
  }), ExportDeclaration$$ = [ExportDeclaration$0, ExportDeclaration$1, ExportDeclaration$2, ExportDeclaration$3, ExportDeclaration$4, ExportDeclaration$5];
  function ExportDeclaration(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "ExportDeclaration", ExportDeclaration$$);
  }
  var ExportVarDec$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(InsertVar, VariableDeclarationList), function($skip, $loc, $0, $1, $2) {
    return {
      ...$2,
      children: [$1, ...$2.children]
    };
  });
  function ExportVarDec(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "ExportVarDec", ExportVarDec$0);
  }
  var ExportFromClause$0 = (0, import_lib2.$S)(Star, (0, import_lib2.$E)((0, import_lib2.$S)(__, As, __, ModuleExportName))), ExportFromClause$1 = TypeAndNamedExports, ExportFromClause$$ = [ExportFromClause$0, ExportFromClause$1];
  function ExportFromClause(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "ExportFromClause", ExportFromClause$$);
  }
  var TypeAndNamedExports$0 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$E)((0, import_lib2.$S)(TypeKeyword, __)), NamedExports), function($skip, $loc, $0, $1, $2) {
    return $1 ? { ts: !0, children: $0 } : $2;
  });
  function TypeAndNamedExports(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "TypeAndNamedExports", TypeAndNamedExports$0);
  }
  var NamedExports$0 = (0, import_lib2.$S)(OpenBrace, (0, import_lib2.$Q)(ExportSpecifier), (0, import_lib2.$E)((0, import_lib2.$S)(__, Comma)), __, CloseBrace), NamedExports$1 = (0, import_lib2.$TS)((0, import_lib2.$S)(InsertInlineOpenBrace, ImplicitExportSpecifier, (0, import_lib2.$Q)((0, import_lib2.$S)(ImplicitObjectPropertyDelimiter, ImplicitExportSpecifier)), InsertCloseBrace, (0, import_lib2.$Y)((0, import_lib2.$C)(StatementDelimiter, (0, import_lib2.$S)(__, From)))), function($skip, $loc, $0, $1, $2, $3, $4, $5) {
    var open = $1, first = $2, rest = $3, close = $4;
    return [open, first, ...rest, close];
  }), NamedExports$$ = [NamedExports$0, NamedExports$1];
  function NamedExports(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "NamedExports", NamedExports$$);
  }
  var ExportSpecifier$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(__, (0, import_lib2.$E)((0, import_lib2.$S)(TypeKeyword, __)), ModuleExportName, (0, import_lib2.$E)((0, import_lib2.$S)(__, As, __, ModuleExportName)), ObjectPropertyDelimiter), function($skip, $loc, $0, $1, $2, $3, $4, $5) {
    return $2 ? { ts: !0, children: $0 } : $0;
  });
  function ExportSpecifier(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "ExportSpecifier", ExportSpecifier$0);
  }
  var ImplicitExportSpecifier$0 = (0, import_lib2.$S)((0, import_lib2.$N)(Default), ModuleExportName, (0, import_lib2.$E)((0, import_lib2.$S)(__, As, __, ModuleExportName)));
  function ImplicitExportSpecifier(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "ImplicitExportSpecifier", ImplicitExportSpecifier$0);
  }
  var Declaration$0 = (0, import_lib2.$TV)(ImportDeclaration, function($skip, $loc, $0, $1) {
    var decl = $0;
    if (decl.ts || decl.module || !decl.imports || !decl.from) return $skip;
    let { imports } = decl;
    return !imports.binding && !imports.specifiers ? $skip : dynamizeImportDeclaration(decl);
  }), Declaration$1 = HoistableDeclaration, Declaration$2 = ClassDeclaration, Declaration$3 = (0, import_lib2.$TV)(LexicalDeclaration, function($skip, $loc, $0, $1) {
    var d = $0;
    return d.thisAssignments?.length ? {
      ...d,
      children: [...d.children, ...d.splices, ";", ...d.thisAssignments]
    } : d.splices?.length ? {
      ...d,
      children: [...d.children, ...d.splices]
    } : d;
  }), Declaration$4 = TypeDeclaration, Declaration$5 = EnumDeclaration, Declaration$6 = OperatorDeclaration, Declaration$7 = UsingDeclaration, Declaration$$ = [Declaration$0, Declaration$1, Declaration$2, Declaration$3, Declaration$4, Declaration$5, Declaration$6, Declaration$7];
  function Declaration(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "Declaration", Declaration$$);
  }
  var HoistableDeclaration$0 = FunctionDeclaration;
  function HoistableDeclaration(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "HoistableDeclaration", HoistableDeclaration$0);
  }
  var LexicalDeclaration$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(LetOrConst, LexicalBinding, (0, import_lib2.$Q)((0, import_lib2.$S)(__, Comma, __, LexicalBinding))), function($skip, $loc, $0, $1, $2, $3) {
    var decl = $1, binding = $2, tail = $3;
    let bindings = [binding].concat(tail.map(([, , , b]) => b));
    return {
      type: "Declaration",
      children: $0,
      names: bindings.flatMap((b) => b.names),
      bindings,
      decl,
      splices: bindings.flatMap((b) => b.splices),
      thisAssignments: bindings.flatMap((b) => b.thisAssignments)
    };
  }), LexicalDeclaration$1 = (0, import_lib2.$TS)((0, import_lib2.$S)(Loc, (0, import_lib2.$C)(BindingPattern, BindingIdentifier), (0, import_lib2.$E)(TypeSuffix), __, (0, import_lib2.$C)(ConstAssignment, LetAssignment), MaybeNestedPostfixedExpression), function($skip, $loc, $0, $1, $2, $3, $4, $5, $6) {
    var loc = $1, assign = $5;
    return processAssignmentDeclaration(
      { $loc: loc, token: assign.decl },
      ...$0.slice(1)
    );
  }), LexicalDeclaration$$ = [LexicalDeclaration$0, LexicalDeclaration$1];
  function LexicalDeclaration(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "LexicalDeclaration", LexicalDeclaration$$);
  }
  var ConstAssignment$0 = (0, import_lib2.$TV)((0, import_lib2.$C)((0, import_lib2.$EXPECT)($L136, 'ConstAssignment ":="'), (0, import_lib2.$EXPECT)($L137, 'ConstAssignment "\u2254"')), function($skip, $loc, $0, $1) {
    return { $loc, token: "=", decl: "const " };
  });
  function ConstAssignment(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "ConstAssignment", ConstAssignment$0);
  }
  var LetAssignment$0 = (0, import_lib2.$TV)((0, import_lib2.$EXPECT)($L138, 'LetAssignment ".="'), function($skip, $loc, $0, $1) {
    return { $loc, token: "=", decl: "let " };
  });
  function LetAssignment(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "LetAssignment", LetAssignment$0);
  }
  var TypeAssignment$0 = (0, import_lib2.$TV)((0, import_lib2.$EXPECT)($L139, 'TypeAssignment "::="'), function($skip, $loc, $0, $1) {
    return { $loc, token: "=" };
  });
  function TypeAssignment(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "TypeAssignment", TypeAssignment$0);
  }
  var LexicalBinding$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(BindingPattern, (0, import_lib2.$E)(TypeSuffix), Initializer), function($skip, $loc, $0, $1, $2, $3) {
    var pattern = $1, typeSuffix = $2, initializer = $3;
    let [splices, thisAssignments] = gatherBindingCode(pattern);
    return typeSuffix ??= pattern.typeSuffix, {
      type: "Binding",
      children: [pattern, typeSuffix, initializer],
      names: pattern.names,
      pattern,
      typeSuffix,
      initializer,
      splices: splices.map((s) => [",", s]),
      thisAssignments: thisAssignments.map((s) => ["", s, ";"])
    };
  }), LexicalBinding$1 = (0, import_lib2.$TS)((0, import_lib2.$S)(BindingIdentifier, (0, import_lib2.$E)(TypeSuffix), (0, import_lib2.$E)(Initializer)), function($skip, $loc, $0, $1, $2, $3) {
    var pattern = $1, typeSuffix = $2, initializer = $3;
    return {
      type: "Binding",
      children: $0,
      names: pattern.names,
      pattern,
      typeSuffix,
      initializer,
      splices: [],
      thisAssignments: []
    };
  }), LexicalBinding$$ = [LexicalBinding$0, LexicalBinding$1];
  function LexicalBinding(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "LexicalBinding", LexicalBinding$$);
  }
  var Initializer$0 = (0, import_lib2.$T)((0, import_lib2.$S)(__, Equals, MaybeNestedExpression), function(value) {
    var expression = value[2];
    return { type: "Initializer", expression, children: value };
  });
  function Initializer(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "Initializer", Initializer$0);
  }
  var VariableStatement$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(Var, __, VariableDeclarationList), function($skip, $loc, $0, $1, $2, $3) {
    return {
      ...$3,
      names: $3.names,
      children: [$1, ...$2, ...$3.children],
      decl: "var"
    };
  });
  function VariableStatement(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "VariableStatement", VariableStatement$0);
  }
  var VariableDeclarationList$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(LexicalBinding, (0, import_lib2.$Q)((0, import_lib2.$S)(__, Comma, __, LexicalBinding))), function($skip, $loc, $0, $1, $2) {
    var binding = $1, tail = $2;
    let bindings = [binding].concat(tail.map(([, , , b]) => b));
    return {
      type: "Declaration",
      children: [binding, ...tail],
      bindings,
      names: bindings.flatMap((b) => b.names)
    };
  });
  function VariableDeclarationList(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "VariableDeclarationList", VariableDeclarationList$0);
  }
  var NumericLiteral$0 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$EXPECT)($R35, "NumericLiteral /(?=[0-9.])/"), NumericLiteralKind), function($skip, $loc, $0, $1, $2) {
    var token = $2;
    return { type: "NumericLiteral", $loc, token };
  });
  function NumericLiteral(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "NumericLiteral", NumericLiteral$0);
  }
  var NumericLiteralKind$0 = DecimalBigIntegerLiteral, NumericLiteralKind$1 = BinaryIntegerLiteral, NumericLiteralKind$2 = OctalIntegerLiteral, NumericLiteralKind$3 = HexIntegerLiteral, NumericLiteralKind$4 = DecimalLiteral, NumericLiteralKind$$ = [NumericLiteralKind$0, NumericLiteralKind$1, NumericLiteralKind$2, NumericLiteralKind$3, NumericLiteralKind$4];
  function NumericLiteralKind(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "NumericLiteralKind", NumericLiteralKind$$);
  }
  var DecimalBigIntegerLiteral$0 = (0, import_lib2.$R$0)((0, import_lib2.$EXPECT)($R36, "DecimalBigIntegerLiteral /(?:0|[1-9](?:_[0-9]|[0-9])*)n/"));
  function DecimalBigIntegerLiteral(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "DecimalBigIntegerLiteral", DecimalBigIntegerLiteral$0);
  }
  var DecimalLiteral$0 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$TEXT)((0, import_lib2.$EXPECT)($R37, "DecimalLiteral /(?:0|[1-9](?:_[0-9]|[0-9])*)(?=\\.(?:\\p{ID_Start}|[_$]))/")), (0, import_lib2.$N)((0, import_lib2.$S)((0, import_lib2.$EXPECT)($L7, 'DecimalLiteral "."'), ExponentPart))), function($skip, $loc, $0, $1, $2) {
    return $1 + ".";
  }), DecimalLiteral$1 = (0, import_lib2.$TEXT)((0, import_lib2.$S)((0, import_lib2.$EXPECT)($R38, "DecimalLiteral /(?:0|[1-9](?:_[0-9]|[0-9])*)(?:\\.(?:[0-9](?:_[0-9]|[0-9])*))?/"), (0, import_lib2.$E)(ExponentPart))), DecimalLiteral$2 = (0, import_lib2.$TEXT)((0, import_lib2.$S)((0, import_lib2.$EXPECT)($R39, "DecimalLiteral /(?:\\.[0-9](?:_[0-9]|[0-9])*)/"), (0, import_lib2.$E)(ExponentPart))), DecimalLiteral$$ = [DecimalLiteral$0, DecimalLiteral$1, DecimalLiteral$2];
  function DecimalLiteral(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "DecimalLiteral", DecimalLiteral$$);
  }
  var ExponentPart$0 = (0, import_lib2.$R$0)((0, import_lib2.$EXPECT)($R40, "ExponentPart /(?:[eE][+-]?[0-9]+(?:_[0-9]|[0-9])*)/"));
  function ExponentPart(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "ExponentPart", ExponentPart$0);
  }
  var BinaryIntegerLiteral$0 = (0, import_lib2.$R$0)((0, import_lib2.$EXPECT)($R41, "BinaryIntegerLiteral /0[bB][01](?:[01]|_[01])*n?/"));
  function BinaryIntegerLiteral(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "BinaryIntegerLiteral", BinaryIntegerLiteral$0);
  }
  var OctalIntegerLiteral$0 = (0, import_lib2.$R$0)((0, import_lib2.$EXPECT)($R42, "OctalIntegerLiteral /0[oO][0-7](?:[0-7]|_[0-7])*n?/"));
  function OctalIntegerLiteral(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "OctalIntegerLiteral", OctalIntegerLiteral$0);
  }
  var HexIntegerLiteral$0 = (0, import_lib2.$R$0)((0, import_lib2.$EXPECT)($R43, "HexIntegerLiteral /0[xX][0-9a-fA-F](?:[0-9a-fA-F]|_[0-9a-fA-F])*n?/"));
  function HexIntegerLiteral(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "HexIntegerLiteral", HexIntegerLiteral$0);
  }
  var IntegerLiteral$0 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$EXPECT)($R44, "IntegerLiteral /(?=[0-9])/"), IntegerLiteralKind), function($skip, $loc, $0, $1, $2) {
    var token = $2;
    return { $loc, token };
  });
  function IntegerLiteral(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "IntegerLiteral", IntegerLiteral$0);
  }
  var IntegerLiteralKind$0 = DecimalBigIntegerLiteral, IntegerLiteralKind$1 = BinaryIntegerLiteral, IntegerLiteralKind$2 = OctalIntegerLiteral, IntegerLiteralKind$3 = HexIntegerLiteral, IntegerLiteralKind$4 = DecimalIntegerLiteral, IntegerLiteralKind$$ = [IntegerLiteralKind$0, IntegerLiteralKind$1, IntegerLiteralKind$2, IntegerLiteralKind$3, IntegerLiteralKind$4];
  function IntegerLiteralKind(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "IntegerLiteralKind", IntegerLiteralKind$$);
  }
  var DecimalIntegerLiteral$0 = (0, import_lib2.$R$0)((0, import_lib2.$EXPECT)($R45, "DecimalIntegerLiteral /(?:0|[1-9](?:_[0-9]|[0-9])*)/"));
  function DecimalIntegerLiteral(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "DecimalIntegerLiteral", DecimalIntegerLiteral$0);
  }
  var StringLiteral$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(DoubleQuote, DoubleStringCharacters, DoubleQuote), function($skip, $loc, $0, $1, $2, $3) {
    var str = $2;
    return {
      type: "StringLiteral",
      token: `"${modifyString(str.token)}"`,
      $loc
    };
  }), StringLiteral$1 = (0, import_lib2.$TS)((0, import_lib2.$S)(SingleQuote, SingleStringCharacters, SingleQuote), function($skip, $loc, $0, $1, $2, $3) {
    var str = $2;
    return {
      type: "StringLiteral",
      token: `'${modifyString(str.token)}'`,
      $loc
    };
  }), StringLiteral$$ = [StringLiteral$0, StringLiteral$1];
  function StringLiteral(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "StringLiteral", StringLiteral$$);
  }
  var DoubleStringCharacters$0 = (0, import_lib2.$TR)((0, import_lib2.$EXPECT)($R46, 'DoubleStringCharacters /(?:\\\\.|[^"])*/'), function($skip, $loc, $0, $1, $2, $3, $4, $5, $6, $7, $8, $9) {
    return { $loc, token: $0 };
  });
  function DoubleStringCharacters(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "DoubleStringCharacters", DoubleStringCharacters$0);
  }
  var SingleStringCharacters$0 = (0, import_lib2.$TR)((0, import_lib2.$EXPECT)($R47, "SingleStringCharacters /(?:\\\\.|[^'])*/"), function($skip, $loc, $0, $1, $2, $3, $4, $5, $6, $7, $8, $9) {
    return { $loc, token: $0 };
  });
  function SingleStringCharacters(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "SingleStringCharacters", SingleStringCharacters$0);
  }
  var TripleDoubleStringContents$0 = (0, import_lib2.$T)((0, import_lib2.$S)(CoffeeInterpolationEnabled, (0, import_lib2.$Q)((0, import_lib2.$C)(CoffeeTripleDoubleStringCharacters, CoffeeStringSubstitution))), function(value) {
    return value[1];
  }), TripleDoubleStringContents$1 = (0, import_lib2.$T)((0, import_lib2.$S)((0, import_lib2.$N)(CoffeeInterpolationEnabled), TripleDoubleStringCharacters), function(value) {
    return [value[1]];
  }), TripleDoubleStringContents$$ = [TripleDoubleStringContents$0, TripleDoubleStringContents$1];
  function TripleDoubleStringContents(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "TripleDoubleStringContents", TripleDoubleStringContents$$);
  }
  var CoffeeTripleDoubleStringCharacters$0 = (0, import_lib2.$TR)((0, import_lib2.$EXPECT)($R48, 'CoffeeTripleDoubleStringCharacters /(?:"(?!"")|#(?!\\{)|\\\\.|[^#"])+/'), function($skip, $loc, $0, $1, $2, $3, $4, $5, $6, $7, $8, $9) {
    return { $loc, token: $0 };
  });
  function CoffeeTripleDoubleStringCharacters(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "CoffeeTripleDoubleStringCharacters", CoffeeTripleDoubleStringCharacters$0);
  }
  var TripleDoubleStringCharacters$0 = (0, import_lib2.$TR)((0, import_lib2.$EXPECT)($R49, 'TripleDoubleStringCharacters /(?:"(?!"")|\\\\.|[^"])+/'), function($skip, $loc, $0, $1, $2, $3, $4, $5, $6, $7, $8, $9) {
    return { $loc, token: $0 };
  });
  function TripleDoubleStringCharacters(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "TripleDoubleStringCharacters", TripleDoubleStringCharacters$0);
  }
  var TripleSingleStringCharacters$0 = (0, import_lib2.$TR)((0, import_lib2.$EXPECT)($R50, "TripleSingleStringCharacters /(?:'(?!'')|\\\\.|[^'])*/"), function($skip, $loc, $0, $1, $2, $3, $4, $5, $6, $7, $8, $9) {
    return { $loc, token: $0 };
  });
  function TripleSingleStringCharacters(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "TripleSingleStringCharacters", TripleSingleStringCharacters$0);
  }
  var CoffeeStringSubstitution$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(CoffeeSubstitutionStart, AllowAll, (0, import_lib2.$E)((0, import_lib2.$S)(PostfixedExpression, __, CloseBrace)), RestoreAll), function($skip, $loc, $0, $1, $2, $3, $4) {
    return $3 ? [$1, ...$3] : $skip;
  });
  function CoffeeStringSubstitution(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "CoffeeStringSubstitution", CoffeeStringSubstitution$0);
  }
  var CoffeeInterpolatedDoubleQuotedString$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(CoffeeInterpolationEnabled, DoubleQuote, (0, import_lib2.$Q)((0, import_lib2.$C)(CoffeeDoubleQuotedStringCharacters, CoffeeStringSubstitution)), DoubleQuote), function($skip, $loc, $0, $1, $2, $3, $4) {
    var s = $2, parts = $3, e = $4;
    return processCoffeeInterpolation(s, parts, e, $loc);
  });
  function CoffeeInterpolatedDoubleQuotedString(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "CoffeeInterpolatedDoubleQuotedString", CoffeeInterpolatedDoubleQuotedString$0);
  }
  var CoffeeDoubleQuotedStringCharacters$0 = (0, import_lib2.$TR)((0, import_lib2.$EXPECT)($R51, 'CoffeeDoubleQuotedStringCharacters /(?:\\\\.|#(?!\\{)|[^"#])+/'), function($skip, $loc, $0, $1, $2, $3, $4, $5, $6, $7, $8, $9) {
    return { $loc, token: $0 };
  });
  function CoffeeDoubleQuotedStringCharacters(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "CoffeeDoubleQuotedStringCharacters", CoffeeDoubleQuotedStringCharacters$0);
  }
  var RegularExpressionLiteral$0 = HeregexLiteral, RegularExpressionLiteral$1 = (0, import_lib2.$TV)((0, import_lib2.$TEXT)((0, import_lib2.$S)((0, import_lib2.$EXPECT)($L77, 'RegularExpressionLiteral "/"'), RegularExpressionBody, (0, import_lib2.$EXPECT)($L77, 'RegularExpressionLiteral "/"'), RegularExpressionFlags)), function($skip, $loc, $0, $1) {
    var raw = $0;
    return {
      type: "RegularExpressionLiteral",
      raw,
      children: [{ $loc, token: raw }]
    };
  }), RegularExpressionLiteral$$ = [RegularExpressionLiteral$0, RegularExpressionLiteral$1];
  function RegularExpressionLiteral(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "RegularExpressionLiteral", RegularExpressionLiteral$$);
  }
  var RegularExpressionClass$0 = (0, import_lib2.$TV)((0, import_lib2.$TEXT)((0, import_lib2.$S)(OpenBracket, RegularExpressionClassCharacters, CloseBracket)), function($skip, $loc, $0, $1) {
    return { $loc, token: $1 };
  });
  function RegularExpressionClass(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "RegularExpressionClass", RegularExpressionClass$0);
  }
  var RegularExpressionClassCharacters$0 = (0, import_lib2.$TR)((0, import_lib2.$EXPECT)($R52, "RegularExpressionClassCharacters /(?:\\\\.|[^\\]])*/"), function($skip, $loc, $0, $1, $2, $3, $4, $5, $6, $7, $8, $9) {
    return { $loc, token: $0 };
  });
  function RegularExpressionClassCharacters(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "RegularExpressionClassCharacters", RegularExpressionClassCharacters$0);
  }
  var HeregexLiteral$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(TripleSlash, HeregexBody, TripleSlash, RegularExpressionFlags), function($skip, $loc, $0, $1, $2, $3, $4) {
    var open = $1, body = $2, close = $3, flags = $4;
    if (body.some((part) => part.type === "Substitution")) {
      let children = [
        { ...open, token: "RegExp(`" },
        // Escape backticks, backslashes, and '$' in the body text
        body.map(
          (e) => e.type === "Substitution" ? e : {
            ...e,
            token: e.token.replace(/`|\\|\$/g, "\\$&")
          }
        ),
        "`"
      ];
      return flags.length && children.push(
        ", ",
        JSON.stringify(flags)
      ), children.push({ ...close, token: ")" }), {
        type: "RegularExpressionLiteral",
        children
      };
    }
    return {
      type: "RegularExpressionLiteral",
      children: $0
    };
  });
  function HeregexLiteral(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "HeregexLiteral", HeregexLiteral$0);
  }
  var HeregexBody$0 = (0, import_lib2.$T)((0, import_lib2.$S)((0, import_lib2.$N)(TripleSlash), (0, import_lib2.$Q)(HeregexPart)), function(value) {
    return value[1];
  });
  function HeregexBody(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "HeregexBody", HeregexBody$0);
  }
  var HeregexPart$0 = RegularExpressionClass, HeregexPart$1 = (0, import_lib2.$T)((0, import_lib2.$S)(CoffeeInterpolationEnabled, CoffeeStringSubstitution), function(value) {
    return { type: "Substitution", children: value[1] };
  }), HeregexPart$2 = (0, import_lib2.$T)((0, import_lib2.$S)(TemplateSubstitution), function(value) {
    return { type: "Substitution", children: value[0] };
  }), HeregexPart$3 = (0, import_lib2.$TR)((0, import_lib2.$EXPECT)($R53, "HeregexPart /(?:\\\\.)/"), function($skip, $loc, $0, $1, $2, $3, $4, $5, $6, $7, $8, $9) {
    let token = $0;
    switch ($0[1]) {
      case `
`:
        token = "\\n";
        break;
      case "\r":
        token = "\\r";
        break;
      case " ":
        token = " ";
        break;
    }
    return { $loc, token };
  }), HeregexPart$4 = (0, import_lib2.$TS)((0, import_lib2.$S)(HeregexComment), function($skip, $loc, $0, $1) {
    return { $loc, token: "" };
  }), HeregexPart$5 = (0, import_lib2.$TR)((0, import_lib2.$EXPECT)($R54, "HeregexPart /[\\s]+/"), function($skip, $loc, $0, $1, $2, $3, $4, $5, $6, $7, $8, $9) {
    return { $loc, token: "" };
  }), HeregexPart$6 = (0, import_lib2.$TR)((0, import_lib2.$EXPECT)($R55, "HeregexPart /\\/(?!\\/\\/)/"), function($skip, $loc, $0, $1, $2, $3, $4, $5, $6, $7, $8, $9) {
    return { $loc, token: "\\/" };
  }), HeregexPart$7 = (0, import_lib2.$TR)((0, import_lib2.$EXPECT)($R56, "HeregexPart /[^[\\/\\s#$\\\\]+|[#$]/"), function($skip, $loc, $0, $1, $2, $3, $4, $5, $6, $7, $8, $9) {
    return { $loc, token: $0 };
  }), HeregexPart$$ = [HeregexPart$0, HeregexPart$1, HeregexPart$2, HeregexPart$3, HeregexPart$4, HeregexPart$5, HeregexPart$6, HeregexPart$7];
  function HeregexPart(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "HeregexPart", HeregexPart$$);
  }
  var HeregexComment$0 = (0, import_lib2.$S)((0, import_lib2.$N)(CoffeeDivEnabled), JSSingleLineComment), HeregexComment$1 = (0, import_lib2.$T)((0, import_lib2.$S)(CoffeeCommentEnabled, CoffeeSingleLineComment), function(value) {
    return value[1];
  }), HeregexComment$$ = [HeregexComment$0, HeregexComment$1];
  function HeregexComment(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "HeregexComment", HeregexComment$$);
  }
  var RegularExpressionBody$0 = (0, import_lib2.$S)((0, import_lib2.$N)((0, import_lib2.$R$0)((0, import_lib2.$EXPECT)($R57, "RegularExpressionBody /[*\\/\\r\\n]/"))), (0, import_lib2.$Q)(RegExpPart));
  function RegularExpressionBody(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "RegularExpressionBody", RegularExpressionBody$0);
  }
  var RegExpPart$0 = RegularExpressionClass, RegExpPart$1 = RegExpCharacter, RegExpPart$$ = [RegExpPart$0, RegExpPart$1];
  function RegExpPart(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "RegExpPart", RegExpPart$$);
  }
  var RegExpCharacter$0 = (0, import_lib2.$R$0)((0, import_lib2.$EXPECT)($R58, "RegExpCharacter /(?:\\\\.|[^[\\/\\r\\n])+/"));
  function RegExpCharacter(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "RegExpCharacter", RegExpCharacter$0);
  }
  var RegularExpressionFlags$0 = (0, import_lib2.$R$0)((0, import_lib2.$EXPECT)($R59, "RegularExpressionFlags /(?:\\p{ID_Continue}|[\\u200C\\u200D$])*/"));
  function RegularExpressionFlags(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "RegularExpressionFlags", RegularExpressionFlags$0);
  }
  var TemplateLiteral$0 = (0, import_lib2.$T)((0, import_lib2.$S)((0, import_lib2.$EXPECT)($R60, "TemplateLiteral /(?=[`'\"])/"), _TemplateLiteral), function(value) {
    return value[1];
  });
  function TemplateLiteral(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "TemplateLiteral", TemplateLiteral$0);
  }
  var _TemplateLiteral$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(TripleTick, (0, import_lib2.$Q)((0, import_lib2.$C)(TemplateBlockCharacters, TemplateSubstitution)), TripleTick), function($skip, $loc, $0, $1, $2, $3) {
    return dedentBlockSubstitutions($0, config.tab);
  }), _TemplateLiteral$1 = (0, import_lib2.$TS)((0, import_lib2.$S)(Backtick, (0, import_lib2.$Q)((0, import_lib2.$C)(TemplateCharacters, TemplateSubstitution)), Backtick), function($skip, $loc, $0, $1, $2, $3) {
    return {
      type: "TemplateLiteral",
      children: $0
    };
  }), _TemplateLiteral$2 = (0, import_lib2.$TS)((0, import_lib2.$S)(TripleDoubleQuote, TripleDoubleStringContents, TripleDoubleQuote), function($skip, $loc, $0, $1, $2, $3) {
    return dedentBlockSubstitutions($0, config.tab);
  }), _TemplateLiteral$3 = (0, import_lib2.$TS)((0, import_lib2.$S)(TripleSingleQuote, TripleSingleStringCharacters, TripleSingleQuote), function($skip, $loc, $0, $1, $2, $3) {
    var s = $1, str = $2, e = $3;
    return {
      type: "TemplateLiteral",
      children: [s, dedentBlockString(str, config.tab), e]
    };
  }), _TemplateLiteral$4 = CoffeeInterpolatedDoubleQuotedString, _TemplateLiteral$$ = [_TemplateLiteral$0, _TemplateLiteral$1, _TemplateLiteral$2, _TemplateLiteral$3, _TemplateLiteral$4];
  function _TemplateLiteral(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "_TemplateLiteral", _TemplateLiteral$$);
  }
  var TemplateSubstitution$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(SubstitutionStart, AllowAll, (0, import_lib2.$E)((0, import_lib2.$S)(PostfixedExpression, __, CloseBrace)), RestoreAll), function($skip, $loc, $0, $1, $2, $3, $4) {
    return $3 ? [$1, ...$3] : $skip;
  });
  function TemplateSubstitution(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "TemplateSubstitution", TemplateSubstitution$0);
  }
  var TemplateCharacters$0 = (0, import_lib2.$TR)((0, import_lib2.$EXPECT)($R61, "TemplateCharacters /(?:\\$(?!\\{)|\\\\.|[^$`])+/"), function($skip, $loc, $0, $1, $2, $3, $4, $5, $6, $7, $8, $9) {
    return { $loc, token: $0 };
  });
  function TemplateCharacters(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "TemplateCharacters", TemplateCharacters$0);
  }
  var TemplateBlockCharacters$0 = (0, import_lib2.$TR)((0, import_lib2.$EXPECT)($R62, "TemplateBlockCharacters /(?:\\$(?!\\{)|`(?!``)|\\\\.|[^$`])+/"), function($skip, $loc, $0, $1, $2, $3, $4, $5, $6, $7, $8, $9) {
    return { $loc, token: $0 };
  });
  function TemplateBlockCharacters(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "TemplateBlockCharacters", TemplateBlockCharacters$0);
  }
  var ReservedWord$0 = (0, import_lib2.$S)((0, import_lib2.$R$0)((0, import_lib2.$EXPECT)($R63, "ReservedWord /(?:on|off|yes|no)(?!\\p{ID_Continue})/")), CoffeeBooleansEnabled), ReservedWord$1 = (0, import_lib2.$S)((0, import_lib2.$R$0)((0, import_lib2.$EXPECT)($R64, "ReservedWord /(?:isnt)(?!\\p{ID_Continue})/")), CoffeeIsntEnabled), ReservedWord$2 = (0, import_lib2.$S)((0, import_lib2.$R$0)((0, import_lib2.$EXPECT)($R65, "ReservedWord /(?:by)(?!\\p{ID_Continue})/")), CoffeeForLoopsEnabled), ReservedWord$3 = (0, import_lib2.$S)((0, import_lib2.$R$0)((0, import_lib2.$EXPECT)($R66, "ReservedWord /(?:of)(?!\\p{ID_Continue})/")), CoffeeOfEnabled), ReservedWord$4 = (0, import_lib2.$R$0)((0, import_lib2.$EXPECT)($R67, "ReservedWord /(?:and|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|false|finally|for|function|if|import|in|instanceof|interface|is|let|loop|new|not|null|or|private|protected|public|return|static|super|switch|this|throw|true|try|typeof|unless|until|var|void|while|with|yield)(?!\\p{ID_Continue})/")), ReservedWord$$ = [ReservedWord$0, ReservedWord$1, ReservedWord$2, ReservedWord$3, ReservedWord$4];
  function ReservedWord(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "ReservedWord", ReservedWord$$);
  }
  var Comment$0 = (0, import_lib2.$T)((0, import_lib2.$S)((0, import_lib2.$EXPECT)($R68, "Comment /(?=\\/|#)/"), _Comment), function(value) {
    return value[1];
  });
  function Comment(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "Comment", Comment$0);
  }
  var _Comment$0 = MultiLineComment, _Comment$1 = SingleLineComment, _Comment$$ = [_Comment$0, _Comment$1];
  function _Comment(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "_Comment", _Comment$$);
  }
  var SingleLineComment$0 = JSSingleLineComment, SingleLineComment$1 = (0, import_lib2.$S)(CoffeeCommentEnabled, CoffeeSingleLineComment), SingleLineComment$$ = [SingleLineComment$0, SingleLineComment$1];
  function SingleLineComment(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "SingleLineComment", SingleLineComment$$);
  }
  var JSSingleLineComment$0 = (0, import_lib2.$TR)((0, import_lib2.$EXPECT)($R69, "JSSingleLineComment /\\/\\/(?!\\/)[^\\r\\n]*/"), function($skip, $loc, $0, $1, $2, $3, $4, $5, $6, $7, $8, $9) {
    return { type: "Comment", $loc, token: $0 };
  });
  function JSSingleLineComment(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "JSSingleLineComment", JSSingleLineComment$0);
  }
  var MultiLineComment$0 = JSMultiLineComment, MultiLineComment$1 = CoffeeMultiLineComment, MultiLineComment$$ = [MultiLineComment$0, MultiLineComment$1];
  function MultiLineComment(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "MultiLineComment", MultiLineComment$$);
  }
  var JSMultiLineComment$0 = (0, import_lib2.$TV)((0, import_lib2.$TEXT)((0, import_lib2.$S)((0, import_lib2.$EXPECT)($L140, 'JSMultiLineComment "/*"'), (0, import_lib2.$Q)((0, import_lib2.$S)((0, import_lib2.$N)((0, import_lib2.$EXPECT)($L141, 'JSMultiLineComment "*/"')), (0, import_lib2.$EXPECT)($R70, "JSMultiLineComment /./"))), (0, import_lib2.$EXPECT)($L141, 'JSMultiLineComment "*/"'))), function($skip, $loc, $0, $1) {
    return { type: "Comment", $loc, token: $1 };
  });
  function JSMultiLineComment(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "JSMultiLineComment", JSMultiLineComment$0);
  }
  var CoffeeSingleLineComment$0 = (0, import_lib2.$TR)((0, import_lib2.$EXPECT)($R71, "CoffeeSingleLineComment /#(?!##(?!#))([^\\r\\n]*)/"), function($skip, $loc, $0, $1, $2, $3, $4, $5, $6, $7, $8, $9) {
    return { type: "Comment", $loc, token: `//${$1}` };
  });
  function CoffeeSingleLineComment(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "CoffeeSingleLineComment", CoffeeSingleLineComment$0);
  }
  var CoffeeMultiLineComment$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(CoffeeHereCommentStart, (0, import_lib2.$TEXT)((0, import_lib2.$EXPECT)($R72, "CoffeeMultiLineComment /[^]*?###/"))), function($skip, $loc, $0, $1, $2) {
    return $2 = $2.slice(0, $2.length - 3).replace(/\*\//g, "* /"), { type: "Comment", $loc, token: `/*${$2}*/` };
  });
  function CoffeeMultiLineComment(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "CoffeeMultiLineComment", CoffeeMultiLineComment$0);
  }
  var CoffeeHereCommentStart$0 = (0, import_lib2.$R$0)((0, import_lib2.$EXPECT)($R73, "CoffeeHereCommentStart /###(?!#)/"));
  function CoffeeHereCommentStart(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "CoffeeHereCommentStart", CoffeeHereCommentStart$0);
  }
  var InlineComment$0 = (0, import_lib2.$TR)((0, import_lib2.$EXPECT)($R74, "InlineComment /\\/\\*(?:(?!\\*\\/)[^\\r\\n])*\\*\\//"), function($skip, $loc, $0, $1, $2, $3, $4, $5, $6, $7, $8, $9) {
    return { $loc, token: $0 };
  });
  function InlineComment(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "InlineComment", InlineComment$0);
  }
  var RestOfLine$0 = (0, import_lib2.$S)((0, import_lib2.$Q)((0, import_lib2.$C)(NonNewlineWhitespace, Comment)), EOL);
  function RestOfLine(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "RestOfLine", RestOfLine$0);
  }
  var TrailingComment$0 = (0, import_lib2.$S)((0, import_lib2.$E)(_), (0, import_lib2.$E)(SingleLineComment));
  function TrailingComment(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "TrailingComment", TrailingComment$0);
  }
  var _$0 = (0, import_lib2.$T)((0, import_lib2.$S)((0, import_lib2.$EXPECT)($R75, "_ /(?=[ \\t\\/\\\\])/"), (0, import_lib2.$P)((0, import_lib2.$C)(NonNewlineWhitespace, InlineComment))), function(value) {
    return value[1];
  });
  function _(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "_", _$0);
  }
  var NonNewlineWhitespace$0 = (0, import_lib2.$TR)((0, import_lib2.$EXPECT)($R23, "NonNewlineWhitespace /[ \\t]+/"), function($skip, $loc, $0, $1, $2, $3, $4, $5, $6, $7, $8, $9) {
    return { $loc, token: $0 };
  }), NonNewlineWhitespace$1 = (0, import_lib2.$T)((0, import_lib2.$S)((0, import_lib2.$EXPECT)($L142, 'NonNewlineWhitespace "\\\\\\\\"'), CoffeeLineContinuationEnabled, EOL), function(value) {
    return " ";
  }), NonNewlineWhitespace$$ = [NonNewlineWhitespace$0, NonNewlineWhitespace$1];
  function NonNewlineWhitespace(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "NonNewlineWhitespace", NonNewlineWhitespace$$);
  }
  var Trimmed_$0 = (0, import_lib2.$TV)(_, function($skip, $loc, $0, $1) {
    var ws = $0;
    return trimFirstSpace(ws);
  });
  function Trimmed_(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "Trimmed_", Trimmed_$0);
  }
  var __$0 = (0, import_lib2.$T)((0, import_lib2.$S)((0, import_lib2.$EXPECT)($R76, "__ /(?=\\s|\\/|#)/"), (0, import_lib2.$Q)((0, import_lib2.$C)(Whitespace, Comment))), function(value) {
    return value[1];
  }), __$1 = (0, import_lib2.$EXPECT)($L0, '__ ""'), __$$ = [__$0, __$1];
  function __(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "__", __$$);
  }
  var Whitespace$0 = (0, import_lib2.$TR)((0, import_lib2.$EXPECT)($R54, "Whitespace /[\\s]+/"), function($skip, $loc, $0, $1, $2, $3, $4, $5, $6, $7, $8, $9) {
    return { $loc, token: $0 };
  });
  function Whitespace(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "Whitespace", Whitespace$0);
  }
  var ExpressionDelimiter$0 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$E)(_), Semicolon, InsertComma, TrailingComment), function($skip, $loc, $0, $1, $2, $3, $4) {
    return [$1, $3, $4];
  }), ExpressionDelimiter$1 = (0, import_lib2.$T)((0, import_lib2.$S)((0, import_lib2.$Y)(EOS), InsertComma), function(value) {
    return value[1];
  }), ExpressionDelimiter$$ = [ExpressionDelimiter$0, ExpressionDelimiter$1];
  function ExpressionDelimiter(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "ExpressionDelimiter", ExpressionDelimiter$$);
  }
  var SimpleStatementDelimiter$0 = (0, import_lib2.$Y)(EOS), SimpleStatementDelimiter$1 = SemicolonDelimiter, SimpleStatementDelimiter$$ = [SimpleStatementDelimiter$0, SimpleStatementDelimiter$1];
  function SimpleStatementDelimiter(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "SimpleStatementDelimiter", SimpleStatementDelimiter$$);
  }
  var StatementDelimiter$0 = (0, import_lib2.$Y)(EOS), StatementDelimiter$1 = SemicolonDelimiter, StatementDelimiter$2 = ClosingDelimiter, StatementDelimiter$$ = [StatementDelimiter$0, StatementDelimiter$1, StatementDelimiter$2];
  function StatementDelimiter(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "StatementDelimiter", StatementDelimiter$$);
  }
  var ClosingDelimiter$0 = (0, import_lib2.$Y)((0, import_lib2.$S)(__, (0, import_lib2.$C)((0, import_lib2.$EXPECT)($L37, 'ClosingDelimiter "}"'), (0, import_lib2.$EXPECT)($L143, 'ClosingDelimiter ")"'), (0, import_lib2.$EXPECT)($L46, 'ClosingDelimiter "]"'))));
  function ClosingDelimiter(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "ClosingDelimiter", ClosingDelimiter$0);
  }
  var SemicolonDelimiter$0 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$E)(_), Semicolon, TrailingComment), function($skip, $loc, $0, $1, $2, $3) {
    return {
      type: "SemicolonDelimiter",
      children: $0
    };
  });
  function SemicolonDelimiter(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "SemicolonDelimiter", SemicolonDelimiter$0);
  }
  var NonIdContinue$0 = (0, import_lib2.$R$0)((0, import_lib2.$EXPECT)($R77, "NonIdContinue /(?!\\p{ID_Continue})/"));
  function NonIdContinue(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "NonIdContinue", NonIdContinue$0);
  }
  var Loc$0 = (0, import_lib2.$TV)((0, import_lib2.$EXPECT)($L0, 'Loc ""'), function($skip, $loc, $0, $1) {
    return { $loc, token: "" };
  });
  function Loc(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "Loc", Loc$0);
  }
  var Abstract$0 = (0, import_lib2.$TV)((0, import_lib2.$TEXT)((0, import_lib2.$S)((0, import_lib2.$EXPECT)($L144, 'Abstract "abstract"'), NonIdContinue, (0, import_lib2.$E)((0, import_lib2.$EXPECT)($L17, 'Abstract " "')))), function($skip, $loc, $0, $1) {
    return { $loc, token: $1, ts: !0 };
  });
  function Abstract(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "Abstract", Abstract$0);
  }
  var Ampersand$0 = (0, import_lib2.$TV)((0, import_lib2.$EXPECT)($L117, 'Ampersand "&"'), function($skip, $loc, $0, $1) {
    return { $loc, token: $1 };
  });
  function Ampersand(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "Ampersand", Ampersand$0);
  }
  var As$0 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$EXPECT)($L145, 'As "as"'), NonIdContinue), function($skip, $loc, $0, $1, $2) {
    return { $loc, token: $1 };
  });
  function As(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "As", As$0);
  }
  var At$0 = (0, import_lib2.$TV)((0, import_lib2.$EXPECT)($L146, 'At "@"'), function($skip, $loc, $0, $1) {
    return { $loc, token: $1 };
  });
  function At(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "At", At$0);
  }
  var AtAt$0 = (0, import_lib2.$TV)((0, import_lib2.$EXPECT)($L147, 'AtAt "@@"'), function($skip, $loc, $0, $1) {
    return { $loc, token: "@" };
  });
  function AtAt(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "AtAt", AtAt$0);
  }
  var Async$0 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$EXPECT)($L148, 'Async "async"'), NonIdContinue), function($skip, $loc, $0, $1, $2) {
    return { $loc, token: $1, type: "Async" };
  });
  function Async(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "Async", Async$0);
  }
  var Await$0 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$EXPECT)($L149, 'Await "await"'), NonIdContinue), function($skip, $loc, $0, $1, $2) {
    return { $loc, token: $1, type: "Await" };
  });
  function Await(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "Await", Await$0);
  }
  var Backtick$0 = (0, import_lib2.$TV)((0, import_lib2.$EXPECT)($L150, 'Backtick "`"'), function($skip, $loc, $0, $1) {
    return { $loc, token: $1 };
  });
  function Backtick(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "Backtick", Backtick$0);
  }
  var By$0 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$EXPECT)($L151, 'By "by"'), NonIdContinue), function($skip, $loc, $0, $1, $2) {
    return { $loc, token: $1 };
  });
  function By(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "By", By$0);
  }
  var Caret$0 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$EXPECT)($L21, 'Caret "^"'), (0, import_lib2.$N)((0, import_lib2.$EXPECT)($L21, 'Caret "^"'))), function($skip, $loc, $0, $1, $2) {
    return { $loc, token: $1 };
  });
  function Caret(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "Caret", Caret$0);
  }
  var Case$0 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$EXPECT)($L152, 'Case "case"'), NonIdContinue), function($skip, $loc, $0, $1, $2) {
    return { $loc, token: $1 };
  });
  function Case(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "Case", Case$0);
  }
  var Catch$0 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$EXPECT)($L153, 'Catch "catch"'), NonIdContinue), function($skip, $loc, $0, $1, $2) {
    return { $loc, token: $1 };
  });
  function Catch(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "Catch", Catch$0);
  }
  var Class$0 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$EXPECT)($L154, 'Class "class"'), NonIdContinue), function($skip, $loc, $0, $1, $2) {
    return { $loc, token: $1 };
  });
  function Class(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "Class", Class$0);
  }
  var CloseAngleBracket$0 = (0, import_lib2.$TV)((0, import_lib2.$EXPECT)($L45, 'CloseAngleBracket ">"'), function($skip, $loc, $0, $1) {
    return { $loc, token: $1 };
  });
  function CloseAngleBracket(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "CloseAngleBracket", CloseAngleBracket$0);
  }
  var CloseBrace$0 = (0, import_lib2.$TV)((0, import_lib2.$EXPECT)($L37, 'CloseBrace "}"'), function($skip, $loc, $0, $1) {
    return { $loc, token: $1 };
  });
  function CloseBrace(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "CloseBrace", CloseBrace$0);
  }
  var CloseBracket$0 = (0, import_lib2.$TV)((0, import_lib2.$EXPECT)($L46, 'CloseBracket "]"'), function($skip, $loc, $0, $1) {
    return { $loc, token: $1 };
  });
  function CloseBracket(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "CloseBracket", CloseBracket$0);
  }
  var CloseParen$0 = (0, import_lib2.$TV)((0, import_lib2.$EXPECT)($L143, 'CloseParen ")"'), function($skip, $loc, $0, $1) {
    return { $loc, token: $1 };
  });
  function CloseParen(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "CloseParen", CloseParen$0);
  }
  var CoffeeSubstitutionStart$0 = (0, import_lib2.$TV)((0, import_lib2.$EXPECT)($L155, 'CoffeeSubstitutionStart "#{"'), function($skip, $loc, $0, $1) {
    return { $loc, token: "${" };
  });
  function CoffeeSubstitutionStart(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "CoffeeSubstitutionStart", CoffeeSubstitutionStart$0);
  }
  var Colon$0 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$EXPECT)($L16, 'Colon ":"'), (0, import_lib2.$N)((0, import_lib2.$EXPECT)($R78, "Colon /[=:]/"))), function($skip, $loc, $0, $1, $2) {
    return { $loc, token: $1 };
  });
  function Colon(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "Colon", Colon$0);
  }
  var Comma$0 = (0, import_lib2.$TV)((0, import_lib2.$EXPECT)($L26, 'Comma ","'), function($skip, $loc, $0, $1) {
    return { $loc, token: $1 };
  });
  function Comma(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "Comma", Comma$0);
  }
  var Comptime$0 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$EXPECT)($L156, 'Comptime "comptime"'), NonIdContinue, (0, import_lib2.$N)((0, import_lib2.$EXPECT)($L16, 'Comptime ":"'))), function($skip, $loc, $0, $1, $2, $3) {
    return { $loc, token: $1 };
  });
  function Comptime(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "Comptime", Comptime$0);
  }
  var ConstructorShorthand$0 = (0, import_lib2.$TV)((0, import_lib2.$EXPECT)($L146, 'ConstructorShorthand "@"'), function($skip, $loc, $0, $1) {
    return { $loc, token: "constructor" };
  });
  function ConstructorShorthand(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "ConstructorShorthand", ConstructorShorthand$0);
  }
  var Declare$0 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$EXPECT)($L157, 'Declare "declare"'), NonIdContinue), function($skip, $loc, $0, $1, $2) {
    return { $loc, token: $1 };
  });
  function Declare(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "Declare", Declare$0);
  }
  var Default$0 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$EXPECT)($L158, 'Default "default"'), NonIdContinue), function($skip, $loc, $0, $1, $2) {
    return { $loc, token: $1 };
  });
  function Default(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "Default", Default$0);
  }
  var Delete$0 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$EXPECT)($L159, 'Delete "delete"'), NonIdContinue), function($skip, $loc, $0, $1, $2) {
    return { $loc, token: $1 };
  });
  function Delete(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "Delete", Delete$0);
  }
  var Do$0 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$EXPECT)($L160, 'Do "do"'), NonIdContinue), function($skip, $loc, $0, $1, $2) {
    return { $loc, token: $1 };
  });
  function Do(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "Do", Do$0);
  }
  var Dot$0 = (0, import_lib2.$TV)((0, import_lib2.$EXPECT)($L7, 'Dot "."'), function($skip, $loc, $0, $1) {
    return { $loc, token: $1 };
  }), Dot$1 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$EXPECT)($R79, "Dot /['\u2019]s/"), Trimmed_), function($skip, $loc, $0, $1, $2) {
    var ws = $2;
    return [
      { $loc, token: "." },
      ws
    ];
  }), Dot$$ = [Dot$0, Dot$1];
  function Dot(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "Dot", Dot$$);
  }
  var DotDot$0 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$EXPECT)($L161, 'DotDot ".."'), (0, import_lib2.$N)((0, import_lib2.$EXPECT)($L7, 'DotDot "."'))), function($skip, $loc, $0, $1, $2) {
    return { $loc, token: $1 };
  }), DotDot$1 = (0, import_lib2.$TV)((0, import_lib2.$EXPECT)($L162, 'DotDot "\u2025"'), function($skip, $loc, $0, $1) {
    return { $loc, token: ".." };
  }), DotDot$$ = [DotDot$0, DotDot$1];
  function DotDot(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "DotDot", DotDot$$);
  }
  var DotDotDot$0 = (0, import_lib2.$TV)((0, import_lib2.$EXPECT)($L163, 'DotDotDot "..."'), function($skip, $loc, $0, $1) {
    return { $loc, token: $1 };
  }), DotDotDot$1 = (0, import_lib2.$TV)((0, import_lib2.$EXPECT)($L164, 'DotDotDot "\u2026"'), function($skip, $loc, $0, $1) {
    return { $loc, token: "..." };
  }), DotDotDot$$ = [DotDotDot$0, DotDotDot$1];
  function DotDotDot(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "DotDotDot", DotDotDot$$);
  }
  var InsertDotDotDot$0 = (0, import_lib2.$TV)((0, import_lib2.$EXPECT)($L0, 'InsertDotDotDot ""'), function($skip, $loc, $0, $1) {
    return { $loc, token: "..." };
  });
  function InsertDotDotDot(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "InsertDotDotDot", InsertDotDotDot$0);
  }
  var DoubleColon$0 = (0, import_lib2.$TV)((0, import_lib2.$EXPECT)($L165, 'DoubleColon "::"'), function($skip, $loc, $0, $1) {
    return { $loc, token: $1 };
  });
  function DoubleColon(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "DoubleColon", DoubleColon$0);
  }
  var DoubleColonAsColon$0 = (0, import_lib2.$TV)((0, import_lib2.$EXPECT)($L165, 'DoubleColonAsColon "::"'), function($skip, $loc, $0, $1) {
    return { $loc, token: ":" };
  });
  function DoubleColonAsColon(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "DoubleColonAsColon", DoubleColonAsColon$0);
  }
  var DoubleQuote$0 = (0, import_lib2.$TV)((0, import_lib2.$EXPECT)($L166, 'DoubleQuote "\\\\\\""'), function($skip, $loc, $0, $1) {
    return { $loc, token: $1 };
  });
  function DoubleQuote(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "DoubleQuote", DoubleQuote$0);
  }
  var Each$0 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$EXPECT)($L167, 'Each "each"'), NonIdContinue), function($skip, $loc, $0, $1, $2) {
    return { $loc, token: $1 };
  });
  function Each(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "Each", Each$0);
  }
  var Else$0 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$EXPECT)($L168, 'Else "else"'), NonIdContinue), function($skip, $loc, $0, $1, $2) {
    return { $loc, token: $1 };
  });
  function Else(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "Else", Else$0);
  }
  var Equals$0 = (0, import_lib2.$TV)((0, import_lib2.$EXPECT)($L3, 'Equals "="'), function($skip, $loc, $0, $1) {
    return { $loc, token: $1 };
  });
  function Equals(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "Equals", Equals$0);
  }
  var ExclamationPoint$0 = (0, import_lib2.$TV)((0, import_lib2.$EXPECT)($L169, 'ExclamationPoint "!"'), function($skip, $loc, $0, $1) {
    return { $loc, token: $1 };
  });
  function ExclamationPoint(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "ExclamationPoint", ExclamationPoint$0);
  }
  var Export$0 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$EXPECT)($L170, 'Export "export"'), NonIdContinue), function($skip, $loc, $0, $1, $2) {
    return { $loc, token: $1 };
  });
  function Export(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "Export", Export$0);
  }
  var Extends$0 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$EXPECT)($L171, 'Extends "extends"'), NonIdContinue), function($skip, $loc, $0, $1, $2) {
    return { $loc, token: $1 };
  });
  function Extends(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "Extends", Extends$0);
  }
  var Finally$0 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$EXPECT)($L172, 'Finally "finally"'), NonIdContinue), function($skip, $loc, $0, $1, $2) {
    return { $loc, token: $1 };
  });
  function Finally(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "Finally", Finally$0);
  }
  var For$0 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$EXPECT)($L173, 'For "for"'), NonIdContinue), function($skip, $loc, $0, $1, $2) {
    return { $loc, token: $1 };
  });
  function For(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "For", For$0);
  }
  var From$0 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$EXPECT)($L174, 'From "from"'), NonIdContinue), function($skip, $loc, $0, $1, $2) {
    return { $loc, token: $1 };
  });
  function From(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "From", From$0);
  }
  var Function$0 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$EXPECT)($L175, 'Function "function"'), NonIdContinue), function($skip, $loc, $0, $1, $2) {
    return { $loc, token: $1 };
  });
  function Function2(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "Function", Function$0);
  }
  var GetOrSet$0 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$C)((0, import_lib2.$EXPECT)($L176, 'GetOrSet "get"'), (0, import_lib2.$EXPECT)($L177, 'GetOrSet "set"')), NonIdContinue), function($skip, $loc, $0, $1, $2) {
    return { $loc, token: $1, type: "GetOrSet" };
  });
  function GetOrSet(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "GetOrSet", GetOrSet$0);
  }
  var Hash$0 = (0, import_lib2.$TV)((0, import_lib2.$EXPECT)($L178, 'Hash "#"'), function($skip, $loc, $0, $1) {
    return { $loc, token: $1 };
  });
  function Hash(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "Hash", Hash$0);
  }
  var If$0 = (0, import_lib2.$TV)((0, import_lib2.$TEXT)((0, import_lib2.$S)((0, import_lib2.$EXPECT)($L179, 'If "if"'), NonIdContinue, (0, import_lib2.$E)((0, import_lib2.$EXPECT)($L17, 'If " "')))), function($skip, $loc, $0, $1) {
    return { $loc, token: $1 };
  });
  function If(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "If", If$0);
  }
  var Import$0 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$EXPECT)($L15, 'Import "import"'), (0, import_lib2.$Y)((0, import_lib2.$EXPECT)($R80, "Import /\\s/"))), function($skip, $loc, $0, $1, $2) {
    return { $loc, token: $1 };
  });
  function Import(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "Import", Import$0);
  }
  var In$0 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$EXPECT)($L180, 'In "in"'), NonIdContinue), function($skip, $loc, $0, $1, $2) {
    return { $loc, token: $1, spaced: !0 };
  });
  function In(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "In", In$0);
  }
  var Infer$0 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$EXPECT)($L181, 'Infer "infer"'), NonIdContinue), function($skip, $loc, $0, $1, $2) {
    return { $loc, token: $1 };
  });
  function Infer(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "Infer", Infer$0);
  }
  var LetOrConst$0 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$C)((0, import_lib2.$EXPECT)($L182, 'LetOrConst "let"'), (0, import_lib2.$EXPECT)($L183, 'LetOrConst "const"')), NonIdContinue), function($skip, $loc, $0, $1, $2) {
    return { $loc, token: $1 };
  });
  function LetOrConst(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "LetOrConst", LetOrConst$0);
  }
  var Const$0 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$EXPECT)($L183, 'Const "const"'), NonIdContinue), function($skip, $loc, $0, $1, $2) {
    return { $loc, token: $1 };
  });
  function Const(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "Const", Const$0);
  }
  var Is$0 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$EXPECT)($L184, 'Is "is"'), NonIdContinue), function($skip, $loc, $0, $1, $2) {
    return { $loc, token: $1 };
  });
  function Is(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "Is", Is$0);
  }
  var LetOrConstOrVar$0 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$C)((0, import_lib2.$EXPECT)($L182, 'LetOrConstOrVar "let"'), (0, import_lib2.$EXPECT)($L183, 'LetOrConstOrVar "const"'), (0, import_lib2.$EXPECT)($L185, 'LetOrConstOrVar "var"')), NonIdContinue), function($skip, $loc, $0, $1, $2) {
    return { $loc, token: $1 };
  });
  function LetOrConstOrVar(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "LetOrConstOrVar", LetOrConstOrVar$0);
  }
  var Like$0 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$EXPECT)($L186, 'Like "like"'), NonIdContinue), function($skip, $loc, $0, $1, $2) {
    return { $loc, token: $1 };
  });
  function Like(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "Like", Like$0);
  }
  var Loop$0 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$EXPECT)($L187, 'Loop "loop"'), NonIdContinue), function($skip, $loc, $0, $1, $2) {
    return { $loc, token: "while" };
  });
  function Loop(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "Loop", Loop$0);
  }
  var New$0 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$EXPECT)($L188, 'New "new"'), NonIdContinue), function($skip, $loc, $0, $1, $2) {
    return { $loc, token: $1 };
  });
  function New(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "New", New$0);
  }
  var Not$0 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$EXPECT)($L189, 'Not "not"'), NonIdContinue, (0, import_lib2.$N)((0, import_lib2.$S)((0, import_lib2.$E)(_), (0, import_lib2.$EXPECT)($L16, 'Not ":"')))), function($skip, $loc, $0, $1, $2, $3) {
    return { $loc, token: "!" };
  });
  function Not(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "Not", Not$0);
  }
  var Of$0 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$EXPECT)($L190, 'Of "of"'), NonIdContinue), function($skip, $loc, $0, $1, $2) {
    return { $loc, token: $1 };
  });
  function Of(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "Of", Of$0);
  }
  var OpenAngleBracket$0 = (0, import_lib2.$TV)((0, import_lib2.$EXPECT)($L18, 'OpenAngleBracket "<"'), function($skip, $loc, $0, $1) {
    return { $loc, token: $1 };
  });
  function OpenAngleBracket(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "OpenAngleBracket", OpenAngleBracket$0);
  }
  var OpenBrace$0 = (0, import_lib2.$TV)((0, import_lib2.$EXPECT)($L1, 'OpenBrace "{"'), function($skip, $loc, $0, $1) {
    return { $loc, token: $1 };
  });
  function OpenBrace(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "OpenBrace", OpenBrace$0);
  }
  var OpenBracket$0 = (0, import_lib2.$TV)((0, import_lib2.$EXPECT)($L191, 'OpenBracket "["'), function($skip, $loc, $0, $1) {
    return { $loc, token: $1 };
  });
  function OpenBracket(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "OpenBracket", OpenBracket$0);
  }
  var OpenParen$0 = (0, import_lib2.$TV)((0, import_lib2.$EXPECT)($L4, 'OpenParen "("'), function($skip, $loc, $0, $1) {
    return { $loc, token: $1 };
  });
  function OpenParen(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "OpenParen", OpenParen$0);
  }
  var Operator$0 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$EXPECT)($L192, 'Operator "operator"'), NonIdContinue), function($skip, $loc, $0, $1, $2) {
    return { $loc, token: $1 };
  });
  function Operator(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "Operator", Operator$0);
  }
  var Override$0 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$EXPECT)($L193, 'Override "override"'), NonIdContinue), function($skip, $loc, $0, $1, $2) {
    return { $loc, token: $1, ts: !0 };
  });
  function Override(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "Override", Override$0);
  }
  var Own$0 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$EXPECT)($L194, 'Own "own"'), NonIdContinue), function($skip, $loc, $0, $1, $2) {
    return { $loc, token: $1 };
  });
  function Own(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "Own", Own$0);
  }
  var Public$0 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$EXPECT)($L195, 'Public "public"'), NonIdContinue), function($skip, $loc, $0, $1, $2) {
    return { $loc, token: $1 };
  });
  function Public(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "Public", Public$0);
  }
  var Private$0 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$EXPECT)($L196, 'Private "private"'), NonIdContinue), function($skip, $loc, $0, $1, $2) {
    return { $loc, token: $1 };
  });
  function Private(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "Private", Private$0);
  }
  var Protected$0 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$EXPECT)($L197, 'Protected "protected"'), NonIdContinue), function($skip, $loc, $0, $1, $2) {
    return { $loc, token: $1 };
  });
  function Protected(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "Protected", Protected$0);
  }
  var Pipe$0 = (0, import_lib2.$TV)((0, import_lib2.$C)((0, import_lib2.$EXPECT)($L198, 'Pipe "||>"'), (0, import_lib2.$EXPECT)($L199, 'Pipe "|\u25B7"')), function($skip, $loc, $0, $1) {
    return { $loc, token: "||>" };
  }), Pipe$1 = (0, import_lib2.$TV)((0, import_lib2.$C)((0, import_lib2.$EXPECT)($L200, 'Pipe "|>="'), (0, import_lib2.$EXPECT)($L201, 'Pipe "\u25B7="')), function($skip, $loc, $0, $1) {
    return { $loc, token: "|>=" };
  }), Pipe$2 = (0, import_lib2.$TV)((0, import_lib2.$C)((0, import_lib2.$EXPECT)($L202, 'Pipe "|>"'), (0, import_lib2.$EXPECT)($L203, 'Pipe "\u25B7"')), function($skip, $loc, $0, $1) {
    return { $loc, token: "|>" };
  }), Pipe$$ = [Pipe$0, Pipe$1, Pipe$2];
  function Pipe(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "Pipe", Pipe$$);
  }
  var QuestionMark$0 = (0, import_lib2.$TV)((0, import_lib2.$EXPECT)($L6, 'QuestionMark "?"'), function($skip, $loc, $0, $1) {
    return { $loc, token: $1 };
  });
  function QuestionMark(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "QuestionMark", QuestionMark$0);
  }
  var Readonly$0 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$EXPECT)($L204, 'Readonly "readonly"'), NonIdContinue), function($skip, $loc, $0, $1, $2) {
    return { $loc, token: $1, ts: !0 };
  });
  function Readonly(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "Readonly", Readonly$0);
  }
  var Return$0 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$EXPECT)($L205, 'Return "return"'), NonIdContinue), function($skip, $loc, $0, $1, $2) {
    return { $loc, token: $1 };
  });
  function Return(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "Return", Return$0);
  }
  var Satisfies$0 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$EXPECT)($L206, 'Satisfies "satisfies"'), NonIdContinue), function($skip, $loc, $0, $1, $2) {
    return { $loc, token: $1 };
  });
  function Satisfies(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "Satisfies", Satisfies$0);
  }
  var Semicolon$0 = (0, import_lib2.$TV)((0, import_lib2.$EXPECT)($L119, 'Semicolon ";"'), function($skip, $loc, $0, $1) {
    return { $loc, token: $1 };
  });
  function Semicolon(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "Semicolon", Semicolon$0);
  }
  var SingleQuote$0 = (0, import_lib2.$TV)((0, import_lib2.$EXPECT)($L207, `SingleQuote "'"`), function($skip, $loc, $0, $1) {
    return { $loc, token: $1 };
  });
  function SingleQuote(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "SingleQuote", SingleQuote$0);
  }
  var Star$0 = (0, import_lib2.$TV)((0, import_lib2.$EXPECT)($L75, 'Star "*"'), function($skip, $loc, $0, $1) {
    return { $loc, token: $1 };
  });
  function Star(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "Star", Star$0);
  }
  var Static$0 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$EXPECT)($L208, 'Static "static"'), NonIdContinue), function($skip, $loc, $0, $1, $2) {
    return { $loc, token: $1 };
  }), Static$1 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$EXPECT)($L146, 'Static "@"'), (0, import_lib2.$N)((0, import_lib2.$C)((0, import_lib2.$EXPECT)($L4, 'Static "("'), (0, import_lib2.$EXPECT)($L146, 'Static "@"')))), function($skip, $loc, $0, $1, $2) {
    return { $loc, token: "static " };
  }), Static$$ = [Static$0, Static$1];
  function Static(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "Static", Static$$);
  }
  var SubstitutionStart$0 = (0, import_lib2.$TV)((0, import_lib2.$EXPECT)($L209, 'SubstitutionStart "${"'), function($skip, $loc, $0, $1) {
    return { $loc, token: $1 };
  });
  function SubstitutionStart(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "SubstitutionStart", SubstitutionStart$0);
  }
  var Super$0 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$EXPECT)($L210, 'Super "super"'), NonIdContinue), function($skip, $loc, $0, $1, $2) {
    return { $loc, token: $1 };
  });
  function Super(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "Super", Super$0);
  }
  var Switch$0 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$EXPECT)($L211, 'Switch "switch"'), NonIdContinue), function($skip, $loc, $0, $1, $2) {
    return { $loc, token: $1 };
  });
  function Switch(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "Switch", Switch$0);
  }
  var Target$0 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$EXPECT)($L212, 'Target "target"'), NonIdContinue), function($skip, $loc, $0, $1, $2) {
    return { $loc, token: $1 };
  });
  function Target(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "Target", Target$0);
  }
  var Then$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(__, (0, import_lib2.$EXPECT)($L213, 'Then "then"'), NonIdContinue), function($skip, $loc, $0, $1, $2, $3) {
    return { $loc, token: "" };
  });
  function Then(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "Then", Then$0);
  }
  var This$0 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$EXPECT)($L214, 'This "this"'), NonIdContinue), function($skip, $loc, $0, $1, $2) {
    return { $loc, token: $1 };
  });
  function This(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "This", This$0);
  }
  var Throw$0 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$EXPECT)($L215, 'Throw "throw"'), NonIdContinue), function($skip, $loc, $0, $1, $2) {
    return { $loc, token: $1 };
  });
  function Throw(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "Throw", Throw$0);
  }
  var TripleDoubleQuote$0 = (0, import_lib2.$TV)((0, import_lib2.$EXPECT)($L216, 'TripleDoubleQuote "\\\\\\"\\\\\\"\\\\\\""'), function($skip, $loc, $0, $1) {
    return { $loc, token: "`" };
  });
  function TripleDoubleQuote(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "TripleDoubleQuote", TripleDoubleQuote$0);
  }
  var TripleSingleQuote$0 = (0, import_lib2.$TV)((0, import_lib2.$EXPECT)($L217, `TripleSingleQuote "'''"`), function($skip, $loc, $0, $1) {
    return { $loc, token: "`" };
  });
  function TripleSingleQuote(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "TripleSingleQuote", TripleSingleQuote$0);
  }
  var TripleSlash$0 = (0, import_lib2.$TV)((0, import_lib2.$EXPECT)($L218, 'TripleSlash "///"'), function($skip, $loc, $0, $1) {
    return { $loc, token: "/" };
  });
  function TripleSlash(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "TripleSlash", TripleSlash$0);
  }
  var TripleTick$0 = (0, import_lib2.$TV)((0, import_lib2.$EXPECT)($L219, 'TripleTick "```"'), function($skip, $loc, $0, $1) {
    return { $loc, token: "`" };
  });
  function TripleTick(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "TripleTick", TripleTick$0);
  }
  var Try$0 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$EXPECT)($L220, 'Try "try"'), NonIdContinue), function($skip, $loc, $0, $1, $2) {
    return { $loc, token: $1 };
  });
  function Try(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "Try", Try$0);
  }
  var Typeof$0 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$EXPECT)($L221, 'Typeof "typeof"'), NonIdContinue), function($skip, $loc, $0, $1, $2) {
    return { $loc, token: $1 };
  });
  function Typeof(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "Typeof", Typeof$0);
  }
  var Undefined$0 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$EXPECT)($L222, 'Undefined "undefined"'), NonIdContinue), function($skip, $loc, $0, $1, $2) {
    return { $loc, token: $1 };
  });
  function Undefined(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "Undefined", Undefined$0);
  }
  var Unless$0 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$EXPECT)($L223, 'Unless "unless"'), NonIdContinue), function($skip, $loc, $0, $1, $2) {
    return { $loc, token: $1, negated: !0 };
  });
  function Unless(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "Unless", Unless$0);
  }
  var Until$0 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$EXPECT)($L224, 'Until "until"'), NonIdContinue), function($skip, $loc, $0, $1, $2) {
    return { $loc, token: $1, negated: !0 };
  });
  function Until(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "Until", Until$0);
  }
  var Using$0 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$EXPECT)($L225, 'Using "using"'), NonIdContinue), function($skip, $loc, $0, $1, $2) {
    return { $loc, token: $1 };
  });
  function Using(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "Using", Using$0);
  }
  var Var$0 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$EXPECT)($L185, 'Var "var"'), NonIdContinue), function($skip, $loc, $0, $1, $2) {
    return { $loc, token: $1 };
  });
  function Var(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "Var", Var$0);
  }
  var Void$0 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$EXPECT)($L226, 'Void "void"'), NonIdContinue), function($skip, $loc, $0, $1, $2) {
    return { $loc, token: $1 };
  });
  function Void(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "Void", Void$0);
  }
  var When$0 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$EXPECT)($L227, 'When "when"'), NonIdContinue), function($skip, $loc, $0, $1, $2) {
    return { $loc, token: "case" };
  });
  function When(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "When", When$0);
  }
  var While$0 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$EXPECT)($L228, 'While "while"'), NonIdContinue), function($skip, $loc, $0, $1, $2) {
    return { $loc, token: $1 };
  });
  function While(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "While", While$0);
  }
  var With$0 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$EXPECT)($L134, 'With "with"'), NonIdContinue), function($skip, $loc, $0, $1, $2) {
    return { $loc, token: $1 };
  });
  function With(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "With", With$0);
  }
  var Yield$0 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$EXPECT)($L229, 'Yield "yield"'), NonIdContinue), function($skip, $loc, $0, $1, $2) {
    return { $loc, token: $1, type: "Yield" };
  });
  function Yield(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "Yield", Yield$0);
  }
  var JSXImplicitFragment$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(JSXTag, (0, import_lib2.$Q)((0, import_lib2.$S)(Nested, (0, import_lib2.$C)(JSXTag, JSXAngleChild)))), function($skip, $loc, $0, $1, $2) {
    let jsx = $2.length === 0 ? $1 : {
      type: "JSXFragment",
      children: [
        `<>
`,
        state.currentIndent.token,
        ...$0,
        `
`,
        state.currentIndent.token,
        "</>"
      ],
      jsxChildren: [$1].concat($2.map(([, tag]) => tag))
    }, type = typeOfJSX(jsx, config);
    return type ? [
      { ts: !0, children: ["("] },
      jsx,
      { ts: !0, children: [" as any as ", type, ")"] }
    ] : jsx;
  });
  function JSXImplicitFragment(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "JSXImplicitFragment", JSXImplicitFragment$0);
  }
  var JSXTag$0 = (0, import_lib2.$T)((0, import_lib2.$S)((0, import_lib2.$EXPECT)($R81, "JSXTag /(?=[<])/"), _JSXTag), function(value) {
    return value[1];
  });
  function JSXTag(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "JSXTag", JSXTag$0);
  }
  var _JSXTag$0 = JSXElement, _JSXTag$1 = JSXFragment, _JSXTag$2 = JSXComment, _JSXTag$$ = [_JSXTag$0, _JSXTag$1, _JSXTag$2];
  function _JSXTag(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "_JSXTag", _JSXTag$$);
  }
  var JSXElement$0 = JSXSelfClosingElement, JSXElement$1 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$N)(CoffeeJSXEnabled), PushJSXOpeningElement, (0, import_lib2.$E)(JSXMixedChildren), JSXOptionalClosingElement, PopJSXStack), function($skip, $loc, $0, $1, $2, $3, $4, $5) {
    var open = $2, children = $3, close = $4;
    if (!children) return $skip;
    let parts;
    return $0 = $0.slice(1), close ? parts = $0 : children.jsxChildren.length ? parts = [
      ...$0,
      `
`,
      // InsertNewline
      state.currentIndent.token,
      // InsertIndent
      ["</", open[1], ">"]
    ] : parts = [open.slice(0, -1), " />"], { type: "JSXElement", children: parts, tag: open[1] };
  }), JSXElement$2 = (0, import_lib2.$TS)((0, import_lib2.$S)(CoffeeJSXEnabled, JSXOpeningElement, (0, import_lib2.$E)(JSXChildren), (0, import_lib2.$E)(Whitespace), JSXClosingElement), function($skip, $loc, $0, $1, $2, $3, $4, $5) {
    var open = $2, close = $5;
    return $0 = $0.slice(1), open[1] !== close[2] ? $skip : { type: "JSXElement", children: $0, tag: open[1] };
  }), JSXElement$$ = [JSXElement$0, JSXElement$1, JSXElement$2];
  function JSXElement(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "JSXElement", JSXElement$$);
  }
  var JSXSelfClosingElement$0 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$EXPECT)($L18, 'JSXSelfClosingElement "<"'), JSXElementName, (0, import_lib2.$E)(TypeArguments), (0, import_lib2.$E)(JSXAttributes), (0, import_lib2.$E)(Whitespace), (0, import_lib2.$EXPECT)($L230, 'JSXSelfClosingElement "/>"')), function($skip, $loc, $0, $1, $2, $3, $4, $5, $6) {
    return { type: "JSXElement", children: $0, tag: $2 };
  });
  function JSXSelfClosingElement(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "JSXSelfClosingElement", JSXSelfClosingElement$0);
  }
  var PushJSXOpeningElement$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(JSXOpeningElement), function($skip, $loc, $0, $1) {
    return state.JSXTagStack.push($1[1]), $1;
  });
  function PushJSXOpeningElement(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "PushJSXOpeningElement", PushJSXOpeningElement$0);
  }
  var PopJSXStack$0 = (0, import_lib2.$TV)((0, import_lib2.$EXPECT)($L0, 'PopJSXStack ""'), function($skip, $loc, $0, $1) {
    state.JSXTagStack.pop();
  });
  function PopJSXStack(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "PopJSXStack", PopJSXStack$0);
  }
  var JSXOpeningElement$0 = (0, import_lib2.$S)((0, import_lib2.$EXPECT)($L18, 'JSXOpeningElement "<"'), JSXElementName, (0, import_lib2.$E)(TypeArguments), (0, import_lib2.$E)(JSXAttributes), (0, import_lib2.$E)(Whitespace), (0, import_lib2.$EXPECT)($L45, 'JSXOpeningElement ">"'));
  function JSXOpeningElement(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "JSXOpeningElement", JSXOpeningElement$0);
  }
  var JSXOptionalClosingElement$0 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$E)(Whitespace), JSXClosingElement), function($skip, $loc, $0, $1, $2) {
    var close = $2;
    return state.currentJSXTag !== close[2] ? $skip : $0;
  }), JSXOptionalClosingElement$1 = (0, import_lib2.$EXPECT)($L0, 'JSXOptionalClosingElement ""'), JSXOptionalClosingElement$$ = [JSXOptionalClosingElement$0, JSXOptionalClosingElement$1];
  function JSXOptionalClosingElement(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "JSXOptionalClosingElement", JSXOptionalClosingElement$$);
  }
  var JSXClosingElement$0 = (0, import_lib2.$S)((0, import_lib2.$EXPECT)($L231, 'JSXClosingElement "</"'), (0, import_lib2.$E)(Whitespace), JSXElementName, (0, import_lib2.$E)(Whitespace), (0, import_lib2.$EXPECT)($L45, 'JSXClosingElement ">"'));
  function JSXClosingElement(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "JSXClosingElement", JSXClosingElement$0);
  }
  var JSXFragment$0 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$N)(CoffeeJSXEnabled), PushJSXOpeningFragment, (0, import_lib2.$E)(JSXMixedChildren), JSXOptionalClosingFragment, PopJSXStack), function($skip, $loc, $0, $1, $2, $3, $4, $5) {
    var open = $2, children = $3, close = $4;
    return children ? ($0 = $0.slice(1), { type: "JSXFragment", children: close ? $0 : [
      ...$0,
      `
`,
      // InsertNewline
      state.currentIndent.token,
      // InsertIndent
      "</>"
    ], jsxChildren: children.jsxChildren }) : $skip;
  }), JSXFragment$1 = (0, import_lib2.$TS)((0, import_lib2.$S)(CoffeeJSXEnabled, (0, import_lib2.$EXPECT)($L232, 'JSXFragment "<>"'), (0, import_lib2.$E)(JSXChildren), (0, import_lib2.$E)(Whitespace), JSXClosingFragment), function($skip, $loc, $0, $1, $2, $3, $4, $5) {
    var children = $3;
    return $0 = $0.slice(1), {
      type: "JSXFragment",
      children: $0,
      jsxChildren: children ? children.jsxChildren : []
    };
  }), JSXFragment$$ = [JSXFragment$0, JSXFragment$1];
  function JSXFragment(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "JSXFragment", JSXFragment$$);
  }
  var PushJSXOpeningFragment$0 = (0, import_lib2.$TV)((0, import_lib2.$EXPECT)($L232, 'PushJSXOpeningFragment "<>"'), function($skip, $loc, $0, $1) {
    return state.JSXTagStack.push(""), $1;
  });
  function PushJSXOpeningFragment(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "PushJSXOpeningFragment", PushJSXOpeningFragment$0);
  }
  var JSXOptionalClosingFragment$0 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$E)(Whitespace), JSXClosingFragment), function($skip, $loc, $0, $1, $2) {
    return state.currentJSXTag !== "" ? $skip : $0;
  }), JSXOptionalClosingFragment$1 = (0, import_lib2.$EXPECT)($L0, 'JSXOptionalClosingFragment ""'), JSXOptionalClosingFragment$$ = [JSXOptionalClosingFragment$0, JSXOptionalClosingFragment$1];
  function JSXOptionalClosingFragment(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "JSXOptionalClosingFragment", JSXOptionalClosingFragment$$);
  }
  var JSXClosingFragment$0 = (0, import_lib2.$EXPECT)($L233, 'JSXClosingFragment "</>"');
  function JSXClosingFragment(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "JSXClosingFragment", JSXClosingFragment$0);
  }
  var JSXElementName$0 = (0, import_lib2.$TV)((0, import_lib2.$Y)((0, import_lib2.$S)((0, import_lib2.$C)((0, import_lib2.$EXPECT)($L178, 'JSXElementName "#"'), Dot), JSXShorthandString)), function($skip, $loc, $0, $1) {
    return config.defaultElement;
  }), JSXElementName$1 = (0, import_lib2.$TEXT)((0, import_lib2.$S)(JSXIdentifierName, (0, import_lib2.$C)((0, import_lib2.$S)(Colon, JSXIdentifierName), (0, import_lib2.$Q)((0, import_lib2.$S)(Dot, JSXIdentifierName))))), JSXElementName$$ = [JSXElementName$0, JSXElementName$1];
  function JSXElementName(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "JSXElementName", JSXElementName$$);
  }
  var JSXIdentifierName$0 = (0, import_lib2.$R$0)((0, import_lib2.$EXPECT)($R82, "JSXIdentifierName /(?:\\p{ID_Start}|[_$])(?:\\p{ID_Continue}|[\\u200C\\u200D$-])*/"));
  function JSXIdentifierName(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "JSXIdentifierName", JSXIdentifierName$0);
  }
  var JSXAttributes$0 = (0, import_lib2.$TV)((0, import_lib2.$Q)((0, import_lib2.$S)((0, import_lib2.$E)(Whitespace), JSXAttribute)), function($skip, $loc, $0, $1) {
    let classes = [], attrs = $0.filter((pair) => {
      let [, attr] = pair;
      return attr.type === "JSXClass" ? (classes.push(attr.class), !1) : !0;
    });
    if (classes.length) {
      let isBraced2 = function(c) {
        return c[0] === "{" || c[0]?.token === "{";
      }, unbrace2 = function(c) {
        return c.slice(1, -1);
      }, parseClass2 = function(c) {
        return c = c.token || c, c.startsWith("'") && (c = '"' + c.slice(1, -1).replace(/\\*"/g, (m) => m.length % 2 == 0 ? m : "\\" + m) + '"'), JSON.parse(c);
      };
      var isBraced = isBraced2, unbrace = unbrace2, parseClass = parseClass2;
      let className = config.react ? "className" : "class";
      attrs = attrs.filter((pair) => {
        let [, attr] = pair;
        return (attr[0][0] === "class" || attr[0][0] === "className") && !attr[0][1] ? (className = attr[0][0], classes.push(attr[1][attr[1].length - 1]), !1) : !0;
      });
      let strings = [], exprs = [];
      classes.forEach((c) => {
        isBraced2(c) ? (exprs.push(unbrace2(c)), exprs.push(", ")) : strings.push(parseClass2(c));
      });
      let stringPart = strings.filter(Boolean).join(" "), classValue;
      if (exprs.length)
        if (exprs.pop(), stringPart && exprs.unshift(JSON.stringify(stringPart), ", "), exprs.length === 1) {
          let root = exprs[0];
          for (; root.length && isWhitespaceOrEmpty(root[root.length - 1]); )
            root = root.slice(0, -1);
          for (; root?.length === 1; ) root = root[0];
          root?.children && (root = root.children), root?.[0]?.token === "`" ? classValue = ["{", ...exprs, "}"] : classValue = ["{(", ...exprs, ') || ""}'];
        } else
          classValue = ["{[", ...exprs, '].filter(Boolean).join(" ")}'];
      else
        !stringPart.includes("&") && !stringPart.includes('"') ? classValue = `"${stringPart}"` : !stringPart.includes("&") && !stringPart.includes("'") ? classValue = `'${stringPart}'` : classValue = `{${JSON.stringify(stringPart)}}`;
      attrs.splice(0, 0, [" ", [className, ["=", classValue]]]);
    }
    return attrs.map((pair) => {
      let [space, attr] = pair;
      return space && attr[0] === " " && (pair = [space, attr.slice(1)]), pair;
    });
  });
  function JSXAttributes(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "JSXAttributes", JSXAttributes$0);
  }
  var JSXAttribute$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(BracedObjectLiteral), function($skip, $loc, $0, $1) {
    return convertObjectToJSXAttributes($1);
  }), JSXAttribute$1 = (0, import_lib2.$TS)((0, import_lib2.$S)(JSXAttributeName, (0, import_lib2.$C)(JSXAttributeInitializer, (0, import_lib2.$Y)(JSXAttributeSpace))), function($skip, $loc, $0, $1, $2) {
    var name = $1, value = $2;
    return name.type === "ComputedPropertyName" ? (value ? (value = value[value.length - 1], value[0]?.token === "{" && value[value.length - 1]?.token === "}" && (value = value.slice(1, -1))) : value = "true", ["{...{", name, ": ", value, "}}"]) : $0;
  }), JSXAttribute$2 = (0, import_lib2.$S)(InsertInlineOpenBrace, DotDotDot, InlineJSXAttributeValue, InsertCloseBrace, (0, import_lib2.$Y)(JSXAttributeSpace)), JSXAttribute$3 = (0, import_lib2.$TS)((0, import_lib2.$S)(AtThis, (0, import_lib2.$E)(Identifier), (0, import_lib2.$Q)(InlineJSXCallExpressionRest), (0, import_lib2.$Y)(JSXAttributeSpace)), function($skip, $loc, $0, $1, $2, $3, $4) {
    var at = $1, id = $2, rest = $3;
    let children = [at, ...rest.flat()];
    id && children.splice(1, 0, {
      type: "PropertyAccess",
      children: [".", id],
      name: id
    });
    let expr = processCallMemberExpression({
      type: "CallExpression",
      children
    }), last = lastAccessInCallExpression(expr);
    if (!last) return $skip;
    let name;
    return last.type === "Index" ? [
      "{...{",
      { ...last, type: "ComputedPropertyName" },
      ": ",
      expr,
      "}}"
    ] : last.name ? [last.name, "={", expr, "}"] : $skip;
  }), JSXAttribute$4 = (0, import_lib2.$TS)((0, import_lib2.$S)(Identifier, (0, import_lib2.$P)(InlineJSXCallExpressionRest), (0, import_lib2.$Y)(JSXAttributeSpace)), function($skip, $loc, $0, $1, $2, $3) {
    var id = $1, rest = $2;
    let expr = processCallMemberExpression({
      type: "CallExpression",
      children: [id, ...rest.flat()]
    });
    if (expr.type === "ObjectExpression")
      return convertObjectToJSXAttributes(expr);
    let last = lastAccessInCallExpression(expr);
    if (!last) return $skip;
    let name;
    return last.type === "Index" ? [
      "{...{",
      { ...last, type: "ComputedPropertyName" },
      ": ",
      expr,
      "}}"
    ] : last.name ? [last.name, "={", expr, "}"] : $skip;
  }), JSXAttribute$5 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$EXPECT)($L178, 'JSXAttribute "#"'), JSXShorthandString), function($skip, $loc, $0, $1, $2) {
    return [" ", "id=", $2];
  }), JSXAttribute$6 = (0, import_lib2.$TS)((0, import_lib2.$S)(Dot, JSXShorthandString), function($skip, $loc, $0, $1, $2) {
    return {
      type: "JSXClass",
      class: $2
    };
  }), JSXAttribute$7 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$TEXT)((0, import_lib2.$EXPECT)($R83, "JSXAttribute /[!+-]/")), JSXAttributeName, (0, import_lib2.$Y)(JSXAttributeSpace)), function($skip, $loc, $0, $1, $2, $3) {
    var toggle = $1, id = $2;
    return [" ", id, "={", toggle === "+" ? "true" : "false", "}"];
  }), JSXAttribute$$ = [JSXAttribute$0, JSXAttribute$1, JSXAttribute$2, JSXAttribute$3, JSXAttribute$4, JSXAttribute$5, JSXAttribute$6, JSXAttribute$7];
  function JSXAttribute(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "JSXAttribute", JSXAttribute$$);
  }
  var JSXAttributeSpace$0 = (0, import_lib2.$R$0)((0, import_lib2.$EXPECT)($R84, "JSXAttributeSpace /[\\s>]|\\/>/"));
  function JSXAttributeSpace(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "JSXAttributeSpace", JSXAttributeSpace$0);
  }
  var JSXShorthandString$0 = (0, import_lib2.$TR)((0, import_lib2.$EXPECT)($R85, "JSXShorthandString /(?:[\\w\\-:]+|\\([^()]*\\)|\\[[^\\[\\]]*\\])+/"), function($skip, $loc, $0, $1, $2, $3, $4, $5, $6, $7, $8, $9) {
    return quoteString($0);
  }), JSXShorthandString$1 = (0, import_lib2.$TS)((0, import_lib2.$S)(TemplateLiteral), function($skip, $loc, $0, $1) {
    return ["{", $1, "}"];
  }), JSXShorthandString$2 = StringLiteral, JSXShorthandString$3 = (0, import_lib2.$S)(OpenBrace, PostfixedExpression, (0, import_lib2.$E)(Whitespace), CloseBrace), JSXShorthandString$$ = [JSXShorthandString$0, JSXShorthandString$1, JSXShorthandString$2, JSXShorthandString$3];
  function JSXShorthandString(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "JSXShorthandString", JSXShorthandString$$);
  }
  var JSXAttributeName$0 = (0, import_lib2.$S)(JSXIdentifierName, (0, import_lib2.$E)((0, import_lib2.$S)(Colon, JSXIdentifierName))), JSXAttributeName$1 = ComputedPropertyName, JSXAttributeName$$ = [JSXAttributeName$0, JSXAttributeName$1];
  function JSXAttributeName(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "JSXAttributeName", JSXAttributeName$$);
  }
  var JSXAttributeInitializer$0 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$N)(CoffeeJSXEnabled), (0, import_lib2.$E)(Whitespace), Equals, (0, import_lib2.$Y)((0, import_lib2.$S)((0, import_lib2.$Q)(NonNewlineWhitespace), EOL)), InsertInlineOpenBrace, NestedPostfixedExpressionNoTrailing, InsertCloseBrace), function($skip, $loc, $0, $1, $2, $3, $4, $5, $6, $7) {
    var ws1 = $2, equals = $3, open = $5, expression = $6, close = $7;
    return [ws1, equals, open, trimFirstSpace(expression), close];
  }), JSXAttributeInitializer$1 = (0, import_lib2.$S)((0, import_lib2.$E)(Whitespace), Equals, (0, import_lib2.$E)(Whitespace), JSXAttributeValue), JSXAttributeInitializer$$ = [JSXAttributeInitializer$0, JSXAttributeInitializer$1];
  function JSXAttributeInitializer(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "JSXAttributeInitializer", JSXAttributeInitializer$$);
  }
  var JSXAttributeValue$0 = (0, import_lib2.$S)(OpenBrace, PostfixedExpression, (0, import_lib2.$E)(Whitespace), CloseBrace), JSXAttributeValue$1 = JSXElement, JSXAttributeValue$2 = JSXFragment, JSXAttributeValue$3 = (0, import_lib2.$TS)((0, import_lib2.$S)(InsertInlineOpenBrace, InlineJSXAttributeValue, InsertCloseBrace, (0, import_lib2.$Y)(JSXAttributeSpace)), function($skip, $loc, $0, $1, $2, $3, $4) {
    var open = $1, value = $2, close = $3;
    return value.type === "StringLiteral" ? $skip : [open, value, close];
  }), JSXAttributeValue$4 = (0, import_lib2.$R$0)((0, import_lib2.$EXPECT)($R86, `JSXAttributeValue /"[^"]*"|'[^']*'/`)), JSXAttributeValue$$ = [JSXAttributeValue$0, JSXAttributeValue$1, JSXAttributeValue$2, JSXAttributeValue$3, JSXAttributeValue$4];
  function JSXAttributeValue(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "JSXAttributeValue", JSXAttributeValue$$);
  }
  var InlineJSXAttributeValue$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(InlineJSXUnaryExpression, (0, import_lib2.$Q)(InlineJSXBinaryOpRHS)), function($skip, $loc, $0, $1, $2) {
    return $2.length ? processBinaryOpExpression($0) : $1;
  });
  function InlineJSXAttributeValue(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "InlineJSXAttributeValue", InlineJSXAttributeValue$0);
  }
  var InlineJSXBinaryOpRHS$0 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$N)((0, import_lib2.$EXPECT)($R87, "InlineJSXBinaryOpRHS /[<>]/")), BinaryOp, InlineJSXUnaryExpression), function($skip, $loc, $0, $1, $2, $3) {
    var op = $2, rhs = $3;
    return [[], op, [], rhs];
  });
  function InlineJSXBinaryOpRHS(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "InlineJSXBinaryOpRHS", InlineJSXBinaryOpRHS$0);
  }
  var InlineJSXUnaryExpression$0 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$Q)(InlineJSXUnaryOp), InlineJSXUpdateExpression, (0, import_lib2.$E)(InlineJSXUnaryPostfix)), function($skip, $loc, $0, $1, $2, $3) {
    var pre = $1, exp = $2, post = $3;
    return processUnaryExpression(pre, exp, post);
  });
  function InlineJSXUnaryExpression(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "InlineJSXUnaryExpression", InlineJSXUnaryExpression$0);
  }
  var InlineJSXUnaryOp$0 = (0, import_lib2.$TR)((0, import_lib2.$EXPECT)($R88, "InlineJSXUnaryOp /[!~+-](?!\\s|[!~+-]*&)/"), function($skip, $loc, $0, $1, $2, $3, $4, $5, $6, $7, $8, $9) {
    return { $loc, token: $0 };
  });
  function InlineJSXUnaryOp(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "InlineJSXUnaryOp", InlineJSXUnaryOp$0);
  }
  var InlineJSXUnaryPostfix$0 = QuestionMark;
  function InlineJSXUnaryPostfix(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "InlineJSXUnaryPostfix", InlineJSXUnaryPostfix$0);
  }
  var InlineJSXUpdateExpression$0 = (0, import_lib2.$S)(UpdateExpressionSymbol, UnaryExpression), InlineJSXUpdateExpression$1 = (0, import_lib2.$TS)((0, import_lib2.$S)(InlineJSXCallExpression, (0, import_lib2.$E)(UpdateExpressionSymbol)), function($skip, $loc, $0, $1, $2) {
    return $2 ? $0 : $1;
  }), InlineJSXUpdateExpression$$ = [InlineJSXUpdateExpression$0, InlineJSXUpdateExpression$1];
  function InlineJSXUpdateExpression(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "InlineJSXUpdateExpression", InlineJSXUpdateExpression$$);
  }
  var InlineJSXCallExpression$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(Super, ExplicitArguments, (0, import_lib2.$Q)(InlineJSXCallExpressionRest)), function($skip, $loc, $0, $1, $2, $3) {
    var args = $2, rest = $3;
    return processCallMemberExpression({
      type: "CallExpression",
      children: [
        $1,
        args,
        ...rest.flat()
      ]
    });
  }), InlineJSXCallExpression$1 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$EXPECT)($L15, 'InlineJSXCallExpression "import"'), ExplicitArguments, (0, import_lib2.$Q)(InlineJSXCallExpressionRest)), function($skip, $loc, $0, $1, $2, $3) {
    var args = $2, rest = $3;
    return processCallMemberExpression({
      type: "CallExpression",
      children: [
        $1,
        args,
        ...rest.flat()
      ]
    });
  }), InlineJSXCallExpression$2 = (0, import_lib2.$TS)((0, import_lib2.$S)(InlineJSXMemberExpression, (0, import_lib2.$Q)(InlineJSXCallExpressionRest)), function($skip, $loc, $0, $1, $2) {
    var member = $1, rest = $2;
    return rest.length ? (rest = rest.flat(), processCallMemberExpression({
      type: "CallExpression",
      children: [member, ...rest]
    })) : member;
  }), InlineJSXCallExpression$$ = [InlineJSXCallExpression$0, InlineJSXCallExpression$1, InlineJSXCallExpression$2];
  function InlineJSXCallExpression(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "InlineJSXCallExpression", InlineJSXCallExpression$$);
  }
  var InlineJSXCallExpressionRest$0 = InlineJSXMemberExpressionRest, InlineJSXCallExpressionRest$1 = (0, import_lib2.$TV)((0, import_lib2.$C)(TemplateLiteral, StringLiteral), function($skip, $loc, $0, $1) {
    return $1.type === "StringLiteral" ? "`" + $1.token.slice(1, -1).replace(/(`|\$\{)/g, "\\$1") + "`" : $1;
  }), InlineJSXCallExpressionRest$2 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$E)(OptionalShorthand), ExplicitArguments), function($skip, $loc, $0, $1, $2) {
    var args = $2;
    return $1 ? [$1, args] : args;
  }), InlineJSXCallExpressionRest$$ = [InlineJSXCallExpressionRest$0, InlineJSXCallExpressionRest$1, InlineJSXCallExpressionRest$2];
  function InlineJSXCallExpressionRest(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "InlineJSXCallExpressionRest", InlineJSXCallExpressionRest$$);
  }
  var InlineJSXMemberExpression$0 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$C)(InlineJSXPrimaryExpression, SuperProperty, MetaProperty), (0, import_lib2.$Q)(InlineJSXMemberExpressionRest)), function($skip, $loc, $0, $1, $2) {
    var rest = $2;
    return rest.length || Array.isArray($1) ? processCallMemberExpression({
      type: "MemberExpression",
      children: [$1, ...rest].flat()
    }) : $1;
  });
  function InlineJSXMemberExpression(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "InlineJSXMemberExpression", InlineJSXMemberExpression$0);
  }
  var InlineJSXMemberExpressionRest$0 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$E)(OptionalShorthand), (0, import_lib2.$Q)(InlineComment), MemberBracketContent), function($skip, $loc, $0, $1, $2, $3) {
    var dot = $1, comments = $2, content = $3;
    return !dot && !comments.length ? content : dot ? dot.type === "Optional" && content.type === "SliceExpression" ? [...dot.children.slice(0, -1), ...comments, content] : [dot, ...comments, content] : [...comments, content];
  }), InlineJSXMemberExpressionRest$1 = PropertyAccess, InlineJSXMemberExpressionRest$2 = PropertyGlob, InlineJSXMemberExpressionRest$3 = PropertyBindExplicitArguments, InlineJSXMemberExpressionRest$4 = NonNullAssertion, InlineJSXMemberExpressionRest$$ = [InlineJSXMemberExpressionRest$0, InlineJSXMemberExpressionRest$1, InlineJSXMemberExpressionRest$2, InlineJSXMemberExpressionRest$3, InlineJSXMemberExpressionRest$4];
  function InlineJSXMemberExpressionRest(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "InlineJSXMemberExpressionRest", InlineJSXMemberExpressionRest$$);
  }
  var InlineJSXPrimaryExpression$0 = NullLiteral, InlineJSXPrimaryExpression$1 = BooleanLiteral, InlineJSXPrimaryExpression$2 = NumericLiteral, InlineJSXPrimaryExpression$3 = TemplateLiteral, InlineJSXPrimaryExpression$4 = ThisLiteral, InlineJSXPrimaryExpression$5 = ArrayLiteral, InlineJSXPrimaryExpression$6 = BracedObjectLiteral, InlineJSXPrimaryExpression$7 = IdentifierReference, InlineJSXPrimaryExpression$8 = RegularExpressionLiteral, InlineJSXPrimaryExpression$9 = OptimizedParenthesizedExpression, InlineJSXPrimaryExpression$$ = [InlineJSXPrimaryExpression$0, InlineJSXPrimaryExpression$1, InlineJSXPrimaryExpression$2, InlineJSXPrimaryExpression$3, InlineJSXPrimaryExpression$4, InlineJSXPrimaryExpression$5, InlineJSXPrimaryExpression$6, InlineJSXPrimaryExpression$7, InlineJSXPrimaryExpression$8, InlineJSXPrimaryExpression$9];
  function InlineJSXPrimaryExpression(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "InlineJSXPrimaryExpression", InlineJSXPrimaryExpression$$);
  }
  var JSXMixedChildren$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(JSXSameLineChildren, JSXNestedChildren), function($skip, $loc, $0, $1, $2) {
    var c1 = $1, c2 = $2;
    return {
      children: c1.concat(c2),
      jsxChildren: c1.concat(c2.jsxChildren)
    };
  });
  function JSXMixedChildren(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "JSXMixedChildren", JSXMixedChildren$0);
  }
  var JSXSameLineChildren$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(JSXCodeSameLineEnabled, (0, import_lib2.$Q)((0, import_lib2.$S)((0, import_lib2.$E)(NonNewlineWhitespace), (0, import_lib2.$N)(EOL), JSXChildForcedCode))), function($skip, $loc, $0, $1, $2) {
    var children = $2;
    return children.map(([, , c]) => c);
  }), JSXSameLineChildren$1 = (0, import_lib2.$T)((0, import_lib2.$S)((0, import_lib2.$N)(JSXCodeSameLineEnabled), (0, import_lib2.$Q)(JSXChildForcedNoCode)), function(value) {
    var children = value[1];
    return children;
  }), JSXSameLineChildren$$ = [JSXSameLineChildren$0, JSXSameLineChildren$1];
  function JSXSameLineChildren(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "JSXSameLineChildren", JSXSameLineChildren$$);
  }
  var JSXChildren$0 = (0, import_lib2.$TV)((0, import_lib2.$Q)((0, import_lib2.$S)((0, import_lib2.$Q)((0, import_lib2.$S)((0, import_lib2.$E)(NonNewlineWhitespace), EOL, (0, import_lib2.$E)(NonNewlineWhitespace))), JSXChild)), function($skip, $loc, $0, $1) {
    return {
      children: $1,
      jsxChildren: $1.map((children) => children[1])
    };
  });
  function JSXChildren(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "JSXChildren", JSXChildren$0);
  }
  var JSXNestedChildren$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(PushIndent, (0, import_lib2.$Q)((0, import_lib2.$S)(JSXNested, (0, import_lib2.$P)(JSXChild))), PopIndent), function($skip, $loc, $0, $1, $2, $3) {
    return $2.length ? {
      children: $2,
      jsxChildren: [].concat(...$2.map((nestedChildren) => nestedChildren[1]))
    } : $skip;
  }), JSXNestedChildren$1 = (0, import_lib2.$TV)((0, import_lib2.$Y)((0, import_lib2.$C)(JSXEOS, (0, import_lib2.$EXPECT)($L37, 'JSXNestedChildren "}"'), JSXClosingElement, JSXClosingFragment)), function($skip, $loc, $0, $1) {
    return { children: [], jsxChildren: [] };
  }), JSXNestedChildren$$ = [JSXNestedChildren$0, JSXNestedChildren$1];
  function JSXNestedChildren(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "JSXNestedChildren", JSXNestedChildren$$);
  }
  var JSXEOS$0 = (0, import_lib2.$P)((0, import_lib2.$S)((0, import_lib2.$E)(NonNewlineWhitespace), EOL));
  function JSXEOS(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "JSXEOS", JSXEOS$0);
  }
  var JSXNested$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(JSXEOS, Indent), function($skip, $loc, $0, $1, $2) {
    var eos = $1, indent = $2;
    let { level } = indent, currentIndent = state.currentIndent;
    return level !== currentIndent.level ? $skip : $0;
  });
  function JSXNested(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "JSXNested", JSXNested$0);
  }
  var JSXChild$0 = JSXChildGeneral, JSXChild$1 = (0, import_lib2.$T)((0, import_lib2.$S)(JSXCodeNestedEnabled, JSXCodeChild), function(value) {
    return value[1];
  }), JSXChild$2 = (0, import_lib2.$T)((0, import_lib2.$S)((0, import_lib2.$N)(JSXCodeNestedEnabled), JSXText), function(value) {
    return value[1];
  }), JSXChild$$ = [JSXChild$0, JSXChild$1, JSXChild$2];
  function JSXChild(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "JSXChild", JSXChild$$);
  }
  var JSXChildForcedCode$0 = JSXChildGeneral, JSXChildForcedCode$1 = JSXCodeChild, JSXChildForcedCode$$ = [JSXChildForcedCode$0, JSXChildForcedCode$1];
  function JSXChildForcedCode(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "JSXChildForcedCode", JSXChildForcedCode$$);
  }
  var JSXChildForcedNoCode$0 = JSXChildGeneral, JSXChildForcedNoCode$1 = JSXText, JSXChildForcedNoCode$$ = [JSXChildForcedNoCode$0, JSXChildForcedNoCode$1];
  function JSXChildForcedNoCode(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "JSXChildForcedNoCode", JSXChildForcedNoCode$$);
  }
  var JSXChildGeneral$0 = JSXElement, JSXChildGeneral$1 = JSXFragment, JSXChildGeneral$2 = JSXComment, JSXChildGeneral$3 = (0, import_lib2.$TS)((0, import_lib2.$S)(OpenBrace, IndentedJSXChildExpression, __, CloseBrace), function($skip, $loc, $0, $1, $2, $3, $4) {
    var expression = $2;
    return {
      type: "JSXChildExpression",
      children: $0,
      expression
    };
  }), JSXChildGeneral$4 = (0, import_lib2.$TS)((0, import_lib2.$S)(OpenBrace, (0, import_lib2.$E)(JSXChildExpression), __, CloseBrace), function($skip, $loc, $0, $1, $2, $3, $4) {
    var expression = $2;
    return {
      type: "JSXChildExpression",
      children: $0,
      expression
    };
  }), JSXChildGeneral$5 = (0, import_lib2.$TS)((0, import_lib2.$S)(InsertInlineOpenBrace, ArrowFunction, InsertCloseBrace), function($skip, $loc, $0, $1, $2, $3) {
    var expression = $2;
    return {
      type: "JSXChildExpression",
      children: $0,
      expression
    };
  }), JSXChildGeneral$6 = JSXAngleChild, JSXChildGeneral$$ = [JSXChildGeneral$0, JSXChildGeneral$1, JSXChildGeneral$2, JSXChildGeneral$3, JSXChildGeneral$4, JSXChildGeneral$5, JSXChildGeneral$6];
  function JSXChildGeneral(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "JSXChildGeneral", JSXChildGeneral$$);
  }
  var JSXComment$0 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$EXPECT)($L234, 'JSXComment "<!--"'), JSXCommentContent, (0, import_lib2.$EXPECT)($L235, 'JSXComment "-->"')), function($skip, $loc, $0, $1, $2, $3) {
    return ["{/*", $2, "*/}"];
  });
  function JSXComment(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "JSXComment", JSXComment$0);
  }
  var JSXCommentContent$0 = (0, import_lib2.$TR)((0, import_lib2.$EXPECT)($R89, "JSXCommentContent /(?:-[^-]|[^-]*)*/"), function($skip, $loc, $0, $1, $2, $3, $4, $5, $6, $7, $8, $9) {
    return { $loc, token: $0.replace(/\*\//g, "* /") };
  });
  function JSXCommentContent(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "JSXCommentContent", JSXCommentContent$0);
  }
  var JSXText$0 = (0, import_lib2.$TR)((0, import_lib2.$EXPECT)($R90, "JSXText /[^{}<>\\r\\n]+/"), function($skip, $loc, $0, $1, $2, $3, $4, $5, $6, $7, $8, $9) {
    return {
      type: "JSXText",
      token: $0,
      $loc
    };
  });
  function JSXText(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "JSXText", JSXText$0);
  }
  var JSXChildExpression$0 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$E)(Whitespace), LexicalDeclaration), function($skip, $loc, $0, $1, $2) {
    var d = $2;
    let names = d.names.concat(
      d.thisAssignments.map((a) => a[1][1])
    );
    return names.sort(), names = names.filter((name, i) => i === 0 || name !== names[i - 1]), d = {
      ...d,
      hoistDec: {
        type: "Declaration",
        children: [
          "let ",
          names.map((n, i) => i === 0 ? [n] : [",", n]).flat()
        ]
      },
      children: d.children.slice(1)
      // drop LetOrConst
    }, d.thisAssignments?.length ? d.children.push(...d.splices, ",", ...d.thisAssignments.map(
      (a, i) => a[a.length - 1] === ";" ? [
        ...a.slice(0, -1),
        i === d.thisAssignments.length - 1 ? "" : ","
      ] : a
    )) : d.splices?.length && d.children.push(...d.splices), d.children.push(",void 0"), d;
  }), JSXChildExpression$1 = (0, import_lib2.$S)((0, import_lib2.$E)(Whitespace), (0, import_lib2.$E)((0, import_lib2.$S)(DotDotDot, (0, import_lib2.$E)(Whitespace))), PostfixedExpression), JSXChildExpression$$ = [JSXChildExpression$0, JSXChildExpression$1];
  function JSXChildExpression(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "JSXChildExpression", JSXChildExpression$$);
  }
  var IndentedJSXChildExpression$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(PushIndent, (0, import_lib2.$E)(NestedJSXChildExpression), PopIndent), function($skip, $loc, $0, $1, $2, $3) {
    return $2 || $skip;
  });
  function IndentedJSXChildExpression(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "IndentedJSXChildExpression", IndentedJSXChildExpression$0);
  }
  var NestedJSXChildExpression$0 = (0, import_lib2.$S)(JSXNested, JSXChildExpression);
  function NestedJSXChildExpression(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "NestedJSXChildExpression", NestedJSXChildExpression$0);
  }
  var JSXAngleChild$0 = (0, import_lib2.$T)((0, import_lib2.$S)(CloseAngleBracket, JSXCodeChild), function(value) {
    return value[1];
  });
  function JSXAngleChild(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "JSXAngleChild", JSXAngleChild$0);
  }
  var JSXCodeChild$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(InsertInlineOpenBrace, JSXCodeChildExpression, InsertCloseBrace), function($skip, $loc, $0, $1, $2, $3) {
    var open = $1, expression = $2, close = $3;
    return expression ? [open, expression, close] : $skip;
  });
  function JSXCodeChild(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "JSXCodeChild", JSXCodeChild$0);
  }
  var JSXCodeChildExpression$0 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$N)(JSXEOS), ForbidNewlineBinaryOp, (0, import_lib2.$E)(JSXChildExpression), RestoreNewlineBinaryOp), function($skip, $loc, $0, $1, $2, $3, $4) {
    var expression = $3;
    return expression || $skip;
  }), JSXCodeChildExpression$1 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$Y)(JSXEOS), ImplicitNestedBlock), function($skip, $loc, $0, $1, $2) {
    var block = $2;
    if (!block) return $skip;
    let statement = {
      type: "DoStatement",
      children: [block],
      block
    };
    return {
      type: "StatementExpression",
      statement,
      children: [statement]
    };
  }), JSXCodeChildExpression$$ = [JSXCodeChildExpression$0, JSXCodeChildExpression$1];
  function JSXCodeChildExpression(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "JSXCodeChildExpression", JSXCodeChildExpression$$);
  }
  var UsingDeclaration$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(Using, (0, import_lib2.$E)(_), UsingBinding, (0, import_lib2.$Q)((0, import_lib2.$S)(__, Comma, __, UsingBinding)), UsingJSModeError), function($skip, $loc, $0, $1, $2, $3, $4, $5) {
    var decl = $1, binding = $3, tail = $4;
    let bindings = [binding].concat(tail.map(([, , , b]) => b));
    return {
      type: "Declaration",
      children: $0,
      names: bindings.flatMap((b) => b.names),
      bindings,
      decl,
      splices: bindings.flatMap((b) => b.splices),
      thisAssignments: bindings.flatMap((b) => b.thisAssignments)
    };
  });
  function UsingDeclaration(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "UsingDeclaration", UsingDeclaration$0);
  }
  var UsingBinding$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(BindingIdentifier, (0, import_lib2.$E)(TypeSuffix), Initializer), function($skip, $loc, $0, $1, $2, $3) {
    var pattern = $1, typeSuffix = $2, initializer = $3;
    return {
      type: "Binding",
      children: $0,
      names: pattern.names,
      pattern,
      typeSuffix,
      initializer,
      splices: [],
      thisAssignments: []
    };
  });
  function UsingBinding(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "UsingBinding", UsingBinding$0);
  }
  var UsingJSModeError$0 = (0, import_lib2.$TV)((0, import_lib2.$EXPECT)($L0, 'UsingJSModeError ""'), function($skip, $loc, $0, $1) {
    return {
      type: "Error",
      js: !0,
      message: "`using` is not currently transpiled in JS mode."
    };
  });
  function UsingJSModeError(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "UsingJSModeError", UsingJSModeError$0);
  }
  var TypeDeclaration$0 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$E)((0, import_lib2.$S)(Export, (0, import_lib2.$E)(_))), (0, import_lib2.$S)(Declare, (0, import_lib2.$E)(_)), TypeLexicalDeclaration), function($skip, $loc, $0, $1, $2, $3) {
    var d = $3;
    return {
      type: "Declaration",
      ts: !0,
      children: $0,
      names: d.names ?? []
    };
  }), TypeDeclaration$1 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$E)((0, import_lib2.$S)(Export, (0, import_lib2.$E)(_))), (0, import_lib2.$E)((0, import_lib2.$S)(Declare, (0, import_lib2.$E)(_))), TypeDeclarationRest), function($skip, $loc, $0, $1, $2, $3) {
    var export_ = $1, declare = $2, t = $3;
    return {
      ...t,
      ts: !0,
      export: export_,
      declare,
      children: [export_, declare, ...t.children]
    };
  }), TypeDeclaration$$ = [TypeDeclaration$0, TypeDeclaration$1];
  function TypeDeclaration(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "TypeDeclaration", TypeDeclaration$$);
  }
  var TypeDeclarationRest$0 = TypeAliasDeclaration, TypeDeclarationRest$1 = InterfaceDeclaration, TypeDeclarationRest$2 = NamespaceDeclaration, TypeDeclarationRest$3 = FunctionSignature, TypeDeclarationRest$$ = [TypeDeclarationRest$0, TypeDeclarationRest$1, TypeDeclarationRest$2, TypeDeclarationRest$3];
  function TypeDeclarationRest(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "TypeDeclarationRest", TypeDeclarationRest$$);
  }
  var TypeAliasDeclaration$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(TypeKeyword, (0, import_lib2.$E)(_), IdentifierName, (0, import_lib2.$E)(TypeParameters), OptionalEquals, (0, import_lib2.$C)(MaybeNestedType, (0, import_lib2.$S)(__, Type))), function($skip, $loc, $0, $1, $2, $3, $4, $5, $6) {
    var id = $3;
    return {
      type: "TypeDeclaration",
      id,
      children: $0,
      ts: !0
    };
  }), TypeAliasDeclaration$1 = (0, import_lib2.$TS)((0, import_lib2.$S)(InsertType, IdentifierName, (0, import_lib2.$E)(TypeParameters), __, TypeAssignment, (0, import_lib2.$C)(MaybeNestedType, (0, import_lib2.$S)(__, Type))), function($skip, $loc, $0, $1, $2, $3, $4, $5, $6) {
    var id = $2;
    return {
      type: "TypeDeclaration",
      id,
      children: $0,
      ts: !0
    };
  }), TypeAliasDeclaration$$ = [TypeAliasDeclaration$0, TypeAliasDeclaration$1];
  function TypeAliasDeclaration(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "TypeAliasDeclaration", TypeAliasDeclaration$$);
  }
  var InterfaceDeclaration$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(Interface, (0, import_lib2.$E)(_), IdentifierName, (0, import_lib2.$E)(TypeParameters), (0, import_lib2.$E)(InterfaceExtendsClause), InterfaceOrEmptyBlock), function($skip, $loc, $0, $1, $2, $3, $4, $5, $6) {
    var id = $3;
    return {
      type: "InterfaceDeclaration",
      id,
      children: $0,
      ts: !0
    };
  });
  function InterfaceDeclaration(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "InterfaceDeclaration", InterfaceDeclaration$0);
  }
  var NamespaceDeclaration$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(Namespace, (0, import_lib2.$E)(_), IdentifierName, ModuleOrEmptyBlock), function($skip, $loc, $0, $1, $2, $3, $4) {
    var id = $3;
    return {
      type: "NamespaceDeclaration",
      id,
      children: $0,
      ts: !0
    };
  });
  function NamespaceDeclaration(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "NamespaceDeclaration", NamespaceDeclaration$0);
  }
  var OptionalEquals$0 = (0, import_lib2.$S)(__, Equals), OptionalEquals$1 = (0, import_lib2.$T)((0, import_lib2.$S)((0, import_lib2.$Y)(IndentedFurther), InsertSpaceEquals), function(value) {
    return value[1];
  }), OptionalEquals$$ = [OptionalEquals$0, OptionalEquals$1];
  function OptionalEquals(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "OptionalEquals", OptionalEquals$$);
  }
  var TypeLexicalDeclaration$0 = TypeLetOrConstDeclaration, TypeLexicalDeclaration$1 = (0, import_lib2.$S)(__, EnumDeclaration), TypeLexicalDeclaration$2 = ClassSignature, TypeLexicalDeclaration$3 = (0, import_lib2.$S)(Namespace, (0, import_lib2.$E)(_), IdentifierName, DeclareBlock), TypeLexicalDeclaration$4 = (0, import_lib2.$S)(Module, _, StringLiteral, (0, import_lib2.$E)(DeclareBlock)), TypeLexicalDeclaration$5 = (0, import_lib2.$S)(Global, (0, import_lib2.$E)(DeclareBlock)), TypeLexicalDeclaration$$ = [TypeLexicalDeclaration$0, TypeLexicalDeclaration$1, TypeLexicalDeclaration$2, TypeLexicalDeclaration$3, TypeLexicalDeclaration$4, TypeLexicalDeclaration$5];
  function TypeLexicalDeclaration(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "TypeLexicalDeclaration", TypeLexicalDeclaration$$);
  }
  var TypeLetOrConstDeclaration$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(__, LetOrConstOrVar, TypeDeclarationBinding, (0, import_lib2.$Q)((0, import_lib2.$S)(CommaDelimiter, __, TypeDeclarationBinding))), function($skip, $loc, $0, $1, $2, $3, $4) {
    var first = $3, rest = $4;
    let names = first.names.concat(...rest.map((b) => b[2].names));
    return {
      type: "TypeLexicalDeclaration",
      children: $0,
      ts: !0,
      names
    };
  });
  function TypeLetOrConstDeclaration(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "TypeLetOrConstDeclaration", TypeLetOrConstDeclaration$0);
  }
  var TypeDeclarationBinding$0 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$C)(BindingPattern, BindingIdentifier), (0, import_lib2.$E)(TypeSuffix)), function($skip, $loc, $0, $1, $2) {
    return {
      type: "TypeDeclarationBinding",
      children: $0,
      names: $1.names
    };
  });
  function TypeDeclarationBinding(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "TypeDeclarationBinding", TypeDeclarationBinding$0);
  }
  var InterfaceExtendsClause$0 = (0, import_lib2.$S)(ExtendsToken, InterfaceExtendsTarget, (0, import_lib2.$Q)((0, import_lib2.$S)(Comma, InterfaceExtendsTarget)));
  function InterfaceExtendsClause(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "InterfaceExtendsClause", InterfaceExtendsClause$0);
  }
  var InterfaceExtendsTarget$0 = ImplementsTarget;
  function InterfaceExtendsTarget(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "InterfaceExtendsTarget", InterfaceExtendsTarget$0);
  }
  var TypeKeyword$0 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$EXPECT)($L236, 'TypeKeyword "type"'), NonIdContinue), function($skip, $loc, $0, $1, $2) {
    return { $loc, token: $1 };
  });
  function TypeKeyword(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "TypeKeyword", TypeKeyword$0);
  }
  var Enum$0 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$EXPECT)($L237, 'Enum "enum"'), NonIdContinue), function($skip, $loc, $0, $1, $2) {
    return { $loc, token: $1 };
  });
  function Enum(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "Enum", Enum$0);
  }
  var Interface$0 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$EXPECT)($L238, 'Interface "interface"'), NonIdContinue), function($skip, $loc, $0, $1, $2) {
    return { $loc, token: $1 };
  });
  function Interface(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "Interface", Interface$0);
  }
  var Global$0 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$EXPECT)($L239, 'Global "global"'), NonIdContinue), function($skip, $loc, $0, $1, $2) {
    return { $loc, token: $1 };
  });
  function Global(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "Global", Global$0);
  }
  var Module$0 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$EXPECT)($L240, 'Module "module"'), NonIdContinue), function($skip, $loc, $0, $1, $2) {
    return { $loc, token: $1 };
  });
  function Module(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "Module", Module$0);
  }
  var Namespace$0 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$EXPECT)($L241, 'Namespace "namespace"'), NonIdContinue), function($skip, $loc, $0, $1, $2) {
    return { $loc, token: $1 };
  });
  function Namespace(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "Namespace", Namespace$0);
  }
  var InterfaceOrEmptyBlock$0 = InterfaceBlock, InterfaceOrEmptyBlock$1 = EmptyBlock, InterfaceOrEmptyBlock$$ = [InterfaceOrEmptyBlock$0, InterfaceOrEmptyBlock$1];
  function InterfaceOrEmptyBlock(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "InterfaceOrEmptyBlock", InterfaceOrEmptyBlock$$);
  }
  var InterfaceBlock$0 = (0, import_lib2.$S)(__, OpenBrace, NestedInterfaceProperties, __, CloseBrace), InterfaceBlock$1 = (0, import_lib2.$S)(__, OpenBrace, (0, import_lib2.$Q)((0, import_lib2.$S)(__, InterfaceProperty)), __, CloseBrace), InterfaceBlock$2 = NestedInterfaceBlock, InterfaceBlock$$ = [InterfaceBlock$0, InterfaceBlock$1, InterfaceBlock$2];
  function InterfaceBlock(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "InterfaceBlock", InterfaceBlock$$);
  }
  var NestedInterfaceBlock$0 = (0, import_lib2.$S)(InsertOpenBrace, NestedInterfaceProperties, InsertNewline, InsertIndent, InsertCloseBrace);
  function NestedInterfaceBlock(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "NestedInterfaceBlock", NestedInterfaceBlock$0);
  }
  var NestedInterfaceProperties$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(PushIndent, (0, import_lib2.$Q)(NestedInterfaceProperty), PopIndent), function($skip, $loc, $0, $1, $2, $3) {
    var props = $2;
    return props.length ? props : $skip;
  });
  function NestedInterfaceProperties(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "NestedInterfaceProperties", NestedInterfaceProperties$0);
  }
  var NestedInterfaceProperty$0 = (0, import_lib2.$S)(Nested, InterfaceProperty);
  function NestedInterfaceProperty(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "NestedInterfaceProperty", NestedInterfaceProperty$0);
  }
  var InterfaceProperty$0 = BasicInterfaceProperty, InterfaceProperty$1 = (0, import_lib2.$S)(NonEmptyParameters, TypeSuffix, InterfacePropertyDelimiter), InterfaceProperty$2 = (0, import_lib2.$S)(MethodSignature, InterfacePropertyDelimiter), InterfaceProperty$$ = [InterfaceProperty$0, InterfaceProperty$1, InterfaceProperty$2];
  function InterfaceProperty(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "InterfaceProperty", InterfaceProperty$$);
  }
  var BasicInterfaceProperty$0 = (0, import_lib2.$S)((0, import_lib2.$C)(TypeIndexSignature, TypeProperty), (0, import_lib2.$E)(_), TypeSuffix, InterfacePropertyDelimiter);
  function BasicInterfaceProperty(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "BasicInterfaceProperty", BasicInterfaceProperty$0);
  }
  var InterfacePropertyDelimiter$0 = (0, import_lib2.$S)((0, import_lib2.$E)(_), (0, import_lib2.$C)(Semicolon, Comma)), InterfacePropertyDelimiter$1 = (0, import_lib2.$Y)((0, import_lib2.$S)(__, CloseBrace)), InterfacePropertyDelimiter$2 = (0, import_lib2.$Y)(EOS), InterfacePropertyDelimiter$$ = [InterfacePropertyDelimiter$0, InterfacePropertyDelimiter$1, InterfacePropertyDelimiter$2];
  function InterfacePropertyDelimiter(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "InterfacePropertyDelimiter", InterfacePropertyDelimiter$$);
  }
  var ModuleOrEmptyBlock$0 = (0, import_lib2.$S)(__, OpenBrace, NestedModuleItems, __, CloseBrace), ModuleOrEmptyBlock$1 = (0, import_lib2.$S)(InsertOpenBrace, NestedModuleItems, InsertNewline, InsertIndent, InsertCloseBrace), ModuleOrEmptyBlock$2 = EmptyBlock, ModuleOrEmptyBlock$$ = [ModuleOrEmptyBlock$0, ModuleOrEmptyBlock$1, ModuleOrEmptyBlock$2];
  function ModuleOrEmptyBlock(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "ModuleOrEmptyBlock", ModuleOrEmptyBlock$$);
  }
  var NestedModuleItems$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(PushIndent, (0, import_lib2.$Q)(NestedModuleItem), PopIndent), function($skip, $loc, $0, $1, $2, $3) {
    var items = $2;
    return items.length ? items : $skip;
  });
  function NestedModuleItems(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "NestedModuleItems", NestedModuleItems$0);
  }
  var NestedModuleItem$0 = (0, import_lib2.$S)(Nested, ModuleItem, StatementDelimiter);
  function NestedModuleItem(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "NestedModuleItem", NestedModuleItem$0);
  }
  var DeclareBlock$0 = (0, import_lib2.$S)(__, OpenBrace, NestedDeclareElements, __, CloseBrace), DeclareBlock$1 = (0, import_lib2.$S)(__, OpenBrace, (0, import_lib2.$Q)((0, import_lib2.$S)(__, DeclareElement, InterfacePropertyDelimiter)), __, CloseBrace), DeclareBlock$2 = (0, import_lib2.$S)(InsertOpenBrace, NestedDeclareElements, InsertNewline, InsertIndent, InsertCloseBrace), DeclareBlock$$ = [DeclareBlock$0, DeclareBlock$1, DeclareBlock$2];
  function DeclareBlock(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "DeclareBlock", DeclareBlock$$);
  }
  var NestedDeclareElements$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(PushIndent, (0, import_lib2.$Q)(NestedDeclareElement), PopIndent), function($skip, $loc, $0, $1, $2, $3) {
    var decs = $2;
    return decs.length ? decs : $skip;
  });
  function NestedDeclareElements(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "NestedDeclareElements", NestedDeclareElements$0);
  }
  var NestedDeclareElement$0 = (0, import_lib2.$S)(Nested, DeclareElement, InterfacePropertyDelimiter);
  function NestedDeclareElement(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "NestedDeclareElement", NestedDeclareElement$0);
  }
  var DeclareElement$0 = (0, import_lib2.$S)((0, import_lib2.$E)(Decorators), Export, __, Default, __, (0, import_lib2.$C)(Identifier, ClassSignature, InterfaceDeclaration)), DeclareElement$1 = (0, import_lib2.$T)((0, import_lib2.$S)((0, import_lib2.$E)(Decorators), (0, import_lib2.$E)((0, import_lib2.$S)(Export, (0, import_lib2.$E)(_))), TypeLexicalDeclaration), function(value) {
    return { ts: !0, children: value };
  }), DeclareElement$2 = (0, import_lib2.$T)((0, import_lib2.$S)((0, import_lib2.$E)((0, import_lib2.$S)(Export, (0, import_lib2.$E)(_))), TypeDeclarationRest), function(value) {
    return { ts: !0, children: value };
  }), DeclareElement$$ = [DeclareElement$0, DeclareElement$1, DeclareElement$2];
  function DeclareElement(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "DeclareElement", DeclareElement$$);
  }
  var EnumDeclaration$0 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$E)((0, import_lib2.$S)(Const, _)), Enum, (0, import_lib2.$E)(_), IdentifierName, EnumBlock), function($skip, $loc, $0, $1, $2, $3, $4, $5) {
    var isConst = $1, id = $4, block = $5;
    let ts2 = {
      ts: !0,
      children: $0
    }, names = new Set(block.properties.map((p) => p.name.name));
    return {
      type: "EnumDeclaration",
      id,
      children: [ts2, {
        js: !0,
        children: [
          ["let ", id, ` = {};
`],
          ...block.properties.map((property, i) => {
            let init, isString;
            if (property.initializer) {
              init = replaceNodes(
                deepCopy(property.initializer),
                (n) => n.type === "Identifier" && names.has(n.name),
                (n) => [id, '["', n.name, '"]']
              );
              let value = init[init.length - 1];
              isString = value.type === "TemplateLiteral" || value.type === "Literal" && value.subtype === "StringLiteral";
            } else
              init = i === 0 ? " = 0" : [" = ", id, '["', block.properties[i - 1].name, '"] + 1'];
            return isString ? [
              id,
              '["',
              property.name,
              '"]',
              init,
              `;
`
            ] : [
              id,
              "[",
              id,
              '["',
              property.name,
              '"]',
              init,
              '] = "',
              property.name,
              `";
`
            ];
          })
        ]
      }]
    };
  });
  function EnumDeclaration(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "EnumDeclaration", EnumDeclaration$0);
  }
  var EnumBlock$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(__, OpenBrace, NestedEnumProperties, __, CloseBrace), function($skip, $loc, $0, $1, $2, $3, $4, $5) {
    var props = $3;
    return {
      properties: props.properties,
      children: $0
    };
  }), EnumBlock$1 = (0, import_lib2.$TS)((0, import_lib2.$S)(__, OpenBrace, (0, import_lib2.$Q)((0, import_lib2.$S)(__, EnumProperty)), __, CloseBrace), function($skip, $loc, $0, $1, $2, $3, $4, $5) {
    var props = $3;
    return {
      properties: props.map((p) => p[1]),
      children: $0
    };
  }), EnumBlock$2 = (0, import_lib2.$TS)((0, import_lib2.$S)(InsertOpenBrace, NestedEnumProperties, InsertNewline, InsertIndent, InsertCloseBrace), function($skip, $loc, $0, $1, $2, $3, $4, $5) {
    var props = $2;
    return {
      properties: props.properties,
      children: $0
    };
  }), EnumBlock$$ = [EnumBlock$0, EnumBlock$1, EnumBlock$2];
  function EnumBlock(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "EnumBlock", EnumBlock$$);
  }
  var NestedEnumProperties$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(PushIndent, (0, import_lib2.$Q)(NestedEnumPropertyLine), PopIndent), function($skip, $loc, $0, $1, $2, $3) {
    var props = $2;
    return props.length ? {
      properties: props.flat().map((p) => p.property),
      children: $0
    } : $skip;
  });
  function NestedEnumProperties(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "NestedEnumProperties", NestedEnumProperties$0);
  }
  var NestedEnumPropertyLine$0 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$S)(Nested, EnumProperty), (0, import_lib2.$Q)((0, import_lib2.$S)((0, import_lib2.$E)(_), EnumProperty))), function($skip, $loc, $0, $1, $2) {
    return [$1, ...$2].map((pair) => ({
      property: pair[1],
      children: pair
    }));
  });
  function NestedEnumPropertyLine(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "NestedEnumPropertyLine", NestedEnumPropertyLine$0);
  }
  var EnumProperty$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(Identifier, (0, import_lib2.$E)((0, import_lib2.$S)(__, Equals, MaybeNestedExpression)), ObjectPropertyDelimiter), function($skip, $loc, $0, $1, $2, $3) {
    var name = $1, initializer = $2;
    return {
      type: "EnumProperty",
      name,
      initializer,
      children: $0
    };
  });
  function EnumProperty(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "EnumProperty", EnumProperty$0);
  }
  var TypeProperty$0 = (0, import_lib2.$S)((0, import_lib2.$E)((0, import_lib2.$S)(Readonly, NotDedented)), PropertyName);
  function TypeProperty(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "TypeProperty", TypeProperty$0);
  }
  var TypeIndexSignature$0 = (0, import_lib2.$S)((0, import_lib2.$E)((0, import_lib2.$S)((0, import_lib2.$R$0)((0, import_lib2.$EXPECT)($R91, "TypeIndexSignature /[+-]?/")), Readonly, NotDedented)), OpenBracket, TypeIndex, CloseBracket, (0, import_lib2.$E)((0, import_lib2.$S)(__, (0, import_lib2.$R$0)((0, import_lib2.$EXPECT)($R14, "TypeIndexSignature /[+-]/")), (0, import_lib2.$Y)((0, import_lib2.$S)((0, import_lib2.$E)(_), QuestionMark)))));
  function TypeIndexSignature(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "TypeIndexSignature", TypeIndexSignature$0);
  }
  var TypeIndex$0 = (0, import_lib2.$S)(__, Identifier, TypeSuffix), TypeIndex$1 = (0, import_lib2.$S)(__, PropertyName, __, In, Type, (0, import_lib2.$E)((0, import_lib2.$S)(__, As, Type))), TypeIndex$$ = [TypeIndex$0, TypeIndex$1];
  function TypeIndex(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "TypeIndex", TypeIndex$$);
  }
  var TypeSuffix$0 = (0, import_lib2.$T)((0, import_lib2.$S)((0, import_lib2.$E)(_), (0, import_lib2.$E)(QuestionMark), (0, import_lib2.$E)(_), Colon, MaybeNestedType), function(value) {
    var optional = value[1], colon = value[3], t = value[4];
    return { type: "TypeSuffix", ts: !0, optional, t, colon, children: value };
  }), TypeSuffix$1 = (0, import_lib2.$T)((0, import_lib2.$S)((0, import_lib2.$E)(_), QuestionMark, (0, import_lib2.$E)(_)), function(value) {
    var optional = value[1];
    return { type: "TypeSuffix", ts: !0, optional, colon: void 0, children: value };
  }), TypeSuffix$2 = (0, import_lib2.$TS)((0, import_lib2.$S)(NonNullAssertion, (0, import_lib2.$E)(_), (0, import_lib2.$E)((0, import_lib2.$S)(Colon, MaybeNestedType))), function($skip, $loc, $0, $1, $2, $3) {
    var nonnull = $1, ct = $3;
    let [colon, t] = ct ?? [];
    return {
      type: "TypeSuffix",
      ts: !0,
      nonnull,
      t,
      colon,
      children: [$1, $2, colon, t]
    };
  }), TypeSuffix$$ = [TypeSuffix$0, TypeSuffix$1, TypeSuffix$2];
  function TypeSuffix(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "TypeSuffix", TypeSuffix$$);
  }
  var MaybeNestedType$0 = NestedTypeBulletedTuple, MaybeNestedType$1 = NestedInterfaceBlock, MaybeNestedType$2 = NestedTypeBinaryChain, MaybeNestedType$3 = (0, import_lib2.$TS)((0, import_lib2.$S)(PushIndent, (0, import_lib2.$E)((0, import_lib2.$S)(Nested, Type)), PopIndent), function($skip, $loc, $0, $1, $2, $3) {
    return $2 || $skip;
  }), MaybeNestedType$4 = Type, MaybeNestedType$$ = [MaybeNestedType$0, MaybeNestedType$1, MaybeNestedType$2, MaybeNestedType$3, MaybeNestedType$4];
  function MaybeNestedType(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "MaybeNestedType", MaybeNestedType$$);
  }
  var MaybeNestedTypePrimary$0 = NestedTypeBulletedTuple, MaybeNestedTypePrimary$1 = NestedInterfaceBlock, MaybeNestedTypePrimary$2 = NestedTypeBinaryChain, MaybeNestedTypePrimary$3 = (0, import_lib2.$TS)((0, import_lib2.$S)(PushIndent, (0, import_lib2.$E)((0, import_lib2.$S)(Nested, Type)), PopIndent), function($skip, $loc, $0, $1, $2, $3) {
    return $2 || $skip;
  }), MaybeNestedTypePrimary$4 = TypePrimary, MaybeNestedTypePrimary$$ = [MaybeNestedTypePrimary$0, MaybeNestedTypePrimary$1, MaybeNestedTypePrimary$2, MaybeNestedTypePrimary$3, MaybeNestedTypePrimary$4];
  function MaybeNestedTypePrimary(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "MaybeNestedTypePrimary", MaybeNestedTypePrimary$$);
  }
  var MaybeNestedTypeUnary$0 = NestedTypeBulletedTuple, MaybeNestedTypeUnary$1 = NestedInterfaceBlock, MaybeNestedTypeUnary$2 = NestedTypeBinaryChain, MaybeNestedTypeUnary$3 = (0, import_lib2.$TS)((0, import_lib2.$S)(PushIndent, (0, import_lib2.$E)((0, import_lib2.$S)(Nested, Type)), PopIndent), function($skip, $loc, $0, $1, $2, $3) {
    return $2 || $skip;
  }), MaybeNestedTypeUnary$4 = (0, import_lib2.$S)(NotDedented, TypeUnary), MaybeNestedTypeUnary$$ = [MaybeNestedTypeUnary$0, MaybeNestedTypeUnary$1, MaybeNestedTypeUnary$2, MaybeNestedTypeUnary$3, MaybeNestedTypeUnary$4];
  function MaybeNestedTypeUnary(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "MaybeNestedTypeUnary", MaybeNestedTypeUnary$$);
  }
  var ReturnTypeSuffix$0 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$E)(_), (0, import_lib2.$E)(QuestionMark), (0, import_lib2.$E)(_), Colon, ReturnType), function($skip, $loc, $0, $1, $2, $3, $4, $5) {
    var optional = $2, t = $5;
    return {
      ...t,
      optional,
      children: [$1, optional, $3, $4, ...t.children]
    };
  });
  function ReturnTypeSuffix(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "ReturnTypeSuffix", ReturnTypeSuffix$0);
  }
  var ReturnType$0 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$E)((0, import_lib2.$S)(__, (0, import_lib2.$EXPECT)($L242, 'ReturnType "asserts"'), NonIdContinue)), ForbidIndentedApplication, (0, import_lib2.$E)(TypePredicate), RestoreIndentedApplication), function($skip, $loc, $0, $1, $2, $3, $4) {
    var asserts = $1, t = $3;
    return t ? (asserts && (t = {
      type: "TypeAsserts",
      t,
      children: [asserts[0], asserts[1], t],
      ts: !0
    }), {
      type: "ReturnTypeAnnotation",
      children: [t],
      t,
      ts: !0
    }) : $skip;
  });
  function ReturnType(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "ReturnType", ReturnType$0);
  }
  var TypePredicate$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(MaybeNestedType, (0, import_lib2.$E)((0, import_lib2.$S)(__, Is, Type))), function($skip, $loc, $0, $1, $2) {
    var lhs = $1, rhs = $2;
    return rhs ? {
      type: "TypePredicate",
      lhs,
      rhs: rhs[3],
      children: [lhs, ...rhs]
    } : lhs;
  });
  function TypePredicate(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "TypePredicate", TypePredicate$0);
  }
  var Type$0 = TypeWithPostfix;
  function Type(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "Type", Type$0);
  }
  var TypeBinary$0 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$E)((0, import_lib2.$S)(NotDedented, TypeBinaryOp, __)), TypeUnary, (0, import_lib2.$Q)((0, import_lib2.$S)(NotDedented, TypeBinaryOp, MaybeNestedTypeUnary))), function($skip, $loc, $0, $1, $2, $3) {
    var optionalPrefix = $1, t = $2, ops = $3;
    return !ops.length && !optionalPrefix ? t : ops.length ? optionalPrefix ? [optionalPrefix, t, ops] : [t, ...ops] : [optionalPrefix, t];
  });
  function TypeBinary(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "TypeBinary", TypeBinary$0);
  }
  var NestedTypeBinaryChain$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(PushIndent, (0, import_lib2.$Q)(NestedTypeBinary), PopIndent), function($skip, $loc, $0, $1, $2, $3) {
    return $2.length ? $2 : $skip;
  });
  function NestedTypeBinaryChain(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "NestedTypeBinaryChain", NestedTypeBinaryChain$0);
  }
  var NestedTypeBinary$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(Nested, TypeBinaryOp, PushExtraIndent1, (0, import_lib2.$E)(TypeUnary), PopIndent), function($skip, $loc, $0, $1, $2, $3, $4, $5) {
    var indent = $1, op = $2, t = $4;
    return t ? [indent, op, t] : $skip;
  });
  function NestedTypeBinary(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "NestedTypeBinary", NestedTypeBinary$0);
  }
  var TypeUnary$0 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$Q)((0, import_lib2.$S)(__, TypeUnaryOp)), TypePrimary, (0, import_lib2.$Q)(TypeUnarySuffix)), function($skip, $loc, $0, $1, $2, $3) {
    var prefix = $1, t = $2, suffix = $3;
    return !prefix.length && !suffix.length ? t : {
      type: "TypeUnary",
      prefix,
      suffix,
      t,
      // omit empty prefix for trimming space
      children: prefix.length ? $0 : [t, suffix]
    };
  });
  function TypeUnary(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "TypeUnary", TypeUnary$0);
  }
  var TypeUnarySuffix$0 = TypeIndexedAccess, TypeUnarySuffix$1 = QuestionMark, TypeUnarySuffix$2 = NonNullAssertion, TypeUnarySuffix$$ = [TypeUnarySuffix$0, TypeUnarySuffix$1, TypeUnarySuffix$2];
  function TypeUnarySuffix(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "TypeUnarySuffix", TypeUnarySuffix$$);
  }
  var TypeUnaryOp$0 = (0, import_lib2.$S)((0, import_lib2.$EXPECT)($L243, 'TypeUnaryOp "keyof"'), NonIdContinue), TypeUnaryOp$1 = (0, import_lib2.$S)((0, import_lib2.$EXPECT)($L204, 'TypeUnaryOp "readonly"'), NonIdContinue), TypeUnaryOp$$ = [TypeUnaryOp$0, TypeUnaryOp$1];
  function TypeUnaryOp(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "TypeUnaryOp", TypeUnaryOp$$);
  }
  var TypeIndexedAccess$0 = (0, import_lib2.$S)(OpenBracket, (0, import_lib2.$E)(Type), __, CloseBracket), TypeIndexedAccess$1 = (0, import_lib2.$TS)((0, import_lib2.$S)(Dot, (0, import_lib2.$C)(TemplateLiteral, StringLiteral, IntegerLiteral)), function($skip, $loc, $0, $1, $2) {
    var dot = $1, literal = $2;
    return [
      { ...dot, token: "[" },
      literal,
      "]"
    ];
  }), TypeIndexedAccess$2 = (0, import_lib2.$TS)((0, import_lib2.$S)(CoffeePrototypeEnabled, DoubleColon, (0, import_lib2.$E)((0, import_lib2.$C)(IdentifierName, LengthShorthand))), function($skip, $loc, $0, $1, $2, $3) {
    var p = $2, id = $3;
    return [
      { ...p, token: '["' },
      id,
      '"]'
    ];
  }), TypeIndexedAccess$$ = [TypeIndexedAccess$0, TypeIndexedAccess$1, TypeIndexedAccess$2];
  function TypeIndexedAccess(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "TypeIndexedAccess", TypeIndexedAccess$$);
  }
  var UnknownAlias$0 = (0, import_lib2.$TV)((0, import_lib2.$EXPECT)($L244, 'UnknownAlias "???"'), function($skip, $loc, $0, $1) {
    return { $loc, token: "unknown" };
  });
  function UnknownAlias(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "UnknownAlias", UnknownAlias$0);
  }
  var TypePrimary$0 = (0, import_lib2.$S)((0, import_lib2.$E)(_), Infer, (0, import_lib2.$E)(_), IdentifierName, (0, import_lib2.$E)((0, import_lib2.$S)(NotDedented, ExtendsToken, Type))), TypePrimary$1 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$E)(_), Typeof, (0, import_lib2.$E)(_), UnaryExpression), function($skip, $loc, $0, $1, $2, $3, $4) {
    var expression = $4;
    return {
      type: "TypeTypeof",
      children: $0,
      expression
    };
  }), TypePrimary$2 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$E)(_), TypeTuple), function($skip, $loc, $0, $1, $2) {
    return prepend($1, $2);
  }), TypePrimary$3 = InterfaceBlock, TypePrimary$4 = (0, import_lib2.$S)((0, import_lib2.$E)(_), TypeFunction), TypePrimary$5 = (0, import_lib2.$S)((0, import_lib2.$E)(_), InlineInterfaceLiteral), TypePrimary$6 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$E)(_), ImportType), function($skip, $loc, $0, $1, $2) {
    var t = $2;
    return {
      type: "ImportType",
      t,
      children: $0
    };
  }), TypePrimary$7 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$E)(_), TypeLiteral), function($skip, $loc, $0, $1, $2) {
    var t = $2;
    return {
      type: "TypeLiteral",
      t,
      children: $0
    };
  }), TypePrimary$8 = TypeIdentifier, TypePrimary$9 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$E)(_), OpenParen, AllowAll, (0, import_lib2.$E)((0, import_lib2.$C)(MaybeNestedType, (0, import_lib2.$S)(EOS, Type))), RestoreAll, __, CloseParen), function($skip, $loc, $0, $1, $2, $3, $4, $5, $6, $7) {
    return $4 ? {
      type: "TypeParenthesized",
      children: [$1, $2, $4, $6, $7]
      // omit AllowAll/RestoreAll
    } : $skip;
  }), TypePrimary$$ = [TypePrimary$0, TypePrimary$1, TypePrimary$2, TypePrimary$3, TypePrimary$4, TypePrimary$5, TypePrimary$6, TypePrimary$7, TypePrimary$8, TypePrimary$9];
  function TypePrimary(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "TypePrimary", TypePrimary$$);
  }
  var TypeIdentifier$0 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$E)(_), UnknownAlias), function($skip, $loc, $0, $1, $2) {
    return {
      type: "TypeIdentifier",
      children: $0,
      raw: $2.token,
      args: void 0
    };
  }), TypeIdentifier$1 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$E)(_), Identifier, (0, import_lib2.$Q)((0, import_lib2.$S)(Dot, IdentifierName)), (0, import_lib2.$E)((0, import_lib2.$C)(TypeArguments, ImplicitTypeArguments))), function($skip, $loc, $0, $1, $2, $3, $4) {
    var args = $4;
    return {
      type: "TypeIdentifier",
      children: $0,
      raw: [$2.name, ...$3.map(([dot, id]) => dot.token + id.name)].join(""),
      args
    };
  }), TypeIdentifier$2 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$E)(_), BasicThisLiteral), function($skip, $loc, $0, $1, $2) {
    return {
      type: "TypeIdentifier",
      children: $0,
      raw: $2.name
    };
  }), TypeIdentifier$$ = [TypeIdentifier$0, TypeIdentifier$1, TypeIdentifier$2];
  function TypeIdentifier(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "TypeIdentifier", TypeIdentifier$$);
  }
  var ImportType$0 = (0, import_lib2.$S)((0, import_lib2.$EXPECT)($L15, 'ImportType "import"'), OpenParen, __, StringLiteral, __, CloseParen, (0, import_lib2.$E)((0, import_lib2.$S)(Dot, IdentifierName)), (0, import_lib2.$E)(TypeArguments)), ImportType$1 = (0, import_lib2.$S)((0, import_lib2.$EXPECT)($L15, 'ImportType "import"'), InsertOpenParen, (0, import_lib2.$E)(Trimmed_), StringLiteral, InsertCloseParen), ImportType$$ = [ImportType$0, ImportType$1];
  function ImportType(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "ImportType", ImportType$$);
  }
  var TypeTuple$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(OpenBracket, AllowAll, (0, import_lib2.$E)(TypeTupleContent), RestoreAll, __, CloseBracket), function($skip, $loc, $0, $1, $2, $3, $4, $5, $6) {
    var open = $1, elements = $3, ws = $5, close = $6;
    return elements ? {
      type: "TypeTuple",
      elements,
      children: [open, elements, ws, close]
    } : $skip;
  });
  function TypeTuple(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "TypeTuple", TypeTuple$0);
  }
  var TypeTupleContent$0 = (0, import_lib2.$S)(NestedTypeElementList, (0, import_lib2.$Y)((0, import_lib2.$S)(__, CloseBracket))), TypeTupleContent$1 = (0, import_lib2.$TS)((0, import_lib2.$S)(TypeElementListWithIndentedApplicationForbidden, ArrayElementDelimiter, (0, import_lib2.$E)(NestedTypeElementList), (0, import_lib2.$Y)((0, import_lib2.$S)(__, CloseBracket))), function($skip, $loc, $0, $1, $2, $3, $4) {
    var list = $1, delimiter = $2, nested = $3;
    return nested ? [...list, delimiter, ...nested] : list;
  }), TypeTupleContent$2 = (0, import_lib2.$TV)((0, import_lib2.$Q)((0, import_lib2.$S)(__, TypeElementListWithIndentedApplicationForbidden, ArrayElementDelimiter)), function($skip, $loc, $0, $1) {
    return $1.flat();
  }), TypeTupleContent$$ = [TypeTupleContent$0, TypeTupleContent$1, TypeTupleContent$2];
  function TypeTupleContent(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "TypeTupleContent", TypeTupleContent$$);
  }
  var TypeElementListWithIndentedApplicationForbidden$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(ForbidIndentedApplication, (0, import_lib2.$E)(TypeElementList), RestoreIndentedApplication), function($skip, $loc, $0, $1, $2, $3) {
    return $2 || $skip;
  });
  function TypeElementListWithIndentedApplicationForbidden(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "TypeElementListWithIndentedApplicationForbidden", TypeElementListWithIndentedApplicationForbidden$0);
  }
  var TypeElementList$0 = (0, import_lib2.$T)((0, import_lib2.$S)(TypeBulletedTuple), function(value) {
    return [value[0]];
  }), TypeElementList$1 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$N)(EOS), TypeElement, (0, import_lib2.$Q)((0, import_lib2.$S)((0, import_lib2.$S)((0, import_lib2.$E)(_), Comma, (0, import_lib2.$N)(EOS)), TypeElement))), function($skip, $loc, $0, $1, $2, $3) {
    var first = $2, rest = $3;
    return rest.length ? [
      append(first, rest[0][0])
    ].concat(
      rest.map(([_2, e], i) => append(e, rest[i + 1]?.[0]))
    ) : [first];
  }), TypeElementList$$ = [TypeElementList$0, TypeElementList$1];
  function TypeElementList(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "TypeElementList", TypeElementList$$);
  }
  var TypeElement$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(__, (0, import_lib2.$E)((0, import_lib2.$S)(DotDotDot, __)), IdentifierName, (0, import_lib2.$E)((0, import_lib2.$S)((0, import_lib2.$E)(_), DotDotDot)), (0, import_lib2.$S)(__, (0, import_lib2.$E)((0, import_lib2.$S)(QuestionMark, (0, import_lib2.$E)(_))), Colon, __), Type), function($skip, $loc, $0, $1, $2, $3, $4, $5, $6) {
    var ws = $1, dots1 = $2, name = $3, dots2 = $4, colon = $5, type = $6;
    let dots = dots1 || dots2 && [dots2[1], dots2[0]];
    return dots1 && dots2 && (dots = [dots, {
      type: "Error",
      message: "... both before and after identifier"
    }]), {
      type: "TypeElement",
      name,
      t: type,
      children: [ws, dots, name, colon, type]
    };
  }), TypeElement$1 = (0, import_lib2.$S)(__, DotDotDot, __, Type), TypeElement$2 = (0, import_lib2.$TS)((0, import_lib2.$S)(Type, (0, import_lib2.$E)((0, import_lib2.$S)((0, import_lib2.$E)(_), DotDotDot))), function($skip, $loc, $0, $1, $2) {
    var type = $1, spaceDots = $2;
    if (spaceDots) {
      let [space, dots] = spaceDots;
      spaceDots = [getTrimmingSpace(type), dots, space], type = trimFirstSpace(type);
    }
    return {
      type: "TypeElement",
      t: type,
      children: [spaceDots, type]
    };
  }), TypeElement$$ = [TypeElement$0, TypeElement$1, TypeElement$2];
  function TypeElement(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "TypeElement", TypeElement$$);
  }
  var NestedTypeElementList$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(PushIndent, (0, import_lib2.$Q)(NestedTypeElement), PopIndent), function($skip, $loc, $0, $1, $2, $3) {
    var types = $2;
    return types.length ? types : $skip;
  });
  function NestedTypeElementList(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "NestedTypeElementList", NestedTypeElementList$0);
  }
  var NestedTypeElement$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(Nested, TypeElementList, ArrayElementDelimiter), function($skip, $loc, $0, $1, $2, $3) {
    var indent = $1, list = $2, delimiter = $3;
    let { length } = list;
    return length ? list.map((e, i) => (i === 0 && (e = prepend(indent, e)), i === length - 1 && (e = append(e, delimiter)), e)) : $skip;
  });
  function NestedTypeElement(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "NestedTypeElement", NestedTypeElement$0);
  }
  var NestedTypeBulletedTuple$0 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$S)(InsertSpace, InsertOpenBracket), PushIndent, (0, import_lib2.$Q)(NestedTypeBullet), InsertCloseBracket, PopIndent), function($skip, $loc, $0, $1, $2, $3, $4, $5) {
    var open = $1, content = $3, close = $4;
    if (!content.length) return $skip;
    content = content.flat();
    let last = content[content.length - 1], children = Array.isArray(last) ? last : last?.children;
    return children?.at(-1).implicit && (children = children.slice(0, -1), Array.isArray(last) ? content[content.length - 1] = children : content[content.length - 1] = { ...last, children }), {
      type: "TypeTuple",
      children: [...open, ...content, close]
    };
  });
  function NestedTypeBulletedTuple(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "NestedTypeBulletedTuple", NestedTypeBulletedTuple$0);
  }
  var TypeBulletedTuple$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(InsertOpenBracket, (0, import_lib2.$E)((0, import_lib2.$S)(TypeBullet, (0, import_lib2.$Q)(NestedTypeBullet))), InsertCloseBracket), function($skip, $loc, $0, $1, $2, $3) {
    var open = $1, content = $2, close = $3;
    if (!content) return $skip;
    content = [
      ...trimFirstSpace(content[0]),
      // replace first space with bracket
      ...content[1].flat()
    ];
    let last = content[content.length - 1], children = Array.isArray(last) ? last : last?.children;
    return children?.at(-1).implicit && (children = children.slice(0, -1), Array.isArray(last) ? content[content.length - 1] = children : content[content.length - 1] = { ...last, children }), {
      type: "TypeTuple",
      children: [open, ...content, close]
    };
  });
  function TypeBulletedTuple(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "TypeBulletedTuple", TypeBulletedTuple$0);
  }
  var NestedTypeBullet$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(Nested, TypeBullet), function($skip, $loc, $0, $1, $2) {
    var indent = $1, list = $2;
    return list.map((e, i) => i === 0 ? prepend(indent, e) : e);
  });
  function NestedTypeBullet(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "NestedTypeBullet", NestedTypeBullet$0);
  }
  var TypeBullet$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(BulletIndent, (0, import_lib2.$E)((0, import_lib2.$S)(TypeElementList, ArrayBulletDelimiter)), PopIndent), function($skip, $loc, $0, $1, $2, $3) {
    var bullet = $1, content = $2;
    if (!content) return $skip;
    let [list, delimiter] = content;
    if (!list.length) return $skip;
    if (list = list.slice(), list[0] = prepend(bullet, list[0]), delimiter) {
      let last = list.length - 1;
      list[last] = append(list[last], delimiter);
    }
    return list;
  });
  function TypeBullet(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "TypeBullet", TypeBullet$0);
  }
  var TypeWithPostfix$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(TypeConditional, (0, import_lib2.$E)((0, import_lib2.$S)((0, import_lib2.$E)(_), TypeIfClause))), function($skip, $loc, $0, $1, $2) {
    var t = $1, postfix = $2;
    return postfix ? prepend(
      postfix[0],
      expressionizeTypeIf([...postfix[1], $1, void 0])
    ) : t;
  });
  function TypeWithPostfix(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "TypeWithPostfix", TypeWithPostfix$0);
  }
  var TypeConditional$0 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$E)(_), (0, import_lib2.$EXPECT)($R92, "TypeConditional /(?=if|unless)/"), TypeIfThenElse), function($skip, $loc, $0, $1, $2, $3) {
    return prepend($1, expressionizeTypeIf($3));
  }), TypeConditional$1 = (0, import_lib2.$TS)((0, import_lib2.$S)(TypeCondition, NotDedented, QuestionMark, __, Type, __, Colon, __, Type), function($skip, $loc, $0, $1, $2, $3, $4, $5, $6, $7, $8, $9) {
    return $1.negated ? [$1, $2, $3, $4, $9, $6, $7, $8, $5] : $0;
  }), TypeConditional$2 = TypeBinary, TypeConditional$$ = [TypeConditional$0, TypeConditional$1, TypeConditional$2];
  function TypeConditional(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "TypeConditional", TypeConditional$$);
  }
  var TypeCondition$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(TypeBinary, (0, import_lib2.$E)(IndentedFurther), (0, import_lib2.$C)(ExtendsToken, NotExtendsToken), TypeConditional), function($skip, $loc, $0, $1, $2, $3, $4) {
    return {
      type: "TypeCondition",
      negated: $3.negated,
      children: $0
    };
  });
  function TypeCondition(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "TypeCondition", TypeCondition$0);
  }
  var TypeIfThenElse$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(TypeIfClause, TypeBlock, (0, import_lib2.$E)(TypeElse)), function($skip, $loc, $0, $1, $2, $3) {
    return [...$1, $2, $3];
  });
  function TypeIfThenElse(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "TypeIfThenElse", TypeIfThenElse$0);
  }
  var TypeIfClause$0 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$C)(If, Unless), OpenParen, AllowAll, (0, import_lib2.$E)(TypeCondition), RestoreAll, CloseParen), function($skip, $loc, $0, $1, $2, $3, $4, $5, $6) {
    var condition = $4;
    return condition ? [$1, condition] : $skip;
  }), TypeIfClause$1 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$C)(If, Unless), ForbidIndentedApplication, (0, import_lib2.$E)(TypeCondition), RestoreIndentedApplication), function($skip, $loc, $0, $1, $2, $3, $4) {
    var condition = $3;
    return condition ? [$1, condition] : $skip;
  }), TypeIfClause$$ = [TypeIfClause$0, TypeIfClause$1];
  function TypeIfClause(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "TypeIfClause", TypeIfClause$$);
  }
  var TypeElse$0 = (0, import_lib2.$S)(NotDedented, Else, TypeBlock);
  function TypeElse(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "TypeElse", TypeElse$0);
  }
  var TypeBlock$0 = (0, import_lib2.$T)((0, import_lib2.$S)(Then, Type), function(value) {
    return value[1];
  }), TypeBlock$1 = (0, import_lib2.$T)((0, import_lib2.$S)((0, import_lib2.$N)(EOS), Type), function(value) {
    return value[1];
  }), TypeBlock$2 = NestedInterfaceBlock, TypeBlock$3 = (0, import_lib2.$TS)((0, import_lib2.$S)(PushIndent, (0, import_lib2.$E)((0, import_lib2.$S)(Nested, Type)), PopIndent), function($skip, $loc, $0, $1, $2, $3) {
    return $2 || $skip;
  }), TypeBlock$$ = [TypeBlock$0, TypeBlock$1, TypeBlock$2, TypeBlock$3];
  function TypeBlock(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "TypeBlock", TypeBlock$$);
  }
  var TypeTemplateSubstitution$0 = (0, import_lib2.$S)(SubstitutionStart, Type, __, CloseBrace);
  function TypeTemplateSubstitution(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "TypeTemplateSubstitution", TypeTemplateSubstitution$0);
  }
  var TypeTemplateLiteral$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(Backtick, (0, import_lib2.$Q)((0, import_lib2.$C)(TemplateCharacters, TypeTemplateSubstitution)), Backtick), function($skip, $loc, $0, $1, $2, $3) {
    return {
      type: "TemplateLiteral",
      children: $0
    };
  }), TypeTemplateLiteral$1 = CoffeeInterpolatedDoubleQuotedTypeLiteral, TypeTemplateLiteral$$ = [TypeTemplateLiteral$0, TypeTemplateLiteral$1];
  function TypeTemplateLiteral(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "TypeTemplateLiteral", TypeTemplateLiteral$$);
  }
  var CoffeeStringTypeSubstitution$0 = (0, import_lib2.$S)(CoffeeSubstitutionStart, Type, __, CloseBrace);
  function CoffeeStringTypeSubstitution(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "CoffeeStringTypeSubstitution", CoffeeStringTypeSubstitution$0);
  }
  var CoffeeInterpolatedDoubleQuotedTypeLiteral$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(CoffeeInterpolationEnabled, DoubleQuote, (0, import_lib2.$Q)((0, import_lib2.$C)(CoffeeDoubleQuotedStringCharacters, CoffeeStringTypeSubstitution)), DoubleQuote), function($skip, $loc, $0, $1, $2, $3, $4) {
    var s = $2, parts = $3, e = $4;
    return processCoffeeInterpolation(s, parts, e, $loc);
  });
  function CoffeeInterpolatedDoubleQuotedTypeLiteral(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "CoffeeInterpolatedDoubleQuotedTypeLiteral", CoffeeInterpolatedDoubleQuotedTypeLiteral$0);
  }
  var TypeLiteral$0 = TypeTemplateLiteral, TypeLiteral$1 = Literal, TypeLiteral$2 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$EXPECT)($R14, "TypeLiteral /[+-]/"), NumericLiteral), function($skip, $loc, $0, $1, $2) {
    var sign = $1, num = $2;
    return sign[0] === "+" ? num : $0;
  }), TypeLiteral$3 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$EXPECT)($L226, 'TypeLiteral "void"'), NonIdContinue), function($skip, $loc, $0, $1, $2) {
    return { type: "VoidType", $loc, token: $1 };
  }), TypeLiteral$4 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$EXPECT)($L245, 'TypeLiteral "unique"'), _, (0, import_lib2.$EXPECT)($L246, 'TypeLiteral "symbol"'), NonIdContinue), function($skip, $loc, $0, $1, $2, $3, $4) {
    return { type: "UniqueSymbolType", children: $0 };
  }), TypeLiteral$5 = (0, import_lib2.$TV)((0, import_lib2.$EXPECT)($L247, 'TypeLiteral "[]"'), function($skip, $loc, $0, $1) {
    return { $loc, token: "[]" };
  }), TypeLiteral$$ = [TypeLiteral$0, TypeLiteral$1, TypeLiteral$2, TypeLiteral$3, TypeLiteral$4, TypeLiteral$5];
  function TypeLiteral(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "TypeLiteral", TypeLiteral$$);
  }
  var InlineInterfaceLiteral$0 = (0, import_lib2.$S)(InsertInlineOpenBrace, InlineBasicInterfaceProperty, (0, import_lib2.$Q)((0, import_lib2.$S)(SameLineOrIndentedFurther, InlineBasicInterfaceProperty)), InsertCloseBrace);
  function InlineInterfaceLiteral(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "InlineInterfaceLiteral", InlineInterfaceLiteral$0);
  }
  var InlineBasicInterfaceProperty$0 = (0, import_lib2.$S)((0, import_lib2.$C)(TypeIndexSignature, TypeProperty), (0, import_lib2.$E)(QuestionMark), Colon, Type, InlineInterfacePropertyDelimiter);
  function InlineBasicInterfaceProperty(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "InlineBasicInterfaceProperty", InlineBasicInterfaceProperty$0);
  }
  var InlineInterfacePropertyDelimiter$0 = (0, import_lib2.$C)((0, import_lib2.$S)((0, import_lib2.$E)(_), Semicolon), CommaDelimiter), InlineInterfacePropertyDelimiter$1 = (0, import_lib2.$T)((0, import_lib2.$S)((0, import_lib2.$Y)((0, import_lib2.$S)(SameLineOrIndentedFurther, InlineBasicInterfaceProperty)), InsertComma), function(value) {
    return value[1];
  }), InlineInterfacePropertyDelimiter$2 = (0, import_lib2.$Y)((0, import_lib2.$S)(__, (0, import_lib2.$C)((0, import_lib2.$EXPECT)($L16, 'InlineInterfacePropertyDelimiter ":"'), (0, import_lib2.$EXPECT)($L143, 'InlineInterfacePropertyDelimiter ")"'), (0, import_lib2.$EXPECT)($L46, 'InlineInterfacePropertyDelimiter "]"'), (0, import_lib2.$EXPECT)($L37, 'InlineInterfacePropertyDelimiter "}"')))), InlineInterfacePropertyDelimiter$3 = (0, import_lib2.$Y)(EOS), InlineInterfacePropertyDelimiter$$ = [InlineInterfacePropertyDelimiter$0, InlineInterfacePropertyDelimiter$1, InlineInterfacePropertyDelimiter$2, InlineInterfacePropertyDelimiter$3];
  function InlineInterfacePropertyDelimiter(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "InlineInterfacePropertyDelimiter", InlineInterfacePropertyDelimiter$$);
  }
  var TypeBinaryOp$0 = (0, import_lib2.$TV)((0, import_lib2.$EXPECT)($L118, 'TypeBinaryOp "|"'), function($skip, $loc, $0, $1) {
    return { $loc, token: "|" };
  }), TypeBinaryOp$1 = (0, import_lib2.$TV)((0, import_lib2.$EXPECT)($L117, 'TypeBinaryOp "&"'), function($skip, $loc, $0, $1) {
    return { $loc, token: "&" };
  }), TypeBinaryOp$$ = [TypeBinaryOp$0, TypeBinaryOp$1];
  function TypeBinaryOp(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "TypeBinaryOp", TypeBinaryOp$$);
  }
  var TypeFunction$0 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$E)((0, import_lib2.$S)(Abstract, (0, import_lib2.$E)(_))), (0, import_lib2.$E)((0, import_lib2.$S)(Async, (0, import_lib2.$E)(_))), (0, import_lib2.$E)((0, import_lib2.$S)(New, (0, import_lib2.$E)(_))), Parameters, __, TypeFunctionArrow, (0, import_lib2.$C)(ReturnType, Loc)), function($skip, $loc, $0, $1, $2, $3, $4, $5, $6, $7) {
    var abstract = $1, async = $2, new_ = $3, returnType = $7;
    let children = [abstract, ...$0.slice(2)];
    if (abstract && !new_ && (children[1] = {
      type: "Error",
      message: "abstract function types must be constructors (abstract new)"
    }), returnType.$loc && returnType.token === "") {
      let t = {
        type: "VoidType",
        $loc: returnType.$loc,
        token: "void"
      };
      children[children.length - 1] = returnType = {
        type: "ReturnTypeAnnotation",
        ts: !0,
        t,
        children: [t]
      };
    }
    if (async) {
      let t = wrapTypeInPromise(returnType.t);
      children[children.length - 1] = returnType = {
        ...returnType,
        t,
        children: returnType.children.map(($) => $ === returnType.t ? t : $)
      };
    }
    return {
      type: "TypeFunction",
      children,
      ts: !0,
      returnType
    };
  });
  function TypeFunction(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "TypeFunction", TypeFunction$0);
  }
  var TypeFunctionArrow$0 = (0, import_lib2.$TV)((0, import_lib2.$C)((0, import_lib2.$EXPECT)($L13, 'TypeFunctionArrow "=>"'), (0, import_lib2.$EXPECT)($L14, 'TypeFunctionArrow "\u21D2"'), (0, import_lib2.$EXPECT)($L35, 'TypeFunctionArrow "->"'), (0, import_lib2.$EXPECT)($L36, 'TypeFunctionArrow "\u2192"')), function($skip, $loc, $0, $1) {
    return { $loc, token: "=>" };
  });
  function TypeFunctionArrow(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "TypeFunctionArrow", TypeFunctionArrow$0);
  }
  var TypeArguments$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(OpenAngleBracket, (0, import_lib2.$P)((0, import_lib2.$S)(__, TypeArgumentDelimited)), __, CloseAngleBracket), function($skip, $loc, $0, $1, $2, $3, $4) {
    var open = $1, args = $2, ws = $3, close = $4;
    return args = args.flatMap(([ws2, [arg, delim]]) => [prepend(ws2, arg), delim]), args.pop(), {
      type: "TypeArguments",
      ts: !0,
      args,
      children: [open, args, ws, close]
    };
  });
  function TypeArguments(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "TypeArguments", TypeArguments$0);
  }
  var ImplicitTypeArguments$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(TypeApplicationStart, InsertOpenAngleBracket, (0, import_lib2.$E)(Trimmed_), TypeArgumentList, InsertCloseAngleBracket), function($skip, $loc, $0, $1, $2, $3, $4, $5) {
    var open = $2, ws = $3, args = $4, close = $5;
    let last = args[args.length - 1];
    return isComma(last) && (args = args.slice(0, -1)), {
      type: "TypeArguments",
      ts: !0,
      args,
      children: [open, ws, args, close]
    };
  });
  function ImplicitTypeArguments(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "ImplicitTypeArguments", ImplicitTypeArguments$0);
  }
  var TypeApplicationStart$0 = (0, import_lib2.$S)(IndentedApplicationAllowed, (0, import_lib2.$Y)((0, import_lib2.$S)(IndentedFurther, (0, import_lib2.$N)(ForbiddenImplicitTypeCalls)))), TypeApplicationStart$1 = (0, import_lib2.$S)((0, import_lib2.$N)(EOS), (0, import_lib2.$Y)((0, import_lib2.$S)(_, (0, import_lib2.$N)(ForbiddenImplicitTypeCalls)))), TypeApplicationStart$$ = [TypeApplicationStart$0, TypeApplicationStart$1];
  function TypeApplicationStart(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "TypeApplicationStart", TypeApplicationStart$$);
  }
  var ForbiddenImplicitTypeCalls$0 = ReservedBinary, ForbiddenImplicitTypeCalls$1 = (0, import_lib2.$R$0)((0, import_lib2.$EXPECT)($R93, "ForbiddenImplicitTypeCalls /[|&<!=\\-\u21D2\u2192]/")), ForbiddenImplicitTypeCalls$2 = (0, import_lib2.$R$0)((0, import_lib2.$EXPECT)($R94, "ForbiddenImplicitTypeCalls /(extends|not|is)(?!\\p{ID_Continue}|[\\u200C\\u200D$])/")), ForbiddenImplicitTypeCalls$$ = [ForbiddenImplicitTypeCalls$0, ForbiddenImplicitTypeCalls$1, ForbiddenImplicitTypeCalls$2];
  function ForbiddenImplicitTypeCalls(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "ForbiddenImplicitTypeCalls", ForbiddenImplicitTypeCalls$$);
  }
  var TypeArgumentList$0 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$N)(EOS), TypeArgument, (0, import_lib2.$Q)((0, import_lib2.$S)(CommaDelimiter, (0, import_lib2.$N)(EOS), WTypeArgument)), (0, import_lib2.$P)((0, import_lib2.$S)(CommaDelimiter, (0, import_lib2.$C)(NestedTypeBulletedTuple, NestedInterfaceBlock, NestedTypeArgumentList)))), function($skip, $loc, $0, $1, $2, $3, $4) {
    return [
      $2,
      ...$3.flatMap(([comma, eos, arg]) => [comma, arg]),
      ...$4.flatMap(
        ([comma, args]) => Array.isArray(args) ? [comma, ...args] : [comma, args]
      )
    ];
  }), TypeArgumentList$1 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$C)(NestedTypeBulletedTuple, NestedInterfaceBlock), (0, import_lib2.$Q)((0, import_lib2.$S)(CommaDelimiter, (0, import_lib2.$C)(NestedTypeBulletedTuple, NestedInterfaceBlock, NestedTypeArgumentList)))), function($skip, $loc, $0, $1, $2) {
    return [
      trimFirstSpace($1),
      ...$2.flatMap(
        ([comma, args]) => Array.isArray(args) ? [comma, ...args] : [comma, args]
      )
    ];
  }), TypeArgumentList$2 = NestedTypeArgumentList, TypeArgumentList$3 = (0, import_lib2.$TS)((0, import_lib2.$S)(TypeArgument, (0, import_lib2.$Q)((0, import_lib2.$S)(CommaDelimiter, WTypeArgument))), function($skip, $loc, $0, $1, $2) {
    return [
      $1,
      ...$2.flatMap(([comma, arg]) => [comma, arg])
    ];
  }), TypeArgumentList$$ = [TypeArgumentList$0, TypeArgumentList$1, TypeArgumentList$2, TypeArgumentList$3];
  function TypeArgumentList(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "TypeArgumentList", TypeArgumentList$$);
  }
  var NestedTypeArgumentList$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(PushIndent, (0, import_lib2.$Q)(NestedTypeArgument), PopIndent), function($skip, $loc, $0, $1, $2, $3) {
    var args = $2;
    return args.length ? args.flat() : $skip;
  });
  function NestedTypeArgumentList(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "NestedTypeArgumentList", NestedTypeArgumentList$0);
  }
  var NestedTypeArgument$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(Nested, SingleLineTypeArgumentList, TypeArgumentDelimiter), function($skip, $loc, $0, $1, $2, $3) {
    var indent = $1, args = $2, comma = $3;
    let [arg0, ...rest] = args;
    return arg0 = prepend(indent, arg0), [arg0, ...rest, comma];
  });
  function NestedTypeArgument(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "NestedTypeArgument", NestedTypeArgument$0);
  }
  var SingleLineTypeArgumentList$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(WTypeArgument, (0, import_lib2.$Q)((0, import_lib2.$S)((0, import_lib2.$S)((0, import_lib2.$E)(_), Comma), WTypeArgument))), function($skip, $loc, $0, $1, $2) {
    return [$1, ...$2];
  });
  function SingleLineTypeArgumentList(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "SingleLineTypeArgumentList", SingleLineTypeArgumentList$0);
  }
  var WTypeArgument$0 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$E)(_), TypeArgument), function($skip, $loc, $0, $1, $2) {
    return prepend($1, $2);
  });
  function WTypeArgument(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "WTypeArgument", WTypeArgument$0);
  }
  var TypeArgumentDelimited$0 = (0, import_lib2.$S)(TypeArgument, TypeArgumentDelimiter);
  function TypeArgumentDelimited(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "TypeArgumentDelimited", TypeArgumentDelimited$0);
  }
  var TypeArgument$0 = (0, import_lib2.$T)(Type, function(value) {
    return { type: "TypeArgument", ts: !0, t: value, children: [value] };
  });
  function TypeArgument(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "TypeArgument", TypeArgument$0);
  }
  var TypeArgumentDelimiter$0 = TypeParameterDelimiter;
  function TypeArgumentDelimiter(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "TypeArgumentDelimiter", TypeArgumentDelimiter$0);
  }
  var TypeParameters$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(OpenAngleBracket, (0, import_lib2.$P)(TypeParameter), __, CloseAngleBracket), function($skip, $loc, $0, $1, $2, $3, $4) {
    var parameters = $2;
    return {
      type: "TypeParameters",
      parameters,
      ts: !0,
      children: $0
    };
  });
  function TypeParameters(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "TypeParameters", TypeParameters$0);
  }
  var TypeParameter$0 = (0, import_lib2.$S)(__, (0, import_lib2.$Q)((0, import_lib2.$S)((0, import_lib2.$R$0)((0, import_lib2.$EXPECT)($R95, "TypeParameter /const|in|out/")), _)), Identifier, (0, import_lib2.$E)(TypeConstraint), (0, import_lib2.$E)(TypeInitializer), TypeParameterDelimiter);
  function TypeParameter(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "TypeParameter", TypeParameter$0);
  }
  var TypeConstraint$0 = (0, import_lib2.$S)(__, ExtendsToken, Type);
  function TypeConstraint(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "TypeConstraint", TypeConstraint$0);
  }
  var TypeInitializer$0 = (0, import_lib2.$S)(__, (0, import_lib2.$EXPECT)($L3, 'TypeInitializer "="'), Type);
  function TypeInitializer(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "TypeInitializer", TypeInitializer$0);
  }
  var TypeParameterDelimiter$0 = (0, import_lib2.$S)((0, import_lib2.$E)(_), Comma), TypeParameterDelimiter$1 = (0, import_lib2.$Y)((0, import_lib2.$S)(__, (0, import_lib2.$EXPECT)($L45, 'TypeParameterDelimiter ">"'))), TypeParameterDelimiter$2 = (0, import_lib2.$T)((0, import_lib2.$S)((0, import_lib2.$Y)(EOS), InsertComma), function(value) {
    return value[1];
  }), TypeParameterDelimiter$$ = [TypeParameterDelimiter$0, TypeParameterDelimiter$1, TypeParameterDelimiter$2];
  function TypeParameterDelimiter(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "TypeParameterDelimiter", TypeParameterDelimiter$$);
  }
  var ThisType$0 = (0, import_lib2.$T)((0, import_lib2.$S)((0, import_lib2.$E)(_), (0, import_lib2.$C)(This, AtThis), Colon, Type, ParameterElementDelimiter), function(value) {
    return { type: "ThisType", ts: !0, children: value };
  });
  function ThisType(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "ThisType", ThisType$0);
  }
  var Shebang$0 = (0, import_lib2.$S)((0, import_lib2.$R$0)((0, import_lib2.$EXPECT)($R96, "Shebang /#![^\\r\\n]*/")), EOL);
  function Shebang(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "Shebang", Shebang$0);
  }
  var CivetPrologue$0 = (0, import_lib2.$T)((0, import_lib2.$S)((0, import_lib2.$EXPECT)($R97, "CivetPrologue /[\\t ]*/"), DoubleQuote, CivetPrologueContent, DoubleQuote, SimpleStatementDelimiter, (0, import_lib2.$EXPECT)($R22, "CivetPrologue /[ \\t]*/"), (0, import_lib2.$C)(EOL, (0, import_lib2.$Y)(RestOfLine))), function(value) {
    var content = value[2];
    return content;
  }), CivetPrologue$1 = (0, import_lib2.$T)((0, import_lib2.$S)((0, import_lib2.$EXPECT)($R97, "CivetPrologue /[\\t ]*/"), SingleQuote, CivetPrologueContent, SingleQuote, SimpleStatementDelimiter, (0, import_lib2.$EXPECT)($R22, "CivetPrologue /[ \\t]*/"), (0, import_lib2.$C)(EOL, (0, import_lib2.$Y)(RestOfLine))), function(value) {
    var content = value[2];
    return content;
  }), CivetPrologue$$ = [CivetPrologue$0, CivetPrologue$1];
  function CivetPrologue(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "CivetPrologue", CivetPrologue$$);
  }
  var CivetPrologueContent$0 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$EXPECT)($L248, 'CivetPrologueContent "civet"'), NonIdContinue, (0, import_lib2.$Q)(CivetOption), (0, import_lib2.$EXPECT)($R98, "CivetPrologueContent /[\\s]*/")), function($skip, $loc, $0, $1, $2, $3, $4) {
    var options = $3;
    return {
      type: "CivetPrologue",
      children: [],
      config: Object.fromEntries(options)
    };
  });
  function CivetPrologueContent(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "CivetPrologueContent", CivetPrologueContent$0);
  }
  var CivetOption$0 = (0, import_lib2.$TR)((0, import_lib2.$EXPECT)($R99, "CivetOption /\\s+([+-]?)([a-zA-Z0-9-]+)(\\s*=\\s*([\\p{ID_Continue}.,+-]*))?/"), function($skip, $loc, $0, $1, $2, $3, $4, $5, $6, $7, $8, $9) {
    let optionName = $2.replace(/-+([a-z]?)/g, (_2, l) => l ? l.toUpperCase() : ""), value = $3 ? $4 : $1 !== "-";
    switch (optionName) {
      case "tab":
        value = parseFloat(value), isNaN(value) && (value = 0);
        break;
      case "globals":
      case "symbols":
        value = value.split(",").filter(Boolean);
        break;
    }
    return [optionName, value];
  });
  function CivetOption(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "CivetOption", CivetOption$0);
  }
  var UnknownPrologue$0 = (0, import_lib2.$S)((0, import_lib2.$R$0)((0, import_lib2.$EXPECT)($R97, "UnknownPrologue /[\\t ]*/")), StringLiteral, (0, import_lib2.$TEXT)(SimpleStatementDelimiter), EOS);
  function UnknownPrologue(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "UnknownPrologue", UnknownPrologue$0);
  }
  var TripleSlashDirective$0 = (0, import_lib2.$S)((0, import_lib2.$R$0)((0, import_lib2.$EXPECT)($R100, "TripleSlashDirective /\\/\\/\\/[^\\r\\n]*/")), (0, import_lib2.$E)(EOS));
  function TripleSlashDirective(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "TripleSlashDirective", TripleSlashDirective$0);
  }
  var DirectivePrologue$0 = (0, import_lib2.$T)((0, import_lib2.$S)(PrologueString, (0, import_lib2.$N)((0, import_lib2.$S)(__, (0, import_lib2.$C)(AccessStart, Pipe)))), function(value) {
    return value[0];
  });
  function DirectivePrologue(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "DirectivePrologue", DirectivePrologue$0);
  }
  var PrologueString$0 = CivetPrologue, PrologueString$1 = UnknownPrologue, PrologueString$$ = [PrologueString$0, PrologueString$1];
  function PrologueString(ctx, state2) {
    return (0, import_lib2.$EVENT_C)(ctx, state2, "PrologueString", PrologueString$$);
  }
  var EOS$0 = (0, import_lib2.$T)((0, import_lib2.$S)((0, import_lib2.$EXPECT)($R101, "EOS /(?=[ \\t\\r\\n\\/#]|$)/"), (0, import_lib2.$P)(RestOfLine)), function(value) {
    return value[1];
  });
  function EOS(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "EOS", EOS$0);
  }
  var EOL$0 = (0, import_lib2.$TR)((0, import_lib2.$EXPECT)($R102, "EOL /\\r\\n|\\n|\\r|$/"), function($skip, $loc, $0, $1, $2, $3, $4, $5, $6, $7, $8, $9) {
    return { $loc, token: $0 };
  });
  function EOL(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "EOL", EOL$0);
  }
  var DebugHere$0 = (0, import_lib2.$TV)((0, import_lib2.$EXPECT)($L0, 'DebugHere ""'), function($skip, $loc, $0, $1) {
    debugger;
  });
  function DebugHere(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "DebugHere", DebugHere$0);
  }
  var InsertColon$0 = (0, import_lib2.$TV)((0, import_lib2.$EXPECT)($L0, 'InsertColon ""'), function($skip, $loc, $0, $1) {
    return { $loc, token: ":" };
  });
  function InsertColon(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "InsertColon", InsertColon$0);
  }
  var InsertSemicolon$0 = (0, import_lib2.$TV)((0, import_lib2.$EXPECT)($L0, 'InsertSemicolon ""'), function($skip, $loc, $0, $1) {
    return { $loc, token: ";" };
  });
  function InsertSemicolon(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "InsertSemicolon", InsertSemicolon$0);
  }
  var InsertOpenParen$0 = (0, import_lib2.$TV)((0, import_lib2.$EXPECT)($L0, 'InsertOpenParen ""'), function($skip, $loc, $0, $1) {
    return { $loc, token: "(" };
  });
  function InsertOpenParen(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "InsertOpenParen", InsertOpenParen$0);
  }
  var InsertCloseParen$0 = (0, import_lib2.$TV)((0, import_lib2.$EXPECT)($L0, 'InsertCloseParen ""'), function($skip, $loc, $0, $1) {
    return { $loc, token: ")" };
  });
  function InsertCloseParen(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "InsertCloseParen", InsertCloseParen$0);
  }
  var InsertOpenBrace$0 = (0, import_lib2.$TV)((0, import_lib2.$EXPECT)($L0, 'InsertOpenBrace ""'), function($skip, $loc, $0, $1) {
    return [{ $loc, token: " " }, { $loc, token: "{" }];
  });
  function InsertOpenBrace(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "InsertOpenBrace", InsertOpenBrace$0);
  }
  var InsertInlineOpenBrace$0 = (0, import_lib2.$TV)((0, import_lib2.$EXPECT)($L0, 'InsertInlineOpenBrace ""'), function($skip, $loc, $0, $1) {
    return { $loc, token: "{" };
  });
  function InsertInlineOpenBrace(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "InsertInlineOpenBrace", InsertInlineOpenBrace$0);
  }
  var InsertCloseBrace$0 = (0, import_lib2.$TV)((0, import_lib2.$EXPECT)($L0, 'InsertCloseBrace ""'), function($skip, $loc, $0, $1) {
    return { $loc, token: "}" };
  });
  function InsertCloseBrace(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "InsertCloseBrace", InsertCloseBrace$0);
  }
  var InsertOpenBracket$0 = (0, import_lib2.$TV)((0, import_lib2.$EXPECT)($L0, 'InsertOpenBracket ""'), function($skip, $loc, $0, $1) {
    return { $loc, token: "[" };
  });
  function InsertOpenBracket(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "InsertOpenBracket", InsertOpenBracket$0);
  }
  var InsertCloseBracket$0 = (0, import_lib2.$TV)((0, import_lib2.$EXPECT)($L0, 'InsertCloseBracket ""'), function($skip, $loc, $0, $1) {
    return { $loc, token: "]" };
  });
  function InsertCloseBracket(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "InsertCloseBracket", InsertCloseBracket$0);
  }
  var InsertOpenAngleBracket$0 = (0, import_lib2.$TV)((0, import_lib2.$EXPECT)($L0, 'InsertOpenAngleBracket ""'), function($skip, $loc, $0, $1) {
    return { $loc, token: "<" };
  });
  function InsertOpenAngleBracket(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "InsertOpenAngleBracket", InsertOpenAngleBracket$0);
  }
  var InsertCloseAngleBracket$0 = (0, import_lib2.$TV)((0, import_lib2.$EXPECT)($L0, 'InsertCloseAngleBracket ""'), function($skip, $loc, $0, $1) {
    return { $loc, token: ">" };
  });
  function InsertCloseAngleBracket(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "InsertCloseAngleBracket", InsertCloseAngleBracket$0);
  }
  var InsertComma$0 = (0, import_lib2.$TV)((0, import_lib2.$EXPECT)($L0, 'InsertComma ""'), function($skip, $loc, $0, $1) {
    return { $loc, token: ",", implicit: !0 };
  });
  function InsertComma(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "InsertComma", InsertComma$0);
  }
  var InsertSpaceEquals$0 = (0, import_lib2.$TV)((0, import_lib2.$EXPECT)($L0, 'InsertSpaceEquals ""'), function($skip, $loc, $0, $1) {
    return { $loc, token: " =" };
  });
  function InsertSpaceEquals(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "InsertSpaceEquals", InsertSpaceEquals$0);
  }
  var InsertConst$0 = (0, import_lib2.$TV)((0, import_lib2.$EXPECT)($L0, 'InsertConst ""'), function($skip, $loc, $0, $1) {
    return { $loc, token: "const " };
  });
  function InsertConst(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "InsertConst", InsertConst$0);
  }
  var InsertLet$0 = (0, import_lib2.$TV)((0, import_lib2.$EXPECT)($L0, 'InsertLet ""'), function($skip, $loc, $0, $1) {
    return { $loc, token: "let " };
  });
  function InsertLet(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "InsertLet", InsertLet$0);
  }
  var InsertReadonly$0 = (0, import_lib2.$TV)((0, import_lib2.$EXPECT)($L0, 'InsertReadonly ""'), function($skip, $loc, $0, $1) {
    return { ts: !0, children: [{ $loc, token: "readonly " }] };
  });
  function InsertReadonly(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "InsertReadonly", InsertReadonly$0);
  }
  var InsertNewline$0 = (0, import_lib2.$TV)((0, import_lib2.$EXPECT)($L0, 'InsertNewline ""'), function($skip, $loc, $0, $1) {
    return `
`;
  });
  function InsertNewline(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "InsertNewline", InsertNewline$0);
  }
  var InsertIndent$0 = (0, import_lib2.$TV)((0, import_lib2.$EXPECT)($L0, 'InsertIndent ""'), function($skip, $loc, $0, $1) {
    return state.currentIndent.token;
  });
  function InsertIndent(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "InsertIndent", InsertIndent$0);
  }
  var InsertSpace$0 = (0, import_lib2.$TV)((0, import_lib2.$EXPECT)($L0, 'InsertSpace ""'), function($skip, $loc, $0, $1) {
    return { $loc, token: " " };
  });
  function InsertSpace(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "InsertSpace", InsertSpace$0);
  }
  var InsertDot$0 = (0, import_lib2.$TV)((0, import_lib2.$EXPECT)($L0, 'InsertDot ""'), function($skip, $loc, $0, $1) {
    return { $loc, token: "." };
  });
  function InsertDot(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "InsertDot", InsertDot$0);
  }
  var InsertBreak$0 = (0, import_lib2.$TV)((0, import_lib2.$EXPECT)($L0, 'InsertBreak ""'), function($skip, $loc, $0, $1) {
    return { $loc, token: ";break;" };
  });
  function InsertBreak(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "InsertBreak", InsertBreak$0);
  }
  var InsertVar$0 = (0, import_lib2.$TV)((0, import_lib2.$EXPECT)($L0, 'InsertVar ""'), function($skip, $loc, $0, $1) {
    return { $loc, token: "var " };
  });
  function InsertVar(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "InsertVar", InsertVar$0);
  }
  var InsertType$0 = (0, import_lib2.$TV)((0, import_lib2.$EXPECT)($L0, 'InsertType ""'), function($skip, $loc, $0, $1) {
    return { $loc, token: "type " };
  });
  function InsertType(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "InsertType", InsertType$0);
  }
  var CoffeeBinaryExistentialEnabled$0 = (0, import_lib2.$TV)((0, import_lib2.$EXPECT)($L0, 'CoffeeBinaryExistentialEnabled ""'), function($skip, $loc, $0, $1) {
    if (!config.coffeeBinaryExistential)
      return $skip;
  });
  function CoffeeBinaryExistentialEnabled(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "CoffeeBinaryExistentialEnabled", CoffeeBinaryExistentialEnabled$0);
  }
  var CoffeeBooleansEnabled$0 = (0, import_lib2.$TV)((0, import_lib2.$EXPECT)($L0, 'CoffeeBooleansEnabled ""'), function($skip, $loc, $0, $1) {
    if (!config.coffeeBooleans)
      return $skip;
  });
  function CoffeeBooleansEnabled(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "CoffeeBooleansEnabled", CoffeeBooleansEnabled$0);
  }
  var CoffeeClassesEnabled$0 = (0, import_lib2.$TV)((0, import_lib2.$EXPECT)($L0, 'CoffeeClassesEnabled ""'), function($skip, $loc, $0, $1) {
    if (!config.coffeeClasses)
      return $skip;
  });
  function CoffeeClassesEnabled(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "CoffeeClassesEnabled", CoffeeClassesEnabled$0);
  }
  var CoffeeCommentEnabled$0 = (0, import_lib2.$TV)((0, import_lib2.$EXPECT)($L0, 'CoffeeCommentEnabled ""'), function($skip, $loc, $0, $1) {
    if (!config.coffeeComment)
      return $skip;
  });
  function CoffeeCommentEnabled(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "CoffeeCommentEnabled", CoffeeCommentEnabled$0);
  }
  var CoffeeDivEnabled$0 = (0, import_lib2.$TV)((0, import_lib2.$EXPECT)($L0, 'CoffeeDivEnabled ""'), function($skip, $loc, $0, $1) {
    if (!config.coffeeDiv)
      return $skip;
  });
  function CoffeeDivEnabled(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "CoffeeDivEnabled", CoffeeDivEnabled$0);
  }
  var CoffeeDoEnabled$0 = (0, import_lib2.$TV)((0, import_lib2.$EXPECT)($L0, 'CoffeeDoEnabled ""'), function($skip, $loc, $0, $1) {
    if (!config.coffeeDo)
      return $skip;
  });
  function CoffeeDoEnabled(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "CoffeeDoEnabled", CoffeeDoEnabled$0);
  }
  var CoffeeForLoopsEnabled$0 = (0, import_lib2.$TV)((0, import_lib2.$EXPECT)($L0, 'CoffeeForLoopsEnabled ""'), function($skip, $loc, $0, $1) {
    if (!config.coffeeForLoops)
      return $skip;
  });
  function CoffeeForLoopsEnabled(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "CoffeeForLoopsEnabled", CoffeeForLoopsEnabled$0);
  }
  var CoffeeInterpolationEnabled$0 = (0, import_lib2.$TV)((0, import_lib2.$EXPECT)($L0, 'CoffeeInterpolationEnabled ""'), function($skip, $loc, $0, $1) {
    if (!config.coffeeInterpolation)
      return $skip;
  });
  function CoffeeInterpolationEnabled(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "CoffeeInterpolationEnabled", CoffeeInterpolationEnabled$0);
  }
  var CoffeeIsntEnabled$0 = (0, import_lib2.$TV)((0, import_lib2.$EXPECT)($L0, 'CoffeeIsntEnabled ""'), function($skip, $loc, $0, $1) {
    if (!config.coffeeIsnt)
      return $skip;
  });
  function CoffeeIsntEnabled(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "CoffeeIsntEnabled", CoffeeIsntEnabled$0);
  }
  var CoffeeJSXEnabled$0 = (0, import_lib2.$TV)((0, import_lib2.$EXPECT)($L0, 'CoffeeJSXEnabled ""'), function($skip, $loc, $0, $1) {
    if (!config.coffeeJSX)
      return $skip;
  });
  function CoffeeJSXEnabled(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "CoffeeJSXEnabled", CoffeeJSXEnabled$0);
  }
  var CoffeeLineContinuationEnabled$0 = (0, import_lib2.$TV)((0, import_lib2.$EXPECT)($L0, 'CoffeeLineContinuationEnabled ""'), function($skip, $loc, $0, $1) {
    if (!config.coffeeLineContinuation)
      return $skip;
  });
  function CoffeeLineContinuationEnabled(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "CoffeeLineContinuationEnabled", CoffeeLineContinuationEnabled$0);
  }
  var CoffeeNotEnabled$0 = (0, import_lib2.$TV)((0, import_lib2.$EXPECT)($L0, 'CoffeeNotEnabled ""'), function($skip, $loc, $0, $1) {
    if (!config.coffeeNot)
      return $skip;
  });
  function CoffeeNotEnabled(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "CoffeeNotEnabled", CoffeeNotEnabled$0);
  }
  var CoffeeOfEnabled$0 = (0, import_lib2.$TV)((0, import_lib2.$EXPECT)($L0, 'CoffeeOfEnabled ""'), function($skip, $loc, $0, $1) {
    if (!config.coffeeOf)
      return $skip;
  });
  function CoffeeOfEnabled(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "CoffeeOfEnabled", CoffeeOfEnabled$0);
  }
  var CoffeePrototypeEnabled$0 = (0, import_lib2.$TV)((0, import_lib2.$EXPECT)($L0, 'CoffeePrototypeEnabled ""'), function($skip, $loc, $0, $1) {
    if (!config.coffeePrototype)
      return $skip;
  });
  function CoffeePrototypeEnabled(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "CoffeePrototypeEnabled", CoffeePrototypeEnabled$0);
  }
  var JSXCodeNestedEnabled$0 = (0, import_lib2.$TV)((0, import_lib2.$EXPECT)($L0, 'JSXCodeNestedEnabled ""'), function($skip, $loc, $0, $1) {
    if (!config.jsxCodeNested)
      return $skip;
  });
  function JSXCodeNestedEnabled(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "JSXCodeNestedEnabled", JSXCodeNestedEnabled$0);
  }
  var JSXCodeSameLineEnabled$0 = (0, import_lib2.$TV)((0, import_lib2.$EXPECT)($L0, 'JSXCodeSameLineEnabled ""'), function($skip, $loc, $0, $1) {
    if (!config.jsxCodeSameLine)
      return $skip;
  });
  function JSXCodeSameLineEnabled(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "JSXCodeSameLineEnabled", JSXCodeSameLineEnabled$0);
  }
  var ObjectIsEnabled$0 = (0, import_lib2.$TV)((0, import_lib2.$EXPECT)($L0, 'ObjectIsEnabled ""'), function($skip, $loc, $0, $1) {
    if (!config.objectIs)
      return $skip;
  });
  function ObjectIsEnabled(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "ObjectIsEnabled", ObjectIsEnabled$0);
  }
  var IsBare$0 = (0, import_lib2.$TV)((0, import_lib2.$EXPECT)($L0, 'IsBare ""'), function($skip, $loc, $0, $1) {
    if (config.iife || config.repl) return $skip;
  });
  function IsBare(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "IsBare", IsBare$0);
  }
  var Reset$0 = (0, import_lib2.$TV)((0, import_lib2.$EXPECT)($L0, 'Reset ""'), function($skip, $loc, $0, $1) {
    state.indentLevels = [{
      level: 0,
      token: ""
    }], state.forbidClassImplicitCall = [!1], state.forbidIndentedApplication = [!1], state.forbidBracedApplication = [!1], state.forbidTrailingMemberProperty = [!1], state.forbidNestedBinaryOp = [!1], state.forbidNewlineBinaryOp = [!1], state.forbidPipeline = [!1], state.JSXTagStack = [void 0], state.operators = /* @__PURE__ */ new Map(), state.helperRefs = {}, state.prelude = [], config = {
      autoConst: !1,
      autoVar: !1,
      autoLet: !1,
      coffeeBinaryExistential: !1,
      coffeeBooleans: !1,
      coffeeClasses: !1,
      coffeeComment: !1,
      coffeeDiv: !1,
      coffeeDo: !1,
      coffeeEq: !1,
      coffeeForLoops: !1,
      coffeeInterpolation: !1,
      coffeeIsnt: !1,
      coffeeJSX: !1,
      coffeeLineContinuation: !1,
      coffeeNot: !1,
      coffeeOf: !1,
      coffeePrototype: !1,
      coffeeRange: !1,
      defaultElement: "div",
      globals: [],
      iife: !1,
      implicitReturns: !0,
      jsxCode: !1,
      objectIs: !1,
      react: !1,
      solid: !1,
      client: !1,
      // default behavior: client only
      repl: !1,
      rewriteTsImports: !0,
      server: !1,
      strict: !1,
      symbols: wellKnownSymbols,
      tab: void 0,
      // default behavior = same as space
      verbose: !1
    }, Object.defineProperty(config, "deno", {
      set(b) {
        config.rewriteTsImports = !b;
      }
    }), config.deno = typeof Deno < "u", Object.defineProperty(config, "coffeeCompat", {
      set(b) {
        for (let option of [
          "autoVar",
          "coffeeBinaryExistential",
          "coffeeBooleans",
          "coffeeClasses",
          "coffeeComment",
          "coffeeDiv",
          "coffeeDo",
          "coffeeEq",
          "coffeeForLoops",
          "coffeeInterpolation",
          "coffeeIsnt",
          "coffeeJSX",
          "coffeeLineContinuation",
          "coffeeNot",
          "coffeeOf",
          "coffeePrototype",
          "coffeeRange"
        ])
          config[option] = b;
        b && (config.objectIs = !1);
      }
    }), Object.defineProperty(config, "jsxCode", {
      set(b) {
        for (let option of [
          "jsxCodeNested",
          "jsxCodeSameLine"
        ])
          config[option] = b;
      }
    }), Object.assign(config, initialConfig);
  });
  function Reset(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "Reset", Reset$0);
  }
  var Init$0 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$E)(Shebang), Prologue), function($skip, $loc, $0, $1, $2) {
    var directives = $2;
    return directives.forEach((directive) => {
      directive.type === "CivetPrologue" && Object.assign(config, directive.config);
    }), config.strict && ($0 = [...$0, `"use strict";
`]), $0;
  });
  function Init(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "Init", Init$0);
  }
  var Prologue$0 = (0, import_lib2.$Q)((0, import_lib2.$C)(TripleSlashDirective, (0, import_lib2.$S)((0, import_lib2.$C)(JSSingleLineComment, JSMultiLineComment), EOS), DirectivePrologue));
  function Prologue(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "Prologue", Prologue$0);
  }
  var ProloguePrefix$0 = (0, import_lib2.$S)(Prologue, (0, import_lib2.$R$0)((0, import_lib2.$EXPECT)($R103, "ProloguePrefix /[^]*/")));
  function ProloguePrefix(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "ProloguePrefix", ProloguePrefix$0);
  }
  var Indent$0 = (0, import_lib2.$TR)((0, import_lib2.$EXPECT)($R22, "Indent /[ \\t]*/"), function($skip, $loc, $0, $1, $2, $3, $4, $5, $6, $7, $8, $9) {
    let level = getIndentLevel($0, config.tab);
    return {
      $loc,
      token: $0,
      level
    };
  });
  function Indent(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "Indent", Indent$0);
  }
  var TrackIndented$0 = (0, import_lib2.$TV)(Indent, function($skip, $loc, $0, $1) {
    var indent = $0;
    let { level } = indent;
    return level <= state.currentIndent.level ? $skip : (config.verbose && console.log("pushing indent", indent), state.indentLevels.push(indent), $1);
  });
  function TrackIndented(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "TrackIndented", TrackIndented$0);
  }
  var PushIndent$0 = (0, import_lib2.$Y)((0, import_lib2.$S)(EOS, TrackIndented));
  function PushIndent(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "PushIndent", PushIndent$0);
  }
  var PopIndent$0 = (0, import_lib2.$TV)((0, import_lib2.$EXPECT)($L0, 'PopIndent ""'), function($skip, $loc, $0, $1) {
    config.verbose && console.log("popping indent", state.indentLevels[state.indentLevels.length - 1], "->", state.indentLevels[state.indentLevels.length - 2]), state.indentLevels.pop();
  });
  function PopIndent(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "PopIndent", PopIndent$0);
  }
  var Nested$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(EOS, Indent), function($skip, $loc, $0, $1, $2) {
    var indent = $2;
    return indent.level === state.currentIndent.level ? $0 : (config.verbose && console.log(`failing Nested: ${indent.level} does not match current indent level ${state.currentIndent.level}`), $skip);
  });
  function Nested(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "Nested", Nested$0);
  }
  var IndentedFurther$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(EOS, Indent), function($skip, $loc, $0, $1, $2) {
    var indent = $2;
    return indent.level > state.currentIndent.level ? $0 : $skip;
  });
  function IndentedFurther(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "IndentedFurther", IndentedFurther$0);
  }
  var IndentedAtLeast$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(EOS, Indent), function($skip, $loc, $0, $1, $2) {
    var indent = $2;
    return indent.level >= state.currentIndent.level ? $0 : $skip;
  });
  function IndentedAtLeast(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "IndentedAtLeast", IndentedAtLeast$0);
  }
  var NotDedented$0 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$E)(IndentedAtLeast), (0, import_lib2.$E)(_)), function($skip, $loc, $0, $1, $2) {
    let ws = [];
    return $1 && ws.push(...$1), $2 && ws.push(...$2), ws.flat(1 / 0).filter(Boolean);
  });
  function NotDedented(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "NotDedented", NotDedented$0);
  }
  var SameLineOrIndentedFurther$0 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$E)(IndentedFurther), (0, import_lib2.$E)(_)), function($skip, $loc, $0, $1, $2) {
    let ws = [];
    return $1 && ws.push(...$1), $2 && ws.push(...$2), ws.flat(1 / 0).filter(Boolean);
  });
  function SameLineOrIndentedFurther(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "SameLineOrIndentedFurther", SameLineOrIndentedFurther$0);
  }
  var Dedented$0 = (0, import_lib2.$T)((0, import_lib2.$S)((0, import_lib2.$N)(IndentedAtLeast), EOS), function(value) {
    return value[1];
  });
  function Dedented(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "Dedented", Dedented$0);
  }
  var PushExtraIndent1$0 = (0, import_lib2.$TV)((0, import_lib2.$EXPECT)($L0, 'PushExtraIndent1 ""'), function($skip, $loc, $0, $1) {
    let indent = {
      token: "",
      $loc,
      level: state.currentIndent.level + 1
    };
    return config.verbose && console.log("pushing bonus indent", indent), state.indentLevels.push(indent), indent;
  });
  function PushExtraIndent1(ctx, state2) {
    return (0, import_lib2.$EVENT)(ctx, state2, "PushExtraIndent1", PushExtraIndent1$0);
  }
  var parser = function() {
    let { fail, validate, reset } = (0, import_lib2.Validator)(), ctx = { expectation: "", fail };
    return {
      parse: (input, options = {}) => {
        if (typeof input != "string") throw new Error("Input must be a string");
        let parser2 = options.startRule != null ? grammar[options.startRule] : Object.values(grammar)[0];
        if (!parser2) throw new Error(`Could not find rule with name '${options.startRule}'`);
        let filename2 = options.filename || "<anonymous>";
        return reset(), Object.assign(ctx, { ...options.events, tokenize: options.tokenize }), validate(input, parser2(ctx, {
          input,
          pos: 0
        }), {
          filename: filename2
        });
      }
    };
  }();
  var { parse } = parser;
  var filename, initialConfig, config, sync, state = {
    // parser state
    // These get (re)set in Reset, but are included here for type inference
    forbidClassImplicitCall: [!1],
    forbidIndentedApplication: [!1],
    forbidBracedApplication: [!1],
    forbidTrailingMemberProperty: [!1],
    forbidNestedBinaryOp: [!1],
    forbidNewlineBinaryOp: [!1],
    forbidPipeline: [!1],
    JSXTagStack: [void 0]
  }, getState = () => state, getConfig = () => config, getInitialConfig = () => initialConfig, getFilename = () => filename, getSync = () => sync;
  Object.defineProperties(state, {
    currentIndent: {
      get() {
        let { indentLevels: l } = state;
        return l[l.length - 1];
      }
    },
    classImplicitCallForbidden: {
      get() {
        let { forbidClassImplicitCall: s } = state;
        return s[s.length - 1];
      }
    },
    indentedApplicationForbidden: {
      get() {
        let { forbidIndentedApplication: s } = state;
        return s[s.length - 1];
      }
    },
    bracedApplicationForbidden: {
      get() {
        let { forbidBracedApplication: s } = state;
        return s[s.length - 1];
      }
    },
    trailingMemberPropertyForbidden: {
      get() {
        let { forbidTrailingMemberProperty: s } = state;
        return s[s.length - 1];
      }
    },
    nestedBinaryOpForbidden: {
      get() {
        let { forbidNestedBinaryOp: s } = state;
        return s[s.length - 1];
      }
    },
    newlineBinaryOpForbidden: {
      get() {
        let { forbidNewlineBinaryOp: s } = state;
        return s[s.length - 1];
      }
    },
    pipelineForbidden: {
      get() {
        let { forbidPipeline: s } = state;
        return s[s.length - 1];
      }
    },
    currentJSXTag: {
      get() {
        let { JSXTagStack: s } = state;
        return s[s.length - 1];
      }
    }
  });
  function getStateKey() {
    return [state.currentIndent.level % 256 << 8 | state.classImplicitCallForbidden << 7 | state.indentedApplicationForbidden << 6 | state.bracedApplicationForbidden << 5 | state.trailingMemberPropertyForbidden << 4 | state.nestedBinaryOpForbidden << 3 | state.newlineBinaryOpForbidden << 2 | state.pipelineForbidden << 1 | // This is slightly different than the rest of the state,
    // since it is affected by the directive prologue and may be hit
    // by the EOL rule early in the parse. Later if we wanted to
    // allow block scoping of the compat directives we would need to
    // add them all here.
    config.coffeeComment << 0, state.currentJSXTag];
  }
  function parseProgram(input, options) {
    filename = options?.filename, initialConfig = options?.parseOptions, sync = options?.sync;
    let root = parse(input, options);
    return sync ? (filename = initialConfig = sync = null, root) : processProgramAsync(root).then(() => (filename = initialConfig = sync = null, root));
  }
  var wellKnownSymbols = [
    "asyncIterator",
    "hasInstance",
    "isConcatSpreadable",
    "iterator",
    "match",
    "matchAll",
    "replace",
    "search",
    "species",
    "split",
    "toPrimitive",
    "toStringTag",
    "unscopables"
  ];

  // unplugin-civet:/Users/greghuc/workspace/Civet/source/sourcemap.civet.jsx
  var sourcemap_civet_exports = {};
  __export(sourcemap_civet_exports, {
    SourceMap: () => SourceMap,
    base64Encode: () => base64Encode,
    decodeVLQ: () => decodeVLQ,
    locationTable: () => locationTable,
    lookupLineColumn: () => lookupLineColumn
  });
  function locationTable(input) {
    let linesRe = /([^\r\n]*)(\r\n|\r|\n|$)/y, lines = [], line = 0, pos = 0, ref;
    for (; (ref = linesRe.exec(input)) && (pos += ref[0].length, lines[line++] = pos, pos !== input.length); )
      ;
    return lines;
  }
  function lookupLineColumn(table, pos) {
    let l = 0, prevEnd = 0;
    for (; table[l] <= pos; )
      prevEnd = table[l++];
    return [l, pos - prevEnd];
  }
  var EOL2 = /\r?\n|\r/, SourceMap = class {
    lines;
    line;
    colOffset;
    // relative to previous entry
    srcLine;
    srcColumn;
    srcTable;
    source;
    constructor(source1) {
      this.source = source1, this.lines = [[]], this.line = 0, this.colOffset = 0, this.srcLine = 0, this.srcColumn = 0, this.srcTable = locationTable(this.source);
    }
    renderMappings() {
      let lastSourceLine = 0, lastSourceColumn = 0;
      return (() => {
        let results = [];
        for (let ref1 = this.lines, i1 = 0, len3 = ref1.length; i1 < len3; i1++) {
          let line = ref1[i1];
          results.push((() => {
            let results1 = [];
            for (let i2 = 0, len1 = line.length; i2 < len1; i2++) {
              let entry = line[i2];
              if (entry.length === 4) {
                let [colDelta, sourceFileIndex, srcLine, srcCol] = entry, lineDelta = srcLine - lastSourceLine;
                colDelta = srcCol - lastSourceColumn, lastSourceLine = srcLine, lastSourceColumn = srcCol, results1.push(`${encodeVlq(entry[0])}${encodeVlq(sourceFileIndex)}${encodeVlq(lineDelta)}${encodeVlq(colDelta)}`);
              } else
                results1.push(encodeVlq(entry[0]));
            }
            return results1;
          })().join(","));
        }
        return results;
      })().join(";");
    }
    json(srcFileName, outFileName) {
      return {
        version: 3,
        file: outFileName,
        sources: [srcFileName],
        mappings: this.renderMappings(),
        names: [],
        sourcesContent: [this.source],
        toString: function() {
          return JSON.stringify(this);
        }
      };
    }
    /** Generate a comment with the source mapping URL. */
    comment(srcFileName, outFileName) {
      return `//# sourceMappingURL=data:application/json;base64,${base64Encode(JSON.stringify(this.json(srcFileName, outFileName)))}`;
    }
    updateSourceMap(outputStr, inputPos, colOffset = 0) {
      let outLines = outputStr.split(EOL2), srcLine, srcCol;
      inputPos != null && ([srcLine, srcCol] = lookupLineColumn(this.srcTable, inputPos), srcCol += colOffset, this.srcLine = srcLine, this.srcColumn = srcCol);
      for (let i3 = 0, len22 = outLines.length; i3 < len22; i3++) {
        let i = i3, line = outLines[i3];
        i > 0 && (this.line++, this.srcLine++, this.colOffset = 0, this.lines[this.line] = [], this.srcColumn = srcCol = colOffset);
        let l = this.colOffset;
        this.colOffset = line.length, this.srcColumn += line.length, inputPos != null ? this.lines[this.line].push([l, 0, srcLine + i, srcCol]) : l != 0 && this.lines[this.line].push([l]);
      }
    }
    /**
    Remap a string with compiled code and a source map to use a new source map
    referencing upstream source files.
    This modifies the upstream map in place.
    */
    static remap = (codeWithSourceMap, upstreamMap, sourcePath, targetPath) => {
      let sourceMapText, codeWithoutSourceMap = codeWithSourceMap.replace(smRegexp, (_match, sm) => (sourceMapText = sm, ""));
      if (sourceMapText) {
        let parsed = this.parseWithLines(sourceMapText), composedLines = this.composeLines(upstreamMap.lines, parsed.lines);
        upstreamMap.lines = composedLines;
      }
      return `${codeWithoutSourceMap}
${upstreamMap.comment(sourcePath, targetPath)}`;
    };
    /**
    Compose lines from an upstream source map with lines from a downstream source map.
    */
    static composeLines = (upstreamMapping, lines) => lines.map((line) => line.map((entry) => {
      if (entry.length === 1)
        return entry;
      let [colDelta, sourceFileIndex, srcLine, srcCol] = entry, srcPos = remapPosition([srcLine, srcCol], upstreamMapping);
      if (!srcPos)
        return [entry[0]];
      let [upstreamLine, upstreamCol] = srcPos;
      return entry.length === 4 ? [colDelta, sourceFileIndex, upstreamLine, upstreamCol] : [colDelta, sourceFileIndex, upstreamLine, upstreamCol, entry[4]];
    }));
    /**
    Parse a base64 encoded source map string into a SourceMapJSON object with lines.
    */
    static parseWithLines = (base64encodedJSONstr) => {
      let json = JSON.parse(Buffer.from(base64encodedJSONstr, "base64").toString("utf8")), sourceLine = 0, sourceColumn = 0, lines = json.mappings.split(";").map((line) => line.length === 0 ? [] : line.split(",").map((entry) => {
        let result = decodeVLQ(entry);
        switch (result.length) {
          case 1:
            break;
          case 4:
          case 5: {
            sourceLine += result[2], result[2] = sourceLine, sourceColumn += result[3], result[3] = sourceColumn;
            break;
          }
          default:
            throw new Error(`Unknown source map entry ${JSON.stringify(result)}`);
        }
        return result;
      }));
      return { ...json, lines };
    };
  }, smRegexp = /(?:\r?\n|\r)\/\/# sourceMappingURL=data:application\/json;(?:charset=[^;]*;)?base64,([+a-zA-Z0-9\/]*=?=?)(?:\s*)$/;
  var VLQ_SHIFT = 5, VLQ_CONTINUATION_BIT = 1 << VLQ_SHIFT, VLQ_VALUE_MASK = VLQ_CONTINUATION_BIT - 1, encodeVlq = function(value) {
    let answer = "", ref2;
    value < 0 ? ref2 = 1 : ref2 = 0;
    let signBit = ref2, valueToEncode = (Math.abs(value) << 1) + signBit;
    for (; valueToEncode || !answer; ) {
      let nextChunk = valueToEncode & VLQ_VALUE_MASK;
      valueToEncode = valueToEncode >> VLQ_SHIFT, valueToEncode && (nextChunk |= VLQ_CONTINUATION_BIT), answer += BASE64_CHARS[nextChunk];
    }
    return answer;
  }, BASE64_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", base64Encode = function(src) {
    if (typeof Buffer < "u")
      return Buffer.from(src).toString("base64");
    {
      let bytes = new TextEncoder().encode(src), binaryString = String.fromCodePoint(...bytes);
      return btoa(binaryString);
    }
  }, vlqTable = new Uint8Array(128), vlqChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
  {
    let i = 0, l = vlqTable.length;
    for (; i < l; )
      vlqTable[i] = 255, i++;
    for (i = 0, l = vlqChars.length; i < l; )
      vlqTable[vlqChars.charCodeAt(i)] = i, i++;
  }
  var decodeError = function(message) {
    throw new Error(message);
  }, decodeVLQ = (mapping) => {
    let i = 0, l = mapping.length, result = [];
    for (; i < l; ) {
      let shift = 0, vlq = 0, v = 0;
      for (; ; ) {
        i >= l && decodeError("Unexpected early end of mapping data");
        let c = mapping.charCodeAt(i);
        (c & 127) != c && decodeError(`Invalid mapping character: ${JSON.stringify(String.fromCharCode(c))}`);
        let index = vlqTable[c & 127];
        if (index === 255 && decodeError(`Invalid mapping character: ${JSON.stringify(String.fromCharCode(c))}`), i++, vlq |= (index & 31) << shift, shift += 5, !(index & 32))
          break;
      }
      vlq & 1 ? v = -(vlq >> 1) : v = vlq >> 1, result.push(v);
    }
    return result;
  }, remapPosition = (position, sourcemapLines) => {
    let [line, character] = position, textLine = sourcemapLines[line];
    if (!textLine?.length)
      return;
    let i = 0, p = 0, l = textLine.length, lastMapping, lastMappingPosition = 0;
    for (; i < l; ) {
      let mapping = textLine[i];
      if (p += mapping[0], mapping.length === 4 && (lastMapping = mapping, lastMappingPosition = p), p >= character)
        break;
      i++;
    }
    if (character - lastMappingPosition == 0 && lastMapping)
      return [lastMapping[2], lastMapping[3]];
  };

  // unplugin-civet:/Users/greghuc/workspace/Civet/source/state-cache.civet.jsx
  var StateCache = class {
    cache = /* @__PURE__ */ new Map();
    get(key) {
      return this.cache.get(key[0])?.get(key[1])?.get(key[2])?.get(key[3]);
    }
    /**
     * Check if this multi-layer cache has the given key.
     * Since the intermediate layers are always other maps we only need to check the last layer.
     */
    has(key) {
      return !!this.cache.get(key[0])?.get(key[1])?.get(key[2])?.has(key[3]);
    }
    set(key, value) {
      let cache0 = this.cache, cache1;
      cache0.has(key[0]) ? cache1 = cache0.get(key[0]) : (cache1 = /* @__PURE__ */ new Map(), this.cache.set(key[0], cache1));
      let cache2;
      cache1?.has(key[1]) ? cache2 = cache1.get(key[1]) : (cache2 = /* @__PURE__ */ new Map(), cache1.set(key[1], cache2));
      let cache3;
      cache2.has(key[2]) ? cache3 = cache2.get(key[2]) : (cache3 = /* @__PURE__ */ new Map(), cache2.set(key[2], cache3)), cache3.set(key[3], value);
    }
  };

  // unplugin-civet:/Users/greghuc/workspace/Civet/source/main.civet.jsx
  var { SourceMap: SourceMap2 } = sourcemap_civet_exports;
  var ParseErrors = class extends Error {
    name = "ParseErrors";
    errors;
    constructor(errors) {
      let message = errors.map(($) => $.message).join(`
`);
      super(errors.map(($1) => $1.message).join(`
`)), this.message = message, this.errors = errors;
    }
  }, uncacheable = /* @__PURE__ */ new Set([
    // Meta
    "DebugHere",
    "Init",
    "Program",
    "Reset",
    // Indentation
    // We need to no-cache the state modifying rules up to the point where they
    // balance within a parent so PushIndent needs to be marked no-cache even
    // though it only calls TrackIndented which does the actual work.
    "PushIndent",
    "PopIndent",
    "TrackIndented",
    "BulletIndent",
    "PushExtraIndent1",
    // JSX
    "PushJSXOpeningElement",
    "PushJSXOpeningFragment",
    "PopJSXStack",
    // State
    "AllowAll",
    "AllowClassImplicitCall",
    "AllowBracedApplication",
    "AllowIndentedApplication",
    "AllowMultiLineImplicitObjectLiteral",
    "AllowNestedBinaryOp",
    "AllowNewlineBinaryOp",
    "AllowTrailingMemberProperty",
    "AllowPipeline",
    "ForbidClassImplicitCall",
    "ForbidBracedApplication",
    "ForbidIndentedApplication",
    "ForbidMultiLineImplicitObjectLiteral",
    "ForbidNestedBinaryOp",
    "ForbidNewlineBinaryOp",
    "ForbidTrailingMemberProperty",
    "ForbidPipeline",
    "RestoreAll",
    "RestoreClassImplicitCall",
    "RestoreMultiLineImplicitObjectLiteral",
    "RestoreBracedApplication",
    "RestoreIndentedApplication",
    "RestoreTrailingMemberProperty",
    "RestoreNestedBinaryOp",
    "RestoreNewlineBinaryOp",
    "RestorePipeline"
  ]);
  function compile(src, options) {
    options ? options = { ...options } : options = {}, options.parseOptions = { ...options.parseOptions };
    let filename2 = options.filename || "unknown";
    filename2.endsWith(".coffee") && !/^(#![^\r\n]*(\r\n|\n|\r))?\s*['"]civet/.test(src) && (options.parseOptions.coffeeCompat = !0);
    let { hits, trace, noCache } = options, events;
    noCache || (events = makeCache({
      hits: !!hits,
      trace: !!trace
    }));
    let ast;
    try {
      ast = parseProgram(src, {
        parseOptions: options.parseOptions,
        sync: options.sync,
        filename: filename2,
        events
      });
    } finally {
      (hits || trace) && import("node:fs").then(function({ writeFileSync }) {
        let ref;
        if ((ref = events?.meta) && typeof ref == "object" && "logs" in ref) {
          let { logs } = ref;
          trace && writeFileSync(trace, logs.join(`
`));
        }
        if (hits) {
          let ref1;
          if (ref1 = events?.meta.hits) {
            let hitData = ref1, total = 0, counts = [...hitData.entries()].sort(([, a], [, b]) => b - a).map(([k, v]) => (total += v, `${k}: ${v}`)).join(`
`), hitSummary = `Total: ${total}

${counts}`;
            return writeFileSync(hits, hitSummary);
          }
          return;
        }
      });
    }
    let throwOnErrors = options.errors == null;
    function rest(ast2) {
      if (options = options, options.ast !== "raw" && (ast2 = prune(ast2)), options.ast)
        return ast2;
      function checkErrors() {
        if (throwOnErrors && (options = options, options.errors?.length))
          throw new ParseErrors(options.errors);
      }
      if (options.sourceMap || options.inlineMap) {
        options.sourceMap = new SourceMap2(src);
        let code = generate_civet_default(ast2, options);
        return checkErrors(), options.inlineMap ? `${code}
${options.sourceMap.comment(filename2, filename2 + ".tsx")}` : {
          code,
          sourceMap: options.sourceMap
        };
      }
      let result = generate_civet_default(ast2, options);
      return options.errors?.length && (delete options.errors, options.sourceMap = new SourceMap2(src), generate_civet_default(ast2, options), checkErrors()), result;
    }
    return ast.then != null ? ast.then(rest) : rest(ast);
  }
  var makeCache = function({ hits, trace } = {}) {
    let meta = {}, hitCount;
    hits && (hitCount = /* @__PURE__ */ new Map(), meta.hits = hitCount);
    let logs;
    trace && (logs = [], meta.logs = logs);
    let stateCache = new StateCache(), stack = [];
    return {
      meta,
      enter: function(ruleName, state2) {
        if (hits && hitCount.set(ruleName, (hitCount.get(ruleName) || 0) + 1), uncacheable.has(ruleName))
          return;
        let [stateKey, tagKey] = getStateKey(), key = [tagKey, stateKey, state2.pos, ruleName];
        if (stateCache.has(key)) {
          let result = stateCache.get(key);
          return trace && logs.push("".padStart(stack.length * 2, " ") + ruleName + ":" + state2.pos + "\u{1F4B0}" + (result ? "\u2705" : "\u274C")), {
            cache: result ? { ...result } : void 0
          };
        }
        trace && (logs.push("".padStart(stack.length * 2, " ") + ruleName + ":" + state2.pos + "{"), stack.push(ruleName));
      },
      exit: function(ruleName, state2, result) {
        if (uncacheable.has(ruleName)) {
          trace && logs.push("".padStart(stack.length * 2, " ") + ruleName + ":" + state2.pos + "\u26A0\uFE0F " + (result ? "\u2705" : "\u274C"));
          return;
        }
        let [stateKey, tagKey] = getStateKey(), key = [tagKey, stateKey, state2.pos, ruleName];
        result != null && (result = { ...result }), stateCache.set(key, result), getConfig().verbose && result && console.log(`Parsed ${JSON.stringify(state2.input.slice(state2.pos, result.pos))} [pos ${state2.pos}-${result.pos}] as ${ruleName}`), trace && (stack.pop(), logs.push("".padStart(stack.length * 2, " ") + ruleName + ":" + state2.pos + "} " + (result ? "\u2705" : "\u274C")));
      }
    };
  }, isCompileError = function(err) {
    return err instanceof import_lib2.ParseError || err instanceof ParseErrors;
  };

  // unplugin-civet:/Users/greghuc/workspace/Civet/source/browser.civet.jsx
  async function runScripts(type = "text/civet") {
    let scripts = window.document.querySelectorAll(`script[type=${JSON.stringify(type)}]`);
    for (let i1 = 0, len3 = scripts.length; i1 < len3; i1++) {
      let i = i1, script = scripts[i1];
      runScript(script, `<script>${i}`);
    }
  }
  async function runScript(script, name = "<script>") {
    let options = {
      inlineMap: !0,
      js: !0
    }, code, ref;
    if (ref = script.src || script.getAttribute("data-src")) {
      let source = ref;
      options.filename = source, code = await (await fetch(source)).text();
    } else
      options.filename = script.id || name, code = script.innerHTML;
    let js = await compile(code, options);
    return window.eval(js);
  }
  function autoRunScripts(roots, options = {}) {
    let observer = new MutationObserver(async (mutations) => {
      for (let i2 = 0, len1 = mutations.length; i2 < len1; i2++) {
        let mutation = mutations[i2];
        if (mutation.type === "childList")
          for (let ref1 = mutation.addedNodes, i3 = 0, len22 = ref1.length; i3 < len22; i3++) {
            let node = ref1[i3];
            node.nodeType === 1 && node.tagName === "SCRIPT" && node.type === "text/civet" && await runScript(node);
          }
      }
    });
    options = { ...options, childList: !0 };
    for (let i4 = 0, len3 = roots.length; i4 < len3; i4++) {
      let root = roots[i4];
      observer.observe(root, options);
    }
    return observer;
  }
  if (!(typeof window > "u")) {
    let { currentScript } = document;
    window?.addEventListener?.("DOMContentLoaded", () => {
      if (!currentScript?.hasAttribute("data-no-scripts") && (currentScript?.hasAttribute("data-no-start-scripts") || runScripts(), !currentScript?.hasAttribute("data-no-auto-scripts")))
        return autoRunScripts([document.head, document.body]);
    });
  }
  return __toCommonJS(browser_civet_exports);
})();
