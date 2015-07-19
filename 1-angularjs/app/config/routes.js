app.config(['$routeProvider', '$locationProvider',
    function ($routeProvider, $locationProvider) {

        $routeProvider.when('/', {
            templateUrl: '/views/pages/home.tpl.html',
            controller: 'indexController'
        });

        $routeProvider.when('/about/', {
            templateUrl: '/views/pages/about.tpl.html',
            controller: 'aboutController'
        });

        $routeProvider.when('/contact/', {
            templateUrl: '/views/pages/contact.tpl.html',
            controller: 'contactController'
        });

        $routeProvider.when('/work/', {
            templateUrl: '/views/pages/work.tpl.html',
            controller: 'workController'
        });

        $routeProvider.when('/services/', {
            templateUrl: '/views/pages/services.tpl.html',
            controller: 'servicesController'
        });

        $routeProvider.when('/press/', {
            templateUrl: '/views/pages/press.tpl.html',
            controller: 'pressController'
        });

        $routeProvider.when('/404/', {
            templateUrl: '/views/pages/404.tpl.html',
            controller: 'notFoundController'
        });

        $routeProvider.otherwise({redirectTo: '/404/'});

        //$locationProvider.html5Mode(true).hashPrefix('!');

    }]);