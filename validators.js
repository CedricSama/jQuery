(function ($) {
    $.fn.ValidateForm = function (options) {
        var defaults = {
            numeric: {
                RegEx: "^[0-9]*$", ErrorMsg: "Numeric only", mask: function () {
                }
            },
            numericRequis: {
                RegEx: "^[0-9]+$", ErrorMsg: "Numeric Required only", mask: function () {
                }
            }
        }
        this.find('input[vType]').each(function(){
            var Vtype = $(this).attr('vType');
            switch (Vtype){
                case "numeric":
                    if($(this).attr('ErrorMsg')==undefined){
                        $(this).attr('ErrorMsg',defaults['numeric']['ErrorMsg']);
                    }
                    $(this).attr('RegEx',defaults['numeric']['RegEx']);
                    //$(this).keypress();
                    $(this).keyup(_keyup);
                    break;
                case "numericRequis":
                    if($(this).attr('ErrorMsg')==undefined){
                        $(this).attr('ErrorMsg',defaults['numericRequis']['ErrorMsg']);
                    }
                    $(this).attr('RegEx',defaults['numericRequis']['RegEx']);
                    $(this).keyup(_keyup);
                    break;
            }
        });
        return this;
    }
})($)


function _keyup(){
    var  input = $(this);
    var NewVal = input.val();

    if((new RegExp(input.attr('RegEx'))).test(NewVal)){
        input.removeClass("invalid");
        input.addClass('valid');
        $(".error").remove();
    }else{
        input.removeClass("valid");
        input.addClass("invalid");
        _showMessage(input,input.attr('ErrorMsg'));
    }
}

function _showMessage(element,message){
    $(".error").remove();
    $('body').append('<div class="error"></div>');
    $('.error').css({
        position:'relative',
        top:element.offset().top+'px',
        left:element.offset().left+element.width()+10+"px",
    });
    //element.errorDiv =$(div);
    $('.error').html(message)
}
