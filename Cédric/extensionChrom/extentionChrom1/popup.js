document.addEventListener('DOMContentLoaded', function () {
    console.log('Dom loaded');
    $('#getContent').click(function () {
        let data = {Selector: $(this).prev().val()};
        chrome.tabs.query(
            {
                active: true,
                currentWindow: true
            }, function (tabs) {
                chrome.tabs.sendMessage(tabs[0].id, data, function (response) {
                    console.log(response);
                    $('#url').html(response.content);
                });
            });
    });
    /*chrome.tabs.getSelected(null, function (tab) {
     console.log(tab.url);
     });*/
    /*chrome.tabs.getElementById('url').innerHTML = tabs.url;
     console.log(tab, tab.url);
     chrome.tabs.insertCSS(tab.id, {file: "extentionChrom.css"});
     console.log(chrome, 'popup');
     chrome.tabs.sendMessage(tab.id, {test: "sumperbe Test"}, function (response) {
     console.log(response);
     });*/
});
