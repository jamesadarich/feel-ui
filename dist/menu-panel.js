System.register(["angular2/core", "angular2/common", "./button", 'angular2/router'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var core_1, common_1, button_1, router_1;
    var MenuPanel;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (button_1_1) {
                button_1 = button_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            MenuPanel = (function () {
                function MenuPanel() {
                    this.close = new core_1.EventEmitter();
                }
                MenuPanel.prototype.closeMenuPanel = function () {
                    this.open = false;
                    this.close.next(null);
                };
                __decorate([
                    core_1.Input()
                ], MenuPanel.prototype, "open", void 0);
                MenuPanel = __decorate([
                    core_1.Component({
                        directives: [common_1.NgClass, button_1.ButtonComponent, router_1.RouterLink],
                        selector: "feel-menu-panel",
                        events: ['close'],
                        template: "<div [ngClass]=\"{ 'show': open }\" >\n                  <div class=\"menu-title\">\n                    <h1>Menu</h1>\n                    <feel-button [text]=\"'X'\" (click)=closeMenuPanel()></feel-button>\n                  </div>\n                  <div class=\"menu-options\">\n                    <a [routerLink]=\"['/Home']\"><div class=\"menu-item\">Home</div></a>\n                    <a [routerLink]=\"['/Buttons']\"><div class=\"menu-item\">Button</div></a>\n                    <a [routerLink]=\"['/Input']\"><div class=\"menu-item\">Input</div></a>\n                  </div>\n               </div>"
                    })
                ], MenuPanel);
                return MenuPanel;
            })();
            exports_1("MenuPanel", MenuPanel);
        }
    }
});
