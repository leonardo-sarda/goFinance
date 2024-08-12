/////Criar usuario, nome e cidade....
//// Vou mudar de nome para users.routes.... a classe nome vai virar User, onde é eu crio o usuario

import { Router, Request, Response } from 'express';

import Nomes from '../models/Nomes';

const usersRouter = Router();

const nomes: Nomes[] = [];

usersRouter.get('/', (request, response) => {
  try {
    return response.json({ nomes });
  } catch {
    response.status(500).json({ message: 'Ocorreu um erro interno' });
  }
});

usersRouter.post('/', (request, response) => {
  try {
    const { name, cidade } = request.body;

    const nome = new Nomes(name, cidade);

    if (typeof name === 'string') {
      const nome = {
        name,
        cidade,
      };
      nomes.push(nome);

      return response.status(200).json({ message: `nome recebido ${name}` });
    } else {
      return response.status(400).json({ message: 'nome deve ser string' });
    }
  } catch {
    response.status(500).json({ message: 'Ocorreu um erro interno' });
  }
});

export default usersRouter;
