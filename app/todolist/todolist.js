'use strict';

angular.module('myApp.todolist', ['ngRoute'])
.controller('TodoListCtrl', function($scope, $http) {
    console.log($scope)

    var todoList = this;

    $http.get("http://127.0.0.1:8080/api/v1/todolists")
      .then(function(response) {
        console.log(response)
        todoList.todos = response.data
      })       
});