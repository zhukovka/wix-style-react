# Divider Testkits

> Divider

## Divider TestKit API

| method | arguments | returned value | description |
|--------|-----------|----------------|-------------|
| exists | - | bool | fulfilled if element in the DOM |
| getColor | - | string | get the Color from the element style attribute |
| getSize | - | number | get the Divider size |
| getDirection | - | string (horizontal/vertical) | get the Divider direction |
| getLength | - | number | get the length from the Divider component |
| getOpacity | - | number | get the opacity from the element style attribute |
| getWidth | - | string | get the width from the element style attribute |
| getHeight | - | string | get the height from the element style attribute |
| getBorder | - | string | get the border from the element style attribute |

## Usage Example

> Unit testing example

```javascript
  import React from 'react';
  import {dividerTestkitFactory} from 'wix-style-react/dist/testkit';
  import {dividerTestkitFactory as enzymeDividerTestkitFactory} from 'wix-style-react/dist/testkit/enzyme';

  /***************
   enzyme example
  ***************/

  const dataHook = 'myDataHook';
  const wrapper = mount(<div/><Divider dataHook={dataHook}/></div>);
  const testkit = enzymeDividerTestkitFactory({wrapper, dataHook});

  //Do tests
  expect(testkit.exists()).toBeTruthy();

  /**********************
   ReactTestUtils example
  **********************/

  const div = document.createElement('div');
  const dataHook = 'myDataHook';
  const wrapper = div.appendChild(
    ReactTestUtils.renderIntoDocument(<div/><Divider dataHook={dataHook}/></div>, {dataHook})
  );
  const testkit = dividerTestkitFactory({wrapper, dataHook});

  //Do tests
  expect(testkit.exists()).toBeTruthy();
```