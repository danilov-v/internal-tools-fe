import React, { useState } from 'react';

import { Logo } from 'components/Logo';
import { Avatar } from 'pages/main/components/Avatar';
import * as S from './Header.style';

type IsActivePropsType = {
  isPartiallyCurrent: boolean;
};

const isActive = ({ isPartiallyCurrent }: IsActivePropsType): object => {
  return { state: isPartiallyCurrent ? 'active' : 'not-active' };
};

const testUser = {
  lastName: 'Стороженко',
  rank: 'captain',
  position: 'Командир роты',
};

const Header: React.FC<{}> = () => {
  const [isExpanded, setExpanded] = useState(false);
  const toggleExpanded = (): void => setExpanded(!isExpanded);

  return (
    <S.Header>
      <S.Logo>
        <Logo />
      </S.Logo>
      <S.NavBar expanded={isExpanded}>
        <S.NavItem>
          <S.NavLink getProps={isActive} to="/personnel">
            Рота
          </S.NavLink>
        </S.NavItem>
        <S.NavItem>
          <S.NavLink getProps={isActive} to="/schedule">
            График
          </S.NavLink>
        </S.NavItem>
      </S.NavBar>
      <S.UserAvatar>
        <Avatar user={testUser} />
      </S.UserAvatar>
      <S.Humburger expanded={isExpanded} onClick={toggleExpanded}>
        <div />
        <div />
        <div />
      </S.Humburger>
    </S.Header>
  );
};

export { Header };
