import styled from 'styled-components';

import { ReactComponent as Plus } from 'assets/icons/plus.svg';
import { Text } from 'components/layout';

export const PlusIcon = styled(Plus)`
  circle,
  path {
    stroke: ${({ theme }) => theme.primaryGreen};
  }
`;

export const Title = styled(Text)`
  color: ${({ theme }) => theme.primaryGreen};
  font-size: 20px;
`;
