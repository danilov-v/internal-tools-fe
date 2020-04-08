import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { requestLogout } from 'redux/profile/thunks';

import { Logo } from 'components/Logo';
import { Rank } from 'pages/main/components/Rank';

import ProfileImage from 'assets/icons/profile.svg';
import SettingsImage from 'assets/icons/settings.svg';
import LogoutImage from 'assets/icons/logout.svg';

import * as S from './Header.style';

type IsActivePropsType = {
  isPartiallyCurrent: boolean;
};

const isActive = ({ isPartiallyCurrent }: IsActivePropsType): object => {
  return { state: isPartiallyCurrent ? 'active' : 'not-active' };
};

const Header: React.FC = () => {
  const dispatch = useDispatch();
  const [isExpanded, setExpanded] = useState(false);
  const toggleExpanded = (): void => setExpanded(!isExpanded);

  const profileHandler = (): void => {};

  const settingsHandler = (): void => {};

  const logoutHandler = (): void => {
    dispatch(requestLogout());
  };

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
      <S.UserRank>
        <Rank />
      </S.UserRank>
      <S.Actions>
        <S.Action onClick={profileHandler}>
          <S.ActionIcon src={ProfileImage} alt="profile image" />
        </S.Action>
        <S.Action onClick={settingsHandler}>
          <S.ActionIcon src={SettingsImage} alt="setting image" />
        </S.Action>
        <S.Action onClick={logoutHandler}>
          <S.ActionIcon src={LogoutImage} alt="logout image" />
        </S.Action>
      </S.Actions>
      <S.Humburger expanded={isExpanded} onClick={toggleExpanded}>
        <div />
        <div />
        <div />
      </S.Humburger>
    </S.Header>
  );
};

export { Header };
