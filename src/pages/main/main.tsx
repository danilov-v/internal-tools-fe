import React, { useEffect } from 'react';
import { Redirect, RouteComponentProps, Router } from '@reach/router';
import { useDispatch } from 'react-redux';

import { PERSONNEL, PERSONNEL_DETAILS } from 'configs/paths';
import { requestRank } from 'redux/rank/thunks';
import { requestUnits } from 'redux/unit/thunks';
import { Soldiers } from 'pages/soldiers/soldiers';
import { PersonnelDetails } from 'pages/personnelDetails/personnelDetails';

import { Header } from './components/Header';
import { NotFound } from './components/NotFound';

const Main: React.FC<RouteComponentProps> = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestRank());
    dispatch(requestUnits());
  }, [dispatch]);

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
