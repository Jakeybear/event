'use strict';

angular.module('event.createEvent', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/createEvent', {
    templateUrl: 'createEvent/view.html',
    controller: 'CreateEventCtrl'
  });
}])

.controller('CreateEventCtrl', ['$scope',  function($scope) {
  $scope.userdata={};
  $scope.submitForm = function(){
    console.log($scope.userdata);
    if($scope.signUpForm.$invalid){
      alert('check the input information');
    }else{
      alert('success');
    }
  };

}])

.directive('compare',function(){
  var o ={};
  o.restrict = 'AE';
  o.scope={
      orgText:'=compare'
  }
  o.require = 'ngModel';
  o.link = function(scope, ele, att, ctr){
    console.log(ctr);
    ctr.$validators.compare = function(value){
      return value ==scope.orgText;
    }
    scope.$watch('orgText', function(){
      ctr.$validate();
    })
  }

  return o;
});