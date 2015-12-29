'use strict';

var {Component, View, Inject} = angular2now;

@Component({selector: 'lists-show'})
@View({templateUrl: 'client/components/lists-show/lists-show.ng.html'})
@Inject('$scope', '$reactive', 'data')
class ListsShow {
    constructor($scope, $reactive, data) {
        $reactive(this).attach($scope);

        $scope.$on('$destroy', () => {
            this.stop();
        });
    }
}

window.ListsShow = ListsShow;
