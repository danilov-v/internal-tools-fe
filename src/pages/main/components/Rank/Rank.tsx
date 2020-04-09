import React, { ReactElement } from 'react';
import { useSelector } from 'react-redux';

import { getProfileInfo } from 'redux/profile/selectors';

import * as R from 'helpers/rank';

import captain from 'assets/ranks/captain.svg';
import lieutenant from 'assets/ranks/lieutenant.svg';
import seniorLieutenant from 'assets/ranks/senior-lieutenant.svg';

import * as S from './Rank.style';

const getRankImage = (rank: string): ReactElement => {
  switch (rank) {
    case R.CAPTAIN:
      return <S.RankImage src={captain} alt="Rank" />;
    case R.SENIOR_LIEUTENANT:
      return <S.RankImage src={seniorLieutenant} alt="Rank" />;
    case R.LIEUTENANT:
      return <S.RankImage src={lieutenant} alt="Rank" />;
    default:
      return <S.RankImage src={lieutenant} alt="Rank" />;
  }
};

export const Rank: React.FC = () => {
  const profile = useSelector(getProfileInfo);

  if (!profile) {
    return null;
  }

  return (
    <S.RankWrapper>
      {getRankImage('')}
      <S.RankCaption>
        {/* TODO: изменить profile.role на profile.position или что-то такое  */}
        <span>{profile.role}</span>
        {profile.lastName}
      </S.RankCaption>
    </S.RankWrapper>
  );
};
