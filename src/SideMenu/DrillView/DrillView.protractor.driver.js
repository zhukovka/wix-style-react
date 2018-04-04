export default component => {
  const getBackLink = () => component.$('[data-hook=menu-navigation-back-link]');
  const getDrillViewPanelClasses = () => component.$$('[data-hook=drill-view-panel]').get(0).getAttribute('class');

  return {
    element: () => component,
    exists: () => !!component,
    clickSubMenu: index => component.$$('[data-hook=menu-drill-sub-menu-link]').get(index).click(),
    getBackLink: () => getBackLink(),
    clickBackLink: () => getBackLink().click(),
    hasSingleDrillViewPanel: () => component.$$('[data-hook=drill-view-panel]').count().then(c => c === 1),
    hasNoTransitionClassesInDrillView: () => getDrillViewPanelClasses().then(classes => classes.split(' ').length === 1)
  };
};
