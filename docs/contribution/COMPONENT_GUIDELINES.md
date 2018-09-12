# Component guidelines

1. Components are designed according to [Zeplin](https://app.zeplin.io/project/5864e02695b5754a69f56150) design created by UX guild.
1. A component will be named with a `CamelCase` convention.
1. Every component folder should be a single component.
1. Every component should accept a `dataHook` property in order to allow it to be tested. A component can extend `WixComponent` in order to be a pure component and get `dataHook` for free.
1. Exposing `className` property is allowed.
1. For common typography, components should use the `Text` or `Heading` components.
1. Add `propTypes` to each component and document it with a `/** */` comment on top.
