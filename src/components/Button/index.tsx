import React, { PropsWithChildren } from 'react';
import * as S from './styles';

interface ButtonProps extends PropsWithChildren {
  bgColor: string;
  onClick(): void;
  disable?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  bgColor,
  onClick,
  disable = false,
  children = undefined,
}) => {
  return (
    <S.Container
      bgColor={bgColor}
      onClick={onClick}
      disable={disable}
      disabled={disable}
      data-testid="button"
    >
      {children}
    </S.Container>
  );
};

export default Button;
