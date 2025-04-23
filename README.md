

### **README.md**


# API Sistema Gerenciador de Tarefas

Este projeto é o scaffolding inicial de uma API para um gerenciador de tarefas. Ele fornece a estrutura básica para o desenvolvimento de uma aplicação backend, utilizando Node.js, Express e Swagger para documentação.

---

## Como rodar o projeto

### Pré-requisitos
- Node.js (v16 ou superior)
- npm ou yarn
- Git (opcional)

### Passos para execução

1. Clone o repositório:
   
   git clone https://github.com/OtavioWM99/sistema-gerenciador-de-tarefas-1.git

2. Acesse a pasta do projeto:
   
   cd sistema-gerenciador-de-tarefas-1
   
3. Instale as dependências:
      npm install
   
4. Configure o arquivo `.env`:
   - Renomeie o arquivo `.env.example` para `.env`.
   - Defina a variável `PORT` no arquivo `.env` (opcional, o padrão é 3000).

5. Inicie o servidor em modo de desenvolvimento:
   npm run dev

6. Acesse a API:
   - A rota principal estará disponível em: `http://localhost:3000/`.
   - A documentação interativa (Swagger) estará disponível em: `http://localhost:3000/api-docs/`.
   - A lista com todas as tarefas estará disponível em: `http://localhost:3000/api/tasks/`.
    -A mensagem de boas vidas estará disponível em: `http://localhost:3000/api/`. 

## Estrutura do Projeto

sistema-gerenciador-de-tarefas-1/
├── src/                            # Código-fonte principal do projeto
│   ├── config/                     # Configurações do projeto
│   ├── controllers/                # Controladores da API
│   │   └── taskController.js       # Controlador para gerenciar tarefas
│   ├── docs/                       # Documentação da API
│   │   └── swagger.js              # Configuração do Swagger para documentação
│   ├── middlewares/                # Middlewares customizados
│   ├── models/                     # Modelos de dados
│   │   └── task.js                 # Modelo para tarefas
│   ├── public/                     # Arquivos estáticos acessíveis ao cliente
│   │   ├── css/                    # Estilos CSS
│   │   │   └── style.css           # Arquivo de estilos principal
│   │   ├── img/                    # Imagens do projeto
│   │   ├── js/                     # Scripts JavaScript do lado do cliente
│   │   │   └── script.js           # Script principal do frontend
│   │   └── index.html              # Página HTML principal
│   ├── routes/                     # Definição das rotas da API
│   │   └── index.js                # Rotas principais da aplicação
│   └── app.js                      # Arquivo principal da aplicação
├── .env                            # Variáveis de ambiente
├── .env.example                    # Exemplo de variáveis de ambiente
├── .eslintignore                   # Arquivos ignorados pelo ESLint
├── .eslintrc.js                    # Configuração do ESLint
├── .gitignore                      # Arquivos ignorados pelo Git
├── .prettierrc                     # Configuração do Prettier
├── package-lock.json               # Dependências e versões exatas do projeto
├── package.json                    # Dependências e scripts do projeto
└── README.md                       # Documentação do projeto

## Como contribuir

1. Faça um fork do projeto.
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`).
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`).
4. Push para a branch (`git push origin feature/nova-feature`).
5. Abra um Pull Request.


## Licença

Este projeto está sob a licença MIT. Consulte o arquivo [LICENSE](LICENSE) para mais detalhes.


## Contato

Se tiver dúvidas ou sugestões, entre em contato:

- **Nome**: [Seu Nome]
- **E-mail**: [seu-email@exemplo.com]
- **GitHub**: [seu-usuario](https://github.com/seu-usuario)


### **Testar a Aplicação**
   - Acesse `http://localhost:3000/api/` para ver a mensagem de boas-vindas.
   - Acesse `http://localhost:3000/api-docs/` para visualizar a documentação Swagger.
   - Acesse `http://localhost:3000/api/tasks/` para visualizar a lista com todas as tarefas.
   - Acesse `http://localhost:3000/` para utilizar a API.

