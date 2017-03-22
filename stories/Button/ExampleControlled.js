import React, {Component} from 'react';
import Button from 'wix-style-react/Button';

const style = {
  display: 'inline-block',
  padding: '0 5px',
  width: '140px',
  lineHeight: '22px'
};

class ControlledExample extends Component {
  constructor() {
    super();
    this.state = {clicked: false};
  }

  render() {
    const onClick = () => this.setState({clicked: !this.state.clicked});

    return (
      <div data-hook="story-button" style={style}>
        <Button id="button" onClick={onClick}>{this.state.clicked ? 'Clicked!' : 'Click Me!'}</Button>
      </div>
    );
  }
}

export default () =>
  <ControlledExample/>;
