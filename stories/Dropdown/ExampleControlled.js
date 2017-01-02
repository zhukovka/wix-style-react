import React, {Component} from 'react';
import Dropdown from 'wix-style-react/Dropdown';

const style = {
  display: 'inline-block',
  padding: '0 5px',
  width: '140px',
  lineHeight: '22px'
};

const options = [
  {value: 1, text: 'Option 1'},
  {value: 2, text: 'Option 2'},
  {value: 0, text: '-'},
  {value: 3, text: 'Option 3'},
  {value: 4, text: 'Option 4'},
];

class ControlledExample extends Component {
  constructor() {
    super();
    this.state = {selected: null, show: true};
  }

  render() {
    const onSelect = (value) => this.setState({selected: value});
    const onClose = () => this.setState({selected: null});

    return (
      <div className='ltr' style={style}> Left to right
        <Dropdown options={options} onSelect={onSelect} value={this.state.selected} onClose={onClose}/>
        <div style={{padding: '120px 0 16px'}}>Selected value: {this.state.selected}</div>
      </div>
    );
  }
}

export default () =>
  <ControlledExample/>;
