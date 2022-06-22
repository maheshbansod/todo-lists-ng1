
angular.module('myApp')
.config(['$stateProvider', function($stateProvider) {
    let listsState = {
      name: 'lists',
      url: '/lists',
      component: 'todoLists'
    };
    let newListState = {
      name: 'newList',
      url: '/new-list',
      component: 'newList'
    };
    $stateProvider.state(listsState);
    $stateProvider.state(newListState);
  }]);