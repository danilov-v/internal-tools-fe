import styled from 'styled-components';
import { Row, Text } from 'components/layout';

export const Avatar = styled(Row).attrs({
  align: 'center',
  justify: 'center',
  mb: 0,
  mt: 0,
})`
  border: solid 2px ${({ theme }) => theme.lightGray};
  height: 80px;
  width: 80px;
`;

export const Initials = styled(Text)`
  color: ${({ theme }) => theme.primaryWhite};
  font-size: 30px;
  font-weight: 600;
`;

export const LastName = styled(Text).attrs({
  mb: 6,
})`
  color: ${({ theme }) => theme.primaryWhite};
  font-size: 28px;
  font-weight: 600;
  text-transform: uppercase;
`;

export const Rank = styled(Text).attrs({
  variant: 'secondary',
})``;

export const RestName = styled(Text).attrs({
  mb: 6,
})`
  font-size: 20px;
`;
