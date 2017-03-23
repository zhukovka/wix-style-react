# Checkbox testkits

> Checkbox

## Checkbox TestKit API

| method | arguments | returned value | description |
|--------|-----------|----------------|-------------|
| getInput | - | element | returns checkbox input element |
| getLabel | - | element | returns checkbox label element |
| isChecked | - | bool | fulfilled if element has class '.checked' |
| isDisabled | - | bool | fulfilled if element has class '.disabled' |
| isIndeterminate | - | bool | fulfilled if element has class '.indeterminate' |
| exists | - | bool | fulfilled if element in the DOM |
| element | - | element | returns the driver element |
| click | - | - | clicks on the button |

## Usage Example

```javascript
  import React from 'react';
  import {checkboxTestkitFactory} from 'wix-style-react/dist/testkit/protractor';
  import {checkboxTestkitFactory as enzymeCheckboxTestkitFactory} from 'wix-style-react/dist/testkit/protractor';

  /***************
   enzyme example
  ***************/

  const dataHook = 'myDataHook';
  const wrapper = mount(<div/><Checkbox dataHook={dataHook}/></div>);
  const testkit = enzymeCheckboxTestkitFactory({wrapper, dataHook});

  expect(testkit.exists()).toBeTruthy();

  /**********************
   ReactTestUtils example
  **********************/

  const div = document.createElement('div');
  const dataHook = 'myDataHook';
  const wrapper = div.appendChild(
    ReactTestUtils.renderIntoDocument(<div/><Checkbox dataHook={dataHook}/></div>, {dataHook})
  );
  const testkit = checkboxTestkitFactory({wrapper, dataHook});

  expect(testkit.exists()).toBeTruthy();

  /*******************
   protractor example
  *******************/

  import {checkboxTestkitFactory, waitForVisibilityOf} from 'wix-style-react/dist/testkit/protractor';

  //The checkbox element for the following test should look like:
  //<Checkbox dataHook='myDataHook'/>

  const driver = checkboxTestkitFactory({dataHook: 'myDataHook'});

  browser.get(appUrl); //application url

  waitForVisibilityOf(driver.element(), 'Cannot find Checkbox')
     .then(() => {
        driver.getLabel().click();
        expect(driver.getInput().isSelected()).toBeTruthy();
     });
```
