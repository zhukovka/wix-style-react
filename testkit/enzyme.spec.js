import React from 'react';
import {tagTestkitFactory as enzymeTagTestkitFactory} from './enzyme';
import {isEnzymeTestkitExists} from '../test/utils/testkit-sanity';
import {mount} from 'enzyme';

import Tag from '../src/Tag';

describe('enzyme testkits', () => {
  it('Tag testkit exist', () => {
    expect(isEnzymeTestkitExists(<Tag useOldMargins={false} id={'hello'}>a</Tag>, enzymeTagTestkitFactory, mount)).toBe(true);
  });
});
