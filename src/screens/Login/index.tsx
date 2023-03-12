import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button, Input } from 'src/components';
import { useTheme } from 'styled-components';
import * as S from './styles';
import logo from '../../assets/logo.svg';

type FormData = {
  name: string;
};

const Login: React.FC = () => {
  const { register, handleSubmit, watch } = useForm<FormData>();
  const [error, setError] = useState(false);
  const { colors } = useTheme();

  const onGoToCards = (data: FormData) => {
    if (!watch('name')) {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 5000);
      return;
    }
    console.log(data);
  };

  const onSubmit = handleSubmit(onGoToCards);

  return (
    <S.Wrapper data-testid="login">
      <S.LogoImage src={logo} data-testid="login-img" />
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
