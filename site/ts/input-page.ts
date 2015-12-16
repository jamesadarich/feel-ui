import { Component, NgClass } from "angular2/angular2";
import { ButtonComponent } from "../src/feel.ts";
@Component({
    directives: [ ButtonComponent ],
    selector: "button-page",
    template: `<h1>Buttons</h1>
               <feel-button [flat]="false" [text]="'something'"></feel-button>
               <feel-button [flat]="true" [text]="'different'" (click)=onClick()></feel-button>`
})
export class InputPage {

   onClick() {
     console.log("clicked");
   }
}
