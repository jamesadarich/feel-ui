import { Component, Input} from "angular2/core";
import { NgClass } from "angular2/common";
@Component({
    directives: [NgClass],
    selector: "feel-input",
    template: `<label>{{label}}</label>
               <input type="text" value="{{value}}" />`
})
export class InputComponent {

   @Input() label: string;
   @Input() value: string;

   constructor() {
   }
 }
