import React from 'react';
import {mount} from 'enzyme';

import Tooltip from './Tooltip';

export default class TooltipDriver {

  _props = {};
  _component = null;

  given = {
    props: props => {
      this._props = {...props};
    }
  };

  when = {
    created: children => {
      this._component = mount(<Tooltip {...this._props}>{children}</Tooltip>);
    },
    mouseEntered: () => {
      this._component.find(Tooltip).simulate('mouseenter');
    },
    mouseLeft: () => {
      this._component.find(Tooltip).simulate('mouseleave');
    }
  };

  get = {
    isShown: () => this._component.instance().isShown(),
    willBeShown: () => this._component.instance().willBeShown(),
    willBeHidden: () => this._component.instance().willBeHidden()
  }
}
