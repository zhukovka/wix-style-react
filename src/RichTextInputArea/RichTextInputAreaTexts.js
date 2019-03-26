import PropTypes from 'prop-types';
import mapValues from 'lodash/mapValues';

export const defaultTexts = {
  toolbarButtons: {
    boldButtonLabel: 'Bold',
    italicButtonLabel: 'Italic',
    underlineButtonLabel: 'Underline',
    linkButtonLabel: 'Insert link',
    bulletedListButtonLabel: 'Bulleted List',
    numberedListButtonLabel: 'Numbered List',
  },
  insertionForm: {
    confirmButtonLabel: 'Confirm',
    cancelButtonLabel: 'Cancel',
    link: {
      textInputPlaceholder: 'Text to display',
      urlInputPlaceholder: 'URL this link should go',
    },
  },
};

export const textsPropType = PropTypes.shape({
  toolbarButtons: PropTypes.shape(
    mapValues(defaultTexts.toolbarButtons, () => PropTypes.string),
  ),
  insertionForm: PropTypes.shape({
    ...mapValues(defaultTexts.insertionForm, () => PropTypes.string),
    link: PropTypes.shape(
      mapValues(defaultTexts.toolbarButtons.link, () => PropTypes.string),
    ),
  }),
});
