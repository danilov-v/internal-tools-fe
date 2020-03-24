import styled from 'styled-components';
import { DropDownButton } from 'components/Button';

export const SoldersList = styled.section`
  margin-top: 45px;
  padding-left: 15px;
  padding-right: 15px;
  color: #f2f2f2;
`;

export const SoldersHeader = styled.h1`
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
