$(function () {
    'use strict';



    ////////// Colova Scroll Animations Start //////////
    $(window).on('load', function () {

        $('.has-animation').each(function () {
            $(this).attr('data-scroll', 'true')

        });

        if ($(window).width() > 850) {


            var colovaScroll = new LocomotiveScroll({
                el: document.querySelector('.js-scroll'),
                smooth: false,
                offset: 150
            });;
            window.colovaScroll = colovaScroll;
        };


        if ($(window).width() < 850) {
            var colovaScroll = new LocomotiveScroll({
                el: document.querySelector('.js-scroll'),
                smooth: false,
                offset: 100
            });
            window.colovaScroll = colovaScroll;
        };

    });

    ////////// Colova Scroll Animations End //////////




    ////////// Page Transitions Start //////////

    $('.colova-project-button').on('click', function () {

        var targetProject = $(this).parents('.swiper-slide');
        var clickedTitle = targetProject.find('.colova-project-title');

        window.clickedTitle = clickedTitle;
    });


    $('.colova-portfolio-title').on('click', function () {
        var clickedTitle = $(this);
        window.clickedTitle = clickedTitle;
    });



    var options = {
            blacklist: '.c-image',
            prefetch: true,
            cacheLength: 2,
            onStart: {
                duration: 3000, // Duration of our animation
                render: function ($container) {
                    // Add your CSS animation reversing class


                    if ($('.navigation-classic').length > 0) {

                        $('.navigation-classic .menu-item a').on('click', function () {


                            setTimeout(function () {
                                $('.page-trans-overlay').addClass('overlay-visible');

                            }, 400);

                        });

                        var clickedTitle = $('a');
                        window.clickedTitle = clickedTitle;

                    }

                    if (($('.colova-portfolio-showcase').length < 1) && (!$(".fs-menu-toggle").hasClass('is-active'))) {

                        setTimeout(function () {
                            $('.page-trans-overlay').addClass('overlay-visible');

                        }, 400);
                    }

                    $('.site-logo').addClass('out-left');
                    $('.fs-footer-left').addClass('out-left');
                    $('.fs-footer-right').addClass('out-right');
                    $('.fs-menu-toggle').addClass('out-right');

                    if ($('.navigation-classic').length > 0) {
                        $('.site-navigation .site-menu').addClass('out-right');
                    };

                    if ($('.cv-titles').length > 0) {
                        $('.cv-slide-control').addClass('opacity-0')

                    }


                    if (($('.colova-portfolio-showcase').length > 0) && (!$(".fs-menu-toggle").hasClass('is-active'))) {


                        if ($('.cl2-date').length > 0) {
                            $('.cl2-date').addClass('opacity-0');
                        }
                        $('.colova-portfolio-title').addClass('opacity-0');
                        window.clickedTitle.removeClass('opacity-0');
                        $('.colova-portfolio-image').addClass('scale-down')
                        $('.colova-portfolio-video').addClass('scale-down')

                        setTimeout(function () {
                            $('.colova-portfolio-title').addClass('title-out');
                        }, 500);

                        setTimeout(function () {
                            $('.colova-portfolio-image').addClass('opacity-0')
                            $('.colova-portfolio-video').addClass('opacity-0')
                        }, 1250);

                        setTimeout(function () {
                            $('.portfolio-trans-overlay').addClass('overlay-visible');
                        }, 2000);


                    };

                    if ($('.fs-menu-toggle').hasClass('is-active')) {

                        setTimeout(function () {
                            $('.page-trans-overlay').addClass('overlay-visible');
                        }, 1000);


                    };


                    // Restart your animation
                    smoothState.restartCSSAnimations();
                }
            },
            onReady: {
                duration: 0,
                render: function ($container, $newContent) {

                    // Inject the new content
                    $container.html($newContent);

                    ////////// Site Menu Start //////////
                    if ($('.navigation-fs').length > 0) {

                        var navHeight = $('.main-navigation').outerHeight();



                        $('.fs-widget-wrapper').css({
                            height: navHeight + 'px'

                        });

                        $('.fs-menu-toggle').on('click', function () {

                            var clicks = $(this).data('clicks');
                            if (clicks) {

                                $(this).removeClass('is-active');

                                $('.menu-item a').each(function (i, element) {
                                    $(element).delay(i * 120).queue(function (next) {
                                        $(this).removeClass('menu-item-comes');
                                        var beforeLi = $(this).parent('.menu-item');
                                        beforeLi.removeClass('index-come');
                                        next();
                                    });
                                })

                                $('.fs-seperator').removeClass('fs-seperator-in');
                                $('.fs-widget').removeClass('fs-widget-in');

                                setTimeout(function () {
                                    $('.fs-menu-found').removeClass('found-comes');
                                }, 400);

                            } else {
                                $(this).addClass('is-active');

                                $('.fs-menu-found').addClass('found-comes');


                                setTimeout(function () {
                                    $('.fs-seperator').addClass('fs-seperator-in');
                                    $('.fs-widget').addClass('fs-widget-in');
                                    $('.menu-item a').each(function (i, element) {
                                        $(element).delay(i * 150).queue(function (next) {
                                            $(this).addClass('menu-item-comes');
                                            var beforeLi = $(this).parent('.menu-item');

                                            setTimeout(function () {
                                                beforeLi.addClass('index-come');

                                            }, 200);

                                            next();
                                        });


                                    });

                                }, 200);


                            }
                            $(this).data("clicks", !clicks);

                            $('.navigation-fs .menu-item a').on('click', function () {


                                $('.menu-item a').each(function (i, element) {
                                    $(element).delay(i * 120).queue(function (next) {
                                        $(this).removeClass('menu-item-comes');
                                        var beforeLi = $(this).parent('.menu-item');
                                        beforeLi.removeClass('index-come');
                                        next();
                                    });
                                })

                                $('.fs-seperator').removeClass('fs-seperator-in');
                                $('.fs-widget').removeClass('fs-widget-in');

                                $('.fs-menu-toggle').data('clicks', false)
                            });

                        });

                    };

                    if ($(window).width() < 850) {

                        $('.site-navigation').removeClass('navigation-classic');
                        $('.site-navigation').addClass('navigation-fs');

                    }

                    ////////// Site Menu End ///////////

                    ////////// C Embed Video Start ///////////
                    if ($('.c-video').length > 0) {

                        const cVideo = new Plyr('.c-video', {
                            controls: ["play-large",
                            "play",
                            "progress",
                            "duration",
                            "mute",
                            "volume",
                            "fullscreen"
                        ],
                            autoplay: true,
                            muted: true,
                            volume: 0,
                            quality: {
                                default: 1080
                            },
                            loop: {
                                active: true
                            },

                        });

                        $('.c-video-play').on('click', function () {
                            $(this).fadeOut(500);
                            $('.c-video-overlay').fadeOut(500);
                            $('.plyr__controls').addClass('controls-in');
                            cVideo.restart();
                            cVideo.increaseVolume(1);

                        });

                        window.cVideo = cVideo;

                    };

                    if ($('.c-video-style-2').length > 0) {

                        const cVideo2 = new Plyr('.c-video-style-2', {
                            controls: ["play-large",
                            "play",
                            "progress",
                            "duration",
                            "mute",
                            "volume",
                            "fullscreen"
                        ],

                        });


                        $('.icon-play').on('click', function () {

                            var videoPlay = $(this).parent('.video-control');
                            videoPlay.addClass('controls-gone');
                            cVideo2.play();
                            cVideo2.increaseVolume(1);
                        });

                        window.cVideo2 = cVideo2;

                    };
                    ////////// C Embed Video End ///////////

                    ////////// Carousel Start //////////
                    if ($('.cp-titles').length > 0) {

                        var colovaCarousel = new Swiper('.cp-titles', {
                            slidesPerView: 'auto',
                            mousewheel: {
                                invert: false,

                            },
                            centeredSlides: true,
                            speed: 1500,
                            touchRatio: 5,

                        });

                        var fsColor = $('.swiper-slide-active').data('color');

                        $('.fullscreen, .portfolio-trans-overlay').css({
                            background: fsColor
                        });

                        var backTitles = $('.cp-titles .swiper-wrapper').clone();
                        $('.back-titles').html(backTitles);

                        var backTitles = new Swiper('.back-titles', {
                            slidesPerView: 'auto',
                            mousewheel: {
                                invert: false,

                            },
                            grabCursor: true,
                            centeredSlides: true,
                            speed: 1500,

                        });

                        colovaCarousel.on('slideChangeTransitionStart', function () {

                            var bgColor = $('.swiper-slide-active').data('color');
                            $('.fullscreen, .portfolio-trans-overlay').css({
                                background: bgColor
                            });


                        });


                        var interleaveOffset = 0.5;

                        var imagesSwiper = new Swiper('.images-swiper', {
                            parallax: true,
                            mousewheel: {
                                invert: false,

                            },
                            watchSlidesProgress: true,
                            on: {
                                progress: function () {
                                    let swiper = this;
                                    for (let i = 0; i < swiper.slides.length; i++) {
                                        let slideProgress = swiper.slides[i].progress,
                                            innerOffset = swiper.width * interleaveOffset,
                                            innerTranslate = slideProgress * innerOffset;

                                        swiper.slides[i].querySelector(".slide-bgimg").style.transform =
                                            "translateX(" + innerTranslate + "px)";


                                    }
                                },
                                setTransition: function (speed) {
                                    let swiper = this;
                                    for (let i = 0; i < swiper.slides.length; i++) {
                                        swiper.slides[i].style.transition = speed + "ms";
                                        swiper.slides[i].querySelector(".slide-bgimg").style.transition =
                                            speed + "ms";
                                    }
                                }
                            }

                        });


                        colovaCarousel.controller.control = imagesSwiper;
                        backTitles.controller.control = imagesSwiper;
                        colovaCarousel.controller.control = backTitles;

                        colovaCarousel.on('touchStart', function () {

                            $('.cp-titles').addClass('cp-titles-touch');

                        });

                        colovaCarousel.on('touchEnd', function () {

                            $('.cp-titles').removeClass('cp-titles-touch');

                        });

                        $('.discover-p-link').on('mouseenter', function () {

                            $('.cp-titles').addClass('cp-toggle');

                        });

                        $('.discover-p-link').on('mouseleave', function () {

                            $('.cp-titles').removeClass('cp-toggle');

                        });


                    };
                    ////////// Carousel End //////////

                    ////////// Vertical Start //////////
                    if ($('.cv-titles').length > 0) {

                        var interleaveOffset = 0.5;

                        var cvImagesSwiper = new Swiper('.cv-images-swiper', {
                            slidesPerView: 1,
                            parallax: true,
                            mousewheel: {
                                invert: false,

                            },
                            watchSlidesProgress: true,
                            on: {
                                progress: function () {
                                    let swiper = this;
                                    for (let i = 0; i < swiper.slides.length; i++) {
                                        let slideProgress = swiper.slides[i].progress,
                                            innerOffset = swiper.width * interleaveOffset,
                                            innerTranslate = slideProgress * innerOffset;

                                        swiper.slides[i].querySelector(".slide-bgimg").style.transform =
                                            "translateX(" + innerTranslate + "px)";


                                    }
                                },
                                setTransition: function (speed) {
                                    let swiper = this;
                                    for (let i = 0; i < swiper.slides.length; i++) {
                                        swiper.slides[i].style.transition = speed + "ms";
                                        swiper.slides[i].querySelector(".slide-bgimg").style.transition =
                                            speed + "ms";
                                    }
                                }
                            }

                        });



                        var cvTitles = new Swiper('.cv-titles', {
                            slidesPerView: 1,
                            mousewheel: {
                                invert: false,

                            },
                            centeredSlides: true,
                            speed: 1000,
                            effect: 'fade',
                            fadeEffect: {
                                crossFade: true
                            },
                            autoplay: true,
                            navigation: {
                                nextEl: '.cv-slide-next',
                                prevEl: '.cv-slide-prev',
                            },
                            pagination: {
                                el: '.cv-slide-fraction',
                                type: 'fraction',
                                renderFraction: function (currentClass, totalClass) {
                                    return '<span class="' + currentClass + '"></span>' + '<span class="cv-frac-line">/</span>' +
                                        '<span class="' + totalClass + '"></span>';
                                },

                            },
                        });

                        cvTitles.controller.control = cvImagesSwiper;

                        var cbColor = $('.swiper-slide-active').data('color');

                        $('.cv-images-back, .portfolio-trans-overlay').css({
                            backgroundColor: cbColor
                        });

                        $('.cv-title, .cv-summary, .cv-discover, .cv-slide-pagination i , .cv-slide-fraction span').css({
                            color: cbColor
                        });

                        cvTitles.on('slideChangeTransitionStart', function () {

                            var cbColor = $('.swiper-slide-active').data('color');
                            $('.cv-images-back, .portfolio-trans-overlay').css({
                                background: cbColor
                            });

                            setTimeout(function () {

                                $('.cv-title, .cv-summary, .cv-discover, .cv-slide-pagination i , .cv-slide-fraction span').css({
                                    color: cbColor
                                })
                            }, 200)

                        });





                    };
                    ////////// Vertical End //////////

                    ////////// Fullscreen Start //////////
                    if ($('.cf-titles').length > 0) {

                        var cfTitles = new Swiper('.cf-titles', {
                            slidesPerView: 'auto',
                            mousewheel: {
                                invert: false,

                            },
                            centeredSlides: true,
                            speed: 1300,
                            direction: 'vertical',
                            touchRatio: 0.1,
                            autoplay: true

                        });


                        var fsColor = $('.swiper-slide-active').data('color');

                        $('.fullscreen, .portfolio-trans-overlay').css({
                            background: fsColor
                        });

                        cfTitles.on('slideChangeTransitionStart', function () {

                            var bgColor = $('.swiper-slide-active').data('color');
                            $('.fullscreen, .portfolio-trans-overlay').css({
                                background: bgColor
                            });


                        });


                        var interleaveOffset = 0.3;

                        var cfImagesSwiper = new Swiper('.cf-images-swiper', {
                            slidesPerView: 'auto',
                            parallax: true,
                            mousewheel: {
                                invert: false,

                            },
                            direction: 'vertical',
                            watchSlidesProgress: true,
                            speed: 1300,

                            on: {
                                progress: function () {
                                    let swiper = this;
                                    for (let i = 0; i < swiper.slides.length; i++) {
                                        let slideProgress = swiper.slides[i].progress,
                                            innerOffset = swiper.width * interleaveOffset,
                                            innerTranslate = slideProgress * innerOffset;

                                        swiper.slides[i].querySelector(".slide-bgimg").style.transform =
                                            "translateY(" + innerTranslate + "px)";


                                    }
                                },
                                setTransition: function (speed) {
                                    let swiper = this;
                                    for (let i = 0; i < swiper.slides.length; i++) {
                                        swiper.slides[i].style.transition = speed + "ms";
                                        swiper.slides[i].querySelector(".slide-bgimg").style.transition =
                                            speed + "ms";
                                    }
                                }
                            }

                        });



                        cfTitles.controller.control = cfImagesSwiper;




                    };
                    ////////// Fullscreen End //////////

                    ////////// List Start //////////
                    if ($('.cl-portfolios').length > 0) {

                        var bgColor = $('.cl-portfolio').data('color');
                        $('.fullscreen, .portfolio-trans-overlay').css({
                            background: bgColor
                        });

                        $('.cl-title-h1').on('mouseenter', function () {

                            var clTitle = $(this).parents('.cl-title');

                            var clPort = clTitle.parents('.cl-portfolio');

                            var bgColor = clPort.data('color');

                            $('.fullscreen, .portfolio-trans-overlay').css({
                                background: bgColor
                            });

                            var sImage = clPort.data('image');

                            $('.cl-image-base').removeClass('cl-image-active');
                            $(sImage).addClass('cl-image-active');



                        });

                        $('.cl-title-h1').on('mouseenter', function () {

                            var clTitle = $(this).parents('.cl-title');

                            var clPort = clTitle.parents('.cl-portfolio');



                        });

                        $('.cl-title-h1').on('mouseleave', function () {
                            $('.cl-image-base').removeClass('cl-image-active');

                        });



                        var Scrollbar = window.Scrollbar;

                        Scrollbar.init(document.querySelector('.cl-portfolios'));

                    }
                    ////////// List End //////////

                    ////////// Title Wall Start //////////
                    if ($('.ct-portfolio').length > 0) {

                        var bgColor = $('.ct-portfolio:first-child').data('color');
                        $('.fullscreen, .portfolio-trans-overlay').css({
                            background: bgColor
                        });

                        $('.ct-portfolio a').on('mouseenter', function () {

                            var activeParent = $(this).parents('.ct-portfolio');

                            var bgColor = activeParent.data('color');

                            $('.fullscreen, .portfolio-trans-overlay').css({
                                background: bgColor
                            });

                            var sImage = activeParent.data('image');
                            var wrapper = $('.' + sImage).children('.ct-image-wrapper');

                            $(wrapper).addClass('ct-wrapper-height');

                        });


                        $('.ct-portfolio').on('mouseleave', function () {

                            $('.ct-image-wrapper').removeClass('ct-wrapper-height');

                        });

                        $(document).on('mousemove', function (e) {
                            $('.ct-images').css({
                                left: e.pageX + 20,
                                top: e.pageY + 20
                            });
                        });



                    };
                    ////////// Title Wall End //////////

                    ////////// List V2 Start //////////
                    if ($('.cl2-portfolio').length > 0) {

                        var bgColor = $('.cl2-portfolio:first-child').data('color');
                        $('.fullscreen, .portfolio-trans-overlay').css({
                            background: bgColor
                        });

                        $('.cl2-portfolio').on('mouseenter', function () {
                            var bgColor = $(this).data('color');

                            $('.fullscreen, .portfolio-trans-overlay').css({
                                background: bgColor
                            });



                        });

                        $('.cl2-title-h1').each(function () {
                            var dataHover = $(this).text();
                            $(this).attr('data-hover', dataHover);

                        });

                        $('.cl2-portfolio:first-child').addClass('cl2-portfolio-first');

                        $('.cl2-image-base:first-child').addClass('cl2-wrapper-height');


                        $('.cl2-portfolio').on('mouseenter', function () {

                            $('.cl2-image-base').removeClass('cl2-wrapper-height');


                            $('.cl2-portfolio').removeClass('cl2-portfolio-first');

                            var sImage = $(this).data('image');

                            $(this).addClass('cl2-portfolio-first');

                            $(sImage).addClass('cl2-wrapper-height');

                        });


                    };
                    ////////// List V2 End //////////

                    ////////// Image Carousel Start //////////
                    if ($('.c-image-carousel').length > 0) {

                        var cImageCarousel = new Swiper('.c-image-carousel', {
                            slidesPerView: 'auto',
                            spaceBetween: 30,

                            grabCursor: true,
                            breakpoints: {
                                850: {
                                    slidesPerView: 1,
                                    allowTouchMove: true,

                                }

                            },


                        });


                    };
                    ////////// Image Carousel End //////////

                    ////////// Parallax Image Start //////////
                    if ($('.c-parallax-image').length > 0) {
                        var hasParallax = $('.c-parallax-image img');

                        hasParallax.addClass('has-parallax-image');

                        var cParallaxImage = document.getElementsByClassName('has-parallax-image');
                        new simpleParallax(cParallaxImage, {
                            overflow: false,
                            delay: 2,
                            scale: 1.3
                        });


                    };
                    ////////// Parallax Image End //////////

                    ////////// Image Lightbox Start //////////
                    if ($('.c-image-lightbox').length > 0) {
                        $('.c-image-lightbox').magnificPopup({
                            delegate: 'img', // child items selector, by clicking on it popup will open
                            type: 'image',
                            closeOnContentClick: true,
                            closeBtnInside: false,
                            mainClass: 'image-lightbox', // class to remove default margin from left and right side
                            image: {
                                verticalFit: true
                            },
                            zoom: {
                                enabled: true,
                                duration: 300 // don't foget to change the duration also in CSS
                            },

                            // other options
                        });
                    }
                    ////////// Image Lightbox End //////////

                    $('.colova-project-button').on('click', function () {

                        var targetProject = $(this).parents('.swiper-slide');
                        var clickedTitle = targetProject.find('.colova-project-title');

                        window.clickedTitle = clickedTitle;
                    });


                    $('.colova-portfolio-title').on('click', function () {

                        var clickedTitle = $(this);
                        window.clickedTitle = clickedTitle;
                    });

                    window.colovaScroll.destroy();


                    if ($('.has-animation').length > 0) {
                        $('.has-animation').each(function () {
                            $(this).attr('data-scroll', 'true')

                        });
                    };


                }
            },
            onAfter: function ($container, $newContent) {

                $('.page-trans-overlay').removeClass('overlay-visible');

                $('.portfolio-trans-overlay').removeClass('overlay-visible');

                setTimeout(function () {
                    window.colovaScroll.init();


                }, 100)

            }


        },
        smoothState = $('#main').smoothState(options).data('smoothState');
});
