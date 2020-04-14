import styled from 'styled-components';
import { DropDownButton } from 'components/Button';

export const PlatButton = styled(DropDownButton)`
  display: block;
  border: none;
  letter-spacing: 2px;
  text-transform: uppercase;
  cursor: pointer;
  margin-left: 20px;
  margin-top: 10px;
  margin-bottom: 10px;

  & span {
    margin-right: 7px;
    font-size: 18px;
  }
`;
