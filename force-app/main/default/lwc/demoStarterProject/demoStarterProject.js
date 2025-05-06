import { LightningElement, track } from 'lwc';

export default class DemoStarterProject extends LightningElement {
    name = "kirtikumar Kavande"
    designation = "Developer"
    handleChange(e) {
        this.designation = e.target.value
    }
    address = {
        street: "123, ABC",
        city: "PQR",
        state: "XYZ",
        zip: "111"
    }
    changeCity(e) {
        this.address = { ...this.address, city: e.target.value }
    }
}