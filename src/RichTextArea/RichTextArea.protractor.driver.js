import {isFocused} from '../test-common';
import buttonDriverFactory from './RichTextAreaButton.protractor.driver';

export const BUTTON_TYPES = ['bold', 'italic', 'underline', 'link', 'unordered-list', 'ordered-list'];

const richTextAreaDriverFactory = component => {

  const getToolbarButton = buttonIndex => component.$('[data-hook="toolbar"]')
  .$(`[data-hook="rich-text-area-button-${BUTTON_TYPES[buttonIndex]}"]`);

  return {
    element: () => component,
    getToolbarButtonDriver: buttonIndex => buttonDriverFactory(getToolbarButton(buttonIndex)),
    isEditorFocused: () => isFocused(component.$('[data-slate-editor="true"]')),
    isButtonFocused: buttonIndex => isFocused(getToolbarButton(buttonIndex)),
    clickButton: buttonIndex => isFocused(getToolbarButton(buttonIndex))
  };
};

export default richTextAreaDriverFactory;
