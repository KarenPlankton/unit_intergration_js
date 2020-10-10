const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
const expect = chai.expect;

describe('calculator functionality', function() {
    beforeEach(function() {
	browser.ignoreSynchronization = true;
	browser.get('http://localhost:3000');
    });

    // write integration tests here in the form of "it should do something..."
    it('should have working number buttons', function(){
	running_total = element(by.css('#running_total'))
	element(by.css('#number2')).click();
	expect(running_total.getAttribute('value')).to.eventually.equal('2')
    })

    
    it('should have working arithmetic operators', function(){
	running_total = element(by.css('#running_total'))
	element(by.css('#number2')).click();
        element(by.css('#operator_add')).click();
	element(by.css('#number3')).click();
        element(by.css('#operator_equals')).click();
	expect(running_total.getAttribute('value')).to.eventually.equal('5')
    })
    
    it('should support chained operations', function(){
	running_total = element(by.css('#running_total'))
	element(by.css('#number2')).click();
        element(by.css('#operator_add')).click();
	element(by.css('#number3')).click();
	element(by.css('#operator_add')).click();
	element(by.css('#number5')).click();
        element(by.css('#operator_equals')).click();
	expect(running_total.getAttribute('value')).to.eventually.equal('10')
    })
    it('testing with negative result', function(){
	running_total = element(by.css('#running_total'))
	element(by.css('#number2')).click();
        element(by.css('#operator_subtract')).click();
	element(by.css('#number3')).click();
        element(by.css('#operator_equals')).click();
	expect(running_total.getAttribute('value')).to.eventually.equal('-1')
    })
    it('testing with decimal result', function(){
	running_total = element(by.css('#running_total'))
	element(by.css('#number1')).click();
        element(by.css('#operator_divide')).click();
	element(by.css('#number2')).click();
        element(by.css('#operator_equals')).click();
	expect(running_total.getAttribute('value')).to.eventually.equal('0.5')
    })
    it('testing with negative decimal result', function(){
	running_total = element(by.css('#running_total'))
	element(by.css('#number2')).click();
        element(by.css('#operator_subtract')).click();
	element(by.css('#number3')).click();
        element(by.css('#operator_divide')).click();
	element(by.css('#number2')).click();
        element(by.css('#operator_equals')).click();
	expect(running_total.getAttribute('value')).to.eventually.equal('-0.5')
    })
    it('testing with large numbers', function(){
	running_total = element(by.css('#running_total'))
	element(by.css('#number1')).click();
	element(by.css('#number0')).click();
	element(by.css('#number0')).click();
	element(by.css('#number0')).click();
	element(by.css('#number0')).click();
	element(by.css('#number0')).click();
	element(by.css('#number0')).click();
	element(by.css('#number0')).click();
	element(by.css('#number0')).click();
	element(by.css('#number0')).click();
	element(by.css('#number0')).click();
	element(by.css('#number0')).click();
        element(by.css('#operator_subtract')).click();
	element(by.css('#number1')).click();
	element(by.css('#number0')).click();
	element(by.css('#number0')).click();
	element(by.css('#number0')).click();
	element(by.css('#number0')).click();
	element(by.css('#number0')).click();
	element(by.css('#number0')).click();
	element(by.css('#number0')).click();
	element(by.css('#number0')).click();
	element(by.css('#number0')).click();
	element(by.css('#number0')).click();
	element(by.css('#number1')).click();
        element(by.css('#operator_equals')).click();
	expect(running_total.getAttribute('value')).to.eventually.equal('-1')
    })

    it('testing divide by zero', function(){
	running_total = element(by.css('#running_total'))
	element(by.css('#number2')).click();
        element(by.css('#operator_divide')).click();
	element(by.css('#number0')).click();
        element(by.css('#operator_equals')).click();
	expect(running_total.getAttribute('value')).to.eventually.equal('Error')
    })   

});
