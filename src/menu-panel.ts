import { Component, Input, EventEmitter } from "angular2/core";
import { NgClass } from "angular2/common";
import { ButtonComponent } from "../src/feel";
import {ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy} from 'angular2/router';
import {ROUTER_DIRECTIVES, RouteConfig, Router, Location, Route} from 'angular2/router';
@Component({
    directives: [NgClass, ButtonComponent],
    selector: "feel-menu-panel",
    events: ['close'],
    template: `<div [ngClass]=\"{ 'show': open }\" >
                  <div class="menu-title">
                    <h1>Menu</h1>
                    <feel-button [text]="'X'" (click)=closeMenuPanel()></feel-button>
                  </div>
                  <div class="menu-options">
                    <a href='#/'><div class="menu-item">Home</div></a>
                    <a href='#/button'><div class="menu-item">Button</div></a>
                    <a href='#/input'><div class="menu-item">Input</div></a>
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
