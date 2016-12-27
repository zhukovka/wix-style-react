import React from 'react';
import ButtonSelection from 'wix-style-react/ButtonSelection';

const style = {
  display: 'inline-block',
  padding: '0 5px',
  width: '200px',
  lineHeight: '22px',
  marginTop: '10px'
};

class ControlledButtonSelection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonsNames: ['Button 1', 'Button 2', 'Button 3'],
      value: 'Button 3'
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(value) {
    this.setState({value});
  }

  render() {
    return (
      <div style={style}>
        <ButtonSelection
          buttonsNames={this.state.buttonsNames}
          value={this.state.value}
          onChange={this.handleChange}
          />
      </div>
    );
  }
}

export default ControlledButtonSelection;
