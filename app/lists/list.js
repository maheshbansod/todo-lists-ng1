'use strict';

angular.module('myApp.list', [])
  .component('todoList', {
    templateUrl: 'lists/list.html',
    controller: 'ListCtrl',
    bindings: { list: '<' },
  }).controller('ListCtrl', ['$scope', 'ListsService', function($scope, ListsService) {
    this.editingTask = null; // holds the task that is currently being edited
    this.currentFilter = 'all';
    this.filter = (task, index, array) => {
      if(this.currentFilter === 'all') {
        return true;
      }
      let eq = this.currentFilter === 'done';
      if(task.is_done === eq)
        return true;
      return false;
    };
    this.setItemFilter = (f) => this.currentFilter = f;
    this.addNewTask = () => {
      ListsService.addNewTask(this.list).then(newItem => {
        this.editingTask = newItem;
        $scope.$apply();
      });
    };
    this.setEdit = (list_item) => {
      this.editingTask = list_item;
    };
    this.saveTask = (list_item) => {
      ListsService.saveTask(list_item).then(res => {
        if(res.success) {
          this.editingTask = null;
          $scope.$apply();
        }
      })
    };
    // hack needed to make sure it executes after the model is updated
    this.saveTaskAsync = (list_item) => {
      setTimeout(() => this.saveTask(list_item));
    };
    this.deleteTask = (list_item) => {
      ListsService.deleteTask(list_item, this.list).then(_ => {
        this.editingTask = null;
        $scope.$apply();
      })
    };
  }]);