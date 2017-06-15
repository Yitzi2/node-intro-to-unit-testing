const should = require('chai').should();

const fizzBuzzer = require('../fizzBuzzer');

describe ('fizzBuzzer', function () {
	it('should return the number if coprime to 15', function () {
		const inputs=[2,4,37,12346,-11,-23,1.5];
		inputs.forEach (function (input) {
			fizzBuzzer(input).should.equal(input);
		});
	});
	it('should return "fizz" if divisible by 3 but not 5', function () {
		const inputs=[6,12,27,-321,-459087];
		inputs.forEach (function (input) {
			fizzBuzzer(input).should.equal("fizz");
		});
	});
	it('should return "buzz" if divisible by 5 but not 3', function () {
		const inputs=[50,205,-110,11233525];
		inputs.forEach (function (input) {
			fizzBuzzer(input).should.equal("buzz");
		});
	});
	it('should return "fizz-buzz" if divisible by 15', function () {
		const inputs=[60,225,-120,11233515];
		inputs.forEach (function (input) {
			fizzBuzzer(input).should.equal("fizz-buzz");
		});
	});
	it('should throw an error if not a number', function () {
		const inputs=[NaN, undefined, null, true, false, "123", [1], {a: 1}];
		inputs.forEach (function (input) {
			(() =>fizzBuzzer(input)).should.throw;
		});
	});	
});