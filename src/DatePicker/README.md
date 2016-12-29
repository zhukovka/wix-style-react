# DatePicker component

> A DatePicker component

## Properties

| propName | propType | defaultValue | isRequired | description |
|----------|----------|--------------|------------|-------------|
| value | moment object | - | - | The selected date |
| onChange | func | - | + | Called upon every value change |
| dateFormat | string | MM/DD/YYYY | - | Custom date format |
| filterDate | func | () => true | - | Only the truthy dates are selectable |
| excludePastDates | bool | false | - | Past dates are unselectable |
