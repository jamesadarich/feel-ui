import { Component, Input} from "angular2/angular2";
import { ButtonComponent } from "./button.ts";
@Component({
    directives: [ ButtonComponent ],
    selector: "feel-menu-bar",
    template: "<feel-button [text]="'M'"></feel-button><h1>{{title}}</h1>"
})
export class MenuBar {

   @Input() title: string;
 }
