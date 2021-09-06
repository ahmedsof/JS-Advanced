function solve(str1, str2,str3) {
    let n1 = Number(str1);
    let n2 = Number(str2);
    let n3 = Number(str3);

    let result;
    if (n1 > n2 && n1 > n3) {
        result = n1;
    }
    else if (n2 > n1 && n2 >n3) {
        result = n2;
    }
   else if (n3 > n1 && n3 > n2) {
        result = n3;
    }
    
    console.log(`The largest number is ${result}.`);
}
solve(5, -3, 16)
solve(-3, -5, -22.5)