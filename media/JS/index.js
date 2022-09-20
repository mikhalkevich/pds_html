

$(function(){
    $('body').append('<div class="upbtn"></div>');
    $(window).scroll(function() {
		if ($(this).scrollTop() > 100) {
			$('.upbtn').css({
				transform: 'scale(1)'
			});
		} else {
			$('.upbtn').css({
				transform: 'scale(0)'
			});
		}
    });
    $('.upbtn').on('click',function() {
		$('html, body').animate({
			scrollTop: 0
		}, 500);
		return false;
    });
    $('.links').mouseover(function(){
		var color = $(this).attr('data-color');
		var title = $(this).attr('data-title');
		//var content = $(this).attr('data-content');
		$('.bg-transparenter').css('background', color);
		$('.header-empty').text(title);
		//$('.transparenter').html(content);
	});
	$('.header-links').mouseout(function(){
		$('.header-empty').text('Добро пожаловать!!!');
	});
});



















