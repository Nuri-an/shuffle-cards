import React, { PropsWithChildren } from 'react';
import * as S from './styles';

interface ButtonProps extends PropsWithChildren {
  bgColor: string;
  onClick(): void;
}

const Button: React.FC<ButtonProps> = ({ bgColor, children, onClick }) => {
  return (
    <S.Container bgColor={bgColor} onClick={onClick} data-testid="button">
      {children}
    </S.Container>
  );
};

export default Button;
