import React from 'react';
import PropTypes from 'prop-types';

import {Toolbar, ItemGroup, Item} from '../TableToolbar/Toolbar';
import Calendar from '../Calendar';
import DropdownLayout from '../DropdownLayout';
import Button from '../Button';
import Panel from '../Panel';

import style from './CalendarPanel.st.css';

function renderSidebar(props) {
  let options = this.props.presets;

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

function renderFooter(props) {
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

export const CalendarPanel = (props)=> {

  const selectionMode = 'range';

  const calendar = (
    <Calendar
            selectionMode={selectionMode},
            numOfMonths={2}
            month={this.state.month},
            onMonthChange={(month)=>this.setState({month})}
            selectedDays={this.state.selectedDays}
            onSelectedDaysChange={(selectedDays)=>this.setState({selectedDays})}
          />
  );
    return (
      <Panel className={calendarPanelStyles.calendarPanel}>
        <PanelBody>
          
        </PanelBody>
        <PanelSidebar>
          <CalendarPanelPresets
            selectedDays= {this.state.selectedDays}
            onSelect={({selectedDays, month})=> this.setState({selectedDays, month})}
          >
            <Preset selectedDays={{from: TODAY, to: TODAY}}>Today</Preset>,
            <Preset selectedDays={{from: TODAY-1, to: TODAY-1}}>Yesterday</Preset>,
            <Preset selectedDays={{from: TODAY-7, to: TODAY}}>Last 7 days</Preset>,
            <Preset devider/>,
            <Preset selectedDays={{selectedDays: {from: TODAY, to: TODAY+14}}}>Next 14 days</Preset>
          </CalendarPanelPresets>
        </PanelSide>
        <PanelFooter>
          <CalendarPanelFooter
            selectionMode
            selectedDaysDisplay={
              <Text size='small' secondary>
                {this.state.selectedDays.toLocaleDateString()}
              </Text>
            }
            onCancel={() => alert('cancel')}
            onSubmit={() => alert(`submit - ${this.state.selectedDays}`)}
          >
        </PanelFooter>
      </Panel>
    )
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
