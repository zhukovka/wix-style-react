import React from 'react';
import PropTypes from 'prop-types';

import {Toolbar, ItemGroup, Item} from '../../src/TableToolbar/Toolbar';
import Calendar from '../../src/Calendar';
import DropdownLayout from '../../src/DropdownLayout';
import Button from '../../src/Button';

import {SplitPane} from './SplitPane';

import style from './CalendarPanel.st.css';

export class CalendarPanel extends React.Component {

  state = {
    selectedDays: new Date('2017/05/01')
  };

  onChange(selectedDays) {
    this.setState({selectedDays});
  }

  renderSidePane() {
    return (
      <div className={style.sidePane}>
        <DropdownLayout
          visible
          inContainer
          options={this.props.presets}
          onSelect={option => this.setState({selectedDays: option.selectedDays})}
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
  calendar: PropTypes.func
};

