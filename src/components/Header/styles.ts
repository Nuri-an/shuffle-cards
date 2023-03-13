import { breakpoints } from 'src/styles/breakpoints';
import styled from 'styled-components';

export const Container = styled.header`
  padding: ${({ theme }) => theme.space.inset.xxl}px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;

  @media (max-width: ${breakpoints.xs}) {
    padding: ${({ theme }) => theme.space.inset.xl}px;
    align-items: center;
  }
`;

export const LogoImage = styled.img`
  width: 61px;
  height: 61px;

  @media (min-width: ${breakpoints.xl}) {
    width: 100px;
    height: 100px;
  }

  @media (max-width: ${breakpoints.xs}) {
    width: 40px;
    height: 40px;
  }
`;

export const ContainerLogout = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  column-gap: 15px;
`;

export const User = styled.p`
  color: ${({ theme }) => theme.colors.neutral.lightest};
  font-size: ${({ theme }) => theme.fontSize.md}px;
  font-weight: ${({ theme }) => theme.weight.bold};

  @media (min-width: ${breakpoints.xl}) {
    font-size: ${({ theme }) => theme.fontSize.lg}px;
  }

  @media (max-width: ${breakpoints.xs}) {
    font-size: ${({ theme }) => theme.fontSize.sm}px;
  }
`;

export const LogoutIcon = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;

  @media (min-width: ${breakpoints.xl}) {
    width: 40px;
    height: 40px;
  }

  @media (max-width: ${breakpoints.xs}) {
    width: 15px;
    height: 15px;
  }
`;
