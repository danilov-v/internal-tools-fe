import styled from 'styled-components';
import { DropDownButton } from 'components/buttons/DropDownButton';

export const DivisionButton = styled(DropDownButton)`
  text-transform: lowercase;
  margin-left: 30px;
  margin-top: 10px;
  margin-bottom: 10px;
  opacity: 0.5;

  & span {
    margin-right: 5px;
    font-size: 16px;
  }
`;
