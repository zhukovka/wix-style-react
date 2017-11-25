import React from 'react';
import CoreToggleSwitch from 'wix-style-react/components/core/ToggleSwitch';
import ToggleSwitch from 'wix-style-react/components/backoffice/ToggleSwitch';

export default class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {checked: true, x: 'standard'};
  }

  render() {
    return (
      <div style={{width: '500px', display: 'flex', justifyContent: 'space-between'}}>
        <div>
          <h1>Core</h1>
          <CoreToggleSwitch checked={this.state.checked} onChange={() => this.setState({checked: !this.state.checked})}/>
        </div>

        <div>
          <h1>Backoffice</h1>
          <h3>standard</h3><ToggleSwitch skin={this.state.x} checked={this.state.checked} onChange={() => this.setState({checked: !this.state.checked})}/>
          <h3>error</h3><ToggleSwitch skin="error" checked={this.state.checked} onChange={() => this.setState({checked: !this.state.checked})}/>
          <h3>success</h3><ToggleSwitch skin="success" checked={this.state.checked} onChange={() => this.setState({checked: !this.state.checked})}/>
          <h3>disabled</h3><ToggleSwitch disabled checked={this.state.checked} onChange={() => this.setState({checked: !this.state.checked})}/>
        </div>
      </div>
    );
  }
}
