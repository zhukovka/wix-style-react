import _ from 'lodash/fp';

const buttonSelectionDriverFactory = component => ({
  getSelectedButtonText: () => {
    return component.$$('span').getAttribute('class')
        .then(classes => {
          const selectedBtnClass = classes.filter(i => /__selected__/.test(i))[0];
          return component.$(`.${selectedBtnClass}`).getText();
        });
  },
  clickButtonByIndex: index => component.$$('span').get(index).click(),
  getButtonTextByIndex: index => component.$$('span').get(index).getText(),
  element: () => component
});

export default buttonSelectionDriverFactory;
