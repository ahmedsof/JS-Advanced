function solve(arr, delimeter) {
    let arr2 = arr.join(`${delimeter}`)
    return arr2
}
//console.log(solve(["One", "Two", "Three", "Four", "Five"], "-"));
console.log(solve(["How about no?", "I", "will", "not", "do", "it!"], "_"));
