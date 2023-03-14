import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Cards } from 'src/screens';

const AppRoutes: React.FC = () => (
  <Routes>
    <Route path="*" element={<Navigate to="cards" />} />
    <Route path="cards" element={<Cards />} />
  </Routes>
);

export default AppRoutes;
