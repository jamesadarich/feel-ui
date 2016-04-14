import { Component } from "angular2/core";
import { InputComponent } from "feel-ui/feel-ui";
@Component({
    directives: [ InputComponent ],
    selector: "input-page",
    template: `<h1>Input</h1>
               <feel-input [(value)]="something"></feel-input>
               <feel-input [multiline]=true [(value)]="something"></feel-input>
               <p>Value: {{something}}</p>`
})
export class InputPage {

  public constructor() {
  }

  public something: string = 'this';
}
