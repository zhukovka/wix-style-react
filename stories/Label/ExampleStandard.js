import React, {Component} from 'react';
import Label from 'wix-style-react/Label';

class ExampleStandard extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Label id="label" for="input-id" appearance={'T1_1'}>Label text</Label>
        <input id="input-id" type="text" />
      </div>
    );
  }
}

export default () =>
  <ExampleStandard/>;

