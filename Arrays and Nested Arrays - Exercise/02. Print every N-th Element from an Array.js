function solve(arr, n) {
    let arr2 = [];

    for (let i = 0; i <= arr.length -1 ; i+=n) {
        
        arr2.push(arr[i]);
    }
    return arr2
}
console.log(solve(['5', '20', '31', '4', '20'], 2));
