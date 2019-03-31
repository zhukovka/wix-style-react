import publicDriverFactory, {
  getTextArea,
} from './RichTextInputArea.uni.driver';

import richTextToolbarPrivateDriverFactory from './Toolbar/RichTextToolbar.private.uni.driver';

export default base => {
  return {
    ...publicDriverFactory(base),
    ...richTextToolbarPrivateDriverFactory(
      base.$('[data-hook=richtextarea-toolbar]'),
    ),
    hoverTextArea: async () => await getTextArea(base).hover(),
    clickTextArea: async () => await getTextArea(base).click(),
  };
};
