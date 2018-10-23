import React from 'react';

import DropdownLayout from '../DropdownLayout';
import {DIVIDER_OPTION_VALUE} from '../DropdownLayout/DropdownLayout';
import defaults from 'lodash/defaults';

const TODAY = new Date();
const NEXT_WEEK = cloneWithDaysOffset(TODAY, 7);

export const buildPreset = ({selectedDays, month, text}) => {
  return {
    value: <Text ellipsis weight="normal">{text}</Text>
  };
};

export const buildDivider = () => {
  return {value: DIVIDER_OPTION_VALUE};
};

export class CalendarPanelPresetsExample extends React.Component {

  state = {
    selectedDays: {from: TODAY, to: NEXT_WEEK},
    month: TODAY
  }

  render() {

    let options = [
      buildPreset({
        selectedDays: {from: TODAY, to: TODAY},
        text: 'TODAY'
      }),
      buildDivider(),
      buildPreset({
        selectedDays: {from: TODAY, to: NEXT_WEEK},
        text: 'Next 7 days'
      })
    ];

    options = options.map((o, index) => {
      return defaults(
        {...o, id: index},
        {month: o.selectedDays.from}
      );
    });

    const selectedOption = options.find(
      o => isSelectedDaysEqual(this.state.selectedDays, o.selectedDays));

    return (
      <div>
        <DropdownLayout
          visible
          maxHeightPixels={342 - 18}
          inContainer
          options={options}
          onSelect={option => {
            const {selectedDays, month} = option;
            this.setState({selectedDays, month});
          }}
          selectedId={selectedOption ? selectedOption.id : -1}
          />

      </div>
    );
  }
}


function isEqualDate(a, b) {
  return a.getDate() === b.getDate();
}

function isSelectedDaysEqual(a, b) {
  // TODO: support missing from or missing to
  return a && b &&
    a.from && b && b.from && isEqualDate(a.from, b.from) &&
    a.to && b.to && isEqualDate(a.to, b.to);
}

function cloneWithDaysOffset(dateObj, offset) {
  const newDate = new Date(dateObj.getTime());
  newDate.setDate(dateObj.getDate() + offset);
  return newDate;
}

