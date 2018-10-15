import React from 'react';

import {Toolbar, ItemGroup, Item} from '../../src/TableToolbar/Toolbar';
import Calendar from '../../src/Calendar';
import DropdownLayout from '../../src/DropdownLayout';
import Button from '../../src/Button';
import Card from '../../src/Card';
import {SplitPane} from './SplitPane';


const TODAY = new Date();
const options = [
  {id: 1, value: 'Last 7 days', selectedDays: {from: TODAY - 7, to: TODAY}},
  {id: 2, value: 'Last 14 days', selectedDays: {from: TODAY - 14, to: TODAY}}
];
export class CalendarPanel extends React.Component {

  state = {
    selectedDays: new Date('2017/05/01')
  };

  onChange(date) {
    this.setState({date});
  }

  renderSidePane() {
    return (
      <div style={{display: 'inline-block', width: '200px'}}>
        <DropdownLayout
          visible
          options={options}
          onSelect={option => this.setState({selectedDays: option.selectedDays})}
          />
      </div>
    );
  }

  renderFooter() {
    return (
      <Toolbar>
        <ItemGroup>
          <Item>
              Date Label
            </Item>
        </ItemGroup>
        <ItemGroup>
          <Item>
            <Button>
              Cancel
              </Button>
          </Item>
          <Item>
            <Button>
                Update
              </Button>
          </Item>
        </ItemGroup>
      </Toolbar>
    );
  }

  render() {
    return (
      <Card>
        <SplitPane split="horizontal">
          <SplitPane split="vertical">
            {this.renderSidePane()}
            <Calendar
              onChange={date => this.onChange(date)}
              value={this.state.selectedDays}
              />
          </SplitPane>
          {this.renderFooter()}
        </SplitPane>
      </Card>
    );
  }
}

