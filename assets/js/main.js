(function($) {
    "use strict";


    /*-----
    jQuery MeanMenu
    ------------------------------ */
    $('.mobile-menu nav').meanmenu({
        meanScreenWidth: "9901",
        meanMenuContainer: ".mobile-menu",
        onePage: true,
    });



    /* brand logo activation */
    $('.brand_logo').owlCarousel({
        loop: true,
        nav: false,
        autoplay: false,
        autoplayTimeout: 8000,
        items: 5,
        dots: false,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            576: {
                items: 2,
            },
            768: {
                items: 3,
            },
            992: {
                items: 4,
            },
            1200: {
                items: 5,
            },

        }
    });

    /* gallery_section_active */
    $('.gallery_section_active').owlCarousel({
        autoplay: true,
        loop: true,
        nav: true,
        autoplayTimeout: 8000,
        items: 1,
        dots: true,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
    });


    /* gallery_section_active */
    $('.banner_bottom_active').owlCarousel({
        autoplay: true,
        loop: true,
        nav: false,
        autoplayTimeout: 8000,
        items: 1,
        dots: false,
    });
    /*wow activation*/
    new WOW().init();


    /*--------------------------
     ScrollUp
    ---------------------------- */
    $.scrollUp({
        scrollText: '<i class="fa fa-angle-double-up"></i>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'fade'
    });


    /*------addClass/removeClass categories-------*/
    $(".search_hover").on("click", function() {
        $(this).removeAttr('href');
        $(this).toggleClass('open').next('.input_hover').toggleClass('open');
        $(this).parents().siblings().find('.input_hover').removeClass('open');
    });



    $('.popup_play').magnificPopup({
        type: 'iframe',
    });













})(jQuery);