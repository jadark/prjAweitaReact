export const limpiarParrafoVacio = (str) => {
  let clearStr = '';
  if (str) {
    clearStr = str.replace(/<(p|div)\b[^>]*>/gi, "<p>");
  }
  return clearStr;
}

export const limpiarAnchorHrefWhitespace = (str) => {
  let clearAnchor = '';
  const regexClear = /<a[^>]+href=\"([^"]*)(\s)(.*)\"[^>]*>/gi;
  if (str) {
    clearAnchor = str.replace(regexClear, "<a href='https://elpopular.pe/'>");
  }
  return clearAnchor;
}

export const limpiarAtributo = (str) => {
  let clearAttribute = '';
  const regexClearStyle = /(style|a)=\"[^\"]*\"/gi;
  if (str) {
    clearAttribute = str.replace(regexClearStyle, '');
  }
  return clearAttribute;
}

export const limpiarScript = (str) => {
  let clearScript = '';
  const regexClearScript = /<script.*?"(http.*?)"><\/script>/gi;
  if(str) {
    clearScript = str.replace(regexClearScript, '');
  }
  return clearScript;
}