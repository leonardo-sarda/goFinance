import Transacoes from '../models/Transacoes';
import TransacoesRepositories from '../repositories/TransacaoRepository';

interface Request {
  title: string;
  value: number;
  type: 'income' | 'outcome';
}

class CreateTransacaoService {
  private criarTransacao: TransacoesRepositories;

  constructor(criatTransacao: TransacoesRepositories) {
    this.criarTransacao = criatTransacao;
  }

  public execute({ title, value, type }: Request): Transacoes {
    const { total } = this.criarTransacao.getBalance();
    const novaTransacao = this.criarTransacao.create({ title, value, type });
    return novaTransacao;
  }
}

export default CreateTransacaoService;
