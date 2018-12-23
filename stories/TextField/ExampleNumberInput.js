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

  handleTickerClick = step => {
    NumberInput.isValidNumber(this.state.value) &&
      this.setState(prevState => ({
        value: prevState.value + step,
      }));
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
    return (
      <Input
        type="number"
        placeholder="Enter an integer number"
        value={this.state.value}
        onChange={this.handleChange}
        suffix={
          <Input.Ticker
            onDown={() => this.handleTickerClick(-1)}
            onUp={() => this.handleTickerClick(1)}
          />
        }
      />
    );
  }
}

NumberInput.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.number,
};

export default class TextFieldNumberInputExample extends React.Component {
  state = {
    value: 0,
  };

  handleChange = value => {
    this.setState({ value });
  };

  render() {
    return (
      <FormField label="This is the FormField label">
        <NumberInput value={this.state.value} onChange={this.handleChange} />
      </FormField>
    );
  }
}
