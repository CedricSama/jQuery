$(document).ready(function () {
    //console.log('Script Loaded !');
    //let apiKeyV4 = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMzMxNmZhYTU3ZDFlOGM5YmVkM2FmODg1MzRmYzZhZCIsInN1YiI6IjU5YTkyZDdjYzNhMzY4M2NlNjAyNjc4NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.E4xPYXTp5404DEFikoa9cGMjN50oyYiKvNYv5q5T4x8";
    //let theMovieDbUrl = 'https://api.themoviedb.org/4/movie/550?api_key=' + apiKeyV4;
    // 92 154 185 342 500 780
    let apiKeyV3 = "b3316faa57d1e8c9bed3af88534fc6ad";
    let theMovieDbUrl = 'https://api.themoviedb.org/3';
    let langueDb = "fr-FR";
    let $button = $('button');
    let $recherche = $('#recherche');
    let $resultat = $('.resultat');
    let $titre = $('.titre');
    let $dateDeSortie = $('.dateDeSortie');
    let $presnetation = $('.presentation');
    let $popularite = $('.popularite');
    let $note = $('.note');
    let $resume = $('.resume');
    let $resumeImg = $('.resumeImg');
    let $langueVo = $('.langueVo');
    let $basket = $('#basket');
    let page = 1;
    let audio;
    let $filmRecherche;
    let rechercheDB = 'https://api.themoviedb.org/3/search/movie?api_key=' + apiKeyV3 + '&query=';

    function recherche() {
        let $filmRecherche = $recherche.val();
        let data = {
            api_key: apiKeyV3,
            language: langueDb,
            query: $filmRecherche,
            page: page
        };
        if ($filmRecherche !== "") {
            $.ajax({
                type: 'GET',
                url: theMovieDbUrl + '/search/movie',
                data: data,
                success: function (data, success, XMLHttpRequest) {
                    //console.log(data);
                    $resultat.find('.vignette').remove();
                    for (let i = 0; i < data.results.length; i++) {
                        let $constrution = $(
                            '<div class="vignette" ' +
                            'data-titre = "' + data.results[i].original_title + '" ' +
                            'data-ddsortie = "' + data.results[i].release_date + '" ' +
                            'data-img = "https://image.tmdb.org/t/p/w92/' + data.results[i].poster_path + '" ' +
                            'data-popuarity = "' + data.results[i].popularity + '" ' +
                            'data-note = "' + data.results[i].vote_average + '" ' +
                            'data-langue = "' + data.results[i].original_language + '" ' +
                            'data-resumeImg = "' + data.results[i].backdrop_path + '">' +
                            '<div class ="titre"><h2>' + data.results[i].original_title + '</h2></div>' +
                            '<div class="badge-content">' +
                            '<div class ="note">' + data.results[i].vote_average + '</div></div>' +
                            '<div class ="dateDeSortie" <p>RELEASED</p><p>' + data.results[i].release_date + '</p></div>' +
                            '<img class ="presentation" src="https://image.tmdb.org/t/p/w342'
                            + data.results[i].poster_path + '">' +
                            '<div class ="popularite" >' + data.results[i].popularity + '</div>' +
                            '<div class ="langueVo">' + data.results[i].original_language + '</div>' +
                            '<div class ="resume" data-langue ="' + data.results[i].original_language + '"><b>Résumé</b>' +
                            '<p>' + data.results[i].overview + '</p></div>' +
                            '<img class ="resumeImg" src="https://image.tmdb.org/t/p/w342' + data.results[i].backdrop_path + '">' +
                            '</div>'
                        );
                        console.log(data);
                        console.log(data.results[i]);
                        $constrution.appendTo($resultat);
                        // $titre.html(data.results[i].original_title);
                    }
                    $("div.vignette").draggable({
                        cursor: 'move',
                        helper: 'clone',
                        drag: function (event, ui) {
                            let cardDrag = $('<div class="card"><img src="' + $(this).attr('data-img') + '"></div>');
                            ui.helper.css('z-index', "999").html(cardDrag);
                        }
                    });
                    $basket.droppable({
                        tolerance: 'touch',
                        drop: function (event, ui) {
                            $basket.append($("<div>" + ui.draggable.find(".titre h2").html() + "</div>").css('borderBottom', '1px dotted red'));
                            $basket.append(ui.draggable.attr('data-note'));
                        }
                    });
                },
                error: function () {
                    alert('Error');
                },
            });
        }
    }

    $resume.dblclick(function () {
        console.log(this + $(this));
        /*let $this = $(this);
         $.speech({
         key: 'f08617cd26a24130af7ae959538389e1',
         src: $this.val(),
         hl: $this.attr('data-langue')+'-'+$this.attr('data-langue'),
         r: -1,
         c: 'mp3',
         f: '48 kHz, 16 Bit, Stereo',
         ssml: false
         });*/
    });
    $button.click(recherche);
    $recherche.focus().keyup(function (keyCode) {
        if (keyCode.key === "Enter") {
            recherche();
        }
    });
    $recherche.completion({
        url: theMovieDbUrl + '/search/movie',
        tableauDeCompletion: "results",
        completionProprity: 'original_title',
        api_key: apiKeyV3,
        langue: langueDb,
        page: page
    });
});

