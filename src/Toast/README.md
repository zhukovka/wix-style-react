# Toast component

> A Toast is a non modal, unobtrusive window element used to display short messages.

## Properties

| propName | propType | defaultValue | isRequired | description |
|----------|----------|--------------|------------|-------------|
|type|string|bar|yes|Style of the toast (bar,largebar)|
|position|string|topfixed|yes|Position to place the toast (currently just topfixed)|
|theme|string|red|yes|Theme of the toast (red,blue,purple,green)|
|show|boolean|false|yes|Should the toast be shown or not|
|timeout|number|null|no|Time to hide the toast after (ms)|

## Callbacks
| propName | propType | defaultValue | isRequired | description |
|----------|----------|--------------|------------|-------------|
|onClose|function|||Callback called when user presses the (X) button|

