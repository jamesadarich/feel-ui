import { Component, Input, Output, EventEmitter, ViewChildren, QueryList } from "@angular/core";
import { ToggleButtonComponent } from "./toggle-button";

@Component({
    selector: "feel-toggle-button-group",
    template: `<feel-toggle-button *ngFor="let item of items" [text]="getToggleButtonText(item)" (select)="_onChildSelect($event)" (deselect)="_emitSelectedItemsChange()" [selected]="_itemIsSelected(item)"></feel-toggle-button>`
})
export class ToggleButtonGroupComponent {

   @ViewChildren(ToggleButtonComponent)
   buttons: QueryList<ToggleButtonComponent>;

   @Input()
   items: Array<any> = [];

   @Input()
   textProperty: string;

   @Input()
   getToggleButtonText(item: any): string {
     return item[this.textProperty];
   }

   @Input()
   multiselect: boolean;

   @Input()
   selectedItem: any;

   @Input()
   selectedItems: Array<any>;

   @Output()
   selectedItemsChange: EventEmitter<any> = new EventEmitter<any>();

   @Output()
   selectedItemChange: EventEmitter<any> = new EventEmitter<any>();

   private _itemIsSelected(item: any): boolean {
      if (this.selectedItem === item) {
         return true;
      }
      else if (this.selectedItems && this.selectedItems.indexOf(item) !== -1) {
         return true;
      }

      return false;
   }

   private _onChildSelect(event: any) {
     if (!this.multiselect) {
       this.buttons.forEach(button => {
         if (event.toggleButton !== button) {
           button.deselect();
         }
       });
     }

     this._emitSelectedItemsChange();
  }

  private _emitSelectedItemsChange() {
     if (this.multiselect) {
        let selectedItems: Array<any> = [];

        this.buttons.forEach(button => {
           if (button.selected) {
              selectedItems.push(this.items[this.buttons.toArray().indexOf(button)]);
           }

        });

        this.selectedItemsChange.emit(selectedItems);
      }
      else {
         for (let button of this.buttons.toArray()) {
            if (button.selected) {
               this.selectedItem = this.items[this.buttons.toArray().indexOf(button)];
               this.selectedItemChange.emit(this.selectedItem);
               return;
            }
         }

         this.selectedItem = null;
         this.selectedItemChange.emit(this.selectedItem);
      }
   }
 }
