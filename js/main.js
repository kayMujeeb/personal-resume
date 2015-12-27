
$('.click-me').on('click', function() {
	$(this).animate({transform: 'rotate(45deg)'});
});

$(window).on('resize', function () {
	$(window).trigger('scroll');

})


$(window).on('scroll', function() {

	//Number of px that have been scrolled
	var px = $(this).scrollTop();
	console.log(px);

	var h = $(window).height();
	console.log(h);

	//Calculate how much of the page has been scrolled
	var percent = px/h;
	console.log(percent);

	var op = 1 - percent;

	$('.upper-container')
		.css ('top', -px + 'px');
		// .css ('opacity', op);

	$('.circle')
		.css ('top', -px + 'px')

	if (px > 2) {
		$('.bar').addClass('bar-background');
	}
	else {
		$('.bar').removeClass('bar-background');
	}
	
});