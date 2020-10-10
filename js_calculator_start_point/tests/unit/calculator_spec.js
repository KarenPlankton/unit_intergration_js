var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
    beforeEach(function () {
	calculator = new Calculator()
    });

    // write unit tests here in the form of "it should do something..."
    it('it has a sample test', function(){
	assert.equal(true, true)
    })

    it('testing calculator.add', function(){
	calculator.numberClick(1)
	calculator.operatorClick('+')
	calculator.numberClick(4)
	calculator.operatorClick('=')
	assert.equal(5, calculator.runningTotal)
    })

    it('testing calculator.subtract', function(){
	calculator.numberClick(7)
	calculator.operatorClick('-')
	calculator.numberClick(4)
	calculator.operatorClick('=')
	assert.equal(3, calculator.runningTotal)
    })
    
    it('testing calculator.multiply', function(){
	calculator.numberClick(3)
	calculator.operatorClick('*')
	calculator.numberClick(5)
	calculator.operatorClick('=')
	assert.equal(15, calculator.runningTotal)
    })
    
    it('testing calculator.divide', function(){
	calculator.numberClick(21)
	calculator.operatorClick('/')
	calculator.numberClick(7)
	calculator.operatorClick('=')
	assert.equal(3, calculator.runningTotal)
    })
    it('testing calculator.numberClick concatenation', function(){
	calculator.numberClick(21)
	calculator.numberClick(7)
	assert.equal(217, calculator.runningTotal)
    })
    it('testing calculator.operatorClick', function(){
	calculator.numberClick(21)
	calculator.operatorClick('-')
	calculator.numberClick(5)
	calculator.operatorClick('+')
	calculator.numberClick(1)
	calculator.operatorClick('=')
	assert.equal(17, calculator.runningTotal)
    })
    it('testing calculator.clearClick', function(){
	calculator.numberClick(21)
	calculator.operatorClick('-')
	calculator.numberClick(5)
	calculator.clearClick()
	calculator.numberClick(1)
	calculator.operatorClick('=')
	assert.equal(20, calculator.runningTotal)
    })

    
});
