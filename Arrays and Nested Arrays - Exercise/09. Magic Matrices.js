function solve(arr) {
    let rowSum =arr.map((el) => el.reduce((a, b) => a + b), 0);
let colSum = 
}
console.log(
  solve([
    [4, 5, 6],
    [6, 5, 4],
    [5, 5, 5],
  ])
);

console.log(
  solve([
    [11, 32, 45],
    [21, 0, 1],
    [21, 1, 1],
  ])
);
console.log(
  solve([
    [4, 5, 6],
    [6, 5, 4],
    [5, 5, 5],
  ])
);
console.log(
  solve([
    [4, 5, 6],
    [6, 5, 4],
    [5, 5, 5],
  ])
);
