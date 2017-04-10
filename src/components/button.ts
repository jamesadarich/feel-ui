import { Component, Input} from "@angular/core";

@Component({
    selector: "feel-button",
    template: `<button [type]=type [ngClass]=\"{ 'btn-flat': flat, 'btn-raised': !flat, 'btn-primary': primary }\" >{{text}}</button>`
})
export class ButtonComponent {

   @Input() type: string = "button";
   @Input() primary: boolean;
   @Input() flat: boolean;
   @Input() text: string;
 }
