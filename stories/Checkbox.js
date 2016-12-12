import React, {Component, PropTypes} from 'react';
import {storiesOf} from '@kadira/storybook';
import Markdown from './utils/Components/Markdown';
import Checkbox from '../src/Checkbox';
import CheckboxReadme from '../src/Checkbox/README.md';

class CheckboxWrapper extends Component {
  static propTypes = {
    checked: PropTypes.bool
  };

  constructor(props) {
    super();
    this.state = {checked: !!props.checked};
  }

  render() {
    const onChange = () => this.setState({checked: !this.state.checked});

    return (
      <Checkbox {...this.props} checked={this.state.checked} onChange={onChange}/>
    );
  }
}

storiesOf('Input', module)
  .add('Checkbox', () => (
    <div>
      <Markdown source={CheckboxReadme}/>

      <h1>Examples</h1>

      <div>
        <h3>Checkbox</h3>
        <CheckboxWrapper/>
      </div>

      <div>
        <h3>Checked</h3>
        <CheckboxWrapper checked/>
      </div>

      <div>
        <h3>Disabled</h3>
        <CheckboxWrapper disabled/>
      </div>
    </div>
  ));
