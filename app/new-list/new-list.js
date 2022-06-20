'use strict';

angular.module('myApp.new-list', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/new-list', {
    templateUrl: 'new-list/new-list.html',
    controller: 'NewListCtrl'
  });
}])

.controller('NewListCtrl', [function() {

}]);