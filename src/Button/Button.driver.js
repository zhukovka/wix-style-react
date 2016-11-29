import React from 'react';
import {shallow} from 'enzyme';
import Button from './Button';

export default class ButtonDriver {

  given = {
    onClick: fn => {
      this.onClick = fn;
      return this;
    },
    children: children => {
      this.children = children;
      return this;
    },
    disabled: disabled => {
      this.props.disabled = disabled;
      return this;
    },
    height: height => {
      this.props.height = height;
      return this;
    },
    style: style => {
      this.props.style = style;
      return this;
    },
    hover: () => {
      this.props.hover = true;
      return this;
    },
    id: id => {
      this.id = id;
      return this;
    }
  };

  when = {
    created: () => {
      this.wrapper = shallow(
        <Button id={this.id} onClick={this.onClick} {...this.props}>{this.children}</Button>
      );
      return this;
    },
    clicked: () => {
      this.wrapper.simulate('click');
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
