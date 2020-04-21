import styled from 'styled-components';
import { Text } from 'components/layout';

export const Avatar = styled.div`
  align-items: center;
  background-color: ${({ theme }) => theme.primaryGray};
  display: flex;
  height: 90px;
  justify-content: center;
  width: 80px;
`;

export const Form = styled.form``;

export const FormHeader = styled(Text)`
  color: ${({ theme }) => theme.darkGray};
  font-size: 20px;
`;

export const Initials = styled(Text)`
  color: ${({ theme }) => theme.lightGray};
  font-size: 40px;
  font-weight: 500;
`;

export const Label = styled(Text)`
  color: ${({ theme }) => theme.darkGray};
  font-size: 16px;
`;

export const SubText = styled(Text)`
  color: ${({ theme }) => theme.primaryGray};
  font-size: 14px;
  font-style: italic;
`;
