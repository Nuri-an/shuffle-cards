import { breakpoints } from 'src/styles/breakpoints';
import styled, { css } from 'styled-components';

interface BoxProfileProps {
  disabled: boolean;
}

export const Container = styled.div`
  padding: ${({ theme }) => theme.space.inset.md}px;
  background-color: ${({ theme }) => theme.colors.neutral.light};
  border-radius: ${({ theme }) => theme.border.radius.md}px;
  border: 1px solid ${({ theme }) => theme.colors.brand.secondary};
  width: 213px;
  height: 282px;

  @media (min-width: ${breakpoints.xl}) {
    width: 320px;
    height: 423px;
  }

  @media (max-width: ${breakpoints.sm}) {
    width: 80vw;
  }
`;

export const TextCardValue = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.md}px;
  color: ${({ theme }) => theme.colors.brand.secondary};

  @media (min-width: ${breakpoints.xl}) {
    font-size: ${({ theme }) => theme.fontSize.lg}px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: ${({ theme }) => theme.space.inset.md}px;
  margin-bottom: ${({ theme }) => theme.space.inset.md}px;

  @media (min-width: ${breakpoints.xl}) {
    row-gap: ${({ theme }) => theme.space.inset.lg}px;
  }
`;

export const BoxProfile = styled.a<BoxProfileProps>`
  display: flex;
  column-gap: 5px;

  ${({ disabled }) =>
    disabled &&
    css`
      pointer-events: none;
    `}

  @media (max-width: ${breakpoints.sm}) {
    flex-wrap: wrap;
  }
`;

export const ImgMember = styled.img`
  width: 64px;
  height: auto;
  max-height: 64px;

  @media (min-width: ${breakpoints.xl}) {
    width: 90px;
    height: auto;
    max-height: 90px;
  }
`;

export const TitleMember = styled.h4`
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.sm}px;

  @media (min-width: ${breakpoints.xl}) {
    font-size: ${({ theme }) => theme.fontSize.md}px;
  }
`;

export const ProfileMember = styled.p`
  text-decoration-line: underline;
  color: ${({ theme }) => theme.colors.neutral.medium};

  @media (min-width: ${breakpoints.xl}) {
    font-size: ${({ theme }) => theme.fontSize.md}px;
  }
`;

export const ProfileLogo = styled.img`
  width: 15px;
  height: 15px;

  @media (min-width: ${breakpoints.xl}) {
    width: 30px;
    height: 30px;
  }
`;

export const DescriptionMember = styled.p`
  color: ${({ theme }) => theme.colors.neutral.medium};

  @media (min-width: ${breakpoints.xl}) {
    font-size: ${({ theme }) => theme.fontSize.md}px;
  }
`;
