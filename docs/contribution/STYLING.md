# Styling

## Technology
1. We use `SCSS` with `CSSModules`, both comes out of the box in the build process.

## Best practices
1. For RTL support, add rules under `:global .rtl { }`.
1. The convention for allowing styling of the component's root element is by exposing a `className` property.

## Next Generation [`Stylable`](https://stylable.io/)

In some components, we use Stylable. Stylable enables you to expose a style API that maps its internal parts so you can reuse components across teams without sacrificing stylability.
We use it in very few component now, but this in general will be the next generation of styling of the library.

1. *data-hook*: When using the the Stylable's StyleSheet function (usually named `style()`), will pass a `data-hook` prop onto the dom.
1. *className*: When spreading `style(..., ..., props)` into root element, the `className` from props is also being applied to the DOM `class` attribute.

When creating a new component, please consider using Stylable.
