import React, {PropTypes} from 'react';
import uniqueId from 'lodash.uniqueid';
import RadioButton from './RadioButton/RadioButton';
import styles from './RadioGroup.scss';
import WixComponent from '../WixComponent';

class RadioGroup extends WixComponent {
  constructor(props) {
    super(props);
    this.name = uniqueId('RadioGroup_');
    if (!!props.children && props.children.some(child => child.type.name !== 'RadioButton')) {
      throw new Error(
        'RadioGroup: Invalid RadioButtons provided. Hint: RadioButton is not allowed to be encapsulated by div'
      );
    }
  }

  render() {
    const {onChange, disabledRadios, value, vAlign, display} = this.props;

    return (
      <div className={styles[display]}>
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
  onChange: PropTypes.func,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  disabledRadios: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
  vAlign: PropTypes.oneOf(['center', 'top']),
  display: PropTypes.oneOf(['vertical', 'horizontal']),
  children: PropTypes.arrayOf((propValue, key) => {
    if (propValue[key].type.name !== 'RadioButton') {
      return new Error(`InputWithOptions: Invalid Prop children was given. Validation failed on child number ${key}`);
    }
  })
};

RadioGroup.defaultProps = {
  disabledRadios: [],
  onChange: () => {},
  value: '',
  vAlign: 'center',
  display: 'vertical'
};

RadioGroup.Radio = RadioButton;

RadioGroup.displayName = 'RadioGroup';

export default RadioGroup;
