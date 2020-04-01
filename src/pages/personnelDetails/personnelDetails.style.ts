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

export const Avatar = styled.div`
  align-items: center;
  border: solid 2px ${({ theme }) => theme.lightGray};
  display: flex;
  height: 80px;
  justify-content: center;
  width: 80px;
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

export const Rank = styled(Text).attrs({
  variant: 'secondary',
})``;

export const RestName = styled(Text).attrs({
  mb: 6,
})`
  font-size: 20px;
`;

export const Title = styled(Text)<TypedComponent>`
  color: ${({ theme, type }) =>
    type === 'promotion' ? theme.primaryGreen : theme.primaryYellow};
  font-size: 20px;
`;
