import { Component } from "angular2/core";
import { ButtonComponent, NotificationProvider } from "feel-ui/feel-ui";
@Component({
    directives: [ ButtonComponent ],
    selector: "notifications-page",
    template: `<h1>Notifications</h1>
               <input  [(ngModel)]="title"/>
               <input  [(ngModel)]="message"/>
               <feel-button [flat]="false" [text]="'Success'" (click)=onSuccessClick()></feel-button>
               <feel-button [flat]="false" [text]="'Error'" (click)=onErrorClick()></feel-button>`
})
export class NotificationsPage {

    public title: string = "";
      public message: string = "";

   onSuccessClick() {

     new NotificationProvider().showSuccess(this.title, this.message);
   }
    onErrorClick() {

      new NotificationProvider().showError(this.title, this.message);
    }
}
