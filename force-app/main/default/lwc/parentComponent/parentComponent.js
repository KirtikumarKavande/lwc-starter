import { LightningElement } from 'lwc';

import ANIMATE from "@salesforce/resourceUrl/animate"
import { loadStyle } from "lightning/platformResourceLoader"
export default class ParentComponent extends LightningElement {
    currentDate
    isLoaded = false
    renderedCallback() {
        if (this.isLoaded) return
        loadStyle(this, ANIMATE ).then(() => {
            console.log("animate loaded successfully")
            this.isLoaded=true
        }).catch(() => {
            console.log("error occurred")
        })
    }
}
