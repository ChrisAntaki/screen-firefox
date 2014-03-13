var data = require("sdk/self").data;

// Remove `window.screen`.
var pageMod = require("sdk/page-mod");
pageMod.PageMod({
    include: "*",
    contentScriptWhen: 'start',
    contentScriptFile: data.url('clean.js')
});
