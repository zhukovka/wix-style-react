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
      !Number.isNaN(numberValue) &&
      !(numberValue < min || numberValue > max) &&
      (numberValue - min) % props.step === 0 // Got issue if step is a fraction !
    );
  }

  function handleTickerUp() {
    applyStep(props.step);
  }

  function handleTickerDown() {
    applyStep(-props.step);
  }

  function applyStep(step) {
    if (step === 0) {
      return;
    }
    const currentValue = Number.parseInt(props.value);
    const { min, max } = props;
    let nextValue;
    if (Number.isNaN(currentValue)) {
      nextValue = min;
    } else {
      if ((currentValue - min) % props.step === 0) {
        nextValue = Math.min(Math.max(currentValue + step, min), max);
      } else {
        const stepAbs = Math.abs(step);
        const next = Math.ceil((currentValue - min) / stepAbs) * stepAbs + min;
        const prev = Math.floor((currentValue - min) / stepAbs) * stepAbs + min;

        nextValue = step > 0 ? next : prev;
      }
    }
    props.onChange(nextValue.toString());
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
    value: '0',
  };

  handleChange = value => {
    this.setState({ value });
  };

  render() {
    const min = 0;
    const max = 10;
    const step = 5;
    return (
      <FormField label="This is the FormField label">
        <NumberInput
          value={this.state.value}
          onChange={this.handleChange}
          placeholder="Enter an integer number"
          min={min}
          max={max}
          step={step}
          errorMessage={translate(
            `Number must be between ${min} and ${max}, with steps of ${step}.`,
          )}
        />
      </FormField>
    );
  }
}
