import { Router, Request, Response } from 'express';
import TransacaoRepository from '../repositories/TransacaoRepository';

const transacaoRouter = Router();

const novaTransacao = new TransacaoRepository();

transacaoRouter.get('/', (request, response) => {});

transacaoRouter.post('/', (request, response) => {
  try {
    const { title, value, type } = request.body;
  } catch {
    return response.status(400).json({ error: 'Erro ao cadastrar transacao' });
  }
});

export default transacaoRouter;
