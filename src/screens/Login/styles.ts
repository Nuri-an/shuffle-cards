import styled from 'styled-components';
import { breakpoints } from 'src/styles/breakpoints';

interface BoxButtonProps {
  show: boolean;
}

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  min-width: 100vw;
`;

export const LogoImage = styled.img`
  width: 15%;
  height: 15%;
  margin-bottom: 75px;

  @media (min-width: ${breakpoints.xl}) {
    margin-bottom: 150px;
  }

  @media (max-width: ${breakpoints.xs}) {
    width: 75px;
    height: 75px;
    margin-bottom: 40px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 100vw;
`;

export const EmptyInput = styled.p`
  margin-top: 10px;
  color: ${({ theme }) => theme.colors.neutral.lightest};
`;

export const BoxButton = styled.div<BoxButtonProps>`
  margin-top: 45px;
  opacity: ${({ show }) => (show ? 1 : 0)};
  transition: all 0.5s ease ${({ show }) => (show ? 2 : 0)}s;
  visibility: ${({ show }) => (show ? 'visible' : 'hidden')};
`;
