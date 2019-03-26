import { reactUniDriver } from 'unidriver';
import { enhanceUnidriver } from '../enhance-unidriver';

/**
 * This is an enhanced ReactAdpater.
 * Used for adding methods which the Unidriver team consideres bad-practice, but we don't.
 *
 * @param {Element} element
 * @returns {EnhancedUniDriver}
 */
export function reactEnhancedUniDriver(element) {
  return enhanceUnidriver(reactUniDriver(element), base => ({
    isFocused: async () => {
      return document.activeElement === (await base.getNative());
    },
  }));
}
