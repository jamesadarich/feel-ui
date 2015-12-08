import {bootstrap, Component, NgClass} from "angular2/angular2";
@Component({
    directives: [NgClass],
    selector: "feel-button",
    template: "<button type='button' [ng-class]=\"{ 'btn-flat': isFlat }\" (click)=onClick()>{{text}}</button>"
})
export class ButtonComponent {

   isFlat: boolean;

   constructor() {
      this.isFlat = true;
   }

  text: string = "test2s";

  onClick() {
    console.log("clicked");
  }
 }
bootstrap(ButtonComponent);
