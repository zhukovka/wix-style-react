# MultiSelect Migration Guide

## New Callback API (5.x to [5.24.0 + `upgrade` prop] OR [6.x])

A new `upgrade` prop will apply API changes with a simplified approach for creating new tags versus selecting from options list.

### TL;DR

- `onManuallyInput`
  - **Trigger**: will be called for ALL cases when a new input value is submitted
  - **1st argument**: receives an **array of values** (not a single value)
  - **2nd argument deprecated**: does NOT receive an array of suggested options as 2nd argument
- `onSelect`
  - **Trigger**: will be called only when an option is selected from the options list
  - **1st argument**: receives an **option** and not an array of **tag** objects!
- `valueParser` is deprecated

### onManuallyInput

> New Signature

```js
onManuallyInput(values: Array<string>): void
```

| What Changed? |  Before                         |            After               |
|---------|---------------------------------|--------------------------------|
| Trigger | not called for paste actions    | called for ALL cases when a new input value is submitted|
| 1st Arg | single string value             | array of string values         |
| 2nd Arg | array of suggested tags         |  -                             |  

#### Migration Example (`onManuallyInput`)

> Before

```js
  const createTag = value => {id: generateId(), label: value };

  handleOnManuallyInput(value, tags) {
    this.setState({
      tags: [
        ...this.state.tags,
        createTag(value),
        ...tags
      ]
    })
  }
```

> After

```js
  const createTag = value => {id: generateId(), label: value };

  handleOnManuallyInput(values) {
    this.setState({
      tags: [
        ...this.state.tags,
        values.map(v=> createTag(v)
      ]
    })
  }
```

### onSelect

> New Signature

```js
onSelect(option): void
```

| What Changed? |  Before                         |            After               |
|---------|---------------------------------|--------------------------------|
| Trigger | Called for paste actions. Called (sometimes) when input value submited  | called ONLY when user selects an option |
| 1st Arg | array of tags or single tag | single option   |

#### Migration Example (`onSelect`)

> Before

```js
  handleOnSelect(tags) {
    Array.isArray(tags)
      ? this.setState({ tags: [...this.state.tags, ...tags] })
      : this.setState({ tags: [...this.state.tags, tags] });
  }
```

> After

```js
  const createTag = option => {id: option.id, label: option.value };
  
  handleOnSelect(option) {
    this.setState({
      tags: [
        ...this.state.tags,
        createTag(option)
      ]
    })
  }
```

#### Notice

- **Option Meta**: You can put any properties you need on the `option` object (option meta), so you can later use them when an option is selected.
- **`option.value`!**: Keep in mind that the `value` property of an option is a ReactNode, it is what gets renderedas an option. So if you use something other than a string, then you shouldn't have to deal with it in the `onSelect` handling.

### valueParser

`valueParser` is deprecated (not used). It was used to match Options with the input value when Paste is detected. We don't do that anymore, when Paste is detected, we simply call `onTagsAdded` with the inptu value.

### Creating Tags (Reminder)

Tag objects are simply props of the [12.5-Tag component](https://wix-wix-style-react.surge.sh/?selectedKind=12.%20Other&selectedStory=12.5%20Tag&full=0&addons=0&stories=1&panelRight=0) only that instead of children prop, you need to have a `label` prop.

> A simple default tag with "Alabama" as label

```js
{ id: "1", label: "Alabama" }
```

### More Info

See component's New Callback API [Design-Spec](https://github.com/wix/wix-style-react/blob/master/src/MultiSelect/README.DESIGN-SPEC.md) for more info.

See the old behavior summary table in this [issue](https://github.com/wix/wix-style-react/issues/2559#issuecomment-449770857).
