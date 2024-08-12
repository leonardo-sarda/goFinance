/////Criar usuario, nome e cidade....
//// Vou mudar de nome para users.routes.... a classe nome vai virar User, onde é eu crio o usuario

import { Router, Request, Response } from 'express';

import Users from '../models/Users';
import CreateUserService from '../services/CreateUsersService';
import UsersRepositories from '../repositories/UsersRepository';

const usersRouter = Router();

const novoUsuario = new UsersRepositories();

usersRouter.get('/', (request, response) => {
  try {
    return response.json(novoUsuario);
  } catch {
    response
      .status(500)
      .json({ message: 'Ocorreu um erro interno para listar' });
  }
});

usersRouter.post('/', (request, response) => {
  try {
    //pego as informações enviadas
    const { name, cidade } = request.body;

    // faço um novo serice para executar
    const criandoUsuario = new CreateUserService(novoUsuario);

    //executo o service
    const usuario = criandoUsuario.execute({
      name,
      cidade,
    });

    //retorno o service
    return response.json(usuario);
  } catch {
    response.status(500).json({
      message: 'Ocorreu um erro interno para Criar essa mensagem ta no routes',
    });
  }
});

export default usersRouter;
