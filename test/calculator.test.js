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
      var scopeStub = {};
      var controller = $controller('calculatorController', { $scope: scopeStub });
      scopeStub.num1 = 2;
      scopeStub.num2 = 3;
      scopeStub.add();
      expect(scopeStub.result).toEqual(5);
    });
  });

});