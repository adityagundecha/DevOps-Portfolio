
(function(){

	$('#navbar-example,#menu').find('li a').click(function(){
		var a = $(this).attr('href');
		if(a[0]=="#" ){
			if($(a).length>0)
				var h = $(a).offset().top+1;


			if(h>0){

				$('html,body').animate({scrollTop:h},800);
				$('.header-section').addClass('off').removeClass('woff').removeAttr('style');
				$('#menu').removeClass('in');
				k=0;
			}



			return false;
		}
	});
	$('.view-menu').click(function(){
		$('.one-page-has-right').addClass('active');
	});
	$(document).click(function(e){
		if(!$(e.target).is('.view-menu,.view-menu *,.header-section,.header-section *')){
			$('.one-page-has-right').removeClass('active');
		}
	});
	// if($('.one-page-has-right').length>0){
	// 	$('#menu').find('li .arrow').click(function(){
	// 		if($(this).parent().hasClass('hover')){
	// 			$(this).parent().removeClass('hover');
	// 		}else{
	// 			$(this).parent().addClass('hover');
	// 		};
	// 	});
	// }
})();