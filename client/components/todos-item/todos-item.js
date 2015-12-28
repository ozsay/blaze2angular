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

    check() {
        Todos.update(this._id, {$set: {checked: this.checked}});
        Lists.update(this.listId, {$inc: {incompleteCount: this.checked ? -1 : 1}});
    }
}

window.TodosItem = TodosItem;
