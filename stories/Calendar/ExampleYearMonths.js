import React from 'react';
import Calendar from '../../src/Calendar';

class YearMonthsCalendarExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      excludePastDates: true
    };
  }

  onChange(date) {
    this.setState({date});
  }

  render() {
    return (
      <Calendar
        showMonthDropdown
        showYearDropdown
        onChange={date => this.onChange(date)}
        value={this.state.date}
        />
    );
  }
}

export default () => <YearMonthsCalendarExample/>;
