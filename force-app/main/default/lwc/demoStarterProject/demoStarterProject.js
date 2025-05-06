import { LightningElement, track } from 'lwc';

export default class DemoStarterProject extends LightningElement {
    
    isShow=false
    typeInsideInput(e){
        this.isShow=e.target.value.length
        // we know 0 is false value
    }
}