

$(document).ready(function(){
$(this).scroll(function(){
    var $this = $(this), 
        sT = $this.scrollTop();
        console.log(sT);
    if(sT > 0){
        $('.db-menu').css("background", "black");
    }
    else{
       $('.db-menu').css("background", "unset"); 
    }

});

$('.db-burger').on("click", function(){
    $('.db-up_menu_menu').slideToggle();
});
    $('.az-select').each(function(){
        var select = $(this);    
        var option = select.find('select option');
        var str = '<div class="az-options">';
        select.find('option').each(function(){
            str+= '<div data-val="' +$(this).val() + '">' + $(this).text() + '</div>'
        });
        str+= '</div>';
        select.html(select.html() + str);

        select.find('select').mousedown(function(){
            return false;
        });
        select.mouseup(function(){
            select.find('select').focus();
        });
        select.find('.az-options div[data-val]').click(function(){
            select.find('select').val($(this).attr('data-val'));
        });
        select.find('select').focusout(function(){
            if(!select.is(':hover')){
                select.find('.az-options').slideUp(0);
                select.removeClass('az-select-focus');
            }
        });
    });

    $(".az-select").click(function(){
        $(this).find('.az-options').slideToggle(0);
        $(this).toggleClass('az-select-focus');
    });

 });


