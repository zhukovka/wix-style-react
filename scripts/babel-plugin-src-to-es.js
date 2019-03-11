// This plugin transpiles wix-ui-core/dist/src/SomeFile into wix-ui-core/dist/src/SomeFile
// and vice versa.

module.exports = function(babel) {
  const { types: t } = babel;

  return {
    name: 'src-to-es',
    visitor: {
      ImportDeclaration(path, state) {
        const {
          esToSrc = false,
          libsName = ['wix-ui-core', 'wix-ui-backoffice'],
        } = state.opts;
        const originalPath = path.node.source.value;
        libsName.forEach(libName => {
          if (originalPath.includes(libName)) {
            const [fromDistPath, toDistPath] = !esToSrc
              ? [`${libName}/dist/src`, `${libName}/dist/es/src`]
              : [`${libName}/dist/es/src`, `${libName}/dist/src`];

            path.node.source.value = originalPath.replace(
              fromDistPath,
              toDistPath,
            );

            if (
              new RegExp(`${libName}/(\\w|\\-)+$`).test(path.node.source.value)
            ) {
              const compName = path.node.source.value.split('/').pop();
              path.node.source.value = path.node.source.value.replace(
                `${libName}/${compName}`,
                `${libName}/dist/es/src/components/${compName}`,
              );
            }
          }
        });
      },
    },
  };
};
