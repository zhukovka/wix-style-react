import * as React from 'react';
import Text from '../../src/Text';
import { textTestkitFactory } from '../../testkit';
import { textTestkitFactory as textEnzymeTestkitFactory } from '../../testkit/enzyme';
import { mount } from 'enzyme';

function testkits() {
  const vanilla = textTestkitFactory({
    dataHook: 'hooooook',
    wrapper: document.createElement('div'),
  });

  console.log(vanilla.getSize());

  const enzyme = textEnzymeTestkitFactory({
    dataHook: 'hooooook',
    wrapper: mount(<div />),
  });

  console.log(enzyme.isLight());
}

function TextWithMandatoryProps() {
  return <Text />;
}

function TextWithAllProps() {
  return <Text
    className="cssssss"
    size="tiny"
    ellipsed
    light
    secondary
    showTooltip
    skin="standard"
    tagName="marquee"
    weight="thin"
  />;
}
