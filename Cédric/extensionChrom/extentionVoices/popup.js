document.addEventListener('DOMContentLoaded', function () {
    // $('#getContent').click(function () {
        let data = {Selector: $(this).prev().val()};
        chrome.tabs.query(
            {
                active: true,
                currentWindow: true
            }, function (tabs) {
                let voices;
                chrome.tabs.sendMessage(tabs[0].id, data, function (response) {
                    voices = response.content;
                    console.log(voices);
$('#url').html(voices);
                    $.speech({
                        key: 'f08617cd26a24130af7ae959538389e1',
                        src: voices,
                        hl: 'fr-fr',
                        r: -1,
                        c: 'mp3',
                        f: '32 kHz, 8 Bit, Stereo',
                        ssml: false
                    });

                });
            });
    // });
});
