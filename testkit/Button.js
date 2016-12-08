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
