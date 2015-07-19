app.controller('headerController', [
    '$scope',
    function ($scope) {

        $scope.init = function () {

            //=================================== Sticky nav ===================================//
            jQuery("header").sticky({topSpacing: 0});

            //=================================== Nav Responsive ==============================//
            jQuery('#menu').tinyNav({
                active: 'selected'
            });

            //=================================== Nav Superfish ===============================//
            jQuery('ul.sf-menu').superfish();

            //=================================== Nav Scroll One Page===========================//
            jQuery('nav ul li a').click(function () {
                var el = jQuery(this).attr('href');
                var elWrapped = jQuery(el);
                scrollToDiv(elWrapped, 40);
                return false;
            });

            function scrollToDiv(element, navheight) {
                var offset = element.offset();
                var offsetTop = offset.top;
                var totalScroll = offsetTop - navheight;
                jQuery('body,html').animate({
                    scrollTop: totalScroll
                }, 500);
            }


        };

        $scope.init();

    }]);