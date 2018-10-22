import React from 'react';

import CalendarPanel from '../../src/CalendarPanel';
import Card from '../../src/Card';

const TODAY = new Date();
const YESTERDAY = new Date();
YESTERDAY.setDate(TODAY.getDate - 1);

const presets = [
  {id: 1, value: 'Today', selectedDays: {from: TODAY, to: TODAY}},
  {id: 2, value: 'Yesterday', selectedDays: {from: YESTERDAY, to: YESTERDAY}},
  {id: 3, value: 'Last 7 days', selectedDays: {from: TODAY - 7, to: TODAY}},
  {id: 4, value: 'Last 14 days', selectedDays: {from: TODAY - 14, to: TODAY}},
  {id: 5, value: 'Today', selectedDays: {from: TODAY, to: TODAY}},
  {id: 6, value: 'Yesterday', selectedDays: {from: YESTERDAY, to: YESTERDAY}},
  {id: 7, value: 'Last 7 days', selectedDays: {from: TODAY - 7, to: TODAY}},
  {id: 8, value: 'Last 14 days', selectedDays: {from: TODAY - 14, to: TODAY}},
  {id: 9, value: 'Today', selectedDays: {from: TODAY, to: TODAY}},
  {id: 10, value: 'Yesterday', selectedDays: {from: YESTERDAY, to: YESTERDAY}},
  {id: 11, value: 'Last 7 days', selectedDays: {from: TODAY - 7, to: TODAY}},
  {id: 12, value: 'Last 14 days', selectedDays: {from: TODAY - 14, to: TODAY}}
];

export class CalendarPanelExample extends React.Component {

  render() {
    return (
      <Card>
        <CalendarPanel
          presets={presets}
          onCancel={() => alert('cancel')}
          onSubmit={(e, selectedDays) => alert(`submit - ${selectedDays}`)}
          />
      </Card>
    );
  }
}


