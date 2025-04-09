# ✅ To do List - App de Tarefas

Uma aplicação web simples e moderna para gerenciamento de tarefas, construída com tecnologias robustas de back-end e um design responsivo.

![To do List Screenshot](./caminho-da-imagem/image.png)

## 🚀 Funcionalidades

- ✅ Adicionar novas tarefas
- ✅ Marcar tarefas como concluídas (com riscado dinâmico)
- ✅ Layout moderno e responsivo
- ✅ Banco de dados persistente com PostgreSQL
- ✅ Renderização com Pug
- ✅ Backend com Express e ORM com Prisma

---

## 🛠️ Tecnologias Utilizadas

| Camada         | Tecnologia                     |
|----------------|--------------------------------|
| Front-end      | [Tailwind CSS](https://tailwindcss.com/) + [Pug](https://pugjs.org/api/getting-started.html) |
| Back-end       | [Node.js](https://nodejs.org/) + [Express.js](https://expressjs.com/) |
| ORM            | [Prisma](https://www.prisma.io/) |
| Banco de Dados | [PostgreSQL](https://www.postgresql.org/) |
| Estilização    | TailwindCSS                    |

---

## 📦 Como rodar o projeto localmente

### Pré-requisitos

- Node.js instalado
- PostgreSQL instalado e rodando
- Conta no GitHub (para clonar o projeto, se estiver online)

### Instalação

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/nome-do-repo.git

# Acesse o diretório
cd nome-do-repo

# Instale as dependências
npm install
```

### Configuração do banco de dados

1. Crie um banco no PostgreSQL
2. Configure o arquivo `.env`:

```
DATABASE_URL="postgresql://usuario:senha@localhost:5432/nomedobanco"
```

3. Execute as migrações do Prisma:

```bash
npx prisma migrate dev
```

---

### Executando o projeto

```bash
npm start
```

Abra em seu navegador: [http://localhost:3000](http://localhost:3000)

---

Desenvolvido com 💻 por João Gabriel