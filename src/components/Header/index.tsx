import React from 'react';
import { Logo, Logout } from 'src/assets';
import { useSelector } from 'react-redux';
import { authSelector, logout } from 'src/redux/authSlice';
import { useAppDispatch } from 'src/redux/hooks';
import * as S from './styles';

const Header: React.FC = () => {
  const { user } = useSelector(authSelector);
  const dispatch = useAppDispatch();

  const onLogout = () => {
    dispatch(logout());
  };
  return (
    <S.Container data-testid="header">
      <S.LogoImage src={Logo} data-testid="header-logo" />
      <S.ContainerLogout>
        <S.User data-testid="header-user">{user}</S.User>
        <S.LogoutIcon src={Logout} data-testid="logout" onClick={onLogout} />
      </S.ContainerLogout>
    </S.Container>
  );
};

export default Header;
