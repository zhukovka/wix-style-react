import React from 'react';
import { ContactItem } from './ContactItemBuilder';
import { createDriverFactory } from 'wix-ui-test-utils/driver-factory';
import contactItemBuilderDriverFactory from './ContactItemBuilder.driver';

describe('item picker option builder', () => {
  const createDriver = createDriverFactory(contactItemBuilderDriverFactory);
  const title = 'Some Title';
  const subtitle = 'some subtitle';

  it('should display item', () => {
    const driver = createDriver(<ContactItem title={title} />);
    expect(driver.exists()).toBeTruthy();
  });

  it('should display item with Title', () => {
    const driver = createDriver(<ContactItem title={title} />);
    expect(driver.getTitle()).toEqual(title);
  });

  it('should display item with Title and subtitle', () => {
    const driver = createDriver(
      <ContactItem title={title} subtitle={subtitle} />,
    );
    expect(driver.getTitle()).toEqual(title);
    expect(driver.getSubtitle()).toEqual(subtitle);
  });

  // TODO: test avatar
});
