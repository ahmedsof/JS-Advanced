function solve() {
  document.querySelector("#btnSend").addEventListener("click", onClick);
   let input = document.querySelector("#inputs>textarea");
   let bestRestaurantParagraf = document.querySelector('#bestRestaurant>p');
   let bestWorkersInRestaurant = document.querySelector('#workers>p');

  function onClick() {
    let arr = JSON.parse(input.value);

    let restorants = {};

    arr.forEach((line) => {
      const tokens = line.split(" - ");
      const name = tokens[0];
      const workersArr = tokens[1].split(", ");

      let workers = [];

      for (const worker of workersArr) {
        const workerToken = worker.split(" ");
        let salary = Number(workerToken[1]);

        workers.push({
          name: workerToken[0],
          salary,
        });
      }

      if (restorants[name]) {
        workers = workers.concat(restorants[name].workers);
      }

      workers.sort((a, b) => b.salary - a.salary);
      const bestSalary = workers[0].salary;
      const averageSalary =
        workers.reduce((sum, workers) => sum + workers.salary, 0) /
        workers.length;

      restorants[name] = {
        workers,
        averageSalary,
        bestSalary,
      };
    });

    let bestRestaurantSalary = 0;
    let best = undefined;

    for (const name in restorants) {
      if (restorants[name].averageSalary > bestRestaurantSalary) {
        best = {
          name,
          workers: restorants[name].workers,
          bestSalary: restorants[name].bestSalary,
          averageSalary: restorants[name].averageSalary,
        };

        bestRestaurantSalary = restorants[name].averageSalary;
      }
     }
     let workersResult = [];
     best.workers.forEach(worker => {
        workersResult.push(`Name: ${worker.name} With Salary: ${worker.salary}`)
     })


     bestRestaurantParagraf.textContent = `Name: ${best.name} Average Salary: ${best.averageSalary.toFixed(2)} Best Salary: ${best.bestSalary.toFixed(2)}`;
     bestWorkersInRestaurant.textContent = workersResult.join(' ');
  }
}
