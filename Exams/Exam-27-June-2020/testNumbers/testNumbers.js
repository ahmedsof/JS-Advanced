let describe = require('mocha').describe;
let assert = require('chai').assert;

const testNumbers = {
    sumNumbers: function (num1, num2) {
        let sum = 0;

        if (typeof(num1) !== 'number' || typeof(num2) !== 'number') {
            return undefined;
        } else {
            sum = (num1 + num2).toFixed(2);
            return sum
        }
    },
    numberChecker: function (input) {
        input = Number(input);

        if (isNaN(input)) {
            throw new Error('The input is not a number!');
        }

        if (input % 2 === 0) {
            return 'The number is even!';
        } else {
            return 'The number is odd!';
        }

    },
    averageSumArray: function (arr) {

        let arraySum = 0;

        for (let i = 0; i < arr.length; i++) {
            arraySum += arr[i]
        }

        return arraySum / arr.length
    }
};

describe('Test Numbers', () => {
    it('should', () => {
        assert.equal(testNumbers.sumNumbers(2, 2), 4)
        assert.equal(testNumbers.sumNumbers('2', 2), undefined);
        assert.equal(testNumbers.sumNumbers(2, '2'), undefined);
        assert.equal(testNumbers.sumNumbers('2', '2'), undefined);
        assert.equal(testNumbers.sumNumbers(1.222, 1.222), 2.44)
        
    });
    it('should', () => {
        //assert.equal(testNumbers.numberChecker('aa'), 'The input is not a number!')
        assert.equal(testNumbers.numberChecker(1), 'The number is odd!')
        assert.equal(testNumbers.numberChecker(2), 'The number is even!')
        assert.equal(testNumbers.numberChecker('1'), 'The number is odd!')
        assert.equal(testNumbers.numberChecker('2'), 'The number is even!')
        assert.Throw(() => { testNumbers.numberChecker('a') })
    });
    it('should', () => {
        assert.equal(testNumbers.averageSumArray([1, 2, 3]), 2)
    })
 })

