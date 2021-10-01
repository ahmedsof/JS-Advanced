function solve() {
    const formElement = document.querySelector('#container').children;
    const inputs = Array.from(formElement).slice(0, formElement.length - 1);
    const onScreenButton = Array.from(formElement).slice(formElement.length - 1)[0];
    const moviesUl = document.querySelector('#movies>ul');
    
    onScreenButton.addEventListener('click', createMuvie);

    function archive(ev) {
        const li = ev.target.parentNode.parentNode;
        const div = ev.target.parentNode;

        const input = div.children[1];

        if (input.value == '') {
            return;
        }

        const name = li.children[0].textContent;
        const price = +div.children[0].textContent;
        let totalPrice = price * Number(input.value);
        

        li.remove;
        
    }

    function createMuvie(ev) {
        ev.preventDefault();
       
        const name = inputs[0].value;
        const hall = inputs[1].value;
        const price = Number(inputs[2].value);
        
        if (!name || !hall || !price) {
            return;
        }

        inputs[0].value = '';
        inputs[1].value = '';
        inputs[2].value = '';

        const li = document.createElement('li');

        const span = document.createElement('span');
        span.textContent = name;
        li.appendChild(span);

        const strong = document.createElement('strong');
        strong.textContent = `Hall: ${hall}`
        li.appendChild(strong);

        const div = document.createElement('div');
        const divStrong = document.createElement('strong');
        divStrong.textContent = price.toFixed(2);
        div.appendChild(divStrong);

        const input = document.createElement('input');
        input.setAttribute('placeholder', 'Ticket Sold')
        div.appendChild(input);
        

        const arhivBtn = document.createElement('button');
        arhivBtn.textContent = 'Archive'
        div.appendChild(arhivBtn);
        arhivBtn.addEventListener('click', archive);

        li.appendChild(div);

        moviesUl.appendChild(li);

    }
    
}