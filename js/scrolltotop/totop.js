
(function($) {
 "use strict";

$(document).ready(function(){

	$(window).scroll(function(){
		if ($(this).scrollTop() > 100) {
			$('.scrollup').fadeIn();
		} else {
			$('.scrollup').fadeOut();
		}
	});

	$('.scrollup').on("click",function(){
		$("html, body").animate({ scrollTop: 0 }, 500);
		return false;
	});

});
})(jQuery);