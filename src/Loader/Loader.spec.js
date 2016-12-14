import 'react';

import {componentFactory, loaderDriverFactory} from './Loader.driver';

describe('Component: <Loader/>', () => {

  const {createShallow} = componentFactory();
  const createDriver = props => loaderDriverFactory(createShallow(props));

  describe('size property', () => {

    it('should create a component with default medium size', () => {
      const driver = createDriver();
      expect(driver.isMedium()).toEqual(true);
    });

    it('should allow creating a small loader', () => {
      const driver = createDriver({size: 'small'});
      expect(driver.isSmall()).toEqual(true);
    });

    it('should allow creating a medium loader', () => {
      const driver = createDriver({size: 'medium'});
      expect(driver.isMedium()).toEqual(true);
    });

    it('should allow creating a large loader', () => {
      const driver = createDriver({size: 'large'});
      expect(driver.isLarge()).toEqual(true);
    });

  });

  describe('text property', () => {

    it('should create a component with no text by default', () => {
      const driver = createDriver();
      expect(driver.hasText()).toEqual(false);
    });

    it('should create a component with text', () => {
      const driver = createDriver({text: 'All computers wait at the same speed.'});
      expect(driver.hasText()).toEqual(true);
      expect(driver.getText()).toEqual('All computers wait at the same speed.');
    });

  });

});
