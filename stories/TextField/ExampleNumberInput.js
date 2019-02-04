import React from 'react';

import FormField from 'wix-style-react/FormField';
import Input from 'wix-style-react/Input';

const min = -5;
const max = 5;

/**
 *This example does NOT cover all edge-cases, does not support:
 * - step validation
 * - snap-to-stap
 * - correct error messages
 */
export default class ExampleNumberInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '0' };
  }

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  handleTickerUp = () => {
    this.applyStep(1);
  };

  handleTickerDown = () => {
    this.applyStep(-1);
  };

  applyStep(step) {
    const currentValue = Number.parseInt(this.state.value);
    if (Number.isNaN(currentValue)) {
      return;
    } else {
      this.setState({
        value: Math.min(Math.max(currentValue + step, min), max),
      });
    }
  }

  render() {
    const value = this.state.value;
    const numberValue = Number.parseInt(value);
    const isValidNumber =
      !Number.isNaN(numberValue) && !(numberValue < min || numberValue > max);
    const errorProps =
      isValidNumber || value === '' || value === '-'
        ? {}
        : {
            status: 'error',
            statusMessage: `Number must be between ${min} and ${max}`,
          };

    return (
      <FormField label="This is the FormField label">
        <Input
          type="number"
          value={this.state.value}
          onChange={this.handleChange}
          placeholder="Enter an integer number"
          min={min}
          max={max}
          {...errorProps}
          suffix={
            <Input.Ticker
              onDown={this.handleTickerDown}
              onUp={this.handleTickerUp}
            />
          }
        />
      </FormField>
    );
  }
}
