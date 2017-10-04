function _ShowHideOnScroll(start) {

    if ($(window).scrollTop() >= start) {
        $('#backtotop').fadeIn("slow");
    } else {
        $('#backtotop').fadeOut("slow");
    }
}
function BackToTopPluging($) {

    $.fn.backToTop = function (options) {

        this.append('<div id="backtotop">^</div>');

        let defaults = {
            duration: 500,
            start: 80,
            position: 'right'
        };
        let config = $.extend(defaults, options);
        let bttp = $('#backtotop');

        bttp.css(config.position, "50px").css("bottom", "25px");
        _ShowHideOnScroll(config.start);

        $(window).scroll(function () {
            _ShowHideOnScroll(config.start);
        });
        bttp.click(function () {
            let ratio = $(window).scrollTop() / $('body').height();
            $('html, body').animate({'scrollTop': 0}, ratio * config.duration);
            //$('div').animate({"width":"10%"}, config.duration);
        });
        return this;
    }
}
BackToTopPluging($);
/*****************************************************************************************************/
$(document).ready(function () {
    console.log("Script Ready");
    $('body').backToTop({
        duration: 6000,
        start: 150,
    });
});