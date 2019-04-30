import * as React from 'react';
import TimeInput from '../../src/TimeInput';
import * as moment from 'moment';
import { timeInputTestkitFactory } from '../../testkit';
import { timeInputTestkitFactory as timeInputEnzymeTestkitFactory } from '../../testkit/enzyme';
import { mount } from 'enzyme';

function testkits() {
  const vanilla = timeInputTestkitFactory({
    dataHook: 'hook',
    wrapper: document.createElement('div'),
  });

  console.log(vanilla.isAmPmIndicatorExist());

  const enzyme = timeInputEnzymeTestkitFactory({
    dataHook: 'hook2',
    wrapper: mount(<div />),
  });

  console.log(enzyme.isRtl());
}

function TimeInputWithMandatoryProps() {
  return <TimeInput />;
}

function TimeInputWithAllProps() {
  return <TimeInput
    dataHook="hook"
    onChange={value => console.log(value)}
    style={{
      border: '1px solid red'
    }}
    defaultValue={moment()}
    dashesWhenDisabled
    disableAmPm
    disabled
    rtl
  />;
}
