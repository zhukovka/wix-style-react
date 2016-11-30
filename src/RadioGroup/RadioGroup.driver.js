import React from 'react';
import {mount} from 'enzyme';
import RadioGroup from './RadioGroup';

export default class RadioGroupDriver {
  constructor() {
    this.props = {};
  }

  given = {
    onChange: value => {
      this.props.onChange = value;
      return this;
    },
    value: value => {
      this.props.value = value;
      return this;
    },
    options: value => {
      this.options = value;
      return this;
    },
  };

  when = {
    created: () => {
      this.wrapper = mount(
        <RadioGroup {...this.props}>
          {this.options.map((props, index) => <RadioGroup.Radio key={index} {...props}/>)}
        </RadioGroup>
      );
      return this;
    },
    element: index => ({
      isChanged: () => {
        this.wrapper.childAt(index).find('input').simulate('change');
        return this;
      }
    }),
    updated: () => {
      this.wrapper.update();
      return this;
    }
  };

  get = {
    element: () => this.wrapper,
    radioAt: index => this.wrapper.childAt(index).find('input'),
    labelAt: index => this.wrapper.childAt(index).find('label'),
    allRadios: () => this.wrapper.children().find('input')
  }
}
