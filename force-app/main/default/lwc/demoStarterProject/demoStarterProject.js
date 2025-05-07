import { LightningElement, track } from 'lwc';

export default class DemoStarterProject extends LightningElement {
    percentage = 10
    handleInputChange(e) {
        this.percentage = e.target.value
    }
    get boxStyle() {
        return `width:${this.percentage}%`

    }
}