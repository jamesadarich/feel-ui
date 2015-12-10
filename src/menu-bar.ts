import { Component, Input} from "angular2/angular2";
import { ButtonComponent } from "./button.ts";
import { MenuPanel } from "./menu-panel.ts";
@Component({
    directives: [ ButtonComponent, MenuPanel ],
    selector: "feel-menu-bar",
    template: `<feel-button [text]="'M'" (click)=toggleMenuPanel()></feel-button>
               <h1 class="title">{{title}}</h1>
               <feel-menu-panel [isOpen]="isMenuOpen"></feel-menu-panel>`
})
export class MenuBar {

   @Input() title: string;
   public isMenuOpen: boolean;

   public constructor() {
     this.isMenuOpen = false;
   }

   public toggleMenuPanel():void {
     console.log(this);
     this.isMenuOpen = !this.isMenuOpen
   }
 }
