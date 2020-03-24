import React, { ReactElement } from 'react';
import { RouteComponentProps } from '@reach/router';
import { Accordion } from 'components/Accordion';

import * as S from './SoldersList.style';

export const SoldersList: React.FC<RouteComponentProps> = () => {
  return (
    <S.SoldersList>
      <S.SoldersHeader>Рота информационных технологий</S.SoldersHeader>
      <Accordion
        isExpanded={false}
        render={(toggle: Function, isExpanded: boolean): ReactElement => (
          <S.PlatButton expanded={isExpanded} onClick={(): void => toggle()}>
            <span>{1}</span>
            взвод
          </S.PlatButton>
        )}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
        corrupti cumque voluptatibus ducimus possimus error.
        <Accordion
          isExpanded={false}
          render={(toggle: Function, isExpanded: boolean): ReactElement => (
            <S.DivisionButton
              expanded={isExpanded}
              onClick={(): void => toggle()}
            >
              <span>{1}</span>
              Отделение
            </S.DivisionButton>
          )}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
          corrupti cumque voluptatibus ducimus possimus error.
        </Accordion>
      </Accordion>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
      corrupti cumque voluptatibus ducimus possimus error.
    </S.SoldersList>
  );
};
