import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import FormFieldError from 'wix-ui-icons-common/system/FormFieldError';
import WixComponent from '../BaseComponents/WixComponent';
import {Block} from 'slate';
import {Editor} from 'slate-react';
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
  key: 'defaultBlock'
};

/*
  here we are checking is link absolute(if it contain 'https' or http or '//')
  and if it not absolute, then we add '//' at the beginning of it,
  to make link absolute
*/
export const makeHrefAbsolute = href => /^(https?:)?\/\//.test(href) ? href : `//${href}`;

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
    onImageRequest: PropTypes.func
  }

  static defaultProps = {
    absoluteLinks: false,
    errorMessage: '',
    value: '<p></p>'
  }

  /* eslint-disable react/prop-types */
  schema = {
    rules: [
      // Rule to insert a paragraph block if the document is empty.
      {
        match: {object: 'document'},
        nodes: [{min: 1}],
        normalize: (change, error) => {
          const block = Block.create(defaultBlock);
          change.insertNodeByKey(error.key, 0, block);
        }
      },
      // Rule to insert a paragraph below a void node (the image) if that node is
      // the last one in the document.
      {
        match: {object: 'document'},
        last: {isVoid: true},
        normalize: (change, error) => {
          const block = Block.create(defaultBlock);
          change.insertNodeByKey(error.key, error.nodes.size, block);
        }
      }
    ]
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
        const newEditorValue = this.state.editorValue
              .change()
              .insertText(props.value);

        this.setEditorValue(newEditorValue);
      }
      else {
        const editorValue = htmlSerializer.deserialize(props.value);
        this.setEditorValue(editorValue);
      }
    }
  }

  setEditorValue = (editorValue, isTextChanged = true) => {
    if (editorValue.value) {
      editorValue = editorValue.value;
    }
    this.setState({editorValue}, () => this.triggerChange(isTextChanged));
  };

  triggerChange(isTextChanged = true) {
    const serialized = htmlSerializer.serialize(this.state.editorValue);
    this.lastValue = serialized;
    if (isTextChanged) {
      const {onChange} = this.props;
      onChange && onChange(serialized);
    }
  }

  hasBlock = type => this.state.editorValue.blocks.has(node => node.type == type);

  hasListBlock = type => {
    const {editorValue} = this.state;
    return editorValue.blocks.has(node => {
      const parent = editorValue.document.getParent(node.key);
      return parent && parent.type === type;
    });
  };

  hasMark = type => this.state.editorValue.marks.has(mark => mark.type == type);

  hasLink = () => this.state.editorValue.inlines.has(inline => inline.type === 'link');

  handleButtonClick = (action, type) => {
    this.setState({activeToolbarButton: type})
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
  };

  handleMarkButtonClick = type => {
    const editorValue = this.state.editorValue
      .change()
      .toggleMark(type);

    this.setEditorValue(editorValue);
  };

  handleImageButtonClick = type => {
    this.props.onImageRequest(this.handleImageInput.bind(this));
  }

  handleImageInput = text => {
    if (this.isValidImage(text)) {
      const editorValue = this.insertImage(this.state.editorValue, text);
      this.setEditorValue(editorValue);
    }
  }
  onPaste = (e, change, editor) => {
    const {data} = e;
    switch (data.type) {
      case 'text': return this.onPasteText(data.text, change.value)
    }
  }

  onPasteText = (text, state) => {
    if (this.isValidImage(text)) {
      return this.insertImage(state, text);
    }
    return;
  }

  isValidImage = (text) => isUrl(text) && isImage(text);

  insertImage = (state, src) => {
    return state
      .change()
      .insertBlock({
        type: 'image',
        isVoid: true,
        data: { src }
      });
  }

  handleBlockButtonClick = type => {
    let {editorValue} = this.state;
    let transform = editorValue.change();
    const {document} = editorValue;

    // Handle everything but list buttons.
    if (type !== 'unordered-list' && type !== 'ordered-list') {
      const isActive = this.hasBlock(type);
      const isList = this.hasBlock('list-item');

      if (isList) {
        transform
          .setBlocks(isActive ? '' : type)
          .unwrapBlock('unordered-list')
          .unwrapBlock('ordered-list');
      }

      else {
        transform
          .setBlocks(isActive ? '' : type);
      }
    }

    // Handle the extra wrapping required for list buttons.
    else {
      const isList = this.hasBlock('list-item');
      const isType = editorValue.blocks.some((block) => {
        return !!document.getClosest(block.key, parent => parent.type == type);
      });

      if (isList && isType) {
        transform
          .setBlocks(DEFAULT_NODE)
          .unwrapBlock('unordered-list')
          .unwrapBlock('ordered-list');
      } else if (isList) {
        transform
          .unwrapBlock(type == 'unordered-list' ? 'ordered-list' : 'unordered-list')
          .wrapBlock(type);
      } else {
        transform
          .setBlocks('list-item')
          .wrapBlock(type);
      }
    }

    editorValue = transform;
    this.setEditorValue(editorValue);
  };

  handleLinkButtonClick = ({href, text} = {}) => {
    const {editorValue} = this.state;
    const transform = editorValue.change();
    const decoratedHref = this.props.absoluteLinks
      ? makeHrefAbsolute(href)
      : href;

    if (this.hasLink()) {
      transform
        .unwrapInline('link');
    } else {
      const linkContent = text || decoratedHref;
      const startPos = editorValue.anchorOffset;
      transform
        .insertText(linkContent)
        .select({
          anchorOffset: startPos,
          focusOffset: startPos + linkContent.length,
          isFocused: true,
          isBackward: false,
        })
        .wrapInline({
          type: 'link',
          data: {href: decoratedHref}
        })
        .focus()
        .moveToEnd();
    }

    this.setEditorValue(transform);
  };

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
            placeholderClassName={styles.placeholder}
            className={classNames(styles.editor, {[styles.disabled]: disabled})}
            schema={this.schema}
            value={editorValue}
            onPaste={this.onPaste}
            renderNode={this.renderNode}
            renderMark={this.renderMark}
            onChange={change =>
              {
                const serialized = htmlSerializer.serialize(change.value);
                const isValueChanged = serialized !== this.lastValue;
                this.lastValue = serialized;
                this.setEditorValue(change.value, isValueChanged)
              }
            }/>
          {this.renderError()}
        </div>
      </div>
    );
  };

  renderNode = props => {
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
      case 'img':
        const {node, isFocused} = props;
        // const isFocused = value.selection.hasEdgeIn(node);
        const src = node.data.get('src');
        return (<img data-hook="editor-image" src={src} className={classNames(styles.editorImage, {[styles.activeEditorImage]: isFocused})}/>);
    }
  }

  renderMark = props => {
    const {attributes, children, mark} = props;

    switch (mark.type) {
      case 'bold':
        return <strong {...attributes}>{children}</strong>;
      case 'italic':
        return <em {...attributes}>{children}</em>;
      case 'underlined':
        return <u {...attributes}>{children}</u>;
    }
  }

  renderError = () => {
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
  };
}

export default RichTextArea;
