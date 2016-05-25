import { Component } from "angular2/core";
import { ButtonComponent, NotificationProvider, ToggleButtonComponent, ToggleButtonGroupComponent, DropdownComponent, BaseDialog } from "feel-ui/feel-ui";

@Component({
    directives: [ ButtonComponent, ToggleButtonComponent, ToggleButtonGroupComponent, DropdownComponent ],
    selector: "button-page",
    template: `<h1>Buttons</h1>
               <feel-button [flat]="false" [text]="'raised'" (click)=showDialog()></feel-button>
               <feel-button [flat]="true" [text]="'flat'" (click)=onClick()></feel-button>
               <feel-button [flat]="false" [primary]="true" [text]="'primary raised'"></feel-button>
               <feel-button [flat]="true" [primary]="true" [text]="'primary flat'" (click)=onClick()></feel-button>
               <h2>Toggle Buttons</h2>
               <feel-toggle-button text="Toggle me"></feel-toggle-button>
               <div>
                <label>Toggle group</label>
                <feel-toggle-button-group [textProperty]="'name'" [items]="toggleItems" [(selectedItem)]="selectedToggleItem"></feel-toggle-button-group>
                {{selectedToggleItem | json}}
               </div>
               <div>
                <label>Multiselect toggle group</label>
                <feel-toggle-button-group [textProperty]="'name'" [items]="toggleItems" [(selectedItems)]="selectedToggleItems" [multiselect]=true></feel-toggle-button-group>
                {{selectedToggleItems | json}}
               </div>
               <feel-dropdown [(selectedItem)]="selectedDropdownItem" [placeholderText]="'Select one'" [items]="dropdownItems" [textPropertyName]="'name'"></feel-dropdown>
               {{selectedDropdownItem | json}}`
})
export class ButtonPage {

   public toggleItems: Array<any>;
   public selectedToggleItems: Array<any>;
   public selectedToggleItem: any;

   public constructor () {
      this.toggleItems = [{ name: "one" }, { name: "two" }, { name: "three" }, { name: "four" }, { name: "five" }];

      this.selectedToggleItems = [ this.toggleItems[1], this.toggleItems[3]];
      this.selectedToggleItem = this.toggleItems[2];
   }

  dropdownItems = [{ name: "one" }, { name: "two" }, { name: "three" }, { name: "four" }, { name: "five" }];

  selectedDropdownItem = null;

   onClick() {
     console.log("clicked");

     new NotificationProvider().showSuccess("test", "ing");
   }

   showDialog() {
      new BaseDialog().show("testing", "this is an awesome dialog");
   }
}
