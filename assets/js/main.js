/*
	Template Name: SaasRiver - SaaS & StartUp HTML Template
	Author: https://themexriver.com/
	Version: 1.0
*/


(function ($) {
"use strict";


/* 
	lenis-smooth-scroll-activation
*/
const lenis = new Lenis({
	duration: 1,
	easing: (t) => 1 - Math.pow(1 - t, 4),
	direction: 'vertical', 
	smooth: true, 
	smoothTouch: false, 
});
function raf(time) {
	lenis.raf(time);
	requestAnimationFrame(raf);
}
requestAnimationFrame(raf);
$('a[href^="#"]').on('click', function (e) {
	e.preventDefault(); 

	const target = $(this.getAttribute('href')); 

	if (target.length) {
		lenis.scrollTo(target[0], {
			duration: 1.2, 
			easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
		});
	}
});
gsap.config({
	nullTargetWarn: false,
});

/* 
	sticky-header-function
*/

function waStickyHeader() {
    var $window = $(window);
    var lastScrollTop = 0;
    var $header = $('.wa_sticky_header');
    var headerHeight = $header.outerHeight() + 30;

    $window.scroll(function () {
      var windowTop = $window.scrollTop();

      if (windowTop >= headerHeight) {
        $header.addClass('wa_sticky');
      } else {
        $header.removeClass('wa_sticky');
        $header.removeClass('wa_sticky_show');
      }

      if ($header.hasClass('wa_sticky')) {
        if (windowTop < lastScrollTop) {
          $header.addClass('wa_sticky_show');
        } else {
          $header.removeClass('wa_sticky_show');
        }
      }

      lastScrollTop = windowTop;
    });
}

waStickyHeader();

/* 
	offcanvas-function
*/

$('.offcanvas_toggle').on('click', function() {
    $('.wa-overly, .offcanvas_box_active').addClass('active');
});

$('.wa-overly, .offcanvas_box_close').on('click', function() {
    $('.offcanvas_box_active').removeClass('active');
    $('.wa-overly').removeClass('active');
});

$(document).on('keydown', function(event) {
    if (event.key === 'Escape') {
        $('.offcanvas_box_active').removeClass('active');
        $('.wa-overly').removeClass('active');
    }
});

$('.offcanvas_box_active a').on('click', function() {
    $('.offcanvas_box_active').removeClass('active'); 
    $('.wa-overly').removeClass('active'); 
});


/* 
	mobile-dropdown-function
*/

jQuery(".mobile-main-navigation li.dropdown").append('<span class="dropdown-btn"><i class="fa-solid fa-angle-right"></i></span>'),
	jQuery(".mobile-main-navigation li .dropdown-btn").on("click", function () {
		jQuery(this).hasClass("active")
		? (jQuery(this).closest("ul").find(".dropdown-btn.active").toggleClass("active"), jQuery(this).closest("ul").find(".dropdown-menu.active").toggleClass("active").slideToggle())
		: (jQuery(this).closest("ul").find(".dropdown-btn.active").toggleClass("active"),
			jQuery(this).closest("ul").find(".dropdown-menu.active").toggleClass("active").slideToggle(),
			jQuery(this).toggleClass("active"),
			jQuery(this).parent().find("> .dropdown-menu").toggleClass("active"),
			jQuery(this).parent().find("> .dropdown-menu").slideToggle());
});


/* 
	search-popup-function
*/

$('.search_btn_toggle').on('click', function() {
    $('.wa-overly, .search_box_active').addClass('active');
});

$('.wa-overly, .search_box_close').on('click', function() {
    $('.search_box_active').removeClass('active');
    $('.wa-overly').removeClass('active');
});

$(document).on('keydown', function(event) {
    if (event.key === 'Escape') {
        $('.search_box_active').removeClass('active');
        $('.wa-overly').removeClass('active');
    }
});




/* 
	windows-load-function
*/

document.addEventListener("DOMContentLoaded", function () {
	window.addEventListener('load', function(){

		if (document.querySelectorAll(".pg-preloader").length) {
			const loader = document.querySelector(".pg-preloader");
			const percentage = document.getElementById("pg-percentage");
			const fill = document.getElementById("pg-fill");

			const images = document.images;
			const total = images.length;
			let count = 0;

			if (total === 0) updateLoader(100);

			Array.from(images).forEach((img) => {
				const imageClone = new Image();
				imageClone.onload = imageClone.onerror = () => {
					count++;
					const percent = Math.round((count / total) * 100);
					updateLoader(percent);

					if (count === total) {

						setTimeout(() => {
							loader.classList.add("loaded");
							initAfterPreloader();
						}, 500);
						setTimeout(function () {
							loader.remove();
						}, 1500);
					}
				};
				imageClone.src = img.src;
			});

			function updateLoader(percent) {
				percentage.textContent = `${percent}%`;
				fill.style.width = `${percent}%`;
			}
		} else {
			initAfterPreloader();
		}

		afterPageLoad();

	})
});



/* 
	after-preloader-start
*/
function initAfterPreloader() {
	CustomEase.create("ease1", "0.23, 1, 0.32, 1");



	/* 
		only-LTR-direction
	*/
	if (getComputedStyle(document.body).direction !== "rtl") {
		/* 
			section-title-1
		*/	
		if ($(".sec_title_1").length) {
			var sec_title_1 = $(".sec_title_1");
			if (sec_title_1.length == 0) return;

			gsap.registerPlugin(SplitText);

			sec_title_1.each(function (index, el) {
				el.split = new SplitText(el, {
					type: "lines,words",
					linesClass: "split-line",
				});

				let delayValue = $(el).attr("data-split-delay") || "0s";
				delayValue = parseFloat(delayValue) || 0; 

				if ($(el).hasClass("sec_title_1")) {
					gsap.set(el.split.words, {
						y: 30,
                        filter: "blur(3px)",
                        opacity: 0,
					});
				}

				el.anim = gsap.to(el.split.words, {
					scrollTrigger: {
						trigger: el,
						start: "top 90%",
						toggleActions: 'play none none reverse',
					},
					y: 0,
                    filter: "blur(0px)",
					opacity: 1,
					duration: 1,

					ease: "ease1",
					stagger: 0.08,
					delay: delayValue, 
				});
			});
		}

        /* 
			section-title-1
		*/	
		if ($(".sec_title_2").length) {
			var sec_title_2 = $(".sec_title_2");
			if (sec_title_2.length == 0) return;

			gsap.registerPlugin(SplitText);

			sec_title_2.each(function (index, el) {
				el.split = new SplitText(el, {
					type: "lines,words",
					linesClass: "split-line",
				});

				let delayValue = $(el).attr("data-split-delay") || "0s";
				delayValue = parseFloat(delayValue) || 0; 

				if ($(el).hasClass("sec_title_2")) {
					gsap.set(el.split.words, {
						x: 30,
                        filter: "blur(3px)",
                        opacity: 0,
					});
				}

				el.anim = gsap.to(el.split.words, {
					scrollTrigger: {
						trigger: el,
						start: "top 90%",
						toggleActions: 'play none none reverse',
					},
					x: 0,
                    filter: "blur(0px)",
					opacity: 1,
					duration: 1,

					ease: "ease1",
					stagger: 0.08,
					delay: delayValue, 
				});
			});
		}
	}	


/* 
	after-preloader-end
*/
}


/* 
	after-page-load-start
*/
function afterPageLoad() {




	/* 
		add-active-class
	*/
	const waAddClass = gsap.utils.toArray('.wa_add_class');
	waAddClass.forEach(waAddClassItem => {
		gsap.to(waAddClassItem, {
			scrollTrigger: {
				trigger: waAddClassItem,
				start: "top 90%",
				end: "bottom bottom",
				toggleActions: "play none none reverse",
				toggleClass: "active",
				once: true,
				markers: false,
			}
		});
	});

	/* 
		wow-activation
	*/
	if($('.wow').length){
		var wow = new WOW({
			boxClass:     'wow',
			animateClass: 'animated',
			offset:       50,
			mobile:       true,
			live:         true
		});
		wow.init();
	};

/* 
	after-page-load-start
*/
}

/* 
    subtitle-1-icon
*/	
gsap.utils.toArray('.subtitle_1_icon').forEach((item) => {
    gsap.from(item, {
        scale: 0,
        ease: "ease1",
        duration: .5,
            scrollTrigger: {
                trigger: item,
                start: "top 86%",
                toggleActions: 'play none none reverse',
                markers: false,
            },
        });
    }
);

/* 
    subtitle-1-text
*/	
gsap.utils.toArray('.subtitle_1_text').forEach((item) => {
    gsap.from(item, {
        x: -32,
        ease: "ease1",
        duration: .5,
            scrollTrigger: {
                trigger: item,
                start: "top 86%",
                toggleActions: 'play none none reverse',
                markers: false,
            },
        });
    }
);


/* 
    header-1-menu-link
*/
if ($(".header_1_menu_link").length) {
    var header_1_menu_link = $(".header_1_menu_link .dropdown-menu a");
    gsap.registerPlugin(SplitText);

    header_1_menu_link.each(function (index, el) {
        el.split = new SplitText(el, {
            type: "words",
        });

        $(el).on("mouseenter", function () {
            gsap.fromTo(
                el.split.words,
                { x: -5, opacity: 0, filter: "blur(1px)" },
                { x: 0, opacity: 1, filter: "blur(0px)", duration: .8, stagger: -0.2, ease: "ease1", }
            );
        });
    });
}

/* 
    pr-button-1-split
*/
if ($(".btn_split_1").length) {
    var splitButton1 = $(".btn_split_1");
    gsap.registerPlugin(SplitText);

    splitButton1.each(function (index, el) {
        el.split = new SplitText(el, {
            type: "words",
        });

        $(el).on("mouseenter", function () {
            gsap.fromTo(
                el.split.words,
                { x: -30, opacity: 1, filter: "blur(5px)" },
                { x: 0, opacity: 1, filter: "blur(0px)", duration: .5, stagger: -0.1, ease: "ease1", }
            );
        });
    });
}


/* 
    hover-1-split
*/
if ($(".hover_1_split").length) {
    var hover_1_split = $(".hover_1_split a");
    gsap.registerPlugin(SplitText);

    hover_1_split.each(function (index, el) {
        el.split = new SplitText(el, {
            type: "words",
        });

        $(el).on("mouseenter", function () {
            gsap.fromTo(
                el.split.words,
                { x: 0, opacity: 1, filter: "blur(0px)" },
                { 
                    x: 5, 
                    opacity: 1, 
                    filter: "blur(.5px)", 
                    duration: 0.5, 
                    stagger: -0.1, 
                    ease: "ease1" 
                }
            );
        });


        $(el).on("mouseleave", function () {
            gsap.to(el.split.words, { 
                x: 0, 
                opacity: 1, 
                filter: "blur(0px)", 
                    duration: 0.5, 
                    stagger: 0.1, 
                    ease: "ease1" 
            });
        });
    });
}


/* 
	hero-1-shape-animation
*/	
if ($('.sr-hero-1-cursor-shape').length) { 
    var $bsH1shape = $('.sr-hero-1-cursor-shape');
    var $bsH1area = $('.sr-hero-1-cursor');

    function bsH1moveCircle(e) {
        var offset = $bsH1area.offset(); 
        var relativeX = e.pageX - offset.left; 
        var relativeY = e.pageY - offset.top; 

        TweenLite.to($bsH1shape, 0.3, {
            css: {
                left: relativeX + "px",
                top: relativeY + "px"
            }
        });
    }

    $bsH1area.on('mousemove', bsH1moveCircle);
}

/* 
	workflow-add-class
*/
// gsap.to(".sr-workflow-1-wrap", {
// 	scrollTrigger: {
// 		trigger: ".sr-workflow-1-wrap",
// 		start: "top 70%",
// 		end: "bottom bottom",
// 		toggleActions: "play none none reverse",
// 		toggleClass: "active",
// 		once: true,
// 		markers: true,
// 	}
// });


/* 
    faqs-1-sticky
*/
if ($(".sr-faqs-1-content-pin").length) { 
	if (window.matchMedia("(min-width: 992px)").matches) { 

		gsap.to(".sr-faqs-1-content-pin", {
			scrollTrigger: {
				trigger: ".sr-faqs-1-wrap",
				start: "top 20%", 
				end: () => {
					const rightHeight = document.querySelector(".sr-faqs-1-accordion").offsetHeight;
					const leftHeight = document.querySelector(".sr-faqs-1-content").offsetHeight;
					return "+=" + (rightHeight - leftHeight);  
				},
				pin: ".sr-faqs-1-content-pin", 
				pinSpacing: false,
				markers: false
			}
		});
	}
}


/* 
    blog-1-sticky
*/
if ($(".sr-blog-1-content-pin").length) { 
	if (window.matchMedia("(min-width: 992px)").matches) { 

		gsap.to(".sr-blog-1-content-pin", {
			scrollTrigger: {
				trigger: ".sr-blog-1-wrap",
				start: "top 20%", 
				end: () => {
					const rightHeight = document.querySelector(".sr-blog-1-right").offsetHeight;
					const leftHeight = document.querySelector(".sr-blog-1-content").offsetHeight;
					return "+=" + (rightHeight - leftHeight);  
				},
				pin: ".sr-blog-1-content-pin", 
				pinSpacing: false,
				markers: false
			}
		});
	}
}



/* 
	testimonial-1-slider-function
*/
if ($('.sr_t1_slider_active').length) {
	var sr_t1_slider_active = new Swiper(".sr_t1_slider_active", {
		loop: true,
		speed: 600,
		spaceBetween: 24,

		// autoplay: {
        //     delay: 5000,
        // },

		// navigation: {
		// 	nextEl: ".pg_t1_next",
		// 	prevEl: ".pg_t1_prev",
		// },

        pagination: {
			el: ".sr_t1_pagination",
			clickable: true,
		},

        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            576: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
            },
            992: {
                slidesPerView: 2,
            },
            1200: {
                slidesPerView: 3,
            },


        },

	});




}

	
/* 
    marquee-right
*/

