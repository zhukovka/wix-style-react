# Modal component

> General modal container.

## Modal TestKit API


### Enzyme / ReactTestUtils
| method | arguments | returned value | description |
|--------|-----------|----------------|-------------|
| isOpen | - | boolean | true when to module is open |
| itThemeExist | string | boolean | true if theme <arg> exists in the modal |
| isScrollable | - | boolean | true if the modal is scrollable |
| clickOnOverlay | - | - | click on the modal overlay (helpful for testing if the modal is dismissed) |
| exists | - | boolean | true if the modal is on the DOM |
| setProps | json | element | returns a clone of this element with the new props from the json | 

## Usage Example

> Unit testing example

```javascript
  import React from 'react';
  import {modalTestkitFactory} from 'wix-style-react/dist/testkit';
  import {modalTestkitFactory as enzymeModalTestkitFactory} from 'wix-style-react/dist/testkit/enzyme';

  /***************
   enzyme example
  ***************/

  const dataHook = 'myDataHook';
  const wrapper = mount(<div/><Modal {...props} dataHook={dataHook}/></div>);
  const testkit = enzymeModalTestkitFactory({wrapper, dataHook});

  //Do tests
  expect(testkit.isOpen()).toBeFalsy();

  /**********************
   ReactTestUtils example
  **********************/

  const div = document.createElement('div');
  const dataHook = 'myDataHook';
  const wrapper = div.appendChild(
    ReactTestUtils.renderIntoDocument(<div/><Modal {...props} dataHook={dataHook}/></div>, {dataHook})
  );
  const testkit = modalTestkitFactory({wrapper, dataHook});

  //Do tests
  expect(testkit.exists()).toBeTruthy();
```
