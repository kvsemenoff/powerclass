

$(document).ready(function(){

   if(window.innerWidth <= 800 && window.innerHeight <= 600) {
        window.roistatLeadHunterInited = true;
    }
   $(".phone").mask("+7 (999) 999 - 99 - 99?");

   
    $('.db-menu a, .db-up_menu_menu a, .db-want, .db-podr, .db-tarif, .db-podr1, .db-tarif1').on("click", function(e){
        e.preventDefault();
        var $this = $(this), 
        $href = $this.attr('href'),
        $scrollTop = $($href).offset().top;

        $('html, body').animate({

            scrollTop: $scrollTop
        },
        1000
        );
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

    $("#owl-slider").owlCarousel({
        loop:true,
        dots:true,
        items:1,
        mouseDrag:true,
        touchDrag: true,
        nav:true,
        responsive:{
          770:{
            nav:false,
            items:3
        }
    }
});

    $('.tabs-content > .tab-content').each(function(index){
        if (index != 0) {
            $(this).css('display','none');
        };
    });

    $('.tab').click(function(){
    $('.tab').removeClass('active');
    $('.tabs-content').find('div').removeClass('active');
    $('.tabs-content > .tab-content').css('display','none');
    $(this).addClass('active');

    for (var i = 0; i < 4; i++) {
        if($('.tabs > .tab-' + i).hasClass('active')){
            $('.tabs-content > .tab-' + i).addClass('active');
    };
    
    $('.tabs-content > .active').css('display','block');
    };
});
$('#tb3 span').click();

     $('.individual').on('click', function(evt5){
            evt5.preventDefault();  
            $('html, body').animate({
                scrollTop: $(".shtraf").offset().top - 0
            }, 500);
      });

 });


