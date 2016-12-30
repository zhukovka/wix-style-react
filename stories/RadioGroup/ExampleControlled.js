import React, {Component, PropTypes} from 'react';
import RadioGroup from 'wix-style-react/RadioGroup';

const style = {
  display: 'inline-block',
  padding: '0 5px',
  width: '200px',
  lineHeight: '22px'
};

class ControlledRadioGroup extends Component {
  static propTypes = {
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    children: PropTypes.any
  };

  constructor({value}) {
    super();
    this.state = {value};
  }

  render() {
    const onChange = value => this.setState({value});

    return (
      <RadioGroup {...this.props} value={this.state.value} onChange={onChange} disabledRadios={[4]}>
        <div><RadioGroup.Radio value={1}>Option 1</RadioGroup.Radio></div>
        <div><RadioGroup.Radio value={2}>Option 2</RadioGroup.Radio></div>
        <div><RadioGroup.Radio value={3}>Option 3</RadioGroup.Radio></div>
        <div><RadioGroup.Radio value={4}>Option 4</RadioGroup.Radio></div>
      </RadioGroup>
    );
  }
}

export default () =>
  <div>
    <div className="ltr" style={style}>
      <ControlledRadioGroup value={1}/>
    </div>
  </div>;
