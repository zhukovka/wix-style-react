import React from 'react';
import Button from 'wix-style-react/Button';
import Toast from 'wix-style-react/Toast';

class ExampleToastToolbar extends React.Component {

  constructor(params) {
    super(params);
    this.state = {showToast: false, theme: 'red'};
  }

  render() {

    return (
        <div>

          <Toast 
            type='topbar' 
            theme={this.state.theme} 
            show={this.state.showToast} 
            timeout={5000} 
            onClose={() => this.setState({showToast:false})}
            >

            Boo! I scared you with this&nbsp;<b>very scary error</b>&nbsp;message!

          </Toast>

          <Button theme="fullblue" onClick={() => this.setState({theme:'blue', showToast:true})}>Show Toast</Button>
          <Button theme="fullred" onClick={() => this.setState({theme:'red', showToast: true})}>Show Toast</Button>
          <Button theme="fullpurple" onClick={() => this.setState({theme:'purple', showToast: true})}>Show Toast</Button>
          <Button theme="fullgreen" onClick={() => this.setState({theme:'green', showToast: true})}>Show Toast</Button>

        </div>
    )
  }
}

export default ExampleToastToolbar;
