import React, {Component, Children} from 'react';
import TextFieldExample from './TextFieldTemplate';
import Input from '../../src/Input';

class ExampleStandard extends Component {
  constructor() {
    super();
    this.state = {
      withLabel: true,
      prefixSuffixValue: '',
      label: {
        appearance: 'T1.1',
      },
      input: {
        size: 'normal',
        placeholder: 'Input placeholder'
      }
    };
  }

  setComponentState(componentName, obj) {
    this.setState(prevState => {
      prevState[componentName] = {...this.state[componentName], ...obj};
      Object.keys(prevState[componentName])
        .forEach((k) => !prevState[componentName][k] && delete prevState[componentName][k]);
      return prevState;
    });
  }

  handlePrefixSuffixContent(position, content) {
    content = [].concat(content);
    const negativePosition = (position === 'suffix') ? 'prefix' : 'suffix';

    this.setComponentState('input', {
      [position]: content.length > 1 ? content : ((content.length === 1) ? content[0] : null ),
      [negativePosition]: null
    });
  }

  render() {
    return (
      <from className="interactive-playground">
        <fieldset className="playground-controls">
          <legend><h2>TextField combinations</h2></legend>
          <ul>
            <li><input type="checkbox"
                       id="with-label"
                       onChange={() => this.setState({withLabel: !this.state.withLabel})}
                       checked={this.state.withLabel}/> <label htmlFor="with-label">with Label</label>
            </li>
            <li>
              <label htmlFor="input-size">Size: </label>
              <select id="input-size"
                      onChange={(e) => this.setComponentState('input', {size: e.target.value})}>
                <option value="normal">Normal</option>
                <option value="large">Large</option>
                <option value="small">Small</option>
              </select>
            </li>
            <li>
              <label htmlFor="input-type">Type: </label>
              <select id="input-type"
                      onChange={(e) => this.setComponentState('input', {type: e.target.value})}>
                <option value="">Normal</option>
                <option value="number">Number</option>
              </select>
            </li>
            <li>
              <label>
                None
                <input type="radio" value="" name="prefixSuffixValue"
                       onChange={(e) => this.handlePrefixSuffixContent('prefix', null)}/>
              </label>
              <label>
                Prefix
                <input type="radio" value="$" name="prefixSuffixValue"
                       onChange={(e) => this.handlePrefixSuffixContent('prefix', <Input.Unit>{e.target.value}</Input.Unit>)}/>
              </label>
              <label>
                Suffix
                <input type="radio" value="Kg." name="prefixSuffixValue"
                       onChange={(e) => this.handlePrefixSuffixContent('suffix', <Input.Unit>{e.target.value}</Input.Unit>)}/>
              </label>
              <label>
                Suffix with Ticker
                <input type="radio" value="Kg." name="prefixSuffixValue"
                       onChange={(e) => this.handlePrefixSuffixContent('suffix', [<Input.Unit key="1">{e.target.value}</Input.Unit>,<Input.Ticker key="2"/>])}/>
              </label>
            </li>
          </ul>

        </fieldset>
        <div>
          <TextFieldExample {...this.state} onChange={this.props.onChange}/>
        </div>
      </from>
    );
  }
}

export default (props) =>
  <ExampleStandard {...props}/>
;