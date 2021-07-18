const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let data = {
        nome,
        email,
    }
    let convertData = JSON.stringify(data);
    localStorage.setItem('lead', convertData);

    let tankyou = document.getElementById('tankyou');

    let carregando = `<p> Um momento ...</p>`;

    let parabens = `<p>Parabéns !!! agora você vai economizar<br>
                        e arrasar na cozinha. </p>`;
    tankyou.innerHTML = carregando; 

    setTimeout(() => {
        tankyou.innerHTML = parabens
    },2000);

})