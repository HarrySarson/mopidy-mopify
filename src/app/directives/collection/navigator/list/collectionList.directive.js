'use strict';

angular.module('mopify.widgets.collection.navigator.list', [
])

.directive('collectionList', function collectionList() {

    return {
        restrict: 'E',
        scope: {
            list: "="
        },
        replace: true,
        templateUrl: 'directives/collection/navigator/list/collectionList.directive.tmpl.html',
        link: function(scope, element, attrs) {

        }
    };

});