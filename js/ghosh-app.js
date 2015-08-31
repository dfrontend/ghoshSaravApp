$(document).ready(function(){

	$('.app-wrapper').addClass('animated flipInY');

	$(".rippler").rippler({
		effectClass      :  'rippler-effect'
		,effectSize      :  16      // Default size (width & height)
		,addElement      :  'svg'   // e.g. 'svg'(feature)
		,duration        :  400
	});

	$("audio").on("play", function(){
	    var _this = $(this);
	    $("audio").each(function(i,el){
	        if(!$(el).is(_this))
	            $(el).get(0).pause();
	    });
	});



});