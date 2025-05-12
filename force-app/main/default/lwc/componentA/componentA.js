import { LightningElement } from 'lwc';
import pubSub from 'c/pubSub';

export default class ComponentA extends LightningElement {
    msg = ""
    connectedCallback() {
        pubSub.subscribe('ComponentB', (data) => {
            console.log("here", this)
            this.msg = data
        })
    }
}