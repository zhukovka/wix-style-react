# Dropdown component

> Dropdown Component to use in autocopmlete and select

## Properties

| propName | propType | defaultValue | isRequired | description |
|----------|----------|--------------|------------|-------------|
| options | array | - | - | Array of objects containing a value and a text. If text is '-', a divider will render at that position. Text should normally be just a text, but the system supports React elements as well |
| onSelect | func | - | - | Callback function called whenever the user selects a different value in the list |
| onClose | func | - | - | Callback function called whenever the user press escape or click outside the component |
| dropDirectionUp | bool | false | - | Whether the component opens up or down |
| visible | bool | true | - | Should show or hide the component |
| value | string/number | - | - | The selected value in the list |
| tabIndex| number | 1 | - | Specifies the tab order of the component |