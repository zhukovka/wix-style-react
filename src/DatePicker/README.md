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
| readOnly | bool | false | - | Is the input field readOnly |
| showYearDropdown | bool | false | - | Display a selectable yearDropdown |


## Keyboard support

Left: Move to the previous day.
Right: Move to the next day.
Up: Move to the previous week.
Down: Move to the next week.
PgUp: Move to the previous month.
PgDn: Move to the next month.
Home: Move to the previous year.
End: Move to the next year.
Enter/Esc/Tab: close the calendar. (Enter & Esc calls preventDefault)
