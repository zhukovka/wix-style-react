import React, { Component } from 'react';

import ButtonOld from '../Backoffice/Button';
import ButtonNew from './Button';

// NOTE: This is a class an not an SFC because our Tooltip can NOT accept SFC as children.
class Button extends Component {
  render() {
    return (
      (this.props.upgrade && <ButtonNew {...this.props} />) || (
        <ButtonOld {...this.props} />
      )
    );
  }
}

Button.displayName = 'Button';

export default Button;
