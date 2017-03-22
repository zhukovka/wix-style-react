# Button testkits

> General Buttons

## Button TestKit API

| method | arguments | returned value | description |
|--------|-----------|----------------|-------------|
| getButtonTextContent | - | string | returns the button text |
| isButtonDisabled | - | bool | fulfilled if button disabled |
| isPrefixIconExists | - | bool | fulfilled if button prefix icon appeared |
| isSuffixIconExists | - | bool | fulfilled if button suffix icon appeared |
| exists | - | bool | fulfilled if element in the DOM |
| element | - | element | returns the driver element |
| click | - | - | clicks on the button |

## Usage Example

```javascript
  import {buttonTestkitFactory, waitForVisibilityOf} from 'wix-style-react/dist/testkit/protractor';

  /*******************
   protractor example
  ***************/

  const driver = buttonTestkitFactory({dataHook: 'story-button'});

  browser.get(appUrl);  //application url

  waitForVisibilityOf(driver.element(), 'Cannot find Button')
     .then(() => {
        expect(driver.getButtonTextContent()).toBe('Click Me!');

        driver.click();
        expect(driver.getButtonTextContent()).toBe('Clicked!');
     });
```
