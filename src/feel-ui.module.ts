import { NgModule } from "@angular/core";
import { ButtonComponent } from "./components/button";
import { CommonModule } from '@angular/common';  

@NgModule({
    imports: [ CommonModule ],
    declarations: [ ButtonComponent ],
    exports: [ ButtonComponent ]
})
export class FeelUiModule {};