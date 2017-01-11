jest.mock('./Typography.scss', () => {
  // eslint-disable-next-line camelcase
  return {t1: 't1', t1_1: 't1_1', t2: 't2', t2_2: 't2_2', h1: 'h1', h1_1: 'h1_1'};
});

import _ from 'lodash/fp';
import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import {labelTestkitFactory, componentFactory, labelDriverFactory} from './testkit/Label';
import Label from './Label';
jest.resetModules();

describe('Label', () => {

  const createDriver = _.compose(labelDriverFactory, componentFactory);

  it('should contain native label', () => {
    const driver = createDriver({appearance: 'T1'});
    expect(driver.getTagName()).toBe('label');
  });

  it('should render children', () => {
    const children = 'inner text';

    const driver = createDriver({appearance: 'T1', children});

    expect(driver.getLabelTextContent()).toBe(children);
  });

  it('should support `for` attribute', () => {
    const forAttr = 'some_id';
    const driver = createDriver({appearance: 'T1', for: forAttr});

    expect(driver.getAttr('for')).toBe(forAttr);
  });

  it('should support `id` attribute', () => {
    const id = 'some_id';
    const driver = createDriver({appearance: 'T1', id});

    expect(driver.getAttr('id')).toBe(id);
  });

  it('should apply class by appearance', () => {
    const appearance = 'T1.1';
    const driver = createDriver({appearance});

    expect(driver.getClassList()).toContain('t1_1');
  });
});

describe('testkit', () => {
  it('should create new driver', () => {
    const div = document.createElement('div');
    const id = 'myId';

    const wrapper = div.appendChild(ReactTestUtils.renderIntoDocument(<div><Label id={id} appearance="T1">label</Label>
    </div>));

    const driver = labelTestkitFactory({wrapper, id});
    expect(driver.getAttr('id')).toBe(id);
  });
});
