'use strict';

angular.module('myApp.todo', ['ngRoute'])
.config(['$routeProvider', function($routeProvider) {
    $routeProvider
    .when('/todo/new', {
        operation: 'add',
        templateUrl: '/todo/todo.html',
        controller: 'TodoCtrl'
      })
      .when('/todo/:todoId', {
        operation: 'edit',
        templateUrl: '/todo/todo.html',
        controller: 'TodoCtrl'
      })
  }])
.controller('TodoCtrl', function($scope, $routeParams, $route, $http) { 
    $scope.operacao = $route.current.operation    
    
    $http.get("http://127.0.0.1:8080/api/v1/todolists/" + $routeParams.todoId)
      .then(function(response) {
        $scope.todo = response.data
      })       
});  