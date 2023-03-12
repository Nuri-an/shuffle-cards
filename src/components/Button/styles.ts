import { breakpoints } from 'src/styles/breakpoints';
import styled from 'styled-components';

interface ContainerProps {
  bgColor: string;
}

export const Container = styled.button<ContainerProps>`
  background-color: ${({ bgColor }) => bgColor};
  box-shadow: 0px 0px 10px 2px ${({ theme }) => theme.colors.brand.secondary};
  padding: ${({ theme }) =>
    `${theme.space.inset.xs}px ${theme.space.inset.lg}px`};
  border-radius: ${({ theme }) => theme.border.radius.md}px;
  color: ${({ theme }) => theme.colors.neutral.lightest};

  @media (min-width: ${breakpoints.xl}) {
    padding: ${({ theme }) =>
      `${theme.space.inset.md}px ${theme.space.inset.xxl}px`};
    font-size: ${({ theme }) => theme.fontSize.md}px;
  }

  @media (max-width: ${breakpoints.xs}) {
    padding: ${({ theme }) =>
      `${theme.space.inset.xxs}px ${theme.space.inset.lg}px`};
    font-size: ${({ theme }) => theme.fontSize.sm}px;
  }
`;
