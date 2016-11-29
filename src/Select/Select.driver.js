import {shallow} from 'enzyme';
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
    openSelect: () => {
      this.wrapper.find('.wix-select-button').simulate('click');
      return this;
    },
    clickOption: value => {
      this.wrapper.find('.option').at(value).simulate('click');
      return this;
    }
  };

  get = {
    element: () => this.wrapper,
    renderedOptions: () => this.wrapper.find('.option'),
    content: () => this.wrapper.find('.shown'),
    selectedContent: () => this.wrapper.find('.buttonText')
  }

  constructor() {
    this.props = {};
  }
}
