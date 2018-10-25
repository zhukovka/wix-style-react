import React from 'react';

import CalendarPanel from '../../src/CalendarPanel';
import Card from '../../src/Card';

import {TODAY, YESTERDAY, NEXT_WEEK, A_WEEK_AGO, ONE_MONTH_AGO, TWO_MONTH_AGO} from './dateUtils';

const presets = [
  {id: 1, value: 'Today', selectedDays: {from: TODAY, to: TODAY}},
  {id: 2, value: 'Yesterday', selectedDays: {from: YESTERDAY, to: YESTERDAY}},
  {id: 3, value: 'Last 7 days', selectedDays: {from: A_WEEK_AGO, to: TODAY}},
  {id: 4, value: 'Next 7 days', selectedDays: {from: TODAY, to: NEXT_WEEK}},
  {id: 5, value: 'A month (2 month ago)', selectedDays: {from: TWO_MONTH_AGO, to: ONE_MONTH_AGO}, month: TWO_MONTH_AGO}
];

export default class CalendarPanelCustomExample extends React.Component {

  state = {
    selectedDays: {from: TODAY, to: TODAY},
    month: TODAY
  }

  render() {
    const {selectedDays, month} = this.state;
    return (
      <Card>
        <CalendarPanel
          presets={presets}
          calendarProps={{
            selectionMode: 'range',
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


