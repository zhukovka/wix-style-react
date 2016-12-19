import React, {PropTypes, Component} from 'react';
import TimeInput from 'wix-style-react/TimeInput';

const style = {
  padding: '0 5px 55px',
  width: '500px'
};

export default class UncontrolledSlider extends Component {
  static propTypes = {
    startTime: PropTypes.object
  };

  constructor({value}) {
    super();
  }

  render() {
    const onChange = value => this.setState({value});

    return (
      <TimeInput {...this.props} startTime={this.props.startTime} onChange={onChange}/>
    );
  }
}
