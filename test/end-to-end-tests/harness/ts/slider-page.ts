import { Component } from "angular2/core";
import { SliderComponent, InputComponent } from "feel-ui/feel-ui";
import { FORM_DIRECTIVES, NgModel } from "angular2/common";
@Component({
    directives: [ SliderComponent, InputComponent ],
    selector: "slider-page",
    template: `<h1>Slider</h1>
               <feel-slider [(value)]="value" [maximum]="maximum"></feel-slider>
               <feel-input [(value)]="value"></feel-input>
               <p>Value: {{value}}</p>`
})
export class SliderPage {

  public constructor() {
  }

  public value: number = 4;
  public maximum: number = 20;

  public test(event: any) {
    console.log(this.value);
  }
}
