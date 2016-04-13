import { Component, Input, Output, EventEmitter } from "angular2/core";
import { NgClass, NgModel, NgIf } from "angular2/common";
@Component({
    directives: [NgClass, NgIf],
    selector: "feel-input",
    template: `<label>{{label}}</label>
               <textarea *ngIf="multiline" [ngModel]=value (ngModelChange)="onInput($event)"></textarea>
               <input *ngIf="!multiline" type="text" [ngModel]=value (ngModelChange)="onInput($event)" />`
})
export class InputComponent {

   @Input() label: string;
   @Input() value: string;
   @Input() multiline: boolean = false;
   @Output() valueChange = new EventEmitter();

   onInput(event: string) {
      this.value = event;
      this.valueChange.emit(event);
   }
 }
