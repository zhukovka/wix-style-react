# Test Drivers Guidelines

Drivers are public API. Since it's pulic, it's not easy to change.

It means initial implementation must be good!

## ProTips

1. Focus driver methods on intent, not granular actions (see examples below)
1.  **Test the DOM**  
    Every React prop set by consumer affects the DOM, or behavior of the component (which in turn affects the DOM). Don't assert on React props or inner state, instead assert on the DOM.
1. Keep drivers flat. The returned object should be flat and simple.
   Avoid nesting objects or worse, other drivers (it is easy to do but creates implicit dependency which is very hard to maintain)


## Actions - What vs. How

Actions should accomodate for the user's intent (the "What") rather than how the user interacts (click, focus, keydown,...).

### Example 1

`<Search/>` input may have clear button (a little `x`).

```diff
-clickClearButton()
+clear()
```

### Example 2 - Abstract complex actions

`<Dropdown/>` allows selecting from a list of options.

User needs to:
- click on Input (to focus it)
- press key down (to show list of options)
- click on certain option

Instead of providing granular methods for each action abstract them to reflect the intent:

```diff
-click()
-keyDown()
-clickOption(index)
+selectOption(index)
```

## `data-hook`

Data hooks are `HTMLElement` data attributes added by component. They are used by drivers to locate elements in component.

For example:

```js
<div>
  <button data-hook="cancel">{props.cancelText}</button>
  <button data-hook="confirm">{props.confirmText}</button>
</div>
```

### Keep `data-hook`'s Values Short

`data-hook`'s inflate the DOM, and are NOT removed in production.
This allows testing applications in production.

> The name `data-hook` is a Wix naming convention.

## `exists()`

There is only one required method for each driver: `exists()`.

- driver is created as a wrapper over an `element`.
- In case this `element` is `null` or `undefined`, driver creation should NOT fail (throw error).
- Consumer creates drivers via "find-by-data-hook" helper.
- Consumer can use `exists()` to check if component was found or not.

## Render Slots

For render slots we should provide a getter that returns consumers element.

```js
// Component.js
const Comp = props => (
  <div>
    <div data-hook="left">{props.left}</div>
    <div data-hook="right">{props.right}</div>
  </div>
);

Comp.propTypes = {
  body: PropTypes.node
};
```

```js
// Component.uni.driver.js
export const ComponentDriver = base => (
  {
    getLeft: () => base.$(`[data-hook="left"]`).getNative();
    getRight: () => base.$(`[data-hook="right"]`).getNative();
  }
)
```

### Do NOT Expose Internal Elements

The only case where a getter method would return an Element is to retrieve **consumers** element from a render slot. Apart from that, NEVER return an Element.
