import { Component } from "angular2/core";
import { InputComponent } from "feel-ui/feel-ui";
import { FORM_DIRECTIVES, NgModel } from "angular2/common";
@Component({
    directives: [ InputComponent, NgModel ],
    selector: "input-page",
    template: `<h1>Input</h1>
               <input  [(ngModel)]="something"/>
               <p>Value: {{something}}</p>`
})
export class InputPage {

  public constructor() {
    window.mango = this;
  }

  public something: string = 'this';
}
