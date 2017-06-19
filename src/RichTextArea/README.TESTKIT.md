# RichTextArea Testkit

> RichTextArea

## RichTextArea TestKit API

| method | arguments | returned value | description |
|--------|-----------|----------------|-------------|
| exists | - | boolean | returns if the element exists |
| getButtonTypes | - | array | returns an array with the button type names |
| clickBoldButton | - | - | click the bold button |
| clickItalicButton | - | - | click the italic button |
| clickUnderlineButton | - | - | click the underline button |
| clickImageButton | - | - | click the image button |
| clickUnorderedListButton | - | - | click the unordered list button |
| clickOrderedListButton | - | - | click the ordered list button |
| getContent | - | string | returns the text content of the editor |
| enterText | string | - | enters the supplied text to the editor |
| isErrorIndicatorVisible | - | boolean | returns if the error indicator is visible |
| isDisabled | - | boolean | returns if disabled |
| isImageExists | - | boolean | returns if there's an image in the editor |
| isAddImageButtonExist | - | boolean | returns if the add image button exists |
| isResizable | - | boolean | returns if the editor is resizable |
| setProps | object | - | renders a new component with its existing props + the supplied props |

## Usage Example

> Unit testing example

```javascript
  import React from 'react';
  import {mount} from 'enzyme';
  import {TestkitFactory} from 'wix-style-react/dist/testkit';
  import {richTextAreaTestkitFactory as enzymeRichTextAreaTestkitFactory} from 'wix-style-react/dist/testkit/enzyme';

  /***************
   enzyme example
  ***************/

  const dataHook = 'myDataHook';
  const wrapper = mount(<div><RichTextArea dataHook={dataHook}/></div>);
  const richTextAreaTestkitFactory = require('../../testkit/enzyme').richTextAreaTestkitFactory;
  const driver = enzymeRichTextAreaTestkitFactory({ wrapper, dataHook});

  expect(driver.exists()).toBeTruthy();
