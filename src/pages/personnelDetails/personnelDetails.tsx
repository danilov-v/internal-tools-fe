import React, { useEffect } from 'react';
import { RouteComponentProps, useParams } from '@reach/router';
import { useDispatch } from 'react-redux';

// helpers
import { useDialog } from 'helpers/hooks/uiHooks';
// actions
import { purge } from 'redux/personnel-details/slice';
// thunks
import { requestPersonnelDetails } from 'redux/personnel-details/thunks';
// assets
import { ReactComponent as CloseIcon } from 'assets/icons/close.svg';
import { ReactComponent as DownIcon } from 'assets/icons/down.svg';
import { ReactComponent as TickIcon } from 'assets/icons/tick.svg';
import { ReactComponent as UpIcon } from 'assets/icons/up.svg';
// components
import { Dialog } from 'components/dialogs/Dialog';
import { PersonnelForm } from 'components/PersonnelForm';
import { Accordion } from 'components/Accordion';
import { Button } from 'components/buttons/Button';
import { Column, Row } from 'components/layout';
import { IconButton } from 'components/buttons/IconButton';

import { PersonnelInfo } from './components/PersonnelInfo';

import * as S from './personnelDetails.style';

const PersonnelDetails: React.FC<RouteComponentProps> = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const [isOpen, toggleDialog] = useDialog();

  useEffect(() => {
    dispatch(requestPersonnelDetails(params.id));

    return () => {
      dispatch(purge());
    };
  }, [params.id, dispatch]);

  return (
    <S.Container>
      <>
        <PersonnelInfo onToggleDialog={toggleDialog} />

        <Column>
          <Row>
            <S.Title type="promotion">Поощрения:</S.Title>
          </Row>
          <S.Block>
            <Column>
              <S.NoteName type="promotion">Увольнение на 2 суток</S.NoteName>
              <S.NoteComment>
                За доблестное трудолюбие и смелость, проявленные при уборке
                третьего очка в казарме
              </S.NoteComment>
            </Column>
            <Row>
              <IconButton
                icon={<TickIcon />}
                onClick={() => console.log('Закрыть')}
              />
              <IconButton
                icon={<CloseIcon />}
                onClick={() => console.log('Удалить')}
              />
            </Row>
          </S.Block>
          <S.Block>
            <Column>
              <S.NoteName type="promotion">Увольнение на 3 суток</S.NoteName>
              <S.NoteComment>
                За выступление на концерте с песней &quot;Без веры нет
                патриотизма&quot;
              </S.NoteComment>
            </Column>
            <Row>
              <IconButton
                icon={<TickIcon />}
                onClick={() => console.log('Закрыть')}
              />
              <IconButton
                icon={<CloseIcon />}
                onClick={() => console.log('Удалить')}
              />
            </Row>
          </S.Block>
          <Row>
            <Button
              color="primary"
              onClick={() => console.log('Добавить поощрение')}
              startIcon={<S.PlusIcon type="promotion" />}
              variant="text"
            >
              Добавить поощрение
            </Button>
          </Row>
        </Column>

        <Column>
          <Row>
            <S.Title type="penalty">Взыскания:</S.Title>
          </Row>
          <S.Block>
            <Column>
              <S.NoteName type="penalty">Наряд вне очереди</S.NoteName>
              <S.NoteComment>Опоздал в строй</S.NoteComment>
            </Column>
            <Row>
              <IconButton
                icon={<TickIcon />}
                onClick={() => console.log('Закрыть')}
              />
              <IconButton
                icon={<CloseIcon />}
                onClick={() => console.log('Удалить')}
              />
            </Row>
          </S.Block>
          <Row>
            <Button
              color="yellow"
              onClick={() => console.log('Добавить взыскание')}
              startIcon={<S.PlusIcon type="penalty" />}
              variant="text"
            >
              Добавить взыскание
            </Button>
          </Row>
        </Column>

        <Accordion
          isExpanded
          render={(toggle, isExpanded) => (
            <Button
              endIcon={isExpanded ? <UpIcon /> : <DownIcon />}
              onClick={toggle}
              variant="text"
            >
              Архив
            </Button>
          )}
        >
          <S.NoteComment mb={10} mt={10}>
            Здесь будут отображаться реализованные поощрения и взыскания
            военнослужащего
          </S.NoteComment>
        </Accordion>

        <Row justify="center" mt={24}>
          <Button
            color="secondary"
            onClick={() => console.log('Удалить солдата')}
          >
            Удалить солдата
          </Button>
        </Row>

        <Dialog isOpened={isOpen}>
          <PersonnelForm onFormClose={toggleDialog} isEdit />
        </Dialog>
      </>
    </S.Container>
  );
};

export { PersonnelDetails };
