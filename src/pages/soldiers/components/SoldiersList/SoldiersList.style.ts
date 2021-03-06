import styled from 'styled-components';
import { ReactComponent as Plus } from 'assets/icons/plus.svg';
import { Button } from 'components/buttons/Button';

export const PlusIcon = styled(Plus)`
  circle,
  path {
    stroke: ${({ theme }) => theme.primaryGray};
  }
`;

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

export const NoSoldiersText = styled.div`
  font-size: 18px;
  color: #b1b1b1;
`;

export const AddSoldierContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const AddSoldierText = styled.p`
  font-size: 18px;
  color: #7c7c7c;
`;

export const AddSoldierButton = styled(Button)`
  opacity: 0.5;
`;
