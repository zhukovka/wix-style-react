import React, {PropTypes} from 'react';
import ReactDOM from 'react-dom';
import Remarkable from 'react-remarkable';
import hljs from 'highlight.js';
import './Markdown.scss';

export default class Markdown extends React.Component {
  static propTypes = {
    source: PropTypes.string
  };

  componentDidMount() {
    const domNode = ReactDOM.findDOMNode(this);
    const nodes = domNode.querySelectorAll('pre code');

    for (let i = 0; i < nodes.length; i++) {
      hljs.highlightBlock(nodes[i]);
    }
  }

  render() {
    return (
      <div className="markdown-body">
        <Remarkable source={this.props.source}/>
      </div>
    );
  }
}
