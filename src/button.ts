import { Component, NgClass, Input} from "angular2/angular2";
@Component({
    directives: [NgClass],
    selector: "feel-button",
    template: "<button type='button' [ng-class]=\"{ 'btn-flat': flat }\" >{{text}}</button>"
})
export class ButtonComponent {

   @Input() flat: boolean;
   @Input() text: string;

   constructor() {
   }
 }
