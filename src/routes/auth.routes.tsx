import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

const AuthRoutes: React.FC = () => (
  <Routes>
    <Route path="*" element={<Navigate to="login" />} />
    <Route path="login" element={<h1>Login</h1>} />
  </Routes>
);

export default AuthRoutes;
