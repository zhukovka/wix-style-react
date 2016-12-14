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
                <Button theme={'fullblue'} id={'main-example'} onClick={mainClick}><div>Click Me!</div></Button>
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
                        <td>theme</td>
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
            <div>Standard: <Button theme={'fullblue'} >Click Me!</Button></div>
            <div>Hover: <Button theme={'fullblue'} hover={true} >Click Me!</Button></div>
            <div>Active: <Button theme={'fullblue'} active={true} >Click Me!</Button></div>
            <div>Disabled : <Button theme={'fullblue'} disabled={true} >Click Me!</Button></div>
            </div>

            <h4>Style = emptyblue</h4>
            <div style={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
            <div>Standard: <Button theme={'emptyblue'} >Click Me!</Button></div>
            <div>Hover: <Button theme={'emptyblue'} hover={true} >Click Me!</Button></div>
            <div>Active: <Button theme={'emptyblue'} active={true} >Click Me!</Button></div>
            <div>Disabled: <Button theme={'emptyblue'} disabled={true} >Click Me!</Button></div>
            </div>

            <h4>Style = fullpurple</h4>
            <div style={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
            <div>Standard: <Button theme={'fullpurple'} >Click Me!</Button></div>
            <div>Hover: <Button theme={'fullpurple'} hover={true} >Click Me!</Button></div>
            <div>Active: <Button theme={'fullpurple'} active={true} >Click Me!</Button></div>
            <div>Disabled: <Button theme={'fullpurple'} disabled={true} >Click Me!</Button></div>
            </div>

            <h4>Style = emptypurple</h4>
            <div style={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
            <div>Standard: <Button theme={'emptypurple'} >Click Me!</Button></div>
            <div>Hover: <Button theme={'emptypurple'} hover={true} >Click Me!</Button></div>
            <div>Active: <Button theme={'emptypurple'} active={true} >Click Me!</Button></div>
            <div>Disabled: <Button theme={'emptypurple'} disabled={true} >Click Me!</Button></div>
            </div>

            <h4>Style = fullgreen</h4>
            <div style={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
            <div>Standard: <Button theme={'fullgreen'} >Click Me!</Button></div>
            <div>Hover: <Button theme={'fullgreen'} hover={true} >Click Me!</Button></div>
            <div>Active: <Button theme={'fullgreen'} active={true} >Click Me!</Button></div>
            <div>Disabled: <Button theme={'fullgreen'} disabled={true} >Click Me!</Button></div>
            </div>

            <h4>Style = emptygreen</h4>
            <div style={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
            <div>Standard: <Button theme={'emptygreen'} >Click Me!</Button></div>
            <div>Hover: <Button theme={'emptygreen'} hover={true} >Click Me!</Button></div>
            <div>Active: <Button theme={'emptygreen'} active={true} >Click Me!</Button></div>
            <div>Disabled: <Button theme={'emptygreen'} disabled={true} >Click Me!</Button></div>
            </div>

            <h4>Style = fullred</h4>
            <div style={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
            <div>Standard: <Button theme={'fullred'} >Click Me!</Button></div>
            <div>Hover: <Button theme={'fullred'} hover={true} >Click Me!</Button></div>
            <div>Active: <Button theme={'fullred'} active={true} >Click Me!</Button></div>
            <div>Disabled: <Button theme={'fullred'} disabled={true} >Click Me!</Button></div>
            </div>

            <h4>Style = emptyred</h4>
            <div style={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
            <div>Standard: <Button theme={'emptyred'} >Click Me!</Button></div>
            <div>Hover: <Button theme={'emptyred'} hover={true} >Click Me!</Button></div>
            <div>Active: <Button theme={'emptyred'} active={true} >Click Me!</Button></div>
            <div>Disabled: <Button theme={'emptyred'} disabled={true} >Click Me!</Button></div>
            </div>

            <h4>Heights</h4>
            <div style={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
            <div>small: <Button height={'small'}>Click Me!</Button></div>
            <div>medium: <Button height={'medium'}>Click Me!</Button></div>
            <div>large: <Button height={'large'}>Click Me!</Button></div>
            </div>
        </div>
    )
}
