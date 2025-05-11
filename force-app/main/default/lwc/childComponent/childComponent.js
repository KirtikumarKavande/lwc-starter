import { LightningElement,api } from 'lwc';
export default class ChildComponent extends LightningElement {
    @api name
    @api myAge
    @api arr
    connectedCallback(){
        console.log(this.name)
        console.log(this.myAge)
    }
}