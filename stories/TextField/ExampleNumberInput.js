import React from 'react';
import PropTypes from 'prop-types';

import FormField from 'wix-style-react/FormField';
import Input from 'wix-style-react/Input';

class NumberInput extends React.Component {
  state = {
    value: 1,
  };

  static isValidNumber(value) {
    return !Number.isNaN(Number.parseInt(value));
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

  render() {
    const { min, max } = this.props;
    return (
      <Input
        type="number"
        min={min}
        max={max}
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
