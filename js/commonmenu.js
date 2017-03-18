

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
        	$('.perviyosobiy').addClass('dfactivelink');

        }

        $('.dftabtop').hide();
        var tab = $(this).attr('href');
        $('.dftabtop').not(tab).slideUp(200);
        $(tab).slideDown(300);

       
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


    // , '.dfitogo .dfkkal' , '.dfweak a'

    $('.dfdaysmenu a').on('click', function(e){
             var active = $(this).attr('href');
             var days = $(this).text().toLowerCase();   
            $('.dftxtitogo1 em').text(days+': ');    

            var belki = $(active).find('.dfmenuproductbox')
            .find('.dfmenucharacteristic')
            .find('.dfcharmenu1')
            .find('.belki');   

             var masbelki = []; 
             var number = 0;     

             $(belki).each(function(index, el) {
                masbelki.push( $(this).text().replace(/[^-0-9]/gim,'') );
             });             

             if ($('.df3priem').hasClass('df3priemactive')) {
                 masbelki.splice(0, 1);
                 masbelki.pop();
             }


             for(var i = 0; i < masbelki.length; i++){
                   number+= +masbelki[i];
             }


             // alert(number);
             $('.dfbelki').text(number + " ");

            ////////////////////////////////

            var jiry = $(active).find('.dfmenuproductbox')
            .find('.dfmenucharacteristic')
            .find('.dfcharmenu1')
            .find('.jiry');  

             var masjiry = []; 
             number = 0;     

             $(jiry).each(function(index, el) {
                masjiry.push( $(this).text().replace(/[^-0-9]/gim,'') );
             });             

             if ($('.df3priem').hasClass('df3priemactive')) {
                 masjiry.splice(0, 1);
                 masjiry.pop();
             }


             for(var i = 0; i < masjiry.length; i++){
                   number+= +masjiry[i];
             }
            
             $('.dfjiri').text(number + " ");


             /////////////////////////

            var yglevodi = $(active).find('.dfmenuproductbox')
            .find('.dfmenucharacteristic')
            .find('.dfcharmenu1')
            .find('.yglevodi');

             var masyglevodi = []; 
             number = 0;     

             $(yglevodi).each(function(index, el) {
                masyglevodi.push( $(this).text().replace(/[^-0-9]/gim,'') );
             });             

              if ($('.df3priem').hasClass('df3priemactive')) {
                 masyglevodi.splice(0, 1);
                 masyglevodi.pop();
              }


             for(var i = 0; i < masyglevodi.length; i++){
                   number+= +masyglevodi[i];
             }
             
             $('.dfyglevodi').text(number + " ");


             ////////////////////////////

             var kkal = $(active).find('.dfmenuproductbox')
            .find('.dfmenucharacteristic')
            .find('.dfkkal');
            

             var maskkal = []; 
             number = 0;     

             $(kkal).each(function(index, el) {
                maskkal.push( $(this).text().replace(/[^-0-9]/gim,'') );
             });             

              if ($('.df3priem').hasClass('df3priemactive')) {
                 maskkal.splice(0, 1);
                 maskkal.pop();
              }

             for(var i = 0; i < maskkal.length; i++){
                   number+= +maskkal[i];
             }
             
             $('.dfkkalitogo').text(number + " ");
     });

