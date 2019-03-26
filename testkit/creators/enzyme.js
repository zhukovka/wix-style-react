// This is a copy of wix-ui-test-utils/enzyme/enzyme.tsx
// TODO: if this works well, then move it to wix-ui-test-utils
import { reactEnhancedUniDriver } from '../unidriver/adapters/ReactAdapter';

export { enzymeTestkitFactoryCreator } from 'wix-ui-test-utils/enzyme';

export function enzymeUniTestkitFactoryCreator(driverFactory) {
  return obj => {
    const regexp = new RegExp(`^<[^>]+data-hook="${obj.dataHook}"`);
    const component = obj.wrapper.findWhere(
      n =>
        n.length > 0 && typeof n.type() === 'string' && regexp.test(n.html()),
    );
    const element =
      component.length > 0 ? component.first().getDOMNode() : undefined;
    const base = reactEnhancedUniDriver(element);
    return driverFactory(base);
  };
}
