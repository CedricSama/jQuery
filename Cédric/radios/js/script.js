$(document).ready(function () {
    console.log('Script Loaded');
    let inputRadio = $('input[type = "radio"]');

    $('label').click(function (e) {
        e.preventDefault();
    });
    inputRadio.each(function () {
        $(this).hide();
        $('<img src="img/radio_off.png" class = "myRadioBox">').insertBefore($(this));
    });
    {
        $('.myRadioBox').click(function () {
            let radioBox = $(this).next().attr("name");
            $('input[name='+ name +']:checked').prev().attr('href');
            //console.log(checkBox.is(':checked'));
            if (radioBox.is(':checked')) {
                radioBox.prop('checked', false);
                this.src = 'img/radio_off.png';
            } else {
                radioBox.prop('checked', true);
                this.src = 'img/radio_on.png';
            }
            /*inputCheckBox.click(function (e) {
             e.preventDefault();
             let res = [];
             //console.log(this);
             $('input[type = checkbox]:checked').each(function () {
             //console.log(this);
             res.push($(this).val());
             //console.log(res);
             })
             })*/
        })
    }
});