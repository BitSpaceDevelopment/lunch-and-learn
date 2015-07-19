app.controller('aboutController', [
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

            //=================================== Accordion  =================================//
            $('.accordion-container').hide();
            $('.accordion-trigger:first').addClass('active').next().show();
            $('.accordion-trigger').click(function(){
                if( $(this).next().is(':hidden') ) {
                    $('.accordion-trigger').removeClass('active').next().slideUp();
                    $(this).toggleClass('active').next().slideDown();
                }
                return false;
            });

            //=================================== jBar  =============================================//
            $('.jBar').hide();
            $('.jRibbon').show().removeClass('up', 500);
            $('.jTrigger').click(function(){
                $('.jRibbon').toggleClass('up', 500);
                $('.jBar').slideToggle();
            });

            //=================================== Simple slide  ====================================//
            $('.carousel').carousel();

            //=================================== Carousel Services  ===============================//
            $("#services-carousel").owlCarousel({
                autoPlay: 3200,
                items : 4,
                navigation: true,
                itemsDesktop : [1600,3],
                itemsDesktopSmall : [1024,2],
                itemsMobile : [800,1],
                pagination: false
            });

            //=================================== Carousel Works  ==================================//
            $("#works").owlCarousel({
                autoPlay: 3200,
                items : 5,
                navigation: true,
                itemsDesktop : [1600,4],
                itemsDesktopSmall : [1024,3],
                itemsMobile : [500,1],
                pagination: true
            });

            //=================================== Carousel works-no-margin  ==================================//
            $("#works-no-margin").owlCarousel({
                autoPlay: 3200,
                items : 4,
                navigation: false,
                itemsDesktop : [1600,4],
                itemsDesktopSmall : [1024,3],
                itemsMobile : [500,1],
                pagination: false
            });

            //=================================== Carousels Footer  =================================//
            $(".tweet_list").owlCarousel({
                autoPlay: 4000,
                items : 1,
                navigation: false,
                pagination: true,
                singleItem: true
            });

            //=================================== Slide Services  ==================================//
            $("#slide-services").owlCarousel({
                autoPlay: false,
                items : 1,
                navigation : true,
                autoHeight : true,
                slideSpeed : 400,
                singleItem: true,
                pagination : true
            });

            //=================================== Carousel Sponsors  ================================//
            $("#sponsors").owlCarousel({
                autoPlay: 3200,
                items : 6,
                navigation: true,
                itemsDesktopSmall : [1024,4],
                itemsTablet : [768,3],
                itemsMobile : [500,2],
                pagination: false
            });

            //=================================== Slide Services  ================================//
            $("#slide-team").owlCarousel({
                items : 1,
                autoPlay: false,
                navigation : true,
                autoHeight : true,
                slideSpeed : 400,
                singleItem: true,
                pagination : false
            });

            //=================================== Subtmit Form  ====================================//
            $('.form-contact').submit(function(event) {
                event.preventDefault();
                var url = $(this).attr('action');
                var datos = $(this).serialize();
                $.get(url, datos, function(resultado) {
                    $('.result').html(resultado);
                });
            });

            //=================================== Subtmit Form Newslleter ===========================//
            $('#newsletterForm').submit(function(event) {
                event.preventDefault();
                var url = $(this).attr('action');
                var datos = $(this).serialize();
                $.get(url, datos, function(resultado) {
                    $('#result-newsletter').html(resultado);
                });
            });

            //=================================== Ligbox  ===========================================//
            $('.fancybox').fancybox({
                'overlayOpacity'	:  0.7,
                'overlayColor'		: '#000000',
                'transitionIn'		: 'elastic',
                'transitionOut'		: 'elastic',
                'easingIn'			: 'easeOutBack',
                'easingOut'      	: 'easeInBack',
                'speedIn'         	: '700',
                'centerOnScroll'	: true,
                'titlePosition'     : 'over'
            });

            //=================================== Tooltips ========================================//
            // tooltip demo
            $('.sponsors, .social, .icons-work, .tooltip-hover').tooltip({
                selector: "[data-toggle=tooltip]",
                container: "body"
            });

            //=================================== Hover Efects =====================================//
            $('.item-service, .feature-element li, .boxes-info, .item-table').hover(function() {
                $(this).toggleClass('animated pulse');
            });

            //================================== Scroll Efects =====================================//
            $(window).scroll(function() {
                $('.animation-services .icons li, .icon-section').each(function(){
                    var imagePos = $(this).offset().top;
                    var topOfWindow = $(window).scrollTop();
                    if (imagePos < topOfWindow+500) {
                        $(this).addClass("animated bounceInUp").css('opacity' , '1');
                    }
                });

                $('.animation-services .image-big').each(function(){
                    var imagePos = $(this).offset().top;
                    var topOfWindow = $(window).scrollTop();
                    if (imagePos < topOfWindow+500) {
                        $(this).addClass("animated bounceInUp").css('opacity' , '1');
                    }
                });
            });

            //=================================== Scrollbar  ======================================//
            $(".box").mCustomScrollbar({
                scrollButtons:{
                    enable:true
                },
                theme:"dark-2"
            });

            //=================================== Totop  ==========================================//
            $().UItoTop({
                scrollSpeed:500,
                easingType:'linear'
            });

            //=================================== Portfolio Filters  ==============================//
            $(window).load(function(){
                var $container = $('.portfolioContainer');
                $container.isotope({
                    filter: '*',
                    animationOptions: {
                        duration: 750,
                        easing: 'linear',
                        queue: false
                    }
                });

                $('.portfolioFilter a').click(function(){
                    $('.portfolioFilter .current').removeClass('current');
                    $(this).addClass('current');
                    var selector = $(this).attr('data-filter');
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

        };

        $scope.init();

    }]);