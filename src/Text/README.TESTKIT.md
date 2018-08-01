# Text component

## Text TestKit API

### Puppeteer
| method | arguments | returned value | description |
|--------|-----------|----------------|-------------|
| element | - | element | returns the element |
| getValue | - | string | get value of the element |


## Usage Example

> Unit testing example

```javascript
/*******************
   Puppeteer example
  *******************/

  import puppeteer from 'puppeteer';
  import textTestkitFactory from 'wix-style-react/dist/testkit';

  //puppeteer setup
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  //Create an element testkit via the data-hook attribute
  const text = await textTestkitFactory({
    dataHook: 'text',
    page,
  });
  await page.goto(appUrl); //Your application url
  expect(await text.getValue()).to.equal('WIX');
```
