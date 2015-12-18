import { Component } from "angular2/core";
import { InputComponent } from "../src/input";
@Component({
    directives: [ InputComponent ],
    selector: "input-page",
    template: `<h1>Input</h1>
               <feel-input [label]="'value 1'" [value]="something"></feel-input>
               <feel-input [label]="'value 2'" [value]="something"></feel-input>`
})
export class InputPage {

  public something: string = 'this';

   onClick() {
     console.log("clicked");
   }
}
