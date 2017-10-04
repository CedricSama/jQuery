$(document).ready(function () {
    let chargement = $('.overlay');
    let post = $('#post_liste');

    chargement.append('<img src="https://68.media.tumblr.com/c11197ca08c86993ca389f19b7ad570f/tumblr_ol1kh1rVmx1vgjhono1_500.gif">').hide();

    /*$.getJSON('http://jsonplaceholder.typicode.com/posts',function (data, success,XMLHttpRequest) {

     });*/
    jQuery.ajax({
        type: 'GET',
        url: 'http://jsonplaceholder.typicode.com/posts',
        success: function (data, success, XMLHttpRequest) {
            console.log(data);
            for (let i = 0; i < data.length; i++) {
                $("<h2 class = 'title'>" + data[i].title + "</h2><div class = 'body'>" + data[i].body + "</div>" +
                    "<button Cedric ='" + data[i].id + "' class = 'modif'>Modifier</button>" +
                    "<button Cedric ='" + data[i].id + "' type ='button' class = 'supprimer'>Supprimer</button>").appendTo(post);
            }
            $('.modif').click(function () {
                let title = $(this).prev().prev().html();
                let body = $(this).prev().html();
                let id_button = $(this).attr('Cedric');
                $('input[type = hidden]').val(id_button);
                $('input[type = text]').val(title);
                $('textarea').val(body);
            });
            $('.supprimer').click(function (z) {
                let $this = $(this);
                let id = $(this).attr('Cedric');
                console.log(z);
                $.ajax({
                    url: "http://jsonplaceholder.typicode.com/posts/" + id,
                    type: "DELETE",
                    error: function () {
                        alert("error").show();
                    },
                    success: function () {
                        //console.log(arguments);
                        console.log($this);
                        $this.prev().prev().prev().remove();
                        $this.prev().prev().remove();
                        $this.prev().remove();
                        $this.remove();


                    }
                });
            });
            chargement.hide()
        },
        error: function () {
            alert("error").show();
        },
        beforeSend: function () {
            $('.overlay').show();
        }
    });
    /*    $.getScript('js.js',function () {
     console.log(arguments);
     });*/
    $('#modifier').click(function () {
        //console.log($('input[type = hidden]').val(i));
        let id = $('input[type = hidden]').val();
        $.ajax({
            url: "http://jsonplaceholder.typicode.com/posts/" + id,
            type: "PUT",
            data: {
                id: id,
                body: $("input[type = text]").val(),
                title: $("textarea").val()
            },
            error: function () {
                alert("error").show();
            },
            success: function (data) {
                console.log(arguments);
                let btn = $('button[id = ' + data.id + ']');
                btn.prev().html(data.title);
                btn.prev().prev().html(data.body);
            }
        });
    });

    $('input[id="add"]').click(function () {
        $.ajax({
            url: "http://jsonplaceholder.typicode.com/posts",
            type: "POST",
            data: {
                body: $("input[type = text]").val(),
                title: $("textarea").val()
            },
            error: function () {
                alert("error").show();
            },
            success: function (data) {
                console.log(arguments);
                $("<h2 class='title'>" + data.title + "</h2><div class='body'>" + data.body + "</div>").appendTo(post);
            }
        });
    });
});