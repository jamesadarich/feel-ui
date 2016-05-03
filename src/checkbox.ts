import { Component, Input, HostListener } from "angular2/core";
import { NgClass } from "angular2/common";

@Component({
    directives: [NgClass],
    selector: "feel-checkbox",
    template: `<svg [ngClass]="{ 'checked': checked }" width="20px" height="20px">
                  <rect x="1" y="1" width="16px" height="16px"></rect>
                  <path d="M 4 6 l 6 6 l 12 -12"></path>
               </svg>
               <label>{{label}}</label>`
})
export class Checkbox {

   @Input()
   checked: boolean;

   @Input()
   label: string;

   @HostListener('click', ['$event.target'])
     _toggleClicked(event: MouseEvent) {
       this.checked = !this.checked;
     }
 }
