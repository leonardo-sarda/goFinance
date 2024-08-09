import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import RoutesComponents from './routes';

import GlobalStyle from './styles/global';

const App: React.FC = () => (
  <>
    <GlobalStyle />
    <BrowserRouter>
      <RoutesComponents />
    </BrowserRouter>
  </>
);

export default App;
