# API Changes for Calendar

```js
interface Range {
  from: Date,
  to: Date
}
```
> Date is the javascript Date class.

## Props

| propName       | propType | defaultValue | isRequired | description  |
| ---            | ---      | ---          | ---        | ---          |
| mode           | oneOf(['day', 'range']) | 'day' | - | - |
| selectedDays   | Date or Range   | - | - | When mode==='range', the `selcetdDays` need to be of type Range |
| onSelectedDaysChange   | function |  -   | - | Called with first argument as Date or Range (depending on the `mode`)  |
| initialMonth           | Date | - | - | The calendar month to show, if undefined, then defaults to the selected Day, or the Range start date |

## Methods

| method   | arguments | returned value | description   |
| -------- | --------- | -------------- | ------------- |
| setMonth | Date      | -        | Sets the displayed month (Start month, when numOfMonth > 1) |
