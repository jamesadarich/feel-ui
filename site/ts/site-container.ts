import { bootstrap, Component, NgClass } from "angular2/angular2";
import { ButtonPage } from "./button-page.ts";
import { MenuBar } from "../src/menu-bar.ts";
@Component({
    directives: [ ButtonPage, MenuBar ],
    selector: "my-app",
    template: `<feel-menu-bar [title]="'Feel'"></feel-menu-bar>
               <div id="site-body">
                  <button-page></button-page>
               </div>`
})
class SiteContainer {
}
bootstrap(SiteContainer);