$('.wa_marquee_right').marquee({
	speed: 50,
	gap: 0,
	delayBeforeStart: 0,
	startVisible:true,
	direction: 'right',
	duplicated: true,
	pauseOnHover: true,
})

/* 
    marquee-left
*/

$('.wa_marquee_left').marquee({
	speed: 50,
	gap: 0,
	delayBeforeStart: 0,
	startVisible:true,
	direction: 'left',
	duplicated: true,
	pauseOnHover: true,
})

/* 
    marquee-left-nopause
*/
$('.wa_marquee_left_nopause').marquee({
	speed: 20,
	gap: 0,
	delayBeforeStart: 0,
	startVisible:true,
	direction: 'left',
	duplicated: true,
	pauseOnHover: false,
})


/* 
    marquee-right-nopause
*/
$('.wa_marquee_right_nopause').marquee({
	speed: 20,
	gap: 0,
	delayBeforeStart: 0,
	startVisible:true,
	direction: 'right',
	duplicated: true,
	pauseOnHover: false,
})



// placeholder-typing
document.querySelectorAll(".wa_placeholder").forEach(waPlaceholderInput => {
	const waPlaceholderText = waPlaceholderInput.placeholder; 
	const waStartDelay = waPlaceholderInput.dataset.startDelay ? parseInt(waPlaceholderInput.dataset.startDelay) : 0; 
	let waPlaceholderIndex = 0;
	waPlaceholderInput.placeholder = "";

	const waPlaceholderObserver = new IntersectionObserver(entries => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				waPlaceholderType();
				waPlaceholderObserver.unobserve(waPlaceholderInput);
			}
		});
	}, { threshold: 0.5 });

	setTimeout(() => {
		waPlaceholderObserver.observe(waPlaceholderInput);
	}, waStartDelay);

	function waPlaceholderType() {
		if (waPlaceholderIndex < waPlaceholderText.length) {
			waPlaceholderInput.placeholder += waPlaceholderText.charAt(waPlaceholderIndex);
			waPlaceholderIndex++;
			setTimeout(waPlaceholderType, 70); 
		}
	}
});


