import React from 'react';
import Button from 'wix-style-react/Button';
import Toast from 'wix-style-react/Toast';

class ExampleToastToolbar extends React.Component {

  constructor(params) {
    super(params);
    this.state = {id: 'toast', showToast: false, theme: 'red', top: '0px', location: 'topfixed', type: 'bar'};
  }

  render() {

    return (
      <div className="ltr">

        <Toast
          id={this.state.id}
          type={this.state.type}
          location={this.state.location}
          theme={this.state.theme}
          top={this.state.top}
          show={this.state.showToast}
          timeout={0}
          onClose={() => this.setState({showToast: false})}
          >

          Boo! I scared you with this very scary error message!<Toast.Button onClick={() => {}}>Thanks</Toast.Button>

        </Toast>

        <div style={{display: 'flex', width: '620px', justifyContent: 'space-between'}}>
          <Button id="fullblue-toast" theme="fullblue" onClick={() => this.setState({theme: 'blue', type: 'bar', showToast: true})}>Show Toast</Button>
          <Button theme="fullred" onClick={() => this.setState({theme: 'red', type: 'bar', showToast: true})}>Show Toast</Button>
          <Button theme="fullpurple" onClick={() => this.setState({theme: 'purple', type: 'bar', showToast: true})}>Show Toast</Button>
          <Button theme="fullgreen" onClick={() => this.setState({theme: 'green', type: 'bar', showToast: true})}>Show Toast</Button>
        </div>
        <br/>
        <div style={{display: 'flex', width: '800px', justifyContent: 'space-between'}}>
          <Button theme="fullblue" onClick={() => this.setState({theme: 'blue', type: 'largebar', showToast: true})}>Show Toast (large)</Button>
          <Button theme="fullred" onClick={() => this.setState({theme: 'red', type: 'largebar', showToast: true})}>Show Toast (large)</Button>
          <Button theme="fullpurple" onClick={() => this.setState({theme: 'purple', type: 'largebar', showToast: true})}>Show Toast (large)</Button>
          <Button theme="fullgreen" onClick={() => this.setState({theme: 'green', type: 'largebar', showToast: true})}>Show Toast (large)</Button>
        </div>

      </div>
    );
  }
}

export default ExampleToastToolbar;
