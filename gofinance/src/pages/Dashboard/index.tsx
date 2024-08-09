import React from 'react';

import Income from '../../assets/income.svg';
import Outcome from '../../assets/outcome.svg';
import Total from '../../assets/total.svg';

import Header from '../../components/Header';
import { Container, CardContainer, Card, TableContainer } from './style';

const Dashboard: React.FC = () => {
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
                <th>Data</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Desenvolvimento</td>
                <td>500</td>
                <td>Food</td>
                <td>02/05/2024</td>
              </tr>
            </tbody>
          </table>
        </TableContainer>
      </Container>
    </>
  );
};

export default Dashboard;
