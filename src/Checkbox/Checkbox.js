import React from 'react';
import {node, bool, func, oneOf, string} from 'prop-types';
import uniqueId from 'lodash/uniqueId';
import classNames from 'classnames';
import CheckboxChecked from 'wix-ui-icons-common/system/CheckboxChecked';
import CheckboxIndeterminate from 'wix-ui-icons-common/system/CheckboxIndeterminate';

import styles from './Checkbox.scss';
import WixComponent from '../BaseComponents/WixComponent';
import Label from '../Label/Label';

/** a simple WixStyle checkbox */
class Checkbox extends WixComponent {
  static displayName = 'Checkbox';

  constructor(props) {
    super(props);

    this.state = {isFocused: false};
  }

  static propTypes = {
    /** used for automatic testing */
    active: bool,
    checked: bool,
    children: node,
    disabled: bool,
    hasError: bool,
    id: string,
    indeterminate: bool,

    /** used for automatic testing */
    hover: bool,
    size: oneOf(['medium', 'large']),
    onChange: func
  };

  static defaultProps = {
    checked: false,
    size: 'medium',
    onChange: e => {
      e.stopPropagation();
    }
  };

  _id = `${Checkbox.displayName}-${uniqueId()}`;

  handleInputBlur = () => {
    this.state.isFocused && this.setState({isFocused: false});
  }

  handleInputFocus = () => {
    !this.state.isFocused && this.setState({isFocused: true});
  }

  render() {
    const {
      id = this._id,
      checked,
      indeterminate,
      disabled,
      hasError,
      hover,
      active,
      size,
      onChange,
      children
    } = this.props;

    const classname = classNames(
      styles.root,
      indeterminate ? styles.indeterminate :
      checked ? styles.checked :
      styles.unchecked,
      {
        [styles.hover]: hover,
        [styles.active]: active,
        [styles.disabled]: disabled,
        [styles.hasError]: hasError,
        [styles.hasFocus]: this.state.isFocused
      }
    );

    return (
      <div className={classname}>
        <input
          type="checkbox"
          id={id}
          checked={checked}
          disabled={disabled}
          onChange={disabled ? null : onChange}
          style={{display: 'none'}}
          />

        <Label for={id} appearance={disabled ? 'T1.4' : 'T1.1'} dataHook="checkbox-label">
          <div
            className={classNames(styles.checkbox, styles[size])}
            tabIndex={disabled ? null : 0}
            onFocus={this.handleInputFocus}
            onBlur={this.handleInputBlur}
            >
            <div
              className={styles.inner}
              onClick={e => e.stopPropagation()}
              >
              {indeterminate ? <CheckboxIndeterminate/> : <CheckboxChecked/>}
            </div>
          </div>

          { children &&
            <div className={styles.children}>
              {children}
            </div>
          }
        </Label>
      </div>
    );
  }
}

export default Checkbox;
