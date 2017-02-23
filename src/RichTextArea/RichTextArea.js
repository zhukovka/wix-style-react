import React, {PropTypes} from 'react';
import classNames from 'classnames';
import {Editor} from 'slate';
import WixComponent from '../WixComponent';
import Tooltip from '../Tooltip';
import SvgExclamation from '../svg/Exclamation.js';
import RichTextEditorToolbar from './RichTextAreaToolbar';
import htmlSerializer from './htmlSerializer';
import styles from './RichTextArea.scss';

const DEFAULT_NODE = 'paragraph';

class RichTextArea extends WixComponent {
  /* eslint-disable react/prop-types */
  schema = {
    nodes: {
      'unordered-list': props => <ul {...props.attributes}>{props.children}</ul>,
      'list-item': props => <li {...props.attributes}>{props.children}</li>,
      'ordered-list': props => <ol {...props.attributes}>{props.children}</ol>,
    },
    marks: {
      bold: {
        fontWeight: 'bold'
      },
      italic: {
        fontStyle: 'italic'
      },
      underline: {
        textDecoration: 'underline'
      }
    }
  };
  /* eslint-disable */

  constructor(props) {
    super(props);
    this.state = {
      editorState: htmlSerializer.deserialize(props.value),
    };
  }

  setEditorState = editorState => {
    this.setState({editorState}, this.triggerChange);
  };

  triggerChange() {
    const {onChange} = this.props;
    onChange && onChange(htmlSerializer.serialize(this.state.editorState));
  }

  hasBlock = type => {
    const { editorState } = this.state;
    return editorState.blocks.some(node => node.type == type);
  };

  handleButtonClick = (action, type) => {
    switch (action) {
      case 'mark':
        return this.handleMarkButtonClick(type);
      case 'block':
        return this.handleBlockButtonClick(type);
      case 'link':
        // @TODO: implement
        return;
    }
  };

  handleMarkButtonClick = type => {
    const editorState = this.state.editorState
      .transform()
      .toggleMark(type)
      .apply();

    this.setEditorState(editorState);
  };

  handleBlockButtonClick = type => {
    let { editorState } = this.state;
    let transform = editorState.transform();
    const { document } = editorState;

    // Handle everything but list buttons.
    if (type !== 'unordered-list' && type !== 'ordered-list') {
      const isActive = this.hasBlock(type);
      const isList = this.hasBlock('list-item');

      if (isList) {
        transform
          .setBlock(isActive ? '' : type)
          .unwrapBlock('unordered-list')
          .unwrapBlock('ordered-list');
      }

      else {
        transform
          .setBlock(isActive ? '' : type);
      }
    }

    // Handle the extra wrapping required for list buttons.
    else {
      const isList = this.hasBlock('list-item');
      const isType = editorState.blocks.some((block) => {
        return !!document.getClosest(block.key, parent => parent.type == type);
      });

      if (isList && isType) {
        transform
          .setBlock(DEFAULT_NODE)
          .unwrapBlock('unordered-list')
          .unwrapBlock('ordered-list');
      } else if (isList) {
        transform
          .unwrapBlock(type == 'unordered-list' ? 'ordered-list' : 'unordered-list')
          .wrapBlock(type);
      } else {
        transform
          .setBlock('list-item')
          .wrapBlock(type);
      }
    }

    editorState = transform.apply();
    this.setState({editorState});
  };

  render = () => {
    const {editorState} = this.state;
    const {error} = this.props;
    const className = classNames(styles.container, {
      [styles.withError]: error,
      [styles.isFocused]: editorState.isFocused,
    });

    return (
      <div className={className}>
        <div className={styles.toolbar}>
          <RichTextEditorToolbar onClick={this.handleButtonClick}/>
        </div>
        <div className={styles.editorWrapper}>
          <Editor
            className={styles.editor}
            schema={this.schema}
            state={editorState}
            onChange={this.setEditorState}
            />
          {this.renderError()}
        </div>
      </div>
    );
  };

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
        <div className={styles.exclamation}><SvgExclamation width={2} height={11}/></div>
      </Tooltip>
    );
  };
}

RichTextArea.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  buttons: PropTypes.arrayOf(PropTypes.string), // TODO: use PropTypes.oneOf(),
  error: PropTypes.bool,
  errorMessage: PropTypes.string,
};

RichTextArea.defaultProps = {
  value: '<p></p>',
  errorMessage: '',
};

export default RichTextArea;
