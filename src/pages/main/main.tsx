import React, { useEffect } from 'react';
import {
  Redirect,
  RouteComponentProps,
  Router,
  useNavigate,
} from '@reach/router';
import { useSelector, useDispatch } from 'react-redux';
import { requestProfile } from 'redux/profile/thunks';
import {
  isAuthChecked as isAuthCheckedSelector,
  getProfileInfo,
} from 'redux/profile/selectors';

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

  useEffect(() => {
    if (!isAuthChecked) {
      dispatch(requestProfile());
    }
  }, [dispatch, isAuthChecked]);

  if (!isAuthChecked) {
    return <LoadingScreen />;
  }

  if (isAuthChecked && !profileInfo) {
    navigate('/sign-in');
    return null;
  }

  return (
    <>
      <Header />
      <Router>
        <NotFound default />
        <Redirect from="/" noThrow to="/personnel" />
        <Soldiers path="/personnel" />
        <PersonnelDetails path="/personnel-details/:id" />
      </Router>
    </>
  );
};

export { Main };
