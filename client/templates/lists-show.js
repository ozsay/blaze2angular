// Track if this is the first time the list template is rendered
var firstRender = true;
var listRenderHold = LaunchScreen.hold();
listFadeInHold = null;

Template.listsShow.onRendered(function() {
  if (firstRender) {
    // Released in app-body.js
    listFadeInHold = LaunchScreen.hold();

    // Handle for launch screen defined in app-body.js
    listRenderHold.release();

    firstRender = false;
  }
  var $rootScope = window.ngInjector.get('$rootScope');
  var $templateCache = window.ngInjector.get('$templateCache');
  var $compile = window.ngInjector.get('$compile');

  this.scope = $rootScope.$new(true);

  var controller = window.ngInjector.instantiate(window.ListsShow, {data: this.data, $scope: this.scope});

  var template = $templateCache.get(window.ListsShow.templateUrl);

  this.scope.listsShow = controller;

  this.elem = $compile(template)(this.scope);

  this.scope.$digest();

  this.$('removable').replaceWith(this.elem);
});

Template.listsShow.onDestroyed(function() {
  this.scope.$destroy();
  this.elem.remove();
});
