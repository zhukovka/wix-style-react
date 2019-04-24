import publicDriverFactory, {
  getContent,
  getPlaceholder,
} from './RichTextInputArea.uni.driver';

import richTextToolbarPrivateDriverFactory from './Toolbar/RichTextToolbar.private.uni.driver';

export default (base, body) => {
  return {
    ...publicDriverFactory(base, body),
    ...richTextToolbarPrivateDriverFactory(
      base.$('[data-hook=richtextarea-toolbar]'),
      body,
    ),
    hasPlaceholder: () => getPlaceholder(base).exists(),
    hoverTextArea: async () => await getContent(base).hover(),
    clickTextArea: async () => await getContent(base).click(),
  };
};
