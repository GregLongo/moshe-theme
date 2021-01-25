import { gsap } from "gsap"; 
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);


$(document).ready(function(){

//  bind scroll to anchor links
$("#menu").on("click","a", function (e) {
	var id = $(this).attr("href");
	var direction = $(id).offset().top > $(window).scrollTop() ? -1 : 1;

	if ($(id).length > 0) {
		e.preventDefault();
		// trigger scroll
		var offset = id=='#learn-panel-5'?10:400;
		gsap.to(window, {duration: 1.5, scrollTo:{y: id , offsetY: offset * direction }});
	}
// optionally albeit dangerously update the URL.
	// if (window.history && window.history.pushState) {
	//  history.pushState("", document.title, id);
	// }

});


ScrollTrigger.matchMedia({
	"(min-width: 1000px) and (min-height: 600px)": function(){
	 	addPinning()	
	},
	"(max-width:1000px) or (max-height: 600px)": function(){
		$("p").each(function(){
			$(this).css({opacity: 1})
		});
	}
});

function addPinning(){
	gsap.utils.toArray('.learn-panel').forEach(section => {

		var selected  =  $("a[href$='"+section.id+"']");//breadcrumb

		gsap.to(section, {
		  scrollTrigger: {
		    trigger:section,
		    scrub: true,
		    pin: true,
		    ease: "power2",
		    toggleClass: {targets: selected[0] , className:'selected'}
		  }
		})

		var target = $(section).find("p");

		const tl = gsap.timeline( {
		  scrollTrigger: {
		    trigger: section, 
		    start: 'bottom bottom', 
		    end: 'bottom center', 
		    scrub: false,
		    toggleActions: "restart none none reverse"

		  }
		});

		tl.staggerFrom(target, .8, { opacity:0, y:60}, .1);

	});

	var lastpanel  =  $("a[href$='#learn-panel-5']");

	ScrollTrigger.create({
		trigger: '#learn-panel-5',
		toggleClass: {targets: lastpanel[0] , className:'selected'}
	})

}
	
});


