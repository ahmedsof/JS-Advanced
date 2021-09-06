function solve(num) {
  let isSame = true;
  let stringNum = num.toString();
  let sum = 0;

  for (let i = 0; i < stringNum.length; i++) {
    let current = Number(stringNum[i]);
    let next = stringNum[i + 1];

    if (stringNum[i] !== next && next !== undefined) {
      isSame = false;
    }

    sum += current;
  }
  return `${isSame} \n ${sum}`;
}
console.log(solve(2222222));
console.log(solve(1234));
