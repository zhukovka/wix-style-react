import _ from 'lodash/fp';

const dataTableDriverFactory = component => ({
  getFirstHighlightedRow: () => {
    return component.$$('tbody tr').getAttribute('class')
        .then(classes => {
          const highlightedRowClass = classes.filter(i => /__highlight-row__/.test(i))[0].split(' ')[1];
          return component.$(`.${highlightedRowClass}`).getText();
        });
  },
  clickRowByIndex: index => component.$$('tbody tr').get(index).click(),
  getRowTextByIndex: index => component.$$('tbody tr').get(index).getText(),
  element: () => component
});

export default dataTableDriverFactory;
