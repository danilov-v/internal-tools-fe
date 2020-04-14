import styled from 'styled-components';
import { DropDownButton } from 'components/Button';

export const DivisionButton = styled(DropDownButton)`
  display: block;
  border: none;
  letter-spacing: normal;
  text-transform: lowercase;
  cursor: pointer;
  margin-left: 30px;
  margin-top: 10px;
  margin-bottom: 10px;

  & span {
    margin-right: 5px;
    font-size: 16px;
  }
`;
