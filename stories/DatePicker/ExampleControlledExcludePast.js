import React from 'react';
import {DatePicker} from 'wix-style-react';

class ControlledDatePicker extends React.Component {
  constructor(params) {
    super(params);

    this.state = {
      value: null
    };
  }

  render() {
    return (
      <DatePicker
        value={this.state.value}
        onChange={value => this.setState({value})}
        dateFormat="DD/MM/YYYY"
        excludePastDates={true}
        />
    );
  }
}

export default ControlledDatePicker;
