import { Component } from "angular2/core";
import { Checkbox, NotificationProvider } from "feel-ui/feel-ui";
@Component({
    directives: [ Checkbox ],
    selector: "checkbox-page",
    template: `<h1>Checkboxes</h1>
               <feel-checkbox [(checked)]=_checked [label]="'checked'"></feel-checkbox> {{_checked}}
               <feel-checkbox [(checked)]=_unchecked [label]="'not checked'"></feel-checkbox> {{_unchecked}}
               <feel-checkbox [(checked)]=_disabledChecked [disabled]="true" [label]="'disabled checked'"></feel-checkbox> {{_disabledChecked}}
               <feel-checkbox [(checked)]=_disabledUnchecked  [disabled]="true" [label]="'disabled not checked'"></feel-checkbox> {{_disabledUnchecked}}`
})
export class CheckboxPage {

   _checked = true;
   _unchecked = false;
   _disabledChecked = true;
   _disabledUnchecked = false;
}
