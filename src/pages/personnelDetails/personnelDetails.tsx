import React from 'react';
import { RouteComponentProps, Redirect } from '@reach/router';

import { useSoldier } from 'helpers/hooks/apiHooks';

import { ReactComponent as CloseIcon } from 'assets/icons/close.svg';
import { ReactComponent as DownIcon } from 'assets/icons/down.svg';
import { ReactComponent as TickIcon } from 'assets/icons/tick.svg';
import { ReactComponent as UpIcon } from 'assets/icons/up.svg';
import { Accordion } from 'components/Accordion';
import { Button } from 'components/buttons/Button';
import { Column, Divider, Row, Text } from 'components/layout';
import { IconButton } from 'components/buttons/IconButton';
import * as S from './personnelDetails.style';

interface PersonnelDetailsProps extends RouteComponentProps {
  id?: string;
}

const PersonnelDetails: React.FC<PersonnelDetailsProps> = ({ id }) => {
  const [soldier] = useSoldier(Number(id) || 0);

  if (!id) {
    return <Redirect to="/personnel" />;
  }

  return (
    <S.Container>
      {soldier ? (
        <>
          <Row justify="space-between" mt={0}>
            <Column>
              <S.LastName>{soldier.lastName}</S.LastName>
              <S.RestName>
                {soldier.firstName} {soldier.middleName}
              </S.RestName>
              <S.Rank>{soldier.rankId}</S.Rank>
            </Column>
            <S.Avatar>
              <S.Initials>БД</S.Initials>
            </S.Avatar>
          </Row>

          <Divider mb={30} mt={30} />

          <Column>
            <Row justify="space-between" mt={0}>
              <Text>Дата призыва:</Text>
              <Text>{soldier.calledAt}</Text>
            </Row>
            <Row justify="space-between" mt={0}>
              <Text>Дата дембеля:</Text>
              <Text>{soldier.demobilizationAt}</Text>
            </Row>
            <Row justify="space-between" mt={0}>
              <Text>Дата рождения:</Text>
              <Text>{soldier.birthday}</Text>
            </Row>
            <Row justify="space-between" mt={0}>
              <Text>Семейное положение</Text>
              <Text>холост</Text>
            </Row>
            <Row justify="space-between" mt={0}>
              <Text>Взвод</Text>
              <Text>1</Text>
            </Row>
            <Row justify="space-between" mt={0}>
              <Text>Отделение</Text>
              <Text>1</Text>
            </Row>

            <Row justify="center" mt={24}>
              <Button onClick={() => console.log('Редактировать')}>
                Редактировать
              </Button>
            </Row>
          </Column>

          <Divider mb={30} mt={30} />

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
        </>
      ) : (
        <span>waiting for soldier...</span>
      )}
    </S.Container>
  );
};

export { PersonnelDetails };
