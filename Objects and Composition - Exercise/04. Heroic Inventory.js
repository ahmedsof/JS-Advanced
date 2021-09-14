function solve(hero) {
    let result = [];

    for (const itm of hero) {
        let[name, level, items] = itm.split(' / ');
        level = Number(level);
        items = items ? items.split(', ') : [];

        result.push({ name, level, items });
         
    }
    console.log(JSON.stringify(result));
}
console.log(
  solve([
    "Isacc / 25 / Apple, GravityGun",
    "Derek / 12 / BarrelVest, DestructionSword",
    "Hes / 1 / Desolator, Sentinel, Antara",
  ])
);
