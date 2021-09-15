function solve(input) {
    let dict = {};

    while (input.length) {
        let [product, price] = input.shift().split(' : ');
        const first = product[0];

        if (!dict[first]) {
            dict[first] = [];
        }

        dict[first].push({ product, price: Number(price) });
        dict[first].sort((a, b) => (a.product).localeCompare(b.product));


    }

    let result = [];

    // for (const letter in dict) {
    //     let values = dict[letter].map(entry => `  ${entry.product}: ${entry.price}`);
    //     let text = `${letter}\n${values.join('\n')}`
    //     result.push(text);
    // }

    Object.entries(dict).sort((a, b) => a[0].localeCompare(b[0])).forEach(entry => {
        let values = entry[1]
            .sort((a, b) => a.product.localeCompare(b.product))
            .map(product => `  ${product.product}: ${product.price}`)
            .join('\n');
        
        let text = `${entry[0]}\n ${values}`;
        result.push(text);
    })


    return result.join('\n')
}

console.log(
  solve([
    "Appricot : 20.4",
    "Fridge : 1500",
    "TV : 1499",
    "Deodorant : 10",
    "Boiler : 300",
    "Apple : 1.25",
    "Anti-Bug Spray : 15",
    "T-Shirt : 10",
  ])
);
