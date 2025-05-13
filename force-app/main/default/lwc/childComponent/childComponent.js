import { LightningElement, api } from 'lwc';
export default class ChildComponent extends LightningElement {
    handleSlotChange(){
        let footer=this.template.querySelector('.floating-footer')
        footer.classList.remove('slds-hide')
    }
}