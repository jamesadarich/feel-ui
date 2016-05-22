import { Component, Input, HostListener } from "angular2/core";
import { NgClass } from "angular2/common";

@Component({
    directives: [ NgClass ],
    selector: "feel-toggle-button",
    template: `<button type="button" [ngClass]=\"{ 'selected': selected }\" >{{text}}</button>`
})
export class ToggleButtonComponent {

   @Input() selected: boolean;
   @Input() text: string;

   @HostListener("click")
   private _onClick() {
     this.selected = !this.selected;
   }
 }
