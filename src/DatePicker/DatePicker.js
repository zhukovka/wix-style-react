import React, {Component} from 'react';
import ReactDatepicker from 'react-datepicker';
import DatePickerInput from './DatePickerInput';
import './DatePicker.scss';

export default class DatePicker extends Component {
  static propTypes = {
    style: React.PropTypes.object,
    value: React.PropTypes.object,
    onChange: React.PropTypes.func.isRequired
  };

  static defaultProps = {
    style: {
      width: 150
    }
  };

  renderInput() {
    return (
      <DatePickerInput style={this.props.style}/>
    );
  }

  render() {
    return (
      <div className="wix-datepicker">
        <ReactDatepicker
          selected={this.props.value}
          onChange={this.props.onChange}
          customInput={this.renderInput()}
          {...this.props}
          />
      </div>
    );
  }
}
