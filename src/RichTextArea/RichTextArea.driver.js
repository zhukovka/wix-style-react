import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils';
import styles from './RichTextArea.scss';

const richTextAreaDriverFactory = ({ element, wrapper, component }) => {
  const getButtons = () => [
    ...element.querySelectorAll('[data-hook*="rich-text-area-button"]'),
  ];
  const getEditorWrapper = () =>
    element.querySelector('[data-hook=editor-wrapper]');
  const getButtonType = button =>
    button.getAttribute('data-hook').replace(/^rich-text-area-button-/, '');
  const getImage = () => element.querySelector('[data-hook=editor-image]');
  const getButtonByType = type =>
    getButtons().find(button => getButtonType(button) === type);
  const clickButtonByType = type => () =>
    ReactTestUtils.Simulate.mouseDown(getButtonByType(type));
  const getDefaultBlock = () =>
    element.querySelector("[data-key='defaultBlock']");

  return {
    /** returns if the element exists */
    exists: () => !!element,

    /** returns an array with the button type names */
    getButtonTypes: () => getButtons().map(getButtonType),

    /** click the bold button */
    clickBoldButton: clickButtonByType('bold'),

    /** click the italic button */
    clickItalicButton: clickButtonByType('italic'),

    /** click the underline button */
    clickUnderlineButton: clickButtonByType('underline'),

    /** click the image button */
    clickImageButton: clickButtonByType('image'),

    /** click the unordered list button */
    clickUnorderedListButton: clickButtonByType('unordered-list'),

    /** click the ordered list button */
    clickOrderedListButton: clickButtonByType('ordered-list'),

    /** returns the text content of the editor */
    getContent: () => element.childNodes[1].textContent,

    /** enters the supplied text to the editor */
    enterText: text => {
      const props = { value: text, isAppend: true };
      const ClonedWithProps = React.cloneElement(
        component,
        Object.assign({}, component.props, props),
        ...(component.props.children || []),
      );
      ReactDOM.render(
        <div ref={r => (element = r)}>{ClonedWithProps}</div>,
        wrapper,
      );
    },

    /** returns if the error indicator is visible */
    isErrorIndicatorVisible: () =>
      Boolean(element.classList.contains(styles.withError)),

    /** returns if disabled */
    isDisabled: () =>
      getButtons().every(button =>
        button.classList.contains(styles.disabled),
      ) && element.childNodes[1].classList.contains(styles.disabled),
    isImageExist: () => !!getImage(),

    /** returns if the add image button exists */
    isAddImageButtonExist: () => !!getButtonByType('image'),

    /** returns if the editor is resizable */
    isResizable: () => getEditorWrapper().classList.contains(styles.resizable),
    isDefaultBlockExist: () => getDefaultBlock(),

    /** renders a new component with its existing props + the supplied props */
    setProps: props => {
      const ClonedWithProps = React.cloneElement(
        component,
        Object.assign({}, component.props, props),
        ...(component.props.children || []),
      );
      ReactDOM.render(
        <div ref={r => (element = r)}>{ClonedWithProps}</div>,
        wrapper,
      );
    },
  };
};

export default richTextAreaDriverFactory;
