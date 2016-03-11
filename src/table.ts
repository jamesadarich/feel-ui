import { Component, Input, Output, EventEmitter } from "angular2/core";
import { NgClass, NgModel } from "angular2/common";
@Component({
    directives: [NgClass],
    selector: "feel-table",
    template: `<table>
                  <thead>
                     <th *ngFor="#column of columns">{{ column.propertyName }}</th>
                  </thead>
                  <tbody>
                     <tr *ngFor="#dataItem of data">
                        <td *ngFor="#column of columns">{{ dataItem[column.propertyName] }}</td>
                     </tr>
                  </tbody>
               </table>`
})
export class TableComponent {

   @Input() data: Array<any>;
   @Input() columns: Array<any>;
 }
