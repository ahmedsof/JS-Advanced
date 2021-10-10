//let myArr = [1, 2, 3, 4, 5, 6];
(function solve() {
    Array.prototype.last = function () {
        return this[this.length - 1]
    }

    Array.prototype.skip = function (num) {
        let result = [];
        for (let i = num; i < this.length; i++) {
            result.push(this[i]);
            
        }
        return result;
    }
    Array.prototype.take = function (num) {
        let result = [];
        for (let i = 0; i < num; i++) {
            result.push(this[i]);
        }
        return result;
    }
 
    Array.prototype.sum = function () {
        let sum = 0;
        for (let i = 0; i < this.length; i++) {
            sum += this[i];
        }
        return sum;
    }
    Array.prototype.average = function () {
    
        let result = this.sum() / this.length;
    
        return result;
    }
})()

// (function solve() {
//     Array.prototype.last = function () { }
//     Array.prototype.skip = function () { }
//     Array.prototype.take = function () { }
//     Array.prototype.sum = function () { }
//     Array.prototype.average = function () { }
// })();