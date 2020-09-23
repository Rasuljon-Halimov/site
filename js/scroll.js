	sectors($(this).scrollTop());
$(window).scroll(function(event) {
		var scr=$(this).scrollTop();
	sectors(scr);
});
function sectors(scr){
		var w=$(window).outerWidth();
		var h=$(window).outerHeight();
		var headerheight=80;
	if(w<768){headerheight=50;}
	if(scr>0){
		$('header').addClass('scroll');
	}else{
		$('header').removeClass('scroll');
	}
	if(scr>h){
		$('#up').fadeIn(300);
	}else{
		$('#up').fadeOut(300);
	}
	$.each($('.sector'), function(index, val) {
			var th=$(this).outerHeight();
			var tot=$(this).offset().top;
		if(scr>=tot && scr<=tot+th-h){
			$('.sector.scroll').removeClass('scroll');
			$(this).addClass('scroll');
		}
		if($(this).hasClass('scroll')){
			if(scr>=tot && scr<=tot+th-h){
				if($(this).hasClass('normalscroll')){
					$('body').addClass('scroll');
				}else{
					$('body').removeClass('scroll');
				}
			}else{
				if($(this).hasClass('normalscroll')){
					$('body').removeClass('scroll');
				}
			}
		}
		if(scr>tot-h/1.5 && scr<tot+th){
			if($('.dotts').length>0){
				dotts(index,0);
			}
			$(this).addClass('active');
		}else{
			$(this).removeClass('active');
		}
		if(scr>tot-h && scr<tot+th){
			$(this).addClass('view');
			if($(this).hasClass('padding')){
					var ps=100-(tot-scr)/h*100;
					var p=headerheight/100*ps;
				if(p>=headerheight){p=headerheight;}
				$(this).css({paddingTop:p});
			}
		}else{
			$(this).removeClass('view');
		}
	});
	/*
	$.each($('.lz').not('.load'), function(index, val) {
			var img=$(this).data('image');
		if(scr>tot-h && scr<tot+th){
			$(this).html('<img src="'+img+'" alt="" />');
			$(this).addClass('load');
		}
	});
	*/
}
function dotts(ind,init){
	if(init==true){
		$.each($('.sector'), function(index, val) {
			$('.dotts-list').append('<li></li>');
		});
	}
	$('.dotts-list li').removeClass('active').eq(ind).addClass('active');
}
$('body').on('click', '.dotts-list li', function(event) {
		var n=$(this).index()+1;
		var offset=0;
	$('body,html').animate({scrollTop: $('.sector-'+n).offset().top+offset},800, function() {});
});