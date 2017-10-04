window.addEventListener('load', function () {
    document.addEventListener('DOMContentLoaded', function () {

    });
});
    chrome.extension.onMessage.addListener(function (data, idObj, cb) {
        cb({
            content: window.getSelection().toString()
        });
});