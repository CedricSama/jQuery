
$(document).ready(function () {
    let apiKey = "b3316faa57d1e8c9bed3af88534fc6ad";
    let movieDbUrl = 'https://api.themoviedb.org/3';
    let movieDbImgUrl = 'https://image.tmdb.org/t/p';
    let movieDbLang = "fr-FR";
    let movieDbCurentPage = 1;
    let sizes =  ["92","154","185","342","500","780"];
    let data = {
        api_key: apiKey,
        language: movieDbLang,
        query: encodeURIComponent($filmRecherche),
        page: movieDbCurentPage
    };
    if ($filmRecherche !== "") {
        $.ajax({
            type: 'GET',
            url: theMovieDbUrl + '/search/movie',
            data: data,
            success: function (data, success, XMLHttpRequest) {},
            error: function () {
                alert('Error');
            },
        })}
    function generateHtmlFor(movies) {
        let html = '';

    }
});

$('div[data-movie = movie]').draggable({
    cursor:'movie',
    helper:'clone',
    drag:function (event, ui) {
       ui.helper.css('z-index','999').find('div').hide();/*'div" correspond a la div quui devra etre la photo*/
    }
});