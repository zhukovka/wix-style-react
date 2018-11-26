import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import FormFieldError from 'wix-ui-icons-common/system/FormFieldError';
import WixComponent from '../BaseComponents/WixComponent';
import {Block} from 'slate';
import {Editor, getEventRange, getEventTransfer} from 'slate-react';
import Tooltip from '../Tooltip';
import RichTextEditorToolbar from './RichTextAreaToolbar';
import htmlSerializer from './htmlSerializer';
import styles from './RichTextArea.scss';
import isImage from 'is-image';
import isUrl from 'is-url';

const DEFAULT_NODE = 'paragraph';

const defaultBlock = {
  type: 'paragraph',
  isVoid: false,
  data: {},
  key: 'defaultBlock',
};

/*
  here we are checking is link absolute(if it contain 'https' or http or '//')
  and if it not absolute, then we add '//' at the beginning of it,
  to make link absolute
*/
export const makeHrefAbsolute = href =>
  /^(https?:)?\/\//.test(href) ? href : `//${href}`;

class RichTextArea extends WixComponent {
  static propTypes = {
    absoluteLinks: PropTypes.bool,
    buttons: PropTypes.arrayOf(PropTypes.string), // TODO: use PropTypes.oneOf(),
    dataHook: PropTypes.string,
    disabled: PropTypes.bool,
    error: PropTypes.bool,
    errorMessage: PropTypes.string,
    placeholder: PropTypes.string,
    maxHeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    resizable: PropTypes.bool,
    value: PropTypes.string,
    onChange: PropTypes.func,
    onImageRequest: PropTypes.func,
  };

  static defaultProps = {
    absoluteLinks: false,
    errorMessage: '',
    value: '<p></p>',
  };

  /* eslint-disable react/prop-types */
  schema = {
    document: {
      last: {type: 'paragraph'},
      normalize: (editor, {code, node}) => {
        switch (code) {
          case 'last_child_type_invalid': {
            const block = Block.create(defaultBlock);
            return editor.insertNodeByKey(node.key, node.nodes.size, block);
          }
          default:
            return;
        }
      }
    },
    blocks: {
      image: {
        isVoid: true
      }
    }
  };
  /* eslint-disable */

  constructor(props) {
    super(props);

    const editorValue = htmlSerializer.deserialize(props.value);
    this.state = {
      editorValue,
    };
    this.lastValue = props.value;
  }

  componentWillReceiveProps(props) {
    const isPlaceholderChanged = props.placeholder !== this.props.placeholder;
    const isValueChanged = props.value && props.value !== this.props.value && props.value !== this.lastValue;
    if (isPlaceholderChanged || isValueChanged) {
      if (props.isAppend) {
        console.log('new append', props.value);
        this.editor
          .insertText(props.value);
      }
      else {
        const value = htmlSerializer.deserialize(props.value);
        this.setEditorValue({value});
      }
    }
  }

  ref = editor => {
    this.editor = editor;
  }

  onChange = ({value}) => {
    const serialized = htmlSerializer.serialize(value);
    const isValueChanged = value.document != this.state.editorValue.document;
    // const isValueChanged = serialized !== this.lastValue;
    this.lastValue = serialized;
    this.setEditorValue({value}, isValueChanged);
  }

  setEditorValue = ({value}, isTextChanged = true) => {
    this.setState({editorValue: value}, () => this.triggerChange(isTextChanged));
  }

  triggerChange(isTextChanged = true) {
    const serialized = htmlSerializer.serialize(this.state.editorValue);
    this.lastValue = serialized;
    if (isTextChanged) {
      console.log(isTextChanged, 'serialized', serialized);
      const {onChange} = this.props;
      onChange && onChange(serialized);
    }
  }

  hasBlock = type => this.state.editorValue.blocks.some(node => node.type == type);

  hasListBlock = type => {
    const {editorValue} = this.state;
    return editorValue.blocks.some(node => {
      const parent = editorValue.document.getParent(node.key);
      return parent && parent.type === type;
    });
  }

  hasMark = type => this.state.editorValue.activeMarks.some(mark => mark.type == type);

  hasLink = () => this.state.editorValue.inlines.some(inline => inline.type === 'link');

  handleButtonClick = (action, type) => {
    this.setState({activeToolbarButton: type});

    switch (action) {
      case 'mark':
        return this.handleMarkButtonClick(type);
      case 'block':
        return this.handleBlockButtonClick(type);
      case 'link':
        return this.handleLinkButtonClick(type);
      case 'image':
        return this.handleImageButtonClick(type);
    }
  }

  handleMarkButtonClick = type => {
    this.editor.toggleMark(type);
  }

  handleBlockButtonClick = type => {
    const { editor } = this;
    const { value } = editor;
    const { document } = value;

    // Handle everything but list buttons.
    if (type !== 'unordered-list' && type !== 'ordered-list') {
      const isActive = this.hasBlock(type);
      const isList = this.hasBlock('list-item');

      if (isList) {
        editor
          .setBlocks(isActive ? DEFAULT_NODE : type)
          .unwrapBlock('unordered-list')
          .unwrapBlock('ordered-list');
      }

      else {
        editor
          .setBlocks(isActive ? DEFAULT_NODE : type);
      }
    }

    // Handle the extra wrapping required for list buttons.
    else {
      const isList = this.hasBlock('list-item');
      const isType = value.blocks.some((block) => {
        return !!document.getClosest(block.key, parent => parent.type == type);
      });

      if (isList && isType) {
        editor
          .setBlocks(DEFAULT_NODE)
          .unwrapBlock('unordered-list')
          .unwrapBlock('ordered-list');
      } else if (isList) {
        editor
          .unwrapBlock(type == 'unordered-list' ? 'ordered-list' : 'unordered-list')
          .wrapBlock(type);
      } else {
        editor
          .setBlocks('list-item')
          .wrapBlock(type);
      }
    }
  }

