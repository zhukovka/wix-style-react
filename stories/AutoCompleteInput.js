import React from 'react';
import {AutoCompleteInput} from '../src/index.js';
import { linkTo } from '@kadira/storybook';

class AutoCompleteInputStory extends React.Component {

    constructor(params) {
        super(params);

        this.state = {
            value: '',
            suggestions: [
                {text:'First suggestion'}, 
                {text:'Second suggestion'}, 
                {text:'Third suggestion'}, 
                {node: <span style={{color:'red'}}>Node suggestion</span>, text:'Text of node suggestion'},
                {text:'Very long suggestion text jldlkasj ldk jsalkdjsal kdjaklsjdlkasj dklasj'}
            ],
            rtlValue: '',
            rtlSuggestions: [
                {text:'אפשרות ראשונה'}, 
                {text:'אפשרות שניה'}, 
                {text:'אפשרות שלישית'}
            ]
        };
    }

    render() {
        return (
            <div style={{width:'900px'}}>

                <h2>AutoCompleteInput <small style={{fontSize:'11px'}}><a target='_blank' href='https://github.com/wix/wix-style-react/blob/master/stories/AutoCompleteInput.js'>source</a></small></h2>
                <p>Suggestions component for Input. (Focus to see in action)</p>

                <div className='ltr' style={{width:'400px'}}>

                    <AutoCompleteInput 
                        suggestions={this.state.suggestions}
                        value={this.state.value}
                        onSet={value => this.setState({value:value.text})}
                        onChange={event => this.setState({value:event.target.value})}
                    />

                </div>

                <h3>Attributes</h3>
                <b>Note:</b> Most attributes are inherited from <a href='#' onClick={linkTo('Components', 'Input')}>Input</a>. Listed are only extending attributes.
                <br/>
                <br/>
                <table className='attributes'>
                    <tbody>
                        <tr>
                            <th>Attribute name</th>
                            <th>Value</th>
                            <th>Description</th>
                        </tr>
                        <tr>
                            <td>suggestions</td>
                            <td>Array of objects to display as suggestions when focused. Objects can include <i>text</i> and <i>node</i></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>onSet</td>
                            <td>Callback when the user selects one of the selections. Called with the selection.</td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>

                <h3>Usage Examples</h3>

                <h4>RTL</h4>
                <div className='rtl' style={{width:'400px'}}>
                    <AutoCompleteInput 
                        rtl={true}
                        suggestions={this.state.rtlSuggestions}
                        value={this.state.rtlValue}
                        onSet={value => this.setState({rtlValue:value.text})}
                        onChange={event => this.setState({rtlValue:event.target.value})}
                    />

                </div>

            </div>
        );
    }
}

export default AutoCompleteInputStory;
