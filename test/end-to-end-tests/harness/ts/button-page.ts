import { Component } from "angular2/core";
import { ButtonComponent, NotificationProvider, ToggleButtonComponent, ToggleButtonGroupComponent } from "feel-ui/feel-ui";
@Component({
    directives: [ ButtonComponent, ToggleButtonComponent, ToggleButtonGroupComponent ],
    selector: "button-page",
    template: `<h1>Buttons</h1>
               <feel-button [flat]="false" [text]="'raised'"></feel-button>
               <feel-button [flat]="true" [text]="'flat'" (click)=onClick()></feel-button>
               <feel-button [flat]="false" [primary]="true" [text]="'primary raised'"></feel-button>
               <feel-button [flat]="true" [primary]="true" [text]="'primary flat'" (click)=onClick()></feel-button>
               <h2>Toggle Buttons</h2>
               <feel-toggle-button text="Toggle me"></feel-toggle-button>
               <div>
                <label>Toggle group</label>
                <feel-toggle-button-group [textProperty]="'name'" [items]="toggleItems"></feel-toggle-button-group>
               </div>
               <div>
                <label>Multiselect toggle group</label>
                <feel-toggle-button-group [textProperty]="'name'" [items]="toggleItems" [multiselect]=true></feel-toggle-button-group>
               </div>`
})
export class ButtonPage {

  toggleItems = [{ name: "one" }, { name: "two" }, { name: "three" }, { name: "four" }, { name: "five" }];

   onClick() {
     console.log("clicked");

     new NotificationProvider().showSuccess("test", "ing");
   }
}