////////////////////////////////////////////////////////


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
  
        $('.dfmenuproducts').not(attrlink).hide(20);
        $(attrlink).show(10);

    });
     $('.jsweakactive').click();



     


     $('.df3priem').on('click', function(evt3){
     		evt3.preventDefault();
     		$('.df5priemactive').removeClass('df5priemactive');
     		$('.dfmenuproducts > .dfmenuproductbox:nth-child(1)').addClass('jsdisabled');	
     		$('.dfmenuproducts > .dfmenuproductbox:nth-child(5)').addClass('jsdisabled');
     		$(this).addClass('df3priemactive');

            $('.jsweakactive').click();

     });

      $('.df5priem').on('click', function(evt4){
     		evt4.preventDefault();
     		$('.df3priemactive').removeClass('df3priemactive');
     		$('.jsdisabled').removeClass('jsdisabled');	  
     		$(this).addClass('df5priemactive');  

            $('.jsweakactive').click(); 		
     });



      $('.dflinktarif').on('click', function(evt5){
      		evt5.preventDefault();	
      		$('html, body').animate({
		        scrollTop: $(".tarif").offset().top - 0
		    }, 500);
      });



	//////////////////////mobileversion==========




	$('.dfblockmenu').hide();


    $('.dfborder a').on('click', function(e) {
        e.preventDefault();

       
        $('.dfactivelinkmob').removeClass('dfactivelinkmob');       	

        $(this).parent('.dfborder').addClass('dfactivelinkmob');

        $('.dftabmob').hide();
        var tab = $(this).attr('href');
        $('.dftabmob').not(tab).hide(20);
        $(tab).show(10);

       
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



        // , '.dfitogo .dfkkal' , '.dfweak a'

    $('.dfweak a').on('click', function(e){
             var active = $(this).attr('href');
             // var days = $(this).text().toLowerCase();   
            // $('.dfitogo .dfkkal').text(days+': ');    

            var belki = $(active).find('.dfmenubox1')
            .find('.dfmenutxt')
            .find('.dfcharmenu1')
            .find('.belki');   

             var masbelki = []; 
             var number = 0;     

             $(belki).each(function(index, el) {
                masbelki.push( $(this).text().replace(/[^-0-9]/gim,'') );
             });             

             
             if ($('.df3').hasClass('df3active')) {
                 masbelki.splice(0, 1);
                 masbelki.pop();
              }


             for(var i = 0; i < masbelki.length; i++){
                   number+= +masbelki[i];
             }

             $('.dfbelkimob').text(number + " ");

            ////////////////////////////////

             var jiry = $(active).find('.dfmenubox1')
            .find('.dfmenutxt')
            .find('.dfcharmenu1')
            .find('.jiry');    

             var masjiry = []; 
             number = 0;     

             $(jiry).each(function(index, el) {
                masjiry.push( $(this).text().replace(/[^-0-9]/gim,'') );
             });             

             if ($('.df3').hasClass('df3active')) {
                 masjiry.splice(0, 1);
                 masjiry.pop();
              }


             for(var i = 0; i < masjiry.length; i++){
                   number+= +masjiry[i];
             }
            
             $('.dfjirimob').text(number + " ");


            //  /////////////////////////

             var yglevodi = $(active).find('.dfmenubox1')
            .find('.dfmenutxt')
            .find('.dfcharmenu1')
            .find('.yglevodi');  

             var masyglevodi = []; 
             number = 0;     

             $(yglevodi).each(function(index, el) {
                masyglevodi.push( $(this).text().replace(/[^-0-9]/gim,'') );
             });             

              if ($('.df3').hasClass('df3active')) {
                 masyglevodi.splice(0, 1);
                 masyglevodi.pop();
              }


             for(var i = 0; i < masyglevodi.length; i++){
                   number+= +masyglevodi[i];
             }
             
             $('.dfyglevodimob').text(number + " ");


            //  ////////////////////////////

            var kkal = $(active).find('.dfmenubox1')
            .find('.dfmenutxt')           
            .find('.dfkkal');
            

             var maskkal = []; 
             number = 0;     

             $(kkal).each(function(index, el) {
                maskkal.push( $(this).text().replace(/[^-0-9]/gim,'') );
             });             

              if ($('.df3').hasClass('df3active')) {
                 maskkal.splice(0, 1);
                 maskkal.pop();
              }

             for(var i = 0; i < maskkal.length; i++){
                   number+= +maskkal[i];
             }
             
             $('.dfkkalmob').text(number + " ");
     });

////////////////////////////////////////////////////////





     $('.dfweak a').on('click', function(evt){
    	evt.preventDefault();

    	$('.jsmobactive').removeClass('jsmobactive');
    	$(this).addClass('jsmobactive');


    	var attrlink2 = $(this);
    	var attrlink3 = $(this).attr('href');
  
        $('.dfblockmenu').not(attrlink3).hide(20);
        $(attrlink3).show(10);

    });
     $('.jsmobactive').click();




     $('.df3').on('click', function(evt3){
     		evt3.preventDefault();
     		$('.df5active').removeClass('df5active');
     		$('.dfblockmenu > .dfmenubox1:nth-child(1)').addClass('jsdisabled2');	
     		$('.dfblockmenu > .dfmenubox1:nth-child(5)').addClass('jsdisabled2');
     		$(this).addClass('df3active');

             $('.jsmobactive').click();

     });

      $('.df5').on('click', function(evt4){
     		evt4.preventDefault();
     		$('.df3active').removeClass('df3active');
     		$('.jsdisabled2').removeClass('jsdisabled2');	  
     		$(this).addClass('df5active'); 

             $('.jsmobactive').click();  		
     });



});