export const segmentedToggleDriverFactory = base => {
  return {
    /* fulfilled if element in the DOM */
    exists: async () => await base.exists(),
    /* get the actual element */
    element: async () => await base.getNative(), // eslint-disable-line no-restricted-properties
    /* selects child by given number (selection begins with 1) */
    selectChild: async number =>
      base.$(`[data-click="segmented-toggle-${number}"]`).click(),
  };
};
