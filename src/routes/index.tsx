import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { StoragePrefix } from 'src/utils/enum';
import { authSelector, login, logout } from 'src/redux/authSlice';

import { useAppDispatch } from 'src/redux/hooks';
import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';

const Routes: React.FC = () => {
  const { isLogged } = useSelector(authSelector);
  const dispatch = useAppDispatch();

  const fetchUser = () => {
    const userFromStorage = localStorage.getItem(StoragePrefix.user);
    if (userFromStorage) dispatch(login(userFromStorage));
  };

  const handleExpiredSession = () => {
    const expiredAt = localStorage.getItem(StoragePrefix.tokenExp);

    if (expiredAt) {
      const now = new Date();
      const convertedDate = new Date(expiredAt);
      if (now >= convertedDate) dispatch(logout);
    }
  };

  useEffect(() => {
    fetchUser();
    handleExpiredSession();
  }, []);

  return isLogged ? <AppRoutes /> : <AuthRoutes />;
};

export default Routes;
