
Page component provides layout for a page header and content.
Features include:

- Vertical & horizontal scrolling
- Minimized header overlay (when vertically scrolled)
- Sticky content

#### Page Container

When using the `Page` component it container (PageContainer) should have a determined height (e.g. `height: 500px`, `height: 100vh`) otherwise, vertical scroll won't work.

> The above applies only when setting `upgrade` prop to `true`. (New Layout API)

#### Gradient

You can generate Gradient CSS [here](https://www.cssmatic.com/gradient-generator).

#### Migration (`6.x` -> + `upgrade`)

If you are already using `<Page/>` and you are adding the `upgrade` prop (`<Page upgrade/>`), then see this [README.MIGRATION.md](https://github.com/wix/wix-style-react/blob/53033adb9241879eeb2dd7d76f7498fd784e97ff/src/Page/README.MIGRATION.md)