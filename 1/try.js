$(function(){
	/*&#10030  &#10052;*/
	var snow = false;
	var interval;
	var $flake = $('<div class="snowbox"></div>').css({'position': 'absolute', 'top': '230px'}).html('HTML'),
				documentHeight = $("#flipbook").height(),
				documentWidth= $("#flipbook").width(),
				defaults = {
						minSize: 20,
						maxSize: 25,
						newOn: 200,
						flakeColor: "#FFF"
				},
				options = $.extend({}, defaults, options);
	function fallDown(){
				var colors = ["red", "blue", "rgb(17, 255, 17)", "black", "yellow", "rgb(153, 255, 17)"];
				var html = ["Java", "C++", "C", "PHP", "JS", "jQuery","Android", "Laravel"];
				var choose = parseInt(Math.random() * colors.length);
				var htmlC = parseInt(Math.random() * html.length);
				var startPositionLeft = 820,/*Math.random() * documentWidth + 500*/
				      startOpacity	= 0.5 + Math.random(),
				      sizeFlake		= options.minSize + Math.random() * 5,
				      endPositionTop	= documentHeight +300,
				      endPositionLeft	= startPositionLeft - Math.random() * 1000,
				      durationFall	= documentHeight * 10 + Math.random() * 100;
				$flake.clone().appendTo('body').css({
							left: startPositionLeft,
							opacity: startOpacity,
							'font-size': sizeFlake,
							color:colors[choose]				/*options.flakeColor*/
						}).animate({
							top: endPositionTop,
							left: endPositionLeft,
							opacity: 1
						},durationFall,'linear',function(){
							$(this).remove();
						}
					);
				$flake.text(html[htmlC]);
			}
	interval = setInterval(fallDown, options.newOn);
	$("#flipbook").bind("first", function(event) {
		
	});
	$("#flipbook").bind("start", function(event) {
		clearInterval(interval);
	});
	$("#flipbook").bind("turned", function(event, page, view) {
		if(4 == page){
			$("body").css({backgroundImage: "url('bg-36.jpg')"});
		}
	});
	$("#flipbook").bind("start", function(event, pageObject, corner) {
		if(4 == pageObject.page){
			$("body").css({backgroundImage: "url('bg-36.jpg')"});
		}
	});
	$("#flipbook").bind("turned", function(event, page, view) {
		if(10 == page){
			$("body").css({backgroundImage: "url('bg-37.jpg')"});
		}
	});
	$("#flipbook").bind("start", function(event, pageObject, corner) {
		if(10 == pageObject.page){
			$("body").css({backgroundImage: "url('bg-37.jpg')"});
		}
	});
	/*$("#flipbook").bind("turned", function(event, page, view) {
		if(2 != page){
			$("body").css({backgroundImage: "url('bg-1.jpg')"});
		}
	});*/
	$(window).bind("keydown", function(e){
		if (e.keyCode==37){
			$("#flipbook").turn("previous");
		}
		else if (e.keyCode==39){
			$("#flipbook").turn("next");
		}
	});
});