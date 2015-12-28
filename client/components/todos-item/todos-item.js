'use strict';

var {Component, View, Inject} = angular2now;

@Component({selector: 'todos-item'})
@View({templateUrl: 'client/components/todos-item/todos-item.ng.html'})
@Inject('$scope', '$reactive', 'data')
class TodosItem {
    constructor($scope, $reactive, data) {
        this._id = data._id;
        this.listId = data.listId;
        this.checked = data.checked;
        this.text = data.text;
    }
}

window.TodosItem = TodosItem;
