const saida = document.getElementById('saida');
const nome = sessionStorage.getItem('nome') || '';
const botaoeditar = document.getElementById('botaoeditar');
const botaosair = document.getElementById('botaosair');

saida.textContent = `Olá ${nome}, seja bem-vindo!`;

botaoeditar.addEventListener('click', () => {
    window.location.href = 'index.html';
});

botaosair.addEventListener('click', () => {
    sessionStorage.clear();
    window.location.href = 'index.html';
});