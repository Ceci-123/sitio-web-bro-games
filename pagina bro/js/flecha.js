$(document).ready(function(){
 
	$('.truco').click(function(){
		$('body, html').animate({
			scrollTop: '0px'
		}, 300);
	});
 
	$(window).scroll(function(){
		if( $(this).scrollTop() > 0 ){
			$('.truco').slideDown(300);
		} else {
			$('.truco').slideUp(300);
		}
	});
 
});