$(function () {
	let mixer = mixitup('.products__inner-cards');


	$('.product-slider__wrapper').slick({
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 4,
		dots: true,
		arrows: false
	});

	$(".rate-star").rateYo({
		rating: 5,
		starWidth: "13px"
	});


});


