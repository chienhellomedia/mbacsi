
function window_resize(){

	var containerWidth = $(window).width();
	var containerHeight = $(window).height();
	// alert(containerHeight/containerWidth);
	// var height_total = Math.floor((containerWidth*15420)/2880);
	// var con_div_1 = $('.content1 .div-1');
	// var con_div_1_block_1 = $('.content1 .div-1 .block-1');

	if (containerWidth >= 767 ) {

		
		$('.block-son-1 .img').css({
			'width': 0.24*containerWidth + 'px',
		});
		$('.block-son-1').css({
			'marginBottom': 0.09*containerWidth + 'px',
		});
		$('.content-block-2 .single-item').css({
			'height': 0.52*containerWidth + 'px',
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

		$('.slick-dots').css({
			'marginTop': 0.038*containerWidth + 'px',
			'marginBottom': 0.038*containerWidth + 'px',
		});
		// $('.block-3').css({
		// 	'height': 0.97*containerWidth + 'px',
		// });
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
			'width': 0.58*containerWidth + 'px',
			'height': 0.048*containerWidth + 'px',
		});
		$('.block-son-3 h4').css({
			'width': 0.58*containerWidth + 'px',
			'height': 0.048*containerWidth + 'px',
		});

		$('.blok-son-3-2 .text-video h4').css({
			'width': 0.18*containerWidth + 'px',
			'height': 0.052*containerWidth + 'px',
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
			'width': 0.3*containerWidth + 'px',
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
			'marginTop': 0.035*containerWidth + 'px',
		});

		$('.content-block-7 h3').css({
			'marginLeft': 0.16*containerWidth + 'px',
			'marginTop': 0.04*containerWidth + 'px',
			'fontSize': 0.04*containerWidth + 'px',
			'lineHeight': 0.04*containerWidth + 'px',
		});
		$('.form-position').css({
			'width': 0.35*containerWidth + 'px',
			'height': 0.24*containerWidth + 'px',
			'padding': 0.026*containerWidth + 'px',
			'top': 0.19*containerWidth + 'px',
			'right': 0.16*containerWidth + 'px',
		});

		$('.regis-now').css({
			'bottom': 0.1*containerWidth + 'px',
			'right': 0.42*containerWidth + 'px',
		});
		$('.form-position input').css({
			'padding': 0.017*containerWidth + 'px',
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
		$('.menu-footer ul li a').css({
			'paddingLeft': 0.04*containerWidth + 'px',
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





		localStorage.removeItem('firstLoad');

	} else {
		if( window.localStorage )
		{
			if( !localStorage.getItem('firstLoad') )
			{
				localStorage['firstLoad'] = true;
				window.location.reload();
			}  
					// else
					// 	localStorage.removeItem('firstLoad');
				}
				
			}
		}

		$(document).ready(function(){
			// $('.loadpage').show();
			window_resize();
			$(window).resize(window_resize);
			// $('.loadpage').fadeOut(3000).hide(1000);
			

			$(window).scroll(function(){
				var aTop = $('.header-block-1').height();
				var block_1 = $('.content-block-1').offset().top;
				
				if($(this).scrollTop()>=aTop){
					$('.header-block-1').addClass('fixed');
				} else {
					$('.header-block-1').removeClass('fixed');
				}
			});


		});

		$('.single-item').slick({
			dots: true,
		});

		$('.single-item-2').slick({
			dots: true,
		});
		
		

		$(document).ready(function() {
			$('.content-block-2 .slick-dots li').html('').html('<i class="fa fa-circle" style=" color:  #e4a795;"></i>');
			$('.feedback-customer .single-item-2 ul.slick-dots li').html('').html('<i class="fa fa-circle" style=" color:  #adcfe6;"></i>');
		});