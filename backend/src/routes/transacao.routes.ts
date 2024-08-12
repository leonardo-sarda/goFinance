import { Router, Request, Response } from 'express';
import TransacaoRepository from '../repositories/TransacaoRepository';
import CreateTransacaoService from '../services/CreateTransacaoService';

const transacaoRouter = Router();

const novaTransacao = new TransacaoRepository();

transacaoRouter.get('/', (request, response) => {
  const listar = novaTransacao.all();
  //const balance = novaTransacao.getBalance();
  return response.json({ listar });
});

transacaoRouter.post('/', (request, response) => {
  try {
    const { title, value, type } = request.body;

    const criarTransacao = new CreateTransacaoService(novaTransacao);

    const transacao = criarTransacao.execute({ title, value, type });

    return response.status(201).json(transacao);
  } catch {
    return response.status(400).json({ error: 'Erro ao cadastrar transacao' });
  }
});

export default transacaoRouter;
