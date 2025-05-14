import { LightningElement, wire } from 'lwc';
import SAMPLEMC from "@salesforce/messageChannel/DemoMessageChannel__c";
import { MessageContext,publish } from 'lightning/messageService';
export default class ParentComponent extends LightningElement {
   @wire(MessageContext)
   context;

   inputValue
   handleInput(e){
    this.inputValue=e.target.value
   }

   publishMessage(){
    const message={
        lmsData:{
            value:this.inputValue
        }
    }
    publish(this.context,SAMPLEMC,message)
   }
}