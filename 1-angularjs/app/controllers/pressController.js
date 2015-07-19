app.controller('pressController', [
    '$scope',
    function ($scope) {

        $scope.init = function () {
            var revapi;
            jQuery(document).ready(function () {
                revapi = jQuery('.tp-banner').revolution(
                    {
                        delay: 9000,
                        startwidth: 1170,
                        startheight: 600,
                        spinner: "spinner4",
                        hideThumbs: 10,
                        fullWidth: "on",
                        navigationType: "none",
                        navigationArrows: "solo",
                        navigationStyle: "preview4"
                    });
            });

            //=================================== Scrollbar  ======================================//
            $(".box").mCustomScrollbar({
                scrollButtons: {
                    enable: true
                },
                theme: "dark-2"
            });


            //=================================== Portfolio Filters  ==============================//
            jQuery(window).load(function () {
                var $container = jQuery('.portfolioContainer');
                $container.isotope({
                    filter: '*',
                    animationOptions: {
                        duration: 750,
                        easing: 'linear',
                        queue: false
                    }
                });

                jQuery('.portfolioFilter a').click(function () {
                    jQuery('.portfolioFilter .current').removeClass('current');
                    jQuery(this).addClass('current');
                    var selector = jQuery(this).attr('data-filter');
                    $container.isotope({
                        filter: selector,
                        animationOptions: {
                            duration: 750,
                            easing: 'linear',
                            queue: false
                        }
                    });
                    return false;
                });
            });

            //=================================== Loader =====================================//
            jQuery(window).load(function () {
                jQuery(".status").fadeOut();
                jQuery(".preloader").delay(1000).fadeOut("slow");
            });


            //=================================== Accordion  =================================//
            jQuery('.accordion-container').hide();
            jQuery('.accordion-trigger:first').addClass('active').next().show();
            jQuery('.accordion-trigger').click(function () {
                if (jQuery(this).next().is(':hidden')) {
                    jQuery('.accordion-trigger').removeClass('active').next().slideUp();
                    jQuery(this).toggleClass('active').next().slideDown();
                }
                return false;
            });

            //=================================== jBar  =============================================//
            jQuery('.jBar').hide();
            jQuery('.jRibbon').show().removeClass('up', 500);
            jQuery('.jTrigger').click(function () {
                jQuery('.jRibbon').toggleClass('up', 500);
                jQuery('.jBar').slideToggle();
            });

            //=================================== Simple slide  ====================================//
            jQuery('.carousel').carousel();

            //=================================== Carousel Services  ===============================//
            jQuery("#services-carousel").owlCarousel({
                autoPlay: 3200,
                items: 4,
                navigation: true,
                itemsDesktop: [1600, 3],
                itemsDesktopSmall: [1024, 2],
                itemsMobile: [800, 1],
                pagination: false
            });

            //=================================== Carousel Works  ==================================//
            jQuery("#works").owlCarousel({
                autoPlay: 3200,
                items: 5,
                navigation: true,
                itemsDesktop: [1600, 4],
                itemsDesktopSmall: [1024, 3],
                itemsMobile: [500, 1],
                pagination: true
            });

            //=================================== Carousel works-no-margin  ==================================//
            jQuery("#works-no-margin").owlCarousel({
                autoPlay: 3200,
                items: 4,
                navigation: false,
                itemsDesktop: [1600, 4],
                itemsDesktopSmall: [1024, 3],
                itemsMobile: [500, 1],
                pagination: false
            });

            //=================================== Carousels Footer  =================================//
            jQuery(".tweet_list").owlCarousel({
                autoPlay: 4000,
                items: 1,
                navigation: false,
                pagination: true,
                singleItem: true
            });

            //=================================== Slide Services  ==================================//
            jQuery("#slide-services").owlCarousel({
                autoPlay: false,
                items: 1,
                navigation: true,
                autoHeight: true,
                slideSpeed: 400,
                singleItem: true,
                pagination: true
            });

            //=================================== Carousel Sponsors  ================================//
            jQuery("#sponsors").owlCarousel({
                autoPlay: 3200,
                items: 6,
                navigation: true,
                itemsDesktopSmall: [1024, 4],
                itemsTablet: [768, 3],
                itemsMobile: [500, 2],
                pagination: false
            });

            //=================================== Nav Scroll One Page===========================//
            $('nav ul li a').click(function () {
                var el = $(this).attr('href');
                var elWrapped = $(el);
                scrollToDiv(elWrapped, 40);
                return false;
            });
            function scrollToDiv(element, navheight) {
                var offset = element.offset();
                var offsetTop = offset.top;
                var totalScroll = offsetTop - navheight;
                $('body,html').animate({
                    scrollTop: totalScroll
                }, 500);
            }

            //=================================== Accordion  =================================//
            $('.accordion-container').hide();
            $('.accordion-trigger:first').addClass('active').next().show();
            $('.accordion-trigger').click(function () {
                if ($(this).next().is(':hidden')) {
                    $('.accordion-trigger').removeClass('active').next().slideUp();
                    $(this).toggleClass('active').next().slideDown();
                }
                return false;
            });
        };

        $scope.init();

    }]);