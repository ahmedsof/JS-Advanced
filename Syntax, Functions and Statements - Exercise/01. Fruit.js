function solve(fruit, weight, price) {
  let weightKg = weight / 1000;

    let total = weightKg * price;
    
    return `I need $${total.toFixed(2)} to buy ${weightKg.toFixed(2)} kilograms ${fruit}.`
}
console.log(solve("orange", 2500, 1.8));
console.log(solve("apple", 1563, 2.35));
