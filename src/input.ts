import { Component, Input, Output, EventEmitter } from "angular2/core";
import { NgClass, NgModel } from "angular2/common";
@Component({
    directives: [NgClass],
    selector: "feel-input",
    template: `<label>{{label}}</label>
               <input type="text" (input)=onInput($event) [(ngModel)]="value" />`
})
export class InputComponent {

   @Input() label: string;
   @Input() value: string;
   @Output() custominput = new EventEmitter();
   onInput() {
     this.custominput.emit(this.value);
   }
 }
