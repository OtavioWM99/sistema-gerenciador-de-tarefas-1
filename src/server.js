const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const routes = require('./routes');
const swaggerConfig = require('./docs/swagger');
const configViewEngine = require('./config/viewEngine'); 

// Configurar variáveis de ambiente
dotenv.config();

// Inicializar app
const app = express();
const PORT = process.env.PORT || 3000;

// Configurar EJS e arquivos estáticos
configViewEngine(app); 

// Middleware para parse de JSON
app.use(express.json());

// Rotas principais
app.get('/', (req, res) => {
  res.render('tarefas'); // Renderiza views/tarefas.ejs
});

// Rotas da API
app.use('/api', routes);

// Swagger
swaggerConfig(app);

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
