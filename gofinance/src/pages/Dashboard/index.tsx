import React from 'react';
import Header from '../../components/Header';

import { Container, CardContainer } from './style';

const Dashboard: React.FC = () => {
  return (
    <>
      <Header />
      <Container>
        <CardContainer>
          <h1>Dashboard</h1>
          <p>Welcome to your dashboard!</p>
        </CardContainer>
      </Container>
    </>
  );
};

export default Dashboard;
