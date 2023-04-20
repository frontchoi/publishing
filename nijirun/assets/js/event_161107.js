jQuery(function($) {
	$('.popup-youtube').magnificPopup({
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: true
    });
	var es = 'easeOutExpo';
	// 처음시작 애니메이션
	$('#wrap .movie').stop().animate({top:438}, 600, 'easeOutElastic');
	setTimeout(function() {
		$('#wrap .char05').stop().animate({top:615,left:40,width:233,opacity:1}, 1000, es);
	}, 100);
	setTimeout(function() {
		$('#wrap .char03').stop().animate({top:135,left:770,width:700,opacity:1}, 1100, es);
	}, 200);
	setTimeout(function() {
		$('#wrap .char04').stop().animate({top:-37,left:1202,width:511,opacity:1}, 1500, es);
	}, 300);
	setTimeout(function() {
		$('#wrap .char02').stop().animate({top:427,left:-400,width:477,opacity:1}, 1600, es);
	}, 400);
	setTimeout(function() {
		$('#wrap .char01').stop().animate({top:20,left:-20,width:349,opacity:1}, 1200, es);
	}, 500);
	setTimeout(function() {
		$('#wrap .play').stop().animate({top:585,left:542,width:106,height:106,opacity:1}, 1000, 'easeInOutElastic');
		$('#wrap .play img').stop().animate({top:585,left:542,width:106,height:106,opacity:1}, 1000, 'easeInOutElastic');
	}, 800);
	setTimeout(function() {
		$('#wrap h1').stop().animate({top:38,opacity:1}, 1000, 'easeOutElastic');
	}, 900);
	setTimeout(function() {
		$('#wrap .btn_app').stop().animate({bottom:22,opacity:1}, 1000, 'easeOutElastic');
	}, 900);
	for(var i=0;i < $('#wrap .list_mask ul > li').size()/2;i++){
		if(i == 0){
			var li_dot = "<li class='btn_on' onClick='move_dot("+i+")'></li>";
		}else{
			var li_dot = "<li onClick='move_dot("+i+")'></li>";
		}
		$("#wrap .img_screenshot > ol").append(li_dot);
	}
	cloud_move();
	top_bubble_move();
});
function top_bubble_move(){
	$('#wrap .bg_bubble > div').css('top',0);
	$('#wrap .bg_bubble > div').stop().animate({top:-199000}, 900000, 'easeOutSine', function() {
		top_bubble_move();
	});
	$('#wrapM .bg_bubble > div').css('top',0);
	$('#wrapM .bg_bubble > div').stop().animate({top:-199000}, 900000, 'easeOutSine', function() {
		top_bubble_move();
	});
}
function cloud_move(){
	$('#wrap .bg_cloud').css('left',0);
	$('#wrap .bg_cloud').stop().animate({left:-19360}, 200000, function() {
		cloud_move();
	});
	$('#wrapM .bg_cloud').css('left',0);
	$('#wrapM .bg_cloud').stop().animate({left:-19360}, 200000, function() {
		cloud_move();
	});
}
$(window).scroll(function(){
	var scr = $(document).scrollTop();

	if(scr <= 200){
		$('#wrap .app_sns .bubble').addClass('fadeInDown');
		$('#wrap .app_sns .bubble').removeClass('fadeInUp');

		$('#wrap div.event_twitter h2').addClass("motion");
		$('#wrap div.char_twitter h2').addClass("motion");
		$('#wrap .img_screenshot .txt_sshot').addClass("motion");
	}
    if(scr > 3700){
		$('#wrap .app_sns .bubble').removeClass('fadeInDown');
		$('#wrap .app_sns .bubble').addClass('fadeInUp');
	}
	if(scr > 600 && scr < 1000) {
		if($('#wrap div.event_twitter h2').hasClass("motion")){
			$('#wrap div.event_twitter h2').stop().animate({top:145}, 200, function() {
				$('#wrap div.event_twitter h2').stop().animate({top:158}, 200);
			});
			$('#wrap div.event_twitter h2').removeClass("motion");
		}
	}else if(scr > 2000 && scr < 2500) {
		if($('#wrap div.char_twitter h2').hasClass("motion")){
			$('#wrap div.char_twitter h2').stop().animate({top:-20}, 200, function() {
				$('#wrap div.char_twitter h2').stop().animate({top:0}, 200);
			});
			$('#wrap div.char_twitter h2').removeClass("motion");
		}
	}else if(scr > 2600) {
		if($('#wrap .img_screenshot .txt_sshot').hasClass("motion")){
			$('#wrap .img_screenshot .txt_sshot').stop().animate({width: 0,left:537.5,top:276,opacity:0}, 200, function() {
				$('#wrap .img_screenshot .txt_sshot').stop().animate({width: 1115,left: 27.5,top:246,opacity:1}, 200);
			});
			$('#wrap .img_screenshot .txt_sshot').removeClass("motion");
		}
	}
});
function sshot_move(v){
	var n = 1000;
	var l = $('#wrap .list_mask ul').css('left').replace(/[^0-9]/g, "");
	var w = $('#wrap .list_mask ul > li').css('width').replace(/[^0-9]/g, "");
	var m = $('#wrap .list_mask ul > li + li').css('margin-left').replace(/[^0-9]/g, "");

	if(v == 'left'){
		$('#wrap .img_screenshot .mask').removeClass('hidden');
		if(l != 0){	
			$('#wrap .event_con div.img_screenshot ol li').removeClass('btn_on');

			$('#wrap .img_list .btn_left').css('opacity',1);
			$('#wrap .list_mask ul').stop().animate({left:(l*1-n)*-1}, 500, 'easeOutQuint', function() {
				$('#wrap .img_screenshot .mask').addClass('hidden');
				var d = l/1000-1;
				var dn = '.event_con div.img_screenshot ol li:eq('+d+')';
				$('#wrap .event_con div.img_screenshot ol li').removeClass('btn_on');
				$(dn).addClass('btn_on');
			});
		}else if(l == 0){
			//alert('처음 이미지 입니다.');
			$('#wrap .img_screenshot .mask_right').addClass('hidden');
		}
	}else if(v == 'right'){
		var ln = ($('#wrap .list_mask ul > li').size())/2-1;
		var mx = ln*n*-1;
		$('#wrap .img_screenshot .mask').removeClass('hidden');
		if(l != mx*-1){
			$('#wrap .img_list .btn_right').css('opacity',1);
			$('#wrap .list_mask ul').stop().animate({left:(l*1+n)*-1}, 500, 'easeOutQuint', function() {
				$('#wrap .img_screenshot .mask').addClass('hidden');
				var d = l/1000+1;
				var dn = '.event_con div.img_screenshot ol li:eq('+d+')';
				$('#wrap .event_con div.img_screenshot ol li').removeClass('btn_on');
				$(dn).addClass('btn_on');
			});
		}else if(l == mx*-1){
			//alert('마지막 이미지 입니다.');
			$('#wrap .img_screenshot .mask_left').addClass('hidden');
		}
	}
}
function move_dot(v){
	var n = -1000;
	var vn = '.event_con div.img_screenshot ol li:eq('+v+')';
	$('#wrap .list_mask ul').stop().animate({left:n*v}, 500, 'easeOutQuint');

	$('#wrap .event_con div.img_screenshot ol li').removeClass('btn_on');
	$(vn).addClass('btn_on');
}