import React, { ReactElement } from 'react';
import * as R from 'helpers/rank';
import captain from './captain_rang.svg';
import starley from './starley_rang.svg';
import leyt from './leyt_rang.svg';

import * as S from './Avatar.styles';

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
      return <S.AvatarImage src={starley} alt="Avatar" />;
    case R.LIEUTENANT:
      return <S.AvatarImage src={leyt} alt="Avatar" />;
    default:
      return <S.AvatarImage src={leyt} alt="Avatar" />;
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
