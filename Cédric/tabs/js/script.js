console.log('Script ok');
$(document).ready(
    function () {
        let maLi = $('#tabs ul li');
        let href = (maLi.find('a').attr('href'));
        $(maLi.first().addClass('active').find('a').attr('href')).show();
        //let blabla = $($(this).addClass('active').find('a').attr('href')).hide();
        function activation() {
            if (!$(this).hasClass('active')) {
                $('li.active').removeClass('active');
                $(this).toggleClass('active');
            }else {
                $(this).toggleClass('active');
            }
        }
        function affichage() {


        }

        /*function affichage() {
         }*/
        $('ul li').click(activation);
    }
);