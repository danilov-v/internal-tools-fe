import styled from 'styled-components';

import { Text } from 'components/layout';

export const Label = styled(Text)`
  color: ${({ theme }) => theme.darkGray};
  font-size: 16px;
`;

export const Form = styled.form``;

export const FormHeader = styled(Text)`
  color: ${({ theme }) => theme.darkGray};
  font-size: 20px;
`;