/* 
	cursor-follower-function
*/
class Cursor {
    constructor(options) {
        this.options = $.extend(true, {
            container: "body",
            speed: 0.7,
            ease: "expo.out",
            visibleTimeout: 300
        }, options);
        this.body = $(this.options.container);
        this.el = $('<div class="wa-cursor"></div>');
        this.text = $('<div class="wa-cursor-text"></div>');
        this.init();
    }

    init() {
        this.el.append(this.text);
        this.body.append(this.el);
        this.bind();
        this.move(-window.innerWidth, -window.innerHeight, 0);
    }

    bind() {
        const self = this;

        this.body.on('mouseleave', () => {
            self.hide();
        }).on('mouseenter', () => {
            self.show();
        }).on('mousemove', (e) => {
            this.pos = {
                x: this.stick ? this.stick.x - ((this.stick.x - e.clientX) * 0.15) : e.clientX,
                y: this.stick ? this.stick.y - ((this.stick.y - e.clientY) * 0.15) : e.clientY
            };
            this.update();
        }).on('mousedown', () => {
            self.setState('-active');
        }).on('mouseup', () => {
            self.removeState('-active');
        }).on('mouseenter', 'a,input,textarea,button', () => {
            self.setState('-pointer');
        }).on('mouseleave', 'a,input,textarea,button', () => {
            self.removeState('-pointer');
        }).on('mouseenter', 'iframe', () => {
            self.hide();
        }).on('mouseleave', 'iframe', () => {
            self.show();
        }).on('mouseenter', '[data-cursor]', function () {
            self.setState(this.dataset.cursor);
        }).on('mouseleave', '[data-cursor]', function () {
            self.removeState(this.dataset.cursor);
        }).on('mouseenter', '[data-cursor-text]', function () {
            self.setText(this.dataset.cursorText);
        }).on('mouseleave', '[data-cursor-text]', function () {
            self.removeText();
        }).on('mouseenter', '[data-cursor-stick]', function () {
            self.setStick(this.dataset.cursorStick);
        }).on('mouseleave', '[data-cursor-stick]', function () {
            self.removeStick();
        });
    }

