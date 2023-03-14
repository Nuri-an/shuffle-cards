import React, { useCallback, useEffect, useState } from 'react';
import { MemberService } from 'src/api';
import { Button, Card, Header } from 'src/components';
import { shuffle } from 'src/utils/functions/converts';
import { useTheme } from 'styled-components';
import * as S from './styles';

type MemberListType = {
  randonValue: number;
} & MemberType;

const ranCardValues = shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) as number[];

const Cards: React.FC = () => {
  const [allMembers, setAllMembers] = useState<MemberType[]>();
  const [members, setMembers] = useState<MemberListType[]>();
  const [limitList, setLimitList] = useState<number>(5);
  const { colors } = useTheme();

  const disableAddButton = !allMembers || limitList >= allMembers.length;

  const fetchMembers = useCallback(async () => {
    try {
      const { data } = await MemberService.getMembers(
        'sustainoss',
        'organizations',
        8,
      );
      setAllMembers(data);
      const listMembers = [] as MemberListType[];
      data.slice(0, limitList).forEach((member, index) => {
        listMembers.push({ ...member, randonValue: ranCardValues[index] });
      });
      setMembers(listMembers);
    } catch (error) {
      throw new Error('Error fetching members');
    }
  }, [members, limitList]);

  const addCard = () => {
    if (disableAddButton) return;
    const listMembers = members as MemberListType[];
    allMembers.slice(limitList, limitList + 1).forEach((member) => {
      listMembers.push({
        ...member,
        randonValue: ranCardValues[limitList],
      });
    });
    setLimitList((prevState) => prevState + 1);
    setMembers(listMembers);
    setTimeout(
      () =>
        window.scrollTo({
          top: document.body.scrollHeight,
          left: 0,
          behavior: 'smooth',
        }),
      500,
    );
  };

  const shuffleCards = () =>
    setMembers((prevState) => (prevState ? shuffle(prevState.slice()) : []));

  useEffect(() => {
    setMembers([]);
    fetchMembers();
  }, []);

  return (
    <div data-testid="div-cards">
      <Header />
      <S.Container data-testid="container-cards">
        <S.BoxButtons data-testid="container-buttons">
          <Button
            bgColor={colors.brand.primary}
            onClick={addCard}
            disable={disableAddButton}
          >
            Puxar mais uma carta
          </Button>
          <Button bgColor={colors.brand.secondary} onClick={shuffleCards}>
            Embaralhar
          </Button>
        </S.BoxButtons>
        <S.Content data-testid="content-cards">
          {members?.map((member) => (
            <S.BoxCard
              data-testid="box-card"
              id={`${member.MemberId}`}
              key={member.MemberId}
            >
              <Card
                value={member.randonValue}
                image={member.image}
                title={member.name}
                description={member.description}
                profileUrl={member.profile}
              />
            </S.BoxCard>
          ))}
        </S.Content>
      </S.Container>
    </div>
  );
};

export default Cards;
