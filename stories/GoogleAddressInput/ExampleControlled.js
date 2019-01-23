import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GoogleAddressInput from 'wix-style-react/GoogleAddressInput';
import clients from 'wix-style-react/clients';

const style = {
  display: 'inline-block',
  padding: '0 5px 0',
  width: '400px',
  lineHeight: '22px',
  paddingBottom: '350px',
};

class ControlledGoogleAddressInput extends Component {
  static propTypes = {
    result: PropTypes.bool,
  };

  constructor({ value }) {
    super();
    this.state = { value };
    this.onSet = this.onSet.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onSet(event) {
    event && this.setState({ value: event.originValue });
  }

  onChange(event) {
    event && this.setState({ value: event.target.value });
  }

  render() {
    return (
      <GoogleAddressInput
        {...this.props}
        value={this.state.value}
        onSet={this.onSet}
        onChange={this.onChange}
        placeholder="Enter Address..."
        Client={clients.GoogleMapsClient}
        fallbackToManual
      />
    );
  }
}

export default () => (
  <div style={style}>
    <ControlledGoogleAddressInput />
  </div>
);