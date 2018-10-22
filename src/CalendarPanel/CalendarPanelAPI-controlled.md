# CalnedarPanel API


> selectedDays is controlled

```js
const TODAY = new Date();
const THIS_MONTH = new Date();
const NEXT_WEEK = new Date()+7;

class CalendarPanelConsumer {
  state = {
    selectedDays: {from: TODAY, to: TODAY}
  }

  handleChange(selectedDays) {
    this.setState({selectedDays})
  }

  render() {
    const mode = 'single-range';

    const presets = [
      {id: 1, value: 'Today', selectedDays: TODAY},
      {id: 2, value: 'Yesterday', selectedDays: TODAY - 1},
      {id: 3, value: 'Last 7 days', selectedDays: {from: TODAY - 7, to: TODAY}},
      {id: 4, value: 'Last 14 days', selectedDays: {from: TODAY - 14, to: TODAY}}
    ];

    return (
      <CalendarPanel
        calendar={
          <Calendar
            mode={mode},
            initialMonth= {THIS_MONTH},
            numOfMonths={2}
            selectedDays= {this.state.selectedDays}
            onSelectedDaysChange={this.handleChange}
          />
        }
        presets={
          <CalendarPresets
            selectedDays= {this.state.selectedDays}
            onSelect={{selectedDays}=> this.handleChange(selectedDays)}
          >
            <Preset value={{selectedDays: {from: TODAY, to: TODAY}}}>Today</Preset>,
            <Preset value={{selectedDays: {from: TODAY-1, to: TODAY-1}}}>Yesterday</Preset>,
            <Preset value={{selectedDays: {from: TODAY-7, to: TODAY}}}>Last 7 days</Preset>,
            <Preset devider/>,
            <Preset value={{selectedDays: {from: TODAY, to: TODAY+14}}}>Next 14 days</Preset>
          </CalendarPanelPresets>
        }
        footer={
          <CalendarPanelFooter
            selectedDaysText = {this.state.selectedDays.toLocaleDateString()}onCancelButtonProps= {{
              onClick: () => alert('cancel')
            }}
            submitButtonProps= {{
              onClick: (e, selectedDays) => alert(`submit - ${selectedDays}`)
              disabled: {mode === 'single-range' ?
                !this.selectedDays.to || !this.selectedDays.from : this.selectedDays
              }
            }}
          >
        }
      </CalendarPanelLayout>
    )
  }
}
```


### Props

| propName       | propType | defaultValue | isRequired | description  |
| ---            | ---      | ---          | ---        | ---          |
| presetOptions | arrayOf(MenuItem) | - | - | Array of options (DropdownLayout options). When undefined, then no SidePane will appear |
| calendar | <Calendar/> | - | + | - |
| footer | renderProp | - | - | A function that renders the footer. When undefined then no Fotter pane will appear. The function receives the Calendar's (selectedDays,mode) argument.|


## Methods

| method   | arguments | returned value | description   |
| -------- | --------- | -------------- | ------------- |
| setMonth | Date      | -        | Sets the displayed month (Start month, when numOfMonth > 1) |

## Explanation

- The presetOptions will go into a DropdownLayout. The onSelect will call the Calendar's component method `setMonth` (sets the state).
- The `<Calendar/>`'s `onSelectedDaysChange` will be intercepted, in order to update the Presets selection and the Footer.
- The `<Calendar/>
