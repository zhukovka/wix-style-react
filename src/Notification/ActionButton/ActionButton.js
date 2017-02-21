import React, {PropTypes} from 'react';
import Button from '../../Button';
import TextLink from '../../TextLink';

const ActionButton = ({children, onClick, type, link}) => {
  if (type === 'textLink') {
    return (
      <TextLink forceUnderline darkBackground link={link} onClick={e => onClick(e)}>
        {children}
      </TextLink>
    );
  } else {
    return (
      <Button height="small" theme="transparent" onClick={e => onClick(e)}>
        {children}
      </Button>
    );
  }
};

ActionButton.propTypes = {
  children: PropTypes.string,
  onClick: PropTypes.func,
  link: PropTypes.string,
  type: PropTypes.string
};

ActionButton.defaultProps = {
  onClick: e => e.preventDefault(),
  type: 'button'
};

ActionButton.displayName = 'Notification.ActionButton';

export default ActionButton;
