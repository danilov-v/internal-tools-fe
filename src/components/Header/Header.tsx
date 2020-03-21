import React, { useState } from 'react';
import { Logo } from 'components/Logo';
import { Avatar } from 'components/Avatar';
import * as S from './Header.style';

const isActive = ({ isCurrent }: any): object => {
  return { state: isCurrent ? 'active' : 'not-active' };
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
      <Logo />
      <S.NavBar expanded={isExpanded}>
        <S.NavItem>
          <S.NavLink getProps={isActive} to="/main">
            Рота
          </S.NavLink>
        </S.NavItem>
        <S.NavItem>
          <S.NavLink getProps={isActive} to="#schedule">
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
