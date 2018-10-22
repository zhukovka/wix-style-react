import React from 'react';
import PropTypes from 'prop-types';

import {Toolbar, ItemGroup, Item} from '../TableToolbar/Toolbar';
import Calendar from '../Calendar';
import DropdownLayout from '../DropdownLayout';
import Button from '../Button';
import SplitPane from '../SplitPane';

import style from './CalendarPanel.st.css';

const TODAY = new Date();

export class CalendarPanel extends React.Component {

  state = {
    selectedDays: {from: TODAY, to: TODAY}
  };

  onChange(selectedDays) {
    this.setState({selectedDays});
  }

  // TODO: make static
  isEqualDate(a, b) {
    return a.getDate() === b.getDate();
  }

  // TODO: make static
  isSelecteDaysEqual(a, b) {
    // TODO: support missing from or missing to
    return a && b &&
      a.from && b && b.from && this.isEqualDate(a.from, b.from) &&
      a.to && b.to && this.isEqualDate(a.to, b.to);
  }

  renderSidePane() {
    let options = this.props.presets;

    if (!options) {
      options = [
        {id: 1, value: 'Today', selectedDays: TODAY}
      ];
    }


    const selectedOption = options.find(o => this.isSelecteDaysEqual(this.state.selectedDays, o.selectedDays));
    // FIXME: Dropdownlayout does NOT take all of the available height
    return (
      <div className={style.sidePane}>
        <DropdownLayout
          visible
          maxHeightPixels={342 - 18}
          inContainer
          options={options}
          onSelect={option => this.setState({selectedDays: option.selectedDays})}
          selectedId={selectedOption ? selectedOption.id : -1}
          />
      </div>
    );
  }

  renderFooter() {
    return (
      <Toolbar className={style.footer}>
        <ItemGroup>
          <Item>
            Date
          </Item>
        </ItemGroup>
        <ItemGroup>
          <Item layout="button">
            <Button onClick={e => this.props.onCancel && this.props.onCancel(e)}>
              Cancel
            </Button>
          </Item>
          <Item layout="button">
            <Button onClick={e => this.props.onSubmit && this.props.onSubmit(e, this.state.selectedDays)}>
              Update
            </Button>
          </Item>
        </ItemGroup>
      </Toolbar>
    );
  }

  render() {
    const calendarProps = {
      onChange: selectedDays => this.onChange(selectedDays),
      value: this.state.selectedDays
    };

    const calendar = this.props.calendar ? this.props.calendar(calendarProps) :
    (<Calendar
      {...calendarProps}
      />);

    return (
      <div {...style('root', {}, this.props)}>
        <SplitPane split="horizontal">
          <SplitPane split="vertical">
            {this.renderSidePane()}
            {calendar}
          </SplitPane>
          {this.renderFooter()}
        </SplitPane>
      </div>
    );
  }
}

CalendarPanel.propTypes = {
  // TODO: See if we can add a propType validator for a Date.
  /* A single Date or a range {from: Date, to:Date}. When passing this prop the Component is controlled.*/
  selectedDays: PropTypes.oneOf([
    PropTypes.object,
    PropTypes.arrayOf(PropTypes.object)
  ]),
  /* The initial range (uncontrolled). Range - single Date or a range {from: Date, to:Date}. When passing this prop (and not `selectedDays` then this component is uncontrolled).*/
  initialSelectedDays: PropTypes.oneOf([
    PropTypes.object,
    PropTypes.arrayOf(PropTypes.object)
  ]),
  onSelectedDaysChange: PropTypes.func,
  presets: PropTypes.arrayOf(PropTypes.object), // TODO: be more specific, reuqired selectedDays
  onCancel: PropTypes.func,
  onSubmit: PropTypes.func,
  /* a function that gets calendar props and should render a <Calendar/>*/
  calendar: PropTypes.func,
  mode: PropTypes.oneOf('day', 'single-range')
};

export default CalendarPanel;
