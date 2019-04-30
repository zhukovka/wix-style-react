import * as React from 'react';
import Badge from '../../src/Badge';
import {badgeTestkitFactory} from '../../testkit';
import {badgeTestkitFactory as badgeEnzymeTestkitFactory} from '../../testkit/enzyme';
import {mount} from 'enzyme';

function testkits() {
  const vanilla = badgeTestkitFactory({
    dataHook: 'hi',
    wrapper: document.createElement('div')
  });

  vanilla.exists();
  vanilla.getSkin();

  const enzyme = badgeEnzymeTestkitFactory({
    dataHook: 'shbem',
    wrapper: mount(<div />)
  });
}

function BadgeWithMandatoryProps() {
  return <Badge />;
}

function BadgeWithAllProps() {
  return (
    <Badge
      type="outlined"
      skin="danger"
      size="medium"
      prefixIcon={<div />}
      suffixIcon={<div />}
      onBlur={() => undefined}
      onFocus={() => undefined}
      onClick={e => undefined}
      uppercase
    />
  );
}
