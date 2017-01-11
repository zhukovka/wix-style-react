export function convertFromUxLangToCss(ux = '') {
  return ux.toLowerCase().replace('.', '_');
}

export function convertFromCssToUxLang(css = '') {
  return css.toUpperCase().replace('_', '.');
}
