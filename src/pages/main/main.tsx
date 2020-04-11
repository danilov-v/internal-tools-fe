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
  const isSignInPage = useMatch(SIGN_IN);

  useEffect(() => {
    if (!isAuthChecked) {
      dispatch(requestProfile());
    }
  }, [dispatch, isAuthChecked]);

  if (!isAuthChecked) {
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
