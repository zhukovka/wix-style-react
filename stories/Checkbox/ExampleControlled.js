import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Checkbox from 'wix-style-react/Checkbox';

const style = {
  display: 'flex',
  padding: '0 5px',
  width: '600px',
  justifyContent: 'space-between',
  lineHeight: '22px'
};

class ControlledCheckbox extends Component {
  static propTypes = {
    checked: PropTypes.bool,
    supportThreeStates: PropTypes.bool
  };

  constructor() {
    super();
    this.state = {checked: false, indeterminate: false};
  }

  render() {
    const onChange = () => {
      if (this.props.supportThreeStates) {
        if (this.state.indeterminate) {
          this.setState({indeterminate: false});
        } else if (!this.state.checked) {
          this.setState({indeterminate: true});
          this.setState({checked: true});
        } else {
          this.setState({checked: false});
        }
      } else {
        this.setState({checked: !this.state.checked});
      }
    };

    return (
      <Checkbox indeterminate={this.state.indeterminate} checked={this.state.checked} onChange={onChange} {...this.props}/>
    );
  }
}

export default () =>
  <div className="ltr" style={style}>
    <ControlledCheckbox dataHook="story-checkbox-1">Make my profile visible</ControlledCheckbox>
    <ControlledCheckbox dataHook="story-checkbox-2" indeterminate>I work only with indeterminate mode</ControlledCheckbox>
    <ControlledCheckbox dataHook="story-checkbox-3" supportThreeStates>I have three states</ControlledCheckbox>
  </div>;
