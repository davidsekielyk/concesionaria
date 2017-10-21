var frameModule = require("ui/frame");

function loaded(args) {
    var bar = args.object;
    bar.selectTab(1);
    bar.on('tabSelected', tabSelected);
}
exports.loaded = loaded;

function tabSelected(args) {
    console.log('tab selected ' + args.newIndex);
    if(args.newIndex == '0'){
        var topmost = frameModule.topmost();
        topmost.navigate("views/plantilla_1/datos_auto");
    }
    if(args.newIndex == '2'){
        var topmost = frameModule.topmost();
        topmost.navigate("views/plantilla_3/cuotas_vencidas");
    }
}
exports.tabSelected = tabSelected;