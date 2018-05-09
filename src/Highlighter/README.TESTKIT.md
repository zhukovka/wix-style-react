# Highlighter Testkit

> Highlighter

## Highlighter Unit TestKit API

| method | arguments | returned value | description |
|--------|-----------|----------------|-------------|
| html | - | string | returns innerHTML |
| exists | - | bool | fulfilled if element in the DOM |
| getElement | - | element | returns the driver element |
| setProps | json | element | returns a clone of this element with the new props from the json |

## Highlighter e2e TestKit API

| method | arguments | returned value | description |
|--------|-----------|----------------|-------------|
| html | - | string | returns innerHTML |
| getElement | - | element | returns the driver element |

## Usage Example

> Unit testing example

```javascript
  import React from 'react';
  import {highlighterTestkitFactory} from 'wix-style-react/dist/testkit';
  import {highlighterTestkitFactory as enzymeHighlighterTestkitFactory} from 'wix-style-react/dist/testkit/enzyme';

  /***************
   enzyme example
  ***************/

  const dataHook = 'myDataHook';
  const wrapper = mount(<div/><Highlighter dataHook={dataHook}/></div>);
  const testkit = enzymeHighlighterTestkitFactory({wrapper, dataHook});

  //Do tests
  expect(testkit.exists()).toBeTruthy();

  /**********************
   ReactTestUtils example
  **********************/

  const div = document.createElement('div');
  const dataHook = 'myDataHook';
  const wrapper = div.appendChild(
    ReactTestUtils.renderIntoDocument(<Highlighter dataHook={dataHook} match="llo">Hello world</Highlighter>)
  );
  const testkit = highlighterTestkitFactory({wrapper, dataHook});

  //Do tests
  expect(testkit.exists()).toBeTruthy();
```
> E2E example

```javascript
  //Element should be rendered with a data-hook into the DOM
  <Highlighter dataHook='myDataHook'/>

  /*******************
   protractor example
  *******************/

  import {highlighterTestkitFactory, waitForVisibilityOf} from 'wix-style-react/dist/testkit/protractor';

  //Create an element testkit via the data-hook attribute
  const testkit = highlighterTestkitFactory({dataHook: 'myDataHook'});

  browser.get(appUrl); //Your application url

  waitForVisibilityOf(testkit.getElement(), 'Cannot find Highlighter')
     .then(() => {
        //Do tests
        expect(testkit.getElement().isDisplayed()).toBeTruthy();
     });
```
