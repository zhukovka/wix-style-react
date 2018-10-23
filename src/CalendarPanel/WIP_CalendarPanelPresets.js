import React from 'react';
import PropTypes from 'prop-types';

import DropdownLayout from '../DropdownLayout';

// TODO: make static
function isEqualDate(a, b) {
  return a.getDate() === b.getDate();
}

// TODO: make static
function isSelecteDaysEqual(a, b) {
  // TODO: support missing from or missing to
  return a && b &&
    a.from && b && b.from && this.isEqualDate(a.from, b.from) &&
    a.to && b.to && this.isEqualDate(a.to, b.to);
}

export const Preset = ({selectedDays, month, children}) => {
  <Text ellipsis weight="normal">{children}</Text>
}

export const CalendarPanelPresets = () => {
  
  const { presets, onSelect, selectedDays } = this.props

  const options = presets.map((c, index)=> {
    if (c.type=='Preset')
    return {
      id: index,
      value: c.props.children
    }
  });
  
  return (
    <DropdownLayout
      visible
      maxHeightPixels={342 - 18}
      inContainer
      options={this.props.}
      onSelect={onSelect}
      selectedId={selectedOption ? selectedOption.id : -1}
      />

  );
};

const SelectedDaysPropType = PropTypes.shape({
  from: PropTypes.object, //Date
  to: PropTypes.object, //Date
});

CalendarPanelPresets.propTypes = {
  seletedDays: SelectedDaysPropType,
  onSelect: PropTypes.func.isRequired,
  presets: PropTypes.arrayOf(PropTypes.oneOf([
    PropTypes.shape({
      selectedDays: SelectedDaysPropType.isRequired,
      month: PropTypes.object, // Date
    }),
    
  ]).isRequired, 
  
}
