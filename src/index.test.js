var expect = require('chai').expect;
var opensource = require('./index');

describe('opensourcelib testing', function(){
	it("should work",function(){
		expect(true).to.be.true;
	});
});

describe('opensourcelib testing 1', function(){
	describe("All function", function(){
		it("should be array of strings", function(){
			expect(opensource.all).to.satisfy(isArrayOfStrings);

			function isArrayOfStrings(array){
				return array.every(function(item){
					return typeof item === "string";
				});
			}
		});
		it("should conatain string", function(){
			expect(opensource.all).to.include("Kolkata");
		});
	});
});