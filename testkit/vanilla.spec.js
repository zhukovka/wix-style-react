import React from 'react';
import {isTestkitExists} from '../test/utils/testkit-sanity';

import {
  tagTestkitFactory,
  badgeSelectTestkitFactory
} from './index';

import Tag from '../src/Tag';
import BadgeSelect from '../src/BadgeSelect';

describe('vanilla testkits', () => {
  it('Tag testkit exist', () => {
    expect(isTestkitExists(<Tag useOldMargins={false} id={'hello'}>a</Tag>, tagTestkitFactory)).toBe(true);
  });

  it('<BadgeSelect/> testkit exists', () => {
    expect(isTestkitExists(
      <BadgeSelect
        options={[{id: '0', skin: 'general', text: 'general'}]}
        selectedId={'0'}
        />,
      badgeSelectTestkitFactory,
    )).toBe(true);
  });
});
