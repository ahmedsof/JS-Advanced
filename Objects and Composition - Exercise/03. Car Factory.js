function solve(car) {

    function getEngine(power) {
        const engins = [
            { power: 90, volume: 1800 },
            { power: 120, volume: 2400 },
            { power: 200, volume: 3500 }
        ]
        return engins.find(eng => eng.power >= power)
    }

    function getCarriage(carriage, color) {
        return {
            type: carriage,
            color,
        }
    }

    function getWheels(wheelsize) {

        let wheel = Math.floor(wheelsize) % 2 === 0
            ? Math.floor(wheelsize) - 1
            : Math.floor(wheelsize);
        
        return [wheel, wheel, wheel, wheel]
    }


    return {
        model: car.model,
        engine: getEngine(car.power),
        carriage: getCarriage(car.carriage, car.color),
        wheels: getWheels(car.wheelsize)
    }
}
console.log(
  solve({
    model: "VW Golf II",
    power: 90,
    color: "blue",
    carriage: "hatchback",
    wheelsize: 14,
  })
);
