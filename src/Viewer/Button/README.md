# Button component

> General Buttons

## Properties

| propName | propType | defaultValue | isRequired | description |
|----------|----------|--------------|------------|-------------|
| active | bool | - | - | - |
| disabled | bool | - | - | - |
| height | string | medium | - | The size of the button, can be small or medium |
| theme | string | fill | + | The theme of the button, can be fill, design, connected|
| onClick | func | - | - | - |
| color | string | - | - | In 'fill' theme the default is '#fff', for 'design' and 'connected' the default color is '#ae9a65' |
| onHoverColor | string | - | - | Used only for 'design' theme. The default color is '#fff' |
| backgroundColor | string |ae9a65| - | You can pass rgb, rgba with '#' or without.|
| backgroundColorOpacity | number | 0 | - | Used only in 'design' or 'conected' themes. |
| onHoverBackgroundColor | string | ae9a65 | - | Used only for 'design' theme. |
| onHoverBackgroundColorOpacity | number | 1 | - |Used only for 'design' theme.|
| borderColor | string |ae9a65| - | Used only in 'design' or 'conected' themes.|
| borderColorOpacity | number | 1 | - |Used only in 'design' or 'conected' themes.|
| onHoverBorderColor | string | ae9a65 | - | Used only for 'design' theme. |
| onHoverBorderColorOpacity | number | 1 | - | Used only for 'design'theme. |
| borderWidth | number | 1 | - | Used only in 'design' or 'conected' themes. |
| radius | number | 5 | - | Used only in 'design' or 'conected' themes. |
| onHoverRadius | number | 5 | - | Used only for 'design'theme. |


### Opacity range instructions:
The range is between 0 - 1.

> Example: for 50% opacity, set it to .5

### Color instructions:
You can pass rgb, rgba with '#' or without.

