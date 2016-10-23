var app = angular.module('pigsApp', []);

app.controller('banksController', function($scope) {
    $scope.firstName = "Sara";
    $scope.dreamText = 'I want to go on a safari in Africa';
    $scope.goalText = "I want to give money to the animal shelter to help puppies and kitties!";
    $scope.wantText = "I want a new iPhone";

    $scope.dreamStartBalance = 1.00;
    $scope.goalStartBalance = 5.00;
    $scope.wantStartBalance = 0;

    $scope.dreamAdd = 2.00;
    $scope.goalAdd = 1.50;
    $scope.wantAdd = 1;

    $scope.dreamBalance = 8.25;
    $scope.goalBalance = 10.75;
    $scope.wantBalance = 4.00;
});
