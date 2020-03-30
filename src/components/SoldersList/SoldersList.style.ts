import styled from 'styled-components';
import { DropDownButton, PlusButton } from 'components/Button';
import { Link } from '@reach/router';

export const SoldiersList = styled.section`
  margin-top: 45px;
  padding-left: 15px;
  padding-right: 15px;
  color: #f2f2f2;
`;

export const SoldiersHeader = styled.h1`
  font-size: 20px;
  color: #f2f2f2;
  margin-bottom: 50px;
`;

export const PlatButton = styled(DropDownButton)`
  display: block;
  margin: 20px 20px;
  border: none;
  letter-spacing: 2px;
  text-transform: uppercase;
  cursor: pointer;

  & span {
    margin-right: 7px;
    font-size: 18px;
  }
`;

export const DivisionButton = styled(PlatButton)`
  color: #8f8f8f;
  text-transform: lowercase;
  letter-spacing: normal;

  & span {
    margin-right: 5px;
    font-size: 16px;
  }
`;

export const SoldiersTable = styled.div``;

export const SoldiersTableItem = styled.div`
  display: grid;
  grid-template-columns: 30px 250px 80px 80px;
  margin-bottom: 20px;
`;

export const SoldierNumber = styled.span`
  opacity: 0.3;
`;

export const SoldierName = styled(Link)`
  text-decoration: none;

  &:visited {
    color: #ffffff;
  }
`;

export const SoldierProms = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  & span:hover {
    color: #52b513;
    cursor: pointer;
  }
`;

export const SoldierPenalties = styled(SoldierProms)`
  margin-left: 30px;
  & span:hover {
    color: #ffd860;
  }
`;

export const NoSoldiersText = styled.div`
  font-size: 18px;
  color: #b1b1b1;
`;

export const AddSoldierContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
`;

export const AddSoldierText = styled.p`
  font-size: 18px;
  color: #7c7c7c;
`;

export const AddSoldierButton = styled(PlusButton).attrs(props => ({
  color: props.color || '#808080',
}))``;
