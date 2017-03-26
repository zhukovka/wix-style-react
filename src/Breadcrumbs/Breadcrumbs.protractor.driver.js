const breadcrumbsDriverFactory = component => {
  const hasClass = className => component.getAttribute('class')
    .then(classes => classes.split('__').indexOf(className) !== -1);

  return {
    breadcrumbContentAt: position => component.$$('label').get(position).getText(),
    clickBreadcrumbAt: position => component.$$('label').get(position).click(),
    getActiveItemId: () => component.$$('li').getAttribute('class')
      .then(classes => {
        const activeItems = classes.map(i =>
          i.split('__').indexOf('active') !== -1
        );

        return activeItems.indexOf(true);
      }),
    isLarge: () => hasClass('large'),
    isMedium: () => hasClass('medium'),
    isOnWhiteBackground: () => hasClass('onWhiteBackground'),
    isOnGrayBackground: () => hasClass('onGrayBackground'),
    getLabelClassList: position => component.$$('label').get(position).getAttribute('class'),
    click: () => component.click(),
    element: () => component
  };
};

export default breadcrumbsDriverFactory;
