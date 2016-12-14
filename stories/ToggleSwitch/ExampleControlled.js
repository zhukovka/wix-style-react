import React, {Component, PropTypes} from 'react';
import ToggleSwitch from 'wix-style-react/ToggleSwitch';

const style = {
  display: 'inline-block',
  padding: '0 5px',
  lineHeight: '10px'
};

class ControlledToggleSwitch extends Component {
  static propTypes = {
    checked: PropTypes.bool
  };

  constructor({checked}) {
    super();
    this.state = {checked};
  }

  render() {
    const onChange = () => this.setState({checked: !this.state.checked});

    return (
      <ToggleSwitch {...this.props} checked={this.state.checked} onChange={onChange}/>
    );
  }
}

export default () =>
  <div>
    <div style={{...style, lineHeight: '12.6px'}}>Small<br/><br/><ControlledToggleSwitch size="small"/></div>
    <div style={style}>Large<br/><br/><ControlledToggleSwitch checked size="large"/></div>
  </div>;
