import {shallow} from 'enzyme';
import ToggleSwitch from './ToggleSwitch';

export default class ToggleSwitchDriver {
  constructor() {
    this.props = {};
  }

  given = {
    checked: value => {
      this.props.checked = value;
      return this;
    },
    onChange: value => {
      this.props.onChange = value;
      return this;
    }
  };

  when = {
    created: () => {
      this.wrapper = shallow(
        <ToggleSwitch {...this.props} />
      );
      return this;
    },
    changed: () => {
      this.wrapper.find('input').simulate('change');
      return this;
    }
  };

  get = {
    element: () => this.wrapper,
    checked: () => this.wrapper.find('input').props().checked
  }
}
