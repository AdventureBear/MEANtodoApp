/**
 * Created by suzanne on 3/15/15.
 */
todoApp.factory('todosFactory', function($http) {
    var urlBase = '/api/todos';
    var _todoService = {};

    _todoService.getTodos = function() {
        return $http.get(urlBase);
    };

    _todoService.saveTodo = function() {
        return $http.post(urlBase, todo);
    };

    _todoService.updateTodo = function() {
        return $http.put(urlBase,todo);
    };

    _todoService.deleteTodo = function() {
        return $http.delete(urlBase + '/' + id);
    };

    return _todoService;
});