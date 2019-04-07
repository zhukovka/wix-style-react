# MultiSelect Testkits

## Exposed Drivers
The `<MultiSelect/>` TestKit is exposing the following drivers:
* Its own driver (see examples below).
* [inputDriver](/?activeTab=TestKit&addons=0&full=0&panelRight=0&selectedKind=Components&selectedStory=Input&stories=1)
* [dropdownLayoutDriver](?activeTab=Testkit&addons=0&full=0&panelRight=0&selectedKind=11.%20Pickers%20and%20Selectors&selectedStory=11.1%20DropdownLayout&stories=1)
* [tagDriver](?activeTab=Testkit&addons=0&full=0&panelRight=0&selectedKind=12.%20Other&selectedStory=12.5%20Tag&stories=1) using the `getTagDriverByTagId(id)` function

## MultiSelect.driver.js

| Property | arguments | returned value | description |
|--------|-----------|----------------|-------------|
| clickOnInputWrapper | - | - | click on the input element wrapper |
| inputWrapperHasFocus | - | boolean | returns is the input is focused |
| numberOfTags | - | number | returns the number of tags selected in the input |
| getTagLabelAt | index | string | returns the label of the tag given it's index |
| pressCommaKey | - | - | press the comma key in the input field |
| getTagDriverByTagId | tagId | object | returns the `tagDriver` for the specified tag id |
| setProps | json | element | returns a clone of this element with the new props from the json |
| getMaxHeight | - | string | returns the max height of the component |

## Code Example

```javascript
  import React from 'react';
  import {multiSelectTestkitFactory} from 'wix-style-react/dist/testkit';
  import {multiSelectTestkitFactory as enzymeMultiSelectTestkitFactory} from 'wix-style-react/dist/testkit/enzyme';

  /***************
   enzyme example
  ***************/

  const dataHook = 'myDataHook';
  const tags = [{value: 'Alabama', id: 'Alabama'}];
  const wrapper = mount(<MultiSelect tags={tags} autoFocus={true} dataHook={dataHook}/>);
  const multiSelectTestkit = enzymeMultiSelectTestkitFactory({wrapper, dataHook});


  //Do tests
  expect(multiSelectTestkit.driver.exists()).toBeTruthy();
  expect(multiSelectTestkit.inputDriver.exists()).toBeTruthy();
  expect(multiSelectTestkit.dropdownLayoutDriver.exists()).toBeTruthy();
  expect(multiSelectTestkit.driver.getTagDriverByTagId('Alabama').exists()).toBeTruthy();
```

## MultiSelect.protractor.driver.js

| Property | arguments | returned value | description |
|--------|-----------|----------------|-------------|
| addTag | - | - | add a tag for the first item in the options |
| element | - | element | return the element |
| getHeight | - | string | returns the element height in px |
| getWidth | - | string | returns the element width in px |

## Code Example

```javascript
import {waitForVisibilityOf} from 'wix-ui-test-utils/protractor';
import {multiSelectTestkitFactory as protractorMultiSelectTestkitFactory} from 'wix-style-react/dist/testkit/protractor';

await browser.get(testPageUrl);

const dataHook = 'myDataHook';
const multiSelectDriver = protractorMultiSelectTestkitFactory({dataHook});

await waitForVisibilityOf(multiSelecxtDriver.getElement());
expect(await multiSelectDriver.exists()).toBeTruthy();
```
