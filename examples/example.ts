import "reflect-metadata";
import "zone.js";
import { Component, NgModule } from "@angular/core";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { FeelUiModule } from "../src/feel-ui.module";
import { BrowserModule } from '@angular/platform-browser';

@Component({
    "selector": "app",
    "template": `
        <feel-button text="Lovely Button">Button</feel-button>
        <feel-checkbox label="Checkbox"></feel-checkbox>
        <feel-input label="Input"></feel-input>
        <feel-toggle-button-group [items]="items" textProperty="name"></feel-toggle-button-group>`
})
class AppComponent {
    items = [
        { name: "One" },
        { name: "Two" },
        { name: "Three" }
    ];
}

@NgModule({
    declarations: [ AppComponent ],
    imports: [ FeelUiModule, BrowserModule ],
    bootstrap: [ AppComponent ]
})
class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);
