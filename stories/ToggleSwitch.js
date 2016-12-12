import React, {Component, PropTypes} from 'react';
import {storiesOf} from '@kadira/storybook';
import Markdown from './utils/Components/Markdown';
import ToggleSwitch from '../src/ToggleSwitch';
import ToggleSwitchReadme from '../src/ToggleSwitch/README.md';

class ToggleSwitchWrapper extends Component {
  static propTypes = {
    checked: PropTypes.bool
  };

  constructor(props) {
    super();
    this.state = {checked: !!props.checked};
  }

  render() {
    const onChange = () => this.setState({checked: !this.state.checked});

    return (
      <ToggleSwitch {...this.props} checked={this.state.checked} onChange={onChange}/>
    );
  }
}

storiesOf('Input', module)
  .add('ToggleSwitch', () => (
    <div>
      <Markdown source={ToggleSwitchReadme}/>

      <h1>Examples</h1>

      <div>
        <h3>ToggleSwitch</h3>
        <ToggleSwitchWrapper/>
        <ToggleSwitchWrapper checked/>
      </div>

      <div>
        <h3>Sizes</h3>
        <ToggleSwitchWrapper size="small" checked/>
        <ToggleSwitchWrapper size="large"/>
      </div>
    </div>
  ));
