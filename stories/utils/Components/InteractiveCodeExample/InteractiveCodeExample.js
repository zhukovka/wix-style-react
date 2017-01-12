import React, {Component, PropTypes} from 'react';
import CodeExample from '../CodeExample';

export default class InteractiveCodeExample extends Component {
  static propTypes = {
    children: PropTypes.node,
    title: PropTypes.string
  };

  constructor(props) {
    super(props);
    this.state = {
      code: '',
    };

    this.onCodeChange = this.onCodeChange.bind(this);
  }

  onCodeChange(code) {
    if (code !== this.state.code) {
      this.setState({code});
    }
  }

  render() {
    const childrenWithOnChange = React.Children.map(this.props.children,
      (child) => React.cloneElement(child, {
        onChange: this.onCodeChange
      })
    );

    return (
      <CodeExample title={this.props.title} code={this.state.code + '\n'}>
        {childrenWithOnChange}
      </CodeExample>
    );
  }

}
