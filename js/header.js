$(function() {

	$('header').hover(function() {
		$('header').addClass("hd_hover");
	},function() {
		$('header').removeClass("hd_hover");
	});

	$('.main_header').hover(function() {
		$('.area').show();
		$('header > hr').css('border','1px solid #e0e0e0');
	},function() {
		$('.area').hide();
		$('header > hr').css('border','1px solid white');
	});

	$(window).scroll(function(){
		if($(document).scrollTop() > 150) {
			$('header').addClass("scroll");
		}
		else {
			$('header').removeClass("scroll");
		}
	});	
	
})
