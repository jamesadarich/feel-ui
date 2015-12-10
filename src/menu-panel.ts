import { Component, NgClass, Input} from "angular2/angular2";
@Component({
    directives: [NgClass],
    selector: "feel-menu-panel",
    template: `<div [ng-class]=\"{ 'show': isOpen }\" >
                  <div class="title">
                    <h1>Menu</h1>
                  </div>
                  <div class="menu-options">
                    <div class="menu-item">One</div>
                    <div class="menu-item">One</div>
                    <div class="menu-item">One</div>
                  </div>
               </div>`
})
export class MenuPanel {

   @Input() isOpen: boolean;

   constructor() {
   }
 }
