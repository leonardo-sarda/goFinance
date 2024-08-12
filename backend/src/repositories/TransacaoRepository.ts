import Transacoes from '../models/Transacoes';

interface transacaoDTO {
  title: string;
  value: number;
  type: 'income' | 'outcome';
}

interface Balance {
  income: number;
  outcome: number;
  total: number;
}

class TransacoesRepositories {
  private transacoes: Transacoes[];

  constructor() {
    this.transacoes = [];
  }

  public all(): Transacoes[] {
    return this.transacoes;
  }

  public getBalance(): Balance {
    const { income, outcome } = this.transacoes.reduce(
      (accumulador: Balance, transacao: Transacoes) => {
        switch (transacao.type) {
          case 'income':
            accumulador.income += transacao.value;
            break;
          case 'outcome':
            accumulador.outcome += transacao.value;
            break;
          default:
            break;
        }

        return accumulador;
      },
      {
        income: 0,
        outcome: 0,
        total: 0,
      },
    );
    const total = income - outcome;
    return { income, outcome, total };
  }

  public create({ title, value, type }: transacaoDTO): Transacoes {
    const transacao = new Transacoes({ title, value, type });

    this.transacoes.push(transacao);

    return transacao;
    //
  }
}

export default TransacoesRepositories;
