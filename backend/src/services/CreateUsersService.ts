// aqui vou criar o serviço de criação do usuario.

import Users from '../models/Users';
import UsersRepositories from '../repositories/UsersRepository';

interface Request {
  name: string;
  cidade: string;
}

class CreateUserService {
  private usersRepository: UsersRepositories;

  constructor(usersRepository: UsersRepositories) {
    this.usersRepository = usersRepository;
  }

  public execute({ name, cidade }: Request): Users {
    const novoUsuario = this.usersRepository.create({ name, cidade });
    return novoUsuario;
  }
}

export default CreateUserService;
