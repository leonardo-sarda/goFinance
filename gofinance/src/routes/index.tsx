import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Import from '../pages/Import';

const RoutesComponents: React.FC = () => (
  <Routes>
    <Route path="/" element={<Dashboard />} />
    <Route path="/import" element={<Import />} />
  </Routes>
);

export default RoutesComponents;
