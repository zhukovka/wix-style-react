export default component => {
  const getBackLink = () => component.$('[data-hook=menu-navigation-back-link]');
  const getDrillViewPanelClasses = () => component.$('[data-hook=drill-view-panel]').getAttribute('class');

  return {
    element: () => component,
    exists: () => !!component,
    clickSubMenu: index => component.$$('[data-hook=menu-drill-sub-menu-link]').get(index).click(),
    getBackLink: () => getBackLink(),
    clickBackLink: () => getBackLink().click(),
    hasSingleDrillViewPanel: async () => await component.$$('[data-hook=drill-view-panel]').count() === 1,
    hasNoTransitionClassesInDrillView: async () => (await getDrillViewPanelClasses()).split(' ').length === 1
  };
};
