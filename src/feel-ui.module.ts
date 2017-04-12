import { NgModule } from "@angular/core";
import { ButtonComponent } from "./components/button";
import { InputComponent } from "./components/input";
import { CheckboxComponent } from "./components/checkbox";
import { ToggleButtonComponent } from "./components/toggle-button";
import { ToggleButtonGroupComponent } from "./components/toggle-button-group";
import { NotificationProvider } from "./components/notification-provider";
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";

@NgModule({
    imports: [ 
        CommonModule,
        FormsModule
    ],
    providers: [ NotificationProvider ],
    declarations: [
        ButtonComponent,
        CheckboxComponent,
        InputComponent,
        ToggleButtonComponent,
        ToggleButtonGroupComponent
    ],
    exports: [
        ButtonComponent,
        CheckboxComponent,
        InputComponent,
        ToggleButtonComponent,
        ToggleButtonGroupComponent
    ]
})
export class FeelUiModule {};