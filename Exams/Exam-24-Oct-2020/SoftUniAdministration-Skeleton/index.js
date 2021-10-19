function solve() {
    const formControl = document.querySelectorAll('.form-control input');
    
    const lecture = formControl[0];
    const date = formControl[1];
    const modulName = document.querySelector('select');

    const modulesOutput = document.querySelector('.modules')

    let state = {};
    

    function createElement(type, text, atributes = []) {
        let element = document.createElement(type);
        if (text) {
            element.textContent = text;
        }

        atributes
            .map(atr => atr.split('='))
            .forEach(([ name, value ]) => element.setAttribute(name, value));
        
        return element;
    }
    function add() {
        if (lecture.value === '' || date.value === '' || modulName.value === 'Select module') {
            return;
        }
        
        let lectureName = lecture.value;
        let dateString = date.value;

        const lectureTittle = lectureName + ' - ' + dateString.split('-').join('/').split('T').join('.-.');
        const delBtn = createElement('button', 'Del', ['class = red']);
        const lectureH4 = createElement('h4', lectureTittle)
        const li = createElement('li', undefined, ['class=flex']);
        li.appendChild(lectureH4);
        li.appendChild(delBtn);

        let module;
        let ul;

        if (!modulName.value) {
            let h3 = createElement('h3', `${modulName.value.toUpperCase()}-MODULE`);
            ul = createElement('ul');
            lis = [];
            module = createElement('div', undefined, ['class = module']);

            module.appendChild(h3);
            module.appendChild(ul);

            state[modulName.value] = { module, ul, lis: [] }
        } else {
            module = state[modulName.value].module;
            ul = state[modulName.value].ul;

        }
        state[modulName.value].lis.push({ li, date: date.value });
        
        state[modulName.value].lis.sort(function (a, b) { a.date.localeCompare(b.date) }).forEach(({ li }) => { ul.appendChild(li) });

        modulesOutput.appendChild(module)

    }
    documen.querySelectorAll('.container').addEventListener('clik', (e) => {
        e.preventDefault();

        if (e.target.tagname === 'BUTTON'){
            if (e.target.textContent === 'Del') {

            } else if (e.target.textContent === 'Add') {
                
                add()
            }
        }

        
    })
};