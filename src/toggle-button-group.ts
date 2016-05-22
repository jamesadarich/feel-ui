import { Component, Input, ViewChildren, QueryList } from "angular2/core";
import { NgFor } from "angular2/common";
import { ToggleButtonComponent } from "./toggle-button";

@Component({
    directives: [ NgFor, ToggleButtonComponent ],
    selector: "feel-toggle-button-group",
    template: `<feel-toggle-button *ngFor="#item of items" [text]="textPropertySomething(item)" (select)="_onChildSelect($event)"></feel-toggle-button>`
})
export class ToggleButtonGroupComponent {

   @ViewChildren(ToggleButtonComponent)
   buttons: QueryList<ToggleButtonComponent>;

   @Input()
   items: Array<any> = [];

   @Input()
   textProperty: string;

   @Input()
   textPropertySomething(something: any): string {
     return something[this.textProperty];
   }

   @Input()
   multiselect: boolean;

   private _onChildSelect(event: any) {
     if (!this.multiselect) {
       this.buttons.forEach(button => {
         if (event.toggleButton !== button) {
           button.deselect();
         }
       });
     }
   }
 }
