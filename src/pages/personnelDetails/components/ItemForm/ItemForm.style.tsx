import styled from 'styled-components';
import { Text } from 'components/layout';

export const FormHeader = styled(Text)`
  color: ${({ theme }) => theme.darkGray};
  font-size: 20px;
`;

export const Label = styled(Text)`
  color: ${({ theme }) => theme.darkGray};
  font-size: 16px;
`;
