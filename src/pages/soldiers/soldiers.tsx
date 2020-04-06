import React from 'react';
import { RouteComponentProps } from '@reach/router';
import { SoldersList } from './components/SoldiersList';

export const Soldiers: React.FC<RouteComponentProps> = () => {
  return <SoldersList />;
};
