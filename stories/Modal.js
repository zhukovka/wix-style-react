import React from 'react';
import {Button, Modal} from '../src/index.js';
import { MessageBoxLayout2 } from '../src';
import { HeaderLayout1, FooterLayout1 } from '../src';

class ModalStory extends React.Component {

    constructor() {
        super();
        this.state = {openModal:null};
    }

    render() {
        return (
            <div style={{width:'900px'}}>

                <h2>Modal Box <small style={{fontSize:'11px'}}><a target='_blank' href='https://github.com/wix/wix-style-react/blob/master/stories/Modal.js'>source</a></small></h2>

                <div style={{width:'400px'}}>

                    <Button style={'fullblue'} onClick={() => this.setState({openModal:'blue'})} >Open Blue Modal</Button>
                    <Modal isOpen={this.state.openModal === 'blue'} shouldCloseOnOverlayClick={true} onRequestClose={()=> this.setState({openModal:null})}>
                           <MessageBoxLayout2 title={'I am a blue title'}
                                              confirmText={'OK'}
                                              cancelText={'Cancel'}
                                              style={'blue'}
                                              hideFooter={false}
                                              onOk={() => this.setState({openModal:null})}
                                              onCancel={() => this.setState({openModal:null})}
                                              >
                                Hello blue world!
                           </MessageBoxLayout2>
                    </Modal>

                    <br/>
                    <br/>

                    <Button style={'fullred'} onClick={() => this.setState({openModal:'red'})} >Open Red Modal</Button>
                    <Modal isOpen={this.state.openModal === 'red'}>
                           <MessageBoxLayout2 title={'I am a red title'}
                                              confirmText={'OK'}
                                              cancelText={'Cancel'}
                                              style={'red'}
                                              hideFooter={false}
                                              onOk={() => this.setState({openModal:null})}
                                              onCancel={() => this.setState({openModal:null})}
                                              >
                                Hello blue world!
                           </MessageBoxLayout2>
                    </Modal>                    

                    <br/>
                    <br/>

                    <Button style={'fullgreen'} onClick={() => this.setState({openModal:'green'})} >Open Green Modal</Button>
                    <Modal isOpen={this.state.openModal === 'green'}>
                           <MessageBoxLayout2 title={'I am a green title'}
                                              confirmText={'OK'}
                                              cancelText={'Cancel'}
                                              style={'green'}
                                              hideFooter={false}
                                              onOk={() => this.setState({openModal:null})}
                                              onCancel={() => this.setState({openModal:null})}
                                              >
                                Hello blue world!
                           </MessageBoxLayout2>
                    </Modal>  
                    <br/>
                    <br/>    

                    <Button style={'fullgreen'} onClick={() => this.setState({openModal:'custom'})} >Custom Modal</Button>
                    <Modal isOpen={this.state.openModal === 'custom'}>
                        <div>
                            <HeaderLayout1 title="custom modal" style="red" onCancel={() => this.setState({openModal:null})}/>
                               <div style={{padding: '20px', background: '#FFF'}}>
                                   This is custom content with custom styling
                               </div>
                               <div style={{background:'#FFF'}}>
                                    <FooterLayout1 confirmText="confirm" cancelText="Cancel" style="blue" onCancel={() => this.setState({openModal:null})}/>
                               </div>
                        </div>
                    </Modal>                                    

                </div>

                <h3>Attributes</h3>
                <table className='attributes'>
                    <tbody>
                        <tr>
                            <th>Attribute name</th>
                            <th>Value</th>
                            <th>Description</th>
                        </tr>
                        <tr>
                            <td>style</td>
                            <td>blue, red, green</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>isOpen</td>
                            <td>boolean</td>
                            <td>Is the modal open or not</td>
                        </tr>
                        <tr>
                            <td>onCancel</td>
                            <td>function</td>
                            <td>Called when user presses the X on the top bar, or the cancel button on the footer</td>
                        </tr>
                    </tbody>
                </table>

                <h3>
                    Note: 
                </h3>
                <div>
                    Modal provides the ability to open a component on top of a backdrop <br/>
                    you can 
                    <ul>
                        <li>
                            Add MessageBox as child ( MessageBox is a predefined layout)
                        </li>
                        <li>
                            Composite your own component with the help of UI-Lib existing layous (import HeaderLayout1, FooterLayout1) or your own.
                        </li>                        
                    </ul>
                   Please check the source code
                </div>
            </div>
        );
    }
}

export default ModalStory;
