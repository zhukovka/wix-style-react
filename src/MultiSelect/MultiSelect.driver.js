import ReactTestUtils from 'react-dom/test-utils';
import inputWithOptionsDriverFactory from '../InputWithOptions/InputWithOptions.driver';
import tagDriverFactory from '../Tag/Tag.driver';

const multiSelectDriverFactory = ({ element }) => {
  const {
    driver,
    inputDriver,
    dropdownLayoutDriver,
  } = inputWithOptionsDriverFactory({ element });

  const inputWrapper = driver.inputWrapper().childNodes[0];

  const tags = [...inputWrapper.querySelectorAll('[data-hook="tag"]')];

  const multiSelectDriver = Object.assign(driver, {
    getMaxHeight: () => inputWrapper.style.maxHeight,
    clickOnInputWrapper: () => ReactTestUtils.Simulate.click(inputWrapper),
    inputWrapperHasFocus: () => inputWrapper.classList.contains('hasFocus'),
    inputWrapperHasError: () => inputWrapper.classList.contains('error'),
    numberOfTags: () => tags.length,
    getTagLabelAt: index => tags[index].textContent,
    pressCommaKey: () => inputDriver.keyDown(','),
    getTagDriverByTagId: tagId =>
      tagDriverFactory({
        element: tags.find(tag => tag.id === tagId),
      }),
  });

  return { driver: multiSelectDriver, inputDriver, dropdownLayoutDriver };
};

export default multiSelectDriverFactory;
