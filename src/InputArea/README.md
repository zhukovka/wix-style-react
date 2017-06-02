# InputArea component

> General inputArea container.

## Properties

| propName | propType | defaultValue | isRequired | description |
|----------|----------|--------------|------------|-------------|
| value | string | - | - | Inputs value |
| theme | string | normal | - | The theme of the input, can be one of `normal`, `paneltitle` |
| defaultValue | string | - | - | Default value for those who wants to use this component un-controlled |
| rows | number | - | - | Sets initial height according to the number of rows (chrome uses the rows for minHeight as well) |
| minHeight | string | - | - | i.e. '12px' |
| maxHeight | string | - | - | i.e. '12px' |
| resizable | bool | false | - | - |
| tabIndex  | number | - | - | - |
| placeholder  | string | - | - | Placeholder to display |
| readOnly  | bool | false | - | Sets the input to readOnly |
| error  | bool | false | - | Sets UI to erroneous |
| errorMessage  | string | '' | - | The error message to display when hovering the error icon, if not given or empty there will be no tooltip |
| autoFocus | bool | false  | - | Standard React Input autoFocus (focus the element on mount) |
| autoSelect | bool | false | - | Standard React Input autoSelect (select the entire text of the element on focus) |
| onChange  | func | - | - | onChange callback |
| onBlur | func | - | -  | onBlur callback |
| onFocus | func | - | - | onFocus callback |
| onEnterPressed | func | - | - | - |
| onEscapePressed | func | - | - | - |
| onKeyDown | func | - | - | - |
| hasCounter | bool | false | - | When true a letters counter will appear |
| maxLength | number | - | - | Define max length allowed in the inputArea |
| tooltipPlacement | [top, bottom, right, left] | - | - | Placement of the error tooltip |
| onTooltipShow | func | - | - | onShow prop for the error tooltip |

## Functions

| function name | description |
|---------------|-------------|
| focus | Focuses on the input |
| blur | Blurs the input (loses focus) |
| select | Selects all text in the input |
