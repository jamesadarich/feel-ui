import { Component, Input } from "angular2/core";
import { NgFor } from "angular2/common";
import { ToggleButtonComponent } from "./toggle-button";

@Component({
    directives: [ NgFor, ToggleButtonComponent ],
    selector: "feel-toggle-button-group",
    template: `<feel-toggle-button *ngFor="#item of items" [text]="textPropertySomething(item)"></feel-toggle-button>`
})
export class ToggleButtonGroupComponent {

   @Input()
   items: Array<any> = [];

   @Input()
   textProperty: string;

   @Input()
   textPropertySomething(something: any): string {
     return something[this.textProperty];
   }
 }
