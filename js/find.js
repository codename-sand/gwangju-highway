$(function(){
	
	$('.content > div:not(:first)').hide(0);
	
	$('.tab li').click(function(){
		var i = $(this).index();
		$('.tab li').removeClass('active');
		$(this).addClass('active');
		$('.content > div').hide(0);
		$('.content > div').eq(i).show(0);
		return false;
	})
	
});