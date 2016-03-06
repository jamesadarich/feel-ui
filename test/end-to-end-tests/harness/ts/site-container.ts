import { Component, provide } from "angular2/core";
import {bootstrap}    from "angular2/platform/browser"
//import { RouteConfig,  RouterOutlet } from "angular2/router";
import {ROUTER_PROVIDERS, LocationStrategy, PathLocationStrategy } from 'angular2/router';
import {ROUTER_DIRECTIVES, RouteConfig, Router, Location, Route} from 'angular2/router';
import { ButtonPage } from "./button-page";
import { InputPage } from "./input-page";
import { NotificationsPage } from "./notifications-page";
import * as FeelUi from "feel-ui/feel-ui";
console.log("FeelUi", FeelUi);
@Component({
    directives: [ ButtonPage, FeelUi.MenuBar, ROUTER_DIRECTIVES ],
    selector: "my-app",
    template: `<feel-menu-bar [title]="'Feel'"></feel-menu-bar>
               <router-outlet></router-outlet>`
})
@RouteConfig([
    {path: "/",        component: ButtonPage, name: "Home"},
    {path: "/buttons",        component: ButtonPage, name: "Buttons"},
    {path: "/input", component: InputPage, name: "Input"  },
    {path: "/notifications", component: NotificationsPage, name: "Notifications"  }
])
class SiteContainer {
}
bootstrap(SiteContainer, [ROUTER_PROVIDERS, provide(LocationStrategy, {useClass: PathLocationStrategy })]);
