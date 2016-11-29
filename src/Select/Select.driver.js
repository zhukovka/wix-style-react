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
        <Select {...this.props} onChange={this.onChange}></Select>);
      return this;
    },
    createdMount: () => {
      this.wrapper = mount(
        <Select {...this.props} onChange={this.onChange}></Select>);
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
      var esc = $.Event("keydown", { keyCode: 27 });
      $(document).trigger(esc);
      return this;
    },
    pressEnter: () => {
      var esc = $.Event("keydown", { keyCode: 13 });
      $(document).trigger(esc);
      return this;
    },
  };

  get = {
    element: () => this.wrapper,
    renderedOptions: () => this.wrapper.find('.option'),
    content: () => this.wrapper.find('.shown'),
    selectedContentText: () => this.wrapper.find('.buttonText').text()
  }

  constructor() {
    this.props = {};
  }
}
