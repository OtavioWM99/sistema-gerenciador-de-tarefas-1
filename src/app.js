const express = require('express');
const dotenv = require('dotenv');
const routes = require('./routes');
const swaggerConfig = require('./docs/swagger');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

const path = require('path');

// Serve arquivos estáticos da pasta "public"
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Rotas
app.use('/api', routes);

// Swagger
swaggerConfig(app);

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

app.use(express.static('public'));