import React, { useEffect } from 'react';
import {
  Redirect,
  RouteComponentProps,
  Router,
  useNavigate,
  useMatch,
} from '@reach/router';
import { useSelector, useDispatch } from 'react-redux';
import { requestProfile } from 'redux/profile/thunks';
import { requestRank } from 'redux/rank/thunks';
import { requestUnits } from 'redux/unit/thunks';
import {
  isAuthChecked as isAuthCheckedSelector,
  getProfileInfo,
} from 'redux/profile/selectors';
import { getUnits } from 'redux/unit/selectors';
import { getRanks } from 'redux/rank/selectors';
import { SIGN_IN, PERSONNEL, PERSONNEL_DETAILS } from 'configs/paths';

import { SignIn } from 'pages/signIn/signIn';
import { Soldiers } from 'pages/soldiers/soldiers';
import { PersonnelDetails } from 'pages/personnelDetails/personnelDetails';

import { Header } from './components/Header';
import { LoadingScreen } from './components/LoadingScreen';
import { NotFound } from './components/NotFound';

const Main: React.FC<RouteComponentProps> = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const profileInfo = useSelector(getProfileInfo);
  const isAuthChecked = useSelector(isAuthCheckedSelector);
  const units = useSelector(getUnits);
  const ranks = useSelector(getRanks);
  const isDataPreloaded = units.length > 0 && ranks.length > 0;
  const isSignInPage = useMatch(SIGN_IN);

  useEffect(() => {
    if (!isAuthChecked) {
      dispatch(requestProfile());
    }
  }, [dispatch, isAuthChecked]);

  useEffect(() => {
    if (isAuthChecked && profileInfo && !isDataPreloaded) {
      dispatch(requestRank());
      dispatch(requestUnits());
    }
  }, [dispatch, isAuthChecked, profileInfo, isDataPreloaded]);

  if (!isAuthChecked || (isAuthChecked && profileInfo && !isDataPreloaded)) {
    return <LoadingScreen />;
  }

  if (!isSignInPage && isAuthChecked && !profileInfo) {
    navigate(SIGN_IN);
    return null;
  }

  if (isSignInPage && isAuthChecked && profileInfo) {
    navigate(PERSONNEL);
    return null;
  }

  return (
    <>
      {!isSignInPage && <Header />}
      <Router>
        <NotFound default />
        <Redirect from="/" noThrow to={PERSONNEL} />
        <SignIn path={SIGN_IN} />
        <Soldiers path={PERSONNEL} />
        <PersonnelDetails path={`${PERSONNEL_DETAILS}/:id`} />
      </Router>
    </>
  );
};

export { Main };
