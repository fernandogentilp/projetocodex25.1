const form = document.getElementById('form');
const nome = document.getElementById('nome');

if (sessionStorage.getItem('nome')) {
    nome.value = sessionStorage.getItem('nome');
}

form.addEventListener('submit', (event) => {
    event.preventDefault();
    sessionStorage.setItem('nome', nome.value);
    window.location.href = 'bemvindo.html';
});