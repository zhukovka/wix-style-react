// This plugin transpiles wix-ui-core/dist/src/SomeFile into wix-ui-core/dist/es/src/SomeFile
// and vice versa.

module.exports = function(babel) {
  const { types: t } = babel;

  return {
    name: 'src-to-es',
    visitor: {
      ImportDeclaration(path, state) {
        const { esToSrc = false, libName = 'wix-ui-core' } = state.opts;
        const originalPath = path.node.source.value;
        if (originalPath.includes(libName)) {
          const [fromPath, toPath] = !esToSrc
            ? [`${libName}/dist/src`, `${libName}/dist/es/src`]
            : [`${libName}/dist/es/src`, `${libName}/dist/src`];
          path.node.source.value = originalPath.replace(fromPath, toPath);
        }
      },
    },
  };
};
