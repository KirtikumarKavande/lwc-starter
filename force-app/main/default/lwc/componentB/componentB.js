import { LightningElement } from 'lwc';
import pubSub from 'c/pubSub';

export default class ComponentB extends LightningElement {
    inputext=""
    publishEvent(){
        pubSub.publish('ComponentB',this.inputext)
    }

    handleInput(e){
        this.inputext=e.target.value
    }
}