class Nomes {
  name: string;
  cidade?: string;

  // constructor({ name }: Omit<Nomes>) {
  //   this.name = name;
  // }

  constructor(name: string, cidade: string) {
    this.name = name;
    this.cidade = cidade;
  }
}

export default Nomes;
