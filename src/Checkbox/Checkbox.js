import styles from './Checkbox.scss';
import {any, bool, func, oneOf, string} from 'prop-types';
import uniqueId from 'lodash.uniqueid';
import React from 'react';
import classNames from 'classnames';
import SvgV from '../svg/V';
import WixComponent from '../BaseComponents/WixComponent';
import Label from '../Label/Label';

class Checkbox extends WixComponent {
  static propTypes = {
    active: bool,       // FOR AUTOMATIC TESTING
    checked: bool,
    children: any,
    disabled: bool,
    id: string,
    indeterminate: bool,
    hover: bool,        // FOR AUTOMATIC TESTING
    size: oneOf(['medium', 'large']),
    onChange: func,
  }

  static defaultProps = {
    size: 'medium',
    onChange: () => { },
  }

  render() {
    const {id = uniqueId(), checked, indeterminate, disabled, hover, active, size, onChange} = this.props;

    const classname = classNames({
      [styles.wrapper]: true,
      [styles.checked]: checked,
      [styles.unchecked]: !checked,
      [styles.hover]: hover,
      [styles.active]: active,
      [styles.disabled]: disabled,
    });

    const checkedSymbol = indeterminate ? <div className={styles.indeterminate}/> : <SvgV/>;

    return (
      <div className={classname} >
        <input type="checkbox" id={id} checked={checked} disabled={disabled} onChange={disabled ? null : onChange}/>
        <Label for={id} appearance="T1.1">
          <div className={classNames(styles.checkbox, styles[size])}>
            <div className={styles.inner}>
              {checkedSymbol}
            </div>
          </div>
          <div className={styles.children}>{this.props.children}</div>
        </Label>
      </div>
    );
  }
}

export default Checkbox;
