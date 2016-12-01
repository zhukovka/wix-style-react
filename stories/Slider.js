import React from 'react';
import {Slider} from '../src/index.js';

class SelectStory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 2
    }
  }

  render() {
    return (
      <div style={{width: '900px'}}>
        <h2>Slider <small style={{fontSize: '11px'}}><a target='_blank' href='https://github.com/wix/wix-style-react/blob/master/stories/Slider.js'>source</a></small></h2>
        <p>A slider component with multi-range support</p>

        <Slider
          onChange={value => this.setState({value})}
          value={[this.state.value]}
          min={1}
          max={10}
          />

        <br/>
        <br/>
        <br/>

        <h3>Attributes</h3>
        <table className={'attributes'}>
          <tbody>
            <tr>
              <th>Attribute name</th>
              <th>Type</th>
              <th>Description</th>
            </tr>
            <tr>
              <td>value</td>
              <td>Array of numbers</td>
              <td>{`The slider's selected range`}</td>
            </tr>
            <tr>
              <td>min</td>
              <td>Number</td>
              <td>{`The absolute minimum of the slider's range`}</td>
            </tr>
            <tr>
              <td>max</td>
              <td>Number</td>
              <td>{`The absolute maximum of the slider's range`}</td>
            </tr>
            <tr>
              <td>step</td>
              <td>Number</td>
              <td>{`The slider's step`}</td>
            </tr>
            <tr>
              <td>onChange</td>
              <td>Function: [...values] => void</td>
              <td>Called upon every value change</td>
            </tr>
            <tr>
              <td>onAfterChange</td>
              <td>Function: [...values] => void</td>
              <td>Called after every value change</td>
            </tr>
            <tr>
              <td>allowCross</td>
              <td>Boolean</td>
              <td>{`Allows the slider's handles to cross. True by default.`}</td>
            </tr>
          </tbody>
        </table>

        <h3>Usage Examples</h3>

        <br/>

        <h4>Single handle (value=[3])</h4>
        <Slider value={[3]} min={1} max={10}/>

        <br/>
        <br/>
        <br/>

        <h4>Multi handles (value=[3, 4, 5])</h4>
        <Slider value={[3, 4, 5]} min={1} max={10}/>
      </div>
    );
  }
}

export default SelectStory;
