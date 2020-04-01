import React, { ReactElement } from 'react';

import * as R from 'helpers/rank';
import captain from 'assets/ranks/captain.svg';
import lieutenant from 'assets/ranks/lieutenant.svg';
import seniorLieutenant from 'assets/ranks/senior-lieutenant.svg';

import * as S from './Avatar.style';

type AvatarProps = {
  user: {
    lastName: string;
    position: string;
    rank: string;
  };
};

const getRankImage = (rank: string): ReactElement => {
  switch (rank) {
    case R.CAPTAIN:
      return <S.AvatarImage src={captain} alt="Avatar" />;
    case R.SENIOR_LIEUTENANT:
      return <S.AvatarImage src={seniorLieutenant} alt="Avatar" />;
    case R.LIEUTENANT:
      return <S.AvatarImage src={lieutenant} alt="Avatar" />;
    default:
      return <S.AvatarImage src={lieutenant} alt="Avatar" />;
  }
};

export const Avatar: React.FC<AvatarProps> = ({ user }) => {
  return (
    <S.AvatarWrapper>
      {getRankImage(user.rank)}
      <S.AvatarCaption>
        <span>{user.position}</span>
        {user.lastName}
      </S.AvatarCaption>
    </S.AvatarWrapper>
  );
};
