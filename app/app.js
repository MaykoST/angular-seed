'use strict';

// Declare app level module which depends on views, and core components
angular.module('myApp', [
  'ngRoute',
  'myApp.todolist',
  'myApp.todo',
  'myApp.version'
]).
  config(['$locationProvider', '$routeProvider',
    function ($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');
      //$locationProvider.html5Mode(true)

      $routeProvider
        .when('/todolist', {
          templateUrl: '/todolist/todolist.html',
          controller: 'TodoListCtrl'
        })
        .when('/view1', {
          templateUrl: '/view1/view1.html',
          controller: 'View1Ctrl'
        })        
        .otherwise({ redirectTo: '/todolist' });
    }]);
