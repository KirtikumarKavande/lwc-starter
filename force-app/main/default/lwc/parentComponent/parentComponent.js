import { LightningElement } from 'lwc';

export default class ParentComponent extends LightningElement {
    isShowModal = false
    msg=""
    openModal() {
        this.isShowModal = true
    }
    handleClose(e) {
        this.isShowModal = false
        this.msg=e.detail
    }
}