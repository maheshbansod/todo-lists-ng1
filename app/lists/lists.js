'use strict';

angular.module('myApp.lists', [])
  .component('todoLists', {
    templateUrl: 'lists/lists.html',
    controller: 'ListsCtrl'
  }).controller('ListsCtrl', ['$rootScope', function($rootScope) {
    console.log({$rootScope});
    console.log($rootScope.lists);

  }]);