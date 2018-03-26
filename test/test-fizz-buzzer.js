const expect = require('chai').expect; 

const fizzbuzzer = require('../fizzBuzzer'); 

describe('fizzbuzzer', function () {

	it('should return fizz, buzz, fizz-buzz or number', function () {

		const normalCases = [
      	{number: 30, expected: "fizz-buzz"},
      	{number: 10, expected: "buzz"},
      	{number: 6, expected: "fizz"},
      	{number: 2, expected: 2},
    	];


		normalCases.forEach(function(input) {
     	 	const answer = fizzbuzzer(input.number);
      		expect(answer).to.equal(input.expected);
    	});

	});

	
	it('should return err if args are not numbers', function () { 

	const badInputs = ["hello", .2, false];

    badInputs.forEach(function(input) {
      expect(function() {
      fizzbuzzer(input[0]);
      }).to.throw(Error);
    });

	});



});