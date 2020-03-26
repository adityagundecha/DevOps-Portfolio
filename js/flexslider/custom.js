
(function($) {
 "use strict";



	
$(function(){
      SyntaxHighlighter.all();
    });
    $(window).load(function(){
      $('.flexslider.style1').flexslider({
        animation: "fade",
		animationLoop: false,
        itemWidth: 1170,
        pausePlay: false,
	    controlNav: false,
	    directionNav: true,
        start: function(slider){
        $('body').removeClass('loading');
        }
      });
    });	
	
$(function(){
      SyntaxHighlighter.all();
    });
    $(window).load(function(){
      $('.flexslider.style2').flexslider({
        animation: "slide",
		animationLoop: false,
        itemWidth: 1170,
        pausePlay: false,
	    controlNav: false,
	    directionNav: true,
        start: function(slider){
        $('body').removeClass('loading');
        }
      });
    });	
	
	
	
	// Can also be used with $(document).ready()
$(window).load(function() {
  $('.flexslider.style3').flexslider({
    animation: "slide",
    animationLoop: false,
    itemWidth: 395.75,
    itemMargin:0,
	controlNav: false,
	directionNav: true,
    minItems: 1,
    maxItems: 4
	
  });
});



	// Can also be used with $(document).ready()
$(window).load(function() {
  $('.flexslider.style4').flexslider({
    animation: "slide",
    animationLoop: false,
    itemWidth:175,
    itemMargin:5,
	controlNav: false,
	directionNav: true,
    minItems: 1,
    maxItems: 6
	
  });
});



$(function(){
      SyntaxHighlighter.all();
    });
    $(window).load(function(){
      $('.flexslider.style5').flexslider({
        animation: "slide",
		animationLoop: false,
        itemWidth: 1170,
        pausePlay: false,
	    controlNav: true,
	    directionNav: false,
        start: function(slider){
        $('body').removeClass('loading');
        }
      });
    });
	
})(jQuery);