import React, { useState, useEffect } from 'react';

import api from '../../service/api';
import formatValue from '../../utils/formatValue';

import Income from '../../assets/income.svg';
import Outcome from '../../assets/outcome.svg';
import Total from '../../assets/total.svg';

import Header from '../../components/Header';
import { Container, CardContainer, Card, TableContainer } from './style';
import ComponentStyle from 'styled-components/dist/models/ComponentStyle';

interface Transacao {
  id: number;
  title: string;
  value: number;
  valorFormatada: string;
  type: 'income' | 'outcome';
}

const Dashboard: React.FC = () => {
  const [transacoes, setTransacoes] = useState<Transacao[]>([]);

  useEffect(() => {
    async function loadTransacao(): Promise<void> {
      const response = await api.get('/transacao');

      const listarTransacao = response.data.listar.map(
        (transacao: Transacao) => ({
          ...transacao,
          valorFormatada: formatValue(transacao.value),
        }),
      );

      setTransacoes(listarTransacao);
    }

    loadTransacao();
  }, []);
  return (
    <>
      <Header />
      <Container>
        <CardContainer>
          <Card>
            <header>
              <p>Entradas</p>
              <img src={Income} alt="Income" />
            </header>
            <h1 data-testid="balance-income">500</h1>
          </Card>
          <Card>
            <header>
              <p>Saídas</p>
              <img src={Outcome} alt="Outcome" />
            </header>
            <h1 data-testid="balance-outcome">200</h1>
          </Card>
          <Card>
            <header>
              <p>Total</p>
              <img src={Total} alt="Total" />
            </header>
            <h1 data-testid="balance-total">300</h1>
          </Card>
        </CardContainer>

        <TableContainer>
          <table>
            <thead>
              <tr>
                <th>Título</th>
                <th>Preço</th>
                <th>Categoria</th>
                <th>teste</th>
              </tr>
            </thead>

            <tbody>
              {transacoes.map((transacao) => (
                <tr key={transacao.id}>
                  <td className="title">{transacao.title}</td>
                  <td className="value">{transacao.valorFormatada}</td>
                  <td className="type">{transacao.type}</td>
                  <td className="id">{transacao.id}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </TableContainer>
      </Container>
    </>
  );
};

export default Dashboard;
