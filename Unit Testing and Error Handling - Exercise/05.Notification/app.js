function notify(message) {
  let div = document.getElementById('notification')
  div.textContent = message;
  console.log(div.textContent);
  div.style.display = 'block';
  
  div.addEventListener('click', (e) => {
    e.target.style.display = 'none';

  })
}