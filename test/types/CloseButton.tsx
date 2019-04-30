import * as React from 'react';
import CloseButton from '../../src/CloseButton';
import {closeButtonTestkitFactory} from '../../testkit';
import {closeButtonTestkitFactory as closeButtonEnzymeTestkitFactory} from '../../testkit/enzyme';
import {mount} from 'enzyme';

function testkits() {
  const vanilla = closeButtonTestkitFactory({
    dataHook: 'hi',
    wrapper: document.createElement('div')
  });

  vanilla.exists();

  const enzyme = closeButtonEnzymeTestkitFactory({
    dataHook: 'shbem',
    wrapper: mount(<div />)
  });
}

function CloseButtonWithMandatoryProps() {
  return <CloseButton />;
}

function CloseButtonWithAllProps() {
  return (
    <CloseButton
      as="button"
      className="asd"
      dataHook="hook"
      disabled
      onClick={e => undefined}
      size="medium"
      skin="dark"
    />
  );
}
