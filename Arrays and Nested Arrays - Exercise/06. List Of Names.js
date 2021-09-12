function solve(arr) {
    let result = arr
        .sort((a, b) => a.localeCompare(b))
        .map((element, index) => `${index+1}.${element}`);
    
    return result.join('\n');

}
console.log(solve(["John", "Bob", "Christina", "Ema"]));