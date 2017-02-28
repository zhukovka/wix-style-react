import React, {Component, PropTypes} from 'react';
import ToggleSwitch from 'wix-style-react/ToggleSwitch';

const styles = {
  header: {
    display: 'flex'
  },
  switch: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: '40px',
  },
  text: {
    padding: '0 25px 0 5px'
  }
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
  <div style={styles.header}>
    <div style={styles.text}>Small
      <div style={styles.switch}>
        <ControlledToggleSwitch size="small"/>
      </div>
    </div>

    <div style={styles.text}>Large
      <div style={styles.switch}>
        <ControlledToggleSwitch checked size="large"/>
      </div>
    </div>

    <div className="rtl" style={styles.header}>
      <div style={styles.text}>Small rtl
        <div style={styles.switch}>
          <ControlledToggleSwitch size="small"/>
        </div>
      </div>

      <div style={styles.text}>Large rtl
        <div style={styles.switch}>
          <ControlledToggleSwitch checked size="large"/>
        </div>
      </div>
    </div>
  </div>;
