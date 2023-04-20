jQuery(function($) {
	$('.popup-youtube').magnificPopup({
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: true
    });
    

});
function play_audio(task) {
	$(".btn_bgm .btn").addClass("hidden");
	if(task == 'play'){
		document.getElementById('pc_bgm').play();
		$(".btn_bgm .b_on").removeClass("hidden");
	}else if(task == 'stop'){
		document.getElementById('pc_bgm').pause();
		$(".btn_bgm .b_off").removeClass("hidden");
	}
}

function btn_pop_open(){
    $(".pop_con").removeClass("hidden");
	$(".pop_con > div").addClass("hidden");
	$(".pop_con .pop_email01").removeClass("hidden");

	$(".pop_con input[type='text']").val('');
}
function btn_pop_close(){
    $(".pop_con").addClass("hidden");
}
function btn_pop_top(){
    $(".pop_con").addClass("hidden");
    //$('html, body').animate({scrollTop: 0});
}
function story_move(v){
	var n = 980;
	var l = $('#wrap .story_slide .slide_list').css('left').replace(/[^0-9]/g, "");
	var w = $('#wrap .story_slide .slide_list > li').css('width').replace(/[^0-9]/g, "");
	var m = $('#wrap .story_slide .slide_list > li + li').css('margin-left').replace(/[^0-9]/g, "");
	var ln = $('#wrap .story_slide .slide_list > li').size()-1;
    $(".btn_mask").removeClass("hidden");
    $(".story_slide .slide_dot li").removeClass("on");
	if(v == 'left'){
		if(l != 0){	
			$('#wrap .story_slide .slide_list').stop().animate({left:(l*1-n)*-1}, 200, 'easeOutQuint', function(){
                var d = '#wrap .story_slide .slide_dot li:eq('+(l/980-1)+')';
                $(d).addClass('on');
				$(".btn_mask").addClass("hidden");
            });
		}else if(l == 0){
			w = Number($('.con03 .story_slide').css('width').replace(/[^0-9]/g, ""));
			var s =  w*ln*-1;
			$('#wrap .story_slide .slide_list').stop().animate({left:s}, 200, 'easeOutQuint', function(){
				$('.story_slide .slide_dot li:last-child').addClass("on");
				$(".btn_mask").addClass("hidden");
            });
		}
	}else if(v == 'right'){
		var mx = ln*n*-1;
		if(l != mx*-1){
			$('#wrap .story_slide .slide_list').stop().animate({left:(l*1+n)*-1}, 200, 'easeOutQuint', function() {
                var d = '#wrap .story_slide .slide_dot li:eq('+(l/980+1)+')';
                $(d).addClass('on');
				$(".btn_mask").addClass("hidden");
            });
		}else if(l == mx*-1){
			var s = 0;
			$('#wrap .story_slide .slide_list').stop().animate({left:s}, 200, 'easeOutQuint', function(){
				$('.story_slide .slide_dot li:first-child').addClass("on");
				$(".btn_mask").addClass("hidden");
            });
		}
	}
}
function intro_move(v){
	var n = 490;
	var l = $('#wrap .intro_slide .slide_list').css('left').replace(/[^0-9]/g, "");
	var w = $('#wrap .intro_slide .slide_list > li').css('width').replace(/[^0-9]/g, "");
	var m = $('#wrap .intro_slide .slide_list > li + li').css('margin-left').replace(/[^0-9]/g, "");
	var ln = $('#wrap .intro_slide .slide_list > li').size()-2;
    $(".btn_mask").removeClass("hidden");
    $(".intro_slide .slide_dot li").removeClass("on");
	if(v == 'left'){
		if(l != 0){	
			$('#wrap .intro_slide .slide_list').stop().animate({left:(l*1-n)*-1}, 200, 'easeOutQuint', function(){
                var d = '#wrap .intro_slide .slide_dot li:eq('+(l/490-1)+')';
                $(d).addClass('on');
				$(".btn_mask").addClass("hidden");
            });
		}else if(l == 0){
			w = Number($('.con03 .intro_slide').css('width').replace(/[^0-9]/g, ""));
			var s =  -1470;
			$('#wrap .intro_slide .slide_list').stop().animate({left:s}, 200, 'easeOutQuint', function(){
				$('.intro_slide .slide_dot li:last-child').addClass("on");
				$(".btn_mask").addClass("hidden");
            });
		}
	}else if(v == 'right'){
		var mx = ln*n*-1;
        
		if(l != mx*-1){
			$('#wrap .intro_slide .slide_list').stop().animate({left:(l*1+n)*-1}, 200, 'easeOutQuint', function() {
				var d = '#wrap .intro_slide .slide_dot li:eq('+(l/490+1)+')';
                $(d).addClass('on');
				$(".btn_mask").addClass("hidden");
            });
		}else if(l == mx*-1){
			var s = 0;
			$('#wrap .intro_slide .slide_list').stop().animate({left:s}, 200, 'easeOutQuint', function(){
				$('.intro_slide .slide_dot li:first-child').addClass("on");
				$(".btn_mask").addClass("hidden");
            });
		}
	}
}
function cast_move(v){
	var n = 980;
	var l = $('#wrap .cast_slide .slide_list').css('left').replace(/[^0-9]/g, "");
	var w = $('#wrap .cast_slide .slide_list > li').css('width').replace(/[^0-9]/g, "");
	var m = $('#wrap .cast_slide .slide_list > li + li').css('margin-left').replace(/[^0-9]/g, "");
	var ln = $('#wrap .cast_slide .slide_list > li').size()-1;
    $(".btn_mask").removeClass("hidden");

    $(".con04 .slide_dot li").removeClass("on");
	if(v == 'left'){
		if(l != 0){	
			$('#wrap .cast_slide .slide_list').stop().animate({left:(l*1-n)*-1}, 200, 'easeOutQuint', function(){
                var d = '#wrap .con04 .slide_dot li:eq('+(l/980-1)+')';
                $(d).addClass('on');
				$(".btn_mask").addClass("hidden");
            });
		}else if(l == 0){
			w = Number($('.con04 .cast_slide').css('width').replace(/[^0-9]/g, ""));
			var s =  w*ln*-1;
			$('#wrap .con04 .slide_list').stop().animate({left:s}, 200, 'easeOutQuint', function(){
				$('.con04 .slide_dot li:last-child').addClass("on");
				$(".btn_mask").addClass("hidden");
            });
		}
	}else if(v == 'right'){
		var mx = ln*n*-1;
		if(l != mx*-1){
			$('#wrap .cast_slide .slide_list').stop().animate({left:(l*1+n)*-1}, 200, 'easeOutQuint', function() {
                var d = '.con04 .slide_dot li:eq('+(l/980+1)+')';
                $(d).addClass('on');
				$(".btn_mask").addClass("hidden");
            });
		}else if(l == mx*-1){
			var s = 0;
			$('.con04 .slide_list').stop().animate({left:s}, 200, 'easeOutQuint', function(){
				$('.con04 .slide_dot li:first-child').addClass("on");
				$(".btn_mask").addClass("hidden");
            });
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