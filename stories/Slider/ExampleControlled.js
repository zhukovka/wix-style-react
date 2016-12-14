import React, {PropTypes, Component} from 'react';
import Slider from 'wix-style-react/Slider';

const style = {
  padding: '0 5px 55px',
  width: '500px'
};

class ControlledSlider extends Component {
  static propTypes = {
    value: PropTypes.arrayOf(PropTypes.number)
  };

  constructor({value}) {
    super();
    this.state = {value};
  }

  render() {
    const onChange = value => this.setState({value});

    return (
      <Slider {...this.props} value={this.state.value} onChange={onChange}/>
    );
  }
}

export default () =>
  <div>
    <div style={style}>Single handle<ControlledSlider value={[3]} min={1} max={10}/></div>
    <div style={style}>Multiple handles<ControlledSlider value={[3, 4, 5]} min={1} max={10}/></div>
  </div>;
