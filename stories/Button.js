import React from 'react';
import {Button} from '../src/index.js';

export default () => {
    const mainClick = () => {
      document.getElementById('main-example').innerText = 'clicked!';
    }
    return (
        <div style={{width:'900px'}}>

            <h2>Button <small style={{fontSize:'11px'}}><a target='_blank' href='https://github.com/wix/wix-style-react/blob/master/stories/Button.js'>source</a></small></h2>
            <p>General Buttons</p>

            <div style={{width:'400px'}}>
                <Button style={'fullblue'} id={'main-example'} onClick={mainClick}><div>Click Me!</div></Button>
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
                        <td>fullblue, emptyblue, fullpurple, emptypurple, fullgreen, emptygreen, fullred, emptyred</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>height</td>
                        <td>string - small (30), medium (36), large (42)</td>
                        <td>Default is medium</td>
                    </tr>
                    <tr>
                        <td>disabled</td>
                        <td>boolean</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>onClick</td>
                        <td>function</td>
                        <td></td>
                    </tr>
                </tbody>
            </table>

            <h3>Usage Examples</h3>

            <h4>Style = fullblue</h4>
            <div style={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
            <div>Standard: <Button style={'fullblue'} >Click Me!</Button></div>
            <div>Hover: <Button style={'fullblue'} hover={true} >Click Me!</Button></div>
            <div>Active: <Button style={'fullblue'} active={true} >Click Me!</Button></div>
            <div>Disabled : <Button style={'fullblue'} disabled={true} >Click Me!</Button></div>
            </div>

            <h4>Style = emptyblue</h4>
            <div style={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
            <div>Standard: <Button style={'emptyblue'} >Click Me!</Button></div>
            <div>Hover: <Button style={'emptyblue'} hover={true} >Click Me!</Button></div>
            <div>Active: <Button style={'emptyblue'} active={true} >Click Me!</Button></div>
            <div>Disabled: <Button style={'emptyblue'} disabled={true} >Click Me!</Button></div>
            </div>

            <h4>Style = fullpurple</h4>
            <div style={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
            <div>Standard: <Button style={'fullpurple'} >Click Me!</Button></div>
            <div>Hover: <Button style={'fullpurple'} hover={true} >Click Me!</Button></div>
            <div>Active: <Button style={'fullpurple'} active={true} >Click Me!</Button></div>
            <div>Disabled: <Button style={'fullpurple'} disabled={true} >Click Me!</Button></div>
            </div>

            <h4>Style = emptypurple</h4>
            <div style={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
            <div>Standard: <Button style={'emptypurple'} >Click Me!</Button></div>
            <div>Hover: <Button style={'emptypurple'} hover={true} >Click Me!</Button></div>
            <div>Active: <Button style={'emptypurple'} active={true} >Click Me!</Button></div>
            <div>Disabled: <Button style={'emptypurple'} disabled={true} >Click Me!</Button></div>
            </div>

            <h4>Style = fullgreen</h4>
            <div style={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
            <div>Standard: <Button style={'fullgreen'} >Click Me!</Button></div>
            <div>Hover: <Button style={'fullgreen'} hover={true} >Click Me!</Button></div>
            <div>Active: <Button style={'fullgreen'} active={true} >Click Me!</Button></div>
            <div>Disabled: <Button style={'fullgreen'} disabled={true} >Click Me!</Button></div>
            </div>

            <h4>Style = emptygreen</h4>
            <div style={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
            <div>Standard: <Button style={'emptygreen'} >Click Me!</Button></div>
            <div>Hover: <Button style={'emptygreen'} hover={true} >Click Me!</Button></div>
            <div>Active: <Button style={'emptygreen'} active={true} >Click Me!</Button></div>
            <div>Disabled: <Button style={'emptygreen'} disabled={true} >Click Me!</Button></div>
            </div>

            <h4>Style = fullred</h4>
            <div style={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
            <div>Standard: <Button style={'fullred'} >Click Me!</Button></div>
            <div>Hover: <Button style={'fullred'} hover={true} >Click Me!</Button></div>
            <div>Active: <Button style={'fullred'} active={true} >Click Me!</Button></div>
            <div>Disabled: <Button style={'fullred'} disabled={true} >Click Me!</Button></div>
            </div>

            <h4>Style = emptyred</h4>
            <div style={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
            <div>Standard: <Button style={'emptyred'} >Click Me!</Button></div>
            <div>Hover: <Button style={'emptyred'} hover={true} >Click Me!</Button></div>
            <div>Active: <Button style={'emptyred'} active={true} >Click Me!</Button></div>
            <div>Disabled: <Button style={'emptyred'} disabled={true} >Click Me!</Button></div>
            </div>

            <h4>Heights</h4>
            <div style={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
            <div>small: <Button height={'small'}>Click Me!</Button></div>
            <div>medium: <Button height={'medium'}>Click Me!</Button></div>
            <div>large: <Button height={'large'}>Click Me!</Button></div>
            </div>
            <br/><br/>
        </div>
    )
}
