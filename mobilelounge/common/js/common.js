jQuery(function($){
	/* 상단 헤더메뉴 */
	$("div#header ul.header_menu_img li img, div#header a img, div#header a.header_bookmark img, div#footer div.quick_group ul li a img,div#section div.category_event ul.category_event_list img, div#aside ul.aside_menu li.last_aside_menu a img, div#aside ul.aside_menu li.event_aside_menu img").mouseover(function (){
	var file = $(this).attr('src').split('/');
	var filename = file[file.length-1];
	var path = '';
	for(i=0 ; i < file.length-1 ; i++){
	path = ( i == 0 )?path + file[i]:path + '/' + file[i];
	}
		$(this).attr('src',path+'/'+filename.replace('_off.gif','_on.gif'));
	}).mouseout(function(){
	var file = $(this).attr('src').split('/');
	var filename = file[file.length-1];
	var path = '';
	for(i=0 ; i < file.length-1 ; i++){
	path = ( i == 0 )?path + file[i]:path + '/' + file[i];
	}
		$(this).attr('src',path+'/'+filename.replace('_on.gif','_off.gif'));
	});
	/* GNB */
	$("div#nav ul.gnb li a").hover(function () {
		$(this).toggleClass("gnb_on");
	});
	$("div#nav ul.gnb li a").click(function () {
		$("div#nav ul.gnb li a").removeClass("gnb_on","crt_on");
		$(this).addClass("gnb_on","crt_on");
	});
	/* GNB 오버 초기화 */
	$("div#nav ul.gnb li a").hover(function () {
		$("div#nav ul.gnb li a").removeClass("gnb_on");
		$(this).addClass("gnb_on");
	});
	$("div#nav ul.gnb_open").fadeOut('normal', function(){});
	$("div#nav ul.gnb_open").addClass('hidden');
	$("div#nav ul.gnb li a").mouseover(function () {
		if($(this).hasClass("gnb_case")) {
			$("div#nav ul.gnb_open_case").removeClass('hidden');
			$("div#nav ul.gnb_open").fadeOut('fast', function(){});
			$("div#nav ul.gnb_open_case").fadeIn('fast', function(){return false;});
		} else if($(this).hasClass("gnb_film")) {
			$("div#nav ul.gnb_open_film").removeClass('hidden');
			$("div#nav ul.gnb_open").fadeOut('fast', function(){});
			$("div#nav ul.gnb_open_film").fadeIn('fast', function(){return false;});
		} else if($(this).hasClass("gnb_acc")) {
			$("div#nav ul.gnb_open_acc").removeClass('hidden');
			$("div#nav ul.gnb_open").fadeOut('fast', function(){});
			$("div#nav ul.gnb_open_acc").fadeIn('fast', function(){return false;});
		} else if($(this).hasClass("gnb_audio")) {
			$("div#nav ul.gnb_open_audio").removeClass('hidden');
			$("div#nav ul.gnb_open").fadeOut('fast', function(){});
			$("div#nav ul.gnb_open_audio").fadeIn('fast', function(){return false;});
		} else {
			$("div#nav ul.gnb_open").fadeOut('fast', function(){});
		}
	});
	$("div#nav > div > div.nav_over_left, div#nav > div > div.nav_over_right").mouseover(function () {
		$("div#nav ul.gnb_open").fadeOut('fast', function(){});
	});
	$("div#nav ul.gnb li a").mouseout(function () {
		if($(this).hasClass("gnb_case")) {

		} else if($(this).hasClass("gnb_film")) {

		} else if($(this).hasClass("gnb_acc")) {

		} else if($(this).hasClass("gnb_audio")) {

		}
	});
	/* GNB open 오버시 GNB 유지 */
	$("div#nav > ul").mouseover(function () {
		if($(this).hasClass("gnb_open_case")) {
			$("div#nav ul.gnb li a.gnb_case").addClass("gnb_on");
		} else if($(this).hasClass("gnb_open_film")) {
			$("div#nav ul.gnb li a.gnb_film").addClass("gnb_on");
		} else if($(this).hasClass("gnb_open_acc")) {
			$("div#nav ul.gnb li a.gnb_acc").addClass("gnb_on");
		} else if($(this).hasClass("gnb_open_audio")) {
			$("div#nav ul.gnb li a.gnb_audio").addClass("gnb_on");
		}
	});
	$("div#header").mouseover(function () {
		$("div#nav ul.gnb_open").fadeOut('normal', function(){});
	});
	$("div#nav ul.gnb_open").mouseleave(function () {
		$("div#nav ul.gnb_open").fadeOut('normal', function(){});
	});
	$("div#nav ul.gnb_open li dl dd > ul > li > a").hover(function () {
		$(this).toggleClass("gnb_open_li_on");
	});
	$("div#nav ul").mouseleave(function () {
		//$("div#nav ul.gnb_open_audio, div#nav ul.gnb_open_acc, div#nav ul.gnb_open_film, div#nav ul.gnb_open_case").addClass("hidden");
		$("div#nav ul.gnb li a").removeClass("gnb_on");
	});
	/* GNB more 오버시 텍스트 색 */
	$("div#nav ul.gnb_open li dl.gnb_open_half dd > a").hover(function () {
		$(this).toggleClass("more_over_txt");
	});
	/* 현재 선택 영향 X */
	$("div#nav ul.gnb li a.crt_on").hover(function () {
		$(this).addClass("gnb_on");
	});
	/* Oneday 배경 */
	$("div#nav ul.gnb li.oneday").hover(function () {
		$(this).toggleClass("oneday_over");
		/* $(this).children("a").toggleClass("oneday_over"); */
		$("div#nav ul.gnb li.oneday a").addClass("gnb_on");
	});
	/* 검색창 초기화 */
	$(".global_search").focus(function() { 
		$(this).val('');
		$(this).css("color","#8c8c95");
	}).blur(function() { 
			$(this).val("Search here"); 
			$(this).css("color","#aeaeb4");
	});
	/* 메인 product_list_group */
	$("div.product_visual ul.product_menu li.product_menu_newarrival, div.product_visual ul.product_menu li.product_menu_case, div.product_visual ul.product_menu li.product_menu_film, div.product_visual ul.product_menu li.product_menu_acc,  div.product_visual ul.product_menu li.product_menu_audio,  div.product_visual ul.product_menu li.product_menu_fashion").click(function () { 
		$("div.product_visual ul.product_menu li").removeClass("product_menu_on");
		$(this).addClass("product_menu_on");
		$('html,body').scrollTop(1200);
	});
	$("div.product_visual ul.product_menu li").click(function(){
		$("div.product_list_group").css("height","400");
		$("div.product_visual button.product_visual_btn_plus").removeClass("hidden");
		$("div.product_visual button.product_visual_btn_minus").addClass("hidden");
	});
	var event_visual_max_num = $("div.eventday_visual div.event_visual ul li").children().size();
	var event_visual_max_num = 1;
	/* 스크롤 시 탑메뉴 변화 */
	//$("div#top_menu div#header ul.header_menu_img").addClass("hidden");
	$(window).scroll(function(){
		var crt_scl = $(window).scrollTop();

		if(crt_scl == 0) {
			// 스크롤 탑 일때
			$("div#top_menu div#header ul.header_menu_img").addClass("hidden");
			$("div#top_menu div#header ul.header_menu_txt").removeClass("hidden");
			$("div#top_menu").removeClass("top_menu_scroll");
			$("div#top_menu div#header h1").removeClass("hidden");
			$("div#top_menu div#nav").addClass("nav_top_bg");	
			
			var v_top = 275;
			$("div#contents").css("margin-top",v_top);
			$("div#nav ul.gnb_open").css("top",259);
			$("div#nav > div ul.gnb").css("padding-top",19);
			$("div#nav fieldset.global_search_group").css("margin-top",13);
		}else if(crt_scl != 0){
			// 스크롤 탑 아닐 때
			$("div#top_menu div#header ul.header_menu_txt").addClass("hidden");
			$("div#top_menu div#header ul.header_menu_img").removeClass("hidden");
			$("div#top_menu").addClass("top_menu_scroll");
			$("div#top_menu div#header h1").addClass("hidden");
			$("div#top_menu div#nav").removeClass("nav_top_bg");
			
			var v_top = 131;
			$("div#contents").css("margin-top",v_top);
			$("div#nav ul.gnb_open").css("top",93);
			$("div#nav > div ul.gnb").css("padding-top",0);
			$("div#nav fieldset.global_search_group").css("margin-top",0);

			$("div#section div.category_header ul.category_header_select_group li ul.category_header_select01").addClass("hidden");
			$("div#section div.category_header ul.category_header_select_group li ul.category_header_select02").addClass("hidden");	
		}
		//var v_top = $("div#top_menu").height();
	});
	// 탑메뉴 텍스트 온/오프
	$("div#header ul.header_menu_txt a").hover(function(){
		$(this).toggleClass("header_menu_txt_on");
	});
	// 탑메뉴 이미지 텍스트 출력
	$("div#top_menu div#header ul.header_menu_img > li > p").addClass("hidden");
	$("div#top_menu div#header ul.header_menu_img > li").mouseover(function(){
		$(this).children("p").removeClass("hidden");
	});
	$("div#top_menu div#header ul.header_menu_img > li").mouseout(function(){
		$(this).children("p").addClass("hidden");
	});
	/* 메인 product_list 더보기 */
	$("div.product_visual button.product_visual_btn_minus").addClass("hidden");
	$("div.product_visual button.product_visual_btn_plus").click(function(){
		var name = $("div.product_visual div.product_list_group");

		var brandfocus_list_group = 400;
		var h2 = 800;
		var h3 = 1200;
		var h4 = 1600;
		var h5 = 2000;
		if(name.height() == brandfocus_list_group) {
			name.css("height",h2);
			// $('html,body').scrollTop(1050);
			$('html,body').scrollTop(1410);
		}else if(name.height() == h2) {
			name.css("height",h3);
			$('html,body').scrollTop(1810);
		}else if(name.height() == h3) {
			name.css("height",h4);
			$('html,body').scrollTop(2210);
		}else if(name.height() == h4) {
			name.css("height",h5);
			$('html,body').scrollTop(2610);
			$(this).addClass("hidden");
			$("div.product_visual button.product_visual_btn_minus").removeClass("hidden");
		}
	});
	$("div.product_visual button.product_visual_btn_minus").click(function(){
		var name = $("div.product_visual div.product_list_group");
		var brandfocus_list_group = 400;
		name.css("height",brandfocus_list_group);
		$(this).addClass("hidden");
		$("div.product_visual button.product_visual_btn_plus").removeClass("hidden");
		$('html,body').scrollTop(1200);
	});
	/* 메인 bestsellers_list_group 더보기 */
	/* $("div.bestsellers_visual button.bestsellers_btn_minus").addClass("hidden"); */
	$("div.bestsellers_visual button.bestsellers_btn_plus").click(function(){
		var name = $("div.bestsellers_visual div.bestsellers_list_group");

		//var brandfocus_list_group = 468;
		var h2 = 775;
		var h3 = 1140;
		if(name.height() == h2) {
			name.css("height",h3);
			$("div.bestsellers_visual button.bestsellers_btn_minus").removeClass("hidden");
			$(this).addClass("hidden");
			$('html,body').scrollTop(2800);
		}
	});
	$("div.bestsellers_visual button.bestsellers_btn_minus").click(function(){
		var name = $("div.bestsellers_visual div.bestsellers_list_group");

		//var brandfocus_list_group = 468;
		var h2 = 775;
		var h3 = 1140;
		if(name.height() == h3) {
			name.css("height",h2);
			$(this).addClass("hidden");
			$("div.bestsellers_visual button.bestsellers_btn_plus").removeClass("hidden");
			$('html,body').scrollTop(2350);
		}
	});
	/* 메인 브랜드 포커스 */
	$("div.brandfocus_visual ul.brandfocus_logo_group li").click(function(){
		$("div.brandfocus_visual ul.brandfocus_logo_group li").removeClass("brandfocus_logo_on");
		$(this).addClass("brandfocus_logo_on");
	});
	/* 메인 모델 보기 */
	$("div.modelview_visual ul li").hover(function(){
		$(this).toggleClass("modelview_on");
	});
	/* 브랜드 모델 선택 */
	$("div.category_mobilebrand_tab ul li").click(function(){
		$(this).parent("ul").parent("div").children("ul").children("li").removeClass("modelview_on");
		$(this).addClass("modelview_on");
	});
	/* 메인 슬라이드 */
	$(function(){
		scrollComponent.fnSlider({
			slider : '#mainEvent .slideWrap',
			time : 5000, // 자동 롤링 시간
			menu : true,
		});
	});
	/* 이벤트/세일 슬라이드 */
	$('.slider').glide({
		autoplay: 5000,
		hoverpause:true,
		arrows:true,
	});
	// 사이드 이벤트 슬라이드
	$('#banner-fade').bjqs({
		width: 940,
		height: 528,
		responsive  : true,
		automatic : true,
		hoverpause: true,
		animspeed :  5000,
	});
	/* 사이드메뉴 오버/아웃 */
	$("div#aside ul.aside_menu li").hover(function(){
		if($(this).hasClass("no_opacity")){
			return;	
		}
		$(this).children("a").toggleClass("opacity");
	});
	/* 카테고리 비쥬얼 수동 오버/아웃 */
	$("div.category_img_visual").click(function(){
		if($(this).height() == 175) {
			$(this).animate({height: "305px"}, 500);
		}else if($(this).height() == 305) {
			$(this).animate({height: "175px"}, 500);
		}
	});
	/* 카테고리 슬라이드 넓이 자동 적용 */
	var category_size = $("div.category_hotfocus_visual div#main_event_slides ul.slidesjs-pagination li").size();
	var category_width = 25*(category_size+1);
	//alert(category_width);
	$("div.category_hotfocus_visual div#main_event_slides ul.slidesjs-pagination").css("width",category_width);
	// 카테고리 newarriral 슬라이드
	$("div.category_newarriral_visual div.newarriral_tab_contant01 ul.newarriral_list").carouFredSel({
		items : 4,
		direction : "left",
		prev: "#prev_newarriral_list_rolling",
		next: "#next_newarriral_list_rolling",
		scroll: 1,
		circular: true,
		infinite: true,
		auto: false,
		width:698,
		height:180
	});
	// 카테고리 newarriral 슬라이드 버튼 온/오프
	$("div.category_newarriral_visual div.category_newarriral_tab div.newarriral_tab_contant a#next_newarriral_list_rolling").mouseover(function(){
		$(this).removeClass("next");
		$(this).addClass("next_on");
	});
	$("div.category_newarriral_visual div.category_newarriral_tab div.newarriral_tab_contant a#next_newarriral_list_rolling").mouseout(function(){
		$(this).addClass("next");
		$(this).removeClass("next_on");
	});
	$("div.category_newarriral_visual div.category_newarriral_tab div.newarriral_tab_contant a#prev_newarriral_list_rolling").mouseover(function(){
		$(this).removeClass("prev");
		$(this).addClass("prev_on");
	});
	$("div.category_newarriral_visual div.category_newarriral_tab div.newarriral_tab_contant a#prev_newarriral_list_rolling").mouseout(function(){
		$(this).addClass("prev");
		$(this).removeClass("prev_on");
	});
	// 5개 탭 버튼
	$("div.category_newarriral_visual div.category_newarriral_tab div.newarriral_tab_contant a.next5").mouseover(function(){
		$(this).removeClass("next5");
		$(this).addClass("next5_on");
	});
	$("div.category_newarriral_visual div.category_newarriral_tab div.newarriral_tab_contant a.next5").mouseout(function(){
		$(this).addClass("next5");
		$(this).removeClass("next5_on");
	});
	$("div.category_newarriral_visual div.category_newarriral_tab div.newarriral_tab_contant a.prev5").mouseover(function(){
		$(this).removeClass("prev5");
		$(this).addClass("prev5_on");
	});
	$("div.category_newarriral_visual div.category_newarriral_tab div.newarriral_tab_contant a.prev5").mouseout(function(){
		$(this).addClass("prev5");
		$(this).removeClass("prev5_on");
	});
	// 카테고리 newarriral 3개 탭 선택
	$("div.category_newarriral_visual div.newarriral_tab_contant02,div.category_newarriral_visual div.newarriral_tab_contant03").addClass("hidden");
	$("div.category_newarriral_visual ul.newarriral_tab li").mouseover(function(){
		$("div.category_newarriral_visual ul.newarriral_tab li").removeClass("newarriral_tab_on");
		$(this).addClass("newarriral_tab_on");
		$("div#section div.category_newarriral_visual div.category_newarriral_tab > div > ul.newarriral_sub_tab > li").removeClass("newarriral_sub_tab_on");
		$("div#section div.category_newarriral_visual div.category_newarriral_tab > div > ul.newarriral_sub_tab > li:first-child").addClass("newarriral_sub_tab_on");
	});
	// 카테고리 newarriral 5개 탭 선택
	$("div#section div.category_newarriral_visual div.category_newarriral_tab ul.newarriral_tab5 > li").mouseover(function(){
		$("div#section div.category_newarriral_visual div.category_newarriral_tab ul.newarriral_tab5 > li").removeClass("newarriral_tab5_on");
		$(this).addClass("newarriral_tab5_on");
		$("div#section div.category_newarriral_visual div.category_newarriral_tab > div > ul.newarriral_sub_tab > li").removeClass("newarriral_sub_tab_on");
		$("div#section div.category_newarriral_visual div.category_newarriral_tab > div > ul.newarriral_sub_tab > li:first-child").addClass("newarriral_sub_tab_on");
	});
	// 카테고리 newarriral 5개 탭 메이커 선택
	$("div#section div.category_newarriral_visual div.category_newarriral_tab ul.newarriral_tab_maker li").mouseover(function(){
		$("div#section div.category_newarriral_visual div.category_newarriral_tab ul.newarriral_tab_maker li").removeClass("newarriral_tab_maker_on");
		$(this).addClass("newarriral_tab_maker_on");
		$("div#section div.category_newarriral_visual div.category_newarriral_tab > div > ul.newarriral_sub_tab > li").removeClass("newarriral_sub_tab_on");
		$("div#section div.category_newarriral_visual div.category_newarriral_tab > div > ul.newarriral_sub_tab > li:first-child").addClass("newarriral_sub_tab_on");
	});
	// 카테고리 newarriral 하위 텍스트 메뉴
	$("div#section div.category_newarriral_visual div.category_newarriral_tab > div > ul.newarriral_sub_tab > li").click(function(){
		$("div#section div.category_newarriral_visual div.category_newarriral_tab > div > ul.newarriral_sub_tab > li").removeClass("newarriral_sub_tab_on");
		$(this).addClass("newarriral_sub_tab_on");
	});
	// 카테고리 newarriral 오픈 슬라이드
	//$("div.category_newarriral_slide > ul > li").children("div.slide_tab_contant").slideUp();
	$("div.category_newarriral_slide > ul > li").first().children("div.slide_tab_contant").slideDown();
	$("div.category_newarriral_slide > ul > li").first().addClass("category_newarriral_slide_on");

	$("div.category_newarriral_slide > ul > li").click(function(){
		$("div.category_newarriral_slide > ul > li").removeClass("category_newarriral_slide_on");
		$("div.category_newarriral_slide > ul > li").children("div.slide_tab_contant").slideUp();
		$(this).addClass("category_newarriral_slide_on");
		$(this).children("div.slide_tab_contant").slideDown();
	});
	// 푸터 스크롤탑 버튼
	$("div.companyinfo_copy a.companyinfo_top_btn").click(function(){
		$('html, body').animate( {scrollTop:0} );
	});
	// 셀렉트 박스 온 / 오프
	$("div.category_header > ul > li > select").hover(function(){
		$(this).toggleClass("category_header_select_on");
	});
	// 이전 페이지 가기 
	/*$("div.category_header a.prev_page_go").hover(function(){
		$(this).toggleClass("prev_page_go_on");
	});*/
	// 카테고리 브랜드 버튼
	$("div.category_brand_tab div.category_brand_tab_list ul li button").click(function(){
		$("div.category_brand_tab div.category_brand_tab_list ul li button").removeClass("category_brand_on");
		$(this).addClass("category_brand_on");
	});
	// 카테고리 이미지 선택 중앙정렬을 위한 넓이값
	var tab_list_size = $("div#section div.category_select_tab ul.category_select_tab_list li").size();
	var tab_list_width = tab_list_size * 120;
	$("div#section div.category_select_tab ul.category_select_tab_list").css("width",tab_list_width);
	// 카테고리 GNB
	$("div#section div.category_gnb ul.category_gnb_list > li").hover(function(){
		if($(this).hasClass("category_gnb_list_current")) {
			$(this).addClass("category_gnb_list_current");
			return;
		}
		$(this).toggleClass("category_gnb_list_on");
	});
	// 카테고리 GNB 하위
	$("div#section div.category_gnb ul.category_gnb_list_depth > li").hover(function(){
		$(this).toggleClass("category_gnb_list_depth_on");
		if($(this).hasClass("category_gnb_list_current_depth")) {
			$(this).addClass("category_gnb_list_depth_on");
		}
	});
	// 카테고리 select
	$("div#section div.category_header ul.category_header_select_group > li > a").click(function(){
		if($(this).hasClass("select_open_btn01")) {
			if($("div#section div.category_header ul.category_header_select_group li ul.category_header_select01").hasClass("hidden")) {
				$("div#section div.category_header ul.category_header_select_group li ul.category_header_select01").removeClass("hidden");
				$("div#section div.category_header ul.category_header_select_group li ul.category_header_select02").addClass("hidden");		
			}else{
				$("div#section div.category_header ul.category_header_select_group li ul.category_header_select01").addClass("hidden");
				$("div#section div.category_header ul.category_header_select_group li ul.category_header_select02").addClass("hidden");	
			}
		}else if($(this).hasClass("select_open_btn02")) {
			if($("div#section div.category_header ul.category_header_select_group li ul.category_header_select02").hasClass("hidden")) {
				$("div#section div.category_header ul.category_header_select_group li ul.category_header_select02").removeClass("hidden");
				$("div#section div.category_header ul.category_header_select_group li ul.category_header_select01").addClass("hidden");		
			}else{
				$("div#section div.category_header ul.category_header_select_group li ul.category_header_select01").addClass("hidden");
				$("div#section div.category_header ul.category_header_select_group li ul.category_header_select02").addClass("hidden");	
			}
		}
	});
	$("div#section div.category_header > ul.category_header_select_group > li a.select_open_btn").hover(function(){
		$(this).toggleClass("select_open_btn_underline");
	});
	$("div#section div.category_header > ul.category_header_select_group > li > ul.category_header_select > li > a").hover(function(){
		$(this).toggleClass("current_select");
	});
	// 카테고리 이미지 탭
	$("div#section div.category_select_tab ul.category_select_tab_list > li").click(function(){
		$("div#section div.category_select_tab ul.category_select_tab_list > li").removeClass("tab_list_on");
		$(this).toggleClass("tab_list_on");
	});
	// 카테고리 보기 형식
	$("div#section div.category_select_tab ul.category_list_search_thum").removeClass("hidden");
	$("div#section div.category_select_tab ul.category_list_search_list").addClass("hidden");
	$("div#section div.category_select_tab div.category_order_list ul li.category_view_btn_thum").click(function(){
		$("div#section div.category_select_tab ul.category_list_search_thum").removeClass("hidden");
		$("div#section div.category_select_tab ul.category_list_search_list").addClass("hidden");
		$(this).children("img").attr("src","/ex/images/btn/btn_view_thum01_on.gif");
		$("div#section div.category_select_tab div.category_order_list ul li.category_view_btn_list img").attr("src","/ex/images/btn/btn_view_list01_off.gif");
	});
	$("div#section div.category_select_tab div.category_order_list ul li.category_view_btn_list").click(function(){
		$("div#section div.category_select_tab ul.category_list_search_list").removeClass("hidden");
		$("div#section div.category_select_tab ul.category_list_search_thum").addClass("hidden");
		$(this).children("img").attr("src","/ex/images/btn/btn_view_list01_on.gif");
		$("div#section div.category_select_tab div.category_order_list ul li.category_view_btn_thum img").attr("src","/ex/images/btn/btn_view_thum01_off.gif");
	});
	// 카테고리 - 베스트 탭 선택
	$("div#section div.category_best div.category_best_group ul.category_best_tab_tit li").click(function(){
		$("div#section div.category_best div.category_best_group ul.category_best_tab_tit li").removeClass("category_best_tab_on");
		$(this).addClass("category_best_tab_on");
	});
	$("div#section div.category_best div.category_best_group ul.category_best_tab_menu li").click(function(){
		$("div#section div.category_best div.category_best_group ul.category_best_tab_menu li").removeClass("category_best_tab_menu_on");
		$(this).addClass("category_best_tab_menu_on");
	});
	$("div#section div.category_select_tab div.category_order_list > ul > li").click(function(){
		$("div#section div.category_select_tab div.category_order_list > ul > li").removeClass("category_order_list_on");
		$(this).addClass("category_order_list_on");
	});
	// 마이페이지 회원정보수정 탭 메뉴
	$("div#section div.mypage_step ul.mypage_tab_info > li").click(function(){
		$("div#section div.mypage_step ul.mypage_tab_info > li").removeClass("mypage_tab_tit_on");
		if($(this).hasClass("mypage_tab_modify_tit")) {
			$(this).addClass("mypage_tab_tit_on");
			$("div#section div.mypage_step div.mypage_tab_modify").removeClass("hidden");
			$("div#section div.mypage_step div.mypage_tab_secession").addClass("hidden");
		}else if($(this).hasClass("mypage_tab_secession_tit")) {
			$(this).addClass("mypage_tab_tit_on");
			$("div#section div.mypage_step div.mypage_tab_modify").addClass("hidden");
			$("div#section div.mypage_step div.mypage_tab_secession").removeClass("hidden");
		}
	});
	// 마이페이지 M포인트/쿠폰 탭 메뉴
	$("div#section div.mypage_step ul.mypage_tab > li").click(function(){
		$("div#section div.mypage_step ul.mypage_tab > li").removeClass("mypage_tab_tit_on");
		if($(this).hasClass("mypage_tab_ml_reserve_tit")) {
			$(this).addClass("mypage_tab_tit_on");
			$("div#section div.mypage_step div.mypage_tab_ml_reserve").removeClass("hidden");
			$("div#section div.mypage_step div.mypage_tab_ml_point").addClass("hidden");
			$("div#section div.mypage_step div.mypage_tab_ml_recom").addClass("hidden");
			$("div#section div.mypage_step div.mypage_tab_ml_coupon").addClass("hidden");
		}else if($(this).hasClass("mypage_tab_ml_point_tit")) {
			$(this).addClass("mypage_tab_tit_on");
			$("div#section div.mypage_step div.mypage_tab_ml_reserve").addClass("hidden");
			$("div#section div.mypage_step div.mypage_tab_ml_point").removeClass("hidden");
			$("div#section div.mypage_step div.mypage_tab_ml_recom").addClass("hidden");
			$("div#section div.mypage_step div.mypage_tab_ml_coupon").addClass("hidden");
		}else if($(this).hasClass("mypage_tab_ml_recom_tit")) {
			$(this).addClass("mypage_tab_tit_on");
			$("div#section div.mypage_step div.mypage_tab_ml_reserve").addClass("hidden");
			$("div#section div.mypage_step div.mypage_tab_ml_point").addClass("hidden");
			$("div#section div.mypage_step div.mypage_tab_ml_recom").removeClass("hidden");
			$("div#section div.mypage_step div.mypage_tab_ml_coupon").addClass("hidden");
		}else if($(this).hasClass("mypage_tab_ml_coupon_tit")) {
			$(this).addClass("mypage_tab_tit_on");
			$("div#section div.mypage_step div.mypage_tab_ml_reserve").addClass("hidden");
			$("div#section div.mypage_step div.mypage_tab_ml_point").addClass("hidden");
			$("div#section div.mypage_step div.mypage_tab_ml_recom").addClass("hidden");
			$("div#section div.mypage_step div.mypage_tab_ml_coupon").removeClass("hidden");
		}
	});
	// 마이페이지 탭 메뉴
	$("div#section div.cs_center ul.inquiry_tab > li").click(function(){
		$("div#section div.cs_center ul.inquiry_tab > li").removeClass("cscenter_tab_tit_on");
		if($(this).hasClass("mypage_tab_inquiry_tit")) {
			$(this).addClass("cscenter_tab_tit_on");
			$("div#section div.cs_center div.cs_center_tab_inquiry").removeClass("hidden");
			$("div#section div.cs_center div.cs_center_tab_inquiry_list").addClass("hidden");
		}else if($(this).hasClass("mypage_tab_inquiry_list_tit")){
			$(this).addClass("cscenter_tab_tit_on");
			$("div#section div.cs_center div.cs_center_tab_inquiry").addClass("hidden");
			$("div#section div.cs_center div.cs_center_tab_inquiry_list").removeClass("hidden");
		}
	});
	$("div#section div.cs_center div.cs_center_user_guide ul.cs_center_user_guide_tab li").click(function(){
		$("div#section div.cs_center div.cs_center_user_guide ul.cs_center_user_guide_tab li").removeClass("user_guide_tab_on");
		$(this).addClass("user_guide_tab_on");
	});
	// 상세보기 탭
	$("div#section div.detail_view ul.detail_view_tab li").click(function(){
		$("div#section div.detail_view ul.detail_view_tab li").removeClass("detail_view_tab_on");
		$(this).addClass("detail_view_tab_on");
	});
	// 회원가입 방식 선택
	$("div#section div.sign_up input.sign_up_select_individual").click(function(){
		$("div#section div.sign_up div.table_individual_group").removeClass("hidden");
		$("div#section div.sign_up div.table_business_group").addClass("hidden");
		$("div#section div.sign_up table tr.sign_up_select_business").addClass("hidden");
		$("div#section div.sign_up div.table_foreigner_group").addClass("hidden");
		$("div#section div.sign_up table tr.sign_up_select_foreigner").addClass("hidden");

		$("div#section div.sign_up div.terms_textarea_group").removeClass("hidden");
		$("div#section div.sign_up div.information_textarea_group").removeClass("hidden");
		$("div#section div.sign_up div.foreigner_terms_textarea_group").addClass("hidden");
		$("div#section div.sign_up div.foreigner_information_textarea_group").addClass("hidden");
		$("div#section div.sign_up div.sign_up_btn_area").removeClass("hidden");
		$("div#section div.sign_up div.foreigner_sign_up_btn_area").addClass("hidden");
	});
	$("div#section div.sign_up input.sign_up_select_business").click(function(){
		$("div#section div.sign_up div.table_individual_group").addClass("hidden");
		$("div#section div.sign_up div.table_business_group").removeClass("hidden");
		$("div#section div.sign_up table tr.sign_up_select_business").removeClass("hidden");
		$("div#section div.sign_up div.table_foreigner_group").addClass("hidden");
		$("div#section div.sign_up table tr.sign_up_select_foreigner").addClass("hidden");

		$("div#section div.sign_up div.terms_textarea_group").removeClass("hidden");
		$("div#section div.sign_up div.information_textarea_group").removeClass("hidden");
		$("div#section div.sign_up div.foreigner_terms_textarea_group").addClass("hidden");
		$("div#section div.sign_up div.foreigner_information_textarea_group").addClass("hidden");
		$("div#section div.sign_up div.sign_up_btn_area").removeClass("hidden");
		$("div#section div.sign_up div.foreigner_sign_up_btn_area").addClass("hidden");
	});
	$("div#section div.sign_up input.sign_up_select_foreigner").click(function(){
		$("div#section div.sign_up div.table_individual_group").addClass("hidden");
		$("div#section div.sign_up div.table_business_group").addClass("hidden");
		$("div#section div.sign_up table tr.sign_up_select_business").addClass("hidden");
		$("div#section div.sign_up div.table_foreigner_group").removeClass("hidden");
		$("div#section div.sign_up table tr.sign_up_select_foreigner").removeClass("hidden");

		$("div#section div.sign_up div.terms_textarea_group").addClass("hidden");
		$("div#section div.sign_up div.information_textarea_group").addClass("hidden");
		$("div#section div.sign_up div.foreigner_terms_textarea_group").removeClass("hidden");
		$("div#section div.sign_up div.foreigner_information_textarea_group").removeClass("hidden");
		$("div#section div.sign_up div.sign_up_btn_area").addClass("hidden");
		$("div#section div.sign_up div.foreigner_sign_up_btn_area").removeClass("hidden");
	});
	// 사이트 이벤트 닫기
	// 사이트 이벤트 닫기 - 인덱스 예외
	if($("div#aside div.event_aside").hasClass("index_event_aside")) {
		$("div#aside div.event_aside").animate({right: "57",opacity: 1,}, 800 );
		$("div#aside div.event_aside").removeClass("close");
	}else{
		$("div#aside div.event_aside").addClass("close hidden");
		$("div#aside div.event_aside").animate({right: "-515",opacity: 0,}, 800 );
	}
	$("div#aside div.event_aside p.today_close_txt, div#aside div.event_aside button.aside_event_close_btn01").click(function(){
			$("div#aside div.event_aside").animate({right: "-515",opacity: 0,}, 800 );
			$("div#aside div.event_aside").addClass("close");
	});
	// 사이트 이벤트 닫기 - 클릭
	$("div#aside ul.aside_menu li.event_aside_menu").click(function(){
		if($("div#aside div.event_aside").hasClass("close")) {
			$("div#aside div.event_aside").animate({right: "57",opacity: 1,}, 800 );
			$("div#aside div.event_aside").removeClass("close hidden");
		}else{
			$("div#aside div.event_aside").animate({right: "-515",opacity: 0,}, 800 );
			$("div#aside div.event_aside").addClass("close");
		}
	});
	// 주소찾기 팝업 탭
	$("div.addr_search_popup  ul.addr_search_popup_result li.addr_number > p.addr_number_tab").click(function(){
		$("div.addr_search_popup  ul.addr_search_popup_result li.addr_name > p.addr_name_tab").removeClass("addr_search_popup_result_on");
		$(this).addClass("addr_search_popup_result_on");
		$("div.addr_search_popup  ul.addr_search_popup_result li.addr_number > ul.addr_number_list").removeClass("hidden");
		$("div.addr_search_popup  ul.addr_search_popup_result li.addr_name > ul.addr_name_list").addClass("hidden");
	});
	$("div.addr_search_popup  ul.addr_search_popup_result li.addr_name > p.addr_name_tab").click(function(){
		$("div.addr_search_popup  ul.addr_search_popup_result li.addr_number > p.addr_number_tab").removeClass("addr_search_popup_result_on");
		$(this).addClass("addr_search_popup_result_on");
		$("div.addr_search_popup  ul.addr_search_popup_result li.addr_number > ul.addr_number_list").addClass("hidden");
		$("div.addr_search_popup  ul.addr_search_popup_result li.addr_name > ul.addr_name_list").removeClass("hidden");
	});
	// 아이디 비번 찾기 팝업 탭
	$("div.find_popup div.find_popup_tab button.find_popup_tab_txt_id").click(function(){
		$("div.id_find_popup").removeClass("hidden");
		$("div.pw_find_popup").addClass("hidden");
		$("div.find_popup div.find_popup_tab button.find_popup_tab_txt_id").css("color","#f12c56");
		$("div.find_popup div.find_popup_tab button.find_popup_tab_txt_pw").css("color","#444");
	});
	$("div.find_popup div.find_popup_tab button.find_popup_tab_txt_pw").click(function(){
		$("div.id_find_popup").addClass("hidden");
		$("div.pw_find_popup").removeClass("hidden");
		$("div.find_popup div.find_popup_tab button.find_popup_tab_txt_id").css("color","#444");
		$("div.find_popup div.find_popup_tab button.find_popup_tab_txt_pw").css("color","#f12c56");
	});
	// 디테일 버튼 온 오프
	/*$("div#section div.detail_view ul.detail_view_table li.detail_view_table_option button").hover(function () {
		$(this).toggleClass("detail_view_table_option_btn_on");
	});*/
	// 엠포인트 탭 오버
	$("div.mpoint_header ul.mpoint_header_menu li").click(function () {
		$("div.mpoint_header ul.mpoint_header_menu li").removeClass("mpoint_header_menu_st_on");
		$("div.mpoint_header ul.mpoint_header_menu li").removeClass("mpoint_header_menu_on");
		$(this).addClass("mpoint_header_menu_on");
	});
	// 엠포인트 탭 이동
	$("div.mpoint_header ul.mpoint_header_menu li").click(function () {

		var mpoint_contant01_01 = $("div.mpoint_section div.mpoint_contant01 div.mpoint_contant01_01");
		var mpoint_contant01_02 = $("div.mpoint_section div.mpoint_contant01 div.mpoint_contant01_02");
		var mpoint_contant01_03 = $("div.mpoint_section div.mpoint_contant01 div.mpoint_contant01_03");
		var mpoint_contant01_04 = $("div.mpoint_section div.mpoint_contant01 div.mpoint_contant01_04");

		if($(this).hasClass("mpoint_header_menu01")) {
			$("div.mpoint_section div.mpoint_contant01 div.mpoint_contant01_01").slideDown();
			$("div.mpoint_section div.mpoint_contant01 div.mpoint_contant01_02").slideDown();
			$("div.mpoint_section div.mpoint_contant01 div.mpoint_contant01_03").slideDown();
			$("div.mpoint_section div.mpoint_contant01 div.mpoint_contant01_04").slideDown();
		} else if($(this).hasClass("mpoint_header_menu02")) {
			$("div.mpoint_section div.mpoint_contant01 div.mpoint_contant01_01").slideUp();
			$("div.mpoint_section div.mpoint_contant01 div.mpoint_contant01_02").slideDown();
			$("div.mpoint_section div.mpoint_contant01 div.mpoint_contant01_03").slideDown();
			$("div.mpoint_section div.mpoint_contant01 div.mpoint_contant01_04").slideDown();
		} else if($(this).hasClass("mpoint_header_menu03")) {
			$("div.mpoint_section div.mpoint_contant01 div.mpoint_contant01_01").slideUp();
			$("div.mpoint_section div.mpoint_contant01 div.mpoint_contant01_02").slideUp();
			$("div.mpoint_section div.mpoint_contant01 div.mpoint_contant01_03").slideDown();
			$("div.mpoint_section div.mpoint_contant01 div.mpoint_contant01_04").slideDown();
		} else if($(this).hasClass("mpoint_header_menu04")) {
			$("div.mpoint_section div.mpoint_contant01 div.mpoint_contant01_01").slideUp();
			$("div.mpoint_section div.mpoint_contant01 div.mpoint_contant01_02").slideUp();
			$("div.mpoint_section div.mpoint_contant01 div.mpoint_contant01_03").slideUp();
			$("div.mpoint_section div.mpoint_contant01 div.mpoint_contant01_04").slideDown();
		}
	});
	// 엠포인트 우주정복기 탭 오버
	$("div.mpoint_victory_header ul.mpoint_victory_header_menu li").click(function () {
		$("div.mpoint_victory_header ul.mpoint_victory_header_menu li").removeClass("mpoint_victory_header_menu_st_on");
		$("div.mpoint_victory_header ul.mpoint_victory_header_menu li").removeClass("victory_header_menu_on");
		$(this).addClass("victory_header_menu_on");
	});
	// 엠포인트 우주정복기 탭 이동
	$("div.mpoint_victory_header ul.mpoint_victory_header_menu li").click(function () {
		if($(this).hasClass("mpoint_victory_header_menu01")) {
			$("div.mpoint_victory_wrap div.mpoint_victory_knowhow_tab h5").css("padding-top","114px");

			$("div.mpoint_victory_contant01 div.mpoint_victory_wrap div.mpoint_victory_wrap01").slideDown();
			$("div.mpoint_victory_contant01 div.mpoint_victory_wrap div.mpoint_victory_wrap02").slideDown();
			$("div.victory_section div.mpoint_victory_contant01").css("background-image","url(../../images/mpoint/bg_victory01.gif)");
		} else if($(this).hasClass("mpoint_victory_header_menu02")) {
			$("div.mpoint_victory_wrap div.mpoint_victory_knowhow_tab h5").css("padding-top","74px");

			$("div.mpoint_victory_contant01 div.mpoint_victory_wrap div.mpoint_victory_wrap01").slideUp();
			$("div.mpoint_victory_contant01 div.mpoint_victory_wrap div.mpoint_victory_wrap02").slideDown();
			$("div.victory_section div.mpoint_victory_contant01").css("background-image","none");
		}
	});
	// 엠포인트 우주정복기 비법전수 탭
	$("div.mpoint_victory_knowhow_tab ol li").click(function () {
		$("div.mpoint_victory_wrap div.mpoint_victory_knowhow_tab").css("padding-bottom","72px");
		$("div.event_knowhow_contant").addClass("hidden");
		if($(this).hasClass("event_knowhow_tab01")) {
			$("div.event_knowhow_contant01").removeClass("hidden");
		} else if($(this).hasClass("event_knowhow_tab02")) {
			$("div.event_knowhow_contant02").removeClass("hidden");
		} else if($(this).hasClass("event_knowhow_tab03")) {
			$("div.event_knowhow_contant03").removeClass("hidden");
		} else if($(this).hasClass("event_knowhow_tab04")) {
			$("div.event_knowhow_contant04").removeClass("hidden");
		}
	});
	// 엠포인트 평생무로 션물 탭 이동
	$("div.gift_section div.mpoint_gift_header ul.mpoint_gift_header_menu li").click(function () {
		if($(this).hasClass("mpoint_gift_header_menu01")) {
			$("div.mpoint_gift_contant01 div.mpoint_gift_contant01_lifetime").slideDown();
			$("div.mpoint_gift_contant01 div.mpoint_gift_contant01_free").slideDown();
			$("div.mpoint_gift_contant01 div.mpoint_gift_contant01_event").slideDown();
		} else if($(this).hasClass("mpoint_gift_header_menu02")) {
			$("div.mpoint_gift_contant01 div.mpoint_gift_contant01_lifetime").slideUp();
			$("div.mpoint_gift_contant01 div.mpoint_gift_contant01_free").slideUp();
			$("div.mpoint_gift_contant01 div.mpoint_gift_contant01_event").slideDown();
		}
	});
	// 엠포인트 평생 무료선물 탭 오버
	$("div.gift_section div.mpoint_gift_header ul.mpoint_gift_header_menu li").click(function () {
		$("div.gift_section div.mpoint_gift_header ul.mpoint_gift_header_menu li").removeClass("mpoint_gift_header_menu_st_on");
		$("div.gift_section div.mpoint_gift_header ul.mpoint_gift_header_menu li").removeClass("gift_header_menu_on");
		$(this).addClass("gift_header_menu_on");
	});
	$("div.event_knowhow_contant ol li.event_knowhow_contant01_02 ul.event_knowhow_contant01_02_select_tab li").click(function () {
		$("div.event_knowhow_contant ol li.event_knowhow_contant01_02 ul.event_knowhow_contant01_02_select_tab li").removeClass("select_tab_on");
		$(this).addClass("select_tab_on");
	});
	// 정복기 탭 버튼
	$("div.event_knowhow_contant01 ol li.event_knowhow_contant01_02 ul.event_knowhow_contant01_02_select_contants li ol.select_contants_btn_number li button").hover(function () {
		$("div.event_knowhow_contant01 ol li.event_knowhow_contant01_02 ul.event_knowhow_contant01_02_select_contants li ol.select_contants_btn_number li button").removeClass("select_contants_btn_number_on");
		$(this).addClass("select_contants_btn_number_on");
	});
	// 엠포인트 버튼들 알파 적용
	$("div.mpoint_section div.mpoint_header ul.mpoint_header_menu li.mpoint_header_menu06 button").hover(function () {
		$(this).toggleClass("mpoint_header_menu_on");
	});
	$("div.victory_section div.mpoint_victory_header ul.mpoint_victory_header_menu li.mpoint_victory_header_menu03 button").hover(function () {
		$(this).toggleClass("mpoint_victory_header_menu_on");
	});
	$("div.gift_section div.mpoint_gift_header ul.mpoint_gift_header_menu li.mpoint_gift_header_menu04 button").hover(function () {
		$(this).toggleClass("mpoint_gift_header_menu_on");
	});
	// 2차분류 검색 옵션
	$("div.category_select_tab div.category_order_list div.category_order_select button.category_search_option").click(function () {
		if($(this).hasClass("visible")) {
			$(this).removeClass("visible");
			$("div.category_select_tab div.category_price_search").slideDown();
		} else {
			$(this).addClass("visible");
			$("div.category_select_tab div.category_price_search").slideUp();
		}
	});
	$("div.category_select_tab div.category_price_search button.category_price_search_close").click(function () {
		$("div.category_select_tab div.category_order_list div.category_order_select button.category_search_option").addClass("visible");
		$("div.category_select_tab div.category_price_search").slideUp();
	});
	$("div.category_select_tab div.category_price_search div button.result_search_btn").click(function () {
		$("div.category_select_tab div.category_search_list").removeClass("hidden");
	});
	// 엠포인트 메뉴 온 / 오프
	$("div.mpoint_ranking_header ul li, div.mpoint_banana_header ul li").hover(function () {
		$(this).toggleClass("txt_mpoint_on");
	});
	// 바나나 적립의 달인 메뉴
	$("div.mpoint_banana_section div.mpoint_banana_header ul.txt_mpoint_ul li").click(function () {
		if($(this).hasClass("txt_mpoint_banana01")) {
			$("div.mpoint_banana_contant dl.mpoint_banana_contant01").removeClass("hidden");
			$("div.mpoint_banana_contant dl.mpoint_banana_contant01").animate({height: '540px',opacity:'1'}, 500);
			$("div.mpoint_banana_contant dl.mpoint_banana_contant02").removeClass("hidden");
			$("div.mpoint_banana_contant dl.mpoint_banana_contant02").animate({height: '330px',opacity:'1'}, 500);
			$("div.mpoint_banana_contant dl.mpoint_banana_contant03").removeClass("hidden");
			$("div.mpoint_banana_contant dl.mpoint_banana_contant03").animate({height: '1020px',opacity:'1'}, 500);
			$("div.mpoint_banana_contant dl.mpoint_banana_contant04").removeClass("hidden");
			$("div.mpoint_banana_contant dl.mpoint_banana_contant04").animate({height: '850px',opacity:'1'}, 500);
			$("div.mpoint_banana_contant dl.mpoint_banana_contant05").removeClass("hidden");
			$("div.mpoint_banana_contant dl.mpoint_banana_contant05").animate({height: '1034px',opacity:'1'}, 500);
		}else if($(this).hasClass("txt_mpoint_banana02")) {
			$("div.mpoint_banana_contant dl.mpoint_banana_contant02").removeClass("hidden");
			$("div.mpoint_banana_contant dl.mpoint_banana_contant02").animate({height: '330px',opacity:'1'}, 500);
			$("div.mpoint_banana_contant dl.mpoint_banana_contant03").removeClass("hidden");
			$("div.mpoint_banana_contant dl.mpoint_banana_contant03").animate({height: '1020px',opacity:'1'}, 500);
			$("div.mpoint_banana_contant dl.mpoint_banana_contant04").removeClass("hidden");
			$("div.mpoint_banana_contant dl.mpoint_banana_contant04").animate({height: '850px',opacity:'1'}, 500);
			$("div.mpoint_banana_contant dl.mpoint_banana_contant05").removeClass("hidden");
			$("div.mpoint_banana_contant dl.mpoint_banana_contant05").animate({height: '1034px',opacity:'1'}, 500);

			$("div.mpoint_banana_contant dl.mpoint_banana_contant01").animate({height: '0',opacity:'0'}, 500, function() {
				$("div.mpoint_banana_contant dl.mpoint_banana_contant01").addClass("hidden");
			});
		}else if($(this).hasClass("txt_mpoint_banana03")) {
			$("div.mpoint_banana_contant dl.mpoint_banana_contant03").removeClass("hidden");
			$("div.mpoint_banana_contant dl.mpoint_banana_contant03").animate({height: '1020px',opacity:'1'}, 500);
			$("div.mpoint_banana_contant dl.mpoint_banana_contant04").removeClass("hidden");
			$("div.mpoint_banana_contant dl.mpoint_banana_contant04").animate({height: '850px',opacity:'1'}, 500);
			$("div.mpoint_banana_contant dl.mpoint_banana_contant05").removeClass("hidden");
			$("div.mpoint_banana_contant dl.mpoint_banana_contant05").animate({height: '1034px',opacity:'1'}, 500);

			$("div.mpoint_banana_contant dl.mpoint_banana_contant01").animate({height: '0',opacity:'0'}, 500, function() {
				$("div.mpoint_banana_contant dl.mpoint_banana_contant01").addClass("hidden");
			});
			$("div.mpoint_banana_contant dl.mpoint_banana_contant02").animate({height: '0',opacity:'0'}, 500, function() {
				$("div.mpoint_banana_contant dl.mpoint_banana_contant02").addClass("hidden");
			});
		}else if($(this).hasClass("txt_mpoint_banana04")) {
			$("div.mpoint_banana_contant dl.mpoint_banana_contant04").removeClass("hidden");
			$("div.mpoint_banana_contant dl.mpoint_banana_contant04").animate({height: '850px',opacity:'1'}, 500);
			$("div.mpoint_banana_contant dl.mpoint_banana_contant05").removeClass("hidden");
			$("div.mpoint_banana_contant dl.mpoint_banana_contant05").animate({height: '1034px',opacity:'1'}, 500);
			
			$("div.mpoint_banana_contant dl.mpoint_banana_contant01").animate({height: '0',opacity:'0'}, 500, function() {
				$("div.mpoint_banana_contant dl.mpoint_banana_contant01").addClass("hidden");
			});
			$("div.mpoint_banana_contant dl.mpoint_banana_contant02").animate({height: '0',opacity:'0'}, 500, function() {
				$("div.mpoint_banana_contant dl.mpoint_banana_contant02").addClass("hidden");
			});
			$("div.mpoint_banana_contant dl.mpoint_banana_contant03").animate({height: '0',opacity:'0'}, 500, function() {
				$("div.mpoint_banana_contant dl.mpoint_banana_contant03").addClass("hidden");
			});
		}else if($(this).hasClass("txt_mpoint_banana05")) {
			$("div.mpoint_banana_contant dl.mpoint_banana_contant05").removeClass("hidden");
			$("div.mpoint_banana_contant dl.mpoint_banana_contant05").animate({height: '1034px',opacity:'1'}, 500);

			$("div.mpoint_banana_contant dl.mpoint_banana_contant01").animate({height: '0',opacity:'0'}, 500, function() {
				$("div.mpoint_banana_contant dl.mpoint_banana_contant01").addClass("hidden");
			});
			$("div.mpoint_banana_contant dl.mpoint_banana_contant02").animate({height: '0',opacity:'0'}, 500, function() {
				$("div.mpoint_banana_contant dl.mpoint_banana_contant02").addClass("hidden");
			});
			$("div.mpoint_banana_contant dl.mpoint_banana_contant03").animate({height: '0',opacity:'0'}, 500, function() {
				$("div.mpoint_banana_contant dl.mpoint_banana_contant03").addClass("hidden");
			});
			$("div.mpoint_banana_contant dl.mpoint_banana_contant04").animate({height: '0',opacity:'0'}, 500, function() {
				$("div.mpoint_banana_contant dl.mpoint_banana_contant04").addClass("hidden");
			});
		}
	});
	// 바나나 적립의달인 탭
	$("div.mpoint_ranking_contant div.mpoint_ranking_contant02 > ul > li").click(function () {
		$("div.mpoint_ranking_contant div.mpoint_ranking_contant02 > ul > li").removeClass("btn_on");
		$("div.mpoint_ranking_contant div.mpoint_ranking_contant02 > div.banana_how").addClass("hidden");
		$(this).addClass("btn_on");

		if($(this).hasClass("btn_in01")) {
			$("div.mpoint_ranking_contant div.mpoint_ranking_contant02 > div.img_in01").removeClass("hidden");
		} else if($(this).hasClass("btn_cafe01")) {
			$("div.mpoint_ranking_contant div.mpoint_ranking_contant02 > div.img_cafe01").removeClass("hidden");
		} else if($(this).hasClass("btn_blog01")) {
			$("div.mpoint_ranking_contant div.mpoint_ranking_contant02 > div.img_blog01").removeClass("hidden");
		} else if($(this).hasClass("btn_face01")) {
			$("div.mpoint_ranking_contant div.mpoint_ranking_contant02 > div.img_sns01").removeClass("hidden");
		}
	});
	// 바나나 적립의 달인 메뉴
	$("div.mpoint_ranking_section div.mpoint_ranking_header ul.txt_mpoint_ul li").click(function () {
		if($(this).hasClass("txt_mpoint_ranking01")) {
			$("div.mpoint_ranking_contant div.mpoint_ranking_contant01").removeClass("hidden");
			$("div.mpoint_ranking_contant div.mpoint_ranking_contant01").animate({height: '880px',margin:'90px 0 0',opacity:'1'}, 500);
		}else if($(this).hasClass("txt_mpoint_ranking02")) {
			$("div.mpoint_ranking_contant div.mpoint_ranking_contant01").animate({height: '0',margin:'0',opacity:'0'}, 500, function() {
				$("div.mpoint_ranking_contant div.mpoint_ranking_contant01").addClass("hidden");
			});
		}
	});
	// 고정 동전
	setTimeout(function(){fixed_money_bling01()},3100);
	setTimeout(function(){fixed_money_bling02()},3200);
	setTimeout(function(){fixed_money_bling03()},2900);
	setTimeout(function(){fixed_money_bling04()},3300);
	setTimeout(function(){fixed_money_bling05()},3400);


	function fixed_money_bling01(){
		$("div.mpoint_banana_section div.mpoint_banana_header ul.fixed_money_ul li.fixed_money01").animate({opacity:'0'}, 100, function() {
			$("div.mpoint_banana_section div.mpoint_banana_header ul.fixed_money_ul li.fixed_money01").animate({opacity:'1'}, 100,function() {
				setTimeout(function(){fixed_money_bling01()},3100);
			});
		});
	}
	function fixed_money_bling02(){
		$("div.mpoint_banana_section div.mpoint_banana_header ul.fixed_money_ul li.fixed_money02").animate({opacity:'0'}, 100, function() {
			$("div.mpoint_banana_section div.mpoint_banana_header ul.fixed_money_ul li.fixed_money02").animate({opacity:'1'}, 100,function() {
				setTimeout(function(){fixed_money_bling02()},3200);
			});
		});
	}
	function fixed_money_bling03(){
		$("div.mpoint_banana_section div.mpoint_banana_header ul.fixed_money_ul li.fixed_money03").animate({opacity:'0'}, 100, function() {
			$("div.mpoint_banana_section div.mpoint_banana_header ul.fixed_money_ul li.fixed_money03").animate({opacity:'1'}, 100,function() {
				setTimeout(function(){fixed_money_bling03()},2900);
			});
		});
	}
	function fixed_money_bling04(){
		$("div.mpoint_banana_section div.mpoint_banana_header ul.fixed_money_ul li.fixed_money04").animate({opacity:'0'}, 100, function() {
			$("div.mpoint_banana_section div.mpoint_banana_header ul.fixed_money_ul li.fixed_money04").animate({opacity:'1'}, 100,function() {
				setTimeout(function(){fixed_money_bling04()},3300);
			});
		});
	}
	function fixed_money_bling05(){
		$("div.mpoint_banana_section div.mpoint_banana_header ul.fixed_money_ul li.fixed_money05").animate({opacity:'0'}, 100, function() {
			$("div.mpoint_banana_section div.mpoint_banana_header ul.fixed_money_ul li.fixed_money05").animate({opacity:'1'}, 100,function() {
				setTimeout(function(){fixed_money_bling05()},3400);
			});
		});
	}
	// 동전 떨어지는 효과
	myTimer();
	var myVar=setInterval(function(){myTimer()},2000);

	function myTimer() {
		setTimeout(function() {
			$("div.mpoint_banana_section div.mpoint_banana_header ul.down_money_ul li").css('opacity','1');
			$("div.mpoint_banana_section div.mpoint_banana_header ul.down_money_ul li").css('height','0%');

			$("li.down_money01").animate({height:'700px',opacity:'0'}, 600, function() {
				$("li.down_money01").css('opacity','0');
			});
			$("li.down_money02").animate({height:'700px',opacity:'0'}, 1000, function() {
				$("li.down_money02").css('opacity','0');
			});
			$("li.down_money03").animate({height:'700px',opacity:'0'}, 1200, function() {
				$("li.down_money03").css('opacity','0');
			});
			$("li.down_money04").animate({height:'700px',opacity:'0'}, 1500, function() {
				$("li.down_money04").css('opacity','0');
			});
			$("li.down_money05").animate({height:'700px',opacity:'0'}, 900, function() {
				$("li.down_money05").css('opacity','0');
			});
			$("li.down_money06").animate({height:'700px',opacity:'0'}, 800, function() {
				$("li.down_money06").css('opacity','0');
			});
			$("li.down_money07").animate({height:'700px',opacity:'0'}, 1000, function() {
				$("li.down_money07").css('opacity','0');
			});
			$("li.down_money08").animate({height:'700px',opacity:'0'}, 900, function() {
				$("li.down_money08").css('opacity','0');
			});
			$("li.down_money09").animate({height:'700px',opacity:'0'}, 700, function() {
				$("li.down_money09").css('opacity','0');
			});
			$("li.down_money10").animate({height:'700px',opacity:'0'}, 1000, function() {
				$("li.down_money10").css('opacity','0');
			});
			$("li.down_money11").animate({height:'700px',opacity:'0'}, 1000, function() {
				$("li.down_money11").css('opacity','0');
			});
			$("li.down_money12").animate({height:'700px',opacity:'0'}, 700, function() {
				$("li.down_money12").css('opacity','0');
			});
		}, 0);
		setTimeout(function() {

			$("li.down_money13").animate({height:'700px',opacity:'0'}, 600, function() {
				$("li.down_money13").css('opacity','0');
			});
			$("li.down_money14").animate({height:'700px',opacity:'0'}, 900, function() {
				$("li.down_money14").css('opacity','0');
			});
			$("li.down_money15").animate({height:'700px',opacity:'0'}, 700, function() {
				$("li.down_money15").css('opacity','0');
			});
			$("li.down_money16").animate({height:'700px',opacity:'0'}, 1000, function() {
				$("li.down_money16").css('opacity','0');
			});
			$("li.down_money17").animate({height:'700px',opacity:'0'}, 600, function() {
				$("li.down_money17").css('opacity','0');
			});
			$("li.down_money18").animate({height:'700px',opacity:'0'}, 900, function() {
				$("li.down_money18").css('opacity','0');
			});
			$("li.down_money19").animate({height:'700px',opacity:'0'}, 700, function() {
				$("li.down_money19").css('opacity','0');
			});
			$("li.down_money20").animate({height:'700px',opacity:'0'}, 1000, function() {
				$("li.down_money20").css('opacity','0');
			});
			$("li.down_money21").animate({height:'700px',opacity:'0'}, 600, function() {
				$("li.down_money21").css('opacity','0');
			});
			$("li.down_money22").animate({height:'700px',opacity:'0'}, 900, function() {
				$("li.down_money22").css('opacity','0');
			});
			$("li.down_money23").animate({height:'700px',opacity:'0'}, 700, function() {
				$("li.down_money23").css('opacity','0');
			});
			$("li.down_money24").animate({height:'700px',opacity:'0'}, 1000, function() {
				$("li.down_money24").css('opacity','0');
			});
		}, 300);
		setTimeout(function() {

			$("li.down_money25").animate({height:'700px',opacity:'0'}, 600, function() {
				$("li.down_money25").css('opacity','0');
			});
			$("li.down_money26").animate({height:'700px',opacity:'0'}, 900, function() {
				$("li.down_money26").css('opacity','0');
			});
			$("li.down_money27").animate({height:'700px',opacity:'0'}, 700, function() {
				$("li.down_money27").css('opacity','0');
			});
			$("li.down_money28").animate({height:'700px',opacity:'0'}, 1000, function() {
				$("li.down_money28").css('opacity','0');
			});
			$("li.down_money29").animate({height:'700px',opacity:'0'}, 600, function() {
				$("li.down_money29").css('opacity','0');
			});
			$("li.down_money30").animate({height:'700px',opacity:'0'}, 900, function() {
				$("li.down_money30").css('opacity','0');
			});
			$("li.down_money31").animate({height:'700px',opacity:'0'}, 700, function() {
				$("li.down_money31").css('opacity','0');
			});
			$("li.down_money32").animate({height:'700px',opacity:'0'}, 1000, function() {
				$("li.down_money32").css('opacity','0');
			});
			$("li.down_money33").animate({height:'700px',opacity:'0'}, 600, function() {
				$("li.down_money33").css('opacity','0');
			});
			$("li.down_money34").animate({height:'700px',opacity:'0'}, 900, function() {
				$("li.down_money34").css('opacity','0');
			});
			$("li.down_money35").animate({height:'700px',opacity:'0'}, 700, function() {
				$("li.down_money35").css('opacity','0');
			});
			$("li.down_money36").animate({height:'700px',opacity:'0'}, 1000, function() {
				$("li.down_money36").css('opacity','0');
			});
		}, 600);
		setTimeout(function() {
			$("div.mpoint_banana_section div.mpoint_banana_header ul.down_money_ul li").css('opacity','1');
			$("div.mpoint_banana_section div.mpoint_banana_header ul.down_money_ul li").css('height','0%');

			$("li.down_money37").animate({height:'700px',opacity:'0'}, 600, function() {
				$("li.down_money37").css('opacity','0');
			});
			$("li.down_money38").animate({height:'700px',opacity:'0'}, 900, function() {
				$("li.down_money38").css('opacity','0');
			});
			$("li.down_money39").animate({height:'700px',opacity:'0'}, 700, function() {
				$("li.down_money39").css('opacity','0');
			});
			$("li.down_money40").animate({height:'700px',opacity:'0'}, 1000, function() {
				$("li.down_money40").css('opacity','0');
			});
			$("li.down_money41").animate({height:'700px',opacity:'0'}, 600, function() {
				$("li.down_money41").css('opacity','0');
			});
		}, 900);
		setTimeout(function() {
			$("div.mpoint_banana_section div.mpoint_banana_header ul.down_money_ul li").css('opacity','1');
			$("div.mpoint_banana_section div.mpoint_banana_header ul.down_money_ul li").css('height','0%');

			$("li.down_money25").animate({height:'700px',opacity:'0'}, 600, function() {
				$("li.down_money25").css('opacity','0');
			});
			$("li.down_money26").animate({height:'700px',opacity:'0'}, 900, function() {
				$("li.down_money26").css('opacity','0');
			});
			$("li.down_money27").animate({height:'700px',opacity:'0'}, 700, function() {
				$("li.down_money27").css('opacity','0');
			});
			$("li.down_money28").animate({height:'700px',opacity:'0'}, 1000, function() {
				$("li.down_money28").css('opacity','0');
			});
			$("li.down_money29").animate({height:'700px',opacity:'0'}, 600, function() {
				$("li.down_money29").css('opacity','0');
			});
			$("li.down_money30").animate({height:'700px',opacity:'0'}, 900, function() {
				$("li.down_money30").css('opacity','0');
			});
			$("li.down_money31").animate({height:'700px',opacity:'0'}, 700, function() {
				$("li.down_money31").css('opacity','0');
			});
			$("li.down_money32").animate({height:'700px',opacity:'0'}, 1000, function() {
				$("li.down_money32").css('opacity','0');
			});
			$("li.down_money33").animate({height:'700px',opacity:'0'}, 600, function() {
				$("li.down_money33").css('opacity','0');
			});
			$("li.down_money34").animate({height:'700px',opacity:'0'}, 900, function() {
				$("li.down_money34").css('opacity','0');
			});
			$("li.down_money35").animate({height:'700px',opacity:'0'}, 700, function() {
				$("li.down_money35").css('opacity','0');
			});
			$("li.down_money36").animate({height:'700px',opacity:'0'}, 1000, function() {
				$("li.down_money36").css('opacity','0');
			});
		}, 1000);
	}
	// 메인 제이쿼리
	$("#home_car_charger").NemoSlider({
		class_set : "home_charger_table",
		move_type : "none",
		bt_change : "on",
		bt_set : "over",
		its_stop : "its_stop"
	});
});
