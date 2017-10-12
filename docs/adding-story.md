# Adding Story

All components exported by `wix-style-react` are documented and displayed on our [github page](wix.github.io/wix-style-react/) (you probably are looking at it now).

To create this sandbox environment we use [Storybook](https://storybook.js.org).

Creating a page for each component is tedious and problematic. For this reason we generate documentation right out of components source.
It is possible by using the following helpers:

* [`<AutoDocs/>`](https://wix.github.io/wix-style-react/?selectedKind=Introduction&selectedStory=AutoDocs&full=0&down=0&left=1&panelRight=0) - given component source as string, create API table
* [`<AutoExample/>`](https://wix.github.io/wix-style-react/?selectedKind=Introduction&selectedStory=AutoExample&full=0&down=0&left=1&panelRight=0) - given component reference and component source, create playground to preview component, display list of interactive props and display code example
* `story()` - combine the two from above

You should use `story()` function most of the time, unless your component is very very special and `story()` cannot handle it properly.

## Generating story page automatically

Let's consider `<ColorPicker/>` component example:

`stories/ColorPicker/index.js` ([view on github](https://github.com/wix/wix-style-react/blob/master/stories/ColorPicker/index.js)):

```js
import story from '../utils/Components/Story'; // 1

import component from 'wix-style-react/ColorPicker'; // 2
import source from '!raw-loader!wix-style-react/ColorPicker/color-picker'; // 3

// 4
story({
  category: 'Core',
  name: 'ColorPicker',
  source,
  component
});
```

1. import `story` function. It will do all the heavy lifting to create a story page
1. import `component` which you want to display (`<ColorPicker/>` in this example)
1. import `source` of the same component. This is possible by using `!raw-loader!`
1. use `story()` with not-that-big-of-a-config to create full storybook page.

## `story()` API

`story(config)` where `config` is an object that can work with these properties:

  * `category` - __required__ `string`: name of storybook "section" under which this story will be placed (e.g. `Core`, `6. Navigation`, `3. Inputs`),
  * `name` - __required__ `string`: name of the component, must be correct (will be used in storybook sidebar, as story title, as part of `import` example, as part of github link)
  * `source` - __required__ `string`: the actual source of a component.

      > Use `!raw-loader!` to get it, e.g.: `import source from '!raw-loader!wix-style-react/ColorPicker/color-picker';`

      > Beware that the actual source is required and not just something like `export {default} from './component.js'`

  * `component` __required__ `object`: reference to react component which will be used within interactive example

    ```js
    import component from 'wix-style-react/ColorPicker';
    story({ component });
    ```

  * `readme` - `string`: a markdown compatible string to be printed above interactive component example
  * `readmeTestkit` - `string`: a markdown compatible string to be printed within "TestKit" tab
  * `examples` - `element` (react element): any react component to be displayed below interactive component example. Usually this holds more examples
  * `componentProps` - `object` or `function`: props that will be used within `component`. Either given as-is with `object` or computed in `function`.
      * when `object`, it will be given to `component` as props. This is the place to set any props that are required by `component`
      * when `function`, its signature is `(setProps, getProps) => props` where:
          * `setProps` - `function`: accepts one argument - object. When called this object will be set as `componentProps`
          * `getProps` - `function`: does not accept anything. When called it will return an object containing currently used props
          * `props` - return value `object`: whatever is returned will be used as new `componentProps`
         This is used to allow dynamic changes from within
        `component`. The return value of this function will be used as `component` props.

        For example:

        ```js
        // componentProps as object
        story({
          source: ToggleSwitchSource, // imported with !raw-loader!
          component: ToggleSwitch,
          componentProps: {
            onChange: () => console.log('i work as if i was defined like this <ToggleSwitch onChange={() => console.log(\'see? :)\')}/>')
          }
        })

        // componentProps as function
        story({
          source: ToggleSwitchSource, // imported with !raw-loader!
          component: ToggleSwitch
          componentProps: (setProps, getProps) => {
            checked: false,
            onChange: () => setProps({ checked: !getProps().checked })
          }
        })
        ```
