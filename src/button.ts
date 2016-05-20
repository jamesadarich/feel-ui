import { Component, Input} from "angular2/core";
import { NgClass } from "angular2/common";

@Component({
    directives: [NgClass],
    selector: "feel-button",
    template: "<button type='button' [ngClass]=\"{ 'btn-flat': flat, 'btn-primary': primary }\" >{{text}}</button>"
})
export class ButtonComponent {

   @Input() primary: boolean;
   @Input() flat: boolean;
   @Input() text: string;
 }
