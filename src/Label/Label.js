import React from 'react';
import {Typography} from '../Typography';

export default function Label(props) {

  const {id, appearance, children, for: forAttr} = props;
  const className = Typography[appearance];

  return (
    <label className={className} id={id} htmlFor={forAttr}>
      {children}
    </label>
  );
}

Label.displayName = 'Label';

const acceptableAppearances = Object.keys(Typography).filter(type => type.startsWith('T'));

Label.propTypes = {
  id: React.PropTypes.string,
  for: React.PropTypes.string,
  appearance: React.PropTypes.oneOf(acceptableAppearances).isRequired,
  children: React.PropTypes.any
};
