import { breakpoints } from 'src/styles/breakpoints';
import styled, { css } from 'styled-components';

interface ContainerProps {
  bgColor: string;
  disable: boolean;
}

export const Container = styled.button<ContainerProps>`
  background-color: ${({ bgColor }) => bgColor};
  box-shadow: 0px 0px 10px 2px ${({ theme }) => theme.colors.brand.secondary};
  padding: ${({ theme }) =>
    `${theme.space.inset.xs}px ${theme.space.inset.lg}px`};
  border-radius: ${({ theme }) => theme.border.radius.md}px;
  color: ${({ theme }) => theme.colors.neutral.lightest};
  width: fit-content;

  ${({ disable, theme }) =>
    disable &&
    css`
      background-color: ${theme.colors.neutral.dark};
      box-shadow: 0px 4px 4px ${theme.colors.neutral.darkest};
    `}

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
