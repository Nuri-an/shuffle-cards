import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

const AppRoutes: React.FC = () => (
  <Routes>
    <Route path="*" element={<Navigate to="cards" />} />
    <Route path="cards" element={<h1>Cartas</h1>} />
  </Routes>
);

export default AppRoutes;
