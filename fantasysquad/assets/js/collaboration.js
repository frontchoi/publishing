jQuery(function($) {
	window.onload = function () {
		img_add();
	}
	$( window ).resize(function() {
		img_add();
	});

	if(navigator.userAgent.match(/iPhone|iPod|iPad/i)) {
		//alert('아이폰입니다.');
		$("#wrapM .btn_group_mo").removeClass("hidden");
		$("#wrapM .btn_group_mo .btn_apl").removeClass("hidden");
	}else if(navigator.userAgent.match(/Android/i)) {
		//alert('안드로이드 입니다.');
		$("#wrapM .btn_group_mo").removeClass("hidden");
		$("#wrapM .btn_group_mo .btn_ggl").removeClass("hidden");
	}else{
		//alert('PC 입니다.');
		$("#wrapM .btn_group").removeClass("hidden");
	}

});
function img_add(){
	if(!$('#wrapM .swiper-pagination-bullet').hasClass("img_add")){
		$('#wrapM .swiper-pagination-bullet').addClass('img_add');
		$('#wrapM .swiper-pagination-bullet:nth-child(1)').append($('<img/>', {
			src: '/assets/images/collaboration/web/btn_cha01_on.png'
		}));
		$('#wrapM .swiper-pagination-bullet:nth-child(2)').append($('<img/>', {
			src: '/assets/images/collaboration/web/btn_cha02_on.png'
		}));
		$('#wrapM .swiper-pagination-bullet:nth-child(3)').append($('<img/>', {
			src: '/assets/images/collaboration/web/btn_cha03_on.png'
		}));
		$('#wrapM .swiper-pagination-bullet:nth-child(4)').append($('<img/>', {
			src: '/assets/images/collaboration/web/btn_cha04_on.png'
		}));
		$('#wrapM .swiper-pagination-bullet:nth-child(5)').append($('<img/>', {
			src: '/assets/images/collaboration/web/btn_cha05_on.png'
		}));
	}
}