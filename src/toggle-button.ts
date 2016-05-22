import { Component, Input, Output, HostListener, EventEmitter } from "angular2/core";
import { NgClass } from "angular2/common";

@Component({
    directives: [ NgClass ],
    selector: "feel-toggle-button",
    template: `<button type="button" [ngClass]=\"{ 'selected': selected }\" >{{text}}</button>`
})
export class ToggleButtonComponent {

   @Input() selected: boolean;
   @Input() text: string;

   @Output()
   select: EventEmitter<any> = new EventEmitter();

   @HostListener("click")
   private _onClick() {
     this.selected = !this.selected;

     if (this.selected) {
       this.select.emit({ toggleButton: this });
     }
   }

   public deselect() {
     this.selected = false;
   }
 }
