import { LightningElement } from 'lwc';

import MOMENT from "@salesforce/resourceUrl/moment"
import { loadScript } from "lightning/platformResourceLoader"
export default class ParentComponent extends LightningElement {
    currentDate
    isLoaded = false
    renderedCallback() {
        if (this.isLoaded) return
        loadScript(this, MOMENT + '/moment.min.js').then(() => {
            this.dateFormatter()
        }).catch(() => {
            console.log("error occurred")
        })
        this.isLoaded = true
    }
    dateFormatter() {
        this.currentDate = moment().format('LLLL')
    }
}
