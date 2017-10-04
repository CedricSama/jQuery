(function ($) {
    $.fn.completion = function (options) {
        let defaults = {
            'url': '',
            'nbCaractere': 3,
            'tableauDeCompletion': '',
            'completionProprity': '',
            'langue': '',
            'api_key': '',
            'page': ''
        };
        let config = $.extend(defaults, options);
        let c = $('<div id="completionListe"></div>');
        c.insertAfter(this);
        let $input = $(this);
        let $completion = $('#completionListe');
        $completion.hide();
        $(document).click(function () {
            $completion.fadeOut('slow');
        });

        $input.keyup(function (k) {
            let recherche = $(this).val();
            let url = config.url;
            let tabData = config.tableauDeCompletion;
            let nom = config.completionProprity;
            let nbC = config.nbCaractere;
            let langue = config.langue;
            let query = config.query;
            let page = config.page;
            let apiKey = config.api_key;
            let data = {
                'api_key': apiKey,
                'langue': langue,
                'query': recherche,
                'page': page
            };
            if (k.key === "Enter") {
                $completion.fadeOut('slow');}
            else {
                if ($input.val().length >= nbC) {
                    $.ajax({
                        type: 'GET',
                        dataType: 'json',
                        data: data,
                        url: url,
                        success: function (data) {
                            (function (tableCompletion) {
                                let tableC = tableCompletion[config.tableauDeCompletion];
                                let liste = "<ul>";
                                if (tableC.length > 0) {
                                    $.each(tableC.sort().slice(0, 10), function (index, element) {
                                        //this === element du tableau (elemebt === element courant)
                                        liste += "<li data-recherche='" + element[nom] + "'>" + element[nom] + "</li>";
                                        $completion.fadeIn('slow');
                                    });
                                    liste += "</ul>";
                                    $completion.html(liste);
                                    $completion.css({
                                        'z-index': '998',
                                        left: $input.offset().left + "px",
                                        maxWidth: $input.outerWidth() + "px",
                                        minWidth: $input.outerWidth() + "px"
                                    });
                                } else {
                                    $completion.fadeOut('slow');
                                }
                            })(data);
                            let $films = $('li');
                            $films.click(function () {
                                $input.append().val($(this).attr('data-recherche'));
                                $completion.fadeOut('slow');
                                //$commune.append().val($(this).html());
                            });
                        },
                        error: function () {
                            alert('Error');
                        },
                    });
                } else {
                    $completion.fadeOut('slow');
                }
            }});

    };
    return this;
})(jQuery);
/*TODO
$('#next').click(function () {
    lastpage = page;
    page++;
    $rechercher.click()
});*/


