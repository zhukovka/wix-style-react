/* eslint-disable react/style-prop-object */
import React from 'react';
import {MessageBoxLayout1, Modal} from '../src/index.js';

class MessageBoxStory extends React.Component {
  constructor() {
    super();
    this.state = {openModal: null};
    this.isOpen = true;
  }

  onSecondaryButtonClick() {
    console.log('onSecondaryButtonClick');
  }

  onPrimaryButtonClick() {
    console.log('onPrimaryButtonClick');
  }

  onClose() {
    console.log('onClose');
  }

  onCancel() {
    console.log('onCancel');
  }

  render() {
    return (
      <div style={{width: '900px'}}>
        <Modal isOpen={true} hideFooter={true} hideHeader={true} style="plain" onCancel={this.onCancel}>
          <MessageBoxLayout1
            title={<span>Looking Good! <br/> Your Site Is On Google</span>}
            content="All of your pages are indexed and now come up as separate search results on Google. This is great for your visbility!"
            primaryButtonLabel="Got It"
            secondaryButtonLabel="Preview on Google"
            onSecondaryButtonClick={this.onSecondaryButtonClick}
            onPrimaryButtonClick={this.onPrimaryButtonClick}
            onClose={() => this.onClose()}
            imageUrl="http://www.domstechblog.com/wp-content/uploads/2015/09/wix.png"
            />
        </Modal>
      </div>
    );
  }
}

export default MessageBoxStory;
