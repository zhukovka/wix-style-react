module.exports = (file, api, options) => {
  const j = api.jscodeshift;
  const driverNames = options.driver ? options.driver.split(',') : ['driver'];

  const root = j(file.source);
  addAsync(root, j);

  /* Knwon Issue #1
   * In this case, we should NOT add an `await`:
   *
   * expect(driver.getErrorMessage()).rejects.toThrow(Error);
   */

  /* Known Issue #2
   *In this case we should add paranthesis (assuming that driver's don't have nested methods)
   *
   *input:
   *driver.someMethod()[0]
   *driver.someMethod().someOtherMethod()
   *
   *output:
   *(await driver.someMethod())[0]
   *(await driver.someMethod()).someOtherMethod()
   */
  driverNames.forEach(driverName => addAwait(driverName, root, j));
  return root.toSource();
};

function addAsync(root, j) {
  root
    .find(j.CallExpression, {
      callee: {
        type: 'Identifier',
        name: 'it',
      },
    })
    .forEach(path => {
      if (path.value.arguments[1].type === 'ArrowFunctionExpression') {
        path.value.arguments[1].async = true;
      }
    });
}

function addAwait(driverName, root, j) {
  root
    .find(j.CallExpression, {
      callee: {
        type: 'MemberExpression',
        object: {
          type: 'Identifier',
          name: driverName,
        },
      },
    })
    .forEach(path => {
      const parentType = path.parentPath.value.type;
      if (parentType !== 'AwaitExpression') {
        j(path).replaceWith(j.awaitExpression(path.value));
      }
    });
}
