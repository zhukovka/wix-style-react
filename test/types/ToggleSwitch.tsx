import * as React from 'react';
import ToggleSwitch from '../../src/ToggleSwitch';
import {toggleSwitchTestkitFactory} from '../../testkit';
import {toggleSwitchTestkitFactory as toggleSwitchEnzymeTestkitFactory} from '../../testkit/enzyme';
import { mount } from 'enzyme';

function testkits() {
  const vanilla = toggleSwitchTestkitFactory({
    dataHook: 'hi',
    wrapper: document.createElement('div'),
  });

  console.log(
    vanilla.exists(),
    vanilla.getKnobStyles().zIndex
  );

  const enzyme = toggleSwitchEnzymeTestkitFactory({
    dataHook: 'hi',
    wrapper: mount(<div />),
  });

  console.log(enzyme.getId());
}

function ToggleSwitchWithMandatoryProps() {
  return <ToggleSwitch />
}

function ToggleSwitchWithAllProps() {
  return <ToggleSwitch
    dataHook="hi"
    size="large"
    aria-label="some aria"
    checked
    checkedIcon={<div />}
    disabled
    id="hi"
    onChange={() => console.log('toggled!')}
    skin="error"
    styles={{
      knob: {
        border: '3px dotted pink',
      }
    }}
    tabIndex={999}
    uncheckedIcon={<span />}
  />
}
