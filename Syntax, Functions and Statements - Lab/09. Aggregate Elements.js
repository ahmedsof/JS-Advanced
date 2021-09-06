function solve(arr) {
    let result = 0;

    for (let i = 0; i < arr.length; i++) {
        result += arr[i];
        
    }

    let invers = 0;
    for (let i = 0; i < arr.length; i++) {
        invers += 1/arr[i];
        
    }


    console.log(result);
    console.log(invers);
    console.log(arr.join(''));
}

solve([2, 4, 8, 16])