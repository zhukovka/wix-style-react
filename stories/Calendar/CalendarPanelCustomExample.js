import React from 'react';

import {CalendarPanel} from './CalendarPanel';
import Card from '../../src/Card';
import Calendar from '../../src/Calendar';

const TODAY = new Date();
const presets = [
  {id: 1, value: 'Today', selectedDays: TODAY},
  {id: 2, value: 'Yesterday', selectedDays: TODAY - 1},
  {id: 3, value: 'Last 7 days', selectedDays: {from: TODAY - 7, to: TODAY}},
  {id: 4, value: 'Last 14 days', selectedDays: {from: TODAY - 14, to: TODAY}},
  {id: 5, value: 'Today', selectedDays: TODAY},
  {id: 6, value: 'Yesterday', selectedDays: TODAY - 1},
  {id: 7, value: 'Last 7 days', selectedDays: {from: TODAY - 7, to: TODAY}},
  {id: 8, value: 'Last 14 days', selectedDays: {from: TODAY - 14, to: TODAY}},
  {id: 9, value: 'Today', selectedDays: TODAY},
  {id: 10, value: 'Yesterday', selectedDays: TODAY - 1},
  {id: 11, value: 'Last 7 days', selectedDays: {from: TODAY - 7, to: TODAY}},
  {id: 12, value: 'Last 14 days', selectedDays: {from: TODAY - 14, to: TODAY}}
];

export class CalendarPanelCustomExample extends React.Component {

  render() {
    return (
      <Card>
        <CalendarPanel
          presets={presets}
          onCancel={() => alert('cancel')}
          onSubmit={(e, selectedDays) => alert(`submit - ${selectedDays}`)}
          calendar={
            calendarProps => (
              <Calendar
                {...calendarProps}
                excludePastDates
                />
            )
          }
          />
      </Card>
    );
  }
}


