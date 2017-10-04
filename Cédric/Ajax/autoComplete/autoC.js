(function () {
    //console.log('Script ok');
    let $commune = $('#commune');
    let $completion = $('#completion');
    let $ville = $('li');
    $completion.hide();
    $commune.keyup(function () {
        let $cme = $(this).val();
        let url = "https://geo.api.gouv.fr/communes";
        if ($cme !== "") {
            $.ajax({
                type: 'GET',
                dataType: 'json',
                data: {nom: $cme},
                url: url,
                success: function (data) {
                    (function ConstructionCommunesListe(tableauDeCommunes) {
                        console.log(tableauDeCommunes);
                        let liste = "<ul>";
                        if (tableauDeCommunes.length > 0) {
                            console.log(data);
                            $.each(tableauDeCommunes.sort().slice(0, 10), function (index, element) {
                                //this === element du tableau (elemebt === element courant)
                                liste += "<li data-ville='" + this.nom + "'>" + this.nom + " - " + this.codesPostaux[0] + "</li>";
                                $completion.fadeIn('slow');
                            });
                            liste += "</ul>";
                            $completion.html(liste);
                            $completion.css({
                                left: $commune.offset().left + "px",
                                maxWidth: $commune.outerWidth() + "px",
                                minWidth: $commune.outerWidth() + "px"
                            });
                        }else {
                            $completion.fadeOut('slow');
                        }
                    })(data);
                    let $ville = $('li');
                    $ville.click(function () {
                        $commune.append().val($(this).attr('data-ville'));
                        //$commune.append().val($(this).html());
                    });

                },
                error: function () {
                    alert('Error');
                }
            });
        } else {
            $completion.fadeOut('slow');
        }
    });
})(jQuery);