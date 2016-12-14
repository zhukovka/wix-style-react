import React, {Component, PropTypes} from 'react';
import Markdown from '../Markdown';

const toCodeBlock = str => `\`\`\`js\n${str}\`\`\``;

export default class CodeBlock extends Component {
  static propTypes = {
    source: PropTypes.string
  };

  render() {
    const style = {
      margin: '20px 0 0 0'
    };

    const source = toCodeBlock(this.props.source);

    return (
      <div style={style}>
        <Markdown source={source}/>
      </div>
    );
  }
}
