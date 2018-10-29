# Documenting Components

## Documnetation tools
All components are documented and displayed on our main documentation page which is rendered with [Storybook](https://storybook.js.org)

## Documentation layers
There are two layers of documentation in the storybook:
- **Design System indexing**
- **Components APIs**

The storybook is structured accordingly. For example:

```
4. Selection // The category
  4.1 Dropdown // The relevant component by their semantic meaning with common example use cases
  
Components //APIs
  - Dropdown // The actual component to be used
  - FormField // Another acutal component to be used with Dropdown
```

## Design System indexing
In this section, the strucutre will be according to the UX definitions of the desing system.
It contains common examples and use cases, accompanied by explanation how and when to use the components. It will also contain links to the actual component APIs in the next section.

## Components APIs
For API documentation, we use [wix-storybook-utils](https://github.com/wix/wix-ui/tree/master/packages/wix-storybook-utils) - a tool built to generate documentation automatically.

It is reponsbile to scrape APIs, testkit drivers and create interactive playground based on props and some code hints.

[Read here](https://github.com/wix/wix-ui/blob/master/packages/wix-storybook-utils/docs/usage.md) how to document components in the library using `wix-storybook-utils`.
