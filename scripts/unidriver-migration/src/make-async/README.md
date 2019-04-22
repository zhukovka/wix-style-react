# make-async

codemod for converting a ReactDOM spec (sync) test, to an async test.

- Adding `async` to all invokations of `it` methods 2nd argument
- Adding `await` to all invokations of driver methods.

## Options

### Driver Variable Name

The default driver variable name is `driver`.

You can specify a different name (or names)

```bash
npm run make-async-spec src/Comp/Comp.spec.js -- --driver driver,inputDriver,dropdownLayoutDriver
```