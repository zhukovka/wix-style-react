const EDITOR_DIV_INDEX = 9;
const richTextAreaDriverFactory = component => {

  return {
    element: () => component,
    isEditorFocused: async () => {
      //TODO: find more robust way to locate the editor
      return isFocused(component.$$('div').get(EDITOR_DIV_INDEX));
    }
  };
};

//TODO: use function from wix-ui-test-utils
function isFocused(component) {
  return component.equals(browser.driver.switchTo().activeElement());
}

export default richTextAreaDriverFactory;
