import React from 'react';
import {DatePicker} from 'wix-style-react';
import moment from 'moment';

class ExampleTriggerOpen extends React.Component {
  constructor(params) {
    super(params);

    this.state = {
      value: moment('03/09/2017', 'DD/MM/YYYY')
    };
  }

  openDatePicker() {
    this.datePicker.open();
  }

  closeDatePicker() {
    this.datePicker.close();
  }

  render() {
    return (
      <div>
        <button onClick={() => this.openDatePicker()}>open calendar</button>
        <button onClick={() => this.closeDatePicker()}>close calendar</button>
        <DatePicker
          ref={dp => this.datePicker = dp}
          dataHook={'story-datepicker-default'}
          value={this.state.value}
          onChange={value => this.setState({value})}
          dateFormat="DD/MM/YYYY"
          />
      </div>
    );
  }
}

export default ExampleTriggerOpen;
