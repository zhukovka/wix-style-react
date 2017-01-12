import styles from './Checkbox.scss';
import uniqueId from 'lodash.uniqueid';
import React from 'react';
import WixComponent from '../WixComponent';
import classNames from 'classnames';
import SvgV from '../svg/V';

class Checkbox extends WixComponent {
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
        <input type="checkbox" id={id} checked={checked} disabled={disabled} onChange={onChange}/>
        <label htmlFor={id}>
          <div className={styles.checkbox}>
            <div className={styles.inner}>
              {checkedSymbol}
            </div>
          </div>
          <div className={styles.children}>{this.props.children}</div>
        </label>
      </div>
    );
  }
}

Checkbox.propTypes = {
  checked: React.PropTypes.bool.isRequired,
  disabled: React.PropTypes.bool,
  onChange: React.PropTypes.func.isRequired,
  hover: React.PropTypes.bool,        // FOR AUTOMATIC TESTING
  active: React.PropTypes.bool,       // FOR AUTOMATIC TESTING
  children: React.PropTypes.any,
  id: React.PropTypes.string,
  indeterminate: React.PropTypes.bool
};

Checkbox.defaultProps = {
  checked: false,
  indeterminate: false,
  onChange: () => { }
};

export default Checkbox;
