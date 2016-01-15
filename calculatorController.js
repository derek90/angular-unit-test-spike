var app = angular.module('calculator', []);

app.controller('calculatorController', ['$scope', '$http' , function($scope, $http) {
	$scope.result = '';
	$scope.num1 = '';
	$scope.num2 = '';

	$scope.add = function(){
		$scope.result = $scope.num1 + $scope.num2;
	};

}]);