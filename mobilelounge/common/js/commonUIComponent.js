(function($){
 scrollComponent = function() { 
	var defaults = {
		imgOverSingle : '.ui-ImgOver-Single',
		imgOverRel : '.ui-ImgOver-Single-Rel',
		imgMultiOver : '.ui-ImgOver-Multi',
		imgMultiRel : '.ui-ImgOver-Multi-Rel',
		elementsOver : '.ui-ElementsOver',
		tabMenu : null,
		slider : null,
		switchTab : null,
		mainVisualName : null,
		randomize: true
	};
	return {
		init : function(options) {
			var options = $.extend(defaults, options);
			this.fnImgSingleOver(options);
			this.fnImgMultiOver(options);
			this.fnElementOver(options);
		},
		
		imgOver : function(element) {
			var src = element.attr('src').replace(/_off(\.gif|\.jpg|\.png)$/, '_on$1');
			element.attr('src', src)
		},
		imgOut : function(element) {
			var src = element.attr('src').replace(/_on(\.gif|\.jpg|\.png)$/, '_off$1');
			element.attr('src', src);
		},
		relImgReplace : function(element) {
			var onImg = element.attr('rel');
			if (typeof(onImg) == 'undefined') return;
			var src = element.find('img').attr('src').split('/');
			src = src[src.length-1];
			element.attr('rel',src);
			src = element.find('img').attr('src').replace(src,onImg);
			element.find('img').attr('src', src);
		},

		/*
		TItle : 
		*/
		fnSlider : function(options) {
			var _this = this;
			var defaults = {
				$this : options.slider,
				$list : options.slider + ' .ui-Slider-List',
				$contents : options.slider + ' .ui-Slider-Contents',
				time : 10000,
				pagingPosition : 'in',
				vatical : 'left',
				auto : true,
				timer : true,
				menu : true,
				nav : true,
				randomize: true
			};
			var clickable = true;
			//var current = Math.floor(Math.random() * $(".slideWrap > li").length);
			var current = 0;
			var dir = 'prev';
			var timeout;
			var options = $.extend(defaults, options);
			var w = $(options.$this).width();
			var h = $(options.$this).height();

			function displayNavigation() {
				var paging;
				if (options.pagingPosition == 'out') {
					var position = $('<div class="ui-Slider-Nav" />');
					$(options.$this).append(position); 
				}
				for (i=0 ; i < $(options.$list).length ; i++ )
				{
					paging = $('<a />')
						.attr({
							href : '#page' + (i+1),
							'class' : 'ui-Slider-Nav-List ui-Slider-Nav-List-'+(i+1),
							rel : i
						})
						.html('<span>page '+(i+1)+'</span>')
						.click(function() {
							var thisNum = $(this).attr('rel');
							if (current == thisNum) return false;
							else if (current > thisNum) dir = 'prev';
							else if (current < thisNum) dir = 'next';
							animate(thisNum);
							return false;
						});
					if($(options.$list).length == 1){
						//alert("1");
						userStop();
						paging = $()
					}
					if (options.pagingPosition == 'in')
					{
						$(options.$list).eq(i).prepend(paging);
					}
					else if (options.pagingPosition == 'out') {
						$(options.$this).find('.ui-Slider-Nav').append(paging);
					}
					$(options.$list).eq(i).attr('id','page'+(i+1));
				}
			}
			function displayPlayStop() {
				var stop;
				var play;
				stop = $('<a />')
					.attr({
						href : '#',
						'class' : 'ui-slider-stop'
					})
					.html('<span>stop</span>')
					.click(function() {
						userStop();
						$(this).hide();
						$(options.$this).find('.ui-slider-play').show();
						return false;
					})
					.css({'display' : 'none'});
				play = $('<a />')
					.attr({
						href : '#',
						'class' : 'ui-slider-play'
					})
					.html('<span>play</span>')
					.click(function() {
						userPlay();
						$(this).hide();
						$(options.$this).find('.ui-slider-stop').show();
						return false;
					})
					.css({'display' : 'none'});
				
				if($(options.$list).length == 1){
					stop = $()
					play = $()
				}

				$(options.$this).append(stop);
				$(options.$this).append(play);

				if (options.auto)
				{
					$(options.$this).find('.ui-slider-stop').show();
				}
				else {
					$(options.$this).find('.ui-slider-play').show();
				}
			}
			function displayPrevNext() {
				var prev;
				var next;
				prev = $('<a />')
					.attr({
						href : '#',
						'class' : 'ui-slider-prev'
					})
					.html('')
					.click(function() {
						animatePrev(current);
						return false;
					});
				next = $('<a />')
					.attr({
						href : '#',
						'class' : 'ui-slider-next'
					})
					.html('')
					.click(function() {
						animateNext(current);
						return false;
					});

				$(options.$this).append(prev);
				$(options.$this).append(next);
			}
			function clear(dir) {
				if (options.vartical == 'top') {
					if (dir == 'next')
					{
						$(options.$contents).css({'display' : 'none', top: h});
					}
					else {
						$(options.$contents).css({'display' : 'none', top: h*-1});
					}
					$(options.$contents).eq(current).show().css({top: '44'+'px'});
				}
				else {
					if (dir == 'next')
					{
						$(options.$contents).css({'display' : 'none', left: w});
					}
					else {
						$(options.$contents).css({'display' : 'none', left: w*-1});
					}
					$(options.$contents).eq(current).show().css({left: '0'});
				}
			}
			function animate(clickNum) {
				if (clickable) {
					clickable = false;
					var vertical;
					clear(dir);

					if (options.vartical == 'top') {
						if (dir == 'prev') vertical = h;
						else if (dir == 'next') vertical = h*-1;
						$(options.$contents).eq(current).show().animate({
							top: vertical},600,function() {
							$(this).hide();
							current = clickNum;
						})
						$(options.$contents).eq(clickNum).show().animate({
							top: '0'},600,function() {
							$(this).css('bottom','0');
							clickable = true;
						});
					}
					else {
						if (dir == 'prev') vertical = w;
						else if (dir == 'next') vertical = w*-1;
						$(options.$contents).eq(current).show().animate({
							left: vertical},600,function() {
							$(this).hide();
							current = clickNum;
						})
						$(options.$contents).eq(clickNum).show().animate({
							left: '0'},600,function() {
							$(this).css('right','0');
							clickable = true;
						});
					}
					setCurrent(clickNum);

					clearTimeout(timeout);
					if (options.auto)
					{
						timeout = setTimeout(function() {animateNext(current)},options.time);
					}

				}
			}
			function animateNext(number) {
				number++;
				if (number >= $(options.$list).length)
					number = 0;
				dir = 'next';
				animate(number);
			}
			function animatePrev(number) {
				number--;
				if (number < 0)
					number = $(options.$list).length -1;
				dir = 'prev';
				animate(number);
			}
			function userPlay() {
				options.auto = true;
				animateNext(current);
			}
			function userStop() {
				options.auto = false;
				clearTimeout(timeout);
			}
			function setCurrent(i) {
				if (options.pagingPosition == 'in') {
					$(options.$list).find('.ui-Slider-Nav-List').removeClass('ui-on');
					$(options.$list).eq(i).find('.ui-Slider-Nav-List').addClass('ui-on');
				}
				else if (options.pagingPosition == 'out')
				{
					$(options.$this).find('.ui-Slider-Nav .ui-Slider-Nav-List').removeClass('ui-on');
					$(options.$this).find('.ui-Slider-Nav .ui-Slider-Nav-List').eq(i).addClass('ui-on');
				}
			}
			function init() {
				$(options.$this).css({position : 'relative',overflow : 'hidden'});
				$(options.$contents).css({position : 'absolute',top : 0, width: '100%'});

				if (options.nav) displayNavigation();
				if (options.timer) displayPlayStop();
				if (options.menu) displayPrevNext();
				setCurrent(current);
				clear(dir);
				if (options.auto) {
					$(options.$contents).each(function(i) {
						$(this).find('a, area').focus(function() {
							userStop();
						}).blur(function(){
							animateNext(current);
							$(options.$list).find('.ui-Slider-Nav-List').hide().show();
							$(options.$list).eq(current).find('.ui-Slider-Nav-List').focus();
						});
					});
				}
				

				if(options.auto){
					timeout = setTimeout(function() {animateNext(current)},options.time);
				};
			}
			init();
		},
		/*
		TItle : Switch Tab
		*/
		fnSwitchTab : function(options) {
			var _this = this;
			var defaults = {
				$this : options.switchTab,
				Depth1Element : ">a",
				Depth2Element : ".mvt_sg2"
			};
			var options = $.extend(defaults, options);
			function init() {
				$this = $(options.switchTab);
				var i = 0
				clickDepth1($this.find(">a:first"))
				$this.find('a').blur();
				$this.find(options.Depth1Element).each(function(){
					var $depth1 = $(this)
					$depth1.click(function(){
						clickDepth1($(this));
					});
				});
				$this.find(options.Depth2Element).find('li').each(function(){
					var $depth2 = $(this)
					$depth2.find('a').click(function(){
						clickDepth2($depth2);
					});
				});
				$this.find('a').click(function(){
					if($(this).attr('href') == '#'){
						return false
					}
				});
			}
			function clickDepth1(element){
				var index = element.prevAll().length;
				var i = index;
				$this.find("a").show();
				element.hide();
				$this.find(options.Depth2Element).hide();
				$this.find(options.Depth2Element).eq(i).show().find('li').eq(0).find('a').eq(0).focus();
				$this.find(options.Depth2Element).find('li').removeClass('on')
				$this.find(options.Depth2Element).eq(i).find('li').eq(0).addClass('on')
				alert
			}
			function clickDepth2($depth2){
				$this.find(options.Depth2Element).find('li').removeClass('on');
				$depth2.addClass('on');
			}
			init();
		},
		/*
		TItle : listMenuOver
		*/
		fnlistMenuOver : function(options) {
			var _this = this;
			var defaults = {
				$this : options.listMenuOver
			};
			var options = $.extend(defaults, options);
			var $this = $(options.listMenuOver);
			function init() {
				var i = 0
				$this.find('>a').mouseenter(function(){
					listMenuOver($this);
				});		
				$this.find('>ul').mouseleave(function(){
					listMenuOut($this);
				});
				$this.find('>a').focus(function(){
					listMenuOver($this);
					$this.find('>ul').show().find('>li:first>a').focus();
				});
				$this.find('ul').find('a').focus(function(){
					i = 1
				});
				$this.find('ul').find('a').blur(function(){
					i = 0
				});
				$('*').click(function(){
					listMenuOut($this);
				});
				$('*').focus(function(){
					if(i == 0){
						listMenuOut($this);
					}
				});
			}
			init();
			function listMenuOut(element){
				element.find('>a').show();
				element.find('>ul').hide();
			}
			function listMenuOver(element){
				element.find('>ul').show();
				element.find('>a').hide();
			}
		},
		/*
		TItle : listScrollMenu
		*/
		fnlistScrollMenu : function(options) {
			var _this = this;
			var defaults = {
				$this : options.listScrollMenu
			};
			var options = $.extend(defaults, options);
			var $this = $(options.listScrollMenu);
			function init() {
				var i = 0 ;
				$this.find('a').focus(function(){
					listMenuOver($this);
				});
				$this.find('a').add('div').focus(function(){
					i = 1
					$(this).addClass('on');
				});
				$this.find('a').add('div').blur(function(){
					i = 0
					$(this).removeClass('on');
				});
				$this.find('a').click(function(){
						if($(this).attr('href') == '#'){
							return false
						}
					});
				$('*').click(function(){
					listMenuOut($this,$(this));
				});
				$('*').focus(function(){
					if(i == 0){
						listMenuOut($this,$(this));
					}
				});
			}
			init();
			function listMenuOut(element,$this){
				element.removeClass('on');
				
			}
			function listMenuOver(element){
				element.addClass('on');
				
			}
		},
		/*
		/*
		TItle : Main Visual Effect
		*/
		mainVisual : function(options) {
			var _this = this;
			var defaults = {
				$this : options.mainVisualName,
				indexName : null,
				subName : null
			};
			var options = $.extend(defaults, options);
			var current;
			var current2;
			
			function init() {
				$(options.mainVisualName).find(options.subName).hide();
				$(options.mainVisualName).find(options.indexName+'>div').each(function(i) {
					$(this).click(function() {
						current = i;
						currentView();
					});
				});
				for (j=0; j<$(options.mainVisualName).find(options.subName).length; j++) {
					$(options.mainVisualName).find(options.subName).eq(j).find('>div').each(function(i) {
						$(this).click(function() {
							if (current == i) return;
							current = i;
							currentView();
						});
					});
					$(options.mainVisualName).find(options.subName).eq(j).find('>div').each(function(i) {
						$(this).find('.btn_close').click(function() {
							$(options.mainVisualName).find(options.subName).hide();
							$(options.mainVisualName).find(options.indexName).show();
						});
					});
				}
				subTab();
			}
			function currentView() {
				$(options.mainVisualName).find(options.indexName).hide();
				$(options.mainVisualName).find(options.subName).hide();
				$(options.mainVisualName).find(options.subName).eq(current).show();
			}
			function subTab() {
				$('.list_box').each(function() {
					var $this = $(this);
					$this.find('dd').removeClass('on');
					$this.find('dd').eq(0).addClass('on');
					
					samsungcardUIComponent.imgOver($this.find('dt').eq(0).find('img'));
					
					$this.find('dt').each(function(i) {
						$(this).find('a').click(function() {
							$this.find('dd').removeClass('on');
							$this.find('dd').eq(i).addClass('on');
							$this.find('dt').each(function() {
								samsungcardUIComponent.imgOut($(this).find('img'));
							});
							samsungcardUIComponent.imgOver($(this).find('img'));
						});
					});
				});
			}
			init();
		}
	};
}();
})(jQuery);

