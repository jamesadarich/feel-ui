import { Component } from "angular2/core";
import { TableComponent, ButtonComponent } from "feel-ui/feel-ui";
import { FORM_DIRECTIVES, NgModel } from "angular2/common";
@Component({
    directives: [ TableComponent, ButtonComponent, NgModel ],
    selector: "input-page",
    template: `<h1>Input</h1>
               <feel-table [columns]="tableColumns" [data]="tableData"></feel-table>
               <feel-button [text]="'Add row'" (click)=onClick()></feel-button>`
})
export class TablePage {

  public constructor() {
  }

  public tableColumns: Array<any> = [ {propertyName: "something"}, {propertyName: "something-else"}];
  public tableData: Array<any> = [ { "something": "Test 1", "something-else": "Test 2" }, { "something": "Test A", "something-else": "Test B" }];

  public onClick() {
     this.tableData.push({ "something": "New Item " + this.tableData.length, "something-else": "New Other Item " + this.tableData.length });
 }
}
