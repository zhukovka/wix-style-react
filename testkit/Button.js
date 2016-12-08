import {buttonDriverFactory} from '../src/Button/Button.driver';
export default class ButtonDriver {

  constructor({id, find}) {
    this.id = id;
    this.find = find;
    this._element = find(`#${id}`);
  }

  get element() {
    return this._element;
  }

  click() {
    this.element.simulate ? this.element.simulate('click') : this.element.click();
  }

  hover() {
    if (this.element.simulate) {
      this.element.simulate('mouseenter');
    }
  }
}

const buttonTestkitFactory = ({wrapper, id}) => {
  //TODO: add support for other wrapper types by checking wrapper type here
  // Handle Enzyme wrapper:
  const button = wrapper.find(`#${id}`);
  return buttonDriverFactory(button);
};

export {buttonTestkitFactory};
