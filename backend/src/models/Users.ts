class Users {
  name: string;
  cidade: string;

  // constructor({ name }: Omit<Nomes>) {
  //   this.name = name;
  // }

  constructor({ name, cidade }: Users) {
    this.name = name;
    this.cidade = cidade;
  }
}

export default Users;
