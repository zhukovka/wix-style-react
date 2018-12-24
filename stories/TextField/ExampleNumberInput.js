import React from 'react';
import PropTypes from 'prop-types';

import FormField from 'wix-style-react/FormField';
import Input from 'wix-style-react/Input';

const translate = text => {
  // TODO: use real translate function
  return text;
};

class NumberInput extends React.Component {
  state = {
    value: 1,
  };

  isValidNumber(value) {
    const { min, max } = this.props;
    const numberValue = Number.parseInt(value);
    return (
      !Number.isNaN(numberValue) && !(numberValue < min || numberValue > max)
    );
  }

  handleTickerUp = () => {
    this.applyStep(1);
  };

  handleTickerDown = () => {
    this.applyStep(-1);
  };

  applyStep = step => {
    this.setState(prevState => {
      const currentValue = Number.parseInt(prevState.value);
      if (Number.isNaN(currentValue)) {
        return null;
      } else {
        const nextValue = currentValue + step;
        const { min, max } = this.props;
        if (nextValue > max) {
          return { value: max };
        } else if (nextValue < min) {
          return { value: min };
        } else {
          return { value: nextValue };
        }
      }
    });
  };

  handleChange = event => {
    const numberValue = Number.parseInt(event.target.value);
    if (Number.isNaN(numberValue)) {
      this.setState({ value: event.target.value });
    } else {
      this.setState({ value: numberValue }, () => {
        this.props.onChange(this.state.value);
      });
    }
  };

  getErrorProps() {
    const value = this.state.value;
    const { min, max } = this.props;
    return this.isValidNumber(value) || value === '' || value === '-'
      ? {}
      : {
          status: 'error',
          statusMessage: translate(`Number must be between ${min} and ${max}`),
        };
  }

  render() {
    const { min, max } = this.props;
    return (
      <Input
        type="number"
        min={min}
        max={max}
        {...this.getErrorProps()}
        placeholder="Enter an integer number"
        value={this.state.value}
        onChange={this.handleChange}
        suffix={
          <Input.Ticker
            onDown={this.handleTickerDown}
            onUp={this.handleTickerUp}
          />
        }
      />
    );
  }
}

NumberInput.propTypes = {
  /** Called when number value change. Not called for invalid numbers or numbers outside the given range (min,max props) */
  onChange: PropTypes.func,
  value: PropTypes.number,
  min: PropTypes.number,
  max: PropTypes.number,
};

export default class ExampleNumberInput extends React.Component {
  state = {
    value: 0,
  };

  handleChange = value => {
    this.setState({ value });
  };

  render() {
    return (
      <FormField label="This is the FormField label">
        <NumberInput
          value={this.state.value}
          onChange={this.handleChange}
          min={0}
          max={5}
        />
      </FormField>
    );
  }
}
