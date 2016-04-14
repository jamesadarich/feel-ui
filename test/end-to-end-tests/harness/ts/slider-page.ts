import { Component } from "angular2/core";
import { Slider } from "feel-ui/feel-ui";
import { FORM_DIRECTIVES, NgModel } from "angular2/common";
@Component({
    directives: [ Slider ],
    selector: "slider-page",
    template: `<h1>Slider</h1>
               <feel-slider [(value)]="value" [maximum]="maximum"></feel-slider>
               <p>Value: {{value}}</p>`
})
export class SliderPage {

  public constructor() {
  }

  public value: number = 4;
  public maximum: number = 20;
}
