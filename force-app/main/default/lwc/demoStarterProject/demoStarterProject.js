import { LightningElement, track } from 'lwc';

export default class DemoStarterProject extends LightningElement {

    array = ["World", "Paradise", "Kirtikumar",]

    num1 = 10
    num2 = 20

    get total() {
        return this.num1 * this.num2
    }

    get firstElementInArray() {
        return this.array[0]
    }

}