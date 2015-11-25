import {bootstrap, Component, NgClass} from "angular2/angular2";
@Component({
    directives: [NgClass],
    selector: "my-app",
    template: "<button type='button' [ng-class]=\"{ 'btn-flat': isFlat }\" (click)=onClick()>{{text}}</button>"
})
class AppComponent {

   isFlat: boolean;

   constructor() {
      this.isFlat = true;
   }

  text = "test2s";

  onClick() {
    console.log("clicked");
  }
 }
bootstrap(AppComponent);
