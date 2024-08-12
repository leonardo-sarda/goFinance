import { v4 as uuid } from 'uuid';

class Transacoes {
  id: string;
  title: string;
  value: string;
  type: 'income' | 'outcome';

  constructor({ title, value, type }: Omit<Transacoes, 'id'>) {
    this.id = uuid();
    this.title = title;
    this.value = value;
    this.type = type;
  }
}

export default Transacoes;
