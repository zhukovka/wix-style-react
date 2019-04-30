import * as React from 'react';
import Label from '../../src/Label';
import { labelTestkitFactory } from '../../testkit';
import { labelTestkitFactory as labelEnzymeTestkitFactory } from '../../testkit/enzyme';
import { mount } from 'enzyme';

async function testkits() {
  const vanilla = labelTestkitFactory({
    dataHook: 'hoo',
    wrapper: document.createElement('div'),
  });

  console.log(vanilla.hasEllipsis());

  const enzyme = labelEnzymeTestkitFactory({
    dataHook: 'hoo',
    wrapper: mount(<div/>)
  });

  console.log(enzyme.getLabelText());
}

function LabelWithMandatoryProps() {
  return <Label />;
}

function LabelWithAllProps() {
  return <Label
    dataHook="hoooooook"
    className="clzzzzzzzz"
    dataClass="zzzzzzzz"
    disabled
    for="me"
    id="you"
    ellipsis
  />;
}
