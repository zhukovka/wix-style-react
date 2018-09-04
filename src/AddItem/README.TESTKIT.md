# AddItem Testkits

> AddItem

## AddItem TestKit API

| method            | arguments | returned value | description                              |
| ----------------- | --------- | -------------- | ---------------------------------------- |
| exists            | -         | boolean        | returns true if element in the DOM       |
| element           | -         | element        | returns the driver element               |
| getText           | -         | string         | returns value of action text             |
| textExists        | -         | boolean        | true if passed children in string exists |
| getTooltipDriver  | -         | function       | returns driver of tooltip                |
| getTooltipContent | -         | string         | returns value of tooltip content         |
| click             | -         | -              | clicks on element                        |

## AddItem Protractor TestKit API

| method  | arguments | returned value | description       |
| ------- | --------- | -------------- | ----------------- |
| element | -         | element        | returns element   |
| click   | -         | -              | clicks on element |

## Usage Example

> Unit testing example

```javascript
  import React from 'react';
  import {addItemTestkitFactory} from 'wix-style-react/dist/testkit';
  import {addItemTestkitFactory as enzymeAddItemTestkitFactory} from 'wix-style-react/dist/testkit/enzyme';

  /***************
   enzyme example
  ***************/

  const dataHook = 'myDataHook';
  const wrapper = mount(<div/><AddItem dataHook={dataHook}/></div>);
  const testkit = enzymeAddItemTestkitFactory({wrapper, dataHook});

  //Do tests
  expect(testkit.exists()).toBeTruthy();

  /**********************
   ReactTestUtils example
  **********************/

  const div = document.createElement('div');
  const dataHook = 'myDataHook';
  const wrapper = div.appendChild(
    ReactTestUtils.renderIntoDocument(<div/><AddItem dataHook={dataHook}/></div>, {dataHook})
  );
  const testkit = addItemTestkitFactory({wrapper, dataHook});

  //Do tests
  expect(testkit.exists()).toBeTruthy();
```

> E2E example

```javascript
//Element should be rendered with a data-hook into the DOM
<AddItem dataHook="myDataHook" />;

/*******************
   protractor example
  *******************/

import {
  addItemTestkitFactory,
  waitForVisibilityOf
} from "wix-style-react/dist/testkit/protractor";

//Create an element testkit via the data-hook attribute
const testkit = addItemTestkitFactory({ dataHook: "myDataHook" });

browser.get(appUrl); //Your application url

waitForVisibilityOf(testkit.element(), "Cannot find AddItem").then(() => {
  //Do tests
  expect(testkit.element().isDisplayed()).toBeTruthy();
});
```
