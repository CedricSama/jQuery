window.addEventListener('load', function () {
    console.log('Js loaded');
    console.log(chrome, 'loaded');
    /*chrome.tabs.getSelected(null, function (tab) {
        console.log(tab.url);
        console.log(tab);
    });*/
    $(window).keyup(function (e) {
        if (e.key === "Enter") {
            if (e.ctrlKey) window.location.href = "http://www.google.fr/mail";
            else window.location.href = "http://www.google.fr"
        }
        console.log(chrome, 'key');
    });
    document.addEventListener('DOMContentLoaded', function () {
        console.log('Dom loaded');
    });
});
chrome.extension.onMessage.addListener(function (data, idObj, cb) {
    console.log(arguments);
    cb({
    content: $(data.Selector).html()});
    //content: window.getSelection().toString()
    });
/*
$(window).keyup(function (e) {
    if (e.key === "Enter") {
        if (e.ctrlKey) window.location.href = "http://www.google.fr/mail";
        else window.location.href = "http://www.google.fr"
    }
    console.log(chrome, 'key');
});
*/

