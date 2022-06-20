'use strict';

angular.module('myApp.lists', ['ngRoute'])
  .component('todoLists', {
    templateUrl: 'lists/lists.html',
    controller: 'ListsCtrl'
  }).controller('ListsCtrl', [function() {

  }]);