import React from 'react';
import {mount, shallow} from 'enzyme';
import Select from './Select';

export default class SelectDriver {

  given = {
    options: options => {
      this.props.options = options;
      return this;
    },
    selectedOption: value => {
      this.props.value = value;
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
        <Select {...this.props} onChange={this.onChange}/>);
      return this;
    },
    createdWithMount: () => {
      this.wrapper = mount(
        <Select {...this.props} onChange={this.onChange}/>);
      return this;
    },
    openSelect: () => {
      this.wrapper.find('.wix-select-button').simulate('click');
      return this;
    },
    clickOptionAt: value => {
      this.wrapper.find('.option').at(value).simulate('click');
      return this;
    },
    mouseEnterOptionAt: value => {
      this.wrapper.find('.option').at(value).simulate('mouseEnter');
      return this;
    },
    mouseLeaveOptionAt: value => {
      this.wrapper.find('.option').at(value).simulate('mouseLeave');
      return this;
    },
    pressEscape: () => {
      this.simulateKeyDown(27);
      return this;
    },
    pressEnter: () => {
      this.simulateKeyDown(13);
      return this;
    },
    pressDownArrow: () => {
      this.simulateKeyDown(40);
      return this;
    },
    pressUpArrow: () => {
      this.simulateKeyDown(38);
      return this;
    }
  };

  get = {
    element: () => this.wrapper,
    renderedOptions: () => this.wrapper.find('.option'),
    content: () => this.wrapper.find('.shown'),
    selectedContentText: () => this.wrapper.find('.buttonText').text(),
    isSelectOpened: () => this.get.content().length > 0
  }

  constructor() {
    this.props = {};
  }

  simulateKeyDown(value) {
    const e = $.Event('keydown', {keyCode: value}); // eslint-disable-line new-cap
    $(document).trigger(e);
  }
}
