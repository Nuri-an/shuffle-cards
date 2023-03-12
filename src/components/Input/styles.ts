import { breakpoints } from 'src/styles/breakpoints';
import styled from 'styled-components';

export const Container = styled.div`
  width: 325px;
  height: 45px;
  padding: ${({ theme }) =>
    `${theme.space.inset.xs}px ${theme.space.inset.lg}px`};
  border-radius: ${({ theme }) => theme.border.radius.md}px;
  background-color: ${({ theme }) => theme.colors.support.n01};

  @media (min-width: ${breakpoints.xl}) {
    width: 25%;
    height: auto;
    padding: ${({ theme }) =>
      `${theme.space.inset.md}px ${theme.space.inset.xl}px`};
    border-radius: ${({ theme }) => theme.border.radius.lg}px;
  }

  @media (max-width: ${breakpoints.xs}) {
    width: 70%;
    height: auto;
    padding: ${({ theme }) =>
      `${theme.space.inset.xxs}px ${theme.space.inset.md}px`};
    border-radius: ${({ theme }) => theme.border.radius.sm}px;
  }
`;

export const Input = styled.input`
  color: ${({ theme }) => theme.colors.support.n02};
  background-color: transparent;

  ::placeholder {
    color: ${({ theme }) => theme.colors.support.n03};
  }

  @media (min-width: ${breakpoints.xl}) {
    font-size: ${({ theme }) => theme.fontSize.md}px;
  }
`;
