function solve(arr, str) {

    let mapObject = {
        'asc': (a, b) => a - b,
        'desc': (a, b) => b - a,
    };
    return arr.sort(mapObject[str]);

}
console.log(solve([14, 7, 17, 6, 8], 'asc'));
console.log(solve([14, 7, 17, 6, 8], 'desc'));