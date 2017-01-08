import React from 'react';
import uniqueId from 'lodash.uniqueid';
import RadioButton from './RadioButton';
import styles from './RadioGroup.scss';

class RadioGroup extends React.Component {
  constructor(props) {
    super(props);
    this.name = uniqueId();

    if (props.children.some(child => child.type.name !== 'RadioButton')) {
      throw new Error(
        'RadioGroup: Invalid RadioButtons provided. Hint: RadioButton is not allowed to be encapsulated by div'
      );
    }
  }

  render() {
    const {onChange, disabledRadios, value, vAlign, id} = this.props;

    return (
      <div className={styles.wrapper} id={id}>
        {React.Children.map(this.props.children, radio => (
          <RadioGroup.Radio
            value={radio.props.value}
            name={this.name}
            onChange={onChange}
            vAlign={vAlign}
            disabled={disabledRadios.indexOf(radio.props.value) !== -1}
            checked={radio.props.value === value}
            >
            {radio.props.children}
          </RadioGroup.Radio>
        ))}
      </div>
    );
  }
}

RadioGroup.propTypes = {
  onChange: React.PropTypes.func,
  value: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number]),
  disabledRadios: React.PropTypes.arrayOf(React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number])),
  vAlign: React.PropTypes.oneOf(['center', 'top']),
  id: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number]),
  children: React.PropTypes.arrayOf((propValue, key) => {
    if (propValue[key].type.name !== 'RadioButton') {
      return new Error(`InputWithOptions: Invalid Prop children was given. Validation failed on child number ${key}`);
    }
  })
};

RadioGroup.defaultProps = {
  disabledRadios: [],
  onChange: () => {},
  value: '',
  vAlign: 'center'
};

RadioGroup.Radio = RadioButton;

RadioGroup.displayName = 'RadioGroup';

export default RadioGroup;
