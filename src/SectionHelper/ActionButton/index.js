import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../Backoffice/Button';

const ActionButton = ({children, onClick}) => {
  return (
    <Button height="small" theme="transparent" onClick={e => onClick(e)} dataHook="action-btn">
      {children}
    </Button>
  );
};

ActionButton.propTypes = {
  children: PropTypes.any,
  onClick: PropTypes.func
};

ActionButton.displayName = 'SectionHelper.ActionButton';

export default ActionButton;
