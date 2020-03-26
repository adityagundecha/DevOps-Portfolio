// Sticky menu
$('#header').sticky();

// Preloader
$(window).on('load', function(e) {
	$('body').removeClass('loading');
});
