System.register(["angular2/core", "angular2/common"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var core_1, common_1;
    var InputComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            }],
        execute: function() {
            InputComponent = (function () {
                function InputComponent() {
                }
                __decorate([
                    core_1.Input()
                ], InputComponent.prototype, "label", void 0);
                __decorate([
                    core_1.Input()
                ], InputComponent.prototype, "value", void 0);
                InputComponent = __decorate([
                    core_1.Component({
                        directives: [common_1.NgClass],
                        selector: "feel-input",
                        template: "<label>{{label}}</label>\n               <input type=\"text\" [(ngModel)]=\"value\" />"
                    })
                ], InputComponent);
                return InputComponent;
            })();
            exports_1("InputComponent", InputComponent);
        }
    }
});
