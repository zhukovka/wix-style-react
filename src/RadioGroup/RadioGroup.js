import React from 'react';
import uniqueId from 'lodash.uniqueid';
import styles from './RadioGroup.scss';
import classNames from 'classnames';
import _ from 'lodash';

class RadioGroup extends React.Component {
  constructor(props) {
    super(props);
    this.id = uniqueId();
  }

  render() {
    return (<div>{this.props.children}</div>);
  }

  getChildContext() {
    return {
      radioId: this.id,
      radioSelected: this.props.value,
      radioOnChange: this.props.onChange,
      disabledRadios: this.props.disabledRadios,
    };
  }
}

RadioGroup.displayName = 'RadioGroup';

RadioGroup.propTypes = {
  onChange: React.PropTypes.func.isRequired,
  value: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number]),
  disabledRadios: React.PropTypes.arrayOf(React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number])),
  children: React.PropTypes.any
};

RadioGroup.defaultProps = {
  disabledRadios: []
};

RadioGroup.childContextTypes = {
  radioOnChange: React.PropTypes.func,
  radioId: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number]),
  radioSelected: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number]),
  disabledRadios: React.PropTypes.arrayOf(React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number]))
};

class RadioButton extends React.Component {
  constructor(props) {
    super(props);
    this.id = uniqueId();
  }

  render() {
    const {value, vAlign} = this.props;

    const checked = this.context.radioSelected === value;
    const disabled = _.indexOf(this.context.disabledRadios, value) !== -1;

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
          name={this.context.radioId}
          value={value}
          id={this.id}
          checked={checked}
          disabled={disabled}
          onChange={() => this.context.radioOnChange(value)}
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
  vAlign: React.PropTypes.oneOf(['center', 'top']).isRequired,
  children: React.PropTypes.any
};

RadioButton.defaultProps = {
  vAlign: 'center'
};

RadioButton.contextTypes = {
  radioOnChange: React.PropTypes.func,
  radioId: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number]),
  radioSelected: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number]),
  disabledRadios: React.PropTypes.arrayOf(React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number]))
};

RadioGroup.Radio = RadioButton;

export default RadioGroup;
