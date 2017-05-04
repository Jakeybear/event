'use strict';

// Declare app level module which depends on views, and components
angular.module('event', [
  'ngRoute',
  'event.createEvent',
  'event.home',

]).
  config(['$routeProvider',function($routeProvider){
  $routeProvider.otherwise({redirectTo:'/home'});
}]);









