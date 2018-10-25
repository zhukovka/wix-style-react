import React from 'react';

import CalendarPanel from '../../src/CalendarPanel';
import Card from '../../src/Card';
import {TODAY, YESTERDAY, NEXT_WEEK, A_WEEK_AGO, ONE_MONTH_AGO, TWO_MONTH_AGO} from './dateUtils';

const presets = [
  {id: 1, value: 'Today', selectedDays: {from: TODAY, to: TODAY}},
  {id: 2, value: 'Yesterday', selectedDays: {from: YESTERDAY, to: YESTERDAY}}
];

export class CalendarPanelCustomExample extends React.Component {

  state = {
    selectedDays: TODAY,
    month: TODAY
  }

  render() {
    const {selectedDays, month} = this.state;
    return (
      <Card>
        <CalendarPanel
          presets={presets}
          calendarProps={{
            selectionMode: 'day',
            numOfMonths: 2, // This is the default
            selectedDays,
            month
          }}
          onCancel={() => alert('cancel')}
          onSubmit={(e, selectedDays) => alert(`submit - ${selectedDays}`)}
          />
      </Card>
    );
  }
}


