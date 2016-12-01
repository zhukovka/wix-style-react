import React from 'react';
import {mount} from 'enzyme';
import Slider from './Slider';

export default class SliderDriver {

  given = {
    sliderData: data => {
      this.props = data;
      return this;
    },
    onChange: fn => {
      this.onChange = fn;
      return this;
    }
  };

  when = {
    created: () => {
      this.wrapper = mount(
        <Slider onChange={value => this.setState({value})} {...this.props}/>
      );
      return this;
    },
    hoverHandle: ({handleIndex}) => {
      this.get.element().find('.slider-handle').at(handleIndex).simulate('mouseEnter');
      return this;
    },
    unHoverHandle: ({handleIndex}) => {
      this.get.element().find('.slider-handle').at(handleIndex).simulate('mouseLeave');
      return this;
    }
  };

  get = {
    element: () => this.wrapper,
    sliderMarks: () => this.wrapper.find('.mark'),
    sliderHandles: () => this.wrapper.find('.slider-handle'),
    toolTipValue: () => this.wrapper.find('.slider-tooltip').text()
  }

  constructor() {
    this.props = {};
  }
}
