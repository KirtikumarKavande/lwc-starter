import { LightningElement } from 'lwc';

export default class DemoStarterProject extends LightningElement {
    name="kirtikumar Kavande" 
    designation="Developer"
    handleChange(e){
        this.designation=e.target.value
    }
}