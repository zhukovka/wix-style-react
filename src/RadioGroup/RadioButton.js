import React from 'react';
import uniqueId from 'lodash.uniqueid';
import styles from './RadioGroup.scss';
import classNames from 'classnames';

class RadioButton extends React.Component {
  constructor(props) {
    super(props);
    this.id = uniqueId();
  }

  render() {
    const {value, vAlign, checked, disabled, name, onChange} = this.props;

    const radioClasses = classNames({
      [styles.radio]: true,
      [styles.checked]: checked,
      [styles.disabled]: disabled
    });

    const labelClasses = classNames({
      [styles.vcenter]: vAlign === 'center',
      [styles.vtop]: vAlign === 'top'
    });

    return (
      <div className={styles.wrapper}>
        <input
          type="radio"
          name={name}
          value={value}
          id={this.id}
          checked={checked}
          disabled={disabled}
          onChange={() => (!checked && !disabled) ? onChange(value) : null}
          />
        <label htmlFor={this.id} className={labelClasses} >
          <div className={radioClasses}/>
          <div className={styles.children}>
            {this.props.children}
          </div>
        </label>
      </div>
    );
  }
}

RadioButton.displayName = 'RadioGroup.Button';

RadioButton.propTypes = {
  value: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number]),
  vAlign: React.PropTypes.oneOf(['center', 'top']),
  name: React.PropTypes.string,
  onChange: React.PropTypes.func,
  checked: React.PropTypes.bool,
  disabled: React.PropTypes.bool,
  children: React.PropTypes.any
};

export default RadioButton;
