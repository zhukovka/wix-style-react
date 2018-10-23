# CalnedarPanel API

## Controlled / Layout

in this suggestion we offer a layout of 3 slots, each having a controlled component.

- `<CalendarPanelLayout/>`
  - Main:   `<Calendar/>`
  - Side:   `<CalendarPanelPresets/>`
  - Bottom: `<CalendarPanelFooter/>`

```js
import Text from 'wix-style-react/Text';
import Calendar from 'wix-style-react/Calendar';
import CalendarPanelPresets from 'wix-style-react/CalendarPanelPresets';
import CalendarPanelFooter from 'wix-style-react/CalendarPanelFooter';
import Panel from 'wix-style-react/Panel';
import calendarPanelStyles from 'wix-style-react/CalendarPanel/styles.st.css'

const TODAY = new Date();
const THIS_MONTH = new Date();
const NEXT_WEEK = new Date()+7;

class CalendarPanelConsumer {
  state = {
    selectedDays: {from: TODAY, to: TODAY}
    month: TODAY
  }

  render() {
    const mode = 'single-range';

    return (
      <Panel className={calendarPanelStyles.calendarPanel}>
        <PanelBody>
          <Calendar
            mode={mode},
            numOfMonths={2}
            month={this.state.month},
            onMonthChange={(month)=>this.setState({month})}
            selectedDays={this.state.selectedDays}
            onSelectedDaysChange={(selectedDays)=>this.setState({selectedDays})}
          />
        </PanelBody>
        <PanelSide>
          <CalendarPresets
            selectedDays= {this.state.selectedDays}
            onSelect={({selectedDays, month})=> this.setState({selectedDays, month})}
          >
            <Preset selectedDays={{from: TODAY, to: TODAY}}>Today</Preset>,
            <Preset selectedDays={{from: TODAY-1, to: TODAY-1}}>Yesterday</Preset>,
            <Preset selectedDays={{from: TODAY-7, to: TODAY}}>Last 7 days</Preset>,
            <Preset devider/>,
            <Preset selectedDays={{selectedDays: {from: TODAY, to: TODAY+14}}}>Next 14 days</Preset>
          </CalendarPanelPresets>
        </PanelSide>
        <PanelFooter>
          <CalendarPanelFooter
            mode
            selectedDaysDisplay={
              <Text size='small' secondary>
                {this.state.selectedDays.toLocaleDateString()}
              </Text>
            }
            onCancel={() => alert('cancel')}
            onSubmit={() => alert(`submit - ${this.state.selectedDays}`)}
          >
        </PanelFooter>
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
