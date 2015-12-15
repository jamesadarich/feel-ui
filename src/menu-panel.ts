import { Component, NgClass, Input} from "angular2/angular2";
import { ButtonComponent } from "../src/feel.ts";
@Component({
    directives: [NgClass, ButtonComponent],
    selector: "feel-menu-panel",
    template: `<div [ng-class]=\"{ 'show': open }\" >
                  <div class="menu-title">
                    <h1>Menu</h1>
                    <feel-button [text]="'X'" (click)=closeMenuPanel()></feel-button>
                  </div>
                  <div class="menu-options">
                    <div class="menu-item">One</div>
                    <div class="menu-item">One</div>
                    <div class="menu-item">One</div>
                  </div>
               </div>`
})
export class MenuPanel {

   @Input() open: boolean;

   constructor() {
   }

   public closeMenuPanel() {
     this.open = false;
   }
 }
