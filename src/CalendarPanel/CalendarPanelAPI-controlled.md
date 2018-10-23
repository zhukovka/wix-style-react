# CalnedarPanel API

## Controlled / Layout

in this suggestion we offer a layout of 3 slots, each having a controlled component.

- `<CalendarPanelLayout/>`
  - Main:   `<Calendar/>`
  - Side:   `<CalendarPanelPresets/>`
  - Bottom: `<CalendarPanelFooter/>`

```js
import Text from 'wix-style-react/Text';
import {Panel, PanelBody, PanelSidebar, PanelFooter} from 'wix-style-react/Panel';

import Calendar from 'wix-style-react/Calendar';
import {CalendarPanelPresets, Preset} from 'wix-style-react/CalendarPanelPresets';
import CalendarPanelFooter from 'wix-style-react/CalendarPanelFooter';
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
    const selectionMode = 'single-range';

    return (
      <Panel className={calendarPanelStyles.calendarPanel}>
        <PanelBody>
          <Calendar
            selectionMode={selectionMode},
            numOfMonths={2}
            month={this.state.month},
            onMonthChange={(month)=>this.setState({month})}
            selectedDays={this.state.selectedDays}
            onSelectedDaysChange={(selectedDays)=>this.setState({selectedDays})}
          />
        </PanelBody>
        <PanelSidebar>
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
            selectionMode
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

## Features

- Selecting Preset updates Calendar
- Selecting day/range Calendar updates Preset selection
- selectionMode: 'single-day', 'single-range'
- Footer:
  - selecteDaysDisplay shows currently range as text
  - Submit button disabled if selectionMode!='day' and there is no valid range selected

