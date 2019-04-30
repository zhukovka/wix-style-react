import * as React from 'react';
import Checkbox from '../../src/Checkbox';
import {checkboxTestkitFactory} from '../../testkit';
import {checkboxTestkitFactory as checkboxEnzymeTestkitFactory} from '../../testkit/enzyme';
import {mount} from 'enzyme';

function testkits() {
  const vanilla = checkboxTestkitFactory({
    dataHook: 'hi',
    wrapper: document.createElement('div')
  });

  vanilla.exists();

  const enzyme = checkboxEnzymeTestkitFactory({
    dataHook: 'shbem',
    wrapper: mount(<div />)
  });
}

function CalendarWithMandatoryProps() {
  return <Checkbox />;
}

function CalendarWithAllProps() {
  return (
    <Checkbox
      checked
      disabled
      errorMessage="asdasd"
      dataHook="hook"
      hasError
      hover
      id="asd"
      indeterminate
      size="medium"
      onChange={_ref2 => (_ref2.target.checked ? 'Checked' : 'Unchecked')}>
      Hello World!
    </Checkbox>
  );
}
