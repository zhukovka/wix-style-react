import React, {Component} from 'react';
import {Button} from 'wix-style-react/Viewer';

const style = {
  display: 'inline-block',
  padding: '0 5px',
  width: '140px',
  lineHeight: '22px'
};

class ControlledExample extends Component {
  constructor() {
    super();
    this.state = {clicked: false, disabledClick: false};
  }

  render() {
    const onClick = () => this.setState({clicked: !this.state.clicked});

    return (
      <div>
        <div className="ltr" style={style}>
          Fill Theme: (default)
          <div className="ltr">
            <br/>Active:<br/>
            <Button id="button" dataHook="story-button-enabled" onClick={onClick}>{this.state.clicked ? 'Clicked!' : 'Click Me!'}</Button>
          </div>
          <div className="ltr">
            <br/>Disabled:<br/>
            <Button id="button" dataHook="story-button-disabled" disabled={true} onClick={onClick}>{this.state.clicked ? 'Clicked!' : 'Click Me!'}</Button>
          </div>
        </div>
        <div className="ltr" style={style}>
          Design Theme:<br/>
          <div className="ltr">
            <br/>Active:<br/>
            <Button id="button" dataHook="story-button-enabled"
                    theme="design"
                    onClick={onClick}>{this.state.disabledClick ? 'Clicked!' : 'Click Me!'}</Button>
          </div>
          <div className="ltr">
            <br/>Disabled:<br/>
            <Button id="button" dataHook="story-button-disabled"
                    theme="design"
                    disabled={true}
                    onClick={onClick}>{this.state.disabledClick ? 'Clicked!' : 'Click Me!'}</Button>
          </div>
        </div>
        <div className="ltr" style={style}>
          Connected Theme:<br/>
          <div className="ltr">
            <br/>Active:<br/>
            <Button id="button" dataHook="story-button-enabled"
                    theme="connected"
                    onClick={onClick}>{this.state.disabledClick ? 'Clicked!' : 'Click Me!'}</Button>
          </div>
          <div className="ltr">
            <br/>Disabled:<br/>
            <Button id="connected" dataHook="story-button-disabled"
                    theme="design"
                    disabled={true}
                    onClick={onClick}>{this.state.disabledClick ? 'Clicked!' : 'Click Me!'}</Button>
          </div>
        </div>
      </div>
    );
  }
}

export default () =>
  <ControlledExample/>;
