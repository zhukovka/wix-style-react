module.exports = (file, api) => {
  const j = api.jscodeshift;

  const root = j(file.source);
  addAsync(root, j);

  /* Knwon Issue #1 
    In this case, we should NOT add an `await`:

    expect(driver.getErrorMessage()).rejects.toThrow(Error);
    */

  /* Knwon Issue #2
    In this case, we should NOT add an `await`:
    
    driver.someMethod().someOtherMethod()

    We don't know id `someMethod` is async or not.
    */
  addAwait('driver', root, j);
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
