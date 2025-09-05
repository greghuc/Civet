var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
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

// node_modules/@danielx/hera/dist/machine.js
var require_machine = __commonJS({
  "node_modules/@danielx/hera/dist/machine.js"(exports, module) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = (target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    };
    var __copyProps2 = (to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    };
    var __toCommonJS = (mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod);
    var machine_exports = {};
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
    module.exports = __toCommonJS(machine_exports);
    function $EXPECT2(parser2, expectation) {
      return function(ctx, state2) {
        const result = parser2(ctx, state2);
        if (!result)
          ctx.fail(state2.pos, expectation);
        return result;
      };
    }
    function $L249(str) {
      return function(_ctx, state2) {
        const { input, pos } = state2, { length } = str, end = pos + length;
        if (input.substring(pos, end) === str) {
          return {
            loc: {
              pos,
              length
            },
            pos: end,
            value: str
          };
        }
        return;
      };
    }
    function $R104(regExp) {
      return function(_ctx, state2) {
        const { input, pos } = state2;
        regExp.lastIndex = state2.pos;
        let l, m, v;
        if (m = input.match(regExp)) {
          v = m[0];
          l = v.length;
          return {
            loc: {
              pos,
              length: l
            },
            pos: pos + l,
            value: m
          };
        }
        return;
      };
    }
    function $C2(...terms) {
      return (ctx, state2) => {
        let i = 0;
        const l = terms.length;
        while (i < l) {
          const r = terms[i++](ctx, state2);
          if (r)
            return r;
        }
        return;
      };
    }
    function $S2(...terms) {
      return (ctx, state2) => {
        let { input, pos } = state2, i = 0, value;
        const results = [], s = pos, l = terms.length;
        while (i < l) {
          const r = terms[i++](ctx, { input, pos });
          if (r) {
            ({ pos, value } = r);
            results.push(value);
          } else
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
        const r = fn(ctx, state2);
        if (r)
          return r;
        const { pos } = state2;
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
        let { input, pos } = state2;
        let value;
        const s = pos;
        const results = [];
        while (true) {
          const prevPos = pos;
          const r = fn(ctx, { input, pos });
          if (!r)
            break;
          ({ pos, value } = r);
          if (pos === prevPos)
            break;
          else
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
        const { input, pos: s } = state2;
        let value;
        const first = fn(ctx, state2);
        if (!first)
          return;
        let { pos } = first;
        const results = [first.value];
        while (true) {
          const prevPos = pos;
          const r = fn(ctx, { input, pos });
          if (!r)
            break;
          ({ pos, value } = r);
          if (pos === prevPos)
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
        const newState = fn(ctx, state2);
        if (!newState)
          return;
        newState.value = state2.input.substring(state2.pos, newState.pos);
        return newState;
      };
    }
    function $N2(fn) {
      return (ctx, state2) => {
        const newState = fn(ctx, state2);
        if (newState)
          return;
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
        const newState = fn(ctx, state2);
        if (!newState)
          return;
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
        const result = parser2(ctx, state2);
        if (!result)
          return;
        if (ctx.tokenize)
          return result;
        const { value } = result;
        const mappedValue = fn(value);
        result.value = mappedValue;
        return result;
      };
    }
    function $TR2(parser2, fn) {
      return function(ctx, state2) {
        const result = parser2(ctx, state2);
        if (!result)
          return;
        if (ctx.tokenize)
          return result;
        const { loc, value } = result;
        const mappedValue = fn(SKIP, loc, ...value);
        if (mappedValue === SKIP) {
          return;
        }
        result.value = mappedValue;
        return result;
      };
    }
    function $TS2(parser2, fn) {
      return function(ctx, state2) {
        const result = parser2(ctx, state2);
        if (!result)
          return;
        if (ctx.tokenize)
          return result;
        const { loc, value } = result;
        const mappedValue = fn(SKIP, loc, value, ...value);
        if (mappedValue === SKIP) {
          return;
        }
        result.value = mappedValue;
        return result;
      };
    }
    function $TV2(parser2, fn) {
      return function(ctx, state2) {
        const result = parser2(ctx, state2);
        if (!result)
          return;
        if (ctx.tokenize)
          return result;
        const { loc, value } = result;
        const mappedValue = fn(SKIP, loc, value, value);
        if (mappedValue === SKIP) {
          return;
        }
        result.value = mappedValue;
        return result;
      };
    }
    function $R$02(parser2) {
      return function(ctx, state2) {
        const result = parser2(ctx, state2);
        if (!result)
          return;
        const value = result.value[0];
        result.value = value;
        return result;
      };
    }
    function $EVENT2(ctx, state2, name, fn) {
      let eventData, enter, exit;
      if (enter = ctx.enter) {
        const result2 = enter(name, state2);
        if (result2) {
          if ("cache" in result2)
            return result2.cache;
          eventData = result2.data;
        }
      }
      let result = fn(ctx, state2);
      if (result && ctx.tokenize) {
        result = $TOKEN(name, state2, result);
      }
      if (exit = ctx.exit)
        exit(name, state2, result, eventData);
      return result;
    }
    function $EVENT_C2(ctx, state2, name, fns) {
      let eventData, enter, exit;
      if (enter = ctx.enter) {
        const result2 = enter(name, state2);
        if (result2) {
          if ("cache" in result2)
            return result2.cache;
          eventData = result2.data;
        }
      }
      let result, i = 0, l = fns.length;
      while (!result && i < l) {
        if (result = fns[i](ctx, state2))
          break;
        i++;
      }
      if (result && ctx.tokenize) {
        result = $TOKEN(name, state2, result);
      }
      if (exit = ctx.exit)
        exit(name, state2, result, eventData);
      return result;
    }
    function $TOKEN(name, state2, newState) {
      if (!newState)
        return;
      newState.value = {
        type: name,
        children: [newState.value].flat(),
        token: state2.input.substring(state2.pos, newState.pos),
        loc: newState.loc
      };
      return newState;
    }
    var SKIP = {};
    function Validator2() {
      const failHintRegex = /\S+|\s+|$/y;
      const failExpected = Array(16);
      let failIndex = 0;
      let maxFailPos = 0;
      function fail(pos, expected) {
        if (pos < maxFailPos)
          return;
        if (pos > maxFailPos) {
          maxFailPos = pos;
          failExpected.length = failIndex = 0;
        }
        failExpected[failIndex++] = expected;
        return;
      }
      function location(input, pos) {
        const [line, column] = input.split(/\n|\r\n|\r/).reduce(([row, col], line2) => {
          const l = line2.length + 1;
          if (pos >= l) {
            pos -= l;
            return [row + 1, 1];
          } else if (pos >= 0) {
            col += pos;
            pos = -1;
            return [row, col];
          } else {
            return [row, col];
          }
        }, [1, 1]);
        return [line, column];
      }
      function validate(input, result, { filename: filename2 }) {
        if (result && result.pos === input.length)
          return result.value;
        const expectations = Array.from(new Set(failExpected.slice(0, failIndex)));
        let l = location(input, maxFailPos), [line, column] = l;
        if (result && result.pos > maxFailPos) {
          l = location(input, result.pos);
          throw new Error(`${filename2}:${line}:${column} Unconsumed input at #{l}

${input.slice(result.pos)}
`);
        }
        if (expectations.length) {
          failHintRegex.lastIndex = maxFailPos;
          let [hint] = input.match(failHintRegex);
          if (hint.length)
            hint = JSON.stringify(hint);
          else
            hint = "EOF";
          const error = new ParseError2("Failed to parse", `Expected:
	${expectations.join("\n	")}
Found: ${hint}
`, filename2, line, column, maxFailPos);
          throw error;
        }
        if (result) {
          throw new Error(`
Unconsumed input at ${l}

${input.slice(result.pos)}
`);
        }
        throw new Error("No result");
      }
      function reset() {
        failIndex = 0;
        maxFailPos = 0;
        failExpected.length = 0;
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
        if (body)
          message += `
${body}`;
        super(message);
        this.header = header;
        this.body = body;
        this.filename = filename2;
        this.line = line;
        this.column = column;
        this.offset = offset;
        this.name = "ParseError";
        this.message = message;
      }
    };
  }
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
    if (a !== b) {
      throw new Error(`Assertion failed [${msg}]: ${a} !== ${b}`);
    }
  },
  notEqual(a, b, msg) {
    if (a === b) {
      throw new Error(`Assertion failed [${msg}]: ${a} === ${b}`);
    }
  },
  notNull(a, msg) {
    if (!(a != null)) {
      throw new Error(`Assertion failed [${msg}]: got null`);
    }
    ;
    return;
  }
};
function addParentPointers(node, parent) {
  if (node == null) return;
  if (typeof node !== "object") return;
  if (Array.isArray(node)) {
    for (const child of node) {
      addParentPointers(child, parent);
    }
    return;
  }
  node = node;
  if (parent != null) {
    node.parent = parent;
  }
  if (node.children) {
    for (let ref = node.children, i1 = 0, len1 = ref.length; i1 < len1; i1++) {
      const child = ref[i1];
      addParentPointers(child, node);
    }
  }
}
function clone(node) {
  removeParentPointers(node);
  return deepCopy(node);
}
function removeParentPointers(node) {
  if (!(node != null && typeof node === "object")) {
    return;
  }
  if (Array.isArray(node)) {
    for (const child of node) {
      removeParentPointers(child);
    }
    return;
  }
  node.parent = null;
  if (node.children) {
    for (const child of node.children) {
      removeParentPointers(child);
    }
  }
}
function maybeWrap(node, parent) {
  if (!isASTNodeObject(node)) {
    updateParentPointers(node = {
      type: "Wrapper",
      children: [node],
      parent
    });
  }
  return node;
}
function maybeUnwrap(node) {
  if (node?.type === "Wrapper") {
    return node.children[0];
  } else {
    return node;
  }
}
function isASTNodeObject(node) {
  return typeof node === "object" && node != null && !Array.isArray(node);
}
function isParent(node) {
  return node != null && node.children != null;
}
function isToken(node) {
  return node != null && node.token != null;
}
function isEmptyBareBlock(node) {
  if (node?.type !== "BlockStatement") return false;
  const { bare, expressions } = node;
  return bare && (Array.isArray(expressions) && len(expressions, 0) || Array.isArray(expressions) && len(expressions, 1) && Array.isArray(expressions[0]) && expressions[0].length >= 2 && typeof expressions[0][1] === "object" && expressions[0][1] != null && "type" in expressions[0][1] && expressions[0][1].type === "EmptyStatement");
}
function isFunction(node) {
  if (node && typeof node === "object" && "type" in node) {
    const { type } = node;
    return type === "FunctionExpression" || type === "ArrowFunction" || type === "MethodDefinition";
  }
  return false;
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
  if (!node) return true;
  if (node.type === "Ref") return false;
  if (node.token) return /^\s*$/.test(node.token);
  if (node.children) node = node.children;
  if (!node.length) return true;
  if (typeof node === "string") return /^\s*$/.test(node);
  if (Array.isArray(node)) return node.every(isWhitespaceOrEmpty);
  return false;
}
function firstNonSpace(node) {
  if (!(node != null)) {
    return;
  }
  if (Array.isArray(node)) {
    for (let i2 = 0, len22 = node.length; i2 < len22; i2++) {
      const child = node[i2];
      let ref1;
      if (ref1 = firstNonSpace(child)) {
        const first = ref1;
        return first;
      }
    }
    return void 0;
  } else if (isParent(node)) {
    let ref2;
    if (ref2 = firstNonSpace(node.children)) {
      const first = ref2;
      return first;
    } else {
      return node;
    }
  } else if (isToken(node)) {
    let m;
    if (m = node.token, typeof m === "string" && /^[ \t]*$/.test(m)) {
      return;
    }
  } else if (typeof node === "string") {
    if (typeof node === "string" && /^[ \t]*$/.test(node)) {
      return;
    }
  }
  return node;
}
function isExit(node) {
  if (!(node != null)) {
    return false;
  }
  let ref3;
  let ref4;
  switch (node.type) {
    // Exit from normal flow
    case "ReturnStatement":
    case "ThrowStatement":
    case "BreakStatement":
    case "ContinueStatement": {
      return true;
    }
    // if checks then and else clause
    case "IfStatement": {
      return (
        // `insertReturn` for IfStatement adds a return to children
        // when there's no else block
        (ref3 = node.children)[ref3.length - 1]?.type === "ReturnStatement" || (ref4 = node.children)[ref4.length - 1]?.[1]?.type === "ReturnStatement" || isExit(node.then) && isExit(node.else?.block)
      );
    }
    case "PatternMatchingStatement": {
      return isExit(node.children[0][1]);
    }
    case "SwitchStatement": {
      return (
        // Every clause should exit, or continue to next clause
        (() => {
          let results = true;
          for (const clause of node.caseBlock.clauses) {
            let m1;
            if (m1 = clause.type, m1 === "CaseClause" || m1 === "WhenClause" || m1 === "DefaultClause") {
              if (!(!(clause.type === "WhenClause" && clause.break) && !gatherRecursiveWithinFunction(clause.block, ($) => $.type === "BreakStatement").length)) {
                results = false;
                break;
              }
            } else {
              if (!isExit(clause.block)) {
                results = false;
                break;
              }
            }
          }
          return results;
        })() && // Ensure exhaustive by requiring an else/default clause
        (() => {
          let results1 = false;
          let i3 = 0;
          for (const clause of node.caseBlock.clauses) {
            const i = i3++;
            if (clause.type === "DefaultClause" && // Require default clause to exit or continue to next clause
            // (checked above) and eventually reach an exiting clause
            (() => {
              let results2 = false;
              for (const later of node.caseBlock.clauses.slice(i)) {
                let m2;
                if ((m2 = later.type, m2 === "CaseClause" || m2 === "WhenClause" || m2 === "DefaultClause") && isExit(later.block)) {
                  results2 = true;
                  break;
                }
              }
              return results2;
            })()) {
              results1 = true;
              break;
            }
          }
          return results1;
        })()
      );
    }
    case "TryStatement": {
      return node.blocks.every(isExit);
    }
    case "BlockStatement": {
      return node.expressions.some((s) => isExit(s[1]));
    }
    // Infinite loops
    case "IterationStatement": {
      return isLoopStatement(node) && gatherRecursiveWithinFunction(node.block, ($1) => $1.type === "BreakStatement").length === 0;
    }
    // TODO: Distinguish between break of this loop vs. break of inner loops
    default: {
      return false;
    }
  }
}
function isLoopStatement(node) {
  return node.type === "IterationStatement" && node.condition?.type === "ParenthesizedExpression" && node.condition.expression?.type === "Literal" && node.condition.expression?.raw === "true";
}
function isComma(node) {
  if (node?.token === ",") {
    return node;
  } else if (Array.isArray(node) && node[node.length - 1]?.token === ",") {
    return node[node.length - 1];
  }
  ;
  return;
}
function stripTrailingImplicitComma(children) {
  const last = children[children.length - 1];
  if (isComma(last) && last.implicit) {
    return children.slice(0, -1);
  } else {
    return children;
  }
}
function hasTrailingComment(node) {
  if (!(node != null)) {
    return false;
  }
  if (node.type === "Comment") {
    return true;
  }
  if (Array.isArray(node)) {
    return hasTrailingComment(node[node.length - 1]);
  }
  if ("children" in node) {
    let ref5;
    return hasTrailingComment((ref5 = node.children)[ref5.length - 1]);
  }
  return false;
}
function insertTrimmingSpace(target, c) {
  if (!(target != null)) {
    return target;
  }
  if (Array.isArray(target)) {
    if (target.length === 0) {
      return c;
    }
    const results3 = [];
    for (let i4 = 0, len3 = target.length; i4 < len3; i4++) {
      const i = i4;
      const e = target[i4];
      if (i === 0) {
        results3.push(insertTrimmingSpace(e, c));
      } else {
        results3.push(e);
      }
    }
    ;
    return results3;
  } else if (isParent(target)) {
    const oldChildren = target.children;
    target = {
      ...target,
      children: insertTrimmingSpace(target.children, c)
    };
    for (const key in target) {
      const i = oldChildren.indexOf(target[key]);
      if (i >= 0) {
        target[key] = target.children[i];
      }
    }
    return target;
  } else if (isToken(target)) {
    return {
      ...target,
      token: target.token.replace(/^ ?/, c)
    };
  } else if (typeof target === "string") {
    return target.replace(/^ ?/, c);
  } else {
    return target;
  }
}
function trimFirstSpace(target) {
  return insertTrimmingSpace(target, "");
}
function inplaceInsertTrimmingSpace(target, c) {
  if (!(target != null)) {
    return target;
  }
  if (Array.isArray(target)) {
    inplaceInsertTrimmingSpace(target[0], c);
  } else if (isParent(target)) {
    inplaceInsertTrimmingSpace(target.children, c);
  } else if (isToken(target)) {
    target.token = target.token.replace(/^ ?/, c);
  }
}
function getTrimmingSpace(target) {
  if (!(target != null)) {
    return;
  }
  if (Array.isArray(target)) {
    return getTrimmingSpace(target[0]);
  } else if (isParent(target)) {
    return getTrimmingSpace(target.children[0]);
  } else if (isToken(target)) {
    return target.token.match(/^ ?/)[0];
  }
  ;
  return;
}
function prepend(prefix, node) {
  if (!prefix || Array.isArray(prefix) && len(prefix, 0)) {
    return node;
  }
  if (Array.isArray(node)) {
    return [prefix, ...node];
  } else if (isParent(node)) {
    return {
      ...node,
      children: [prefix, ...node.children]
    };
  } else {
    return [prefix, node];
  }
}
function append(node, suffix) {
  if (!suffix || Array.isArray(suffix) && len(suffix, 0)) {
    return node;
  }
  if (Array.isArray(node)) {
    return [...node, suffix];
  } else if (isParent(node)) {
    return {
      ...node,
      children: [...node.children, suffix]
    };
  } else {
    return [node, suffix];
  }
}
function inplacePrepend(prefix, node) {
  if (!prefix) {
    return;
  }
  if (Array.isArray(prefix) && !prefix.length) {
    return;
  }
  if (Array.isArray(node)) {
    node.unshift(prefix);
  } else if (isParent(node)) {
    node.children.unshift(prefix);
  } else {
    throw new Error("Can't prepend to a leaf node");
  }
}
function literalValue(literal) {
  let { raw } = literal;
  switch (raw) {
    case "null":
      return null;
    case "true":
      return true;
    case "false":
      return false;
  }
  let ref6;
  switch (literal.subtype) {
    case "StringLiteral": {
      assert.equal(
        raw.startsWith('"') && raw.endsWith('"') || raw.startsWith("'") && raw.endsWith("'"),
        true,
        "String literal should begin and end in single or double quotes"
      );
      return raw.slice(1, -1);
    }
    case "NumericLiteral": {
      raw = raw.replace(/_/g, "");
      if (raw.endsWith("n")) {
        return BigInt(raw.slice(0, -1));
      } else if (raw.match(/[\.eE]/)) {
        return parseFloat(raw);
      } else if ((ref6 = raw.match(/^[+-]?0(.)/)) && Array.isArray(ref6) && len(ref6, 2)) {
        const [, base] = ref6;
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
    default: {
      throw new Error("Unrecognized literal " + JSON.stringify(literal));
    }
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
          if (literal.raw.endsWith("n")) {
            t = "bigint";
          } else {
            t = "number";
          }
          ;
          break;
        }
        case "StringLiteral": {
          t = "string";
          break;
        }
        default: {
          throw new Error(`unknown literal subtype ${literal.subtype}`);
        }
      }
      ;
      break;
    }
    default: {
      throw new Error(`unknown literal type ${literal.type}`);
    }
  }
  return {
    type: "TypeLiteral",
    t,
    children: [t]
  };
}
function makeNumericLiteral(n) {
  const s = n.toString();
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
  if (!target) return;
  if (Array.isArray(target)) {
    let i = 0;
    let l = target.length;
    while (i < l) {
      const t = target[i];
      if (t && (t.length || t.token || t.children)) {
        break;
      }
      i++;
    }
    if (i < l) {
      return startsWith(target[i], value);
    }
  }
  if (typeof target === "string") return value.test(target);
  if (target.children) return startsWith(target.children, value);
  if (target.token) return value.test(target.token);
  return;
}
function startsWithPredicate(node, predicate, skip = isWhitespaceOrEmpty) {
  if (node == null || typeof node === "string") {
    return void 0;
  }
  if (Array.isArray(node)) {
    for (let i5 = 0, len4 = node.length; i5 < len4; i5++) {
      const child = node[i5];
      if (skip(child)) {
        continue;
      }
      return startsWithPredicate(child, predicate);
    }
    return;
  }
  if (predicate(node)) {
    return node;
  }
  if (!(node.children != null)) {
    return;
  }
  return startsWithPredicate(node.children, predicate);
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
  const copied = /* @__PURE__ */ new Map();
  return recurse(root);
  function recurse(node) {
    if (!(node != null && typeof node === "object")) {
      return node;
    }
    if (!copied.has(node)) {
      if (Array.isArray(node)) {
        const array = new Array(node.length);
        copied.set(node, array);
        for (let i6 = 0, len5 = node.length; i6 < len5; i6++) {
          const i = i6;
          const item = node[i6];
          array[i] = recurse(item);
        }
      } else if (node?.type === "Ref") {
        copied.set(node, node);
      } else {
        const obj = {};
        copied.set(node, obj);
        for (const key in node) {
          const value = node[key];
          if (key === "parent") {
            obj.parent = copied.get(value) ?? value;
          } else {
            obj[key] = recurse(value);
          }
        }
      }
    }
    return copied.get(node);
  }
}
function replaceNode(node, newNode, parent) {
  parent ??= node?.parent;
  if (!(parent != null)) {
    throw new Error("replaceNode failed: node has no parent");
  }
  function recurse(children) {
    for (let i7 = 0, len6 = children.length; i7 < len6; i7++) {
      const i = i7;
      const child = children[i7];
      if (child === node) {
        children[i] = newNode;
        return true;
      } else if (Array.isArray(child)) {
        if (recurse(child)) {
          return true;
        }
      }
    }
    return false;
  }
  if (!recurse(parent.children)) {
    throw new Error("replaceNode failed: didn't find child node in parent");
  }
  for (const key in parent) {
    const value = parent[key];
    if (value === node) {
      parent[key] = newNode;
    }
  }
  if (isASTNodeObject(newNode)) {
    newNode.parent = parent;
  }
}
function replaceNodes(root, predicate, replacer) {
  if (!(root != null)) {
    return root;
  }
  const array = Array.isArray(root) ? root : root.children;
  if (!array) {
    if (predicate(root)) {
      return replacer(root, root);
    } else {
      return root;
    }
  }
  for (let i8 = 0, len7 = array.length; i8 < len7; i8++) {
    const i = i8;
    const node = array[i8];
    if (!(node != null)) {
      return;
    }
    if (predicate(node)) {
      array[i] = replacer(node, root);
    } else {
      replaceNodes(node, predicate, replacer);
    }
  }
  return root;
}
function removeHoistDecs(node) {
  if (node == null) return;
  if (typeof node !== "object") return;
  if ("hoistDec" in node) {
    node.hoistDec = void 0;
  }
  if (Array.isArray(node)) {
    for (const child of node) {
      removeHoistDecs(child);
    }
    return;
  }
  if (node.children) {
    for (const child of node.children) {
      removeHoistDecs(child);
    }
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
  while (expression && Array.isArray(expression) && len(expression, 1)) {
    const [item] = expression;
    expression = item;
  }
  if (isASTNodeObject(expression)) {
    if (expression.token) {
      return expression;
    }
    if (expression.parenthesized) {
      return expression;
    }
    if (skipParens.has(expression.type)) {
      return expression;
    }
    if (expression.type === "NewExpression" && expression.expression.children.some(($6) => $6?.type === "Call")) {
      return expression;
    }
    if (expression.type === "MemberExpression" && !startsWithPredicate(expression, ($7) => $7.type === "ObjectExpression")) {
      return expression;
    }
  }
  return parenthesizeExpression(expression);
}
function parenthesizeExpression(expression) {
  return makeNode({
    type: "ParenthesizedExpression",
    children: ["(", expression, ")"],
    expression,
    implicit: true
  });
}
function checkValidLHS(node) {
  let ref7;
  switch (node?.type) {
    case "UnaryExpression": {
      node.children.unshift({
        type: "Error",
        message: "Unary expression is not a valid left-hand side"
      });
      return true;
    }
    case "CallExpression": {
      const lastType = (ref7 = node.children)[ref7.length - 1]?.type;
      switch (lastType) {
        case "PropertyAccess":
        case "SliceExpression":
        case "Index": {
          ;
          break;
        }
        default: {
          node.children.splice(-1, 0, {
            type: "Error",
            message: `Call expression ending with ${lastType} is not a valid left-hand side`
          });
          return true;
        }
      }
      ;
      break;
    }
    case "Placeholder": {
      node.children.unshift({
        type: "Error",
        message: `Lone placeholder (${node.subtype}) is not a valid left-hand side`
      });
      return true;
    }
  }
  return false;
}
function updateParentPointers(node, parent, depth = 1) {
  if (!(node != null)) {
    return;
  }
  if (!(typeof node === "object")) {
    return;
  }
  if (Array.isArray(node)) {
    for (let i9 = 0, len8 = node.length; i9 < len8; i9++) {
      const child = node[i9];
      updateParentPointers(child, parent, depth);
    }
    return;
  }
  node = node;
  if (parent != null) {
    node.parent = parent;
  }
  if (depth && isParent(node)) {
    for (let ref8 = node.children, i10 = 0, len9 = ref8.length; i10 < len9; i10++) {
      const child = ref8[i10];
      updateParentPointers(child, node, depth - 1);
    }
  }
}
function makeNode(node) {
  updateParentPointers(node);
  return node;
}
function skipIfOnlyWS(target) {
  if (!target) return target;
  if (Array.isArray(target)) {
    if (target.length === 1) {
      return skipIfOnlyWS(target[0]);
    } else if (target.every((e) => skipIfOnlyWS(e) === void 0)) {
      return void 0;
    }
    return target;
  }
  if (target.token != null && target.token.trim() === "") {
    return void 0;
  }
  return target;
}
function spliceChild(node, child, del, ...replacements) {
  const children = Array.isArray(node) ? node : node.children;
  if (!Array.isArray(children)) {
    throw new Error("spliceChild: non-array node has no children field");
  }
  const index = children.indexOf(child);
  if (index < 0) {
    throw new Error("spliceChild: child not found");
  }
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
  const wrap = suffix.type === "ReturnTypeAnnotation";
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
  if (typeNeedsNoParens.has(type.type)) {
    return type;
  }
  return makeNode({
    type: "TypeParenthesized",
    ts: true,
    children: ["(", type, ")"]
  });
}
function wrapIIFE(expressions, asyncFlag, generatorStar) {
  let awaitPrefix;
  const generator = generatorStar ? [generatorStar] : [];
  const async = [];
  if (asyncFlag) {
    async.push("async ");
  } else if (hasAwait(expressions)) {
    async.push("async ");
    awaitPrefix = {
      type: "Await",
      children: ["await "]
    };
  }
  let yieldWrap = false;
  if (!generator.length) {
    if (hasYield(expressions)) {
      generator.push("*");
      yieldWrap = true;
    }
  }
  const block = makeNode({
    type: "BlockStatement",
    expressions,
    children: ["{", expressions, "}"],
    bare: false,
    root: false
  });
  const parameterList = [];
  const parameters = {
    type: "Parameters",
    children: ["(", parameterList, ")"],
    parameters: parameterList,
    names: []
  };
  const signature = {
    type: "FunctionSignature",
    modifier: {
      async: !!async.length,
      generator: !!generator.length
    },
    parameters,
    returnType: void 0,
    implicitReturn: true,
    // force implicit return in IIFE
    children: generator.length ? [async, "function", generator, parameters] : [async, parameters]
  };
  let fn;
  if (generator.length) {
    fn = makeNode({
      type: "FunctionExpression",
      signature,
      parameters,
      returnType: void 0,
      async,
      block,
      generator,
      children: [...signature.children, block]
    });
  } else {
    fn = makeNode({
      type: "ArrowFunction",
      signature,
      parameters,
      returnType: void 0,
      async,
      block,
      children: [...signature.children, "=>", block]
    });
  }
  const children = [makeLeftHandSideExpression(fn), "()"];
  if (fn.type === "FunctionExpression") {
    if (gatherRecursiveWithinFunction(block, (a1) => typeof a1 === "object" && a1 != null && "token" in a1 && a1.token === "this").length) {
      children.splice(1, 0, ".bind(this)");
    }
    if (gatherRecursiveWithinFunction(block, (a2) => typeof a2 === "object" && a2 != null && "token" in a2 && a2.token === "arguments").length) {
      const binding = {
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
      });
      children[children.length - 1] = "(arguments)";
    }
  }
  let exp = makeNode({
    type: "CallExpression",
    children
  });
  if (yieldWrap) {
    exp = makeLeftHandSideExpression(makeNode({
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
    }));
  } else if (awaitPrefix) {
    exp = makeLeftHandSideExpression([awaitPrefix, exp]);
  }
  return exp;
}
function wrapWithReturn(expression, parent = expression?.parent, semi = false) {
  const children = expression ? ["return ", expression] : ["return"];
  if (semi) {
    children.unshift(";");
  }
  return makeNode({
    type: "ReturnStatement",
    children,
    expression,
    parent
  });
}
function flatJoin(array, separator) {
  const result = [];
  for (let i11 = 0, len10 = array.length; i11 < len10; i11++) {
    const i = i11;
    const items = array[i11];
    if (i) {
      result.push(separator);
    }
    result.push(...items);
  }
  return result;
}

// unplugin-civet:/Users/greghuc/workspace/Civet/source/parser/traversal.civet.jsx
function gatherRecursiveWithinFunction(node, predicate) {
  return gatherRecursive(node, predicate, isFunction);
}
function findChildIndex(parent, child) {
  if (!(parent != null)) {
    return -1;
  }
  const children = Array.isArray(parent) ? parent : parent.children;
  if (!(children != null)) {
    return -1;
  }
  for (let i1 = 0, len3 = children.length; i1 < len3; i1++) {
    const i = i1;
    const c = children[i1];
    if (c === child || Array.isArray(c) && arrayRecurse(c)) {
      return i;
    }
  }
  function arrayRecurse(array) {
    for (let i2 = 0, len1 = array.length; i2 < len1; i2++) {
      const c = array[i2];
      if (c === child || Array.isArray(c) && arrayRecurse(c)) {
        return true;
      }
    }
    return false;
  }
  return -1;
}
function findAncestor(node, predicate, stopPredicate) {
  let { parent } = node;
  while (parent && !stopPredicate?.(parent, node)) {
    if (predicate(parent, node)) {
      return { ancestor: parent, child: node };
    }
    node = parent;
    ({ parent } = node);
  }
  return { ancestor: void 0, child: node };
}
function gatherNodes(node, predicate) {
  if (node == null || typeof node === "string") {
    return [];
  }
  if (Array.isArray(node)) {
    return node.flatMap((n) => gatherNodes(n, predicate));
  }
  if (predicate(node)) {
    return [node];
  }
  switch (node.type) {
    case "BlockStatement": {
      return [];
    }
    case "ForStatement": {
      const isDec = node.declaration?.type === "Declaration";
      return node.children.flatMap((n) => {
        if (isDec && n === node.declaration) {
          return [];
        } else {
          return gatherNodes(n, predicate);
        }
      });
    }
    default: {
      return gatherNodes(
        node.children,
        predicate
      );
    }
  }
}
function gatherRecursive(node, predicate, skipPredicate) {
  if (node == null || typeof node === "string") {
    return [];
  }
  if (Array.isArray(node)) {
    return node.flatMap(($) => gatherRecursive($, predicate, skipPredicate));
  }
  if (skipPredicate?.(node)) {
    return [];
  }
  if (predicate(node)) {
    return [node];
  }
  return gatherRecursive(
    node.children,
    predicate,
    skipPredicate
  );
}
function gatherRecursiveAll(node, predicate) {
  if (node == null || typeof node === "string") {
    return [];
  }
  if (Array.isArray(node)) {
    return node.flatMap((n) => gatherRecursiveAll(n, predicate));
  }
  const nodes = gatherRecursiveAll(
    node.children,
    predicate
  );
  if (predicate(node)) {
    nodes.push(node);
  }
  return nodes;
}

// unplugin-civet:/Users/greghuc/workspace/Civet/source/parser/ref.civet.jsx
var range = (start, end) => {
  const length = end - start;
  if (length <= 0) return [];
  const arr = Array(length);
  for (let i = 0; i < length; ++i) {
    arr[i] = i + start;
  }
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
  if (!(expression != null && typeof expression === "object")) {
    return;
  }
  if (Array.isArray(expression)) {
    const nonempty = range(0, expression.length).filter((i) => !isWhitespaceOrEmpty(expression[i]));
    if (nonempty.length === 1) {
      let ref1;
      if (ref1 = needsRef(expression[nonempty[0]], base)) {
        const ref = ref1;
        return ref;
      }
      return;
    } else {
      return makeRef(base);
    }
  }
  switch (expression.type) {
    case "Ref":
    case "Identifier":
    case "Literal":
    case "Placeholder": {
      return;
    }
  }
  return makeRef(base);
}
function maybeRef(exp, base = "ref") {
  return needsRef(exp, base) || exp;
}
function makeRefAssignment(ref, exp) {
  const refAssignment = makeNode({
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
  const ref = maybeRef(exp, base);
  if (ref === exp) {
    return { ref, refAssignmentComma: [] };
  } else {
    return { ref, ...makeRefAssignment(ref, exp) };
  }
}
function populateRefs(statements) {
  const refNodes = gatherRecursive(statements, ($) => $.type === "Ref");
  if (!refNodes.length) {
    return;
  }
  const ids = gatherRecursive(statements, ($1) => $1.type === "Identifier");
  const names = new Set(ids.flatMap(({ names: names2 }) => names2 || []));
  for (let i1 = 0, len3 = refNodes.length; i1 < len3; i1++) {
    const ref = refNodes[i1];
    if (!(ref.type === "Ref")) {
      continue;
    }
    const { base } = ref;
    ref.type = "Identifier";
    let n = 0;
    let name = base;
    while (names.has(name)) {
      n++;
      name = `${base}${n}`;
    }
    names.add(name);
    ref.children = ref.names = [name];
  }
}

// unplugin-civet:/Users/greghuc/workspace/Civet/source/parser/binding.civet.jsx
function adjustAtBindings(statements, asThis = false) {
  for (let ref1 = gatherRecursiveAll(statements, ($1) => $1.type === "AtBindingProperty"), i1 = 0, len3 = ref1.length; i1 < len3; i1++) {
    const binding = ref1[i1];
    const { ref } = binding;
    if (asThis) {
      const atBinding = binding.binding;
      atBinding.children.pop();
      atBinding.type = void 0;
      binding.children.unshift(ref.id, ": this.", ref.base);
      binding.type = "Property";
      binding.ref = void 0;
      return;
    }
    if (!(ref.names[0] === ref.base)) {
      binding.children.unshift(ref.base, ": ");
    }
  }
}
function adjustBindingElements(elements) {
  const names = elements.flatMap(($2) => $2.names || []);
  const { length } = elements;
  let blockPrefix, restIndex = -1, restCount = 0;
  for (let i2 = 0, len1 = elements.length; i2 < len1; i2++) {
    const i = i2;
    const { type } = elements[i2];
    if (type === "BindingRestElement") {
      if (restIndex < 0) {
        restIndex = i;
      }
      restCount++;
    }
  }
  if (restCount === 0) {
    return {
      children: elements,
      names,
      blockPrefix,
      length
    };
  } else if (restCount === 1) {
    const rest = elements[restIndex];
    const after = elements.slice(restIndex + 1);
    const restIdentifier = rest.binding.ref || rest.binding;
    names.push(...rest.names || []);
    let l = after.length;
    if (l) {
      if (arrayElementHasTrailingComma(after[l - 1])) l++;
      const elements2 = trimFirstSpace(after);
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
  const err = {
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
    const p = ref2[i3];
    const { subbinding } = p;
    subbindings.push(", ", subbinding);
    gatherSubbindings(subbinding, subbindings);
  }
  return subbindings;
}
function simplifyBindingProperties(node) {
  const results = [];
  for (let ref3 = gatherRecursiveAll(node, ($3) => $3.type === "BindingProperty"), i4 = 0, len3 = ref3.length; i4 < len3; i4++) {
    const p = ref3[i4];
    const { name, value } = p;
    if (value?.type === "NamedBindingPattern" && value.binding === name) {
      const [ws] = p.children;
      results.push(p.children = [ws, name, p.delim]);
    } else {
      results.push(void 0);
    }
  }
  ;
  return results;
}
function gatherBindingCode(statements, opts) {
  const thisAssignments = [];
  const splices = [];
  function insertRestSplices(s, p, thisAssignments2) {
    let m;
    for (let ref4 = gatherRecursiveAll(
      s,
      (n) => n.blockPrefix || opts?.injectParamProps && n.accessModifier || n.type === "AtBinding" || opts?.assignPins && (m = n.type, m === "PinPattern" || m === "PinProperty")
    ), i5 = 0, len4 = ref4.length; i5 < len4; i5++) {
      let n = ref4[i5];
      if (n.type === "AtBinding") {
        const { ref } = n;
        const { id } = ref;
        thisAssignments2.push([`this.${id} = `, ref]);
        continue;
      }
      if (opts?.assignPins) {
        if (n.type === "PinProperty") {
          n.children = n.children.flatMap(($4) => $4 === n.name ? [n.name, ": ", n.value] : $4);
          updateParentPointers(n);
          n = n.value;
        }
        if (n.type === "PinPattern") {
          n.ref = makeRef(
            n.expression.type === "Identifier" ? n.expression.name : "pin"
          );
          n.children = [n.ref];
          updateParentPointers(n);
          thisAssignments2.push({
            type: "AssignmentExpression",
            children: [n.expression, " = ", n.ref],
            names: [],
            lhs: n.expression,
            assigned: n.expression,
            expression: n.ref
          });
          continue;
        }
      }
      if (opts?.injectParamProps && n.type === "Parameter" && n.accessModifier) {
        for (let ref5 = n.names, i6 = 0, len5 = ref5.length; i6 < len5; i6++) {
          const id = ref5[i6];
          thisAssignments2.push({
            type: "AssignmentExpression",
            children: [`this.${id} = `, id],
            js: true
          });
        }
        continue;
      }
      const { blockPrefix } = n;
      p.push(blockPrefix);
      insertRestSplices(blockPrefix, p, thisAssignments2);
    }
  }
  insertRestSplices(statements, splices, thisAssignments);
  return [splices, thisAssignments];
}
function arrayElementHasTrailingComma(elementNode) {
  let ref6;
  const lastChild = (ref6 = elementNode.children)[ref6.length - 1];
  return lastChild && lastChild[lastChild.length - 1]?.token === ",";
}
function gatherBindingPatternTypeSuffix(pattern) {
  if (pattern.typeSuffix != null) {
    return pattern;
  }
  let count = 0;
  switch (pattern.type) {
    case "ArrayBindingPattern": {
      {
        const results1 = [];
        for (let ref7 = pattern.elements, i7 = 0, len6 = ref7.length; i7 < len6; i7++) {
          const elem = ref7[i7];
          let { typeSuffix } = elem;
          typeSuffix ??= elem.binding?.typeSuffix;
          if (typeSuffix) {
            count++;
          }
          let typeElement = [typeSuffix?.t, elem.delim];
          if (typeSuffix?.optional) {
            typeElement[0] = parenthesizeType(typeElement[0]);
            typeElement.unshift("undefined |");
          }
          if (elem.type === "BindingRestElement") {
            typeElement[0] ??= "unknown[]";
            typeElement.unshift(elem.dots);
          } else {
            typeElement[0] ??= "unknown";
          }
          results1.push(typeElement);
        }
        ;
        const types = results1;
        if (count) {
          const t = [": [", types, "]"];
          pattern.typeSuffix = {
            type: "TypeSuffix",
            ts: true,
            t,
            children: [t]
          };
        }
      }
      ;
      break;
    }
    case "ObjectBindingPattern": {
      {
        let restType;
        const results2 = [];
        for (let ref8 = pattern.properties, i8 = 0, len7 = ref8.length; i8 < len7; i8++) {
          const prop = ref8[i8];
          let { typeSuffix } = prop;
          typeSuffix ??= prop.value?.typeSuffix;
          if (typeSuffix) {
            count++;
          }
          typeSuffix ??= {
            type: "TypeSuffix",
            ts: true,
            children: [": unknown"]
          };
          if (prop.initializer && !typeSuffix.optional) {
            typeSuffix.children.unshift(typeSuffix.optional = "?");
          }
          switch (prop.type) {
            case "BindingProperty": {
              const ws = prop.children.slice(0, prop.children.indexOf(prop.name));
              results2.push([...ws, prop.name, typeSuffix, prop.delim]);
              break;
            }
            case "AtBindingProperty": {
              const ws = prop.children.slice(0, prop.children.indexOf(prop.binding));
              results2.push([...ws, prop.ref.id.replace(/^#/, ""), typeSuffix, prop.delim]);
              break;
            }
            case "BindingRestProperty": {
              restType = prop.typeSuffix?.t;
              continue;
            }
          }
        }
        ;
        const types = results2;
        if (count) {
          const t = ["{", types, "}"];
          if (restType != null) {
            t.push(" & ", parenthesizeType(trimFirstSpace(restType)));
          }
          pattern.typeSuffix = {
            type: "TypeSuffix",
            ts: true,
            t,
            children: [": ", t]
          };
        }
      }
      ;
      break;
    }
  }
  return pattern;
}

// unplugin-civet:/Users/greghuc/workspace/Civet/source/parser/comptime.civet.jsx
import { resolve, dirname } from "node:path";
import { createRequire } from "node:module";
import vm from "node:vm";

// unplugin-civet:/Users/greghuc/workspace/Civet/source/parser/helper.civet.jsx
var preludeVar = "var ";
function ts(children) {
  return {
    ts: true,
    children: Array.isArray(children) ? children : [children]
  };
}
var asAny = ts(" as any");
var declareHelper = {
  indexOf(indexOfRef) {
    state.prelude.push(["", [
      // [indent, statement]
      preludeVar,
      indexOfRef,
      ts([": <T>(this: T[], searchElement: T) => number"]),
      " = [].indexOf",
      asAny
    ], ";\n"]);
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
    ], ";\n"]);
  },
  is(isRef) {
    state.prelude.push(["", [
      // [indent, statement]
      preludeVar,
      isRef,
      ts(": { <B, A extends B> (a: A, b: B): b is A, <A, B> (a: A, b: B): a is A & B }"),
      " = Object.is",
      asAny
    ], ";\n"]);
  },
  /**
   * Array length check with type guard.
   * From tlgreg https://discord.com/channels/933472021310996512/1012166187196629113/1157386582546976873
   */
  len(lenRef) {
    state.prelude.push(["", [
      ts(["function ", lenRef, "<T extends readonly unknown[], N extends number>(arr: T, length: N): arr is T & { length: N } { return arr.length === length }"]),
      {
        js: true,
        children: ["function ", lenRef, "(arr, length) { return arr.length === length }"]
      },
      "\n"
    ]]);
  },
  RSliceable(RSliceableRef) {
    state.prelude.push([
      "",
      ts(["type ", RSliceableRef, "<R> = string | {length: number; slice(start: number, end: number): {reverse(): R}}\n"])
    ]);
  },
  rslice(rsliceRef) {
    const RSliceableRef = getHelperRef("RSliceable");
    state.prelude.push(["", [
      preludeVar,
      rsliceRef,
      ts([": <R, T extends string | ", RSliceableRef, "<R>>(a: T, start?: number, end?: number) => T extends string ? string : T extends ", RSliceableRef, "<infer R> ? R : never"]),
      " = ((a, start = -1, end = -1) => {\n",
      "  const l = a.length\n",
      "  if (start < 0) start += l\n",
      "  if (++end < 0) end += l\n",
      "  if (typeof a === 'string') {\n",
      '    let r = ""\n',
      "    if (start > l-1) start = l-1\n",
      "    if (end < 0) end = 0\n",
      "    for (let i = start; i >= end; --i) r += a[i]\n",
      "    return r",
      asAny,
      "\n",
      "  } else {\n",
      "    return a.slice(end, start + 1).reverse()\n",
      "  }\n",
      "})"
    ], ";\n"]);
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
    ], ";\n"]);
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
    ], ";\n"]);
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
    ], ";\n"]);
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
    ], ";\n"]);
  },
  div(divRef) {
    state.prelude.push(["", [
      // [indent, statement]
      preludeVar,
      divRef,
      ts(": (a: number, b: number) => number"),
      " = (a, b) => Math.floor(a / b)"
    ], ";\n"]);
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
    ], ";\n"]);
  },
  Falsy(FalsyRef) {
    state.prelude.push([
      "",
      // [indent, statement]
      ts(["type ", FalsyRef, " = false | 0 | '' | 0n | null | undefined"]),
      ";\n"
    ]);
  },
  xor(xorRef) {
    const Falsy = getHelperRef("Falsy");
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
    ], ";\n"]);
  },
  xnor(xnorRef) {
    const Falsy = getHelperRef("Falsy");
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
    ], ";\n"]);
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
    ], ";\n"]);
  },
  AutoPromise(ref) {
    state.prelude.push([
      "",
      ts(["type ", ref, "<T> = Promise<Awaited<T>>"]),
      ";\n"
    ]);
  },
  JSX(jsxRef) {
    state.prelude.push([
      "",
      // [indent, statement]
      ts(["import type { JSX as ", jsxRef, " } from 'solid-js'"]),
      ";\n"
    ]);
  },
  IntrinsicElements(intrinsicElementsRef) {
    const JSX = getHelperRef("JSX");
    state.prelude.push([
      "",
      // [indent, statement, delim]
      ts([
        "type ",
        intrinsicElementsRef,
        "<K extends keyof ",
        JSX,
        ".IntrinsicElements> =\n",
        "  ",
        JSX,
        ".IntrinsicElements[K] extends ",
        JSX,
        ".DOMAttributes<infer T> ? T : unknown"
      ]),
      ";\n"
    ]);
  }
};
function getHelperRef(base) {
  if (base in state.helperRefs) {
    return state.helperRefs[base];
  }
  const ref = makeRef(base);
  if (!(base in declareHelper)) {
    throw new Error(`Unknown helper function: ${base}`);
  }
  declareHelper[base](ref);
  return state.helperRefs[base] = ref;
}
function peekHelperRef(base) {
  return state.helperRefs[base];
}
function extractPreludeFor(node) {
  if (!state.prelude.length) {
    return state.prelude;
  }
  const allHelpers = new Set(Object.values(state.helperRefs));
  const isHelper = allHelpers.has.bind(allHelpers);
  const usedHelpers = new Set(gatherRecursive(node, isHelper));
  while (true) {
    let prelude = state.prelude.filter((s) => {
      return gatherRecursive(s, usedHelpers.has.bind(usedHelpers)).length;
    });
    let changed = false;
    for (let ref1 = gatherRecursive(prelude, isHelper), i = 0, len3 = ref1.length; i < len3; i++) {
      const helper = ref1[i];
      if (!usedHelpers.has(helper)) {
        usedHelpers.add(helper);
        changed = true;
      }
    }
    if (!changed) {
      return prelude;
    }
  }
}

// unplugin-civet:/Users/greghuc/workspace/Civet/source/generate.civet.jsx
function stringify(node) {
  try {
    return JSON.stringify(removeParentPointers(node));
  } catch (e) {
    return `${node}`;
  }
}
function gen(root, options) {
  let ref;
  const updateSourceMap = (ref = options?.sourceMap)?.updateSourceMap.bind(ref);
  return recurse(root);
  function recurse(node) {
    if (!(node != null)) {
      return "";
    }
    if (typeof node === "string") {
      updateSourceMap?.(node);
      return node;
    }
    if (Array.isArray(node)) {
      return node.map(recurse).join("");
    }
    if (typeof node === "object") {
      if (options.js && node.ts) {
        return "";
      }
      if (!options.js && node.js) {
        return "";
      }
      if (node.type === "Error") {
        const filename2 = options?.filename ?? "unknown";
        let line = "?";
        let column = "?";
        let offset;
        let ref1;
        if (ref1 = options.sourceMap) {
          const sourceMap = ref1;
          if (node.$loc != null) {
            sourceMap.updateSourceMap("", node.$loc.pos);
          }
          line = sourceMap.srcLine + 1;
          column = sourceMap.srcColumn + 1;
          offset = sourceMap.srcOffset;
        }
        options.errors ??= [];
        options.errors.push(new import_lib2.ParseError(
          node.message,
          void 0,
          // body
          filename2,
          line,
          column,
          offset
        ));
        return "";
      }
      if ("$loc" in node) {
        const { token, $loc } = node;
        if ($loc != null) {
          updateSourceMap?.(token, $loc.pos);
        }
        return token;
      }
      if (!node.children) {
        if (node.token != null) {
          return node.token;
        }
        switch (node.type) {
          case "Ref": {
            throw new Error(`Unpopulated ref ${stringify(node)}`);
          }
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
  if (!(node != null)) {
    return;
  }
  if (typeof node === "string" && node.length === 0) {
    return;
  }
  if (node.parent != null) {
    delete node.parent;
  }
  if (Array.isArray(node)) {
    const a = node.map(prune).filter(($) => $);
    if (a.length > 1) {
      return a;
    }
    if (a.length === 1) {
      return a[0];
    }
    return;
  }
  if (node.children != null) {
    node.children = prune(node.children) || [];
    return node;
  }
  return node;
}

// unplugin-civet:/Users/greghuc/workspace/Civet/source/parser/comptime.civet.jsx
function expressionizeComptime(statement) {
  const { expressions } = statement.block;
  const expression = wrapIIFE(expressions, hasAwait(expressions));
  return makeNode({
    type: "ComptimeExpression",
    expression,
    children: [expression]
  });
}
function processComptime(statements) {
  if (!getInitialConfig()?.comptime) {
    return;
  }
  const promises = runComptime(statements);
  if (getSync()) {
    return;
  } else {
    return (async () => {
      {
        await Promise.all(promises);
      }
    })();
  }
}
function runComptime(statements) {
  const sync2 = getSync();
  return gatherRecursive(
    statements,
    (node) => {
      return node.type === "ComptimeStatement" || node.type === "ComptimeExpression";
    }
  ).map((exp) => {
    let content = exp.type === "ComptimeStatement" ? exp.block : exp.expression;
    content = [
      ...extractPreludeFor(content),
      content
    ];
    const options = { js: true };
    let js = generate_civet_default(prune(content), options);
    js = `"use strict";${js}`;
    if (options.errors != null) {
      return;
    }
    let output, context, contextGlobal;
    try {
      context = vm.createContext?.() ?? globalThis;
      const filename2 = context.__filename = resolve(getFilename() ?? "");
      context.__dirname = dirname(filename2);
      context.require = createRequire(filename2);
      if (vm.runInContext != null) {
        contextGlobal = vm.runInContext("globalThis", context);
        const builtins = new Set(Object.getOwnPropertyNames(contextGlobal));
        for (const name of Object.getOwnPropertyNames(globalThis)) {
          if (builtins.has(name)) {
            continue;
          }
          Object.defineProperty(contextGlobal, name, {
            __proto__: null,
            ...Object.getOwnPropertyDescriptor(globalThis, name)
          });
        }
        output = vm.runInContext(js, context, {
          filename: filename2,
          importModuleDynamically: vm.constants?.USE_MAIN_CONTEXT_DEFAULT_LOADER
        });
      } else {
        output = eval?.(js);
      }
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
      const finish = () => {
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
      if (sync2) {
        finish();
      } else {
        promise = (async () => {
          {
            output = await output;
            return finish();
          }
        })();
      }
    } else {
      promise = output;
      exp.children = [];
      let m;
      if ((m = exp.parent, typeof m === "object" && m != null && "type" in m && m.type === "BlockStatement" && "bare" in m && m.bare === true) && !exp.parent.root) {
        exp.children.push(";");
      }
    }
    return promise;
  });
}
function serialize(value, context) {
  const stack = /* @__PURE__ */ new Set();
  function recurse(val) {
    if (typeof val === "string") {
      return JSON.stringify(val);
    } else if (typeof val === "number") {
      if (Object.is(-0, val)) return "-0";
      else return val.toString();
    } else if (typeof val === "boolean" || val == null) {
      return String(val);
    } else if (typeof val === "bigint") {
      return `${val}n`;
    } else if (typeof val === "function") {
      let string = Function.prototype.toString.call(val);
      if (/\{\s+\[native code]\s+\}$/.test(string)) {
        throw new TypeError("cannot serialize native function");
      }
      if (/^class[\s{]/u.test(string)) {
        if (!Object.isExtensible(val)) {
          string = `Object.preventExtensions(${string})`;
        }
        return string;
      }
      if (stack.has(val)) {
        throw new Error("circular reference detected");
      }
      stack.add(val);
      if (/^(?:async\s*)?(?:\*\s*|[gs]et\s+)?\[/.test(string)) {
        throw new Error("cannot serialize method with computed name");
      }
      const protoHasProps = !(val.prototype === void 0 || Object.prototype === Object.getPrototypeOf(val.prototype) && Object.getOwnPropertyNames(val.prototype).length <= 1 && // constructor
      Object.getOwnPropertySymbols(val.prototype).length === 0 && [val, void 0].includes(val.prototype.constructor));
      const isGenerator = /^(?:async\s*)?(?:function\s*)?\*/u.test(string);
      if (protoHasProps && !isGenerator) {
        throw new TypeError("cannot serialize function with modified prototype");
      }
      if (!/^(?:async\s+)?(?:(function|class)(?!\p{ID_Continue})|\(|(?:\p{ID_Start}|[_$])(?:\p{ID_Continue}|[\u200C\u200D$])*\s*=>)/u.test(string)) {
        string = string.replace(/^(async\s+)?(?:[gs]et\s+(?=\p{ID_Start}))?/u, (_2, maybeAsync = "") => maybeAsync + "function ");
      }
      const defaultProps = ["length", "name", "arguments", "caller", "prototype"];
      const hasProps = !(Object.getOwnPropertyNames(val).every(($) => defaultProps.includes($)) && Object.getOwnPropertySymbols(val).length === 0);
      if (hasProps) {
        const props = Object.getOwnPropertyDescriptors(val);
        for (const prop of defaultProps) {
          delete props[prop];
        }
        string = `Object.defineProperties(${string},${recurse(props)})`;
      }
      if (!Object.isExtensible(val)) {
        string = `Object.preventExtensions(${string})`;
      }
      stack.delete(val);
      return string;
    } else if (typeof val === "symbol") {
      let ref;
      if ((ref = Symbol.keyFor(val)) != null) {
        const key = ref;
        return `Symbol.for(${JSON.stringify(key)})`;
      }
      for (const name of Object.getOwnPropertyNames(Symbol)) {
        const sym = Symbol[name];
        if (val === sym) {
          return `Symbol.${name}`;
        }
      }
      throw new TypeError("cannot serialize unique symbol");
    } else if (typeof val === "object") {
      if (stack.has(val)) {
        throw new Error("circular reference detected");
      }
      stack.add(val);
      let ref1;
      switch (Object.getPrototypeOf(val)) {
        case RegExp.prototype:
        case context?.RegExp.prototype: {
          const re = val;
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
            const results = [];
            for (const item of val) {
              results.push(recurse(item));
            }
            return results;
          })().join(",") + "])";
          break;
        }
        case Map.prototype:
        case context?.Map.prototype: {
          ref1 = "new Map([" + (() => {
            const results1 = [];
            for (const [key, value2] of val) {
              results1.push(`[${recurse(key)},${recurse(value2)}]`);
            }
            return results1;
          })().join(",") + "])";
          break;
        }
        case Object.prototype:
        case context?.Object.prototype: {
          let objStr = "{";
          let descStr = "";
          for (let ref2 = Object.getOwnPropertyNames(val).concat(Object.getOwnPropertySymbols(val)), i = 0, len3 = ref2.length; i < len3; i++) {
            const prop = ref2[i];
            const desc = Object.getOwnPropertyDescriptor(val, prop);
            if (desc.enumerable && desc.configurable && desc.writable) {
              if (typeof prop === "symbol") {
                objStr += `[${recurse(prop)}]`;
              } else {
                objStr += JSON.stringify(prop);
              }
              objStr += `:${recurse(desc.value)},`;
            } else {
              if (typeof prop === "symbol") {
                descStr += `[${recurse(prop)}]`;
              } else {
                descStr += JSON.stringify(prop);
              }
              descStr += `:${recurse(desc)},`;
            }
          }
          if (objStr.length > 1) {
            objStr = objStr.slice(0, -1);
          }
          objStr += "}";
          if (descStr !== "") {
            objStr = `Object.defineProperties(${objStr},{${descStr.slice(0, -1)}})`;
          }
          if (!Object.isExtensible(val)) {
            objStr = `Object.preventExtensions(${objStr})`;
          }
          ref1 = objStr;
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
        default: {
          if (Array.isArray(val)) {
            ref1 = `[${val.map(recurse).join(",")}]`;
          } else {
            throw new TypeError(`cannot serialize object with prototype ${val.constructor?.name ?? Object.getPrototypeOf(val)}`);
          }
        }
      }
      ;
      const str = ref1;
      stack.delete(val);
      return str;
    } else {
      throw new TypeError(`cannot serialize ${typeof val} value`);
    }
  }
  return recurse(value);
}

// unplugin-civet:/Users/greghuc/workspace/Civet/source/parser/function.civet.jsx
var concatAssign = (lhs, rhs) => (rhs?.[Symbol.isConcatSpreadable] ?? Array.isArray(rhs) ? lhs.push.apply(lhs, rhs) : lhs.push(rhs), lhs);
function getTypeArguments(args) {
  while (typeof args === "object" && args != null && "args" in args) {
    args = args.args;
  }
  if (!Array.isArray(args)) {
    throw new Error("getTypeArguments could not find relevant array");
  }
  return args.filter((a1) => typeof a1 === "object" && a1 != null && "type" in a1 && a1.type === "TypeArgument");
}
function isVoidType(t) {
  return typeof t === "object" && t != null && "type" in t && t.type === "TypeLiteral" && "t" in t && typeof t.t === "object" && t.t != null && "type" in t.t && t.t.type === "VoidType";
}
function isPromiseType(t) {
  return typeof t === "object" && t != null && "type" in t && t.type === "TypeIdentifier" && "raw" in t && t.raw === "Promise";
}
function isPromiseVoidType(t) {
  if (!isPromiseType(t)) {
    return false;
  }
  const args = getTypeArguments(t.args?.args);
  return args.length === 1 && isVoidType(args[0].t);
}
function wrapTypeInPromise(t) {
  if (isPromiseType(t)) {
    return t;
  }
  return wrapTypeInApplication(t, getHelperRef("AutoPromise"), "Promise");
}
function wrapTypeInApplication(t, id, raw) {
  const ws = getTrimmingSpace(t);
  t = trimFirstSpace(t);
  const innerArgs = [{
    type: "TypeArgument",
    ts: true,
    t,
    children: [t]
  }];
  const args = {
    type: "TypeArguments",
    ts: true,
    args: innerArgs,
    children: ["<", innerArgs, ">"]
  };
  if (!(raw != null)) {
    if (!(typeof id === "string")) {
      throw new Error("wrapTypeInApplication requires string id or raw argument");
    }
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
  const { name, parent } = f;
  let ancestor = parent;
  let child = f;
  if (ancestor?.type === "ExportDeclaration") {
    child = ancestor;
    ancestor = ancestor.parent;
  }
  const expressions = ancestor?.expressions ?? ancestor?.elements;
  const currentIndex = expressions?.findIndex(([, def]) => def === child);
  let following = currentIndex >= 0 && expressions[currentIndex + 1]?.[1];
  if (following?.type === "ExportDeclaration") {
    following = following.declaration;
  }
  if (f.type === following?.type && name != null && name === following.name) {
    f.ts = true;
  } else {
    const block = makeEmptyBlock();
    block.parent = f;
    f.block = block;
    f.children.push(block);
    f.ts = false;
  }
}
function processReturn(f, implicitReturns) {
  let { returnType } = f.signature;
  if (returnType && returnType.optional) {
    convertOptionalType(returnType);
  }
  if (!processReturnValue(f) && (implicitReturns || f.signature.implicitReturn)) {
    const { signature, block } = f;
    const { modifier, name, returnType: returnType2 } = signature;
    const { async, generator, set } = modifier;
    const isMethod = f.type === "MethodDefinition";
    const isConstructor = isMethod && name === "constructor";
    const isVoid = generator || isVoidType(returnType2?.t) || async && isPromiseVoidType(returnType2?.t);
    if (block?.type === "BlockStatement") {
      if (isVoid || set || isConstructor) {
        if (block.bare && block.implicitlyReturned) {
          braceBlock(block);
        }
      } else {
        if (!block.implicitlyReturned) {
          insertReturn(block);
        }
      }
    }
  }
}
function processReturnValue(func) {
  const { block } = func;
  const values = gatherRecursiveWithinFunction(block, ($) => $.type === "ReturnValue");
  if (!values.length) {
    return false;
  }
  const ref = makeRef("ret");
  let declaration;
  for (let i1 = 0, len3 = values.length; i1 < len3; i1++) {
    const value = values[i1];
    value.children = [ref];
    const { ancestor, child } = findAncestor(
      value,
      ($1) => $1.type === "Declaration",
      isFunction
    );
    if (ancestor) {
      declaration ??= child;
    }
  }
  let returnType = func.returnType ?? func.signature?.returnType;
  if (returnType) {
    const { t } = returnType;
    let m;
    if (m = t.type, m === "TypePredicate") {
      const token = { token: "boolean" };
      const literal = {
        type: "TypeLiteral",
        t: token,
        children: [token]
      };
      returnType = {
        type: "ReturnTypeAnnotation",
        ts: true,
        t: literal,
        children: [": ", literal]
      };
    } else if (m === "TypeAsserts") {
      returnType = void 0;
    }
  }
  if (returnType) {
    returnType = deepCopy(returnType);
    addParentPointers(returnType);
    if (func.signature.modifier.async) {
      replaceNode(
        returnType.t,
        makeNode(wrapTypeInApplication(returnType.t, "Awaited")),
        returnType
      );
    }
  }
  if (declaration) {
    if (!(declaration.typeSuffix != null)) {
      declaration.children[1] = declaration.typeSuffix = returnType;
    }
  } else {
    block.expressions.unshift([
      getIndent(block.expressions[0]),
      makeNode({
        type: "Declaration",
        children: ["let ", ref, returnType],
        names: []
      }),
      ";"
    ]);
  }
  gatherRecursiveWithinFunction(
    block,
    (r) => r.type === "ReturnStatement" && !r.expression
  ).forEach((r) => {
    r.expression = ref;
    return r.children.splice(-1, 1, " ", ref);
  });
  let ref1;
  if (!((ref1 = block.children)[ref1.length - 2]?.type === "ReturnStatement")) {
    let ref2;
    const indent = getIndent((ref2 = block.expressions)[ref2.length - 1]);
    block.expressions.push([
      indent,
      wrapWithReturn(ref, block, !indent)
    ]);
  }
  return true;
}
function patternAsValue(pattern) {
  switch (pattern.type) {
    case "ArrayBindingPattern": {
      const children = [...pattern.children];
      const index = children.indexOf(pattern.elements);
      if (index < 0) throw new Error("failed to find elements in ArrayBindingPattern");
      const elements = children[index] = pattern.elements.map(patternAsValue);
      return { ...pattern, elements, children };
    }
    case "ObjectBindingPattern": {
      const children = [...pattern.children];
      const index = children.indexOf(pattern.properties);
      if (index < 0) throw new Error("failed to find properties in ArrayBindingPattern");
      const properties = children[index] = pattern.properties.map(patternAsValue);
      return { ...pattern, properties, children };
    }
    case "BindingProperty": {
      let children;
      if (pattern.value?.type === "Identifier") {
        children = [pattern.value, pattern.delim];
        if (isWhitespaceOrEmpty(pattern.children[0])) {
          children.unshift(pattern.children[0]);
        }
      } else {
        children = [...pattern.children];
        if (pattern.initializer != null) {
          const index = children.indexOf(pattern.initializer);
          assert.notEqual(index, -1, "failed to find initializer in BindingElement");
          children.splice(index, 1);
        }
        if (pattern.value != null) {
          children = children.map(($2) => $2 === pattern.value ? patternAsValue(pattern.value) : $2);
        }
      }
      return { ...pattern, children };
    }
    case "AtBindingProperty": {
      const children = [...pattern.children];
      if (pattern.initializer != null) {
        const index = children.indexOf(pattern.initializer);
        assert.notEqual(index, -1, "failed to find initializer in AtBindingProperty");
        children.splice(index, 1);
      }
      return { ...pattern, children };
    }
    case "BindingElement": {
      const children = [...pattern.children];
      if (pattern.initializer != null) {
        const index2 = children.indexOf(pattern.initializer);
        assert.notEqual(index2, -1, "failed to find initializer in BindingElement");
        children.splice(index2, 1);
      }
      const index = children.indexOf(pattern.binding);
      assert.notEqual(index, -1, "failed to find binding in BindingElement");
      children[index] = patternAsValue(pattern.binding);
      return { ...pattern, children };
    }
    default: {
      return pattern;
    }
  }
}
function patternBindings(pattern) {
  const bindings = [];
  recurse(pattern);
  return bindings;
  function recurse(pattern2) {
    switch (pattern2.type) {
      case "ArrayBindingPattern": {
        for (let ref3 = pattern2.elements, i2 = 0, len1 = ref3.length; i2 < len1; i2++) {
          const element = ref3[i2];
          recurse(element);
        }
        ;
        break;
      }
      case "ObjectBindingPattern": {
        for (let ref4 = pattern2.properties, i3 = 0, len22 = ref4.length; i3 < len22; i3++) {
          const property = ref4[i3];
          recurse(property);
        }
        ;
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
      } else {
        node.expressions.push(["", collect("void 0"), ";"]);
      }
      return;
    case "CaseBlock":
      node.clauses.forEach((clause) => {
        return assignResults(clause, collect);
      });
      return;
    case "WhenClause":
    case "DefaultClause":
    case "PatternClause": {
      assignResults(node.block, collect);
      return;
    }
  }
  if (!Array.isArray(node)) {
    return;
  }
  let [, exp, semi] = node;
  if (semi?.type === "SemicolonDelimiter") {
    return;
  }
  if (!exp) {
    return;
  }
  if (isExit(exp)) {
    return;
  }
  exp = exp;
  const outer = exp;
  if (exp.type === "LabelledStatement") {
    exp = exp.statement;
  }
  let ref6;
  let m1;
  switch (exp.type) {
    case "BreakStatement":
    case "ContinueStatement":
    case "DebuggerStatement":
    case "EmptyStatement":
    case "ReturnStatement":
    case "ThrowStatement": {
      return;
    }
    case "Declaration": {
      let ref7;
      if (exp.bindings?.length) {
        ref7 = patternAsValue((ref6 = exp.bindings)[ref6.length - 1].pattern);
      } else {
        ref7 = "void 0";
      }
      ;
      const value = ref7;
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
      if (exp.expressions.some(isExit)) {
        return;
      }
      assignResults(exp.expressions[exp.expressions.length - 1], collect);
      return;
    }
    case "IfStatement": {
      assignResults(exp.then, collect);
      if (exp.else) {
        assignResults(exp.else.block, collect);
      } else {
        braceBlock(exp.then);
        exp.children.push([" else {", collect("void 0"), "}"]);
      }
      return;
    }
    case "PatternMatchingStatement": {
      assignResults(exp.children[0], collect);
      return;
    }
    case "SwitchStatement": {
      for (let ref8 = exp.caseBlock.clauses, i4 = 0, len3 = ref8.length; i4 < len3; i4++) {
        const clause = ref8[i4];
        assignResults(clause, collect);
      }
      return;
    }
    case "TryStatement": {
      for (let ref9 = exp.blocks, i5 = 0, len4 = ref9.length; i5 < len4; i5++) {
        const block = ref9[i5];
        assignResults(block, collect);
      }
      return;
    }
    case "PipelineExpression": {
      if (m1 = exp.children[1]?.type, m1 === "ReturnStatement" || m1 === "ThrowStatement") {
        return;
      }
      const semi2 = exp.children.lastIndexOf(";");
      if (0 <= semi2 && semi2 < exp.children.length - 1) {
        exp.children.splice(semi2 + 1, 1 / 0, ...[collect(exp.children.slice(semi2 + 1))]);
        return;
      }
      ;
      break;
    }
  }
  if (node[node.length - 1]?.type === "SemicolonDelimiter") {
    return;
  }
  node[1] = collect(node[1]);
}
function insertReturn(node) {
  if (!node) return;
  switch (node.type) {
    case "BlockStatement": {
      if (node.expressions.length) {
        if (node.expressions.some(([, exp2]) => isExit(exp2))) {
          return;
        }
        const last = node.expressions[node.expressions.length - 1];
        insertReturn(last);
      } else {
        let m2;
        if (m2 = node.parent?.type, m2 === "CatchClause" || m2 === "WhenClause") {
          node.expressions.push(["", wrapWithReturn(void 0, node)]);
        }
      }
      return;
    }
    // NOTE: "CaseClause"s don't get a return statement inserted
    case "WhenClause": {
      if (node.break) {
        const breakIndex = node.children.indexOf(node.break);
        assert.notEqual(breakIndex, -1, "Could not find break in when clause");
        node.children.splice(breakIndex, 1);
        node.break = void 0;
      }
      insertReturn(node.block);
      if (!isExit(node.block)) {
        const comment = hasTrailingComment(node.block.expressions);
        let ref10;
        node.block.expressions.push([
          comment ? (ref10 = node.block.expressions)[ref10.length - 1][0] || "\n" : "",
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
  if (semi?.type === "SemicolonDelimiter") {
    return;
  }
  if (!exp) {
    return;
  }
  if (isExit(exp)) {
    return;
  }
  const outer = exp;
  if (exp.type === "LabelledStatement") {
    exp = exp.statement;
  }
  let ref11;
  let m3;
  switch (exp.type) {
    case "BreakStatement":
    case "ContinueStatement":
    case "DebuggerStatement":
    case "EmptyStatement":
    case "ReturnStatement":
    case "ThrowStatement": {
      return;
    }
    case "Declaration": {
      let ref12;
      if (exp.bindings?.length) {
        ref12 = [" ", patternAsValue((ref11 = exp.bindings)[ref11.length - 1].pattern)];
      } else {
        ref12 = [];
      }
      ;
      const value = ref12;
      const parent = outer.parent;
      const index = findChildIndex(parent?.expressions, outer);
      assert.notEqual(index, -1, "Could not find declaration in parent");
      parent.expressions.splice(index + 1, 0, [
        "",
        {
          type: "ReturnStatement",
          expression: value,
          children: [
            !(parent.expressions[index][2] === ";") ? ";" : void 0,
            "return",
            value
          ],
          parent: exp
        }
      ]);
      braceBlock(parent);
      return;
    }
    case "FunctionExpression": {
      if (exp.id) {
        const parent = outer.parent;
        const index = findChildIndex(parent?.expressions, outer);
        assert.notEqual(index, -1, "Could not find function declaration in parent");
        parent.expressions.splice(index + 1, 0, [
          "",
          wrapWithReturn(exp.id, exp, true)
        ]);
        braceBlock(parent);
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
      insertReturn(exp.then);
      if (exp.else) insertReturn(exp.else.block);
      else exp.children.push([
        "",
        // NOTE: add a prefixed semicolon because the if block may not be braced
        wrapWithReturn(void 0, exp, true)
      ]);
      return;
    }
    case "PatternMatchingStatement": {
      insertReturn(exp.children[0]);
      return;
    }
    case "SwitchStatement": {
      for (let ref13 = exp.caseBlock.clauses, i6 = 0, len5 = ref13.length; i6 < len5; i6++) {
        const clause = ref13[i6];
        insertReturn(clause);
      }
      return;
    }
    case "TryStatement": {
      for (let ref14 = exp.blocks, i7 = 0, len6 = ref14.length; i7 < len6; i7++) {
        const block = ref14[i7];
        insertReturn(block);
      }
      return;
    }
    case "PipelineExpression": {
      if (m3 = exp.children[1]?.type, m3 === "ReturnStatement" || m3 === "ThrowStatement") {
        return;
      }
      const semi2 = exp.children.lastIndexOf(";");
      if (0 <= semi2 && semi2 < exp.children.length - 1) {
        exp.children.splice(semi2 + 1, 1 / 0, ...[wrapWithReturn(exp.children.slice(semi2 + 1))]);
        return;
      }
      ;
      break;
    }
  }
  if (node[node.length - 1]?.type === "SemicolonDelimiter") {
    return;
  }
  node[1] = wrapWithReturn(node[1]);
}
function processBreakContinueWith(statement) {
  let changed = false;
  for (const control of gatherRecursiveWithinFunction(
    statement.block,
    ($3) => $3.type === "BreakStatement" || $3.type === "ContinueStatement"
  )) {
    if (control.with) {
      if (control.label) {
        let m4;
        if (!(m4 = statement.parent, typeof m4 === "object" && m4 != null && "type" in m4 && m4.type === "LabelledStatement" && "label" in m4 && typeof m4.label === "object" && m4.label != null && "name" in m4.label && m4.label.name === control.label.name)) {
          continue;
        }
      } else {
        const { ancestor } = findAncestor(
          control,
          (s) => s === statement || s.type === "IterationStatement" || s.type === "ForStatement" || s.type === "SwitchStatement" && control.type === "BreakStatement"
        );
        if (!(ancestor === statement)) {
          continue;
        }
      }
      control.children.unshift(
        control.type === "BreakStatement" ? (changed = true, [statement.resultsRef, " =", control.with, ";"]) : (
          // control.type is "ContinueStatement"
          [statement.resultsRef, ".push(", trimFirstSpace(control.with), ");"]
        )
      );
      updateParentPointers(control.with, control);
      const i = control.children.findIndex(($4) => $4?.type === "Error");
      if (i >= 0) {
        control.children.splice(i, 1);
      }
      const block = control.parent;
      if (!(block?.type === "BlockStatement")) {
        throw new Error(`Expected parent of ${control.type.toLowerCase().replace("statement", "")} to be BlockStatement`);
      }
      braceBlock(block);
    }
  }
  return changed;
}
function wrapIterationReturningResults(statement, collect) {
  if (statement.type === "DoStatement" || statement.type === "ComptimeStatement") {
    let results;
    if (statement.type === "ComptimeStatement") {
      insertReturn(statement.block);
      const expression = expressionizeComptime(statement);
      replaceNode(statement, expression);
      const parent = expression.parent;
      results = parent?.expressions?.[findChildIndex(parent?.expressions, expression)];
      assert.equal(
        results?.[1],
        expression,
        "comptime statement found outside statement tuple"
      );
    } else {
      results = statement.block;
    }
    if (collect) {
      assignResults(results, collect);
    } else {
      insertReturn(results);
    }
    return;
  }
  if (statement.resultsRef != null) {
    return;
  }
  if (statement.resultsParent) {
    const { ancestor: ancestor2 } = findAncestor(
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
    const resultsRef2 = statement.resultsRef = ancestor2.resultsRef;
    iterationDefaultBody(statement);
    const { block } = statement;
    if (!block.empty) {
      assignResults(block, (node) => [resultsRef2, ".push(", node, ")"]);
    }
    return;
  }
  const resultsRef = statement.resultsRef ??= makeRef("results");
  const declaration = iterationDeclaration(statement);
  const { ancestor, child } = findAncestor(statement, ($6) => $6.type === "BlockStatement");
  assert.notNull(ancestor, `Could not find block containing ${statement.type}`);
  const index = findChildIndex(ancestor.expressions, child);
  assert.notEqual(index, -1, `Could not find ${statement.type} in containing block`);
  const iterationTuple = ancestor.expressions[index];
  ancestor.expressions.splice(index, 0, [iterationTuple[0], declaration, ";"]);
  iterationTuple[0] = "";
  braceBlock(ancestor);
  if (collect) {
    statement.children.push(collect(resultsRef));
  } else {
    statement.children.push(";return ", resultsRef, ";");
  }
}
function iterationDeclaration(statement) {
  const { resultsRef, block } = statement;
  const reduction = statement.type === "ForStatement" && statement.reduction;
  let decl = reduction ? "let" : "const";
  if (statement.type === "IterationStatement" || statement.type === "ForStatement") {
    if (processBreakContinueWith(statement)) {
      decl = "let";
    }
  }
  const breakWithOnly = decl === "let" && isLoopStatement(statement) && gatherRecursive(
    block,
    (s) => s.type === "BreakStatement" && !s.with,
    (s) => isFunction(s) || s.type === "IterationStatement"
  ).length === 0;
  const declaration = {
    type: "Declaration",
    children: [decl, " ", resultsRef],
    decl,
    names: [],
    bindings: []
  };
  if (reduction) {
    declaration.children.push("=" + (() => {
      switch (reduction.subtype) {
        case "some": {
          return "false";
        }
        case "every": {
          return "true";
        }
        case "first": {
          return "undefined";
        }
        case "min": {
          return "Infinity";
        }
        case "max": {
          return "-Infinity";
        }
        case "product": {
          return "1";
        }
        case "join": {
          return '""';
        }
        case "concat": {
          return "[]";
        }
        default: {
          return "0";
        }
      }
    })());
  } else if (statement.object) {
    declaration.children.push("={}");
  } else {
    if (decl === "const") {
      declaration.children.push("=[]");
    } else {
      if (!breakWithOnly) {
        declaration.children.push(";", resultsRef, "=[]");
      }
    }
  }
  if (!breakWithOnly) {
    if (iterationDefaultBody(statement)) {
      return declaration;
    }
    if (!block.empty) {
      assignResults(block, (node) => {
        if (statement.object) {
          return ["Object.assign(", resultsRef, ",", node, ")"];
        }
        if (!reduction) {
          return [resultsRef, ".push(", node, ")"];
        }
        switch (reduction.subtype) {
          case "some": {
            return ["if (", node, ") {", resultsRef, " = true; break}"];
          }
          case "every": {
            return [
              "if (!",
              makeLeftHandSideExpression(node),
              ") {",
              resultsRef,
              " = false; break}"
            ];
          }
          case "count": {
            return ["if (", node, ") ++", resultsRef];
          }
          case "first": {
            return [resultsRef, " = ", node, "; break"];
          }
          case "sum":
          case "join": {
            return [resultsRef, " += ", node];
          }
          case "concat": {
            return [getHelperRef("concatAssign"), "(", resultsRef, ", ", node, ")"];
          }
          case "product": {
            return [resultsRef, " *= ", node];
          }
          case "min": {
            return [resultsRef, " = Math.min(", resultsRef, ", ", node, ")"];
          }
          case "max": {
            return [resultsRef, " = Math.max(", resultsRef, ", ", node, ")"];
          }
        }
      });
    }
  }
  return declaration;
}
function iterationDefaultBody(statement) {
  const { block, resultsRef } = statement;
  if (!block.empty) {
    return false;
  }
  const reduction = statement.type === "ForStatement" && statement.reduction;
  function fillBlock(expression) {
    let ref15;
    let m5;
    if (m5 = (ref15 = block.expressions)[ref15.length - 1], Array.isArray(m5) && m5.length >= 2 && typeof m5[1] === "object" && m5[1] != null && "type" in m5[1] && m5[1].type === "EmptyStatement" && "implicit" in m5[1] && m5[1].implicit === true) {
      block.expressions.pop();
    }
    block.expressions.push(expression);
    block.empty = false;
    return braceBlock(block);
  }
  if (reduction) {
    switch (reduction.subtype) {
      case "some": {
        fillBlock(["", [resultsRef, " = true; break"]]);
        block.empty = false;
        braceBlock(block);
        return true;
      }
      case "every": {
        fillBlock(["", [resultsRef, " = false; break"]]);
        block.empty = false;
        braceBlock(block);
        return true;
      }
      case "count": {
        fillBlock(["", ["++", resultsRef]]);
        block.empty = false;
        braceBlock(block);
        return true;
      }
    }
  }
  if (statement.type === "ForStatement") {
    const declaration = statement.eachDeclaration ?? statement.declaration;
    if (declaration?.type === "ForDeclaration") {
      if (reduction) {
        const bindings = patternBindings(declaration.binding.pattern);
        if (bindings.length) {
          fillBlock(["", bindings[0]]);
          for (const binding of bindings.slice(1)) {
            binding.children.unshift({
              type: "Error",
              subtype: "Warning",
              message: "Ignored binding in reduction loop with implicit body"
            });
          }
        } else {
          fillBlock([
            "",
            {
              type: "Error",
              message: "Empty binding pattern in reduction loop with implicit body"
            }
          ]);
        }
      } else {
        fillBlock(["", patternAsValue(declaration.binding.pattern)]);
      }
      block.empty = false;
    }
  }
  return false;
}
function processParams(f) {
  const { type, parameters, block } = f;
  const isConstructor = f.name === "constructor";
  if (type === "ArrowFunction" && parameters && parameters.tp && parameters.tp.parameters.length === 1) {
    parameters.tp.parameters.push(",");
  }
  let tt, before = [], rest, after = [];
  function append2(p) {
    (rest ? after : before).push(p);
  }
  for (let ref16 = parameters.parameters, i8 = 0, len7 = ref16.length; i8 < len7; i8++) {
    const param = ref16[i8];
    switch (param.type) {
      case "ThisType": {
        if (tt) {
          append2({
            type: "Error",
            message: "Only one typed this parameter is allowed"
          });
          append2(param);
        } else {
          tt = trimFirstSpace(param);
          if (before.length || rest) {
            let ref17;
            let delim = (ref17 = tt.children)[ref17.length - 1];
            if (Array.isArray(delim)) {
              delim = delim[delim.length - 1];
            }
            if (!(typeof delim === "object" && delim != null && "token" in delim && delim.token === ",")) {
              tt = {
                ...tt,
                children: [...tt.children, ", "]
              };
            }
          }
        }
        ;
        break;
      }
      case "FunctionRestParameter": {
        if (rest) {
          append2({
            type: "Error",
            message: "Only one rest parameter is allowed"
          });
          append2(param);
        } else {
          rest = param;
        }
        ;
        break;
      }
      default: {
        append2(param);
      }
    }
  }
  parameters.names = before.flatMap(($7) => $7.names);
  parameters.parameters.splice(0, 1 / 0, ...[]);
  if (tt) {
    parameters.parameters.push(tt);
  }
  parameters.parameters.push(...before);
  if (rest) {
    const restIdentifier = rest.binding.ref || rest.binding;
    parameters.names.push(...rest.names || []);
    rest.children.pop();
    if (after.length) {
      let m6;
      if (m6 = rest.binding.type, m6 === "ArrayBindingPattern" || m6 === "ObjectBindingPattern" || m6 === "NamedBindingPattern") {
        parameters.parameters.push({
          type: "Error",
          message: "Non-end rest parameter cannot be binding pattern"
        });
      }
      after = trimFirstSpace(after);
      const names = after.flatMap(($8) => $8.names);
      const elements = after.map((p) => {
        if (p.type === "Error") {
          return p;
        }
        return {
          ...p,
          // omit individual argument types from output
          children: p.children.filter((a2) => a2 !== p.typeSuffix),
          type: "BindingElement"
        };
      });
      const pattern = gatherBindingPatternTypeSuffix(makeNode({
        type: "ArrayBindingPattern",
        elements,
        length: after.length,
        children: ["[", elements, "]"],
        names
      }));
      const { typeSuffix } = pattern;
      const blockPrefix = parameters.blockPrefix = makeNode({
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
          const t2 = typeSuffix3?.t ?? fallback;
          if (typeSuffix3?.optional) {
            return [
              t2,
              {
                type: "Error",
                message: "Optional parameter not allowed in/after rest parameter"
              }
            ];
          }
          return t2;
        };
        const ref = makeRef("rest");
        const restRef = [
          { children: [ref], ts: true },
          { children: [restIdentifier], js: true }
        ];
        blockPrefix.children[blockPrefix.children.indexOf(restIdentifier)] = restRef;
        blockPrefix.children.push({
          ts: true,
          children: [
            ", ",
            restIdentifier,
            " = ",
            ref,
            " as ",
            trimFirstSpace(rest.typeSuffix.t)
          ]
        });
        const bindingIndex = rest.rest.children.indexOf(rest.rest.binding);
        assert.notEqual(bindingIndex, -1, "Could not find binding in rest parameter");
        rest.rest.children[bindingIndex] = rest.rest.binding = { ...rest.rest.binding, js: true };
        rest.rest.children.splice(bindingIndex + 1, 0, {
          children: [ref],
          ts: true
        });
        const oldSuffix = rest.typeSuffix;
        const colon = oldSuffix.colon ?? ": ";
        const afterTypes = after.flatMap((p) => {
          return [",", optionalType(p.typeSuffix, " unknown")];
        });
        const t = [
          "[",
          "...",
          optionalType(oldSuffix, "unknown[]"),
          ...afterTypes,
          "]"
        ];
        const typeSuffix2 = makeNode({
          type: "TypeSuffix",
          ts: true,
          colon,
          t,
          children: [
            ...oldSuffix.children.filter(($9) => (
              // spaces and colon
              $9 !== oldSuffix.optional && $9 !== oldSuffix.t
            )),
            !oldSuffix.colon ? colon : void 0,
            t
          ]
        });
        const suffixIndex = rest.children.indexOf(rest.typeSuffix);
        assert.notEqual(suffixIndex, -1, "Could not find typeSuffix in rest parameter");
        rest.children[suffixIndex] = rest.typeSuffix = typeSuffix2;
        blockPrefix.children.splice(-1, 0, {
          ts: true,
          children: [" as [", afterTypes.slice(1), "]"]
        });
      }
    }
    parameters.parameters.push(rest);
  }
  if (!block) {
    return;
  }
  const { expressions } = block;
  if (!expressions) {
    return;
  }
  let indent;
  if (!expressions.length) {
    indent = "";
  } else {
    indent = expressions[0][0];
  }
  const [splices, thisAssignments] = gatherBindingCode(parameters, {
    injectParamProps: isConstructor,
    assignPins: true
  });
  const subbindings = gatherSubbindings(parameters.parameters);
  simplifyBindingProperties(parameters.parameters);
  simplifyBindingProperties(subbindings);
  if (isConstructor) {
    const { ancestor } = findAncestor(f, ($10) => $10.type === "ClassExpression");
    if (ancestor != null) {
      const fields = new Set(gatherRecursiveWithinFunction(ancestor, ($11) => $11.type === "FieldDefinition").map(($12) => $12.id).filter((a3) => typeof a3 === "object" && a3 != null && "type" in a3 && a3.type === "Identifier").map(($13) => $13.name));
      const classExpressions = ancestor.body.expressions;
      let index2 = findChildIndex(classExpressions, f);
      assert.notEqual(index2, -1, "Could not find constructor in class");
      let m7;
      while (m7 = classExpressions[index2 - 1]?.[1], typeof m7 === "object" && m7 != null && "type" in m7 && m7.type === "MethodDefinition" && "name" in m7 && m7.name === "constructor") {
        index2--;
      }
      const fStatement = classExpressions[index2];
      for (let ref18 = gatherRecursive(parameters, ($14) => $14.type === "Parameter"), i9 = 0, len8 = ref18.length; i9 < len8; i9++) {
        const parameter = ref18[i9];
        const { accessModifier } = parameter;
        if (!(accessModifier || parameter.typeSuffix)) {
          continue;
        }
        for (let ref19 = gatherRecursive(parameter, ($15) => $15.type === "AtBinding"), i10 = 0, len9 = ref19.length; i10 < len9; i10++) {
          const binding = ref19[i10];
          const typeSuffix = binding.parent?.typeSuffix;
          if (!(accessModifier || typeSuffix)) {
            continue;
          }
          if (parameter.accessModifier) {
            replaceNode(parameter.accessModifier, void 0);
            parameter.accessModifier = void 0;
          }
          const id = binding.ref.id;
          if (fields.has(id)) {
            continue;
          }
          classExpressions.splice(index2++, 0, [fStatement[0], {
            type: "FieldDefinition",
            id,
            typeSuffix,
            children: [accessModifier, id, typeSuffix]
          }, ";"]);
          fStatement[0] = "";
        }
      }
    }
  }
  const delimiter = {
    type: "SemicolonDelimiter",
    children: [";"]
  };
  let prefix = [];
  if (subbindings.length) {
    prefix.push(makeNode({
      type: "Declaration",
      children: ["const ", subbindings.slice(1)],
      names: subbindings.flatMap(($16) => $16.names ?? []),
      bindings: [],
      decl: "const"
    }));
  }
  for (let ref20 = splices, i11 = 0, len10 = ref20.length; i11 < len10; i11++) {
    const binding = ref20[i11];
    assert.equal(binding.type, "PostRestBindingElements", "splice should be of type Binding");
    prefix.push(makeNode({
      type: "Declaration",
      children: ["let ", binding],
      names: binding.names,
      bindings: [],
      // avoid implicit return of any bindings
      decl: "let"
    }));
  }
  concatAssign(prefix, thisAssignments);
  prefix = prefix.map((s) => s?.js ? ["", makeNode({
    // TODO: figure out how to get JS only statement tuples
    ...s,
    children: [indent, ...s.children, delimiter]
  })] : [indent, s, delimiter]);
  if (!prefix.length) {
    return;
  }
  let index = -1;
  if (isConstructor) {
    index = findSuperCall(block);
  }
  expressions.splice(index + 1, 0, ...prefix);
  updateParentPointers(block);
  braceBlock(block);
}
function findSuperCall(block) {
  const { expressions } = block;
  const superCalls = gatherNodes(
    expressions,
    (a4) => typeof a4 === "object" && a4 != null && "type" in a4 && a4.type === "CallExpression" && "children" in a4 && Array.isArray(a4.children) && a4.children.length >= 1 && typeof a4.children[0] === "object" && a4.children[0] != null && "token" in a4.children[0] && a4.children[0].token === "super"
  );
  if (superCalls.length) {
    const { child } = findAncestor(superCalls[0], (a5) => a5 === block);
    const index = findChildIndex(expressions, child);
    if (index < 0) {
      throw new Error("Could not find super call within top-level expressions");
    }
    return index;
  } else {
    return -1;
  }
}
function processSignature(f) {
  const { block, signature } = f;
  if (!f.async?.length && hasAwait(block)) {
    if (f.async != null) {
      f.async.push("async ");
      signature.modifier.async = true;
    } else {
      for (let ref21 = gatherRecursiveWithinFunction(block, ($17) => $17.type === "Await"), i12 = 0, len11 = ref21.length; i12 < len11; i12++) {
        const a = ref21[i12];
        const i = findChildIndex(a.parent, a);
        a.parent.children.splice(i + 1, 0, {
          type: "Error",
          message: `await invalid in ${signature.modifier.get ? "getter" : signature.modifier.set ? "setter" : signature.name}`
        });
      }
    }
  }
  if (!f.generator?.length && hasYield(block)) {
    if (f.generator != null) {
      f.generator.push("*");
      signature.modifier.generator = true;
    } else {
      for (let ref22 = gatherRecursiveWithinFunction(block, ($18) => $18.type === "YieldExpression"), i13 = 0, len12 = ref22.length; i13 < len12; i13++) {
        const y = ref22[i13];
        const i = y.children.findIndex(($19) => $19.type === "Yield");
        y.children.splice(i + 1, 0, {
          type: "Error",
          message: `yield invalid in ${f.type === "ArrowFunction" ? "=> arrow function" : signature.modifier.get ? "getter" : signature.modifier.set ? "setter" : signature.name}`
        });
      }
    }
  }
  if (signature.modifier.async && !signature.modifier.generator && signature.returnType && !isPromiseType(signature.returnType.t)) {
    replaceNode(signature.returnType.t, wrapTypeInPromise(signature.returnType.t));
  }
}
function processFunctions(statements, config2) {
  for (let ref23 = gatherRecursiveAll(statements, ($20) => $20.type === "FunctionExpression" || $20.type === "ArrowFunction" || $20.type === "MethodDefinition"), i14 = 0, len13 = ref23.length; i14 < len13; i14++) {
    const f = ref23[i14];
    if (f.type === "FunctionExpression" || f.type === "MethodDefinition") {
      implicitFunctionBlock(f);
    }
    processSignature(f);
    processParams(f);
    processReturn(f, config2.implicitReturns);
  }
}
function expressionizeIteration(exp) {
  let { async, generator, block, children, statement } = exp;
  let i = children.indexOf(statement);
  if (i < 0) {
    throw new Error("Could not find iteration statement in iteration expression");
  }
  if (statement.type === "DoStatement" || statement.type === "ComptimeStatement") {
    children.splice(i, 1, wrapIIFE([["", statement, void 0]], async, generator));
    updateParentPointers(exp);
    return;
  }
  let statements;
  if (generator) {
    iterationDefaultBody(statement);
    assignResults(block, (node) => {
      return {
        type: "YieldExpression",
        expression: node,
        children: [
          {
            type: "Yield",
            token: "yield "
          },
          node
        ]
      };
    });
    statements = [
      ["", statement]
    ];
  } else {
    const resultsRef = statement.resultsRef ??= makeRef("results");
    const declaration = iterationDeclaration(statement);
    statements = [
      ["", declaration, ";"],
      ["", statement, statement.block.bare ? ";" : void 0],
      ["", resultsRef]
    ];
  }
  let done;
  if (!async) {
    let ref24;
    if ((ref24 = blockContainingStatement(exp)) && typeof ref24 === "object" && "block" in ref24 && "index" in ref24) {
      const { block: parentBlock, index } = ref24;
      statements[0][0] = parentBlock.expressions[index][0];
      parentBlock.expressions.splice(index, index + 1 - index, ...statements);
      updateParentPointers(parentBlock);
      braceBlock(parentBlock);
      done = true;
    }
  }
  if (!done) {
    if (!generator) {
      statements[statements.length - 1][1] = wrapWithReturn(statements[statements.length - 1][1]);
    }
    children.splice(i, 1, wrapIIFE(statements, async, generator));
    updateParentPointers(exp);
  }
}
function processIterationExpressions(statements) {
  for (let ref25 = gatherRecursiveAll(statements, ($21) => $21.type === "IterationExpression"), i15 = 0, len14 = ref25.length; i15 < len14; i15++) {
    const s = ref25[i15];
    expressionizeIteration(s);
  }
}
function skipImplicitArguments(args) {
  if (args.length === 1) {
    let arg0 = args[0];
    if (arg0.type === "Argument") {
      arg0 = arg0.expression;
    }
    if (arg0.type === "StatementExpression") {
      arg0 = arg0.statement;
    }
    return arg0.type === "IterationExpression" && arg0.subtype !== "DoStatement" && !arg0.async && isEmptyBareBlock(arg0.block);
  }
  return false;
}
function processCoffeeDo(ws, expression) {
  ws = trimFirstSpace(ws);
  const args = [];
  if (typeof expression === "object" && expression != null && "type" in expression && expression.type === "ArrowFunction" || typeof expression === "object" && expression != null && "type" in expression && expression.type === "FunctionExpression") {
    let { parameters } = expression;
    const parameterList = parameters.parameters;
    const results1 = [];
    for (let i16 = 0, len15 = parameterList.length; i16 < len15; i16++) {
      let parameter = parameterList[i16];
      if (typeof parameter === "object" && parameter != null && "type" in parameter && parameter.type === "Parameter") {
        let ref26;
        if (ref26 = parameter.initializer) {
          const initializer = ref26;
          args.push(initializer.expression, parameter.delim);
          parameter = {
            ...parameter,
            initializer: void 0,
            children: parameter.children.filter((a6) => a6 !== initializer)
          };
        } else {
          args.push(parameter.children.filter(
            (a7) => a7 !== parameter.typeSuffix
          ));
        }
      }
      results1.push(parameter);
    }
    ;
    const newParameterList = results1;
    const newParameters = {
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
  if (!(ref != null)) {
    ref = makeRef("$");
    inplacePrepend(ref, body);
  }
  if (startsWithPredicate(body, ($24) => $24.type === "ObjectExpression")) {
    body = makeLeftHandSideExpression(body);
  }
  const parameterList = [
    typeSuffix ? [ref, typeSuffix] : ref
  ];
  const parameters = makeNode({
    type: "Parameters",
    children: typeSuffix ? ["(", parameterList, ")"] : [parameterList],
    parameters: parameterList,
    names: []
  });
  const expressions = [[" ", body]];
  const block = makeNode({
    type: "BlockStatement",
    bare: true,
    expressions,
    children: [expressions],
    implicitlyReturned: true
  });
  const async = [];
  const children = [async, parameters, " =>", block];
  const fn = makeNode({
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
    ampersandBlock: true,
    body
  });
  if (isStatement(body)) {
    braceBlock(block);
    fn.ampersandBlock = false;
  }
  if (gatherRecursiveWithinFunction(
    block,
    (a8) => a8 === ref
  ).length > 1) {
    fn.ampersandBlock = false;
  }
  return fn;
}

// unplugin-civet:/Users/greghuc/workspace/Civet/source/parser/block.civet.jsx
function blockWithPrefix(prefixStatements, block) {
  if (prefixStatements && prefixStatements.length) {
    const expressions = [...prefixStatements, ...block.expressions];
    updateParentPointers(prefixStatements, block);
    block = {
      ...block,
      expressions,
      children: block.children === block.expressions ? expressions : block.children.map((c) => c === block.expressions ? expressions : c)
    };
    braceBlock(block);
    updateParentPointers(block);
  }
  return block;
}
function braceBlock(block) {
  if (block.bare && !block.root) {
    if (block.children === block.expressions) {
      block.children = [block.expressions];
    }
    block.children.unshift(" {");
    block.children.push("}");
    const { implicitlyReturned } = block;
    block.bare = block.implicitlyReturned = false;
    if (implicitlyReturned) {
      processReturn(block.parent, true);
    }
  }
}
function duplicateBlock(block) {
  const expressions = [...block.expressions];
  let children;
  if (block.children === block.expressions) {
    children = expressions;
  } else {
    children = [...block.children];
    children.splice(children.indexOf(block.expressions), 1, expressions);
  }
  return {
    ...block,
    expressions,
    children
  };
}
function bracedBlock(block) {
  block = duplicateBlock(block);
  braceBlock(block);
  return block;
}
function makeEmptyBlock() {
  const expressions = [];
  return {
    type: "BlockStatement",
    expressions,
    children: ["{", expressions, "}"],
    bare: false,
    empty: true
  };
}
function makeBlockFragment() {
  const expressions = [];
  return {
    type: "BlockStatement",
    children: expressions,
    parent: void 0,
    expressions,
    bare: false,
    root: false
  };
}
function replaceBlockExpression(node, child, replacement) {
  let found = false;
  const { expressions } = node;
  for (let i1 = 0, len3 = expressions.length; i1 < len3; i1++) {
    const statement = expressions[i1];
    const [, s] = statement;
    if (s === child) {
      statement[1] = replacement;
      replacement.parent = node;
      found = true;
      break;
    }
  }
  if (!found) {
    throw new Error("Could not find child to replace");
  }
}
function getIndent(statement) {
  let indent = statement?.[0];
  if (Array.isArray(indent)) {
    indent = indent.flat(Infinity);
    return indent.filter((n) => n && !(n.type === "Comment")).map((n) => {
      if (typeof n === "string") return n;
      if (n.token != null) return n.token;
      return "";
    });
  }
  return indent;
}
function hoistRefDecs(statements) {
  gatherRecursiveAll(statements, (s) => s.hoistDec).forEach((node) => {
    const { hoistDec } = node;
    node.hoistDec = null;
    const { ancestor, child } = findAncestor(node, (ancestor2) => {
      return ancestor2.type === "BlockStatement" && (!ancestor2.bare || ancestor2.root);
    });
    if (ancestor) {
      insertHoistDec(ancestor, child, hoistDec);
    } else {
      throw new Error("Couldn't find block to hoist declaration into.");
    }
    return;
  });
}
function insertHoistDec(block, node, dec) {
  const { expressions } = block;
  const index = findChildIndex(expressions, node);
  if (index < 0) {
    throw new Error("Couldn't find expression in block for hoistable declaration.");
  }
  const statement = [expressions[index][0], dec, ";"];
  expressions[index][0] = "";
  expressions.splice(index, 0, statement);
  updateParentPointers(dec, block);
}
function processBlocks(statements) {
  insertSemicolon(statements);
  for (let ref = gatherRecursive(statements, ($) => $.type === "BlockStatement"), i2 = 0, len1 = ref.length; i2 < len1; i2++) {
    const { expressions } = ref[i2];
    processBlocks(expressions);
  }
}
function insertSemicolon(statements) {
  const l = statements.length;
  for (let i3 = 0, len22 = statements.length; i3 < len22; i3++) {
    const i = i3;
    const s = statements[i3];
    if (i < l - 1) {
      if (needsPrecedingSemicolon(statements[i + 1][1])) {
        const delim = s[2];
        if (!delim) {
          s[2] = ";";
        } else if (typeof delim === "string" && !delim.match(/;/)) {
          s[2] = `;${delim}`;
        }
      }
    }
  }
}
function needsPrecedingSemicolon(exp) {
  if (!exp) {
    return false;
  }
  if (Array.isArray(exp)) {
    for (let i4 = 0, len3 = exp.length; i4 < len3; i4++) {
      const child = exp[i4];
      if (!(child != null)) {
        continue;
      }
      return needsPrecedingSemicolon(child);
    }
    return false;
  }
  if (isToken(exp)) {
    exp = exp.token;
  }
  if (typeof exp === "string") {
    return /^\s*[\(\[\`\+\-\/]/.test(exp);
  }
  switch (exp.type) {
    case "ParenthesizedExpression":
    case "ArrayExpression":
    case "ArrowFunction":
    case "TemplateLiteral":
    case "RegularExpressionLiteral":
    case "RangeExpression":
    case "ComputedPropertyName": {
      return true;
    }
    case "AssignmentExpression": {
      return startsWith(exp, /^(\[|\()/);
    }
    case "Literal": {
      return exp.raw?.startsWith("-") || exp.raw?.startsWith("+");
    }
    case "PipelineExpression":
    case "UnwrappedExpression": {
      return needsPrecedingSemicolon(exp.children[1]);
    }
    default: {
      if (exp.children) {
        return needsPrecedingSemicolon(exp.children);
      }
      ;
      return;
    }
  }
}
function blockContainingStatement(exp) {
  let child = exp;
  let parent = exp.parent;
  let m;
  while (parent != null && (m = parent.type, m === "StatementExpression" || m === "PipelineExpression" || m === "UnwrappedExpression")) {
    child = parent;
    parent = parent.parent;
  }
  if (!(parent?.type === "BlockStatement")) {
    return;
  }
  const index = findChildIndex(parent.expressions, child);
  assert.notEqual(index, -1, "Could not find statement in parent block");
  if (!(parent.expressions[index][1] === child)) {
    return;
  }
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
];
var precedenceMap = /* @__PURE__ */ new Map();
for (let i1 = 0, len3 = precedenceOrder.length; i1 < len3; i1++) {
  const prec = i1;
  const ops = precedenceOrder[i1];
  for (let i2 = 0, len1 = ops.length; i2 < len1; i2++) {
    const op = ops[i2];
    precedenceMap.set(op, prec);
  }
}
var precedenceStep = 1 / 64;
var precedenceAnd = precedenceMap.get("&&");
var precedenceRelational = precedenceMap.get("==");
var precedenceCustomDefault = precedenceMap.get("custom");
function getPrecedence(op) {
  if (typeof op === "string") {
    return precedenceMap.get(op) ?? (() => {
      throw new Error(`Unknown operator: ${op}`);
    })();
  } else if (op.type === "PatternTest") {
    return precedenceRelational;
  } else if (typeof op.prec === "number") {
    return op.prec;
  } else {
    return precedenceMap.get(op.prec ?? op.token) ?? (op.relational ? precedenceRelational : precedenceCustomDefault);
  }
}
function processBinaryOpExpression($0) {
  return processExpandedBinaryOpExpression(expandChainedComparisons($0));
}
function processExpandedBinaryOpExpression(expandedOps) {
  let i = 2;
  while (i < expandedOps.length) {
    let op = expandedOps[i];
    if (op.special) {
      let advanceLeft = function(allowEqual) {
        while (start >= 4) {
          const prevPrec = getPrecedence(expandedOps[start - 2]);
          if (!(prevPrec > prec || allowEqual && prevPrec === prec)) {
            return prevPrec === prec;
          }
          start -= 4;
        }
        return false;
      }, advanceRight = function(allowEqual) {
        while (end + 4 < expandedOps.length) {
          const nextPrec = getPrecedence(expandedOps[end + 2]);
          if (!(nextPrec > prec || allowEqual && nextPrec === prec)) {
            return nextPrec === prec;
          }
          end += 4;
        }
        return false;
      };
      let start = i - 2, end = i + 2;
      const prec = getPrecedence(op);
      let error;
      switch (op.assoc) {
        case "left":
        case void 0: {
          advanceLeft(true);
          advanceRight(false);
          break;
        }
        case "right": {
          advanceLeft(false);
          advanceRight(true);
          break;
        }
        case "non": {
          if (advanceLeft(false) || advanceRight(false)) {
            error = {
              type: "Error",
              message: `non-associative operator ${op.token} used at same precedence level without parenthesization`
            };
          }
          ;
          break;
        }
        case "arguments": {
          if (advanceLeft(false)) {
            error = {
              type: "Error",
              message: `arguments operator ${op.token} used at same precedence level as ${expandedOps[start - 2].token} to the left`
            };
          }
          advanceRight(true);
          break;
        }
        default: {
          throw new Error(`Unsupported associativity: ${op.assoc}`);
        }
      }
      let a = start === i - 2 ? expandedOps[start] : expandedOps.slice(start, i - 1);
      let wsOp = expandedOps[i - 1];
      let wsB = expandedOps[i + 1];
      let b = end === i + 2 ? expandedOps[i + 2] : expandedOps.slice(i + 2, end + 1);
      if (op.assoc === "arguments") {
        let i2 = 2;
        while (i2 < b.length) {
          if (prec === getPrecedence(b[i2])) {
            if (!(b[i2].token === op.token)) {
              error ??= {
                type: "Error",
                message: `arguments operator ${op.token} used at same precedence level as ${b[i2].token} to the right`
              };
            }
            b[i2] = ",";
          }
          i2 += 4;
        }
      } else {
        b = processExpandedBinaryOpExpression(b);
      }
      if (op.token === "instanceof") {
        if (wsOp.length === 0) {
          wsOp = " ";
        }
        if (wsB.length === 0) {
          wsB = " ";
        }
        if (typeof b === "object" && b != null && "type" in b && b.type === "Literal" && "children" in b && Array.isArray(b.children) && b.children.length >= 1 && typeof b.children[0] === "object" && b.children[0] != null && "type" in b.children[0] && b.children[0].type === "StringLiteral") {
          a = ["typeof ", makeLeftHandSideExpression(a)];
          if (op.negated) {
            op = { ...op, token: "!==", negated: false };
          } else {
            op = { ...op, token: "===" };
          }
        }
      }
      if (op.asConst) {
        a = makeAsConst(a);
        b = makeAsConst(b);
      }
      let children, type;
      if (op.type === "PatternTest") {
        children = [processPatternTest(a, b)];
      } else if (op.type === "ChainOp") {
        children = [a, wsOp, "&&", wsB, b];
        if (start - 2 >= 0 && getPrecedence(expandedOps[start - 2]) >= precedenceAnd && expandedOps[start - 2].token !== "&&" || end + 2 < expandedOps.length && getPrecedence(expandedOps[end + 2]) >= precedenceAnd && expandedOps[end + 2].token !== "&&") {
          children = ["(", ...children, ")"];
        }
      } else if (op.call) {
        wsOp = trimFirstSpace(wsOp);
        if (op.reversed) {
          wsB = trimFirstSpace(wsB);
          children = [wsOp, op.call, "(", wsB, b, ", ", a, ")", op.suffix];
        } else {
          children = [wsOp, op.call, "(", a, ",", wsB, b, ")", op.suffix];
        }
        type = "CallExpression";
      } else if (op.method) {
        wsOp = trimFirstSpace(wsOp);
        wsB = trimFirstSpace(wsB);
        if (op.reversed) {
          if (!(b.type === "CallExpression")) {
            b = makeLeftHandSideExpression(b);
          }
          b = dotNumericLiteral(b);
          children = [wsB, b, wsOp, ".", op.method, "(", a, ")"];
        } else {
          if (!(a.type === "CallExpression")) {
            a = makeLeftHandSideExpression(a);
          }
          a = dotNumericLiteral(a);
          children = [a, wsOp, ".", op.method, "(", wsB, b, ")"];
        }
        type = "CallExpression";
      } else if (op.token) {
        children = [a, wsOp, op, wsB, b];
        if (op.negated) children = ["(", ...children, ")"];
      } else {
        throw new Error("Unknown operator: " + JSON.stringify(op));
      }
      if (op.negated) children.unshift("!");
      if (error != null) {
        children.push(error);
      }
      expandedOps.splice(start, end - start + 1, {
        type,
        children
      });
      i = start + 2;
    } else {
      i += 4;
    }
  }
  return expandedOps;
}
function dotNumericLiteral(literal) {
  if (literal?.type === "Literal" && /^[+-]?(?:0|[1-9](?:_[0-9]|[0-9])*)$/.test(literal.raw)) {
    literal.children.push(".");
    literal.raw += ".";
  }
  return literal;
}
var asConst = {
  ts: true,
  children: [" as const"]
};
function makeAsConst(node) {
  if (Array.isArray(node) && node.length === 1) {
    node = node[0];
  }
  if (node.type === "Literal" && node.raw !== "null" || node.type === "ArrayExpression" || node.type === "ObjectExpression") {
    return { ...node, children: [...node.children, asConst] };
  } else {
    return node;
  }
}
function isExistence(exp) {
  if (exp?.type === "ParenthesizedExpression" && exp.implicit) {
    exp = exp.expression;
  }
  if (exp?.type === "Existence") {
    return exp;
  }
  ;
  return;
}
function isRelationalOp(op) {
  return op.relational || getPrecedence(op) === precedenceRelational;
}
var chainOp = {
  type: "ChainOp",
  special: true,
  prec: precedenceMap.get("chain"),
  assoc: "right"
};
function expandChainedComparisons([first, binops]) {
  if (!binops.length) {
    return [first];
  }
  const results = [];
  let start = 0;
  const chains = [];
  var i = 0;
  for (let i3 = 0, len22 = binops.length; i3 < len22; i3++) {
    var i = i3;
    var [, op] = binops[i3];
    if (isRelationalOp(op)) {
      chains.push(i);
    } else if (getPrecedence(op) < precedenceRelational) {
      processChains();
      first = results.pop();
    }
  }
  processChains();
  return results;
  function processChains() {
    if (chains.length > 0) {
      first = expandExistence(first);
      for (let i4 = 0, len3 = chains.length; i4 < len3; i4++) {
        const k = i4;
        const index = chains[i4];
        if (k > 0) {
          results.push(" ", chainOp, " ");
        }
        const binop = binops[index];
        const exp = binop[3] = expandExistence(binop[3]);
        results.push(first);
        if (k + 1 < chains.length) {
          const endIndex = chains[k + 1];
          let ref1;
          if (index + 1 < endIndex) {
            ref1 = processExpandedBinaryOpExpression([exp].concat(binops.slice(index + 1, endIndex).flat()));
          } else {
            ref1 = exp;
          }
          ;
          const rhs = ref1;
          const { ref, refAssignment } = maybeRefAssignment(rhs);
          binops[index][3] = makeLeftHandSideExpression(refAssignment ?? rhs);
          results.push(...binops.slice(start, index + 1).flat());
          first = ref;
          start = endIndex;
        } else {
          results.push(...binops.slice(start, i + 1).flat());
        }
      }
    } else {
      results.push(first);
      results.push(...binops.slice(start, i + 1).flat());
    }
    start = i + 1;
    chains.length = 0;
  }
  function expandExistence(exp) {
    let ref2;
    if (ref2 = isExistence(exp)) {
      const existence = ref2;
      const { ref, refAssignment } = maybeRefAssignment(existence.expression);
      if (refAssignment != null) {
        replaceNode(
          existence.expression,
          makeLeftHandSideExpression(refAssignment),
          existence
        );
      }
      results.push(existence, " ", chainOp, " ");
      return ref;
    } else {
      return exp;
    }
  }
}

// unplugin-civet:/Users/greghuc/workspace/Civet/source/parser/pattern-matching.civet.jsx
function processPatternTest(lhs, patterns) {
  const { ref, refAssignmentComma } = maybeRefAssignment(lhs, "m");
  const conditionExpression = flatJoin(patterns.map(($1) => getPatternConditions($1, ref)).map(($2) => flatJoin($2, " && ")), " || ");
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
    const { caseBlock } = s;
    const { clauses } = caseBlock;
    for (let i1 = 0, len3 = clauses.length; i1 < len3; i1++) {
      const c = clauses[i1];
      if (c.type === "WhenClause" && c.break) {
        if (isExit(c.block)) {
          c.children.splice(c.children.indexOf(c.break), 1);
          c.break = void 0;
        }
      }
    }
    let errors = false;
    let isPattern = false;
    if (clauses.some(($4) => $4.type === "PatternClause")) {
      isPattern = true;
      for (let i2 = 0, len1 = clauses.length; i2 < len1; i2++) {
        const c = clauses[i2];
        if (!(c.type === "PatternClause" || c.type === "DefaultClause")) {
          errors = true;
          c.children.push({
            type: "Error",
            message: "Can't mix pattern matching and non-pattern matching clauses"
          });
        }
      }
    }
    if (errors || !isPattern) {
      return;
    }
    let { condition } = s;
    if (condition.type === "ParenthesizedExpression") {
      condition = condition.expression;
    }
    let { ref, refAssignmentComma } = maybeRefAssignment(condition, "m");
    const root = [];
    let prev = root;
    let e;
    const l = clauses.length;
    for (let i3 = 0, len22 = clauses.length; i3 < len22; i3++) {
      const i = i3;
      const c = clauses[i3];
      if (c.type === "DefaultClause") {
        if (e != null) {
          replaceNode(e.block, c.block, e);
        } else {
          prev.push(c.block);
        }
        break;
      }
      let { patterns, block } = c;
      let pattern = patterns[0];
      const conditionExpression = flatJoin(patterns.map(($5) => getPatternConditions($5, ref)).map(($6) => flatJoin($6, " && ")), " || ");
      const condition2 = makeNode({
        type: "ParenthesizedExpression",
        children: ["(", ...refAssignmentComma, conditionExpression, ")"],
        expression: conditionExpression
      });
      braceBlock(block);
      block = blockWithPrefix(getPatternBlockPrefix(pattern, ref), block);
      if (i < l - 1) {
        const expressions = [];
        const block2 = makeNode({
          type: "BlockStatement",
          expressions,
          children: [expressions],
          bare: true
        });
        e = makeNode({
          type: "ElseClause",
          block: block2,
          children: ["\n", "else ", block2]
        });
      } else {
        e = void 0;
      }
      prev.push(["", makeNode({
        type: "IfStatement",
        children: ["if", condition2, block, e],
        then: block,
        else: e
      })]);
      refAssignmentComma = [];
      if (e != null) {
        prev = e.block.expressions;
      }
    }
    s.type = "PatternMatchingStatement";
    s.children = root;
    return updateParentPointers(s);
  });
  gatherRecursiveAll(
    statements,
    (s) => {
      return s.type === "ContinueStatement" && s.special === "switch";
    }
  ).forEach((cont) => {
    let m;
    if (!(m = cont.parent, typeof m === "object" && m != null && "type" in m && m.type === "BlockStatement" && "parent" in m && typeof m.parent === "object" && m.parent != null && "type" in m.parent && m.parent.type === "WhenClause" && "expressions" in m && Array.isArray(m.expressions) && m.expressions.length >= 1 && Array.isArray(m.expressions[m.expressions.length - 1]) && m.expressions[m.expressions.length - 1].length >= 2 && m.expressions[m.expressions.length - 1][1] === cont)) {
      return cont.children.push({
        type: "Error",
        message: `'continue switch' can only be used at end of 'when' clause`
      });
    }
    ;
    return;
  });
}
function getPatternConditions(pattern, ref, conditions = []) {
  if (pattern.rest) return conditions;
  switch (pattern.type) {
    case "ArrayBindingPattern": {
      const { elements, length } = pattern, hasRest = elements.some((e) => e.rest), l = (length - +hasRest).toString(), lengthCheck = hasRest ? [ref, ".length >= ", l] : [getHelperRef("len"), "(", ref, ", ", l, ")"];
      conditions.push(
        ["Array.isArray(", ref, ")"],
        lengthCheck
      );
      elements.forEach(({ children: [, e] }, i) => {
        const subRef = [ref, "[", i.toString(), "]"];
        return getPatternConditions(e, subRef, conditions);
      });
      const { blockPrefix } = pattern;
      if (blockPrefix) {
        const postElements = blockPrefix.children[1];
        const { length: postLength } = postElements;
        postElements.forEach(({ children: [, e] }, i) => {
          const subRef = [ref, "[", ref, ".length - ", (postLength + i).toString(), "]"];
          return getPatternConditions(e, subRef, conditions);
        });
      }
      ;
      break;
    }
    case "ObjectBindingPattern": {
      conditions.push(
        ["typeof ", ref, " === 'object'"],
        [ref, " != null"]
      );
      for (let ref1 = pattern.properties, i4 = 0, len3 = ref1.length; i4 < len3; i4++) {
        const p = ref1[i4];
        switch (p.type) {
          case "PinProperty":
          case "BindingProperty": {
            const { name, value } = p;
            let subRef;
            switch (name.type) {
              case "ComputedPropertyName": {
                conditions.push([name.expression, " in ", ref]);
                subRef = [ref, name];
                break;
              }
              case "Literal":
              case "StringLiteral":
              case "NumericLiteral": {
                conditions.push([name, " in ", ref]);
                subRef = [ref, "[", name, "]"];
                break;
              }
              case "Identifier": {
                conditions.push(["'", name.name, "' in ", ref]);
                subRef = [ref, ".", name.name];
                break;
              }
              case "AtBinding": {
                conditions.push(["'", name.ref.id, "' in ", ref]);
                subRef = [ref, ".", name.ref.id];
                break;
              }
            }
            if (value) {
              getPatternConditions(value, subRef, conditions);
            }
            ;
            break;
          }
        }
      }
      ;
      break;
    }
    case "ConditionFragment": {
      let { rhs } = pattern;
      if (rhs.length) {
        let [first, ...rest] = rhs;
        let [ws, ...op] = first;
        ws = [" "].concat(ws);
        first = [ws, ...op];
        rhs = [first, ...rest];
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
      if (!pattern.length) {
        return;
      }
      ;
      break;
    }
    case "ObjectBindingPattern": {
      if (!pattern.properties.length) {
        return;
      }
      ;
      break;
    }
    case "Literal":
    case "RegularExpressionLiteral":
    case "PinPattern": {
      return;
    }
    case "ConditionFragment": {
      if (!pattern.binding) {
        return;
      }
      ;
      break;
    }
  }
  let [splices, thisAssignments] = gatherBindingCode(pattern);
  const patternBindings2 = nonMatcherBindings(pattern);
  const subbindings = gatherSubbindings(patternBindings2);
  simplifyBindingProperties(patternBindings2);
  simplifyBindingProperties(subbindings);
  splices = splices.flatMap((s) => [", ", nonMatcherBindings(s)]);
  thisAssignments = thisAssignments.map(($7) => ["", $7, ";"]);
  const duplicateDeclarations = aggregateDuplicateBindings([patternBindings2, splices, subbindings]);
  const blockPrefix = [];
  if (ref || subbindings.length || splices.length) {
    const children = [decl];
    if (ref) {
      children.push(patternBindings2, typeSuffix, " = ", ref);
    }
    children.push(...subbindings);
    children.push(...splices);
    if (!ref) {
      children.splice(1, 1);
    }
    blockPrefix.push(["", {
      type: "Declaration",
      children,
      decl,
      names: [],
      bindings: []
      // avoid implicit return of any bindings
    }, ";"]);
  }
  blockPrefix.push(...thisAssignments);
  blockPrefix.push(...duplicateDeclarations.map(($8) => ["", $8, ";"]));
  if (!blockPrefix.length) {
    return;
  }
  return blockPrefix;
}
function elideMatchersFromArrayBindings(elements) {
  const results = [];
  for (let i5 = 0, len4 = elements.length; i5 < len4; i5++) {
    const element = elements[i5];
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
            const binding = nonMatcherBindings(element.binding);
            results.push(makeNode({
              ...element,
              binding,
              children: element.children.map((c) => {
                return c === element.binding ? binding : c;
              })
            }));
          }
        }
        ;
        break;
      }
    }
  }
  ;
  return results;
}
function elideMatchersFromPropertyBindings(properties) {
  const results1 = [];
  for (let i6 = 0, len5 = properties.length; i6 < len5; i6++) {
    const p = properties[i6];
    switch (p.type) {
      case "BindingProperty":
      case "PinProperty": {
        const { children, name, value } = p;
        const [ws] = children;
        const shouldElide = name.type === "NumericLiteral" && !value?.name || name.type === "ComputedPropertyName" && value?.subtype === "NumericLiteral";
        if (shouldElide) {
          continue;
        } else {
          let contents;
          let m1;
          switch (value?.type) {
            case "ArrayBindingPattern":
            case "ObjectBindingPattern": {
              const bindings = nonMatcherBindings(value);
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
              const bindings = nonMatcherBindings(value.pattern);
              contents = {
                ...p,
                subbinding: (m1 = bindings?.type, m1 === "ArrayBindingPattern" || m1 === "ObjectBindingPattern" || m1 === "Identifier") ? [
                  bindings,
                  " = ",
                  name
                ] : void 0
              };
              if (p.name === value.binding) {
                contents.children = [ws, name, p.delim];
              }
              ;
              break;
            }
            default: {
              contents = void 0;
            }
          }
          if (contents) {
            results1.push(contents);
          } else {
            continue;
          }
        }
        ;
        break;
      }
      default: {
        results1.push(p);
      }
    }
  }
  ;
  return results1;
}
function nonMatcherBindings(pattern) {
  let m2;
  switch (pattern.type) {
    case "ArrayBindingPattern":
    case "PostRestBindingElements": {
      const elements = elideMatchersFromArrayBindings(pattern.elements);
      return makeNode({
        ...pattern,
        elements,
        children: pattern.children.map(($9) => $9 === pattern.elements ? elements : $9)
      });
    }
    case "ObjectBindingPattern": {
      const properties = elideMatchersFromPropertyBindings(pattern.properties);
      return makeNode({
        ...pattern,
        properties,
        children: pattern.children.map(($10) => $10 === pattern.properties ? properties : $10)
      });
    }
    case "NamedBindingPattern": {
      const bindings = nonMatcherBindings(pattern.pattern);
      return makeNode({
        ...pattern,
        subbinding: (m2 = bindings?.type, m2 === "ArrayBindingPattern" || m2 === "ObjectBindingPattern" || m2 === "Identifier") ? [bindings, " = ", pattern.binding] : void 0
      });
    }
    case "ConditionFragment": {
      return pattern.binding;
    }
    default: {
      return pattern;
    }
  }
}
function aggregateDuplicateBindings(bindings) {
  const props = gatherRecursiveAll(
    bindings,
    ($) => $.type === "BindingProperty" || // Don't deduplicate ...rest properties; user should do so manually
    // because ...rest can be named arbitrarily
    //$.type is "BindingRestProperty"
    $.type === "Identifier" && $.parent?.type === "BindingElement" || $.type === "BindingRestElement"
  );
  const declarations = [];
  const propsGroupedByName = /* @__PURE__ */ new Map();
  for (let i7 = 0, len6 = props.length; i7 < len6; i7++) {
    const p = props[i7];
    const { name, value } = p;
    let m3;
    if (m3 = value?.type, m3 === "ArrayBindingPattern" || m3 === "ObjectBindingPattern") {
      continue;
    }
    const key = value?.name || name?.name || name;
    if (key?.type === "NumericLiteral" || key?.type === "ComputedPropertyName") {
      continue;
    }
    if (propsGroupedByName.has(key)) {
      propsGroupedByName.get(key).push(p);
    } else {
      propsGroupedByName.set(key, [p]);
    }
  }
  propsGroupedByName.forEach((shared, key) => {
    if (!key) {
      return;
    }
    if (ReservedWord({ fail() {
    } }, {
      pos: 0,
      input: key
    })) {
      for (let i8 = 0, len7 = shared.length; i8 < len7; i8++) {
        const p = shared[i8];
        aliasBinding(p, makeRef(`_${key}`, key));
      }
      return;
    }
    if (shared.length === 1) {
      return;
    }
    const refs = shared.map((p) => {
      const ref = makeRef(key);
      aliasBinding(p, ref);
      return ref;
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
  });
  return declarations;
}
function aliasBinding(p, ref) {
  if (p.type === "Identifier") {
    p.children[0] = ref;
  } else if (p.type === "BindingRestElement") {
    aliasBinding(p.binding, ref);
  } else if (p.value?.type === "Identifier") {
    aliasBinding(p.value, ref);
  } else {
    p.value = ref;
    const index = p.children.indexOf(p.name);
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
  const thisAssignments = assignments.map((a) => ["", a, ";"]);
  if ("typeSuffix" in pattern) {
    typeSuffix ??= pattern.typeSuffix;
  }
  const initializer = makeNode({
    type: "Initializer",
    expression: e,
    children: [ws, assign, e]
  });
  const binding = makeNode({
    type: "Binding",
    pattern,
    initializer,
    splices,
    typeSuffix,
    thisAssignments,
    children: [pattern, typeSuffix, initializer]
  });
  const children = [decl, binding];
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
    const declaration = ref1[i1];
    const { bindings } = declaration;
    if (!(bindings != null)) {
      continue;
    }
    for (let i2 = bindings.length + -1; i2 >= 0; --i2) {
      const i = i2;
      const binding = bindings[i];
      const subbindings = gatherSubbindings(binding);
      if (subbindings.length) {
        simplifyBindingProperties(binding);
        simplifyBindingProperties(subbindings);
        spliceChild(declaration, binding, 1, binding, subbindings);
      }
    }
    for (let i3 = 0, len22 = bindings.length; i3 < len22; i3++) {
      const binding = bindings[i3];
      let { typeSuffix, initializer } = binding;
      if (typeSuffix && typeSuffix.optional) {
        if (initializer && !typeSuffix.t) {
          const expression = trimFirstSpace(initializer.expression);
          let m;
          if (m = expression.type, m === "Identifier" || m === "MemberExpression") {
            typeSuffix.children.push(": ", typeSuffix.t = {
              type: "TypeTypeof",
              children: ["typeof ", expression],
              expression
            });
          } else if (expression.type === "Literal" || expression.type === "RegularExpressionLiteral" || expression.type === "TemplateLiteral") {
            typeSuffix.children.push(": ", typeSuffix.t = literalType(expression));
          } else {
            spliceChild(binding, typeSuffix, 1, {
              type: "Error",
              message: `Optional type can only be inferred from literals or member expressions, not ${expression.type}`
            });
            continue;
          }
        }
        if (typeSuffix.t) {
          convertOptionalType(typeSuffix);
        } else {
          spliceChild(binding, typeSuffix, 1);
          binding.children.push(initializer = binding.initializer = {
            type: "Initializer",
            expression: "undefined",
            children: [" = ", "undefined"]
          });
        }
      }
      if (initializer && blockContainingStatement(declaration)) {
        prependStatementExpressionBlock(initializer, declaration);
      }
    }
  }
  for (let ref2 = gatherRecursiveAll(statements, ($1) => $1.type === "ForStatement"), i4 = 0, len3 = ref2.length; i4 < len3; i4++) {
    const statement = ref2[i4];
    const { declaration } = statement;
    if (!(declaration?.type === "ForDeclaration")) {
      continue;
    }
    const { binding } = declaration;
    const blockPrefix = getPatternBlockPrefix(
      binding.pattern,
      void 0,
      append(declaration.decl, " "),
      binding.typeSuffix
    );
    simplifyBindingProperties(binding);
    if (blockPrefix != null) {
      statement.block.expressions.unshift(...blockPrefix);
      braceBlock(statement.block);
    }
  }
}
function prependStatementExpressionBlock(initializer, statement) {
  let { expression: exp } = initializer;
  let ws;
  if (Array.isArray(exp)) {
    ws = exp[0];
    exp = exp[1];
  }
  if (!(typeof exp === "object" && exp != null && "type" in exp && exp.type === "StatementExpression" || typeof exp === "object" && exp != null && "type" in exp && exp.type === "SpreadElement" && "expression" in exp && typeof exp.expression === "object" && exp.expression != null && "type" in exp.expression && exp.expression.type === "StatementExpression")) {
    return;
  }
  const pre = [];
  const statementExp = exp.statement;
  const blockStatement = ["", statementExp];
  let ref;
  if (statementExp.type === "IterationExpression") {
    if (statementExp.async || statementExp.generator) {
      return;
    }
    const statement2 = statementExp.statement;
    blockStatement[1] = statement2;
    if (statement2.type === "ComptimeStatement") {
      return;
    }
    if (statement2.type === "DoStatement") {
      ref = initializer.expression = initializer.children[2] = makeRef();
      assignResults(blockStatement, (resultNode) => {
        return makeNode({
          type: "AssignmentExpression",
          children: [ref, " = ", resultNode],
          parent: statement2
        });
      });
      const refDec = {
        type: "Declaration",
        children: ["let ", ref, ";"]
      };
      pre.unshift(refDec);
    } else {
      wrapIterationReturningResults(statement2, () => void 0);
      ref = initializer.expression = initializer.children[2] = statement2.resultsRef;
    }
  } else {
    ref = initializer.expression = initializer.children[2] = makeRef();
    assignResults(blockStatement, (resultNode) => {
      return makeNode({
        type: "AssignmentExpression",
        children: [ref, " = ", resultNode],
        parent: statement
      });
    });
    const refDec = {
      type: "Declaration",
      children: ["let ", ref, ";"]
    };
    pre.unshift(refDec);
    if (ws) {
      pre.push(ws);
    }
  }
  statement.children.unshift(pre, blockStatement, ";");
  updateParentPointers(blockStatement, statement);
  return ref;
}
function processDeclarationCondition(condition, rootCondition, parent) {
  if (!(condition.type === "DeclarationCondition")) {
    return;
  }
  const { decl, bindings } = condition.declaration;
  const binding = bindings[0];
  let { pattern, typeSuffix, initializer } = binding;
  const nullCheck = typeSuffix?.optional && !typeSuffix.t && !typeSuffix.nonnull;
  if (!(initializer != null)) {
    condition.children = [
      {
        type: "Error",
        message: "Missing initializer in declaration condition"
      }
    ];
    return;
  }
  let ref = prependStatementExpressionBlock(initializer, parent);
  if (ref) {
    Object.assign(condition, {
      type: "AssignmentExpression",
      children: [ref],
      pattern,
      ref,
      statementDeclaration: true
    });
  } else {
    const { expression } = initializer;
    ref = maybeRef(expression);
    const simple = ref === expression;
    let children;
    if (simple) {
      ref = trimFirstSpace(ref);
      children = [ref];
    } else {
      children = [ref, initializer];
      const grandparent = condition.parent?.parent;
      if (pattern.type === "Identifier" && (grandparent?.type === "IfStatement" || grandparent?.type === "IterationStatement") && !nullCheck) {
        children.unshift("(");
        children.push(")");
      }
    }
    if (nullCheck) {
      children.unshift("(");
      children.push(") != null");
      typeSuffix = void 0;
    }
    Object.assign(condition, {
      type: "AssignmentExpression",
      children,
      hoistDec: !simple ? {
        type: "Declaration",
        children: ["let ", ref, typeSuffix],
        names: []
      } : void 0,
      pattern,
      ref
    });
  }
  updateParentPointers(condition, parent);
  rootCondition.blockPrefix = getPatternBlockPrefix(pattern, ref, decl, typeSuffix);
}
function processDeclarationConditions(node) {
  gatherRecursiveAll(
    node,
    (n) => {
      return n.type === "IfStatement" || n.type === "IterationStatement" || n.type === "SwitchStatement";
    }
  ).forEach((s) => {
    return processDeclarationConditionStatement(s);
  });
}
function processDeclarationConditionStatement(s) {
  const { condition } = s;
  if (!condition?.expression) {
    return;
  }
  let { expression } = condition;
  if (expression && typeof expression === "object" && "type" in expression && expression.type === "UnaryExpression" && "children" in expression && Array.isArray(expression.children) && len2(expression.children, 2) && Array.isArray(expression.children[0]) && len2(expression.children[0], 1) && expression.children[0][0] === "!" && typeof expression.children[1] === "object" && expression.children[1] != null && "type" in expression.children[1] && expression.children[1].type === "ParenthesizedExpression" && "expression" in expression.children[1]) {
    const { children: [[], { expression: expression2 }] } = expression;
    expression = expression2;
  }
  processDeclarationCondition(expression, condition.expression, s);
  const { ref, pattern } = expression;
  if (pattern) {
    const conditions = getPatternConditions(pattern, ref).filter((c) => {
      if (Array.isArray(c) && len2(c, 2) && c[0] === ref && c[1] === " != null") {
        const [,] = c;
        return false;
      } else {
        return true;
      }
    });
    if (conditions.length) {
      let children = condition.children;
      if (s.negated) {
        let m1;
        if (!(m1 = condition.expression, typeof m1 === "object" && m1 != null && "type" in m1 && m1.type === "UnaryExpression" && "children" in m1 && Array.isArray(m1.children) && len2(m1.children, 2) && Array.isArray(m1.children[0]) && len2(m1.children[0], 1) && m1.children[0][0] === "!" && typeof m1.children[1] === "object" && m1.children[1] != null && "type" in m1.children[1] && m1.children[1].type === "ParenthesizedExpression")) {
          throw new Error("Unsupported negated condition");
        }
        ;
        ({ children } = condition.expression.children[1]);
      }
      children.unshift("(");
      for (let i5 = 0, len4 = conditions.length; i5 < len4; i5++) {
        const c = conditions[i5];
        children.push(" && ", c);
      }
      children.push(")");
    }
  }
  const { blockPrefix } = condition.expression;
  if (s.negated && blockPrefix && (s.type === "IfStatement" && isExit(s.then) || s.type === "IterationStatement")) {
    const { ancestor, child } = findAncestor(
      s,
      (a) => a.type === "BlockStatement"
    );
    if (!(ancestor != null)) {
      throw new Error("Couldn't find block for postfix declaration");
    }
    const index = findChildIndex(ancestor.expressions, child);
    if (index < 0) {
      throw new Error("Couldn't find where in block to put postfix declaration");
    }
    ancestor.expressions.splice(index + 1, 0, ...blockPrefix);
    updateParentPointers(ancestor);
    braceBlock(ancestor);
    let ref3;
    switch (s.type) {
      case "IfStatement": {
        if (ref3 = s.else?.block) {
          const elseBlock = ref3;
          if (elseBlock.bare && !elseBlock.semicolon) {
            elseBlock.children.push(elseBlock.semicolon = ";");
          }
          ancestor.expressions.splice(index + 1 + blockPrefix.length, 0, ["", elseBlock]);
          s.children = s.children.filter((a1) => a1 !== s.else);
          s.else = void 0;
        }
        const block = s.then;
        if (block.bare && !block.semicolon) {
          block.children.push(block.semicolon = ";");
        }
        ;
        break;
      }
    }
    return;
  }
  switch (s.type) {
    case "IfStatement": {
      const { else: e } = s;
      if (s.negated) {
        if (e != null) {
          const block = blockWithPrefix(blockPrefix, e.block);
          e.children = e.children.map(($2) => $2 === e.block ? block : $2);
          e.block = block;
          updateParentPointers(e);
        }
      } else {
        const block = blockWithPrefix(blockPrefix, s.then);
        s.children = s.children.map(($3) => $3 === s.then ? block : $3);
        s.then = block;
        updateParentPointers(s);
      }
      ;
      break;
    }
    case "IterationStatement": {
      if (!blockPrefix) {
        return;
      }
      const { children, block } = s;
      const newBlock = blockWithPrefix(blockPrefix, block);
      s.children = children.map(($4) => $4 === block ? newBlock : $4);
      updateParentPointers(s);
      break;
    }
    case "SwitchStatement": {
      const { ref: ref2, statementDeclaration } = condition.expression;
      if (!blockPrefix) {
        return;
      }
      const newCondition = {
        type: "ParenthesizedExpression",
        children: ["(", ref2, ")"],
        expression: ref2,
        parent: s
      };
      s.children = s.children.map(function(c) {
        if (c === s.condition) {
          return newCondition;
        } else {
          return c;
        }
      });
      s.condition = newCondition;
      updateParentPointers(s);
      if (statementDeclaration) {
        const block = makeEmptyBlock();
        replaceBlockExpression(s.parent, s, block);
        block.expressions.push(["", s]);
        s.children.splice(s.children.findIndex(($5) => $5.token === "switch"), 0, blockPrefix);
        s.parent = block;
      } else {
        const block = blockWithPrefix([["", [{
          type: "Declaration",
          children: ["let ", ...condition.expression.children]
        }], ";"], ...blockPrefix], makeEmptyBlock());
        updateParentPointers(block, s.parent);
        replaceBlockExpression(s.parent, s, block);
        block.expressions.push(["", s]);
        s.parent = block;
      }
      ;
      break;
    }
  }
}
function dynamizeFromClause(from) {
  from = from.slice(1);
  from = trimFirstSpace(from);
  let ref4;
  if (ref4 = from[from.length - 1]?.assertion) {
    const assert2 = ref4;
    let ref5;
    ref5 = from[from.length - 1];
    ref5.children = ref5.children.filter((a2) => a2 !== assert2);
    from.push(", {", assert2.keyword, ":", assert2.object, "}");
  }
  return ["(", ...from, ")"];
}
function dynamizeImportDeclaration(decl) {
  const { imports } = decl;
  let { star, binding, specifiers } = imports;
  const justDefault = binding && !specifiers && !star;
  let ref6;
  {
    if (binding) {
      if (specifiers) {
        ref6 = makeRef();
      } else {
        ref6 = binding;
      }
    } else {
      ref6 = convertNamedImportsToObject(imports, true);
    }
  }
  ;
  const pattern = ref6;
  const c = "const";
  const expression = [
    justDefault ? "(" : void 0,
    { type: "Await", children: ["await"] },
    " ",
    decl.children[0],
    // import
    dynamizeFromClause(decl.from),
    justDefault ? ").default" : void 0
  ];
  const initializer = {
    type: "Initializer",
    expression,
    children: [" ", "= ", expression]
  };
  const bindings = [{
    type: "Binding",
    names: pattern.names,
    pattern,
    initializer,
    children: [pattern, initializer]
  }];
  if (binding && specifiers) {
    const pattern2 = binding;
    const exp2 = [
      pattern,
      ".default"
    ];
    const initializer2 = {
      type: "Initializer",
      expression,
      children: [" ", "= ", exp2]
    };
    bindings.push({
      type: "Binding",
      names: binding.names,
      pattern: pattern2,
      initializer: initializer2,
      children: [pattern2, initializer2]
    });
    const pattern3 = convertNamedImportsToObject(imports.children.at(-1), true);
    const initializer3 = {
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
  const [imp, ws1, named, ws2, from] = $0;
  const object = convertNamedImportsToObject(named);
  const dot = ".";
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
        reversed: true
      }
    ]
  });
}
function convertWithClause(withClause, extendsClause) {
  let extendsToken, extendsTarget, ws;
  if (extendsClause) {
    [extendsToken, ws, extendsTarget] = extendsClause;
  } else {
    extendsToken = {
      type: "Extends",
      children: [" extends"]
    };
    ws = "";
    extendsTarget = "Object";
  }
  const wrapped = withClause.targets.reduce(
    (extendsTarget2, [wsNext, withTarget]) => {
      const args = [extendsTarget2];
      const exp = {
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
      ws = wsNext;
      return exp;
    },
    extendsTarget
  );
  return [extendsToken, insertTrimmingSpace(ws, " "), wrapped];
}

// unplugin-civet:/Users/greghuc/workspace/Civet/source/parser/unary.civet.jsx
function processUnaryExpression(pre, exp, post) {
  if (!(pre.length || post)) {
    return exp;
  }
  if (post?.token === "?") {
    post = {
      $loc: post.$loc,
      token: " != null"
    };
    if (pre.length) {
      const lastPre = pre[pre.length - 1];
      if (lastPre.token === "!") {
        post.token = " == null";
        pre = pre.slice(0, -1);
      } else if (lastPre.length === 2 && lastPre[0].token === "!") {
        post.token = " == null";
        pre = pre.slice(0, -1);
      }
    }
    const existence = {
      type: "Existence",
      expression: exp,
      children: [exp, post],
      parent: void 0
    };
    exp = makeLeftHandSideExpression(existence);
    if (pre.length) {
      return {
        type: "UnaryExpression",
        children: [pre, exp],
        pre,
        expression: exp
      };
    }
    return exp;
  }
  if (exp?.type === "Literal" && pre.length) {
    let [...ref] = pre, [last] = ref.splice(-1);
    let m;
    if (m = last?.token, m === "+" || m === "-") {
      last = last;
      exp = {
        ...exp,
        children: [last, ...exp.children],
        raw: `${last.token}${exp.raw}`
      };
      pre = pre.slice(0, -1);
      if (!(pre.length || post)) {
        return exp;
      }
    }
  }
  let ref1;
  while (ref1 = pre.length) {
    const l = ref1;
    const last = pre[l - 1];
    if (last.type === "Await") {
      if (last.op) {
        if (exp.type !== "ParenthesizedExpression") {
          exp = ["(", exp, ")"];
        }
        exp = {
          type: "CallExpression",
          children: [...last.children, "Promise", last.op, exp]
        };
        pre = pre.slice(0, -1);
      } else {
        let m1;
        if (m1 = firstNonSpace(exp), typeof m1 === "string" && /^[ \t]*\n/.test(m1) || typeof m1 === "object" && m1 != null && "token" in m1 && typeof m1.token === "string" && /^[ \t]*\n/.test(m1.token)) {
          exp = parenthesizeExpression(exp);
        }
        exp = {
          type: "AwaitExpression",
          children: [...last.children, exp]
        };
        pre = pre.slice(0, -1);
      }
    } else {
      break;
    }
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
  const isArray = args.type === "ArrayExpression";
  if (!isArray) {
    args = stripTrailingImplicitComma(args);
  }
  if (isArray || args.length > 2) {
    const last = pre[pre.length - 1];
    if (!(typeof last === "object" && last != null && "type" in last && last.type === "Await")) {
      return;
    }
    if (last.op) {
      if (!isArray) {
        args = {
          type: "ArrayExpression",
          children: ["[", args, "]"]
        };
      }
    } else {
      pre.pop();
      if (!isArray) {
        args = args;
        args = {
          type: "ArrayExpression",
          children: [
            "[",
            ...(() => {
              const results = [];
              for (let i = 0, len3 = args.length; i < len3; i++) {
                const arg = args[i];
                if (typeof arg === "object" && arg != null && "type" in arg && arg.type === "Argument") {
                  const expression = processUnaryExpression([last], arg.expression);
                  results.push({
                    ...arg,
                    expression,
                    children: arg.children.map(($) => $ === arg.expression ? expression : $)
                  });
                } else {
                  results.push(arg);
                }
              }
              return results;
            })(),
            "]"
          ]
        };
      } else {
        args = trimFirstSpace(args);
        args = {
          ...args,
          children: args.children.map(
            (arg) => {
              if (typeof arg === "object" && arg != null && "type" in arg && arg.type === "ArrayElement" && "expression" in arg && "children" in arg) {
                const { expression: exp, children } = arg;
                let expression = processUnaryExpression([last], trimFirstSpace(exp));
                expression = prepend(getTrimmingSpace(exp), expression);
                return {
                  ...arg,
                  expression,
                  children: children.map(($1) => $1 === exp ? expression : $1)
                };
              } else {
                return arg;
              }
            }
          )
        };
      }
    }
  }
  return processUnaryExpression(pre, args, post);
}

// unplugin-civet:/Users/greghuc/workspace/Civet/source/parser/pipe.civet.jsx
function constructInvocation(fn, arg) {
  let expr = fn.expr;
  while (expr.type === "ParenthesizedExpression") {
    expr = expr.expression;
  }
  if (expr.ampersandBlock) {
    const { ref, body } = expr;
    ref.type = "PipedExpression";
    ref.children = [makeLeftHandSideExpression(arg)];
    updateParentPointers(ref);
    return makeNode({
      type: "UnwrappedExpression",
      expression: body,
      children: [skipIfOnlyWS(fn.leadingComment), body, skipIfOnlyWS(fn.trailingComment)]
    });
  }
  expr = fn.expr;
  let lhs = expr;
  if (!(lhs.type === "NewExpression")) {
    lhs = makeLeftHandSideExpression(lhs);
  }
  let comment = skipIfOnlyWS(fn.trailingComment);
  if (comment) lhs.children.push(comment);
  comment = skipIfOnlyWS(fn.leadingComment);
  if (comment) lhs.children.splice(1, 0, comment);
  switch (arg.type) {
    case "CommaExpression": {
      arg = makeLeftHandSideExpression(arg);
      break;
    }
  }
  const args = [arg];
  const call = {
    type: "Call",
    args,
    children: ["(", args, ")"]
  };
  if (lhs.type === "NewExpression") {
    let { expression } = lhs;
    expression = {
      type: "CallExpression",
      children: [expression, call]
    };
    return {
      ...lhs,
      expression,
      children: lhs.children.map(($) => $ === lhs.expression ? expression : $)
    };
  } else {
    return {
      type: "CallExpression",
      children: [lhs, call]
    };
  }
}
function constructPipeStep(fn, arg, returning) {
  if (!returning) {
    returning = null;
  }
  let children = [[fn.leadingComment, fn.expr, fn.trailingComment].map(skipIfOnlyWS), " ", arg];
  switch (fn.expr.token) {
    case "await": {
      children = processUnaryExpression([fn.expr], arg, void 0);
    }
    case "yield": {
      return [
        children,
        returning
      ];
    }
    case "throw": {
      const statement = { type: "ThrowStatement", children };
      return [
        {
          type: "StatementExpression",
          statement,
          children: [statement]
        },
        null
      ];
    }
    case "return": {
      return [{
        type: "ReturnStatement",
        children
      }, null];
    }
  }
  return [
    constructInvocation(fn, arg),
    returning
  ];
}
function processPipelineExpressions(statements) {
  for (let ref1 = gatherRecursiveAll(statements, ($1) => $1.type === "PipelineExpression"), i1 = 0, len3 = ref1.length; i1 < len3; i1++) {
    const s = ref1[i1];
    const [ws, , body] = s.children;
    let [, arg] = s.children;
    const children = [ws];
    const comma = blockContainingStatement(s) ? ";" : ",";
    let usingRef = null;
    for (let i2 = 0, len1 = body.length; i2 < len1; i2++) {
      const i = i2;
      const step = body[i2];
      const [leadingComment, pipe, trailingComment, expr] = step;
      const returns = pipe.token === "||>";
      let ref, result, returning = returns ? arg : null;
      if (pipe.token === "|>=") {
        let initRef;
        if (i === 0) {
          checkValidLHS(arg);
          outer: switch (arg.type) {
            case "MemberExpression": {
              if (arg.children.length <= 2) {
                break;
              }
            }
            case "CallExpression": {
              const access = arg.children.pop();
              usingRef = makeRef();
              initRef = {
                type: "AssignmentExpression",
                children: [usingRef, " = ", arg, comma]
              };
              arg = {
                type: "MemberExpression",
                children: [usingRef, access]
              };
              break;
            }
          }
          const lhs = [[
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
          });
          arg = clone(arg);
          removeHoistDecs(arg);
          if (arg.children[0].type === "Ref") {
            arg.children[0] = usingRef;
          }
        } else {
          children.unshift({
            type: "Error",
            $loc: pipe.token.$loc,
            message: "Can't use |>= in the middle of a pipeline"
          });
        }
      } else {
        if (i === 0) s.children = children;
      }
      if (returns && (ref = needsRef(arg))) {
        usingRef = usingRef || ref;
        arg = {
          type: "ParenthesizedExpression",
          children: ["(", {
            type: "AssignmentExpression",
            children: [usingRef, " = ", arg]
          }, ")"]
        };
        returning = usingRef;
      }
      ;
      [result, returning] = constructPipeStep(
        {
          leadingComment: skipIfOnlyWS(leadingComment),
          trailingComment: skipIfOnlyWS(trailingComment),
          expr
        },
        arg,
        returning
      );
      if (result.type === "ReturnStatement") {
        if (i < body.length - 1) {
          result.children.push({
            type: "Error",
            message: "Can't continue a pipeline after returning"
          });
        }
        arg = result;
        if (children[children.length - 1] === ",") {
          children.pop();
          children.push(";");
        }
        break;
      }
      if (returning) {
        arg = returning;
        children.push(result, comma);
      } else {
        arg = result;
      }
    }
    if (usingRef) {
      s.hoistDec = {
        type: "Declaration",
        children: ["let ", usingRef],
        names: []
      };
    }
    children.push(arg);
    if (!children.some(($2) => $2?.type === "ReturnStatement") && children.some(($3) => $3 === ",")) {
      const { parent } = s;
      const parenthesizedExpression = makeLeftHandSideExpression({ ...s });
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
  const ws2 = range2.children[1];
  const comma = { $loc: range2.$loc, token: "," };
  let ref;
  switch (range2.increasing) {
    case true: {
      ref = ($) => $;
      break;
    }
    case false: {
      ref = ($1) => -$1;
      break;
    }
    default: {
      ref = Math.abs;
    }
  }
  ;
  const abs = ref;
  const lengthAdjust = 1 - Number(!range2.left.inclusive) - Number(!range2.right.inclusive);
  let children;
  if (typeof start === "object" && start != null && "type" in start && start.type === "Literal" && (typeof end === "object" && end != null && "type" in end && end.type === "Literal")) {
    let startValue = literalValue(start);
    let endValue = literalValue(end);
    if (typeof startValue === "string" && typeof endValue === "string") {
      if (!(startValue.length === 1 && 1 === endValue.length)) {
        throw new Error("String range start and end must be a single character");
      }
      let startCode = startValue.charCodeAt(0);
      let endCode = endValue.charCodeAt(0);
      const step = startCode <= endCode ? 1 : -1;
      const length = abs(endCode - startCode) + lengthAdjust;
      if (!range2.left.inclusive) {
        startCode += step;
      }
      if (length <= 26) {
        children = [
          "[",
          Array.from({ length }, (_2, i) => {
            return JSON.stringify(String.fromCharCode(startCode + i * step));
          }).join(", "),
          "]"
        ];
      } else {
        children = [
          getHelperRef(startCode <= endCode ? "stringRange" : "revStringRange"),
          "(",
          startCode.toString(),
          ", ",
          length.toString(),
          ")"
        ];
      }
      if (range2.error != null) {
        children.unshift(range2.error);
      }
    } else if (typeof startValue === "number" && typeof endValue === "number") {
      const step = startValue <= endValue ? 1 : -1;
      const length = abs(endValue - startValue) + lengthAdjust;
      if (!range2.left.inclusive) {
        startValue += step;
      }
      if (length <= 20) {
        children = [
          "[",
          Array.from({ length }, (_2, i) => startValue + i * step).join(", "),
          "]"
        ];
        if (range2.error != null) {
          children.unshift(range2.error);
        }
      }
    }
  }
  if (!(children != null)) {
    if (range2.increasing != null) {
      const sign = range2.increasing ? "+" : "-";
      end = makeLeftHandSideExpression(end);
      children = [
        getHelperRef(range2.increasing ? "range" : "revRange"),
        "(",
        range2.left.inclusive ? start : [makeLeftHandSideExpression(start), ` ${sign} 1`],
        ",",
        range2.right.inclusive ? [makeLeftHandSideExpression(end), ` ${sign} 1`] : end,
        ...ws1,
        ")"
      ];
    } else {
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
    }
  }
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
  let { start, end, left, right, increasing } = range2;
  const counterRef = makeRef("i");
  const infinite = typeof end === "object" && end != null && "type" in end && end.type === "Identifier" && "name" in end && end.name === "Infinity";
  let stepRef, asc;
  if (stepExp) {
    stepExp = trimFirstSpace(stepExp);
    stepRef = maybeRef(stepExp, "step");
  } else if (infinite) {
    stepExp = stepRef = makeNumericLiteral(1);
  } else if (increasing != null) {
    if (increasing) {
      stepExp = stepRef = makeNumericLiteral(1);
      asc = true;
    } else {
      stepExp = stepRef = makeNumericLiteral(-1);
      asc = false;
    }
  }
  let ref1;
  if (stepExp?.type === "Literal") {
    try {
      ref1 = literalValue(stepExp);
    } catch (e) {
      ref1 = void 0;
    }
  } else {
    ref1 = void 0;
  }
  ;
  const stepValue = ref1;
  if (typeof stepValue === "number") {
    asc = stepValue > 0;
  }
  let ref2;
  if (stepRef) ref2 = start;
  else ref2 = maybeRef(start, "start");
  let startRef = ref2;
  let endRef = maybeRef(end, "end");
  const startRefDec = startRef !== start ? [startRef, " = ", start, ", "] : [];
  const endRefDec = endRef !== end ? [endRef, " = ", end, ", "] : [];
  let ascDec = [], ascRef;
  if (stepExp) {
    if (!(stepRef === stepExp)) {
      ascDec = [", ", stepRef, " = ", stepExp];
    }
  }
  if (start?.type === "Literal" && "Literal" === end?.type) {
    asc = literalValue(start) <= literalValue(end);
    let ref3;
    if ("StringLiteral" === (ref3 = start.subtype) && ref3 === end.subtype) {
      const startChar = literalValue(start).charCodeAt(0).toString();
      startRef = {
        type: "Literal",
        subtype: "NumericLiteral",
        raw: startChar,
        children: [startChar]
      };
      endRef = literalValue(end).charCodeAt(0).toString();
    }
  } else if (!stepExp) {
    ascRef = makeRef("asc");
    ascDec = [", ", ascRef, " = ", startRef, " <= ", endRef];
  }
  if (!left.inclusive) {
    startRef = [
      makeLeftHandSideExpression(startRef),
      " + ",
      stepRef
    ];
  }
  let varAssign = [], varLetAssign = varAssign, varLet = varAssign, blockPrefix;
  let names = forDeclaration?.names ?? [];
  if (forDeclaration != null) {
    if (forDeclaration.type === "AssignmentExpression") {
      varAssign = varLetAssign = [forDeclaration, " = "];
      names = [];
    } else if (forDeclaration.decl === "let") {
      const varName = forDeclaration.children.splice(1);
      varAssign = [...trimFirstSpace(varName), " = "];
      varLet = [",", ...varName, " = ", counterRef];
    } else {
      const value = "StringLiteral" === start?.subtype ? ["String.fromCharCode(", counterRef, ")"] : counterRef;
      blockPrefix = [
        ["", [forDeclaration, " = ", value], ";"]
      ];
    }
  }
  const declaration = {
    type: "Declaration",
    children: ["let ", ...startRefDec, ...endRefDec, counterRef, " = ", ...varLetAssign, startRef, ...varLet, ...ascDec],
    names
  };
  const counterPart = right.inclusive ? [counterRef, " <= ", endRef, " : ", counterRef, " >= ", endRef] : [counterRef, " < ", endRef, " : ", counterRef, " > ", endRef];
  const condition = infinite || stepValue === 0 ? [] : asc != null ? asc ? counterPart.slice(0, 3) : counterPart.slice(4) : stepRef ? [stepRef, " !== 0 && (", stepRef, " > 0 ? ", ...counterPart, ")"] : [ascRef, " ? ", ...counterPart];
  const increment = stepValue === 1 ? [...varAssign, "++", counterRef] : stepValue === -1 ? [...varAssign, "--", counterRef] : stepRef ? [...varAssign, counterRef, " += ", stepRef] : ascRef ? [...varAssign, ascRef, " ? ++", counterRef, " : --", counterRef] : [...varAssign, asc ? "++" : "--", counterRef];
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
    const decl = ref4[i1];
    if (!(decl != null)) {
      continue;
    }
    if (!(decl.type === "ForDeclaration")) {
      checkValidLHS(decl);
    }
  }
  if (!startsWith(exp, /^\s/)) {
    exp = prepend(" ", exp);
  }
  if (exp.type === "RangeExpression" && inOf.token === "of" && !declaration2) {
    return forRange(
      open,
      declaration,
      exp,
      step && prepend(trimFirstSpace(step[0]), trimFirstSpace(step[2])),
      // omit "by" token
      close
    );
  } else if (step) {
    throw new Error("for..of/in cannot use 'by' except with range literals");
  }
  let eachOwnError;
  let hoistDec, blockPrefix = [];
  if (eachOwn && eachOwn[0].token === "each") {
    if (inOf.token === "of") {
      const counterRef = makeRef("i");
      const lenRef = makeRef("len");
      const expRef2 = maybeRef(exp);
      const increment = "++";
      let assignmentNames = [...declaration.names];
      if (declaration2) {
        const [, , ws22, decl22] = declaration2;
        blockPrefix.push(["", [
          trimFirstSpace(ws22),
          decl22,
          " = ",
          counterRef
        ], ";"]);
        assignmentNames.push(...decl22.names);
      }
      const expRefDec = expRef2 !== exp ? [trimFirstSpace(expRef2), " = ", trimFirstSpace(exp), ", "] : [];
      blockPrefix.push(["", {
        type: "Declaration",
        children: [declaration, " = ", trimFirstSpace(expRef2), "[", counterRef, "]"],
        names: assignmentNames,
        implicitLift: true
      }, ";"]);
      const eachDeclaration = declaration;
      declaration = {
        type: "Declaration",
        children: ["let ", ...expRefDec, counterRef, " = 0, ", lenRef, " = ", trimFirstSpace(expRef2), ".length"],
        decl: "let",
        names: []
      };
      const condition = [counterRef, " < ", lenRef, "; "];
      const children = [open, declaration, "; ", condition, counterRef, increment, close];
      return { declaration, eachDeclaration, children, blockPrefix };
    } else {
      eachOwnError = {
        type: "Error",
        message: "'each' is only meaningful in for..of loops"
      };
    }
  }
  let own = eachOwn && eachOwn[0].token === "own";
  let expRef;
  if (own && inOf.token !== "in") {
    own = false;
    eachOwnError = {
      type: "Error",
      message: "'own' is only meaningful in for..in loops"
    };
  }
  const { binding } = declaration;
  let pattern = binding?.pattern;
  if (pattern?.type === "NamedBindingPattern") {
    pattern = pattern.binding;
  }
  if (binding?.typeSuffix || inOf.token === "in" && declaration2 && pattern.type !== "Identifier") {
    const itemRef = makeRef(inOf.token === "in" ? "key" : "item");
    blockPrefix.push(["", {
      type: "Declaration",
      children: [declaration, " = ", itemRef],
      names: declaration.names
    }, ";"]);
    declaration = {
      type: "ForDeclaration",
      binding: {
        type: "Binding",
        pattern: itemRef,
        children: [itemRef],
        names: []
      },
      children: ["const ", itemRef],
      names: []
    };
    if (!(pattern.type === "Identifier")) {
      pattern = itemRef;
    }
  }
  if (!(declaration2 || own)) {
    return {
      declaration,
      blockPrefix,
      children: [awaits, eachOwnError, open, declaration, ws, inOf, expRef ?? exp, close]
      // omit declaration2, replace eachOwn with eachOwnError, replace exp with expRef
    };
  }
  let ws2, decl2;
  if (declaration2) [, , ws2, decl2] = declaration2;
  switch (inOf.token) {
    case "of": {
      const counterRef = makeRef("i");
      hoistDec = {
        type: "Declaration",
        children: ["let ", counterRef, " = 0"],
        decl: "let",
        names: []
      };
      blockPrefix.push(["", {
        type: "Declaration",
        children: [trimFirstSpace(ws2), decl2, " = ", counterRef, "++"],
        names: decl2.names,
        decl: decl2.decl
      }, ";"]);
      break;
    }
    case "in": {
      const expRef2 = maybeRef(exp);
      if (!(expRef2 === exp)) {
        hoistDec = {
          type: "Declaration",
          children: ["let ", expRef2],
          names: [],
          decl: "let"
        };
        exp = {
          type: "AssignmentExpression",
          children: [" ", expRef2, " =", exp]
        };
      }
      if (own) {
        const hasPropRef = getHelperRef("hasProp");
        blockPrefix.push(["", ["if (!", hasPropRef, "(", trimFirstSpace(expRef2), ", ", trimFirstSpace(pattern), ")) continue"], ";"]);
      }
      if (decl2) {
        const trimmedPattern = trimFirstSpace(pattern);
        const expression = makeNode({
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
              const { binding: binding2, children } = decl2;
              binding2.children.push(binding2.initializer = makeNode({
                type: "Initializer",
                expression,
                children: [" = ", expression]
              }));
              return makeNode({
                type: "Declaration",
                children: [
                  trimFirstSpace(ws2),
                  ...children
                ],
                bindings: [decl2.binding],
                decl: decl2.decl,
                names: decl2.names
              });
            } else {
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
            }
          })(),
          ";"
        ]);
      }
      ;
      break;
    }
    default: {
      throw new Error(`for item, index must use 'of' or 'in' instead of '${inOf.token}'`);
    }
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
  const declarations = gatherNodes(statements, ($) => $.type === "Declaration");
  const declarationNames = declarations.flatMap((d) => d.names);
  const globals = getConfig().globals || [];
  return new Set(globals.concat(declarationNames));
}
function createConstLetDecs(statements, scopes, letOrConst) {
  function findVarDecs(statements2, decs) {
    const declarationNames = gatherRecursive(statements2, (node) => {
      return node.type === "Declaration" && node.children && node.children.length > 0 && node.children[0].token && node.children[0].token.startsWith("var") || node.type === "FunctionExpression";
    }).filter((node) => node.type === "Declaration").flatMap((node) => node.names);
    return new Set(declarationNames);
  }
  let declaredIdentifiers = findVarDecs(statements);
  function hasDec(name) {
    return declaredIdentifiers.has(name) || scopes.some(($1) => $1.has(name));
  }
  function gatherBlockOrOther(statement) {
    return gatherNodes(statement, (s) => s.type === "BlockStatement" || s.type === "AssignmentExpression" || s.type === "Declaration").flatMap((node) => {
      if (node.type == "BlockStatement") {
        return node.bare ? gatherBlockOrOther(node.expressions) : node;
      } else if (node.children && node.children.length) {
        return [...gatherBlockOrOther(node.children), node];
      } else {
        return [];
      }
    });
  }
  let currentScope = /* @__PURE__ */ new Set();
  scopes.push(currentScope);
  const fnNodes = gatherNodes(statements, isFunction);
  const forNodes = gatherNodes(statements, (s) => s.type === "ForStatement");
  let targetStatements = [];
  for (const statement of statements) {
    const nodes = gatherBlockOrOther(statement);
    let undeclaredIdentifiers = [];
    for (const node of nodes) {
      if (node.type == "BlockStatement") {
        let block = node;
        let fnNode = fnNodes.find((fnNode2) => fnNode2.block === block);
        let forNode = forNodes.find((forNode2) => forNode2.block === block);
        if (fnNode != null) {
          scopes.push(new Set(fnNode.parameters.names));
          createConstLetDecs(block.expressions, scopes, letOrConst);
          scopes.pop();
        } else if (forNode != null) {
          scopes.push(new Set(forNode.declaration.names));
          createConstLetDecs(block.expressions, scopes, letOrConst);
          scopes.pop();
        } else {
          createConstLetDecs(block.expressions, scopes, letOrConst);
        }
        continue;
      }
      if (node.names == null) continue;
      let names = node.names.filter((name) => !hasDec(name));
      if (node.type == "AssignmentExpression") {
        undeclaredIdentifiers.push(...names);
      }
      names.forEach((name) => currentScope.add(name));
    }
    if (undeclaredIdentifiers.length > 0) {
      let indent = statement[0];
      let firstIdentifier = gatherNodes(statement[1], (node) => node.type == "Identifier")[0];
      if (undeclaredIdentifiers.length == 1 && statement[1].type == "AssignmentExpression" && statement[1].names.length == 1 && statement[1].names[0] == undeclaredIdentifiers[0] && firstIdentifier && firstIdentifier.names == undeclaredIdentifiers[0] && gatherNodes(statement[1], (node) => node.type === "ObjectBindingPattern").length == 0) {
        statement[1].children.unshift([`${letOrConst} `]);
      } else {
        let tail = "\n";
        if (gatherNodes(indent, (node) => node.token && node.token.endsWith("\n")).length > 0) {
          tail = void 0;
        }
        targetStatements.push([indent, {
          type: "Declaration",
          children: ["let ", ...undeclaredIdentifiers.join(", ")],
          names: undeclaredIdentifiers
        }, tail]);
      }
    }
    targetStatements.push(statement);
  }
  scopes.pop();
  statements.splice(0, statements.length, ...targetStatements);
}
function createVarDecs(block, scopes, pushVar) {
  function hasDec(name) {
    return scopes.some(($2) => $2.has(name));
  }
  function findAssignments(statements2, decs2) {
    let assignmentStatements2 = gatherNodes(statements2, ($3) => $3.type === "AssignmentExpression");
    if (assignmentStatements2.length) {
      concatAssign2(
        assignmentStatements2,
        findAssignments(assignmentStatements2.map((s) => s.children), decs2)
      );
    }
    return assignmentStatements2.filter(($4) => !($4.parent?.type === "CoffeeClassPublic"));
  }
  pushVar ??= (name) => {
    varIds.push(name);
    return decs.add(name);
  };
  const { expressions: statements } = block;
  const decs = findDecs(statements);
  scopes.push(decs);
  const varIds = [];
  const assignmentStatements = findAssignments(statements, scopes);
  const undeclaredIdentifiers = assignmentStatements.flatMap(($5) => $5?.names || []);
  undeclaredIdentifiers.filter((x, i, a) => {
    if (!hasDec(x)) return a.indexOf(x) === i;
    return;
  }).forEach(pushVar);
  const fnNodes = gatherNodes(statements, isFunction);
  const forNodes = gatherNodes(statements, (s) => s.type === "ForStatement");
  const blockNodes = new Set(gatherNodes(statements, (s) => s.type === "BlockStatement"));
  fnNodes.forEach(({ block: block2 }) => blockNodes.delete(block2));
  forNodes.forEach(({ block: block2 }) => blockNodes.delete(block2));
  blockNodes.forEach((block2) => {
    return createVarDecs(block2, scopes, pushVar);
  });
  forNodes.forEach(({ block: block2, declaration }) => {
    scopes.push(new Set(declaration?.names));
    createVarDecs(block2, scopes, pushVar);
    return scopes.pop();
  });
  fnNodes.forEach(({ block: block2, parameters }) => {
    scopes.push(new Set(parameters.names));
    createVarDecs(block2, scopes);
    return scopes.pop();
  });
  if (varIds.length) {
    const indent = getIndent(statements[0]);
    let delimiter = ";";
    if (statements[0][1]?.parent?.root) {
      delimiter = ";\n";
    }
    braceBlock(block);
    statements.unshift([indent, {
      type: "Declaration",
      children: ["var ", varIds.join(", ")]
    }, delimiter]);
  }
  scopes.pop();
}

// unplugin-civet:/Users/greghuc/workspace/Civet/source/parser/string.civet.jsx
function getIndentLevel(str, tab) {
  if (tab != null && tab != 1) {
    const tabs = str.match(/\t/g);
    const numTabs = tabs ? tabs.length : 0;
    return numTabs * tab + /*spaces*/
    (str.length - numTabs);
  } else {
    return str.length;
  }
}
function reduceIndentLevel(str, dedent, tab) {
  if (tab != null && tab != 1) {
    for (let i1 = 0, len3 = str.length; i1 < len3; i1++) {
      const i = i1;
      const char = str[i1];
      if (!dedent) {
        return str.slice(i);
      }
      if (char == "	") {
        dedent -= tab;
        if (dedent < 0) {
          return "".padStart(-dedent, " ") + str.slice(i + 1);
        }
      } else {
        dedent--;
      }
    }
    return "";
  } else {
    return str.slice(dedent);
  }
}
var indentRe = /\n([ \t]*)(?![ \t]|\r?\n|$)/g;
function getIndentOfBlockString(str, tab) {
  let minLevel = Infinity;
  let ref;
  while (ref = indentRe.exec(str)) {
    const match = ref;
    const level = getIndentLevel(match[1], tab);
    if (level < minLevel) {
      minLevel = level;
    }
  }
  if (minLevel === Infinity) {
    minLevel = 0;
  }
  return minLevel;
}
function dedentBlockString({ $loc, token: str }, tab, dedent, trimStart = true, trimEnd = true) {
  if (dedent == null && /^[ \t]*\r?\n/.test(str)) {
    dedent = getIndentOfBlockString(str, tab);
  }
  if (dedent) {
    str = str.replace(/(\n)([ \t]*)/g, (_2, newline, indent) => {
      return newline + reduceIndentLevel(indent, dedent, tab);
    });
  }
  if (trimStart) {
    str = str.replace(/^[ \t]*\r?\n/, "");
  }
  if (trimEnd) {
    str = str.replace(/(\r?\n|\n)[ \t]*$/, "");
  }
  str = str.replace(/(\\.|`|\$\{)/g, (s) => {
    if (s[0] === "\\") {
      return s;
    } else {
      return `\\${s}`;
    }
  });
  return { $loc, token: str };
}
function dedentBlockSubstitutions($0, tab) {
  const [s, strWithSubstitutions, e] = $0;
  if (!strWithSubstitutions.length) {
    return $0;
  }
  const stringPart = (() => {
    const results1 = [];
    for (let i2 = 0, len1 = strWithSubstitutions.length; i2 < len1; i2++) {
      const part = strWithSubstitutions[i2];
      results1.push(part.token ?? "s");
    }
    return results1;
  })().join("");
  let ref1;
  if (/^[ \t]*\r?\n/.test(stringPart)) {
    ref1 = getIndentOfBlockString(stringPart, tab);
  } else {
    ref1 = void 0;
  }
  ;
  const dedent = ref1;
  let results = [s];
  for (let i3 = 0, len22 = strWithSubstitutions.length; i3 < len22; i3++) {
    const i = i3;
    let part = strWithSubstitutions[i3];
    if (part.token != null) {
      part = dedentBlockString(
        part,
        tab,
        dedent,
        i === 0,
        i === strWithSubstitutions.length - 1
      );
    }
    results.push(part);
  }
  results.push(e);
  return {
    type: "TemplateLiteral",
    children: results
  };
}
function processCoffeeInterpolation(s, parts, e, $loc) {
  if (parts.length === 0) {
    return {
      type: "StringLiteral",
      token: '""',
      $loc
    };
  }
  if (parts.length === 1) {
    let ref2;
    if ((ref2 = parts[0]) && typeof ref2 === "object" && "token" in ref2) {
      const { token } = ref2;
      return {
        type: "StringLiteral",
        token: `"${modifyString(token)}"`,
        $loc
      };
    }
  }
  const results2 = [];
  for (let i4 = 0, len3 = parts.length; i4 < len3; i4++) {
    const part = parts[i4];
    if ("token" in part) {
      const token = modifyString(part.token.replace(/(`|\$\{)/g, "\\$1"));
      results2.push({
        ...part,
        token
      });
    } else {
      results2.push(part);
    }
  }
  ;
  parts = results2;
  s.token = e.token = "`";
  return {
    type: "TemplateLiteral",
    children: [s, parts, e]
  };
}
function modifyString(str) {
  return str.replace(/((?:\\.|[^\r\n])*)(\r\n|\n|\r)?/gsu, function(_2, chars, nl) {
    if (nl) {
      return chars + "\\n";
    } else {
      return chars;
    }
  });
}
function quoteString(str) {
  return JSON.stringify(str);
}

// unplugin-civet:/Users/greghuc/workspace/Civet/source/parser/lib.civet.jsx
var xor = (a, b) => a ? !b && a : b;
function addPostfixStatement(statement, ws, post) {
  const expressions = [
    ...post.blockPrefix || [],
    ["", statement]
  ];
  const block = makeNode({
    type: "BlockStatement",
    children: [" { ", expressions, " }"],
    expressions,
    bare: false
  });
  const children = [...post.children, block];
  if (!isWhitespaceOrEmpty(ws)) children.push(ws);
  post = makeNode({ ...post, children, block });
  if (post.type === "IfStatement") {
    post.then = block;
  }
  return post;
}
function adjustIndexAccess(dot) {
  if (dot.optional) {
    return {
      ...dot,
      children: [...dot.children, "["]
    };
  } else {
    dot = replaceNodes(
      deepCopy(dot),
      (node) => node.token === ".",
      (node) => ({ ...node, token: "[" })
    );
  }
  return dot;
}
function negateCondition(condition) {
  let { expression } = condition;
  const children = condition.children.slice();
  const i = children.indexOf(expression);
  if (i < 0) {
    throw new Error(`Could not find expression in condition`);
  }
  const pre = ["!"];
  expression = makeLeftHandSideExpression(expression);
  children[i] = expression = {
    type: "UnaryExpression",
    children: [
      pre,
      expression
    ],
    pre,
    expression
  };
  return { ...condition, expression, children };
}
function isExpression(node) {
  if (Array.isArray(node)) {
    return node.every(isExpression);
  }
  if (typeof node === "string") {
    return true;
  }
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
      return false;
  }
  return true;
}
function expressionizeBlock(blockOrExpression) {
  if (blockOrExpression && typeof blockOrExpression === "object" && "expressions" in blockOrExpression) {
    const { expressions } = blockOrExpression;
    const l = expressions.length;
    const results = [];
    let i1 = 0;
    for (const [ws, s, _delim] of expressions) {
      const i = i1++;
      if (!isExpression(s)) return;
      const wrapped = makeLeftHandSideExpression(s);
      if (i === l - 1) {
        results.push([ws, wrapped]);
      } else {
        results.push([ws, wrapped, ","]);
      }
    }
    if (results.length > 1) {
      return makeLeftHandSideExpression(results);
    } else if (results.length) {
      return results;
    } else {
      return ["void 0"];
    }
  } else {
    return blockOrExpression;
  }
}
function expressionizeIfStatement(statement) {
  const { condition, then: b, else: e } = statement;
  const [...condRest] = condition.children, [closeParen] = condRest.splice(-1);
  const expressionizedBlock = expressionizeBlock(b);
  if (!expressionizedBlock) {
    return wrapIIFE([["", statement]]);
  }
  const children = [
    ...condRest,
    "?",
    expressionizedBlock
  ];
  if (e) {
    const e2 = expressionizeBlock(e.block);
    if (!e2) {
      return wrapIIFE([["", statement]]);
    }
    children.push(e.children[0], ":", e2, ...e.children.slice(3));
  } else {
    children.push(":void 0");
  }
  children.push(closeParen);
  return makeNode({
    type: "IfExpression",
    children
  });
}
function expressionizeTypeIf([ifOp, condition, t, e]) {
  const children = [
    "(",
    trimFirstSpace(condition),
    "?"
  ];
  if (!xor(ifOp.negated, condition.negated)) {
    children.push(t);
    if (e) {
      children.push(e[0], ":", ...e.slice(2));
    } else {
      children.push(":never");
    }
  } else {
    if (e) {
      children.push(...e.slice(2), e[0], ":");
    } else {
      children.push("never:");
    }
    children.push(t);
  }
  children.push(")");
  return children;
}
function handleThisPrivateShorthands(value) {
  if (value.privateShorthand) {
    value = value.children[1].children[1];
    return [value, false];
  }
  if (value.type === "MemberExpression" || value.type === "CallExpression") {
    let suppressPrefix = value.thisShorthand;
    value = {
      ...value,
      children: value.children.map((c, i) => {
        if (i === 0) {
          let s;
          [c, s] = handleThisPrivateShorthands(c);
          suppressPrefix ||= s;
        }
        return c;
      })
    };
    return [value, suppressPrefix];
  }
  return [value, value.thisShorthand];
}
function processTryBlock($0) {
  let [t, , b, cs, e, f] = $0;
  let c;
  let m;
  if (cs.some(($3) => (m = $3.binding?.parameter, typeof m === "object" && m != null && "type" in m && m.type === "CatchPattern"))) {
    const ref = makeRef("e");
    const binding = {
      type: "CatchBinding",
      children: ["(", ref, ")"],
      parameter: ref
    };
    const condition = {
      type: "ParenthesizedExpression",
      children: ["(", ref, ")"],
      expression: ref
    };
    let defaultClause = false;
    const clauses = cs.map((clause) => {
      let ref1;
      if ((ref1 = clause.binding?.parameter) && typeof ref1 === "object" && "type" in ref1 && ref1.type === "CatchPattern" && "patterns" in ref1) {
        const { patterns } = ref1;
        return {
          type: "PatternClause",
          patterns,
          block: clause.block,
          children: [patterns, clause.block]
        };
      } else {
        defaultClause = true;
        const parameter = clause.binding?.parameter;
        if (parameter != null) {
          assert.equal(
            parameter.type,
            "CatchParameter",
            `Invalid catch parameter ${parameter.type}`
          );
          const { binding: pattern, typeSuffix } = parameter;
          const initializer = {
            type: "Initializer",
            expression: ref,
            children: ["", " = ", ref]
          };
          const bindings = [{
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
      const expressions = [[
        "",
        {
          type: "ThrowStatement",
          children: ["throw", " ", ref]
        }
      ]];
      const block2 = {
        type: "BlockStatement",
        expressions,
        children: [" {", expressions, "}"],
        bare: false
      };
      clauses.push({
        type: "DefaultClause",
        block: block2,
        children: ["default: ", block2]
      });
    }
    const caseBlock = {
      type: "CaseBlock",
      clauses,
      children: [" {", clauses, "}"]
    };
    const patternSwitch = {
      type: "SwitchStatement",
      condition,
      caseBlock,
      children: ["switch", condition, caseBlock]
    };
    const block = {
      type: "BlockStatement",
      bare: false,
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
  } else {
    c = cs[0];
    if (cs.length > 1) {
      c = append(c, {
        type: "Error",
        message: "Only one catch clause allowed unless using pattern matching"
      });
    }
  }
  if (!c && (e || !f)) {
    const emptyCatchBlock = makeEmptyBlock();
    c = {
      type: "CatchClause",
      children: [" ", "catch(e) ", emptyCatchBlock],
      block: emptyCatchBlock
    };
  }
  let hoistDec;
  if (e) {
    c = c;
    const ok = makeRef("ok");
    hoistDec = {
      type: "Declaration",
      children: ["let ", ok, " = true"],
      names: []
    };
    replaceNode(
      c.block,
      blockWithPrefix([["", "ok = false"]], c.block),
      c
    );
    const condition = {
      type: "ParenthesizedExpression",
      children: ["(", ok, ")"],
      expression: ok
    };
    const i = makeNode({
      type: "IfStatement",
      children: ["if", condition, e.block],
      condition,
      then: e.block,
      else: void 0
    });
    if (!f) {
      const emptyFinallyBlock = makeEmptyBlock();
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
  const blocks = [b];
  if (c) {
    blocks.push(c.block);
  }
  return {
    type: "TryStatement",
    blocks,
    children: [t, b, c, f],
    hoistDec
  };
}
function processCallMemberExpression(node) {
  const { children } = node;
  if (Array.isArray(children) && children.length >= 2 && typeof children[0] === "object" && children[0] != null && "parenthesizedOp" in children[0] && typeof children[0].parenthesizedOp === "object" && children[0].parenthesizedOp != null && "token" in children[0].parenthesizedOp && typeof children[1] === "object" && children[1] != null && "type" in children[1] && children[1].type === "Call") {
    const op = children[0].parenthesizedOp;
    let call = children[1];
    const args = [...call.args];
    call = {
      ...call,
      args,
      children: call.children.map((x) => x === call.args ? args : x)
    };
    if (isComma(args[args.length - 1])) {
      args[args.length - 1] = deepCopy(args[args.length - 1]);
      isComma(args[args.length - 1]).token = "";
    }
    let commaCount = 0;
    for (let i2 = 0, len1 = args.length; i2 < len1; i2++) {
      const i = i2;
      let arg = args[i2];
      if (isComma(arg)) {
        arg = args[i] = deepCopy(arg);
        isComma(arg).token = `)${op.token}(`;
        commaCount++;
      }
    }
    if (args.length) {
      if (commaCount) {
        children.splice(0, 2, {
          type: "ParenthesizedExpression",
          children: ["(", call.children, ")"],
          expression: call.children
        });
      } else {
        const middle = call.children.slice(0 + 1, -1);
        let ref2;
        children.splice(0, 2, {
          type: "ParenthesizedExpression",
          expression: middle,
          children: [call.children[0], middle, (ref2 = call.children)[ref2.length - 1]]
        });
      }
      if (children.length === 1) {
        return children[0];
      }
    }
  }
  for (let i3 = 0, len22 = children.length; i3 < len22; i3++) {
    const i = i3;
    const glob = children[i3];
    if (glob?.type === "PropertyGlob") {
      let prefix = children.slice(0, i);
      const parts = [];
      let ref;
      if (prefix.length > 1 && glob.object.properties.length > 1) {
        ref = makeRef();
        const { refAssignment } = makeRefAssignment(ref, prefix);
        prefix = [makeLeftHandSideExpression(refAssignment)];
      }
      prefix = prefix.concat(glob.dot);
      for (const part of glob.object.properties) {
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
        let suppressPrefix = false;
        let name = part.name;
        let value = part.value ?? name;
        const wValue = getTrimmingSpace(part.value);
        [value, suppressPrefix] = handleThisPrivateShorthands(value);
        if (glob.reversed) {
          [name, value] = [value, name];
        }
        if (!suppressPrefix) {
          value = prefix.concat(trimFirstSpace(value));
          if (ref != null) {
            prefix = [ref].concat(glob.dot);
          }
        }
        if (wValue) value.unshift(wValue);
        if (part.type === "SpreadProperty") {
          parts.push({
            type: part.type,
            value,
            dots: part.dots,
            delim: part.delim,
            names: part.names,
            children: part.children.slice(0, 2).concat(value, part.delim),
            usesRef: Boolean(ref)
          });
        } else {
          parts.push({
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
            usesRef: Boolean(ref)
          });
        }
      }
      let ref3;
      const object = {
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
      if (i === children.length - 1) return object;
      return processCallMemberExpression({
        // in case there are more
        ...node,
        children: [object, ...children.slice(i + 1)]
      });
    } else if (glob?.type === "PropertyBind") {
      assert.notEqual(i, 0, "@ bind must be preceded by an expression");
      const prefix = i === 1 ? children[0] : children.slice(0, i);
      const { ref, refAssignment } = maybeRefAssignment(prefix);
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
    } else if (typeof glob === "object" && glob != null && "type" in glob && glob.type === "Index" && "mod" in glob && glob.mod === true) {
      assert.notEqual(i, 0, "Index access must be preceded by an expression");
      const prefix = i === 1 ? children[0] : children.slice(0, i);
      const { ref, refAssignment } = maybeRefAssignment(prefix);
      const args = [
        glob.children.slice(0 + 1, -1),
        // between "[" and "]" tokens
        ",",
        [" ", ref, ".length"]
      ];
      const call = makeNode({
        type: "CallExpression",
        implicit: true,
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
      });
      let ref4;
      return processCallMemberExpression({
        // in case there are more
        ...node,
        children: [
          makeLeftHandSideExpression(refAssignment ?? prefix),
          makeNode({
            ...glob,
            mod: false,
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
    } else if (typeof glob === "object" && glob != null && "type" in glob && glob.type === "SliceExpression" && "reversed" in glob && glob.reversed === true) {
      const args = [
        { ...node, children: node.children.slice(0, i) },
        { ...glob.children[0], token: ", " },
        ...glob.children.slice(1, -1)
      ];
      let ref5;
      const rsliceCall = makeNode({
        type: "CallExpression",
        implicit: true,
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
      if (i + 1 >= children.length) {
        return rsliceCall;
      }
      return processCallMemberExpression(makeNode({
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
  if (Array.isArray(expression) && expression[1]?.[0]?.[0]?.[1]?.token === ",") {
    return [
      makeExpressionStatement(expression[0]),
      expression[1].map(([comma, exp]) => {
        return [comma, makeExpressionStatement(exp)];
      })
    ];
  } else if (expression?.type === "ObjectExpression" || expression?.type === "FunctionExpression" && !expression.id || expression?.type === "UnaryExpression" && !expression.pre?.length && expression.expression !== makeExpressionStatement(expression.expression)) {
    return makeLeftHandSideExpression(expression);
  } else {
    return expression;
  }
}
function lastAccessInCallExpression(exp) {
  if (exp.type === "Identifier") {
    return exp;
  }
  let children, i;
  do {
    if (!(exp.children != null)) {
      return;
    }
    ;
    ({ children } = exp);
    i = children.length - 1;
    while (i >= 0 && (children[i].type === "Call" || children[i].type === "NonNullAssertion" || children[i].type === "Optional")) i--;
    if (i < 0) return;
  } while (children[i].type === "MemberExpression" && (exp = children[i]));
  return children[i];
}
function convertMethodToFunction(method) {
  const { signature, block } = method;
  const { async, modifier, optional } = signature;
  if (optional) {
    return;
  }
  if (modifier?.get || modifier?.set) {
    return;
  }
  const func = ["function "];
  if (async != null) {
    func.unshift(async);
    if (async.length && !async[async.length - 1]?.length) {
      async.push(" ");
    }
  }
  return {
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
  const fnTokenIndex = exp.children.findIndex(function(c) {
    return c?.token?.startsWith("function");
  });
  const children = exp.children.slice();
  if (exp.generator) {
    children.splice(fnTokenIndex, 2, children[fnTokenIndex + 1], id);
  } else {
    children.splice(fnTokenIndex, 1, id);
  }
  return {
    ...exp,
    type: "MethodDefinition",
    name: id.name,
    signature: { ...exp.signature, id, name: id.name },
    children
  };
}
function convertArrowFunctionToMethod(id, exp) {
  const block = { ...exp.block };
  const children = exp.children.filter(function(c) {
    return !(Array.isArray(c) && c[c.length - 1]?.token?.includes("=>"));
  }).map(function(c) {
    return c === exp.block ? block : c;
  });
  children.unshift(id);
  exp = {
    ...exp,
    type: "MethodDefinition",
    name: id.name,
    signature: { ...exp.signature, id, name: id.name },
    block,
    children,
    autoBind: true
  };
  block.parent = exp;
  braceBlock(block);
  return exp;
}
function convertNamedImportsToObject(node, pattern) {
  const properties = node.specifiers.map((specifier) => {
    if (specifier.ts) {
      return { type: "Error", message: "cannot use `type` in dynamic import" };
    } else {
      const { source, binding } = specifier;
      let ref6;
      const delim = (ref6 = specifier.children)[ref6.length - 1];
      return {
        type: pattern ? "BindingProperty" : "Property",
        name: source,
        value: !(source === binding) ? binding : void 0,
        delim,
        children: source === binding ? [source, delim] : [source, ":", binding, delim]
      };
    }
  });
  let ref7;
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
  const parts = [];
  const rest = [];
  let i4 = 0;
  for (const part of obj.properties) {
    const i = i4++;
    if (part.usesRef) {
      rest.push(part);
      continue;
    }
    if (i > 0) parts.push(" ");
    switch (part.type) {
      case "Identifier": {
        parts.push([part.name, "={", part.name, "}"]);
        break;
      }
      case "Property": {
        if (part.name.type === "ComputedPropertyName") {
          rest.push(part);
        } else {
          parts.push([part.name, "={", trimFirstSpace(part.value), "}"]);
        }
        ;
        break;
      }
      case "SpreadProperty": {
        parts.push(["{", part.dots, part.value, "}"]);
        break;
      }
      case "MethodDefinition": {
        const func = convertMethodToFunction(part);
        if (func) {
          parts.push([part.name, "={", convertMethodToFunction(part), "}"]);
        } else {
          rest.push(part);
        }
        ;
        break;
      }
      default: {
        throw new Error(`invalid object literal type in JSX attribute: ${part.type}`);
      }
    }
  }
  if (rest.length) {
    if (parts.length && parts[parts.length - 1] !== " ") {
      parts.push(" ");
    }
    parts.push(["{...{", ...rest, "}}"]);
  }
  return parts;
}
function makeGetterMethod(name, ws, value, returnType, block, kind = { token: "get" }, autoReturn = true) {
  const { token } = kind;
  ws = trimFirstSpace(ws);
  let setVal;
  const parameterList = [];
  const isGet = token === "get";
  if (!isGet) {
    parameterList.push(setVal = makeRef("value"));
  }
  const parameters = {
    type: "Parameters",
    children: ["(", parameterList, ")"],
    parameters: parameterList,
    implicit: isGet
  };
  let expressions;
  if (block) {
    block = duplicateBlock(block);
    expressions = block.expressions;
  } else {
    expressions = [];
    block = {
      type: "BlockStatement",
      expressions,
      children: ["{ ", expressions, " }"],
      bare: false
    };
  }
  if (autoReturn) {
    const finalStatement = isGet ? [[expressions[0]?.[0] || "", ws], wrapWithReturn(value)] : [[expressions[0]?.[0] || "", ws], [value, " = ", setVal]];
    expressions.push(finalStatement);
  }
  const children = [kind, " ", name, parameters, returnType, block];
  return {
    type: "MethodDefinition",
    children,
    name,
    signature: {
      type: "MethodSignature",
      modifier: {
        get: token === "get",
        set: token === "set",
        async: false
      },
      name,
      returnType
    },
    block,
    parameters
  };
}
function processBindingPatternLHS(lhs, tail) {
  adjustAtBindings(lhs, true);
  const [splices, thisAssignments] = gatherBindingCode(lhs);
  const subbindings = gatherSubbindings(lhs);
  simplifyBindingProperties(lhs);
  simplifyBindingProperties(subbindings);
  tail.push(
    ...splices.map((s) => [", ", s]),
    ...thisAssignments.map((a) => [", ", a]),
    ...subbindings
  );
}
function processAssignments(statements) {
  for (let ref8 = gatherRecursiveAll(statements, ($4) => $4.type === "AssignmentExpression" || $4.type === "UpdateExpression"), i5 = 0, len3 = ref8.length; i5 < len3; i5++) {
    let extractAssignment = function(lhs) {
      let expr = lhs;
      while (expr.type === "ParenthesizedExpression") {
        expr = expr.expression;
      }
      let m1;
      if (m1 = expr.type, m1 === "AssignmentExpression" || m1 === "UpdateExpression") {
        if (expr.type === "UpdateExpression" && expr.children[0] === expr.assigned) {
          pre.push("(");
          post.push([", ", lhs, ")"]);
        } else {
          pre.push(["(", lhs, ", "]);
          post.push(")");
        }
        return expr.assigned;
      }
      ;
      return;
    };
    const exp = ref8[i5];
    checkValidLHS(exp.assigned);
    const pre = [], post = [];
    let ref9;
    switch (exp.type) {
      case "AssignmentExpression": {
        if (!exp.lhs) {
          continue;
        }
        for (let ref10 = exp.lhs, i6 = 0, len4 = ref10.length; i6 < len4; i6++) {
          const lhsPart = ref10[i6];
          let ref11;
          if (ref11 = extractAssignment(lhsPart[1])) {
            const newLhs = ref11;
            lhsPart[1] = newLhs;
          }
        }
        ;
        break;
      }
      case "UpdateExpression": {
        if (ref9 = extractAssignment(exp.assigned)) {
          const newLhs = ref9;
          const i = exp.children.indexOf(exp.assigned);
          exp.assigned = exp.children[i] = newLhs;
        }
        ;
        break;
      }
    }
    if (pre.length) {
      exp.children.unshift(...pre);
    }
    if (post.length) {
      exp.children.push(...post);
    }
    if (exp.type === "UpdateExpression") {
      const { assigned } = exp;
      const ref = makeRef();
      const newMemberExp = unchainOptionalMemberExpression(assigned, ref, (children) => {
        return exp.children.map(($5) => $5 === assigned ? children : $5);
      });
      if (newMemberExp !== assigned) {
        if (newMemberExp.usesRef) {
          newMemberExp.hoistDec = {
            type: "Declaration",
            children: ["let ", ref],
            names: []
          };
        }
        replaceNode(exp, newMemberExp);
      }
    }
  }
  for (let ref12 = gatherRecursiveAll(statements, ($6) => $6.type === "AssignmentExpression"), i7 = 0, len5 = ref12.length; i7 < len5; i7++) {
    const exp = ref12[i7];
    if (!(exp.names === null)) {
      continue;
    }
    let { lhs: $1, expression: $2 } = exp, tail = [], len3 = $1.length;
    let block;
    let ref13;
    if (blockContainingStatement(exp) && !(ref13 = $1[$1.length - 1])?.[ref13.length - 1]?.special) {
      block = makeBlockFragment();
      let ref14;
      if (ref14 = prependStatementExpressionBlock(
        { type: "Initializer", expression: $2, children: [void 0, void 0, $2] },
        block
      )) {
        const ref = ref14;
        exp.children = exp.children.map(($7) => $7 === $2 ? ref : $7);
        $2 = ref;
      } else {
        block = void 0;
      }
    }
    if ($1.some(($8) => $8[$8.length - 1].special)) {
      if ($1.length !== 1) throw new Error("Only one assignment with id= is allowed");
      const [, lhs, , op] = $1[0];
      const { call, omitLhs } = op;
      const index = exp.children.indexOf($2);
      if (index < 0) throw new Error("Assertion error: exp not in AssignmentExpression");
      exp.children.splice(
        index,
        1,
        exp.expression = $2 = [call, "(", lhs, ", ", $2, ")"]
      );
      if (omitLhs) {
        replaceNode(exp, $2);
        continue;
      }
    }
    let wrapped = false;
    let i = 0;
    while (i < len3) {
      const lastAssignment = $1[i++];
      const [, lhs, , op] = lastAssignment;
      if (!(op.token === "=")) {
        continue;
      }
      let m2;
      if (m2 = lhs.type, m2 === "ObjectExpression" || m2 === "ObjectBindingPattern") {
        if (!wrapped) {
          wrapped = true;
          lhs.children.splice(0, 0, "(");
          tail.push(")");
        }
      }
    }
    const refsToDeclare = /* @__PURE__ */ new Set();
    i = len3 - 1;
    while (i >= 0) {
      const lastAssignment = $1[i];
      if (lastAssignment[3].token === "=") {
        const lhs = lastAssignment[1];
        let m3;
        if (lhs.type === "MemberExpression") {
          const members = lhs.children;
          const lastMember = members[members.length - 1];
          if (lastMember.type === "SliceExpression") {
            const { start, end, children: c } = lastMember;
            c[0].token = ".splice(";
            c[1] = start;
            c[2] = ", ";
            if (end) {
              c[3] = [end, " - ", start];
            } else {
              c[3] = ["1/0"];
            }
            c[4] = [", ...", $2];
            c[5] = ")";
            lastAssignment.pop();
            if (isWhitespaceOrEmpty(lastAssignment[2])) lastAssignment.pop();
            if ($1.length > 1) {
              throw new Error("Not implemented yet! TODO: Handle multiple splice assignments");
            }
            exp.children = [$1];
            exp.names = [];
            break;
          }
        } else if (typeof lhs === "object" && lhs != null && "type" in lhs && lhs.type === "CallExpression" && "children" in lhs && Array.isArray(lhs.children) && lhs.children.length >= 1 && lhs.children[0] === peekHelperRef("rslice")) {
          lhs.children.push({
            type: "Error",
            message: "Slice range cannot be decreasing in assignment"
          });
          break;
        } else if (m3 = lhs.type, m3 === "ObjectBindingPattern" || m3 === "ArrayBindingPattern" || m3 === "NamedBindingPattern") {
          processBindingPatternLHS(lhs, tail);
          gatherRecursiveAll(lhs, ($9) => $9.type === "Ref").forEach(refsToDeclare.add.bind(refsToDeclare));
        }
      }
      i--;
    }
    i = len3 - 1;
    const optionalChainRef = makeRef();
    while (i >= 0) {
      const assignment = $1[i];
      const [ws1, lhs, ws2, op] = assignment;
      if (lhs.type === "MemberExpression" || lhs.type === "CallExpression") {
        const newMemberExp = unchainOptionalMemberExpression(lhs, optionalChainRef, (children) => {
          const assigns = $1.splice(i + 1, len3 - 1 - i);
          $1.pop();
          return [ws1, ...children, ws2, op, ...assigns, $2];
        });
        if (newMemberExp !== lhs) {
          if (newMemberExp.usesRef) {
            exp.hoistDec = {
              type: "Declaration",
              children: ["let ", optionalChainRef],
              names: []
            };
          }
          replaceNode($2, newMemberExp);
          $2 = newMemberExp;
        }
      }
      i--;
    }
    if (refsToDeclare.size) {
      if (exp.hoistDec) {
        exp.hoistDec.children.push([...refsToDeclare].map(($10) => [",", $10]));
      } else {
        exp.hoistDec = {
          type: "Declaration",
          children: ["let ", [...refsToDeclare].map((r, i2) => i2 ? [",", r] : r)],
          names: []
        };
      }
    }
    exp.names = $1.flatMap(([, l]) => l.names || []);
    if (tail.length) {
      const index = exp.children.indexOf($2);
      if (index < 0) throw new Error("Assertion error: exp not in AssignmentExpression");
      exp.children.splice(index + 1, 0, ...tail);
    }
    if (block) {
      replaceNode(exp, block);
      block.expressions.push(["", exp]);
      exp.parent = block;
    }
  }
}
function unchainOptionalMemberExpression(exp, ref, innerExp) {
  let j = 0;
  const { children } = exp;
  let usesRef = false;
  const conditions = [];
  while (j < children.length) {
    const child = children[j];
    const type = child?.type;
    let hasOptional = false;
    switch (type) {
      case "PropertyAccess": {
        if (child.dot?.optional) {
          hasOptional = true;
          child.dot.children.shift();
          child.dot.optional = false;
        }
        ;
        break;
      }
      case "Call":
      case "Index": {
        if (child.optional) {
          hasOptional = true;
          child.children.shift();
          child.optional = void 0;
        }
        ;
        break;
      }
    }
    if (hasOptional) {
      let base;
      if (j > 1 || needsRef(children[0])) {
        usesRef = true;
        base = makeLeftHandSideExpression({
          type: "AssignmentExpression",
          children: [ref, " = ", children.splice(0, j)]
        });
        base.parent = child;
        children.unshift(ref);
        j = 0;
      } else {
        base = children[0];
      }
      conditions.push([base, " != null"]);
    }
    j++;
  }
  let ref15;
  if (ref15 = conditions.length) {
    const l = ref15;
    const cs = flatJoin(conditions, " && ");
    return {
      ...exp,
      children: [...cs, " ? ", innerExp(children), " : void 0"],
      usesRef
    };
  } else {
    return exp;
  }
}
function attachPostfixStatementAsExpression(exp, post) {
  const postfixStatement = post[1];
  switch (postfixStatement.type) {
    case "ForStatement":
    case "IterationStatement":
    case "DoStatement": {
      const statement = addPostfixStatement(exp, ...post);
      return {
        type: "IterationExpression",
        children: [statement],
        block: statement.block,
        statement,
        generator: statement.generator
      };
    }
    case "IfStatement": {
      return expressionizeIfStatement({ ...postfixStatement, then: exp });
    }
    default: {
      throw new Error("Unknown postfix statement");
    }
  }
}
function processTypes(node) {
  const results1 = [];
  for (let ref16 = gatherRecursiveAll(node, ($11) => $11.type === "TypeUnary"), i8 = 0, len6 = ref16.length; i8 < len6; i8++) {
    const unary = ref16[i8];
    let suffixIndex = unary.suffix.length - 1;
    const results2 = [];
    while (suffixIndex >= 0) {
      const suffix = unary.suffix[suffixIndex];
      if (typeof suffix === "object" && suffix != null && "token" in suffix && suffix.token === "?") {
        const {} = suffix;
        let count = 0;
        let m4;
        while (m4 = unary.suffix[suffixIndex], typeof m4 === "object" && m4 != null && "token" in m4 && m4.token === "?") {
          unary.suffix.splice(suffixIndex--, 1);
          count++;
        }
        let m5;
        while (m5 = unary.suffix[suffixIndex], typeof m5 === "object" && m5 != null && "type" in m5 && m5.type === "NonNullAssertion") {
          unary.suffix.splice(suffixIndex--, 1);
        }
        const { parent, prefix } = unary;
        unary.prefix = [];
        unary.children = unary.children.filter((a1) => a1 !== prefix);
        const outer = unary.suffix.splice(suffixIndex + 1, Infinity);
        const space = getTrimmingSpace(unary);
        let replace;
        if (unary.parent?.type === "TypeElement" && !unary.parent.name) {
          if (count === 1) {
            unary.suffix.splice(suffixIndex + 1, 0, suffix);
            continue;
          }
          inplaceInsertTrimmingSpace(unary, "");
          const t = parenthesizeType(unary.suffix.length ? unary : unary.t);
          replace = [
            space,
            "(",
            t,
            " | null)",
            suffix
          ];
        } else {
          inplaceInsertTrimmingSpace(unary, "");
          const t = parenthesizeType(unary.suffix.length ? unary : unary.t);
          replace = makeNode({
            type: "TypeParenthesized",
            ts: true,
            children: [
              space,
              "(",
              t,
              count === 1 ? " | undefined" : " | undefined | null",
              ")"
            ]
          });
        }
        if (prefix.length || outer.length) {
          replace = makeNode({
            type: "TypeUnary",
            ts: true,
            t: replace,
            prefix,
            suffix: outer,
            children: [prefix, replace, outer]
          });
        }
        results2.push(replaceNode(unary, replace, parent));
      } else if (typeof suffix === "object" && suffix != null && "type" in suffix && suffix.type === "NonNullAssertion") {
        const {} = suffix;
        let m6;
        while (m6 = unary.suffix[suffixIndex], typeof m6 === "object" && m6 != null && "type" in m6 && m6.type === "NonNullAssertion") {
          unary.suffix.splice(suffixIndex--, 1);
        }
        let m7;
        while (m7 = unary.suffix[suffixIndex], typeof m7 === "object" && m7 != null && "token" in m7 && m7.token === "?") {
          unary.suffix.splice(suffixIndex--, 1);
        }
        const { parent, prefix } = unary;
        unary.prefix = [];
        unary.children = unary.children.filter((a2) => a2 !== prefix);
        const outer = unary.suffix.splice(suffixIndex + 1, Infinity);
        const space = getTrimmingSpace(unary);
        inplaceInsertTrimmingSpace(unary, "");
        let ref17;
        if (unary.suffix.length) ref17 = unary;
        else ref17 = unary.t;
        const t = ref17;
        const arg = makeNode({
          type: "TypeArgument",
          ts: true,
          t,
          children: [t]
        });
        const argArray = [arg];
        const args = makeNode({
          type: "TypeArguments",
          ts: true,
          args: argArray,
          children: ["<", argArray, ">"]
        });
        let replace = makeNode({
          type: "TypeIdentifier",
          raw: "NonNullable",
          args,
          children: [
            space,
            "NonNullable",
            args
          ]
        });
        if (prefix.length || outer.length) {
          replace = makeNode({
            type: "TypeUnary",
            ts: true,
            t: replace,
            prefix,
            suffix: outer,
            children: [prefix, replace, outer]
          });
        }
        results2.push(replaceNode(unary, replace, parent));
      } else {
        results2.push(suffixIndex--);
      }
    }
    results1.push(results2);
  }
  ;
  return results1;
}
function processStatementExpressions(statements) {
  for (let ref18 = gatherRecursiveAll(statements, ($12) => $12.type === "StatementExpression"), i9 = 0, len7 = ref18.length; i9 < len7; i9++) {
    const exp = ref18[i9];
    const { maybe, statement } = exp;
    if ((maybe || statement.type === "ThrowStatement") && blockContainingStatement(exp)) {
      replaceNode(exp, statement);
      continue;
    }
    let ref19;
    switch (statement.type) {
      case "IfStatement": {
        if (ref19 = expressionizeIfStatement(statement)) {
          const expression = ref19;
          replaceNode(statement, expression, exp);
        } else {
          replaceNode(statement, wrapIIFE([["", statement]]), exp);
        }
        ;
        break;
      }
      case "IterationExpression": {
        if (statement.subtype === "ComptimeStatement") {
          replaceNode(
            statement,
            expressionizeComptime(statement.statement),
            exp
          );
        }
        ;
        break;
      }
      // else do nothing, handled separately currently
      default: {
        replaceNode(statement, wrapIIFE([["", statement]]), exp);
      }
    }
  }
}
function processNegativeIndexAccess(statements) {
  gatherRecursiveAll(statements, (n) => n.type === "NegativeIndex").forEach((exp) => {
    const { children } = exp.parent;
    let start = 0;
    while (start < children.length && isWhitespaceOrEmpty(children[start])) {
      start++;
    }
    const index = children.indexOf(exp);
    let ref, subexp;
    if (index === start + 1) {
      const child = children[start];
      ref = maybeRef(child);
      if (ref !== child) {
        subexp = children.splice(start, 1);
      }
    } else if (index > start + 1) {
      ref = makeRef();
      subexp = children.splice(start, index - start);
    } else {
      throw new Error("Invalid parse tree for negative index access");
    }
    if (subexp) {
      const { refAssignment } = makeRefAssignment(ref, subexp);
      children.splice(start, 0, makeLeftHandSideExpression(refAssignment));
      refAssignment.parent = exp;
    }
    exp.len.children = [
      ref,
      ".length"
    ];
  });
}
function processFinallyClauses(statements) {
  for (let ref20 = gatherRecursiveAll(statements, ($) => $.type === "FinallyClause" && $.parent?.type !== "TryStatement"), i10 = 0, len8 = ref20.length; i10 < len8; i10++) {
    let f = ref20[i10];
    let ref21;
    if (!((ref21 = blockContainingStatement(f)) && typeof ref21 === "object" && "block" in ref21 && "index" in ref21)) {
      throw new Error("finally clause must be inside try statement or block");
    }
    const { block, index } = ref21;
    const indent = block.expressions[index][0];
    const expressions = block.expressions.slice(index + 1);
    const t = makeNode({
      type: "BlockStatement",
      expressions,
      children: ["{", expressions, "}"],
      bare: false
    });
    f = prepend(" ", f);
    const tuple = [
      indent,
      makeNode({
        type: "TryStatement",
        blocks: [t],
        // omit f to avoid implicit return
        children: ["try ", t, f],
        parent: block
      })
    ];
    block.expressions.splice(index, 1 / 0, ...[tuple]);
  }
}
function processBreaksContinues(statements) {
  for (const control of gatherRecursive(
    statements,
    ($) => Boolean(
      ($.type === "BreakStatement" || $.type === "ContinueStatement") && $.label?.special
    )
  )) {
    const label = control.label;
    const special = label.special;
    const { ancestor } = findAncestor(
      control,
      ($) => {
        return special === "for" ? $.type === "ForStatement" : $.type === "IterationStatement" && $.subtype.startsWith(special);
      },
      // in particular, special = "do" matches "do-while" and "do-until"
      isFunction
    );
    if (!(ancestor != null)) {
      control.children.push({
        type: "Error",
        message: `No matching '${special}' iteration found above '${control.type.toLowerCase().replace("statement", "")} ${special}'`
      });
      continue;
    }
    let { parent } = ancestor;
    if (!(parent?.type === "LabelledStatement")) {
      const ref = makeRef(`_${special.replace("-", "_")}`);
      const label2 = makeNode({
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
      );
      parent = ancestor.parent;
    }
    label.children.push(label.name = parent.label.name);
    delete label.special;
  }
}
function processCoffeeClasses(statements) {
  for (let ref22 = gatherRecursiveAll(statements, ($13) => $13.type === "ClassExpression"), i11 = 0, len9 = ref22.length; i11 < len9; i11++) {
    const ce = ref22[i11];
    const { expressions } = ce.body;
    const indent = expressions[0]?.[0] ?? "\n";
    const autoBinds = expressions.filter(($14) => $14[1]?.autoBind);
    if (autoBinds.length) {
      let construct;
      for (const [, c] of expressions) {
        if (typeof c === "object" && c != null && "type" in c && c.type === "MethodDefinition" && "name" in c && c.name === "constructor" && c.block) {
          construct = c;
          break;
        }
      }
      if (!construct) {
        const parametersList = [];
        const parameters = {
          type: "Parameters",
          children: [parametersList],
          parameters: parametersList,
          names: []
        };
        const signature = {
          type: "MethodSignature",
          children: ["constructor(", parameters, ")"],
          parameters,
          modifier: {},
          returnType: void 0
        };
        const block = makeEmptyBlock();
        construct = {
          ...signature,
          type: "MethodDefinition",
          name: "constructor",
          block,
          signature,
          children: [...signature.children, block]
        };
        expressions.unshift([indent, construct]);
      }
      const index = findSuperCall(construct.block);
      construct.block.expressions.splice(
        index + 1,
        0,
        ...(() => {
          const results3 = [];
          for (let i12 = 0, len10 = autoBinds.length; i12 < len10; i12++) {
            const [, a] = autoBinds[i12];
            results3.push([indent, ["this.", a.name, " = this.", a.name, ".bind(this)"], ";"]);
          }
          return results3;
        })()
      );
    }
    const public_static_function_assignments = expressions.filter(($15) => $15[1]?.type === "CoffeeClassPublic" && $15[1].assignment?.expression?.type === "FunctionExpression").map(($16) => $16[1].assignment);
    for (const public_static_function_assignment of public_static_function_assignments) {
      const id = public_static_function_assignment.lhs[0][1];
      replaceNode(public_static_function_assignment, convertFunctionToMethod(id, public_static_function_assignment.expression));
    }
    const public_static_arrow_function_assignments = expressions.filter(($17) => $17[1]?.type === "CoffeeClassPublic" && $17[1].assignment?.expression?.type === "ArrowFunction").map(($18) => $18[1].assignment);
    for (const public_static_arrow_function_assignment of public_static_arrow_function_assignments) {
      const id = public_static_arrow_function_assignment.lhs[0][1];
      replaceNode(public_static_arrow_function_assignment, convertArrowFunctionToMethod(id, public_static_arrow_function_assignment.expression));
    }
    const privates = expressions.filter(($19) => $19[1]?.type === "CoffeeClassPrivate");
    if (!privates.length) {
      continue;
    }
    const { parent } = ce;
    for (let i13 = expressions.length + -1; i13 >= 0; --i13) {
      const i = i13;
      if (expressions[i][1]?.type === "CoffeeClassPrivate") {
        expressions.splice(i, 1);
      }
    }
    let wrapped = wrapIIFE([
      ...privates,
      [indent, wrapWithReturn(ce)]
    ]);
    if (ce && typeof ce === "object" && "binding" in ce) {
      let { binding } = ce;
      binding = trimFirstSpace(binding);
      wrapped = makeNode({
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
  const state2 = getState();
  const config2 = getConfig();
  assert.equal(state2.forbidBracedApplication.length, 1, "forbidBracedApplication");
  assert.equal(state2.forbidClassImplicitCall.length, 1, "forbidClassImplicitCall");
  assert.equal(state2.forbidIndentedApplication.length, 1, "forbidIndentedApplication");
  assert.equal(state2.forbidNestedBinaryOp.length, 1, "forbidNestedBinaryOp");
  assert.equal(state2.forbidNewlineBinaryOp.length, 1, "forbidNewlineBinaryOp");
  assert.equal(state2.forbidTrailingMemberProperty.length, 1, "forbidTrailingMemberProperty");
  assert.equal(state2.JSXTagStack.length, 1, "JSXTagStack");
  addParentPointers(root);
  let { expressions: statements } = root;
  processPlaceholders(statements);
  processNegativeIndexAccess(statements);
  processTypes(statements);
  processDeclarationConditions(statements);
  processPipelineExpressions(statements);
  processDeclarations(statements);
  processAssignments(statements);
  processStatementExpressions(statements);
  processPatternMatching(statements);
  processIterationExpressions(statements);
  processFinallyClauses(statements);
  processBreaksContinues(statements);
  root.topLevelAwait = hasAwait(statements);
  root.topLevelYield = hasYield(statements);
  let rootIIFE;
  if (config2.iife || config2.repl) {
    rootIIFE = wrapIIFE(
      root.expressions,
      root.topLevelAwait,
      root.topLevelYield ? "*" : void 0
    );
    statements = [["", rootIIFE]];
    root.children = root.children.map(($20) => $20 === root.expressions ? statements : $20);
    root.expressions = statements;
  }
  hoistRefDecs(statements);
  processFunctions(statements, config2);
  if (config2.coffeeClasses) {
    processCoffeeClasses(statements);
  }
  statements.unshift(...extractPreludeFor(statements));
  if (config2.autoLet) {
    createConstLetDecs(statements, [], "let");
  } else if (config2.autoConst) {
    createConstLetDecs(statements, [], "const");
  } else if (config2.autoVar) {
    createVarDecs(root, []);
  }
  if (config2.repl) {
    processRepl(root, rootIIFE);
  }
  processBlocks(statements);
  populateRefs(statements);
  adjustAtBindings(statements);
  if (getSync()) {
    processComptime(statements);
  }
}
async function processProgramAsync(root) {
  const { expressions: statements } = root;
  await processComptime(statements);
}
function processRepl(root, rootIIFE) {
  const topBlock = gatherRecursive(rootIIFE, ($21) => $21.type === "BlockStatement")[0];
  let i = 0;
  for (let ref23 = gatherRecursiveWithinFunction(topBlock, ($22) => $22.type === "Declaration"), i14 = 0, len11 = ref23.length; i14 < len11; i14++) {
    const decl = ref23[i14];
    if (!decl.names?.length) {
      continue;
    }
    if (decl.parent === topBlock || decl.decl === "var") {
      decl.children.shift();
      if (decl.bindings[0]?.pattern?.type === "ObjectBindingPattern") {
        decl.children.unshift("(");
        decl.children.push(")");
      }
      root.expressions.splice(i++, 0, ["", `var ${decl.names.join(",")}`, ";"]);
    }
  }
  for (let ref24 = gatherRecursive(topBlock, ($23) => $23.type === "FunctionExpression"), i15 = 0, len12 = ref24.length; i15 < len12; i15++) {
    const func = ref24[i15];
    if (func.name && func.parent?.type === "BlockStatement") {
      if (func.parent === topBlock) {
        replaceNode(func, void 0);
        root.expressions.splice(i++, 0, ["", func]);
        func.parent = root;
      } else {
        func.children.unshift(func.name, "=");
        root.expressions.splice(i++, 0, ["", `var ${func.name}`, ";"]);
      }
    }
  }
  for (let ref25 = gatherRecursiveWithinFunction(topBlock, ($24) => $24.type === "ClassExpression"), i16 = 0, len13 = ref25.length; i16 < len13; i16++) {
    const classExp = ref25[i16];
    let m8;
    if (classExp.name && classExp.parent === topBlock || (m8 = classExp.parent, typeof m8 === "object" && m8 != null && "type" in m8 && m8.type === "ReturnStatement" && "parent" in m8 && m8.parent === topBlock)) {
      classExp.children.unshift(classExp.name, "=");
      root.expressions.splice(i++, 0, ["", `var ${classExp.name}`, ";"]);
    }
  }
}
function processPlaceholders(statements) {
  const placeholderMap = /* @__PURE__ */ new Map();
  const liftedIfs = /* @__PURE__ */ new Set();
  for (let ref26 = gatherRecursiveAll(statements, ($25) => $25.type === "Placeholder"), i17 = 0, len14 = ref26.length; i17 < len14; i17++) {
    const exp = ref26[i17];
    let ancestor;
    if (exp.subtype === ".") {
      ({ ancestor } = findAncestor(
        exp,
        ($) => $.type === "Call" && !$.parent?.implicit
      ));
      ancestor = ancestor?.parent;
      let m9;
      while (ancestor?.parent != null && (m9 = ancestor.parent.type, m9 === "UnaryExpression" || m9 === "NewExpression" || m9 === "AwaitExpression" || m9 === "ThrowStatement" || m9 === "StatementExpression")) {
        ancestor = ancestor.parent;
      }
      if (!ancestor) {
        replaceNode(exp, {
          type: "Error",
          message: "Partial placeholder . outside of call expression"
        });
        return;
      }
    } else {
      let child;
      let implicitLift;
      ({ ancestor, child } = findAncestor(exp, (ancestor2, child2) => {
        const prevImplicitLift = implicitLift;
        ({ implicitLift } = ancestor2);
        if (prevImplicitLift) {
          return;
        }
        const { type } = ancestor2;
        if (type === "IfStatement") {
          liftedIfs.add(ancestor2);
        }
        let m10;
        let m11;
        return type === "Call" && !ancestor2.parent?.implicit || // Block, except for if/else blocks when condition already lifted
        type === "BlockStatement" && !((m10 = ancestor2.parent, typeof m10 === "object" && m10 != null && "type" in m10 && m10.type === "IfStatement") && liftedIfs.has(ancestor2.parent)) && !((m11 = ancestor2.parent, typeof m11 === "object" && m11 != null && "type" in m11 && m11.type === "ElseClause" && "parent" in m11 && typeof m11.parent === "object" && m11.parent != null && "type" in m11.parent && m11.parent.type === "IfStatement") && liftedIfs.has(ancestor2.parent.parent)) || type === "PipelineExpression" || // Declaration
        type === "Initializer" || // Right-hand side of assignment
        type === "AssignmentExpression" && findChildIndex(ancestor2, child2) === ancestor2.children.indexOf(ancestor2.expression) || type === "ReturnStatement" || type === "YieldExpression";
      }));
      switch (ancestor?.type) {
        case "Call": {
          const i = findChildIndex(ancestor.args, child);
          if (i >= 0) {
            ancestor.args[i] = maybeWrap(ancestor.args[i], ancestor);
            ancestor = ancestor.args[i];
          } else {
            ancestor = void 0;
          }
          ;
          break;
        }
        case "BlockStatement": {
          const i = findChildIndex(ancestor.expressions, child);
          if (i >= 0) {
            ancestor.expressions[i][1] = maybeWrap(ancestor.expressions[i][1], ancestor);
            ancestor = ancestor.expressions[i][1];
          } else {
            ancestor = void 0;
          }
          ;
          break;
        }
        case "PipelineExpression": {
          const i = findChildIndex(ancestor, child);
          if (i === 1) {
            ancestor = ancestor;
          } else if (i === 2) {
            const j = findChildIndex(ancestor.children[i], child);
            ancestor.children[i][j][3] = maybeWrap(ancestor.children[i][j][3], ancestor);
            ancestor = ancestor.children[i][j][3];
          } else {
            ancestor = void 0;
          }
          ;
          break;
        }
        case "AssignmentExpression":
        case "Initializer":
        case "ReturnStatement":
        case "YieldExpression": {
          const i = findChildIndex(ancestor, child);
          if (i >= 0 && ancestor.expression === ancestor.children[i]) {
            ancestor.expression = ancestor.children[i] = maybeWrap(ancestor.expression, ancestor);
            ancestor = ancestor.expression;
          } else {
            ancestor = void 0;
          }
          ;
          break;
        }
      }
      if (!ancestor) {
        replaceNode(exp, {
          type: "Error",
          message: "Ampersand placeholder & outside of block"
        });
      }
    }
    if (ancestor != null) {
      if (placeholderMap.has(ancestor)) {
        placeholderMap.get(ancestor).push(exp);
      } else {
        placeholderMap.set(ancestor, [exp]);
      }
    }
  }
  for (const [ancestor, placeholders] of placeholderMap) {
    let ref = makeRef("$");
    let typeSuffix;
    for (let i18 = 0, len15 = placeholders.length; i18 < len15; i18++) {
      const placeholder = placeholders[i18];
      typeSuffix ??= placeholder.typeSuffix;
      let ref27;
      (ref27 = placeholder.children)[ref27.length - 1] = ref;
    }
    const { parent } = ancestor;
    const body = maybeUnwrap(ancestor);
    let fnExp = makeAmpersandFunction({ ref, typeSuffix, body });
    let outer;
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
        const i = findChildIndex(parent, ancestor);
        let ref28;
        if (i === 1) {
          ref28 = ancestor === parent.children[i];
        } else if (i === 2) {
          ref28 = ancestor === parent.children[i][findChildIndex(parent.children[i], ancestor)][3];
        } else {
          ref28 = void 0;
        }
        ;
        outer = ref28;
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
    if (!outer) {
      fnExp = makeLeftHandSideExpression(fnExp);
    }
    replaceNode(ancestor, fnExp, parent);
    if (typeof parent === "object" && parent != null && "type" in parent && parent.type === "BlockStatement" && "parent" in parent && typeof parent.parent === "object" && parent.parent != null && "type" in parent.parent && parent.parent.type === "ArrowFunction" && "ampersandBlock" in parent.parent && parent.parent.ampersandBlock === true && "body" in parent.parent && parent.parent.body === body) {
      parent.parent.body = fnExp;
    }
    let ref29;
    if (ref29 = getTrimmingSpace(body)) {
      const ws = ref29;
      inplaceInsertTrimmingSpace(body, "");
      inplacePrepend(ws, fnExp);
    }
  }
  return;
}
function reorderBindingRestProperty(props) {
  const names = props.flatMap((p) => p.names);
  let restIndex = -1;
  let restCount = 0;
  props.forEach(({ type }, i) => {
    if (type === "BindingRestProperty") {
      if (restIndex < 0) restIndex = i;
      return restCount++;
    }
    ;
    return;
  });
  if (restCount === 0) {
    return {
      children: props,
      names
    };
  }
  let after = props.slice(restIndex + 1);
  let rest = props[restIndex];
  props = props.slice(0, restIndex);
  if (after.length) {
    const { delim: restDelim } = rest, lastAfterProp = after[after.length - 1], { delim: lastDelim, children: lastAfterChildren } = lastAfterProp;
    rest = {
      ...rest,
      delim: lastDelim,
      children: [...rest.children.slice(0, -1), lastDelim]
    };
    after = [
      ...after.slice(0, -1),
      {
        ...lastAfterProp,
        delim: restDelim,
        children: [...lastAfterChildren.slice(0, -1), restDelim]
      }
    ];
  }
  let ref30;
  if (Array.isArray(rest.delim) && (ref30 = rest.delim)[ref30.length - 1]?.token === ",") {
    rest.delim = rest.delim.slice(0, -1);
    rest.children = [...rest.children.slice(0, -1), rest.delim];
  }
  const children = [...props, ...after, rest];
  if (restCount > 1) {
    children.push({
      type: "Error",
      message: "Multiple rest properties in object pattern"
    });
  }
  return { children, names };
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
    if (config2.server && !config2.client) {
      return ["string"];
    }
    let { tag } = node;
    const clientType = tag[0] === tag[0].toLowerCase() ? [getHelperRef("IntrinsicElements"), '<"', tag, '">'] : ["ReturnType<typeof ", tag, ">"];
    if (config2.server) {
      return ["string", " | ", clientType];
    } else {
      return clientType;
    }
  }
  ;
  return;
}
function typeOfJSXFragment(node, config2) {
  if (config2.solid) {
    let type = [];
    let lastType;
    for (let child of node.jsxChildren) {
      switch (child.type) {
        case "JSXText":
          if (lastType !== "JSXText") {
            type.push("string");
          }
          break;
        case "JSXElement":
          type.push(typeOfJSXElement(child, config2));
          break;
        case "JSXFragment":
          type.push(...typeOfJSXFragment(child, config2));
          break;
        case "JSXChildExpression":
          if (child.expression) {
            type.push(["typeof ", child.expression]);
          }
          break;
        default:
          throw new Error(`unknown child in JSXFragment: ${JSON.stringify(child)}`);
      }
      lastType = child.type;
    }
    if (type.length === 1) {
      return type[0];
    } else {
      type = type.flatMap((t) => [t, ", "]);
      type.pop();
      return ["[", type, "]"];
    }
  }
  ;
  return;
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
};
var $L0 = (0, import_lib2.$L)("");
var $L1 = (0, import_lib2.$L)("{");
var $L2 = (0, import_lib2.$L)("/ ");
var $L3 = (0, import_lib2.$L)("=");
var $L4 = (0, import_lib2.$L)("(");
var $L5 = (0, import_lib2.$L)("... ");
var $L6 = (0, import_lib2.$L)("?");
var $L7 = (0, import_lib2.$L)(".");
var $L8 = (0, import_lib2.$L)("tuple");
var $L9 = (0, import_lib2.$L)("++");
var $L10 = (0, import_lib2.$L)("--");
var $L11 = (0, import_lib2.$L)("\u29FA");
var $L12 = (0, import_lib2.$L)("\u2014");
var $L13 = (0, import_lib2.$L)("=>");
var $L14 = (0, import_lib2.$L)("\u21D2");
var $L15 = (0, import_lib2.$L)("import");
var $L16 = (0, import_lib2.$L)(":");
var $L17 = (0, import_lib2.$L)(" ");
var $L18 = (0, import_lib2.$L)("<");
var $L19 = (0, import_lib2.$L)("implements");
var $L20 = (0, import_lib2.$L)("<:");
var $L21 = (0, import_lib2.$L)("^");
var $L22 = (0, import_lib2.$L)("<?");
var $L23 = (0, import_lib2.$L)("-");
var $L24 = (0, import_lib2.$L)("import.meta");
var $L25 = (0, import_lib2.$L)("return.value");
var $L26 = (0, import_lib2.$L)(",");
var $L27 = (0, import_lib2.$L)("tighter");
var $L28 = (0, import_lib2.$L)("looser");
var $L29 = (0, import_lib2.$L)("same");
var $L30 = (0, import_lib2.$L)("left");
var $L31 = (0, import_lib2.$L)("right");
var $L32 = (0, import_lib2.$L)("non");
var $L33 = (0, import_lib2.$L)("relational");
var $L34 = (0, import_lib2.$L)("arguments");
var $L35 = (0, import_lib2.$L)("->");
var $L36 = (0, import_lib2.$L)("\u2192");
var $L37 = (0, import_lib2.$L)("}");
var $L38 = (0, import_lib2.$L)("null");
var $L39 = (0, import_lib2.$L)("true");
var $L40 = (0, import_lib2.$L)("false");
var $L41 = (0, import_lib2.$L)("yes");
var $L42 = (0, import_lib2.$L)("on");
var $L43 = (0, import_lib2.$L)("no");
var $L44 = (0, import_lib2.$L)("off");
var $L45 = (0, import_lib2.$L)(">");
var $L46 = (0, import_lib2.$L)("]");
var $L47 = (0, import_lib2.$L)("\u2022");
var $L48 = (0, import_lib2.$L)("//");
var $L49 = (0, import_lib2.$L)("**=");
var $L50 = (0, import_lib2.$L)("*=");
var $L51 = (0, import_lib2.$L)("%/");
var $L52 = (0, import_lib2.$L)("\xF7");
var $L53 = (0, import_lib2.$L)("%%");
var $L54 = (0, import_lib2.$L)("/=");
var $L55 = (0, import_lib2.$L)("%=");
var $L56 = (0, import_lib2.$L)("+=");
var $L57 = (0, import_lib2.$L)("-=");
var $L58 = (0, import_lib2.$L)("<<=");
var $L59 = (0, import_lib2.$L)("\u226A=");
var $L60 = (0, import_lib2.$L)(">>>=");
var $L61 = (0, import_lib2.$L)("\u22D9=");
var $L62 = (0, import_lib2.$L)(">>=");
var $L63 = (0, import_lib2.$L)("\u226B=");
var $L64 = (0, import_lib2.$L)("&&=");
var $L65 = (0, import_lib2.$L)("&=");
var $L66 = (0, import_lib2.$L)("^=");
var $L67 = (0, import_lib2.$L)("||=");
var $L68 = (0, import_lib2.$L)("\u2016=");
var $L69 = (0, import_lib2.$L)("|=");
var $L70 = (0, import_lib2.$L)("??=");
var $L71 = (0, import_lib2.$L)("\u2047=");
var $L72 = (0, import_lib2.$L)("?=");
var $L73 = (0, import_lib2.$L)("and=");
var $L74 = (0, import_lib2.$L)("or=");
var $L75 = (0, import_lib2.$L)("*");
var $L76 = (0, import_lib2.$L)("**");
var $L77 = (0, import_lib2.$L)("/");
var $L78 = (0, import_lib2.$L)("%");
var $L79 = (0, import_lib2.$L)("+");
var $L80 = (0, import_lib2.$L)("<=");
var $L81 = (0, import_lib2.$L)("\u2264");
var $L82 = (0, import_lib2.$L)(">=");
var $L83 = (0, import_lib2.$L)("\u2265");
var $L84 = (0, import_lib2.$L)("!<?");
var $L85 = (0, import_lib2.$L)("<<");
var $L86 = (0, import_lib2.$L)("\u226A");
var $L87 = (0, import_lib2.$L)(">>>");
var $L88 = (0, import_lib2.$L)("\u22D9");
var $L89 = (0, import_lib2.$L)(">>");
var $L90 = (0, import_lib2.$L)("\u226B");
var $L91 = (0, import_lib2.$L)("!==");
var $L92 = (0, import_lib2.$L)("\u2262");
var $L93 = (0, import_lib2.$L)("!=");
var $L94 = (0, import_lib2.$L)("\u2260");
var $L95 = (0, import_lib2.$L)("isnt");
var $L96 = (0, import_lib2.$L)("===");
var $L97 = (0, import_lib2.$L)("\u2263");
var $L98 = (0, import_lib2.$L)("\u2A76");
var $L99 = (0, import_lib2.$L)("==");
var $L100 = (0, import_lib2.$L)("\u2261");
var $L101 = (0, import_lib2.$L)("\u2A75");
var $L102 = (0, import_lib2.$L)("and");
var $L103 = (0, import_lib2.$L)("&&");
var $L104 = (0, import_lib2.$L)("or");
var $L105 = (0, import_lib2.$L)("||");
var $L106 = (0, import_lib2.$L)("\u2016");
var $L107 = (0, import_lib2.$L)("^^");
var $L108 = (0, import_lib2.$L)("xor");
var $L109 = (0, import_lib2.$L)("xnor");
var $L110 = (0, import_lib2.$L)("??");
var $L111 = (0, import_lib2.$L)("\u2047");
var $L112 = (0, import_lib2.$L)("instanceof");
var $L113 = (0, import_lib2.$L)("\u2208");
var $L114 = (0, import_lib2.$L)("\u220B");
var $L115 = (0, import_lib2.$L)("\u220C");
var $L116 = (0, import_lib2.$L)("\u2209");
var $L117 = (0, import_lib2.$L)("&");
var $L118 = (0, import_lib2.$L)("|");
var $L119 = (0, import_lib2.$L)(";");
var $L120 = (0, import_lib2.$L)("some");
var $L121 = (0, import_lib2.$L)("every");
var $L122 = (0, import_lib2.$L)("count");
var $L123 = (0, import_lib2.$L)("first");
var $L124 = (0, import_lib2.$L)("sum");
var $L125 = (0, import_lib2.$L)("product");
var $L126 = (0, import_lib2.$L)("min");
var $L127 = (0, import_lib2.$L)("max");
var $L128 = (0, import_lib2.$L)("join");
var $L129 = (0, import_lib2.$L)("concat");
var $L130 = (0, import_lib2.$L)("break");
var $L131 = (0, import_lib2.$L)("continue");
var $L132 = (0, import_lib2.$L)("debugger");
var $L133 = (0, import_lib2.$L)("require");
var $L134 = (0, import_lib2.$L)("with");
var $L135 = (0, import_lib2.$L)("assert");
var $L136 = (0, import_lib2.$L)(":=");
var $L137 = (0, import_lib2.$L)("\u2254");
var $L138 = (0, import_lib2.$L)(".=");
var $L139 = (0, import_lib2.$L)("::=");
var $L140 = (0, import_lib2.$L)("/*");
var $L141 = (0, import_lib2.$L)("*/");
var $L142 = (0, import_lib2.$L)("\\");
var $L143 = (0, import_lib2.$L)(")");
var $L144 = (0, import_lib2.$L)("abstract");
var $L145 = (0, import_lib2.$L)("as");
var $L146 = (0, import_lib2.$L)("@");
var $L147 = (0, import_lib2.$L)("@@");
var $L148 = (0, import_lib2.$L)("async");
var $L149 = (0, import_lib2.$L)("await");
var $L150 = (0, import_lib2.$L)("`");
var $L151 = (0, import_lib2.$L)("by");
var $L152 = (0, import_lib2.$L)("case");
var $L153 = (0, import_lib2.$L)("catch");
var $L154 = (0, import_lib2.$L)("class");
var $L155 = (0, import_lib2.$L)("#{");
var $L156 = (0, import_lib2.$L)("comptime");
var $L157 = (0, import_lib2.$L)("declare");
var $L158 = (0, import_lib2.$L)("default");
var $L159 = (0, import_lib2.$L)("delete");
var $L160 = (0, import_lib2.$L)("do");
var $L161 = (0, import_lib2.$L)("..");
var $L162 = (0, import_lib2.$L)("\u2025");
var $L163 = (0, import_lib2.$L)("...");
var $L164 = (0, import_lib2.$L)("\u2026");
var $L165 = (0, import_lib2.$L)("::");
var $L166 = (0, import_lib2.$L)('"');
var $L167 = (0, import_lib2.$L)("each");
var $L168 = (0, import_lib2.$L)("else");
var $L169 = (0, import_lib2.$L)("!");
var $L170 = (0, import_lib2.$L)("export");
var $L171 = (0, import_lib2.$L)("extends");
var $L172 = (0, import_lib2.$L)("finally");
var $L173 = (0, import_lib2.$L)("for");
var $L174 = (0, import_lib2.$L)("from");
var $L175 = (0, import_lib2.$L)("function");
var $L176 = (0, import_lib2.$L)("get");
var $L177 = (0, import_lib2.$L)("set");
var $L178 = (0, import_lib2.$L)("#");
var $L179 = (0, import_lib2.$L)("if");
var $L180 = (0, import_lib2.$L)("in");
var $L181 = (0, import_lib2.$L)("infer");
var $L182 = (0, import_lib2.$L)("let");
var $L183 = (0, import_lib2.$L)("const");
var $L184 = (0, import_lib2.$L)("is");
var $L185 = (0, import_lib2.$L)("var");
var $L186 = (0, import_lib2.$L)("like");
var $L187 = (0, import_lib2.$L)("loop");
var $L188 = (0, import_lib2.$L)("new");
var $L189 = (0, import_lib2.$L)("not");
var $L190 = (0, import_lib2.$L)("of");
var $L191 = (0, import_lib2.$L)("[");
var $L192 = (0, import_lib2.$L)("operator");
var $L193 = (0, import_lib2.$L)("override");
var $L194 = (0, import_lib2.$L)("own");
var $L195 = (0, import_lib2.$L)("public");
var $L196 = (0, import_lib2.$L)("private");
var $L197 = (0, import_lib2.$L)("protected");
var $L198 = (0, import_lib2.$L)("||>");
var $L199 = (0, import_lib2.$L)("|\u25B7");
var $L200 = (0, import_lib2.$L)("|>=");
var $L201 = (0, import_lib2.$L)("\u25B7=");
var $L202 = (0, import_lib2.$L)("|>");
var $L203 = (0, import_lib2.$L)("\u25B7");
var $L204 = (0, import_lib2.$L)("readonly");
var $L205 = (0, import_lib2.$L)("return");
var $L206 = (0, import_lib2.$L)("satisfies");
var $L207 = (0, import_lib2.$L)("'");
var $L208 = (0, import_lib2.$L)("static");
var $L209 = (0, import_lib2.$L)("${");
var $L210 = (0, import_lib2.$L)("super");
var $L211 = (0, import_lib2.$L)("switch");
var $L212 = (0, import_lib2.$L)("target");
var $L213 = (0, import_lib2.$L)("then");
var $L214 = (0, import_lib2.$L)("this");
var $L215 = (0, import_lib2.$L)("throw");
var $L216 = (0, import_lib2.$L)('"""');
var $L217 = (0, import_lib2.$L)("'''");
var $L218 = (0, import_lib2.$L)("///");
var $L219 = (0, import_lib2.$L)("```");
var $L220 = (0, import_lib2.$L)("try");
var $L221 = (0, import_lib2.$L)("typeof");
var $L222 = (0, import_lib2.$L)("undefined");
var $L223 = (0, import_lib2.$L)("unless");
var $L224 = (0, import_lib2.$L)("until");
var $L225 = (0, import_lib2.$L)("using");
var $L226 = (0, import_lib2.$L)("void");
var $L227 = (0, import_lib2.$L)("when");
var $L228 = (0, import_lib2.$L)("while");
var $L229 = (0, import_lib2.$L)("yield");
var $L230 = (0, import_lib2.$L)("/>");
var $L231 = (0, import_lib2.$L)("</");
var $L232 = (0, import_lib2.$L)("<>");
var $L233 = (0, import_lib2.$L)("</>");
var $L234 = (0, import_lib2.$L)("<!--");
var $L235 = (0, import_lib2.$L)("-->");
var $L236 = (0, import_lib2.$L)("type");
var $L237 = (0, import_lib2.$L)("enum");
var $L238 = (0, import_lib2.$L)("interface");
var $L239 = (0, import_lib2.$L)("global");
var $L240 = (0, import_lib2.$L)("module");
var $L241 = (0, import_lib2.$L)("namespace");
var $L242 = (0, import_lib2.$L)("asserts");
var $L243 = (0, import_lib2.$L)("keyof");
var $L244 = (0, import_lib2.$L)("???");
var $L245 = (0, import_lib2.$L)("unique");
var $L246 = (0, import_lib2.$L)("symbol");
var $L247 = (0, import_lib2.$L)("[]");
var $L248 = (0, import_lib2.$L)("civet");
var $R0 = (0, import_lib2.$R)(new RegExp("(?=async|debugger|if|unless|comptime|do|for|loop|until|while|switch|throw|try)", "suy"));
var $R1 = (0, import_lib2.$R)(new RegExp("&(?=\\s)", "suy"));
var $R2 = (0, import_lib2.$R)(new RegExp("(as|of|by|satisfies|then|when|implements|xor|xnor)(?!\\p{ID_Continue}|[\\u200C\\u200D$])", "suy"));
var $R3 = (0, import_lib2.$R)(new RegExp("[0-9]", "suy"));
var $R4 = (0, import_lib2.$R)(new RegExp("(?!\\p{ID_Start}|[_$0-9(\\[{])", "suy"));
var $R5 = (0, import_lib2.$R)(new RegExp("[ \\t]", "suy"));
var $R6 = (0, import_lib2.$R)(new RegExp("\\p{ID_Continue}|[\\u200C\\u200D$.#{=]", "suy"));
var $R7 = (0, import_lib2.$R)(new RegExp("[&=]", "suy"));
var $R8 = (0, import_lib2.$R)(new RegExp("(?=['\"`])", "suy"));
var $R9 = (0, import_lib2.$R)(new RegExp("(?=[\\/?])", "suy"));
var $R10 = (0, import_lib2.$R)(new RegExp("(?=[\\/\\[{?.!@#'\u2019:])", "suy"));
var $R11 = (0, import_lib2.$R)(new RegExp("%%?", "suy"));
var $R12 = (0, import_lib2.$R)(new RegExp("[.\\s]", "suy"));
var $R13 = (0, import_lib2.$R)(new RegExp("[)}]", "suy"));
var $R14 = (0, import_lib2.$R)(new RegExp("[+-]", "suy"));
var $R15 = (0, import_lib2.$R)(new RegExp("\\+\\+|--|\u29FA|\u2014|[\\+\\-&]\\S", "suy"));
var $R16 = (0, import_lib2.$R)(new RegExp(`(?=[0-9.'"tfyno])`, "suy"));
var $R17 = (0, import_lib2.$R)(new RegExp("(?=true|false|yes|no|on|off)", "suy"));
var $R18 = (0, import_lib2.$R)(new RegExp("(?=\\p{ID_Start}|[_$])", "suy"));
var $R19 = (0, import_lib2.$R)(new RegExp("(?:\\p{ID_Start}|[_$])(?:\\p{ID_Continue}|[\\u200C\\u200D$])*", "suy"));
var $R20 = (0, import_lib2.$R)(new RegExp("(?=\\[|\\s*[.\u2022\\/])", "suy"));
var $R21 = (0, import_lib2.$R)(new RegExp("([<>])(=?)|([\u2264\u2265])", "suy"));
var $R22 = (0, import_lib2.$R)(new RegExp("[ \\t]*", "suy"));
var $R23 = (0, import_lib2.$R)(new RegExp("[ \\t]+", "suy"));
var $R24 = (0, import_lib2.$R)(new RegExp("[!+-]?", "suy"));
var $R25 = (0, import_lib2.$R)(new RegExp("(?:\\p{ID_Continue}|[\\u200C\\u200D$-])*", "suy"));
var $R26 = (0, import_lib2.$R)(new RegExp("[=>]", "suy"));
var $R27 = (0, import_lib2.$R)(new RegExp("(?=\\p{ID_Start}|[_$^\u226A\u226B\u22D9\u2264\u2265\u2208\u220B\u2209\u220C\u2263\u2261\u2262\u2260=\u2A76\u2A75\u2016\u2047&|*\\/!?%\xF7<>\u29FA+-])", "suy"));
var $R28 = (0, import_lib2.$R)(new RegExp("!\\^\\^?", "suy"));
var $R29 = (0, import_lib2.$R)(new RegExp("(?!\\+\\+|--)[!~+-](?!\\s)", "suy"));
var $R30 = (0, import_lib2.$R)(new RegExp("[:.]", "suy"));
var $R31 = (0, import_lib2.$R)(new RegExp("(?=for|if|loop|unless|until|while)", "suy"));
var $R32 = (0, import_lib2.$R)(new RegExp("(?:loop|while|until|for|do)(?!\\p{ID_Continue})", "suy"));
var $R33 = (0, import_lib2.$R)(new RegExp("(?=loop|comptime|do|for|until|while)", "suy"));
var $R34 = (0, import_lib2.$R)(new RegExp('[^;"\\s=>]+', "suy"));
var $R35 = (0, import_lib2.$R)(new RegExp("(?=[0-9.])", "suy"));
var $R36 = (0, import_lib2.$R)(new RegExp("(?:0|[1-9](?:_[0-9]|[0-9])*)n", "suy"));
var $R37 = (0, import_lib2.$R)(new RegExp("(?:0|[1-9](?:_[0-9]|[0-9])*)(?=\\.(?:\\p{ID_Start}|[_$]))", "suy"));
var $R38 = (0, import_lib2.$R)(new RegExp("(?:0|[1-9](?:_[0-9]|[0-9])*)(?:\\.(?:[0-9](?:_[0-9]|[0-9])*))?", "suy"));
var $R39 = (0, import_lib2.$R)(new RegExp("(?:\\.[0-9](?:_[0-9]|[0-9])*)", "suy"));
var $R40 = (0, import_lib2.$R)(new RegExp("(?:[eE][+-]?[0-9]+(?:_[0-9]|[0-9])*)", "suy"));
var $R41 = (0, import_lib2.$R)(new RegExp("0[bB][01](?:[01]|_[01])*n?", "suy"));
var $R42 = (0, import_lib2.$R)(new RegExp("0[oO][0-7](?:[0-7]|_[0-7])*n?", "suy"));
var $R43 = (0, import_lib2.$R)(new RegExp("0[xX][0-9a-fA-F](?:[0-9a-fA-F]|_[0-9a-fA-F])*n?", "suy"));
var $R44 = (0, import_lib2.$R)(new RegExp("(?=[0-9])", "suy"));
var $R45 = (0, import_lib2.$R)(new RegExp("(?:0|[1-9](?:_[0-9]|[0-9])*)", "suy"));
var $R46 = (0, import_lib2.$R)(new RegExp('(?:\\\\.|[^"])*', "suy"));
var $R47 = (0, import_lib2.$R)(new RegExp("(?:\\\\.|[^'])*", "suy"));
var $R48 = (0, import_lib2.$R)(new RegExp('(?:"(?!"")|#(?!\\{)|\\\\.|[^#"])+', "suy"));
var $R49 = (0, import_lib2.$R)(new RegExp('(?:"(?!"")|\\\\.|[^"])+', "suy"));
var $R50 = (0, import_lib2.$R)(new RegExp("(?:'(?!'')|\\\\.|[^'])*", "suy"));
var $R51 = (0, import_lib2.$R)(new RegExp('(?:\\\\.|#(?!\\{)|[^"#])+', "suy"));
var $R52 = (0, import_lib2.$R)(new RegExp("(?:\\\\.|[^\\]])*", "suy"));
var $R53 = (0, import_lib2.$R)(new RegExp("(?:\\\\.)", "suy"));
var $R54 = (0, import_lib2.$R)(new RegExp("[\\s]+", "suy"));
var $R55 = (0, import_lib2.$R)(new RegExp("\\/(?!\\/\\/)", "suy"));
var $R56 = (0, import_lib2.$R)(new RegExp("[^[\\/\\s#$\\\\]+|[#$]", "suy"));
var $R57 = (0, import_lib2.$R)(new RegExp("[*\\/\\r\\n]", "suy"));
var $R58 = (0, import_lib2.$R)(new RegExp("(?:\\\\.|[^[\\/\\r\\n])+", "suy"));
var $R59 = (0, import_lib2.$R)(new RegExp("(?:\\p{ID_Continue}|[\\u200C\\u200D$])*", "suy"));
var $R60 = (0, import_lib2.$R)(new RegExp("(?=[`'\"])", "suy"));
var $R61 = (0, import_lib2.$R)(new RegExp("(?:\\$(?!\\{)|\\\\.|[^$`])+", "suy"));
var $R62 = (0, import_lib2.$R)(new RegExp("(?:\\$(?!\\{)|`(?!``)|\\\\.|[^$`])+", "suy"));
var $R63 = (0, import_lib2.$R)(new RegExp("(?:on|off|yes|no)(?!\\p{ID_Continue})", "suy"));
var $R64 = (0, import_lib2.$R)(new RegExp("(?:isnt)(?!\\p{ID_Continue})", "suy"));
var $R65 = (0, import_lib2.$R)(new RegExp("(?:by)(?!\\p{ID_Continue})", "suy"));
var $R66 = (0, import_lib2.$R)(new RegExp("(?:of)(?!\\p{ID_Continue})", "suy"));
var $R67 = (0, import_lib2.$R)(new RegExp("(?:and|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|false|finally|for|function|if|import|in|instanceof|interface|is|let|loop|new|not|null|or|private|protected|public|return|static|super|switch|this|throw|true|try|typeof|unless|until|var|void|while|with|yield)(?!\\p{ID_Continue})", "suy"));
var $R68 = (0, import_lib2.$R)(new RegExp("(?=\\/|#)", "suy"));
var $R69 = (0, import_lib2.$R)(new RegExp("\\/\\/(?!\\/)[^\\r\\n]*", "suy"));
var $R70 = (0, import_lib2.$R)(new RegExp(".", "suy"));
var $R71 = (0, import_lib2.$R)(new RegExp("#(?!##(?!#))([^\\r\\n]*)", "suy"));
var $R72 = (0, import_lib2.$R)(new RegExp("[^]*?###", "suy"));
var $R73 = (0, import_lib2.$R)(new RegExp("###(?!#)", "suy"));
var $R74 = (0, import_lib2.$R)(new RegExp("\\/\\*(?:(?!\\*\\/)[^\\r\\n])*\\*\\/", "suy"));
var $R75 = (0, import_lib2.$R)(new RegExp("(?=[ \\t\\/\\\\])", "suy"));
var $R76 = (0, import_lib2.$R)(new RegExp("(?=\\s|\\/|#)", "suy"));
var $R77 = (0, import_lib2.$R)(new RegExp("(?!\\p{ID_Continue})", "suy"));
var $R78 = (0, import_lib2.$R)(new RegExp("[=:]", "suy"));
var $R79 = (0, import_lib2.$R)(new RegExp("['\u2019]s", "suy"));
var $R80 = (0, import_lib2.$R)(new RegExp("\\s", "suy"));
var $R81 = (0, import_lib2.$R)(new RegExp("(?=[<])", "suy"));
var $R82 = (0, import_lib2.$R)(new RegExp("(?:\\p{ID_Start}|[_$])(?:\\p{ID_Continue}|[\\u200C\\u200D$-])*", "suy"));
var $R83 = (0, import_lib2.$R)(new RegExp("[!+-]", "suy"));
var $R84 = (0, import_lib2.$R)(new RegExp("[\\s>]|\\/>", "suy"));
var $R85 = (0, import_lib2.$R)(new RegExp("(?:[\\w\\-:]+|\\([^()]*\\)|\\[[^\\[\\]]*\\])+", "suy"));
var $R86 = (0, import_lib2.$R)(new RegExp(`"[^"]*"|'[^']*'`, "suy"));
var $R87 = (0, import_lib2.$R)(new RegExp("[<>]", "suy"));
var $R88 = (0, import_lib2.$R)(new RegExp("[!~+-](?!\\s|[!~+-]*&)", "suy"));
var $R89 = (0, import_lib2.$R)(new RegExp("(?:-[^-]|[^-]*)*", "suy"));
var $R90 = (0, import_lib2.$R)(new RegExp("[^{}<>\\r\\n]+", "suy"));
var $R91 = (0, import_lib2.$R)(new RegExp("[+-]?", "suy"));
var $R92 = (0, import_lib2.$R)(new RegExp("(?=if|unless)", "suy"));
var $R93 = (0, import_lib2.$R)(new RegExp("[|&<!=\\-\u21D2\u2192]", "suy"));
var $R94 = (0, import_lib2.$R)(new RegExp("(extends|not|is)(?!\\p{ID_Continue}|[\\u200C\\u200D$])", "suy"));
var $R95 = (0, import_lib2.$R)(new RegExp("const|in|out", "suy"));
var $R96 = (0, import_lib2.$R)(new RegExp("#![^\\r\\n]*", "suy"));
var $R97 = (0, import_lib2.$R)(new RegExp("[\\t ]*", "suy"));
var $R98 = (0, import_lib2.$R)(new RegExp("[\\s]*", "suy"));
var $R99 = (0, import_lib2.$R)(new RegExp("\\s+([+-]?)([a-zA-Z0-9-]+)(\\s*=\\s*([\\p{ID_Continue}.,+-]*))?", "suy"));
var $R100 = (0, import_lib2.$R)(new RegExp("\\/\\/\\/[^\\r\\n]*", "suy"));
var $R101 = (0, import_lib2.$R)(new RegExp("(?=[ \\t\\r\\n\\/#]|$)", "suy"));
var $R102 = (0, import_lib2.$R)(new RegExp("\\r\\n|\\n|\\r|$", "suy"));
var $R103 = (0, import_lib2.$R)(new RegExp("[^]*", "suy"));
var Program$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(Reset, Init, (0, import_lib2.$E)(EOS), TopLevelStatements, __), function($skip, $loc, $0, $1, $2, $3, $4, $5) {
  var reset = $1;
  var init = $2;
  var ws1 = $3;
  var statements = $4;
  var ws2 = $5;
  const program = {
    type: "BlockStatement",
    expressions: statements,
    children: [reset, init, ws1, statements, ws2],
    bare: true,
    root: true
  };
  processProgram(program);
  return program;
});
function Program(ctx, state2) {
  return (0, import_lib2.$EVENT)(ctx, state2, "Program", Program$0);
}
var TopLevelStatements$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(TrackIndented, TopLevelSingleLineStatements, (0, import_lib2.$Q)(NestedTopLevelStatements), PopIndent), function($skip, $loc, $0, $1, $2, $3, $4) {
  var indent = $1;
  var first = $2;
  var rest = $3;
  return [
    [indent, ...first[0]],
    ...first.slice(1).map((s) => ["", ...s]),
    ...rest.flat()
  ];
});
var TopLevelStatements$1 = (0, import_lib2.$TS)((0, import_lib2.$S)(TopLevelSingleLineStatements, (0, import_lib2.$Q)(NestedTopLevelStatements)), function($skip, $loc, $0, $1, $2) {
  var first = $1;
  var rest = $2;
  return [
    ...first.map((s) => ["", ...s]),
    ...rest.flat()
  ];
});
var TopLevelStatements$2 = (0, import_lib2.$T)((0, import_lib2.$EXPECT)($L0, 'TopLevelStatements ""'), function(value) {
  return [];
});
var TopLevelStatements$$ = [TopLevelStatements$0, TopLevelStatements$1, TopLevelStatements$2];
function TopLevelStatements(ctx, state2) {
  return (0, import_lib2.$EVENT_C)(ctx, state2, "TopLevelStatements", TopLevelStatements$$);
}
var NestedTopLevelStatements$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(Nested, TopLevelSingleLineStatements), function($skip, $loc, $0, $1, $2) {
  var nested = $1;
  var statements = $2;
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
  var ws = $2;
  var statement = $3;
  var delimiter = $4;
  statement = prepend(ws, statement);
  return [statement, delimiter];
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
  var expression = $3;
  var trailing = $5;
  if (!expression) return $skip;
  if (!trailing) return expression;
  return {
    type: "CallExpression",
    children: [expression, ...trailing]
  };
});
function NestedExpressionizedStatement(ctx, state2) {
  return (0, import_lib2.$EVENT)(ctx, state2, "NestedExpressionizedStatement", NestedExpressionizedStatement$0);
}
var ExpressionizedStatementWithTrailingCallExpressions$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(ExpressionizedStatement, (0, import_lib2.$E)(AllowedTrailingCallExpressions)), function($skip, $loc, $0, $1, $2) {
  if (!$2) return $1;
  return {
    type: "CallExpression",
    children: [
      makeLeftHandSideExpression($1),
      ...$2
    ]
  };
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
var StatementExpression$0 = DebuggerStatement;
var StatementExpression$1 = (0, import_lib2.$TS)((0, import_lib2.$S)(IfStatement), function($skip, $loc, $0, $1) {
  if (!$1.else && $1.then.implicit) return $skip;
  return $1;
});
var StatementExpression$2 = IterationExpression;
var StatementExpression$3 = SwitchStatement;
var StatementExpression$4 = ThrowStatement;
var StatementExpression$5 = TryStatement;
var StatementExpression$$ = [StatementExpression$0, StatementExpression$1, StatementExpression$2, StatementExpression$3, StatementExpression$4, StatementExpression$5];
function StatementExpression(ctx, state2) {
  return (0, import_lib2.$EVENT_C)(ctx, state2, "StatementExpression", StatementExpression$$);
}
var CommaExpression$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(AssignmentExpression, (0, import_lib2.$Q)((0, import_lib2.$S)(CommaDelimiter, AssignmentExpression))), function($skip, $loc, $0, $1, $2) {
  if ($2.length == 0) return $1;
  return $0;
});
function CommaExpression(ctx, state2) {
  return (0, import_lib2.$EVENT)(ctx, state2, "CommaExpression", CommaExpression$0);
}
var CommaExpressionSpread$0 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$E)(_), DotDotDot, (0, import_lib2.$E)(_), IterationActualStatement), function($skip, $loc, $0, $1, $2, $3, $4) {
  var ws = $1;
  var ws2 = $3;
  var iteration = $4;
  if (iteration.subtype === "do" || iteration.subtype === "comptime") return $skip;
  if (ws2) {
    if (ws) {
      ws = [ws, ws2];
    } else {
      ws = ws2;
    }
  }
  iteration = { ...iteration, resultsParent: true };
  return prepend(ws, iteration);
});
var CommaExpressionSpread$1 = (0, import_lib2.$TS)((0, import_lib2.$S)(AssignmentExpressionSpread, (0, import_lib2.$Q)((0, import_lib2.$S)(CommaDelimiter, AssignmentExpressionSpread))), function($skip, $loc, $0, $1, $2) {
  if ($2.length == 0) return $1;
  return $0;
});
var CommaExpressionSpread$$ = [CommaExpressionSpread$0, CommaExpressionSpread$1];
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
});
var AssignmentExpressionSpread$1 = (0, import_lib2.$TS)((0, import_lib2.$S)(AssignmentExpression, (0, import_lib2.$E)((0, import_lib2.$S)((0, import_lib2.$E)(_), DotDotDot))), function($skip, $loc, $0, $1, $2) {
  var expression = $1;
  if (!$2) return $1;
  return {
    type: "SpreadElement",
    children: [...$2, $1],
    expression,
    names: expression.names
  };
});
var AssignmentExpressionSpread$2 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$E)(_), DotDotDot, AssignmentExpression), function($skip, $loc, $0, $1, $2, $3) {
  var expression = $3;
  return {
    type: "SpreadElement",
    children: $0,
    expression,
    names: expression.names
  };
});
var AssignmentExpressionSpread$3 = (0, import_lib2.$TS)((0, import_lib2.$S)(AssignmentExpression, (0, import_lib2.$E)((0, import_lib2.$S)((0, import_lib2.$E)(_), DotDotDot))), function($skip, $loc, $0, $1, $2) {
  var expression = $1;
  if (!$2) return $1;
  return {
    type: "SpreadElement",
    children: [...$2, $1],
    expression,
    names: expression.names
  };
});
var AssignmentExpressionSpread$$ = [AssignmentExpressionSpread$0, AssignmentExpressionSpread$1, AssignmentExpressionSpread$2, AssignmentExpressionSpread$3];
function AssignmentExpressionSpread(ctx, state2) {
  return (0, import_lib2.$EVENT_C)(ctx, state2, "AssignmentExpressionSpread", AssignmentExpressionSpread$$);
}
var Arguments$0 = ExplicitArguments;
var Arguments$1 = (0, import_lib2.$TS)((0, import_lib2.$S)(ForbidTrailingMemberProperty, (0, import_lib2.$E)(ImplicitArguments), RestoreTrailingMemberProperty), function($skip, $loc, $0, $1, $2, $3) {
  var args = $2;
  if (args) return args;
  return $skip;
});
var Arguments$$ = [Arguments$0, Arguments$1];
function Arguments(ctx, state2) {
  return (0, import_lib2.$EVENT_C)(ctx, state2, "Arguments", Arguments$$);
}
var ImplicitArguments$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(ApplicationStart, InsertOpenParen, (0, import_lib2.$E)(Trimmed_), ForbidNestedBinaryOp, ForbidPipeline, (0, import_lib2.$E)(ArgumentList), RestorePipeline, RestoreNestedBinaryOp, InsertCloseParen), function($skip, $loc, $0, $1, $2, $3, $4, $5, $6, $7, $8, $9) {
  var open = $2;
  var ws = $3;
  var args = $6;
  var close = $9;
  if (!args) return $skip;
  if (skipImplicitArguments(args)) return $skip;
  return {
    type: "Call",
    args,
    children: [open, ws, args, close]
  };
});
function ImplicitArguments(ctx, state2) {
  return (0, import_lib2.$EVENT)(ctx, state2, "ImplicitArguments", ImplicitArguments$0);
}
var ExplicitArguments$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(OpenParen, AllowAll, (0, import_lib2.$E)((0, import_lib2.$S)(ArgumentList, (0, import_lib2.$E)((0, import_lib2.$S)(__, Comma)))), __, RestoreAll, CloseParen), function($skip, $loc, $0, $1, $2, $3, $4, $5, $6) {
  var open = $1;
  var args = $3;
  var ws = $4;
  var close = $6;
  if (args) {
    if (args[1]) {
      args = [...args[0], args[1]];
    } else {
      args = args[0];
    }
  } else {
    args = [];
  }
  return {
    type: "Call",
    args,
    children: [open, args, ws, close]
  };
});
function ExplicitArguments(ctx, state2) {
  return (0, import_lib2.$EVENT)(ctx, state2, "ExplicitArguments", ExplicitArguments$0);
}
var ApplicationStart$0 = (0, import_lib2.$S)(IndentedApplicationAllowed, (0, import_lib2.$Y)((0, import_lib2.$S)(IndentedFurther, (0, import_lib2.$N)(IdentifierBinaryOp), (0, import_lib2.$N)(ReservedBinary))), (0, import_lib2.$N)(IndentedTrailingCallExpressions));
var ApplicationStart$1 = (0, import_lib2.$S)((0, import_lib2.$N)(EOS), (0, import_lib2.$Y)((0, import_lib2.$S)(_, (0, import_lib2.$C)(BracedApplicationAllowed, (0, import_lib2.$N)((0, import_lib2.$EXPECT)($L1, 'ApplicationStart "{"'))), (0, import_lib2.$N)(ForbiddenImplicitCalls))));
var ApplicationStart$$ = [ApplicationStart$0, ApplicationStart$1];
function ApplicationStart(ctx, state2) {
  return (0, import_lib2.$EVENT_C)(ctx, state2, "ApplicationStart", ApplicationStart$$);
}
var ForbiddenImplicitCalls$0 = ReservedBinary;
var ForbiddenImplicitCalls$1 = (0, import_lib2.$EXPECT)($L2, 'ForbiddenImplicitCalls "/ "');
var ForbiddenImplicitCalls$2 = (0, import_lib2.$S)((0, import_lib2.$Y)((0, import_lib2.$S)((0, import_lib2.$R$0)((0, import_lib2.$EXPECT)($R1, "ForbiddenImplicitCalls /&(?=\\s)/")), (0, import_lib2.$N)((0, import_lib2.$S)(NotDedented, ReservedBinary)), (0, import_lib2.$N)((0, import_lib2.$S)((0, import_lib2.$Y)((0, import_lib2.$S)(NotDedented, Ampersand, (0, import_lib2.$C)(IndentedFurther, (0, import_lib2.$N)(EOS)))), BinaryOpRHS)), (0, import_lib2.$C)(IndentedFurther, (0, import_lib2.$N)(EOS)))), BinaryOpRHS);
var ForbiddenImplicitCalls$3 = (0, import_lib2.$S)(ClassImplicitCallForbidden, (0, import_lib2.$C)(Class, AtAt));
var ForbiddenImplicitCalls$4 = (0, import_lib2.$S)(Identifier, (0, import_lib2.$EXPECT)($L3, 'ForbiddenImplicitCalls "="'), Whitespace);
var ForbiddenImplicitCalls$5 = (0, import_lib2.$TS)((0, import_lib2.$S)(Identifier, (0, import_lib2.$N)((0, import_lib2.$EXPECT)($L4, 'ForbiddenImplicitCalls "("'))), function($skip, $loc, $0, $1, $2) {
  var id = $1;
  if (state.operators.has(id.name)) return $0;
  return $skip;
});
var ForbiddenImplicitCalls$6 = (0, import_lib2.$TS)((0, import_lib2.$S)(OmittedNegation, (0, import_lib2.$E)(_), Identifier), function($skip, $loc, $0, $1, $2, $3) {
  var id = $3;
  if (state.operators.has(id.name)) return $0;
  return $skip;
});
var ForbiddenImplicitCalls$7 = (0, import_lib2.$S)(PostfixStatement, NoBlock);
var ForbiddenImplicitCalls$8 = (0, import_lib2.$EXPECT)($L5, 'ForbiddenImplicitCalls "... "');
var ForbiddenImplicitCalls$$ = [ForbiddenImplicitCalls$0, ForbiddenImplicitCalls$1, ForbiddenImplicitCalls$2, ForbiddenImplicitCalls$3, ForbiddenImplicitCalls$4, ForbiddenImplicitCalls$5, ForbiddenImplicitCalls$6, ForbiddenImplicitCalls$7, ForbiddenImplicitCalls$8];
function ForbiddenImplicitCalls(ctx, state2) {
  return (0, import_lib2.$EVENT_C)(ctx, state2, "ForbiddenImplicitCalls", ForbiddenImplicitCalls$$);
}
var ReservedBinary$0 = (0, import_lib2.$R$0)((0, import_lib2.$EXPECT)($R2, "ReservedBinary /(as|of|by|satisfies|then|when|implements|xor|xnor)(?!\\p{ID_Continue}|[\\u200C\\u200D$])/"));
function ReservedBinary(ctx, state2) {
  return (0, import_lib2.$EVENT)(ctx, state2, "ReservedBinary", ReservedBinary$0);
}
var ArgumentsWithTrailingCallExpressions$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(Arguments, (0, import_lib2.$E)(AllowedTrailingCallExpressions)), function($skip, $loc, $0, $1, $2) {
  var args = $1;
  var trailing = $2;
  return [args, ...trailing ?? []];
});
function ArgumentsWithTrailingCallExpressions(ctx, state2) {
  return (0, import_lib2.$EVENT)(ctx, state2, "ArgumentsWithTrailingCallExpressions", ArgumentsWithTrailingCallExpressions$0);
}
var TrailingCallExpressions$0 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$Q)(ExplicitCallExpressionRest), (0, import_lib2.$E)(IndentedTrailingCallExpressions)), function($skip, $loc, $0, $1, $2) {
  $1 = $1.flat();
  if (!$1.length && !$2) return $skip;
  if (!$2) return $1;
  return [...$1, ...$2];
});
function TrailingCallExpressions(ctx, state2) {
  return (0, import_lib2.$EVENT)(ctx, state2, "TrailingCallExpressions", TrailingCallExpressions$0);
}
var IndentedTrailingCallExpressions$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(PushIndent, (0, import_lib2.$Q)(NestedTrailingCallExpression), PopIndent), function($skip, $loc, $0, $1, $2, $3) {
  if (!$2.length) return $skip;
  return $2.flat();
});
var IndentedTrailingCallExpressions$1 = (0, import_lib2.$TV)((0, import_lib2.$P)(NestedTrailingCallExpression), function($skip, $loc, $0, $1) {
  return $1.flat();
});
var IndentedTrailingCallExpressions$$ = [IndentedTrailingCallExpressions$0, IndentedTrailingCallExpressions$1];
function IndentedTrailingCallExpressions(ctx, state2) {
  return (0, import_lib2.$EVENT_C)(ctx, state2, "IndentedTrailingCallExpressions", IndentedTrailingCallExpressions$$);
}
var NestedTrailingCallExpression$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(Nested, (0, import_lib2.$Y)((0, import_lib2.$S)((0, import_lib2.$E)((0, import_lib2.$EXPECT)($L6, 'NestedTrailingCallExpression "?"')), (0, import_lib2.$EXPECT)($L7, 'NestedTrailingCallExpression "."'), (0, import_lib2.$N)((0, import_lib2.$EXPECT)($R3, "NestedTrailingCallExpression /[0-9]/")))), (0, import_lib2.$P)(CallExpressionRest)), function($skip, $loc, $0, $1, $2, $3) {
  var ws = $1;
  var rests = $3;
  const [first, ...rest] = rests.flat();
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
var OptionalCommaDelimiter$0 = CommaDelimiter;
var OptionalCommaDelimiter$1 = (0, import_lib2.$T)((0, import_lib2.$S)((0, import_lib2.$Y)(EOS), InsertComma), function(value) {
  return value[1];
});
var OptionalCommaDelimiter$$ = [OptionalCommaDelimiter$0, OptionalCommaDelimiter$1];
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
});
var ArgumentList$1 = (0, import_lib2.$TS)((0, import_lib2.$S)(NestedArguments, (0, import_lib2.$Q)((0, import_lib2.$S)(OptionalCommaDelimiter, NestedArguments))), function($skip, $loc, $0, $1, $2) {
  if (!Array.isArray($1)) $1 = [$1];
  return [
    ...trimFirstSpace($1),
    ...$2.flatMap(
      ([comma, args]) => Array.isArray(args) ? [comma, ...args] : [comma, args]
    )
  ];
});
var ArgumentList$2 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$E)(_), ArgumentPart, (0, import_lib2.$Q)((0, import_lib2.$S)(CommaDelimiter, (0, import_lib2.$E)(_), ArgumentPart))), function($skip, $loc, $0, $1, $2, $3) {
  return [
    prepend($1, $2),
    ...$3.flatMap(([comma, ws, arg]) => [comma, prepend(ws, arg)])
  ];
});
var ArgumentList$$ = [ArgumentList$0, ArgumentList$1, ArgumentList$2];
function ArgumentList(ctx, state2) {
  return (0, import_lib2.$EVENT_C)(ctx, state2, "ArgumentList", ArgumentList$$);
}
var NestedArguments$0 = NestedBulletedArray;
var NestedArguments$1 = NestedImplicitObjectLiteral;
var NestedArguments$2 = NestedArgumentList;
var NestedArguments$$ = [NestedArguments$0, NestedArguments$1, NestedArguments$2];
function NestedArguments(ctx, state2) {
  return (0, import_lib2.$EVENT_C)(ctx, state2, "NestedArguments", NestedArguments$$);
}
var NestedArgumentList$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(PushIndent, AllowPipeline, AllowTrailingMemberProperty, (0, import_lib2.$Q)(NestedArgument), RestoreTrailingMemberProperty, RestorePipeline, PopIndent), function($skip, $loc, $0, $1, $2, $3, $4, $5, $6, $7) {
  var args = $4;
  if (!args.length) return $skip;
  return stripTrailingImplicitComma(args.flat());
});
function NestedArgumentList(ctx, state2) {
  return (0, import_lib2.$EVENT)(ctx, state2, "NestedArgumentList", NestedArgumentList$0);
}
var NestedArgument$0 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$N)(NestedImplicitPropertyDefinition), Nested, (0, import_lib2.$N)(Bullet), SingleLineArgumentExpressions, ParameterElementDelimiter), function($skip, $loc, $0, $1, $2, $3, $4, $5) {
  var indent = $2;
  var args = $4;
  var comma = $5;
  let [arg0, ...rest] = args;
  arg0 = prepend(indent, arg0);
  return [arg0, ...rest, comma];
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
  var spread = $1;
  var expression = $2;
  return {
    type: "Argument",
    children: $0,
    expression,
    spread
  };
});
var ArgumentPart$1 = (0, import_lib2.$TS)((0, import_lib2.$S)(Expression, (0, import_lib2.$E)(DotDotDot)), function($skip, $loc, $0, $1, $2) {
  var expression = $1;
  var spread = $2;
  return {
    type: "Argument",
    children: spread ? [spread, expression] : [expression],
    expression,
    spread
  };
});
var ArgumentPart$$ = [ArgumentPart$0, ArgumentPart$1];
function ArgumentPart(ctx, state2) {
  return (0, import_lib2.$EVENT_C)(ctx, state2, "ArgumentPart", ArgumentPart$$);
}
var BinaryOpExpression$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(UnaryExpression, (0, import_lib2.$Q)(BinaryOpRHS)), function($skip, $loc, $0, $1, $2) {
  if (!$2.length) return $1;
  return processBinaryOpExpression($0);
});
function BinaryOpExpression(ctx, state2) {
  return (0, import_lib2.$EVENT)(ctx, state2, "BinaryOpExpression", BinaryOpExpression$0);
}
var BinaryOpNotDedented$0 = (0, import_lib2.$T)((0, import_lib2.$S)((0, import_lib2.$N)(NewlineBinaryOpAllowed), (0, import_lib2.$E)(_)), function(value) {
  return value[1];
});
var BinaryOpNotDedented$1 = (0, import_lib2.$T)((0, import_lib2.$S)(NewlineBinaryOpAllowed, (0, import_lib2.$C)(NestedBinaryOpAllowed, (0, import_lib2.$N)(Nested)), NotDedented), function(value) {
  return value[1];
});
var BinaryOpNotDedented$$ = [BinaryOpNotDedented$0, BinaryOpNotDedented$1];
function BinaryOpNotDedented(ctx, state2) {
  return (0, import_lib2.$EVENT_C)(ctx, state2, "BinaryOpNotDedented", BinaryOpNotDedented$$);
}
var BinaryOpRHS$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(BinaryOpNotDedented, IsLike, (0, import_lib2.$E)(_), PatternExpressionList), function($skip, $loc, $0, $1, $2, $3, $4) {
  var ws1 = $1;
  var op = $2;
  var ws2 = $3;
  var patterns = $4;
  return [ws1, op, ws2, patterns];
});
var BinaryOpRHS$1 = (0, import_lib2.$TS)((0, import_lib2.$S)(BinaryOp, RHS), function($skip, $loc, $0, $1, $2) {
  var op = $1;
  var rhs = $2;
  return [[], op, [], rhs];
});
var BinaryOpRHS$2 = (0, import_lib2.$TS)((0, import_lib2.$S)(NewlineBinaryOpAllowed, NotDedentedBinaryOp, WRHS), function($skip, $loc, $0, $1, $2, $3) {
  var op = $2;
  var rhs = $3;
  return [...op, ...rhs];
});
var BinaryOpRHS$3 = (0, import_lib2.$T)((0, import_lib2.$S)((0, import_lib2.$N)(NewlineBinaryOpAllowed), SingleLineBinaryOpRHS), function(value) {
  return value[1];
});
var BinaryOpRHS$$ = [BinaryOpRHS$0, BinaryOpRHS$1, BinaryOpRHS$2, BinaryOpRHS$3];
function BinaryOpRHS(ctx, state2) {
  return (0, import_lib2.$EVENT_C)(ctx, state2, "BinaryOpRHS", BinaryOpRHS$$);
}
var IsLike$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(Is, (0, import_lib2.$E)(_), (0, import_lib2.$E)((0, import_lib2.$S)(OmittedNegation, (0, import_lib2.$E)(_))), Like), function($skip, $loc, $0, $1, $2, $3, $4) {
  var not = $3;
  return {
    type: "PatternTest",
    children: $0,
    special: true,
    negated: !!not
  };
});
function IsLike(ctx, state2) {
  return (0, import_lib2.$EVENT)(ctx, state2, "IsLike", IsLike$0);
}
var WRHS$0 = (0, import_lib2.$T)((0, import_lib2.$S)(NestedBulletedArray), function(value) {
  return [void 0, value[0]];
});
var WRHS$1 = (0, import_lib2.$T)((0, import_lib2.$S)(NestedImplicitObjectLiteral), function(value) {
  return [void 0, value[0]];
});
var WRHS$2 = (0, import_lib2.$TS)((0, import_lib2.$S)(PushIndent, (0, import_lib2.$E)((0, import_lib2.$S)((0, import_lib2.$S)(Nested, (0, import_lib2.$E)(_)), RHS)), PopIndent), function($skip, $loc, $0, $1, $2, $3) {
  var wrhs = $2;
  if (!wrhs) return $skip;
  return wrhs;
});
var WRHS$3 = (0, import_lib2.$S)((0, import_lib2.$C)((0, import_lib2.$S)(EOS, __), _), RHS);
var WRHS$$ = [WRHS$0, WRHS$1, WRHS$2, WRHS$3];
function WRHS(ctx, state2) {
  return (0, import_lib2.$EVENT_C)(ctx, state2, "WRHS", WRHS$$);
}
var SingleLineBinaryOpRHS$0 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$E)(_), BinaryOp, (0, import_lib2.$C)((0, import_lib2.$S)(EOS, __), _), RHS), function($skip, $loc, $0, $1, $2, $3, $4) {
  var ws1 = $1;
  var op = $2;
  var ws2 = $3;
  var rhs = $4;
  return [ws1 || [], op, ws2, rhs];
});
function SingleLineBinaryOpRHS(ctx, state2) {
  return (0, import_lib2.$EVENT)(ctx, state2, "SingleLineBinaryOpRHS", SingleLineBinaryOpRHS$0);
}
var RHS$0 = ExpressionizedStatementWithTrailingCallExpressions;
var RHS$1 = UnaryExpression;
var RHS$$ = [RHS$0, RHS$1];
function RHS(ctx, state2) {
  return (0, import_lib2.$EVENT_C)(ctx, state2, "RHS", RHS$$);
}
var UnaryExpression$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(IndentedApplicationAllowed, (0, import_lib2.$P)(UnaryOp), (0, import_lib2.$C)(ArrayLiteral, NestedArgumentList), (0, import_lib2.$N)(CallExpressionRest), (0, import_lib2.$E)(UnaryPostfix)), function($skip, $loc, $0, $1, $2, $3, $4, $5) {
  var pre = $2;
  var args = $3;
  var post = $5;
  return processUnaryNestedExpression(pre, args, post) ?? $skip;
});
var UnaryExpression$1 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$Q)(UnaryOp), UnaryBody, (0, import_lib2.$E)(UnaryPostfix)), function($skip, $loc, $0, $1, $2, $3) {
  var pre = $1;
  var exp = $2;
  var post = $3;
  return processUnaryExpression(pre, exp, post);
});
var UnaryExpression$$ = [UnaryExpression$0, UnaryExpression$1];
function UnaryExpression(ctx, state2) {
  return (0, import_lib2.$EVENT_C)(ctx, state2, "UnaryExpression", UnaryExpression$$);
}
var UnaryWithoutParenthesizedAssignment$0 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$Q)(UnaryOp), UnaryWithoutParenthesizedAssignmentBody, (0, import_lib2.$E)(UnaryPostfix)), function($skip, $loc, $0, $1, $2, $3) {
  var pre = $1;
  var exp = $2;
  var post = $3;
  return processUnaryExpression(pre, exp, post);
});
function UnaryWithoutParenthesizedAssignment(ctx, state2) {
  return (0, import_lib2.$EVENT)(ctx, state2, "UnaryWithoutParenthesizedAssignment", UnaryWithoutParenthesizedAssignment$0);
}
var UnaryBody$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(CoffeeDoEnabled, Do, MaybeNestedCoffeeDoBody), function($skip, $loc, $0, $1, $2, $3) {
  var body = $3;
  return processCoffeeDo(...body);
});
var UnaryBody$1 = ParenthesizedAssignment;
var UnaryBody$2 = ExpressionizedStatementWithTrailingCallExpressions;
var UnaryBody$3 = UpdateExpression;
var UnaryBody$4 = NestedExpressionizedStatement;
var UnaryBody$$ = [UnaryBody$0, UnaryBody$1, UnaryBody$2, UnaryBody$3, UnaryBody$4];
function UnaryBody(ctx, state2) {
  return (0, import_lib2.$EVENT_C)(ctx, state2, "UnaryBody", UnaryBody$$);
}
var MaybeNestedCoffeeDoBody$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(PushIndent, (0, import_lib2.$E)((0, import_lib2.$S)(Nested, CoffeeDoBody)), PopIndent), function($skip, $loc, $0, $1, $2, $3) {
  if (!$2) return $skip;
  return $2;
});
var MaybeNestedCoffeeDoBody$1 = (0, import_lib2.$S)((0, import_lib2.$E)(_), CoffeeDoBody);
var MaybeNestedCoffeeDoBody$$ = [MaybeNestedCoffeeDoBody$0, MaybeNestedCoffeeDoBody$1];
function MaybeNestedCoffeeDoBody(ctx, state2) {
  return (0, import_lib2.$EVENT_C)(ctx, state2, "MaybeNestedCoffeeDoBody", MaybeNestedCoffeeDoBody$$);
}
var CoffeeDoBody$0 = ArrowFunction;
var CoffeeDoBody$1 = (0, import_lib2.$S)(LeftHandSideExpression, (0, import_lib2.$N)((0, import_lib2.$S)(__, AssignmentOpSymbol)));
var CoffeeDoBody$2 = Expression;
var CoffeeDoBody$$ = [CoffeeDoBody$0, CoffeeDoBody$1, CoffeeDoBody$2];
function CoffeeDoBody(ctx, state2) {
  return (0, import_lib2.$EVENT_C)(ctx, state2, "CoffeeDoBody", CoffeeDoBody$$);
}
var UnaryWithoutParenthesizedAssignmentBody$0 = UpdateExpression;
var UnaryWithoutParenthesizedAssignmentBody$1 = ExpressionizedStatementWithTrailingCallExpressions;
var UnaryWithoutParenthesizedAssignmentBody$2 = NestedExpressionizedStatement;
var UnaryWithoutParenthesizedAssignmentBody$$ = [UnaryWithoutParenthesizedAssignmentBody$0, UnaryWithoutParenthesizedAssignmentBody$1, UnaryWithoutParenthesizedAssignmentBody$2];
function UnaryWithoutParenthesizedAssignmentBody(ctx, state2) {
  return (0, import_lib2.$EVENT_C)(ctx, state2, "UnaryWithoutParenthesizedAssignmentBody", UnaryWithoutParenthesizedAssignmentBody$$);
}
var ParenthesizedAssignment$0 = (0, import_lib2.$S)(InsertOpenParen, (0, import_lib2.$C)(ActualAssignment, ArrowFunction), InsertCloseParen);
function ParenthesizedAssignment(ctx, state2) {
  return (0, import_lib2.$EVENT)(ctx, state2, "ParenthesizedAssignment", ParenthesizedAssignment$0);
}
var UnaryPostfix$0 = QuestionMark;
var UnaryPostfix$1 = (0, import_lib2.$P)(TypePostfix);
var UnaryPostfix$$ = [UnaryPostfix$0, UnaryPostfix$1];
function UnaryPostfix(ctx, state2) {
  return (0, import_lib2.$EVENT_C)(ctx, state2, "UnaryPostfix", UnaryPostfix$$);
}
var TypePostfix$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(_, NWTypePostfix), function($skip, $loc, $0, $1, $2) {
  var ws = $1;
  var postfix = $2;
  return prepend(ws, postfix);
});
var TypePostfix$1 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$Y)(EOS), BinaryOpNotDedented, (0, import_lib2.$E)(_), NWTypePostfix), function($skip, $loc, $0, $1, $2, $3, $4) {
  var indent = $2;
  var ws = $3;
  var postfix = $4;
  return prepend(ws || " ", postfix);
});
var TypePostfix$$ = [TypePostfix$0, TypePostfix$1];
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
    ts: true,
    children: [{ $loc: $1.$loc, token: "satisfies" }, $2, $3]
  };
});
var NWTypePostfix$1 = (0, import_lib2.$TS)((0, import_lib2.$S)(As, (0, import_lib2.$E)(ExclamationPoint), (0, import_lib2.$C)(Type, (0, import_lib2.$S)(__, Const))), function($skip, $loc, $0, $1, $2, $3) {
  var as = $1;
  var ex = $2;
  var type = $3;
  let children;
  if (ex) {
    children = [{ $loc: ex.$loc, token: "as unknown " }, as, type];
  } else {
    children = [as, type];
  }
  return { ts: true, children };
});
var NWTypePostfix$2 = (0, import_lib2.$TS)((0, import_lib2.$S)(Satisfies, Type), function($skip, $loc, $0, $1, $2) {
  return { ts: true, children: $0 };
});
var NWTypePostfix$$ = [NWTypePostfix$0, NWTypePostfix$1, NWTypePostfix$2];
function NWTypePostfix(ctx, state2) {
  return (0, import_lib2.$EVENT_C)(ctx, state2, "NWTypePostfix", NWTypePostfix$$);
}
var UpdateExpression$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(UpdateExpressionSymbol, (0, import_lib2.$N)(Whitespace), UnaryWithoutParenthesizedAssignment), function($skip, $loc, $0, $1, $2, $3) {
  var symbol = $1;
  var assigned = $3;
  return {
    type: "UpdateExpression",
    assigned,
    children: [symbol, assigned]
  };
});
var UpdateExpression$1 = (0, import_lib2.$TS)((0, import_lib2.$S)(LeftHandSideExpression, (0, import_lib2.$E)((0, import_lib2.$S)(UpdateExpressionSymbol, (0, import_lib2.$EXPECT)($R4, "UpdateExpression /(?!\\p{ID_Start}|[_$0-9(\\[{])/")))), function($skip, $loc, $0, $1, $2) {
  if (!$2) return $1;
  return {
    type: "UpdateExpression",
    assigned: $1,
    children: [$1, $2[0]]
  };
});
var UpdateExpression$$ = [UpdateExpression$0, UpdateExpression$1];
function UpdateExpression(ctx, state2) {
  return (0, import_lib2.$EVENT_C)(ctx, state2, "UpdateExpression", UpdateExpression$$);
}
var UpdateExpressionSymbol$0 = (0, import_lib2.$TV)((0, import_lib2.$C)((0, import_lib2.$EXPECT)($L9, 'UpdateExpressionSymbol "++"'), (0, import_lib2.$EXPECT)($L10, 'UpdateExpressionSymbol "--"')), function($skip, $loc, $0, $1) {
  return { $loc, token: $1 };
});
var UpdateExpressionSymbol$1 = (0, import_lib2.$TV)((0, import_lib2.$EXPECT)($L11, 'UpdateExpressionSymbol "\u29FA"'), function($skip, $loc, $0, $1) {
  return { $loc, token: "++" };
});
var UpdateExpressionSymbol$2 = (0, import_lib2.$TV)((0, import_lib2.$EXPECT)($L12, 'UpdateExpressionSymbol "\u2014"'), function($skip, $loc, $0, $1) {
  return { $loc, token: "--" };
});
var UpdateExpressionSymbol$$ = [UpdateExpressionSymbol$0, UpdateExpressionSymbol$1, UpdateExpressionSymbol$2];
function UpdateExpressionSymbol(ctx, state2) {
  return (0, import_lib2.$EVENT_C)(ctx, state2, "UpdateExpressionSymbol", UpdateExpressionSymbol$$);
}
var AssignmentExpression$0 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$E)(_), ActualAssignment), function($skip, $loc, $0, $1, $2) {
  var ws = $1;
  var assign = $2;
  return prepend(ws, assign);
});
var AssignmentExpression$1 = PipelineExpression;
var AssignmentExpression$2 = SingleLineAssignmentExpression;
var AssignmentExpression$3 = (0, import_lib2.$S)((0, import_lib2.$S)(EOS, (0, import_lib2.$E)(_)), AssignmentExpressionTail);
var AssignmentExpression$$ = [AssignmentExpression$0, AssignmentExpression$1, AssignmentExpression$2, AssignmentExpression$3];
function AssignmentExpression(ctx, state2) {
  return (0, import_lib2.$EVENT_C)(ctx, state2, "AssignmentExpression", AssignmentExpression$$);
}
var NonPipelineAssignmentExpression$0 = NonPipelineSingleLineAssignmentExpression;
var NonPipelineAssignmentExpression$1 = (0, import_lib2.$S)((0, import_lib2.$S)(EOS, (0, import_lib2.$E)(_)), NonPipelineAssignmentExpressionTail);
var NonPipelineAssignmentExpression$$ = [NonPipelineAssignmentExpression$0, NonPipelineAssignmentExpression$1];
function NonPipelineAssignmentExpression(ctx, state2) {
  return (0, import_lib2.$EVENT_C)(ctx, state2, "NonPipelineAssignmentExpression", NonPipelineAssignmentExpression$$);
}
var SingleLineAssignmentExpression$0 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$E)(_), AssignmentExpressionTail), function($skip, $loc, $0, $1, $2) {
  var ws = $1;
  var tail = $2;
  return prepend(ws, tail);
});
function SingleLineAssignmentExpression(ctx, state2) {
  return (0, import_lib2.$EVENT)(ctx, state2, "SingleLineAssignmentExpression", SingleLineAssignmentExpression$0);
}
var NonPipelineSingleLineAssignmentExpression$0 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$E)(_), NonPipelineAssignmentExpressionTail), function($skip, $loc, $0, $1, $2) {
  var ws = $1;
  var tail = $2;
  return prepend(ws, tail);
});
function NonPipelineSingleLineAssignmentExpression(ctx, state2) {
  return (0, import_lib2.$EVENT)(ctx, state2, "NonPipelineSingleLineAssignmentExpression", NonPipelineSingleLineAssignmentExpression$0);
}
var AssignmentExpressionTail$0 = YieldExpression;
var AssignmentExpressionTail$1 = ArrowFunction;
var AssignmentExpressionTail$2 = ActualAssignment;
var AssignmentExpressionTail$3 = ConditionalExpression;
var AssignmentExpressionTail$$ = [AssignmentExpressionTail$0, AssignmentExpressionTail$1, AssignmentExpressionTail$2, AssignmentExpressionTail$3];
function AssignmentExpressionTail(ctx, state2) {
  return (0, import_lib2.$EVENT_C)(ctx, state2, "AssignmentExpressionTail", AssignmentExpressionTail$$);
}
var NonPipelineAssignmentExpressionTail$0 = YieldExpression;
var NonPipelineAssignmentExpressionTail$1 = ArrowFunction;
var NonPipelineAssignmentExpressionTail$2 = NonPipelineActualAssignment;
var NonPipelineAssignmentExpressionTail$3 = ConditionalExpression;
var NonPipelineAssignmentExpressionTail$$ = [NonPipelineAssignmentExpressionTail$0, NonPipelineAssignmentExpressionTail$1, NonPipelineAssignmentExpressionTail$2, NonPipelineAssignmentExpressionTail$3];
function NonPipelineAssignmentExpressionTail(ctx, state2) {
  return (0, import_lib2.$EVENT_C)(ctx, state2, "NonPipelineAssignmentExpressionTail", NonPipelineAssignmentExpressionTail$$);
}
var ActualAssignment$0 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$P)((0, import_lib2.$S)(NotDedented, UpdateExpression, WAssignmentOp)), MaybeNestedExpression), function($skip, $loc, $0, $1, $2) {
  $1 = $1.map((x) => [x[0], x[1], ...x[2]]);
  $0 = [$1, $2];
  return {
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
  $1 = $1.map((x) => [x[0], x[1], ...x[2]]);
  $0 = [$1, $2];
  return {
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
    const [star, expression] = $2;
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
var ArrowFunction$0 = ThinArrowFunction;
var ArrowFunction$1 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$E)((0, import_lib2.$S)(Async, _)), ArrowParameters, (0, import_lib2.$E)(ReturnTypeSuffix), FatArrow, FatArrowBody), function($skip, $loc, $0, $1, $2, $3, $4, $5) {
  var async = $1;
  var parameters = $2;
  var returnType = $3;
  var arrow = $4;
  var expOrBlock = $5;
  if (!async) async = [];
  return {
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
});
var ArrowFunction$$ = [ArrowFunction$0, ArrowFunction$1];
function ArrowFunction(ctx, state2) {
  return (0, import_lib2.$EVENT_C)(ctx, state2, "ArrowFunction", ArrowFunction$$);
}
var FatArrow$0 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$E)(_), FatArrowToken), function($skip, $loc, $0, $1, $2) {
  var ws = $1;
  var arrow = $2;
  if (!ws) ws = " ";
  return [ws, arrow];
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
var TrailingOperator$0 = (0, import_lib2.$S)((0, import_lib2.$E)(_), (0, import_lib2.$C)(BinaryOp, AssignmentOp, Dot, QuestionMark));
var TrailingOperator$1 = (0, import_lib2.$S)(_, OperatorAssignmentOp);
var TrailingOperator$2 = TrailingDeclaration;
var TrailingOperator$$ = [TrailingOperator$0, TrailingOperator$1, TrailingOperator$2];
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
  const expressions = [["", exp]];
  return {
    type: "BlockStatement",
    bare: true,
    expressions,
    children: [expressions],
    implicitlyReturned: true
  };
});
var FatArrowBody$1 = NoCommaBracedOrEmptyBlock;
var FatArrowBody$$ = [FatArrowBody$0, FatArrowBody$1];
function FatArrowBody(ctx, state2) {
  return (0, import_lib2.$EVENT_C)(ctx, state2, "FatArrowBody", FatArrowBody$$);
}
var ConditionalExpression$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(ShortCircuitExpression, (0, import_lib2.$E)(TernaryRest)), function($skip, $loc, $0, $1, $2) {
  if ($2) {
    return [$1, ...$2];
  }
  return $1;
});
function ConditionalExpression(ctx, state2) {
  return (0, import_lib2.$EVENT)(ctx, state2, "ConditionalExpression", ConditionalExpression$0);
}
var TernaryRest$0 = NestedTernaryRest;
var TernaryRest$1 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$N)(CoffeeBinaryExistentialEnabled), (0, import_lib2.$Y)((0, import_lib2.$EXPECT)($R5, "TernaryRest /[ \\t]/")), _, QuestionMark, MaybeNestedExpression, __, Colon, MaybeNestedExpression), function($skip, $loc, $0, $1, $2, $3, $4, $5, $6, $7, $8) {
  return $0.slice(2);
});
var TernaryRest$$ = [TernaryRest$0, TernaryRest$1];
function TernaryRest(ctx, state2) {
  return (0, import_lib2.$EVENT_C)(ctx, state2, "TernaryRest", TernaryRest$$);
}
var NestedTernaryRest$0 = (0, import_lib2.$S)(Nested, QuestionMark, MaybeNestedExpression, Nested, Colon, MaybeNestedExpression);
var NestedTernaryRest$1 = (0, import_lib2.$TS)((0, import_lib2.$S)(PushIndent, (0, import_lib2.$E)((0, import_lib2.$S)(Nested, QuestionMark, MaybeNestedExpression, Nested, Colon, MaybeNestedExpression)), PopIndent), function($skip, $loc, $0, $1, $2, $3) {
  if ($2) return $2;
  return $skip;
});
var NestedTernaryRest$$ = [NestedTernaryRest$0, NestedTernaryRest$1];
function NestedTernaryRest(ctx, state2) {
  return (0, import_lib2.$EVENT_C)(ctx, state2, "NestedTernaryRest", NestedTernaryRest$$);
}
var ShortCircuitExpression$0 = BinaryOpExpression;
function ShortCircuitExpression(ctx, state2) {
  return (0, import_lib2.$EVENT)(ctx, state2, "ShortCircuitExpression", ShortCircuitExpression$0);
}
var PipelineExpression$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(PipelineAllowed, (0, import_lib2.$E)(_), PipelineHeadItem, PipelineExpressionBody), function($skip, $loc, $0, $1, $2, $3, $4) {
  var ws = $2;
  var head = $3;
  var body = $4;
  if (head.type === "ArrowFunction" && head.ampersandBlock) {
    const expressions = [{
      type: "PipelineExpression",
      children: [ws, head.block.expressions[0], body]
    }];
    const block = { ...head.block, expressions, children: [expressions] };
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
  var first = $1;
  var rest = $3;
  if (!rest.length) return $skip;
  return [
    ...first,
    ...rest.map(([nested, line]) => [nested, ...line]).flat()
  ];
});
var PipelineExpressionBody$1 = (0, import_lib2.$P)((0, import_lib2.$S)(NotDedented, Pipe, __, PipelineTailItem));
var PipelineExpressionBody$$ = [PipelineExpressionBody$0, PipelineExpressionBody$1];
function PipelineExpressionBody(ctx, state2) {
  return (0, import_lib2.$EVENT_C)(ctx, state2, "PipelineExpressionBody", PipelineExpressionBody$$);
}
var PipelineExpressionBodySameLine$0 = (0, import_lib2.$Q)((0, import_lib2.$S)((0, import_lib2.$E)(_), Pipe, __, PipelineTailItem));
function PipelineExpressionBodySameLine(ctx, state2) {
  return (0, import_lib2.$EVENT)(ctx, state2, "PipelineExpressionBodySameLine", PipelineExpressionBodySameLine$0);
}
var PipelineHeadItem$0 = NonPipelineExpression;
var PipelineHeadItem$1 = OptimizedParenthesizedExpression;
var PipelineHeadItem$$ = [PipelineHeadItem$0, PipelineHeadItem$1];
function PipelineHeadItem(ctx, state2) {
  return (0, import_lib2.$EVENT_C)(ctx, state2, "PipelineHeadItem", PipelineHeadItem$$);
}
var PipelineTailItem$0 = (0, import_lib2.$T)((0, import_lib2.$S)((0, import_lib2.$C)(AwaitOp, Return, Throw), (0, import_lib2.$N)(AccessStart), (0, import_lib2.$N)(MaybeParenNestedExpression)), function(value) {
  return value[0];
});
var PipelineTailItem$1 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$TEXT)((0, import_lib2.$S)(Yield, (0, import_lib2.$E)((0, import_lib2.$S)((0, import_lib2.$E)(_), Star)))), (0, import_lib2.$N)(AccessStart), (0, import_lib2.$N)(MaybeParenNestedExpression)), function($skip, $loc, $0, $1, $2, $3) {
  return { $loc, token: $1, type: "Yield" };
});
var PipelineTailItem$2 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$EXPECT)($L15, 'PipelineTailItem "import"'), (0, import_lib2.$N)(AccessStart)), function($skip, $loc, $0, $1, $2) {
  return {
    type: "Identifier",
    children: [$1]
  };
});
var PipelineTailItem$3 = (0, import_lib2.$TS)((0, import_lib2.$S)(NWTypePostfix, (0, import_lib2.$Q)(TypePostfix)), function($skip, $loc, $0, $1, $2) {
  return makeAmpersandFunction({
    body: [" ", $1, ...$2]
  });
});
var PipelineTailItem$4 = (0, import_lib2.$T)((0, import_lib2.$S)(PipelineHeadItem), function(value) {
  return value[0];
});
var PipelineTailItem$$ = [PipelineTailItem$0, PipelineTailItem$1, PipelineTailItem$2, PipelineTailItem$3, PipelineTailItem$4];
function PipelineTailItem(ctx, state2) {
  return (0, import_lib2.$EVENT_C)(ctx, state2, "PipelineTailItem", PipelineTailItem$$);
}
var PrimaryExpression$0 = ObjectLiteral;
var PrimaryExpression$1 = ArrayLiteral;
var PrimaryExpression$2 = ThisLiteral;
var PrimaryExpression$3 = TemplateLiteral;
var PrimaryExpression$4 = Literal;
var PrimaryExpression$5 = FunctionExpression;
var PrimaryExpression$6 = IdentifierReference;
var PrimaryExpression$7 = ClassExpression;
var PrimaryExpression$8 = RegularExpressionLiteral;
var PrimaryExpression$9 = OptimizedParenthesizedExpression;
var PrimaryExpression$10 = Placeholder;
var PrimaryExpression$11 = SymbolLiteral;
var PrimaryExpression$12 = JSXImplicitFragment;
var PrimaryExpression$$ = [PrimaryExpression$0, PrimaryExpression$1, PrimaryExpression$2, PrimaryExpression$3, PrimaryExpression$4, PrimaryExpression$5, PrimaryExpression$6, PrimaryExpression$7, PrimaryExpression$8, PrimaryExpression$9, PrimaryExpression$10, PrimaryExpression$11, PrimaryExpression$12];
function PrimaryExpression(ctx, state2) {
  return (0, import_lib2.$EVENT_C)(ctx, state2, "PrimaryExpression", PrimaryExpression$$);
}
var OptimizedParenthesizedExpression$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(ParenthesizedExpression), function($skip, $loc, $0, $1) {
  const { expression } = $1;
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
  const [expression, ws, close] = $3;
  if (expression.type === "ParenthesizedExpression" && expression.implicit) {
    return {
      ...expression,
      children: [open, expression.expression, ws, close],
      implicit: false
    };
  }
  return {
    type: "ParenthesizedExpression",
    children: [open, expression, ws, close],
    expression
  };
});
function ParenthesizedExpression(ctx, state2) {
  return (0, import_lib2.$EVENT)(ctx, state2, "ParenthesizedExpression", ParenthesizedExpression$0);
}
var Placeholder$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(Dot, (0, import_lib2.$N)((0, import_lib2.$EXPECT)($R6, "Placeholder /\\p{ID_Continue}|[\\u200C\\u200D$.#{=]/")), (0, import_lib2.$E)(PlaceholderTypeSuffix)), function($skip, $loc, $0, $1, $2, $3) {
  var dot = $1;
  var typeSuffix = $3;
  return {
    type: "Placeholder",
    subtype: ".",
    typeSuffix,
    children: [dot]
  };
});
var Placeholder$1 = (0, import_lib2.$TS)((0, import_lib2.$S)(Ampersand, (0, import_lib2.$N)((0, import_lib2.$EXPECT)($R7, "Placeholder /[&=]/")), (0, import_lib2.$E)(PlaceholderTypeSuffix)), function($skip, $loc, $0, $1, $2, $3) {
  var amp = $1;
  var typeSuffix = $3;
  return {
    type: "Placeholder",
    subtype: "&",
    typeSuffix,
    children: [amp]
  };
});
var Placeholder$2 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$Y)(ExplicitAccessStart), (0, import_lib2.$Y)((0, import_lib2.$C)(PropertyAccess, PropertyGlob)), (0, import_lib2.$N)(NumericLiteral)), function($skip, $loc, $0, $1, $2, $3) {
  return {
    type: "Placeholder",
    subtype: "&",
    children: [{ token: "&" }]
  };
});
var Placeholder$$ = [Placeholder$0, Placeholder$1, Placeholder$2];
function Placeholder(ctx, state2) {
  return (0, import_lib2.$EVENT_C)(ctx, state2, "Placeholder", Placeholder$$);
}
var PlaceholderTypeSuffix$0 = (0, import_lib2.$T)((0, import_lib2.$S)((0, import_lib2.$E)(QuestionMark), Colon, MaybeNestedTypePrimary), function(value) {
  var optional = value[0];
  var t = value[2];
  return { "type": "TypeSuffix", "ts": true, "optional": optional, "t": t, "children": value };
});
function PlaceholderTypeSuffix(ctx, state2) {
  return (0, import_lib2.$EVENT)(ctx, state2, "PlaceholderTypeSuffix", PlaceholderTypeSuffix$0);
}
var ClassDeclaration$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(ClassExpression), function($skip, $loc, $0, $1) {
  if ($1.id) return $1;
  return makeLeftHandSideExpression($1);
});
function ClassDeclaration(ctx, state2) {
  return (0, import_lib2.$EVENT)(ctx, state2, "ClassDeclaration", ClassDeclaration$0);
}
var ClassExpression$0 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$E)(Decorators), (0, import_lib2.$E)((0, import_lib2.$S)(Abstract, __)), Class, (0, import_lib2.$N)((0, import_lib2.$EXPECT)($L16, 'ClassExpression ":"')), (0, import_lib2.$E)(ClassBinding), (0, import_lib2.$E)(ClassHeritage), ClassBody), function($skip, $loc, $0, $1, $2, $3, $4, $5, $6, $7) {
  var decorators = $1;
  var abstract = $2;
  var binding = $5;
  var heritage = $6;
  var body = $7;
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
  var extendsClause = $1;
  var withClause = $2;
  var implementsClause = $3;
  if (withClause) {
    extendsClause = convertWithClause(withClause, extendsClause);
  }
  return [extendsClause, implementsClause];
});
var ClassHeritage$1 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$E)(WithClause), (0, import_lib2.$E)(ImplementsClause)), function($skip, $loc, $0, $1, $2) {
  var withClause = $1;
  var implementsClause = $2;
  if (withClause) return [convertWithClause(withClause), implementsClause];
  if (implementsClause) return implementsClause;
  return $skip;
});
var ClassHeritage$$ = [ClassHeritage$0, ClassHeritage$1];
function ClassHeritage(ctx, state2) {
  return (0, import_lib2.$EVENT_C)(ctx, state2, "ClassHeritage", ClassHeritage$$);
}
var ExtendsClause$0 = (0, import_lib2.$S)(ExtendsToken, __, ExtendsTarget);
function ExtendsClause(ctx, state2) {
  return (0, import_lib2.$EVENT)(ctx, state2, "ExtendsClause", ExtendsClause$0);
}
var WithClause$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(NotDedented, With, PushIndent, (0, import_lib2.$Q)((0, import_lib2.$S)(Nested, Expression, (0, import_lib2.$E)(_), (0, import_lib2.$E)(Comma))), PopIndent), function($skip, $loc, $0, $1, $2, $3, $4, $5) {
  var targets = $4;
  if (!targets.length) return $skip;
  targets = targets.map(($) => $.slice(0, -1));
  return {
    type: "WithClause",
    children: $0,
    targets
  };
});
var WithClause$1 = (0, import_lib2.$TS)((0, import_lib2.$S)(NotDedented, With, NotDedented, ExtendsTarget, (0, import_lib2.$Q)((0, import_lib2.$S)((0, import_lib2.$E)(_), Comma, NotDedented, ExtendsTarget))), function($skip, $loc, $0, $1, $2, $3, $4, $5) {
  var ws = $3;
  var t = $4;
  var rest = $5;
  return {
    type: "WithClause",
    children: $0,
    targets: [[ws, t], ...rest.map(([ws1, _comma, ws2, target]) => [prepend(ws1, ws2), target])]
  };
});
var WithClause$$ = [WithClause$0, WithClause$1];
function WithClause(ctx, state2) {
  return (0, import_lib2.$EVENT_C)(ctx, state2, "WithClause", WithClause$$);
}
var ExtendsToken$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(NotDedented, InsertSpace, ExtendsShorthand, (0, import_lib2.$E)((0, import_lib2.$EXPECT)($L17, 'ExtendsToken " "'))), function($skip, $loc, $0, $1, $2, $3, $4) {
  var ws = $1;
  var s = $2;
  var t = $3;
  return {
    type: "Extends",
    children: [
      ws.length ? ws : s,
      t
    ]
  };
});
var ExtendsToken$1 = (0, import_lib2.$TS)((0, import_lib2.$S)(NotDedented, Extends), function($skip, $loc, $0, $1, $2) {
  return {
    type: "Extends",
    children: $0
  };
});
var ExtendsToken$$ = [ExtendsToken$0, ExtendsToken$1];
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
  var l = $1;
  var ws1 = $2;
  var ws2 = $3;
  var t = $4;
  const ws = ws1 && ws2 ? [ws1, ws2] : ws1 || ws2 || { $loc: l.$loc, token: " " };
  return {
    type: "Extends",
    negated: true,
    children: [ws, t]
  };
});
var NotExtendsToken$1 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$E)(_), OmittedNegation, Extends), function($skip, $loc, $0, $1, $2, $3) {
  return {
    type: "Extends",
    negated: true,
    children: $0
  };
});
var NotExtendsToken$$ = [NotExtendsToken$0, NotExtendsToken$1];
function NotExtendsToken(ctx, state2) {
  return (0, import_lib2.$EVENT_C)(ctx, state2, "NotExtendsToken", NotExtendsToken$$);
}
var OmittedNegation$0 = (0, import_lib2.$T)((0, import_lib2.$S)(ExclamationPoint), function(value) {
  return "";
});
var OmittedNegation$1 = (0, import_lib2.$T)((0, import_lib2.$S)(Not, (0, import_lib2.$E)((0, import_lib2.$EXPECT)($L17, 'OmittedNegation " "')), (0, import_lib2.$E)(_)), function(value) {
  return value[2];
});
var OmittedNegation$$ = [OmittedNegation$0, OmittedNegation$1];
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
  var i = $1;
  var targets = $3;
  if (!targets.length) return $skip;
  const last = targets.at(-1).slice(0, -1);
  targets = targets.slice(0, -1).concat(last);
  return {
    ts: true,
    children: [i, targets]
  };
});
var ImplementsClause$1 = (0, import_lib2.$TS)((0, import_lib2.$S)(ImplementsToken, ImplementsTarget, (0, import_lib2.$Q)((0, import_lib2.$S)((0, import_lib2.$E)(_), Comma, ImplementsTarget))), function($skip, $loc, $0, $1, $2, $3) {
  return {
    ts: true,
    children: $0
  };
});
var ImplementsClause$$ = [ImplementsClause$0, ImplementsClause$1];
function ImplementsClause(ctx, state2) {
  return (0, import_lib2.$EVENT_C)(ctx, state2, "ImplementsClause", ImplementsClause$$);
}
var ImplementsToken$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(Loc, NotDedented, ImplementsShorthand, (0, import_lib2.$E)((0, import_lib2.$EXPECT)($L17, 'ImplementsToken " "'))), function($skip, $loc, $0, $1, $2, $3, $4) {
  var l = $1;
  var ws = $2;
  var token = $3;
  const children = [...ws, token];
  if (!ws.length) {
    children.unshift({ $loc: l.$loc, token: " " });
  }
  return { children };
});
var ImplementsToken$1 = (0, import_lib2.$TS)((0, import_lib2.$S)(NotDedented, (0, import_lib2.$EXPECT)($L19, 'ImplementsToken "implements"'), NonIdContinue), function($skip, $loc, $0, $1, $2, $3) {
  $2 = { $loc, token: $2 };
  return [$1, $2];
});
var ImplementsToken$$ = [ImplementsToken$0, ImplementsToken$1];
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
  var ws1 = $1;
  var open = $2;
  var expressions = $4;
  var ws2 = $6;
  var close = $7;
  if (!expressions) expressions = [];
  return {
    type: "BlockStatement",
    subtype: "ClassBody",
    children: [ws1, open, expressions, ws2, close],
    expressions
  };
});
var ClassBody$1 = (0, import_lib2.$TS)((0, import_lib2.$S)(InsertOpenBrace, (0, import_lib2.$E)(NestedClassElements), InsertNewline, InsertIndent, InsertCloseBrace), function($skip, $loc, $0, $1, $2, $3, $4, $5) {
  var expressions = $2;
  if (!expressions) expressions = $0[1] = [];
  return {
    type: "BlockStatement",
    subtype: "ClassBody",
    children: $0,
    expressions
  };
});
var ClassBody$$ = [ClassBody$0, ClassBody$1];
function ClassBody(ctx, state2) {
  return (0, import_lib2.$EVENT_C)(ctx, state2, "ClassBody", ClassBody$$);
}
var ClassBracedContent$0 = NestedClassElements;
var ClassBracedContent$1 = (0, import_lib2.$TS)((0, import_lib2.$S)(ForbidNewlineBinaryOp, (0, import_lib2.$Q)((0, import_lib2.$S)((0, import_lib2.$S)((0, import_lib2.$E)(_), (0, import_lib2.$N)(EOS)), ClassElement, StatementDelimiter)), RestoreNewlineBinaryOp), function($skip, $loc, $0, $1, $2, $3) {
  var stmts = $2;
  if (!stmts) return $skip;
  return stmts;
});
var ClassBracedContent$$ = [ClassBracedContent$0, ClassBracedContent$1];
function ClassBracedContent(ctx, state2) {
  return (0, import_lib2.$EVENT_C)(ctx, state2, "ClassBracedContent", ClassBracedContent$$);
}
var NestedClassElements$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(PushIndent, (0, import_lib2.$Q)(NestedClassElement), PopIndent), function($skip, $loc, $0, $1, $2, $3) {
  var elements = $2;
  if (!elements.length) return $skip;
  return elements;
});
function NestedClassElements(ctx, state2) {
  return (0, import_lib2.$EVENT)(ctx, state2, "NestedClassElements", NestedClassElements$0);
}
var NestedClassElement$0 = (0, import_lib2.$S)(Nested, ClassElement, StatementDelimiter);
function NestedClassElement(ctx, state2) {
  return (0, import_lib2.$EVENT)(ctx, state2, "NestedClassElement", NestedClassElement$0);
}
var ClassElement$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(CoffeeClassesEnabled, (0, import_lib2.$E)(Decorators), (0, import_lib2.$E)((0, import_lib2.$S)(Declare, (0, import_lib2.$E)(_))), (0, import_lib2.$E)(AccessModifier), (0, import_lib2.$E)((0, import_lib2.$S)(Static, (0, import_lib2.$E)(_))), (0, import_lib2.$E)((0, import_lib2.$S)(Override, (0, import_lib2.$E)(_))), ActualAssignment), function($skip, $loc, $0, $1, $2, $3, $4, $5, $6, $7) {
  var decorators = $2;
  var declare = $3;
  var access = $4;
  var static_ = $5;
  var override = $6;
  var assignment = $7;
  return {
    type: static_ ? "CoffeeClassPublic" : "CoffeeClassPrivate",
    children: [decorators, declare, access, static_, override, assignment],
    assignment
  };
});
var ClassElement$1 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$E)(Decorators), (0, import_lib2.$E)((0, import_lib2.$S)(Declare, (0, import_lib2.$E)(_))), (0, import_lib2.$E)(AccessModifier), (0, import_lib2.$E)((0, import_lib2.$S)(Static, (0, import_lib2.$E)(_))), (0, import_lib2.$E)((0, import_lib2.$S)(Override, (0, import_lib2.$E)(_))), ClassElementDefinition), function($skip, $loc, $0, $1, $2, $3, $4, $5, $6) {
  var decorators = $1;
  var declare = $2;
  var access = $3;
  var static_ = $4;
  var override = $5;
  var definition = $6;
  const ts2 = definition.ts || !!declare;
  if (definition.type === "MultiMethodDefinition") {
    return {
      ...definition,
      ts: ts2,
      children: definition.children.map((c) => {
        return {
          ...c,
          children: [decorators, declare, access, static_, override, ...c.children]
        };
      })
    };
  }
  return {
    ...definition,
    ts: ts2,
    children: [decorators, declare, access, static_, override, ...definition.children]
  };
});
var ClassElement$2 = (0, import_lib2.$TS)((0, import_lib2.$S)(Static, BracedBlock), function($skip, $loc, $0, $1, $2) {
  return {
    type: "ClassStaticBlock",
    children: $0
  };
});
var ClassElement$3 = EmptyStatement;
var ClassElement$$ = [ClassElement$0, ClassElement$1, ClassElement$2, ClassElement$3];
function ClassElement(ctx, state2) {
  return (0, import_lib2.$EVENT_C)(ctx, state2, "ClassElement", ClassElement$$);
}
var ClassElementDefinition$0 = MethodDefinition;
var ClassElementDefinition$1 = FieldDefinition;
var ClassElementDefinition$$ = [ClassElementDefinition$0, ClassElementDefinition$1];
function ClassElementDefinition(ctx, state2) {
  return (0, import_lib2.$EVENT_C)(ctx, state2, "ClassElementDefinition", ClassElementDefinition$$);
}
var ClassSignature$0 = (0, import_lib2.$S)((0, import_lib2.$E)(Decorators), (0, import_lib2.$E)((0, import_lib2.$S)(Abstract, __)), Class, (0, import_lib2.$E)(ClassBinding), (0, import_lib2.$E)(ClassHeritage), ClassSignatureBody);
function ClassSignature(ctx, state2) {
  return (0, import_lib2.$EVENT)(ctx, state2, "ClassSignature", ClassSignature$0);
}
var ClassSignatureBody$0 = (0, import_lib2.$S)(__, OpenBrace, (0, import_lib2.$E)(NestedClassSignatureElements), __, CloseBrace);
var ClassSignatureBody$1 = (0, import_lib2.$S)(InsertOpenBrace, (0, import_lib2.$E)(NestedClassSignatureElements), InsertNewline, InsertIndent, InsertCloseBrace);
var ClassSignatureBody$$ = [ClassSignatureBody$0, ClassSignatureBody$1];
function ClassSignatureBody(ctx, state2) {
  return (0, import_lib2.$EVENT_C)(ctx, state2, "ClassSignatureBody", ClassSignatureBody$$);
}
var NestedClassSignatureElements$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(PushIndent, (0, import_lib2.$Q)(NestedClassSignatureElement), PopIndent), function($skip, $loc, $0, $1, $2, $3) {
  var elements = $2;
  if (!elements.length) return $skip;
  return elements;
});
function NestedClassSignatureElements(ctx, state2) {
  return (0, import_lib2.$EVENT)(ctx, state2, "NestedClassSignatureElements", NestedClassSignatureElements$0);
}
var NestedClassSignatureElement$0 = (0, import_lib2.$S)(Nested, ClassSignatureElement, StatementDelimiter);
function NestedClassSignatureElement(ctx, state2) {
  return (0, import_lib2.$EVENT)(ctx, state2, "NestedClassSignatureElement", NestedClassSignatureElement$0);
}
var ClassSignatureElement$0 = (0, import_lib2.$S)((0, import_lib2.$E)(Decorators), (0, import_lib2.$E)(AccessModifier), (0, import_lib2.$E)((0, import_lib2.$S)(Static, (0, import_lib2.$E)(_))), (0, import_lib2.$E)((0, import_lib2.$S)(Override, (0, import_lib2.$E)(_))), (0, import_lib2.$C)(MethodSignature, FieldDefinition));
var ClassSignatureElement$1 = (0, import_lib2.$S)(Static, ClassSignatureBody);
var ClassSignatureElement$$ = [ClassSignatureElement$0, ClassSignatureElement$1];
function ClassSignatureElement(ctx, state2) {
  return (0, import_lib2.$EVENT_C)(ctx, state2, "ClassSignatureElement", ClassSignatureElement$$);
}
var AccessModifier$0 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$E)((0, import_lib2.$S)((0, import_lib2.$C)(Public, Private, Protected), NotDedented)), (0, import_lib2.$E)((0, import_lib2.$S)(Readonly, NotDedented))), function($skip, $loc, $0, $1, $2) {
  if (!($1 || $2)) return $skip;
  return {
    ts: true,
    children: $0
  };
});
function AccessModifier(ctx, state2) {
  return (0, import_lib2.$EVENT)(ctx, state2, "AccessModifier", AccessModifier$0);
}
var FieldDefinition$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(CoffeeClassesEnabled, ClassElementName, (0, import_lib2.$E)(_), Colon, __, AssignmentExpression), function($skip, $loc, $0, $1, $2, $3, $4, $5, $6) {
  var id = $2;
  var exp = $6;
  switch (exp.type) {
    case "FunctionExpression": {
      return convertFunctionToMethod(id, exp);
    }
    case "ArrowFunction": {
      return convertArrowFunctionToMethod(id, exp);
    }
    default:
      return {
        type: "FieldDefinition",
        id,
        children: [id, " = ", exp]
      };
  }
});
var FieldDefinition$1 = (0, import_lib2.$TS)((0, import_lib2.$S)(InsertReadonly, ClassElementName, (0, import_lib2.$E)(TypeSuffix), __, ConstAssignment, MaybeNestedExpression), function($skip, $loc, $0, $1, $2, $3, $4, $5, $6) {
  var readonly = $1;
  var id = $2;
  var typeSuffix = $3;
  var ca = $5;
  readonly.children[0].$loc = {
    pos: ca.$loc.pos - 1,
    length: ca.$loc.length + 1
  };
  return {
    type: "FieldDefinition",
    id,
    typeSuffix,
    children: $0,
    readonly
  };
});
var FieldDefinition$2 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$E)((0, import_lib2.$S)(Abstract, (0, import_lib2.$E)(_))), (0, import_lib2.$E)((0, import_lib2.$S)(Readonly, (0, import_lib2.$E)(_))), ClassElementName, (0, import_lib2.$E)(TypeSuffix), (0, import_lib2.$E)(Initializer)), function($skip, $loc, $0, $1, $2, $3, $4, $5) {
  var abstract = $1;
  var readonly = $2;
  var id = $3;
  var typeSuffix = $4;
  var initializer = $5;
  return {
    type: "FieldDefinition",
    children: $0,
    ts: abstract ? true : void 0,
    id,
    typeSuffix,
    abstract,
    readonly,
    initializer
  };
});
var FieldDefinition$$ = [FieldDefinition$0, FieldDefinition$1, FieldDefinition$2];
function FieldDefinition(ctx, state2) {
  return (0, import_lib2.$EVENT_C)(ctx, state2, "FieldDefinition", FieldDefinition$$);
}
var ThisLiteral$0 = HashThis;
var ThisLiteral$1 = (0, import_lib2.$TS)((0, import_lib2.$S)(AtThis, (0, import_lib2.$TEXT)((0, import_lib2.$S)((0, import_lib2.$E)(Hash), IdentifierName))), function($skip, $loc, $0, $1, $2) {
  var at = $1;
  var id = $2;
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
    thisShorthand: true
  };
});
var ThisLiteral$2 = BasicThisLiteral;
var ThisLiteral$$ = [ThisLiteral$0, ThisLiteral$1, ThisLiteral$2];
function ThisLiteral(ctx, state2) {
  return (0, import_lib2.$EVENT_C)(ctx, state2, "ThisLiteral", ThisLiteral$$);
}
var BasicThisLiteral$0 = (0, import_lib2.$T)((0, import_lib2.$S)(This), function(value) {
  return { "type": "Identifier", "name": "this", "children": [value[0]] };
});
var BasicThisLiteral$1 = AtThis;
var BasicThisLiteral$$ = [BasicThisLiteral$0, BasicThisLiteral$1];
function BasicThisLiteral(ctx, state2) {
  return (0, import_lib2.$EVENT_C)(ctx, state2, "BasicThisLiteral", BasicThisLiteral$$);
}
var HashThis$0 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$E)(AtThis), LengthShorthand, (0, import_lib2.$E)((0, import_lib2.$S)((0, import_lib2.$Y)((0, import_lib2.$S)(_, (0, import_lib2.$E)((0, import_lib2.$S)(Not, __)), ActualIn)), (0, import_lib2.$EXPECT)($L0, 'HashThis ""')))), function($skip, $loc, $0, $1, $2, $3) {
  var at = $1;
  var id = $2;
  var beforeIn = $3;
  if (beforeIn != null && at == null) return ['"', id.name, '"'];
  return {
    type: "MemberExpression",
    children: [at ?? "this", {
      type: "PropertyAccess",
      name: id.name,
      children: [".", id]
    }],
    thisShorthand: true
  };
});
var HashThis$1 = (0, import_lib2.$TS)((0, import_lib2.$S)(PrivateIdentifier, (0, import_lib2.$Y)((0, import_lib2.$S)(_, (0, import_lib2.$E)((0, import_lib2.$S)(Not, __)), ActualIn))), function($skip, $loc, $0, $1, $2) {
  var id = $1;
  return id;
});
var HashThis$2 = (0, import_lib2.$TV)(PrivateIdentifier, function($skip, $loc, $0, $1) {
  var id = $0;
  return {
    type: "MemberExpression",
    children: ["this", {
      type: "PropertyAccess",
      name: id.name,
      children: [".", id]
    }],
    privateShorthand: true,
    privateId: id
  };
});
var HashThis$$ = [HashThis$0, HashThis$1, HashThis$2];
function HashThis(ctx, state2) {
  return (0, import_lib2.$EVENT_C)(ctx, state2, "HashThis", HashThis$$);
}
var LengthShorthand$0 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$N)(CoffeeCommentEnabled), Hash, NonIdContinue), function($skip, $loc, $0, $1, $2, $3) {
  const id = "length";
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
});
var LeftHandSideExpression$1 = NamedBindingPattern;
var LeftHandSideExpression$2 = CallExpression;
var LeftHandSideExpression$$ = [LeftHandSideExpression$0, LeftHandSideExpression$1, LeftHandSideExpression$2];
function LeftHandSideExpression(ctx, state2) {
  return (0, import_lib2.$EVENT_C)(ctx, state2, "LeftHandSideExpression", LeftHandSideExpression$$);
}
var CallExpression$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(Super, ArgumentsWithTrailingCallExpressions, (0, import_lib2.$Q)(CallExpressionRest)), function($skip, $loc, $0, $1, $2, $3) {
  var rest = $3;
  return processCallMemberExpression({
    type: "CallExpression",
    children: [$1, ...$2, ...rest.flat()]
  });
});
var CallExpression$1 = (0, import_lib2.$TS)((0, import_lib2.$S)(Import, _, NamedImports, __, FromClause), function($skip, $loc, $0, $1, $2, $3, $4, $5) {
  return dynamizeImportDeclarationExpression($0);
});
var CallExpression$2 = (0, import_lib2.$TS)((0, import_lib2.$S)(FromClause, __, Import, _, NamedImports), function($skip, $loc, $0, $1, $2, $3, $4, $5) {
  var from = $1;
  var fws = $2;
  var i = $3;
  var iws = $4;
  var imports = $5;
  return dynamizeImportDeclarationExpression([i, iws, imports, fws, from]);
});
var CallExpression$3 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$EXPECT)($L15, 'CallExpression "import"'), ArgumentsWithTrailingCallExpressions, (0, import_lib2.$Q)(CallExpressionRest)), function($skip, $loc, $0, $1, $2, $3) {
  var rest = $3;
  return processCallMemberExpression({
    type: "CallExpression",
    children: [$1, ...$2, ...rest.flat()]
  });
});
var CallExpression$4 = (0, import_lib2.$TS)((0, import_lib2.$S)(MemberExpression, (0, import_lib2.$Q)(CallExpressionRest), (0, import_lib2.$E)(AllowedTrailingCallExpressions)), function($skip, $loc, $0, $1, $2, $3) {
  var member = $1;
  var rest = $2;
  var trailing = $3;
  if (rest.length || trailing) {
    rest = rest.flat();
    return processCallMemberExpression({
      type: "CallExpression",
      children: [member, ...rest, ...trailing ?? []]
    });
  }
  return member;
});
var CallExpression$$ = [CallExpression$0, CallExpression$1, CallExpression$2, CallExpression$3, CallExpression$4];
function CallExpression(ctx, state2) {
  return (0, import_lib2.$EVENT_C)(ctx, state2, "CallExpression", CallExpression$$);
}
var CallExpressionRest$0 = MemberExpressionRest;
var CallExpressionRest$1 = (0, import_lib2.$T)((0, import_lib2.$S)(TypeArguments, (0, import_lib2.$N)((0, import_lib2.$C)(IdentifierName, NumericLiteral))), function(value) {
  return value[0];
});
var CallExpressionRest$2 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$EXPECT)($R8, "CallExpressionRest /(?=['\"`])/"), (0, import_lib2.$C)(TemplateLiteral, StringLiteral)), function($skip, $loc, $0, $1, $2) {
  var literal = $2;
  if (literal.type === "StringLiteral") {
    literal = "`" + literal.token.slice(1, -1).replace(/(`|\$\{)/g, "\\$1") + "`";
  }
  return literal;
});
var CallExpressionRest$3 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$E)(OptionalShorthand), ArgumentsWithTrailingCallExpressions), function($skip, $loc, $0, $1, $2) {
  var optional = $1;
  var argsWithTrailing = $2;
  if (!optional) return argsWithTrailing;
  const call = argsWithTrailing[0];
  return [{
    ...call,
    children: [optional, ...call.children],
    optional
  }, ...argsWithTrailing.slice(1)];
});
var CallExpressionRest$$ = [CallExpressionRest$0, CallExpressionRest$1, CallExpressionRest$2, CallExpressionRest$3];
function CallExpressionRest(ctx, state2) {
  return (0, import_lib2.$EVENT_C)(ctx, state2, "CallExpressionRest", CallExpressionRest$$);
}
var ExplicitCallExpressionRest$0 = MemberExpressionRest;
var ExplicitCallExpressionRest$1 = (0, import_lib2.$T)((0, import_lib2.$S)(TypeArguments, (0, import_lib2.$N)((0, import_lib2.$C)(IdentifierName, NumericLiteral))), function(value) {
  return value[0];
});
var ExplicitCallExpressionRest$2 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$EXPECT)($R8, "ExplicitCallExpressionRest /(?=['\"`])/"), (0, import_lib2.$C)(TemplateLiteral, StringLiteral)), function($skip, $loc, $0, $1, $2) {
  var literal = $2;
  if (literal.type === "StringLiteral") {
    literal = "`" + literal.token.slice(1, -1).replace(/(`|\$\{)/g, "\\$1") + "`";
  }
  return literal;
});
var ExplicitCallExpressionRest$3 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$E)(OptionalShorthand), ExplicitArguments), function($skip, $loc, $0, $1, $2) {
  var optional = $1;
  var call = $2;
  if (!optional) return call;
  return {
    ...call,
    children: [optional, ...call.children],
    optional
  };
});
var ExplicitCallExpressionRest$$ = [ExplicitCallExpressionRest$0, ExplicitCallExpressionRest$1, ExplicitCallExpressionRest$2, ExplicitCallExpressionRest$3];
function ExplicitCallExpressionRest(ctx, state2) {
  return (0, import_lib2.$EVENT_C)(ctx, state2, "ExplicitCallExpressionRest", ExplicitCallExpressionRest$$);
}
var OptionalShorthand$0 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$EXPECT)($R9, "OptionalShorthand /(?=[\\/?])/"), (0, import_lib2.$Q)(InlineComment), QuestionMark, OptionalDot), function($skip, $loc, $0, $1, $2, $3, $4) {
  var comments = $2;
  var q = $3;
  var d = $4;
  return {
    type: "Optional",
    children: [...comments, q, d]
  };
});
function OptionalShorthand(ctx, state2) {
  return (0, import_lib2.$EVENT)(ctx, state2, "OptionalShorthand", OptionalShorthand$0);
}
var OptionalDot$0 = (0, import_lib2.$S)((0, import_lib2.$Q)(InlineComment), Dot);
var OptionalDot$1 = InsertDot;
var OptionalDot$$ = [OptionalDot$0, OptionalDot$1];
function OptionalDot(ctx, state2) {
  return (0, import_lib2.$EVENT_C)(ctx, state2, "OptionalDot", OptionalDot$$);
}
var NonNullAssertion$0 = (0, import_lib2.$T)((0, import_lib2.$S)(ExclamationPoint, (0, import_lib2.$N)((0, import_lib2.$C)((0, import_lib2.$EXPECT)($L21, 'NonNullAssertion "^"'), (0, import_lib2.$EXPECT)($L22, 'NonNullAssertion "<?"'), (0, import_lib2.$EXPECT)($L3, 'NonNullAssertion "="')))), function(value) {
  return { "type": "NonNullAssertion", "ts": true, "children": [value[0]] };
});
function NonNullAssertion(ctx, state2) {
  return (0, import_lib2.$EVENT)(ctx, state2, "NonNullAssertion", NonNullAssertion$0);
}
var MemberExpression$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(MemberBase, (0, import_lib2.$Q)(MemberExpressionRest)), function($skip, $loc, $0, $1, $2) {
  var rest = $2;
  if (rest.length || Array.isArray($1)) {
    return processCallMemberExpression({
      type: "MemberExpression",
      children: [$1, ...rest].flat()
    });
  }
  return $1;
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
var MemberBase$0 = PrimaryExpression;
var MemberBase$1 = SuperProperty;
var MemberBase$2 = MetaProperty;
var MemberBase$$ = [MemberBase$0, MemberBase$1, MemberBase$2];
function MemberBase(ctx, state2) {
  return (0, import_lib2.$EVENT_C)(ctx, state2, "MemberBase", MemberBase$$);
}
var MemberExpressionRest$0 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$EXPECT)($R10, "MemberExpressionRest /(?=[\\/\\[{?.!@#'\u2019:])/"), (0, import_lib2.$Q)(InlineComment), MemberExpressionRestBody), function($skip, $loc, $0, $1, $2, $3) {
  var comments = $2;
  var body = $3;
  if (Array.isArray(body)) return [...comments, ...body];
  return {
    ...body,
    children: [...comments, ...body.children]
  };
});
function MemberExpressionRest(ctx, state2) {
  return (0, import_lib2.$EVENT)(ctx, state2, "MemberExpressionRest", MemberExpressionRest$0);
}
var MemberExpressionRestBody$0 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$E)(OptionalShorthand), (0, import_lib2.$Q)(InlineComment), MemberBracketContent), function($skip, $loc, $0, $1, $2, $3) {
  var dot = $1;
  var comments = $2;
  var content = $3;
  if (!dot && !comments.length) return content;
  if (dot) {
    if (dot.type === "Optional" && content.type === "SliceExpression") {
      return [...dot.children.slice(0, -1), ...comments, content];
    }
    return {
      ...content,
      children: [dot, ...comments, ...content.children],
      optional: dot
    };
  }
  return [...comments, content];
});
var MemberExpressionRestBody$1 = PropertyAccess;
var MemberExpressionRestBody$2 = PropertyGlob;
var MemberExpressionRestBody$3 = PropertyBind;
var MemberExpressionRestBody$4 = NonNullAssertion;
var MemberExpressionRestBody$$ = [MemberExpressionRestBody$0, MemberExpressionRestBody$1, MemberExpressionRestBody$2, MemberExpressionRestBody$3, MemberExpressionRestBody$4];
function MemberExpressionRestBody(ctx, state2) {
  return (0, import_lib2.$EVENT_C)(ctx, state2, "MemberExpressionRestBody", MemberExpressionRestBody$$);
}
var MemberBracketContent$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(OpenBracket, (0, import_lib2.$C)(SliceParameters, PostfixedExpression), __, CloseBracket), function($skip, $loc, $0, $1, $2, $3, $4) {
  var open = $1;
  var expression = $2;
  var ws = $3;
  var close = $4;
  if (expression.type === "SliceParameters") {
    const { start, end, reversed, children } = expression;
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
});
var MemberBracketContent$1 = (0, import_lib2.$TS)((0, import_lib2.$S)(OpenBracket, PostfixedExpression, __, (0, import_lib2.$EXPECT)($R11, "MemberBracketContent /%%?/"), __, CloseBracket), function($skip, $loc, $0, $1, $2, $3, $4, $5, $6) {
  var open = $1;
  var expression = $2;
  var ws1 = $3;
  var ws2 = $5;
  var close = $6;
  return {
    type: "Index",
    children: [open, expression, ws1, ws2, close],
    expression,
    mod: true
  };
});
var MemberBracketContent$$ = [MemberBracketContent$0, MemberBracketContent$1];
function MemberBracketContent(ctx, state2) {
  return (0, import_lib2.$EVENT_C)(ctx, state2, "MemberBracketContent", MemberBracketContent$$);
}
var SliceParameters$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(Loc, (0, import_lib2.$E)(Expression), __, RangeDots, Loc, (0, import_lib2.$E)(Expression)), function($skip, $loc, $0, $1, $2, $3, $4, $5, $6) {
  var ls = $1;
  var start = $2;
  var ws = $3;
  var dots = $4;
  var le = $5;
  var end = $6;
  const reversed = dots.increasing === false;
  const sign = reversed ? "-" : "+";
  let children;
  start ??= {
    $loc: ls.$loc,
    token: reversed ? "-1" : "0"
  };
  if (!end) {
    if (reversed) {
      end = {
        $loc: le.$loc,
        token: "0"
      };
    } else if (!dots.right.inclusive && !dots.triple) {
      end = {
        $loc: le.$loc,
        token: "-1"
      };
    }
  }
  if (!dots.left.inclusive) {
    start = [makeLeftHandSideExpression(start), ` ${sign} 1`];
  }
  if (end) {
    const inc = [];
    if (dots.right.inclusive) {
      end = [makeLeftHandSideExpression(end), ` ${sign} 1`];
      if (!reversed) inc.push(" || 1/0");
    }
    children = [start, [...ws, dots.children[0], { token: ", ", $loc: dots.$loc }], [dots.children[1], end, ...inc]];
  } else {
    children = [start, ws];
  }
  return {
    type: "SliceParameters",
    start,
    end,
    reversed,
    children
  };
});
var SliceParameters$1 = (0, import_lib2.$TS)((0, import_lib2.$S)(Loc, RangeEnd, Expression), function($skip, $loc, $0, $1, $2, $3) {
  var l = $1;
  var rend = $2;
  var e = $3;
  let start, end, children;
  if (rend.increasing) {
    end = e;
    if (rend.inclusive) {
      end = [makeLeftHandSideExpression(end), ` + 1`];
    }
    start = {
      $loc: l.$loc,
      token: "0"
    };
    children = [start, ", ", end];
  } else {
    start = e;
    if (!rend.inclusive) {
      start = [makeLeftHandSideExpression(start), ` + 1`];
    }
    children = [start];
  }
  return {
    type: "SliceParameters",
    start,
    end,
    children
  };
});
var SliceParameters$$ = [SliceParameters$0, SliceParameters$1];
function SliceParameters(ctx, state2) {
  return (0, import_lib2.$EVENT_C)(ctx, state2, "SliceParameters", SliceParameters$$);
}
var AccessStart$0 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$E)(PropertyAccessModifier), Dot, (0, import_lib2.$N)((0, import_lib2.$EXPECT)($R12, "AccessStart /[.\\s]/"))), function($skip, $loc, $0, $1, $2, $3) {
  var modifier = $1;
  var dot = $2;
  return {
    type: "AccessStart",
    children: modifier ? [modifier, dot] : [dot],
    optional: modifier?.token === "?"
  };
});
var AccessStart$1 = (0, import_lib2.$TS)((0, import_lib2.$S)(PropertyAccessModifier, InsertDot, (0, import_lib2.$N)((0, import_lib2.$EXPECT)($R12, "AccessStart /[.\\s]/"))), function($skip, $loc, $0, $1, $2, $3) {
  var modifier = $1;
  var dot = $2;
  return {
    type: "AccessStart",
    children: [modifier, dot],
    optional: modifier.token === "?"
  };
});
var AccessStart$$ = [AccessStart$0, AccessStart$1];
function AccessStart(ctx, state2) {
  return (0, import_lib2.$EVENT_C)(ctx, state2, "AccessStart", AccessStart$$);
}
var ExplicitAccessStart$0 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$E)(PropertyAccessModifier), Dot, (0, import_lib2.$N)(Dot)), function($skip, $loc, $0, $1, $2, $3) {
  var modifier = $1;
  var dot = $2;
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
  var modifier = $1;
  var dot = $2;
  return {
    type: "AccessStart",
    children: modifier ? [modifier, dot] : [dot],
    optional: modifier?.token === "?"
  };
});
function ImplicitAccessStart(ctx, state2) {
  return (0, import_lib2.$EVENT)(ctx, state2, "ImplicitAccessStart", ImplicitAccessStart$0);
}
var PropertyAccessModifier$0 = QuestionMark;
var PropertyAccessModifier$1 = NonNullAssertion;
var PropertyAccessModifier$$ = [PropertyAccessModifier$0, PropertyAccessModifier$1];
function PropertyAccessModifier(ctx, state2) {
  return (0, import_lib2.$EVENT_C)(ctx, state2, "PropertyAccessModifier", PropertyAccessModifier$$);
}
var PropertyAccess$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(AccessStart, (0, import_lib2.$C)(TemplateLiteral, StringLiteral, IntegerLiteral, SymbolLiteral)), function($skip, $loc, $0, $1, $2) {
  var dot = $1;
  var literal = $2;
  return {
    type: "Index",
    children: [
      adjustIndexAccess(dot),
      literal,
      "]"
    ]
  };
});
var PropertyAccess$1 = (0, import_lib2.$TS)((0, import_lib2.$S)(AccessStart, (0, import_lib2.$EXPECT)($L23, 'PropertyAccess "-"'), IntegerLiteral), function($skip, $loc, $0, $1, $2, $3) {
  var dot = $1;
  var neg = $2;
  var num = $3;
  const len3 = {
    children: []
  }, children = [
    adjustIndexAccess(dot),
    len3,
    neg,
    num,
    "]"
  ];
  return {
    type: "NegativeIndex",
    children,
    len: len3
  };
});
var PropertyAccess$2 = (0, import_lib2.$TS)((0, import_lib2.$S)(AccessStart, (0, import_lib2.$Q)(InlineComment), (0, import_lib2.$C)(IdentifierName, PrivateIdentifier, LengthShorthand)), function($skip, $loc, $0, $1, $2, $3) {
  var dot = $1;
  var comments = $2;
  var id = $3;
  return {
    type: "PropertyAccess",
    name: id.name,
    dot,
    children: [dot, ...comments, ...id.children]
  };
});
var PropertyAccess$3 = (0, import_lib2.$TS)((0, import_lib2.$S)(ImplicitAccessStart, (0, import_lib2.$C)(PrivateIdentifier, LengthShorthand)), function($skip, $loc, $0, $1, $2) {
  var dot = $1;
  var id = $2;
  return {
    type: "PropertyAccess",
    name: id.name,
    dot,
    children: [dot, ...id.children]
  };
});
var PropertyAccess$4 = (0, import_lib2.$TS)((0, import_lib2.$S)(CoffeePrototypeEnabled, (0, import_lib2.$E)(PropertyAccessModifier), DoubleColon, (0, import_lib2.$E)(IdentifierName)), function($skip, $loc, $0, $1, $2, $3, $4) {
  var modifier = $2;
  var p = $3;
  var id = $4;
  const dot = { token: ".", $loc: p.$loc };
  const start = {
    type: "AccessStart",
    children: modifier ? [modifier, dot] : [dot],
    optional: modifier?.token === "?"
  };
  if (id) {
    return {
      type: "PropertyAccess",
      name: id.name,
      dot: start,
      children: [start, "prototype.", id]
    };
  } else {
    return {
      type: "PropertyAccess",
      name: "prototype",
      dot: start,
      children: [start, "prototype"]
    };
  }
});
var PropertyAccess$$ = [PropertyAccess$0, PropertyAccess$1, PropertyAccess$2, PropertyAccess$3, PropertyAccess$4];
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
  var dot = $1;
  var object = $3;
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
  var modifier = $1;
  var dot = $3;
  var id = $4;
  var args = $5;
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
  var modifier = $1;
  var dot = $3;
  var id = $4;
  var args = $5;
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
var SuperProperty$0 = (0, import_lib2.$S)(Super, MemberBracketContent);
var SuperProperty$1 = (0, import_lib2.$S)(Super, (0, import_lib2.$N)(PropertyAccessModifier), PropertyAccess);
var SuperProperty$$ = [SuperProperty$0, SuperProperty$1];
function SuperProperty(ctx, state2) {
  return (0, import_lib2.$EVENT_C)(ctx, state2, "SuperProperty", SuperProperty$$);
}
var MetaProperty$0 = (0, import_lib2.$S)(New, Dot, Target);
var MetaProperty$1 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$EXPECT)($L24, 'MetaProperty "import.meta"'), NonIdContinue), function($skip, $loc, $0, $1, $2) {
  return { $loc, token: $1 };
});
var MetaProperty$2 = ReturnValue;
var MetaProperty$$ = [MetaProperty$0, MetaProperty$1, MetaProperty$2];
function MetaProperty(ctx, state2) {
  return (0, import_lib2.$EVENT_C)(ctx, state2, "MetaProperty", MetaProperty$$);
}
var ReturnValue$0 = (0, import_lib2.$TV)((0, import_lib2.$C)((0, import_lib2.$S)((0, import_lib2.$EXPECT)($L25, 'ReturnValue "return.value"'), NonIdContinue), (0, import_lib2.$S)(Return, (0, import_lib2.$Y)(AfterReturnShorthand))), function($skip, $loc, $0, $1) {
  return { type: "ReturnValue", children: [$1[0]] };
});
function ReturnValue(ctx, state2) {
  return (0, import_lib2.$EVENT)(ctx, state2, "ReturnValue", ReturnValue$0);
}
var AfterReturnShorthand$0 = WAssignmentOp;
var AfterReturnShorthand$1 = UpdateExpressionSymbol;
var AfterReturnShorthand$2 = TypeSuffix;
var AfterReturnShorthand$3 = (0, import_lib2.$S)(__, LetAssignment);
var AfterReturnShorthand$4 = (0, import_lib2.$S)(__, ConstAssignment);
var AfterReturnShorthand$$ = [AfterReturnShorthand$0, AfterReturnShorthand$1, AfterReturnShorthand$2, AfterReturnShorthand$3, AfterReturnShorthand$4];
function AfterReturnShorthand(ctx, state2) {
  return (0, import_lib2.$EVENT_C)(ctx, state2, "AfterReturnShorthand", AfterReturnShorthand$$);
}
var Parameters$0 = NonEmptyParameters;
var Parameters$1 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$E)(TypeParameters), Loc), function($skip, $loc, $0, $1, $2) {
  var tp = $1;
  var p = $2;
  const parameters = [];
  return {
    type: "Parameters",
    children: [tp, { $loc: p.$loc, token: "(" }, parameters, ")"],
    tp,
    parameters,
    names: [],
    implicit: true
  };
});
var Parameters$$ = [Parameters$0, Parameters$1];
function Parameters(ctx, state2) {
  return (0, import_lib2.$EVENT_C)(ctx, state2, "Parameters", Parameters$$);
}
var ShortArrowParameters$0 = (0, import_lib2.$TV)((0, import_lib2.$C)(ObjectBindingPattern, ArrayBindingPattern), function($skip, $loc, $0, $1) {
  var binding = $0;
  const { typeSuffix } = binding;
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
  const parameters = [$1];
  return {
    type: "Parameters",
    children: ["(", parameters, ")"],
    parameters
  };
});
var ArrowParameters$1 = Parameters;
var ArrowParameters$$ = [ArrowParameters$0, ArrowParameters$1];
function ArrowParameters(ctx, state2) {
  return (0, import_lib2.$EVENT_C)(ctx, state2, "ArrowParameters", ArrowParameters$$);
}
var NonEmptyParameters$0 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$E)(TypeParameters), OpenParen, ParameterList, (0, import_lib2.$S)(__, CloseParen)), function($skip, $loc, $0, $1, $2, $3, $4) {
  var tp = $1;
  var open = $2;
  var parameters = $3;
  var close = $4;
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
});
var ParameterList$1 = (0, import_lib2.$TV)((0, import_lib2.$Q)((0, import_lib2.$S)(__, Parameter)), function($skip, $loc, $0, $1) {
  return $1.map(([eos, p]) => ({
    ...p,
    children: [eos, ...p.children]
  }));
});
var ParameterList$$ = [ParameterList$0, ParameterList$1];
function ParameterList(ctx, state2) {
  return (0, import_lib2.$EVENT_C)(ctx, state2, "ParameterList", ParameterList$$);
}
var NestedParameterList$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(PushIndent, (0, import_lib2.$Q)(NestedParameter), PopIndent), function($skip, $loc, $0, $1, $2, $3) {
  var params = $2;
  if (!params.length) return $skip;
  return params;
});
function NestedParameterList(ctx, state2) {
  return (0, import_lib2.$EVENT)(ctx, state2, "NestedParameterList", NestedParameterList$0);
}
var NestedParameter$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(Nested, (0, import_lib2.$P)(Parameter)), function($skip, $loc, $0, $1, $2) {
  var ws = $1;
  var params = $2;
  params = [...params];
  params[0] = prepend(ws, params[0]);
  return params;
});
function NestedParameter(ctx, state2) {
  return (0, import_lib2.$EVENT)(ctx, state2, "NestedParameter", NestedParameter$0);
}
var Parameter$0 = ThisType;
var Parameter$1 = ParameterElement;
var Parameter$2 = FunctionRestParameter;
var Parameter$$ = [Parameter$0, Parameter$1, Parameter$2];
function Parameter(ctx, state2) {
  return (0, import_lib2.$EVENT_C)(ctx, state2, "Parameter", Parameter$$);
}
var FunctionRestParameter$0 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$N)(EOS), BindingRestElement, (0, import_lib2.$E)(TypeSuffix), ParameterElementDelimiter), function($skip, $loc, $0, $1, $2, $3, $4) {
  var rest = $2;
  var typeSuffix = $3;
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
  var accessModifier = $2;
  var binding = $4;
  var typeSuffix = $5;
  var initializer = $6;
  var delim = $7;
  typeSuffix ??= binding.typeSuffix;
  return {
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
var ParameterElementDelimiter$0 = (0, import_lib2.$S)((0, import_lib2.$E)(_), Comma);
var ParameterElementDelimiter$1 = (0, import_lib2.$Y)((0, import_lib2.$S)(__, (0, import_lib2.$R$0)((0, import_lib2.$EXPECT)($R13, "ParameterElementDelimiter /[)}]/"))));
var ParameterElementDelimiter$2 = (0, import_lib2.$T)((0, import_lib2.$S)((0, import_lib2.$Y)(EOS), InsertComma), function(value) {
  return value[1];
});
var ParameterElementDelimiter$$ = [ParameterElementDelimiter$0, ParameterElementDelimiter$1, ParameterElementDelimiter$2];
function ParameterElementDelimiter(ctx, state2) {
  return (0, import_lib2.$EVENT_C)(ctx, state2, "ParameterElementDelimiter", ParameterElementDelimiter$$);
}
var BindingIdentifier$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(__, NWBindingIdentifier), function($skip, $loc, $0, $1, $2) {
  var ws = $1;
  var identifier = $2;
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
});
var NWBindingIdentifier$1 = (0, import_lib2.$TS)((0, import_lib2.$S)(Hash, AtIdentifierRef), function($skip, $loc, $0, $1, $2) {
  var ref = $2;
  ref = { ...ref, id: `#${ref.id}` };
  return {
    type: "AtBinding",
    children: [ref],
    ref,
    names: []
  };
});
var NWBindingIdentifier$2 = Identifier;
var NWBindingIdentifier$3 = (0, import_lib2.$TS)((0, import_lib2.$S)(ReturnValue), function($skip, $loc, $0, $1) {
  return { children: [$1], names: [] };
});
var NWBindingIdentifier$$ = [NWBindingIdentifier$0, NWBindingIdentifier$1, NWBindingIdentifier$2, NWBindingIdentifier$3];
function NWBindingIdentifier(ctx, state2) {
  return (0, import_lib2.$EVENT_C)(ctx, state2, "NWBindingIdentifier", NWBindingIdentifier$$);
}
var AtIdentifierRef$0 = (0, import_lib2.$TV)(ReservedWord, function($skip, $loc, $0, $1) {
  var r = $0;
  return makeRef(`_${r}`, r);
});
var AtIdentifierRef$1 = (0, import_lib2.$TV)(IdentifierName, function($skip, $loc, $0, $1) {
  var id = $0;
  return makeRef(id.name);
});
var AtIdentifierRef$$ = [AtIdentifierRef$0, AtIdentifierRef$1];
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
});
var PinPattern$1 = (0, import_lib2.$TS)((0, import_lib2.$S)(Caret, SingleLineExpressionWithIndentedApplicationForbidden), function($skip, $loc, $0, $1, $2) {
  var expression = $2;
  return {
    type: "PinPattern",
    children: [expression],
    expression
  };
});
var PinPattern$2 = (0, import_lib2.$TV)(ActualMemberExpression, function($skip, $loc, $0, $1) {
  var expression = $0;
  return {
    type: "PinPattern",
    children: [expression],
    expression
  };
});
var PinPattern$3 = (0, import_lib2.$TV)((0, import_lib2.$S)((0, import_lib2.$EXPECT)($R14, "PinPattern /[+-]/"), NumericLiteral), function($skip, $loc, $0, $1) {
  var expression = $0;
  return {
    type: "PinPattern",
    children: [expression],
    expression
  };
});
var PinPattern$4 = (0, import_lib2.$TV)(Undefined, function($skip, $loc, $0, $1) {
  var expression = $0;
  return {
    type: "PinPattern",
    children: [expression],
    expression
  };
});
var PinPattern$$ = [PinPattern$0, PinPattern$1, PinPattern$2, PinPattern$3, PinPattern$4];
function PinPattern(ctx, state2) {
  return (0, import_lib2.$EVENT_C)(ctx, state2, "PinPattern", PinPattern$$);
}
var NamedBindingPattern$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(BindingIdentifier, Caret, (0, import_lib2.$E)(_), BindingPattern), function($skip, $loc, $0, $1, $2, $3, $4) {
  var binding = $1;
  var ws = $3;
  var pattern = $4;
  pattern = prepend(ws, pattern);
  return {
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
var BindingPattern$0 = ObjectBindingPattern;
var BindingPattern$1 = ArrayBindingPattern;
var BindingPattern$2 = PinPattern;
var BindingPattern$3 = Literal;
var BindingPattern$4 = RegularExpressionLiteral;
var BindingPattern$5 = NamedBindingPattern;
var BindingPattern$$ = [BindingPattern$0, BindingPattern$1, BindingPattern$2, BindingPattern$3, BindingPattern$4, BindingPattern$5];
function BindingPattern(ctx, state2) {
  return (0, import_lib2.$EVENT_C)(ctx, state2, "BindingPattern", BindingPattern$$);
}
var ObjectBindingPattern$0 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$E)(_), OpenBrace, ObjectBindingPatternContent, __, CloseBrace), function($skip, $loc, $0, $1, $2, $3, $4, $5) {
  var ws1 = $1;
  var open = $2;
  var c = $3;
  var ws2 = $4;
  var close = $5;
  const properties = c.children;
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
var ObjectBindingPatternContent$0 = NestedBindingProperties;
var ObjectBindingPatternContent$1 = (0, import_lib2.$TV)((0, import_lib2.$E)(BindingPropertyList), function($skip, $loc, $0, $1) {
  var props = $0;
  if (!props) return { children: [], names: [] };
  return reorderBindingRestProperty(props);
});
var ObjectBindingPatternContent$$ = [ObjectBindingPatternContent$0, ObjectBindingPatternContent$1];
function ObjectBindingPatternContent(ctx, state2) {
  return (0, import_lib2.$EVENT_C)(ctx, state2, "ObjectBindingPatternContent", ObjectBindingPatternContent$$);
}
var BindingPropertyList$0 = (0, import_lib2.$TV)((0, import_lib2.$P)((0, import_lib2.$S)(BindingProperty, ObjectPropertyDelimiter)), function($skip, $loc, $0, $1) {
  var props = $0;
  return props.map(([prop, delim]) => {
    return {
      ...prop,
      delim,
      children: [...prop.children, delim]
    };
  });
});
function BindingPropertyList(ctx, state2) {
  return (0, import_lib2.$EVENT)(ctx, state2, "BindingPropertyList", BindingPropertyList$0);
}
var ArrayBindingPattern$0 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$E)(_), OpenBracket, ArrayBindingPatternContent, __, CloseBracket), function($skip, $loc, $0, $1, $2, $3, $4, $5) {
  var ws1 = $1;
  var open = $2;
  var c = $3;
  var ws2 = $4;
  var close = $5;
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
var ArrayBindingPatternContent$0 = NestedBindingElements;
var ArrayBindingPatternContent$1 = (0, import_lib2.$TV)((0, import_lib2.$E)(BindingElementList), function($skip, $loc, $0, $1) {
  var elements = $0;
  if (!elements) return { children: [], names: [], length: 0 };
  return adjustBindingElements(elements);
});
var ArrayBindingPatternContent$$ = [ArrayBindingPatternContent$0, ArrayBindingPatternContent$1];
function ArrayBindingPatternContent(ctx, state2) {
  return (0, import_lib2.$EVENT_C)(ctx, state2, "ArrayBindingPatternContent", ArrayBindingPatternContent$$);
}
var BindingElementList$0 = (0, import_lib2.$TV)((0, import_lib2.$P)((0, import_lib2.$S)(BindingElement, ArrayElementDelimiter)), function($skip, $loc, $0, $1) {
  var elements = $0;
  return elements.map(([element, delim]) => {
    return {
      ...element,
      delim,
      // BindingElement.children is a tuple of the form [ws, element]
      children: [...element.children, delim]
    };
  });
});
function BindingElementList(ctx, state2) {
  return (0, import_lib2.$EVENT)(ctx, state2, "BindingElementList", BindingElementList$0);
}
var NestedBindingElementList$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(Nested, BindingElementList), function($skip, $loc, $0, $1, $2) {
  var indent = $1;
  var elements = $2;
  return elements.map((element, i) => {
    if (i > 0) return element;
    return {
      ...element,
      children: [indent, ...element.children.slice(1)]
      // replace ws wth indent
    };
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
  if (!props.length) return $skip;
  return reorderBindingRestProperty(props.flat());
});
function NestedBindingProperties(ctx, state2) {
  return (0, import_lib2.$EVENT)(ctx, state2, "NestedBindingProperties", NestedBindingProperties$0);
}
var NestedBindingPropertyList$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(Nested, BindingPropertyList), function($skip, $loc, $0, $1, $2) {
  var ws = $1;
  var props = $2;
  return props.map((prop, i) => {
    if (i > 0) return prop;
    return prepend(ws, prop);
  });
});
function NestedBindingPropertyList(ctx, state2) {
  return (0, import_lib2.$EVENT)(ctx, state2, "NestedBindingPropertyList", NestedBindingPropertyList$0);
}
var BindingProperty$0 = BindingRestProperty;
var BindingProperty$1 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$E)(_), PropertyName, (0, import_lib2.$E)(Caret), (0, import_lib2.$E)(_), Colon, (0, import_lib2.$E)(_), (0, import_lib2.$C)(BindingPattern, BindingIdentifier), (0, import_lib2.$E)(BindingTypeSuffix), (0, import_lib2.$E)(Initializer)), function($skip, $loc, $0, $1, $2, $3, $4, $5, $6, $7, $8, $9) {
  var ws1 = $1;
  var name = $2;
  var bind = $3;
  var ws2 = $4;
  var colon = $5;
  var ws3 = $6;
  var value = $7;
  var typeSuffix = $8;
  var initializer = $9;
  if (bind) {
    const binding = name, pattern = value;
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
});
var BindingProperty$2 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$E)(_), Caret, BindingIdentifier, (0, import_lib2.$E)(BindingTypeSuffix), (0, import_lib2.$E)(Initializer)), function($skip, $loc, $0, $1, $2, $3, $4, $5) {
  var ws = $1;
  var pin = $2;
  var binding = $3;
  var typeSuffix = $4;
  var initializer = $5;
  const children = [ws, binding];
  if (binding.type === "AtBinding") {
    children.push({
      type: "Error",
      message: "Pinned properties do not yet work with @binding"
    });
  }
  if (typeSuffix) {
    children.push({
      type: "Error",
      message: "Pinned properties cannot have type annotations"
    });
  }
  if (initializer) {
    children.push({
      type: "Error",
      message: "Pinned properties cannot have initializers"
    });
  }
  return {
    type: "PinProperty",
    children,
    name: binding,
    value: {
      type: "PinPattern",
      children: [binding],
      expression: binding
    }
  };
});
var BindingProperty$3 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$E)(_), BindingIdentifier, (0, import_lib2.$E)(Caret), (0, import_lib2.$E)(BindingTypeSuffix), (0, import_lib2.$E)(Initializer)), function($skip, $loc, $0, $1, $2, $3, $4, $5) {
  var ws = $1;
  var binding = $2;
  var bind = $3;
  var typeSuffix = $4;
  var initializer = $5;
  const children = [ws, binding, initializer];
  if (binding.type === "AtBinding") {
    return {
      type: "AtBindingProperty",
      children,
      binding,
      typeSuffix,
      ref: binding.ref,
      initializer,
      names: []
    };
  }
  return {
    type: "BindingProperty",
    children,
    name: binding,
    value: void 0,
    typeSuffix,
    initializer,
    names: binding.names,
    identifier: binding
  };
});
var BindingProperty$$ = [BindingProperty$0, BindingProperty$1, BindingProperty$2, BindingProperty$3];
function BindingProperty(ctx, state2) {
  return (0, import_lib2.$EVENT_C)(ctx, state2, "BindingProperty", BindingProperty$$);
}
var BindingRestProperty$0 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$E)(_), DotDotDot, BindingIdentifier, (0, import_lib2.$E)(BindingTypeSuffix)), function($skip, $loc, $0, $1, $2, $3, $4) {
  var ws = $1;
  var dots = $2;
  var id = $3;
  var typeSuffix = $4;
  return {
    ...id,
    type: "BindingRestProperty",
    typeSuffix,
    children: [...ws || [], dots, ...id.children]
  };
});
var BindingRestProperty$1 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$E)(_), BindingIdentifier, DotDotDot), function($skip, $loc, $0, $1, $2, $3) {
  var ws = $1;
  var id = $2;
  var dots = $3;
  return {
    ...id,
    type: "BindingRestProperty",
    typeSuffix: void 0,
    children: [...ws || [], dots, ...id.children]
  };
});
var BindingRestProperty$$ = [BindingRestProperty$0, BindingRestProperty$1];
function BindingRestProperty(ctx, state2) {
  return (0, import_lib2.$EVENT_C)(ctx, state2, "BindingRestProperty", BindingRestProperty$$);
}
var BindingTypeSuffix$0 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$E)(_), (0, import_lib2.$E)(QuestionMark), (0, import_lib2.$E)(_), DoubleColonAsColon, MaybeNestedType), function($skip, $loc, $0, $1, $2, $3, $4, $5) {
  var optional = $2;
  var colon = $4;
  var t = $5;
  return {
    type: "TypeSuffix",
    ts: true,
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
  if (!elements.length) return $skip;
  return adjustBindingElements(elements.flat());
});
function NestedBindingElements(ctx, state2) {
  return (0, import_lib2.$EVENT)(ctx, state2, "NestedBindingElements", NestedBindingElements$0);
}
var BindingElement$0 = BindingRestElement;
var BindingElement$1 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$E)(_), (0, import_lib2.$C)(BindingPattern, BindingIdentifier), (0, import_lib2.$E)(BindingTypeSuffix), (0, import_lib2.$E)(Initializer)), function($skip, $loc, $0, $1, $2, $3, $4) {
  var ws = $1;
  var binding = $2;
  var typeSuffix = $3;
  var initializer = $4;
  return {
    type: "BindingElement",
    names: binding.names,
    typeSuffix,
    binding,
    children: [ws, binding, initializer],
    initializer
  };
});
var BindingElement$2 = (0, import_lib2.$TV)((0, import_lib2.$Y)((0, import_lib2.$S)((0, import_lib2.$E)(_), (0, import_lib2.$EXPECT)($L26, 'BindingElement ","'))), function($skip, $loc, $0, $1) {
  return {
    type: "ElisionElement",
    children: [""],
    names: []
  };
});
var BindingElement$$ = [BindingElement$0, BindingElement$1, BindingElement$2];
function BindingElement(ctx, state2) {
  return (0, import_lib2.$EVENT_C)(ctx, state2, "BindingElement", BindingElement$$);
}
var BindingRestElement$0 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$E)(_), DotDotDot, (0, import_lib2.$C)(BindingPattern, BindingIdentifier, EmptyBindingPattern), (0, import_lib2.$E)(BindingTypeSuffix)), function($skip, $loc, $0, $1, $2, $3, $4) {
  var ws = $1;
  var dots = $2;
  var binding = $3;
  var typeSuffix = $4;
  return {
    type: "BindingRestElement",
    children: [ws, dots, binding],
    dots,
    binding,
    typeSuffix,
    name: binding.name,
    names: binding.names,
    rest: true
  };
});
var BindingRestElement$1 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$E)(_), (0, import_lib2.$C)(BindingPattern, BindingIdentifier), DotDotDot), function($skip, $loc, $0, $1, $2, $3) {
  var ws = $1;
  var binding = $2;
  var dots = $3;
  return {
    type: "BindingRestElement",
    children: [...ws || [], dots, binding],
    dots,
    binding,
    name: binding.name,
    names: binding.names,
    rest: true
  };
});
var BindingRestElement$$ = [BindingRestElement$0, BindingRestElement$1];
function BindingRestElement(ctx, state2) {
  return (0, import_lib2.$EVENT_C)(ctx, state2, "BindingRestElement", BindingRestElement$$);
}
var EmptyBindingPattern$0 = (0, import_lib2.$TV)((0, import_lib2.$EXPECT)($L0, 'EmptyBindingPattern ""'), function($skip, $loc, $0, $1) {
  const ref = makeRef();
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
  if ($1.type !== "FunctionExpression") return $skip;
  if ($1.id) return $1;
  return makeLeftHandSideExpression($1);
});
function FunctionDeclaration(ctx, state2) {
  return (0, import_lib2.$EVENT)(ctx, state2, "FunctionDeclaration", FunctionDeclaration$0);
}
var FunctionSignature$0 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$E)((0, import_lib2.$S)(Async, _)), Function2, (0, import_lib2.$E)((0, import_lib2.$S)((0, import_lib2.$E)(_), Star)), (0, import_lib2.$E)((0, import_lib2.$S)((0, import_lib2.$E)(_), NWBindingIdentifier)), (0, import_lib2.$E)(_), Parameters, (0, import_lib2.$E)(ReturnTypeSuffix)), function($skip, $loc, $0, $1, $2, $3, $4, $5, $6, $7) {
  var async = $1;
  var func = $2;
  var generator = $3;
  var wid = $4;
  var w = $5;
  var parameters = $6;
  var returnType = $7;
  if (!async) async = [];
  if (!generator) generator = [];
  const id = wid?.[1];
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
    children: !parameters.implicit ? [async, func, generator, wid, w, parameters, returnType] : [async, func, generator, wid, parameters, w, returnType]
    // move whitespace w to after implicit () in parameters
  };
});
function FunctionSignature(ctx, state2) {
  return (0, import_lib2.$EVENT)(ctx, state2, "FunctionSignature", FunctionSignature$0);
}
var FunctionExpression$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(FunctionSignature, (0, import_lib2.$E)(BracedBlock)), function($skip, $loc, $0, $1, $2) {
  var signature = $1;
  var block = $2;
  if (!block) {
    return {
      ...signature,
      type: "FunctionExpression",
      signature,
      ts: true
    };
  }
  return {
    ...signature,
    type: "FunctionExpression",
    signature,
    children: [...signature.children, block],
    block
  };
});
var FunctionExpression$1 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$N)(ArrowFunction), OpenParen, __, BinaryOp, __, CloseParen), function($skip, $loc, $0, $1, $2, $3, $4, $5, $6) {
  var open = $2;
  var ws1 = $3;
  var op = $4;
  var ws2 = $5;
  var close = $6;
  if (op.special && op.call && !op.negated) return op.call;
  if (!ws1) ws1 = op.spaced ? [" "] : [];
  if (!ws2) ws2 = op.spaced ? [" "] : [];
  const refA = makeRef("a"), refB = makeRef("b"), body = processBinaryOpExpression([refA, [
    [ws1, op, ws2, refB]
    // BinaryOpRHS
  ]]);
  const parameterList = [[refA, ","], refB];
  const parameters = {
    type: "Parameters",
    children: ["(", parameterList, ")"],
    parameters: parameterList
  };
  const block = {
    expressions: [body]
  };
  return {
    type: "ArrowFunction",
    signature: {
      modifier: {}
    },
    children: [open, parameters, " => ", body, close],
    body,
    parenthesized: true,
    parenthesizedOp: op,
    block,
    parameters
  };
});
var FunctionExpression$2 = (0, import_lib2.$TS)((0, import_lib2.$S)(OpenParen, NonPipelineAssignmentExpression, __, BinaryOp, __, CloseParen), function($skip, $loc, $0, $1, $2, $3, $4, $5, $6) {
  var open = $1;
  var lhs = $2;
  var ws1 = $3;
  var op = $4;
  var ws2 = $5;
  var close = $6;
  if (!ws1) ws1 = op.spaced ? [" "] : [];
  if (!ws2) ws2 = op.spaced ? [" "] : [];
  const refB = makeRef("b");
  const fn = makeAmpersandFunction({
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
});
var FunctionExpression$3 = (0, import_lib2.$TS)((0, import_lib2.$S)(OpenParen, (0, import_lib2.$P)((0, import_lib2.$S)(NotDedented, UpdateExpression, WAssignmentOp)), __, CloseParen), function($skip, $loc, $0, $1, $2, $3, $4) {
  var open = $1;
  var lhs = $2;
  var ws2 = $3;
  var close = $4;
  lhs = lhs.map((x) => [x[0], x[1], ...x[2]]);
  const refB = makeRef("b");
  const fn = makeAmpersandFunction({
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
});
var FunctionExpression$4 = (0, import_lib2.$TS)((0, import_lib2.$S)(OpenParen, __, IsLike, __, PatternExpressionList, CloseParen), function($skip, $loc, $0, $1, $2, $3, $4, $5, $6) {
  var open = $1;
  var ws1 = $2;
  var op = $3;
  var ws2 = $4;
  var rhs = $5;
  var close = $6;
  const refA = makeRef("a");
  const fn = makeAmpersandFunction({
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
});
var FunctionExpression$5 = (0, import_lib2.$TS)((0, import_lib2.$S)(OpenParen, __, (0, import_lib2.$N)((0, import_lib2.$EXPECT)($R15, "FunctionExpression /\\+\\+|--|\u29FA|\u2014|[\\+\\-&]\\S/")), (0, import_lib2.$N)((0, import_lib2.$S)(Placeholder, (0, import_lib2.$C)(TypePostfix, BinaryOpRHS))), BinaryOp, __, NonPipelineAssignmentExpression, CloseParen), function($skip, $loc, $0, $1, $2, $3, $4, $5, $6, $7, $8) {
  var open = $1;
  var ws1 = $2;
  var op = $5;
  var ws2 = $6;
  var rhs = $7;
  var close = $8;
  if (!ws1) ws1 = op.spaced ? [" "] : [];
  if (!ws2) ws2 = op.spaced ? [" "] : [];
  const refA = makeRef("a");
  const fn = makeAmpersandFunction({
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
});
var FunctionExpression$$ = [FunctionExpression$0, FunctionExpression$1, FunctionExpression$2, FunctionExpression$3, FunctionExpression$4, FunctionExpression$5];
function FunctionExpression(ctx, state2) {
  return (0, import_lib2.$EVENT_C)(ctx, state2, "FunctionExpression", FunctionExpression$$);
}
var OperatorDeclaration$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(Operator, (0, import_lib2.$E)(OperatorBehavior), _, LexicalDeclaration), function($skip, $loc, $0, $1, $2, $3, $4) {
  var op = $1;
  var behavior = $2;
  var w = $3;
  var decl = $4;
  decl.names.forEach((name) => state.operators.set(name, behavior));
  if (behavior?.error) decl = prepend(behavior.error, decl);
  decl = prepend(trimFirstSpace(w), decl);
  return decl;
});
var OperatorDeclaration$1 = (0, import_lib2.$TS)((0, import_lib2.$S)(OperatorSignature, BracedBlock), function($skip, $loc, $0, $1, $2) {
  var signature = $1;
  var block = $2;
  state.operators.set(signature.id.name, signature.behavior);
  return {
    ...signature,
    type: "FunctionExpression",
    signature,
    children: [...signature.children, block],
    block,
    operator: true
  };
});
var OperatorDeclaration$2 = (0, import_lib2.$TS)((0, import_lib2.$S)(Operator, _, Identifier, (0, import_lib2.$E)(OperatorBehavior), (0, import_lib2.$Q)((0, import_lib2.$S)(CommaDelimiter, (0, import_lib2.$E)(_), Identifier, (0, import_lib2.$E)(OperatorBehavior)))), function($skip, $loc, $0, $1, $2, $3, $4, $5) {
  var op = $1;
  var w1 = $2;
  var id = $3;
  var behavior = $4;
  var ids = $5;
  const children = [];
  state.operators.set(id.name, behavior);
  if (behavior?.error) children.push(behavior.error);
  ids.forEach(([, , id2, behavior2]) => {
    state.operators.set(id2.name, behavior2);
    if (behavior2?.error) children.push(behavior2.error);
  });
  return {
    id,
    children
  };
});
var OperatorDeclaration$$ = [OperatorDeclaration$0, OperatorDeclaration$1, OperatorDeclaration$2];
function OperatorDeclaration(ctx, state2) {
  return (0, import_lib2.$EVENT_C)(ctx, state2, "OperatorDeclaration", OperatorDeclaration$$);
}
var OperatorSignature$0 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$E)((0, import_lib2.$S)(Async, _)), Operator, (0, import_lib2.$E)((0, import_lib2.$S)(_, Function2)), (0, import_lib2.$E)((0, import_lib2.$S)((0, import_lib2.$E)(_), Star)), _, Identifier, (0, import_lib2.$E)(OperatorBehavior), (0, import_lib2.$E)(_), NonEmptyParameters, (0, import_lib2.$E)(ReturnTypeSuffix)), function($skip, $loc, $0, $1, $2, $3, $4, $5, $6, $7, $8, $9, $10) {
  var async = $1;
  var op = $2;
  var func = $3;
  var generator = $4;
  var w1 = $5;
  var id = $6;
  var behavior = $7;
  var w2 = $8;
  var parameters = $9;
  var returnType = $10;
  if (!async) async = [];
  if (!generator) generator = [];
  if (!func) {
    func = { $loc: op.$loc, token: "function" };
  } else {
    func = [trimFirstSpace(func[0]), func[1]];
  }
  return {
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
});
var OperatorBehavior$1 = (0, import_lib2.$TS)((0, import_lib2.$S)(OperatorAssociativity, (0, import_lib2.$E)(OperatorPrecedence)), function($skip, $loc, $0, $1, $2) {
  return { ...$1, ...$2 };
});
var OperatorBehavior$$ = [OperatorBehavior$0, OperatorBehavior$1];
function OperatorBehavior(ctx, state2) {
  return (0, import_lib2.$EVENT_C)(ctx, state2, "OperatorBehavior", OperatorBehavior$$);
}
var OperatorPrecedence$0 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$E)(_), (0, import_lib2.$C)((0, import_lib2.$EXPECT)($L27, 'OperatorPrecedence "tighter"'), (0, import_lib2.$EXPECT)($L28, 'OperatorPrecedence "looser"'), (0, import_lib2.$EXPECT)($L29, 'OperatorPrecedence "same"')), NonIdContinue, (0, import_lib2.$E)(_), (0, import_lib2.$C)(Identifier, (0, import_lib2.$S)(OpenParen, BinaryOp, CloseParen))), function($skip, $loc, $0, $1, $2, $3, $4, $5) {
  var mod = $2;
  var op = $5;
  let prec, error;
  if (op.type === "Identifier") {
    if (state.operators.has(op.name)) {
      prec = state.operators.get(op.name).prec;
    } else {
      prec = precedenceCustomDefault;
      error = {
        type: "Error",
        message: `Precedence refers to unknown operator ${op.name}`
      };
    }
  } else {
    prec = getPrecedence(op[1]);
  }
  switch (mod) {
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
  if (assoc === "relational") {
    return { relational: true, assoc: "non" };
  }
  return { assoc };
});
function OperatorAssociativity(ctx, state2) {
  return (0, import_lib2.$EVENT)(ctx, state2, "OperatorAssociativity", OperatorAssociativity$0);
}
var ThinArrowFunction$0 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$E)((0, import_lib2.$S)(Async, _)), ArrowParameters, (0, import_lib2.$E)(ReturnTypeSuffix), (0, import_lib2.$E)(_), Arrow, NoCommaBracedOrEmptyBlock), function($skip, $loc, $0, $1, $2, $3, $4, $5, $6) {
  var async = $1;
  var parameters = $2;
  var returnType = $3;
  var arrow = $5;
  var block = $6;
  if (!async) async = [];
  const generator = [];
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
  var ws1 = $1;
  var open = $2;
  var block = $4;
  var ws2 = $6;
  var close = $7;
  if (!block) return $skip;
  return {
    ...block,
    children: [ws1, open, ...block.children, ws2, close],
    bare: false
  };
});
var ExplicitBlock$1 = (0, import_lib2.$TS)((0, import_lib2.$S)(IndentedAtLeast, OpenBrace, AllowAll, (0, import_lib2.$E)((0, import_lib2.$C)(NestedBlockStatements, EmptyBracedContent)), RestoreAll, __, CloseBrace), function($skip, $loc, $0, $1, $2, $3, $4, $5, $6, $7) {
  var ws1 = $1;
  var open = $2;
  var block = $4;
  var ws2 = $6;
  var close = $7;
  if (!block) return $skip;
  return {
    ...block,
    children: [ws1, open, ...block.children, ws2, close],
    bare: false
  };
});
var ExplicitBlock$$ = [ExplicitBlock$0, ExplicitBlock$1];
function ExplicitBlock(ctx, state2) {
  return (0, import_lib2.$EVENT_C)(ctx, state2, "ExplicitBlock", ExplicitBlock$$);
}
var EmptyBracedContent$0 = (0, import_lib2.$TV)((0, import_lib2.$Y)((0, import_lib2.$S)(__, (0, import_lib2.$EXPECT)($L37, 'EmptyBracedContent "}"'))), function($skip, $loc, $0, $1) {
  const expressions = [];
  return {
    type: "BlockStatement",
    expressions,
    children: [expressions],
    empty: true
  };
});
function EmptyBracedContent(ctx, state2) {
  return (0, import_lib2.$EVENT)(ctx, state2, "EmptyBracedContent", EmptyBracedContent$0);
}
var ImplicitNestedBlock$0 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$Y)(EOS), InsertOpenBrace, AllowAll, (0, import_lib2.$E)((0, import_lib2.$S)(NestedBlockStatements, InsertNewline, InsertIndent, InsertCloseBrace)), RestoreAll), function($skip, $loc, $0, $1, $2, $3, $4, $5) {
  var open = $2;
  if (!$4) return $skip;
  const [block, ...tail] = $4;
  return {
    ...block,
    children: [open, ...block.children, ...tail],
    bare: false
  };
});
function ImplicitNestedBlock(ctx, state2) {
  return (0, import_lib2.$EVENT)(ctx, state2, "ImplicitNestedBlock", ImplicitNestedBlock$0);
}
var Block$0 = ImplicitNestedBlock;
var Block$1 = ExplicitBlock;
var Block$2 = ThenClause;
var Block$3 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$E)(_), (0, import_lib2.$N)(EOS), DeclarationOrStatement), function($skip, $loc, $0, $1, $2, $3) {
  var ws = $1;
  var s = $3;
  const expressions = [[ws, s]];
  return {
    type: "BlockStatement",
    expressions,
    children: [expressions],
    bare: true
  };
});
var Block$$ = [Block$0, Block$1, Block$2, Block$3];
function Block(ctx, state2) {
  return (0, import_lib2.$EVENT_C)(ctx, state2, "Block", Block$$);
}
var BareNestedBlock$0 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$Y)(EOS), AllowAll, (0, import_lib2.$E)(NestedBlockStatements), RestoreAll), function($skip, $loc, $0, $1, $2, $3, $4) {
  if (!$3) return $skip;
  return $3;
});
function BareNestedBlock(ctx, state2) {
  return (0, import_lib2.$EVENT)(ctx, state2, "BareNestedBlock", BareNestedBlock$0);
}
var BareBlock$0 = BareNestedBlock;
var BareBlock$1 = ExplicitBlock;
var BareBlock$2 = ThenClause;
var BareBlock$3 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$E)(_), (0, import_lib2.$N)(EOS), Statement), function($skip, $loc, $0, $1, $2, $3) {
  var ws = $1;
  var s = $3;
  const expressions = [[ws, s]];
  return {
    type: "BlockStatement",
    expressions,
    children: [expressions],
    bare: true
  };
});
var BareBlock$4 = EmptyBareBlock;
var BareBlock$$ = [BareBlock$0, BareBlock$1, BareBlock$2, BareBlock$3, BareBlock$4];
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
});
var ThenBlock$1 = ImplicitNestedBlock;
var ThenBlock$2 = SingleLineStatements;
var ThenBlock$$ = [ThenBlock$0, ThenBlock$1, ThenBlock$2];
function ThenBlock(ctx, state2) {
  return (0, import_lib2.$EVENT_C)(ctx, state2, "ThenBlock", ThenBlock$$);
}
var BracedThenClause$0 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$Y)(Then), InsertOpenBrace, ThenClause, InsertCloseBrace), function($skip, $loc, $0, $1, $2, $3, $4) {
  var open = $2;
  var exp = $3;
  var close = $4;
  const expressions = [exp];
  return {
    type: "BlockStatement",
    expressions,
    children: [open, expressions, " ", close],
    bare: false
  };
});
function BracedThenClause(ctx, state2) {
  return (0, import_lib2.$EVENT)(ctx, state2, "BracedThenClause", BracedThenClause$0);
}
var BracedOrEmptyBlock$0 = BracedBlock;
var BracedOrEmptyBlock$1 = EmptyBlock;
var BracedOrEmptyBlock$$ = [BracedOrEmptyBlock$0, BracedOrEmptyBlock$1];
function BracedOrEmptyBlock(ctx, state2) {
  return (0, import_lib2.$EVENT_C)(ctx, state2, "BracedOrEmptyBlock", BracedOrEmptyBlock$$);
}
var NoCommaBracedOrEmptyBlock$0 = NoCommaBracedBlock;
var NoCommaBracedOrEmptyBlock$1 = EmptyBlock;
var NoCommaBracedOrEmptyBlock$$ = [NoCommaBracedOrEmptyBlock$0, NoCommaBracedOrEmptyBlock$1];
function NoCommaBracedOrEmptyBlock(ctx, state2) {
  return (0, import_lib2.$EVENT_C)(ctx, state2, "NoCommaBracedOrEmptyBlock", NoCommaBracedOrEmptyBlock$$);
}
var NoPostfixBracedOrEmptyBlock$0 = NoPostfixBracedBlock;
var NoPostfixBracedOrEmptyBlock$1 = EmptyBlock;
var NoPostfixBracedOrEmptyBlock$$ = [NoPostfixBracedOrEmptyBlock$0, NoPostfixBracedOrEmptyBlock$1];
function NoPostfixBracedOrEmptyBlock(ctx, state2) {
  return (0, import_lib2.$EVENT_C)(ctx, state2, "NoPostfixBracedOrEmptyBlock", NoPostfixBracedOrEmptyBlock$$);
}
var EmptyBlock$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(InsertOpenBrace, InsertCloseBrace), function($skip, $loc, $0, $1, $2) {
  const expressions = [];
  return {
    type: "BlockStatement",
    expressions,
    children: [$1, expressions, $2],
    bare: false,
    empty: true,
    implicit: true
  };
});
function EmptyBlock(ctx, state2) {
  return (0, import_lib2.$EVENT)(ctx, state2, "EmptyBlock", EmptyBlock$0);
}
var BlockOrEmptyStatement$0 = Block;
var BlockOrEmptyStatement$1 = (0, import_lib2.$T)((0, import_lib2.$S)(NoBlock, EmptyStatementBareBlock), function(value) {
  return value[1];
});
var BlockOrEmptyStatement$$ = [BlockOrEmptyStatement$0, BlockOrEmptyStatement$1];
function BlockOrEmptyStatement(ctx, state2) {
  return (0, import_lib2.$EVENT_C)(ctx, state2, "BlockOrEmptyStatement", BlockOrEmptyStatement$$);
}
var BlockOrEmpty$0 = Block;
var BlockOrEmpty$1 = (0, import_lib2.$T)((0, import_lib2.$S)(NoBlock, EmptyBlock), function(value) {
  return value[1];
});
var BlockOrEmpty$$ = [BlockOrEmpty$0, BlockOrEmpty$1];
function BlockOrEmpty(ctx, state2) {
  return (0, import_lib2.$EVENT_C)(ctx, state2, "BlockOrEmpty", BlockOrEmpty$$);
}
var EmptyStatementBareBlock$0 = (0, import_lib2.$TV)(InsertEmptyStatement, function($skip, $loc, $0, $1) {
  var s = $0;
  const expressions = [["", s]];
  return {
    type: "BlockStatement",
    expressions,
    children: [expressions],
    bare: true,
    empty: true,
    implicit: true,
    semicolon: s.children[0]
  };
});
function EmptyStatementBareBlock(ctx, state2) {
  return (0, import_lib2.$EVENT)(ctx, state2, "EmptyStatementBareBlock", EmptyStatementBareBlock$0);
}
var EmptyBareBlock$0 = (0, import_lib2.$TV)((0, import_lib2.$EXPECT)($L0, 'EmptyBareBlock ""'), function($skip, $loc, $0, $1) {
  const expressions = [];
  return {
    type: "BlockStatement",
    expressions,
    children: [expressions],
    bare: true,
    empty: true,
    implicit: true
  };
});
function EmptyBareBlock(ctx, state2) {
  return (0, import_lib2.$EVENT)(ctx, state2, "EmptyBareBlock", EmptyBareBlock$0);
}
var NoBlock$0 = (0, import_lib2.$S)((0, import_lib2.$Y)(EOS), (0, import_lib2.$N)(IndentedFurther), (0, import_lib2.$N)((0, import_lib2.$S)(Nested, Then)));
var NoBlock$1 = ClosingDelimiter;
var NoBlock$$ = [NoBlock$0, NoBlock$1];
function NoBlock(ctx, state2) {
  return (0, import_lib2.$EVENT_C)(ctx, state2, "NoBlock", NoBlock$$);
}
var BracedBlock$0 = NonSingleBracedBlock;
var BracedBlock$1 = (0, import_lib2.$TS)((0, import_lib2.$S)(InsertOpenBrace, (0, import_lib2.$N)(EOS), PostfixedSingleLineStatements, InsertSpace, InsertCloseBrace), function($skip, $loc, $0, $1, $2, $3, $4, $5) {
  var o = $1;
  var s = $3;
  var ws = $4;
  var c = $5;
  if (!s.children.length) return $skip;
  return {
    type: "BlockStatement",
    expressions: s.expressions,
    // Remove !EOS assertion
    children: [o, s.children, ws, c]
  };
});
var BracedBlock$$ = [BracedBlock$0, BracedBlock$1];
function BracedBlock(ctx, state2) {
  return (0, import_lib2.$EVENT_C)(ctx, state2, "BracedBlock", BracedBlock$$);
}
var NoPostfixBracedBlock$0 = NonSingleBracedBlock;
var NoPostfixBracedBlock$1 = (0, import_lib2.$TS)((0, import_lib2.$S)(InsertOpenBrace, (0, import_lib2.$N)(EOS), SingleLineStatements, InsertSpace, InsertCloseBrace), function($skip, $loc, $0, $1, $2, $3, $4, $5) {
  var o = $1;
  var s = $3;
  var ws = $4;
  var c = $5;
  if (!s.expressions.length) return $skip;
  return {
    type: "BlockStatement",
    expressions: s.expressions,
    // Remove !EOS assertion
    children: [o, s.children, ws, c]
  };
});
var NoPostfixBracedBlock$$ = [NoPostfixBracedBlock$0, NoPostfixBracedBlock$1];
function NoPostfixBracedBlock(ctx, state2) {
  return (0, import_lib2.$EVENT_C)(ctx, state2, "NoPostfixBracedBlock", NoPostfixBracedBlock$$);
}
var NoCommaBracedBlock$0 = NonSingleBracedBlock;
var NoCommaBracedBlock$1 = (0, import_lib2.$TS)((0, import_lib2.$S)(InsertOpenBrace, (0, import_lib2.$N)(EOS), PostfixedSingleLineNoCommaStatements, InsertSpace, InsertCloseBrace), function($skip, $loc, $0, $1, $2, $3, $4, $5) {
  var o = $1;
  var s = $3;
  var ws = $4;
  var c = $5;
  if (!s.children.length) return $skip;
  return {
    type: "BlockStatement",
    expressions: s.expressions,
    // Remove !EOS assertion
    children: [o, s.children, ws, c]
  };
});
var NoCommaBracedBlock$$ = [NoCommaBracedBlock$0, NoCommaBracedBlock$1];
function NoCommaBracedBlock(ctx, state2) {
  return (0, import_lib2.$EVENT_C)(ctx, state2, "NoCommaBracedBlock", NoCommaBracedBlock$$);
}
var NonSingleBracedBlock$0 = (0, import_lib2.$T)((0, import_lib2.$S)((0, import_lib2.$N)(EOS), ExplicitBlock, (0, import_lib2.$N)(TrailingOperator)), function(value) {
  return value[1];
});
var NonSingleBracedBlock$1 = ImplicitNestedBlock;
var NonSingleBracedBlock$2 = (0, import_lib2.$TS)((0, import_lib2.$S)(InsertOpenBrace, (0, import_lib2.$C)(NestedBulletedArray, NestedImplicitObjectLiteral), InsertCloseBrace), function($skip, $loc, $0, $1, $2, $3) {
  var o = $1;
  var s = $2;
  var c = $3;
  const expressions = [s];
  return {
    type: "BlockStatement",
    expressions,
    children: [o, expressions, c]
  };
});
var NonSingleBracedBlock$$ = [NonSingleBracedBlock$0, NonSingleBracedBlock$1, NonSingleBracedBlock$2];
function NonSingleBracedBlock(ctx, state2) {
  return (0, import_lib2.$EVENT_C)(ctx, state2, "NonSingleBracedBlock", NonSingleBracedBlock$$);
}
var DeclarationOrStatement$0 = Declaration;
var DeclarationOrStatement$1 = Statement;
var DeclarationOrStatement$$ = [DeclarationOrStatement$0, DeclarationOrStatement$1];
function DeclarationOrStatement(ctx, state2) {
  return (0, import_lib2.$EVENT_C)(ctx, state2, "DeclarationOrStatement", DeclarationOrStatement$$);
}
var SingleLineStatements$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(ForbidNewlineBinaryOp, (0, import_lib2.$Q)((0, import_lib2.$S)((0, import_lib2.$S)((0, import_lib2.$E)(_), (0, import_lib2.$N)(EOS)), DeclarationOrStatement, SemicolonDelimiter)), (0, import_lib2.$E)((0, import_lib2.$S)((0, import_lib2.$S)((0, import_lib2.$E)(_), (0, import_lib2.$N)(EOS)), DeclarationOrStatement, (0, import_lib2.$E)(SemicolonDelimiter))), RestoreNewlineBinaryOp), function($skip, $loc, $0, $1, $2, $3, $4) {
  var stmts = $2;
  var last = $3;
  const expressions = [...stmts];
  if (last) expressions.push(last);
  const children = [expressions];
  if (hasTrailingComment(expressions)) children.push(["\n"]);
  return {
    type: "BlockStatement",
    expressions,
    children,
    bare: true
  };
});
function SingleLineStatements(ctx, state2) {
  return (0, import_lib2.$EVENT)(ctx, state2, "SingleLineStatements", SingleLineStatements$0);
}
var PostfixedSingleLineStatements$0 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$Q)((0, import_lib2.$S)((0, import_lib2.$S)((0, import_lib2.$E)(_), (0, import_lib2.$N)(EOS)), StatementListItem, SemicolonDelimiter)), (0, import_lib2.$E)((0, import_lib2.$S)((0, import_lib2.$S)((0, import_lib2.$E)(_), (0, import_lib2.$N)(EOS)), StatementListItem, (0, import_lib2.$E)(SemicolonDelimiter)))), function($skip, $loc, $0, $1, $2) {
  var stmts = $1;
  var last = $2;
  const children = [...stmts];
  if (last) children.push(last);
  return {
    type: "BlockStatement",
    expressions: children,
    children,
    bare: true
  };
});
function PostfixedSingleLineStatements(ctx, state2) {
  return (0, import_lib2.$EVENT)(ctx, state2, "PostfixedSingleLineStatements", PostfixedSingleLineStatements$0);
}
var PostfixedSingleLineNoCommaStatements$0 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$Q)((0, import_lib2.$S)((0, import_lib2.$S)((0, import_lib2.$E)(_), (0, import_lib2.$N)(EOS)), NoCommaStatementListItem, SemicolonDelimiter)), (0, import_lib2.$E)((0, import_lib2.$S)((0, import_lib2.$S)((0, import_lib2.$E)(_), (0, import_lib2.$N)(EOS)), NoCommaStatementListItem, (0, import_lib2.$E)(SemicolonDelimiter)))), function($skip, $loc, $0, $1, $2) {
  var stmts = $1;
  var last = $2;
  const children = [...stmts];
  if (last) children.push(last);
  return {
    type: "BlockStatement",
    expressions: children,
    children,
    bare: true
  };
});
function PostfixedSingleLineNoCommaStatements(ctx, state2) {
  return (0, import_lib2.$EVENT)(ctx, state2, "PostfixedSingleLineNoCommaStatements", PostfixedSingleLineNoCommaStatements$0);
}
var NestedBlockStatements$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(PushIndent, (0, import_lib2.$Q)(NestedBlockStatement), PopIndent), function($skip, $loc, $0, $1, $2, $3) {
  var statements = $2;
  if (!statements.length) return $skip;
  statements = statements.flat();
  return {
    type: "BlockStatement",
    expressions: statements,
    children: [statements],
    bare: true
  };
});
function NestedBlockStatements(ctx, state2) {
  return (0, import_lib2.$EVENT)(ctx, state2, "NestedBlockStatements", NestedBlockStatements$0);
}
var NestedBlockStatement$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(Nested, (0, import_lib2.$P)(BlockStatementPart)), function($skip, $loc, $0, $1, $2) {
  var nested = $1;
  var statements = $2;
  return [
    [nested, ...statements[0]],
    ...statements.slice(1).map((s) => ["", ...s])
  ];
});
function NestedBlockStatement(ctx, state2) {
  return (0, import_lib2.$EVENT)(ctx, state2, "NestedBlockStatement", NestedBlockStatement$0);
}
var BlockStatementPart$0 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$N)(EOS), (0, import_lib2.$E)(_), StatementListItem, StatementDelimiter), function($skip, $loc, $0, $1, $2, $3, $4) {
  var ws = $2;
  var statement = $3;
  var delimiter = $4;
  if (ws) statement = prepend(ws, statement);
  return [statement, delimiter];
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
var LiteralContent$0 = NullLiteral;
var LiteralContent$1 = BooleanLiteral;
var LiteralContent$2 = NumericLiteral;
var LiteralContent$3 = StringLiteral;
var LiteralContent$$ = [LiteralContent$0, LiteralContent$1, LiteralContent$2, LiteralContent$3];
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
});
var _BooleanLiteral$1 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$C)((0, import_lib2.$EXPECT)($L39, '_BooleanLiteral "true"'), (0, import_lib2.$EXPECT)($L40, '_BooleanLiteral "false"')), NonIdContinue), function($skip, $loc, $0, $1, $2) {
  return { type: "BooleanLiteral", $loc, token: $1 };
});
var _BooleanLiteral$$ = [_BooleanLiteral$0, _BooleanLiteral$1];
function _BooleanLiteral(ctx, state2) {
  return (0, import_lib2.$EVENT_C)(ctx, state2, "_BooleanLiteral", _BooleanLiteral$$);
}
var CoffeeScriptBooleanLiteral$0 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$C)((0, import_lib2.$EXPECT)($L41, 'CoffeeScriptBooleanLiteral "yes"'), (0, import_lib2.$EXPECT)($L42, 'CoffeeScriptBooleanLiteral "on"')), NonIdContinue), function($skip, $loc, $0, $1, $2) {
  return { type: "BooleanLiteral", $loc, token: "true" };
});
var CoffeeScriptBooleanLiteral$1 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$C)((0, import_lib2.$EXPECT)($L43, 'CoffeeScriptBooleanLiteral "no"'), (0, import_lib2.$EXPECT)($L44, 'CoffeeScriptBooleanLiteral "off"')), NonIdContinue), function($skip, $loc, $0, $1, $2) {
  return { type: "BooleanLiteral", $loc, token: "false" };
});
var CoffeeScriptBooleanLiteral$$ = [CoffeeScriptBooleanLiteral$0, CoffeeScriptBooleanLiteral$1];
function CoffeeScriptBooleanLiteral(ctx, state2) {
  return (0, import_lib2.$EVENT_C)(ctx, state2, "CoffeeScriptBooleanLiteral", CoffeeScriptBooleanLiteral$$);
}
var SymbolLiteral$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(Colon, (0, import_lib2.$C)(IdentifierName, StringLiteral)), function($skip, $loc, $0, $1, $2) {
  var colon = $1;
  var id = $2;
  let name, token;
  if (id.type === "Identifier") {
    ({ name, children: [token] } = id);
  } else {
    name = literalValue({
      type: "Literal",
      subtype: "StringLiteral",
      raw: id.token,
      children: [id]
    });
    token = id;
  }
  if (config.symbols.includes(name)) {
    return {
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
    };
  } else {
    return {
      type: "SymbolLiteral",
      children: [
        { ...colon, token: "Symbol.for(" },
        id.type === "Identifier" ? ['"', token, '"'] : token,
        ")"
      ],
      name
    };
  }
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
});
var _ArrayLiteral$1 = (0, import_lib2.$TS)((0, import_lib2.$S)(OpenBracket, CloseBracket, ApplicationStart, AllowAll, (0, import_lib2.$E)((0, import_lib2.$C)(NestedElementList, SingleLineElementList)), RestoreAll), function($skip, $loc, $0, $1, $2, $3, $4, $5, $6) {
  var open = $1;
  var close = $2;
  var content = $5;
  if (!content) return $skip;
  let last = content[content.length - 1];
  let lastArray = Array.isArray(last) ? last : last.children;
  if (isComma(lastArray[lastArray.length - 1])) {
    lastArray = lastArray.slice(0, -1);
    if (Array.isArray(last)) {
      last = lastArray;
    } else {
      last = { ...last, children: lastArray };
    }
    content = [...content.slice(0, -1), last];
  }
  return {
    type: "ArrayExpression",
    children: [open, ...content, close],
    names: content.flatMap((c) => c?.names || [])
  };
});
var _ArrayLiteral$2 = (0, import_lib2.$TS)((0, import_lib2.$S)(OpenBracket, AllowAll, (0, import_lib2.$E)((0, import_lib2.$S)(ArrayLiteralContent, __, CloseBracket)), RestoreAll), function($skip, $loc, $0, $1, $2, $3, $4) {
  var open = $1;
  if (!$3) return $skip;
  const [content, ws, close] = $3;
  if (content.type === "RangeExpression") {
    return prepend(ws, content);
  }
  let children;
  if (Array.isArray(content)) {
    children = [open, ...content, ...ws, close];
  } else {
    children = [open, content, ...ws, close];
  }
  const names = children.flatMap((c) => c?.names || []);
  return {
    type: "ArrayExpression",
    children,
    names
  };
});
var _ArrayLiteral$3 = NestedBulletedArray;
var _ArrayLiteral$$ = [_ArrayLiteral$0, _ArrayLiteral$1, _ArrayLiteral$2, _ArrayLiteral$3];
function _ArrayLiteral(ctx, state2) {
  return (0, import_lib2.$EVENT_C)(ctx, state2, "_ArrayLiteral", _ArrayLiteral$$);
}
var RangeDots$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(DotDotDot), function($skip, $loc, $0, $1) {
  return {
    ...$1,
    type: "RangeDots",
    left: { inclusive: true, raw: "" },
    right: { inclusive: false, raw: "." },
    // Ranges are increasing by default, but adaptive in coffeeCompat mode
    increasing: config.coffeeRange ? void 0 : true,
    triple: true,
    children: []
  };
});
var RangeDots$1 = (0, import_lib2.$TS)((0, import_lib2.$S)(OptionalRangeEnd, (0, import_lib2.$E)(_), DotDot, (0, import_lib2.$E)(_), OptionalRangeEnd), function($skip, $loc, $0, $1, $2, $3, $4, $5) {
  var left = $1;
  var ws1 = $2;
  var dots = $3;
  var ws2 = $4;
  var right = $5;
  const increasing = left.increasing ?? right.increasing ?? (config.coffeeRange ? void 0 : true);
  if (left.increasing != null && right.increasing != null && left.increasing !== right.increasing) {
    const error = {
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
});
var RangeDots$$ = [RangeDots$0, RangeDots$1];
function RangeDots(ctx, state2) {
  return (0, import_lib2.$EVENT_C)(ctx, state2, "RangeDots", RangeDots$$);
}
var OptionalRangeEnd$0 = RangeEnd;
var OptionalRangeEnd$1 = (0, import_lib2.$T)((0, import_lib2.$EXPECT)($L0, 'OptionalRangeEnd ""'), function(value) {
  return { "increasing": void 0, "inclusive": true, "raw": "" };
});
var OptionalRangeEnd$$ = [OptionalRangeEnd$0, OptionalRangeEnd$1];
function OptionalRangeEnd(ctx, state2) {
  return (0, import_lib2.$EVENT_C)(ctx, state2, "OptionalRangeEnd", OptionalRangeEnd$$);
}
var RangeEnd$0 = (0, import_lib2.$TR)((0, import_lib2.$EXPECT)($R21, "RangeEnd /([<>])(=?)|([\u2264\u2265])/"), function($skip, $loc, $0, $1, $2, $3, $4, $5, $6, $7, $8, $9) {
  let dir = $1, equal = $2, unicode = $3;
  if (unicode) {
    equal = "=";
    if (unicode === "\u2264") {
      dir = "<";
    } else if (unicode === "\u2265") {
      dir = ">";
    }
  }
  return {
    increasing: dir === "<",
    inclusive: equal === "=",
    raw: $0
  };
});
function RangeEnd(ctx, state2) {
  return (0, import_lib2.$EVENT)(ctx, state2, "RangeEnd", RangeEnd$0);
}
var RangeExpression$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(Expression, __, RangeDots, Expression), function($skip, $loc, $0, $1, $2, $3, $4) {
  var start = $1;
  var ws = $2;
  var range2 = $3;
  var end = $4;
  return processRangeExpression(start, ws, range2, end);
});
var RangeExpression$1 = (0, import_lib2.$TS)((0, import_lib2.$S)(Expression, __, DotDot, (0, import_lib2.$Y)((0, import_lib2.$S)(__, CloseBracket))), function($skip, $loc, $0, $1, $2, $3, $4) {
  var s = $1;
  var ws = $2;
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
    left: { inclusive: true, raw: "" },
    right: { inclusive: true, raw: "" },
    increasing: true
  };
});
var RangeExpression$$ = [RangeExpression$0, RangeExpression$1];
function RangeExpression(ctx, state2) {
  return (0, import_lib2.$EVENT_C)(ctx, state2, "RangeExpression", RangeExpression$$);
}
var ArrayLiteralContent$0 = RangeExpression;
var ArrayLiteralContent$1 = (0, import_lib2.$S)(NestedElementList, (0, import_lib2.$Y)((0, import_lib2.$S)(__, CloseBracket)));
var ArrayLiteralContent$2 = (0, import_lib2.$TS)((0, import_lib2.$S)(ElementListWithIndentedApplicationForbidden, ArrayElementDelimiter, (0, import_lib2.$E)(NestedElementList), (0, import_lib2.$Y)((0, import_lib2.$S)(__, CloseBracket))), function($skip, $loc, $0, $1, $2, $3, $4) {
  var list = $1;
  var delimiter = $2;
  var nested = $3;
  if (!nested) return list;
  return [...list, delimiter, ...nested];
});
var ArrayLiteralContent$3 = (0, import_lib2.$TV)((0, import_lib2.$Q)((0, import_lib2.$S)(__, ElementListWithIndentedApplicationForbidden, ArrayElementDelimiter)), function($skip, $loc, $0, $1) {
  return $1.flat();
});
var ArrayLiteralContent$$ = [ArrayLiteralContent$0, ArrayLiteralContent$1, ArrayLiteralContent$2, ArrayLiteralContent$3];
function ArrayLiteralContent(ctx, state2) {
  return (0, import_lib2.$EVENT_C)(ctx, state2, "ArrayLiteralContent", ArrayLiteralContent$$);
}
var NestedElementList$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(PushIndent, (0, import_lib2.$Q)(NestedElement), PopIndent), function($skip, $loc, $0, $1, $2, $3) {
  var elements = $2;
  if (elements.length)
    return elements.flat();
  return $skip;
});
function NestedElementList(ctx, state2) {
  return (0, import_lib2.$EVENT)(ctx, state2, "NestedElementList", NestedElementList$0);
}
var NestedElement$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(Nested, ElementList, ArrayElementDelimiter), function($skip, $loc, $0, $1, $2, $3) {
  var indent = $1;
  var list = $2;
  var delimiter = $3;
  const { length } = list;
  if (!length) return $skip;
  return list.map((e, i) => {
    if (i === 0) e = prepend(indent, e);
    if (i === length - 1) e = append(e, delimiter);
    return e;
  });
});
function NestedElement(ctx, state2) {
  return (0, import_lib2.$EVENT)(ctx, state2, "NestedElement", NestedElement$0);
}
var ArrayElementDelimiter$0 = (0, import_lib2.$S)(__, Comma);
var ArrayElementDelimiter$1 = (0, import_lib2.$Y)((0, import_lib2.$S)(__, (0, import_lib2.$EXPECT)($L46, 'ArrayElementDelimiter "]"')));
var ArrayElementDelimiter$2 = (0, import_lib2.$T)((0, import_lib2.$S)((0, import_lib2.$Y)(EOS), InsertComma), function(value) {
  return value[1];
});
var ArrayElementDelimiter$$ = [ArrayElementDelimiter$0, ArrayElementDelimiter$1, ArrayElementDelimiter$2];
function ArrayElementDelimiter(ctx, state2) {
  return (0, import_lib2.$EVENT_C)(ctx, state2, "ArrayElementDelimiter", ArrayElementDelimiter$$);
}
var ElementListWithIndentedApplicationForbidden$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(ForbidIndentedApplication, (0, import_lib2.$E)(ElementList), RestoreIndentedApplication), function($skip, $loc, $0, $1, $2, $3) {
  if ($2) return $2;
  return $skip;
});
function ElementListWithIndentedApplicationForbidden(ctx, state2) {
  return (0, import_lib2.$EVENT)(ctx, state2, "ElementListWithIndentedApplicationForbidden", ElementListWithIndentedApplicationForbidden$0);
}
var ElementList$0 = (0, import_lib2.$T)((0, import_lib2.$S)(BulletedArray), function(value) {
  return [value[0]];
});
var ElementList$1 = SingleLineElementList;
var ElementList$$ = [ElementList$0, ElementList$1];
function ElementList(ctx, state2) {
  return (0, import_lib2.$EVENT_C)(ctx, state2, "ElementList", ElementList$$);
}
var SingleLineElementList$0 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$N)(EOS), ArrayElementExpression, (0, import_lib2.$Q)(ElementListRest)), function($skip, $loc, $0, $1, $2, $3) {
  var first = $2;
  var rest = $3;
  if (!rest.length) return [first];
  return [
    append(first, rest[0][0])
  ].concat(
    rest.map(([_2, e], i) => append(e, rest[i + 1]?.[0]))
  );
});
function SingleLineElementList(ctx, state2) {
  return (0, import_lib2.$EVENT)(ctx, state2, "SingleLineElementList", SingleLineElementList$0);
}
var ElementListRest$0 = (0, import_lib2.$S)((0, import_lib2.$S)((0, import_lib2.$E)(_), Comma, (0, import_lib2.$N)(EOS)), ArrayElementExpression);
function ElementListRest(ctx, state2) {
  return (0, import_lib2.$EVENT)(ctx, state2, "ElementListRest", ElementListRest$0);
}
var ArrayElementExpression$0 = JSXTag;
var ArrayElementExpression$1 = (0, import_lib2.$T)((0, import_lib2.$S)(ImplicitObjectLiteral, (0, import_lib2.$Y)(ArrayElementDelimiter)), function(value) {
  return value[0];
});
var ArrayElementExpression$2 = (0, import_lib2.$TS)((0, import_lib2.$S)(Expression, (0, import_lib2.$E)(_), DotDotDot, (0, import_lib2.$Y)(ArrayElementDelimiter)), function($skip, $loc, $0, $1, $2, $3, $4) {
  var exp = $1;
  var ws = $2;
  var dots = $3;
  if (!exp) {
    exp = { ...makeRef(), names: [] };
  }
  return {
    type: "SpreadElement",
    children: [ws, dots, exp],
    expression: exp,
    names: exp.names
  };
});
var ArrayElementExpression$3 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$E)((0, import_lib2.$S)((0, import_lib2.$E)((0, import_lib2.$S)(__, DotDotDot, __)), PostfixedExpression)), (0, import_lib2.$Y)(ArrayElementDelimiter)), function($skip, $loc, $0, $1, $2) {
  var expMaybeSpread = $1;
  if (expMaybeSpread) {
    const [spread, exp] = expMaybeSpread;
    if (!spread) {
      return {
        type: "ArrayElement",
        children: [exp],
        expression: exp,
        names: exp.names
      };
    } else {
      return {
        type: "SpreadElement",
        children: [...spread, exp],
        expression: exp,
        names: exp.names
      };
    }
  }
  return {
    type: "ElisionElement",
    children: []
  };
});
var ArrayElementExpression$$ = [ArrayElementExpression$0, ArrayElementExpression$1, ArrayElementExpression$2, ArrayElementExpression$3];
function ArrayElementExpression(ctx, state2) {
  return (0, import_lib2.$EVENT_C)(ctx, state2, "ArrayElementExpression", ArrayElementExpression$$);
}
var NestedBulletedArray$0 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$S)(InsertSpace, InsertOpenBracket), PushIndent, AllowPipeline, (0, import_lib2.$Q)(NestedArrayBullet), RestorePipeline, InsertCloseBracket, PopIndent), function($skip, $loc, $0, $1, $2, $3, $4, $5, $6, $7) {
  var open = $1;
  var content = $4;
  var close = $6;
  if (!content.length) return $skip;
  content = content.flat();
  const last = content[content.length - 1];
  if (last.children?.at(-1)?.implicit) {
    last.children = last.children.slice(0, -1);
  }
  return {
    type: "ArrayExpression",
    children: [...open, ...content, close]
  };
});
function NestedBulletedArray(ctx, state2) {
  return (0, import_lib2.$EVENT)(ctx, state2, "NestedBulletedArray", NestedBulletedArray$0);
}
var BulletedArray$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(InsertOpenBracket, (0, import_lib2.$E)((0, import_lib2.$S)(ArrayBullet, (0, import_lib2.$Q)(NestedArrayBullet))), InsertCloseBracket), function($skip, $loc, $0, $1, $2, $3) {
  var open = $1;
  var content = $2;
  var close = $3;
  if (!content) return $skip;
  content = [
    ...trimFirstSpace(content[0]),
    // replace first space with bracket
    ...content[1].flat()
  ];
  let last = content[content.length - 1];
  if (last.children?.at(-1)?.implicit) {
    content[content.length - 1] = last = { ...last, children: last.children.slice(0, -1) };
  }
  return {
    type: "ArrayExpression",
    children: [open, ...content, close]
  };
});
function BulletedArray(ctx, state2) {
  return (0, import_lib2.$EVENT)(ctx, state2, "BulletedArray", BulletedArray$0);
}
var NestedArrayBullet$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(Nested, ArrayBullet), function($skip, $loc, $0, $1, $2) {
  var indent = $1;
  var list = $2;
  return list.map((e, i) => i === 0 ? prepend(indent, e) : e);
});
function NestedArrayBullet(ctx, state2) {
  return (0, import_lib2.$EVENT)(ctx, state2, "NestedArrayBullet", NestedArrayBullet$0);
}
var ArrayBullet$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(BulletIndent, (0, import_lib2.$E)((0, import_lib2.$S)(ElementList, ArrayBulletDelimiter)), PopIndent), function($skip, $loc, $0, $1, $2, $3) {
  var bullet = $1;
  var content = $2;
  if (!content) return $skip;
  let [list, delimiter] = content;
  if (!list.length) return $skip;
  list = list.slice();
  list[0] = prepend(bullet, list[0]);
  if (delimiter) {
    const last = list.length - 1;
    list[last] = append(list[last], delimiter);
  }
  return list;
});
function ArrayBullet(ctx, state2) {
  return (0, import_lib2.$EVENT)(ctx, state2, "ArrayBullet", ArrayBullet$0);
}
var ArrayBulletDelimiter$0 = (0, import_lib2.$S)((0, import_lib2.$E)(_), Comma);
var ArrayBulletDelimiter$1 = (0, import_lib2.$T)((0, import_lib2.$S)((0, import_lib2.$Y)(EOS), InsertComma), function(value) {
  return value[1];
});
var ArrayBulletDelimiter$$ = [ArrayBulletDelimiter$0, ArrayBulletDelimiter$1];
function ArrayBulletDelimiter(ctx, state2) {
  return (0, import_lib2.$EVENT_C)(ctx, state2, "ArrayBulletDelimiter", ArrayBulletDelimiter$$);
}
var BulletIndent$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(Bullet), function($skip, $loc, $0, $1) {
  const [bullet, ws] = $1;
  const indent = {
    token: " " + ws,
    $loc,
    level: getIndentLevel(" ".repeat(state.currentIndent.level) + bullet + ws, config.tab)
  };
  if (config.verbose) console.log("pushing bullet indent", indent);
  state.indentLevels.push(indent);
  return indent;
});
function BulletIndent(ctx, state2) {
  return (0, import_lib2.$EVENT)(ctx, state2, "BulletIndent", BulletIndent$0);
}
var Bullet$0 = (0, import_lib2.$S)((0, import_lib2.$EXPECT)($L47, 'Bullet "\u2022"'), (0, import_lib2.$R$0)((0, import_lib2.$EXPECT)($R22, "Bullet /[ \\t]*/")));
var Bullet$1 = (0, import_lib2.$S)((0, import_lib2.$EXPECT)($L7, 'Bullet "."'), (0, import_lib2.$R$0)((0, import_lib2.$EXPECT)($R23, "Bullet /[ \\t]+/")));
var Bullet$$ = [Bullet$0, Bullet$1];
function Bullet(ctx, state2) {
  return (0, import_lib2.$EVENT_C)(ctx, state2, "Bullet", Bullet$$);
}
var BulletedArrayWithTrailing$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(BulletedArray, (0, import_lib2.$E)(AllowedTrailingCallExpressions), (0, import_lib2.$Q)((0, import_lib2.$S)(NotDedented, Pipe, __, PipelineTailItem))), function($skip, $loc, $0, $1, $2, $3) {
  var array = $1;
  var trailing = $2;
  var pipeline = $3;
  if (trailing) {
    array = [array, trailing];
  }
  if (pipeline.length) {
    array = {
      type: "PipelineExpression",
      children: [void 0, array, pipeline]
    };
  }
  return array;
});
function BulletedArrayWithTrailing(ctx, state2) {
  return (0, import_lib2.$EVENT)(ctx, state2, "BulletedArrayWithTrailing", BulletedArrayWithTrailing$0);
}
var ObjectLiteral$0 = (0, import_lib2.$T)((0, import_lib2.$S)(ObjectBindingPattern, UpcomingAssignment), function(value) {
  return value[0];
});
var ObjectLiteral$1 = BracedObjectLiteral;
var ObjectLiteral$2 = NestedImplicitObjectLiteral;
var ObjectLiteral$3 = InlineObjectLiteral;
var ObjectLiteral$$ = [ObjectLiteral$0, ObjectLiteral$1, ObjectLiteral$2, ObjectLiteral$3];
function ObjectLiteral(ctx, state2) {
  return (0, import_lib2.$EVENT_C)(ctx, state2, "ObjectLiteral", ObjectLiteral$$);
}
var BracedObjectLiteral$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(OpenBrace, CloseBrace, ApplicationStart, AllowAll, (0, import_lib2.$E)((0, import_lib2.$C)(NestedPropertyDefinitions, SingleLineObjectProperties)), RestoreAll), function($skip, $loc, $0, $1, $2, $3, $4, $5, $6) {
  var open = $1;
  var close = $2;
  var properties = $5;
  if (!properties?.length) return $skip;
  let last = properties[properties.length - 1];
  if (last.delim?.implicit) {
    last = {
      ...last,
      delim: void 0,
      children: last.children.filter((c) => c !== last.delim)
    };
    properties = [...properties.slice(0, properties.length - 1), last];
  }
  return {
    type: "ObjectExpression",
    children: [open, properties, close],
    names: properties.flatMap((c) => c.names || []),
    properties
  };
});
var BracedObjectLiteral$1 = (0, import_lib2.$TS)((0, import_lib2.$S)(OpenBrace, AllowAll, (0, import_lib2.$E)((0, import_lib2.$S)(BracedObjectLiteralContent, __, CloseBrace)), RestoreAll), function($skip, $loc, $0, $1, $2, $3, $4) {
  var open = $1;
  if (!$3) return $skip;
  const [properties, ...close] = $3;
  return {
    type: "ObjectExpression",
    children: [open, properties, close],
    names: properties.flatMap((c) => c.names || []),
    properties
  };
});
var BracedObjectLiteral$$ = [BracedObjectLiteral$0, BracedObjectLiteral$1];
function BracedObjectLiteral(ctx, state2) {
  return (0, import_lib2.$EVENT_C)(ctx, state2, "BracedObjectLiteral", BracedObjectLiteral$$);
}
var SingleLineObjectProperties$0 = (0, import_lib2.$TV)((0, import_lib2.$Q)((0, import_lib2.$S)(PropertyDefinition, ObjectPropertyDelimiter)), function($skip, $loc, $0, $1) {
  var line = $0;
  return line.flatMap(([prop, delim]) => {
    prop = Array.isArray(prop) ? prop : [prop];
    let last = prop[prop.length - 1];
    if (!last) return [];
    last = {
      ...last,
      delim,
      children: [...last.children, delim]
    };
    return [...prop.slice(0, prop.length - 1), last];
  });
});
function SingleLineObjectProperties(ctx, state2) {
  return (0, import_lib2.$EVENT)(ctx, state2, "SingleLineObjectProperties", SingleLineObjectProperties$0);
}
var BracedObjectLiteralContent$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(SingleLineObjectProperties, (0, import_lib2.$E)(NestedPropertyDefinitions)), function($skip, $loc, $0, $1, $2) {
  var line = $1;
  var nested = $2;
  return line.concat(nested || []);
});
var BracedObjectLiteralContent$1 = (0, import_lib2.$TV)((0, import_lib2.$P)((0, import_lib2.$S)(__, PropertyDefinition, ObjectPropertyDelimiter)), function($skip, $loc, $0, $1) {
  return $0.flatMap(([ws, prop, delim]) => {
    prop = Array.isArray(prop) ? prop : [prop];
    let last = prop[prop.length - 1];
    last = {
      ...last,
      delim,
      // __ will consume all whitespace that _? in PropertyDefinition could,
      // so replace _? (via slice) with __
      children: [ws, ...last.children.slice(1), delim]
    };
    return [...prop.slice(0, prop.length - 1), last];
  });
});
var BracedObjectLiteralContent$$ = [BracedObjectLiteralContent$0, BracedObjectLiteralContent$1];
function BracedObjectLiteralContent(ctx, state2) {
  return (0, import_lib2.$EVENT_C)(ctx, state2, "BracedObjectLiteralContent", BracedObjectLiteralContent$$);
}
var NestedImplicitObjectLiteral$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(InsertOpenBrace, PushIndent, AllowPipeline, (0, import_lib2.$E)(NestedImplicitPropertyDefinitions), RestorePipeline, PopIndent, InsertNewline, InsertIndent, InsertCloseBrace), function($skip, $loc, $0, $1, $2, $3, $4, $5, $6, $7, $8, $9) {
  var properties = $4;
  if (!properties) return $skip;
  return {
    type: "ObjectExpression",
    properties,
    children: $0
  };
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
  var indent = $1;
  var props = $2;
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
  if (!defs.length) return $skip;
  return defs.flat();
});
function NestedPropertyDefinitions(ctx, state2) {
  return (0, import_lib2.$EVENT)(ctx, state2, "NestedPropertyDefinitions", NestedPropertyDefinitions$0);
}
var NestedPropertyDefinition$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(Nested, (0, import_lib2.$P)((0, import_lib2.$S)(PropertyDefinition, ObjectPropertyDelimiter))), function($skip, $loc, $0, $1, $2) {
  var ws = $1;
  var inlineProps = $2;
  return inlineProps.flatMap(([prop, delim], i) => {
    if (!Array.isArray(prop)) prop = [prop];
    if (i === 0) {
      const [first, ...rest] = prop;
      prop = [prepend(ws, first), ...rest];
    }
    const last = prop[prop.length - 1];
    prop = [
      ...prop.slice(0, prop.length - 1),
      {
        ...last,
        delim,
        children: [...last.children, delim]
      }
    ];
    return prop;
  });
});
function NestedPropertyDefinition(ctx, state2) {
  return (0, import_lib2.$EVENT)(ctx, state2, "NestedPropertyDefinition", NestedPropertyDefinition$0);
}
var ImplicitObjectLiteral$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(InsertInlineOpenBrace, SnugNamedProperty, (0, import_lib2.$Q)((0, import_lib2.$S)(ImplicitObjectPropertyDelimiter, NamedProperty)), (0, import_lib2.$E)((0, import_lib2.$S)((0, import_lib2.$E)(_), Comma)), InsertCloseBrace), function($skip, $loc, $0, $1, $2, $3, $4, $5) {
  var open = $1;
  var first = $2;
  var rest = $3;
  var trailing = $4;
  var close = $5;
  return {
    type: "ObjectExpression",
    children: [open, first, ...rest, trailing, close]
  };
});
function ImplicitObjectLiteral(ctx, state2) {
  return (0, import_lib2.$EVENT)(ctx, state2, "ImplicitObjectLiteral", ImplicitObjectLiteral$0);
}
var ImplicitObjectPropertyDelimiter$0 = (0, import_lib2.$S)((0, import_lib2.$E)(_), Comma, (0, import_lib2.$C)(NotDedented, (0, import_lib2.$E)(_)));
var ImplicitObjectPropertyDelimiter$1 = (0, import_lib2.$T)((0, import_lib2.$S)((0, import_lib2.$Y)((0, import_lib2.$S)(Nested, NamedProperty)), InsertComma, Nested), function(value) {
  return [value[1], value[2]];
});
var ImplicitObjectPropertyDelimiter$$ = [ImplicitObjectPropertyDelimiter$0, ImplicitObjectPropertyDelimiter$1];
function ImplicitObjectPropertyDelimiter(ctx, state2) {
  return (0, import_lib2.$EVENT_C)(ctx, state2, "ImplicitObjectPropertyDelimiter", ImplicitObjectPropertyDelimiter$$);
}
var InlineObjectLiteral$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(InsertInlineOpenBrace, SnugNamedProperty, (0, import_lib2.$Q)((0, import_lib2.$S)(InlineObjectPropertyDelimiter, NamedProperty)), (0, import_lib2.$E)((0, import_lib2.$S)((0, import_lib2.$E)(_), Comma, (0, import_lib2.$Y)(Dedented))), InsertCloseBrace), function($skip, $loc, $0, $1, $2, $3, $4, $5) {
  var open = $1;
  var first = $2;
  var rest = $3;
  var trailing = $4;
  var close = $5;
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
var ObjectPropertyDelimiter$0 = (0, import_lib2.$S)((0, import_lib2.$E)(_), Comma);
var ObjectPropertyDelimiter$1 = (0, import_lib2.$Y)((0, import_lib2.$S)(__, (0, import_lib2.$EXPECT)($L37, 'ObjectPropertyDelimiter "}"')));
var ObjectPropertyDelimiter$2 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$Y)(EOS), InsertComma), function($skip, $loc, $0, $1, $2) {
  return { ...$2, implicit: true };
});
var ObjectPropertyDelimiter$$ = [ObjectPropertyDelimiter$0, ObjectPropertyDelimiter$1, ObjectPropertyDelimiter$2];
function ObjectPropertyDelimiter(ctx, state2) {
  return (0, import_lib2.$EVENT_C)(ctx, state2, "ObjectPropertyDelimiter", ObjectPropertyDelimiter$$);
}
var PropertyDefinition$0 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$E)(_), InsertDotDotDot, IterationExpression), function($skip, $loc, $0, $1, $2, $3) {
  var ws = $1;
  var dots = $2;
  var exp = $3;
  let { statement } = exp;
  if (exp.block.implicit && (statement.type === "DoStatement" || statement.subtype === "loop")) {
    return $skip;
  }
  statement = { ...statement, object: true };
  exp = {
    ...exp,
    statement,
    children: exp.children.map(($) => $ === exp.statement ? statement : $)
  };
  const children = [ws, dots, exp];
  if (statement.reduction) {
    children.unshift({
      type: "Error",
      message: "Reduction loops are forbidden in object literals"
    });
  }
  return {
    type: "SpreadProperty",
    children,
    names: exp.names,
    dots,
    value: exp
  };
});
var PropertyDefinition$1 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$E)(_), NamedProperty), function($skip, $loc, $0, $1, $2) {
  var ws = $1;
  var prop = $2;
  return prepend(ws, prop);
});
var PropertyDefinition$2 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$E)(_), (0, import_lib2.$TEXT)((0, import_lib2.$EXPECT)($R24, "PropertyDefinition /[!+-]?/")), PropertyName, (0, import_lib2.$Y)(ObjectPropertyDelimiter)), function($skip, $loc, $0, $1, $2, $3, $4) {
  var ws = $1;
  var toggle = $2;
  var id = $3;
  if (toggle) {
    const value = toggle === "+" ? "true" : "false";
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
});
var PropertyDefinition$3 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$E)(_), MethodDefinition), function($skip, $loc, $0, $1, $2) {
  var ws = $1;
  var def = $2;
  if (def.type === "MultiMethodDefinition") {
    return {
      children: def.children.flatMap((c, i) => i ? [",", c] : [c])
    };
  }
  if (!def.block || def.block.empty) return $skip;
  return prepend(ws, def);
});
var PropertyDefinition$4 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$E)(_), DotDotDot, Expression), function($skip, $loc, $0, $1, $2, $3) {
  var ws = $1;
  var dots = $2;
  var exp = $3;
  return {
    type: "SpreadProperty",
    children: [ws, dots, exp],
    names: exp.names,
    dots,
    value: exp
  };
});
var PropertyDefinition$5 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$E)(_), (0, import_lib2.$N)((0, import_lib2.$C)(EOS, (0, import_lib2.$EXPECT)($L7, 'PropertyDefinition "."'))), (0, import_lib2.$Q)(UnaryOp), CallExpression, (0, import_lib2.$E)(UnaryPostfix)), function($skip, $loc, $0, $1, $2, $3, $4, $5) {
  var ws = $1;
  var pre = $3;
  var value = $4;
  var post = $5;
  if (!pre.length && !post) {
    switch (value.type) {
      // `{identifier}` remains `{identifier}`, the one shorthand JS supports
      case "Identifier":
        return prepend(ws, value);
      // PropertyGlob like x.{a,b} turns into ObjectExpression {a: x.a, b: x.b}
      // (via `processCallMemberExpression`)
      case "ObjectExpression":
        let first = value.properties[0];
        if (first) {
          first = {
            ...first,
            children: [ws, ...first.children],
            hoistDec: value.hoistDec
          };
        }
        return [first, ...value.properties.slice(1)];
    }
  }
  const last = lastAccessInCallExpression(value);
  if (!last) return $skip;
  let name, ref, refAssignment;
  const { expression, type } = last;
  if (type === "Index") {
    ({ ref, refAssignment } = maybeRefAssignment(expression));
    if (refAssignment) {
      name = {
        type: "ComputedPropertyName",
        children: [last.children[0], "(", refAssignment, ",", ref, ")", ...last.children.slice(-2)]
      };
      value = {
        ...value,
        children: value.children.map((c) => {
          if (c === last) return {
            type: "Index",
            children: ["[", ref, "]"]
          };
          return c;
        })
      };
    } else {
      name = {
        type: "ComputedPropertyName",
        children: last.children
      };
    }
  } else {
    ({ name } = last);
    if (!name) return $skip;
  }
  if (name[0] === "#") name = name.slice(1);
  return {
    type: "Property",
    children: [ws, name, ": ", processUnaryExpression(pre, value, post)],
    name,
    names: [],
    value
  };
});
var PropertyDefinition$$ = [PropertyDefinition$0, PropertyDefinition$1, PropertyDefinition$2, PropertyDefinition$3, PropertyDefinition$4, PropertyDefinition$5];
function PropertyDefinition(ctx, state2) {
  return (0, import_lib2.$EVENT_C)(ctx, state2, "PropertyDefinition", PropertyDefinition$$);
}
var NamedProperty$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(PropertyName, (0, import_lib2.$E)(_), Colon, PostfixedExpression), function($skip, $loc, $0, $1, $2, $3, $4) {
  var name = $1;
  var exp = $4;
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
  var name = $1;
  var colon = $2;
  var expression = $3;
  var post = $4;
  if (post) {
    expression = attachPostfixStatementAsExpression(expression, post[0]);
  }
  return {
    type: "Property",
    children: [name, colon, expression],
    name,
    names: expression.names || []
  };
});
function SnugNamedProperty(ctx, state2) {
  return (0, import_lib2.$EVENT)(ctx, state2, "SnugNamedProperty", SnugNamedProperty$0);
}
var PropertyName$0 = NumericLiteral;
var PropertyName$1 = ComputedPropertyName;
var PropertyName$2 = StringLiteral;
var PropertyName$3 = (0, import_lib2.$TV)((0, import_lib2.$TEXT)((0, import_lib2.$S)((0, import_lib2.$E)(IdentifierName), (0, import_lib2.$EXPECT)($L23, 'PropertyName "-"'), (0, import_lib2.$EXPECT)($R25, "PropertyName /(?:\\p{ID_Continue}|[\\u200C\\u200D$-])*/"))), function($skip, $loc, $0, $1) {
  return {
    token: `"${$1}"`,
    $loc
  };
});
var PropertyName$4 = IdentifierName;
var PropertyName$5 = LengthShorthand;
var PropertyName$6 = SymbolElement;
var PropertyName$$ = [PropertyName$0, PropertyName$1, PropertyName$2, PropertyName$3, PropertyName$4, PropertyName$5, PropertyName$6];
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
});
var ComputedPropertyName$1 = (0, import_lib2.$TS)((0, import_lib2.$S)(InsertOpenBracket, TemplateLiteral, InsertCloseBracket), function($skip, $loc, $0, $1, $2, $3) {
  var expression = $2;
  if ($2.type === "StringLiteral") return $2;
  return {
    type: "ComputedPropertyName",
    children: $0,
    expression,
    implicit: true
  };
});
var ComputedPropertyName$2 = (0, import_lib2.$TS)((0, import_lib2.$S)(InsertOpenBracket, (0, import_lib2.$EXPECT)($R14, "ComputedPropertyName /[+-]/"), NumericLiteral, InsertCloseBracket), function($skip, $loc, $0, $1, $2, $3, $4) {
  const expression = [$2, $3];
  return {
    type: "ComputedPropertyName",
    expression,
    children: [$1, expression, $4],
    implicit: true
  };
});
var ComputedPropertyName$$ = [ComputedPropertyName$0, ComputedPropertyName$1, ComputedPropertyName$2];
function ComputedPropertyName(ctx, state2) {
  return (0, import_lib2.$EVENT_C)(ctx, state2, "ComputedPropertyName", ComputedPropertyName$$);
}
var Decorator$0 = (0, import_lib2.$S)(AtAt, CallExpression);
function Decorator(ctx, state2) {
  return (0, import_lib2.$EVENT)(ctx, state2, "Decorator", Decorator$0);
}
var Decorators$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(ForbidClassImplicitCall, (0, import_lib2.$Q)((0, import_lib2.$S)(__, Decorator)), __, RestoreClassImplicitCall), function($skip, $loc, $0, $1, $2, $3, $4) {
  var decorators = $2;
  if (!decorators.length) return $skip;
  return $0;
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
    abstract: true,
    signature,
    parameters: signature.parameters,
    async: signature.async,
    generator: signature.generator,
    ts: true
  };
});
var MethodDefinition$1 = (0, import_lib2.$TS)((0, import_lib2.$S)(MethodSignature, (0, import_lib2.$N)((0, import_lib2.$C)(PropertyAccess, ExplicitPropertyGlob, UnaryPostfix, NonNullAssertion)), (0, import_lib2.$E)(BracedBlock)), function($skip, $loc, $0, $1, $2, $3) {
  var signature = $1;
  var block = $3;
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
});
var MethodDefinition$2 = (0, import_lib2.$TS)((0, import_lib2.$S)(GetOrSet, (0, import_lib2.$E)(_), ForbidIndentedApplication, (0, import_lib2.$E)((0, import_lib2.$S)(MemberBase, (0, import_lib2.$Q)(CallExpressionRest), (0, import_lib2.$E)(ReturnTypeSuffix))), RestoreIndentedApplication, (0, import_lib2.$E)(BracedBlock)), function($skip, $loc, $0, $1, $2, $3, $4, $5, $6) {
  var kind = $1;
  var ws = $2;
  var content = $4;
  var block = $6;
  if (!content) return $skip;
  const [base, rest, returnType] = content;
  const value = [base, rest];
  if (!rest.length) {
    let name2;
    if (base.type === "MemberExpression") {
      const lastAccess2 = lastAccessInCallExpression(base);
      if (lastAccess2) {
        ({ name: name2 } = lastAccess2);
      }
    }
    if (!name2) ({ name: name2 } = base);
    if (!name2) return $skip;
    if (name2[0] === "#") name2 = name2.slice(1);
    const autoReturn = !block || base.type !== "Identifier";
    return makeGetterMethod(name2, ws, base, returnType, block, kind, autoReturn);
  }
  let last = rest[rest.length - 1];
  while (Array.isArray(last)) {
    last = last[last.length - 1];
  }
  switch (last.type) {
    case "Call":
      return $skip;
    case "PropertyAccess":
      const { name: name2 } = last;
      return makeGetterMethod(name2, ws, value, returnType, block, kind);
    case "PropertyGlob":
      return {
        type: "MultiMethodDefinition",
        children: last.object.properties.map((p) => {
          const { name: name3, type } = p;
          let v;
          switch (type) {
            case "Identifier":
              v = trimFirstSpace(p);
              break;
            case "Property":
              const { value: value2 } = p;
              if (value2.privateShorthand) {
                v = value2.privateId;
              } else {
                v = trimFirstSpace(value2);
              }
              break;
          }
          const exp = processCallMemberExpression({
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
  const lastAccess = lastAccessInCallExpression({ children: rest });
  const { name } = lastAccess;
  return makeGetterMethod(name, ws, value, returnType, block, kind);
});
var MethodDefinition$$ = [MethodDefinition$0, MethodDefinition$1, MethodDefinition$2];
function MethodDefinition(ctx, state2) {
  return (0, import_lib2.$EVENT_C)(ctx, state2, "MethodDefinition", MethodDefinition$$);
}
var MethodModifier$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(GetOrSet, (0, import_lib2.$E)(_), (0, import_lib2.$Y)(ClassElementName)), function($skip, $loc, $0, $1, $2, $3) {
  var kind = $1;
  var ws = $2;
  return {
    // no async or generator, because getters and setters can't be
    modifier: {
      async: false,
      generator: false,
      get: kind.token === "get",
      set: kind.token === "set"
    },
    children: [kind, ws]
  };
});
var MethodModifier$1 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$E)((0, import_lib2.$S)(Async, __)), (0, import_lib2.$E)((0, import_lib2.$S)(Star, __))), function($skip, $loc, $0, $1, $2) {
  var async = $1;
  var generator = $2;
  if (!async) async = [];
  if (!generator) generator = [];
  return {
    async,
    generator,
    modifier: {
      async: !!async.length,
      get: false,
      set: false,
      generator: !!generator.length
    },
    children: [async, generator]
  };
});
var MethodModifier$$ = [MethodModifier$0, MethodModifier$1];
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
});
var MethodSignature$1 = (0, import_lib2.$TS)((0, import_lib2.$S)(MethodModifier, ClassElementName, (0, import_lib2.$E)(_), (0, import_lib2.$E)(QuestionMark), (0, import_lib2.$E)(_), NonEmptyParameters, (0, import_lib2.$E)(ReturnTypeSuffix)), function($skip, $loc, $0, $1, $2, $3, $4, $5, $6, $7) {
  var modifier = $1;
  var name = $2;
  var ws1 = $3;
  var optional = $4;
  var ws2 = $5;
  var parameters = $6;
  var returnType = $7;
  if (name.name) {
    name = name.name;
  } else if (name.token) {
    name = name.token.match(/^(?:"|')/) ? name.token.slice(1, -1) : name.token;
  }
  if (optional) optional = { ...optional, ts: true };
  return {
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
});
var MethodSignature$$ = [MethodSignature$0, MethodSignature$1];
function MethodSignature(ctx, state2) {
  return (0, import_lib2.$EVENT_C)(ctx, state2, "MethodSignature", MethodSignature$$);
}
var ClassElementName$0 = PropertyName;
var ClassElementName$1 = LengthShorthand;
var ClassElementName$2 = PrivateIdentifier;
var ClassElementName$3 = SymbolElement;
var ClassElementName$$ = [ClassElementName$0, ClassElementName$1, ClassElementName$2, ClassElementName$3];
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
var WAssignmentOp$0 = (0, import_lib2.$S)(__, AssignmentOp);
var WAssignmentOp$1 = (0, import_lib2.$S)((0, import_lib2.$E)(_), OperatorAssignmentOp);
var WAssignmentOp$$ = [WAssignmentOp$0, WAssignmentOp$1];
function WAssignmentOp(ctx, state2) {
  return (0, import_lib2.$EVENT_C)(ctx, state2, "WAssignmentOp", WAssignmentOp$$);
}
var AssignmentOp$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(AssignmentOpSymbol, (0, import_lib2.$E)(_)), function($skip, $loc, $0, $1, $2) {
  if ($2?.length) {
    if (typeof $1 !== "string") {
      return { ...$1, children: [...$1.children, $2] };
    }
    return {
      token: $1,
      children: [$1, ...$2]
    };
  }
  if (typeof $1 !== "string") return $1;
  return { $loc, token: $1 };
});
function AssignmentOp(ctx, state2) {
  return (0, import_lib2.$EVENT)(ctx, state2, "AssignmentOp", AssignmentOp$0);
}
var OperatorAssignmentOp$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(Xor, Equals, (0, import_lib2.$E)(_)), function($skip, $loc, $0, $1, $2, $3) {
  return {
    special: true,
    call: getHelperRef("xor"),
    children: [$2, ...$3 || []]
  };
});
var OperatorAssignmentOp$1 = (0, import_lib2.$TS)((0, import_lib2.$S)(Xnor, Equals, (0, import_lib2.$E)(_)), function($skip, $loc, $0, $1, $2, $3) {
  return {
    special: true,
    call: getHelperRef("xnor"),
    children: [$2, ...$3 || []]
  };
});
var OperatorAssignmentOp$2 = (0, import_lib2.$TS)((0, import_lib2.$S)(CoffeeDivEnabled, (0, import_lib2.$EXPECT)($L48, 'OperatorAssignmentOp "//"'), Equals, (0, import_lib2.$E)(_)), function($skip, $loc, $0, $1, $2, $3, $4) {
  return {
    special: true,
    call: getHelperRef("div"),
    children: [$3, ...$4 || []]
  };
});
var OperatorAssignmentOp$3 = (0, import_lib2.$TS)((0, import_lib2.$S)(Identifier, Equals, (0, import_lib2.$E)(_)), function($skip, $loc, $0, $1, $2, $3) {
  return {
    special: true,
    call: $1,
    children: [$2, ...$3 || []]
  };
});
var OperatorAssignmentOp$$ = [OperatorAssignmentOp$0, OperatorAssignmentOp$1, OperatorAssignmentOp$2, OperatorAssignmentOp$3];
function OperatorAssignmentOp(ctx, state2) {
  return (0, import_lib2.$EVENT_C)(ctx, state2, "OperatorAssignmentOp", OperatorAssignmentOp$$);
}
var AssignmentOpSymbol$0 = (0, import_lib2.$EXPECT)($L49, 'AssignmentOpSymbol "**="');
var AssignmentOpSymbol$1 = (0, import_lib2.$EXPECT)($L50, 'AssignmentOpSymbol "*="');
var AssignmentOpSymbol$2 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$C)((0, import_lib2.$EXPECT)($L51, 'AssignmentOpSymbol "%/"'), (0, import_lib2.$EXPECT)($L52, 'AssignmentOpSymbol "\xF7"')), Equals), function($skip, $loc, $0, $1, $2) {
  return {
    special: true,
    call: getHelperRef("div"),
    children: [$2]
  };
});
var AssignmentOpSymbol$3 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$EXPECT)($L53, 'AssignmentOpSymbol "%%"'), Equals), function($skip, $loc, $0, $1, $2) {
  return {
    special: true,
    call: getHelperRef("modulo"),
    children: [$2]
  };
});
var AssignmentOpSymbol$4 = (0, import_lib2.$EXPECT)($L54, 'AssignmentOpSymbol "/="');
var AssignmentOpSymbol$5 = (0, import_lib2.$EXPECT)($L55, 'AssignmentOpSymbol "%="');
var AssignmentOpSymbol$6 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$C)((0, import_lib2.$EXPECT)($L9, 'AssignmentOpSymbol "++"'), (0, import_lib2.$EXPECT)($L11, 'AssignmentOpSymbol "\u29FA"')), Equals), function($skip, $loc, $0, $1, $2) {
  return {
    special: true,
    call: getHelperRef("concatAssign"),
    omitLhs: true,
    children: [$2]
  };
});
var AssignmentOpSymbol$7 = (0, import_lib2.$EXPECT)($L56, 'AssignmentOpSymbol "+="');
var AssignmentOpSymbol$8 = (0, import_lib2.$EXPECT)($L57, 'AssignmentOpSymbol "-="');
var AssignmentOpSymbol$9 = (0, import_lib2.$EXPECT)($L58, 'AssignmentOpSymbol "<<="');
var AssignmentOpSymbol$10 = (0, import_lib2.$T)((0, import_lib2.$EXPECT)($L59, 'AssignmentOpSymbol "\u226A="'), function(value) {
  return "<<=";
});
var AssignmentOpSymbol$11 = (0, import_lib2.$EXPECT)($L60, 'AssignmentOpSymbol ">>>="');
var AssignmentOpSymbol$12 = (0, import_lib2.$T)((0, import_lib2.$EXPECT)($L61, 'AssignmentOpSymbol "\u22D9="'), function(value) {
  return ">>>=";
});
var AssignmentOpSymbol$13 = (0, import_lib2.$EXPECT)($L62, 'AssignmentOpSymbol ">>="');
var AssignmentOpSymbol$14 = (0, import_lib2.$T)((0, import_lib2.$EXPECT)($L63, 'AssignmentOpSymbol "\u226B="'), function(value) {
  return ">>=";
});
var AssignmentOpSymbol$15 = (0, import_lib2.$EXPECT)($L64, 'AssignmentOpSymbol "&&="');
var AssignmentOpSymbol$16 = (0, import_lib2.$EXPECT)($L65, 'AssignmentOpSymbol "&="');
var AssignmentOpSymbol$17 = (0, import_lib2.$EXPECT)($L66, 'AssignmentOpSymbol "^="');
var AssignmentOpSymbol$18 = (0, import_lib2.$EXPECT)($L67, 'AssignmentOpSymbol "||="');
var AssignmentOpSymbol$19 = (0, import_lib2.$T)((0, import_lib2.$EXPECT)($L68, 'AssignmentOpSymbol "\u2016="'), function(value) {
  return "||=";
});
var AssignmentOpSymbol$20 = (0, import_lib2.$EXPECT)($L69, 'AssignmentOpSymbol "|="');
var AssignmentOpSymbol$21 = (0, import_lib2.$EXPECT)($L70, 'AssignmentOpSymbol "??="');
var AssignmentOpSymbol$22 = (0, import_lib2.$T)((0, import_lib2.$EXPECT)($L71, 'AssignmentOpSymbol "\u2047="'), function(value) {
  return "??=";
});
var AssignmentOpSymbol$23 = (0, import_lib2.$T)((0, import_lib2.$EXPECT)($L72, 'AssignmentOpSymbol "?="'), function(value) {
  return "??=";
});
var AssignmentOpSymbol$24 = (0, import_lib2.$T)((0, import_lib2.$S)((0, import_lib2.$EXPECT)($L3, 'AssignmentOpSymbol "="'), (0, import_lib2.$N)((0, import_lib2.$EXPECT)($R26, "AssignmentOpSymbol /[=>]/"))), function(value) {
  return value[0];
});
var AssignmentOpSymbol$25 = (0, import_lib2.$T)((0, import_lib2.$S)(CoffeeWordAssignmentOp), function(value) {
  return value[0];
});
var AssignmentOpSymbol$$ = [AssignmentOpSymbol$0, AssignmentOpSymbol$1, AssignmentOpSymbol$2, AssignmentOpSymbol$3, AssignmentOpSymbol$4, AssignmentOpSymbol$5, AssignmentOpSymbol$6, AssignmentOpSymbol$7, AssignmentOpSymbol$8, AssignmentOpSymbol$9, AssignmentOpSymbol$10, AssignmentOpSymbol$11, AssignmentOpSymbol$12, AssignmentOpSymbol$13, AssignmentOpSymbol$14, AssignmentOpSymbol$15, AssignmentOpSymbol$16, AssignmentOpSymbol$17, AssignmentOpSymbol$18, AssignmentOpSymbol$19, AssignmentOpSymbol$20, AssignmentOpSymbol$21, AssignmentOpSymbol$22, AssignmentOpSymbol$23, AssignmentOpSymbol$24, AssignmentOpSymbol$25];
function AssignmentOpSymbol(ctx, state2) {
  return (0, import_lib2.$EVENT_C)(ctx, state2, "AssignmentOpSymbol", AssignmentOpSymbol$$);
}
var CoffeeWordAssignmentOp$0 = (0, import_lib2.$T)((0, import_lib2.$EXPECT)($L73, 'CoffeeWordAssignmentOp "and="'), function(value) {
  return "&&=";
});
var CoffeeWordAssignmentOp$1 = (0, import_lib2.$T)((0, import_lib2.$EXPECT)($L74, 'CoffeeWordAssignmentOp "or="'), function(value) {
  return "||=";
});
var CoffeeWordAssignmentOp$$ = [CoffeeWordAssignmentOp$0, CoffeeWordAssignmentOp$1];
function CoffeeWordAssignmentOp(ctx, state2) {
  return (0, import_lib2.$EVENT_C)(ctx, state2, "CoffeeWordAssignmentOp", CoffeeWordAssignmentOp$$);
}
var NotDedentedBinaryOp$0 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$E)(IndentedFurther), (0, import_lib2.$E)(_), BinaryOp), function($skip, $loc, $0, $1, $2, $3) {
  var ws1 = $1;
  var ws2 = $2;
  var op = $3;
  const ws = [];
  if (ws1) ws.push(...ws1);
  if (ws2) ws.push(...ws2);
  return [ws, op];
});
var NotDedentedBinaryOp$1 = (0, import_lib2.$TS)((0, import_lib2.$S)(NestedBinaryOpAllowed, Nested, (0, import_lib2.$E)(_), (0, import_lib2.$N)(Identifier), (0, import_lib2.$C)((0, import_lib2.$N)((0, import_lib2.$EXPECT)($L75, 'NotDedentedBinaryOp "*"')), (0, import_lib2.$N)(ImportDeclaration)), BinaryOp), function($skip, $loc, $0, $1, $2, $3, $4, $5, $6) {
  var ws1 = $2;
  var ws2 = $3;
  var op = $6;
  const ws = [...ws1];
  if (ws2) ws.push(...ws2);
  return [ws, op];
});
var NotDedentedBinaryOp$$ = [NotDedentedBinaryOp$0, NotDedentedBinaryOp$1];
function NotDedentedBinaryOp(ctx, state2) {
  return (0, import_lib2.$EVENT_C)(ctx, state2, "NotDedentedBinaryOp", NotDedentedBinaryOp$$);
}
var IdentifierBinaryOp$0 = (0, import_lib2.$TV)(Identifier, function($skip, $loc, $0, $1) {
  var id = $0;
  if (state.operators.has(id.name)) return id;
  return $skip;
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
  if (typeof $1 === "string") return { $loc, token: $1 };
  return $1;
});
var _BinaryOp$1 = (0, import_lib2.$TV)(Identifier, function($skip, $loc, $0, $1) {
  var id = $0;
  if (!state.operators.has(id.name)) return $skip;
  return {
    token: id.name,
    call: id,
    special: true,
    ...state.operators.get(id.name)
  };
});
var _BinaryOp$2 = (0, import_lib2.$TS)((0, import_lib2.$S)(OmittedNegation, __, Identifier), function($skip, $loc, $0, $1, $2, $3) {
  var id = $3;
  if (!state.operators.has(id.name)) return $skip;
  return {
    token: id.name,
    call: id,
    special: true,
    negated: true,
    ...state.operators.get(id.name)
  };
});
var _BinaryOp$$ = [_BinaryOp$0, _BinaryOp$1, _BinaryOp$2];
function _BinaryOp(ctx, state2) {
  return (0, import_lib2.$EVENT_C)(ctx, state2, "_BinaryOp", _BinaryOp$$);
}
var BinaryOpSymbol$0 = (0, import_lib2.$EXPECT)($L76, 'BinaryOpSymbol "**"');
var BinaryOpSymbol$1 = (0, import_lib2.$EXPECT)($L75, 'BinaryOpSymbol "*"');
var BinaryOpSymbol$2 = (0, import_lib2.$TV)((0, import_lib2.$C)((0, import_lib2.$EXPECT)($L51, 'BinaryOpSymbol "%/"'), (0, import_lib2.$EXPECT)($L52, 'BinaryOpSymbol "\xF7"'), (0, import_lib2.$S)(CoffeeDivEnabled, (0, import_lib2.$EXPECT)($L48, 'BinaryOpSymbol "//"'))), function($skip, $loc, $0, $1) {
  return {
    call: getHelperRef("div"),
    special: true,
    prec: "/"
  };
});
var BinaryOpSymbol$3 = (0, import_lib2.$TV)((0, import_lib2.$EXPECT)($L53, 'BinaryOpSymbol "%%"'), function($skip, $loc, $0, $1) {
  return {
    call: getHelperRef("modulo"),
    special: true,
    prec: "%"
  };
});
var BinaryOpSymbol$4 = (0, import_lib2.$EXPECT)($L77, 'BinaryOpSymbol "/"');
var BinaryOpSymbol$5 = (0, import_lib2.$EXPECT)($L78, 'BinaryOpSymbol "%"');
var BinaryOpSymbol$6 = (0, import_lib2.$TV)((0, import_lib2.$C)((0, import_lib2.$EXPECT)($L9, 'BinaryOpSymbol "++"'), (0, import_lib2.$EXPECT)($L11, 'BinaryOpSymbol "\u29FA"')), function($skip, $loc, $0, $1) {
  return {
    method: "concat",
    special: true
  };
});
var BinaryOpSymbol$7 = (0, import_lib2.$EXPECT)($L79, 'BinaryOpSymbol "+"');
var BinaryOpSymbol$8 = (0, import_lib2.$EXPECT)($L23, 'BinaryOpSymbol "-"');
var BinaryOpSymbol$9 = (0, import_lib2.$EXPECT)($L80, 'BinaryOpSymbol "<="');
var BinaryOpSymbol$10 = (0, import_lib2.$T)((0, import_lib2.$EXPECT)($L81, 'BinaryOpSymbol "\u2264"'), function(value) {
  return "<=";
});
var BinaryOpSymbol$11 = (0, import_lib2.$EXPECT)($L82, 'BinaryOpSymbol ">="');
var BinaryOpSymbol$12 = (0, import_lib2.$T)((0, import_lib2.$EXPECT)($L83, 'BinaryOpSymbol "\u2265"'), function(value) {
  return ">=";
});
var BinaryOpSymbol$13 = (0, import_lib2.$TV)((0, import_lib2.$EXPECT)($L22, 'BinaryOpSymbol "<?"'), function($skip, $loc, $0, $1) {
  return {
    $loc,
    token: "instanceof",
    spaced: true,
    relational: true,
    special: true
  };
});
var BinaryOpSymbol$14 = (0, import_lib2.$TV)((0, import_lib2.$EXPECT)($L84, 'BinaryOpSymbol "!<?"'), function($skip, $loc, $0, $1) {
  return {
    $loc,
    token: "instanceof",
    spaced: true,
    relational: true,
    special: true,
    negated: true
  };
});
var BinaryOpSymbol$15 = (0, import_lib2.$EXPECT)($L85, 'BinaryOpSymbol "<<"');
var BinaryOpSymbol$16 = (0, import_lib2.$T)((0, import_lib2.$EXPECT)($L86, 'BinaryOpSymbol "\u226A"'), function(value) {
  return "<<";
});
var BinaryOpSymbol$17 = (0, import_lib2.$EXPECT)($L18, 'BinaryOpSymbol "<"');
var BinaryOpSymbol$18 = (0, import_lib2.$EXPECT)($L87, 'BinaryOpSymbol ">>>"');
var BinaryOpSymbol$19 = (0, import_lib2.$T)((0, import_lib2.$EXPECT)($L88, 'BinaryOpSymbol "\u22D9"'), function(value) {
  return ">>>";
});
var BinaryOpSymbol$20 = (0, import_lib2.$EXPECT)($L89, 'BinaryOpSymbol ">>"');
var BinaryOpSymbol$21 = (0, import_lib2.$T)((0, import_lib2.$EXPECT)($L90, 'BinaryOpSymbol "\u226B"'), function(value) {
  return ">>";
});
var BinaryOpSymbol$22 = (0, import_lib2.$EXPECT)($L45, 'BinaryOpSymbol ">"');
var BinaryOpSymbol$23 = (0, import_lib2.$EXPECT)($L91, 'BinaryOpSymbol "!=="');
var BinaryOpSymbol$24 = (0, import_lib2.$T)((0, import_lib2.$EXPECT)($L92, 'BinaryOpSymbol "\u2262"'), function(value) {
  return "!==";
});
var BinaryOpSymbol$25 = (0, import_lib2.$TV)((0, import_lib2.$C)((0, import_lib2.$EXPECT)($L93, 'BinaryOpSymbol "!="'), (0, import_lib2.$EXPECT)($L94, 'BinaryOpSymbol "\u2260"')), function($skip, $loc, $0, $1) {
  if (config.coffeeEq) return "!==";
  return "!=";
});
var BinaryOpSymbol$26 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$EXPECT)($L95, 'BinaryOpSymbol "isnt"'), NonIdContinue), function($skip, $loc, $0, $1, $2) {
  if (config.coffeeIsnt) return "!==";
  return $skip;
});
var BinaryOpSymbol$27 = (0, import_lib2.$EXPECT)($L96, 'BinaryOpSymbol "==="');
var BinaryOpSymbol$28 = (0, import_lib2.$T)((0, import_lib2.$C)((0, import_lib2.$EXPECT)($L97, 'BinaryOpSymbol "\u2263"'), (0, import_lib2.$EXPECT)($L98, 'BinaryOpSymbol "\u2A76"')), function(value) {
  return "===";
});
var BinaryOpSymbol$29 = (0, import_lib2.$TV)((0, import_lib2.$C)((0, import_lib2.$EXPECT)($L99, 'BinaryOpSymbol "=="'), (0, import_lib2.$EXPECT)($L100, 'BinaryOpSymbol "\u2261"'), (0, import_lib2.$EXPECT)($L101, 'BinaryOpSymbol "\u2A75"')), function($skip, $loc, $0, $1) {
  if (config.coffeeEq) return "===";
  return "==";
});
var BinaryOpSymbol$30 = (0, import_lib2.$T)((0, import_lib2.$S)((0, import_lib2.$EXPECT)($L102, 'BinaryOpSymbol "and"'), NonIdContinue), function(value) {
  return "&&";
});
var BinaryOpSymbol$31 = (0, import_lib2.$EXPECT)($L103, 'BinaryOpSymbol "&&"');
var BinaryOpSymbol$32 = (0, import_lib2.$T)((0, import_lib2.$S)((0, import_lib2.$EXPECT)($L104, 'BinaryOpSymbol "or"'), NonIdContinue), function(value) {
  return "||";
});
var BinaryOpSymbol$33 = (0, import_lib2.$EXPECT)($L105, 'BinaryOpSymbol "||"');
var BinaryOpSymbol$34 = (0, import_lib2.$T)((0, import_lib2.$EXPECT)($L106, 'BinaryOpSymbol "\u2016"'), function(value) {
  return "||";
});
var BinaryOpSymbol$35 = (0, import_lib2.$TV)((0, import_lib2.$C)((0, import_lib2.$EXPECT)($L107, 'BinaryOpSymbol "^^"'), (0, import_lib2.$S)((0, import_lib2.$EXPECT)($L108, 'BinaryOpSymbol "xor"'), NonIdContinue)), function($skip, $loc, $0, $1) {
  return {
    call: getHelperRef("xor"),
    special: true,
    prec: "^^"
  };
});
var BinaryOpSymbol$36 = (0, import_lib2.$TV)((0, import_lib2.$C)((0, import_lib2.$EXPECT)($R28, "BinaryOpSymbol /!\\^\\^?/"), (0, import_lib2.$S)((0, import_lib2.$EXPECT)($L109, 'BinaryOpSymbol "xnor"'), NonIdContinue)), function($skip, $loc, $0, $1) {
  return {
    call: getHelperRef("xnor"),
    special: true,
    prec: "^^"
  };
});
var BinaryOpSymbol$37 = (0, import_lib2.$EXPECT)($L110, 'BinaryOpSymbol "??"');
var BinaryOpSymbol$38 = (0, import_lib2.$T)((0, import_lib2.$EXPECT)($L111, 'BinaryOpSymbol "\u2047"'), function(value) {
  return "??";
});
var BinaryOpSymbol$39 = (0, import_lib2.$T)((0, import_lib2.$S)((0, import_lib2.$EXPECT)($L6, 'BinaryOpSymbol "?"'), CoffeeBinaryExistentialEnabled), function(value) {
  return "??";
});
var BinaryOpSymbol$40 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$EXPECT)($L112, 'BinaryOpSymbol "instanceof"'), NonIdContinue), function($skip, $loc, $0, $1, $2) {
  return {
    $loc,
    token: $1,
    spaced: true,
    relational: true,
    special: true
    // for typeof shorthand
  };
});
var BinaryOpSymbol$41 = (0, import_lib2.$T)((0, import_lib2.$S)(CoffeeOfEnabled, CoffeeOfOp), function(value) {
  var op = value[1];
  return op;
});
var BinaryOpSymbol$42 = (0, import_lib2.$TS)((0, import_lib2.$S)(OmittedNegation, __, NotOp), function($skip, $loc, $0, $1, $2, $3) {
  var op = $3;
  return { ...op, $loc };
});
var BinaryOpSymbol$43 = (0, import_lib2.$TV)((0, import_lib2.$C)((0, import_lib2.$S)(Is, __, In), (0, import_lib2.$EXPECT)($L113, 'BinaryOpSymbol "\u2208"')), function($skip, $loc, $0, $1) {
  return {
    method: "includes",
    relational: true,
    reversed: true,
    special: true
  };
});
var BinaryOpSymbol$44 = (0, import_lib2.$TV)((0, import_lib2.$EXPECT)($L114, 'BinaryOpSymbol "\u220B"'), function($skip, $loc, $0, $1) {
  return {
    method: "includes",
    relational: true,
    special: true
  };
});
var BinaryOpSymbol$45 = (0, import_lib2.$TV)((0, import_lib2.$EXPECT)($L115, 'BinaryOpSymbol "\u220C"'), function($skip, $loc, $0, $1) {
  return {
    method: "includes",
    relational: true,
    special: true,
    negated: true
  };
});
var BinaryOpSymbol$46 = (0, import_lib2.$TV)((0, import_lib2.$C)((0, import_lib2.$S)(Is, __, OmittedNegation, __, In), (0, import_lib2.$EXPECT)($L116, 'BinaryOpSymbol "\u2209"')), function($skip, $loc, $0, $1) {
  return {
    method: "includes",
    relational: true,
    reversed: true,
    special: true,
    negated: true
  };
});
var BinaryOpSymbol$47 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$N)(CoffeeNotEnabled), Is, __, Not), function($skip, $loc, $0, $1, $2, $3, $4) {
  if (config.objectIs) {
    return {
      call: getHelperRef("is"),
      relational: true,
      special: true,
      asConst: true,
      negated: true
    };
  }
  return "!==";
});
var BinaryOpSymbol$48 = (0, import_lib2.$TS)((0, import_lib2.$S)(Is), function($skip, $loc, $0, $1) {
  if (config.objectIs) {
    return {
      call: getHelperRef("is"),
      relational: true,
      special: true,
      asConst: true
    };
  }
  return "===";
});
var BinaryOpSymbol$49 = In;
var BinaryOpSymbol$50 = (0, import_lib2.$EXPECT)($L117, 'BinaryOpSymbol "&"');
var BinaryOpSymbol$51 = (0, import_lib2.$EXPECT)($L21, 'BinaryOpSymbol "^"');
var BinaryOpSymbol$52 = (0, import_lib2.$EXPECT)($L118, 'BinaryOpSymbol "|"');
var BinaryOpSymbol$$ = [BinaryOpSymbol$0, BinaryOpSymbol$1, BinaryOpSymbol$2, BinaryOpSymbol$3, BinaryOpSymbol$4, BinaryOpSymbol$5, BinaryOpSymbol$6, BinaryOpSymbol$7, BinaryOpSymbol$8, BinaryOpSymbol$9, BinaryOpSymbol$10, BinaryOpSymbol$11, BinaryOpSymbol$12, BinaryOpSymbol$13, BinaryOpSymbol$14, BinaryOpSymbol$15, BinaryOpSymbol$16, BinaryOpSymbol$17, BinaryOpSymbol$18, BinaryOpSymbol$19, BinaryOpSymbol$20, BinaryOpSymbol$21, BinaryOpSymbol$22, BinaryOpSymbol$23, BinaryOpSymbol$24, BinaryOpSymbol$25, BinaryOpSymbol$26, BinaryOpSymbol$27, BinaryOpSymbol$28, BinaryOpSymbol$29, BinaryOpSymbol$30, BinaryOpSymbol$31, BinaryOpSymbol$32, BinaryOpSymbol$33, BinaryOpSymbol$34, BinaryOpSymbol$35, BinaryOpSymbol$36, BinaryOpSymbol$37, BinaryOpSymbol$38, BinaryOpSymbol$39, BinaryOpSymbol$40, BinaryOpSymbol$41, BinaryOpSymbol$42, BinaryOpSymbol$43, BinaryOpSymbol$44, BinaryOpSymbol$45, BinaryOpSymbol$46, BinaryOpSymbol$47, BinaryOpSymbol$48, BinaryOpSymbol$49, BinaryOpSymbol$50, BinaryOpSymbol$51, BinaryOpSymbol$52];
function BinaryOpSymbol(ctx, state2) {
  return (0, import_lib2.$EVENT_C)(ctx, state2, "BinaryOpSymbol", BinaryOpSymbol$$);
}
var ActualIn$0 = (0, import_lib2.$T)((0, import_lib2.$S)(CoffeeOfEnabled, Of), function(value) {
  return value[1];
});
var ActualIn$1 = (0, import_lib2.$T)((0, import_lib2.$S)((0, import_lib2.$N)(CoffeeOfEnabled), In), function(value) {
  return value[1];
});
var ActualIn$$ = [ActualIn$0, ActualIn$1];
function ActualIn(ctx, state2) {
  return (0, import_lib2.$EVENT_C)(ctx, state2, "ActualIn", ActualIn$$);
}
var CoffeeOfOp$0 = (0, import_lib2.$T)((0, import_lib2.$S)(Of), function(value) {
  return "in";
});
var CoffeeOfOp$1 = (0, import_lib2.$TS)((0, import_lib2.$S)(In), function($skip, $loc, $0, $1) {
  return {
    call: [getHelperRef("indexOf"), ".call"],
    relational: true,
    reversed: true,
    suffix: " >= 0",
    special: true
  };
});
var CoffeeOfOp$2 = (0, import_lib2.$TS)((0, import_lib2.$S)(OmittedNegation, __, Of, NonIdContinue), function($skip, $loc, $0, $1, $2, $3, $4) {
  return {
    $loc,
    token: "in",
    spaced: true,
    special: true,
    negated: true
  };
});
var CoffeeOfOp$3 = (0, import_lib2.$TS)((0, import_lib2.$S)(OmittedNegation, __, In), function($skip, $loc, $0, $1, $2, $3) {
  return {
    call: [getHelperRef("indexOf"), ".call"],
    relational: true,
    reversed: true,
    suffix: " < 0",
    special: true
  };
});
var CoffeeOfOp$$ = [CoffeeOfOp$0, CoffeeOfOp$1, CoffeeOfOp$2, CoffeeOfOp$3];
function CoffeeOfOp(ctx, state2) {
  return (0, import_lib2.$EVENT_C)(ctx, state2, "CoffeeOfOp", CoffeeOfOp$$);
}
var NotOp$0 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$EXPECT)($L112, 'NotOp "instanceof"'), NonIdContinue), function($skip, $loc, $0, $1, $2) {
  return {
    $loc,
    token: "instanceof",
    spaced: true,
    relational: true,
    special: true,
    negated: true
  };
});
var NotOp$1 = (0, import_lib2.$TS)((0, import_lib2.$S)(In), function($skip, $loc, $0, $1) {
  return {
    $loc,
    token: "in",
    spaced: true,
    special: true,
    negated: true
  };
});
var NotOp$$ = [NotOp$0, NotOp$1];
function NotOp(ctx, state2) {
  return (0, import_lib2.$EVENT_C)(ctx, state2, "NotOp", NotOp$$);
}
var Xor$0 = (0, import_lib2.$EXPECT)($L107, 'Xor "^^"');
var Xor$1 = (0, import_lib2.$S)((0, import_lib2.$EXPECT)($L108, 'Xor "xor"'), NonIdContinue);
var Xor$$ = [Xor$0, Xor$1];
function Xor(ctx, state2) {
  return (0, import_lib2.$EVENT_C)(ctx, state2, "Xor", Xor$$);
}
var Xnor$0 = (0, import_lib2.$R$0)((0, import_lib2.$EXPECT)($R28, "Xnor /!\\^\\^?/"));
var Xnor$1 = (0, import_lib2.$EXPECT)($L109, 'Xnor "xnor"');
var Xnor$$ = [Xnor$0, Xnor$1];
function Xnor(ctx, state2) {
  return (0, import_lib2.$EVENT_C)(ctx, state2, "Xnor", Xnor$$);
}
var UnaryOp$0 = (0, import_lib2.$TR)((0, import_lib2.$EXPECT)($R29, "UnaryOp /(?!\\+\\+|--)[!~+-](?!\\s)/"), function($skip, $loc, $0, $1, $2, $3, $4, $5, $6, $7, $8, $9) {
  return { $loc, token: $0 };
});
var UnaryOp$1 = AwaitOp;
var UnaryOp$2 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$C)(Delete, Void, Typeof), (0, import_lib2.$N)((0, import_lib2.$EXPECT)($R30, "UnaryOp /[:.]/")), (0, import_lib2.$E)(_)), function($skip, $loc, $0, $1, $2, $3) {
  var op = $1;
  var ws = $3;
  if (!ws) return [op, [" "]];
  return [op, ws];
});
var UnaryOp$3 = (0, import_lib2.$T)((0, import_lib2.$S)(Not, (0, import_lib2.$N)((0, import_lib2.$EXPECT)($R30, "UnaryOp /[:.]/")), (0, import_lib2.$E)((0, import_lib2.$EXPECT)($L17, 'UnaryOp " "')), (0, import_lib2.$E)(_)), function(value) {
  return [value[0], value[3]];
});
var UnaryOp$$ = [UnaryOp$0, UnaryOp$1, UnaryOp$2, UnaryOp$3];
function UnaryOp(ctx, state2) {
  return (0, import_lib2.$EVENT_C)(ctx, state2, "UnaryOp", UnaryOp$$);
}
var AwaitOp$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(Await, (0, import_lib2.$E)((0, import_lib2.$S)(Dot, IdentifierName)), (0, import_lib2.$E)(_)), function($skip, $loc, $0, $1, $2, $3) {
  var a = $1;
  var op = $2;
  var ws = $3;
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
});
var ModuleItem$1 = StatementListItem;
var ModuleItem$$ = [ModuleItem$0, ModuleItem$1];
function ModuleItem(ctx, state2) {
  return (0, import_lib2.$EVENT_C)(ctx, state2, "ModuleItem", ModuleItem$$);
}
var StatementListItem$0 = Declaration;
var StatementListItem$1 = BulletedArrayWithTrailing;
var StatementListItem$2 = (0, import_lib2.$TS)((0, import_lib2.$S)(ImplicitObjectLiteral), function($skip, $loc, $0, $1) {
  return makeLeftHandSideExpression($1);
});
var StatementListItem$3 = PostfixedStatement;
var StatementListItem$$ = [StatementListItem$0, StatementListItem$1, StatementListItem$2, StatementListItem$3];
function StatementListItem(ctx, state2) {
  return (0, import_lib2.$EVENT_C)(ctx, state2, "StatementListItem", StatementListItem$$);
}
var PostfixedStatement$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(Statement, (0, import_lib2.$E)((0, import_lib2.$S)((0, import_lib2.$E)(_), PostfixStatement))), function($skip, $loc, $0, $1, $2) {
  var statement = $1;
  var post = $2;
  if (post) return addPostfixStatement(statement, ...post);
  return statement;
});
function PostfixedStatement(ctx, state2) {
  return (0, import_lib2.$EVENT)(ctx, state2, "PostfixedStatement", PostfixedStatement$0);
}
var NoCommaStatementListItem$0 = Declaration;
var NoCommaStatementListItem$1 = PostfixedNoCommaStatement;
var NoCommaStatementListItem$$ = [NoCommaStatementListItem$0, NoCommaStatementListItem$1];
function NoCommaStatementListItem(ctx, state2) {
  return (0, import_lib2.$EVENT_C)(ctx, state2, "NoCommaStatementListItem", NoCommaStatementListItem$$);
}
var PostfixedNoCommaStatement$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(NoCommaStatement, (0, import_lib2.$E)((0, import_lib2.$S)((0, import_lib2.$E)(_), PostfixStatement))), function($skip, $loc, $0, $1, $2) {
  var statement = $1;
  var post = $2;
  if (post) return addPostfixStatement(statement, ...post);
  return statement;
});
function PostfixedNoCommaStatement(ctx, state2) {
  return (0, import_lib2.$EVENT)(ctx, state2, "PostfixedNoCommaStatement", PostfixedNoCommaStatement$0);
}
var PostfixedExpression$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(Expression, (0, import_lib2.$E)((0, import_lib2.$S)((0, import_lib2.$E)(_), PostfixStatement))), function($skip, $loc, $0, $1, $2) {
  var expression = $1;
  var post = $2;
  if (post) return attachPostfixStatementAsExpression(expression, post);
  return expression;
});
function PostfixedExpression(ctx, state2) {
  return (0, import_lib2.$EVENT)(ctx, state2, "PostfixedExpression", PostfixedExpression$0);
}
var PostfixedCommaExpression$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(PostfixedExpression, (0, import_lib2.$C)((0, import_lib2.$S)((0, import_lib2.$E)(_), PostfixStatement), (0, import_lib2.$Q)((0, import_lib2.$S)(CommaDelimiter, AssignmentExpression)))), function($skip, $loc, $0, $1, $2) {
  var expression = $1;
  var post = $2;
  if (!post.length) return $1;
  if (post.length === 2 && !Array.isArray(post[1])) {
    return attachPostfixStatementAsExpression(expression, post);
  }
  return $0;
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
var _PostfixStatement$0 = ForClause;
var _PostfixStatement$1 = IfClause;
var _PostfixStatement$2 = LoopClause;
var _PostfixStatement$3 = WhileClause;
var _PostfixStatement$$ = [_PostfixStatement$0, _PostfixStatement$1, _PostfixStatement$2, _PostfixStatement$3];
function _PostfixStatement(ctx, state2) {
  return (0, import_lib2.$EVENT_C)(ctx, state2, "_PostfixStatement", _PostfixStatement$$);
}
var Statement$0 = KeywordStatement;
var Statement$1 = VariableStatement;
var Statement$2 = (0, import_lib2.$T)((0, import_lib2.$S)(IfStatement, (0, import_lib2.$N)(ShouldExpressionize)), function(value) {
  return value[0];
});
var Statement$3 = IterationActualStatement;
var Statement$4 = (0, import_lib2.$T)((0, import_lib2.$S)(SwitchStatement, (0, import_lib2.$N)(ShouldExpressionize)), function(value) {
  return value[0];
});
var Statement$5 = (0, import_lib2.$T)((0, import_lib2.$S)(TryStatement, (0, import_lib2.$N)(ShouldExpressionize)), function(value) {
  return value[0];
});
var Statement$6 = FinallyClause;
var Statement$7 = EmptyStatement;
var Statement$8 = LabelledStatement;
var Statement$9 = CommaExpressionStatement;
var Statement$10 = BlockStatement;
var Statement$$ = [Statement$0, Statement$1, Statement$2, Statement$3, Statement$4, Statement$5, Statement$6, Statement$7, Statement$8, Statement$9, Statement$10];
function Statement(ctx, state2) {
  return (0, import_lib2.$EVENT_C)(ctx, state2, "Statement", Statement$$);
}
var IterationActualStatement$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(IterationStatement, (0, import_lib2.$N)(ShouldExpressionize)), function($skip, $loc, $0, $1, $2) {
  if ($1.generator) return $skip;
  if ($1.reduction) return $skip;
  return $1;
});
function IterationActualStatement(ctx, state2) {
  return (0, import_lib2.$EVENT)(ctx, state2, "IterationActualStatement", IterationActualStatement$0);
}
var ShouldExpressionize$0 = AllowedTrailingCallExpressions;
var ShouldExpressionize$1 = (0, import_lib2.$S)(NotDedented, Pipe);
var ShouldExpressionize$2 = BinaryOpRHS;
var ShouldExpressionize$3 = UnaryPostfix;
var ShouldExpressionize$$ = [ShouldExpressionize$0, ShouldExpressionize$1, ShouldExpressionize$2, ShouldExpressionize$3];
function ShouldExpressionize(ctx, state2) {
  return (0, import_lib2.$EVENT_C)(ctx, state2, "ShouldExpressionize", ShouldExpressionize$$);
}
var NoCommaStatement$0 = KeywordStatement;
var NoCommaStatement$1 = VariableStatement;
var NoCommaStatement$2 = IfStatement;
var NoCommaStatement$3 = IterationStatement;
var NoCommaStatement$4 = SwitchStatement;
var NoCommaStatement$5 = TryStatement;
var NoCommaStatement$6 = EmptyStatement;
var NoCommaStatement$7 = LabelledStatement;
var NoCommaStatement$8 = ExpressionStatement;
var NoCommaStatement$9 = BlockStatement;
var NoCommaStatement$$ = [NoCommaStatement$0, NoCommaStatement$1, NoCommaStatement$2, NoCommaStatement$3, NoCommaStatement$4, NoCommaStatement$5, NoCommaStatement$6, NoCommaStatement$7, NoCommaStatement$8, NoCommaStatement$9];
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
  return { type: "EmptyStatement", children: [$1], implicit: true };
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
  var label = $1;
  var statement = $2;
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
  var colon = $1;
  var id = $2;
  var w = $3;
  if (id.name === "void") return $skip;
  return {
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
});
var LabelIdentifier$1 = (0, import_lib2.$TR)((0, import_lib2.$EXPECT)($R32, "LabelIdentifier /(?:loop|while|until|for|do)(?!\\p{ID_Continue})/"), function($skip, $loc, $0, $1, $2, $3, $4, $5, $6, $7, $8, $9) {
  return {
    type: "Label",
    special: $0,
    name: "",
    // to be filled in
    children: []
  };
});
var LabelIdentifier$2 = (0, import_lib2.$TV)(Identifier, function($skip, $loc, $0, $1) {
  var id = $0;
  return {
    type: "Label",
    name: id.name,
    children: [id]
  };
});
var LabelIdentifier$$ = [LabelIdentifier$0, LabelIdentifier$1, LabelIdentifier$2];
function LabelIdentifier(ctx, state2) {
  return (0, import_lib2.$EVENT_C)(ctx, state2, "LabelIdentifier", LabelIdentifier$$);
}
var LabelledItem$0 = Statement;
var LabelledItem$1 = FunctionDeclaration;
var LabelledItem$$ = [LabelledItem$0, LabelledItem$1];
function LabelledItem(ctx, state2) {
  return (0, import_lib2.$EVENT_C)(ctx, state2, "LabelledItem", LabelledItem$$);
}
var IfStatement$0 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$C)(If, Unless), (0, import_lib2.$E)(_), BoundedCondition, ThenClause, (0, import_lib2.$E)(ElseClause)), function($skip, $loc, $0, $1, $2, $3, $4, $5) {
  var kind = $1;
  var ws = $2;
  var condition = $3;
  var block = $4;
  var e = $5;
  if (kind.negated) {
    kind = { ...kind, token: "if" };
    condition = negateCondition(condition);
  }
  if (block.bare && e) {
    block = bracedBlock(block);
  }
  return {
    type: "IfStatement",
    children: [kind, ws, condition, block, e],
    condition,
    negated: kind.negated,
    then: block,
    else: e
  };
});
var IfStatement$1 = (0, import_lib2.$TS)((0, import_lib2.$S)(IfClause, BlockOrEmpty, (0, import_lib2.$E)(ElseClause)), function($skip, $loc, $0, $1, $2, $3) {
  var clause = $1;
  var block = $2;
  var e = $3;
  if (block.bare && e) {
    block = bracedBlock(block);
  }
  return {
    type: "IfStatement",
    children: [...clause.children, block, e],
    condition: clause.condition,
    negated: clause.negated,
    then: block,
    else: e
  };
});
var IfStatement$$ = [IfStatement$0, IfStatement$1];
function IfStatement(ctx, state2) {
  return (0, import_lib2.$EVENT_C)(ctx, state2, "IfStatement", IfStatement$$);
}
var ElseClause$0 = (0, import_lib2.$T)((0, import_lib2.$S)((0, import_lib2.$C)(Nested, (0, import_lib2.$E)(_)), Else, BlockOrEmpty), function(value) {
  var block = value[2];
  return { "type": "ElseClause", "children": value, "block": block };
});
function ElseClause(ctx, state2) {
  return (0, import_lib2.$EVENT)(ctx, state2, "ElseClause", ElseClause$0);
}
var IfClause$0 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$C)(If, Unless), (0, import_lib2.$E)(_), Condition), function($skip, $loc, $0, $1, $2, $3) {
  var kind = $1;
  var ws = $2;
  var condition = $3;
  if (kind.negated) {
    kind = { ...kind, token: "if" };
    condition = negateCondition(condition);
  }
  return {
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
var _IterationStatement$0 = LoopStatement;
var _IterationStatement$1 = (0, import_lib2.$T)((0, import_lib2.$S)((0, import_lib2.$N)(CoffeeDoEnabled), DoWhileStatement), function(value) {
  return value[1];
});
var _IterationStatement$2 = (0, import_lib2.$T)((0, import_lib2.$S)((0, import_lib2.$N)(CoffeeDoEnabled), DoStatement), function(value) {
  return value[1];
});
var _IterationStatement$3 = ComptimeStatement;
var _IterationStatement$4 = WhileStatement;
var _IterationStatement$5 = ForStatement;
var _IterationStatement$$ = [_IterationStatement$0, _IterationStatement$1, _IterationStatement$2, _IterationStatement$3, _IterationStatement$4, _IterationStatement$5];
function _IterationStatement(ctx, state2) {
  return (0, import_lib2.$EVENT_C)(ctx, state2, "_IterationStatement", _IterationStatement$$);
}
var IterationExpression$0 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$E)((0, import_lib2.$S)(Async, __)), IterationStatement), function($skip, $loc, $0, $1, $2) {
  var async = $1;
  var statement = $2;
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
  var clause = $1;
  var block = $2;
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
  var kind = $1;
  var generator = $2;
  const expression = {
    type: "Literal",
    children: ["true"],
    raw: "true"
  };
  const condition = {
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
  var d = $1;
  var generator = $2;
  var block = $3;
  var ws = $4;
  var clause = $5;
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
  var d = $1;
  var generator = $2;
  var block = $3;
  block = trimFirstSpace(block);
  return {
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
  var t = $2;
  var e = $3;
  let block = !initialConfig.comptime && e?.block || t;
  block = trimFirstSpace(block);
  return {
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
  var clause = $1;
  var block = $2;
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
  var kind = $1;
  var generator = $2;
  var ws = $3;
  var condition = $4;
  const subtype = kind.token;
  if (kind.negated) {
    kind = { ...kind, token: "while" };
    condition = negateCondition(condition);
  }
  return {
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
  var clause = $1;
  var block = $2;
  block = blockWithPrefix(clause.blockPrefix, block);
  return {
    ...clause,
    children: [...clause.children, block],
    block
  };
});
function ForStatement(ctx, state2) {
  return (0, import_lib2.$EVENT)(ctx, state2, "ForStatement", ForStatement$0);
}
var ForClause$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(For, (0, import_lib2.$E)((0, import_lib2.$S)((0, import_lib2.$E)(_), Star)), __, ForStatementControlWithWhen), function($skip, $loc, $0, $1, $2, $3, $4) {
  var generator = $2;
  var c = $4;
  let { children, reduction } = c;
  if (generator && reduction) {
    children = [{
      type: "Error",
      message: `Cannot use reduction (${reduction.subtype}) with generators`
    }, ...children];
  }
  return {
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
  var control = $1;
  var condition = $2;
  if (!condition) return control;
  const expressions = [["", {
    type: "ContinueStatement",
    children: ["continue"]
  }]];
  const block = {
    type: "BlockStatement",
    expressions,
    children: [expressions],
    bare: true
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
var ForStatementControlWithReduction$0 = ForStatementControl;
var ForStatementControlWithReduction$1 = (0, import_lib2.$TS)((0, import_lib2.$S)(ForReduction, ForStatementControl), function($skip, $loc, $0, $1, $2) {
  var reduction = $1;
  var control = $2;
  return { ...control, reduction };
});
var ForStatementControlWithReduction$$ = [ForStatementControlWithReduction$0, ForStatementControlWithReduction$1];
function ForStatementControlWithReduction(ctx, state2) {
  return (0, import_lib2.$EVENT_C)(ctx, state2, "ForStatementControlWithReduction", ForStatementControlWithReduction$$);
}
var ForReduction$0 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$C)((0, import_lib2.$EXPECT)($L120, 'ForReduction "some"'), (0, import_lib2.$EXPECT)($L121, 'ForReduction "every"'), (0, import_lib2.$EXPECT)($L122, 'ForReduction "count"'), (0, import_lib2.$EXPECT)($L123, 'ForReduction "first"'), (0, import_lib2.$EXPECT)($L124, 'ForReduction "sum"'), (0, import_lib2.$EXPECT)($L125, 'ForReduction "product"'), (0, import_lib2.$EXPECT)($L126, 'ForReduction "min"'), (0, import_lib2.$EXPECT)($L127, 'ForReduction "max"'), (0, import_lib2.$EXPECT)($L128, 'ForReduction "join"'), (0, import_lib2.$EXPECT)($L129, 'ForReduction "concat"')), NonIdContinue, __), function($skip, $loc, $0, $1, $2, $3) {
  var subtype = $1;
  var ws = $3;
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
});
var ForStatementControl$1 = (0, import_lib2.$T)((0, import_lib2.$S)(CoffeeForLoopsEnabled, CoffeeForStatementParameters), function(value) {
  return value[1];
});
var ForStatementControl$$ = [ForStatementControl$0, ForStatementControl$1];
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
  var open = $2;
  var declaration = $3;
  var index = $4;
  var kind = $6;
  var exp = $7;
  var step = $8;
  var close = $9;
  let blockPrefix = [];
  exp = trimFirstSpace(exp);
  declaration = trimFirstSpace(declaration);
  if (kind.token === "from") {
    if (step) {
      throw new Error("Can't use 'by' with 'from' in CoffeeScript for loops");
    }
    kind = { ...kind, token: "of" };
  } else if (kind.token === "of") {
    if (step) {
      throw new Error("Can't use 'by' with 'of' in CoffeeScript for loops");
    }
    if (declaration.own) {
      const hasPropRef = getHelperRef("hasProp");
      blockPrefix.push(["", ["if (!", hasPropRef, "(", exp, ", ", declaration, ")) continue"], ";"]);
    }
    if (index) {
      blockPrefix.push(["", {
        type: "AssignmentExpression",
        children: [index, " = ", exp, "[", declaration, "]"],
        names: index.names
      }, ";"]);
    }
    kind.token = "in";
  } else if (kind.token === "in") {
    const counterRef = makeRef("i");
    const lenRef = makeRef("len");
    if (exp.type === "RangeExpression") {
      return forRange(open, declaration, exp, step && prepend(trimFirstSpace(step[0]), trimFirstSpace(step[2])), close);
    }
    const expRef = maybeRef(exp);
    const varRef = declaration;
    let increment = "++", indexAssignment, assignmentNames = [...varRef.names];
    if (index) {
      index = trimFirstSpace(index);
      indexAssignment = [index, "="];
      assignmentNames.push(...index.names);
    }
    const expRefDec = expRef !== exp ? [expRef, " = ", trimFirstSpace(exp), ", "] : [];
    blockPrefix.push(["", {
      type: "AssignmentExpression",
      children: [varRef, " = ", expRef, "[", indexAssignment, counterRef, "]"],
      names: assignmentNames
    }, ";"]);
    declaration = {
      type: "Declaration",
      children: ["let ", ...expRefDec, counterRef, " = 0, ", lenRef, " = ", expRef, ".length"],
      names: []
    };
    let condition = [counterRef, " < ", lenRef, "; "];
    if (step) {
      let [stepWs, , stepExp] = step;
      stepWs = trimFirstSpace(stepWs);
      if (stepExp.type === "Literal") {
        increment = [" +=", ...stepWs, stepExp];
        if (stepExp.raw[0] === "-") {
          declaration = {
            type: "Declaration",
            children: ["let ", ...expRefDec, counterRef, " = ", expRef, ".length - 1"],
            names: []
          };
          condition = [counterRef, " >= 0; "];
        }
      } else {
        throw new Error("TODO: Support non-literal step in CoffeeScript for loops");
      }
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
});
var CoffeeForStatementParameters$1 = ForRangeParameters;
var CoffeeForStatementParameters$$ = [CoffeeForStatementParameters$0, CoffeeForStatementParameters$1];
function CoffeeForStatementParameters(ctx, state2) {
  return (0, import_lib2.$EVENT_C)(ctx, state2, "CoffeeForStatementParameters", CoffeeForStatementParameters$$);
}
var CoffeeForIndex$0 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$E)(_), Comma, (0, import_lib2.$E)(_), BindingIdentifier), function($skip, $loc, $0, $1, $2, $3, $4) {
  var ws1 = $1;
  var ws2 = $3;
  var id = $4;
  ws2 = trimFirstSpace(ws1);
  return {
    ...id,
    children: [...ws1 || [], ...ws2 || [], ...id.children]
  };
});
function CoffeeForIndex(ctx, state2) {
  return (0, import_lib2.$EVENT)(ctx, state2, "CoffeeForIndex", CoffeeForIndex$0);
}
var CoffeeForDeclaration$0 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$E)((0, import_lib2.$S)(__, Own)), ForBinding), function($skip, $loc, $0, $1, $2) {
  var own = $1;
  var binding = $2;
  return {
    type: "AssignmentExpression",
    own: Boolean(own),
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
});
var ForStatementParameters$1 = (0, import_lib2.$TS)((0, import_lib2.$S)(InsertOpenParen, __, (0, import_lib2.$C)(LexicalDeclaration, VariableStatement, (0, import_lib2.$E)(CommaExpression)), __, Semicolon, (0, import_lib2.$E)(CommaExpression), Semicolon, (0, import_lib2.$E)((0, import_lib2.$S)((0, import_lib2.$N)(EOS), ExpressionWithIndentedApplicationForbidden)), InsertCloseParen), function($skip, $loc, $0, $1, $2, $3, $4, $5, $6, $7, $8, $9) {
  var declaration = $3;
  return {
    declaration,
    children: $0
  };
});
var ForStatementParameters$2 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$E)((0, import_lib2.$S)(Await, __)), (0, import_lib2.$Y)(OpenParen), (0, import_lib2.$S)(OpenParen, __), ForInOfDeclaration, (0, import_lib2.$E)((0, import_lib2.$S)(__, Comma, __, ForInOfDeclaration)), __, (0, import_lib2.$C)(In, Of), ExpressionWithObjectApplicationForbidden, (0, import_lib2.$E)((0, import_lib2.$S)(__, By, ExpressionWithObjectApplicationForbidden)), (0, import_lib2.$S)(__, CloseParen)), function($skip, $loc, $0, $1, $2, $3, $4, $5, $6, $7, $8, $9, $10) {
  return processForInOf($0);
});
var ForStatementParameters$3 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$E)((0, import_lib2.$S)(Await, __)), (0, import_lib2.$E)((0, import_lib2.$S)((0, import_lib2.$C)(Each, Own), __)), (0, import_lib2.$S)(OpenParen, __), ForInOfDeclaration, (0, import_lib2.$E)((0, import_lib2.$S)(__, Comma, __, ForInOfDeclaration)), __, (0, import_lib2.$C)(In, Of), ExpressionWithObjectApplicationForbidden, (0, import_lib2.$E)((0, import_lib2.$S)(__, By, ExpressionWithObjectApplicationForbidden)), (0, import_lib2.$S)(__, CloseParen)), function($skip, $loc, $0, $1, $2, $3, $4, $5, $6, $7, $8, $9, $10) {
  return processForInOf($0);
});
var ForStatementParameters$4 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$E)((0, import_lib2.$S)(Await, __)), (0, import_lib2.$Y)(ForInOfDeclaration), InsertOpenParen, ForInOfDeclaration, (0, import_lib2.$E)((0, import_lib2.$S)(__, Comma, __, ForInOfDeclaration)), __, (0, import_lib2.$C)(In, Of), ExpressionWithObjectApplicationForbidden, (0, import_lib2.$E)((0, import_lib2.$S)(__, By, ExpressionWithObjectApplicationForbidden)), InsertCloseParen), function($skip, $loc, $0, $1, $2, $3, $4, $5, $6, $7, $8, $9, $10) {
  return processForInOf($0);
});
var ForStatementParameters$5 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$E)((0, import_lib2.$S)(Await, __)), (0, import_lib2.$E)((0, import_lib2.$S)((0, import_lib2.$C)(Each, Own), __)), InsertOpenParen, ForInOfDeclaration, (0, import_lib2.$E)((0, import_lib2.$S)(__, Comma, __, ForInOfDeclaration)), __, (0, import_lib2.$C)(In, Of), ExpressionWithObjectApplicationForbidden, (0, import_lib2.$E)((0, import_lib2.$S)(__, By, ExpressionWithObjectApplicationForbidden)), InsertCloseParen), function($skip, $loc, $0, $1, $2, $3, $4, $5, $6, $7, $8, $9, $10) {
  return processForInOf($0);
});
var ForStatementParameters$6 = ForRangeParameters;
var ForStatementParameters$$ = [ForStatementParameters$0, ForStatementParameters$1, ForStatementParameters$2, ForStatementParameters$3, ForStatementParameters$4, ForStatementParameters$5, ForStatementParameters$6];
function ForStatementParameters(ctx, state2) {
  return (0, import_lib2.$EVENT_C)(ctx, state2, "ForStatementParameters", ForStatementParameters$$);
}
var ForRangeParameters$0 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$E)((0, import_lib2.$S)(Await, __)), OpenParen, OpenBracket, RangeExpression, CloseBracket, (0, import_lib2.$E)((0, import_lib2.$S)(__, By, ExpressionWithObjectApplicationForbidden)), CloseParen), function($skip, $loc, $0, $1, $2, $3, $4, $5, $6, $7) {
  var open = $2;
  var exp = $4;
  var step = $6;
  var close = $7;
  return forRange(open, null, exp, step, close);
});
var ForRangeParameters$1 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$E)((0, import_lib2.$S)(Await, __)), InsertOpenParen, OpenBracket, RangeExpression, CloseBracket, (0, import_lib2.$E)((0, import_lib2.$S)(__, By, ExpressionWithObjectApplicationForbidden)), InsertCloseParen), function($skip, $loc, $0, $1, $2, $3, $4, $5, $6, $7) {
  var open = $2;
  var exp = $4;
  var step = $6;
  var close = $7;
  return forRange(open, null, exp, step, close);
});
var ForRangeParameters$$ = [ForRangeParameters$0, ForRangeParameters$1];
function ForRangeParameters(ctx, state2) {
  return (0, import_lib2.$EVENT_C)(ctx, state2, "ForRangeParameters", ForRangeParameters$$);
}
var ForInOfDeclaration$0 = ForDeclaration;
var ForInOfDeclaration$1 = LeftHandSideExpression;
var ForInOfDeclaration$$ = [ForInOfDeclaration$0, ForInOfDeclaration$1];
function ForInOfDeclaration(ctx, state2) {
  return (0, import_lib2.$EVENT_C)(ctx, state2, "ForInOfDeclaration", ForInOfDeclaration$$);
}
var ForDeclaration$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(LetOrConstOrVar, ForBinding), function($skip, $loc, $0, $1, $2) {
  var c = $1;
  var binding = $2;
  return {
    type: "ForDeclaration",
    children: [c, binding],
    decl: c.token,
    binding,
    names: binding.names
  };
});
var ForDeclaration$1 = (0, import_lib2.$TS)((0, import_lib2.$S)(InsertConst, (0, import_lib2.$N)(ActualMemberExpression), ForBinding), function($skip, $loc, $0, $1, $2, $3) {
  var c = $1;
  var binding = $3;
  if (gatherRecursive(binding, ($) => $.type === "PinPattern").length) {
    return $skip;
  }
  return {
    type: "ForDeclaration",
    children: [c, binding],
    decl: c.token.trimEnd(),
    binding,
    names: binding.names
  };
});
var ForDeclaration$$ = [ForDeclaration$0, ForDeclaration$1];
function ForDeclaration(ctx, state2) {
  return (0, import_lib2.$EVENT_C)(ctx, state2, "ForDeclaration", ForDeclaration$$);
}
var ForBinding$0 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$C)(BindingPattern, BindingIdentifier), (0, import_lib2.$E)(TypeSuffix)), function($skip, $loc, $0, $1, $2) {
  var pattern = $1;
  var typeSuffix = $2;
  typeSuffix ??= pattern.typeSuffix;
  return {
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
  var s = $1;
  var condition = $3;
  var caseBlock = $5;
  if (!condition) return $skip;
  if (condition.type === "EmptyCondition") {
    caseBlock.clauses.forEach(({ cases }) => {
      if (cases) {
        cases.forEach((c) => {
          const exp = c[1];
          switch (exp.type) {
            case "Identifier":
            case "Literal":
              c.splice(1, 0, "!");
              break;
            default:
              c.splice(1, 1, "!(", exp, ")");
          }
        });
      }
    });
  }
  return {
    type: "SwitchStatement",
    children: [s, condition, caseBlock],
    // omit NewlineBinaryOp control
    condition,
    caseBlock
  };
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
});
var CaseBlock$1 = (0, import_lib2.$TS)((0, import_lib2.$S)(InsertOpenBrace, NestedCaseClauses, InsertNewline, InsertIndent, InsertCloseBrace), function($skip, $loc, $0, $1, $2, $3, $4, $5) {
  var clauses = $2;
  return {
    type: "CaseBlock",
    clauses,
    children: $0
  };
});
var CaseBlock$$ = [CaseBlock$0, CaseBlock$1];
function CaseBlock(ctx, state2) {
  return (0, import_lib2.$EVENT_C)(ctx, state2, "CaseBlock", CaseBlock$$);
}
var NestedCaseClauses$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(PushIndent, (0, import_lib2.$Q)(NestedCaseClause), PopIndent), function($skip, $loc, $0, $1, $2, $3) {
  var clauses = $2;
  if (clauses.length) return clauses;
  return $skip;
});
function NestedCaseClauses(ctx, state2) {
  return (0, import_lib2.$EVENT)(ctx, state2, "NestedCaseClauses", NestedCaseClauses$0);
}
var NestedCaseClause$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(Nested, CaseClause), function($skip, $loc, $0, $1, $2) {
  var indent = $1;
  var clause = $2;
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
  var patterns = $1;
  var block = $2;
  return {
    type: "PatternClause",
    children: $0,
    patterns,
    block
  };
});
var CaseClause$1 = (0, import_lib2.$T)((0, import_lib2.$S)(Case, CaseExpressionList, IgnoreColon, (0, import_lib2.$C)(ThenClause, BareBlock)), function(value) {
  var cases = value[1];
  var block = value[3];
  return { "type": "CaseClause", "children": value, "cases": cases, "block": block };
});
var CaseClause$2 = (0, import_lib2.$TS)((0, import_lib2.$S)(When, CaseExpressionList, IgnoreColon, InsertOpenBrace, (0, import_lib2.$C)(ThenClause, BareBlock), InsertBreak, InsertNewline, InsertIndent, InsertCloseBrace), function($skip, $loc, $0, $1, $2, $3, $4, $5, $6, $7, $8, $9) {
  var cases = $2;
  var block = $5;
  var b = $6;
  return {
    type: "WhenClause",
    children: $0,
    cases,
    block,
    break: b
  };
});
var CaseClause$3 = (0, import_lib2.$TS)((0, import_lib2.$S)(Default, ImpliedColon, (0, import_lib2.$C)(ThenClause, BareBlock)), function($skip, $loc, $0, $1, $2, $3) {
  var block = $3;
  return {
    type: "DefaultClause",
    block,
    children: $0
  };
});
var CaseClause$4 = (0, import_lib2.$TS)((0, import_lib2.$S)(Else, ImpliedColon, (0, import_lib2.$C)(ThenClause, BracedBlock, EmptyBlock)), function($skip, $loc, $0, $1, $2, $3) {
  var e = $1;
  var colon = $2;
  var block = $3;
  e = { ...e, token: "default" };
  return {
    type: "DefaultClause",
    block,
    children: [e, colon, block]
  };
});
var CaseClause$$ = [CaseClause$0, CaseClause$1, CaseClause$2, CaseClause$3, CaseClause$4];
function CaseClause(ctx, state2) {
  return (0, import_lib2.$EVENT_C)(ctx, state2, "CaseClause", CaseClause$$);
}
var PatternExpressionList$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(PatternExpression, (0, import_lib2.$Q)((0, import_lib2.$S)((0, import_lib2.$E)(_), Comma, (0, import_lib2.$E)((0, import_lib2.$C)(Nested, _)), PatternExpression))), function($skip, $loc, $0, $1, $2) {
  var first = $1;
  var rest = $2;
  return [first, ...rest.map(([, , , p]) => p)];
});
function PatternExpressionList(ctx, state2) {
  return (0, import_lib2.$EVENT)(ctx, state2, "PatternExpressionList", PatternExpressionList$0);
}
var PatternExpression$0 = BindingPattern;
var PatternExpression$1 = (0, import_lib2.$TS)((0, import_lib2.$S)(ForbidIndentedApplication, (0, import_lib2.$E)((0, import_lib2.$S)((0, import_lib2.$E)((0, import_lib2.$S)(BindingIdentifier, (0, import_lib2.$E)(Caret))), (0, import_lib2.$P)(SingleLineBinaryOpRHS))), RestoreIndentedApplication), function($skip, $loc, $0, $1, $2, $3) {
  var body = $2;
  if (!body) return $skip;
  const [named, rhs] = body;
  let binding;
  if (named) [binding] = named;
  return {
    type: "ConditionFragment",
    children: [binding, rhs],
    binding,
    rhs
  };
});
var PatternExpression$$ = [PatternExpression$0, PatternExpression$1];
function PatternExpression(ctx, state2) {
  return (0, import_lib2.$EVENT_C)(ctx, state2, "PatternExpression", PatternExpression$$);
}
var CaseExpressionList$0 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$S)((0, import_lib2.$E)(_), CaseExpression, InsertColon), (0, import_lib2.$Q)((0, import_lib2.$S)(__, Comma, CaseExpression, InsertColon))), function($skip, $loc, $0, $1, $2) {
  var first = $1;
  var rest = $2;
  const result = rest.map(([ws, _comma, exp, col]) => {
    exp = trimFirstSpace(exp);
    if (ws.length) return [insertTrimmingSpace("case ", ws), exp, col];
    return ["case ", exp, col];
  });
  result.unshift(first);
  return result;
});
function CaseExpressionList(ctx, state2) {
  return (0, import_lib2.$EVENT)(ctx, state2, "CaseExpressionList", CaseExpressionList$0);
}
var CaseExpression$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(PropertyName, (0, import_lib2.$Y)((0, import_lib2.$S)((0, import_lib2.$E)(_), Colon))), function($skip, $loc, $0, $1, $2) {
  var value = $1;
  if (value.type === "ComputedPropertyName") {
    if (value.implicit) return value.expression;
    return { ...value, type: "ArrayExpression" };
  }
  return value;
});
var CaseExpression$1 = ExpressionWithObjectApplicationForbidden;
var CaseExpression$$ = [CaseExpression$0, CaseExpression$1];
function CaseExpression(ctx, state2) {
  return (0, import_lib2.$EVENT_C)(ctx, state2, "CaseExpression", CaseExpression$$);
}
var ImpliedColon$0 = (0, import_lib2.$S)((0, import_lib2.$E)(_), Colon);
var ImpliedColon$1 = InsertColon;
var ImpliedColon$$ = [ImpliedColon$0, ImpliedColon$1];
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
  var binding = $3;
  var block = $4;
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
  var ws1 = $1;
  var open = $2;
  var ws2 = $3;
  var parameter = $5;
  var ws3 = $7;
  var close = $8;
  if (!parameter) return $skip;
  return {
    type: "CatchBinding",
    parameter,
    children: [ws1, open, ws2, parameter, ws3, close]
  };
});
var CatchBinding$1 = (0, import_lib2.$TS)((0, import_lib2.$S)(_, InsertOpenParen, (0, import_lib2.$N)(EOS), ForbidIndentedApplication, (0, import_lib2.$E)(CatchParameter), RestoreIndentedApplication, InsertCloseParen), function($skip, $loc, $0, $1, $2, $3, $4, $5, $6, $7) {
  var ws = $1;
  var open = $2;
  var parameter = $5;
  var close = $7;
  if (!parameter) return $skip;
  return {
    type: "CatchBinding",
    parameter,
    children: [ws, open, parameter, close]
  };
});
var CatchBinding$$ = [CatchBinding$0, CatchBinding$1];
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
  var binding = $1;
  var typeSuffix = $2;
  return {
    type: "CatchParameter",
    binding,
    typeSuffix,
    children: [binding, typeSuffix]
  };
});
var CatchParameter$1 = (0, import_lib2.$TS)((0, import_lib2.$S)(PatternExpressionList), function($skip, $loc, $0, $1) {
  return {
    type: "CatchPattern",
    children: $0,
    patterns: $1
  };
});
var CatchParameter$2 = (0, import_lib2.$TS)((0, import_lib2.$S)(BindingIdentifier, (0, import_lib2.$E)(TypeSuffix)), function($skip, $loc, $0, $1, $2) {
  var binding = $1;
  var typeSuffix = $2;
  return {
    type: "CatchParameter",
    binding,
    typeSuffix,
    children: $0
  };
});
var CatchParameter$$ = [CatchParameter$0, CatchParameter$1, CatchParameter$2];
function CatchParameter(ctx, state2) {
  return (0, import_lib2.$EVENT_C)(ctx, state2, "CatchParameter", CatchParameter$$);
}
var Condition$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(OpenParen, (0, import_lib2.$E)(_), DeclarationCondition, CloseParen), function($skip, $loc, $0, $1, $2, $3, $4) {
  var open = $1;
  var ws = $2;
  var expression = $3;
  var close = $4;
  return {
    type: "ParenthesizedExpression",
    children: [open, ws, expression, close],
    expression
  };
});
var Condition$1 = (0, import_lib2.$T)((0, import_lib2.$S)(ParenthesizedExpression, (0, import_lib2.$N)(TrailingOperator)), function(value) {
  return value[0];
});
var Condition$2 = (0, import_lib2.$TS)((0, import_lib2.$S)(InsertOpenParen, DeclarationCondition, InsertCloseParen), function($skip, $loc, $0, $1, $2, $3) {
  var open = $1;
  var expression = $2;
  var close = $3;
  return {
    type: "ParenthesizedExpression",
    children: [open, expression, close],
    expression
  };
});
var Condition$3 = (0, import_lib2.$TS)((0, import_lib2.$S)(PushIndent, InsertOpenParen, (0, import_lib2.$E)((0, import_lib2.$S)(Nested, PostfixedExpression)), InsertCloseParen, PopIndent), function($skip, $loc, $0, $1, $2, $3, $4, $5) {
  var open = $2;
  var expression = $3;
  var close = $4;
  if (!expression) return $skip;
  return {
    type: "ParenthesizedExpression",
    children: [open, expression, close],
    expression
  };
});
var Condition$4 = (0, import_lib2.$TS)((0, import_lib2.$S)(InsertOpenParen, ExpressionWithObjectApplicationForbidden, InsertCloseParen), function($skip, $loc, $0, $1, $2, $3) {
  var open = $1;
  var expression = $2;
  var close = $3;
  if (expression.type === "ParenthesizedExpression") return expression;
  expression = trimFirstSpace(expression);
  return {
    type: "ParenthesizedExpression",
    children: [open, expression, close],
    expression
  };
});
var Condition$$ = [Condition$0, Condition$1, Condition$2, Condition$3, Condition$4];
function Condition(ctx, state2) {
  return (0, import_lib2.$EVENT_C)(ctx, state2, "Condition", Condition$$);
}
var BoundedCondition$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(InsertOpenParen, PostfixedExpression, InsertCloseParen), function($skip, $loc, $0, $1, $2, $3) {
  var open = $1;
  var expression = $2;
  var close = $3;
  if (expression.type === "ParenthesizedExpression") return expression;
  expression = trimFirstSpace(expression);
  return {
    type: "ParenthesizedExpression",
    children: [open, expression, close],
    expression
  };
});
function BoundedCondition(ctx, state2) {
  return (0, import_lib2.$EVENT)(ctx, state2, "BoundedCondition", BoundedCondition$0);
}
var DeclarationCondition$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(ForbidBracedApplication, ForbidIndentedApplication, ForbidNewlineBinaryOp, (0, import_lib2.$E)(LexicalDeclaration), RestoreNewlineBinaryOp, RestoreBracedApplication, RestoreIndentedApplication), function($skip, $loc, $0, $1, $2, $3, $4, $5, $6, $7) {
  var declaration = $4;
  if (!declaration) return $skip;
  return {
    type: "DeclarationCondition",
    declaration,
    children: [declaration]
  };
});
function DeclarationCondition(ctx, state2) {
  return (0, import_lib2.$EVENT)(ctx, state2, "DeclarationCondition", DeclarationCondition$0);
}
var ExpressionWithIndentedApplicationForbidden$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(ForbidIndentedApplication, ForbidNewlineBinaryOp, (0, import_lib2.$E)(Expression), RestoreNewlineBinaryOp, RestoreIndentedApplication), function($skip, $loc, $0, $1, $2, $3, $4, $5) {
  var exp = $3;
  if (exp) return exp;
  return $skip;
});
function ExpressionWithIndentedApplicationForbidden(ctx, state2) {
  return (0, import_lib2.$EVENT)(ctx, state2, "ExpressionWithIndentedApplicationForbidden", ExpressionWithIndentedApplicationForbidden$0);
}
var SingleLineExpressionWithIndentedApplicationForbidden$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(ForbidIndentedApplication, ForbidNewlineBinaryOp, (0, import_lib2.$E)(SingleLineAssignmentExpression), RestoreNewlineBinaryOp, RestoreIndentedApplication), function($skip, $loc, $0, $1, $2, $3, $4, $5) {
  var exp = $3;
  if (exp) return exp;
  return $skip;
});
function SingleLineExpressionWithIndentedApplicationForbidden(ctx, state2) {
  return (0, import_lib2.$EVENT)(ctx, state2, "SingleLineExpressionWithIndentedApplicationForbidden", SingleLineExpressionWithIndentedApplicationForbidden$0);
}
var ExpressionWithObjectApplicationForbidden$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(ForbidBracedApplication, ForbidIndentedApplication, (0, import_lib2.$E)(Expression), RestoreBracedApplication, RestoreIndentedApplication), function($skip, $loc, $0, $1, $2, $3, $4, $5) {
  var exp = $3;
  if (exp) return exp;
  return $skip;
});
function ExpressionWithObjectApplicationForbidden(ctx, state2) {
  return (0, import_lib2.$EVENT)(ctx, state2, "ExpressionWithObjectApplicationForbidden", ExpressionWithObjectApplicationForbidden$0);
}
var LeftHandSideExpressionWithObjectApplicationForbidden$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(ForbidBracedApplication, ForbidIndentedApplication, ForbidNewlineBinaryOp, (0, import_lib2.$E)(LeftHandSideExpression), RestoreNewlineBinaryOp, RestoreBracedApplication, RestoreIndentedApplication), function($skip, $loc, $0, $1, $2, $3, $4, $5, $6, $7) {
  var exp = $4;
  if (exp) return exp;
  return $skip;
});
function LeftHandSideExpressionWithObjectApplicationForbidden(ctx, state2) {
  return (0, import_lib2.$EVENT)(ctx, state2, "LeftHandSideExpressionWithObjectApplicationForbidden", LeftHandSideExpressionWithObjectApplicationForbidden$0);
}
var ForbidClassImplicitCall$0 = (0, import_lib2.$TV)((0, import_lib2.$EXPECT)($L0, 'ForbidClassImplicitCall ""'), function($skip, $loc, $0, $1) {
  state.forbidClassImplicitCall.push(true);
});
function ForbidClassImplicitCall(ctx, state2) {
  return (0, import_lib2.$EVENT)(ctx, state2, "ForbidClassImplicitCall", ForbidClassImplicitCall$0);
}
var AllowClassImplicitCall$0 = (0, import_lib2.$TV)((0, import_lib2.$EXPECT)($L0, 'AllowClassImplicitCall ""'), function($skip, $loc, $0, $1) {
  state.forbidClassImplicitCall.push(false);
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
  return;
});
function ClassImplicitCallForbidden(ctx, state2) {
  return (0, import_lib2.$EVENT)(ctx, state2, "ClassImplicitCallForbidden", ClassImplicitCallForbidden$0);
}
var ForbidBracedApplication$0 = (0, import_lib2.$TV)((0, import_lib2.$EXPECT)($L0, 'ForbidBracedApplication ""'), function($skip, $loc, $0, $1) {
  state.forbidBracedApplication.push(true);
});
function ForbidBracedApplication(ctx, state2) {
  return (0, import_lib2.$EVENT)(ctx, state2, "ForbidBracedApplication", ForbidBracedApplication$0);
}
var AllowBracedApplication$0 = (0, import_lib2.$TV)((0, import_lib2.$EXPECT)($L0, 'AllowBracedApplication ""'), function($skip, $loc, $0, $1) {
  state.forbidBracedApplication.push(false);
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
  if (config.verbose) {
    console.log("forbidBracedApplication:", state.forbidBracedApplication);
  }
  if (state.bracedApplicationForbidden) return $skip;
  return;
});
function BracedApplicationAllowed(ctx, state2) {
  return (0, import_lib2.$EVENT)(ctx, state2, "BracedApplicationAllowed", BracedApplicationAllowed$0);
}
var ForbidIndentedApplication$0 = (0, import_lib2.$TV)((0, import_lib2.$EXPECT)($L0, 'ForbidIndentedApplication ""'), function($skip, $loc, $0, $1) {
  state.forbidIndentedApplication.push(true);
});
function ForbidIndentedApplication(ctx, state2) {
  return (0, import_lib2.$EVENT)(ctx, state2, "ForbidIndentedApplication", ForbidIndentedApplication$0);
}
var AllowIndentedApplication$0 = (0, import_lib2.$TV)((0, import_lib2.$EXPECT)($L0, 'AllowIndentedApplication ""'), function($skip, $loc, $0, $1) {
  state.forbidIndentedApplication.push(false);
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
  if (config.verbose) {
    console.log("forbidIndentedApplication:", state.forbidIndentedApplication);
  }
  if (state.indentedApplicationForbidden) return $skip;
  return;
});
function IndentedApplicationAllowed(ctx, state2) {
  return (0, import_lib2.$EVENT)(ctx, state2, "IndentedApplicationAllowed", IndentedApplicationAllowed$0);
}
var ForbidTrailingMemberProperty$0 = (0, import_lib2.$TV)((0, import_lib2.$EXPECT)($L0, 'ForbidTrailingMemberProperty ""'), function($skip, $loc, $0, $1) {
  state.forbidTrailingMemberProperty.push(true);
});
function ForbidTrailingMemberProperty(ctx, state2) {
  return (0, import_lib2.$EVENT)(ctx, state2, "ForbidTrailingMemberProperty", ForbidTrailingMemberProperty$0);
}
var AllowTrailingMemberProperty$0 = (0, import_lib2.$TV)((0, import_lib2.$EXPECT)($L0, 'AllowTrailingMemberProperty ""'), function($skip, $loc, $0, $1) {
  state.forbidTrailingMemberProperty.push(false);
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
  if (config.verbose) {
    console.log("forbidTrailingMemberProperty:", state.forbidTrailingMemberProperty);
  }
  if (state.trailingMemberPropertyForbidden) return $skip;
});
function TrailingMemberPropertyAllowed(ctx, state2) {
  return (0, import_lib2.$EVENT)(ctx, state2, "TrailingMemberPropertyAllowed", TrailingMemberPropertyAllowed$0);
}
var AllowNestedBinaryOp$0 = (0, import_lib2.$TV)((0, import_lib2.$EXPECT)($L0, 'AllowNestedBinaryOp ""'), function($skip, $loc, $0, $1) {
  state.forbidNestedBinaryOp.push(false);
});
function AllowNestedBinaryOp(ctx, state2) {
  return (0, import_lib2.$EVENT)(ctx, state2, "AllowNestedBinaryOp", AllowNestedBinaryOp$0);
}
var ForbidNestedBinaryOp$0 = (0, import_lib2.$TV)((0, import_lib2.$EXPECT)($L0, 'ForbidNestedBinaryOp ""'), function($skip, $loc, $0, $1) {
  state.forbidNestedBinaryOp.push(true);
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
  if (config.verbose) {
    console.log("forbidNestedBinaryOp:", state.forbidNestedBinaryOp);
  }
  if (state.nestedBinaryOpForbidden) return $skip;
});
function NestedBinaryOpAllowed(ctx, state2) {
  return (0, import_lib2.$EVENT)(ctx, state2, "NestedBinaryOpAllowed", NestedBinaryOpAllowed$0);
}
var AllowNewlineBinaryOp$0 = (0, import_lib2.$TV)((0, import_lib2.$EXPECT)($L0, 'AllowNewlineBinaryOp ""'), function($skip, $loc, $0, $1) {
  state.forbidNewlineBinaryOp.push(false);
});
function AllowNewlineBinaryOp(ctx, state2) {
  return (0, import_lib2.$EVENT)(ctx, state2, "AllowNewlineBinaryOp", AllowNewlineBinaryOp$0);
}
var ForbidNewlineBinaryOp$0 = (0, import_lib2.$TV)((0, import_lib2.$EXPECT)($L0, 'ForbidNewlineBinaryOp ""'), function($skip, $loc, $0, $1) {
  state.forbidNewlineBinaryOp.push(true);
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
  if (config.verbose) {
    console.log("forbidNewlineBinaryOp:", state.forbidNewlineBinaryOp);
  }
  if (state.newlineBinaryOpForbidden) return $skip;
});
function NewlineBinaryOpAllowed(ctx, state2) {
  return (0, import_lib2.$EVENT)(ctx, state2, "NewlineBinaryOpAllowed", NewlineBinaryOpAllowed$0);
}
var AllowPipeline$0 = (0, import_lib2.$TV)((0, import_lib2.$EXPECT)($L0, 'AllowPipeline ""'), function($skip, $loc, $0, $1) {
  state.forbidPipeline.push(false);
});
function AllowPipeline(ctx, state2) {
  return (0, import_lib2.$EVENT)(ctx, state2, "AllowPipeline", AllowPipeline$0);
}
var ForbidPipeline$0 = (0, import_lib2.$TV)((0, import_lib2.$EXPECT)($L0, 'ForbidPipeline ""'), function($skip, $loc, $0, $1) {
  state.forbidPipeline.push(true);
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
  if (config.verbose) {
    console.log("forbidPipeline:", state.forbidPipeline);
  }
  if (state.pipelineForbidden) return $skip;
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
var ExpressionStatement$0 = IterationExpression;
var ExpressionStatement$1 = (0, import_lib2.$TS)((0, import_lib2.$S)(AssignmentExpression), function($skip, $loc, $0, $1) {
  return makeExpressionStatement($1);
});
var ExpressionStatement$$ = [ExpressionStatement$0, ExpressionStatement$1];
function ExpressionStatement(ctx, state2) {
  return (0, import_lib2.$EVENT_C)(ctx, state2, "ExpressionStatement", ExpressionStatement$$);
}
var KeywordStatement$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(Break, (0, import_lib2.$E)((0, import_lib2.$S)(_, LabelIdentifier)), (0, import_lib2.$E)((0, import_lib2.$S)(_, With, MaybeNestedExpression))), function($skip, $loc, $0, $1, $2, $3) {
  const children = [$1];
  if ($2) children.push($2);
  if ($3) children.push({
    type: "Error",
    subtype: "Warning",
    message: "'break with' outside of loop that returns a value"
  });
  return {
    type: "BreakStatement",
    label: $2?.[1],
    with: $3?.[2],
    children
  };
});
var KeywordStatement$1 = (0, import_lib2.$TS)((0, import_lib2.$S)(Continue, _, Switch), function($skip, $loc, $0, $1, $2, $3) {
  return {
    type: "ContinueStatement",
    special: $3.token,
    children: []
  };
});
var KeywordStatement$2 = (0, import_lib2.$TS)((0, import_lib2.$S)(Continue, (0, import_lib2.$E)((0, import_lib2.$S)(_, LabelIdentifier)), (0, import_lib2.$E)((0, import_lib2.$S)(_, With, MaybeNestedExpression))), function($skip, $loc, $0, $1, $2, $3) {
  const children = [$1];
  if ($2) children.push($2);
  if ($3) children.push({
    type: "Error",
    subtype: "Warning",
    message: "'continue with' outside of loop that returns a value"
  });
  return {
    type: "ContinueStatement",
    label: $2?.[1],
    with: $3?.[2],
    children
  };
});
var KeywordStatement$3 = DebuggerStatement;
var KeywordStatement$4 = (0, import_lib2.$T)((0, import_lib2.$S)(Return, (0, import_lib2.$N)((0, import_lib2.$C)((0, import_lib2.$EXPECT)($L16, 'KeywordStatement ":"'), (0, import_lib2.$EXPECT)($L7, 'KeywordStatement "."'), AfterReturnShorthand)), (0, import_lib2.$E)(MaybeParenNestedExpression)), function(value) {
  var ret = value[0];
  var expression = value[2];
  return { "type": "ReturnStatement", "expression": expression, "children": [ret, expression] };
});
var KeywordStatement$5 = ThrowStatement;
var KeywordStatement$$ = [KeywordStatement$0, KeywordStatement$1, KeywordStatement$2, KeywordStatement$3, KeywordStatement$4, KeywordStatement$5];
function KeywordStatement(ctx, state2) {
  return (0, import_lib2.$EVENT_C)(ctx, state2, "KeywordStatement", KeywordStatement$$);
}
var DebuggerStatement$0 = (0, import_lib2.$T)((0, import_lib2.$S)(Debugger), function(value) {
  return { "type": "DebuggerStatement", "children": value };
});
function DebuggerStatement(ctx, state2) {
  return (0, import_lib2.$EVENT)(ctx, state2, "DebuggerStatement", DebuggerStatement$0);
}
var ThrowStatement$0 = (0, import_lib2.$T)((0, import_lib2.$S)(Throw, MaybeParenNestedExpression), function(value) {
  return { "type": "ThrowStatement", "children": value };
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
  var expression = $4;
  var trailing = $6;
  if (!expression) return $skip;
  if (!trailing) return expression;
  return [expression, trailing];
});
var MaybeNestedNonPipelineExpression$1 = NonPipelineExpression;
var MaybeNestedNonPipelineExpression$$ = [MaybeNestedNonPipelineExpression$0, MaybeNestedNonPipelineExpression$1];
function MaybeNestedNonPipelineExpression(ctx, state2) {
  return (0, import_lib2.$EVENT_C)(ctx, state2, "MaybeNestedNonPipelineExpression", MaybeNestedNonPipelineExpression$$);
}
var MaybeNestedPostfixedExpression$0 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$N)(NestedBulletedArray), (0, import_lib2.$N)(NestedImplicitObjectLiteral), PushIndent, (0, import_lib2.$E)((0, import_lib2.$S)(Nested, PostfixedExpression)), PopIndent, (0, import_lib2.$E)(AllowedTrailingCallExpressions)), function($skip, $loc, $0, $1, $2, $3, $4, $5, $6) {
  var expression = $4;
  var trailing = $6;
  if (!expression) return $skip;
  if (!trailing) return expression;
  return [expression, trailing];
});
var MaybeNestedPostfixedExpression$1 = PostfixedExpression;
var MaybeNestedPostfixedExpression$$ = [MaybeNestedPostfixedExpression$0, MaybeNestedPostfixedExpression$1];
function MaybeNestedPostfixedExpression(ctx, state2) {
  return (0, import_lib2.$EVENT_C)(ctx, state2, "MaybeNestedPostfixedExpression", MaybeNestedPostfixedExpression$$);
}
var NestedPostfixedExpressionNoTrailing$0 = NestedBulletedArray;
var NestedPostfixedExpressionNoTrailing$1 = NestedImplicitObjectLiteral;
var NestedPostfixedExpressionNoTrailing$2 = (0, import_lib2.$TS)((0, import_lib2.$S)(PushIndent, (0, import_lib2.$E)((0, import_lib2.$S)(Nested, PostfixedExpression)), PopIndent), function($skip, $loc, $0, $1, $2, $3) {
  var expression = $2;
  if (!expression) return $skip;
  return expression;
});
var NestedPostfixedExpressionNoTrailing$$ = [NestedPostfixedExpressionNoTrailing$0, NestedPostfixedExpressionNoTrailing$1, NestedPostfixedExpressionNoTrailing$2];
function NestedPostfixedExpressionNoTrailing(ctx, state2) {
  return (0, import_lib2.$EVENT_C)(ctx, state2, "NestedPostfixedExpressionNoTrailing", NestedPostfixedExpressionNoTrailing$$);
}
var MaybeNestedExpression$0 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$N)(NestedBulletedArray), (0, import_lib2.$N)(NestedImplicitObjectLiteral), PushIndent, (0, import_lib2.$E)((0, import_lib2.$S)(Nested, Expression)), PopIndent, (0, import_lib2.$E)(AllowedTrailingCallExpressions)), function($skip, $loc, $0, $1, $2, $3, $4, $5, $6) {
  var expression = $4;
  var trailing = $6;
  if (!expression) return $skip;
  if (!trailing) return expression;
  return [expression, trailing];
});
var MaybeNestedExpression$1 = Expression;
var MaybeNestedExpression$$ = [MaybeNestedExpression$0, MaybeNestedExpression$1];
function MaybeNestedExpression(ctx, state2) {
  return (0, import_lib2.$EVENT_C)(ctx, state2, "MaybeNestedExpression", MaybeNestedExpression$$);
}
var MaybeParenNestedExpression$0 = (0, import_lib2.$T)((0, import_lib2.$Y)((0, import_lib2.$S)((0, import_lib2.$E)(_), PostfixStatement, NoBlock)), function(value) {
  return "";
});
var MaybeParenNestedExpression$1 = (0, import_lib2.$T)((0, import_lib2.$S)((0, import_lib2.$N)(EOS), Expression), function(value) {
  return value[1];
});
var MaybeParenNestedExpression$2 = (0, import_lib2.$T)((0, import_lib2.$S)((0, import_lib2.$Y)(EOS), (0, import_lib2.$C)(ArrayLiteral, ObjectLiteral)), function(value) {
  return value[1];
});
var MaybeParenNestedExpression$3 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$Y)(EOS), InsertSpace, InsertOpenParen, PushIndent, (0, import_lib2.$S)(Nested, Expression), PopIndent, (0, import_lib2.$E)(AllowedTrailingCallExpressions), InsertNewline, InsertIndent, InsertCloseParen), function($skip, $loc, $0, $1, $2, $3, $4, $5, $6, $7, $8, $9, $10) {
  var exp = $5;
  if (!exp) return $skip;
  return $0.slice(1);
});
var MaybeParenNestedExpression$$ = [MaybeParenNestedExpression$0, MaybeParenNestedExpression$1, MaybeParenNestedExpression$2, MaybeParenNestedExpression$3];
function MaybeParenNestedExpression(ctx, state2) {
  return (0, import_lib2.$EVENT_C)(ctx, state2, "MaybeParenNestedExpression", MaybeParenNestedExpression$$);
}
var ImportDeclaration$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(Import, _, Identifier, (0, import_lib2.$E)(_), Equals, __, (0, import_lib2.$EXPECT)($L133, 'ImportDeclaration "require"'), NonIdContinue, Arguments), function($skip, $loc, $0, $1, $2, $3, $4, $5, $6, $7, $8, $9) {
  const imp = [
    { ...$1, ts: true },
    { ...$1, token: "const", js: true }
  ];
  return {
    type: "ImportDeclaration",
    children: [imp, $0.slice(1)]
  };
});
var ImportDeclaration$1 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$C)((0, import_lib2.$S)(Import, __), ImpliedImport), Operator, (0, import_lib2.$E)(OperatorBehavior), __, OperatorNamedImports, __, FromClause), function($skip, $loc, $0, $1, $2, $3, $4, $5, $6, $7) {
  var i = $1;
  var behavior = $3;
  var ws1 = $4;
  var imports = $5;
  var ws2 = $6;
  var from = $7;
  const errors = [];
  if (behavior?.error) errors.push(behavior.error);
  imports.specifiers.forEach((spec) => {
    state.operators.set(spec.binding.name, spec.behavior ?? behavior);
    if (spec.behavior?.error) errors.push(spec.behavior.error);
  });
  return {
    type: "ImportDeclaration",
    children: [i, ...errors, trimFirstSpace(ws1), imports, ws2, from],
    // omit $2 = Operator and $3 = OperatorBehavior
    imports,
    from
  };
});
var ImportDeclaration$2 = (0, import_lib2.$TS)((0, import_lib2.$S)(Import, __, (0, import_lib2.$E)((0, import_lib2.$S)(TypeKeyword, __)), ImportClause, __, FromClause), function($skip, $loc, $0, $1, $2, $3, $4, $5, $6) {
  var t = $3;
  var imports = $4;
  var from = $6;
  return {
    type: "ImportDeclaration",
    children: $0,
    imports,
    from,
    ts: !!t
  };
});
var ImportDeclaration$3 = (0, import_lib2.$T)((0, import_lib2.$S)(Import, __, ModuleSpecifier), function(value) {
  var module = value[2];
  return { "type": "ImportDeclaration", "children": value, "module": module };
});
var ImportDeclaration$4 = (0, import_lib2.$TS)((0, import_lib2.$S)(ImpliedImport, (0, import_lib2.$E)((0, import_lib2.$S)(TypeKeyword, __)), ImportClause, __, FromClause), function($skip, $loc, $0, $1, $2, $3, $4, $5) {
  var i = $1;
  var t = $2;
  var imports = $3;
  var w = $4;
  var from = $5;
  i.$loc = {
    pos: from[0].$loc.pos - 1,
    length: from[0].$loc.length + 1
  };
  const children = [i, t, imports, w, from];
  return { type: "ImportDeclaration", ts: !!t, children, imports, from };
});
var ImportDeclaration$5 = (0, import_lib2.$TS)((0, import_lib2.$S)(FromClause, __, Import, __, Operator, (0, import_lib2.$E)(OperatorBehavior), __, OperatorNamedImports), function($skip, $loc, $0, $1, $2, $3, $4, $5, $6, $7, $8) {
  var from = $1;
  var fws = $2;
  var i = $3;
  var iws = $4;
  var behavior = $6;
  var ows = $7;
  var imports = $8;
  const errors = [];
  if (behavior?.error) errors.push(behavior.error);
  imports.specifiers.forEach((spec) => {
    state.operators.set(spec.binding.name, spec.behavior ?? behavior);
    if (spec.behavior?.error) errors.push(spec.behavior.error);
  });
  return {
    type: "ImportDeclaration",
    children: [i, iws, ...errors, trimFirstSpace(ows), imports, fws, from],
    // omit Operator and OperatorBehavior
    imports,
    from
  };
});
var ImportDeclaration$6 = (0, import_lib2.$TS)((0, import_lib2.$S)(FromClause, __, Import, __, (0, import_lib2.$E)((0, import_lib2.$S)(TypeKeyword, __)), ImportClause), function($skip, $loc, $0, $1, $2, $3, $4, $5, $6) {
  var from = $1;
  var fws = $2;
  var i = $3;
  var iws = $4;
  var t = $5;
  var imports = $6;
  return {
    type: "ImportDeclaration",
    children: [i, iws, t, imports, fws, from],
    imports,
    from,
    ts: !!t
  };
});
var ImportDeclaration$$ = [ImportDeclaration$0, ImportDeclaration$1, ImportDeclaration$2, ImportDeclaration$3, ImportDeclaration$4, ImportDeclaration$5, ImportDeclaration$6];
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
  var binding = $1;
  var rest = $2;
  if (rest) {
    return {
      type: "Declaration",
      children: [binding, ...rest],
      names: [...binding.names, ...rest[3].names],
      binding,
      specifiers: rest[3].specifiers
    };
  }
  return {
    type: "Declaration",
    children: [binding],
    names: binding.names,
    binding
  };
});
var ImportClause$1 = NameSpaceImport;
var ImportClause$2 = NamedImports;
var ImportClause$$ = [ImportClause$0, ImportClause$1, ImportClause$2];
function ImportClause(ctx, state2) {
  return (0, import_lib2.$EVENT_C)(ctx, state2, "ImportClause", ImportClause$$);
}
var NameSpaceImport$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(Star, ImportAsToken, __, ImportedBinding), function($skip, $loc, $0, $1, $2, $3, $4) {
  var star = $1;
  var binding = $4;
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
  const names = specifiers.flatMap(({ binding }) => binding.names);
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
  const names = specifiers.flatMap(({ binding }) => binding.names);
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
  if (!Array.isArray(module)) return $0;
  return [$1, $2, ...module];
});
function FromClause(ctx, state2) {
  return (0, import_lib2.$EVENT)(ctx, state2, "FromClause", FromClause$0);
}
var ImportAssertion$0 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$E)(_), (0, import_lib2.$C)((0, import_lib2.$EXPECT)($L134, 'ImportAssertion "with"'), (0, import_lib2.$EXPECT)($L135, 'ImportAssertion "assert"')), NonIdContinue, (0, import_lib2.$E)(_), ObjectLiteral), function($skip, $loc, $0, $1, $2, $3, $4, $5) {
  var keyword = $2;
  var object = $5;
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
  if (!$1) return $2;
  return { ts: true, children: $0, binding: $2.binding };
});
var TypeAndImportSpecifier$1 = (0, import_lib2.$TS)((0, import_lib2.$S)(__, Operator, OperatorImportSpecifier), function($skip, $loc, $0, $1, $2, $3) {
  var ws = $1;
  var spec = $3;
  if (spec.binding.type !== "Identifier") {
    throw new Error("Expected identifier after `operator`");
  }
  state.operators.set(spec.binding.name, spec.behavior);
  return {
    ...spec,
    children: [
      ws,
      trimFirstSpace(spec[0]),
      spec.children.slice(1)
    ]
  };
});
var TypeAndImportSpecifier$$ = [TypeAndImportSpecifier$0, TypeAndImportSpecifier$1];
function TypeAndImportSpecifier(ctx, state2) {
  return (0, import_lib2.$EVENT_C)(ctx, state2, "TypeAndImportSpecifier", TypeAndImportSpecifier$$);
}
var ImportSpecifier$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(__, ModuleExportName, ImportAsToken, __, ImportedBinding, ObjectPropertyDelimiter), function($skip, $loc, $0, $1, $2, $3, $4, $5, $6) {
  var source = $2;
  var binding = $5;
  return {
    source,
    binding,
    children: $0
  };
});
var ImportSpecifier$1 = (0, import_lib2.$TS)((0, import_lib2.$S)(__, ImportedBinding, ObjectPropertyDelimiter), function($skip, $loc, $0, $1, $2, $3) {
  var binding = $2;
  return {
    source: binding,
    binding,
    children: $0
  };
});
var ImportSpecifier$$ = [ImportSpecifier$0, ImportSpecifier$1];
function ImportSpecifier(ctx, state2) {
  return (0, import_lib2.$EVENT_C)(ctx, state2, "ImportSpecifier", ImportSpecifier$$);
}
var OperatorImportSpecifier$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(__, ModuleExportName, (0, import_lib2.$E)(OperatorBehavior), ImportAsToken, __, ImportedBinding, ObjectPropertyDelimiter), function($skip, $loc, $0, $1, $2, $3, $4, $5, $6, $7) {
  var behavior = $3;
  var binding = $6;
  return {
    binding,
    behavior,
    children: [$1, $2, $3?.error, $4, $5, $6, $7]
  };
});
var OperatorImportSpecifier$1 = (0, import_lib2.$TS)((0, import_lib2.$S)(__, ImportedBinding, (0, import_lib2.$E)(OperatorBehavior), ObjectPropertyDelimiter), function($skip, $loc, $0, $1, $2, $3, $4) {
  var binding = $2;
  var behavior = $3;
  return {
    binding,
    behavior,
    children: [$1, $2, $3?.error, $4]
  };
});
var OperatorImportSpecifier$$ = [OperatorImportSpecifier$0, OperatorImportSpecifier$1];
function OperatorImportSpecifier(ctx, state2) {
  return (0, import_lib2.$EVENT_C)(ctx, state2, "OperatorImportSpecifier", OperatorImportSpecifier$$);
}
var ImportAsToken$0 = (0, import_lib2.$S)(__, As);
var ImportAsToken$1 = (0, import_lib2.$TS)((0, import_lib2.$S)(Loc, __, Colon, (0, import_lib2.$E)((0, import_lib2.$EXPECT)($L17, 'ImportAsToken " "'))), function($skip, $loc, $0, $1, $2, $3, $4) {
  var l = $1;
  var ws = $2;
  var c = $3;
  const children = [
    ...ws,
    { ...c, token: "as " }
  ];
  if (!ws.length) {
    children.unshift({ $loc: l.$loc, token: " " });
  }
  return {
    children
  };
});
var ImportAsToken$$ = [ImportAsToken$0, ImportAsToken$1];
function ImportAsToken(ctx, state2) {
  return (0, import_lib2.$EVENT_C)(ctx, state2, "ImportAsToken", ImportAsToken$$);
}
var ModuleExportName$0 = StringLiteral;
var ModuleExportName$1 = IdentifierName;
var ModuleExportName$$ = [ModuleExportName$0, ModuleExportName$1];
function ModuleExportName(ctx, state2) {
  return (0, import_lib2.$EVENT_C)(ctx, state2, "ModuleExportName", ModuleExportName$$);
}
var ModuleSpecifier$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(UnprocessedModuleSpecifier, (0, import_lib2.$E)(ImportAssertion)), function($skip, $loc, $0, $1, $2) {
  var module = $1;
  var assertion = $2;
  let { token } = module;
  if (config.rewriteTsImports) {
    token = token.replace(/\.([mc])?ts(['"])$/, ".$1js$2");
  }
  if (config.rewriteCivetImports) {
    token = token.replace(
      /\.civet(['"])$/,
      `${config.rewriteCivetImports.replace(/\$/g, "$$")}$1`
    );
  }
  if (token !== module.token) {
    module = { ...module, token, input: module.token };
  }
  return {
    type: "ModuleSpecifier",
    module,
    assertion,
    children: [module, assertion]
  };
});
function ModuleSpecifier(ctx, state2) {
  return (0, import_lib2.$EVENT)(ctx, state2, "ModuleSpecifier", ModuleSpecifier$0);
}
var UnprocessedModuleSpecifier$0 = StringLiteral;
var UnprocessedModuleSpecifier$1 = UnquotedSpecifier;
var UnprocessedModuleSpecifier$$ = [UnprocessedModuleSpecifier$0, UnprocessedModuleSpecifier$1];
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
  const exp = [
    { ...$1, ts: true },
    { ...$1, token: "module.exports", js: true }
  ];
  return {
    type: "ExportDeclaration",
    children: [exp, $0.slice(1)]
  };
});
var ExportDeclaration$1 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$E)(Decorators), Export, __, Default, __, (0, import_lib2.$N)(FunctionDeclaration), (0, import_lib2.$C)(LexicalDeclaration, VariableStatement, TypeAliasDeclaration, NamespaceDeclaration, EnumDeclaration, OperatorDeclaration)), function($skip, $loc, $0, $1, $2, $3, $4, $5, $6, $7) {
  var declaration = $7;
  let id, error;
  if (declaration.id) {
    id = declaration.id;
  } else if (declaration.names) {
    if (declaration.names.length !== 1) {
      error = {
        type: "Error",
        message: `export default with ${declaration.names.length} variable declaration (should be 1)`
      };
    }
    id = declaration.names[0];
  } else {
    throw new Error("Could not find name of declaration in export default");
  }
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
});
var ExportDeclaration$2 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$E)(Decorators), Export, __, Default, __, (0, import_lib2.$C)(HoistableDeclaration, ClassDeclaration, InterfaceDeclaration, MaybeNestedExpression)), function($skip, $loc, $0, $1, $2, $3, $4, $5, $6) {
  var declaration = $6;
  return { type: "ExportDeclaration", declaration, ts: declaration.ts, children: $0 };
});
var ExportDeclaration$3 = (0, import_lib2.$TS)((0, import_lib2.$S)(Export, __, ExportFromClause, __, FromClause), function($skip, $loc, $0, $1, $2, $3, $4, $5) {
  var exports = $3;
  return { type: "ExportDeclaration", ts: exports.ts, children: $0 };
});
var ExportDeclaration$4 = (0, import_lib2.$TS)((0, import_lib2.$S)(FromClause, __, Export, __, ExportFromClause), function($skip, $loc, $0, $1, $2, $3, $4, $5) {
  var from = $1;
  var fws = $2;
  var e = $3;
  var ews = $4;
  var exports = $5;
  return {
    type: "ExportDeclaration",
    ts: exports.ts,
    children: [e, ews, exports, " ", from, trimFirstSpace(fws)]
  };
});
var ExportDeclaration$5 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$E)(Decorators), Export, __, (0, import_lib2.$C)(Declaration, VariableStatement, TypeAndNamedExports, ExportVarDec)), function($skip, $loc, $0, $1, $2, $3, $4) {
  var declaration = $4;
  return { type: "ExportDeclaration", declaration, ts: declaration.ts, children: $0 };
});
var ExportDeclaration$$ = [ExportDeclaration$0, ExportDeclaration$1, ExportDeclaration$2, ExportDeclaration$3, ExportDeclaration$4, ExportDeclaration$5];
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
var ExportFromClause$0 = (0, import_lib2.$S)(Star, (0, import_lib2.$E)((0, import_lib2.$S)(__, As, __, ModuleExportName)));
var ExportFromClause$1 = TypeAndNamedExports;
var ExportFromClause$$ = [ExportFromClause$0, ExportFromClause$1];
function ExportFromClause(ctx, state2) {
  return (0, import_lib2.$EVENT_C)(ctx, state2, "ExportFromClause", ExportFromClause$$);
}
var TypeAndNamedExports$0 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$E)((0, import_lib2.$S)(TypeKeyword, __)), NamedExports), function($skip, $loc, $0, $1, $2) {
  if (!$1) return $2;
  return { ts: true, children: $0 };
});
function TypeAndNamedExports(ctx, state2) {
  return (0, import_lib2.$EVENT)(ctx, state2, "TypeAndNamedExports", TypeAndNamedExports$0);
}
var NamedExports$0 = (0, import_lib2.$S)(OpenBrace, (0, import_lib2.$Q)(ExportSpecifier), (0, import_lib2.$E)((0, import_lib2.$S)(__, Comma)), __, CloseBrace);
var NamedExports$1 = (0, import_lib2.$TS)((0, import_lib2.$S)(InsertInlineOpenBrace, ImplicitExportSpecifier, (0, import_lib2.$Q)((0, import_lib2.$S)(ImplicitObjectPropertyDelimiter, ImplicitExportSpecifier)), InsertCloseBrace, (0, import_lib2.$Y)((0, import_lib2.$C)(StatementDelimiter, (0, import_lib2.$S)(__, From)))), function($skip, $loc, $0, $1, $2, $3, $4, $5) {
  var open = $1;
  var first = $2;
  var rest = $3;
  var close = $4;
  return [open, first, ...rest, close];
});
var NamedExports$$ = [NamedExports$0, NamedExports$1];
function NamedExports(ctx, state2) {
  return (0, import_lib2.$EVENT_C)(ctx, state2, "NamedExports", NamedExports$$);
}
var ExportSpecifier$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(__, (0, import_lib2.$E)((0, import_lib2.$S)(TypeKeyword, __)), ModuleExportName, (0, import_lib2.$E)((0, import_lib2.$S)(__, As, __, ModuleExportName)), ObjectPropertyDelimiter), function($skip, $loc, $0, $1, $2, $3, $4, $5) {
  if (!$2) return $0;
  return { ts: true, children: $0 };
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
  const { imports } = decl;
  if (!imports.binding && !imports.specifiers) return $skip;
  return dynamizeImportDeclaration(decl);
});
var Declaration$1 = HoistableDeclaration;
var Declaration$2 = ClassDeclaration;
var Declaration$3 = (0, import_lib2.$TV)(LexicalDeclaration, function($skip, $loc, $0, $1) {
  var d = $0;
  if (d.thisAssignments?.length)
    return {
      ...d,
      children: [...d.children, ...d.splices, ";", ...d.thisAssignments]
    };
  if (d.splices?.length)
    return {
      ...d,
      children: [...d.children, ...d.splices]
    };
  return d;
});
var Declaration$4 = TypeDeclaration;
var Declaration$5 = EnumDeclaration;
var Declaration$6 = OperatorDeclaration;
var Declaration$7 = UsingDeclaration;
var Declaration$$ = [Declaration$0, Declaration$1, Declaration$2, Declaration$3, Declaration$4, Declaration$5, Declaration$6, Declaration$7];
function Declaration(ctx, state2) {
  return (0, import_lib2.$EVENT_C)(ctx, state2, "Declaration", Declaration$$);
}
var HoistableDeclaration$0 = FunctionDeclaration;
function HoistableDeclaration(ctx, state2) {
  return (0, import_lib2.$EVENT)(ctx, state2, "HoistableDeclaration", HoistableDeclaration$0);
}
var LexicalDeclaration$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(LetOrConst, LexicalBinding, (0, import_lib2.$Q)((0, import_lib2.$S)(__, Comma, __, LexicalBinding))), function($skip, $loc, $0, $1, $2, $3) {
  var decl = $1;
  var binding = $2;
  var tail = $3;
  const bindings = [binding].concat(tail.map(([, , , b]) => b));
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
var LexicalDeclaration$1 = (0, import_lib2.$TS)((0, import_lib2.$S)(Loc, (0, import_lib2.$C)(BindingPattern, BindingIdentifier), (0, import_lib2.$E)(TypeSuffix), __, (0, import_lib2.$C)(ConstAssignment, LetAssignment), MaybeNestedPostfixedExpression), function($skip, $loc, $0, $1, $2, $3, $4, $5, $6) {
  var loc = $1;
  var assign = $5;
  return processAssignmentDeclaration(
    { $loc: loc, token: assign.decl },
    ...$0.slice(1)
  );
});
var LexicalDeclaration$$ = [LexicalDeclaration$0, LexicalDeclaration$1];
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
  var pattern = $1;
  var typeSuffix = $2;
  var initializer = $3;
  const [splices, thisAssignments] = gatherBindingCode(pattern);
  typeSuffix ??= pattern.typeSuffix;
  return {
    type: "Binding",
    children: [pattern, typeSuffix, initializer],
    names: pattern.names,
    pattern,
    typeSuffix,
    initializer,
    splices: splices.map((s) => [",", s]),
    thisAssignments: thisAssignments.map((s) => ["", s, ";"])
  };
});
var LexicalBinding$1 = (0, import_lib2.$TS)((0, import_lib2.$S)(BindingIdentifier, (0, import_lib2.$E)(TypeSuffix), (0, import_lib2.$E)(Initializer)), function($skip, $loc, $0, $1, $2, $3) {
  var pattern = $1;
  var typeSuffix = $2;
  var initializer = $3;
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
var LexicalBinding$$ = [LexicalBinding$0, LexicalBinding$1];
function LexicalBinding(ctx, state2) {
  return (0, import_lib2.$EVENT_C)(ctx, state2, "LexicalBinding", LexicalBinding$$);
}
var Initializer$0 = (0, import_lib2.$T)((0, import_lib2.$S)(__, Equals, MaybeNestedExpression), function(value) {
  var expression = value[2];
  return { "type": "Initializer", "expression": expression, "children": value };
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
  var binding = $1;
  var tail = $2;
  const bindings = [binding].concat(tail.map(([, , , b]) => b));
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
var NumericLiteralKind$0 = DecimalBigIntegerLiteral;
var NumericLiteralKind$1 = BinaryIntegerLiteral;
var NumericLiteralKind$2 = OctalIntegerLiteral;
var NumericLiteralKind$3 = HexIntegerLiteral;
var NumericLiteralKind$4 = DecimalLiteral;
var NumericLiteralKind$$ = [NumericLiteralKind$0, NumericLiteralKind$1, NumericLiteralKind$2, NumericLiteralKind$3, NumericLiteralKind$4];
function NumericLiteralKind(ctx, state2) {
  return (0, import_lib2.$EVENT_C)(ctx, state2, "NumericLiteralKind", NumericLiteralKind$$);
}
var DecimalBigIntegerLiteral$0 = (0, import_lib2.$R$0)((0, import_lib2.$EXPECT)($R36, "DecimalBigIntegerLiteral /(?:0|[1-9](?:_[0-9]|[0-9])*)n/"));
function DecimalBigIntegerLiteral(ctx, state2) {
  return (0, import_lib2.$EVENT)(ctx, state2, "DecimalBigIntegerLiteral", DecimalBigIntegerLiteral$0);
}
var DecimalLiteral$0 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$TEXT)((0, import_lib2.$EXPECT)($R37, "DecimalLiteral /(?:0|[1-9](?:_[0-9]|[0-9])*)(?=\\.(?:\\p{ID_Start}|[_$]))/")), (0, import_lib2.$N)((0, import_lib2.$S)((0, import_lib2.$EXPECT)($L7, 'DecimalLiteral "."'), ExponentPart))), function($skip, $loc, $0, $1, $2) {
  return $1 + ".";
});
var DecimalLiteral$1 = (0, import_lib2.$TEXT)((0, import_lib2.$S)((0, import_lib2.$EXPECT)($R38, "DecimalLiteral /(?:0|[1-9](?:_[0-9]|[0-9])*)(?:\\.(?:[0-9](?:_[0-9]|[0-9])*))?/"), (0, import_lib2.$E)(ExponentPart)));
var DecimalLiteral$2 = (0, import_lib2.$TEXT)((0, import_lib2.$S)((0, import_lib2.$EXPECT)($R39, "DecimalLiteral /(?:\\.[0-9](?:_[0-9]|[0-9])*)/"), (0, import_lib2.$E)(ExponentPart)));
var DecimalLiteral$$ = [DecimalLiteral$0, DecimalLiteral$1, DecimalLiteral$2];
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
var IntegerLiteralKind$0 = DecimalBigIntegerLiteral;
var IntegerLiteralKind$1 = BinaryIntegerLiteral;
var IntegerLiteralKind$2 = OctalIntegerLiteral;
var IntegerLiteralKind$3 = HexIntegerLiteral;
var IntegerLiteralKind$4 = DecimalIntegerLiteral;
var IntegerLiteralKind$$ = [IntegerLiteralKind$0, IntegerLiteralKind$1, IntegerLiteralKind$2, IntegerLiteralKind$3, IntegerLiteralKind$4];
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
});
var StringLiteral$1 = (0, import_lib2.$TS)((0, import_lib2.$S)(SingleQuote, SingleStringCharacters, SingleQuote), function($skip, $loc, $0, $1, $2, $3) {
  var str = $2;
  return {
    type: "StringLiteral",
    token: `'${modifyString(str.token)}'`,
    $loc
  };
});
var StringLiteral$$ = [StringLiteral$0, StringLiteral$1];
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
});
var TripleDoubleStringContents$1 = (0, import_lib2.$T)((0, import_lib2.$S)((0, import_lib2.$N)(CoffeeInterpolationEnabled), TripleDoubleStringCharacters), function(value) {
  return [value[1]];
});
var TripleDoubleStringContents$$ = [TripleDoubleStringContents$0, TripleDoubleStringContents$1];
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
  if (!$3) return $skip;
  return [$1, ...$3];
});
function CoffeeStringSubstitution(ctx, state2) {
  return (0, import_lib2.$EVENT)(ctx, state2, "CoffeeStringSubstitution", CoffeeStringSubstitution$0);
}
var CoffeeInterpolatedDoubleQuotedString$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(CoffeeInterpolationEnabled, DoubleQuote, (0, import_lib2.$Q)((0, import_lib2.$C)(CoffeeDoubleQuotedStringCharacters, CoffeeStringSubstitution)), DoubleQuote), function($skip, $loc, $0, $1, $2, $3, $4) {
  var s = $2;
  var parts = $3;
  var e = $4;
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
var RegularExpressionLiteral$0 = HeregexLiteral;
var RegularExpressionLiteral$1 = (0, import_lib2.$TV)((0, import_lib2.$TEXT)((0, import_lib2.$S)((0, import_lib2.$EXPECT)($L77, 'RegularExpressionLiteral "/"'), RegularExpressionBody, (0, import_lib2.$EXPECT)($L77, 'RegularExpressionLiteral "/"'), RegularExpressionFlags)), function($skip, $loc, $0, $1) {
  var raw = $0;
  return {
    type: "RegularExpressionLiteral",
    raw,
    children: [{ $loc, token: raw }]
  };
});
var RegularExpressionLiteral$$ = [RegularExpressionLiteral$0, RegularExpressionLiteral$1];
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
  var open = $1;
  var body = $2;
  var close = $3;
  var flags = $4;
  let hasSubstitutions = body.some((part) => part.type === "Substitution");
  if (hasSubstitutions) {
    const children = [
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
    if (flags.length) {
      children.push(
        ", ",
        JSON.stringify(flags)
      );
    }
    children.push({ ...close, token: ")" });
    return {
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
var HeregexPart$0 = RegularExpressionClass;
var HeregexPart$1 = (0, import_lib2.$T)((0, import_lib2.$S)(CoffeeInterpolationEnabled, CoffeeStringSubstitution), function(value) {
  return { "type": "Substitution", "children": value[1] };
});
var HeregexPart$2 = (0, import_lib2.$T)((0, import_lib2.$S)(TemplateSubstitution), function(value) {
  return { "type": "Substitution", "children": value[0] };
});
var HeregexPart$3 = (0, import_lib2.$TR)((0, import_lib2.$EXPECT)($R53, "HeregexPart /(?:\\\\.)/"), function($skip, $loc, $0, $1, $2, $3, $4, $5, $6, $7, $8, $9) {
  let token = $0;
  switch ($0[1]) {
    case "\n":
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
});
var HeregexPart$4 = (0, import_lib2.$TS)((0, import_lib2.$S)(HeregexComment), function($skip, $loc, $0, $1) {
  return { $loc, token: "" };
});
var HeregexPart$5 = (0, import_lib2.$TR)((0, import_lib2.$EXPECT)($R54, "HeregexPart /[\\s]+/"), function($skip, $loc, $0, $1, $2, $3, $4, $5, $6, $7, $8, $9) {
  return { $loc, token: "" };
});
var HeregexPart$6 = (0, import_lib2.$TR)((0, import_lib2.$EXPECT)($R55, "HeregexPart /\\/(?!\\/\\/)/"), function($skip, $loc, $0, $1, $2, $3, $4, $5, $6, $7, $8, $9) {
  return { $loc, token: "\\/" };
});
var HeregexPart$7 = (0, import_lib2.$TR)((0, import_lib2.$EXPECT)($R56, "HeregexPart /[^[\\/\\s#$\\\\]+|[#$]/"), function($skip, $loc, $0, $1, $2, $3, $4, $5, $6, $7, $8, $9) {
  return { $loc, token: $0 };
});
var HeregexPart$$ = [HeregexPart$0, HeregexPart$1, HeregexPart$2, HeregexPart$3, HeregexPart$4, HeregexPart$5, HeregexPart$6, HeregexPart$7];
function HeregexPart(ctx, state2) {
  return (0, import_lib2.$EVENT_C)(ctx, state2, "HeregexPart", HeregexPart$$);
}
var HeregexComment$0 = (0, import_lib2.$S)((0, import_lib2.$N)(CoffeeDivEnabled), JSSingleLineComment);
var HeregexComment$1 = (0, import_lib2.$T)((0, import_lib2.$S)(CoffeeCommentEnabled, CoffeeSingleLineComment), function(value) {
  return value[1];
});
var HeregexComment$$ = [HeregexComment$0, HeregexComment$1];
function HeregexComment(ctx, state2) {
  return (0, import_lib2.$EVENT_C)(ctx, state2, "HeregexComment", HeregexComment$$);
}
var RegularExpressionBody$0 = (0, import_lib2.$S)((0, import_lib2.$N)((0, import_lib2.$R$0)((0, import_lib2.$EXPECT)($R57, "RegularExpressionBody /[*\\/\\r\\n]/"))), (0, import_lib2.$Q)(RegExpPart));
function RegularExpressionBody(ctx, state2) {
  return (0, import_lib2.$EVENT)(ctx, state2, "RegularExpressionBody", RegularExpressionBody$0);
}
var RegExpPart$0 = RegularExpressionClass;
var RegExpPart$1 = RegExpCharacter;
var RegExpPart$$ = [RegExpPart$0, RegExpPart$1];
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
});
var _TemplateLiteral$1 = (0, import_lib2.$TS)((0, import_lib2.$S)(Backtick, (0, import_lib2.$Q)((0, import_lib2.$C)(TemplateCharacters, TemplateSubstitution)), Backtick), function($skip, $loc, $0, $1, $2, $3) {
  return {
    type: "TemplateLiteral",
    children: $0
  };
});
var _TemplateLiteral$2 = (0, import_lib2.$TS)((0, import_lib2.$S)(TripleDoubleQuote, TripleDoubleStringContents, TripleDoubleQuote), function($skip, $loc, $0, $1, $2, $3) {
  return dedentBlockSubstitutions($0, config.tab);
});
var _TemplateLiteral$3 = (0, import_lib2.$TS)((0, import_lib2.$S)(TripleSingleQuote, TripleSingleStringCharacters, TripleSingleQuote), function($skip, $loc, $0, $1, $2, $3) {
  var s = $1;
  var str = $2;
  var e = $3;
  return {
    type: "TemplateLiteral",
    children: [s, dedentBlockString(str, config.tab), e]
  };
});
var _TemplateLiteral$4 = CoffeeInterpolatedDoubleQuotedString;
var _TemplateLiteral$$ = [_TemplateLiteral$0, _TemplateLiteral$1, _TemplateLiteral$2, _TemplateLiteral$3, _TemplateLiteral$4];
function _TemplateLiteral(ctx, state2) {
  return (0, import_lib2.$EVENT_C)(ctx, state2, "_TemplateLiteral", _TemplateLiteral$$);
}
var TemplateSubstitution$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(SubstitutionStart, AllowAll, (0, import_lib2.$E)((0, import_lib2.$S)(PostfixedExpression, __, CloseBrace)), RestoreAll), function($skip, $loc, $0, $1, $2, $3, $4) {
  if (!$3) return $skip;
  return [$1, ...$3];
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
var ReservedWord$0 = (0, import_lib2.$S)((0, import_lib2.$R$0)((0, import_lib2.$EXPECT)($R63, "ReservedWord /(?:on|off|yes|no)(?!\\p{ID_Continue})/")), CoffeeBooleansEnabled);
var ReservedWord$1 = (0, import_lib2.$S)((0, import_lib2.$R$0)((0, import_lib2.$EXPECT)($R64, "ReservedWord /(?:isnt)(?!\\p{ID_Continue})/")), CoffeeIsntEnabled);
var ReservedWord$2 = (0, import_lib2.$S)((0, import_lib2.$R$0)((0, import_lib2.$EXPECT)($R65, "ReservedWord /(?:by)(?!\\p{ID_Continue})/")), CoffeeForLoopsEnabled);
var ReservedWord$3 = (0, import_lib2.$S)((0, import_lib2.$R$0)((0, import_lib2.$EXPECT)($R66, "ReservedWord /(?:of)(?!\\p{ID_Continue})/")), CoffeeOfEnabled);
var ReservedWord$4 = (0, import_lib2.$R$0)((0, import_lib2.$EXPECT)($R67, "ReservedWord /(?:and|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|false|finally|for|function|if|import|in|instanceof|interface|is|let|loop|new|not|null|or|private|protected|public|return|static|super|switch|this|throw|true|try|typeof|unless|until|var|void|while|with|yield)(?!\\p{ID_Continue})/"));
var ReservedWord$$ = [ReservedWord$0, ReservedWord$1, ReservedWord$2, ReservedWord$3, ReservedWord$4];
function ReservedWord(ctx, state2) {
  return (0, import_lib2.$EVENT_C)(ctx, state2, "ReservedWord", ReservedWord$$);
}
var Comment$0 = (0, import_lib2.$T)((0, import_lib2.$S)((0, import_lib2.$EXPECT)($R68, "Comment /(?=\\/|#)/"), _Comment), function(value) {
  return value[1];
});
function Comment(ctx, state2) {
  return (0, import_lib2.$EVENT)(ctx, state2, "Comment", Comment$0);
}
var _Comment$0 = MultiLineComment;
var _Comment$1 = SingleLineComment;
var _Comment$$ = [_Comment$0, _Comment$1];
function _Comment(ctx, state2) {
  return (0, import_lib2.$EVENT_C)(ctx, state2, "_Comment", _Comment$$);
}
var SingleLineComment$0 = JSSingleLineComment;
var SingleLineComment$1 = (0, import_lib2.$S)(CoffeeCommentEnabled, CoffeeSingleLineComment);
var SingleLineComment$$ = [SingleLineComment$0, SingleLineComment$1];
function SingleLineComment(ctx, state2) {
  return (0, import_lib2.$EVENT_C)(ctx, state2, "SingleLineComment", SingleLineComment$$);
}
var JSSingleLineComment$0 = (0, import_lib2.$TR)((0, import_lib2.$EXPECT)($R69, "JSSingleLineComment /\\/\\/(?!\\/)[^\\r\\n]*/"), function($skip, $loc, $0, $1, $2, $3, $4, $5, $6, $7, $8, $9) {
  return { type: "Comment", $loc, token: $0 };
});
function JSSingleLineComment(ctx, state2) {
  return (0, import_lib2.$EVENT)(ctx, state2, "JSSingleLineComment", JSSingleLineComment$0);
}
var MultiLineComment$0 = JSMultiLineComment;
var MultiLineComment$1 = CoffeeMultiLineComment;
var MultiLineComment$$ = [MultiLineComment$0, MultiLineComment$1];
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
  $2 = $2.slice(0, $2.length - 3).replace(/\*\//g, "* /");
  return { type: "Comment", $loc, token: `/*${$2}*/` };
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
});
var NonNewlineWhitespace$1 = (0, import_lib2.$T)((0, import_lib2.$S)((0, import_lib2.$EXPECT)($L142, 'NonNewlineWhitespace "\\\\\\\\"'), CoffeeLineContinuationEnabled, EOL), function(value) {
  return " ";
});
var NonNewlineWhitespace$$ = [NonNewlineWhitespace$0, NonNewlineWhitespace$1];
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
});
var __$1 = (0, import_lib2.$EXPECT)($L0, '__ ""');
var __$$ = [__$0, __$1];
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
});
var ExpressionDelimiter$1 = (0, import_lib2.$T)((0, import_lib2.$S)((0, import_lib2.$Y)(EOS), InsertComma), function(value) {
  return value[1];
});
var ExpressionDelimiter$$ = [ExpressionDelimiter$0, ExpressionDelimiter$1];
function ExpressionDelimiter(ctx, state2) {
  return (0, import_lib2.$EVENT_C)(ctx, state2, "ExpressionDelimiter", ExpressionDelimiter$$);
}
var SimpleStatementDelimiter$0 = (0, import_lib2.$Y)(EOS);
var SimpleStatementDelimiter$1 = SemicolonDelimiter;
var SimpleStatementDelimiter$$ = [SimpleStatementDelimiter$0, SimpleStatementDelimiter$1];
function SimpleStatementDelimiter(ctx, state2) {
  return (0, import_lib2.$EVENT_C)(ctx, state2, "SimpleStatementDelimiter", SimpleStatementDelimiter$$);
}
var StatementDelimiter$0 = (0, import_lib2.$Y)(EOS);
var StatementDelimiter$1 = SemicolonDelimiter;
var StatementDelimiter$2 = ClosingDelimiter;
var StatementDelimiter$$ = [StatementDelimiter$0, StatementDelimiter$1, StatementDelimiter$2];
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
  return { $loc, token: $1, ts: true };
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
});
var Dot$1 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$EXPECT)($R79, "Dot /['\u2019]s/"), Trimmed_), function($skip, $loc, $0, $1, $2) {
  var ws = $2;
  return [
    { $loc, token: "." },
    ws
  ];
});
var Dot$$ = [Dot$0, Dot$1];
function Dot(ctx, state2) {
  return (0, import_lib2.$EVENT_C)(ctx, state2, "Dot", Dot$$);
}
var DotDot$0 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$EXPECT)($L161, 'DotDot ".."'), (0, import_lib2.$N)((0, import_lib2.$EXPECT)($L7, 'DotDot "."'))), function($skip, $loc, $0, $1, $2) {
  return { $loc, token: $1 };
});
var DotDot$1 = (0, import_lib2.$TV)((0, import_lib2.$EXPECT)($L162, 'DotDot "\u2025"'), function($skip, $loc, $0, $1) {
  return { $loc, token: ".." };
});
var DotDot$$ = [DotDot$0, DotDot$1];
function DotDot(ctx, state2) {
  return (0, import_lib2.$EVENT_C)(ctx, state2, "DotDot", DotDot$$);
}
var DotDotDot$0 = (0, import_lib2.$TV)((0, import_lib2.$EXPECT)($L163, 'DotDotDot "..."'), function($skip, $loc, $0, $1) {
  return { $loc, token: $1 };
});
var DotDotDot$1 = (0, import_lib2.$TV)((0, import_lib2.$EXPECT)($L164, 'DotDotDot "\u2026"'), function($skip, $loc, $0, $1) {
  return { $loc, token: "..." };
});
var DotDotDot$$ = [DotDotDot$0, DotDotDot$1];
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
  return { $loc, token: $1, spaced: true };
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
  return { $loc, token: $1, ts: true };
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
});
var Pipe$1 = (0, import_lib2.$TV)((0, import_lib2.$C)((0, import_lib2.$EXPECT)($L200, 'Pipe "|>="'), (0, import_lib2.$EXPECT)($L201, 'Pipe "\u25B7="')), function($skip, $loc, $0, $1) {
  return { $loc, token: "|>=" };
});
var Pipe$2 = (0, import_lib2.$TV)((0, import_lib2.$C)((0, import_lib2.$EXPECT)($L202, 'Pipe "|>"'), (0, import_lib2.$EXPECT)($L203, 'Pipe "\u25B7"')), function($skip, $loc, $0, $1) {
  return { $loc, token: "|>" };
});
var Pipe$$ = [Pipe$0, Pipe$1, Pipe$2];
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
  return { $loc, token: $1, ts: true };
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
});
var Static$1 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$EXPECT)($L146, 'Static "@"'), (0, import_lib2.$N)((0, import_lib2.$C)((0, import_lib2.$EXPECT)($L4, 'Static "("'), (0, import_lib2.$EXPECT)($L146, 'Static "@"')))), function($skip, $loc, $0, $1, $2) {
  return { $loc, token: "static " };
});
var Static$$ = [Static$0, Static$1];
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
  return { $loc, token: $1, negated: true };
});
function Unless(ctx, state2) {
  return (0, import_lib2.$EVENT)(ctx, state2, "Unless", Unless$0);
}
var Until$0 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$EXPECT)($L224, 'Until "until"'), NonIdContinue), function($skip, $loc, $0, $1, $2) {
  return { $loc, token: $1, negated: true };
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
  const jsx = $2.length === 0 ? $1 : {
    type: "JSXFragment",
    children: [
      "<>\n",
      state.currentIndent.token,
      ...$0,
      "\n",
      state.currentIndent.token,
      "</>"
    ],
    jsxChildren: [$1].concat($2.map(([, tag]) => tag))
  };
  const type = typeOfJSX(jsx, config);
  return type ? [
    { ts: true, children: ["("] },
    jsx,
    { ts: true, children: [" as any as ", type, ")"] }
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
var _JSXTag$0 = JSXElement;
var _JSXTag$1 = JSXFragment;
var _JSXTag$2 = JSXComment;
var _JSXTag$$ = [_JSXTag$0, _JSXTag$1, _JSXTag$2];
function _JSXTag(ctx, state2) {
  return (0, import_lib2.$EVENT_C)(ctx, state2, "_JSXTag", _JSXTag$$);
}
var JSXElement$0 = JSXSelfClosingElement;
var JSXElement$1 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$N)(CoffeeJSXEnabled), PushJSXOpeningElement, (0, import_lib2.$E)(JSXMixedChildren), JSXOptionalClosingElement, PopJSXStack), function($skip, $loc, $0, $1, $2, $3, $4, $5) {
  var open = $2;
  var children = $3;
  var close = $4;
  if (!children) return $skip;
  let parts;
  $0 = $0.slice(1);
  if (close) {
    parts = $0;
  } else if (children.jsxChildren.length) {
    parts = [
      ...$0,
      "\n",
      // InsertNewline
      state.currentIndent.token,
      // InsertIndent
      ["</", open[1], ">"]
    ];
  } else {
    parts = [open.slice(0, -1), " />"];
  }
  return { type: "JSXElement", children: parts, tag: open[1] };
});
var JSXElement$2 = (0, import_lib2.$TS)((0, import_lib2.$S)(CoffeeJSXEnabled, JSXOpeningElement, (0, import_lib2.$E)(JSXChildren), (0, import_lib2.$E)(Whitespace), JSXClosingElement), function($skip, $loc, $0, $1, $2, $3, $4, $5) {
  var open = $2;
  var close = $5;
  $0 = $0.slice(1);
  if (open[1] !== close[2]) return $skip;
  return { type: "JSXElement", children: $0, tag: open[1] };
});
var JSXElement$$ = [JSXElement$0, JSXElement$1, JSXElement$2];
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
  state.JSXTagStack.push($1[1]);
  return $1;
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
  if (state.currentJSXTag !== close[2]) return $skip;
  return $0;
});
var JSXOptionalClosingElement$1 = (0, import_lib2.$EXPECT)($L0, 'JSXOptionalClosingElement ""');
var JSXOptionalClosingElement$$ = [JSXOptionalClosingElement$0, JSXOptionalClosingElement$1];
function JSXOptionalClosingElement(ctx, state2) {
  return (0, import_lib2.$EVENT_C)(ctx, state2, "JSXOptionalClosingElement", JSXOptionalClosingElement$$);
}
var JSXClosingElement$0 = (0, import_lib2.$S)((0, import_lib2.$EXPECT)($L231, 'JSXClosingElement "</"'), (0, import_lib2.$E)(Whitespace), JSXElementName, (0, import_lib2.$E)(Whitespace), (0, import_lib2.$EXPECT)($L45, 'JSXClosingElement ">"'));
function JSXClosingElement(ctx, state2) {
  return (0, import_lib2.$EVENT)(ctx, state2, "JSXClosingElement", JSXClosingElement$0);
}
var JSXFragment$0 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$N)(CoffeeJSXEnabled), PushJSXOpeningFragment, (0, import_lib2.$E)(JSXMixedChildren), JSXOptionalClosingFragment, PopJSXStack), function($skip, $loc, $0, $1, $2, $3, $4, $5) {
  var open = $2;
  var children = $3;
  var close = $4;
  if (!children) return $skip;
  $0 = $0.slice(1);
  const parts = close ? $0 : [
    ...$0,
    "\n",
    // InsertNewline
    state.currentIndent.token,
    // InsertIndent
    "</>"
  ];
  return { type: "JSXFragment", children: parts, jsxChildren: children.jsxChildren };
});
var JSXFragment$1 = (0, import_lib2.$TS)((0, import_lib2.$S)(CoffeeJSXEnabled, (0, import_lib2.$EXPECT)($L232, 'JSXFragment "<>"'), (0, import_lib2.$E)(JSXChildren), (0, import_lib2.$E)(Whitespace), JSXClosingFragment), function($skip, $loc, $0, $1, $2, $3, $4, $5) {
  var children = $3;
  $0 = $0.slice(1);
  return {
    type: "JSXFragment",
    children: $0,
    jsxChildren: children ? children.jsxChildren : []
  };
});
var JSXFragment$$ = [JSXFragment$0, JSXFragment$1];
function JSXFragment(ctx, state2) {
  return (0, import_lib2.$EVENT_C)(ctx, state2, "JSXFragment", JSXFragment$$);
}
var PushJSXOpeningFragment$0 = (0, import_lib2.$TV)((0, import_lib2.$EXPECT)($L232, 'PushJSXOpeningFragment "<>"'), function($skip, $loc, $0, $1) {
  state.JSXTagStack.push("");
  return $1;
});
function PushJSXOpeningFragment(ctx, state2) {
  return (0, import_lib2.$EVENT)(ctx, state2, "PushJSXOpeningFragment", PushJSXOpeningFragment$0);
}
var JSXOptionalClosingFragment$0 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$E)(Whitespace), JSXClosingFragment), function($skip, $loc, $0, $1, $2) {
  if (state.currentJSXTag !== "") return $skip;
  return $0;
});
var JSXOptionalClosingFragment$1 = (0, import_lib2.$EXPECT)($L0, 'JSXOptionalClosingFragment ""');
var JSXOptionalClosingFragment$$ = [JSXOptionalClosingFragment$0, JSXOptionalClosingFragment$1];
function JSXOptionalClosingFragment(ctx, state2) {
  return (0, import_lib2.$EVENT_C)(ctx, state2, "JSXOptionalClosingFragment", JSXOptionalClosingFragment$$);
}
var JSXClosingFragment$0 = (0, import_lib2.$EXPECT)($L233, 'JSXClosingFragment "</>"');
function JSXClosingFragment(ctx, state2) {
  return (0, import_lib2.$EVENT)(ctx, state2, "JSXClosingFragment", JSXClosingFragment$0);
}
var JSXElementName$0 = (0, import_lib2.$TV)((0, import_lib2.$Y)((0, import_lib2.$S)((0, import_lib2.$C)((0, import_lib2.$EXPECT)($L178, 'JSXElementName "#"'), Dot), JSXShorthandString)), function($skip, $loc, $0, $1) {
  return config.defaultElement;
});
var JSXElementName$1 = (0, import_lib2.$TEXT)((0, import_lib2.$S)(JSXIdentifierName, (0, import_lib2.$C)((0, import_lib2.$S)(Colon, JSXIdentifierName), (0, import_lib2.$Q)((0, import_lib2.$S)(Dot, JSXIdentifierName)))));
var JSXElementName$$ = [JSXElementName$0, JSXElementName$1];
function JSXElementName(ctx, state2) {
  return (0, import_lib2.$EVENT_C)(ctx, state2, "JSXElementName", JSXElementName$$);
}
var JSXIdentifierName$0 = (0, import_lib2.$R$0)((0, import_lib2.$EXPECT)($R82, "JSXIdentifierName /(?:\\p{ID_Start}|[_$])(?:\\p{ID_Continue}|[\\u200C\\u200D$-])*/"));
function JSXIdentifierName(ctx, state2) {
  return (0, import_lib2.$EVENT)(ctx, state2, "JSXIdentifierName", JSXIdentifierName$0);
}
var JSXAttributes$0 = (0, import_lib2.$TV)((0, import_lib2.$Q)((0, import_lib2.$S)((0, import_lib2.$E)(Whitespace), JSXAttribute)), function($skip, $loc, $0, $1) {
  const classes = [];
  let attrs = $0.filter((pair) => {
    const [, attr] = pair;
    if (attr.type === "JSXClass") {
      classes.push(attr.class);
      return false;
    }
    return true;
  });
  if (classes.length) {
    let isBraced2 = function(c) {
      return c[0] === "{" || c[0]?.token === "{";
    }, unbrace2 = function(c) {
      return c.slice(1, -1);
    }, parseClass2 = function(c) {
      c = c.token || c;
      if (c.startsWith("'")) {
        c = '"' + c.slice(1, -1).replace(/\\*"/g, (m) => m.length % 2 == 0 ? m : "\\" + m) + '"';
      }
      return JSON.parse(c);
    };
    var isBraced = isBraced2, unbrace = unbrace2, parseClass = parseClass2;
    let className = config.react ? "className" : "class";
    attrs = attrs.filter((pair) => {
      const [, attr] = pair;
      if ((attr[0][0] === "class" || attr[0][0] === "className") && !attr[0][1]) {
        className = attr[0][0];
        classes.push(attr[1][attr[1].length - 1]);
        return false;
      }
      return true;
    });
    const strings = [], exprs = [];
    classes.forEach((c) => {
      if (isBraced2(c)) {
        exprs.push(unbrace2(c));
        exprs.push(", ");
      } else {
        strings.push(parseClass2(c));
      }
    });
    const stringPart = strings.filter(Boolean).join(" ");
    let classValue;
    if (exprs.length) {
      exprs.pop();
      if (stringPart) {
        exprs.unshift(JSON.stringify(stringPart), ", ");
      }
      if (exprs.length === 1) {
        let root = exprs[0];
        while (root.length && isWhitespaceOrEmpty(root[root.length - 1])) {
          root = root.slice(0, -1);
        }
        while (root?.length === 1) root = root[0];
        if (root?.children) root = root.children;
        if (root?.[0]?.token === "`") {
          classValue = ["{", ...exprs, "}"];
        } else {
          classValue = ["{(", ...exprs, ') || ""}'];
        }
      } else {
        classValue = ["{[", ...exprs, '].filter(Boolean).join(" ")}'];
      }
    } else {
      if (!stringPart.includes("&") && !stringPart.includes('"')) {
        classValue = `"${stringPart}"`;
      } else if (!stringPart.includes("&") && !stringPart.includes("'")) {
        classValue = `'${stringPart}'`;
      } else {
        classValue = `{${JSON.stringify(stringPart)}}`;
      }
    }
    attrs.splice(0, 0, [" ", [className, ["=", classValue]]]);
  }
  return attrs.map((pair) => {
    const [space, attr] = pair;
    if (space && attr[0] === " ") {
      pair = [space, attr.slice(1)];
    }
    return pair;
  });
});
function JSXAttributes(ctx, state2) {
  return (0, import_lib2.$EVENT)(ctx, state2, "JSXAttributes", JSXAttributes$0);
}
var JSXAttribute$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(BracedObjectLiteral), function($skip, $loc, $0, $1) {
  return convertObjectToJSXAttributes($1);
});
var JSXAttribute$1 = (0, import_lib2.$TS)((0, import_lib2.$S)(JSXAttributeName, (0, import_lib2.$C)(JSXAttributeInitializer, (0, import_lib2.$Y)(JSXAttributeSpace))), function($skip, $loc, $0, $1, $2) {
  var name = $1;
  var value = $2;
  if (name.type === "ComputedPropertyName") {
    if (value) {
      value = value[value.length - 1];
      if (value[0]?.token === "{" && value[value.length - 1]?.token === "}") {
        value = value.slice(1, -1);
      }
    } else {
      value = "true";
    }
    return ["{...{", name, ": ", value, "}}"];
  } else {
    return $0;
  }
});
var JSXAttribute$2 = (0, import_lib2.$S)(InsertInlineOpenBrace, DotDotDot, InlineJSXAttributeValue, InsertCloseBrace, (0, import_lib2.$Y)(JSXAttributeSpace));
var JSXAttribute$3 = (0, import_lib2.$TS)((0, import_lib2.$S)(AtThis, (0, import_lib2.$E)(Identifier), (0, import_lib2.$Q)(InlineJSXCallExpressionRest), (0, import_lib2.$Y)(JSXAttributeSpace)), function($skip, $loc, $0, $1, $2, $3, $4) {
  var at = $1;
  var id = $2;
  var rest = $3;
  const children = [at, ...rest.flat()];
  if (id) {
    children.splice(1, 0, {
      type: "PropertyAccess",
      children: [".", id],
      name: id
    });
  }
  const expr = processCallMemberExpression({
    type: "CallExpression",
    children
  });
  const last = lastAccessInCallExpression(expr);
  if (!last) return $skip;
  let name;
  if (last.type === "Index") {
    return [
      "{...{",
      { ...last, type: "ComputedPropertyName" },
      ": ",
      expr,
      "}}"
    ];
  } else if (last.name) {
    return [last.name, "={", expr, "}"];
  }
  return $skip;
});
var JSXAttribute$4 = (0, import_lib2.$TS)((0, import_lib2.$S)(Identifier, (0, import_lib2.$P)(InlineJSXCallExpressionRest), (0, import_lib2.$Y)(JSXAttributeSpace)), function($skip, $loc, $0, $1, $2, $3) {
  var id = $1;
  var rest = $2;
  const expr = processCallMemberExpression({
    type: "CallExpression",
    children: [id, ...rest.flat()]
  });
  if (expr.type === "ObjectExpression") {
    return convertObjectToJSXAttributes(expr);
  }
  const last = lastAccessInCallExpression(expr);
  if (!last) return $skip;
  let name;
  if (last.type === "Index") {
    return [
      "{...{",
      { ...last, type: "ComputedPropertyName" },
      ": ",
      expr,
      "}}"
    ];
  } else if (last.name) {
    return [last.name, "={", expr, "}"];
  }
  return $skip;
});
var JSXAttribute$5 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$EXPECT)($L178, 'JSXAttribute "#"'), JSXShorthandString), function($skip, $loc, $0, $1, $2) {
  return [" ", "id=", $2];
});
var JSXAttribute$6 = (0, import_lib2.$TS)((0, import_lib2.$S)(Dot, JSXShorthandString), function($skip, $loc, $0, $1, $2) {
  return {
    type: "JSXClass",
    class: $2
  };
});
var JSXAttribute$7 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$TEXT)((0, import_lib2.$EXPECT)($R83, "JSXAttribute /[!+-]/")), JSXAttributeName, (0, import_lib2.$Y)(JSXAttributeSpace)), function($skip, $loc, $0, $1, $2, $3) {
  var toggle = $1;
  var id = $2;
  const value = toggle === "+" ? "true" : "false";
  return [" ", id, "={", value, "}"];
});
var JSXAttribute$$ = [JSXAttribute$0, JSXAttribute$1, JSXAttribute$2, JSXAttribute$3, JSXAttribute$4, JSXAttribute$5, JSXAttribute$6, JSXAttribute$7];
function JSXAttribute(ctx, state2) {
  return (0, import_lib2.$EVENT_C)(ctx, state2, "JSXAttribute", JSXAttribute$$);
}
var JSXAttributeSpace$0 = (0, import_lib2.$R$0)((0, import_lib2.$EXPECT)($R84, "JSXAttributeSpace /[\\s>]|\\/>/"));
function JSXAttributeSpace(ctx, state2) {
  return (0, import_lib2.$EVENT)(ctx, state2, "JSXAttributeSpace", JSXAttributeSpace$0);
}
var JSXShorthandString$0 = (0, import_lib2.$TR)((0, import_lib2.$EXPECT)($R85, "JSXShorthandString /(?:[\\w\\-:]+|\\([^()]*\\)|\\[[^\\[\\]]*\\])+/"), function($skip, $loc, $0, $1, $2, $3, $4, $5, $6, $7, $8, $9) {
  return quoteString($0);
});
var JSXShorthandString$1 = (0, import_lib2.$TS)((0, import_lib2.$S)(TemplateLiteral), function($skip, $loc, $0, $1) {
  return ["{", $1, "}"];
});
var JSXShorthandString$2 = StringLiteral;
var JSXShorthandString$3 = (0, import_lib2.$S)(OpenBrace, PostfixedExpression, (0, import_lib2.$E)(Whitespace), CloseBrace);
var JSXShorthandString$$ = [JSXShorthandString$0, JSXShorthandString$1, JSXShorthandString$2, JSXShorthandString$3];
function JSXShorthandString(ctx, state2) {
  return (0, import_lib2.$EVENT_C)(ctx, state2, "JSXShorthandString", JSXShorthandString$$);
}
var JSXAttributeName$0 = (0, import_lib2.$S)(JSXIdentifierName, (0, import_lib2.$E)((0, import_lib2.$S)(Colon, JSXIdentifierName)));
var JSXAttributeName$1 = ComputedPropertyName;
var JSXAttributeName$$ = [JSXAttributeName$0, JSXAttributeName$1];
function JSXAttributeName(ctx, state2) {
  return (0, import_lib2.$EVENT_C)(ctx, state2, "JSXAttributeName", JSXAttributeName$$);
}
var JSXAttributeInitializer$0 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$N)(CoffeeJSXEnabled), (0, import_lib2.$E)(Whitespace), Equals, (0, import_lib2.$Y)((0, import_lib2.$S)((0, import_lib2.$Q)(NonNewlineWhitespace), EOL)), InsertInlineOpenBrace, NestedPostfixedExpressionNoTrailing, InsertCloseBrace), function($skip, $loc, $0, $1, $2, $3, $4, $5, $6, $7) {
  var ws1 = $2;
  var equals = $3;
  var open = $5;
  var expression = $6;
  var close = $7;
  return [ws1, equals, open, trimFirstSpace(expression), close];
});
var JSXAttributeInitializer$1 = (0, import_lib2.$S)((0, import_lib2.$E)(Whitespace), Equals, (0, import_lib2.$E)(Whitespace), JSXAttributeValue);
var JSXAttributeInitializer$$ = [JSXAttributeInitializer$0, JSXAttributeInitializer$1];
function JSXAttributeInitializer(ctx, state2) {
  return (0, import_lib2.$EVENT_C)(ctx, state2, "JSXAttributeInitializer", JSXAttributeInitializer$$);
}
var JSXAttributeValue$0 = (0, import_lib2.$S)(OpenBrace, PostfixedExpression, (0, import_lib2.$E)(Whitespace), CloseBrace);
var JSXAttributeValue$1 = JSXElement;
var JSXAttributeValue$2 = JSXFragment;
var JSXAttributeValue$3 = (0, import_lib2.$TS)((0, import_lib2.$S)(InsertInlineOpenBrace, InlineJSXAttributeValue, InsertCloseBrace, (0, import_lib2.$Y)(JSXAttributeSpace)), function($skip, $loc, $0, $1, $2, $3, $4) {
  var open = $1;
  var value = $2;
  var close = $3;
  if (value.type === "StringLiteral") {
    return $skip;
  }
  return [open, value, close];
});
var JSXAttributeValue$4 = (0, import_lib2.$R$0)((0, import_lib2.$EXPECT)($R86, `JSXAttributeValue /"[^"]*"|'[^']*'/`));
var JSXAttributeValue$$ = [JSXAttributeValue$0, JSXAttributeValue$1, JSXAttributeValue$2, JSXAttributeValue$3, JSXAttributeValue$4];
function JSXAttributeValue(ctx, state2) {
  return (0, import_lib2.$EVENT_C)(ctx, state2, "JSXAttributeValue", JSXAttributeValue$$);
}
var InlineJSXAttributeValue$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(InlineJSXUnaryExpression, (0, import_lib2.$Q)(InlineJSXBinaryOpRHS)), function($skip, $loc, $0, $1, $2) {
  if ($2.length) return processBinaryOpExpression($0);
  return $1;
});
function InlineJSXAttributeValue(ctx, state2) {
  return (0, import_lib2.$EVENT)(ctx, state2, "InlineJSXAttributeValue", InlineJSXAttributeValue$0);
}
var InlineJSXBinaryOpRHS$0 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$N)((0, import_lib2.$EXPECT)($R87, "InlineJSXBinaryOpRHS /[<>]/")), BinaryOp, InlineJSXUnaryExpression), function($skip, $loc, $0, $1, $2, $3) {
  var op = $2;
  var rhs = $3;
  return [[], op, [], rhs];
});
function InlineJSXBinaryOpRHS(ctx, state2) {
  return (0, import_lib2.$EVENT)(ctx, state2, "InlineJSXBinaryOpRHS", InlineJSXBinaryOpRHS$0);
}
var InlineJSXUnaryExpression$0 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$Q)(InlineJSXUnaryOp), InlineJSXUpdateExpression, (0, import_lib2.$E)(InlineJSXUnaryPostfix)), function($skip, $loc, $0, $1, $2, $3) {
  var pre = $1;
  var exp = $2;
  var post = $3;
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
var InlineJSXUpdateExpression$0 = (0, import_lib2.$S)(UpdateExpressionSymbol, UnaryExpression);
var InlineJSXUpdateExpression$1 = (0, import_lib2.$TS)((0, import_lib2.$S)(InlineJSXCallExpression, (0, import_lib2.$E)(UpdateExpressionSymbol)), function($skip, $loc, $0, $1, $2) {
  if ($2) return $0;
  return $1;
});
var InlineJSXUpdateExpression$$ = [InlineJSXUpdateExpression$0, InlineJSXUpdateExpression$1];
function InlineJSXUpdateExpression(ctx, state2) {
  return (0, import_lib2.$EVENT_C)(ctx, state2, "InlineJSXUpdateExpression", InlineJSXUpdateExpression$$);
}
var InlineJSXCallExpression$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(Super, ExplicitArguments, (0, import_lib2.$Q)(InlineJSXCallExpressionRest)), function($skip, $loc, $0, $1, $2, $3) {
  var args = $2;
  var rest = $3;
  return processCallMemberExpression({
    type: "CallExpression",
    children: [
      $1,
      args,
      ...rest.flat()
    ]
  });
});
var InlineJSXCallExpression$1 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$EXPECT)($L15, 'InlineJSXCallExpression "import"'), ExplicitArguments, (0, import_lib2.$Q)(InlineJSXCallExpressionRest)), function($skip, $loc, $0, $1, $2, $3) {
  var args = $2;
  var rest = $3;
  return processCallMemberExpression({
    type: "CallExpression",
    children: [
      $1,
      args,
      ...rest.flat()
    ]
  });
});
var InlineJSXCallExpression$2 = (0, import_lib2.$TS)((0, import_lib2.$S)(InlineJSXMemberExpression, (0, import_lib2.$Q)(InlineJSXCallExpressionRest)), function($skip, $loc, $0, $1, $2) {
  var member = $1;
  var rest = $2;
  if (rest.length) {
    rest = rest.flat();
    return processCallMemberExpression({
      type: "CallExpression",
      children: [member, ...rest]
    });
  }
  return member;
});
var InlineJSXCallExpression$$ = [InlineJSXCallExpression$0, InlineJSXCallExpression$1, InlineJSXCallExpression$2];
function InlineJSXCallExpression(ctx, state2) {
  return (0, import_lib2.$EVENT_C)(ctx, state2, "InlineJSXCallExpression", InlineJSXCallExpression$$);
}
var InlineJSXCallExpressionRest$0 = InlineJSXMemberExpressionRest;
var InlineJSXCallExpressionRest$1 = (0, import_lib2.$TV)((0, import_lib2.$C)(TemplateLiteral, StringLiteral), function($skip, $loc, $0, $1) {
  if ($1.type === "StringLiteral") {
    return "`" + $1.token.slice(1, -1).replace(/(`|\$\{)/g, "\\$1") + "`";
  }
  return $1;
});
var InlineJSXCallExpressionRest$2 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$E)(OptionalShorthand), ExplicitArguments), function($skip, $loc, $0, $1, $2) {
  var args = $2;
  if (!$1) return args;
  return [$1, args];
});
var InlineJSXCallExpressionRest$$ = [InlineJSXCallExpressionRest$0, InlineJSXCallExpressionRest$1, InlineJSXCallExpressionRest$2];
function InlineJSXCallExpressionRest(ctx, state2) {
  return (0, import_lib2.$EVENT_C)(ctx, state2, "InlineJSXCallExpressionRest", InlineJSXCallExpressionRest$$);
}
var InlineJSXMemberExpression$0 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$C)(InlineJSXPrimaryExpression, SuperProperty, MetaProperty), (0, import_lib2.$Q)(InlineJSXMemberExpressionRest)), function($skip, $loc, $0, $1, $2) {
  var rest = $2;
  if (rest.length || Array.isArray($1)) {
    return processCallMemberExpression({
      type: "MemberExpression",
      children: [$1, ...rest].flat()
    });
  }
  return $1;
});
function InlineJSXMemberExpression(ctx, state2) {
  return (0, import_lib2.$EVENT)(ctx, state2, "InlineJSXMemberExpression", InlineJSXMemberExpression$0);
}
var InlineJSXMemberExpressionRest$0 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$E)(OptionalShorthand), (0, import_lib2.$Q)(InlineComment), MemberBracketContent), function($skip, $loc, $0, $1, $2, $3) {
  var dot = $1;
  var comments = $2;
  var content = $3;
  if (!dot && !comments.length) return content;
  if (dot) {
    if (dot.type === "Optional" && content.type === "SliceExpression") {
      return [...dot.children.slice(0, -1), ...comments, content];
    }
    return [dot, ...comments, content];
  }
  return [...comments, content];
});
var InlineJSXMemberExpressionRest$1 = PropertyAccess;
var InlineJSXMemberExpressionRest$2 = PropertyGlob;
var InlineJSXMemberExpressionRest$3 = PropertyBindExplicitArguments;
var InlineJSXMemberExpressionRest$4 = NonNullAssertion;
var InlineJSXMemberExpressionRest$$ = [InlineJSXMemberExpressionRest$0, InlineJSXMemberExpressionRest$1, InlineJSXMemberExpressionRest$2, InlineJSXMemberExpressionRest$3, InlineJSXMemberExpressionRest$4];
function InlineJSXMemberExpressionRest(ctx, state2) {
  return (0, import_lib2.$EVENT_C)(ctx, state2, "InlineJSXMemberExpressionRest", InlineJSXMemberExpressionRest$$);
}
var InlineJSXPrimaryExpression$0 = NullLiteral;
var InlineJSXPrimaryExpression$1 = BooleanLiteral;
var InlineJSXPrimaryExpression$2 = NumericLiteral;
var InlineJSXPrimaryExpression$3 = TemplateLiteral;
var InlineJSXPrimaryExpression$4 = ThisLiteral;
var InlineJSXPrimaryExpression$5 = ArrayLiteral;
var InlineJSXPrimaryExpression$6 = BracedObjectLiteral;
var InlineJSXPrimaryExpression$7 = IdentifierReference;
var InlineJSXPrimaryExpression$8 = RegularExpressionLiteral;
var InlineJSXPrimaryExpression$9 = OptimizedParenthesizedExpression;
var InlineJSXPrimaryExpression$$ = [InlineJSXPrimaryExpression$0, InlineJSXPrimaryExpression$1, InlineJSXPrimaryExpression$2, InlineJSXPrimaryExpression$3, InlineJSXPrimaryExpression$4, InlineJSXPrimaryExpression$5, InlineJSXPrimaryExpression$6, InlineJSXPrimaryExpression$7, InlineJSXPrimaryExpression$8, InlineJSXPrimaryExpression$9];
function InlineJSXPrimaryExpression(ctx, state2) {
  return (0, import_lib2.$EVENT_C)(ctx, state2, "InlineJSXPrimaryExpression", InlineJSXPrimaryExpression$$);
}
var JSXMixedChildren$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(JSXSameLineChildren, JSXNestedChildren), function($skip, $loc, $0, $1, $2) {
  var c1 = $1;
  var c2 = $2;
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
});
var JSXSameLineChildren$1 = (0, import_lib2.$T)((0, import_lib2.$S)((0, import_lib2.$N)(JSXCodeSameLineEnabled), (0, import_lib2.$Q)(JSXChildForcedNoCode)), function(value) {
  var children = value[1];
  return children;
});
var JSXSameLineChildren$$ = [JSXSameLineChildren$0, JSXSameLineChildren$1];
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
  if ($2.length) {
    return {
      children: $2,
      jsxChildren: [].concat(...$2.map((nestedChildren) => nestedChildren[1]))
    };
  }
  return $skip;
});
var JSXNestedChildren$1 = (0, import_lib2.$TV)((0, import_lib2.$Y)((0, import_lib2.$C)(JSXEOS, (0, import_lib2.$EXPECT)($L37, 'JSXNestedChildren "}"'), JSXClosingElement, JSXClosingFragment)), function($skip, $loc, $0, $1) {
  return { children: [], jsxChildren: [] };
});
var JSXNestedChildren$$ = [JSXNestedChildren$0, JSXNestedChildren$1];
function JSXNestedChildren(ctx, state2) {
  return (0, import_lib2.$EVENT_C)(ctx, state2, "JSXNestedChildren", JSXNestedChildren$$);
}
var JSXEOS$0 = (0, import_lib2.$P)((0, import_lib2.$S)((0, import_lib2.$E)(NonNewlineWhitespace), EOL));
function JSXEOS(ctx, state2) {
  return (0, import_lib2.$EVENT)(ctx, state2, "JSXEOS", JSXEOS$0);
}
var JSXNested$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(JSXEOS, Indent), function($skip, $loc, $0, $1, $2) {
  var eos = $1;
  var indent = $2;
  const { level } = indent;
  const currentIndent = state.currentIndent;
  if (level !== currentIndent.level) return $skip;
  return $0;
});
function JSXNested(ctx, state2) {
  return (0, import_lib2.$EVENT)(ctx, state2, "JSXNested", JSXNested$0);
}
var JSXChild$0 = JSXChildGeneral;
var JSXChild$1 = (0, import_lib2.$T)((0, import_lib2.$S)(JSXCodeNestedEnabled, JSXCodeChild), function(value) {
  return value[1];
});
var JSXChild$2 = (0, import_lib2.$T)((0, import_lib2.$S)((0, import_lib2.$N)(JSXCodeNestedEnabled), JSXText), function(value) {
  return value[1];
});
var JSXChild$$ = [JSXChild$0, JSXChild$1, JSXChild$2];
function JSXChild(ctx, state2) {
  return (0, import_lib2.$EVENT_C)(ctx, state2, "JSXChild", JSXChild$$);
}
var JSXChildForcedCode$0 = JSXChildGeneral;
var JSXChildForcedCode$1 = JSXCodeChild;
var JSXChildForcedCode$$ = [JSXChildForcedCode$0, JSXChildForcedCode$1];
function JSXChildForcedCode(ctx, state2) {
  return (0, import_lib2.$EVENT_C)(ctx, state2, "JSXChildForcedCode", JSXChildForcedCode$$);
}
var JSXChildForcedNoCode$0 = JSXChildGeneral;
var JSXChildForcedNoCode$1 = JSXText;
var JSXChildForcedNoCode$$ = [JSXChildForcedNoCode$0, JSXChildForcedNoCode$1];
function JSXChildForcedNoCode(ctx, state2) {
  return (0, import_lib2.$EVENT_C)(ctx, state2, "JSXChildForcedNoCode", JSXChildForcedNoCode$$);
}
var JSXChildGeneral$0 = JSXElement;
var JSXChildGeneral$1 = JSXFragment;
var JSXChildGeneral$2 = JSXComment;
var JSXChildGeneral$3 = (0, import_lib2.$TS)((0, import_lib2.$S)(OpenBrace, IndentedJSXChildExpression, __, CloseBrace), function($skip, $loc, $0, $1, $2, $3, $4) {
  var expression = $2;
  return {
    type: "JSXChildExpression",
    children: $0,
    expression
  };
});
var JSXChildGeneral$4 = (0, import_lib2.$TS)((0, import_lib2.$S)(OpenBrace, (0, import_lib2.$E)(JSXChildExpression), __, CloseBrace), function($skip, $loc, $0, $1, $2, $3, $4) {
  var expression = $2;
  return {
    type: "JSXChildExpression",
    children: $0,
    expression
  };
});
var JSXChildGeneral$5 = (0, import_lib2.$TS)((0, import_lib2.$S)(InsertInlineOpenBrace, ArrowFunction, InsertCloseBrace), function($skip, $loc, $0, $1, $2, $3) {
  var expression = $2;
  return {
    type: "JSXChildExpression",
    children: $0,
    expression
  };
});
var JSXChildGeneral$6 = JSXAngleChild;
var JSXChildGeneral$$ = [JSXChildGeneral$0, JSXChildGeneral$1, JSXChildGeneral$2, JSXChildGeneral$3, JSXChildGeneral$4, JSXChildGeneral$5, JSXChildGeneral$6];
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
  names.sort();
  names = names.filter((name, i) => i === 0 || name !== names[i - 1]);
  d = {
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
  };
  if (d.thisAssignments?.length) {
    d.children.push(...d.splices, ",", ...d.thisAssignments.map(
      (a, i) => a[a.length - 1] === ";" ? [
        ...a.slice(0, -1),
        i === d.thisAssignments.length - 1 ? "" : ","
      ] : a
    ));
  } else if (d.splices?.length) {
    d.children.push(...d.splices);
  }
  d.children.push(",void 0");
  return d;
});
var JSXChildExpression$1 = (0, import_lib2.$S)((0, import_lib2.$E)(Whitespace), (0, import_lib2.$E)((0, import_lib2.$S)(DotDotDot, (0, import_lib2.$E)(Whitespace))), PostfixedExpression);
var JSXChildExpression$$ = [JSXChildExpression$0, JSXChildExpression$1];
function JSXChildExpression(ctx, state2) {
  return (0, import_lib2.$EVENT_C)(ctx, state2, "JSXChildExpression", JSXChildExpression$$);
}
var IndentedJSXChildExpression$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(PushIndent, (0, import_lib2.$E)(NestedJSXChildExpression), PopIndent), function($skip, $loc, $0, $1, $2, $3) {
  if (!$2) return $skip;
  return $2;
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
  var open = $1;
  var expression = $2;
  var close = $3;
  if (!expression) return $skip;
  return [open, expression, close];
});
function JSXCodeChild(ctx, state2) {
  return (0, import_lib2.$EVENT)(ctx, state2, "JSXCodeChild", JSXCodeChild$0);
}
var JSXCodeChildExpression$0 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$N)(JSXEOS), ForbidNewlineBinaryOp, (0, import_lib2.$E)(JSXChildExpression), RestoreNewlineBinaryOp), function($skip, $loc, $0, $1, $2, $3, $4) {
  var expression = $3;
  if (!expression) return $skip;
  return expression;
});
var JSXCodeChildExpression$1 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$Y)(JSXEOS), ImplicitNestedBlock), function($skip, $loc, $0, $1, $2) {
  var block = $2;
  if (!block) return $skip;
  const statement = {
    type: "DoStatement",
    children: [block],
    block
  };
  return {
    type: "StatementExpression",
    statement,
    children: [statement]
  };
});
var JSXCodeChildExpression$$ = [JSXCodeChildExpression$0, JSXCodeChildExpression$1];
function JSXCodeChildExpression(ctx, state2) {
  return (0, import_lib2.$EVENT_C)(ctx, state2, "JSXCodeChildExpression", JSXCodeChildExpression$$);
}
var UsingDeclaration$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(Using, (0, import_lib2.$E)(_), UsingBinding, (0, import_lib2.$Q)((0, import_lib2.$S)(__, Comma, __, UsingBinding)), UsingJSModeError), function($skip, $loc, $0, $1, $2, $3, $4, $5) {
  var decl = $1;
  var binding = $3;
  var tail = $4;
  const bindings = [binding].concat(tail.map(([, , , b]) => b));
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
  var pattern = $1;
  var typeSuffix = $2;
  var initializer = $3;
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
    js: true,
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
    ts: true,
    children: $0,
    names: d.names ?? []
  };
});
var TypeDeclaration$1 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$E)((0, import_lib2.$S)(Export, (0, import_lib2.$E)(_))), (0, import_lib2.$E)((0, import_lib2.$S)(Declare, (0, import_lib2.$E)(_))), TypeDeclarationRest), function($skip, $loc, $0, $1, $2, $3) {
  var export_ = $1;
  var declare = $2;
  var t = $3;
  return {
    ...t,
    ts: true,
    export: export_,
    declare,
    children: [export_, declare, ...t.children]
  };
});
var TypeDeclaration$$ = [TypeDeclaration$0, TypeDeclaration$1];
function TypeDeclaration(ctx, state2) {
  return (0, import_lib2.$EVENT_C)(ctx, state2, "TypeDeclaration", TypeDeclaration$$);
}
var TypeDeclarationRest$0 = TypeAliasDeclaration;
var TypeDeclarationRest$1 = InterfaceDeclaration;
var TypeDeclarationRest$2 = NamespaceDeclaration;
var TypeDeclarationRest$3 = FunctionSignature;
var TypeDeclarationRest$$ = [TypeDeclarationRest$0, TypeDeclarationRest$1, TypeDeclarationRest$2, TypeDeclarationRest$3];
function TypeDeclarationRest(ctx, state2) {
  return (0, import_lib2.$EVENT_C)(ctx, state2, "TypeDeclarationRest", TypeDeclarationRest$$);
}
var TypeAliasDeclaration$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(TypeKeyword, (0, import_lib2.$E)(_), IdentifierName, (0, import_lib2.$E)(TypeParameters), OptionalEquals, (0, import_lib2.$C)(MaybeNestedType, (0, import_lib2.$S)(__, Type))), function($skip, $loc, $0, $1, $2, $3, $4, $5, $6) {
  var id = $3;
  return {
    type: "TypeDeclaration",
    id,
    children: $0,
    ts: true
  };
});
var TypeAliasDeclaration$1 = (0, import_lib2.$TS)((0, import_lib2.$S)(InsertType, IdentifierName, (0, import_lib2.$E)(TypeParameters), __, TypeAssignment, (0, import_lib2.$C)(MaybeNestedType, (0, import_lib2.$S)(__, Type))), function($skip, $loc, $0, $1, $2, $3, $4, $5, $6) {
  var id = $2;
  return {
    type: "TypeDeclaration",
    id,
    children: $0,
    ts: true
  };
});
var TypeAliasDeclaration$$ = [TypeAliasDeclaration$0, TypeAliasDeclaration$1];
function TypeAliasDeclaration(ctx, state2) {
  return (0, import_lib2.$EVENT_C)(ctx, state2, "TypeAliasDeclaration", TypeAliasDeclaration$$);
}
var InterfaceDeclaration$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(Interface, (0, import_lib2.$E)(_), IdentifierName, (0, import_lib2.$E)(TypeParameters), (0, import_lib2.$E)(InterfaceExtendsClause), InterfaceOrEmptyBlock), function($skip, $loc, $0, $1, $2, $3, $4, $5, $6) {
  var id = $3;
  return {
    type: "InterfaceDeclaration",
    id,
    children: $0,
    ts: true
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
    ts: true
  };
});
function NamespaceDeclaration(ctx, state2) {
  return (0, import_lib2.$EVENT)(ctx, state2, "NamespaceDeclaration", NamespaceDeclaration$0);
}
var OptionalEquals$0 = (0, import_lib2.$S)(__, Equals);
var OptionalEquals$1 = (0, import_lib2.$T)((0, import_lib2.$S)((0, import_lib2.$Y)(IndentedFurther), InsertSpaceEquals), function(value) {
  return value[1];
});
var OptionalEquals$$ = [OptionalEquals$0, OptionalEquals$1];
function OptionalEquals(ctx, state2) {
  return (0, import_lib2.$EVENT_C)(ctx, state2, "OptionalEquals", OptionalEquals$$);
}
var TypeLexicalDeclaration$0 = TypeLetOrConstDeclaration;
var TypeLexicalDeclaration$1 = (0, import_lib2.$S)(__, EnumDeclaration);
var TypeLexicalDeclaration$2 = ClassSignature;
var TypeLexicalDeclaration$3 = (0, import_lib2.$S)(Namespace, (0, import_lib2.$E)(_), IdentifierName, DeclareBlock);
var TypeLexicalDeclaration$4 = (0, import_lib2.$S)(Module, _, StringLiteral, (0, import_lib2.$E)(DeclareBlock));
var TypeLexicalDeclaration$5 = (0, import_lib2.$S)(Global, (0, import_lib2.$E)(DeclareBlock));
var TypeLexicalDeclaration$$ = [TypeLexicalDeclaration$0, TypeLexicalDeclaration$1, TypeLexicalDeclaration$2, TypeLexicalDeclaration$3, TypeLexicalDeclaration$4, TypeLexicalDeclaration$5];
function TypeLexicalDeclaration(ctx, state2) {
  return (0, import_lib2.$EVENT_C)(ctx, state2, "TypeLexicalDeclaration", TypeLexicalDeclaration$$);
}
var TypeLetOrConstDeclaration$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(__, LetOrConstOrVar, TypeDeclarationBinding, (0, import_lib2.$Q)((0, import_lib2.$S)(CommaDelimiter, __, TypeDeclarationBinding))), function($skip, $loc, $0, $1, $2, $3, $4) {
  var first = $3;
  var rest = $4;
  const names = first.names.concat(...rest.map((b) => b[2].names));
  return {
    type: "TypeLexicalDeclaration",
    children: $0,
    ts: true,
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
var InterfaceOrEmptyBlock$0 = InterfaceBlock;
var InterfaceOrEmptyBlock$1 = EmptyBlock;
var InterfaceOrEmptyBlock$$ = [InterfaceOrEmptyBlock$0, InterfaceOrEmptyBlock$1];
function InterfaceOrEmptyBlock(ctx, state2) {
  return (0, import_lib2.$EVENT_C)(ctx, state2, "InterfaceOrEmptyBlock", InterfaceOrEmptyBlock$$);
}
var InterfaceBlock$0 = (0, import_lib2.$S)(__, OpenBrace, NestedInterfaceProperties, __, CloseBrace);
var InterfaceBlock$1 = (0, import_lib2.$S)(__, OpenBrace, (0, import_lib2.$Q)((0, import_lib2.$S)(__, InterfaceProperty)), __, CloseBrace);
var InterfaceBlock$2 = NestedInterfaceBlock;
var InterfaceBlock$$ = [InterfaceBlock$0, InterfaceBlock$1, InterfaceBlock$2];
function InterfaceBlock(ctx, state2) {
  return (0, import_lib2.$EVENT_C)(ctx, state2, "InterfaceBlock", InterfaceBlock$$);
}
var NestedInterfaceBlock$0 = (0, import_lib2.$S)(InsertOpenBrace, NestedInterfaceProperties, InsertNewline, InsertIndent, InsertCloseBrace);
function NestedInterfaceBlock(ctx, state2) {
  return (0, import_lib2.$EVENT)(ctx, state2, "NestedInterfaceBlock", NestedInterfaceBlock$0);
}
var NestedInterfaceProperties$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(PushIndent, (0, import_lib2.$Q)(NestedInterfaceProperty), PopIndent), function($skip, $loc, $0, $1, $2, $3) {
  var props = $2;
  if (props.length) return props;
  return $skip;
});
function NestedInterfaceProperties(ctx, state2) {
  return (0, import_lib2.$EVENT)(ctx, state2, "NestedInterfaceProperties", NestedInterfaceProperties$0);
}
var NestedInterfaceProperty$0 = (0, import_lib2.$S)(Nested, InterfaceProperty);
function NestedInterfaceProperty(ctx, state2) {
  return (0, import_lib2.$EVENT)(ctx, state2, "NestedInterfaceProperty", NestedInterfaceProperty$0);
}
var InterfaceProperty$0 = BasicInterfaceProperty;
var InterfaceProperty$1 = (0, import_lib2.$S)(NonEmptyParameters, TypeSuffix, InterfacePropertyDelimiter);
var InterfaceProperty$2 = (0, import_lib2.$S)(MethodSignature, InterfacePropertyDelimiter);
var InterfaceProperty$$ = [InterfaceProperty$0, InterfaceProperty$1, InterfaceProperty$2];
function InterfaceProperty(ctx, state2) {
  return (0, import_lib2.$EVENT_C)(ctx, state2, "InterfaceProperty", InterfaceProperty$$);
}
var BasicInterfaceProperty$0 = (0, import_lib2.$S)((0, import_lib2.$C)(TypeIndexSignature, TypeProperty), (0, import_lib2.$E)(_), TypeSuffix, InterfacePropertyDelimiter);
function BasicInterfaceProperty(ctx, state2) {
  return (0, import_lib2.$EVENT)(ctx, state2, "BasicInterfaceProperty", BasicInterfaceProperty$0);
}
var InterfacePropertyDelimiter$0 = (0, import_lib2.$S)((0, import_lib2.$E)(_), (0, import_lib2.$C)(Semicolon, Comma));
var InterfacePropertyDelimiter$1 = (0, import_lib2.$Y)((0, import_lib2.$S)(__, CloseBrace));
var InterfacePropertyDelimiter$2 = (0, import_lib2.$Y)(EOS);
var InterfacePropertyDelimiter$$ = [InterfacePropertyDelimiter$0, InterfacePropertyDelimiter$1, InterfacePropertyDelimiter$2];
function InterfacePropertyDelimiter(ctx, state2) {
  return (0, import_lib2.$EVENT_C)(ctx, state2, "InterfacePropertyDelimiter", InterfacePropertyDelimiter$$);
}
var ModuleOrEmptyBlock$0 = (0, import_lib2.$S)(__, OpenBrace, NestedModuleItems, __, CloseBrace);
var ModuleOrEmptyBlock$1 = (0, import_lib2.$S)(InsertOpenBrace, NestedModuleItems, InsertNewline, InsertIndent, InsertCloseBrace);
var ModuleOrEmptyBlock$2 = EmptyBlock;
var ModuleOrEmptyBlock$$ = [ModuleOrEmptyBlock$0, ModuleOrEmptyBlock$1, ModuleOrEmptyBlock$2];
function ModuleOrEmptyBlock(ctx, state2) {
  return (0, import_lib2.$EVENT_C)(ctx, state2, "ModuleOrEmptyBlock", ModuleOrEmptyBlock$$);
}
var NestedModuleItems$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(PushIndent, (0, import_lib2.$Q)(NestedModuleItem), PopIndent), function($skip, $loc, $0, $1, $2, $3) {
  var items = $2;
  if (items.length) return items;
  return $skip;
});
function NestedModuleItems(ctx, state2) {
  return (0, import_lib2.$EVENT)(ctx, state2, "NestedModuleItems", NestedModuleItems$0);
}
var NestedModuleItem$0 = (0, import_lib2.$S)(Nested, ModuleItem, StatementDelimiter);
function NestedModuleItem(ctx, state2) {
  return (0, import_lib2.$EVENT)(ctx, state2, "NestedModuleItem", NestedModuleItem$0);
}
var DeclareBlock$0 = (0, import_lib2.$S)(__, OpenBrace, NestedDeclareElements, __, CloseBrace);
var DeclareBlock$1 = (0, import_lib2.$S)(__, OpenBrace, (0, import_lib2.$Q)((0, import_lib2.$S)(__, DeclareElement, InterfacePropertyDelimiter)), __, CloseBrace);
var DeclareBlock$2 = (0, import_lib2.$S)(InsertOpenBrace, NestedDeclareElements, InsertNewline, InsertIndent, InsertCloseBrace);
var DeclareBlock$$ = [DeclareBlock$0, DeclareBlock$1, DeclareBlock$2];
function DeclareBlock(ctx, state2) {
  return (0, import_lib2.$EVENT_C)(ctx, state2, "DeclareBlock", DeclareBlock$$);
}
var NestedDeclareElements$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(PushIndent, (0, import_lib2.$Q)(NestedDeclareElement), PopIndent), function($skip, $loc, $0, $1, $2, $3) {
  var decs = $2;
  if (decs.length) return decs;
  return $skip;
});
function NestedDeclareElements(ctx, state2) {
  return (0, import_lib2.$EVENT)(ctx, state2, "NestedDeclareElements", NestedDeclareElements$0);
}
var NestedDeclareElement$0 = (0, import_lib2.$S)(Nested, DeclareElement, InterfacePropertyDelimiter);
function NestedDeclareElement(ctx, state2) {
  return (0, import_lib2.$EVENT)(ctx, state2, "NestedDeclareElement", NestedDeclareElement$0);
}
var DeclareElement$0 = (0, import_lib2.$S)((0, import_lib2.$E)(Decorators), Export, __, Default, __, (0, import_lib2.$C)(Identifier, ClassSignature, InterfaceDeclaration));
var DeclareElement$1 = (0, import_lib2.$T)((0, import_lib2.$S)((0, import_lib2.$E)(Decorators), (0, import_lib2.$E)((0, import_lib2.$S)(Export, (0, import_lib2.$E)(_))), TypeLexicalDeclaration), function(value) {
  return { "ts": true, "children": value };
});
var DeclareElement$2 = (0, import_lib2.$T)((0, import_lib2.$S)((0, import_lib2.$E)((0, import_lib2.$S)(Export, (0, import_lib2.$E)(_))), TypeDeclarationRest), function(value) {
  return { "ts": true, "children": value };
});
var DeclareElement$$ = [DeclareElement$0, DeclareElement$1, DeclareElement$2];
function DeclareElement(ctx, state2) {
  return (0, import_lib2.$EVENT_C)(ctx, state2, "DeclareElement", DeclareElement$$);
}
var EnumDeclaration$0 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$E)((0, import_lib2.$S)(Const, _)), Enum, (0, import_lib2.$E)(_), IdentifierName, EnumBlock), function($skip, $loc, $0, $1, $2, $3, $4, $5) {
  var isConst = $1;
  var id = $4;
  var block = $5;
  const ts2 = {
    ts: true,
    children: $0
  };
  const names = new Set(block.properties.map((p) => p.name.name));
  return {
    type: "EnumDeclaration",
    id,
    children: [ts2, {
      js: true,
      children: [
        ["let ", id, " = {};\n"],
        ...block.properties.map((property, i) => {
          let init, isString;
          if (property.initializer) {
            init = replaceNodes(
              deepCopy(property.initializer),
              (n) => n.type === "Identifier" && names.has(n.name),
              (n) => [id, '["', n.name, '"]']
            );
            const value = init[init.length - 1];
            isString = value.type === "TemplateLiteral" || value.type === "Literal" && value.subtype === "StringLiteral";
          } else {
            init = i === 0 ? " = 0" : [" = ", id, '["', block.properties[i - 1].name, '"] + 1'];
          }
          if (isString) {
            return [
              id,
              '["',
              property.name,
              '"]',
              init,
              ";\n"
            ];
          } else {
            return [
              id,
              "[",
              id,
              '["',
              property.name,
              '"]',
              init,
              '] = "',
              property.name,
              '";\n'
            ];
          }
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
});
var EnumBlock$1 = (0, import_lib2.$TS)((0, import_lib2.$S)(__, OpenBrace, (0, import_lib2.$Q)((0, import_lib2.$S)(__, EnumProperty)), __, CloseBrace), function($skip, $loc, $0, $1, $2, $3, $4, $5) {
  var props = $3;
  return {
    properties: props.map((p) => p[1]),
    children: $0
  };
});
var EnumBlock$2 = (0, import_lib2.$TS)((0, import_lib2.$S)(InsertOpenBrace, NestedEnumProperties, InsertNewline, InsertIndent, InsertCloseBrace), function($skip, $loc, $0, $1, $2, $3, $4, $5) {
  var props = $2;
  return {
    properties: props.properties,
    children: $0
  };
});
var EnumBlock$$ = [EnumBlock$0, EnumBlock$1, EnumBlock$2];
function EnumBlock(ctx, state2) {
  return (0, import_lib2.$EVENT_C)(ctx, state2, "EnumBlock", EnumBlock$$);
}
var NestedEnumProperties$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(PushIndent, (0, import_lib2.$Q)(NestedEnumPropertyLine), PopIndent), function($skip, $loc, $0, $1, $2, $3) {
  var props = $2;
  if (!props.length) return $skip;
  return {
    properties: props.flat().map((p) => p.property),
    children: $0
  };
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
  var name = $1;
  var initializer = $2;
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
var TypeIndex$0 = (0, import_lib2.$S)(__, Identifier, TypeSuffix);
var TypeIndex$1 = (0, import_lib2.$S)(__, PropertyName, __, In, Type, (0, import_lib2.$E)((0, import_lib2.$S)(__, As, Type)));
var TypeIndex$$ = [TypeIndex$0, TypeIndex$1];
function TypeIndex(ctx, state2) {
  return (0, import_lib2.$EVENT_C)(ctx, state2, "TypeIndex", TypeIndex$$);
}
var TypeSuffix$0 = (0, import_lib2.$T)((0, import_lib2.$S)((0, import_lib2.$E)(_), (0, import_lib2.$E)(QuestionMark), (0, import_lib2.$E)(_), Colon, MaybeNestedType), function(value) {
  var optional = value[1];
  var colon = value[3];
  var t = value[4];
  return { "type": "TypeSuffix", "ts": true, "optional": optional, "t": t, "colon": colon, "children": value };
});
var TypeSuffix$1 = (0, import_lib2.$T)((0, import_lib2.$S)((0, import_lib2.$E)(_), QuestionMark, (0, import_lib2.$E)(_)), function(value) {
  var optional = value[1];
  return { "type": "TypeSuffix", "ts": true, "optional": optional, "colon": void 0, "children": value };
});
var TypeSuffix$2 = (0, import_lib2.$TS)((0, import_lib2.$S)(NonNullAssertion, (0, import_lib2.$E)(_), (0, import_lib2.$E)((0, import_lib2.$S)(Colon, MaybeNestedType))), function($skip, $loc, $0, $1, $2, $3) {
  var nonnull = $1;
  var ct = $3;
  const [colon, t] = ct ?? [];
  return {
    type: "TypeSuffix",
    ts: true,
    nonnull,
    t,
    colon,
    children: [$1, $2, colon, t]
  };
});
var TypeSuffix$$ = [TypeSuffix$0, TypeSuffix$1, TypeSuffix$2];
function TypeSuffix(ctx, state2) {
  return (0, import_lib2.$EVENT_C)(ctx, state2, "TypeSuffix", TypeSuffix$$);
}
var MaybeNestedType$0 = NestedTypeBulletedTuple;
var MaybeNestedType$1 = NestedInterfaceBlock;
var MaybeNestedType$2 = NestedTypeBinaryChain;
var MaybeNestedType$3 = (0, import_lib2.$TS)((0, import_lib2.$S)(PushIndent, (0, import_lib2.$E)((0, import_lib2.$S)(Nested, Type)), PopIndent), function($skip, $loc, $0, $1, $2, $3) {
  if (!$2) return $skip;
  return $2;
});
var MaybeNestedType$4 = Type;
var MaybeNestedType$$ = [MaybeNestedType$0, MaybeNestedType$1, MaybeNestedType$2, MaybeNestedType$3, MaybeNestedType$4];
function MaybeNestedType(ctx, state2) {
  return (0, import_lib2.$EVENT_C)(ctx, state2, "MaybeNestedType", MaybeNestedType$$);
}
var MaybeNestedTypePrimary$0 = NestedTypeBulletedTuple;
var MaybeNestedTypePrimary$1 = NestedInterfaceBlock;
var MaybeNestedTypePrimary$2 = NestedTypeBinaryChain;
var MaybeNestedTypePrimary$3 = (0, import_lib2.$TS)((0, import_lib2.$S)(PushIndent, (0, import_lib2.$E)((0, import_lib2.$S)(Nested, Type)), PopIndent), function($skip, $loc, $0, $1, $2, $3) {
  if (!$2) return $skip;
  return $2;
});
var MaybeNestedTypePrimary$4 = TypePrimary;
var MaybeNestedTypePrimary$$ = [MaybeNestedTypePrimary$0, MaybeNestedTypePrimary$1, MaybeNestedTypePrimary$2, MaybeNestedTypePrimary$3, MaybeNestedTypePrimary$4];
function MaybeNestedTypePrimary(ctx, state2) {
  return (0, import_lib2.$EVENT_C)(ctx, state2, "MaybeNestedTypePrimary", MaybeNestedTypePrimary$$);
}
var MaybeNestedTypeUnary$0 = NestedTypeBulletedTuple;
var MaybeNestedTypeUnary$1 = NestedInterfaceBlock;
var MaybeNestedTypeUnary$2 = NestedTypeBinaryChain;
var MaybeNestedTypeUnary$3 = (0, import_lib2.$TS)((0, import_lib2.$S)(PushIndent, (0, import_lib2.$E)((0, import_lib2.$S)(Nested, Type)), PopIndent), function($skip, $loc, $0, $1, $2, $3) {
  if (!$2) return $skip;
  return $2;
});
var MaybeNestedTypeUnary$4 = (0, import_lib2.$S)(NotDedented, TypeUnary);
var MaybeNestedTypeUnary$$ = [MaybeNestedTypeUnary$0, MaybeNestedTypeUnary$1, MaybeNestedTypeUnary$2, MaybeNestedTypeUnary$3, MaybeNestedTypeUnary$4];
function MaybeNestedTypeUnary(ctx, state2) {
  return (0, import_lib2.$EVENT_C)(ctx, state2, "MaybeNestedTypeUnary", MaybeNestedTypeUnary$$);
}
var ReturnTypeSuffix$0 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$E)(_), (0, import_lib2.$E)(QuestionMark), (0, import_lib2.$E)(_), Colon, ReturnType), function($skip, $loc, $0, $1, $2, $3, $4, $5) {
  var optional = $2;
  var t = $5;
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
  var asserts = $1;
  var t = $3;
  if (!t) return $skip;
  if (asserts) {
    t = {
      type: "TypeAsserts",
      t,
      children: [asserts[0], asserts[1], t],
      ts: true
    };
  }
  return {
    type: "ReturnTypeAnnotation",
    children: [t],
    t,
    ts: true
  };
});
function ReturnType(ctx, state2) {
  return (0, import_lib2.$EVENT)(ctx, state2, "ReturnType", ReturnType$0);
}
var TypePredicate$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(MaybeNestedType, (0, import_lib2.$E)((0, import_lib2.$S)(__, Is, Type))), function($skip, $loc, $0, $1, $2) {
  var lhs = $1;
  var rhs = $2;
  if (!rhs) return lhs;
  return {
    type: "TypePredicate",
    lhs,
    rhs: rhs[3],
    children: [lhs, ...rhs]
  };
});
function TypePredicate(ctx, state2) {
  return (0, import_lib2.$EVENT)(ctx, state2, "TypePredicate", TypePredicate$0);
}
var Type$0 = TypeWithPostfix;
function Type(ctx, state2) {
  return (0, import_lib2.$EVENT)(ctx, state2, "Type", Type$0);
}
var TypeBinary$0 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$E)((0, import_lib2.$S)(NotDedented, TypeBinaryOp, __)), TypeUnary, (0, import_lib2.$Q)((0, import_lib2.$S)(NotDedented, TypeBinaryOp, MaybeNestedTypeUnary))), function($skip, $loc, $0, $1, $2, $3) {
  var optionalPrefix = $1;
  var t = $2;
  var ops = $3;
  if (!ops.length && !optionalPrefix) return t;
  if (!ops.length) return [optionalPrefix, t];
  if (!optionalPrefix) return [t, ...ops];
  return [optionalPrefix, t, ops];
});
function TypeBinary(ctx, state2) {
  return (0, import_lib2.$EVENT)(ctx, state2, "TypeBinary", TypeBinary$0);
}
var NestedTypeBinaryChain$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(PushIndent, (0, import_lib2.$Q)(NestedTypeBinary), PopIndent), function($skip, $loc, $0, $1, $2, $3) {
  if (!$2.length) return $skip;
  return $2;
});
function NestedTypeBinaryChain(ctx, state2) {
  return (0, import_lib2.$EVENT)(ctx, state2, "NestedTypeBinaryChain", NestedTypeBinaryChain$0);
}
var NestedTypeBinary$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(Nested, TypeBinaryOp, PushExtraIndent1, (0, import_lib2.$E)(TypeUnary), PopIndent), function($skip, $loc, $0, $1, $2, $3, $4, $5) {
  var indent = $1;
  var op = $2;
  var t = $4;
  if (!t) return $skip;
  return [indent, op, t];
});
function NestedTypeBinary(ctx, state2) {
  return (0, import_lib2.$EVENT)(ctx, state2, "NestedTypeBinary", NestedTypeBinary$0);
}
var TypeUnary$0 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$Q)((0, import_lib2.$S)(__, TypeUnaryOp)), TypePrimary, (0, import_lib2.$Q)(TypeUnarySuffix)), function($skip, $loc, $0, $1, $2, $3) {
  var prefix = $1;
  var t = $2;
  var suffix = $3;
  if (!prefix.length && !suffix.length) return t;
  return {
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
var TypeUnarySuffix$0 = TypeIndexedAccess;
var TypeUnarySuffix$1 = QuestionMark;
var TypeUnarySuffix$2 = NonNullAssertion;
var TypeUnarySuffix$$ = [TypeUnarySuffix$0, TypeUnarySuffix$1, TypeUnarySuffix$2];
function TypeUnarySuffix(ctx, state2) {
  return (0, import_lib2.$EVENT_C)(ctx, state2, "TypeUnarySuffix", TypeUnarySuffix$$);
}
var TypeUnaryOp$0 = (0, import_lib2.$S)((0, import_lib2.$EXPECT)($L243, 'TypeUnaryOp "keyof"'), NonIdContinue);
var TypeUnaryOp$1 = (0, import_lib2.$S)((0, import_lib2.$EXPECT)($L204, 'TypeUnaryOp "readonly"'), NonIdContinue);
var TypeUnaryOp$$ = [TypeUnaryOp$0, TypeUnaryOp$1];
function TypeUnaryOp(ctx, state2) {
  return (0, import_lib2.$EVENT_C)(ctx, state2, "TypeUnaryOp", TypeUnaryOp$$);
}
var TypeIndexedAccess$0 = (0, import_lib2.$S)(OpenBracket, (0, import_lib2.$E)(Type), __, CloseBracket);
var TypeIndexedAccess$1 = (0, import_lib2.$TS)((0, import_lib2.$S)(Dot, (0, import_lib2.$C)(TemplateLiteral, StringLiteral, IntegerLiteral)), function($skip, $loc, $0, $1, $2) {
  var dot = $1;
  var literal = $2;
  const open = { ...dot, token: "[" };
  return [
    open,
    literal,
    "]"
  ];
});
var TypeIndexedAccess$2 = (0, import_lib2.$TS)((0, import_lib2.$S)(CoffeePrototypeEnabled, DoubleColon, (0, import_lib2.$E)((0, import_lib2.$C)(IdentifierName, LengthShorthand))), function($skip, $loc, $0, $1, $2, $3) {
  var p = $2;
  var id = $3;
  const open = { ...p, token: '["' };
  return [
    open,
    id,
    '"]'
  ];
});
var TypeIndexedAccess$$ = [TypeIndexedAccess$0, TypeIndexedAccess$1, TypeIndexedAccess$2];
function TypeIndexedAccess(ctx, state2) {
  return (0, import_lib2.$EVENT_C)(ctx, state2, "TypeIndexedAccess", TypeIndexedAccess$$);
}
var UnknownAlias$0 = (0, import_lib2.$TV)((0, import_lib2.$EXPECT)($L244, 'UnknownAlias "???"'), function($skip, $loc, $0, $1) {
  return { $loc, token: "unknown" };
});
function UnknownAlias(ctx, state2) {
  return (0, import_lib2.$EVENT)(ctx, state2, "UnknownAlias", UnknownAlias$0);
}
var TypePrimary$0 = (0, import_lib2.$S)((0, import_lib2.$E)(_), Infer, (0, import_lib2.$E)(_), IdentifierName, (0, import_lib2.$E)((0, import_lib2.$S)(NotDedented, ExtendsToken, Type)));
var TypePrimary$1 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$E)(_), Typeof, (0, import_lib2.$E)(_), UnaryExpression), function($skip, $loc, $0, $1, $2, $3, $4) {
  var expression = $4;
  return {
    type: "TypeTypeof",
    children: $0,
    expression
  };
});
var TypePrimary$2 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$E)(_), TypeTuple), function($skip, $loc, $0, $1, $2) {
  return prepend($1, $2);
});
var TypePrimary$3 = InterfaceBlock;
var TypePrimary$4 = (0, import_lib2.$S)((0, import_lib2.$E)(_), TypeFunction);
var TypePrimary$5 = (0, import_lib2.$S)((0, import_lib2.$E)(_), InlineInterfaceLiteral);
var TypePrimary$6 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$E)(_), ImportType), function($skip, $loc, $0, $1, $2) {
  var t = $2;
  return {
    type: "ImportType",
    t,
    children: $0
  };
});
var TypePrimary$7 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$E)(_), TypeLiteral), function($skip, $loc, $0, $1, $2) {
  var t = $2;
  return {
    type: "TypeLiteral",
    t,
    children: $0
  };
});
var TypePrimary$8 = TypeIdentifier;
var TypePrimary$9 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$E)(_), OpenParen, AllowAll, (0, import_lib2.$E)((0, import_lib2.$C)(MaybeNestedType, (0, import_lib2.$S)(EOS, Type))), RestoreAll, __, CloseParen), function($skip, $loc, $0, $1, $2, $3, $4, $5, $6, $7) {
  if (!$4) return $skip;
  return {
    type: "TypeParenthesized",
    children: [$1, $2, $4, $6, $7]
    // omit AllowAll/RestoreAll
  };
});
var TypePrimary$$ = [TypePrimary$0, TypePrimary$1, TypePrimary$2, TypePrimary$3, TypePrimary$4, TypePrimary$5, TypePrimary$6, TypePrimary$7, TypePrimary$8, TypePrimary$9];
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
});
var TypeIdentifier$1 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$E)(_), Identifier, (0, import_lib2.$Q)((0, import_lib2.$S)(Dot, IdentifierName)), (0, import_lib2.$E)((0, import_lib2.$C)(TypeArguments, ImplicitTypeArguments))), function($skip, $loc, $0, $1, $2, $3, $4) {
  var args = $4;
  return {
    type: "TypeIdentifier",
    children: $0,
    raw: [$2.name, ...$3.map(([dot, id]) => dot.token + id.name)].join(""),
    args
  };
});
var TypeIdentifier$2 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$E)(_), BasicThisLiteral), function($skip, $loc, $0, $1, $2) {
  return {
    type: "TypeIdentifier",
    children: $0,
    raw: $2.name
  };
});
var TypeIdentifier$$ = [TypeIdentifier$0, TypeIdentifier$1, TypeIdentifier$2];
function TypeIdentifier(ctx, state2) {
  return (0, import_lib2.$EVENT_C)(ctx, state2, "TypeIdentifier", TypeIdentifier$$);
}
var ImportType$0 = (0, import_lib2.$S)((0, import_lib2.$EXPECT)($L15, 'ImportType "import"'), OpenParen, __, StringLiteral, __, CloseParen, (0, import_lib2.$E)((0, import_lib2.$S)(Dot, IdentifierName)), (0, import_lib2.$E)(TypeArguments));
var ImportType$1 = (0, import_lib2.$S)((0, import_lib2.$EXPECT)($L15, 'ImportType "import"'), InsertOpenParen, (0, import_lib2.$E)(Trimmed_), StringLiteral, InsertCloseParen);
var ImportType$$ = [ImportType$0, ImportType$1];
function ImportType(ctx, state2) {
  return (0, import_lib2.$EVENT_C)(ctx, state2, "ImportType", ImportType$$);
}
var TypeTuple$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(OpenBracket, AllowAll, (0, import_lib2.$E)(TypeTupleContent), RestoreAll, __, CloseBracket), function($skip, $loc, $0, $1, $2, $3, $4, $5, $6) {
  var open = $1;
  var elements = $3;
  var ws = $5;
  var close = $6;
  if (!elements) return $skip;
  return {
    type: "TypeTuple",
    elements,
    children: [open, elements, ws, close]
  };
});
function TypeTuple(ctx, state2) {
  return (0, import_lib2.$EVENT)(ctx, state2, "TypeTuple", TypeTuple$0);
}
var TypeTupleContent$0 = (0, import_lib2.$S)(NestedTypeElementList, (0, import_lib2.$Y)((0, import_lib2.$S)(__, CloseBracket)));
var TypeTupleContent$1 = (0, import_lib2.$TS)((0, import_lib2.$S)(TypeElementListWithIndentedApplicationForbidden, ArrayElementDelimiter, (0, import_lib2.$E)(NestedTypeElementList), (0, import_lib2.$Y)((0, import_lib2.$S)(__, CloseBracket))), function($skip, $loc, $0, $1, $2, $3, $4) {
  var list = $1;
  var delimiter = $2;
  var nested = $3;
  if (!nested) return list;
  return [...list, delimiter, ...nested];
});
var TypeTupleContent$2 = (0, import_lib2.$TV)((0, import_lib2.$Q)((0, import_lib2.$S)(__, TypeElementListWithIndentedApplicationForbidden, ArrayElementDelimiter)), function($skip, $loc, $0, $1) {
  return $1.flat();
});
var TypeTupleContent$$ = [TypeTupleContent$0, TypeTupleContent$1, TypeTupleContent$2];
function TypeTupleContent(ctx, state2) {
  return (0, import_lib2.$EVENT_C)(ctx, state2, "TypeTupleContent", TypeTupleContent$$);
}
var TypeElementListWithIndentedApplicationForbidden$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(ForbidIndentedApplication, (0, import_lib2.$E)(TypeElementList), RestoreIndentedApplication), function($skip, $loc, $0, $1, $2, $3) {
  if ($2) return $2;
  return $skip;
});
function TypeElementListWithIndentedApplicationForbidden(ctx, state2) {
  return (0, import_lib2.$EVENT)(ctx, state2, "TypeElementListWithIndentedApplicationForbidden", TypeElementListWithIndentedApplicationForbidden$0);
}
var TypeElementList$0 = (0, import_lib2.$T)((0, import_lib2.$S)(TypeBulletedTuple), function(value) {
  return [value[0]];
});
var TypeElementList$1 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$N)(EOS), TypeElement, (0, import_lib2.$Q)((0, import_lib2.$S)((0, import_lib2.$S)((0, import_lib2.$E)(_), Comma, (0, import_lib2.$N)(EOS)), TypeElement))), function($skip, $loc, $0, $1, $2, $3) {
  var first = $2;
  var rest = $3;
  if (!rest.length) return [first];
  return [
    append(first, rest[0][0])
  ].concat(
    rest.map(([_2, e], i) => append(e, rest[i + 1]?.[0]))
  );
});
var TypeElementList$$ = [TypeElementList$0, TypeElementList$1];
function TypeElementList(ctx, state2) {
  return (0, import_lib2.$EVENT_C)(ctx, state2, "TypeElementList", TypeElementList$$);
}
var TypeElement$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(__, (0, import_lib2.$E)((0, import_lib2.$S)(DotDotDot, __)), IdentifierName, (0, import_lib2.$E)((0, import_lib2.$S)((0, import_lib2.$E)(_), DotDotDot)), (0, import_lib2.$S)(__, (0, import_lib2.$E)((0, import_lib2.$S)(QuestionMark, (0, import_lib2.$E)(_))), Colon, __), Type), function($skip, $loc, $0, $1, $2, $3, $4, $5, $6) {
  var ws = $1;
  var dots1 = $2;
  var name = $3;
  var dots2 = $4;
  var colon = $5;
  var type = $6;
  let dots = dots1 || dots2 && [dots2[1], dots2[0]];
  if (dots1 && dots2) {
    dots = [dots, {
      type: "Error",
      message: "... both before and after identifier"
    }];
  }
  return {
    type: "TypeElement",
    name,
    t: type,
    children: [ws, dots, name, colon, type]
  };
});
var TypeElement$1 = (0, import_lib2.$S)(__, DotDotDot, __, Type);
var TypeElement$2 = (0, import_lib2.$TS)((0, import_lib2.$S)(Type, (0, import_lib2.$E)((0, import_lib2.$S)((0, import_lib2.$E)(_), DotDotDot))), function($skip, $loc, $0, $1, $2) {
  var type = $1;
  var spaceDots = $2;
  if (spaceDots) {
    const [space, dots] = spaceDots;
    const ws = getTrimmingSpace(type);
    spaceDots = [ws, dots, space];
    type = trimFirstSpace(type);
  }
  return {
    type: "TypeElement",
    t: type,
    children: [spaceDots, type]
  };
});
var TypeElement$$ = [TypeElement$0, TypeElement$1, TypeElement$2];
function TypeElement(ctx, state2) {
  return (0, import_lib2.$EVENT_C)(ctx, state2, "TypeElement", TypeElement$$);
}
var NestedTypeElementList$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(PushIndent, (0, import_lib2.$Q)(NestedTypeElement), PopIndent), function($skip, $loc, $0, $1, $2, $3) {
  var types = $2;
  if (types.length)
    return types;
  return $skip;
});
function NestedTypeElementList(ctx, state2) {
  return (0, import_lib2.$EVENT)(ctx, state2, "NestedTypeElementList", NestedTypeElementList$0);
}
var NestedTypeElement$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(Nested, TypeElementList, ArrayElementDelimiter), function($skip, $loc, $0, $1, $2, $3) {
  var indent = $1;
  var list = $2;
  var delimiter = $3;
  const { length } = list;
  if (!length) return $skip;
  return list.map((e, i) => {
    if (i === 0) e = prepend(indent, e);
    if (i === length - 1) e = append(e, delimiter);
    return e;
  });
});
function NestedTypeElement(ctx, state2) {
  return (0, import_lib2.$EVENT)(ctx, state2, "NestedTypeElement", NestedTypeElement$0);
}
var NestedTypeBulletedTuple$0 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$S)(InsertSpace, InsertOpenBracket), PushIndent, (0, import_lib2.$Q)(NestedTypeBullet), InsertCloseBracket, PopIndent), function($skip, $loc, $0, $1, $2, $3, $4, $5) {
  var open = $1;
  var content = $3;
  var close = $4;
  if (!content.length) return $skip;
  content = content.flat();
  const last = content[content.length - 1];
  let children = Array.isArray(last) ? last : last?.children;
  if (children?.at(-1).implicit) {
    children = children.slice(0, -1);
    if (Array.isArray(last)) {
      content[content.length - 1] = children;
    } else {
      content[content.length - 1] = { ...last, children };
    }
  }
  return {
    type: "TypeTuple",
    children: [...open, ...content, close]
  };
});
function NestedTypeBulletedTuple(ctx, state2) {
  return (0, import_lib2.$EVENT)(ctx, state2, "NestedTypeBulletedTuple", NestedTypeBulletedTuple$0);
}
var TypeBulletedTuple$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(InsertOpenBracket, (0, import_lib2.$E)((0, import_lib2.$S)(TypeBullet, (0, import_lib2.$Q)(NestedTypeBullet))), InsertCloseBracket), function($skip, $loc, $0, $1, $2, $3) {
  var open = $1;
  var content = $2;
  var close = $3;
  if (!content) return $skip;
  content = [
    ...trimFirstSpace(content[0]),
    // replace first space with bracket
    ...content[1].flat()
  ];
  const last = content[content.length - 1];
  let children = Array.isArray(last) ? last : last?.children;
  if (children?.at(-1).implicit) {
    children = children.slice(0, -1);
    if (Array.isArray(last)) {
      content[content.length - 1] = children;
    } else {
      content[content.length - 1] = { ...last, children };
    }
  }
  return {
    type: "TypeTuple",
    children: [open, ...content, close]
  };
});
function TypeBulletedTuple(ctx, state2) {
  return (0, import_lib2.$EVENT)(ctx, state2, "TypeBulletedTuple", TypeBulletedTuple$0);
}
var NestedTypeBullet$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(Nested, TypeBullet), function($skip, $loc, $0, $1, $2) {
  var indent = $1;
  var list = $2;
  return list.map((e, i) => i === 0 ? prepend(indent, e) : e);
});
function NestedTypeBullet(ctx, state2) {
  return (0, import_lib2.$EVENT)(ctx, state2, "NestedTypeBullet", NestedTypeBullet$0);
}
var TypeBullet$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(BulletIndent, (0, import_lib2.$E)((0, import_lib2.$S)(TypeElementList, ArrayBulletDelimiter)), PopIndent), function($skip, $loc, $0, $1, $2, $3) {
  var bullet = $1;
  var content = $2;
  if (!content) return $skip;
  let [list, delimiter] = content;
  if (!list.length) return $skip;
  list = list.slice();
  list[0] = prepend(bullet, list[0]);
  if (delimiter) {
    const last = list.length - 1;
    list[last] = append(list[last], delimiter);
  }
  return list;
});
function TypeBullet(ctx, state2) {
  return (0, import_lib2.$EVENT)(ctx, state2, "TypeBullet", TypeBullet$0);
}
var TypeWithPostfix$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(TypeConditional, (0, import_lib2.$E)((0, import_lib2.$S)((0, import_lib2.$E)(_), TypeIfClause))), function($skip, $loc, $0, $1, $2) {
  var t = $1;
  var postfix = $2;
  if (!postfix) return t;
  return prepend(
    postfix[0],
    expressionizeTypeIf([...postfix[1], $1, void 0])
  );
});
function TypeWithPostfix(ctx, state2) {
  return (0, import_lib2.$EVENT)(ctx, state2, "TypeWithPostfix", TypeWithPostfix$0);
}
var TypeConditional$0 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$E)(_), (0, import_lib2.$EXPECT)($R92, "TypeConditional /(?=if|unless)/"), TypeIfThenElse), function($skip, $loc, $0, $1, $2, $3) {
  return prepend($1, expressionizeTypeIf($3));
});
var TypeConditional$1 = (0, import_lib2.$TS)((0, import_lib2.$S)(TypeCondition, NotDedented, QuestionMark, __, Type, __, Colon, __, Type), function($skip, $loc, $0, $1, $2, $3, $4, $5, $6, $7, $8, $9) {
  if ($1.negated) return [$1, $2, $3, $4, $9, $6, $7, $8, $5];
  return $0;
});
var TypeConditional$2 = TypeBinary;
var TypeConditional$$ = [TypeConditional$0, TypeConditional$1, TypeConditional$2];
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
  if (!condition) return $skip;
  return [$1, condition];
});
var TypeIfClause$1 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$C)(If, Unless), ForbidIndentedApplication, (0, import_lib2.$E)(TypeCondition), RestoreIndentedApplication), function($skip, $loc, $0, $1, $2, $3, $4) {
  var condition = $3;
  if (!condition) return $skip;
  return [$1, condition];
});
var TypeIfClause$$ = [TypeIfClause$0, TypeIfClause$1];
function TypeIfClause(ctx, state2) {
  return (0, import_lib2.$EVENT_C)(ctx, state2, "TypeIfClause", TypeIfClause$$);
}
var TypeElse$0 = (0, import_lib2.$S)(NotDedented, Else, TypeBlock);
function TypeElse(ctx, state2) {
  return (0, import_lib2.$EVENT)(ctx, state2, "TypeElse", TypeElse$0);
}
var TypeBlock$0 = (0, import_lib2.$T)((0, import_lib2.$S)(Then, Type), function(value) {
  return value[1];
});
var TypeBlock$1 = (0, import_lib2.$T)((0, import_lib2.$S)((0, import_lib2.$N)(EOS), Type), function(value) {
  return value[1];
});
var TypeBlock$2 = NestedInterfaceBlock;
var TypeBlock$3 = (0, import_lib2.$TS)((0, import_lib2.$S)(PushIndent, (0, import_lib2.$E)((0, import_lib2.$S)(Nested, Type)), PopIndent), function($skip, $loc, $0, $1, $2, $3) {
  if (!$2) return $skip;
  return $2;
});
var TypeBlock$$ = [TypeBlock$0, TypeBlock$1, TypeBlock$2, TypeBlock$3];
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
});
var TypeTemplateLiteral$1 = CoffeeInterpolatedDoubleQuotedTypeLiteral;
var TypeTemplateLiteral$$ = [TypeTemplateLiteral$0, TypeTemplateLiteral$1];
function TypeTemplateLiteral(ctx, state2) {
  return (0, import_lib2.$EVENT_C)(ctx, state2, "TypeTemplateLiteral", TypeTemplateLiteral$$);
}
var CoffeeStringTypeSubstitution$0 = (0, import_lib2.$S)(CoffeeSubstitutionStart, Type, __, CloseBrace);
function CoffeeStringTypeSubstitution(ctx, state2) {
  return (0, import_lib2.$EVENT)(ctx, state2, "CoffeeStringTypeSubstitution", CoffeeStringTypeSubstitution$0);
}
var CoffeeInterpolatedDoubleQuotedTypeLiteral$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(CoffeeInterpolationEnabled, DoubleQuote, (0, import_lib2.$Q)((0, import_lib2.$C)(CoffeeDoubleQuotedStringCharacters, CoffeeStringTypeSubstitution)), DoubleQuote), function($skip, $loc, $0, $1, $2, $3, $4) {
  var s = $2;
  var parts = $3;
  var e = $4;
  return processCoffeeInterpolation(s, parts, e, $loc);
});
function CoffeeInterpolatedDoubleQuotedTypeLiteral(ctx, state2) {
  return (0, import_lib2.$EVENT)(ctx, state2, "CoffeeInterpolatedDoubleQuotedTypeLiteral", CoffeeInterpolatedDoubleQuotedTypeLiteral$0);
}
var TypeLiteral$0 = TypeTemplateLiteral;
var TypeLiteral$1 = Literal;
var TypeLiteral$2 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$EXPECT)($R14, "TypeLiteral /[+-]/"), NumericLiteral), function($skip, $loc, $0, $1, $2) {
  var sign = $1;
  var num = $2;
  if (sign[0] === "+") return num;
  return $0;
});
var TypeLiteral$3 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$EXPECT)($L226, 'TypeLiteral "void"'), NonIdContinue), function($skip, $loc, $0, $1, $2) {
  return { type: "VoidType", $loc, token: $1 };
});
var TypeLiteral$4 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$EXPECT)($L245, 'TypeLiteral "unique"'), _, (0, import_lib2.$EXPECT)($L246, 'TypeLiteral "symbol"'), NonIdContinue), function($skip, $loc, $0, $1, $2, $3, $4) {
  return { type: "UniqueSymbolType", children: $0 };
});
var TypeLiteral$5 = (0, import_lib2.$TV)((0, import_lib2.$EXPECT)($L247, 'TypeLiteral "[]"'), function($skip, $loc, $0, $1) {
  return { $loc, token: "[]" };
});
var TypeLiteral$$ = [TypeLiteral$0, TypeLiteral$1, TypeLiteral$2, TypeLiteral$3, TypeLiteral$4, TypeLiteral$5];
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
var InlineInterfacePropertyDelimiter$0 = (0, import_lib2.$C)((0, import_lib2.$S)((0, import_lib2.$E)(_), Semicolon), CommaDelimiter);
var InlineInterfacePropertyDelimiter$1 = (0, import_lib2.$T)((0, import_lib2.$S)((0, import_lib2.$Y)((0, import_lib2.$S)(SameLineOrIndentedFurther, InlineBasicInterfaceProperty)), InsertComma), function(value) {
  return value[1];
});
var InlineInterfacePropertyDelimiter$2 = (0, import_lib2.$Y)((0, import_lib2.$S)(__, (0, import_lib2.$C)((0, import_lib2.$EXPECT)($L16, 'InlineInterfacePropertyDelimiter ":"'), (0, import_lib2.$EXPECT)($L143, 'InlineInterfacePropertyDelimiter ")"'), (0, import_lib2.$EXPECT)($L46, 'InlineInterfacePropertyDelimiter "]"'), (0, import_lib2.$EXPECT)($L37, 'InlineInterfacePropertyDelimiter "}"'))));
var InlineInterfacePropertyDelimiter$3 = (0, import_lib2.$Y)(EOS);
var InlineInterfacePropertyDelimiter$$ = [InlineInterfacePropertyDelimiter$0, InlineInterfacePropertyDelimiter$1, InlineInterfacePropertyDelimiter$2, InlineInterfacePropertyDelimiter$3];
function InlineInterfacePropertyDelimiter(ctx, state2) {
  return (0, import_lib2.$EVENT_C)(ctx, state2, "InlineInterfacePropertyDelimiter", InlineInterfacePropertyDelimiter$$);
}
var TypeBinaryOp$0 = (0, import_lib2.$TV)((0, import_lib2.$EXPECT)($L118, 'TypeBinaryOp "|"'), function($skip, $loc, $0, $1) {
  return { $loc, token: "|" };
});
var TypeBinaryOp$1 = (0, import_lib2.$TV)((0, import_lib2.$EXPECT)($L117, 'TypeBinaryOp "&"'), function($skip, $loc, $0, $1) {
  return { $loc, token: "&" };
});
var TypeBinaryOp$$ = [TypeBinaryOp$0, TypeBinaryOp$1];
function TypeBinaryOp(ctx, state2) {
  return (0, import_lib2.$EVENT_C)(ctx, state2, "TypeBinaryOp", TypeBinaryOp$$);
}
var TypeFunction$0 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$E)((0, import_lib2.$S)(Abstract, (0, import_lib2.$E)(_))), (0, import_lib2.$E)((0, import_lib2.$S)(Async, (0, import_lib2.$E)(_))), (0, import_lib2.$E)((0, import_lib2.$S)(New, (0, import_lib2.$E)(_))), Parameters, __, TypeFunctionArrow, (0, import_lib2.$C)(ReturnType, Loc)), function($skip, $loc, $0, $1, $2, $3, $4, $5, $6, $7) {
  var abstract = $1;
  var async = $2;
  var new_ = $3;
  var returnType = $7;
  const children = [abstract, ...$0.slice(2)];
  if (abstract && !new_) {
    children[1] = {
      type: "Error",
      message: "abstract function types must be constructors (abstract new)"
    };
  }
  if (returnType.$loc && returnType.token === "") {
    const t = {
      type: "VoidType",
      $loc: returnType.$loc,
      token: "void"
    };
    children[children.length - 1] = returnType = {
      type: "ReturnTypeAnnotation",
      ts: true,
      t,
      children: [t]
    };
  }
  if (async) {
    const t = wrapTypeInPromise(returnType.t);
    children[children.length - 1] = returnType = {
      ...returnType,
      t,
      children: returnType.children.map(($) => $ === returnType.t ? t : $)
    };
  }
  return {
    type: "TypeFunction",
    children,
    ts: true,
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
  var open = $1;
  var args = $2;
  var ws = $3;
  var close = $4;
  args = args.flatMap(([ws2, [arg, delim]]) => [prepend(ws2, arg), delim]);
  args.pop();
  return {
    type: "TypeArguments",
    ts: true,
    args,
    children: [open, args, ws, close]
  };
});
function TypeArguments(ctx, state2) {
  return (0, import_lib2.$EVENT)(ctx, state2, "TypeArguments", TypeArguments$0);
}
var ImplicitTypeArguments$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(TypeApplicationStart, InsertOpenAngleBracket, (0, import_lib2.$E)(Trimmed_), TypeArgumentList, InsertCloseAngleBracket), function($skip, $loc, $0, $1, $2, $3, $4, $5) {
  var open = $2;
  var ws = $3;
  var args = $4;
  var close = $5;
  const last = args[args.length - 1];
  if (isComma(last)) args = args.slice(0, -1);
  return {
    type: "TypeArguments",
    ts: true,
    args,
    children: [open, ws, args, close]
  };
});
function ImplicitTypeArguments(ctx, state2) {
  return (0, import_lib2.$EVENT)(ctx, state2, "ImplicitTypeArguments", ImplicitTypeArguments$0);
}
var TypeApplicationStart$0 = (0, import_lib2.$S)(IndentedApplicationAllowed, (0, import_lib2.$Y)((0, import_lib2.$S)(IndentedFurther, (0, import_lib2.$N)(ForbiddenImplicitTypeCalls))));
var TypeApplicationStart$1 = (0, import_lib2.$S)((0, import_lib2.$N)(EOS), (0, import_lib2.$Y)((0, import_lib2.$S)(_, (0, import_lib2.$N)(ForbiddenImplicitTypeCalls))));
var TypeApplicationStart$$ = [TypeApplicationStart$0, TypeApplicationStart$1];
function TypeApplicationStart(ctx, state2) {
  return (0, import_lib2.$EVENT_C)(ctx, state2, "TypeApplicationStart", TypeApplicationStart$$);
}
var ForbiddenImplicitTypeCalls$0 = ReservedBinary;
var ForbiddenImplicitTypeCalls$1 = (0, import_lib2.$R$0)((0, import_lib2.$EXPECT)($R93, "ForbiddenImplicitTypeCalls /[|&<!=\\-\u21D2\u2192]/"));
var ForbiddenImplicitTypeCalls$2 = (0, import_lib2.$R$0)((0, import_lib2.$EXPECT)($R94, "ForbiddenImplicitTypeCalls /(extends|not|is)(?!\\p{ID_Continue}|[\\u200C\\u200D$])/"));
var ForbiddenImplicitTypeCalls$$ = [ForbiddenImplicitTypeCalls$0, ForbiddenImplicitTypeCalls$1, ForbiddenImplicitTypeCalls$2];
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
});
var TypeArgumentList$1 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$C)(NestedTypeBulletedTuple, NestedInterfaceBlock), (0, import_lib2.$Q)((0, import_lib2.$S)(CommaDelimiter, (0, import_lib2.$C)(NestedTypeBulletedTuple, NestedInterfaceBlock, NestedTypeArgumentList)))), function($skip, $loc, $0, $1, $2) {
  return [
    trimFirstSpace($1),
    ...$2.flatMap(
      ([comma, args]) => Array.isArray(args) ? [comma, ...args] : [comma, args]
    )
  ];
});
var TypeArgumentList$2 = NestedTypeArgumentList;
var TypeArgumentList$3 = (0, import_lib2.$TS)((0, import_lib2.$S)(TypeArgument, (0, import_lib2.$Q)((0, import_lib2.$S)(CommaDelimiter, WTypeArgument))), function($skip, $loc, $0, $1, $2) {
  return [
    $1,
    ...$2.flatMap(([comma, arg]) => [comma, arg])
  ];
});
var TypeArgumentList$$ = [TypeArgumentList$0, TypeArgumentList$1, TypeArgumentList$2, TypeArgumentList$3];
function TypeArgumentList(ctx, state2) {
  return (0, import_lib2.$EVENT_C)(ctx, state2, "TypeArgumentList", TypeArgumentList$$);
}
var NestedTypeArgumentList$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(PushIndent, (0, import_lib2.$Q)(NestedTypeArgument), PopIndent), function($skip, $loc, $0, $1, $2, $3) {
  var args = $2;
  if (!args.length) return $skip;
  return args.flat();
});
function NestedTypeArgumentList(ctx, state2) {
  return (0, import_lib2.$EVENT)(ctx, state2, "NestedTypeArgumentList", NestedTypeArgumentList$0);
}
var NestedTypeArgument$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(Nested, SingleLineTypeArgumentList, TypeArgumentDelimiter), function($skip, $loc, $0, $1, $2, $3) {
  var indent = $1;
  var args = $2;
  var comma = $3;
  let [arg0, ...rest] = args;
  arg0 = prepend(indent, arg0);
  return [arg0, ...rest, comma];
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
  return { "type": "TypeArgument", "ts": true, "t": value, "children": [value] };
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
    ts: true,
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
var TypeParameterDelimiter$0 = (0, import_lib2.$S)((0, import_lib2.$E)(_), Comma);
var TypeParameterDelimiter$1 = (0, import_lib2.$Y)((0, import_lib2.$S)(__, (0, import_lib2.$EXPECT)($L45, 'TypeParameterDelimiter ">"')));
var TypeParameterDelimiter$2 = (0, import_lib2.$T)((0, import_lib2.$S)((0, import_lib2.$Y)(EOS), InsertComma), function(value) {
  return value[1];
});
var TypeParameterDelimiter$$ = [TypeParameterDelimiter$0, TypeParameterDelimiter$1, TypeParameterDelimiter$2];
function TypeParameterDelimiter(ctx, state2) {
  return (0, import_lib2.$EVENT_C)(ctx, state2, "TypeParameterDelimiter", TypeParameterDelimiter$$);
}
var ThisType$0 = (0, import_lib2.$T)((0, import_lib2.$S)((0, import_lib2.$E)(_), (0, import_lib2.$C)(This, AtThis), Colon, Type, ParameterElementDelimiter), function(value) {
  return { "type": "ThisType", "ts": true, "children": value };
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
});
var CivetPrologue$1 = (0, import_lib2.$T)((0, import_lib2.$S)((0, import_lib2.$EXPECT)($R97, "CivetPrologue /[\\t ]*/"), SingleQuote, CivetPrologueContent, SingleQuote, SimpleStatementDelimiter, (0, import_lib2.$EXPECT)($R22, "CivetPrologue /[ \\t]*/"), (0, import_lib2.$C)(EOL, (0, import_lib2.$Y)(RestOfLine))), function(value) {
  var content = value[2];
  return content;
});
var CivetPrologue$$ = [CivetPrologue$0, CivetPrologue$1];
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
  const optionName = $2.replace(/-+([a-z]?)/g, (_2, l) => {
    if (l) return l.toUpperCase();
    return "";
  });
  let value = $3 ? $4 : $1 === "-" ? false : true;
  switch (optionName) {
    case "tab":
      value = parseFloat(value);
      if (isNaN(value)) value = 0;
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
var PrologueString$0 = CivetPrologue;
var PrologueString$1 = UnknownPrologue;
var PrologueString$$ = [PrologueString$0, PrologueString$1];
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
  return { $loc, token: ",", implicit: true };
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
  return { ts: true, children: [{ $loc, token: "readonly " }] };
});
function InsertReadonly(ctx, state2) {
  return (0, import_lib2.$EVENT)(ctx, state2, "InsertReadonly", InsertReadonly$0);
}
var InsertNewline$0 = (0, import_lib2.$TV)((0, import_lib2.$EXPECT)($L0, 'InsertNewline ""'), function($skip, $loc, $0, $1) {
  return "\n";
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
  if (config.coffeeBinaryExistential) return;
  return $skip;
});
function CoffeeBinaryExistentialEnabled(ctx, state2) {
  return (0, import_lib2.$EVENT)(ctx, state2, "CoffeeBinaryExistentialEnabled", CoffeeBinaryExistentialEnabled$0);
}
var CoffeeBooleansEnabled$0 = (0, import_lib2.$TV)((0, import_lib2.$EXPECT)($L0, 'CoffeeBooleansEnabled ""'), function($skip, $loc, $0, $1) {
  if (config.coffeeBooleans) return;
  return $skip;
});
function CoffeeBooleansEnabled(ctx, state2) {
  return (0, import_lib2.$EVENT)(ctx, state2, "CoffeeBooleansEnabled", CoffeeBooleansEnabled$0);
}
var CoffeeClassesEnabled$0 = (0, import_lib2.$TV)((0, import_lib2.$EXPECT)($L0, 'CoffeeClassesEnabled ""'), function($skip, $loc, $0, $1) {
  if (config.coffeeClasses) return;
  return $skip;
});
function CoffeeClassesEnabled(ctx, state2) {
  return (0, import_lib2.$EVENT)(ctx, state2, "CoffeeClassesEnabled", CoffeeClassesEnabled$0);
}
var CoffeeCommentEnabled$0 = (0, import_lib2.$TV)((0, import_lib2.$EXPECT)($L0, 'CoffeeCommentEnabled ""'), function($skip, $loc, $0, $1) {
  if (config.coffeeComment) return;
  return $skip;
});
function CoffeeCommentEnabled(ctx, state2) {
  return (0, import_lib2.$EVENT)(ctx, state2, "CoffeeCommentEnabled", CoffeeCommentEnabled$0);
}
var CoffeeDivEnabled$0 = (0, import_lib2.$TV)((0, import_lib2.$EXPECT)($L0, 'CoffeeDivEnabled ""'), function($skip, $loc, $0, $1) {
  if (config.coffeeDiv) return;
  return $skip;
});
function CoffeeDivEnabled(ctx, state2) {
  return (0, import_lib2.$EVENT)(ctx, state2, "CoffeeDivEnabled", CoffeeDivEnabled$0);
}
var CoffeeDoEnabled$0 = (0, import_lib2.$TV)((0, import_lib2.$EXPECT)($L0, 'CoffeeDoEnabled ""'), function($skip, $loc, $0, $1) {
  if (config.coffeeDo) return;
  return $skip;
});
function CoffeeDoEnabled(ctx, state2) {
  return (0, import_lib2.$EVENT)(ctx, state2, "CoffeeDoEnabled", CoffeeDoEnabled$0);
}
var CoffeeForLoopsEnabled$0 = (0, import_lib2.$TV)((0, import_lib2.$EXPECT)($L0, 'CoffeeForLoopsEnabled ""'), function($skip, $loc, $0, $1) {
  if (config.coffeeForLoops) return;
  return $skip;
});
function CoffeeForLoopsEnabled(ctx, state2) {
  return (0, import_lib2.$EVENT)(ctx, state2, "CoffeeForLoopsEnabled", CoffeeForLoopsEnabled$0);
}
var CoffeeInterpolationEnabled$0 = (0, import_lib2.$TV)((0, import_lib2.$EXPECT)($L0, 'CoffeeInterpolationEnabled ""'), function($skip, $loc, $0, $1) {
  if (config.coffeeInterpolation) return;
  return $skip;
});
function CoffeeInterpolationEnabled(ctx, state2) {
  return (0, import_lib2.$EVENT)(ctx, state2, "CoffeeInterpolationEnabled", CoffeeInterpolationEnabled$0);
}
var CoffeeIsntEnabled$0 = (0, import_lib2.$TV)((0, import_lib2.$EXPECT)($L0, 'CoffeeIsntEnabled ""'), function($skip, $loc, $0, $1) {
  if (config.coffeeIsnt) return;
  return $skip;
});
function CoffeeIsntEnabled(ctx, state2) {
  return (0, import_lib2.$EVENT)(ctx, state2, "CoffeeIsntEnabled", CoffeeIsntEnabled$0);
}
var CoffeeJSXEnabled$0 = (0, import_lib2.$TV)((0, import_lib2.$EXPECT)($L0, 'CoffeeJSXEnabled ""'), function($skip, $loc, $0, $1) {
  if (config.coffeeJSX) return;
  return $skip;
});
function CoffeeJSXEnabled(ctx, state2) {
  return (0, import_lib2.$EVENT)(ctx, state2, "CoffeeJSXEnabled", CoffeeJSXEnabled$0);
}
var CoffeeLineContinuationEnabled$0 = (0, import_lib2.$TV)((0, import_lib2.$EXPECT)($L0, 'CoffeeLineContinuationEnabled ""'), function($skip, $loc, $0, $1) {
  if (config.coffeeLineContinuation) return;
  return $skip;
});
function CoffeeLineContinuationEnabled(ctx, state2) {
  return (0, import_lib2.$EVENT)(ctx, state2, "CoffeeLineContinuationEnabled", CoffeeLineContinuationEnabled$0);
}
var CoffeeNotEnabled$0 = (0, import_lib2.$TV)((0, import_lib2.$EXPECT)($L0, 'CoffeeNotEnabled ""'), function($skip, $loc, $0, $1) {
  if (config.coffeeNot) return;
  return $skip;
});
function CoffeeNotEnabled(ctx, state2) {
  return (0, import_lib2.$EVENT)(ctx, state2, "CoffeeNotEnabled", CoffeeNotEnabled$0);
}
var CoffeeOfEnabled$0 = (0, import_lib2.$TV)((0, import_lib2.$EXPECT)($L0, 'CoffeeOfEnabled ""'), function($skip, $loc, $0, $1) {
  if (config.coffeeOf) return;
  return $skip;
});
function CoffeeOfEnabled(ctx, state2) {
  return (0, import_lib2.$EVENT)(ctx, state2, "CoffeeOfEnabled", CoffeeOfEnabled$0);
}
var CoffeePrototypeEnabled$0 = (0, import_lib2.$TV)((0, import_lib2.$EXPECT)($L0, 'CoffeePrototypeEnabled ""'), function($skip, $loc, $0, $1) {
  if (config.coffeePrototype) return;
  return $skip;
});
function CoffeePrototypeEnabled(ctx, state2) {
  return (0, import_lib2.$EVENT)(ctx, state2, "CoffeePrototypeEnabled", CoffeePrototypeEnabled$0);
}
var JSXCodeNestedEnabled$0 = (0, import_lib2.$TV)((0, import_lib2.$EXPECT)($L0, 'JSXCodeNestedEnabled ""'), function($skip, $loc, $0, $1) {
  if (config.jsxCodeNested) return;
  return $skip;
});
function JSXCodeNestedEnabled(ctx, state2) {
  return (0, import_lib2.$EVENT)(ctx, state2, "JSXCodeNestedEnabled", JSXCodeNestedEnabled$0);
}
var JSXCodeSameLineEnabled$0 = (0, import_lib2.$TV)((0, import_lib2.$EXPECT)($L0, 'JSXCodeSameLineEnabled ""'), function($skip, $loc, $0, $1) {
  if (config.jsxCodeSameLine) return;
  return $skip;
});
function JSXCodeSameLineEnabled(ctx, state2) {
  return (0, import_lib2.$EVENT)(ctx, state2, "JSXCodeSameLineEnabled", JSXCodeSameLineEnabled$0);
}
var ObjectIsEnabled$0 = (0, import_lib2.$TV)((0, import_lib2.$EXPECT)($L0, 'ObjectIsEnabled ""'), function($skip, $loc, $0, $1) {
  if (config.objectIs) return;
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
  }];
  state.forbidClassImplicitCall = [false];
  state.forbidIndentedApplication = [false];
  state.forbidBracedApplication = [false];
  state.forbidTrailingMemberProperty = [false];
  state.forbidNestedBinaryOp = [false];
  state.forbidNewlineBinaryOp = [false];
  state.forbidPipeline = [false];
  state.JSXTagStack = [void 0];
  state.operators = /* @__PURE__ */ new Map();
  state.helperRefs = {};
  state.prelude = [];
  config = {
    autoConst: false,
    autoVar: false,
    autoLet: false,
    coffeeBinaryExistential: false,
    coffeeBooleans: false,
    coffeeClasses: false,
    coffeeComment: false,
    coffeeDiv: false,
    coffeeDo: false,
    coffeeEq: false,
    coffeeForLoops: false,
    coffeeInterpolation: false,
    coffeeIsnt: false,
    coffeeJSX: false,
    coffeeLineContinuation: false,
    coffeeNot: false,
    coffeeOf: false,
    coffeePrototype: false,
    coffeeRange: false,
    defaultElement: "div",
    globals: [],
    iife: false,
    implicitReturns: true,
    jsxCode: false,
    objectIs: false,
    react: false,
    solid: false,
    client: false,
    // default behavior: client only
    repl: false,
    rewriteTsImports: true,
    server: false,
    strict: false,
    symbols: wellKnownSymbols,
    tab: void 0,
    // default behavior = same as space
    verbose: false
  };
  Object.defineProperty(config, "deno", {
    set(b) {
      config.rewriteTsImports = !b;
    }
  });
  config.deno = typeof Deno !== "undefined";
  Object.defineProperty(config, "coffeeCompat", {
    set(b) {
      for (const option of [
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
      ]) {
        config[option] = b;
      }
      if (b) {
        config.objectIs = false;
      }
    }
  });
  Object.defineProperty(config, "jsxCode", {
    set(b) {
      for (const option of [
        "jsxCodeNested",
        "jsxCodeSameLine"
      ]) {
        config[option] = b;
      }
    }
  });
  Object.assign(config, initialConfig);
});
function Reset(ctx, state2) {
  return (0, import_lib2.$EVENT)(ctx, state2, "Reset", Reset$0);
}
var Init$0 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$E)(Shebang), Prologue), function($skip, $loc, $0, $1, $2) {
  var directives = $2;
  directives.forEach((directive) => {
    if (directive.type === "CivetPrologue") {
      Object.assign(config, directive.config);
    }
  });
  if (config.strict) {
    $0 = [...$0, '"use strict";\n'];
  }
  return $0;
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
  const level = getIndentLevel($0, config.tab);
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
  const { level } = indent;
  if (level <= state.currentIndent.level) {
    return $skip;
  }
  if (config.verbose) {
    console.log("pushing indent", indent);
  }
  state.indentLevels.push(indent);
  return $1;
});
function TrackIndented(ctx, state2) {
  return (0, import_lib2.$EVENT)(ctx, state2, "TrackIndented", TrackIndented$0);
}
var PushIndent$0 = (0, import_lib2.$Y)((0, import_lib2.$S)(EOS, TrackIndented));
function PushIndent(ctx, state2) {
  return (0, import_lib2.$EVENT)(ctx, state2, "PushIndent", PushIndent$0);
}
var PopIndent$0 = (0, import_lib2.$TV)((0, import_lib2.$EXPECT)($L0, 'PopIndent ""'), function($skip, $loc, $0, $1) {
  if (config.verbose) {
    console.log("popping indent", state.indentLevels[state.indentLevels.length - 1], "->", state.indentLevels[state.indentLevels.length - 2]);
  }
  state.indentLevels.pop();
});
function PopIndent(ctx, state2) {
  return (0, import_lib2.$EVENT)(ctx, state2, "PopIndent", PopIndent$0);
}
var Nested$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(EOS, Indent), function($skip, $loc, $0, $1, $2) {
  var indent = $2;
  if (indent.level === state.currentIndent.level) return $0;
  if (config.verbose) {
    console.log(`failing Nested: ${indent.level} does not match current indent level ${state.currentIndent.level}`);
  }
  return $skip;
});
function Nested(ctx, state2) {
  return (0, import_lib2.$EVENT)(ctx, state2, "Nested", Nested$0);
}
var IndentedFurther$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(EOS, Indent), function($skip, $loc, $0, $1, $2) {
  var indent = $2;
  if (indent.level > state.currentIndent.level) return $0;
  return $skip;
});
function IndentedFurther(ctx, state2) {
  return (0, import_lib2.$EVENT)(ctx, state2, "IndentedFurther", IndentedFurther$0);
}
var IndentedAtLeast$0 = (0, import_lib2.$TS)((0, import_lib2.$S)(EOS, Indent), function($skip, $loc, $0, $1, $2) {
  var indent = $2;
  if (indent.level >= state.currentIndent.level) return $0;
  return $skip;
});
function IndentedAtLeast(ctx, state2) {
  return (0, import_lib2.$EVENT)(ctx, state2, "IndentedAtLeast", IndentedAtLeast$0);
}
var NotDedented$0 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$E)(IndentedAtLeast), (0, import_lib2.$E)(_)), function($skip, $loc, $0, $1, $2) {
  const ws = [];
  if ($1) ws.push(...$1);
  if ($2) ws.push(...$2);
  return ws.flat(Infinity).filter(Boolean);
});
function NotDedented(ctx, state2) {
  return (0, import_lib2.$EVENT)(ctx, state2, "NotDedented", NotDedented$0);
}
var SameLineOrIndentedFurther$0 = (0, import_lib2.$TS)((0, import_lib2.$S)((0, import_lib2.$E)(IndentedFurther), (0, import_lib2.$E)(_)), function($skip, $loc, $0, $1, $2) {
  const ws = [];
  if ($1) ws.push(...$1);
  if ($2) ws.push(...$2);
  return ws.flat(Infinity).filter(Boolean);
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
  const indent = {
    token: "",
    $loc,
    level: state.currentIndent.level + 1
  };
  if (config.verbose) console.log("pushing bonus indent", indent);
  state.indentLevels.push(indent);
  return indent;
});
function PushExtraIndent1(ctx, state2) {
  return (0, import_lib2.$EVENT)(ctx, state2, "PushExtraIndent1", PushExtraIndent1$0);
}
var parser = function() {
  const { fail, validate, reset } = (0, import_lib2.Validator)();
  let ctx = { expectation: "", fail };
  return {
    parse: (input, options = {}) => {
      if (typeof input !== "string") throw new Error("Input must be a string");
      const parser2 = options.startRule != null ? grammar[options.startRule] : Object.values(grammar)[0];
      if (!parser2) throw new Error(`Could not find rule with name '${options.startRule}'`);
      const filename2 = options.filename || "<anonymous>";
      reset();
      Object.assign(ctx, { ...options.events, tokenize: options.tokenize });
      return validate(input, parser2(ctx, {
        input,
        pos: 0
      }), {
        filename: filename2
      });
    }
  };
}();
var { parse } = parser;
var filename;
var initialConfig;
var config;
var sync;
var state = {
  // parser state
  // These get (re)set in Reset, but are included here for type inference
  forbidClassImplicitCall: [false],
  forbidIndentedApplication: [false],
  forbidBracedApplication: [false],
  forbidTrailingMemberProperty: [false],
  forbidNestedBinaryOp: [false],
  forbidNewlineBinaryOp: [false],
  forbidPipeline: [false],
  JSXTagStack: [void 0]
};
var getState = () => state;
var getConfig = () => config;
var getInitialConfig = () => initialConfig;
var getFilename = () => filename;
var getSync = () => sync;
Object.defineProperties(state, {
  currentIndent: {
    get() {
      const { indentLevels: l } = state;
      return l[l.length - 1];
    }
  },
  classImplicitCallForbidden: {
    get() {
      const { forbidClassImplicitCall: s } = state;
      return s[s.length - 1];
    }
  },
  indentedApplicationForbidden: {
    get() {
      const { forbidIndentedApplication: s } = state;
      return s[s.length - 1];
    }
  },
  bracedApplicationForbidden: {
    get() {
      const { forbidBracedApplication: s } = state;
      return s[s.length - 1];
    }
  },
  trailingMemberPropertyForbidden: {
    get() {
      const { forbidTrailingMemberProperty: s } = state;
      return s[s.length - 1];
    }
  },
  nestedBinaryOpForbidden: {
    get() {
      const { forbidNestedBinaryOp: s } = state;
      return s[s.length - 1];
    }
  },
  newlineBinaryOpForbidden: {
    get() {
      const { forbidNewlineBinaryOp: s } = state;
      return s[s.length - 1];
    }
  },
  pipelineForbidden: {
    get() {
      const { forbidPipeline: s } = state;
      return s[s.length - 1];
    }
  },
  currentJSXTag: {
    get() {
      const { JSXTagStack: s } = state;
      return s[s.length - 1];
    }
  }
});
function getStateKey() {
  const stateInt = state.currentIndent.level % 256 << 8 | state.classImplicitCallForbidden << 7 | state.indentedApplicationForbidden << 6 | state.bracedApplicationForbidden << 5 | state.trailingMemberPropertyForbidden << 4 | state.nestedBinaryOpForbidden << 3 | state.newlineBinaryOpForbidden << 2 | state.pipelineForbidden << 1 | // This is slightly different than the rest of the state,
  // since it is affected by the directive prologue and may be hit
  // by the EOL rule early in the parse. Later if we wanted to
  // allow block scoping of the compat directives we would need to
  // add them all here.
  config.coffeeComment << 0;
  return [stateInt, state.currentJSXTag];
}
function parseProgram(input, options) {
  filename = options?.filename;
  initialConfig = options?.parseOptions;
  sync = options?.sync;
  const root = parse(input, options);
  if (sync) {
    filename = initialConfig = sync = null;
    return root;
  } else {
    return processProgramAsync(root).then(() => {
      filename = initialConfig = sync = null;
      return root;
    });
  }
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
  const linesRe = /([^\r\n]*)(\r\n|\r|\n|$)/y;
  const lines = [];
  let line = 0;
  let pos = 0;
  let ref;
  while (ref = linesRe.exec(input)) {
    const result = ref;
    pos += result[0].length;
    lines[line++] = pos;
    if (pos === input.length) {
      break;
    }
  }
  return lines;
}
function lookupLineColumn(table, pos) {
  let l = 0;
  let prevEnd = 0;
  while (table[l] <= pos) {
    prevEnd = table[l++];
  }
  return [l, pos - prevEnd];
}
var EOL2 = /\r?\n|\r/;
var SourceMap = class {
  lines;
  line;
  colOffset;
  // relative to previous entry
  srcLine;
  srcColumn;
  srcTable;
  source;
  constructor(source1) {
    this.source = source1;
    this.lines = [[]];
    this.line = 0;
    this.colOffset = 0;
    this.srcLine = 0;
    this.srcColumn = 0;
    this.srcTable = locationTable(this.source);
  }
  renderMappings() {
    let lastSourceLine = 0;
    let lastSourceColumn = 0;
    return (() => {
      const results = [];
      for (let ref1 = this.lines, i1 = 0, len3 = ref1.length; i1 < len3; i1++) {
        const line = ref1[i1];
        results.push((() => {
          const results1 = [];
          for (let i2 = 0, len1 = line.length; i2 < len1; i2++) {
            const entry = line[i2];
            if (entry.length === 4) {
              let [colDelta, sourceFileIndex, srcLine, srcCol] = entry;
              const lineDelta = srcLine - lastSourceLine;
              colDelta = srcCol - lastSourceColumn;
              lastSourceLine = srcLine;
              lastSourceColumn = srcCol;
              results1.push(`${encodeVlq(entry[0])}${encodeVlq(sourceFileIndex)}${encodeVlq(lineDelta)}${encodeVlq(colDelta)}`);
            } else {
              results1.push(encodeVlq(entry[0]));
            }
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
    return `//${"#"} sourceMappingURL=data:application/json;base64,${base64Encode(JSON.stringify(this.json(srcFileName, outFileName)))}`;
  }
  updateSourceMap(outputStr, inputPos, colOffset = 0) {
    const outLines = outputStr.split(EOL2);
    let srcLine, srcCol;
    if (inputPos != null) {
      [srcLine, srcCol] = lookupLineColumn(this.srcTable, inputPos);
      srcCol += colOffset;
      this.srcLine = srcLine;
      this.srcColumn = srcCol;
    }
    for (let i3 = 0, len22 = outLines.length; i3 < len22; i3++) {
      const i = i3;
      const line = outLines[i3];
      if (i > 0) {
        this.line++;
        this.srcLine++;
        this.colOffset = 0;
        this.lines[this.line] = [];
        this.srcColumn = srcCol = colOffset;
      }
      const l = this.colOffset;
      this.colOffset = line.length;
      this.srcColumn += line.length;
      if (inputPos != null) {
        this.lines[this.line].push([l, 0, srcLine + i, srcCol]);
      } else if (l != 0) {
        this.lines[this.line].push([l]);
      }
    }
    return;
  }
  /**
  Remap a string with compiled code and a source map to use a new source map
  referencing upstream source files.
  This modifies the upstream map in place.
  */
  static remap = (codeWithSourceMap, upstreamMap, sourcePath, targetPath) => {
    let sourceMapText;
    const codeWithoutSourceMap = codeWithSourceMap.replace(smRegexp, (_match, sm) => {
      sourceMapText = sm;
      return "";
    });
    if (sourceMapText) {
      const parsed = this.parseWithLines(sourceMapText);
      const composedLines = this.composeLines(upstreamMap.lines, parsed.lines);
      upstreamMap.lines = composedLines;
    }
    const remappedCodeWithSourceMap = `${codeWithoutSourceMap}
${upstreamMap.comment(sourcePath, targetPath)}`;
    return remappedCodeWithSourceMap;
  };
  /**
  Compose lines from an upstream source map with lines from a downstream source map.
  */
  static composeLines = (upstreamMapping, lines) => {
    return lines.map((line) => {
      return line.map((entry) => {
        if (entry.length === 1) {
          return entry;
        }
        const [colDelta, sourceFileIndex, srcLine, srcCol] = entry;
        const srcPos = remapPosition([srcLine, srcCol], upstreamMapping);
        if (!srcPos) {
          return [entry[0]];
        }
        const [upstreamLine, upstreamCol] = srcPos;
        if (entry.length === 4) {
          return [colDelta, sourceFileIndex, upstreamLine, upstreamCol];
        }
        return [colDelta, sourceFileIndex, upstreamLine, upstreamCol, entry[4]];
      });
    });
  };
  /**
  Parse a base64 encoded source map string into a SourceMapJSON object with lines.
  */
  static parseWithLines = (base64encodedJSONstr) => {
    const json = JSON.parse(Buffer.from(base64encodedJSONstr, "base64").toString("utf8"));
    let sourceLine = 0;
    let sourceColumn = 0;
    const lines = json.mappings.split(";").map((line) => {
      if (line.length === 0) {
        return [];
      }
      return line.split(",").map((entry) => {
        const result = decodeVLQ(entry);
        switch (result.length) {
          case 1: {
            ;
            break;
          }
          case 4:
          case 5: {
            sourceLine += result[2];
            result[2] = sourceLine;
            sourceColumn += result[3];
            result[3] = sourceColumn;
            break;
          }
          default: {
            throw new Error(`Unknown source map entry ${JSON.stringify(result)}`);
          }
        }
        return result;
      });
    });
    return { ...json, lines };
  };
};
var smRegexp = /(?:\r?\n|\r)\/\/# sourceMappingURL=data:application\/json;(?:charset=[^;]*;)?base64,([+a-zA-Z0-9\/]*=?=?)(?:\s*)$/;
var VLQ_SHIFT = 5;
var VLQ_CONTINUATION_BIT = 1 << VLQ_SHIFT;
var VLQ_VALUE_MASK = VLQ_CONTINUATION_BIT - 1;
var encodeVlq = function(value) {
  let answer = "";
  let ref2;
  if (value < 0) ref2 = 1;
  else ref2 = 0;
  const signBit = ref2;
  let valueToEncode = (Math.abs(value) << 1) + signBit;
  while (valueToEncode || !answer) {
    let nextChunk = valueToEncode & VLQ_VALUE_MASK;
    valueToEncode = valueToEncode >> VLQ_SHIFT;
    if (valueToEncode) {
      nextChunk |= VLQ_CONTINUATION_BIT;
    }
    answer += BASE64_CHARS[nextChunk];
  }
  return answer;
};
var BASE64_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
var base64Encode = function(src) {
  if (typeof Buffer !== "undefined") {
    return Buffer.from(src).toString("base64");
  } else {
    const bytes = new TextEncoder().encode(src);
    const binaryString = String.fromCodePoint(...bytes);
    return btoa(binaryString);
  }
};
var vlqTable = new Uint8Array(128);
var vlqChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
{
  let i = 0;
  let l = vlqTable.length;
  while (i < l) {
    vlqTable[i] = 255;
    i++;
  }
  i = 0;
  l = vlqChars.length;
  while (i < l) {
    vlqTable[vlqChars.charCodeAt(i)] = i;
    i++;
  }
}
var decodeError = function(message) {
  throw new Error(message);
};
var decodeVLQ = (mapping) => {
  let i = 0;
  let l = mapping.length;
  let result = [];
  while (i < l) {
    let shift = 0;
    let vlq = 0;
    let v = 0;
    while (true) {
      if (i >= l) {
        decodeError("Unexpected early end of mapping data");
      }
      const c = mapping.charCodeAt(i);
      if ((c & 127) != c) {
        decodeError(`Invalid mapping character: ${JSON.stringify(String.fromCharCode(c))}`);
      }
      const index = vlqTable[c & 127];
      if (index === 255) {
        decodeError(`Invalid mapping character: ${JSON.stringify(String.fromCharCode(c))}`);
      }
      i++;
      vlq |= (index & 31) << shift;
      shift += 5;
      if ((index & 32) === 0) {
        break;
      }
    }
    if (vlq & 1) {
      v = -(vlq >> 1);
    } else {
      v = vlq >> 1;
    }
    result.push(v);
  }
  return result;
};
var remapPosition = (position, sourcemapLines) => {
  const [line, character] = position;
  const textLine = sourcemapLines[line];
  if (!textLine?.length) {
    return void 0;
  }
  let i = 0;
  let p = 0;
  const l = textLine.length;
  let lastMapping = void 0;
  let lastMappingPosition = 0;
  while (i < l) {
    const mapping = textLine[i];
    p += mapping[0];
    if (mapping.length === 4) {
      lastMapping = mapping;
      lastMappingPosition = p;
    }
    if (p >= character) {
      break;
    }
    i++;
  }
  if (character - lastMappingPosition != 0) {
    return void 0;
  }
  if (lastMapping) {
    return [lastMapping[2], lastMapping[3]];
  } else {
    return void 0;
  }
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
    const cache0 = this.cache;
    let cache1;
    if (!cache0.has(key[0])) {
      cache1 = /* @__PURE__ */ new Map();
      this.cache.set(key[0], cache1);
    } else {
      cache1 = cache0.get(key[0]);
    }
    let cache2;
    if (!cache1?.has(key[1])) {
      cache2 = /* @__PURE__ */ new Map();
      cache1.set(key[1], cache2);
    } else {
      cache2 = cache1.get(key[1]);
    }
    let cache3;
    if (!cache2.has(key[2])) {
      cache3 = /* @__PURE__ */ new Map();
      cache2.set(key[2], cache3);
    } else {
      cache3 = cache2.get(key[2]);
    }
    cache3.set(key[3], value);
  }
};

// unplugin-civet:/Users/greghuc/workspace/Civet/source/worker-pool.civet.jsx
var WorkerPool = class {
  idle;
  spawned;
  jobId;
  callbacks;
  todo;
  threads;
  constructor(threads) {
    this.threads = threads;
    this.idle = [];
    this.spawned = 0;
    this.jobId = 0;
    this.callbacks = /* @__PURE__ */ new Map();
    this.todo = [];
  }
  async run(op, ...args) {
    const id = this.jobId++;
    return await new Promise(async (resolve2, reject) => {
      const job = { id, op, args };
      this.callbacks.set(id, { job, resolve: resolve2, reject });
      if (this.idle.length) {
        const worker = this.idle.shift();
        worker.ref();
        worker.postMessage(job);
      } else if (this.spawned < this.threads) {
        (await this.startWorker()).postMessage(job);
      } else {
        this.todo.push(job);
      }
    });
  }
  async startWorker() {
    this.spawned++;
    const { Worker } = await import("node:worker_threads");
    const path = (await import("node:path")).default;
    ESM_ONLY: globalThis.__dirname = await (async () => {
      {
        const { fileURLToPath } = await import("node:url");
        return path.dirname(fileURLToPath(import.meta.url));
      }
    })();
    const worker = new Worker(path.join(__dirname, "node-worker.mjs"));
    worker.on("message", (response) => {
      const callback = this.callbacks.get(response.id);
      this.callbacks.delete(response.id);
      if (response.error) {
        const message = `${response.error.name}: ${response.error.message}`;
        let ref;
        if (response.error.type in globalThis) {
          ref = new globalThis[response.error.type](message);
        } else {
          ref = new Error(message);
        }
        ;
        const error = ref;
        try {
          error.name = response.error.name;
        } catch (e) {
        }
        callback.reject(error);
      } else {
        let ref1;
        if (ref1 = response.result?.sourceMap) {
          const sourceMap = ref1;
          response.result.sourceMap = new SourceMap(sourceMap.source);
          Object.assign(response.result.sourceMap, sourceMap);
        }
        let ref2;
        if (ref2 = callback.job.args[1]?.errors) {
          const errors = ref2;
          errors.splice(0, 1 / 0, ...response.errors);
        }
        callback.resolve(response.result);
      }
      if (this.spawned > this.threads) {
        this.spawned--;
        return worker.terminate();
      } else if (this.todo.length) {
        return worker.postMessage(this.todo.shift());
      } else {
        this.idle.push(worker);
        return worker.unref();
      }
    });
    worker.on("error", (error) => {
      return console.error("Civet worker failed:", error);
    });
    return worker;
  }
  setThreads(threads1) {
    this.threads = threads1;
    while (this.spawned > this.threads) {
      if (!this.idle.length) {
        return;
      }
      this.spawned--;
      this.idle.pop().terminate();
    }
  }
};

// unplugin-civet:/Users/greghuc/workspace/Civet/source/main.civet.jsx
var { SourceMap: SourceMap2 } = sourcemap_civet_exports;
var ParseErrors = class extends Error {
  name = "ParseErrors";
  errors;
  constructor(errors) {
    const message = errors.map(($) => $.message).join("\n");
    super(errors.map(($1) => $1.message).join("\n"));
    this.message = message;
    this.errors = errors;
  }
};
var uncacheable = /* @__PURE__ */ new Set([
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
var workerPool;
function compile(src, options) {
  if (!(process.env.CIVET_THREADS == 0)) {
    const threads = parseInt(options?.threads ?? process.env.CIVET_THREADS, 10);
    if (threads === 0) {
      workerPool?.setThreads(0);
    } else if (!isNaN(threads) && threads > 0 && !options.sync) {
      if (workerPool != null) {
        workerPool.setThreads(threads);
      } else {
        workerPool = new WorkerPool(threads);
      }
      return workerPool.run("compile", src, { ...options, threads: 0 });
    }
  }
  if (!options) {
    options = {};
  } else {
    options = { ...options };
  }
  options.parseOptions = { ...options.parseOptions };
  const filename2 = options.filename || "unknown";
  if (filename2.endsWith(".coffee") && !/^(#![^\r\n]*(\r\n|\n|\r))?\s*['"]civet/.test(src)) {
    options.parseOptions.coffeeCompat = true;
  }
  const { hits, trace, noCache } = options;
  let events;
  if (!noCache) {
    events = makeCache({
      hits: !!hits,
      trace: !!trace
    });
  }
  let ast;
  try {
    ast = parseProgram(src, {
      parseOptions: options.parseOptions,
      sync: options.sync,
      filename: filename2,
      events
    });
  } finally {
    if (hits || trace) {
      import("node:fs").then(function({ writeFileSync }) {
        let ref;
        if ((ref = events?.meta) && typeof ref === "object" && "logs" in ref) {
          const { logs } = ref;
          if (trace) {
            writeFileSync(trace, logs.join("\n"));
          }
        }
        if (hits) {
          let ref1;
          if (ref1 = events?.meta.hits) {
            const hitData = ref1;
            let total = 0;
            const data = [...hitData.entries()];
            const counts = data.sort(([, a], [, b]) => b - a).map(([k, v]) => {
              total += v;
              return `${k}: ${v}`;
            }).join("\n");
            const hitSummary = `Total: ${total}

${counts}`;
            return writeFileSync(hits, hitSummary);
          }
          ;
          return;
        }
        ;
        return;
      });
    }
  }
  const throwOnErrors = options.errors == null;
  function rest(ast2) {
    options = options;
    if (!(options.ast === "raw")) {
      ast2 = prune(ast2);
    }
    if (options.ast) {
      return ast2;
    }
    function checkErrors() {
      if (!throwOnErrors) {
        return;
      }
      options = options;
      if (options.errors?.length) {
        throw new ParseErrors(options.errors);
      }
      ;
      return;
    }
    if (options.sourceMap || options.inlineMap) {
      options.sourceMap = new SourceMap2(src);
      const code = generate_civet_default(ast2, options);
      checkErrors();
      if (options.inlineMap) {
        return `${code}
${options.sourceMap.comment(filename2, filename2 + ".tsx")}`;
      } else {
        return {
          code,
          sourceMap: options.sourceMap
        };
      }
    }
    const result = generate_civet_default(ast2, options);
    if (options.errors?.length) {
      delete options.errors;
      options.sourceMap = new SourceMap2(src);
      generate_civet_default(ast2, options);
      checkErrors();
    }
    return result;
  }
  if (ast.then != null) {
    return ast.then(rest);
  } else {
    return rest(ast);
  }
}
var makeCache = function({ hits, trace } = {}) {
  const meta = {};
  let hitCount;
  if (hits) {
    hitCount = /* @__PURE__ */ new Map();
    meta.hits = hitCount;
  }
  let logs;
  if (trace) {
    logs = [];
    meta.logs = logs;
  }
  const stateCache = new StateCache();
  const stack = [];
  const events = {
    meta,
    enter: function(ruleName, state2) {
      if (hits) {
        hitCount.set(ruleName, (hitCount.get(ruleName) || 0) + 1);
      }
      if (uncacheable.has(ruleName)) {
        return;
      }
      const [stateKey, tagKey] = getStateKey();
      const key = [tagKey, stateKey, state2.pos, ruleName];
      if (stateCache.has(key)) {
        const result = stateCache.get(key);
        if (trace) {
          logs.push("".padStart(stack.length * 2, " ") + ruleName + ":" + state2.pos + "\u{1F4B0}" + (result ? "\u2705" : "\u274C"));
        }
        return {
          cache: result ? { ...result } : void 0
        };
      }
      if (trace) {
        logs.push("".padStart(stack.length * 2, " ") + ruleName + ":" + state2.pos + "{");
        stack.push(ruleName);
      }
      return;
    },
    exit: function(ruleName, state2, result) {
      if (uncacheable.has(ruleName)) {
        if (trace) {
          logs.push("".padStart(stack.length * 2, " ") + ruleName + ":" + state2.pos + "\u26A0\uFE0F " + (result ? "\u2705" : "\u274C"));
        }
        return;
      }
      const [stateKey, tagKey] = getStateKey();
      const key = [tagKey, stateKey, state2.pos, ruleName];
      if (result != null) {
        result = { ...result };
      }
      stateCache.set(key, result);
      if (getConfig().verbose && result) {
        console.log(`Parsed ${JSON.stringify(state2.input.slice(state2.pos, result.pos))} [pos ${state2.pos}-${result.pos}] as ${ruleName}`);
      }
      if (trace) {
        stack.pop();
        logs.push("".padStart(stack.length * 2, " ") + ruleName + ":" + state2.pos + "} " + (result ? "\u2705" : "\u274C"));
      }
      return;
    }
  };
  return events;
};
var isCompileError = function(err) {
  return err instanceof import_lib2.ParseError || err instanceof ParseErrors;
};
var main_civet_default = { parse, parseProgram, ParseError: import_lib2.ParseError, ParseErrors, generate: generate_civet_default, sourcemap: sourcemap_civet_exports, SourceMap: SourceMap2, compile, isCompileError };
var export_ParseError = import_lib2.ParseError;
export {
  export_ParseError as ParseError,
  ParseErrors,
  SourceMap2 as SourceMap,
  compile,
  main_civet_default as default,
  generate_civet_default as generate,
  isCompileError,
  lib_civet_exports as lib,
  parse,
  parseProgram,
  prune,
  sourcemap_civet_exports as sourcemap
};
