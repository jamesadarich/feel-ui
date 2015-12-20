(function (factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(["require", "exports", "./button", "./menu-bar", "./menu-panel", "./input"], factory);
    }
})(function (require, exports) {
    var button_1 = require("./button");
    exports.ButtonComponent = button_1.ButtonComponent;
    var menu_bar_1 = require("./menu-bar");
    exports.MenuBar = menu_bar_1.MenuBar;
    var menu_panel_1 = require("./menu-panel");
    exports.MenuPanel = menu_panel_1.MenuPanel;
    var input_1 = require("./input");
    exports.InputComponent = input_1.InputComponent;
});
