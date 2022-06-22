'use strict';

angular.module('myApp.lists', [])
  .component('todoLists', {
    templateUrl: 'lists/lists.html',
    controller: 'ListsCtrl',
    bindings: { lists: '<' },
  }).controller('ListsCtrl', [function() {
    
  }]);