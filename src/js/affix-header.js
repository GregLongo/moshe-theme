$(window).scroll(function(){
	var header = $(".header");
	if ($(window).scrollTop() >= 1){
		header.addClass("header--fixed")
	}
	else{
		header.removeClass("header--fixed")
	}
});