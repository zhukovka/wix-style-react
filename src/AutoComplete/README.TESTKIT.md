# AutoComplete testkits

> Autocomplete

## AutoComplete TestKit API

| method | arguments | returned value | description |
|--------|-----------|----------------|-------------|
| getInput | - | element | returns autocomplete input element |
| getDropdown | - | element | returns autocomplete dropdown element |
| getDropdownItem | index | element | returns autocomplete specific item in dropdown |
| getDropdownItemsCount | - | number | returns the number of suggested items in autocomplete |
| exists | - | bool | fulfilled if element in the DOM |
| element | - | element | returns the driver element |
| click | - | - | clicks on the button |

## Usage Example

```javascript
  import React from 'react';
  import {autoCompleteTestkitFactory} from 'wix-style-react/dist/testkit/protractor';
  import {autoCompleteTestkitFactory as enzymeAutoCompleteTestkitFactory} from 'wix-style-react/dist/testkit/protractor';

  /***************
   enzyme example
  ***************/

  const dataHook = 'myDataHook';
  const wrapper = mount(<div/><AutoComplete dataHook={dataHook}/></div>);
  const testkit = enzymeAutoCompleteTestkitFactory({wrapper, dataHook});

  expect(testkit.driver.exists()).toBeTruthy();

  /**********************
   ReactTestUtils example
  **********************/

  const div = document.createElement('div');
  const dataHook = 'myDataHook';
  const wrapper = div.appendChild(
    ReactTestUtils.renderIntoDocument(<div/><AutoComplete dataHook={dataHook}/></div>, {dataHook})
  );
  const testkit = autoCompleteTestkitFactory({wrapper, dataHook});

  expect(testkit.driver.exists()).toBeTruthy();

  /*******************
   protractor example
  *******************/

  import {autoCompleteTestkitFactory, waitForVisibilityOf} from 'wix-style-react/dist/testkit/protractor';

  //The autocomplete element for the following test should look like:
  //<AutoComplete dataHook='myDataHook'/>

  const driver = autoCompleteTestkitFactory({dataHook: 'myDataHook'});

  browser.get(appUrl); //application url

  waitForVisibilityOf(driver.element(), 'Cannot find AutoComplete')
     .then(() => {
        driver.click();
        driver.getDropdownItem(0).click();

        expect(driver.getInput().getAttribute('value')).toBe('First option');
     });

```
