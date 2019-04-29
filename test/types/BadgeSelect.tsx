import * as React from 'react';
import BadgeSelect from '../../src/BadgeSelect';
import {badgeSelectTestkitFactory} from '../../testkit';
import {badgeTestkitFactory as badgeSelectEnzymeTestkitFactory} from '../../testkit/enzyme';
import {mount} from 'enzyme';

function testkits() {
  const vanilla = badgeSelectTestkitFactory({
    dataHook: 'hi',
    wrapper: document.createElement('div')
  });

  vanilla.exists();
  vanilla.clickAtOption(4);

  const enzyme = badgeSelectEnzymeTestkitFactory({
    dataHook: 'shbem',
    wrapper: mount(<div />)
  });
}

function BadgeSelectWithMandatoryProps() {
  return <BadgeSelect />;
}

function BadgeSelectWithAllProps() {
  return (
    <BadgeSelect
      type="outlined"
      dataHook="hook"
      onSelect={o => undefined}
      options={[{id: '1', skin: 'danger', text: 'text'}]}
      selectedId="1"
      size="medium"
      uppercase
    />
  );
}
