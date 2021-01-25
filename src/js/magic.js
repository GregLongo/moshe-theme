import { gsap } from "gsap"; 
gsap.registerPlugin(ScrollTrigger);


$(document).ready(function(){
	
	ScrollTrigger.matchMedia({
		"(min-width: 770px)": function(){
		 	addFX()	
		},
		"(max-width:769px)": function(){
			$("*").each(function(){
				$(this).css({opacity: 1 })
			});
			$('.class-gallery__item').each(function(){
				$(this).addClass("magic__fade--slide")
			});
		}
	});

	function addFX(){

		//Homepage

		if($('body.home').length){

			$(".section-title").each(function(){
				ScrollTrigger.create({
					trigger: this,
					start: 'bottom bottom',
					end: 'top top',
					toggleClass: {targets: this, className: "magic__fade--basic"}
				})
			});

			ScrollTrigger.create({
				trigger: ".wysiwyg__content--home",
				start: 'center bottom',
				end: 'center top',
				toggleClass: "magic__fade--basic"
			})
			
			//weird edge case break revisit
			ScrollTrigger.create({
				trigger: ".zoom",
				start: 'top bottom',
				end: 'bottom top',
				toggleClass: {targets: ['.vczapi-list-zoom-meetings--item', '.zoom__view-schedule'], className: "magic__fade--up"}
			})
			
			ScrollTrigger.create({
				trigger: ".class-gallery__item",
				start: 'center bottom',
				end: 'bottom top',
				toggleClass: {targets: '.class-gallery__item', className: "magic__fade--slide"}
			})

			ScrollTrigger.create({
				trigger: ".anim-section__blurb-1",
				start: 'top bottom',
				end: 'top top',
				toggleClass: {targets: ['.anim-section__blurb-1', '.anim-section__animation-1'], className:"magic__fade--basic"}
			})

			ScrollTrigger.create({
				trigger: ".class-gallery__item",
				start: 'top bottom',
				end: 'bottom top',
				toggleClass: {targets: '.class-gallery__item', className: "magic__fade--slide"}
			})

			ScrollTrigger.create({
				trigger: ".anim-section__blurb-1",
				start: 'top bottom',
				end: 'top top',
				toggleClass: {targets: ['.anim-section__blurb-1', '.anim-section__animation-1'], className:"magic__fade--basic"}
			})

			ScrollTrigger.create({
				trigger: ".anim-section__blurb-2",
				start: 'top bottom',
				end: 'top top',
				toggleClass: {targets: ['.anim-section__blurb-2', '.anim-section__animation-2'], className:"magic__fade--basic"}
			})

			ScrollTrigger.create({
				trigger: ".promo-video",
				start: 'center bottom',
				end: 'top top',
				toggleClass: "magic__fade--basic"
			})

			ScrollTrigger.create({
				trigger: ".qotd",
				start: 'center bottom',
				end: 'top top',
				toggleClass: "magic__fade--up"
			})

			//there's probably a more gsapee less jqueryee way 
			$(".parallax-gallery__img").each(function(index){
				var trig = this.parentNode,
				speed =  30 * (index) + '%';
				// speed =  (100 * Math.random()) + '%'; experimental random seeding
				gsap.to(this, {
				  scrollTrigger:{
				  	trigger: this,
				  	scrub: true,
				  	start: 'top bottom',
					end: 'top top',
				  } ,
				  y: speed,
				});
			});

			gsap.to(".cta-parallax", {
			  yPercent: 80,
			  ease: "none",
			  scrollTrigger: {
			    trigger: ".cta-parallax__outer",
			    scrub: true,
			    start: 'top bottom',
				end: 'top top',
			  }, 
			});

		}// homepage


		//Class Page

		if($('body.page-template-class-page').length){

			gsap.to(".hero--class", {
			  yPercent: 10,
			  ease: "none",
			  scrollTrigger: {
			    trigger: ".hero__wrapper",
			    scrub: true
			  }, 
			});

			ScrollTrigger.create({
				trigger: ".wysiwyg__content--class",
				start: 'top bottom',
				end: 'top top',
				toggleClass: "magic__fade--basic"
			})

			ScrollTrigger.create({
				trigger: ".windowpane__pane--class",
				start: 'center bottom',
				end: 'bottom top',
				toggleClass: {targets: '.windowpane__pane--class', className: "magic__fade--basic"}
			})

			ScrollTrigger.create({
				trigger: ".wysiwyg--class__description",
				start: 'center bottom',
				end: 'center top',
				toggleClass: "magic__fade--basic"
			})

			//maybe not show off every page?
			$('.section-title').addClass("magic__fade--basic");
			$('.class-gallery__item').addClass("magic__fade--slide");

			ScrollTrigger.create({
				trigger: ".qotd",
				start: 'center bottom',
				end: 'top top',
				toggleClass: "magic__fade--up"
			})

		}//class page


		//About Page

		if($('.page__title--about').length){

			ScrollTrigger.create({
				trigger: ".windowpane__pane--about",
				start: 'center bottom',
				end: 'bottom top',
				toggleClass: {targets: '.windowpane__pane--about', className: "magic__fade--basic"}
			})

			ScrollTrigger.create({
				trigger: ".wysiwyg--about",
				start: 'center bottom',
				end: 'center top',
				toggleClass: "magic__fade--basic"
			})

			ScrollTrigger.create({
				trigger: ".mission",
				start: 'center bottom',
				end: 'top top',
				toggleClass: {targets: '.mission__content', className: "magic__fade--basic"}
			})

		}//Aboat


		//Service Page

		if($('.page__title--services').length){
			$('.class-gallery__item').addClass("magic__fade--slide");
		}


		//Schedule Page

		if($('.page__title--schedule').length){
			$('.vczapi-list-zoom-meetings--item').addClass("magic__fade--up");
		}

	}//function
});
