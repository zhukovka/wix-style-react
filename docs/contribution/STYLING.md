# Styling

## Technology
1. We use `SCSS` with `CSSModules`, both comes out of the box in the build process.

## Best practices
1. For RTL support, add rules under `:global .rtl { }`.

## Next Generation
1. In some components, we use [`Stylable`](https://stylable.io/). Stylable enables you to expose a style API that maps its internal parts so you can reuse components across teams without sacrificing stylability.
We use it in very few component now, but this in general will be the next generation of styling of the library.

## TBD