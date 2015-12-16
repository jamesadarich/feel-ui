import { Component, NgClass, Input, EventEmitter } from "angular2/angular2";
import { ButtonComponent } from "../src/feel.ts";
@Component({
    directives: [NgClass, ButtonComponent],
    selector: "feel-menu-panel",
    events: ['close'],
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
   close = new EventEmitter();

   constructor() {
   }

   public closeMenuPanel() {
     this.open = false;
     this.close.next();
   }
 }
