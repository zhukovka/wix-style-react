import React from 'react';

import { componentFactory, iconDriverFactory } from './testkit/Icon';

describe('<Icon />', () => {
  const createDriver = props => iconDriverFactory(componentFactory(props));

  it('should create icon component and render the given children', () => {
    const driver = createDriver({ children: <div className="smth" /> });
    expect(driver.isEmpty()).toEqual(false);
    expect(driver.hasChild('.smth')).toEqual(true);
  });
});
