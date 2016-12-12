import React, {Component, PropTypes} from 'react';
import {storiesOf} from '@kadira/storybook';
import Markdown from './utils/Components/Markdown';
import Slider from '../src/Slider';
import SliderReadme from '../src/Slider/README.md';

class SliderWrapper extends Component {
  static propTypes = {
    value: PropTypes.arrayOf(PropTypes.number)
  };

  constructor({value}) {
    super();
    this.state = {value};
  }

  render() {
    const onChange = value => this.setState({value});

    return (
      <Slider {...this.props} value={this.state.value} onChange={onChange}/>
    );
  }
}

storiesOf('Input', module)
  .add('Slider', () => (
    <div>
      <Markdown source={SliderReadme}/>

      <h1>Examples</h1>

      <div>
        <h3>Slider</h3>
        <SliderWrapper value={[3]} min={1} max={10}/>
      </div>

      <div>
        <h3>Multiple handles</h3>
        <SliderWrapper value={[3, 4, 5]} min={1} max={10}/>
      </div>
    </div>
  ));
