# CalnedarPanel API

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
    return (
      <CalendarPanel
        calendar={
          <Calendar
            mode={'range'},
            initialMonth= {THIS_MONTH},
            selectedDays= {this.state.selectedDays}
            onSelectedDaysChange={this.handleChange}
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
          <CalendarPanelFooter
            cancelButtonProps= {{
              onClick: () => alert('cancel')
            }}
            submitButtonProps= {{
              onClick: (e, selectedDays) => alert(`submit - ${selectedDays}`)
            }}
          >
        }
      </CalendarPanel>
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
