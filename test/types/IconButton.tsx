import * as React from 'react';
import IconButton from '../../src/IconButton';
import {iconButtonTestkitFactory} from '../../testkit';
import {iconButtonTestkitFactory as iconButtonEnzymeTestkitFactory} from '../../testkit/enzyme';
import {mount} from 'enzyme';

function testkits() {
  const vanilla = iconButtonTestkitFactory({
    dataHook: 'hi',
    wrapper: document.createElement('div')
  });

  vanilla.exists();

  const enzyme = iconButtonEnzymeTestkitFactory({
    dataHook: 'shbem',
    wrapper: mount(<div />)
  });
}

function IconButtonWithMandatoryProps() {
  return <IconButton />;
}

function IconButtonWithAllProps() {
  return (
    <IconButton
      as="a"
      className="cls"
      dataHook="hook"
      disabled
      onClick={e => undefined}
      priority="primary"
      size="medium"
      skin="inverted"
    />
  );
}
