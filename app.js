const express = require('express')
const app = express()
const port = 3000


//Configuração do ORM (Prisma)
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient()

//Configuração do template (Pug)
const pug = require('pug');
app.set('view engine', 'pug')

//Entrega de arquivos estáticos
app.use(express.static('public'))

// Permitir o uso de req.body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Sistema de rotas
app.get('/', async (req, res) => {
    const users = await prisma.user.findMany();
    res.render('index', { users })
})

app.post('/add', async (req, res) => {
  const tarefa = req.body.inputTask;
  await prisma.user.create({
    data: {
      task: tarefa
    }
  });

  res.redirect('/');
})

app.post('/delete/:id', async (req, res) => {
  const id = parseInt(req.params.id);
  await prisma.user.delete({
    where: { id }
  });
  res.redirect('/');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

