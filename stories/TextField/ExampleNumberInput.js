import React from 'react';
import PropTypes from 'prop-types';

import FormField from 'wix-style-react/FormField';
import Input from 'wix-style-react/Input';

const translate = text => {
  // TODO: use real translate function
  return text;
};

const NumberInput = props => {
  function isValidNumber(value) {
    const { min, max } = props;
    const numberValue = Number.parseInt(value);
    return (
      !Number.isNaN(numberValue) && !(numberValue < min || numberValue > max)
    );
  }

  function handleTickerUp() {
    applyStep(props.step);
  }

  function handleTickerDown() {
    applyStep(-props.step);
  }

  function applyStep(step) {
    const currentValue = Number.parseInt(props.value);
    if (Number.isNaN(currentValue)) {
      props.onChange(props.value);
    } else {
      const nextValue = currentValue + step;
      const { min, max } = props;
      if (nextValue > max) {
        props.onChange(max);
      } else if (nextValue < min) {
        props.onChange(min);
      } else {
        props.onChange(nextValue);
      }
    }
  }

  function getErrorProps() {
    const value = props.value;
    return isValidNumber(value) || value === '' || value === '-'
      ? {}
      : {
          status: 'error',
          statusMessage: props.errorMessage,
        };
  }

  return (
    <Input
      {...props}
      {...getErrorProps()}
      onChange={e => props.onChange(e.target.value)}
      type="number"
      suffix={<Input.Ticker onDown={handleTickerDown} onUp={handleTickerUp} />}
    />
  );
};

NumberInput.propTypes = {
  /** Called with new value (not event) input value changes. Not called for invalid numbers or numbers outside the given range (min,max props) */
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  errorMessage: PropTypes.string,
  min: PropTypes.number,
  max: PropTypes.number,
  step: PropTypes.number,
};

NumberInput.defaultProps = {
  step: 1,
};

export default class ExampleNumberInput extends React.Component {
  state = {
    value: 0,
  };

  handleChange = value => {
    this.setState({ value });
  };

  render() {
    const min = -5;
    const max = 5;
    return (
      <FormField label="This is the FormField label">
        <NumberInput
          value={this.state.value}
          onChange={this.handleChange}
          placeholder="Enter an integer number"
          min={min}
          max={max}
          errorMessage={translate(`Number must be between ${min} and ${max}`)}
        />
      </FormField>
    );
  }
}
