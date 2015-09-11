//$(document).ready(function(){
//	$("audio").on("play", function(){
//	    var _this = $(this);
//	    $("audio").each(function(i,el){
//	        if(!$(el).is(_this))
//	            $(el).get(0).pause();
//	    });
//	});
//});


var app = {
	// Application Constructor
	initialize: function() {
		this.bindEvents();
	},
	bindEvents: function() {
		document.addEventListener('deviceready', this.onDeviceReady, false);
	},

	onDeviceReady: function() {
		//$("audio").on("play", function(){
		//	var _this = $(this);
		//	console.log(_this);
		//	//$("audio").each(function(i,el){
		//	//	if(!$(el).is(_this))
		//	//		$(el).get(0).pause();
		//	//});
		//});
		$(document).ready(function() {
			var media;
			var media_button;
			//alert("loaded");
			function success() {
				console.log("in success play audio");
			}
			function errorThrown(e) {
				alert('Error while playing the sound!');
			}

			$("audio").on("play", function () {

				if (media) {
					media.pause();
				}

				var _this = $(this);
				console.log(_this);
//                function playAudio() {
                var src = '/android_asset/www/anak/' + _this.attr("data-src");
				//var src = _this.context.currentSrc;
				media = new Media(src, success, errorThrown);
				//alert(media);
				media.play();
				console.log(media);
//                }
//                alert(_this.context.currentSrc);
			});



			$(".media-play").on("click", function () {

				if (media_button) {
					media_button.pause();
				}

				var _this = $(this);
				console.log(_this);
//                function playAudio() {
				var src = '/android_asset/www/anak/' + _this.attr("data-src");
				//var src = _this.context.currentSrc;
				media_button = new Media(src, success, errorThrown);
				//alert(media);
				media_button.play();
				//console.log(media_button);
//                }
//                alert(_this.context.currentSrc);
			});


			$(".media-pause").on("click", function () {

				if (media_button) {
					media_button.pause();
				}

//				var _this = $(this);
//				console.log(_this);
////                function playAudio() {
//				var src = '/android_asset/www/anak/' + _this.attr("data-src");
//				//var src = _this.context.currentSrc;
//				media_button = new Media(src, success, errorThrown);
//				//alert(media);
//				media_button.play();
				//console.log(media_button);
//                }
//                alert(_this.context.currentSrc);
			});



			$("audio").on("pause", function () {
				//alert("pause");
				//var _this = $(this);
				//console.log(_this);
//                function playAudio() {
//				var src = '/android_asset/www/anak/' + _this.attr("data-src");
//				var src = _this.context.currentSrc;
				//var media = new Media(src, success, errorThrown);
				//alert(media);
				if (media) {
					media.pause();
				}

				//media.pause();
				//console.log(media);
                //}
                //alert(_this.context.currentSrc);
			});

		});
	}
};

app.initialize();