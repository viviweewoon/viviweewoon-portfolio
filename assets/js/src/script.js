/*
Table of Contents:
==================
jQuery Ready
	
	- 
	
Functions
	


*/





/*	=============================================================================
	jQuery Ready
	========================================================================== */
	
	$( document ).ready( function(){
		/*	--------------------------------------------------
			:: Mobile Nav Open
			-------------------------------------------------- */
			navOpen();
			
		/*	--------------------------------------------------
			:: Scroll Top
			-------------------------------------------------- */
			scrollTop();
		
		/*	--------------------------------------------------
			:: Load Google Font
			-------------------------------------------------- */
			loadGoogleFontFN();
			
		/*	--------------------------------------------------
			:: Window Width
			-------------------------------------------------- */
			windowWidthFN();
		
		/*	--------------------------------------------------
			:: Carousel
			-------------------------------------------------- */
			carouselMasthead();
		
	});



/*	=============================================================================
	jQuery Window Resize
	========================================================================== */
	
	$( window ).resize(function(){
		resizeEvent(function(){
			
		}, 100, '2572275020' );
	});
	
	var resizeEvent = (function(){
		var timers = {};
		return function( callback, ms, uniqueId ){
			console.log(uniqueId);
			if ( !uniqueId ){
				uniqueId = 'I_need_unique_ID';
			}
			if ( timers[uniqueId] ){
				clearTimeout( timers[uniqueId] );
			}
			timers[uniqueId] = setTimeout( callback, ms );
		};
	})();


/*	=============================================================================
	jQuery Window Load
	========================================================================== */
	$(window).load(function(){
		$('#preloader').fadeOut('slow',function(){$(this).remove();});
	});


/*	=============================================================================
	Functions
	========================================================================== */
	
	/*	--------------------------------------------------
		:: Carousel
		-------------------------------------------------- */
		function carouselMasthead() {
			$('.owl-carousel').owlCarousel({
				loop:true,
				margin:10,
				nav:true,
				lazyLoad:true,
				autoplay:true,
				autoplayTimeout:5000,
				autoplayHoverPause:true,
				responsiveClass:false,
				responsive:{
					0:{
						items:1,
						nav:false,
						dots:true
					},
					768:{
						items:1,
						nav:true,
						dots:false
					},
					992:{
						items:1,
						nav:true,
						dots:false
					}
				}
			});
		}

	/*	--------------------------------------------------
		:: Scroll Top
		-------------------------------------------------- */
		function scrollTop() {
			$(".scrollTop a").on("click", function(e){
				e.preventDefault();
				$("html, body").animate({
					scrollTop: 0
				}, 600);
				return false;
			});	
			
			$(window).scroll(function(){
				if($(document).height() > $(window).height()) {
					if($(window).scrollTop() >= $(document).height() - $(window).height()){
					  if ( !$(".scrollTop").hasClass("appear") ){
							$(".scrollTop").addClass("appear");
						}
					} else {
						$(".scrollTop").removeClass("appear");
					}
				}
			});
		}

	/*	--------------------------------------------------
		:: Mobile Nav Open
		-------------------------------------------------- */
		function navOpen() {
			$('.navbar-toggle').on('click', function() {
				$('body').toggleClass('nav-open');
			});
		}

	/*	--------------------------------------------------
		:: Load Google Font
		-------------------------------------------------- */
		function loadGoogleFontFN(){
			WebFontConfig = {
				google: { families: [ 'Lato:400,100,100italic,300,300italic,400italic,700,700italic,900italic,90', 'Quicksand:400,700,300:latin', 'Sacramento:latin' ] }
			};
			(function(){
				var wf = document.createElement('script');
				wf.src = ('https:' == document.location.protocol ? 'https' : 'http') + '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
				wf.type = 'text/javascript';
				wf.async = 'true';
				var s = document.getElementsByTagName('script')[0];
				s.parentNode.insertBefore(wf, s);
			})();
		}
		
	/*	--------------------------------------------------
		:: Window Width
		-------------------------------------------------- */
		function windowWidthFN(){
			var windowWidth =  $( window ).width();
			return windowWidth;
		}
		
	/*	--------------------------------------------------
		:: Window Height
		-------------------------------------------------- */
		function windowHeightFN(){
			var windowHeight =  $( window ).height();
			return windowHeight;
		}
		
	/*	--------------------------------------------------
		:: Body Height
		-------------------------------------------------- */
		function bodyHeightFN(){
			var bodyHeight =  $( 'body' ).height();
			return bodyHeight;
		}
		
	/*	--------------------------------------------------
		:: Avoid `console` errors
		-------------------------------------------------- */
		(function(){
			var method;
			var noop = function (){};
			var methods = [
				'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
				'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
				'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
				'timeStamp', 'trace', 'warn'
			];
			var length = methods.length;
			var console = (window.console = window.console || {});
		
			while (length--){
				method = methods[length];
		
				// Only stub undefined methods.
				if (!console[method]){
					console[method] = noop;
				}
			}
		}());