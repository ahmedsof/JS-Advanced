window.addEventListener('load', solve);

function solve() {
    const model = document.getElementById('model');
    const year = document.getElementById('year');
    const description = document.getElementById('description');
    const price = document.getElementById('price');

    const addBtn = document.getElementById('add');
    let totalPrice = document.querySelector(".total-price");

    addBtn.addEventListener('click', addFurniture);

    const furnitureList = document.getElementById('furniture-list')

    function addFurniture(e) {
        e.preventDefault();

        const yearValue = Number(year.value);
        const priceValue = Number(price.value);

        if (model.value != '' && description.value != '' && yearValue > 0 && priceValue > 0) {
            const tr = document.createElement('tr');
            tr.classList.add("info");
            tr.innerHTML =
                `<td>${model.value}</td>
                <td>${priceValue.toFixed(2)}</td>
                <td>
                    <button class="MoreBtn">More Info</button>
                <button class="buyBtn">Buy it</button>
            </td>`;

            const hideTr = document.createElement('tr');
            hideTr.classList.add("hide");
            hideTr.innerHTML =
                `<td>Year: ${yearValue}</td>
            <td colspan = "3">Description: ${description.value}</td>`
        

            furnitureList.appendChild(tr);
            furnitureList.appendChild(hideTr);

            const moreInfoBtns = tr.querySelectorAll('button');

            moreInfoBtns[0].addEventListener('click', moreInfo)
            moreInfoBtns[1].addEventListener('click', buy)
        }

        model.value = '';
        year.value = '';
        description.value = '';
        price.value = '';
    }

    function moreInfo(e) {
        const moreInfoTr = e.target.parentElement.parentElement.nextElementSibling;
        if (e.target.textContent == "More Info") {
            e.target.textContent = 'Less Info';
            moreInfoTr.style.display = 'contents';
        } else {
            e.target.textContent = 'More Info';
            moreInfoTr.style.display = 'none';
        }

        
        
    }

    function buy(e) {
        const tr = e.target.parentElement.parentElement;
        const hideTr = tr.nextElementSibling;

        hideTr.parentElement.removeChild(hideTr);

        const price = Number(tr.querySelectorAll('td')[1].textContent);
        totalPrice.textContent = (Number(totalPrice.textContent) + price).toFixed(2);

        tr.parentElement.removeChild(tr);
        
    }
}
