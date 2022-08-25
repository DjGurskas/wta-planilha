const express = require('express');
const TransacoesRepositorio = require('./transacoes-repositorio');
const app = express();
app.use(express.json());
app.use(express.static(`${__dirname}/public`))
const port = 3000;

app.listen(port, () => {
  console.log("Servidor ouvindo na porta 3000")
})

app.get('/transacoes', (req, res) => {
  const repositorio = new TransacoesRepositorio();
  const transacoes = repositorio.listarTransacoes();
  res.send(transacoes)
})

app.post('/transacoes', (req, res) => {
  const repositorio = new TransacoesRepositorio();
  const transacao = req.body;
  repositorio.criarTransacao(transacao);
  res.status(201).send(transacao)
})