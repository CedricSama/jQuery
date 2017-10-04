console.log('Script Loaded');
$(document).ready(
    function () {
        $('body').append('<div class="loupe"></div>');
        let aspectLoupe = {
            wLoupe: 100,
            hLoupe: 100,
            loupeRadius: "50%"
        };
        let loupe = $('.loupe').css({
            'border-radius': aspectLoupe.loupeRadius,
            'width': aspectLoupe.wLoupe + 'px',
            'height': aspectLoupe.hLoupe + 'px',
            'border': '1px solide red',
            'position': 'absolute',
            'background-image': "url(" + $(".zoom_big").attr("src") + ")"
        });
        let small = $('.zoom_small');
        let offSetLeft = small.offset().left;
        let offSetTop = small.offset().top;
        let wSmall = small.width();
        let hSmall = small.height();
        loupe.hide();
        small.mouseenter(function () {
            loupe.show();
        });
        small.mouseout(function () {
            loupe.hide();
        });
        small.mousemove(function (event) {
            let x = event.clientX - offSetLeft;
            let y = event.clientY - offSetTop;
            let kX = (x / wSmall) * 100;
            let kY = (y / hSmall) * 100;
            loupe.css({
                'left': event.clientX + "px",
                'top': event.clientY + "px",
                'background-position': kX + '% ' + kY + '%'
            })
        })


    }
);
