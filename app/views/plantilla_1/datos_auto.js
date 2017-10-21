var frameModule = require("ui/frame");
var BottomNavigationTab = require("nativescript-bottom-navigation");

function loaded(args) {
    var bar = args.object;
    bar.selectTab(0);
    bar.on('tabSelected', tabSelected);
}
exports.loaded = loaded;

function tabSelected(args) {
    console.log('tab selected ' + args.newIndex);
    if(args.newIndex == '1'){
        var topmost = frameModule.topmost();
        topmost.navigate("views/plantilla_2/cuotas_pagadas");
    }
    if(args.newIndex == '2'){
        var topmost = frameModule.topmost();
        topmost.navigate("views/plantilla_3/cuotas_vencidas");
    }
}
exports.tabSelected = tabSelected;