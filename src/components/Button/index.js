import React from 'react';
import {func, string, bool, object, any, oneOf} from 'prop-types';
import WixComponent from '../../BaseComponents/WixComponent';
import styles from './styles';
import {withStyles} from '../../providers/WixStyleProvider';
import Prefix from './components/Prefix';
import Suffix from './components/Suffix';

class Button extends WixComponent {
  static propTypes = {
    children: any,
    type: string,
    onClick: func,
    onMouseEnter: func,
    onMouseLeave: func,
    disabled: bool,
    height: oneOf(['small', 'medium', 'large', 'x-large']),
    classes: object,
    skin: oneOf(['standard', 'emptyStandard', 'danger', 'attention'])
  }

  static defaultProps = {
    height: 'medium',
    skin: 'standard'
  }

  static Prefix = Prefix;
  static Suffix = Suffix;
  static displayName = 'Button';

  render() {
    const {disabled, onClick, children, type, onMouseEnter, onMouseLeave, classes} = this.props;

    return (
      <button
        className={classes.button}
        onClick={onClick}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        disabled={disabled}
        type={type}
        >
        {children}
      </button>
    );
  }
}

export default withStyles(Button, styles);
