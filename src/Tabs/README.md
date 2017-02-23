# Tabs component


## Properties

| propName | propType | defaultValue | isRequired | description |
|----------|----------|--------------|------------|-------------|
| items | array of objects (see item)| - | + | Specifies tabs |
| onClick | func | - | + | Callback on tab click |
| activeId | string or number | - | - | Id of active tab |
| type | string ('compact', 'uniformSide', 'uniformFull') | - | - | Tabs type |
| width | string or number | - | - | Set tab width (only for uniformSide type) |
| hasDivider | bool | true | - | Controls whether grey divider is visible |

## Item

| propName | propType | defaultValue | isRequired | description |
|----------|----------|--------------|------------|-------------|
| id | string or number| - | + | Specifies the item id |
| title | string | - | + | Text to be shown on tab |


