import styled from 'styled-components';

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
