console.log('Script ok');
$(document).ready(
    function () {
        $(".accordeon > div").hide();
        function enroulement() {
            if (!$(this).hasClass('active')) {
                $(this).next().slideToggle('fast');
                $("div").find('h2.active').removeClass('active').next().slideToggle();
                $(this).addClass('active');
            } else {
                $('h2.active').removeClass('active').next().slideToggle('fast');
            }
        }
        $('.accordeon h2').click(enroulement);
    }
);