import * as React from 'react';
import { textButtonTestkitFactory } from '../../testkit';
import { textButtonTestkitFactory as textButtonEnzymeTestkitFactory } from '../../testkit/enzyme';
import { mount } from 'enzyme';
import TextButton from '../../src/TextButton';

async function testkits() {
  const vanilla = textButtonTestkitFactory({
    dataHook: 'hoo',
    wrapper: document.createElement('div'),
  });

  console.log(await vanilla.isButtonDisabled());

  const enzyme = textButtonEnzymeTestkitFactory({
    dataHook: 'hoo',
    wrapper: mount(<div />),
  });

  console.log(await enzyme.getButtonTextContent());
}

function TextButtonWithMandatoryProps() {
  return <TextButton />;
}

function TextButtonWithAllProps() {
  return <TextButton
    dataHook="hoooooook"
    size="small"
    className="claszz"
    onClick={() => console.log('clickedddd')}
    as="a"
    disabled
    fullWidth
    prefixIcon={<div />}
    priority="primary"
    skin="dark"
    suffixIcon={<span />}
    target="_parent"
    underline="always"
    weight="thin"
  />;
}
