Template.todosItem.onRendered(function() {
  var $rootScope = window.ngInjector.get('$rootScope');
  var $templateCache = window.ngInjector.get('$templateCache');
  var $compile = window.ngInjector.get('$compile');

  this.scope = $rootScope.$new();

  var controller = window.ngInjector.instantiate(window.TodosItem, {data: this.data, $scope: this.scope});

  var template = $templateCache.get(window.TodosItem.templateUrl);

  this.scope.todosItem = controller;

  this.elem = $compile(template)(this.scope);

  this.scope.$digest();

  this.$('removable').replaceWith(this.elem);
});

Template.todosItem.onDestroyed(function() {
  this.scope.$destroy();
  this.elem.remove();
});
