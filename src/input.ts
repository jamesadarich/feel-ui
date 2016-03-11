import { Component, Input, Output, EventEmitter } from "angular2/core";
import { NgClass, NgModel } from "angular2/common";
@Component({
    directives: [NgClass],
    selector: "feel-input",
    template: `<label>{{label}}</label>
               <input type="text" [ngModel]=value (ngModelChange)="onInput($event)" />`
})
export class InputComponent {

   @Input() label: string;
   @Input() value: string;
   @Output() valueChange = new EventEmitter();
   onInput(event: string) {
      this.value = event;
      this.valueChange.emit(event);
   }
 }
