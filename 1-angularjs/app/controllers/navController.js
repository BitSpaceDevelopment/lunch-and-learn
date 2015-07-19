app.controller('navController', [
    '$scope',
    function ($scope) {

        $scope.init = function () {

            //=================================== Flikr Feed  ========================================//
            jQuery('#flickr').jflickrfeed({
                limit: 8, //Number of images to be displayed
                qstrings: {
                    id: '36587311@N08'//Change this to any Flickr Set ID as you prefer.
                },
                itemTemplate: '<li><a href="{{image_b}}" class="fancybox"><img src="{{image_s}}" alt="{{title}}" /></a></li>'
            });

            jQuery('#flickr-aside').jflickrfeed({
                limit: 10, //Number of images to be displayed
                qstrings: {
                    id: '36587311@N08'//Change this to any Flickr Set ID as you prefer.
                },
                itemTemplate: '<li><a href="{{image_b}}" class="fancybox"><img src="{{image_s}}" alt="{{title}}" /></a></li>'
            });

            //=================================== Subtmit Form  ====================================//
            jQuery('.form-contact').submit(function (event) {
                event.preventDefault();
                var url = jQuery(this).attr('action');
                var datos = jQuery(this).serialize();
                $.get(url, datos, function (resultado) {
                    jQuery('.result').html(resultado);
                });
            });

            //=================================== Subtmit Form Newslleter ===========================//
            jQuery('#newsletterForm').submit(function (event) {
                event.preventDefault();
                var url = jQuery(this).attr('action');
                var datos = jQuery(this).serialize();
                $.get(url, datos, function (resultado) {
                    jQuery('#result-newsletter').html(resultado);
                });
            });

            jQuery("#insta").instastream({
                instaToken: 'fb2e77d.47a0479900504cb3ab4a1f626d174d2d',
                instaUser: '501494ebdb5a42f1a6ad30e89db90a8d',
                instaResults: 1,
                instaMenu: 'yes'
            });
        };

        $scope.init();

    }]);