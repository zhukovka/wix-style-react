export default class ButtonDriver {

    constructor(id) {
        this.id = id;
    }

    click() {
        document.getElementById(this.id).click();
    }
}
