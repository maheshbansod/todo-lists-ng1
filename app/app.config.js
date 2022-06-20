
angular.module('myApp')
    .config(['$routeProvider', function config($routeProvider) {
        $routeProvider.when('/lists', {
            template: '<todo-lists></todo-lists>',
        })
        .when('/new-list', {
            template: '<new-list></new-list>',
        })
        .otherwise('/lists')
    }])