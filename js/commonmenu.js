

$(document).ready(function(){
	$('.dfmenuproducts').hide();


    $('.dfcaloryesbox a').on('click', function(e) {
        e.preventDefault();

        var ind = $('.dfcaloryesbox a').index(this);
      
        $('.dfactivelink2').removeClass('dfactivelink2');
        $('.dfactivelink').removeClass('dfactivelink');       	

        $(this).parents('.dfcaloryesbox').addClass('dfactivelink2');

        	//4
        if (ind===0) {
        	$('.dfactivelink2').removeClass('dfactivelink2');
        	$('.osobiy').addClass('dfactivelink');

        }

        $('.dftabtop').hide();
        var tab = $(this).attr('href');
        $('.dftabtop').not(tab).hide(100);
        $(tab).fadeIn(100);

       
      if ($('#jsfit').css('display')==='block') { 	    
				
			    var id = "";
				$('#jsfit .dfmenuproducts').each(function() {
					id = $(this).attr('id');					
				});

				$('.dfoneclass').each(function(index) {
					index +=1;
					$(this).attr('href', '#jsfitfood' + index);
				});			     		
			 	
    	}
    	else if($('#jsfitplus').css('display')==='block'){
    			
    			var id = "";
				$('#jsfitplus .dfmenuproducts').each(function() {
					id = $(this).attr('id');					
				});

				$('.dfoneclass').each(function(index) {
					index +=1;
					$(this).attr('href', '#jsfitplusfood' + index);
				});
    	}
    	else if($('#jssport').css('display')==='block'){
    			
    			var id = "";
				$('#jssport .dfmenuproducts').each(function() {
					id = $(this).attr('id');					
				});

				$('.dfoneclass').each(function(index) {
					index +=1;
					$(this).attr('href', '#jssportfood' + index);
				});
    	}
    	else if($('#jssportplus').css('display')==='block'){
    			
    			var id = "";
				$('#jssportplus .dfmenuproducts').each(function() {
					id = $(this).attr('id');
									
				});

				$('.dfoneclass').each(function(index) {
					index +=1;
					$(this).attr('href', '#jssportplusfood' + index);
				});
    	}
       
        $('.jsweakactive').click();
    });

    $('.osobiy a').click();


    $('.dfmenuprev').on('click', function(evt1){
    	evt1.preventDefault();    	 
    	
    	 if ($('.first a').hasClass('jsweakactive')) {
    	 		return false;
    	 }else{
    	 	$(this).next('ul')
    	 		.find('.jsweakactive')
    	 		.removeClass('jsweakactive')
    	 		.parent()
    	 		.prev()
    	 		.find('a')
    	 		.addClass('jsweakactive');
    	 }
    	  $('.jsweakactive').click();
    });


    $('.dfmenunext').on('click', function(evt2){
    	evt2.preventDefault();     		

    	 if ($('.last a').hasClass('jsweakactive')) {
    	 		return false;
    	 }else{
    	 	 $(this).prev('ul')
    	 		.find('.jsweakactive')
    	 		.removeClass('jsweakactive')
    	 		.parent().next()
    	 		.find('a')
    	 		.addClass('jsweakactive');	
    	 }    		
    	 $('.jsweakactive').click();
    });

    $('.dfdaysmenu a').on('click', function(evt){
    	evt.preventDefault();

    	$('.jsweakactive').removeClass('jsweakactive');
    	$(this).addClass('jsweakactive');


    	var attrlink2 = $(this);
    	var attrlink = $(this).attr('href');
  
        $('.dfmenuproducts').not(attrlink).fadeOut(100);
        $(attrlink).show(100);

    });
     $('.jsweakactive').click();


     $('.df3priem').on('click', function(evt3){
     		evt3.preventDefault();
     		$('.df5priemactive').removeClass('df5priemactive');
     		$('.dfmenuproducts > .dfmenuproductbox:nth-child(1)').addClass('jsdisabled');	
     		$('.dfmenuproducts > .dfmenuproductbox:nth-child(5)').addClass('jsdisabled');
     		$(this).addClass('df3priemactive');

     });

      $('.df5priem').on('click', function(evt4){
     		evt4.preventDefault();
     		$('.df3priemactive').removeClass('df3priemactive');
     		$('.jsdisabled').removeClass('jsdisabled');	  
     		$(this).addClass('df5priemactive');   		
     });



      $('.dflinktarif').on('click', function(evt5){
      		evt5.preventDefault();	
      		$('html, body').animate({
		        scrollTop: $(".tarif").offset().top - 0
		    }, 500);
      });



	//////////////////////mobversion==========




	$('.dfblockmenu').hide();


    $('.dfborder a').on('click', function(e) {
        e.preventDefault();

       
        $('.dfactivelinkmob').removeClass('dfactivelinkmob');       	

        $(this).parent('.dfborder').addClass('dfactivelinkmob');

        

        $('.dftabmob').hide();
        var tab = $(this).attr('href');
        $('.dftabmob').not(tab).hide(100);
        $(tab).fadeIn(100);

       
      	if ($('#js-fitmob').css('display')==='block') { 	    
				
			    var id = "";
				$('#js-fitmob .dfblockmenu').each(function() {
					id = $(this).attr('id');					
				});

				$('.dfonelinkmob').each(function(index) {
					index +=1;
					$(this).attr('href', '#js-fitmobfood' + index);
				});			     		
			 	
    	}
    	else if($('#js-fitplusmob').css('display')==='block'){
    			
    			var id = "";
				$('#js-fitplusmob .dfblockmenu').each(function() {
					id = $(this).attr('id');					
				});

				$('.dfonelinkmob').each(function(index) {
					index +=1;
					$(this).attr('href', '#js-fitplusmobfood' + index);
				});
    	}
    	else if($('#js-sportmob').css('display')==='block'){
    			
    			var id = "";
				$('#js-sportmob .dfblockmenu').each(function() {
					id = $(this).attr('id');					
				});

				$('.dfonelinkmob').each(function(index) {
					index +=1;
					$(this).attr('href', '#js-sportmobfood' + index);
				});
    	}
    	else if($('#js-sportplusmob').css('display')==='block'){
    			
    			var id = "";
				$('#js-sportplusmob .dfblockmenu').each(function() {
					id = $(this).attr('id');									
				});

				$('.dfonelinkmob').each(function(index) {
					index +=1;
					$(this).attr('href', '#js-sportplusmobfood' + index);
				});
    	}
       
        $('.jsmobactive').click();
    });

    $('.osobiymob a').click();


     $('.dfweak a').on('click', function(evt){
    	evt.preventDefault();

    	$('.jsmobactive').removeClass('jsmobactive');
    	$(this).addClass('jsmobactive');


    	var attrlink2 = $(this);
    	var attrlink3 = $(this).attr('href');
  
        $('.dfblockmenu').not(attrlink3).fadeOut(100);
        $(attrlink3).show(100);

    });
     $('.jsmobactive').click();




     $('.df3').on('click', function(evt3){
     		evt3.preventDefault();
     		$('.df5active').removeClass('df5active');
     		$('.dfblockmenu > .dfmenubox1:nth-child(1)').addClass('jsdisabled');	
     		$('.dfblockmenu > .dfmenubox1:nth-child(5)').addClass('jsdisabled');
     		$(this).addClass('df3active');

     });

      $('.df5').on('click', function(evt4){
     		evt4.preventDefault();
     		$('.df3active').removeClass('df3active');
     		$('.jsdisabled').removeClass('jsdisabled');	  
     		$(this).addClass('df5active');   		
     });



});