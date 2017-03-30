# ToggleSwitch Testkits

## ToggleSwitch Unit TestKit API

| method | arguments | returned value | description |
|--------|-----------|----------------|-------------|
| given.size | oneOf['small', 'large'] | driver | Sets the size of the ToggleSwitch |
| given.checked | bool | driver | Sets the 'checked' property of the ToggleSwitch |
| given.onChange | func | driver | Sets the change listener of the ToggleSwitch |
| when.created | - | driver | Renders ToggleSwitch and returns its driver |
| when.changed | - | driver | Triggers 'change' event of the ToggleSwitch |
| get.element | - | node | Returns DOM node of the ToggleSwitch |
| get.checked | - | bool | Returns 'checked' value of the ToggleSwitch |
| get.isSmall | - | bool | Returns true if the ToggleSwitch is small |
| get.isLarge | - | bool | Returns true if the ToggleSwitch is large |

### Usage Example

```javascript
  import React from 'react';
  import {toggleSwitchTestkitFactory} from 'wix-style-react/dist/testkit';
  import {toggleSwitchTestkitFactory as enzymeToggleSwitchTestkitFactory} from 'wix-style-react/dist/testkit/enzyme';

  /***************
   enzyme example
  ***************/

  const dataHook = 'myDataHook';
  const wrapper = mount(<div/><ToggleSwitch dataHook={dataHook}/></div>);
  const driver = enzymeToggleSwtichTestkitFactory({wrapper, dataHook});

  //Do tests
  expect(driver.get.element()).toBeDefined();

  /**********************
   ReactTestUtils example
  **********************/

  const div = document.createElement('div');
  const dataHook = 'myDataHook';
  const wrapper = div.appendChild(
    ReactTestUtils.renderIntoDocument(<div/><ToggleSwitch dataHook={dataHook}/></div>, {dataHook})
  );
  const driver = toggleSwitchTestkitFactory({wrapper, dataHook});

  //Do tests
  expect(driver.get.element()).toBeDefined();
```

## ToggleSwitch E2E TestKit API

| method | arguments | returned value | description |
|--------|-----------|----------------|-------------|
| element | - | element | Returns the ToggleSwitch element |
| click | - | - | Toggles the switch |
| checked | - | bool | Returns true if ToggleSwitch is checked |
| isSmall | - | bool | Returns true if ToggleSwitch is small |
| isLarge | - | bool | Returns true if ToggleSwitch is large |


### Usage Example

```javascript
  //Element should be rendered with a data-hook into the DOM
  <ToggleSwitch dataHook='myDataHook'/>

  /*******************
   protractor example
  *******************/

  import {toggleSwitchTestkitFactory, waitForVisibilityOf} from 'wix-style-react/dist/testkit/protractor';

  //Create an element testkit via the data-hook attribute
  const testkit = toggleSwitchTestkitFactory({dataHook: 'myDataHook'});

  browser.get(appUrl); //Your application url

  waitForVisibilityOf(testkit.element(), 'Cannot find ToggleSwitch')
     .then(() => {
        //Do tests
        expect(testkit.element().isDisplayed()).toBeTruthy();
     });
```
