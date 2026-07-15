# AulaPostgreSQL (Express + PostgreSQL + Sequelize)

Projeto de exemplo para gerenciar usuários em um banco PostgreSQL usando **Node.js** com **Express** e **Sequelize** (ORM).

## O que o projeto faz

- Conecta em um banco PostgreSQL.
- Define o modelo `User` e executa a persistência via Sequelize.
- Implementa endpoints para:
  - **Cadastrar usuário** (`POST /cadastro`)
  - **Listar todos os usuários** (`GET /users`)
  - **Deletar usuário por id** (`DELETE /delete/:id`)

O schema da tabela `users` inclui:
- `id` (UUID, chave primária)
- `name` (string)
- `age` (string)
- `email` (string única)
- `created_at` e `updated_at` (timestamps)

## Tecnologias utilizadas

- **Node.js**
- **Express** (API HTTP)
- **Sequelize** (ORM)
- **pg** (driver PostgreSQL)
- **Sequelize CLI** (migrations)
- **crypto (node:crypto)** (geração de UUID no cadastro)

## Estrutura do projeto

- `src/index.js` — inicializa o servidor, configura o Express e conecta no banco com Sequelize
- `src/routes.js` — rotas da API
- `src/config/database.js` — configurações de conexão com PostgreSQL
- `src/controllers/UsersController.js` — lógica dos endpoints de usuários
- `src/models/User.js` — definição do model `User`
- `src/database/migrations/*create-users-table.js` — migration/criação da tabela `users`

## Endpoints

### 1) Listar usuários
- **GET** `/users`
- Resposta: lista com todos os usuários cadastrados.

### 2) Cadastrar usuário
- **POST** `/cadastro`
- Body (JSON):
```json
{
  "name": "João",
  "age": "25",
  "email": "joao@email.com"
}
```
- Resposta: o usuário criado (status `201`).

### 3) Deletar usuário
- **DELETE** `/delete/:id`
- Ex.: `DELETE /delete/UUID_DO_USUARIO`
- Respostas:
  - `200`: usuário deletado com sucesso
  - `404`: quando o usuário não é encontrado

## Configuração do banco

O arquivo `src/config/database.js` define:
- dialect: `postgres`
- host: `localhost`
- username: `postgres`
- password: `220906`
- database: `usersdb`

> Ajuste `password`, `username` e `database` conforme seu ambiente.

## Como executar

1. Instale dependências:
```bash
npm install
```

2. Garanta que o PostgreSQL está rodando e que a base `usersdb` existe (ou ajuste no config).

3. Execute as migrations (caso necessário):
```bash
npx sequelize-cli db:migrate
```

4. Suba o servidor em modo dev:
```bash
npm run dev
```

A API fica disponível em:
- `http://localhost:3333`

## Observações

- O model define `email` como `unique`, então tentar cadastrar um email repetido pode gerar erro do Sequelize/PostgreSQL.
- `age` está como `STRING` no model e na migration (se quiser idade numérica, ajuste para `INTEGER`).

