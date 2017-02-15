import React, {Component, PropTypes} from 'react';
import TextButton from '../TextButton';
import copy from 'copy-to-clipboard';
import Markdown from '../Markdown';
import Toast from '../../../../src/Toast';

const toCodeBlock = (code, type = 'js') =>
  ['```' + type, code.trim(), '```'].join('\n');

export default class CodeBlock extends Component {

  static propTypes = {
    source: PropTypes.string,
    type: PropTypes.string
  };

  static defaultProps = {
    type: 'js'
  };

  constructor(props) {
    super(props);
    this.state = {showToast: false};
  }

  render() {
    const {source, type} = this.props;
    const copyToClipboardClicked = () => {
      copy(source);
      this.setState({showToast: true});
    };
    return (
      <div>
        <Toast
          show={this.state.showToast}
          timeout={2000}
          theme="blue"
          onClose={() => this.setState({showToast: false})}>
          Copied!
        </Toast>

        <TextButton onClick={copyToClipboardClicked}>Copy to clipboard</TextButton>
        <Markdown source={toCodeBlock(source, type)}/>
      </div>
    );
  }
}
