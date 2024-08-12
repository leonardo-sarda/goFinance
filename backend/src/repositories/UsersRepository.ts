import Users from '../models/Users';

interface UserDTO {
  name: string;
  cidade: string;
}

class UsersRepositories {
  private usuarios: Users[];

  constructor() {
    this.usuarios = [];
  }

  public create({ name, cidade }: UserDTO): Users {
    const criandoUsuario = new Users({ name, cidade });

    this.usuarios.push(criandoUsuario);

    return criandoUsuario;
  }
}

export default UsersRepositories;
