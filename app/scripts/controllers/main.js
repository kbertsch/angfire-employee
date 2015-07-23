'use strict';

/**
 * @ngdoc function
 * @name angularFirebaseApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularFirebaseApp
 */
angular.module('angularFirebaseApp')
  .controller('employeeCtrl', function ($scope) {
    $scope.employeeName = "";
    $scope.employeeAge = "";
    $scope.employees = {};

    $scope.myData = new Firebase ("https://crfirebase.firebaseio.com/Employees")

    $scope.saveEmployee = function(){

    	$scope.myData.push({employeeName:$scope.employeeName, employeeAge:$scope.employeeAge});
    
    	$scope.employeeName = "";
    	$scope.employeeAge = "";
    };

    $scope.myData.on('value', function(snapshot){
    	$scope.employees = snapshot.val();
    	$scope.$apply();
    });
  });
