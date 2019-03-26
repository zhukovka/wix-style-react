import React from 'react';
import PropTypes from 'prop-types';
import {
  EditorState,
  Editor,
  ContentState,
  convertFromHTML,
  convertToRaw,
  CompositeDecorator,
} from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import mapValues from 'lodash/mapValues';

import styles from './RichTextInputArea.scss';
import RichTextToolbar from './Toolbar/RichTextToolbar';
import EditorUtilities from './EditorUtilities';
import { RichTextInputAreaContext } from './RichTextInputAreaContext';
import { defaultTexts } from './RichTextInputAreaTexts';

const decorator = new CompositeDecorator([
  {
    strategy: EditorUtilities.findLinkEntities,
    component: ({ contentState, entityKey, children }) => {
      const { url } = contentState.getEntity(entityKey).getData();

      return (
        <a href={url} className={styles.link}>
          {children}
        </a>
      );
    },
  },
]);

class RichTextInputArea extends React.PureComponent {
  static displayName = 'RichTextInputArea';

  static propTypes = {
    dataHook: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    texts: PropTypes.shape({
      toolbarButtons: PropTypes.shape(
        mapValues(defaultTexts.toolbarButtons, () => PropTypes.string),
      ),
      insertionForm: PropTypes.shape({
        ...mapValues(defaultTexts.insertionForm, () => PropTypes.string),
        link: PropTypes.shape(
          mapValues(defaultTexts.toolbarButtons.link, () => PropTypes.string),
        ),
      }),
    }),
  };

  static defaultProps = {
    value: '',
    texts: {},
  };

  constructor(props) {
    super(props);

    const { texts: consumerTexts } = props;

    this.state = {
      editorState: EditorState.createEmpty(decorator),
      texts: {
        toolbarButtons: {
          ...defaultTexts.toolbarButtons,
          ...consumerTexts.toolbarButtons,
        },
        insertionForm: {
          ...defaultTexts.insertionForm,
          ...consumerTexts.insertionForm,
        },
      },
    };
  }
  componentDidMount() {
    const { value } = this.props;

    // TODO: currently it treats the value as an initial value
    this._updateContentByValue(value);
  }

  render() {
    const { dataHook } = this.props;

    return (
      <div data-hook={dataHook} className={styles.root}>
        <RichTextInputAreaContext.Provider
          value={{
            texts: this.state.texts,
          }}
        >
          <RichTextToolbar
            dataHook="richtextarea-toolbar"
            className={styles.toolbar}
            editorState={this.state.editorState}
            onBold={this._setEditorState}
            onItalic={this._setEditorState}
            onUnderline={this._setEditorState}
            onLink={newEditorState => {
              this._setEditorState(newEditorState, () =>
                this.refs.editor.focus(),
              );
            }}
            onBulletedList={this._setEditorState}
            onNumberedList={this._setEditorState}
          />
        </RichTextInputAreaContext.Provider>
        <Editor
          ref="editor"
          editorState={this.state.editorState}
          onChange={this._onEditorChange}
        />
      </div>
    );
  }

  _setEditorState = (editorState, onDone) =>
    this.setState({ editorState }, onDone);

  _onEditorChange = newEditorState => {
    this.setState({ editorState: newEditorState });

    const currentContent = this.state.editorState.getCurrentContent();
    const newContent = newEditorState.getCurrentContent();

    if (currentContent !== newContent) {
      const { onChange = () => {} } = this.props;
      const rawNewContent = convertToRaw(newContent);
      const newContentAsHtml = draftToHtml(rawNewContent);

      onChange(newContentAsHtml);
    }
  };

  _updateContentByValue = value => {
    const blocksFromHtml = convertFromHTML(value);
    if (blocksFromHtml.contentBlocks) {
      const content = ContentState.createFromBlockArray(blocksFromHtml);
      const updatedEditorState = EditorState.push(
        this.state.editorState,
        content,
      );
      this.setState({ editorState: updatedEditorState });
    }
  };
}

export default RichTextInputArea;
