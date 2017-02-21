import React, {PropTypes} from 'react';
import {Editor} from 'slate';
import WixComponent from '../WixComponent';
import htmlSerializer from './htmlSerializer';

class RichTextArea extends WixComponent {
  constructor(props) {
    super(props);
    this.state = {
      editorState: htmlSerializer.deserialize(props.value),
    };
  }

  onChange = state => {
    const {onChange} = this.props;
    this.setState({editorState: state});
    onChange && onChange(htmlSerializer.serialize(state));
  };

  render = () => {
    return (
      <div>
        <Editor
          state={this.state.editorState}
          onChange={this.onChange}
          />
      </div>
    );
  };
}

RichTextArea.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

RichTextArea.defaultProps = {
  value: '<p></p>',
};

export default RichTextArea;
