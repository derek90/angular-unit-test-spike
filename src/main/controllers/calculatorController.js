app.controller('calculatorController', ['$scope', '$http', 'addService', function($scope, $http, addService) {
	$scope.result = '';
	$scope.num1 = '';
	$scope.num2 = '';

	$scope.add = function(){
		$scope.result = addService.add($scope.num1, $scope.num2);
	}

}]);