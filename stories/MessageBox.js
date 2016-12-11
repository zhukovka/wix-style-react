/* eslint-disable react/style-prop-object */
import React from 'react';
import {MessageBoxLayout1, MessageBoxLayout2, Button} from '../src/index.js';

class NgIf extends React.Component {
  render() {
    if (this.props.show) {
      return (
        this.props.children
      );
    } else {
      return null
    }
  }
}

class MessageBoxStory extends React.Component {
  constructor() {
    super();
    this.state = {openMessageBox: null};
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
    this.setState({openMessageBox: null})
  }

  onCancel() {
    console.log('onCancel');
  }

  render() {
    return (
      <div style={{width: '900px'}}>
        <h3>
            MessageBox
          </h3>
          <Button style={'fullblue'} onClick={() => this.setState({openMessageBox:'layout1'})} >Show MessageBoxLayout1</Button>
          <br/>
          <br/>
          <Button style={'fullblue'} onClick={() => this.setState({openMessageBox:'layout2'})} >Show MessageBoxLayout2</Button>
          <br/>
          <br/>
          <h3>MessageBoxLayout1</h3>
          <table className='attributes'>
              <tbody>
                  <tr>
                      <th>Attribute name</th>
                      <th>Value</th>
                      <th>Description</th>
                  </tr>
                  <tr>
                      <td>title</td>
                      <td>Node</td>
                      <td>Title for Messag Box</td>
                  </tr>
                  <tr>
                      <td>content</td>
                      <td>Node</td>
                      <td>Content of the Message Box</td>
                  </tr>
                  <tr>
                      <td>primaryButtonLabel</td>
                      <td>String</td>
                      <td>Primary Button Label</td>
                  </tr>
                  <tr>
                      <td>secondaryButtonLabel</td>
                      <td>String</td>
                      <td>Secondary Button Label</td>
                  </tr>
                  <tr>
                      <td>onPrimaryButtonClick</td>
                      <td>Function</td>
                      <td>Primary Button Click callback</td>
                  </tr>
                  <tr>
                      <td>onSecondaryButtonClick</td>
                      <td>Function</td>
                      <td>Secondary Button Click handler</td>
                  </tr>
                  <tr>
                      <td>imageUrl</td>
                      <td>String</td>
                      <td>Header image url</td>
                  </tr>
                  <tr>
                      <td>onClose</td>
                      <td>Function</td>
                      <td>Close callback</td>
                  </tr>
              </tbody>
          </table>     
          <br/>
          <br/>
          <h3>MessageBoxLayout2</h3>
          <table className='attributes'>
              <tbody>
                  <tr>
                      <th>Attribute name</th>
                      <th>Value</th>
                      <th>Description</th>
                  </tr>
                  <tr>
                      <td>hideFooter</td>
                      <td>boolean</td>
                      <td>Hide or show footer</td>
                  </tr>
                  <tr>
                      <td>confirmText</td>
                      <td>string</td>
                      <td>Confirm button Label</td>
                  </tr>    
                  <tr>
                      <td>cancelText</td>
                      <td>string</td>
                      <td>Cancel button Label</td>
                  </tr>   
                  <tr>
                      <td>style</td>
                      <td>string</td>
                      <td>style of the message box, (green, blue , red)</td>
                  </tr>  
                  <tr>
                      <td>onOk</td>
                      <td>function</td>
                      <td>Ok callback</td>
                  </tr>              
                  <tr>
                      <td>onCancel</td>
                      <td>function</td>
                      <td>Cancel callback</td>
                  </tr>        
                  <tr>
                      <td>title</td>
                      <td>node</td>
                      <td>title of the Message Box</td>
                  </tr>      
                  <tr>
                      <td>children</td>
                      <td>any</td>
                      <td>Message box content</td>
                  </tr>                                                                                                                              
              </tbody>
          </table>             
          <br/>          
          <br/>
                    
        <NgIf show={this.state.openMessageBox === 'layout1'}>
          <MessageBoxLayout1
            title={<span>Looking Good! <br/> Your Site Is On Google</span>}
            content="All of your pages are indexed and now come up as separate search results on Google. This is great for your visbility!"
            primaryButtonLabel="Got It"
            secondaryButtonLabel="Preview on Google"
            onSecondaryButtonClick={this.onSecondaryButtonClick}
            onPrimaryButtonClick={this.onPrimaryButtonClick}
            onClose={() => this.onClose()}
            style={"blue"}
            imageUrl="http://www.domstechblog.com/wp-content/uploads/2015/09/wix.png"
            />
          </NgIf>
        <NgIf show={this.state.openMessageBox === 'layout2'}>
          <MessageBoxLayout2
            title={<span>This is title</span>}
            primaryButtonLabel="Got It"
            confirmText="Confirm"
            cancelText="Cancel"
            style={"red"}
            onCancel={() => {this.setState({openMessageBox: null})}}
            onOk={() => {console.log('onOk')}}
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
export default MessageBoxStory;
