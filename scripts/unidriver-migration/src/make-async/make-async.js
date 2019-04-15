module.exports = (file, api) => {
  const j = api.jscodeshift;

  const root = j(file.source);
  addAsync(root, j);
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
