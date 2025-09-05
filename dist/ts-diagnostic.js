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
var ts_diagnostic_civet_exports = {};
__export(ts_diagnostic_civet_exports, {
  flattenDiagnosticMessageText: () => flattenDiagnosticMessageText,
  remapPosition: () => remapPosition,
  remapRange: () => remapRange
});
module.exports = __toCommonJS(ts_diagnostic_civet_exports);
function remapPosition(position, sourcemapLines) {
  if (!sourcemapLines) return position;
  const { line, character } = position;
  const textLine = sourcemapLines[line];
  if (!textLine?.length) return position;
  let i = 0, p = 0, l = textLine.length, lastMapping, lastMappingPosition = 0;
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
  if (lastMapping) {
    const srcLine = lastMapping[2];
    const srcChar = lastMapping[3];
    const newChar = srcChar + character - lastMappingPosition;
    return {
      line: srcLine,
      character: newChar
    };
  } else {
    return position;
  }
}
function remapRange(range, sourcemapLines) {
  return {
    start: remapPosition(range.start, sourcemapLines),
    end: remapPosition(range.end, sourcemapLines)
  };
}
function flattenDiagnosticMessageText(diag, indent = 0) {
  if (typeof diag === "string") {
    return diag;
  } else if (diag === void 0) {
    return "";
  }
  let result = "";
  if (indent) {
    result += "\n";
    for (let i = 0; i < indent; i++) {
      result += "  ";
    }
  }
  result += diag.messageText;
  indent++;
  if (diag.next) {
    for (const kid of diag.next) {
      result += flattenDiagnosticMessageText(kid, indent);
    }
  }
  return result;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  flattenDiagnosticMessageText,
  remapPosition,
  remapRange
});
