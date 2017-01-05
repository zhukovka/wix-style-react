import React, {Component} from 'react';
import Button from 'wix-style-react/Button';

class AnimationExample extends Component {
  constructor() {
    super();
    this.state = {theme: 'fullblue'};
  }

  render() {
    const onClick = () => this.setState({theme: this.state.theme === 'fullblue' ? 'fullgreen' : 'fullblue'});

    return (
      <div>
        <Button id="button" theme={this.state.theme} onClick={onClick}>Click Me!</Button>
      </div>
    );
  }
}

export default () =>
  <AnimationExample/>;

