function solve(num1, num2, opr) {
    let n1 = Number(num1);
    let n2 = Number(num2);
    let operator = opr;

    let result;

    switch (operator) {
        case '+': result = n1 + n2; break;
        case '-': result = n1 - n2; break;
        case '*': result = n1 * n2; break;
        case '/': result = n1 / n2; break;
        case '%': result = n1 % n2; break;
        case '**': result = n1 ** n2; break;

    }
    console.log(result);
}

solve(5, 6, '+')
solve(3, 5.5, '*')