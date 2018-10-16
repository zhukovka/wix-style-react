import React from 'react';
import {mount} from 'enzyme';
import {isEnzymeTestkitExists} from '../test/utils/testkit-sanity';

import {
  tagTestkitFactory as enzymeTagTestkitFactory,
  badgeSelectTestkitFactory as enzymeBadgeSelectTestkitFactory
} from './enzyme';

import Tag from '../src/Tag';
import BadgeSelect from '../src/BadgeSelect';

describe('enzyme testkits', () => {
  it('Tag testkit exist', () => {
    expect(isEnzymeTestkitExists(<Tag useOldMargins={false} id={'hello'}>a</Tag>, enzymeTagTestkitFactory, mount)).toBe(true);
  });

  it('should exist', () => {
    expect(isEnzymeTestkitExists(
      <BadgeSelect
        options={[{id: '0', skin: 'general', text: 'general'}]}
        selectedId={'0'}
        />,
      enzymeBadgeSelectTestkitFactory,
      mount
    )).toBe(true);
  });
});
