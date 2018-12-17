# IconButton Testkits

> IconButton

## IconButton TestKit API

| method           | arguments | returned value | description                        |
| ---------------- | --------- | -------------- | ---------------------------------- |
| exists           | -         | boolean        | returns true if element in the DOM |
| element          | -         | element        | returns the component element      |
| click            | -         | -              | clicks on the button               |
| isButtonDisabled | -         | boolean        | returns true if button is disabled |

## ReactTestUtils Example

```javascript
import React from 'react';
import ReactTestUtils from 'react-dom/test-utils';
import IconButton from 'wix-style-react/IconButton';
import { iconButtonTestkitFactory } from 'wix-style-react/dist/testkit';

const div = document.createElement('div');
const dataHook = 'myDataHook';

const component = (
  <div>
    <IconButton dataHook={dataHook} />
  </div>
);

const wrapper = div.appendChild(
  ReactTestUtils.renderIntoDocument(component, { dataHook })
);

const testkit = iconButtonTestkitFactory({ wrapper, dataHook });

//Do tests
expect(testkit.exists()).toBeTruthy();
```

## Enzyme Example

```javascript
import React from 'react';
import { mount } from 'enzyme';
import IconButton from 'wix-style-react/IconButton';
import { iconButtonTestkitFactory } from 'wix-style-react/dist/testkit/enzyme';

const dataHook = 'myDataHook';
const wrapper = mount(
  <div>
    <IconButton dataHook={dataHook} />
  </div>
);

const testkit = iconButtonTestkitFactory({ wrapper, dataHook });

//Do tests
expect(testkit.exists()).toBeTruthy();
```

## Puppeteer Example

> Element should be rendered with a data-hook into the DOM `<IconButton dataHook="myDataHook" />`

```javascript
import puppeteer from 'puppeteer';
import { iconButtonTestkitFactory } from 'wix-style-react/dist/testkit/puppeteer';

//puppeteer setup
const browser = await puppeteer.launch();
const page = await browser.newPage();

//Create an element testkit via the data-hook attribute
const testkit = await iconButtonTestkitFactory({
  dataHook: 'myDataHook',
  page
});
await page.goto('/page-where-button-appears'); //Your application url

expect(await testkit.exists()).toBeTruthy();
```

## Protractor Example

> Element should be rendered with a data-hook into the DOM `<IconButton dataHook="myDataHook" />`

```javascript
import { iconButtonTestkitFactory } from 'wix-style-react/dist/testkit/protractor';

//Create an element testkit via the data-hook attribute
const testkit = iconButtonTestkitFactory({ dataHook: 'myDataHook' });

await browser.get('/page-where-button-appears'); //Your application url

expect(await testkit.exists()).toBeTruthy();
```
