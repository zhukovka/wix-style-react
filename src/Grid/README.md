# Grid and Card

A grid container is based on rows with a 12 column layout.

For full documentation read [Bootstrap docs](https://v4-alpha.getbootstrap.com/layout/grid)

## wix-style-react additions to bootstrap

#### Container

Use for main content area.

Use ".wix-container" instead of bootstrap's ".container". 

.wix-container adds to main content area: min width of 894px and max width of 1254px.

#### Card

The card is a container component of a rounded corner layout

#### Card.Header

| propName | propType | defaultValue | isRequired | description |
|----------|----------|--------------|------------|-------------|
| title | string | - | + | The title of the card |
| subtitle | string | - | - | The subtitle of the card |
| withoutDivider | bool | false | - | Whether to show divider or not |

#### Card.ButtonHeader

| propName | propType | defaultValue | isRequired | description |
|----------|----------|--------------|------------|-------------|
| title | string | - | + | The title of the card |
| subtitle | string | - | - | The subtitle of the card |
| buttonTitle | string | - | + | The text to write on the button |
| buttonOnClick | func | - | + | The onClick function |
| buttonPrefix | node | - | - | An optional Icon to put before the button |
| buttonSuffix | node | - | - | An optional Icon to put after the button |
| tooltip | node | - | - | If set, this tooltip will wrap the button |
| withoutDivider | bool | false | - | Whether to show divider or not |

#### Card.LinkHeader

| propName | propType | defaultValue | isRequired | description |
|----------|----------|--------------|------------|-------------|
| title | string | - | + | The title of the card |
| subtitle | string | - | - | The subtitle of the card |
| linkTo | string | - | + | The link to send the user to |
| linkTitle | string | - | + | The link text |
| tooltip | node | - | - | If set, this tooltip will wrap the link |
| withoutDivider | bool | false | - | Whether to show divider or not |

#### Row

A simple row according to the bootstrap docs

#### Col

A simple column according to the bootstrap docs

| propName | propType | defaultValue | isRequired | description |
|----------|----------|--------------|------------|-------------|
| span | number | - | + | The columns span of this column |
