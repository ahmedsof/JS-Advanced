function lockedProfile() {
    document.getElementById('main').addEventListener('click', (e) => {
        if (e.target.tagName === 'BUTTON') {

            let profile = e.target.parentNode;
            let isLock = profile.querySelector('input[type = radio]:checked').value === 'lock';

            if (isLock) {
                return;
            }
            let div = profile.querySelector('div');
            let isVisibal = div.style.display === 'block';
            div.style.display = isVisibal ? 'none' : 'block';
            e.target.textContent = !isVisibal ? 'Hide it' : 'Show more';
        }
    })
}