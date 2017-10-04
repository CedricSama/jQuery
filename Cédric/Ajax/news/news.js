$(document).ready(function () {
    //console.log("Script Loaded");
    let chargement = $('.overlay');
    let $liste = $('select#news');
    let $titre = $('#titre');
    let $article = $('#affichage');
    chargement.append('<img src="https://68.media.tumblr.com/c11197ca08c86993ca389f19b7ad570f/tumblr_ol1kh1rVmx1vgjhono1_500.gif">');
    //$.get("https://newsapi.org/v1/sources", function (data, success, XMLHttpRequest) {
    //console.log(data);
    //let $liste = $('select#news');
    $.ajax({
        type: 'GET',
        url: 'https://newsapi.org/v1/sources',
        beforeSend: function () {
            chargement.show();
            $liste.hide();
        },
        error: function () {
            alert("error").show();
        },
        success: function (data, success, XMLHttpRequest) {
            //console.log(data);
            for (let i = 0; i < data.sources.length; i++) {
                //console.log(data.sources.name[i]);
                $liste.append('<option>' + data.sources[i].name + '</option>');
                chargement.hide();
                $liste.show();
            }
            $titre.html(data.sources[0].name);
            $liste.change(function () {
                for (let i = 0; i < data.sources.length; i++) {
                    if ($liste.val() === data.sources[i].name){
                        $article.attr('src',data.sources[i].url);
                    }
                }
                $titre.html($(this).val());
                console.log(data);

            });
        }
    });
    //$liste.append('<option>' + data.sources.name + '</option>' );
});