# Writing E2E Tests

## Use async/await
When writing e2e tests, don't forget to use `async/await`.

> DON'T - relay on protractor's flow-control (deprecated Promise Manager)!

*Example:*

```js
import React from 'react';
import eyes from 'eyes.it';
import autoExampleDriver from 'wix-storybook-utils/AutoExampleDriver';
import {
  waitForVisibilityOf,
  createStoryUrl
} from 'wix-ui-test-utils/protractor';
import {buttonTestkitFactory} from '../../../testkit/protractor';

describe('Button',() => {
  const storyUrl = createStoryUrl({
    kind:'5. Buttons',
    story:'5.1 Standard',
    withExamples: false
    });

  const driver = buttonTestkitFactory({dataHook: 'storybook-button'});

  beforeAll(async () => {
    await browser.get(storyUrl);
    await waitForVisibilityOf(driver.element(), 'Cannot find Button');
  });

  afterEach(async () => {
    await autoExampleDriver.remount(); // you might also use autoExampleDriver.remount() as needed
  });

  eyes.it('should be in initial state when renders with default', async () => {
    expect(await driver.isButtonDisabled()) // Don't forget to use `await` inside `expect`.
      .toBe(false, 'isButtonDisabled'); // Add message when having multiple expects
    expect(await driver.isFocused()).toBe(false, 'isFocused');
  });

  eyes.it('should be disabled', async () => {
    await autoExampleDriver.setProps({disabled: true});
    expect(await driver.isButtonDisabled()).toBeTruthy();
  });
});
```

## forEach Gotcha !

*DON'T*

```js
eyes.it('Sizes', async () => {
  const sizes = ['small', 'medium', 'large'];
  sizes.forEach(async size => {
    await autoExampleDriver.setProps({size});
    await eyes.checkWindow(size);
  });
});
```

This will run in parallel !
(Because `forEach` doesn't do await when calling each the function)

*DO*

```js
eyes.it('Sizes', async () => {
  const sizes = ['small', 'medium', 'large'];
  for (let size of sizes) {
    await autoExampleDriver.setProps({size});
    await eyes.checkWindow(size);
  });
});
```
