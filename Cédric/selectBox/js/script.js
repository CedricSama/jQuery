function Ready() {
    let slt = $('select');
    {
        $('<div class="custom_select">' +
            '<div class="btn"></div>' +
            '<div class="liste"></div>' +
            '</div>').insertBefore(slt);
    }
    let liste = $('.custom_select .liste');
    let bouton = $('.custom_select .btn');
    slt.hide();
    liste.hide();
   //'</div>').insertBefore($('select'));

    $('.custom_select').each(function () {
        let combo = $(this).next();
        let ul = '<ul>';
        $(this).find('.btn').html(combo.find(':selected').html());
        combo.find('option').each(function () {
            ul += '<li><a href="#" data-custom_val ="' + $(this).val() + ' ">' + $(this).html() + '</a></li>'
        });
        ul += "</ul>";
        $(this).find('.liste').html(ul);
    });
    bouton.click(function () {
        liste.hide();
        $(this).next().toggle();
    });
    $('a[custom_val]').click(function () {
        let value = $(this).attr('custom_val'), DisplayVal = $(this).html();
        let list = $(this).parent().parent().parent();
        /*        $(this).parent().parent().parent().parent().next().val(value);
         $(this).parent().parent().parent().prev().html(DisplayVal);
         $(this).parent().parent().parent().toggle();*/
        list.parent().next().val(value);
        list.prev().html(DisplayVal);
        list.toggle();
    });
    $('input[type = submit]').click(function (z) {
        z.preventDefault();
        $('select').each(function () {
            console.log($(this).val());
        });
    })
}
$(document).ready(Ready);