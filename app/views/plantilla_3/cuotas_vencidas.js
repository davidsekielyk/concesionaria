var frameModule = require("ui/frame");

function loaded(args) {
    var bar = args.object;
    bar.selectTab(2);
    bar.on('tabSelected', tabSelected);
}
exports.loaded = loaded;

function tabSelected(args) {
    console.log('tab selected ' + args.newIndex);
    if(args.newIndex == '0'){
        var topmost = frameModule.topmost();
        topmost.navigate("views/plantilla_1/datos_auto");
    }
    if(args.newIndex == '1'){
        var topmost = frameModule.topmost();
        topmost.navigate("views/plantilla_2/cuotas_pagadas");
    }
}
exports.tabSelected = tabSelected;