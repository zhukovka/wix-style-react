export default class CheckboxDriver {

  constructor({id, find}) {
    this.id = id;
    this.find = find;
  }

  change() {
    const element = this.find(`#${this.id}`);
    element.simulate ? element.simulate('change') : element.click();
  }

  get() {
    return this.find(`#${this.id}`);
  }
}
