import { LightningElement } from 'lwc';

export default class AnotehrDemoStarterProject extends LightningElement {
    constructor(){
        super()
        console.log("Child component constructor rendered")
     }
    
     connectedCallback(){
        throw new Error("hey!! rendering of child component failed")
        console.log("Child component connectedCallback rendered")
    
     }
    
     renderedCallback(){
        console.log("Child component renderedCallback rendered")
    
     }
     disconnectedCallback(){
        console.log("disconnected callback from child")
     }
}