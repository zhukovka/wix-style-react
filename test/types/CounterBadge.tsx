import * as React from 'react';
import CounterBadge from '../../src/CounterBadge';
import {counterBadgeTestkitFactory} from '../../testkit';
import {counterBadgeTestkitFactory as counterBadgeEnzymeTestkitFactory} from '../../testkit/enzyme';
import {mount} from 'enzyme';

function testkits() {
  const vanilla = counterBadgeTestkitFactory({
    dataHook: 'hi',
    wrapper: document.createElement('div')
  });

  vanilla.exists();

  const enzyme = counterBadgeEnzymeTestkitFactory({
    dataHook: 'shbem',
    wrapper: mount(<div />)
  });
}

function CounterBadgeWithMandatoryProps() {
  return <CounterBadge />;
}

function CounterBadgeWithAllProps() {
  return <CounterBadge skin="danger">12</CounterBadge>;
}
