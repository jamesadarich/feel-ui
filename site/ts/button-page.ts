import {bootstrap, Component, NgClass} from "angular2/angular2";
import { ButtonComponent } from "../src/button.ts";
@Component({
    directives: [ ButtonComponent ],
    selector: "my-app",
    template: `<h1>Buttons</h1>
               <feel-button></feel-button>
               <feel-button></feel-button>`
})
class ButtonPage {
}
bootstrap(ButtonPage);
