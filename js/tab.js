$(function(){
	
	$('.cont > div:not(:first)').hide(0);
	
	$('.btn').click(function(){
		var i = $(this).index();
		$('.btn').removeClass('active');
		$(this).addClass('active');
		$('.cont > div').hide(0);
		$('.cont > div').eq(i).show(0);
	})
	
});