
angular.module('myApp')
.config(['$stateProvider', function($stateProvider) {
    let listsState = {
      name: 'lists',
      url: '/lists',
      component: 'todoLists',
      resolve: {
        lists: function (ListsService) {
            return ListsService.getLists();
        }
      }
    };
    let newListState = {
      name: 'newList',
      url: '/new-list',
      component: 'newList'
    };
    $stateProvider.state(listsState);
    $stateProvider.state(newListState);
  }]);