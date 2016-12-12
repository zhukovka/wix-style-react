import React, {Component, PropTypes} from 'react';
import {storiesOf} from '@kadira/storybook';
import Markdown from './utils/Components/Markdown';
import RadioGroup from '../src/RadioGroup';
import RadioGroupReadme from '../src/RadioGroup/README.md';

class RadioGroupWrapper extends Component {
  static propTypes = {
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    children: PropTypes.any
  };

  constructor({value}) {
    super();
    this.state = {value};
  }

  render() {
    const onChange = value => this.setState({value});

    return (
      <RadioGroup {...this.props} value={this.state.value} onChange={onChange}>
        {this.props.children}
      </RadioGroup>
    );
  }
}

storiesOf('Input', module)
  .add('RadioGroup', () => (
    <div>
      <Markdown source={RadioGroupReadme}/>

      <h1>Examples</h1>

      <div>
        <h3>RadioGroup</h3>
        <RadioGroupWrapper value={2}>
          <RadioGroup.Radio value={1}>Option 1</RadioGroup.Radio>
          <RadioGroup.Radio value={2}>Option 2</RadioGroup.Radio>
          <RadioGroup.Radio value={3}>Option 3</RadioGroup.Radio>
          <RadioGroup.Radio value={4}>Option 4</RadioGroup.Radio>
        </RadioGroupWrapper>
      </div>

      <div>
        <h3>vAlign Center</h3>
        <RadioGroupWrapper value={3}>
          <RadioGroup.Radio value={1} vAlign="center">Option 1</RadioGroup.Radio>
          <RadioGroup.Radio value={2} vAlign="center">Option 2</RadioGroup.Radio>
          <RadioGroup.Radio value={3} vAlign="center">Option 3</RadioGroup.Radio>
          <RadioGroup.Radio value={4} vAlign="center">Option 4</RadioGroup.Radio>
        </RadioGroupWrapper>
      </div>
    </div>
  ));
