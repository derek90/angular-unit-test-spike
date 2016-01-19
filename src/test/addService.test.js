/*
 * Unit tests for addService.js
 */

describe('addService', function(){
  var addService;

  beforeEach(module('app'));

  beforeEach(inject(function(_addService_){
    addService = _addService_;
  }));

  it('adds the two numbers written in the inputs', function() {
    var result = addService.add(2, 3);
    expect(result).toEqual(5);
  });

});