export * from 'wix-ui-test-utils/unidriver';
export * from './ReactBase';

/**
 * Find element by `data-hook` (exact match)
 * @param {UniDriver} base
 * @param {string} hook
 */
export const findByHook = (base, hook) => base.$(`[data-hook="${hook}"]`);
