$(document).ready(function(){

	$('.up-web').click(function(){
		$('body, html').animate({
			scrollTop: '0px'
		}, 300);
	});

	$(window).scroll(function(){
		if( $(this).scrollTop() > 0 ){
			$('.up-web').slideDown(300);
		} else {
			$('.up-web').slideUp(300);
		}
	});
});
