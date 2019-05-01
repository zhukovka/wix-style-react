import * as React from 'react';
import FloatingHelper from '../../src/FloatingHelper';
import {floatingHelperTestkitFactory} from '../../testkit';
import {floatingHelperTestkitFactory as floatingHelperEnzymeTestkitFactory} from '../../testkit/enzyme';
import {mount} from 'enzyme';

function testkits() {
  const vanilla = floatingHelperTestkitFactory({
    dataHook: 'hi',
    wrapper: document.createElement('div')
  });

  vanilla.exists();

  const enzyme = floatingHelperEnzymeTestkitFactory({
    dataHook: 'shbem',
    wrapper: mount(<div />)
  });
}

function EditableSelectorWithMandatoryProps() {
  return (
    <FloatingHelper target={<span />} placement="auto" content={<span />} />
  );
}

function EditableSelectorWithAllProps() {
  return (
    <FloatingHelper
      appearance="dark"
      appendTo="scrollParent"
      content="content"
      initiallyOpened
      onClose={() => undefined}
      onOpen={() => undefined}
      opened
      placement="auto"
      target={<span />}
      width="100"
    />
  );
}
