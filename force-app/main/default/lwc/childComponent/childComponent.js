import { LightningElement, api } from 'lwc';
export default class ChildComponent extends LightningElement {
    @api isShowModal
    renderedCallback() {
        console.log(this.isShowModal)
    }
    closeModal() {
        let myEvent = new CustomEvent('close', { detail: "hello from child element modal has been closed" })
        this.dispatchEvent(myEvent)
    }
}