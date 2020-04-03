import React, { useEffect } from 'react';
import { RouteComponentProps, Router, useNavigate } from '@reach/router';
import { useSelector, useDispatch } from 'react-redux';
import { getProfile } from 'redux/profile/thunks';
import {
  isAuthChecked as isAuthCheckedSelector,
  getProfileInfo,
} from 'redux/profile/selectors';
import { Header } from 'components/Header';
import { SoldersList } from 'components/SoldersList';
import { PersonnelDetails } from 'pages/personnelDetails/personnelDetails';

import { LoadingScreen } from 'pages/main/components/LoadingScreen';
import { NotFound } from 'pages/main/components/NotFound';

const Main: React.FC<RouteComponentProps> = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const profileInfo = useSelector(getProfileInfo);
  const isAuthChecked = useSelector(isAuthCheckedSelector);

  useEffect(() => {
    if (!isAuthChecked) {
      dispatch(getProfile());
    }
  }, [dispatch, isAuthChecked]);

  if (!isAuthChecked) {
    return <LoadingScreen />;
  }

  if (isAuthChecked && !profileInfo) {
    navigate('sign-in');
    return null;
  }

  return (
    <>
      <Header />
      <Router>
        <NotFound default />
        <SoldersList path="personnel" />
        <PersonnelDetails path="personnel-details/:id" />
      </Router>
    </>
  );
};

export { Main };
