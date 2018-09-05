# `withFocusable`

A HOC to add Accessibility focus states. (similar to [`focus-visible`](https://developer.mozilla.org/en-US/docs/Web/CSS/:focus-visible))

For component's like `<Input/>`, this HOC is not relevant, since they always show a focus border (regardless of the input method that made them focused).

## Usage

1. Wrap your component with `withFocusable` HOC.
2. In component's `js`:
 2.1 call `focusableOnFocus`, `focusableOnBlur` from props.
 2.2 spread focus states onto the component's root element. (Using `focusableStates(props)`)

```jsx
import { withFocusable, focusableStates } from "../common/Focusable";

<Component
  onFocus={this.props.focusableOnFocus}
  onBlur={this.props.focusableOnBlur}
  {...focusableStates(this.props)}
/>;

export default withFocusable(Component);
```

3. In `.scss` file include focus styles.

```scss
@import '../common/Focusable/FocusableMixins.scss';
@import "../common/Focusable/Focusable";

.root {
  outline: none;

  &#{$focusable-focus-visible} {
    @include FocusBox;

    &.hasError {
      @include FocusBoxError;
    }
  }
}
```

> Make sure to disable native browser outline by applying `outline: none;`

## Testing

1. In order to run general focusable tests - method `runFocusTests` is available in `FocusableTestsE2E.js`.

```jsx
import { runFocusTests } from "../common/Focusable/FocusableTestsE2E";

describe("Component", () => {
  describe("Focus tests", () => {
    const driver = TestkitFactory({ dataHook: storySettings.dataHook });
    runFocusTests(driver, storyUrl);
  });
});
```

2. By default the example above will not work. You will need to merge your testkit driver together with focusable driver for it to access specific methods.

```js
import { mergeDrivers } from "./test/utils/private-drivers";
import focusableDriverFactory from "./common/Focusable/Focusable.protractor.driver";

const MyDriverFactory = element => {
  const focusableDriver = focusableDriverFactory({
    rootElement: element,
    nativeFocusableElement: element,
    clickableElements: [element]
  });
  const publicDriver = {
    click: () => element.click(),
    element: () => element
  };
  return mergeDrivers(publicDriver, focusableDriver);
};

export default DriverFactory;
```

Notice that `focusableDriverFactory()` expects a `clickableElements`. This list of clickable elements (inside your component) is used to try and click any of the elements, and expect that the component would become focused.

## Troubleshooting

1. Focus effect does not appear on my `div`. Why?

Focusable HOC will only work on focusable html elements like `button`, `input` etc. In order to enable this on div make sure to pass `tabindex` to your component with value `0`. Read more https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex

```jsx
import { withFocusable, focusableStates } from "../common/Focusable";

<Component
  tabIndex={0}
  onFocus={this.props.focusableOnFocus}
  onBlur={this.props.focusableOnBlur}
  {...focusableStates(this.props)}
/>;

export default withFocusable(Component);
```
