import "reflect-metadata";
import "zone.js";
import { Component, NgModule } from "@angular/core";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { FeelUiModule } from "../src/feel-ui.module";
import { BrowserModule } from '@angular/platform-browser';

@Component({
    "selector": "app",
    "template": `<feel-button text='"Lovely Button"'>Button</feel-button>`
})
class AppComponent {}

@NgModule({
    declarations: [ AppComponent ],
    imports: [ FeelUiModule, BrowserModule ],
    bootstrap: [ AppComponent ]
})
class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);
