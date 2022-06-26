
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
    let listState = {
      name: 'lists.list',
      url: '/{listId}',
      component: 'todoList',
      resolve: {
        list: function(ListsService, $stateParams) {
          return ListsService.getList($stateParams.listId);
        }
      }
    };
    $stateProvider.state(listsState);
    $stateProvider.state(listState);
    $stateProvider.state(newListState);
    $stateProvider.state('default', {...listsState, url:''});
  }]);