let describe = require('mocha').describe;
let assert = require('chai').assert;

let mathEnforcer = {
    addFive: function (num) {
        if (typeof(num) !== 'number') {
            return undefined;
        }
        return num + 5;
    },
    subtractTen: function (num) {
        if (typeof(num) !== 'number') {
            return undefined;
        }
        return num - 10;
    },
    sum: function (num1, num2) {
        if (typeof(num1) !== 'number' || typeof(num2) !== 'number') {
            return undefined;
        }
        return num1 + num2;
    }
};

describe('chek mathEnforcer', () => {
    describe('chek method addFive', () => {
        it('addFive', () => {
            assert.isUndefined(mathEnforcer.addFive('a'));
            assert.equal(mathEnforcer.addFive(5), 10);
            assert.equal(mathEnforcer.addFive(-5), 0);
            assert.equal(mathEnforcer.addFive(5.5), 10.5);
            
        })
    })
    describe('chek method subtractTen', () => {
        it('subtractTen', () => {
            assert.isUndefined(mathEnforcer.subtractTen('a'));
            assert.equal(mathEnforcer.subtractTen(-5), -15);
            assert.equal(mathEnforcer.subtractTen(5), -5);
            assert.equal(mathEnforcer.subtractTen(10.5), 0.5);
        })
    })
    describe('chek method sum', () => {
        it('sum', () => {
            assert.isUndefined(mathEnforcer.sum('a', 5));
            assert.isUndefined(mathEnforcer.sum(5, 'a'));
            assert.isUndefined(mathEnforcer.sum('a', 'a'));
            assert.equal(mathEnforcer.sum(5, 5), 10);
            assert.equal(mathEnforcer.sum(0, 5), 5);
            assert.equal(mathEnforcer.sum(-5, -5), -10);
            assert.equal(mathEnforcer.sum(5.5, 5.5), 11);
        })
    })
})
