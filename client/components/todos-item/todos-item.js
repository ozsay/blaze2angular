'use strict';

var {Component, View, Inject} = angular2now;

@Component({selector: 'todos-item'})
@View({templateUrl: 'client/components/todos-item/todos-item.ng.html'})
@Inject('$scope', '$reactive', 'data')
class TodosItem {
    constructor($scope, $reactive, data) {}
}

window.TodosItem = TodosItem;
