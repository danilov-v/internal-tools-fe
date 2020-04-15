import styled from 'styled-components';
import { DropDownButton } from 'components/buttons/Button';

export const PlatButton = styled(DropDownButton)`
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-left: 20px;
  margin-top: 10px;
  margin-bottom: 10px;

  & span {
    margin-right: 7px;
    font-size: 18px;
  }
`;
