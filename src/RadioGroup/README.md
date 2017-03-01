# RadioGroup component

> Controlled radio buttons

## RadioGroup Properties

| propName | propType | defaultValue | isRequired | description |
|----------|----------|--------------|------------|-------------|
| value | number, string | - | - | Selected radio button value |
| onChange | func | - | - | Callback function when user selects a different value |
| disabledRadios | arrayOf(number, string) | [] | - | the values of the disabled radio buttons |
| disabled | boolean | false | - | Make the entire control disabled |
| vAlign | top, center | top | - | Positioning of the radio bottom compared to the label |
| direction | vertical or horizontal | vertical | - | Display direction of the radios |
| type | radio or button | radio | - | Decided which type of child controls to render |
| spacing | string | 12px | - | Vertical spacing between radio buttons |


## RadioGroup.Radio Properties

| propName | propType | defaultValue | isRequired | description |
|----------|----------|--------------|------------|-------------|
| value | number, string | - | - | Value of this radio button |
