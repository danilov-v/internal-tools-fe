import React from 'react';
import { Router, RouteComponentProps } from '@reach/router';

import { Header } from 'components/Header';

const Home: React.FC<RouteComponentProps> = () => <div>Home</div>;
const Dash: React.FC<RouteComponentProps> = () => <div>Dash</div>;

const App: React.FC = () => {
  return (
    <>
      <Header test="5" />
      <Router>
        <Home path="/" />
        <Dash path="dashboard" />
      </Router>
    </>
  );
};

export { App };
