$(document).ready(function() {
	$("#leftside-navigation .sub-menu > a").click(function(e) {
	  $("#leftside-navigation ul ul").slideUp(), $(this).next().is(":visible") || $(this).next().slideDown(),
	  e.stopPropagation()
	})


	$('.owl-carousel').owlCarousel({
        items:1,
        smartSpeed:450
	})
	var sliderDots =$('.homeSlider .owl-carousel .owl-dots')
	var setWidth = sliderDots.width()
	sliderDots.css('margin-left','-'+setWidth/2+'px');
	
	$('.menuIcon.float-left').click(function(){

		setMenuHeight();
		var asideLeft = $('aside.sidebar').css("margin-left");

		if(asideLeft == "-240px"){
			$("aside.sidebar").css({
			    marginLeft:'0px'
			});
			$(".main").css({
			    marginLeft:'240px'
			});
		}
		if(asideLeft == "0px"){
			$("aside.sidebar").css({
			    marginLeft:'-240px'
			});
			$(".main").css({
			    marginLeft:'0px'
			});
		}
		
	});
});

function setMenuHeight(){
	var bodyHeight = $('.main').outerHeight();
	$('.sidebar').height(bodyHeight)
}
$(window).resize(function() {
    setMenuHeight();
 });