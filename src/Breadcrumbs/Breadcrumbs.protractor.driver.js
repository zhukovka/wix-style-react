import styles from './Breadcrumbs.scss';

const breadcrumbsDriverFactory = component => {
  const hasClass = className =>
    component
      .getAttribute('class')
      .then(classes => classes.split('__').indexOf(className) !== -1);

  return {
    /** return the breadcrumb item content at position  */
    breadcrumbContentAt: position =>
      component
        .all(by.xpath('./div'))
        .get(position)
        .getText(),

    /** click on breadcrumb item at position */
    clickBreadcrumbAt: position =>
      component
        .$$('[data-hook="breadcrumb-clickable"]')
        .get(position)
        .click(),

    /** return the active breadcrumb item position or return null if no active item exists */
    getActiveItemId: () =>
      component
        .all(by.xpath('./div'))
        .getAttribute('class')
        .then(classes => {
          const activeItems = classes.map(cls =>
            cls.split(' ').some(c => c.includes(styles.active)),
          );
          return activeItems.indexOf(true);
        }),

    /** fulfilled if breadcrumbs component is large */
    isLarge: () => hasClass('large'),

    /** fulfilled if breadcrumbs component is medium */
    isMedium: () => hasClass('medium'),

    /** fulfilled if breadcrumbs component is on white background */
    isOnWhiteBackground: () => hasClass('onWhiteBackground'),

    /** fulfilled if breadcrumbs component is on gray background */
    isOnGrayBackground: () => hasClass('onGrayBackground'),

    /** returns breadcrumbs component classes */
    getLabelClassList: position =>
      component
        .all(by.xpath('./div'))
        .get(position)
        .getAttribute('class'),
    click: () => component.click(),
    element: () => component,
  };
};

export default breadcrumbsDriverFactory;
