# `<Text/>` Component

General all purpose text component with Wix styling.

Adds correct styling so you don't have to.

Renders correct element (currently either `span` or `h1` - `h5`) depending on `appearance` (defaults to `span`)

for available `appearance`s see **Common** -> **Typography**

# Props

| propName   | propType | defaultValue | isRequired | description                                   |
| ---        | ---      | ---          | ---        | ---                                           |
| appearance | string   | 'T1.1'       | -          | a type of appearance to apply                 |
| children   | node     | -            | -          | any nodes to be rendered (usually text nodes) |

