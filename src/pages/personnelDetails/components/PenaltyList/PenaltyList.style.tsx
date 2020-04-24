import styled from 'styled-components';

import { ReactComponent as Plus } from 'assets/icons/plus.svg';
import { Text } from 'components/layout';

export const PlusIcon = styled(Plus)`
  circle,
  path {
    stroke: ${({ theme }) => theme.primaryYellow};
  }
`;

export const Title = styled(Text)`
  color: ${({ theme }) => theme.primaryYellow};
  font-size: 20px;
`;
