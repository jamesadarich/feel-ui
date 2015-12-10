import {bootstrap, Component, NgClass} from "angular2/angular2";
import { ButtonComponent } from "../src/button.ts";
@Component({
    directives: [ ButtonComponent ],
    selector: "my-app",
    template: `<h1>Buttons</h1>
               <feel-button [flat]="false" [text]="'raised'"></feel-button>
               <feel-button [flat]="true" [text]="'flat'" (click)=onClick()></feel-button>`
})
class ButtonPage {

onClick() {
  console.log("clicked");
}
}
bootstrap(ButtonPage);
