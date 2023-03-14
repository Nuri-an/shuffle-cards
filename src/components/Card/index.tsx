import React from 'react';
import { Profile } from 'src/assets';
import { PATTERN_IMAGE } from 'src/utils/constants';
import { completeNumber, isValidURL } from 'src/utils/functions/converts';
import * as S from './styles';

interface CardProps {
  value: number;
  image: string;
  title: string;
  profileUrl: string;
  description: string;
}

const Card: React.FC<CardProps> = ({
  value,
  image,
  title,
  profileUrl,
  description,
}) => {
  const profile = isValidURL(profileUrl) ? profileUrl.split('/')[3] : undefined;

  return (
    <S.Container data-testid="card">
      <S.TextCardValue data-testid="card-value">
        {completeNumber(value)}
      </S.TextCardValue>
      <S.Content>
        <S.ImgMember
          src={isValidURL(image) ? image : PATTERN_IMAGE}
          data-testid="card-img"
        />
        <S.TitleMember data-testid="card-title">{title}</S.TitleMember>
        <S.BoxProfile
          href={profileUrl}
          target="_blank"
          disabled={!profile}
          data-testid="card-container-link"
        >
          <S.ProfileLogo src={Profile} data-testid="card-profile-logo" />
          <S.ProfileMember data-testid="card-username">
            /{profile || '_'}
          </S.ProfileMember>
        </S.BoxProfile>
        <S.DescriptionMember data-testid="card-description">
          {description || '___'}
        </S.DescriptionMember>
      </S.Content>
    </S.Container>
  );
};

export default Card;
