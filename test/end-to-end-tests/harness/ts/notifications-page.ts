import { Component } from "angular2/core";
import { ButtonComponent, NotificationProvider, InputComponent } from "feel-ui/feel-ui";
console.log("InputComponent", InputComponent)
@Component({
    directives: [ ButtonComponent, InputComponent ],
    selector: "notifications-page",
    template: `<h1>Notifications</h1>
               <feel-input [label]="'Title'" (custominput)=onTitleInput($event) [(value)]="title"></feel-input>
               <input  [(ngModel)]="message"/>
               <feel-button [flat]="false" [text]="'Success'" (click)=onSuccessClick()></feel-button>
               <feel-button [flat]="false" [text]="'Error'" (click)=onErrorClick()></feel-button>`
})
export class NotificationsPage {

    public title: string = "Test title";
    public message: string = "Test message";

    onTitleInput(e: string) {
      this.title = e;
    }

   onSuccessClick() {

     new NotificationProvider().showSuccess(this.title, this.message);
   }
    onErrorClick() {

      new NotificationProvider().showError(this.title, this.message);
    }
}
