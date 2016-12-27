import React, {Component, PropTypes} from 'react';
import Remarkable from 'react-remarkable';
import hljs from 'highlight.js';
import './Markdown.scss';

export default class Markdown extends Component {
  static propTypes = {
    source: PropTypes.string
  };

  render() {
    const options = {
      linkTarget: '_parent',
      highlight(code, lang) {
        return hljs.highlight(lang, code).value;
      }
    };

    return (
      <div className="markdown-body">
        <Remarkable source={this.props.source} options={options}/>
      </div>
    );
  }
}
