console.log('script loded');
$(document).ready(
    function () {
        console.log('document chargé');
        console.log('document.getElementById', document.getElementById('div1'));
        console.log('jQuery By Id', jQuery('#div1'));
        console.log('jQuery ByClassName', jQuery('.div'));
        console.log('jQuery Body Div', $('body div'));


        const div1 = $('#div1');
        const div2 = $('.div2');
        div1.css('background-color', 'red');
        div1.css('height', '100px');
        div1.css('width', '100px');
        div1.height(200);
        div1.width(200);
        div2.css({
            'background': 'blue',
            'border-radius': '50%',
            'height': "150px",
            'width': '150px'
        });
        console.log(div1.height());
        console.log(div2.height());
        $("ul li a").css('color', 'red');
        $("ul li:first-child a").css('color', 'blue');
        $('h1').html("jQuery Introduction").css('color', 'green');
        console.log(jQuery('h1').html());
        $('ul li').last().hide();
        $('ul li:nth-child(2)').next().next().show();
        jQuery('ul li:nth-child(2)').prev().html("GOOGLE").css('color','black');
        $('#link2').click(function (event){
            event.preventDefault();
            if(jQuery('h1').html() === "jQuery is clicked !!!"){
            $('h1').html('jQuery Introduction');
            $('h1').eq(1).css('color','red');
            div1.show('slow');
            }else {
                $('h1').html('jQuery is clicked !!!');
                $('#div1').slideToggle('slow');
            }
        });
        function onMouseOver() {
            this.style.backgroundColor = "pink";
        }
        let onMouseLeave = function () {
            this.style.backgroundColor = "inherit";
        };
        function toggleTheme() {
            $('ul li').eq(1).toggleClass("pink", false)
        }

        //$('ul li').eq(1).mouseover(onMouseOver);
        //$('ul li').eq(1).mouseleave(onMouseLeave);
        $('ul li').eq(1).mouseover(toggleTheme);
        $('ul li').eq(1).mouseleave(toggleTheme);
    }
);