'use strict';

var yeoAngApp = angular.module('yeoAngApp', 
[
'ui',
'ui.bootstrap.modal',
'builderServices'
])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl'
      })
      .when('/builder', {
        templateUrl: 'views/builder.html',
        controller: 'BuilderCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);
