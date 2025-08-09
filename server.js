const express = require('express');
const cors = require('cors');
const path = require('path')

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(process.cwd(), 'views'));

app.get('/', (req, res) => {
    res.render('index', { titulo: 'Testando EJS' });
});

app.listen(3000, () => console.log(`Servidor aberto na porta 3000`));