import React from 'react';
import PropTypes from 'prop-types';
import Label from '../../Label';

const TextLabel = ({children}) => (
  <Label appearance="T1.2" dataHook="notification-label" >
    {children}
  </Label>
);

TextLabel.propTypes = {
  children: PropTypes.any
};

TextLabel.displayName = 'Notification.TextLabel';

export default TextLabel;
