import React, {Component, PropTypes} from 'react';
import Checkbox from 'wix-style-react/Checkbox';

const style = {
  display: 'inline-block',
  padding: '0 5px',
  width: '200px',
  lineHeight: '22px'
};

class ControlledCheckbox extends Component {
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
      <Checkbox {...this.props} checked={this.state.checked} onChange={onChange}/>
    );
  }
}

export default () =>
  <div className="ltr" style={style}>
    <ControlledCheckbox>Make my profile visible</ControlledCheckbox>
  </div>;
