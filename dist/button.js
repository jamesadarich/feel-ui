System.register(["angular2/core", "angular2/common"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var core_1, common_1;
    var ButtonComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            }],
        execute: function() {
            ButtonComponent = (function () {
                function ButtonComponent() {
                }
                __decorate([
                    core_1.Input()
                ], ButtonComponent.prototype, "flat", void 0);
                __decorate([
                    core_1.Input()
                ], ButtonComponent.prototype, "text", void 0);
                ButtonComponent = __decorate([
                    core_1.Component({
                        directives: [common_1.NgClass],
                        selector: "feel-button",
                        template: "<button type='button' [ngClass]=\"{ 'btn-flat': flat }\" >{{text}}</button>"
                    })
                ], ButtonComponent);
                return ButtonComponent;
            })();
            exports_1("ButtonComponent", ButtonComponent);
        }
    }
});
