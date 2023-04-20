jQuery(function($) {
    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        slidesPerView: 'auto',
        centeredSlides: true,
        paginationClickable: true,
        autoplay: 2500,
        autoplayDisableOnInteraction: false,
        spaceBetween: 30
    });
	intro_car01();
	intro_car02();
	movie_play();
	$(".gnb_open .menu a").click(function(){
		mo_gnb_close();
	});
	// 예외처리
	$(".thume_gallery button").mouseout(function(){
		$(".thume_gallery .btn_left, .thume_gallery .btn_right").removeClass("on");
	});
	$(".thume_gallery .btn_mask").mouseover(function(){
		$(".thume_gallery .btn_left, .thume_gallery .btn_right").removeClass("on");
	});
	// PC 갤러리 스크립트
	var storeName;
	var imgStore;
	var imgLength;
	var imgSize = 1110;
	/*for(var i=1;i< $(".thume_list").length+1;i++){
		storeName = ".thume_gallery .store0" + i;
		imgStore = storeName + " > li";
		imgLength = $(imgStore).length;
		// 갯수를 계산해서 자동으로 넓이들을 적용
		$(storeName).css("width",imgLength*imgSize);
	}*/
	imgStore = ".thume_gallery .thume_list > li";
	imgLength = $(imgStore).length;
	// 갯수를 계산해서 자동으로 넓이들을 적용
	$(".thume_gallery .thume_list").css("width",imgLength*imgSize);
	$(".layer_pop .store_gallery .thume_list img").click(function(){
		var mo_path = $(this).attr("src");
		$(".layer_photo").removeClass("hidden");
		var path = mo_path.replace("assets/images/mo/","assets/images/web/");
		$(".layer_photo .thume").attr("src",path);
	});
	$(".layer_photo .center .thume").click(function(){
		$(".layer_photo").addClass("hidden");
	});
});
$(window).resize(function(){
	//movie_play();
	var pc_mov = document.getElementById("pc_movie");
	var mo_mov = document.getElementById("mo_movie");

	pc_mov.pause();
	mo_mov.pause();

	$("#wrap .movie_control .play").removeClass("hidden");
	$("#wrap .movie_control .stop").addClass("hidden");
});
$(window).scroll(function () {
	/*var pc_mov = document.getElementById("pc_movie");
	var mo_mov = document.getElementById("mo_movie");
	var sc = String($(document).scrollTop());		
	//console.log(sc);
	if ($(window).width() < 1169) {
		
	}else if ($(window).width() >= 1170) {
		if(sc >= "l400"){
			//console.log("1400 이상");
			pc_mov.autoplay = false;
			mo_mov.autoplay = false;
			pc_mov.pause();
			mo_mov.pause();
		}else{
			//console.log("1400 이하");
			pc_mov.autoplay = true;
			mo_mov.autoplay = false;
			pc_mov.play();
			mo_mov.play();
		}
	}*/
}); 
function movie_play(){
	//alert("movie_play!!!!");
	if ($(window).width() < 1169) {
		var pc_mov = document.getElementById("pc_movie");
		var mo_mov = document.getElementById("mo_movie");
		if(navigator.userAgent.match(/iPhone|iPod|iPad|Android/i)) {
			pc_mov.autoplay = false;
			mo_mov.autoplay = false;
		}else{
			pc_mov.autoplay = false;
			mo_mov.autoplay = true;
		}
		// $("body").css("overflow","visible");
		// $("body").css("height","auto");
	}else if ($(window).width() >= 1170) {
		var pc_mov = document.getElementById("pc_movie");
		var mo_mov = document.getElementById("mo_movie");
		pc_mov.autoplay = true;
		mo_mov.autoplay = false;
		$("#wrapM .gnb_open, #wrapM .layer_photo, #wrapM .layer_pop").addClass("hidden");
		$("#wrapM .gnb_open").css("top",-1000);
		$("#wrapM .layer_pop").css("top",-1300);

		$("#wrapM .gnb").removeClass("hidden");
		$("#wrapM .gnb").css("display","block");
	}
}
function pc_movie_control(txt){
	var pc_mov = document.getElementById("pc_movie");
	var mo_mov = document.getElementById("mo_movie");

	if(txt=='play'){
		pc_mov.play();
		mo_mov.pause();

		$("#wrap .movie_control .play").addClass("hidden");
		$("#wrap .movie_control .stop").removeClass("hidden");
	}else if(txt=='stop'){
		pc_mov.pause();
		mo_mov.pause();

		$("#wrap .movie_control .play").removeClass("hidden");
		$("#wrap .movie_control .stop").addClass("hidden");
	}
}
function intro_car01(){
	$('.intro_car01').css("top",1440);
	$('.intro_car01').css("left",990);
	$('.intro_car01').stop().animate({top:4,left:-1472}, 10000, function(){
		intro_car01();
	});
}
function intro_car02(){
	$('.intro_car02').css("top",352);
	$('.intro_car02').css("left",-1004);
	$('.intro_car02').stop().animate({top:1354,left:740}, 10000, function(){
		intro_car02();
	});
}
function media_list(n){
	$(".con_media .media_list").addClass("hidden");
	$(".paging_list .btn_paging").removeClass("on");
	if(n == 1){
		$(".con_media .media_list01").removeClass("hidden");
		$(".paging_list .btn_paging01").addClass("on");
	}else if(n == 2){
		$(".con_media .media_list02").removeClass("hidden");
		$(".paging_list .btn_paging02").addClass("on");
	}else if(n == 3){
		$(".con_media .media_list03").removeClass("hidden");
		$(".paging_list .btn_paging03").addClass("on");
	}
}
function pclinkMove(v){
	var offset = $("#" + v).offset();
	$('html, body').animate({scrollTop : offset.top}, 400);
};
function mo_gnb_open(){
    // $("body").css("overflow","hidden");
    // $("body").css("height",$(window).height());
	$('body').bind('touchmove', function(e){e.preventDefault()});

	$("#wrapM .gnb").fadeOut(1000);
	$("#wrapM .gnb_open").removeClass("hidden");
	
	$("#wrapM .gnb_open").stop().animate({top:0}, 1000, 'easeOutBounce');
}
function mo_gnb_close(){
    // $("body").css("overflow","visible");
    // $("body").css("height","auto");
	$('body').unbind('touchmove');

	$("#wrapM .gnb").fadeIn(100);
	$("#wrapM .gnb_open").stop().animate({top:-1000}, 300, 'easeOutQuint', function(){
		$("#wrapM .gnb_open").addClass("hidden");
	});
}
function mo_layer_open(v){
    $("body").css("overflow","hidden");
    $("body").css("height",$(window).height());
	$("#wrapM .layer_pop").removeClass("hidden");
	//$('body').bind('touchmove', function(e){e.preventDefault()});
	var cls01 = "store0"+v;
	var cls02 = ".store0"+v;
	$(cls02).removeClass("hidden");
	$("#wrapM .layer_pop #layer_pop_tit").addClass(cls01);
	$("#wrapM .layer_pop").removeClass("hidden");
}
function mo_layer_close(){
    $("body").css("overflow","visible");
    $("body").css("height","auto");
	//$('body').unbind('touchmove');
	
	$("#wrapM .layer_pop").addClass("hidden");
	$("#wrapM .layer_pop .addr_store").addClass("hidden");
	$("#wrapM .layer_pop .store_gallery").addClass("hidden");
	$("#wrapM .layer_pop #layer_pop_tit").attr("class","");
	$("#wrapM .layer_pop #layer_pop_tit").addClass("layer_pop_tit");
}
function mo_movie_play(){
	$(".movie .bg_movie").fadeOut();
	var mo_mov = document.getElementById("mo_movie");
	mo_mov.play()
}
function pcGalleryOpen(v){
	var list = $(".layer_pop .thume_list");
	$(".btn_store_tit li").removeClass("on");
	$(".layer_pop").removeClass("hidden");
	var ix = ".btn_store_tit li:nth-child("+v+")";
	$(ix).addClass("on");

	if(v == 1){
		list.css("left",-1110);
	}else if(v == 2){
		list.css("left",-27750);
	}else if(v == 3){
		list.css("left",-49950);
	}else if(v == 4){
		list.css("left",-72150);
	}else if(v == 5){
		list.css("left",-97680);
	}else if(v == 6){
		list.css("left",-124320);
	}else if(v == 7){
		list.css("left",-146520);
	}
}
function pcGalleryClose(){
	$(".layer_pop").addClass("hidden");
}
function pcGallery(txt, e){
	var list = $(".layer_pop .thume_list");
	var imgSize = 1110;
	var maxWidth = (list.css("width").replace(/[^0-9]/g, "")-imgSize)*-1;
	var	leftValue = list.css("left").replace(/[^0-9]/g, "")*-1;
	var moveValue;
	var num;
	$(".thume_gallery .btn_mask").removeClass("hidden");
	$(".thume_gallery .btn_left, .thume_gallery .btn_right").removeClass("on");
	if(txt == 'left'){
		//console.log(typeof leftValue);
		if(leftValue == imgSize*-1){
			list.stop().animate({left:0}, 200, 'easeOutQuint', function(){	
				$(".thume_gallery .btn_mask").addClass("hidden");
				list.css("left",(list.width()-imgSize*2)*-1);
				store_check();
			});
		}else{ 
			moveValue = leftValue + imgSize;
			list.stop().animate({left:moveValue}, 200, 'easeOutQuint', function(){	
				$(".thume_gallery .btn_mask").addClass("hidden");
				store_check();
			});
		}
	}else if(txt == 'right'){
		// console.log(typeof leftValue);
		// console.log(typeof Number(list.width()*-1+imgSize*2));
		if(leftValue == Number(list.width()*-1+imgSize*2)){
			list.stop().animate({left:list.width()*-1+imgSize}, 200, 'easeOutQuint', function(){	
				store_check();
				$(".thume_gallery .btn_mask").addClass("hidden");
				list.css("left",imgSize*-1);
			});
		}else{
			moveValue = leftValue - imgSize;
			//console.log(typeof moveValue);
			list.stop().animate({left:moveValue}, 200, 'easeOutQuint', function(){	
				$(".thume_gallery .btn_mask").addClass("hidden");
				store_check();
				if(leftValue == maxWidth+imgSize){
					//console.log("현재 갤러리 끝");
					list.css("left",0);	
					store_check();
				}
			});
		}
	}
}
function pcGalleryTit(v){
	var list = $(".layer_pop .thume_list");
	var sel = ".btn_store_tit li:nth-child("+v+")";
	$(".btn_store_tit li").removeClass("on");
	$(sel).addClass("on");
	if(v == 1){
		list.stop().animate({left:-1110}, 200, 'easeOutQuint');
	}else if(v == 2){
		list.stop().animate({left:-27750}, 200, 'easeOutQuint');
	}else if(v == 3){
		list.stop().animate({left:-49950}, 200, 'easeOutQuint');
	}else if(v == 4){
		list.stop().animate({left:-72150}, 200, 'easeOutQuint');
	}else if(v == 5){
		list.stop().animate({left:-97680}, 200, 'easeOutQuint');
	}else if(v == 6){
		list.stop().animate({left:-124320}, 200, 'easeOutQuint');
	}else if(v == 7){
		list.stop().animate({left:-146520}, 200, 'easeOutQuint');
	}
}
function pcMapOpen(){
	var ix = $(".btn_store_tit li.on").index()+1;
	var map;
	/*var path = "assets/images/web/store/0"+ix+"/map.png";
	$(".store_map img").attr("src",path);
	$(".store_map").removeClass("hidden");*/
	if(ix == 1){
		map = "http://naver.me/GUzLbGER";
	}else if(ix == 2){
		map = "http://naver.me/F30Dce4M";
	}else if(ix == 3){
		map = "http://naver.me/G9NhMAXL";
	}else if(ix == 4){
		map = "http://naver.me/GIuzaj8R";
	}else if(ix == 5){
		map = "http://naver.me/xvFj2dWi";
	}else if(ix == 6){
		map = "http://naver.me/5ENkzlY5 ";
	}else if(ix == 7){
		map = "http://naver.me/F2OFJe67";
	}
	window.open(map);
}
/*function pcMapClose(){
	$(".store_map").addClass("hidden");
}*/
function store_check(){
	var list = $(".layer_pop .thume_list");
	var leftValue = list.css("left").replace(/[^0-9]/g, "")*-1;
	if(leftValue == -26640 || leftValue  == -1110 || leftValue == -160950){
		$(".btn_store_tit li").removeClass("on");
		$(".btn_store_tit li:nth-child(1)").addClass("on");
	}else if(leftValue == -27750 || leftValue  == -48840){
		$(".btn_store_tit li").removeClass("on");
		$(".btn_store_tit li:nth-child(2)").addClass("on");
	}else if(leftValue == -49950 || leftValue  == -71040){
		$(".btn_store_tit li").removeClass("on");
		$(".btn_store_tit li:nth-child(3)").addClass("on");
	}else if(leftValue == -72150 || leftValue  == -96570){
		$(".btn_store_tit li").removeClass("on");
		$(".btn_store_tit li:nth-child(4)").addClass("on");
	}else if(leftValue == -97680 || leftValue  == -123210){
		$(".btn_store_tit li").removeClass("on");
		$(".btn_store_tit li:nth-child(5)").addClass("on");
	}else if(leftValue == -124320 || leftValue == -145410){
		$(".btn_store_tit li").removeClass("on");
		$(".btn_store_tit li:nth-child(6)").addClass("on");
	}else if(leftValue == -146520 || leftValue == 0 || leftValue == -159840){
		$(".btn_store_tit li").removeClass("on");
		$(".btn_store_tit li:nth-child(7)").addClass("on");
	}	
}