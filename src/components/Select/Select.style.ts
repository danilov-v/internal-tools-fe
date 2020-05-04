import styled from 'styled-components';
import { Text } from 'components/layout/Text';

export const Container = styled.div`
  margin-right: -4px;
`;

export const Option = styled.option`
  color: ${({ theme }) => theme.darkGray};
`;

export const StyledSelect = styled.select`
  background: none;
  border: none;
  color: ${({ theme }) => theme.darkGray};
  text-align-last: right;
  width: 100%;
`;

export const ValidationError = styled(Text).attrs(() => ({
  variant: 'error',
}))`
  font-size: 12px;
`;
