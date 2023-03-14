import { breakpoints } from 'src/styles/breakpoints';
import styled from 'styled-components';

export const Container = styled.section`
  padding: ${({ theme }) => theme.space.inset.xxl}px;
`;

export const BoxButtons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 30px;
`;

export const Content = styled.section`
  padding-top: 100px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  column-gap: 28px;
  row-gap: 44px;

  @media (min-width: ${breakpoints.xl}) {
    padding-top: 200px;
  }
`;

export const BoxCard = styled.div`
  &:nth-child(even) {
    margin-top: -16px;
  }
`;
