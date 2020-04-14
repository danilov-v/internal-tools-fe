import styled from 'styled-components';
import { Link } from '@reach/router';

export const SoldiersTable = styled.div``;

export const SoldiersTableItem = styled.div`
  display: grid;
  grid-template-columns: 30px 320px 80px 80px;
  margin-bottom: 12px;
`;

export const SoldierNumber = styled.span`
  opacity: 0.3;
`;

export const SoldierName = styled(Link)`
  text-decoration: none;
  color: #f3f3f3;

  &:visited {
    color: #f3f3f3;
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
