import React from 'react';

import Tag from '../src/Tag';
import {tagTestkitFactory} from './index';
import {isTestkitExists} from '../test/utils/testkit-sanity';

describe('vanilla testkits', () => {
  it('Tag testkit exist', () => {
    expect(isTestkitExists(<Tag useOldMargins={false} id={'hello'}>a</Tag>, tagTestkitFactory)).toBe(true);
  });
});
