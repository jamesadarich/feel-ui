System.register(["angular2/core", "./button", "./menu-panel"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var core_1, button_1, menu_panel_1;
    var MenuBar;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (button_1_1) {
                button_1 = button_1_1;
            },
            function (menu_panel_1_1) {
                menu_panel_1 = menu_panel_1_1;
            }],
        execute: function() {
            MenuBar = (function () {
                function MenuBar() {
                    this.isMenuOpen = false;
                }
                MenuBar.prototype.toggleMenuPanel = function () {
                    this.isMenuOpen = !this.isMenuOpen;
                };
                MenuBar.prototype.onMenuClose = function () {
                    this.isMenuOpen = false;
                };
                __decorate([
                    core_1.Input()
                ], MenuBar.prototype, "title", void 0);
                MenuBar = __decorate([
                    core_1.Component({
                        directives: [button_1.ButtonComponent, menu_panel_1.MenuPanel],
                        selector: "feel-menu-bar",
                        template: "<feel-button [text]=\"'M'\" (click)=toggleMenuPanel()></feel-button>\n               <div class=\"title\">\n                <h1>{{title}}</h1>\n                </div>\n               <feel-menu-panel [open]=\"isMenuOpen\" (close)=\"onMenuClose()\"></feel-menu-panel>"
                    })
                ], MenuBar);
                return MenuBar;
            })();
            exports_1("MenuBar", MenuBar);
        }
    }
});
