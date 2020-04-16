// slick
if (isDesktop) {
	$('#slick-container').slick({
		rows: 1,
		slidesToShow: 2,
		slidesToScroll: 1,
		arrows: true,
		dots: false,
		infinite: false,
		responsive: [
			{
				breakpoint: 1000,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				}
			}
		]
	});
}
