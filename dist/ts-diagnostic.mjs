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
export {
  flattenDiagnosticMessageText,
  remapPosition,
  remapRange
};
