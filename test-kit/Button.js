export default class ButtonDriver {

    constructor({id, find}) {
        this.id = id;
        this.find = find;
    }

    click() {
        const element = this.find('#'+this.id);
        element.simulate ? element.simulate('click') : element.click();
    }
}
