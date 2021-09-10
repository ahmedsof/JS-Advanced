function solve(arr) {
    let result = [];
    let current = 1

    for (let i = 0; i < arr.length; i++) {
        
        if (arr[i] === "add") {
            result.push(current)
        } else if (arr[i] === 'remove'){
            result.pop();
        }
            
        current++;
    }

    // if (result.length == 0) {
    //     return 'Empty'
    // } else {
    //     return result.join('\n')
    // }
return result.length != 0 ? result.join('\n') : "Empty"
}
console.log(solve(["add", "add", "add", "add"]));
console.log(solve(["add", "add", "remove", "add", "add"]));
console.log(solve(["remove", "remove", "remove"]));
