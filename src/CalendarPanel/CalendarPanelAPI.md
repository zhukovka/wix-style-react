# Suggestion 1

```js
const TODAY = new Date();
const THIS_MONTH = new Date();
const NEXT_WEEK = new Date()+7;

<CalendarPanel
  calendar={
    <Calendar 
      mode: 'range',
      initialMonth: THIS_MONTH,
      selectedDays: TODAY
    />
  }
  presetOptions={[
    <MenuItem value={{selectedDays: {from: TODAY, to: TODAY}}}>Today</MenuItem>,
    <MenuItem value={{selectedDays: {from: TODAY-1, to: TODAY-1}}}>Yesterday</MenuItem>,
    <MenuItem value={{selectedDays: {from: TODAY-7, to: TODAY}}}>Last 7 days</MenuItem>,
    <MenuItem devider/>,
    <MenuItem value={{selectedDays: {from: TODAY, to: TODAY+14}}}>Next 14 days</MenuItem>
  ]}
  footer={
    (selectedDays=>(
      <CalendarPanelFooter
        cancelButtonProps= {{onClick: () => alert('cancel')}}
        submitButtonProps= {{onClick: (e, selectedDays) => alert(`submit - ${selectedDays}`)}}
      >
    )
  }
  
</CalendarPanel>
```


### Props

| propName       | propType | defaultValue | isRequired | description  |
| ---            | ---      | ---          | ---        | ---          |
| showPresets | boolean | `true` | - | Shows presets pane |
| presetOptions | arrayOf(MenuItem) | - | - | Array of options (DropdownLayout options) |
| calendar | <Calendar/> | - | + | - |
| showFooter | boolean | `true` | - | Shows footer pane |
| footer | - | - | - | - |


## Methods

| method   | arguments | returned value | description   |
| -------- | --------- | -------------- | ------------- |
| setMonth | Date      | -        | Sets the displayed month (Start month, when numOfMonth > 1) |

## Explanation

- The presetOptions will go into a DropdownLayout. The onSelect will call the Calendar's component method `setMonth` (sets the state).
- The `<Calendar/>`'s `onSelectedDaysChange` will be intercepted, in order to update the Presets selection and the Footer.
