# Typography

The supported way to type text Wix style:

1. Load Wix fonts from CDN:

```html
<link rel="stylesheet" href="//static.parastorage.com/services/third-party/fonts/Helvetica/fontFace.css">
```

2. Use `<Text>` component with appropriate `appearance`:
```js
import { Text } from 'wix-style-react';

export default () =>
  <div>
    <Text appearance="H0">Big Heading</Text>
    <Text>Anything goes...</Text>
  </div>;
```
