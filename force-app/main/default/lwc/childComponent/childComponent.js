import { LightningElement, api, wire } from 'lwc';
import SAMPLEMC from "@salesforce/messageChannel/DemoMessageChannel__c";
import { APPLICATION_SCOPE, MessageContext,subscribe } from 'lightning/messageService';

export default class ChildComponent extends LightningElement {
@wire(MessageContext)
context


connectedCallback(){
    this.subscribeMessage()
}

subscribeMessage() {
	subscribe(
		this.context,
		SAMPLEMC,
		(message) => this.handleMessage(message),
		{ scope: APPLICATION_SCOPE }
	);
}

handleMessage(message) {
	console.log(message.lmsData.value)
}

}