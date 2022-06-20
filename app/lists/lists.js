'use strict';

angular.module('myApp.lists', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/lists', {
    templateUrl: 'lists/lists.html',
    controller: 'ListsCtrl'
  });
}])

.controller('ListsCtrl', [function() {

}]);