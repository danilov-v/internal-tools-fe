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
import {
  isAuthChecked as isAuthCheckedSelector,
  getProfileInfo,
} from 'redux/profile/selectors';
import {
  SIGN_IN_PATH,
  PERSONNEL_PATH,
  PERSONNEL_DETAILS_PATH,
} from 'configs/paths';

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
  const isSignInPage = useMatch(SIGN_IN_PATH);

  useEffect(() => {
    if (!isAuthChecked) {
      dispatch(requestProfile());
    }
  }, [dispatch, isAuthChecked]);

  if (!isAuthChecked) {
    return <LoadingScreen />;
  }

  if (!isSignInPage && isAuthChecked && !profileInfo) {
    navigate(SIGN_IN_PATH);
    return null;
  }

  if (isSignInPage && isAuthChecked && profileInfo) {
    navigate(PERSONNEL_PATH);
    return null;
  }

  return (
    <>
      {!isSignInPage && <Header />}
      <Router>
        <NotFound default />
        <Redirect from="/" noThrow to={PERSONNEL_PATH} />
        <SignIn path={SIGN_IN_PATH} />
        <Soldiers path={PERSONNEL_PATH} />
        <PersonnelDetails path={PERSONNEL_DETAILS_PATH} />
      </Router>
    </>
  );
};

export { Main };
