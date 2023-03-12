import React from 'react';
import { UseFormRegister } from 'react-hook-form';
import * as S from './styles';

interface InputProps {
  placeholder: string;
  name: string;
  register: UseFormRegister<any>;
}

const Input: React.FC<InputProps> = ({
  placeholder,
  name,
  register,
  ...props
}) => {
  return (
    <S.Container data-testid="input-container">
      <S.Input
        placeholder={placeholder}
        data-testid="input"
        {...register(name)}
        {...props}
      />
    </S.Container>
  );
};

export default Input;
