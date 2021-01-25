//Homepa

$(document).ready(function(){

		$('.slider').slick({
		  dots: false,
		  arrows: false,
		  infinite: true,
		  fade: true,
		  speed: 2000,
		  cssEase: 'linear',
		  autoplay: true,
		  autoplaySpeed: 4000,
		  mobileFirst: true,
		  adaptiveHeight: false,
		  accesibility: false,
          draggable: false,
          swipe: false,
          touchMove: false,
          pauseOnFocus: false,
          pauseOnHover: false,

		});

// move view schedule button inside class list
		$("#schedule-btn").detach().appendTo('.vczapi-list-zoom-meetings--items');
});