    setState(state) {
        this.el.addClass(state);
    }

    removeState(state) {
        this.el.removeClass(state);
    }

    toggleState(state) {
        this.el.toggleClass(state);
    }

    setText(text) {
        this.text.html(text);
        this.el.addClass('-text');
    }

    removeText() {
        this.el.removeClass('-text');
    }

    setStick(el) {
        const target = $(el);
        const bound = target.get(0).getBoundingClientRect();
        this.stick = {
            y: bound.top + (target.height() / 2),
            x: bound.left + (target.width() / 2)
        };
        this.move(this.stick.x, this.stick.y, 5);
    }

    removeStick() {
        this.stick = false;
    }

    update() {
        this.move();
        this.show();
    }

    move(x, y, duration) {
        gsap.to(this.el, {
            x: x || this.pos.x,
            y: y || this.pos.y,
            force3D: true,
            overwrite: true,
            ease: this.options.ease,
            duration: this.visible ? (duration || this.options.speed) : 0
        });
    }

    show() {
        if (this.visible) return;
        clearInterval(this.visibleInt);
        this.el.addClass('-visible');
        this.visibleInt = setTimeout(() => this.visible = true);
    }

    hide() {
        clearInterval(this.visibleInt);
        this.el.removeClass('-visible');
        this.visibleInt = setTimeout(() => this.visible = false, this.options.visibleTimeout);
    }
}
const cursor = new Cursor();

