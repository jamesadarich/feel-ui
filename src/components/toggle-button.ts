import { Component, Input, Output, HostListener, EventEmitter } from "@angular/core";

@Component({
    selector: "feel-toggle-button",
    template: `<button type="button" [ngClass]=\"{ 'selected': selected }\" >{{text}}</button>`
})
export class ToggleButtonComponent {

   @Input() selected: boolean;
   @Input() text: string;

   @Output("select")
   selectEvent: EventEmitter<any> = new EventEmitter();

   @Output("deselect")
   deselectEvent: EventEmitter<any> = new EventEmitter();

   @HostListener("click")
   private _onClick() {
     this.selected = !this.selected;

     if (this.selected) {
       this.selectEvent.emit({ toggleButton: this });
     }
     else {
        this.deselectEvent.emit({ toggleButton: this });
     }
   }

   public deselect() {
     this.selected = false;
   }
 }
