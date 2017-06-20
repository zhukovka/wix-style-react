# Loader Testkits

> Loader

## Loader TestKit API

| method | arguments | returned value | description |
|--------|-----------|----------------|-------------|
| hasText | - | boolean | true if the element has text |
| getText | - | string | returns the element text |
| getColor | - | string | returns the loader color ('blue' or 'white') |
| isSmall | - | boolean | true when using the small loader |
| isMedium | - | boolean | true when using the medium loader |
| isLarge | - | boolean | true when using the large loader |
| exists | - | boolean | fulfilled if element in the DOM |
| setProps | json | element | returns a clone of this element with the new props from the json | 

## Usage Example

> Unit testing example

```javascript
  import React from 'react';
  import {loaderTestkitFactory} from 'wix-style-react/dist/testkit';
  import {loaderTestkitFactory as enzymeLoaderTestkitFactory} from 'wix-style-react/dist/testkit/enzyme';

  /***************
   enzyme example
  ***************/

  const dataHook = 'myDataHook';
  const wrapper = mount(<div/><Loader dataHook={dataHook}/></div>);
  const testkit = enzymeLoaderTestkitFactory({wrapper, dataHook});

  //Do tests
  expect(testkit.exists()).toBeTruthy();

  /**********************
   ReactTestUtils example
  **********************/

  const div = document.createElement('div');
  const dataHook = 'myDataHook';
  const wrapper = div.appendChild(
    ReactTestUtils.renderIntoDocument(<div/><Loader dataHook={dataHook}/></div>, {dataHook})
  );
  const testkit = loaderTestkitFactory({wrapper, dataHook});

  //Do tests
  expect(testkit.exists()).toBeTruthy();
```
> E2E example

```javascript
  //Element should be rendered with a data-hook into the DOM
  <Loader dataHook='myDataHook'/>

  /*******************
   protractor example
  *******************/

  import {loaderTestkitFactory, waitForVisibilityOf} from 'wix-style-react/dist/testkit/protractor';

  //Create an element testkit via the data-hook attribute
  const testkit = loaderTestkitFactory({dataHook: 'myDataHook'});

  browser.get(appUrl); //Your application url

  waitForVisibilityOf(testkit.element(), 'Cannot find Loader')
     .then(() => {
        //Do tests
        expect(testkit.element().isDisplayed()).toBeTruthy();
     });

```
