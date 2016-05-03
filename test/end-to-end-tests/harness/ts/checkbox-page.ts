import { Component } from "angular2/core";
import { Checkbox, NotificationProvider } from "feel-ui/feel-ui";
@Component({
    directives: [ Checkbox ],
    selector: "checkbox-page",
    template: `<h1>Checkboxes</h1>
               <feel-checkbox [checked]="true" [label]="'checked'"></feel-checkbox>
               <feel-checkbox [checked]="false" [label]="'not checked'"></feel-checkbox>`
})
export class CheckboxPage {

   onClick() {
     console.log("clicked");

     new NotificationProvider().showSuccess("test", "ing");
   }
}
