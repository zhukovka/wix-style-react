# Test Drivers

Test drivers purposes:

- Abstract component implementation.
- Make tests independent from implementation.
- Abstract complex interactions.

## Driver Types

### Unidriver

All component drivers in this library should be built with [unidriver](https://github.com/wix-incubator/unidriver). This tool allows to reuse same driver on multiple testing platforms (e.g. ReactDOM/JSDOM, Protractor, Puppeteer, etc...).

### Legacy Drivers (for existing components)

Library still has many platform specific drivers, mainly:

- `enzyme` and `vanilla` for regular dom (or JSDOM) interaction. (vanilla is a legacy BAD naming for React+JSDOM drivers)
- `protractor` for browser interaction.
- `puppeteer` for browser interaction.

We are migrating to unidriver, but in the meantime both variants exist.

### Composing UniDriver With Legacy Drivers

If `unidriver` of component is composing other drivers that don’t use unidriver:

- create `ConsumedComponent.uni.driver.js` next to component.
- start by implementing only required functions (and not the entire driver).
- open issue stating that the new `ConsumedComponent.uni.driver.js` is only partially implemented.

## Public And Private Drivers

1. **Public** drivers (`Component.uni.driver.js`) are exposed to user of components. They should be simple abstractions over common actions (for example, selecting the third element in the dropdown).
2. **Private** drivers (`Component.private.uni.driver.js`) are used for actions that are not exposed to user. For example, asserting a class name exists on some component.

Private drivers extend public ones and are used only in internal tests.

## Writing Drivers

See [Test Drivers Guidelines](./TEST_DRIVERS_GUIDELINES.md) for best-practices when writing test drivers.

## Testing Drivers

Public drivers are published code that needs to be tested.
We test them simply by using them in our component tests.

### Small But Common Gotchas

If you write a boolean driver method (e.g. `isDisabled()`), remember to test it both ways (when it's `true` and also `false`).

For example:

```js
describe('Disabled', ()=>{
  it('should NOT be disabled by default', ()=>{
    const {driver} = render(<Comp/>);
    expect(driver.isDisabled()).toBe(false);
  });

  it('should be disabled by default', ()=>{
    const {driver} = render(<Comp disabled/>);
    expect(driver.isDisabled()).toBe(true);
  })
});
```

## Exposed Testkits

1. Each component has `<ComponentName>TestkitFactory` function which is exposed as public API.
1. They are imported through a special path, depending on platform, for example:
    ```js
    import {buttonTestkitFactory} from 'wix-style-react/testkit'; // ReactDom
    import {buttonTestkitFactory} from 'wix-style-react/testkit/enzyme';
    import {buttonTestkitFactory} from 'wix-style-react/testkit/protractor';
    import {buttonTestkitFactory} from 'wix-style-react/testkit/puppeteer';
    ```
1. Testkit must be invoked with wrapper (DOM node for vanilla, enzyme wrapper for enzyme) and `dataHook`.
    ```js
    import {buttonTestkitFactory} from 'wix-style-react/testkit';
    const wrapper = ReactTestUtils.renderIntoDocument(<ComponentWhichRendersButton>);
    const driver = buttonTestkitFactory({wrapper, dataHook: 'my-button'})
    ```
1. created `driver` has `exists` method. All other methods should throw error with propper message when `testkit.exists() === false`.

### Consumer Usage example

Using wix style Button in your code:

```js
// MyForm.js

<MyForm>
  ...
  <Button dataHook="my-button" />
  ...
</MyForm>
```

Inside test:

```js
// MyForm.spec.js

import ReactTestUtils from 'react-dom/test-utils';
import { buttonTestkitFactory } from 'wix-style-react/testkit';

const wrapper = ReactTestUtils.renderIntoDocument(<MyForm...>);

// Initialize testkit:
const buttonTestkit = buttonTestkitFactory({wrapper, dataHook: 'my-button'});

// Use testkit
buttonTestkit.click();
```

If you use Enzyme:

```js
import { mount } from 'enzyme';
import { buttonTestkitFactory } from 'wix-style-react/testkit/enzyme';

const wrapper = mount(<MyForm...>);

// Initialize testkit:
const buttonTestkit = buttonTestkitFactory({wrapper, dataHook: 'my-button'});

// Use testkit
buttonTestkit.click();
```

If you use Protractor:

```js
import { buttonTestkitFactory, waitForVisibilityOf } from 'wix-style-react/testkit/protractor';

// in this case only `dataHook` is required
const buttonTestkit = buttonTestkitFactory({dataHook: 'my-button'});

// navigate to URL which renders component (Button)
browser.get(appUrl);

// waitForVisibilityOf(..) waits untill the element/elements appears, and starts the tests.
// Otherwise it will timeout and print the 2nd arg as error message.
// This function accepts an element or an array of elements
waitForVisibilityOf(driver.element(), 'Cant find Button')
  .then(() => {

    //Do actual tests here
    expect(driver.getButtonText()).toBe('Click Me!');
    driver.click();
    expect(driver.getButtonText()).toBe('Clicked!');
  });
```
