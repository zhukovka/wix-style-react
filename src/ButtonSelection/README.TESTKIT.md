# ButtonSelection Testkits

> Controlled ButtonSelection

## ButtonSelection TestKit API

| method | arguments | returned value | description |
|--------|-----------|----------------|-------------|
| getButtonsNames | - | arrayOf(string)	 | returns an array of button names |
| getButtonsClasses | - | arrayOf(string) | returns an array of button classes |
| getSelectedButton | - | string | returns the name of the selected button |
| selectByValue | buttonName | - | select a button by button name |
| exists (Only in Unit Test) | - | bool | fulfilled if element in the DOM |
| element (Only in E2E) | - | element | returns the driver element |

## Usage Example

> Unit Testing Example
```javascript
  import React from 'react';
  import {buttonSelectionTestkitFactory} from 'wix-style-react/dist/testkit';
  import {buttonSelectionTestkitFactory as enzymeButtonSelectionTestkitFactory} from 'wix-style-react/dist/testkit/enzyme';

  /***************
   enzyme example
  ***************/

  const dataHook = 'myDataHook';
  const wrapper = mount(<div/><ButtonSelection dataHook={dataHook}/></div>);
  const testkit = enzymeButtonSelectionTestkitFactory({wrapper, dataHook});

  //Do tests
  expect(testkit.exists()).toBeTruthy();

  /**********************
   ReactTestUtils example
  **********************/

  const div = document.createElement('div');
  const dataHook = 'myDataHook';
  const wrapper = div.appendChild(
    ReactTestUtils.renderIntoDocument(<div/><ButtonSelection dataHook={dataHook}/></div>, {dataHook})
  );
  const testkit = buttonSelectionTestkitFactory({wrapper, dataHook});

  //Do tests
  expect(testkit.exists()).toBeTruthy();
```


> E2E example
```javascript
  //Element should be rendered with a data-hook into the DOM
  <ButtonSelection dataHook='myDataHook'/>

  /**********************
   Protractor example
  **********************/

  import {buttonSelectionTestkitFactory, waitForVisibilityOf} from 'wix-style-react/dist/testkit/protractor';

  //Create an element testkit via the data-hook attribute
  const testkit = buttonSelectionTestkitFactory({dataHook: 'myDataHook'});

  browser.get(appUrl);  //Your application url

  waitForVisibilityOf(testkit.element(), 'Cannot find ButtonSelection')
     .then(() => {
       //Do tests
        expect(testkit.element().isDisplayed()).toBeTruthy();
     });
```
