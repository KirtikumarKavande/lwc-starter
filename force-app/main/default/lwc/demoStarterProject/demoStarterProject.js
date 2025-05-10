import { LightningElement, track } from 'lwc';

export default class DemoStarterProject extends LightningElement {
 constructor(){
    super()
    console.log("parent component constructor rendered")
 }
 isShow=true

 connectedCallback(){
    console.log("parent component connectedCallback rendered")

 }

 renderedCallback(){
    console.log("parent component renderedCallback rendered")

 }
errorCallback(err,stack){
    console.log("what is error",err.message)
    console.log("what is stack",stack)
}


 handleClick(){
    this.isShow=false
 }

}