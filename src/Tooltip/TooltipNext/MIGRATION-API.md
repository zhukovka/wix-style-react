# Migration to new Tooltip API

## TL;DR

- react/enzyme testkit is now *async* !

## Why API as changed

Tooltip issues:
- uses inhouse built positioning mechanism, which has several issues.
- does not follow the UX guidelines.
- is confusing because can be controlled and uncontrolled.

> wix-style-react 6 by default will support previous Tooltip API. New Tooltip API can be enabled with prop `upgrade`. Next major version (7) will only support new API.

## New Tooltip features

- Is Uncontrolled, and only open on HOVER, as per the UX guidelines.
- Uses community backed positioning mechanism `Popper.js`.
- Has a slimmer API.
- Provides clear documentation on how to achieve various way of positioning.
- Uses unidriver.

## Deprecated props

`active` - deprecated. Component is uncontrolled component.

`alignment` - changed to `textAlign` and supports only `center` and `start`.

`appendByPredicate` - deprecated. Use `appendTo` values.

`appendToParent` - deprecated. Use `appendTo` with value `parent`.

`bounce` - deprecated. Not supported by UX guidelines.

`color` - deprecated. Changing Tooltip theming is not supported.

`disabled` - deprecated. Component will read its children props to disable itself.

`hideDelay` - changed to `exitDelay`.

`hideTrigger` - deprecated. Component is uncontrolled.

`lineHeight` - deprecated. Text alignment is fixed by internal constants.

`minWidth` - deprecated. 

`moveArrowTo` - deprecated. Not supported by UX guidelines. Use `placement` to achieve it different arrow position.

`onClickOutside` - deprecated. Not supported anymore. Component is interactive only on mouse enter or mouse leave.

`padding` - deprecated. Not supported by UX guidelines.

`popover` - deprecated.

`relative` - deprecated.

`shouldCloseOnClickOutside` - deprecated.

`shouldUpdatePosition` - deprecated.

`showArrow` - deprecated. Use `size` with value `small`.

`showDelay` - changed to `enterDelay`.

`showImmediately` - deprecated.

`showTrigger` - deprecated. Component is uncontrolled.

`size` - values are change from `normal, large` to `small, medium` by UX guidelines.

`theme` - deprecated. Only one theme is supported and its `dark` theme.

## New props

`fixed` - whether to enable the fixed behaviour. This behaviour is used to keep the Tooltip at it's original placement even when it's being positioned outside the boundary.

`flip`  - whether to enable the flip behaviour. This behaviour is used to flip the Tooltips placement when it starts to overlap the target element.

## Testkit Deprecations

****************************************************
** New Unit (React/Enzyme) Testkits Are *Async* ! **
****************************************************
New tooltip testkit is written with UniDriver which means that ReactTestUtils, Enzyme, Puppeteer and Protractor are now supported by default.

Deprecated Unit API

- `isShown` - deprecated.

- `focus` - deprecated.

- `blue` - deprecated.

- `click` - deprecated.

- `hasErrorTheme` - deprecated.

- `hasDarkTheme` - deprecated.

- `hasLightTheme` - deprecated.

- `hasArrow` - deprecated.

- `getTooltipWrapper` - deprecated.

- `getChildren` - deprecated.

- `getPlacement` - deprecated.

- `getContent` - deprecated.

Deprecated E2E Testki API

- `element` - deprecated.

- `getTooltipTextContent` - deprecated.

New Uni Testkit API

- `exists` - returns true if trigger element exists on the DOM.

- `tooltipExists` - returns true if tooltip element exists on the DOM.

- `mouseEnter` - mouse over the target element.

- `mouseLeave` - mouse leaves the target element.

- `getTooltipText` - returns tooltips content value in string.

