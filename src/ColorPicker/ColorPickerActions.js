import React from 'react';
import { func } from 'prop-types';

import IconButton from '../IconButton';
import X from '../new-icons/X';
import Check from '../new-icons/Check';

import css from './ColorPickerActions.scss';

const ColorPickerActions = ({
  onCancel,
  onConfirm,
  onMouseDownCancel,
  onMouseDownConfirm,
}) => (
  <div className={css.root}>
    <IconButton
      dataHook="color-picker-cancel-button"
      size="small"
      priority="secondary"
      onClick={onCancel}
      onMouseDown={onMouseDownCancel}
    >
      <X />
    </IconButton>
    <IconButton
      dataHook="color-picker-confirm-button"
      size="small"
      onClick={onConfirm}
      onMouseDown={onMouseDownConfirm}
    >
      <Check />
    </IconButton>
  </div>
);

ColorPickerActions.propTypes = {
  onCancel: func.isRequired,
  onConfirm: func.isRequired,
  onMouseDownCancel: func,
  onMouseDownConfirm: func,
};

export default ColorPickerActions;
