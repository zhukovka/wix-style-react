import React from 'react';

import DropdownLayout from '../../src/DropdownLayout';

import {buildPreset, applyPresetOptionsDefaults, buildDivider} from '../../src/CalendarPanel';
import {TODAY, NEXT_WEEK, LAST_WEEK} from './dateUtils';

const options = applyPresetOptionsDefaults([
  buildPreset({
    selectedDays: {from: TODAY, to: TODAY},
    text: 'TODAY'
  }),
  buildDivider(),
  buildPreset({
    selectedDays: {from: TODAY, to: NEXT_WEEK},
    month: TODAY,
    text: 'Next 7 days'
  }),
  buildPreset({
    selectedDays: {from: LAST_WEEK, to: TODAY},
    month: TODAY,
    text: 'Last 7 days'
  })
]);
class CalendarPanelConsumer {
  state = {
    selectedDays: {from: TODAY, to: TODAY},
    month: TODAY
  }

  renderPresets() {

    const selectedOption = options.find(
      o => isSelectedDaysEqual(this.state.selectedDays, o.selectedDays));

    return (
      <div>
        <DropdownLayout
          visible
          maxHeightPixels={342 - 18}
          inContainer
          options={options}
          onSelect={option => {
            const {selectedDays, month} = option;
            this.setState({selectedDays, month});
          }}
          selectedId={selectedOption ? selectedOption.id : -1}
          />

      </div>
    );
  }

  render() {
    const selectionMode = 'single-range';

    return (
      <Panel className={calendarPanelStyles.calendarPanel}>
        <PanelBody>
          <Calendar
            selectionMode={selectionMode}
            numOfMonths={2}
            month={this.state.month}
            onMonthChange={month => this.setState({month})}
            selectedDays={this.state.selectedDays}
            onSelectedDaysChange={selectedDays => this.setState({selectedDays})}
            />
        </PanelBody>
        <PanelSidebar>
          {this.renderPresets()}
        </PanelSidebar>

        <PanelFooter>
          <Toolbar className={style.footer}>
            <ItemGroup>
              <Item>
                <Text size="small" secondary>
                  {this.state.selectedDays.toLocaleDateString()}
                </Text>
              </Item>
            </ItemGroup>
            <ItemGroup>
              <Item layout="button">
                <Button onClick={() => alert('cancel')}>
                    Cancel
                </Button>
              </Item>
              <Item layout="button">
                <Button onClick={() => alert(`submit - ${this.state.selectedDays}`)}>
                    Update
                </Button>
              </Item>
            </ItemGroup>
          </Toolbar>
        </PanelFooter>
      </Panel>
    );
  }
}

export class CalendarPanelPresetsExample extends React.Component {

  state = {
    selectedDays: {from: TODAY, to: NEXT_WEEK},
    month: TODAY
  }


}




