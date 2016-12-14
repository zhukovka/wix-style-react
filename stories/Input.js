import React from 'react';
import {Input} from '../src/index.js';

class InputStory extends React.Component {
  constructor(params) {
      super(params);
      this.state = {
          exampleMG: ''
      };
  }

  render() {
    return (
        <div style={{width:'900px'}}>

            <h2>Input <small style={{fontSize:'11px'}}><a target='_blank' href='https://github.com/wix/wix-style-react/blob/master/stories/Input.js'>source</a></small></h2>
            <p>General input container.</p>

            <div style={{width:'400px'}}>
                <Input onEnterPressed={()=>alert('Enter!')} onEscapePressed={()=>alert('Escape!')} />
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
                        <td>value</td>
                        <td>Inputs value</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>theme</td>
                        <td>The theme of the input</td>
                        <td>'normal', 'paneltitle'</td>
                    </tr>
                    <tr>
                        <td>defaultValue</td>
                        <td>Default value for those who wants to use this component un-controlled</td>
                        <td></td>
                    </tr>
                    <tr style={{lineHeight:'1.5em'}}>
                        <td>tabIndex</td>
                        <td>Standard component tabIndex</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>placeholder</td>
                        <td>Placeholder to display</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>error</td>
                        <td>Is input value erroneous</td>
                        <td>boolean: true or false</td>
                    </tr>
                    <tr>
                        <td>unit</td>
                        <td>Unit to display in input box</td>
                        <td>boolean: true or false</td>
                    </tr>
                    <tr>
                        <td>magnifyingGlass</td>
                        <td>Should the component include a magnifyingGlass</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>rtl</td>
                        <td>Should text input be RTL?</td>
                        <td>boolean: true or false</td>
                    </tr>
                    <tr>
                        <td>autoFocus</td>
                        <td>Standard React Input autoFocus (focus the element on mount)</td>
                        <td>boolean: true or false</td>
                    </tr>
                    <tr>
                        <td>autoSelect</td>
                        <td>Standard React Input autoSelect (select the entire text of the element on focus)</td>
                        <td>boolean: true or false</td>
                    </tr>
                    <tr>
                        <td>onChange</td>
                        <td>Standard input onChange callback</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>onBlur</td>
                        <td>Standard input onBlur callback</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>onFocus</td>
                        <td>Standard input onFocus callback</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>onEnterPressed</td>
                        <td>Called when user presses -enter-</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>onEscapePressed</td>
                        <td>Called when user presses -escape-</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>onKeyDown</td>
                        <td>Standard input onKeyDown callback</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>onClear</td>
                        <td>Displays a X button on a non-empty input, and calls this callback when pressed. This callback should normally erase the value of the controlled object, and call focus</td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
            <h3>Functions</h3>
            <table className='attributes'>
                <tbody>
                    <tr>
                        <th>Function name</th>
                        <th>Description</th>
                    </tr>
                    <tr>
                        <td>focus</td>
                        <td>Focuses on the input</td>
                    </tr>
                    <tr>
                        <td>blur</td>
                        <td>Blurs the input (loses focus)</td>
                    </tr>
                    <tr>
                        <td>select</td>
                        <td>Selects all text in the input</td>
                    </tr>
                </tbody>
            </table>

            <h3>Usage Examples</h3>

            <h4>Error attribute Example (error=true)</h4>
            <h5>LTR</h5>
            <div className='ltr' style={{width:'400px'}}>
                <Input error={true} />
            </div>
            <h5>RTL</h5>
            <div className='rtl' style={{width:'400px'}}>
                <Input rtl={true} error={true} />
            </div>

            <h4>Unit attribute Example (unit='$')</h4>
            <h5>LTR</h5>
            <div className='ltr' style={{width:'400px'}}>
                <Input unit={'$'}/>
            </div>
            <h5>RTL</h5>
            <div className='rtl' style={{width:'400px'}}>
                <Input rtl={true} unit={'$'}/>
            </div>

            <h4>Unit + Error attribute Example (unit='$' & error=true)</h4>
            <h5>LTR</h5>
            <div className='ltr' style={{width:'400px'}}>
                <Input unit={'$'} error={true} />
            </div>
            <h5>RTL</h5>
            <div className='rtl' style={{width:'400px'}}>
                <Input rtl={true} unit={'$'} error={true} />
            </div>

            <h4>MagnifyingGlass (magnifyingGlass=true)</h4>
            <h5>LTR</h5>
            <div className='ltr' style={{width:'400px'}}>
                <Input magnifyingGlass={true} />
                <br/>
                <Input magnifyingGlass={true} unit={'$'} />
                <br/>
                <Input magnifyingGlass={true} error={true} />
                <br/>
                <Input magnifyingGlass={true} error={true} unit={'$'} />
            </div>
            <h5>RTL</h5>
            <div className='rtl' style={{width:'400px'}}>
                <Input rtl={true} magnifyingGlass={true} />
                <br/>
                <Input rtl={true} magnifyingGlass={true} unit={'$'} />
                <br/>
                <Input rtl={true} magnifyingGlass={true} error={true} />
                <br/>
                <Input rtl={true} magnifyingGlass={true} error={true} unit={'$'} />
            </div>

            <h4>Force Focus attribute Example (forceFocus=true)</h4>
            <div style={{width:'400px'}}>
                <Input forceFocus={true}/>
            </div>

            <h4>Force Hover attribute Example (forceHover=true)</h4>
            <div style={{width:'400px'}}>
                <Input forceHover={true}/>
            </div>

            <h4>Style: paneltitle</h4>
            <div style={{background:'#3899ec', padding:'20px', width:'400px'}}>
                <div style={{width:'400px'}} className={'ltr'} >
                    <Input theme={'paneltitle'} />
                </div>
            </div>

            <h4>Commands test</h4>
            <div style={{width:'400px'}}>
                <Input ref='inputtest' />
            </div>
            <button onClick={() => this.refs.inputtest.focus()}>Focus</button>
            <button onClick={() => { this.refs.inputtest.focus(); setTimeout(() => this.refs.inputtest.blur(), 1000)}}>Focus & blur 1 second later</button>
            <button onClick={() => { this.refs.inputtest.focus(); this.refs.inputtest.select()}}>Select text</button>

        </div>
    )
  }
}

export default InputStory;
