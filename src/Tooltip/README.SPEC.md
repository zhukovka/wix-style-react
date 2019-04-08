# `<Tooltip/>`

## Issues with the current Tooltip

- Uses our own naive postioning mechanism, [which](https://github.com/wix/wix-style-react/issues/2754) [has](https://github.com/wix/wix-style-react/issues/2596) [several](https://github.com/wix/wix-style-react/issues/2582) [issues](https://github.com/wix/wix-style-react/issues/2069). The mechanism is not at mature and community backed as [`Popper.js`](https://github.com/FezVrasta/popper.js).
- Can be both Controlled and Uncontrolled, leads to confusion.
- Does not follow the UX guidelines:
  - A tooltip should only be opened on HOVER, currently the consumers can set the triggering
    events.
  - A tooltip should only contains textual content, currently it can accept any node.
  - Our `<Tooltip/>` could be used as Popover (opens on click), leads to confusion.
  - The Tooltip should has a `dark` theme, currently it's defaulted to a `light` theme.

## The solution

> Update the `<Tooltip/>` component according to the UX guidelines and improve its positioning mechanism.

This "mechanism" is ready, and it's called `<Popover/>`. This is a controlled component that uses
the `Popper.js` library to handle positioning.

### What's next about `<Tooltip/>`

The plan is to create a **new** `<Tooltip/>`. As discussed, it should:

- Use the `<Popper/>` component for positioning;
- Be **Uncontrolled**, and **only open on HOVER**, as per the UX guidelines;
- Has a `dark` theme by default (and the theme cannot be changed);
- Has a slimmer API;
- Provides clear documentation on how to achieve various way of positioning.
- Uses UniDriver.

### General Guidelines for Users

The `Tooltip` pattern is intended to contain text-only content,
and the `Popover` pattern is intended for tooltips with interactive content.

Avoid putting complex structured text content (e.g. with headings, bullet lists, etc) in a Tooltip. For anything mildly complex/structured, it'd be best for authors to go for a Popover.

### Basic usage

```jsx
import React from 'react';
import Button from 'wix-style-react/Button';
import Tooltip from 'wix-style-react/Tooltip';

const MyComponent = () => (
  <div>
    <Tooltip placement="top" content="This content explains buttons meaning.">
      <Button>Hover on me to see my meaning</Button>
    </Tooltip>
  </div>
);

export default MyComponent;
```

### API

| Name         | Type                        | Default value | Required | Description                                                                                                                                               |
| ------------ | --------------------------- | ------------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `dataHook`   | `string`                    |               |          | Used for testing purposes. DataHook is applied on tooltip content container.                                                                              |
| `content`    | `string`, `ReactNode`       |               |          | The content to be inside the `<Tooltip/>`. If `ReactNode`, should be a textual component (such as `<Text/>` and `<TextButton/>` as per the UX guidelines. |
| `appendTo`   | `string`                    | `parent`      |          | Delegated to `<Popover/>` appendTo.                                                                                                                       |
| `children`   | `ReactNode`, `string`       |               |          | The trigger element.                                                                                                                                      |
| `exitDelay`  | `Number`                    |               |          | The delay for tooltip to dissapear after mouse out event happens.                                                                                         |
| `enterDelay` | `Number`                    |               |          | The delay for tooltip to appear after mouse down event happens.                                                                                           |
| `onHide`     | `Function`                  |               |          | Callback function to be called when hidden                                                                                                                |
| `onShow`     | `Function`                  |               |          | Callback function to be called when shown                                                                                                                 |
| `placement`  | `string`                    | `'top'`       |          | Delegated to `<Popover>` placement.                                                                                                                       |
| `maxWidth`   | `Number`                    | `204`         |          | Sets maximum width of tooltip content.                                                                                                                    |
| `textAlign`  | `oneOf ['center', 'start']` | `start`       |          | To align content text.                                                                                                                                    |
| `size`       | `oneOf['small', 'medium']`  |               |          | Toltip size                                                                                                                                               |
| `moveTo`     | `{ x: Number, y: Number }`  |               |          | Moves tooltip relative to the parent                                                                                                                      |
| `animate`    | `Boolean`                   | `true`        |          |                                                                                                                                                           |
| `flip`       | `Boolean`                   | `true`        |          |                                                                                                                                                           |
| `fixed`      | `Boolean`                   | `false`       |          |                                                                                                                                                           |
| `zIndex`     | `string`                    | ``            |

### Accessibility & Keyboard Navigation

A tooltip is a popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it. It typically appears after a small delay and disappears on blur or mouse leave.

Neil example: https://codepen.io/WW3/pen/BQzEKE?editors=1000

- Pressing TAB will focus Button and open Tooltip.
  - Pressing TAB again will blur the component and close the Tooltip.

### Migration plan

We'll use the `upgrade` prop method like we did for the new `<Button/>`. We'll deprecate the "old" `<Tooltip/>` and remove it completley in the next major Version (V7? 🙏).
