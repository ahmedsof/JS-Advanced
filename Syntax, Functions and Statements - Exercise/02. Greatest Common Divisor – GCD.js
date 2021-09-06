function solve(n1, n2) {
    while(n2) {
        let t = n2;
        n2 = n1 % n2;
        n1 = t;
    }
    return n1;
}
console.log(solve(15, 5));
console.log(solve(2154, 458));