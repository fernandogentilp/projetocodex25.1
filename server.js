const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.set('view engine', 'ejs');
app.set('views', path.join(process.cwd(), 'views'));

app.get('/', (req, res) => {
    res.render('index')
});

app.post('/bem-vindo', (req, res) =>{
    const nome = req.body.nome;
    res.render('bemvindo', { nome: nome })
});

app.listen(3000, () => console.log(`Servidor aberto na porta 3000`));