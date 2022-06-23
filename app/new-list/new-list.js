'use strict';

angular.module('myApp.new-list', [])
  .component('newList', {
    templateUrl: 'new-list/new-list.html',
    controller: 'NewListCtrl'
  }).controller('NewListCtrl', ['ListsService', function(ListsService) {
    let ctrl = this;
    ctrl.list = {
      title: "",
    };
    ctrl.addList = () => {
      let list = ctrl.list;
      ListsService.addList(list).then(id => {
        ctrl.newListId = id;
      })
      list.title = "";
    }
  }]);