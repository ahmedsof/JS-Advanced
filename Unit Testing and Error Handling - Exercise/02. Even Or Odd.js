const describe = require('mocha').describe;
const assert = require('chai').assert;


function isOddOrEven(string) {
    if (typeof(string) !== 'string') {
        return undefined;
    }
    if (string.length % 2 === 0) {
        return "even";
    }

    return "odd";
}

describe('chek isOddOrEven', () => {
    it('type is String', () => {
        assert.isUndefined(isOddOrEven(1), 'Undefined');
    })
    it('length is even', () => {
        assert.equal(isOddOrEven('aa'), 'even', 'length is even');
    })
    it('length is odd', () => {
        assert.equal(isOddOrEven('aaa'), 'odd', 'length is odd');
    })
})
