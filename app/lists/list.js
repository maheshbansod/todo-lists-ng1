'use strict';

angular.module('myApp.list', [])
  .component('todoList', {
    templateUrl: 'lists/list.html',
    controller: 'ListCtrl',
    bindings: { list: '<' },
  }).controller('ListCtrl', [function() {
    
  }]);