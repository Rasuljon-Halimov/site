if($('.slider__body').length>0){
	$('.slider__body').slick({
		// autoplay: true,
		// infinite: true,
		dots: true,
		arrows: false,
		accessibility:false,
		slidesToShow:1,
		autoplaySpeed: 3000,
		adaptiveHeight: true;
		// asNavFor:'',
		// appendDots:
		// appendArrows:$('.mainslider-arrows .container'),
		nextArrow:'<button type="button" class="slick-next"></button>',
		prevArrow:'<button type="button" class="slick-prev"></button>',
		responsive: [{
			breakpoint: 768,
			settings: {}
		}]
	});
}