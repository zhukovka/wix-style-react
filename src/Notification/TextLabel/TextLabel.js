import React, {PropTypes} from 'react';
import Label from '../../Label';

const TextLabel = ({children}) => (
  <Label appearance="T1.2">
    {children}
  </Label>
);

TextLabel.propTypes = {
  children: PropTypes.any
};

TextLabel.displayName = 'Notification.TextLabel';

export default TextLabel;