/* 
	bootstrap-tooltip-activation
*/
$(function () {
	$('[data-toggle="tooltip"]').tooltip()
})

/* 
	back-to-top-button-function
*/
if ($('.wa_backToTop').length) {
    var scrollTopbtn = document.querySelector('.wa_backToTop');
    var offset = 500; 
    var duration = 1000; 

    $(window).on('scroll', function () {
        if ($(this).scrollTop() > offset) {
            $(scrollTopbtn).addClass('active');
        } else {
            $(scrollTopbtn).removeClass('active');
        }
    });

    $(scrollTopbtn).on('click', function (event) {
        event.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, duration, 'swing');
    });
}

/* 
	popup-video-activation
*/
if($('.popup_video').length) {
	$('.popup_video').magnificPopup({
		type: 'iframe'
	});
}

/* 
	popup-image-activation
*/
if($('.popup_img').length) {
	$('.popup_img').magnificPopup({
		type: 'image',
		gallery: {
			enabled: true,
		},
	});
}


/* 
	nice-selector-activation
*/
if($('.nice-select').length) {
	$('.nice-select select').niceSelect();
}


/* 
	background-image-function
*/
$("[data-background]").each(function(){
	$(this).css("background-image","url("+$(this).attr("data-background") + ") ")
})

/* 
	counter-activation
*/


if($(".counter").length) {
    $('.counter').counterUp({
        delay: 10,
        time: 5000
    });

    let elements = document.querySelectorAll(".wa-counter");

    elements.forEach(element => {
        let innerWidth = element.clientWidth;
        element.style.width = innerWidth + "px";
    });
}

/*
    odomater-activation
*/
$('.odometer').appear(function (e) {
	var odo = $(".odometer");
	odo.each(function () {
		var countNumber = $(this).attr("data-count");
		jQuery(this).html(countNumber);
	});
});

/* 
	current-year-function
*/
if ($('.copyright-year').length) {
    const currentYear = new Date().getFullYear();
    $('.copyright-year').text(currentYear);
}


})(jQuery);