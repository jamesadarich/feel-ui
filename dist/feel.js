System.register(["./button", "./menu-bar", "./menu-panel", "./input"], function(exports_1) {
    return {
        setters:[
            function (button_1_1) {
                exports_1({
                    "ButtonComponent": button_1_1["ButtonComponent"]
                });
            },
            function (menu_bar_1_1) {
                exports_1({
                    "MenuBar": menu_bar_1_1["MenuBar"]
                });
            },
            function (menu_panel_1_1) {
                exports_1({
                    "MenuPanel": menu_panel_1_1["MenuPanel"]
                });
            },
            function (input_1_1) {
                exports_1({
                    "InputComponent": input_1_1["InputComponent"]
                });
            }],
        execute: function() {
        }
    }
});
