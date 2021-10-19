function solve() {
    const formControl = document.querySelectorAll('.form-control input');
    
    const lecure = formControl[0];
    const date = formControl[1];
    const modulName = formControl[2];
    
    function add() {
        
    }
    documen.main.addEventListener('clik', (e) => {
        if (e.target.tagname !== 'BUTTON'){
            return;
        }

        if (e.target.textContent === 'Del') {

        } else if (e.target.textContent === 'Add') {
            e.preventDefault();
            add()
        }
    })
};