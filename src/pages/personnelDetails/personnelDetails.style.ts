import styled from 'styled-components';

import { ReactComponent as Plus } from 'assets/icons/plus.svg';
import { Row, Text } from 'components/layout';

type TypedComponent = {
  type: 'penalty' | 'promotion';
};

export const PlusIcon = styled(Plus)<TypedComponent>`
  circle,
  path {
    stroke: ${({ theme, type }) =>
      type === 'promotion' ? theme.primaryGreen : theme.primaryYellow};
  }
`;

export const Block = styled(Row).attrs({
  justify: 'space-between',
  mb: 6,
  ml: -16,
  mr: -16,
  mt: 6,
  pb: 4,
  pl: 16,
  pr: 16,
  pt: 4,
})`
  align-items: center;
  border: ${({ theme }) => `solid 1px ${theme.lightGray}`};
`;

export const Container = styled.div`
  max-width: 720px;
  margin: 80px auto;
`;

export const NoteComment = styled(Text).attrs({
  variant: 'secondary',
})`
  font-size: 12px;
  font-style: italic;
`;

export const NoteName = styled(Text).attrs({
  mb: 4,
})<TypedComponent>`
  color: ${({ theme, type }) =>
    type === 'promotion' ? theme.primaryGreen : theme.primaryYellow};
  font-size: 16px;
`;

export const Title = styled(Text)<TypedComponent>`
  color: ${({ theme, type }) =>
    type === 'promotion' ? theme.primaryGreen : theme.primaryYellow};
  font-size: 20px;
`;
