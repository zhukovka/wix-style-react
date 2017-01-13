import React, {Component, PropTypes} from 'react';

import Markdown from '../Markdown';

const toCodeBlock = (code, type = 'js') =>
  ['```' + type, code.trim(), '```'].join('\n');

export default class CodeBlock extends Component {

  static propTypes = {
    source: PropTypes.string,
    type: PropTypes.string
  }

  static defaultProps = {
    type: 'js'
  }

  render() {
    const {source, type} = this.props;
    return (
      <div>
        <Markdown source={toCodeBlock(source, type)}/>
      </div>
    );
  }
}
