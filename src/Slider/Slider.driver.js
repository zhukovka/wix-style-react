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
    isDotSelected: index => this.get.sliderDots().at(index - 1).hasClass('rc-slider-dot-active'),
    sliderDots: () => this.get.element().find('.rc-slider-dot'),
    sliderHandles: () => this.get.element().find('.slider-handle'),
    toolTipValue: () => this.get.element().find('.slider-tooltip').text()
  }

  constructor() {
    this.props = {};
  }
}
