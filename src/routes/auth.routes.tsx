import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Login } from 'src/screens';

const AuthRoutes: React.FC = () => (
  <Routes>
    <Route path="*" element={<Navigate to="login" />} />
    <Route path="login" element={<Login />} />
  </Routes>
);

export default AuthRoutes;
