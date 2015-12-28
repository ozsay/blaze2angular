'use strict';

var {Component, View, Inject} = angular2now;

@Component({selector: 'todos-item'})
@View({templateUrl: 'client/components/todos-item/todos-item.ng.html'})
@Inject('$scope', '$reactive', 'data')
class TodosItem {
    constructor($scope, $reactive, data) {
        this._id = data._id;
        this.listId = data.listId;

        $reactive(this).attach($scope);

        this.helpers({
            checked: () => Todos.findOne(data._id).checked,
            text: () => Todos.findOne(data._id).text
        });
    }
}

window.TodosItem = TodosItem;
