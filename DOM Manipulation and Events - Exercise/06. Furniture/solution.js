function solve() {
  let textarea = document.querySelectorAll('textarea');
  let buttons = document.querySelectorAll('button');
  let body = document.querySelector('tbody');

  buttons[0].addEventListener('click', function (e) {
    let arr = JSON.parse(textarea[0].value);
    
    for (let el of arr) {
      let row = document.createElement('tr');

      let cellImg = document.createElement('td');
      let img = document.createElement('img');
      img.setAttribute('src', el.img);
      cellImg.appendChild(img);

      let cellName = document.createElement('td');
      let pName = document.createElement('p')
      pName.textContent = el.name;
      cellName.appendChild(pName);

      let cellPrice = document.createElement('td');
      let pPrice = document.createElement('p')
      pPrice.textContent = el.price;
      cellPrice.appendChild(pPrice);

      let cellDecor = document.createElement('td');
      let pDecor = document.createElement('p')
      pDecor.textContent = el.decFactor;
      cellDecor.appendChild(pDecor);

      let cellChek = document.createElement('td');
      let input = document.createElement('input')
      input.setAttribute('type', 'checkbox')
      cellChek.appendChild(input);

      
      row.appendChild(cellImg);
      row.appendChild(cellName);
      row.appendChild(cellPrice);
      row.appendChild(cellDecor);
      row.appendChild(cellChek);
      body.appendChild(row);

    }
  })

  buttons[1].addEventListener('click', function (e) {
    let furniture = Array.from(body.querySelectorAll('input[type=checkbox]:checked'))
      .map(input => input.parentNode.parentNode);
    
    const result = {
      bought: [],
      totalPrice: 0,
      decFactorSum: 0,

    }

    for (const row of furniture) {
      let cells = row.children;

      const name = cells[1].children[0].textContent;
      result.bought.push(name);

      const price = Number(cells[2].children[0].textContent);
      result.totalPrice += price;
      
      const factor = Number(cells[3].children[0].textContent);
      result.decFactorSum += factor;
      
    }
    textarea[1].value = `Bought furniture: ${result.bought.join(', ')}\nTotal price: ${result.totalPrice.toFixed(2)}\nAverage decoration factor: ${result.decFactorSum / furniture.length}`

  })
}