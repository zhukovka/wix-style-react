import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../Button';
import TextButton from '../../TextButton';

const ActionButton = ({ children, onClick, type, link, target }) => {
  const commonProps = {
    dataHook: 'notification-cta-button',
    onClick: e => onClick(e),
  };

  if (type === 'textLink') {
    return (
      <TextButton
        underline="always"
        skin="light"
        as="a"
        href={link}
        target={target}
        {...commonProps}
      >
        {children}
      </TextButton>
    );
  } else {
    return (
      <Button size="small" skin="transparent" {...commonProps}>
        {children}
      </Button>
    );
  }
};

ActionButton.propTypes = {
  children: PropTypes.any,
  onClick: PropTypes.func,
  link: PropTypes.string,
  type: PropTypes.string,
  target: PropTypes.string,
};

ActionButton.defaultProps = {
  onClick: e => e.preventDefault(),
  type: 'button',
  target: '_self',
};

ActionButton.displayName = 'Notification.ActionButton';

export default ActionButton;
