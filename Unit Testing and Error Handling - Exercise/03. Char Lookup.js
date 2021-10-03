const describe = require('mocha').describe;
const assert = require('chai').assert;

function lookupChar(string, index) {
    if (typeof(string) !== 'string' || !Number.isInteger(index)) {
        return undefined;
    }
    if (string.length <= index || index < 0) {
        return "Incorrect index";
    }

    return string.charAt(index);
}

describe('chek lookupChar', () => {
    it('type of string', () => {
        assert.isUndefined(lookupChar(1, 1), 'undefined');
        assert.isUndefined(lookupChar('aa', 1.1), 'undefined');
        assert.isUndefined(lookupChar('aa', 'aa'), 'undefined');
    })
    it('index out of range', () => {
        assert.equal(lookupChar('abc', -1), 'Incorrect index');
        assert.equal(lookupChar('abc', 5), 'Incorrect index');
        assert.equal(lookupChar('abc', 3), 'Incorrect index');
    
    })
    it('return char at index', () => {
        assert.equal(lookupChar('abc', 0), 'a');
        assert.equal(lookupChar('abc', 2), 'c');
    })
    
})
