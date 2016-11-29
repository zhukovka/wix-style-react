import React from 'react';
import {shallow} from 'enzyme';
import Checkbox from './Checkbox';

export default class CheckboxDriver {

  given = {
    checked: checked => {
      this.checked = checked;
      return this;
    },
    onChange: fn => {
      this.onChange = fn;
      return this;
    }
  };

  when = {
    created: () => {
      this.wrapper = shallow(
        <Checkbox id="my-cb" checked={this.checked} onChange={this.onChange}/>
      );
      return this;
    },
    changed: () => {
      this.wrapper.find('#my-cb').simulate('change');
      return this;
    }
  };

  get = {
    element: () => this.wrapper
  }

  constructor() {
    this.props = {};
  }
}
