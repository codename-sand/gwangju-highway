$(function() {

	$('.main_header').hover(function() {
		$('.area').show();
		$("header").css("box-shadow","1px 0px 3px #4c4c4c");
	},function() {
		$('.area').hide();
		$("header").css("box-shadow","none");
	});
	
})
