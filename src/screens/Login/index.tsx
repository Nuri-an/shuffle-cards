import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Logo } from 'src/assets';
import { Button, Input } from 'src/components';
import { login } from 'src/redux/authSlice';
import { useAppDispatch } from 'src/redux/hooks';
import { useTheme } from 'styled-components';
import * as S from './styles';

type FormData = {
  name: string;
};

const Login: React.FC = () => {
  const dispatch = useAppDispatch();
  const { register, handleSubmit, watch } = useForm<FormData>();
  const [error, setError] = useState(false);
  const { colors } = useTheme();

  const onGoToCards = ({ name }: FormData) => {
    if (!watch('name')) {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 3000);
      return;
    }
    dispatch(login(name));
  };

  const onSubmit = handleSubmit(onGoToCards);

  return (
    <S.Wrapper data-testid="login">
      <S.LogoImage src={Logo} data-testid="login-img" />
      <S.Form>
        <Input placeholder="Nome" name="name" register={register} />
        {error && (
          <S.EmptyInput data-testid="login-error">
            Informe seu nome
          </S.EmptyInput>
        )}

        <S.BoxButton show={!!watch('name')} data-testid="login-button">
          <Button bgColor={colors.brand.primaryLight} onClick={onSubmit}>
            Ver cartas
          </Button>
        </S.BoxButton>
      </S.Form>
    </S.Wrapper>
  );
};

export default Login;
