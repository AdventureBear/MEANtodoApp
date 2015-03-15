/**
 * Created by suzanne on 3/15/15.
 */
todoApp.controller('TodoCtrl', function($rootScope, $scope, todosFactory) {

    $scope.todos = [];
    $scope.isEditable = [];

    //get all Todos on load
 todosFactory.getTodos().then(function(data) {
    $scope.todos = data.data;
});

    // Save a Todo to the server
    $scope.save = function($event) {
        if ($event.which == 13 && $scope.todoInput) {

            todosFactory.saveTodo({
                "todo": $scope.todoInput,
                "isCompleted": false
            }).then(function(data) {
                $scope.todos.push(data.data);
            });
            $scope.todoInput = '';
        }
    };

    // Update the edited Todo
    $scope.edit = function($event, i) {
        if ($event.which == 13 && $event.target.value.trim()) {
            var _t = $scope.todos[i];
            todosFactory.updateTodo({
                _id: _t._id,
                todo: $event.target.value.trim(),
                isCompleted: _t.isCompleted
            }).then(function(data) {
                if (data.data.updatedExisting) {
                    _t.todo = $event.target.value.trim();
                    $scope.isEditable[i] = false;
                } else {
                    alert('Oops something went wrong!');
                }
            });
        }
    };

    // Delete a Todo
    $scope.delete = function(i) {
        todosFactory.deleteTodo($scope.todos[i]._id).then(function(data) {
            if (data.data) {
                $scope.todos.splice(i, 1);
            }
        });
    };

});
