'use strict';

angular.module('event.home', [
  'ngRoute',
  'event.service.eventData',
  'event.service.filters'
])

.config(['$routeProvider', function($routeProvider){
  $routeProvider.when('/home',{
    templateUrl:'home/view.html',
    controller:'homeCtrl'

  });
}])

.controller('homeCtrl', ['$scope','eventData', function($scope,eventData){

  $scope.sortorder='name';
  eventData.getEvent(function(data){
    $scope.event=data;
  });

  $scope.upVoteSession = function(session){
    session.upVoteCount++;
  };
  $scope.downVoteSession = function(session){
    session.upVoteCount--;
  };
}]);