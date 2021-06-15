$(document).ready(function() {
	$('.testimonial-slider').slick({
		centerMode: true,
		slidesToShow: 5,
		responsive: [{
			breakpoint: 1200,
			settings: {
				arrows: true,
				centerMode: true,
				slidesToShow: 3
			}
		},
		{
			breakpoint: 767,
			settings: {
				arrows: true,
				centerMode: true,
				slidesToShow: 1
			}
		}
		]
	});
});
