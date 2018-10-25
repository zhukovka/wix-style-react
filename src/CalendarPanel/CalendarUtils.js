import React from 'react';
import defaults from 'lodash/defaults';

import {DIVIDER_OPTION_VALUE} from '../DropdownLayout/DropdownLayout';
import Text from '../Text';
/**
 *
 * @param {selectedDays, month, text} args The `month` is a Date object of the month to be navigated to when the preset is selected.
 */
export function buildPreset({selectedDays, month, text}) {
  return {
    selectedDays,
    month,
    value: <Text ellipsis weight="normal">{text}</Text>
  };
}

export function applyPresetOptionsDefaults(presetOptions) {
  return presetOptions.map((presetOption, index) => {
    return defaults(
      {...presetOption, id: index},
      {month: presetOption.selectedDays.from}
    );
  });
}

export function buildDivider() {
  return {value: DIVIDER_OPTION_VALUE};
}

function isEqualDate(a, b) {
  return a.getDate() === b.getDate();
}

export function isSelectedDaysEqual(a, b) {
  // TODO: support missing from or missing to
  return a && b &&
    a.from && b && b.from && isEqualDate(a.from, b.from) &&
    a.to && b.to && isEqualDate(a.to, b.to);
}


