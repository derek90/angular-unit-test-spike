/*
 * Unit tests for calculatorController.js
 */

describe('calculatorController', function(){
  beforeEach(module('myApp'));

  var $controller;

  beforeEach(inject(function(_$controller_){
    // The injector unwraps the underscores (_) from around the parameter names when matching
    $controller = _$controller_;
  }));

  describe('$scope.add', function(){
    it('adds the 2 numbers written in the inputs', function() {
      var $scope = {};
      var controller = $controller('calculatorController', { $scope: $scope });
      $scope.num1 = 2;
      $scope.num2 = 3;
      $scope.add();
      expect($scope.result).toEqual(5);
    });
  });

});