import styled from 'styled-components';

type InputProps = {
  isValid?: boolean;
  marginBottom?: number;
};

export const LoginForm = styled.form`
  text-align: center;
`;

export const InputField = styled.input<InputProps>`
  background-color: transparent;
  border: 0;
  border-bottom: ${props =>
    `2px solid ${props.isValid ? '#ccccccff' : '#ff0000'}`};
  color: #ccccccff;
  font-size: 22px;
  margin-bottom: ${props => `${props.marginBottom || 48}px`};
  outline: none;
  text-align: center;
  font-weight: 300;
  padding: 8px 0;
`;

export const SubmitButton = styled.button`
  color: #ccccccff;
  background-color: transparent;
  padding: 12px;
  border-radius: 4px;
  border: 1px solid #ccccccff;
  text-transform: uppercase;
  font-weight: 300;
  font-size: 18px;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;