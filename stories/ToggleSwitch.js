import React from 'react';
import {ToggleSwitch} from '../src/index.js';

class ToggleSwitchStory extends React.Component {

    constructor(params) {
        super(params);
        this.state = { large: false, small: false };
    }

    render() {
        return (
            <div style={{width:'900px'}}>

                <h2>ToggleSwitch <small style={{fontSize:'11px'}}><a target='_blank' href='https://github.com/wix/wix-style-react/blob/master/stories/ToggleSwitch.js'>source</a></small></h2>
                <p>Controlled switch</p>

                <div style={{width:'400px'}} className='ltr'>
                    <ToggleSwitch checked={this.state.large} onChange={() => this.setState({ large:!this.state.large })} />&nbsp;
                    <ToggleSwitch checked={this.state.small} onChange={() => this.setState({ small:!this.state.small })} size="small"/>
                </div>

                <h3>Attributes</h3>
                <table className={'attributes'}>
                    <tbody>
                        <tr>
                            <th>Attribute name</th>
                            <th>Value</th>
                            <th>Default</th>
                            <th>Description</th>
                        </tr>
                        <tr>
                            <td>checked</td>
                            <td>boolean</td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>onChange</td>
                            <td>function</td>
                            <td></td>
                            <td>Callback function when user changes the value of the component</td>
                        </tr>
                        <tr>
                            <td>size</td>
                            <td>string</td>
                            <td>large</td>
                            <td>Specifies toggle size. One of [small, large].</td>
                        </tr>
                    </tbody>
                </table>

                <h3>Usage Examples</h3>
                <div>
                    <ToggleSwitch checked={true} />&nbsp;
                    <ToggleSwitch checked={false} />&nbsp;
                    <ToggleSwitch size="small" checked/>&nbsp;
                    <ToggleSwitch size="small"/>
                </div>
            </div>
        );
    }
}

export default ToggleSwitchStory;
