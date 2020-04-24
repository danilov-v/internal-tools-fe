import React, { useEffect } from 'react';
import { Redirect, RouteComponentProps, Router } from '@reach/router';
import { useDispatch, useSelector } from 'react-redux';

import { PERSONNEL, PERSONNEL_DETAILS } from 'configs/paths';
import { requestInitialData } from 'redux/app/thunks';
import { isAppLoading, getAppError, isAppLoaded } from 'redux/app/selectors';

import { Soldiers } from 'pages/soldiers/soldiers';
import { PersonnelDetails } from 'pages/personnelDetails/personnelDetails';

import { LoadingScreen } from 'components/LoadingScreen';
import { Header } from './components/Header';
import { NotFound } from './components/NotFound';

const Main: React.FC<RouteComponentProps> = () => {
  const dispatch = useDispatch();
  const isLoaded = useSelector(isAppLoaded);
  const isLoading = useSelector(isAppLoading);
  const appError = useSelector(getAppError);

  useEffect(() => {
    dispatch(requestInitialData());
  }, [dispatch]);

  if (isLoading) {
    return <LoadingScreen />;
  }

  if (appError || !isLoaded) {
    // TODO: add error component
    return <div>Error</div>;
  }

  return (
    <>
      <Header />
      <Router>
        <NotFound default />
        <Redirect from="/" noThrow to={PERSONNEL} />
        <Soldiers path={PERSONNEL} />
        <PersonnelDetails path={`${PERSONNEL_DETAILS}/:id`} />
      </Router>
    </>
  );
};

export { Main };
