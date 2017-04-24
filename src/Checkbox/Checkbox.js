import styles from './Checkbox.scss';
import {any, bool, func, string} from 'prop-types';
import uniqueId from 'lodash.uniqueid';
import React from 'react';
import classNames from 'classnames';
import SvgV from '../svg/V';
import WixComponent from '../WixComponent';
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
    onChange: func,
  }

  static defaultProps = {
    onChange: () => { }
  }

  render() {
    const {id = uniqueId(), checked, indeterminate, disabled, hover, active, onChange} = this.props;

    const classname = classNames({
      [styles.wrapper]: true,
      [styles.checked]: checked,
      [styles.unchecked]: !checked,
      [styles.hover]: hover,
      [styles.active]: active,
      [styles.disabled]: disabled
    });

    const checkedSymbol = indeterminate ? <div className={styles.indeterminate}/> : <SvgV/>;

    return (
      <div className={classname} >
        <input type="checkbox" id={id} checked={checked} disabled={disabled} onChange={disabled ? null : onChange}/>
        <Label for={id} appearance="T1.1">
          <div className={styles.checkbox}>
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
