export default class ButtonDriver {

    constructor({id, find}) {
        this.id = id;
        this.find = find;
    }

    click() {
        this.find('#'+this.id).click();
    }
}
