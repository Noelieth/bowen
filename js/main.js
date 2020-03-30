
'use strict';



(function($) {
	/*------------------
		Navigation menu responsive
	--------------------*/
    $('.header-section .container').append('<div class="mobile-nav-switch"><img src="img/icon-menu.svg"></div><div class="search-switch nav-switch"><img src="img/icon-search.svg"/></i></div><div class="nav-bag"><img src="img/icon-bag.svg"/></i></div><ul class="mobile-menu"></ul>')
	var m1 = $('.menu-responsive ').children();
	$('.mobile-menu').append(m1);
	$('.mobile-nav-switch').on('click', function () {
		$('.mobile-menu').slideToggle();
	});

    //Collapse or Expand Menu
        $('.menu-toggle').on('click', function (e) {
            var $this = $(this);
            var $content = $this.next();

            if ($($this.parents('ul')).hasClass('menu-responsive')) {
                var $not = $(e.target).hasClass('menu-toggle') ? e.target : $(e.target).parents('.menu-toggle');

                $.each($('.menu-toggle.toggled').not($not).next(), function (i, val) {
                    if ($(val).is(':visible')) {
                        $(val).prev().toggleClass('toggled');
                        $(val).slideUp();
                    }
                });
            }

            $this.toggleClass('toggled');
            $content.slideToggle(320);
        });
        
	// Search model
	$('.search-switch').on('click', function() {
		$('.search-model').fadeIn(400);
	});

	$('.search-close-switch').on('click', function() {
		$('.search-model').fadeOut(400,function(){
			$('#search-input').val('');
		});
	});

	

	/*------------------
		Background Set
	--------------------*/
	$('.set-bg').each(function() {
		var bg = $(this).data('setbg');
		$(this).css('background-image', 'url(' + bg + ')');
	});


	/*------------------
		Home Slider
	--------------------*/
	$('.hero-slider').owlCarousel({
        loop: true,
        margin: 0,
		dots: false,
		margin: 0,
		items: 1,
		nav:false, //change "true" to appear arrow
		animateOut: 'fadeOut',
		animateIn: 'fadeIn',
		navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
		autoplay: true
	});
	/*------------------
		Rock edition carrousel
	--------------------*/
	if ($.fn.owlCarousel) {
        $('.rock-products-slides').owlCarousel({
            items: 7,
            margin: 30,
            loop: true,
            nav: false,
            dots: false,
            autoplay: true,
            autoplayTimeout: 5000,
            smartSpeed: 1000,
            responsive: {
                0: {
                    items: 2
                },
                576: {
                    items: 2
                },
                768: {
                    items: 3
                },
                992: {
                    items: 5
                }
            }
        });
        $('.product_thumbnail_slides').owlCarousel({
            items: 2,
            margin: 0,
            loop: true,
            nav: true,
            navText: ["<img src='img/core-img/long-arrow-left.svg' alt=''>", "<img src='img/core-img/long-arrow-right.svg' alt=''>"],
            dots: false,
            autoplay: true,
            autoplayTimeout: 5000,
            smartSpeed: 1000
        });
    }

	// Favorite Button Active
    var favme = $(".favme");

    favme.on('click', function () {
        $(this).toggleClass('active');
    });

    favme.on('click touchstart', function () {
        $(this).toggleClass('is_animating');
    });

    favme.on('animationend', function () {
        $(this).toggleClass('is_animating');
    });

    /*------------------
		Jeans carrousel
	--------------------*/
	if ($.fn.owlCarousel) {
        $('.jeans-products-slides').owlCarousel({
            items: 7,
            margin: 30,
            loop: true,
            nav: false,
            dots: false,
            autoplay: true,
            autoplayTimeout: 5000,
            smartSpeed: 1000,
            responsive: {
                0: {
                    items: 2
                },
                576: {
                    items: 2
                },
                768: {
                    items: 3
                },
                992: {
                    items: 5
                }
            }
        });
        $('.product_thumbnail_slides').owlCarousel({
            items: 2,
            margin: 0,
            loop: true,
            nav: true,
            navText: ["<img src='img/core-img/long-arrow-left.svg' alt=''>", "<img src='img/core-img/long-arrow-right.svg' alt=''>"],
            dots: false,
            autoplay: true,
            autoplayTimeout: 5000,
            smartSpeed: 1000
        });
    }

    /*------------------
        Accordions
    --------------------*/
    $('.panel-header').on('click', function (e) {
        $('.panel-header').removeClass('active');
        var $this = $(this);
        if (!$this.hasClass('active')) {
            $this.addClass('active');
        }
        e.preventDefault();
    });
})(jQuery);
