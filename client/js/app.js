/**
 * Created by suzanne on 3/15/15.
 */
todoApp = angular.module('todoApp', ['ngRoute'])
    .config(function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: '/partials/todo.html',
                controller: 'TodoCtrl'
            }).otherwise ({
                redirectTo: '/'
        });
    });

