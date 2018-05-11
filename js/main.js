
$(document).ready(function() {
	
});

function window_resize(){

	var containerWidth = $(window).width();
	var containerHeight = $(window).height();
	
	if (containerWidth >= 767 ) {
		
		if( window.localStorage )
		{   	
			if( !localStorage.getItem('secondLoad') )
			{
				localStorage['secondLoad'] = true;
				window.location.reload();
			}  
			
		}

		$('header').css({
			'height': 'unset',
		}); 




		$('.block-son-1 .img').css({
			'width': 0.24*containerWidth + 'px',
		});
		$('.block-son-1').css({
			'marginBottom': 0.09*containerWidth + 'px',
		});
		$('.content-block-2 .single-item').css({
			'height': 0.53*containerWidth + 'px',
		});
		$('.block-son-2 .img').css({
			'width': 0.24*containerWidth + 'px',
			'marginTop': 0.1*containerWidth + 'px',
		});	
		$('.block-son-2 .text h2').css({
			'fontSize': 0.02*containerWidth + 'px',
				// 'marginTop': 0.033*containerWidth + 'px',
			});
		$('.block-son-2 .text').css({
			'marginTop': 0.033*containerWidth + 'px',
		});
		$('.single-item').css({
			'height': 0.53*containerWidth + 'px',
		});
		$('.slider-logo').css({
			'width': 0.23*containerWidth + 'px',
			'height': 0.24*containerWidth + 'px',
			'top': 0.08*containerWidth + 'px',
		});
		$('.slider-text').css({
			'width': 0.689*containerWidth + 'px',
			'fontSize': 0.04*containerWidth + 'px',
			'lineHeight': 0.04*containerWidth + 'px',
			'top': 0.33*containerWidth + 'px',
		});



		$('.content-block-2 ul.slick-dots').css({
			'bottom': 0.05*containerWidth + 'px',
		});

		$('.blok-son-3-2').css({
			'marginLeft': 0.05*containerWidth + 'px',
			'marginRight': 0.05*containerWidth + 'px',
			'paddingBottom': 0.1*containerWidth + 'px',
		});
		$('.block-son-3 h2').css({
			'width': 0.55*containerWidth + 'px',
			'height': 0.13*containerWidth + 'px',
			'marginTop': 0.06*containerWidth + 'px',
			'fontSize': 0.04*containerWidth + 'px',
			'lineHeight': 0.04*containerWidth + 'px',
		});
		$('.block-son-3 h3').css({
			'width': 0.7*containerWidth + 'px',
			'height': 0.048*containerWidth + 'px',
			'marginTop': 0.027*containerWidth + 'px',

		});
		$('.block-son-3 h4').css({
			'width': 0.58*containerWidth + 'px',
			'height': 0.048*containerWidth + 'px',
		});



		$('.videocall').css({
			'width': 0.2*containerWidth + 'px',
			'height': 0.4*containerWidth + 'px',
		});

		$('.block-4').css({
			'height': 0.56*containerWidth + 'px',
		});
		$('.text-block-4').css({
			'height': 0.22*containerWidth + 'px',
			'width': 0.38*containerWidth + 'px',
			'marginTop': 0.14*containerWidth + 'px',
			'marginLeft': 0.13*containerWidth + 'px',

		});
		$('.text-block-4 h3').css({

			'fontSize': 0.04*containerWidth + 'px',
			'lineHeight': 0.04*containerWidth + 'px',
			'marginBottom': 0.028*containerWidth + 'px',
		});

		$('.link-community').css({
			'marginTop': 0.023*containerWidth + 'px',
		});
		$('.content-block-5 h2').css({
			'width': 0.54*containerWidth + 'px',
			'height': 0.085*containerWidth + 'px',
			'fontSize': 0.04*containerWidth + 'px',
			'lineHeight': 0.04*containerWidth + 'px',
			'marginTop': 0.07*containerWidth + 'px',
		});
		$('.content-block-5 h3').css({
			'width': 0.69*containerWidth + 'px',
		});
		$('.content-block-5 h4').css({
			'marginTop': 0.023*containerWidth + 'px',
		});
		$('.img-content-5').css({
			'width': 0.53*containerWidth + 'px',
			'height': 0.17*containerWidth + 'px',
			'marginLeft': 0.22*containerWidth + 'px',
			'marginTop': 0.051*containerWidth + 'px',
		});


		$('.block-6').css({
			'height': 0.66*containerWidth + 'px',
		});
		$('.khaosat').css({
			'marginBottom': 0.1*containerWidth + 'px',
		});
		$('.content-block-7').css({
			'height': 0.6*containerWidth + 'px',
		});

		$('.content-block-7 h3').css({
			'marginLeft': 0.16*containerWidth + 'px',
			'marginTop': 0.04*containerWidth + 'px',
			'fontSize': 0.04*containerWidth + 'px',
			'lineHeight': 0.04*containerWidth + 'px',
		});
		$('.form-position').css({
			'width': 0.34*containerWidth + 'px',
			'height': 0.23*containerWidth + 'px',
			'padding': 0.015*containerWidth + 'px',
			'top': 0.2*containerWidth + 'px',
			'right': 0.15*containerWidth + 'px',
		});

		$('.regis-now').css({
			'bottom': 0.1*containerWidth + 'px',
			'right': 0.42*containerWidth + 'px',
		});
		$('.form-position input').css({
			'padding': 0.015*containerWidth + 'px',
		});
		$('.content-block-8').css({
			'height': 0.7*containerWidth + 'px',
		});
		$('.content-block-8 h3').css({
			'width': 0.33*containerWidth + 'px',
			'height': 0.14*containerWidth + 'px',
			'top': 0.26*containerWidth + 'px',
			'right': 0.23*containerWidth + 'px',
			'fontSize': 0.04*containerWidth + 'px',
			'lineHeight': 0.04*containerWidth + 'px',
		});
		$('.download').css({
			'width': 0.12*containerWidth + 'px',
			'height': 0.19*containerWidth + 'px',
			'bottom': 0.14*containerWidth + 'px',
			'left': 0.21*containerWidth + 'px',
			'fontSize': 0.04*containerWidth + 'px',
			'lineHeight': 0.04*containerWidth + 'px',
		});
		$('.download h4').css({
			'fontSize': 0.023*containerWidth + 'px',
			'lineHeight': 0.03*containerWidth + 'px',
		});
		$('.click-download').css({
			'left': 0.29*containerWidth + 'px',
			'bottom': 0.15*containerWidth + 'px',
			'fontSize': 0.023*containerWidth + 'px',
		});
		$('.appstore').css({
			'width': 0.34*containerWidth + 'px',
			'bottom': 0.035*containerWidth + 'px',
		});
		$('.appstore .android').css({
			'height': 0.042*containerWidth + 'px',
		});
		$('.appstore .apple').css({
			'height': 0.042*containerWidth + 'px',
		});
		$('.appstore span').css({
			'lineHeight': 0.042*containerWidth + 'px',
		});
		
		$('.feedback-customer').css({
			'width': 0.31*containerWidth + 'px',
			'height': 0.24*containerWidth + 'px',
			'left': 0.16*containerWidth + 'px',
			'top': 0.28*containerWidth + 'px',
		});

		$('.img-cus').css({
			'width': 0.054*containerWidth + 'px',
		});
		$('.feedback-customer .single-item-2 ul.slick-dots').css({
			'top': 0.22*containerWidth + 'px',
			'margin': 0,
		});
		$('.blok-son-3-2 .col-sm-3 .img').css({
			'width': 0.082*containerWidth + 'px',
			'height': 0.082*containerWidth + 'px',
		});

		

		$('.click-open-search').click(function(event) {
			event.preventDefault();
			$(this).hide(400);
			$('header .menu-top').hide(500);
			$('.search-top form input[type="search"] ').show(500);
			$('.click-submit-search ').show(500);
			$('.click-hide-search').show(500);
		});
		$('.click-hide-search ').click(function(event) {
			event.preventDefault();
			$(this).hide(400);
			$('.search-top form input[type="search"] ').hide(500);
			$('header .menu-top').show(500);
			$('.click-submit-search ').hide(500)
			$('.click-open-search ').show(500)
		});

		$('.click-submit-search').click(function(event) {
			event.preventDefault();
		});

		localStorage.removeItem('firstLoad');

	} else {
		// mobile

		localStorage.removeItem('secondLoad');
		if( window.localStorage )
		{   	
			if( !localStorage.getItem('firstLoad') )
			{
				localStorage['firstLoad'] = true;
				window.location.reload();
			}  
			// else {
			// 	localStorage.removeItem('firstLoad');
			// }
		}

		$('.block-son-1 img').css({
			'width': 0.6*containerWidth + 'px',
			'marginTop': 0.13*containerWidth + 'px',
			'marginBottom': 0.12*containerWidth + 'px',
		});
		$('.block-son-1 .text h1').css({
			'fontSize': 0.13*containerWidth + 'px',
			'lineHeight': 0.1*containerWidth + 'px',
			'marginBottom': 0.07*containerWidth + 'px',
		});
		$('.logo-hello').css({
			'padding': 0,
			'margin': 0,
			'width': '20px',
		});
		$('.block-son-1 .text h3').css({
			'marginBottom': 0.16*containerWidth + 'px',
		});
		$('.single-item-mobile').css({
			'height': 1.7*containerWidth + 'px',
		});
		$('.slider-bg').height($('.single-item-mobile').height()+'px');

		$('.slider-logo').css({
			'top': 0.44*containerWidth + 'px',
			'width': 0.64*containerWidth + 'px',
			'height': 0.65*containerWidth + 'px',
		})	

		$('.slider-text').css({
			'top': 1.2*containerWidth + 'px',
			'width': 0.75*containerWidth + 'px',
			'fontSize': 0.08*containerWidth + 'px',
			'lineHeight': 0.08*containerWidth + 'px',
		});

		$('.block-son-3 h2').html('Bạn có thể nhanh chóng gọi video call, chat trực tiếp với các bác sĩ thật sự dễ dàng');
		$('.block-son-3 h2').css({
			'marginTop': 0.19*containerWidth + 'px',
			'fontSize': 0.07*containerWidth + 'px',
			'lineHeight': 0.07*containerWidth + 'px',
		});
		$('.block-son-3 h3').css({
			'marginTop': 0.1*containerWidth + 'px',
			'fontSize': 0.04*containerWidth + 'px',
			'lineHeight': 0.05*containerWidth + 'px',
			'height': 1*containerWidth + 'px',
		});
		$('.blok-son-3-2 .col-sm-3').css({
			'marginTop': 0.17*containerWidth + 'px',
			'height': 1.7*containerWidth + 'px',
		});	
		$('.blok-son-3-2 .col-sm-3:first-Child').css({
			'marginTop': 0 + 'px',
		});
		$('.blok-son-3-2 .col-sm-3:last-Child').css({
			'marginBottom': 20 + 'px',
		});
		$('.text-video .img').css({
			'width': 0.27*containerWidth + 'px',
			'marginBottom': 0.03*containerWidth + 'px',
			'fontSize': 0.07*containerWidth + 'px',
		});
		$('.blok-son-3-2 .text-video h4').css({
			'width': 0.68*containerWidth + 'px',
			'lineHeight': 0.045*containerWidth + 'px',
			'fontSize': 0.04*containerWidth + 'px',
			'marginTop': 0.046*containerWidth + 'px',
			'marginBottom': 0.069*containerWidth + 'px',
		});
		$('.videocall').css({
			'width': 0.46*containerWidth + 'px',
		});
		$('.block-4').css({
			'height': 1.7*containerWidth + 'px',
		});
		$('.text-block-4 h3').css({
			'fontSize': 0.08*containerWidth + 'px',
			'marginTop': 0.95*containerWidth + 'px',
		});	
		$('.text-block-4 .h4-1').css({
			'marginTop': 0.052*containerWidth + 'px',
		});
		$('.link-community').css({
			'marginTop': 0.088*containerWidth + 'px',
		});
		$('.link-community a').css({
			'fontSize': 0.04*containerWidth + 'px',
		});
		$('.link-community a').html('Tìm hiểu thêm');

		$('.block-5').css({
			'height': 1.7*containerWidth + 'px',
		});	

		$('.content-block-5 h2').html('Tận hưởng ưu đãi đặc biệt dành cho người dùng mBacsi');
		$('.content-block-5 h2').css({
			'fontSize': 0.08*containerWidth + 'px',
			'marginTop': 0.17*containerWidth + 'px',
		});
		$('.img-content-5').css({
			'width': 0.85*containerWidth + 'px',
			'top': 0.38*containerWidth + 'px',
			'left': 0.08*containerWidth + 'px',
		});
		$('.gift-mobile').css({
			'width': 0.65*containerWidth + 'px',
			'top': 1.05*containerWidth + 'px',
			
		});
		$('.gift-mobile p').css({
			'fontSize': 0.064*containerWidth + 'px',
			'lineHeight': 0.064*containerWidth + 'px',
			
		});
		$('.gift-mobile-2').css({
			
			'fontSize': 0.064*containerWidth + 'px',
			'lineHeight': 0.064*containerWidth + 'px',
			
		});

		$('.gift-mobile img').css({
			'width': 0.048*containerWidth + 'px',
		});
		$('.content-block-5 h3').css({
			'top': 1.15*containerWidth + 'px',
			'fontSize': 0.038*containerWidth + 'px',
			'lineHeight': 0.04*containerWidth + 'px',
		});
		$('.khaosat').css({
			'bottom': 0.09*containerWidth + 'px',
		});
		$('.khaosat a').html('Tìm hiểu thêm');	
		$('.khaosat a').css({
			'fontSize': 0.04*containerWidth + 'px',
		});
		$('.block-6').css({
			'height': 1.7*containerWidth + 'px',
		});
		$('.feedback-customer').css({
			'marginTop': 1.12*containerWidth + 'px',
			'width': 0.78*containerWidth + 'px',
		});
		$('.content-feedback').css({
			'fontSize': 0.044*containerWidth + 'px',
			'lineHeight': 0.05*containerWidth + 'px',
		});
		$('.info-comtomer').css({
			'marginTop': 0.07*containerWidth + 'px',
		});
		$('.img-cus').css({
			'width': 0.17*containerWidth + 'px',
		});
		$('.name-cus').css({
			'paddingTop': 0.032*containerWidth + 'px',
		});
		$('.name-cus h3').css({
			'fontSize': 0.038*containerWidth + 'px',
		});	
		$('.name-cus h4').css({
			'fontSize': 0.034*containerWidth + 'px',
			'paddingTop': 0.021*containerWidth + 'px',
		});
		$('.content-block-7').css({
			'height': 1.7*containerWidth + 'px',
		});
		$('.form-position').css({
			'top': 0.66*containerWidth + 'px',
			'width': 0.8*containerWidth + 'px',
			'left': 0.098*containerWidth + 'px',
			'padding': 0.056*containerWidth + 'px',
		});
		$('.form-position input').css({
			'height': 0.09*containerWidth + 'px',
		});
		$('.group-radio').css({
			'top': 0.7*containerWidth + 'px',
		});
		$('.group-radio label').css({
			'fontSize': 0.036*containerWidth + 'px',
		});
		$('.group-radio a').css({
			'marginTop': 0.016*containerWidth + 'px',
			'fontSize': 0.027*containerWidth + 'px',
		});

		$('.regis-now').css({
			'bottom': 0.1*containerWidth + 'px',
			'fontSize': 0.04*containerWidth + 'px',
		});
		$('.content-block-7 h3').css({
			'width': 0.64*containerWidth + 'px',
			'top': 0.2*containerWidth + 'px',
			'fontSize': 0.08*containerWidth + 'px',
			'lineHeight': 0.08*containerWidth + 'px',
		});
		$('.content-block-8').css({
			'height': 1.7*containerWidth + 'px',
		});
		$('.appstore').css({
			'bottom': 0.1*containerWidth + 'px',
		});	
		

		$('.content-block-8 h3').css({
			'width': 0.67*containerWidth + 'px',
			'top': 1.05*containerWidth + 'px',
			'fontSize': 0.088*containerWidth + 'px',
		});
		$('.download').css({
			'width': 0.24*containerWidth + 'px',
			'top': 0.33*containerWidth + 'px',
		});
		$('header').css({
			'height': 1.14*containerWidth + 'px',
		});

		

		$('.menu-top ul li a').css({ 

			'paddingTop': 0.04*containerWidth + 'px',
			'paddingBottom': 0.04*containerWidth + 'px',
		});
		$('.search-top form').css({ 

			'paddingTop': 0.04*containerWidth + 'px',
			'paddingBottom': 0.04*containerWidth + 'px',
		});


		$('.menu-top ul li a').css({
			'fontSize': 0.04*containerWidth + 'px',
			'lineHeight': 0.04*containerWidth + 'px',
			// 'top': 0.33*containerWidth + 'px',
		});
		$('.timkiem-top').css({
			'fontSize': 0.035*containerWidth + 'px',
			'lineHeight': 0.035*containerWidth + 'px',
		});
		$('header .social-top ul').css({
			'paddingTop': 0.04*containerWidth + 'px',
			'paddingBottom': 0.04*containerWidth + 'px',
		});
		

		//click menu mobile
		$('.click-open-search').click(function(event) {
			event.preventDefault();
			$(this).hide();
			$('.timkiem-top').hide(200);
			// $('header .menu-top').hide(500);
			$('.search-top > div').addClass('show');
			$('.search-top form input[type="search"] ').focus();
			$('.click-submit-search ').show(200);
			$('.click-hide-search').show(200);
		});
		$('.click-hide-search ').click(function(event) {
			event.preventDefault();
			$(this).hide();
			$('.search-top > div').removeClass('show');
			// $('header .menu-top').show(500);
			$('.click-submit-search ').hide(200);
			$('.click-open-search ').show(200);
			$('.timkiem-top').show(200);
		});

		$('.click-submit-search').click(function(event) {
			event.preventDefault();
		});	

		$('.icon-menu .fa-bars').click(function(event) {
			event.preventDefault();
			$('header').show(500);
			$(this).hide();
			$('.icon-menu .fa-times').show();
		});	

		$('.icon-menu .fa-times').click(function(event) {
			event.preventDefault();
			$('header').hide(500);
			$(this).hide();
			$('.icon-menu .fa-bars').show();
		});	

	}
}

$(document).ready(function(){

	if($(window).width() >= 768) {
		$('.single-item').slick({
			dots: true,
		});
	}
	else {
		function scrollto(id) {
			var etop = $('#' + id).offset().top;
			$(window).scrollTop(etop);
		}
		function ascrollto(id) {
			var etop = $('#' + id).offset().top;
			$('html, body').animate({
				scrollTop: etop
			}, 1000);
		}
	}

	$('.single-item-2').slick({
		dots: true,
	});

	$('.content-block-2 .slick-dots li').html('').html('<i class="fa fa-circle" style=" color:  #eeeeee52;"></i>');
	$('.feedback-customer .single-item-2 ul.slick-dots li').html('').html('<i class="fa fa-circle" style="color: #adcfe6;"></i>');
	$(window).scroll(function(){
		var aTop = $('.header-block-1').height();
		var block_1 = $('.content-block-1').offset().top;

		if($(this).scrollTop()>=aTop+600){
			$('.header-block-1').addClass('fixed');
		} else {
			$('.header-block-1').removeClass('fixed');
		}



	});

});


$(document).ready(function() {
	
	window_resize();
	$(window).resize(window_resize);
	$('body').css('display', 'block');
});








