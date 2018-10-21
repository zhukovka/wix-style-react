# Suggestion 1

```js
const TODAY = new Date();
const THIS_MONTH = new Date();
const NEXT_WEEK = new Date()+7;

const presets = [
  {id: 1, value: 'Today', selectedDays: TODAY},
  {id: 2, value: 'Yesterday', selectedDays: TODAY - 1},
  {id: 3, value: 'Last 7 days', selectedDays: {from: TODAY - 7, to: TODAY}},
  {id: 4, value: 'Last 14 days', selectedDays: {from: TODAY - 14, to: TODAY}}
];

<CalendarPanel
  presets={presets}
  calendarProps={{
    mode: 'range',
    initialMonth: THIS_MONTH,
    selectedDays: TODAY
  }}
  cancelButtonProps= {{onClick: () => alert('cancel')}}
  submitButtonProps= {{onClick: (e, selectedDays) => alert(`submit - ${selectedDays}`)}}
  >
</CalendarPanel>
```

- calendarProps allows any customization
- The Presets will go into a DropdownLayout. The onSelect will call the Calendar's component method `setMonth` (sets the state).
- The `<Calendar/>`'s `onSelectedDaysChange` will be intercepted, in order to update the Presets selection and the Footer.

## Alternatives

### Presets - Change DropdownLayout "option" object API, to a more native one `<Option value="20">Twenty<Option>`