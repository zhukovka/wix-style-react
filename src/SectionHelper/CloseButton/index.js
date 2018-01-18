import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../Button';
import Close from '../../Icons/dist/components/Close';

const CloseButton = ({onClick}) => (
  <Button
    dataHook="close-btn"
    height="medium"
    theme="close-transparent"
    type="button"
    onClick={onClick}
    >
    <Close size="6px"/>
  </Button>
);

CloseButton.displayName = 'SectionHelper.CloseButton';

CloseButton.propTypes = {
  onClick: PropTypes.func
};

CloseButton.defaultProps = {
  onClick: e => e.preventDefault()
};

export default CloseButton;
