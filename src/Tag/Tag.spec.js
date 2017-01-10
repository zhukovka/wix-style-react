import _ from 'lodash/fp';
import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import {tagTestkitFactory, componentFactory, tagDriverFactory} from './testkit/Tag';
import Tag from './Tag';

describe('Tag', () => {

  const createDriver = _.compose(tagDriverFactory, componentFactory);
  const id = 'myId', label = 'Hey', onRemove = jest.fn();

  it('should have a default small size', () => {
    const driver = createDriver({id, label});
    expect(driver.isLarge()).toBeFalsy();
  });

  it('should have a large size', () => {
    const driver = createDriver({id, label, size: 'large'});
    expect(driver.isLarge()).toBeTruthy();
  });

  it('should be removable by default', () => {
    const driver = createDriver({id, label});
    expect(driver.isRemovable()).toBeTruthy();
  });

  it('should not be removable', () => {
    const driver = createDriver({id, label, removable: false});
    expect(driver.isRemovable()).toBeFalsy();
  });

  it('should call onRemove function on remove', () => {
    const driver = createDriver({id, label, onRemove});

    driver.removeTag();
    expect(onRemove).toBeCalledWith(id);
  });

  it('should not display thumb by default', () => {
    const driver = createDriver({id, label});
    expect(driver.isThumbExists()).toBeFalsy();
  });

  it('should display thumb', () => {
    const driver = createDriver({id, label, thumb: <span>Ho</span>});
    expect(driver.isThumbExists()).toBeTruthy();
  });

  describe('testkit', () => {
    it('should exist', () => {
      const div = document.createElement('div');
      const wrapper = div.appendChild(ReactTestUtils.renderIntoDocument(<div><Tag id={id} label={label}/></div>));
      const driver = tagTestkitFactory({wrapper, id});

      expect(driver.exists()).toBeTruthy();
    });
  });
});
