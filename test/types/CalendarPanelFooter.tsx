import * as React from 'react';
import CalendarPanelFooter from '../../src/CalendarPanelFooter';
import {calendarPanelFooterTestkitFactory} from '../../testkit';
import {calendarPanelFooterTestkitFactory as calendarPanelFooterEnzymeTestkitFactory} from '../../testkit/enzyme';
import {mount} from 'enzyme';

function testkits() {
  const vanilla = calendarPanelFooterTestkitFactory({
    dataHook: 'hi',
    wrapper: document.createElement('div')
  });

  vanilla.exists();

  const enzyme = calendarPanelFooterEnzymeTestkitFactory({
    dataHook: 'shbem',
    wrapper: mount(<div />)
  });
}

function CalendarPanelFooterWithMandatoryProps() {
  return (
    <CalendarPanelFooter
      dateToString={d => ''}
      primaryActionDisabled
      primaryActionLabel=""
      primaryActionOnClick={e => undefined}
      secondaryActionLabel=""
      secondaryActionOnClick={e => undefined}
    />
  );
}

function CalendarPanelFooterWithAllProps() {
  return (
    <CalendarPanelFooter
      dateToString={d => ''}
      primaryActionDisabled
      primaryActionLabel=""
      primaryActionOnClick={e => undefined}
      secondaryActionLabel=""
      secondaryActionOnClick={e => undefined}
      dataHook="hook"
      selectedDays={new Date()}
    />
  );
}
