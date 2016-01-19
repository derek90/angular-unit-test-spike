/*
 * Unit tests for calculatorController.js
 */

describe('calculatorController', function(){
  beforeEach(module('app'));

  var $controller;
  var addService;

  beforeEach(inject(function(_$controller_, _addService_){
    // The injector unwraps the underscores (_) from around the parameter names when matching
    $controller = _$controller_;
    addService = _addService_;
  }));

  describe('$scope.add', function(){
    it('checks if add method from addService is called', function() {
      var scopeStub = {};
      var controller = $controller('calculatorController', { $scope: scopeStub, 'addService': addService });
      scopeStub.num1 = 2;
      scopeStub.num2 = 3;
      spyOn(addService, 'add');
      scopeStub.add();
      expect(addService.add).toHaveBeenCalledWith(scopeStub.num1, scopeStub.num2);
    });
  });

});