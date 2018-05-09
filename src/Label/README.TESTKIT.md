# Label Testkits

> Label

## Label TestKit API

| method | arguments | returned value | description |
|--------|-----------|----------------|-------------|
| getLabelText | - | string | returns Label element text |
| getAssociatedInput | - | element | returns Label associated input element |
| getClassList | - | string | returns the list of classes that Label element has |
| click | - | - | clicks on the label |
| exists (Only in Unit Test) | - | bool | fulfilled if element in the DOM |
| element (Only in E2E) | - | element | returns the driver element |

### Puppeteer

| method | arguments | returned value | description |
|--------|-----------|----------------|-------------|
| element | - | element | returns the element |
| click | - | - | clicks on the label |
| getLabelText | - | string | get label text |

## Usage Example

> Unit testing example

```javascript
  import React from 'react';
  import {labelTestkitFactory} from 'wix-style-react/dist/testkit';
  import {labelTestkitFactory as enzymeLabelTestkitFactory} from 'wix-style-react/dist/testkit/enzyme';

  /***************
   enzyme example
  ***************/

  const dataHook = 'myDataHook';
  const wrapper = mount(<div/><Label dataHook={dataHook}/></div>);
  const testkit = enzymeLabelTestkitFactory({wrapper, dataHook});

  //Do tests
  expect(testkit.exists()).toBeTruthy();

  /**********************
   ReactTestUtils example
  **********************/

  const div = document.createElement('div');
  const dataHook = 'myDataHook';
  const wrapper = div.appendChild(
    ReactTestUtils.renderIntoDocument(<div/><Label dataHook={dataHook}/></div>, {dataHook})
  );
  const testkit = labelTestkitFactory({wrapper, dataHook});

  //Do tests
  expect(testkit.exists()).toBeTruthy();
```
> E2E example

```javascript
  //Element should be rendered with a data-hook into the DOM
  <Label dataHook='myDataHook'/>

  /*******************
   protractor example
  *******************/

  import {labelTestkitFactory, waitForVisibilityOf} from 'wix-style-react/dist/testkit/protractor';

  //Create an element testkit via the data-hook attribute
  const testkit = labelTestkitFactory({dataHook: 'myDataHook'});

  browser.get(appUrl); //Your application url

  waitForVisibilityOf(testkit.element(), 'Cannot find Label')
     .then(() => {
        //Do tests
        expect(testkit.element().isDisplayed()).toBeTruthy();
     });

```

```javascript
/*******************
   puppeteer example
  *******************/

  import puppeteer from 'puppeteer';
  import {labelTestkitFactory} from 'wix-style-react/dist/testkit/puppeteer';

  //puppeteer setup
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  //Create an element testkit via the data-hook attribute
  const testkit = await labelTestkitFactory({dataHook: 'myDataHook', page});
  await page.goto(appUrl); //Your application url

  expect(await testkit.getLabelText()).to.equal('my test');
```

