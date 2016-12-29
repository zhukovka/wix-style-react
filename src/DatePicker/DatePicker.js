import React, {Component} from 'react';
import ReactDatepicker from 'react-datepicker';
import DatePickerInput from './DatePickerInput';
import moment from 'moment';
import './DatePicker.scss';

export default class DatePicker extends Component {
  static propTypes = {
    style: React.PropTypes.object,
    value: React.PropTypes.object,
    onChange: React.PropTypes.func.isRequired,
    filterDate: React.PropTypes.func,
    excludePastDates: React.PropTypes.bool
  };

  static defaultProps = {
    style: {
      width: 150
    },

    filterDate: () => true,
    excludePastDates: false
  };

  constructor() {
    super();

    this.filterDate = this.filterDate.bind(this);
  }

  filterDate(date) {
    if (this.props.excludePastDates) {
      if (date < moment().startOf('d')) {
        return false;
      }
    }

    return this.props.filterDate(date);
  }

  renderInput() {
    return (
      <DatePickerInput style={this.props.style}/>
    );
  }

  render() {
    return (
      <div className="wix-datepicker">
        <ReactDatepicker
          {...this.props}
          selected={this.props.value}
          onChange={this.props.onChange}
          customInput={this.renderInput()}
          filterDate={this.filterDate}
          />
      </div>
    );
  }
}