  handleLinkButtonClick = ({href, text} = {}) => {
    const { value } = this.editor;
    const decoratedHref = this.props.absoluteLinks
      ? makeHrefAbsolute(href)
      : href;

    if (this.hasLink()) {
      this.editor
        .unwrapInline('link');
    } else {
      const linkContent = text || decoratedHref;
      const startPos = value.anchorOffset;
      this.editor
        .insertText(linkContent)
        .moveFocusBackward(linkContent.length)
        .wrapInline({
          type: 'link',
          data: {href: decoratedHref}
        })
        .moveToEnd();
    }
  }

  handleImageButtonClick = type => {
    this.props.onImageRequest(this.handleImageInput);
  }

  handleImageInput = text => {
    if (this.isValidImage(text)) {
      this.editor
        .insertBlock({
          type: 'image',
          data: { src: text }
        });
    }
  }

  onPaste = (e, editor, next) => {
    const target = getEventRange(event, editor);
    if (!target && event.type == 'drop') return next();

    const transfer = getEventTransfer(event)
    const { type, text, files } = transfer;

    if (type === 'text') {
      if (!this.isValidImage(text)) return next();

      editor
        .insertBlock({
          type: 'image',
          data: { src: text }
        });
        return;
    }

    next();
  }

  isValidImage = (text) => isUrl(text) && isImage(text);

  render() {
    const {editorValue} = this.state;
    const {error, placeholder, disabled, resizable, onImageRequest, dataHook} = this.props;
    const className = classNames(styles.container, {
      [styles.withError]: error,
      [styles.isEditorFocused]: editorValue.isFocused,
    });
    const isScrollable = resizable || this.props.maxHeight;

    return (
      <div className={className} data-hook={dataHook}>
        <div className={classNames(styles.toolbar, {[styles.disabled]: disabled})} data-hook='toolbar'>
          <RichTextEditorToolbar
            /*
              activeToolbarButton prop required to trigger RichTextEditorToolbar re-render after toolbar button click
            */
            activeToolbarButton={this.state.activeToolbarButton}
            selection={editorValue.fragment.text}
            disabled={disabled}
            onClick={this.handleButtonClick}
            onLinkButtonClick={this.handleLinkButtonClick}
            onImageButtonClick={onImageRequest ? this.handleImageButtonClick : null }
            hasMark={this.hasMark}
            hasListBlock={this.hasListBlock}
            hasLink={this.hasLink}
            isSelectionExpanded={editorValue.isExpanded}
            />
        </div>
        <div
          className={classNames(
            styles.editorWrapper, {
              [styles.resizable]: resizable,
              [styles.scrollable]: isScrollable,
              [styles.disabled]: disabled
            })
          }
          data-hook="editor-wrapper"
          style={{maxHeight: this.props.maxHeight}}
        >
          <Editor
            readOnly={disabled}
            placeholder={placeholder}
            className={classNames(styles.editor, {[styles.disabled]: disabled})}
            ref={this.ref}
            schema={this.schema}
            value={editorValue}
            onChange={this.onChange}
            onPaste={this.onPaste}
            renderNode={this.renderNode}
            renderMark={this.renderMark}
            />
          {this.renderError()}
        </div>
      </div>
    );
  }

  renderNode(props, editor, next) {
    switch (props.node.type) {
      case 'unordered-list':
        return <ul {...props.attributes}>{props.children}</ul>;
      case 'list-item':
        return <li {...props.attributes}>{props.children}</li>;
      case 'ordered-list':
        return <ol {...props.attributes}>{props.children}</ol>;
      case 'link':
        const {data} = props.node;
        const href = data.get('href');
        return <a className={styles.link} {...props.attributes} rel="noopener noreferrer" target="_blank" href={href}>{props.children}</a>;
      case 'image':
        const {node, isFocused} = props;
        const src = node.data.get('src');
        return (<img data-hook="editor-image" src={src} className={classNames(styles.editorImage, {[styles.activeEditorImage]: isFocused})}/>);
      default:
        return next();
    }
  }

  renderMark(props, editor, next) {
    const {attributes, children, mark} = props;

    switch (mark.type) {
      case 'bold':
        return <strong {...attributes}>{children}</strong>;
      case 'italic':
        return <em {...attributes}>{children}</em>;
      case 'underline':
        return <u {...attributes}>{children}</u>;
      default:
        return next();
    }
  }

  renderError() {
    const {errorMessage} = this.props;

    return (
      <Tooltip
        disabled={!errorMessage}
        placement="top"
        moveBy={{x: 2, y: 0}}
        alignment="center"
        content={errorMessage}
        theme="dark"
        >
        <div className={styles.exclamation}><FormFieldError/></div>
      </Tooltip>
    );
  }
}

export default RichTextArea;
