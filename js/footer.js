$(function() {
	$('.hide_openlink').hide();
	
	$('.click_openlink').toggle(function() {
		$('.hide_openlink').slideUp(350);
	},function() {
		$('.hide_openlink').slideDown(350);
	})
	
	$('.hide_openlink .deep_gray').click(function() {
		$('.hide_openlink').hide("slow");
	})
});