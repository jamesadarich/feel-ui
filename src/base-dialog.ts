import { Component, Input} from "angular2/core";
import { NgClass } from "angular2/common";
/*
@Component({
    directives: [NgClass],
    selector: "feel-dialog",
    template: `I am a dialog!`
})*/
export class BaseDialog {

     private _notificationElement: HTMLElement;

     public constructor() {

       this._notificationElement = document.getElementById("feel-notification-stream");

       if (this._notificationElement === null) {
         this._notificationElement = document.createElement("div");
         this._notificationElement.id = "feel-notification-stream";
         document.body.appendChild(this._notificationElement);
       }

     }

   public show(title: string, message: string) {
     let newDialog = document.createElement("div");

     if (title) {
       newDialog.innerHTML += "<div class='title'>" + title + "</div>";
     }

     if (message) {
       newDialog.innerHTML += "<div class='message'>" + message + "</div>";
     }

     this._notificationElement.appendChild(newDialog);

     setTimeout(() => {
       this._notificationElement.removeChild(newDialog);
     }, 5000);

   }
 }
