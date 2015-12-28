'use strict';

var {SetModule} = angular2now;

SetModule('todos', ['angular-meteor']);

angular.module('todos').run(function ($injector) {
    window.ngInjector = $injector;
});

angular.bootstrap(document, ['todos']);
