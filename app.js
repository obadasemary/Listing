/**
 * Created by obada on 4/18/15.
 */
var todoApp = angular.module("todoApp", []);

var model = {
    user: "Obada",
    items: [
        { action: "Buy Flowers", done: false },
        { action: "Get Shoes", done: false },
        { action: "Collect Tickets", done: true },
        { action: "Call Joe", done: false }
    ]
};

todoApp.controller("ToDoCtrl", function ($scope) {
    $scope.todo = model;
});