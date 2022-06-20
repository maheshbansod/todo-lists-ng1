'use strict';

// Declare app level module which depends on views, and core components
angular.module('myApp', [
  'ngRoute',
  'myApp.lists',
  'myApp.new-list',
  'myApp.version'
]).
config(['$locationProvider', function($locationProvider) {
  $locationProvider.hashPrefix('!');
}]);
