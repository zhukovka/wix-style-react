export * from './StylableUnidriverUtil';
export * from './ReactBase';
export { baseUniDriverFactory } from 'wix-ui-test-utils/base-driver';

/**
 * Find element by `data-hook` (exact match)
 * @param {UniDriver} base
 * @param {string} hook
 */
export const findByHook = (base, hook) => base.$(`[data-hook="${hook}"]`);
