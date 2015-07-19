var app = angular.module('app', ['ngRoute']);


app.factory('FeedService', ['$http', function ($http) {
    return {
        parseFeed: function (url) {
            return $http.jsonp('//ajax.googleapis.com/ajax/services/feed/load?v=1.0&amp;num=50&amp;callback=JSON_CALLBACK&amp;q=' + encodeURIComponent(url));
        }
    }
}]);