import { Component, NgClass } from "angular2/angular2";
import { ButtonComponent } from "../src/feel.ts";
@Component({
    directives: [ ButtonComponent ],
    selector: "button-page",
    template: `<h1>Buttons</h1>
               <feel-button [flat]="false" [text]="'raised'"></feel-button>
               <feel-button [flat]="true" [text]="'flat'" (click)=onClick()></feel-button>`
})
export class ButtonPage {

   onClick() {
     console.log("clicked");
   }
}
