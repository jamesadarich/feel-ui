import { Component, Input, Output } from "angular2/core";
import { NgClass } from "angular2/common";
@Component({
    directives: [ NgClass ],
    selector: "feel-slider",
    template: `<div class="slider-track">
                  <div class="slider-button" style="left: {{(value / maximum) * 100}}%"></div>
               </div>`
})
export class Slider {

   @Input()
   value: number;

   @Input()
   maximum: number;

   constructor() {
   }
 }
