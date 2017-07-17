var app = angular.module('CovalenceStore', ['ngRoute', 'ngResource']);

app.config(['$routeProvider', '$locationProvider', 
    function($routeProvider, $locationProvider) {
        $locationProvider.html5Mode(true);
        $routeProvider
        .when('/products', {
            templateUrl: 'views/productList.html',
            controller: 'productController'
        })
        .when('/contact', {
            templateUrl: 'views/contact.html',
            controller: 'contactController'
        })
        .when('/cart', {
            templateUrl: 'views/purchase.html',
            controller: 'purchaseController'
        })
        .when('/', {
            templateUrl: 'views/welcome.html',
            controller: 'welcomeController'
        })
    }])