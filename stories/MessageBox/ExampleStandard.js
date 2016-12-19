import React, {Component} from 'react';
import MessageBoxLayout1 from 'wix-style-react/MessageBox/MessageBoxLayout1';
import MessageBoxLayout2 from 'wix-style-react/MessageBox/MessageBoxLayout2';
import Button from 'wix-style-react/Button';

const NgIf = ({show, children}) => show ? children : null;
const log = text => () => console.log(text);

class ControlledMessageBoxes extends Component {
  state = {
    opened: null
  };

  render() {
    const open = opened => () => this.setState({opened});

    const close = open(null);
    const openLayout1 = open('layout1');
    const openLayout2 = open('layout2');

    return (
      <div>
        <div style={{padding: '0 5px 16px'}}>
          <div style={{display: 'inline-block', padding: '0 5px'}}>
            <Button onClick={openLayout1} >Show MessageBoxLayout1</Button>
          </div>
          <div style={{display: 'inline-block', padding: '0 5px'}}>
            <Button onClick={openLayout2} >Show MessageBoxLayout2</Button>
          </div>
        </div>

        <NgIf show={this.state.opened === 'layout1'}>
          <MessageBoxLayout1
            title={<span>Looking Good! <br/> Your Site Is On Google</span>}
            content="All of your pages are indexed and now come up as separate search results on Google. This is great for your visbility!"
            primaryButtonLabel="Got It"
            secondaryButtonLabel="Preview on Google"
            onSecondaryButtonClick={log('secondary button click')}
            onPrimaryButtonClick={log('primary button click')}
            onClose={close}
            style="blue"
            imageUrl="http://www.domstechblog.com/wp-content/uploads/2015/09/wix.png"
            />
        </NgIf>

        <NgIf show={this.state.opened === 'layout2'}>
          <MessageBoxLayout2
            title={<span>This is title</span>}
            primaryButtonLabel="Got It"
            confirmText="Confirm"
            cancelText="Cancel"
            style="red"
            onCancel={close}
            onOk={log('all ok')}
            >
            <div>
              All of your pages are indexed and now come up as separate search results on Google. This is great for your visbility!
            </div>
          </MessageBoxLayout2>
        </NgIf>
      </div>
    );
  }
}

export default () =>
  <ControlledMessageBoxes/>;
