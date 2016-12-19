import React, {Component, PropTypes} from 'react';
import Markdown from '../Markdown';

const toCodeBlock = str => `\`\`\`js\n${str}\`\`\``;

export default class CodeBlock extends Component {
  static propTypes = {
    source: PropTypes.string
  };

  render() {
    const source = toCodeBlock(this.props.source);

    return (
      <div>
        <Markdown source={source}/>
      </div>
    );
  }
}
