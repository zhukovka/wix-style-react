export function toUXlang(cssMap = {}) {
  const transformed = {};

  Object.keys(cssMap).forEach(key => {
    transformed[key.toUpperCase()] = cssMap[key];
  });

  return transformed;
}
