import * as React from 'react';
import ColorPicker from '../../src/ColorPicker';
import {colorPickerTestkitFactory} from '../../testkit';
import {colorPickerTestkitFactory as colorPickerEnzymeTestkitFactory} from '../../testkit/enzyme';
import {mount} from 'enzyme';

function testkits() {
  const vanilla = colorPickerTestkitFactory({
    dataHook: 'hi',
    wrapper: document.createElement('div')
  });

  vanilla.exists();

  const enzyme = colorPickerEnzymeTestkitFactory({
    dataHook: 'shbem',
    wrapper: mount(<div />)
  });
}

function CalendarWithMandatoryProps() {
  return (
    <ColorPicker
      value="#3899eb"
      onChange={e => undefined}
      onCancel={e => undefined}
      onConfirm={e => undefined}
    />
  );
}

function CalendarWithAllProps() {
  return (
    <ColorPicker
      value="#3899eb"
      onChange={e => undefined}
      onCancel={e => undefined}
      onConfirm={e => undefined}
      dataHook="hook"
      showConverter
      showHistory
      showInput
    />
  );
}
