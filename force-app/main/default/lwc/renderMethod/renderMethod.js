import { LightningElement } from 'lwc';
import renderMethod from './renderMethod.html'
import signinTemplate from './signinTemplate.html'
import signupTemplate from './signupTemplate.html'

export default class RenderMethod extends LightningElement {

    currentPageShow = ""
    render() {
        if (this.currentPageShow === "signup") {
            return signupTemplate
        } else if (this.currentPageShow === "signin") {
            return signinTemplate
        } else {
            return renderMethod
        }
    }
    handleClick(e) {
        this.currentPageShow = e.target.name
    }
}