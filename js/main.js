
$('.click-me').on('click', function() {
	$(this).animate({transform: 'rotate(45deg)'});
});

$(window).on('resize', function() {
	$(window).trigger('scroll');

});


$(window).on('scroll', function() {

	//Number of px that have been scrolled
	var px = $(this).scrollTop();
	// console.log(px);

	var h = $(window).height();
	// console.log(h);

	//Calculate how much of the page has been scrolled
	var percent = px/h;
	// console.log(percent);

	var op = 1 - percent;

	$('.upper-container')
		.css ('top', -px + 'px');
		// .css ('opacity', op);

	// $('.circle')
	// 	.css ('top', -px + 'px')

	if (px > 2) {
		$('.bar').addClass('bar-background');
		$('.circle').addClass('bar-logo');
		// $('.bar-logo').fadeIn();
	}
	else {
		$('.bar').removeClass('bar-background');
		$('.circle').removeClass('bar-logo');
		// $('.bar-logo').fadeOut();
	}

	// if (px > 640 && px < 1349) {
	// 	$('#i-do').addClass('active');
	// 	$('#ive-done').removeClass('active');
	// }

	// else if (px > 1349) {
	// 	$('#ive-done').addClass('active');
	// 	$('#i-do').removeClass('active');
	// }

	// else {
	// 	$('#ive-done').removeClass('active');
	// 	$('#i-do').removeClass('active');	
	// }
	
});


// $('#i-do').on('click', function() {
// 	$('#i-do').addClass('active');
// 	$('#ive-done').removeClass('active');
// })

// $('#ive-done').on('click', function() {
// 	$('#ive-done').addClass('active');
// 	$('#i-do').removeClass('active');
// })


$(function () {
    $('.portfolio-banner a').fluidbox();

})

$('.portfolio-banner a').fluidbox({
    viewportFill: 0.8,
    maxWidth: 800,
    loader: true
});


$('a[href^="#"]').on('click',function (e) {
    e.preventDefault();

    var target = this.hash;
    var $target = $(target);

    $('html, body').stop().animate({
        'scrollTop': $target.offset().top
    }, 600, 'swing', function () {
        window.location.hash = target;
    });
});
