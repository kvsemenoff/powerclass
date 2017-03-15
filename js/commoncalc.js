$(document).ready(function(){
 var male="",
	cel="", 
	age="", 
	rost="", 
	mass="", 
	activity="", 
	food="", 
	days="";

	$('.shtraf__btn, #jsonline').on('click', function(e){

		if ($('#jstarif1').css('display')==='block') {
			male += $(this).attr('pol');
		}
		else if($('#jstarif3').css('display')==='block'){

			if ($('#jsage').val() >= 99 || $('#jsage').val() <= 12) {
				$('#jsage').addClass('disabledinputjs');
				$(this).addClass('disabledjs');	
			}else if($('#jsrost').val() >= 300 || $('#jsrost').val() <= 50){
				$('#jsrost').addClass('disabledinputjs');
				$(this).addClass('disabledjs');		
			}else if($('#jsmass').val() >= 300 || $('#jsmass').val() <= 30){
				$('#jsmass').addClass('disabledinputjs');
				$(this).addClass('disabledjs');		
			}else{
				$(this).removeClass('disabledjs');
				age += $(this).parents('.btn-wrap').find('#jsage').val();
				rost += $(this).parents('.btn-wrap').find('#jsrost').val();
				mass += $(this).parents('.btn-wrap').find('#jsmass').val();
			}

			
		}
		else if($('#jstarif4').css('display')==='block'){
			activity +=	$(this).attr('activity');
		}
		else if($('#jstarif5').css('display')==='block'){
			food += $(this).attr('myfood');
			$('.jsrazdney b').text(food);
			$('.jsklientfood').val(food);
			
		}
		else if($('#jstarif6').css('display')==='block'){
			days += $(this).attr('days');
			$('.jsrazdney em').text(days);
			$('.jsklientdays').val(days);
		}
		
		if (!$('.shtraf__btn').hasClass('disabledjs')) {
			$(this).parents('.shtraf-item').hide().next().show();
		}
	

		if ($('#jstarif7').css('display')==='block') {

			if (male==5) {
				var itogo = (10 * +mass + 6.25 * +rost - 5 * +age + 5) * +activity;
				$('.jsitogo').text(Math.round(itogo));
				$('.jskkalklient').val(itogo);


				if (itogo <= 1400) {
					$('.end__tarif').text('Фит');
					$('.jskkalday b').text('1400');
					if (food==3 && days==5) {
						$('.end__price span b').text('3450');
						$('.end__price i em').text('690');
					}else if(food==5 && days==5){
						$('.end__price span b').text('4200');
						$('.end__price i em').text('840');
					}
					else if(food==3 && days==7){
						$('.end__price span b').text('4802');
						$('.end__price i em').text('686');
					}
					else if(food==5 && days==7){
						$('.end__price span b').text('5852');
						$('.end__price i em').text('836');
					}
				}
				else if(itogo > 1400 && itogo <= 1700){
					$('.end__tarif').text('Фит плюс');
					$('.jskkalday b').text('1700');	
					if (food==3 && days==5) {
						$('.end__price span b').text('3800');
						$('.end__price i em').text('760');
					}else if(food==5 && days==5){
						$('.end__price span b').text('4700');
						$('.end__price i em').text('940');
					}
					else if(food==3 && days==7){
						$('.end__price span b').text('5300');
						$('.end__price i em').text('757');
					}
					else if(food==5 && days==7){
						$('.end__price span b').text('6600');
						$('.end__price i em').text('943');
					}
				}
				else if(itogo > 1700 && itogo <= 2500){
					$('.end__tarif').text('Спорт');	
					$('.jskkalday b').text('2500');
					if (food==3 && days==5) {
						$('.end__price span b').text('4600');
						$('.end__price i em').text('920');
					}else if(food==5 && days==5){
						$('.end__price span b').text('5850');
						$('.end__price i em').text('1170');
					}
					else if(food==3 && days==7){
						$('.end__price span b').text('6405');
						$('.end__price i em').text('915');
					}
					else if(food==5 && days==7){
						$('.end__price span b').text('8204');
						$('.end__price i em').text('1172');
					}
				}
				else if(itogo > 2500 && itogo <= 3500){
					$('.end__tarif').text('Спорт плюс');
					$('.jskkalday b').text('3500');	
					if (food==3 && days==5) {
						$('.end__price span b').text('5650');
						$('.end__price i em').text('1130');
					}else if(food==5 && days==5){
						$('.end__price span b').text('7400');
						$('.end__price i em').text('1480');
					}
					else if(food==3 && days==7){
						$('.end__price span b').text('9910');
						$('.end__price i em').text('1130');
					}
					else if(food==5 && days==7){
						$('.end__price span b').text('8204');
						$('.end__price i em').text('1172');
					}
				}


			}else {


				var itogo = (10 * +mass + 6.25 * +rost - 5 * +age - 161) * +activity;
				$('.jsitogo').text(Math.round(itogo));
				$('.jskkalklient').val(itogo);
				


				if (itogo <= 1400) {
					$('.end__tarif').text('Фит');
					$('.jskkalday b').text('1400');
					if (food==3 && days==5) {
						$('.end__price span b').text('3450');
						$('.end__price i em').text('690');
					}else if(food==5 && days==5){
						$('.end__price span b').text('4200');
						$('.end__price i em').text('840');
					}
					else if(food==3 && days==7){
						$('.end__price span b').text('4802');
						$('.end__price i em').text('686');
					}
					else if(food==5 && days==7){
						$('.end__price span b').text('5852');
						$('.end__price i em').text('836');
					}
				}
				else if(itogo > 1400 && itogo <= 1700){
					$('.end__tarif').text('Фит плюс');
					$('.jskkalday b').text('1700');	
					if (food==3 && days==5) {
						$('.end__price span b').text('3800');
						$('.end__price i em').text('760');
					}else if(food==5 && days==5){
						$('.end__price span b').text('4700');
						$('.end__price i em').text('940');
					}
					else if(food==3 && days==7){
						$('.end__price span b').text('5300');
						$('.end__price i em').text('757');
					}
					else if(food==5 && days==7){
						$('.end__price span b').text('6600');
						$('.end__price i em').text('943');
					}
				}
				else if(itogo > 1700 && itogo <= 2500){
					$('.end__tarif').text('Спорт');	
					$('.jskkalday b').text('2500');
					if (food==3 && days==5) {
						$('.end__price span b').text('4600');
						$('.end__price i em').text('920');
					}else if(food==5 && days==5){
						$('.end__price span b').text('5850');
						$('.end__price i em').text('1170');
					}
					else if(food==3 && days==7){
						$('.end__price span b').text('6405');
						$('.end__price i em').text('915');
					}
					else if(food==5 && days==7){
						$('.end__price span b').text('8204');
						$('.end__price i em').text('1172');
					}
				}
				else if(itogo > 2500 && itogo <= 3500){
					$('.end__tarif').text('Спорт плюс');
					$('.jskkalday b').text('3500');	
					if (food==3 && days==5) {
						$('.end__price span b').text('5650');
						$('.end__price i em').text('1130');
					}else if(food==5 && days==5){
						$('.end__price span b').text('7400');
						$('.end__price i em').text('1480');
					}
					else if(food==3 && days==7){
						$('.end__price span b').text('9910');
						$('.end__price i em').text('1130');
					}
					else if(food==5 && days==7){
						$('.end__price span b').text('8204');
						$('.end__price i em').text('1172');
					}
				}
			}
		}

	});

	
	$('.nav a i').on("click", function(){
		$(this).parents('.shtraf-item').hide().prev().show();
	});





	//============================mobversion

	$('#jsrasschitat').on('click', function(event) {
		var malemob="",
		celmob="", 
		agemob="", 
		rostmob="", 
		massmob="", 
		activitymob="", 
		foodmob="", 
		daysmob="";

		event.preventDefault();

		malemob +=  $(this).prevAll('.select-wrap')
				.find('.jsselected1')
				.find('option:selected')
				.attr('polmob');

		agemob +=  $(this).prevAll('.select-wrap')
				.find('#agemob')				
				.val();	

		rostmob +=  $(this).prevAll('.select-wrap')
				.find('#rostmob')				
				.val();	

		massmob +=  $(this).prevAll('.select-wrap')
				.find('#massmob')				
				.val();			

		activitymob +=  $(this).prevAll('.select-wrap')
				.find('.jsselected2')
				.find('option:selected')
				.attr('activitymob');
				
		foodmob +=  $(this).prevAll('.select-wrap')
				.find('.jsselected3')
				.find('option:selected')
				.attr('myfoodmob');
				
		daysmob +=  $(this).prevAll('.select-wrap')
				.find('.jsselected4')
				.find('option:selected')
				.attr('daysmob');

		$('.jsrazdneymob b').text(foodmob);		
		$('.jsrazdneymob em').text(daysmob);

		$('.jsklientfoodmob').val(foodmob);		
		$('.jsklientdaysmob').val(daysmob);
	
	if (malemob==5) {
		var itogomob = (10 * +massmob + 6.25 * +rostmob - 5 * +agemob + 5) * +activitymob;

		$('.subtitle i').text(Math.round(itogomob));
		$('.jskkalklientmob').val(itogomob);

				if (itogomob <= 1400) {
					$('.jsmobtarif').text('Фит');
					$('.jsmobkallday b').text('1400');
					if (foodmob==3 && daysmob==5) {
						$('.jspricemobile i').text('3450');
						$('.jspricemobinday b').text('690');
					}else if(foodmob==5 && daysmob==5){
						$('.jspricemobile i').text('4200');
						$('.jspricemobinday b').text('840');
					}
					else if(foodmob==3 && daysmob==7){
						$('.jspricemobile i').text('4802');
						$('.jspricemobinday b').text('686');
					}
					else if(foodmob==5 && daysmob==7){
						$('.jspricemobile i').text('5852');
						$('.jspricemobinday b').text('836');
					}
				}
				else if(itogomob > 1400 && itogomob <= 1700){
					$('.jsmobtarif').text('Фит плюс');
					$('.jsmobkallday b').text('1700');	
					if (foodmob==3 && daysmob==5) {
						$('.jspricemobile i').text('3800');
						$('.jspricemobinday b').text('760');
					}else if(foodmob==5 && daysmob==5){
						$('.jspricemobile i').text('4700');
						$('.jspricemobinday b').text('940');
					}
					else if(foodmob==3 && daysmob==7){
						$('.jspricemobile i').text('5300');
						$('.jspricemobinday b').text('757');
					}
					else if(foodmob==5 && daysmob==7){
						$('.jspricemobile i').text('6600');
						$('.jspricemobinday b').text('943');
					}
				}
				else if(itogomob > 1700 && itogomob <= 2500){
					$('.jsmobtarif').text('Спорт');	
					$('.jsmobkallday b').text('2500');
					if (foodmob==3 && daysmob==5) {
						$('.jspricemobile i').text('4600');
						$('.jspricemobinday b').text('920');
					}else if(foodmob==5 && daysmob==5){
						$('.jspricemobile i').text('5850');
						$('.jspricemobinday b').text('1170');
					}
					else if(foodmob==3 && daysmob==7){
						$('.jspricemobile i').text('6405');
						$('.jspricemobinday b').text('915');
					}
					else if(foodmob==5 && daysmob==7){
						$('.jspricemobile i').text('8204');
						$('.jspricemobinday b').text('1172');
					}
				}
				else if(itogomob > 2500 && itogomob <= 3500){
					$('.jsmobtarif').text('Спорт плюс');
					$('.jsmobkallday b').text('3500');	
					if (foodmob==3 && daysmob==5) {
						$('.jspricemobile i').text('5650');
						$('.jspricemobinday b').text('1130');
					}else if(foodmob==5 && daysmob==5){
						$('.jspricemobile i').text('7400');
						$('.jspricemobinday b').text('1480');
					}
					else if(foodmob==3 && daysmob==7){
						$('.jspricemobile i').text('9910');
						$('.jspricemobinday b').text('1130');
					}
					else if(foodmob==5 && daysmob==7){
						$('.jspricemobile i').text('8204');
						$('.jspricemobinday b').text('1172');
					}
				}

			}

	else {		
	var itogomob = (10 * +massmob + 6.25 * +rostmob - 5 * +agemob - 161) * +activitymob;	
		$('.subtitle i').text(Math.round(itogomob));
		$('.jskkalklientmob').val(itogomob);

				if (itogomob <= 1400) {
					$('.jsmobtarif').text('Фит');
					$('.jsmobkallday b').text('1400');
					if (foodmob==3 && daysmob==5) {
						$('.jspricemobile i').text('3450');
						$('.jspricemobinday b').text('690');
					}else if(foodmob==5 && daysmob==5){
						$('.jspricemobile i').text('4200');
						$('.jspricemobinday b').text('840');
					}
					else if(foodmob==3 && daysmob==7){
						$('.jspricemobile i').text('4802');
						$('.jspricemobinday b').text('686');
					}
					else if(foodmob==5 && daysmob==7){
						$('.jspricemobile i').text('5852');
						$('.jspricemobinday b').text('836');
					}
				}
				else if(itogomob > 1400 && itogomob <= 1700){
					$('.jsmobtarif').text('Фит плюс');
					$('.jsmobkallday b').text('1700');	
					if (foodmob==3 && daysmob==5) {
						$('.jspricemobile i').text('3800');
						$('.jspricemobinday b').text('760');
					}else if(foodmob==5 && daysmob==5){
						$('.jspricemobile i').text('4700');
						$('.jspricemobinday b').text('940');
					}
					else if(foodmob==3 && daysmob==7){
						$('.jspricemobile i').text('5300');
						$('.jspricemobinday b').text('757');
					}
					else if(foodmob==5 && daysmob==7){
						$('.jspricemobile i').text('6600');
						$('.jspricemobinday b').text('943');
					}
				}
				else if(itogomob > 1700 && itogomob <= 2500){
					$('.jsmobtarif').text('Спорт');	
					$('.jsmobkallday b').text('2500');
					if (foodmob==3 && daysmob==5) {
						$('.jspricemobile i').text('4600');
						$('.jspricemobinday b').text('920');
					}else if(foodmob==5 && daysmob==5){
						$('.jspricemobile i').text('5850');
						$('.jspricemobinday b').text('1170');
					}
					else if(foodmob==3 && daysmob==7){
						$('.jspricemobile i').text('6405');
						$('.jspricemobinday b').text('915');
					}
					else if(foodmob==5 && daysmob==7){
						$('.jspricemobile i').text('8204');
						$('.jspricemobinday b').text('1172');
					}
				}
				else if(itogomob > 2500 && itogomob <= 3500){
					$('.jsmobtarif').text('Спорт плюс');
					$('.jsmobkallday b').text('3500');	
					if (foodmob==3 && daysmob==5) {
						$('.jspricemobile i').text('5650');
						$('.jspricemobinday b').text('1130');
					}else if(foodmob==5 && daysmob==5){
						$('.jspricemobile i').text('7400');
						$('.jspricemobinday b').text('1480');
					}
					else if(foodmob==3 && daysmob==7){
						$('.jspricemobile i').text('9910');
						$('.jspricemobinday b').text('1130');
					}
					else if(foodmob==5 && daysmob==7){
						$('.jspricemobile i').text('8204');
						$('.jspricemobinday b').text('1172');
					}
				}

			}
		// console.log(itogomob);

		if (!$('#jsrasschitat').hasClass('disabledjs')) {
			$(this).parents('.jsmob').hide().next().show();
		}
// console.log(malemob, agemob, rostmob, massmob, activitymob, foodmob, daysmob);							

	});

	$('#jsnextmobwindow').on('click', function(e){
		e.preventDefault();
		$(this).parents('.jsmob').hide().next().show();
	});

});
